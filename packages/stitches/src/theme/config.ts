import { SCREENS } from '../constants/screens';
import { SCALES } from '../constants/scales';
import { WEIGHTS } from '../constants/weights';
import { LETTER_SPACINGS } from '../constants/letter-spacings';
import { LINE_HEIGHTS } from '../constants/line-heights';


type TSCALES = keyof typeof SCALES;
type TSCALE = typeof SCALES[TSCALES];

interface CONFIG_TYPE {
  SCALE: TSCALE,
  SCREENS: {
    XS: number,
    SM: number,
    MD: number,
    LG: number,
    XL: number,
    XXL: number,
  },
  WEIGHTS:{
    LIGHT: number,
    REGULAR: number,
    MEDIUM: number,
    SEMIBOLD: number,
    BOLD: number,
    EXTRABOLD: number,
    BLACK: number,
  },
  LETTER_SPACINGS:{
    TIGHTER: string,
    TIGHT: string,
    NORMAL: string,
    WIDE: string,
    WIDER: string,
  },
  LINE_HEIGHTS:{
    SHORTER: string,
    SHORT: string,
    NORMAL: string,
    TALL: string,
    TALLER: string,
  }
};

export const CONFIG: CONFIG_TYPE = {
  SCALE: SCALES.MAJOR_THIRD,
  SCREENS,
  WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
};
