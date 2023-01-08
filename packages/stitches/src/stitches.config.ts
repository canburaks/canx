// stitches.config.ts
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { CONFIG } from './theme/config';
import { ConfigType } from '@stitches/react/types/config';

function generateTheme(configs: typeof CONFIG) {
  const {
    styled,
    css,
    theme,
    createTheme,
    getCssText,
    globalCss,
    keyframes,
    config,
    reset,
  } = createStitches({
    prefix: 'cbs',
    theme: {
      fonts:configs.theme.fonts,
      fontSize: {
        XS: `-${configs.scale * configs.scale}em`,
        SM: `-${configs.scale}em`,
        BASE: `${1}em`,
        LG: `${configs.scale}em`,
        H6: `${configs.scale * configs.scale}em`,
        H5: `${configs.scale * configs.scale * configs.scale}em`,
        H4: `${
          configs.scale * configs.scale * configs.scale * configs.scale
        }em`,
        H3: `${
          configs.scale * configs.scale * configs.scale * configs.scale
        }em`,
        H2: `${
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale
        }em`,
        H1: `${
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale
        }em`,
        HEADLINE: `${
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale *
          configs.scale
        }em`,
      },
      fontWeights: configs.theme.fontWeights,
      lineHeights: configs.theme.lineHeights,
      radii: configs.theme.radii,
      space: configs.theme.spaces,
    },
    media: {
      xs: `(min-width: ${configs.screens.XS}px)`,
      sm: `(min-width: ${configs.screens.SM}px)`,
      md: `(min-width: ${configs.screens.MD}px)`,
      lg: `(min-width: ${configs.screens.LG}px)`,
      xl: `(min-width: ${configs.screens.XL}px)`,
      xxl: `(min-width:${configs.screens.XXL}px)`,
    },

    utils: configs.utils,
  });
  return {
    styled,
    css,
    theme,
    createTheme,
    getCssText,
    globalCss,
    keyframes,
    config,
    reset,
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

const stitches = (configs: typeof CONFIG) =>
  generateTheme({ ...CONFIG, ...configs });

export const { styled, css, globalCss, keyframes, getCssText, theme, config } =
  stitches(CONFIG);

export default stitches;
