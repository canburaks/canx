"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const stitches_config_1 = require("../stitches.config");
exports.Button = (0, stitches_config_1.styled)('button', {
    fontSize: '$xl',
    borderRadius: '$xl',
    fontWeight: '$semi',
    variants: {
        state: {
            rest: { boxShadow: '$rest' },
            focus: { boxShadow: '$focus' },
        },
    },
    defaultVariants: {
        state: 'rest',
    },
});
//# sourceMappingURL=button.jsx.map