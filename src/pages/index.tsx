import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const INSTALL_CMD = 'npx skills add mohmaedeslam00116/waypower --all -g --copy';

type SkillType = 'orchestrator' | 'process' | 'tool';

type Skill = {
  n: string;
  name: string;
  type: SkillType;
  line: string;
};

const SKILLS: Skill[] = [
  {n: '01', name: 'using-waypower', type: 'orchestrator', line: 'Routes every task to the right discipline — before doing anything.'},
  {n: '02', name: 'design-interview', type: 'process', line: 'No code from a vague brief; interviews you to an approved spec.'},
  {n: '03', name: 'tracer-plan', type: 'process', line: 'The thinnest end-to-end slice first, then layers.'},
  {n: '04', name: 'seam-design', type: 'process', line: 'Module seams and contracts before implementation.'},
  {n: '05', name: 'seam-driven-tdd', type: 'process', line: 'Verified RED before GREEN, at confirmed seams.'},
  {n: '06', name: 'hypothesis-debugging', type: 'process', line: 'Falsifiable hypotheses, ranked — never guess-and-check.'},
  {n: '07', name: 'domain-glossary', type: 'process', line: 'One word per concept; owns CONTEXT.md and ADRs.'},
  {n: '08', name: 'completion-gate', type: 'process', line: '“Done” is a claim that needs evidence.'},
  {n: '09', name: 'dual-axis-review', type: 'process', line: 'Two reviewers per diff: standards and spec fitness.'},
  {n: '10', name: 'waymap', type: 'tool', line: 'Charts big, foggy efforts into a decision map.'},
  {n: '11', name: 'finish-handoff', type: 'tool', line: 'Finishes branches cleanly; hands the session off warm.'},
  {n: '12', name: 'deep-research', type: 'tool', line: 'Primary-source answers, cited, committed to your repo.'},
  {n: '13', name: 'authoring-skills', type: 'tool', line: 'TDD for skills — build and pressure-test your own.'},
];

const GATES = [
  {n: '1', name: 'design-interview', q: 'What are we really building?'},
  {n: '2', name: 'tracer-plan', q: 'What is the thinnest slice?'},
  {n: '3', name: 'seam-driven-tdd', q: 'Is the RED verified?'},
  {n: '4', name: 'completion-gate', q: 'Where is the evidence?'},
  {n: '5', name: 'dual-axis-review', q: 'Correct — and fitting?'},
  {n: '6', name: 'finish-handoff', q: 'Is the handoff warm?'},
];

const TRANSCRIPT: {glyph: 'you' | 'wp' | 'gate' | 'ok'; text: React.ReactNode}[] = [
  {glyph: 'you', text: '“Build a docs site for the pack. New repo, our own skills.”'},
  {glyph: 'wp', text: <>Using <b>design-interview</b> — vague brief detected</>},
  {glyph: 'gate', text: '2 rounds · register, voice, brand → spec approved'},
  {glyph: 'wp', text: <>Using <b>tracer-plan</b> — slicing to shippable tickets</>},
  {glyph: 'gate', text: 'config → theme → content → landing → blog → deploy'},
  {glyph: 'wp', text: <>Using <b>completion-gate</b> — evidence required</>},
  {glyph: 'gate', text: 'build green · 30 pages · 0 broken links'},
  {glyph: 'ok', text: 'PASS — pushed, deployed, live'},
];

function SpecLabel({children, onDark}: {children: React.ReactNode; onDark?: boolean}) {
  return (
    <div className={onDark ? styles.specLabelDark : styles.specLabel}>{children}</div>
  );
}

function Console() {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — command stays visible */
    }
  };
  return (
    <div className={styles.console}>
      <span className={styles.consolePrompt}>$</span>
      <code className={styles.consoleCmd}>{INSTALL_CMD}</code>
      <button
        type="button"
        className={styles.copyBtn}
        onClick={copy}
        aria-label="Copy install command">
        {copied ? 'copied ✓' : 'copy'}
      </button>
    </div>
  );
}

function Transcript() {
  return (
    <div className={styles.transcript} role="log" aria-label="Example waypower session transcript">
      <div className={styles.transcriptBar}>
        <span className={styles.transcriptDot} />
        <span>session — agent + waypower</span>
      </div>
      <div className={styles.transcriptBody}>
        {TRANSCRIPT.map((l, i) => (
          <div
            key={i}
            className={`${styles.tLine} ${styles[`t_${l.glyph}`]}`}
            style={{animationDelay: `${0.15 + i * 0.09}s`}}>
            <span className={styles.tGlyph}>
              {l.glyph === 'you' ? '▸' : l.glyph === 'wp' ? '✳' : l.glyph === 'ok' ? '✓' : '·'}
            </span>
            <span>{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


const STATS = [
  {v: '12/13', l: 'skills discriminate in paired baseline-vs-skill evals'},
  {v: '0', l: 'security alerts — audited on install'},
  {v: '13', l: 'skills, one pipeline, one orchestrator'},
  {v: 'MIT', l: 'open source — evals ship with every skill'},
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <SpecLabel onDark>AGENT SKILLS / 13</SpecLabel>
          <h1 className={styles.heroTitle}>
            Your agent already knows how to code.{' '}
            <span className={styles.heroAccent}>Teach it how to work.</span>
          </h1>
          <p className={styles.heroSub}>
            waypower is 13 pressure-tested skills that hand your coding agent a complete
            idea-to-ship pipeline — interviewed design, tracer-bullet plans, enforced TDD,
            evidence-gated completion — with you approving the decisions that matter.
          </p>
          <Console />
          <div className={styles.heroCtas}>
            <Link className="button button--primary button--lg" to="/docs/getting-started">
              Get started
            </Link>
            <Link className={`button button--lg ${styles.ghostBtn}`} href="https://github.com/mohmaedeslam00116/waypower">
              GitHub →
            </Link>
          </div>
        </div>
        <Transcript />
      </div>
    </header>
  );
}

function StatsStrip() {
  return (
    <section className={styles.stats} aria-label="Proof points">
      <div className={styles.statsInner}>
        {STATS.map((s) => (
          <div key={s.v + s.l} className={styles.statCell}>
            <div className={styles.statValue}>{s.v}</div>
            <div className={styles.statLabel}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pipeline() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <SpecLabel>PIPELINE / GATES</SpecLabel>
        <h2 className={styles.sectionTitle}>One pipeline, not a bag of tricks</h2>
        <p className={styles.sectionLead}>
          Six gates. Each one asks a single hard question before work continues — and the
          orchestrator makes sure none of them get skipped.
        </p>
        <ol className={styles.route}>
          {GATES.map((g) => (
            <li key={g.n} className={styles.gate}>
              <span className={styles.gateNode} aria-hidden="true" />
              <span className={styles.gateNum}>{g.n}</span>
              <span className={styles.gateName}>{g.name}</span>
              <span className={styles.gateQ}>{g.q}</span>
            </li>
          ))}
        </ol>
        <p className={styles.onRamps}>
          On-ramps: stuck mid-build → <code>hypothesis-debugging</code> · epic too big and
          foggy → <code>waymap</code> · deadline fact-check → <code>deep-research</code>
        </p>
      </div>
    </section>
  );
}

function SkillsGrid() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.sectionInner}>
        <SpecLabel>REF / 13</SpecLabel>
        <h2 className={styles.sectionTitle}>The skills</h2>
        <p className={styles.sectionLead}>
          One orchestrator routes every task. Eight process skills fire on their triggers.
          Four tools run when you call them by name.
        </p>
        <div className={styles.grid}>
          {SKILLS.map((s) => (
            <Link key={s.n} to={`/docs/skills/${s.name}`} className={styles.card}>
              <span className={styles.cardNum}>{s.n}</span>
              <span className={styles.cardName}>{s.name}</span>
              <span className={`${styles.chip} ${styles[`chip_${s.type}`]}`}>{s.type}</span>
              <span className={styles.cardLine}>{s.line}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className={styles.closing}>
      <div className={styles.closingInner}>
        <SpecLabel onDark>META / 01</SpecLabel>
        <h2 className={styles.closingTitle}>Built with its own medicine</h2>
        <p className={styles.closingText}>
          This site was designed, planned, verified, and shipped through the waypower
          pipeline — the skills documented here built the pages you are reading.
        </p>
        <div className={styles.heroCtas}>
          <Link className="button button--primary button--lg" to="/blog/building-these-docs-with-waypower">
            Read the dogfooding story
          </Link>
          <Link className={`button button--lg ${styles.ghostBtn}`} to="/docs/skills/using-waypower">
            Browse the skills reference
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactNode {
  return (
    <Layout
      title="Teach your agent how to work"
      description="waypower — 13 pressure-tested agent skills: one idea-to-ship pipeline for your coding agent. Interviewed design, tracer plans, enforced TDD, evidence-gated completion.">
      <Hero />
      <main>
        <StatsStrip />
        <Pipeline />
        <SkillsGrid />
        <Closing />
      </main>
    </Layout>
  );
}
