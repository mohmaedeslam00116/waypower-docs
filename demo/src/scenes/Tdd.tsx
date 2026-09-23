import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Line, SkillFire} from '../components/primitives';
import {Terminal} from '../components/Terminal';
import {theme} from '../theme';

export const Tdd: React.FC = () => {
  return (
    <AbsoluteFill>
      <Terminal title="session — agent + waypower ▸" fontSize={36} gap={28}>
        <SkillFire at={5} name="seam-driven-tdd" detail="verified RED before GREEN" />
        <Line at={60} style={{color: theme.muted, fontSize: 32}}>$ npx vitest run SkillSpec</Line>
        <Line at={115} style={{color: theme.red}}>
          FAIL src/components/SkillSpec.test.tsx
        </Line>
        <Line at={140} style={{color: theme.red, fontSize: 33}}>
          ✗ renders all four badges — expected 4, found 0
        </Line>
        <Line at={215} style={{color: theme.muted, fontSize: 32}}>
          → implementing at the seam …
        </Line>
        <Line at={265} style={{color: theme.muted, fontSize: 32}}>$ npx vitest run SkillSpec</Line>
        <Line at={320} style={{color: theme.green}}>✓ SkillSpec — 4 passed</Line>
        <Line at={405} style={{color: theme.faint, fontSize: 29}}>
          the RED was real — the GREEN is earned
        </Line>
      </Terminal>
    </AbsoluteFill>
  );
};
