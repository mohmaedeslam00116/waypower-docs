import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Line, SkillFire} from '../components/primitives';
import {Terminal} from '../components/Terminal';
import {theme} from '../theme';

export const Ship: React.FC = () => {
  return (
    <AbsoluteFill>
      <Terminal title="session — agent + waypower ▸" fontSize={36} gap={34}>
        <SkillFire at={5} name="finish-handoff" detail="merging and handing off warm" />
        <Line at={60} style={{color: theme.muted, fontSize: 32}}>
          29f78e9 docs interior v2 — spec sheets, pipeline map, search
        </Line>
        <Line at={115} style={{color: theme.green}}>
          ✓ main merged · pushed · deployed · live
        </Line>
        <Line at={175} style={{color: theme.faint, fontSize: 30}}>
          next session starts here →
        </Line>
      </Terminal>
    </AbsoluteFill>
  );
};
