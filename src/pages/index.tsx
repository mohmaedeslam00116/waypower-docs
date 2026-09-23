import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const INSTALL = 'npx skills add mohmaedeslam00116/waypower --all -g --copy';

const STAGES = [
  ['IDEA', 'design-interview'],
  ['PLAN', 'tracer-plan'],
  ['BUILD', 'seam-driven-tdd'],
  ['VERIFY', 'completion-gate'],
  ['REVIEW', 'dual-axis-review'],
  ['SHIP', 'finish-handoff'],
] as const;

const PROCESS_SKILLS: [string, string][] = [
  ['design-interview', 'No code from a vague brief — interviews you to an approved spec'],
  ['tracer-plan', 'Spec → tracer-bullet tickets, each leaving the system working'],
  ['seam-design', 'Deep-module vocabulary; decides where the interfaces live'],
  ['seam-driven-tdd', 'Iron Law TDD: verified RED before GREEN, at confirmed seams'],
  ['hypothesis-debugging', 'Ranked, falsifiable hypotheses — never guess-and-check'],
  ['domain-glossary', 'One word per concept; owns CONTEXT.md and ADRs'],
  ['completion-gate', 'Evidence before assertions — "done" means verified'],
  ['dual-axis-review', 'Two review agents per diff: Standards + Spec'],
];

const TOOL_SKILLS: [string, string][] = [
  ['waymap', 'Chart huge, foggy efforts into decision tickets'],
  ['finish-handoff', 'Merge, clean up, and hand the session off warm'],
  ['deep-research', 'Primary-source answers, committed to your repo'],
  ['authoring-skills', 'TDD for skills — build and pressure-test your own'],
];

function SkillCard({name, blurb, kind}: {name: string; blurb: string; kind: string}) {
  return (
    <Link to={`/docs/skills/${name}`} className={styles.card}>
      <span className={`${styles.chip} ${styles[`chip_${kind}`]}`}>{kind}</span>
      <span className={styles.cardName}>{name}</span>
      <span className={styles.cardBlurb}>{blurb}</span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout title="Teach your agent how to work" description="13 pressure-tested agent skills forming a complete idea-to-ship pipeline for Claude Code.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>waypower · 13 agent skills · MIT</p>
          <Heading as="h1" className={styles.h1}>
            Your agent already knows how to code.<br />
            Teach it how to <em>work</em>.
          </Heading>
          <p className={styles.lede}>
            waypower gives your coding agent a complete idea-to-ship pipeline:
            interviewed design, tracer-bullet plans, enforced TDD, evidence-gated
            completion, dual review — with you approving the decisions that matter.
          </p>
          <div className={styles.install}>
            <CodeBlock language="bash">{INSTALL}</CodeBlock>
          </div>
          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} to="/docs/intro">Get started</Link>
            <Link className={styles.ctaGhost} to="https://github.com/mohmaedeslam00116/waypower">GitHub →</Link>
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.h2}>One pipeline, not a bag of tricks</Heading>
          <div className={styles.strip}>
            {STAGES.map(([stage, skill], i) => (
              <span key={stage} className={styles.stage}>
                <span className={styles.stageName}>{stage}</span>
                <span className={styles.stageSkill}>{skill}</span>
                {i < STAGES.length - 1 && <span className={styles.arrow}>→</span>}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.h2}>The skills</Heading>
          <p className={styles.sectionLede}>
            One orchestrator routes every task. Eight process skills fire on their
            triggers. Four tools run when you call them by name.
          </p>
          <div className={styles.grid}>
            <SkillCard name="using-waypower" kind="orchestrator"
              blurb="Always active — routes every task to the right process skill" />
            {PROCESS_SKILLS.map(([n, b]) => <SkillCard key={n} name={n} blurb={b} kind="process" />)}
            {TOOL_SKILLS.map(([n, b]) => <SkillCard key={n} name={n} blurb={b} kind="tool" />)}
          </div>
        </section>

        <section className={styles.proofBand}>
          <div className={styles.proof}>
            <span className={styles.proofNum}>12/13</span>
            <span className={styles.proofText}>skills discriminate in paired baseline evals — graded before release, not after</span>
          </div>
          <div className={styles.proof}>
            <span className={styles.proofNum}>0 alerts</span>
            <span className={styles.proofText}>security-audited on install — Safe, Low Risk</span>
          </div>
          <div className={styles.proof}>
            <span className={styles.proofNum}>MIT</span>
            <span className={styles.proofText}>open source, evals shipped with every skill</span>
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.h2}>Built with its own medicine</Heading>
          <p className={styles.sectionLede}>
            This site was designed and shipped through the waypower pipeline —
            the skills documented here built the pages you're reading.
          </p>
          <Link className={styles.ctaGhost} to="/blog/building-these-docs-with-waypower">
            Read the dogfooding story →
          </Link>
        </section>
      </main>
    </Layout>
  );
}
