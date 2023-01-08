"use strict";
exports.__esModule = true;
exports.Button = void 0;
var stitches_config_1 = require("../stitches.config");
exports.Button = (0, stitches_config_1.styled)('button', {
    fontSize: '$xl',
    borderRadius: '$xl',
    fontWeight: '$semi',
    variants: {
        state: {
            rest: { boxShadow: '$rest' },
            focus: { boxShadow: '$focus' }
        }
    },
    defaultVariants: {
        state: 'rest'
    }
});
