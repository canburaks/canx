import { SCALES } from '../constants/scales';
type TSCALES = keyof typeof SCALES;
type TSCALE = typeof SCALES[TSCALES];
type TFONTS = {
    primary: string;
    secondary: string;
    [key: string]: string;
};
type T_NUM_STRING = {
    [key: number | string]: string;
};
type T_NUM_ = {
    [key: number]: string;
};
interface CONFIG_TYPE {
    scale: TSCALE;
    screens: {
        XS: number;
        SM: number;
        MD: number;
        LG: number;
        XL: number;
        XXL: number;
    };
    theme: {
        fonts: TFONTS;
        fontWeights: {
            LIGHT: number;
            REGULAR: number;
            MEDIUM: number;
            SEMIBOLD: number;
            BOLD: number;
            EXTRABOLD: number;
            BLACK: number;
        };
        letterSpacings: {
            TIGHTER: string;
            TIGHT: string;
            NORMAL: string;
            WIDE: string;
            WIDER: string;
        };
        lineHeights: {
            SHORTER: string;
            SHORT: string;
            NORMAL: string;
            TALL: string;
            TALLER: string;
        };
        radii: T_NUM_STRING;
        zIndices: T_NUM_STRING;
        spaces: T_NUM_;
    };
    utils: {
        [key: string]: (value: any) => any;
    };
}
export declare const CONFIG: CONFIG_TYPE;
export {};
//# sourceMappingURL=config.d.ts.map