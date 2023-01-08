"use strict";
exports.__esModule = true;
exports.CoverImage = void 0;
var stitches_config_1 = require("../stitches.config");
exports.CoverImage = (0, stitches_config_1.styled)('img', {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    variants: {
        position: {
            relative: { position: 'relative' },
            absolute: { position: 'absolute' }
        }
    }
});
