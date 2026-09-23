// Local Docusaurus plugin — makes the docs consumable by agents (t08).
// postBuild: writes llms.txt (page index, one-line summaries), llms-full.txt
// (all pages concatenated), and raw Markdown copies under /md/<id>.md so a
// per-page "copy as Markdown" button has something to fetch.
const fs = require('node:fs');
const path = require('node:path');

function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return {fm: {}, body: src};
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (/^\s/.test(line)) continue; // YAML continuation/nested lines — not keys
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^["']|["']$/g, '').trim();
  }
  return {fm, body: src.slice(m[0].length).trim()};
}

// Clean an MDX source body for plain-Markdown consumption: drop import lines
// and a leading H1 that just repeats the frontmatter title.
function cleanBody(body, title) {
  let out = body
    .split(/\r?\n/)
    .filter((l) => !/^import\s.+from\s+['"].*['"];?\s*$/.test(l.trim()))
    .join('\n')
    .trim();
  const h1 = out.match(/^#\s+(.+)\r?\n?/);
  if (h1 && h1[1].trim() === title) out = out.slice(h1[0].length).trim();
  return out;
}

// Sidebar order (mirrors sidebars.ts — keep in sync).
const DOC_ORDER = [
  'intro',
  'getting-started',
  'pipeline',
  'skills/using-waypower',
  'skills/design-interview',
  'skills/tracer-plan',
  'skills/seam-design',
  'skills/seam-driven-tdd',
  'skills/hypothesis-debugging',
  'skills/domain-glossary',
  'skills/completion-gate',
  'skills/dual-axis-review',
  'skills/waymap',
  'skills/finish-handoff',
  'skills/deep-research',
  'skills/authoring-skills',
];

function readDocs(siteDir) {
  const docsDir = path.join(siteDir, 'docs');
  const docs = DOC_ORDER.map((id) => {
    for (const ext of ['.mdx', '.md']) {
      const file = path.join(docsDir, id + ext);
      if (fs.existsSync(file)) {
        const {fm, body} = parseFrontmatter(fs.readFileSync(file, 'utf8'));
        return {id, title: fm.title || id, description: fm.description || '', body};
      }
    }
    throw new Error(`llms plugin: doc not found: ${id}`);
  });
  // Guard the hand-synced order in the other direction too: a doc on disk
  // missing from DOC_ORDER must fail the build, not silently drop out.
  const walk = (dir, prefix = '') =>
    fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name), `${prefix}${e.name}/`) : [`${prefix}${e.name}`],
    );
  const onDisk = walk(docsDir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ''));
  const missing = onDisk.filter((id) => !DOC_ORDER.includes(id));
  if (missing.length) {
    throw new Error(`llms plugin: docs on disk missing from DOC_ORDER: ${missing.join(', ')}`);
  }
  return docs;
}

function readBlog(siteDir) {
  const blogDir = path.join(siteDir, 'blog');
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .sort()
    .map((file) => {
      const {fm, body} = parseFrontmatter(fs.readFileSync(path.join(blogDir, file), 'utf8'));
      const firstPara = body
        .split(/\r?\n\r?\n/)
        .map((p) => p.replace(/\{[^}]*\}/g, '').replace(/\s+/g, ' ').trim())
        .find((p) => p && !p.startsWith('#') && !p.startsWith('!['));
      const summary0 = fm.description || firstPara || '';
      const summary = summary0.length > 160 ? `${summary0.slice(0, 157).trimEnd()}…` : summary0;
      return {slug: fm.slug || file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx?$/, ''), title: fm.title || file, summary};
    });
}

module.exports = function llmsPlugin() {
  return {
    name: 'waypower-llms',

    async postBuild({siteDir, outDir, siteConfig}) {
      const base = `${siteConfig.url.replace(/\/$/, '')}${siteConfig.baseUrl}`;
      const docs = readDocs(siteDir);
      const posts = readBlog(siteDir);

      // Raw markdown copies for the copy-as-Markdown affordance.
      for (const doc of docs) {
        const target = path.join(outDir, 'md', `${doc.id}.md`);
        fs.mkdirSync(path.dirname(target), {recursive: true});
        const header = `# ${doc.title}\n\n> ${doc.description}\n> Source: ${base}docs/${doc.id}\n\n`;
        fs.writeFileSync(target, header + cleanBody(doc.body, doc.title) + '\n');
      }

      const plainDocs = docs.filter((d) => !d.id.startsWith('skills/'));
      const skillDocs = docs.filter((d) => d.id.startsWith('skills/'));
      const line = (title, url, desc) => `- [${title}](${url})${desc ? `: ${desc}` : ''}`;

      const llmsTxt = [
        '# waypower',
        '',
        '> 13 pressure-tested agent skills that teach your coding agent how to work — a complete idea-to-ship pipeline: interviewed design, tracer-bullet plans, enforced TDD, evidence-gated completion.',
        '',
        `Full text of every docs page: ${base}llms-full.txt — raw Markdown per page under ${base}md/.`,
        '',
        '## Docs',
        '',
        ...plainDocs.map((d) => line(d.title, `${base}md/${d.id}.md`, d.description)),
        '',
        '## Skills reference',
        '',
        ...skillDocs.map((d) => line(d.title, `${base}md/${d.id}.md`, d.description)),
        '',
        '## Blog',
        '',
        ...posts.map((p) => line(p.title, `${base}blog/${p.slug}`, p.summary)),
        '',
        '## Optional',
        '',
        line('Skills pack source (evals ship with every skill)', 'https://github.com/mohmaedeslam00116/waypower', ''),
        line('Install via skills.sh', 'https://skills.sh/mohmaedeslam00116/waypower', ''),
        '',
      ].join('\n');
      fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsTxt);

      const full = docs
        .map((d) => `# ${d.title}\n\nSource: ${base}docs/${d.id}\n\n${cleanBody(d.body, d.title)}`)
        .join('\n\n---\n\n');
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), full + '\n');

      console.log(`[llms] wrote llms.txt, llms-full.txt, ${docs.length} raw pages under /md/`);
    },
  };
};