import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Line, Typed} from '../components/primitives';
import {RouteW} from '../components/RouteW';
import {theme} from '../theme';

const chips = ['13 skills', '12/13 evals discriminate', '0 security alerts', 'MIT'];

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const head = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill
      style={{justifyContent: 'center', alignItems: 'center', gap: 46, flexDirection: 'column'}}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: 34, opacity: head}}>
        <RouteW size={112} />
        <div style={{fontFamily: theme.display, fontWeight: 600, fontSize: 104, color: theme.ink}}>
          waypower
        </div>
      </div>
      <div
        style={{
          border: `2px solid ${theme.line}`,
          borderRadius: 14,
          backgroundColor: theme.panel,
          padding: '24px 38px',
          fontFamily: theme.mono,
          fontSize: 33,
          color: theme.body,
        }}
      >
        <span style={{color: theme.amber}}>$ </span>
        <Typed
          start={30}
          cps={1.7}
          text="npx skills add mohmaedeslam00116/waypower --all -g --copy"
          style={{display: 'inline'}}
        />
      </div>
      <div style={{display: 'flex', gap: 22}}>
        {chips.map((c, i) => (
          <Line
            key={c}
            at={95 + i * 10}
            style={{
              fontFamily: theme.mono,
              fontSize: 27,
              color: theme.muted,
              border: `1.5px solid ${theme.line}`,
              borderRadius: 999,
              padding: '10px 26px',
            }}
          >
            {c}
          </Line>
        ))}
      </div>
    </AbsoluteFill>
  );
};
