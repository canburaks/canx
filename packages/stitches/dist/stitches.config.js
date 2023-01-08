"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.theme = exports.getCssText = exports.keyframes = exports.globalCss = exports.css = exports.styled = void 0;
// stitches.config.ts
const react_1 = require("@stitches/react");
const config_1 = require("./theme/config");
function generateTheme(configs) {
    const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset, } = (0, react_1.createStitches)({
        prefix: 'cbs',
        theme: {
            fonts: configs.theme.fonts,
            fontSize: {
                XS: `-${configs.scale * configs.scale}em`,
                SM: `-${configs.scale}em`,
                BASE: `${1}em`,
                LG: `${configs.scale}em`,
                H6: `${configs.scale * configs.scale}em`,
                H5: `${configs.scale * configs.scale * configs.scale}em`,
                H4: `${configs.scale * configs.scale * configs.scale * configs.scale}em`,
                H3: `${configs.scale * configs.scale * configs.scale * configs.scale}em`,
                H2: `${configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale}em`,
                H1: `${configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale}em`,
                HEADLINE: `${configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale *
                    configs.scale}em`,
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
const stitches = (configs) => generateTheme(Object.assign(Object.assign({}, config_1.CONFIG), configs));
_a = stitches(config_1.CONFIG), exports.styled = _a.styled, exports.css = _a.css, exports.globalCss = _a.globalCss, exports.keyframes = _a.keyframes, exports.getCssText = _a.getCssText, exports.theme = _a.theme, exports.config = _a.config;
exports.default = stitches;
//# sourceMappingURL=stitches.config.js.map