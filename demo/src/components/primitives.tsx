import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

/** Fades + rises in at frame `at`. */
export const Line: React.FC<{
  at?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({at = 0, style, children}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [at, at + 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div style={{opacity: p, transform: `translateY(${(1 - p) * 14}px)`, ...style}}>
      {children}
    </div>
  );
};

/** Typewriter — types `text` starting at frame `start`, `cps` chars per frame. */
export const Typed: React.FC<{
  text: string;
  start?: number;
  cps?: number;
  caret?: boolean;
  style?: React.CSSProperties;
}> = ({text, start = 0, cps = 2, caret = true, style}) => {
  const frame = useCurrentFrame();
  const n = Math.max(0, Math.min(text.length, Math.floor((frame - start) * cps)));
  return (
    <div style={style}>
      {text.slice(0, n)}
      {caret ? (
        <span style={{opacity: frame % 16 < 8 ? 1 : 0, color: '#9DC4CC'}}>▍</span>
      ) : null}
    </div>
  );
};

/** The ✳ skill-invocation line, amber spark. */
export const SkillFire: React.FC<{at?: number; name: string; detail: string}> = ({
  at = 0,
  name,
  detail,
}) => {
  return (
    <Line at={at}>
      <span style={{color: '#F5A623'}}>✳ </span>
      <span style={{color: '#F4FAFB'}}>Using </span>
      <span style={{color: '#F4FAFB', fontWeight: 600}}>{name}</span>
      <span style={{color: '#9DC4CC'}}> — {detail}</span>
    </Line>
  );
};
