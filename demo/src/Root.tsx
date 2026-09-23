import './fonts';
import './index.css';
import {Composition} from 'remotion';
import {Demo} from './Demo';
import {DemoGif} from './DemoGif';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Demo"
        component={Demo}
        durationInFrames={2250}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DemoGif"
        component={DemoGif}
        durationInFrames={240}
        fps={15}
        width={960}
        height={540}
      />
    </>
  );
};
