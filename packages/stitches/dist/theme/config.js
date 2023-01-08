"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const screens_1 = require("../constants/screens");
const scales_1 = require("../constants/scales");
const weights_1 = require("../constants/weights");
const letter_spacings_1 = require("../constants/letter-spacings");
const line_heights_1 = require("../constants/line-heights");
const fonts_1 = require("../constants/fonts");
const radii_1 = require("../constants/radii");
const z_indices_1 = require("../constants/z-indices");
const spaces_1 = require("../constants/spaces");
exports.CONFIG = {
    scale: scales_1.SCALES.MAJOR_THIRD,
    screens: screens_1.SCREENS,
    theme: {
        fonts: fonts_1.FONTS,
        fontWeights: weights_1.WEIGHTS,
        letterSpacings: letter_spacings_1.LETTER_SPACINGS,
        lineHeights: line_heights_1.LINE_HEIGHTS,
        radii: radii_1.RADII,
        zIndices: z_indices_1.ZINDICES,
        spaces: spaces_1.SPACES,
    },
    utils: {
        p: (value) => ({
            padding: value,
        }),
        pt: (value) => ({
            paddingTop: value,
        }),
        pr: (value) => ({
            paddingRight: value,
        }),
        pb: (value) => ({
            paddingBottom: value,
        }),
        pl: (value) => ({
            paddingLeft: value,
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        m: (value) => ({
            margin: value,
        }),
        mt: (value) => ({
            marginTop: value,
        }),
        mr: (value) => ({
            marginRight: value,
        }),
        mb: (value) => ({
            marginBottom: value,
        }),
        ml: (value) => ({
            marginLeft: value,
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value,
        }),
        ta: (value) => ({ textAlign: value }),
        fd: (value) => ({
            flexDirection: value,
        }),
        fw: (value) => ({ flexWrap: value }),
        ai: (value) => ({
            alignItems: value,
        }),
        ac: (value) => ({
            alignContent: value,
        }),
        jc: (value) => ({
            justifyContent: value,
        }),
        as: (value) => ({ alignSelf: value }),
        fg: (value) => ({ flexGrow: value }),
        fs: (value) => ({
            flexShrink: value,
        }),
        fb: (value) => ({ flexBasis: value }),
        bc: (value) => ({
            backgroundColor: value,
        }),
        br: (value) => ({
            borderRadius: value,
        }),
        btrr: (value) => ({
            borderTopRightRadius: value,
        }),
        bbrr: (value) => ({
            borderBottomRightRadius: value,
        }),
        bblr: (value) => ({
            borderBottomLeftRadius: value,
        }),
        btlr: (value) => ({
            borderTopLeftRadius: value,
        }),
        bs: (value) => ({ boxShadow: value }),
        lh: (value) => ({
            lineHeight: value,
        }),
        ox: (value) => ({ overflowX: value }),
        oy: (value) => ({ overflowY: value }),
        pe: (value) => ({
            pointerEvents: value,
        }),
        us: (value) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        userSelect: (value) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        size: (value) => ({
            width: value,
            height: value,
        }),
        appearance: (value) => ({
            WebkitAppearance: value,
            appearance: value,
        }),
        backgroundClip: (value) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }),
    },
};
//# sourceMappingURL=config.js.map