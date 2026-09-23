import React from 'react';
import styles from './styles.module.css';

export type TranscriptGlyph = 'you' | 'wp' | 'gate' | 'ok';

export type TranscriptLine = {
  glyph: TranscriptGlyph;
  text: React.ReactNode;
};

type Props = {
  /** Bar label, e.g. "session — agent + waypower". */
  label?: string;
  /**
   * Honesty label rendered under the panel: where this excerpt comes from.
   * Required — excerpts are real runs only, labeled as such (t09).
   */
  source: string;
  lines: TranscriptLine[];
  /** Staggered rise animation (homepage hero). Off on doc pages. */
  animate?: boolean;
  /** Caption sits on a dark surface (homepage hero) — brighten it. */
  captionOnDark?: boolean;
};

const GLYPHS: Record<TranscriptGlyph, string> = {
  you: '▸',
  wp: '✳',
  gate: '·',
  ok: '✓',
};

export default function Transcript({
  label = 'session — agent + waypower',
  source,
  lines,
  animate = false,
  captionOnDark = false,
}: Props): React.ReactNode {
  return (
    <figure className={styles.wrap}>
      <div className={styles.transcript} role="log" aria-label="Real waypower session transcript excerpt">
        <div className={styles.bar}>
          <span className={styles.dot} />
          <span>{label}</span>
        </div>
        <div className={styles.body}>
          {lines.map((l, i) => (
            <div
              key={i}
              className={`${styles.tLine} ${styles[`t_${l.glyph}`]} ${animate ? styles.tAnimate : ''}`}
              style={animate ? {animationDelay: `${0.15 + i * 0.09}s`} : undefined}>
              <span className={styles.tGlyph} aria-hidden="true">
                {GLYPHS[l.glyph]}
              </span>
              <span>{l.text}</span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className={`${styles.source} ${captionOnDark ? styles.sourceOnDark : ''}`}>
        <span className={`${styles.sourceTag} ${captionOnDark ? styles.sourceTagOnDark : ''}`}>REAL</span> excerpt — {source}
      </figcaption>
    </figure>
  );
}
