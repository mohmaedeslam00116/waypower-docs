import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Line, SkillFire} from '../components/primitives';
import {Terminal} from '../components/Terminal';
import {theme} from '../theme';

const tickets = ['config', 'theme', 'content', 'landing', 'blog', 'deploy'];

export const Plan: React.FC = () => {
  return (
    <AbsoluteFill>
      <Terminal title="session — agent + waypower ▸" fontSize={36} gap={40}>
        <SkillFire at={5} name="tracer-plan" detail="slicing to shippable tickets" />
        <div
          style={{
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          {tickets.map((t, i) => (
            <React.Fragment key={t}>
              <Line
                at={55 + i * 22}
                style={{
                  border: `2px solid ${theme.line}`,
                  borderRadius: 999,
                  padding: '14px 30px',
                  fontSize: 32,
                  color: theme.ink,
                  backgroundColor: theme.bg,
                }}
              >
                <span style={{color: theme.faint, marginRight: 14}}>{`0${i + 1}`}</span>
                {t}
              </Line>
              {i < tickets.length - 1 ? (
                <Line at={55 + i * 22} style={{color: theme.faint, fontSize: 30}}>
                  →
                </Line>
              ) : null}
            </React.Fragment>
          ))}
        </div>
        <Line at={215} style={{color: theme.muted, fontSize: 30}}>
          each slice shippable on its own — trunk stays green
        </Line>
      </Terminal>
    </AbsoluteFill>
  );
};
