import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Line, SkillFire, Typed} from '../components/primitives';
import {Terminal} from '../components/Terminal';
import {theme} from '../theme';

export const Interview: React.FC = () => {
  return (
    <AbsoluteFill>
      <Terminal title="session — agent + waypower ▸" fontSize={36} gap={26}>
        <SkillFire at={5} name="design-interview" detail="vague brief detected · 3 questions" />
        <Line at={55} style={{color: theme.body}}>Register: serene and considered, or loud?</Line>
        <Typed start={100} cps={1.5} text="serene." style={{color: theme.amber}} />
        <Line at={165} style={{color: theme.body}}>Voice: first-person plural — “we teach”?</Line>
        <Typed start={205} cps={1.5} text="yes." style={{color: theme.amber}} />
        <Line at={265} style={{color: theme.body}}>Brand lock: now, or after launch?</Line>
        <Typed start={305} cps={1.5} text="now." style={{color: theme.amber}} />
        <Line at={365} style={{color: theme.green}}>✓ spec approved — register, voice, brand</Line>
      </Terminal>
    </AbsoluteFill>
  );
};
