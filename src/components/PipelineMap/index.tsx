import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const STAGES = [
  {
    n: '01',
    name: 'INTAKE',
    skill: 'using-waypower',
    gate: 'Which discipline owns this?',
    desc: 'Every request is classified and routed to the right process skill — the red-flag rules are enforced from the first line, so nothing skips the pipeline.',
    href: '/docs/skills/using-waypower',
  },
  {
    n: '02',
    name: 'DESIGN',
    skill: 'design-interview',
    gate: 'What are we really building?',
    desc: 'Frontier interview rounds end at a written spec that you approve. This gate is the cheapest place in the entire pipeline to change your mind.',
    href: '/docs/skills/design-interview',
  },
  {
    n: '03',
    name: 'PLAN',
    skill: 'tracer-plan',
    gate: 'What is the thinnest slice?',
    desc: 'The approved spec becomes tracer-bullet tickets — each one leaves the system working. Effort too big to see? waymap charts the fog first.',
    href: '/docs/skills/tracer-plan',
  },
  {
    n: '04',
    name: 'BUILD',
    skill: 'seam-driven-tdd',
    gate: 'Is the RED verified?',
    desc: 'Test-first at seams you confirmed — no production code without a failing test. A bug mid-flight pauses everything for hypothesis-debugging.',
    href: '/docs/skills/seam-driven-tdd',
  },
  {
    n: '05',
    name: 'VERIFY',
    skill: 'completion-gate + dual-axis-review',
    gate: 'Where is the evidence?',
    desc: 'No success claim without verification commands that actually ran. Then two review agents cross the diff — engineering standards and spec fitness.',
    href: '/docs/skills/completion-gate',
  },
  {
    n: '06',
    name: 'SHIP',
    skill: 'finish-handoff',
    gate: 'Is the handoff warm?',
    desc: 'Merge, clean the workspace, and compact the session into a handoff note the next agent — or next you — picks up cold.',
    href: '/docs/skills/finish-handoff',
  },
];

export default function PipelineMap(): React.ReactNode {
  const [active, setActive] = useState(1); // DESIGN — the first human gate
  const stage = STAGES[active];
  return (
    <div className={styles.map}>
      <ol className={styles.route}>
        {STAGES.map((s, i) => (
          <li key={s.name} className={styles.stage}>
            <button
              type="button"
              className={styles.stageBtn}
              aria-pressed={i === active}
              onClick={() => setActive(i)}>
              <span className={styles.node} aria-hidden="true" />
              <span className={styles.stageNum}>{s.n}</span>
              <span className={styles.stageName}>{s.name}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className={styles.panel}>
        <div className={styles.panelHead}>
          <span className={styles.panelNum}>GATE / {stage.n}</span>
          <Link className={styles.panelSkill} to={stage.href}>
            {stage.skill}
          </Link>
        </div>
        <p className={styles.panelGate}>“{stage.gate}”</p>
        <p className={styles.panelDesc}>{stage.desc}</p>
      </div>
    </div>
  );
}
