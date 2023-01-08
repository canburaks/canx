import type * as Stitches from '@stitches/react';
import { SCREENS } from '../constants/screens';
import { SCALES } from '../constants/scales';
import { WEIGHTS } from '../constants/weights';
import { LETTER_SPACINGS } from '../constants/letter-spacings';
import { LINE_HEIGHTS } from '../constants/line-heights';
import { FONTS } from '../constants/fonts';
import { RADII } from '../constants/radii';
import { ZINDICES } from '../constants/z-indices';
import {SPACES} from '../constants/spaces';

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
    [key:string]: (value:any) => any;
  };
}

export const CONFIG: CONFIG_TYPE = {
  scale: SCALES.MAJOR_THIRD,
  screens: SCREENS,
  theme: {
    fonts: FONTS,
    fontWeights: WEIGHTS,
    letterSpacings: LETTER_SPACINGS,
    lineHeights: LINE_HEIGHTS,
    radii: RADII,
    zIndices: ZINDICES,
    spaces:SPACES,
  },
  utils: {
    p: (value: any) => ({
      padding: value,
    }),
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: any) => ({
      margin: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: any) => ({ textAlign: value }),

    fd: (value: any) => ({
      flexDirection: value,
    }),
    fw: (value: any) => ({ flexWrap: value }),

    ai: (value: any) => ({
      alignItems: value,
    }),
    ac: (value: any) => ({
      alignContent: value,
    }),
    jc: (value: any) => ({
      justifyContent: value,
    }),
    as: (value: any) => ({ alignSelf: value }),
    fg: (value: any) => ({ flexGrow: value }),
    fs: (value: any) => ({
      flexShrink: value,
    }),
    fb: (value: any) => ({ flexBasis: value }),

    bc: (value: any) => ({
      backgroundColor: value,
    }),

    br: (value: any) => ({
      borderRadius: value,
    }),
    btrr: (value: any) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: any) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: any) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: any) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: any) => ({ boxShadow: value }),

    lh: (value: any) => ({
      lineHeight: value,
    }),

    ox: (value: any) => ({ overflowX: value }),
    oy: (value: any) => ({ overflowY: value }),

    pe: (value: any) => ({
      pointerEvents: value,
    }),
    us: (value: any) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: any) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: any) => ({
      width: value,
      height: value,
    }),

    appearance: (value: any) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: any) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
};
