import React from 'react';
import {theme} from '../theme';

/** Instrument-panel terminal frame, brand language: no shadows, hairline borders. */
export const Terminal: React.FC<{
  title: string;
  inset?: number;
  fontSize?: number;
  gap?: number;
  children: React.ReactNode;
}> = ({title, inset = 120, fontSize = 38, gap = 30, children}) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset,
        backgroundColor: theme.panel,
        borderRadius: 24,
        border: `2px solid ${theme.line}`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '20px 40px',
          borderBottom: `1px solid ${theme.line}`,
          fontFamily: theme.mono,
          fontSize: fontSize * 0.72,
          color: theme.faint,
          letterSpacing: 2,
        }}
      >
        {title}
      </div>
      <div
        style={{
          flex: 1,
          padding: `${fontSize}px ${fontSize * 1.2}px`,
          display: 'flex',
          flexDirection: 'column',
          gap,
          fontFamily: theme.mono,
          fontSize,
          lineHeight: 1.35,
          color: theme.ink,
        }}
      >
        {children}
      </div>
    </div>
  );
};
