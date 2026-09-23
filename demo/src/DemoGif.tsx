import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame} from 'remotion';
import {Line, SkillFire} from './components/primitives';
import {Terminal} from './components/Terminal';
import {theme} from './theme';

/** 16s, 960×540@15 — the RED→GREEN→PASS highlight loop for READMEs. */
export const DemoGif: React.FC = () => {
  const frame = useCurrentFrame();
  const stamp = spring({frame: frame - 210, fps: 15, config: {damping: 14, mass: 0.9}});
  return (
    <AbsoluteFill style={{backgroundColor: theme.bg}}>
      <Terminal title="session — agent + waypower ▸" inset={36} fontSize={20} gap={13}>
        <SkillFire at={5} name="seam-driven-tdd" detail="verified RED before GREEN" />
        <Line at={35} style={{color: theme.muted, fontSize: 17}}>
          $ npx vitest run SkillSpec
        </Line>
        <Line at={65} style={{color: theme.red, fontSize: 18}}>
          ✗ renders all four badges — expected 4, found 0
        </Line>
        <Line at={100} style={{color: theme.muted, fontSize: 17}}>
          → implementing at the seam …
        </Line>
        <Line at={130} style={{color: theme.green, fontSize: 19}}>
          ✓ SkillSpec — 4 passed
        </Line>
        <Line at={160}>
          <span style={{color: theme.amber}}>✳ </span>
          <span style={{color: theme.ink, fontWeight: 600}}>completion-gate</span>
          <span style={{color: theme.muted}}> — evidence required</span>
        </Line>
        <Line at={185} style={{color: theme.green, fontSize: 18}}>
          ✓ build · ✓ pages · ✓ deployed · ✓ live
        </Line>
        <div
          style={{
            position: 'absolute',
            right: 64,
            bottom: 52,
            opacity: stamp > 0 ? 1 : 0,
            transform: `scale(${0.6 + stamp * 0.4})`,
            border: `4px solid ${theme.amber}`,
            borderRadius: 12,
            padding: '4px 30px',
            fontFamily: theme.display,
            fontWeight: 600,
            fontSize: 54,
            letterSpacing: 7,
            color: theme.amber,
          }}
        >
          PASS
        </div>
      </Terminal>
    </AbsoluteFill>
  );
};
