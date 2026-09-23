import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame} from 'remotion';
import {Line, SkillFire} from '../components/primitives';
import {Terminal} from '../components/Terminal';
import {theme} from '../theme';

export const Gate: React.FC = () => {
  const frame = useCurrentFrame();
  const stamp = spring({frame: frame - 228, fps: 30, config: {damping: 14, mass: 0.9}});
  return (
    <AbsoluteFill>
      <Terminal title="session — agent + waypower ▸" fontSize={36} gap={30}>
        <SkillFire
          at={5}
          name="completion-gate"
          detail="done is a claim that needs evidence"
        />
        <Line at={70} style={{color: theme.body}}>
          <span style={{color: theme.green}}>✓</span> build — [SUCCESS]
        </Line>
        <Line at={110} style={{color: theme.body}}>
          <span style={{color: theme.green}}>✓</span> 30 pages · 0 broken links
        </Line>
        <Line at={150} style={{color: theme.body}}>
          <span style={{color: theme.green}}>✓</span> deployed · live-verified
        </Line>
        <div
          style={{
            opacity: stamp > 0 ? 1 : 0,
            transform: `scale(${0.6 + stamp * 0.4})`,
            alignSelf: 'center',
            marginTop: 26,
            border: `5px solid ${theme.amber}`,
            borderRadius: 18,
            padding: '10px 54px',
            fontFamily: theme.display,
            fontWeight: 600,
            fontSize: 118,
            letterSpacing: 10,
            color: theme.amber,
          }}
        >
          PASS
        </div>
      </Terminal>
    </AbsoluteFill>
  );
};
