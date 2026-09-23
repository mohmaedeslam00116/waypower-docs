import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Line, Typed} from '../components/primitives';
import {Terminal} from '../components/Terminal';
import {theme} from '../theme';

export const Brief: React.FC = () => {
  return (
    <AbsoluteFill>
      <Terminal title="session — agent + waypower ▸">
        <div style={{display: 'flex', gap: 24}}>
          <Line at={5} style={{color: theme.amber}}>❯</Line>
          <Typed
            start={12}
            cps={1.6}
            text="Build a docs site for the pack — new repo, our own skills."
          />
        </div>
        <Line at={125} style={{color: theme.muted, fontSize: 32}}>
          using-waypower — routing: new build → interview first, code later
        </Line>
      </Terminal>
    </AbsoluteFill>
  );
};
