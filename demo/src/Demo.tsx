import React from 'react';
import {AbsoluteFill, Series} from 'remotion';
import {Brief} from './scenes/Brief';
import {Gate} from './scenes/Gate';
import {Interview} from './scenes/Interview';
import {Intro} from './scenes/Intro';
import {Outro} from './scenes/Outro';
import {Plan} from './scenes/Plan';
import {Ship} from './scenes/Ship';
import {Tdd} from './scenes/Tdd';
import {theme} from './theme';

export const Demo: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: theme.bg}}>
      <Series>
        <Series.Sequence durationInFrames={120}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={180}>
          <Brief />
        </Series.Sequence>
        <Series.Sequence durationInFrames={420}>
          <Interview />
        </Series.Sequence>
        <Series.Sequence durationInFrames={300}>
          <Plan />
        </Series.Sequence>
        <Series.Sequence durationInFrames={480}>
          <Tdd />
        </Series.Sequence>
        <Series.Sequence durationInFrames={360}>
          <Gate />
        </Series.Sequence>
        <Series.Sequence durationInFrames={240}>
          <Ship />
        </Series.Sequence>
        <Series.Sequence durationInFrames={150}>
          <Outro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
