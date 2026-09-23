import {continueRender, delayRender, staticFile} from 'remotion';

const load = (family: string, file: string, weight: string) => {
  const handle = delayRender(`Loading ${family} ${weight}`);
  new FontFace(family, `url('${staticFile(file)}') format('woff2')`, {weight})
    .load()
    .then((font) => {
      document.fonts.add(font);
      continueRender(handle);
    })
    .catch((err) => {
      console.error(`Font failed: ${family} ${weight}`, err);
      continueRender(handle);
    });
};

load('Clash Display', 'fonts/ClashDisplay-Medium.woff2', '500');
load('Clash Display', 'fonts/ClashDisplay-Semibold.woff2', '600');
load('JetBrains Mono', 'fonts/JetBrainsMono-Regular.woff2', '400');
load('JetBrains Mono', 'fonts/JetBrainsMono-Medium.woff2', '500');
load('JetBrains Mono', 'fonts/JetBrainsMono-Semibold.woff2', '600');
