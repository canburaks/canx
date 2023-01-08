"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightThemeConfig = void 0;
// import type * as Stitches from '@stitches/react';
const breakpoints_1 = require("./breakpoints");
const colors_1 = require("./colors");
const font_sizes_1 = require("./font-sizes");
const font_weights_1 = require("./font-weights");
const fonts_1 = require("./fonts");
const letter_spacings_1 = require("./letter-spacings");
const line_heights_1 = require("./line-heights");
const radii_1 = require("./radii");
const shadows_1 = require("./shadows");
const spacing_1 = require("./spacing");
const transitions_1 = require("./transitions");
// type ThemeType = {
// 	colors: Stitches.CSS;
// 	fonts: Stitches.CSS;
// 	fontWeights: Stitches.CSS;
// 	space: Stitches.CSS;
// 	breakpoints: Stitches.CSS;
// 	letterSpacings: Stitches.CSS;
// 	lineHeights: Stitches.CSS;
// 	radii: Stitches.CSS;
// 	shadows: Stitches.CSS;
// 	transitions?: Stitches.CSS;
// 	fontSizes?: Stitches.CSS;
// 	type?: Stitches.CSS;
// };
exports.lightThemeConfig = {
    colors: colors_1.Colors,
    space: spacing_1.space,
    fonts: fonts_1.fonts,
    breakpoints: breakpoints_1.breakpoints,
    shadows: shadows_1.shadows,
    fontSizes: font_sizes_1.fontSizes,
    fontWeights: font_weights_1.fontWeights,
    letterSpacings: letter_spacings_1.letterSpacings,
    lineHeights: line_heights_1.lineHeights,
    radii: radii_1.radii,
    transitions: transitions_1.transitions,
};
//# sourceMappingURL=theme.jsx.map