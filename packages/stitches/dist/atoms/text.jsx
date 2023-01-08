"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderText = exports.Text = void 0;
const stitches_config_1 = require("../stitches.config");
exports.Text = (0, stitches_config_1.styled)('p', {
    fontSize: 16,
    letterSpacing: '$tight',
    lineHeight: 1.6,
    fontFamily: 'General Sans Variable',
    transition: 'all 200ms ease',
    color: '$accent12',
    variants: {
        color: {
            light: { color: '$accent12' },
            dark: { color: '$accent1' },
        },
        weight: {
            regular: { fontWeight: 400 },
            medium: { fontWeight: 500 },
            semi: { fontWeight: 600 },
            bold: { fontWeight: 700 },
            black: { fontWeight: 900 },
        },
        spacing: {
            tighter: { letterSpacing: '$tighter' },
            tight: { letterSpacing: '$tight' },
            normal: { letterSpacing: '$normal' },
        },
        size: {
            xs: { fontSize: '$xs' },
            sm: { fontSize: '$sm' },
            base: { fontSize: '$base' },
            xl: { fontSize: '$xl' },
            lg: { fontSize: '$lg' },
            h1: { fontSize: '$h1' },
            h2: { fontSize: '$h2' },
            h3: { fontSize: '$h3' },
            h4: { fontSize: '$h4' },
            headline: { fontSize: '$headline' },
        },
    },
    defaultVariants: {
        color: 'dark',
        weight: 'regular',
        spacing: 'normal',
        size: 'sm',
    },
});
exports.HeaderText = (0, stitches_config_1.styled)('h2', {
    variants: {
        level: {
            h1: { fontSize: '$h1', letterSpacing: '$tighter' },
            h2: { fontSize: '$h2', letterSpacing: '$tighter' },
            h3: { fontSize: '$h3', letterSpacing: '$tight' },
            h4: { fontSize: '$h4', letterSpacing: '$tight' },
        },
    },
});
//# sourceMappingURL=text.jsx.map