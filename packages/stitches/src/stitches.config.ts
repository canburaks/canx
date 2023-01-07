// stitches.config.ts
import { createStitches } from '@stitches/react';
import { CONFIG } from './theme/config';

type MyStitchesTypes = {
  styled?: any;
  css?: Record<string, string> | any;
  globalCss?: any;
  theme?: Record<string, string> | any;
  keyframes?: any;
  getCssText?: any;
  globalStyles?: any;
  config?: any;
};
function generateTheme(configs:typeof CONFIG):MyStitchesTypes {
  const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    config,
  }: MyStitchesTypes = createStitches({
    prefix: 'cbs',
    theme: {
			fontSize:{
				XS: 	`-${CONFIG.SCALE * CONFIG.SCALE}em`,
				SM: 	`-${CONFIG.SCALE}em`,
				BASE: `${1}em`,
				LG:   `${CONFIG.SCALE }em`,
				H6: 	`${CONFIG.SCALE * CONFIG.SCALE }em`,
				H5: 	`${CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE}em`,
				H4: 	`${CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE }em`,
				H3: 	`${CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE}em`,
				H2: 	`${CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE}em`,
				H1: 	`${CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE }em`,
				HEADLINE: 	`${CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE * CONFIG.SCALE}em`,
			}
		},
    media: {
      xs: `(min-width: ${CONFIG.SCREENS.XS}px)`,
      sm: `(min-width: ${CONFIG.SCREENS.SM}px)`,
      md: `(min-width: ${CONFIG.SCREENS.MD}px)`,
      lg: `(min-width: ${CONFIG.SCREENS.LG}px)`,
      xl: `(min-width: ${CONFIG.SCREENS.XL}px)`,
      xxl: `(min-width: ${CONFIG.SCREENS.XXL}px)`,
    },
    utils: {
      size: (value: any) => ({
        width: value,
        height: value,
      }),
    },
  });
  return {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    config,
  };
}

// export const globalStyles = globalCss({
//   '*': { margin: 0, padding: 0, boxSizing: 'border-box', lineHeight: 1.5 },
//   html: { height: '100%' },
//   body: { height: '100%' },
//   'img, picture, video, canvas, svg': {
//     display: 'block',
//     maxWidth: '100%',
//   },
//   'input, button, textarea, select': {
//     font: 'inherit',
//   },
//   'p, h1, h2, h3, h4, h5, h6, span, li': {
//     overflowWrap: 'break-word',
//   },
// });

const stitches = (configs:typeof CONFIG) => generateTheme({...CONFIG, ...configs});

export const { styled, css, globalCss, keyframes, getCssText, theme, config } = stitches(CONFIG);

export default stitches;
