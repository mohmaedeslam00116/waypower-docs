import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame} from 'remotion';
import {RouteW} from '../components/RouteW';
import {theme} from '../theme';

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({frame: frame - 12, fps: 30, config: {damping: 200}});
  const tag = interpolate(frame, [45, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const label = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 44,
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          opacity: label,
          fontFamily: theme.mono,
          fontSize: 26,
          letterSpacing: 7,
          color: theme.faint,
        }}
      >
        AGENT SKILLS / 13
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: 44, transform: `scale(${s})`}}>
        <RouteW size={150} />
        <div
          style={{
            fontFamily: theme.display,
            fontWeight: 600,
            fontSize: 138,
            color: theme.ink,
          }}
        >
          waypower
        </div>
      </div>
      <div
        style={{
          opacity: tag,
          transform: `translateY(${(1 - tag) * 16}px)`,
          fontFamily: theme.display,
          fontWeight: 500,
          fontSize: 54,
          color: theme.body,
        }}
      >
        Teach your agent how to work.
      </div>
    </AbsoluteFill>
  );
};
