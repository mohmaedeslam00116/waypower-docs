import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Props = {
  n: string;
  type: 'orchestrator' | 'process' | 'tool';
  invocation: string;
  trigger: string;
  output: string;
  pairs: string[];
};

export default function SkillSpec({
  n,
  type,
  invocation,
  trigger,
  output,
  pairs,
}: Props): React.ReactNode {
  return (
    <section className={styles.sheet} aria-label="Skill specification">
      <div className={styles.head}>
        <span className={styles.num}>SKILL / {n}</span>
        <span className={`${styles.chip} ${styles[`chip_${type}`]}`}>{type}</span>
        <span className={styles.mode}>{invocation}</span>
      </div>
      <dl className={styles.rows}>
        <div className={styles.row}>
          <dt>TRIGGER</dt>
          <dd>{trigger}</dd>
        </div>
        <div className={styles.row}>
          <dt>OUTPUT</dt>
          <dd>{output}</dd>
        </div>
        <div className={styles.row}>
          <dt>PAIRS WITH</dt>
          <dd className={styles.pairs}>
            {pairs.map((p) => (
              <Link key={p} to={`/docs/skills/${p}`}>
                {p}
              </Link>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  );
}
