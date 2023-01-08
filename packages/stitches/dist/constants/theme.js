"use strict";
exports.__esModule = true;
exports.lightThemeConfig = void 0;
// import type * as Stitches from '@stitches/react';
var breakpoints_1 = require("./breakpoints");
var colors_1 = require("./colors");
var font_sizes_1 = require("./font-sizes");
var font_weights_1 = require("./font-weights");
var fonts_1 = require("./fonts");
var letter_spacings_1 = require("./letter-spacings");
var line_heights_1 = require("./line-heights");
var radii_1 = require("./radii");
var shadows_1 = require("./shadows");
var spacing_1 = require("./spacing");
var transitions_1 = require("./transitions");
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
    transitions: transitions_1.transitions
};
