/// <reference types="react" />
import { CONFIG } from './theme/config';
declare const stitches: (configs: typeof CONFIG) => {
    styled: <Type extends keyof JSX.IntrinsicElements | import("react").ComponentType<any> | import("@stitches/react/types/util").Function, Composers extends (string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function | {
        [name: string]: unknown;
    })[], CSS = import("@stitches/react/types/css-util").CSS<{
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    }, {
        fonts: {
            [x: string]: any;
            primary: string;
            secondary: string;
        };
        fontSize: {
            XS: string;
            SM: string;
            BASE: string;
            LG: string;
            H6: string;
            H5: string;
            H4: string;
            H3: string;
            H2: string;
            H1: string;
            HEADLINE: string;
        };
        fontWeights: {
            LIGHT: number;
            REGULAR: number;
            MEDIUM: number;
            SEMIBOLD: number;
            BOLD: number;
            EXTRABOLD: number;
            BLACK: number;
        };
        lineHeights: {
            SHORTER: string;
            SHORT: string;
            NORMAL: string;
            TALL: string;
            TALLER: string;
        };
        radii: {
            [x: string]: any;
        };
        space: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        [x: string]: any;
    }>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
        variants?: {
            [x: string]: {
                [x: string]: CSS;
                [x: number]: CSS;
            };
        };
        compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : never : import("@stitches/react/types/util").WideObject) & {
            css: CSS;
        })[];
        defaultVariants?: "variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : never : import("@stitches/react/types/util").WideObject;
    } & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "variants" | "compoundVariants" | "defaultVariants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    }, import("@stitches/react/types/css-util").CSS<{
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    }, {
        fonts: {
            [x: string]: any;
            primary: string;
            secondary: string;
        };
        fontSize: {
            XS: string;
            SM: string;
            BASE: string;
            LG: string;
            H6: string;
            H5: string;
            H4: string;
            H3: string;
            H2: string;
            H1: string;
            HEADLINE: string;
        };
        fontWeights: {
            LIGHT: number;
            REGULAR: number;
            MEDIUM: number;
            SEMIBOLD: number;
            BOLD: number;
            EXTRABOLD: number;
            BLACK: number;
        };
        lineHeights: {
            SHORTER: string;
            SHORT: string;
            NORMAL: string;
            TALL: string;
            TALLER: string;
        };
        radii: {
            [x: string]: any;
        };
        space: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        [x: string]: any;
    }>>;
    css: <Composers_1 extends (string | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | import("@stitches/react/types/util").Function | {
        [name: string]: unknown;
    })[], CSS_1 = import("@stitches/react/types/css-util").CSS<{
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    }, {
        fonts: {
            [x: string]: any;
            primary: string;
            secondary: string;
        };
        fontSize: {
            XS: string;
            SM: string;
            BASE: string;
            LG: string;
            H6: string;
            H5: string;
            H4: string;
            H3: string;
            H2: string;
            H1: string;
            HEADLINE: string;
        };
        fontWeights: {
            LIGHT: number;
            REGULAR: number;
            MEDIUM: number;
            SEMIBOLD: number;
            BOLD: number;
            EXTRABOLD: number;
            BLACK: number;
        };
        lineHeights: {
            SHORTER: string;
            SHORT: string;
            NORMAL: string;
            TALL: string;
            TALLER: string;
        };
        radii: {
            [x: string]: any;
        };
        space: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        [x: string]: any;
    }>>(...composers: { [K_1 in keyof Composers_1]: string extends Composers_1[K_1] ? Composers_1[K_1] : Composers_1[K_1] extends string | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | import("@stitches/react/types/util").Function ? Composers_1[K_1] : import("@stitches/react/types/stitches").RemoveIndex<CSS_1> & {
        variants?: {
            [x: string]: {
                [x: string]: CSS_1;
                [x: number]: CSS_1;
            };
        };
        compoundVariants?: (("variants" extends keyof Composers_1[K_1] ? Composers_1[K_1][keyof Composers_1[K_1] & "variants"] extends infer T_3 ? { [Name_2 in keyof T_3]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers_1[K_1][keyof Composers_1[K_1] & "variants"][Name_2]>; } : never : import("@stitches/react/types/util").WideObject) & {
            css: CSS_1;
        })[];
        defaultVariants?: "variants" extends keyof Composers_1[K_1] ? Composers_1[K_1][keyof Composers_1[K_1] & "variants"] extends infer T_4 ? { [Name_3 in keyof T_4]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers_1[K_1][keyof Composers_1[K_1] & "variants"][Name_3]>; } : never : import("@stitches/react/types/util").WideObject;
    } & CSS_1 & (Composers_1[K_1] extends infer T_5 ? { [K2_1 in keyof T_5]: K2_1 extends "variants" | "compoundVariants" | "defaultVariants" ? unknown : K2_1 extends keyof CSS_1 ? CSS_1[K2_1] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers_1>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers_1>, {
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    }, CSS_1>;
    theme: string & {
        className: string;
        selector: string;
    } & {
        fonts: {
            [x: string]: import("@stitches/react/types/theme").Token<string, string, "fonts", "cbs">;
            primary: import("@stitches/react/types/theme").Token<"primary", string, "fonts", "cbs">;
            secondary: import("@stitches/react/types/theme").Token<"secondary", string, "fonts", "cbs">;
        };
        fontSize: {
            XS: import("@stitches/react/types/theme").Token<"XS", string, "fontSize", "cbs">;
            SM: import("@stitches/react/types/theme").Token<"SM", string, "fontSize", "cbs">;
            BASE: import("@stitches/react/types/theme").Token<"BASE", string, "fontSize", "cbs">;
            LG: import("@stitches/react/types/theme").Token<"LG", string, "fontSize", "cbs">;
            H6: import("@stitches/react/types/theme").Token<"H6", string, "fontSize", "cbs">;
            H5: import("@stitches/react/types/theme").Token<"H5", string, "fontSize", "cbs">;
            H4: import("@stitches/react/types/theme").Token<"H4", string, "fontSize", "cbs">;
            H3: import("@stitches/react/types/theme").Token<"H3", string, "fontSize", "cbs">;
            H2: import("@stitches/react/types/theme").Token<"H2", string, "fontSize", "cbs">;
            H1: import("@stitches/react/types/theme").Token<"H1", string, "fontSize", "cbs">;
            HEADLINE: import("@stitches/react/types/theme").Token<"HEADLINE", string, "fontSize", "cbs">;
        };
        fontWeights: {
            LIGHT: import("@stitches/react/types/theme").Token<"LIGHT", string, "fontWeights", "cbs">;
            REGULAR: import("@stitches/react/types/theme").Token<"REGULAR", string, "fontWeights", "cbs">;
            MEDIUM: import("@stitches/react/types/theme").Token<"MEDIUM", string, "fontWeights", "cbs">;
            SEMIBOLD: import("@stitches/react/types/theme").Token<"SEMIBOLD", string, "fontWeights", "cbs">;
            BOLD: import("@stitches/react/types/theme").Token<"BOLD", string, "fontWeights", "cbs">;
            EXTRABOLD: import("@stitches/react/types/theme").Token<"EXTRABOLD", string, "fontWeights", "cbs">;
            BLACK: import("@stitches/react/types/theme").Token<"BLACK", string, "fontWeights", "cbs">;
        };
        lineHeights: {
            SHORTER: import("@stitches/react/types/theme").Token<"SHORTER", string, "lineHeights", "cbs">;
            SHORT: import("@stitches/react/types/theme").Token<"SHORT", string, "lineHeights", "cbs">;
            NORMAL: import("@stitches/react/types/theme").Token<"NORMAL", string, "lineHeights", "cbs">;
            TALL: import("@stitches/react/types/theme").Token<"TALL", string, "lineHeights", "cbs">;
            TALLER: import("@stitches/react/types/theme").Token<"TALLER", string, "lineHeights", "cbs">;
        };
        radii: {
            [x: string]: import("@stitches/react/types/theme").Token<string, string, "radii", "cbs">;
        };
        space: {};
    };
    createTheme: <Argument0 extends string | ({
        fonts?: {
            [x: string]: string | number | boolean;
            primary?: string | number | boolean;
            secondary?: string | number | boolean;
        };
        fontSize?: {
            XS?: string | number | boolean;
            SM?: string | number | boolean;
            BASE?: string | number | boolean;
            LG?: string | number | boolean;
            H6?: string | number | boolean;
            H5?: string | number | boolean;
            H4?: string | number | boolean;
            H3?: string | number | boolean;
            H2?: string | number | boolean;
            H1?: string | number | boolean;
            HEADLINE?: string | number | boolean;
        };
        fontWeights?: {
            LIGHT?: string | number | boolean;
            REGULAR?: string | number | boolean;
            MEDIUM?: string | number | boolean;
            SEMIBOLD?: string | number | boolean;
            BOLD?: string | number | boolean;
            EXTRABOLD?: string | number | boolean;
            BLACK?: string | number | boolean;
        };
        lineHeights?: {
            SHORTER?: string | number | boolean;
            SHORT?: string | number | boolean;
            NORMAL?: string | number | boolean;
            TALL?: string | number | boolean;
            TALLER?: string | number | boolean;
        };
        radii?: {
            [x: string]: string | number | boolean;
        };
        space?: {};
    } & {
        [x: string]: {
            [x: string]: string | number | boolean;
            [x: number]: string | number | boolean;
        };
    }), Argument1 extends string | ({
        fonts?: {
            [x: string]: string | number | boolean;
            primary?: string | number | boolean;
            secondary?: string | number | boolean;
        };
        fontSize?: {
            XS?: string | number | boolean;
            SM?: string | number | boolean;
            BASE?: string | number | boolean;
            LG?: string | number | boolean;
            H6?: string | number | boolean;
            H5?: string | number | boolean;
            H4?: string | number | boolean;
            H3?: string | number | boolean;
            H2?: string | number | boolean;
            H1?: string | number | boolean;
            HEADLINE?: string | number | boolean;
        };
        fontWeights?: {
            LIGHT?: string | number | boolean;
            REGULAR?: string | number | boolean;
            MEDIUM?: string | number | boolean;
            SEMIBOLD?: string | number | boolean;
            BOLD?: string | number | boolean;
            EXTRABOLD?: string | number | boolean;
            BLACK?: string | number | boolean;
        };
        lineHeights?: {
            SHORTER?: string | number | boolean;
            SHORT?: string | number | boolean;
            NORMAL?: string | number | boolean;
            TALL?: string | number | boolean;
            TALLER?: string | number | boolean;
        };
        radii?: {
            [x: string]: string | number | boolean;
        };
        space?: {};
    } & {
        [x: string]: {
            [x: string]: string | number | boolean;
            [x: number]: string | number | boolean;
        };
    })>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1) => string & {
        className: string;
        selector: string;
    } & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, "cbs"> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "cbs">);
    getCssText: () => string;
    globalCss: <Styles extends {
        [K: string]: any;
    }>(...styles: ({
        '@import'?: unknown;
        '@font-face'?: unknown;
    } & { [K_2 in keyof Styles]: K_2 extends "@import" ? string | string[] : K_2 extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K_2 extends `@keyframes ${string}` ? {
        [x: string]: import("@stitches/react/types/css-util").CSS<{
            xs: `(min-width: ${number}px)`;
            sm: `(min-width: ${number}px)`;
            md: `(min-width: ${number}px)`;
            lg: `(min-width: ${number}px)`;
            xl: `(min-width: ${number}px)`;
            xxl: `(min-width:${number}px)`;
        }, {
            fonts: {
                [x: string]: any;
                primary: string;
                secondary: string;
            };
            fontSize: {
                XS: string;
                SM: string;
                BASE: string;
                LG: string;
                H6: string;
                H5: string;
                H4: string;
                H3: string;
                H2: string;
                H1: string;
                HEADLINE: string;
            };
            fontWeights: {
                LIGHT: number;
                REGULAR: number;
                MEDIUM: number;
                SEMIBOLD: number;
                BOLD: number;
                EXTRABOLD: number;
                BLACK: number;
            };
            lineHeights: {
                SHORTER: string;
                SHORT: string;
                NORMAL: string;
                TALL: string;
                TALLER: string;
            };
            radii: {
                [x: string]: any;
            };
            space: unknown;
        }, import("@stitches/react/types/config").DefaultThemeMap, {
            [x: string]: any;
        }>;
    } : K_2 extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    }, {
        fonts: {
            [x: string]: any;
            primary: string;
            secondary: string;
        };
        fontSize: {
            XS: string;
            SM: string;
            BASE: string;
            LG: string;
            H6: string;
            H5: string;
            H4: string;
            H3: string;
            H2: string;
            H1: string;
            HEADLINE: string;
        };
        fontWeights: {
            LIGHT: number;
            REGULAR: number;
            MEDIUM: number;
            SEMIBOLD: number;
            BOLD: number;
            EXTRABOLD: number;
            BLACK: number;
        };
        lineHeights: {
            SHORTER: string;
            SHORT: string;
            NORMAL: string;
            TALL: string;
            TALLER: string;
        };
        radii: {
            [x: string]: any;
        };
        space: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        [x: string]: any;
    }>; })[]) => () => string;
    keyframes: (style: {
        [offset: string]: import("@stitches/react/types/css-util").CSS<{
            xs: `(min-width: ${number}px)`;
            sm: `(min-width: ${number}px)`;
            md: `(min-width: ${number}px)`;
            lg: `(min-width: ${number}px)`;
            xl: `(min-width: ${number}px)`;
            xxl: `(min-width:${number}px)`;
        }, {
            fonts: {
                [x: string]: any;
                primary: string;
                secondary: string;
            };
            fontSize: {
                XS: string;
                SM: string;
                BASE: string;
                LG: string;
                H6: string;
                H5: string;
                H4: string;
                H3: string;
                H2: string;
                H1: string;
                HEADLINE: string;
            };
            fontWeights: {
                LIGHT: number;
                REGULAR: number;
                MEDIUM: number;
                SEMIBOLD: number;
                BOLD: number;
                EXTRABOLD: number;
                BLACK: number;
            };
            lineHeights: {
                SHORTER: string;
                SHORT: string;
                NORMAL: string;
                TALL: string;
                TALLER: string;
            };
            radii: {
                [x: string]: any;
            };
            space: unknown;
        }, import("@stitches/react/types/config").DefaultThemeMap, {
            [x: string]: any;
        }>;
    }) => {
        (): string;
        name: string;
    };
    config: {
        prefix: "cbs";
        media: {
            xs: `(min-width: ${number}px)`;
            sm: `(min-width: ${number}px)`;
            md: `(min-width: ${number}px)`;
            lg: `(min-width: ${number}px)`;
            xl: `(min-width: ${number}px)`;
            xxl: `(min-width:${number}px)`;
        };
        theme: {
            fonts: {
                [x: string]: any;
                primary: string;
                secondary: string;
            };
            fontSize: {
                XS: string;
                SM: string;
                BASE: string;
                LG: string;
                H6: string;
                H5: string;
                H4: string;
                H3: string;
                H2: string;
                H1: string;
                HEADLINE: string;
            };
            fontWeights: {
                LIGHT: number;
                REGULAR: number;
                MEDIUM: number;
                SEMIBOLD: number;
                BOLD: number;
                EXTRABOLD: number;
                BLACK: number;
            };
            lineHeights: {
                SHORTER: string;
                SHORT: string;
                NORMAL: string;
                TALL: string;
                TALLER: string;
            };
            radii: {
                [x: string]: any;
            };
            space: unknown;
        };
        themeMap: import("@stitches/react/types/config").DefaultThemeMap;
        utils: {
            [x: string]: any;
        };
    };
    reset: () => void;
};
export declare const styled: <Type extends keyof JSX.IntrinsicElements | import("react").ComponentType<any> | import("@stitches/react/types/util").Function, Composers extends (string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    xs: `(min-width: ${number}px)`;
    sm: `(min-width: ${number}px)`;
    md: `(min-width: ${number}px)`;
    lg: `(min-width: ${number}px)`;
    xl: `(min-width: ${number}px)`;
    xxl: `(min-width:${number}px)`;
}, {
    fonts: {
        [x: string]: any;
        primary: string;
        secondary: string;
    };
    fontSize: {
        XS: string;
        SM: string;
        BASE: string;
        LG: string;
        H6: string;
        H5: string;
        H4: string;
        H3: string;
        H2: string;
        H1: string;
        HEADLINE: string;
    };
    fontWeights: {
        LIGHT: number;
        REGULAR: number;
        MEDIUM: number;
        SEMIBOLD: number;
        BOLD: number;
        EXTRABOLD: number;
        BLACK: number;
    };
    lineHeights: {
        SHORTER: string;
        SHORT: string;
        NORMAL: string;
        TALL: string;
        TALLER: string;
    };
    radii: {
        [x: string]: any;
    };
    space: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {
    [x: string]: any;
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : never : import("@stitches/react/types/util").WideObject;
} & CSS & (Composers[K] extends infer T ? { [K2 in keyof T]: K2 extends "variants" | "compoundVariants" | "defaultVariants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    xs: `(min-width: ${number}px)`;
    sm: `(min-width: ${number}px)`;
    md: `(min-width: ${number}px)`;
    lg: `(min-width: ${number}px)`;
    xl: `(min-width: ${number}px)`;
    xxl: `(min-width:${number}px)`;
}, import("@stitches/react/types/css-util").CSS<{
    xs: `(min-width: ${number}px)`;
    sm: `(min-width: ${number}px)`;
    md: `(min-width: ${number}px)`;
    lg: `(min-width: ${number}px)`;
    xl: `(min-width: ${number}px)`;
    xxl: `(min-width:${number}px)`;
}, {
    fonts: {
        [x: string]: any;
        primary: string;
        secondary: string;
    };
    fontSize: {
        XS: string;
        SM: string;
        BASE: string;
        LG: string;
        H6: string;
        H5: string;
        H4: string;
        H3: string;
        H2: string;
        H1: string;
        HEADLINE: string;
    };
    fontWeights: {
        LIGHT: number;
        REGULAR: number;
        MEDIUM: number;
        SEMIBOLD: number;
        BOLD: number;
        EXTRABOLD: number;
        BLACK: number;
    };
    lineHeights: {
        SHORTER: string;
        SHORT: string;
        NORMAL: string;
        TALL: string;
        TALLER: string;
    };
    radii: {
        [x: string]: any;
    };
    space: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {
    [x: string]: any;
}>>, css: <Composers extends (string | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | import("@stitches/react/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    xs: `(min-width: ${number}px)`;
    sm: `(min-width: ${number}px)`;
    md: `(min-width: ${number}px)`;
    lg: `(min-width: ${number}px)`;
    xl: `(min-width: ${number}px)`;
    xxl: `(min-width:${number}px)`;
}, {
    fonts: {
        [x: string]: any;
        primary: string;
        secondary: string;
    };
    fontSize: {
        XS: string;
        SM: string;
        BASE: string;
        LG: string;
        H6: string;
        H5: string;
        H4: string;
        H3: string;
        H2: string;
        H1: string;
        HEADLINE: string;
    };
    fontWeights: {
        LIGHT: number;
        REGULAR: number;
        MEDIUM: number;
        SEMIBOLD: number;
        BOLD: number;
        EXTRABOLD: number;
        BLACK: number;
    };
    lineHeights: {
        SHORTER: string;
        SHORT: string;
        NORMAL: string;
        TALL: string;
        TALLER: string;
    };
    radii: {
        [x: string]: any;
    };
    space: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {
    [x: string]: any;
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | import("@stitches/react/types/util").Function ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers_1[K_1] ? Composers_1[K_1][keyof Composers_1[K_1] & "variants"] extends infer T_3 ? { [Name_2 in keyof T_3]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers_1[K_1][keyof Composers_1[K_1] & "variants"][Name_2]>; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS_1;
    })[];
    defaultVariants?: "variants" extends keyof Composers_1[K_1] ? Composers_1[K_1][keyof Composers_1[K_1] & "variants"] extends infer T_4 ? { [Name_3 in keyof T_4]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers_1[K_1][keyof Composers_1[K_1] & "variants"][Name_3]>; } : never : import("@stitches/react/types/util").WideObject;
} & CSS & (Composers[K] extends infer T ? { [K2 in keyof T]: K2 extends "variants" | "compoundVariants" | "defaultVariants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    xs: `(min-width: ${number}px)`;
    sm: `(min-width: ${number}px)`;
    md: `(min-width: ${number}px)`;
    lg: `(min-width: ${number}px)`;
    xl: `(min-width: ${number}px)`;
    xxl: `(min-width:${number}px)`;
}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    }, {
        fonts: {
            [x: string]: any;
            primary: string;
            secondary: string;
        };
        fontSize: {
            XS: string;
            SM: string;
            BASE: string;
            LG: string;
            H6: string;
            H5: string;
            H4: string;
            H3: string;
            H2: string;
            H1: string;
            HEADLINE: string;
        };
        fontWeights: {
            LIGHT: number;
            REGULAR: number;
            MEDIUM: number;
            SEMIBOLD: number;
            BOLD: number;
            EXTRABOLD: number;
            BLACK: number;
        };
        lineHeights: {
            SHORTER: string;
            SHORT: string;
            NORMAL: string;
            TALL: string;
            TALLER: string;
        };
        radii: {
            [x: string]: any;
        };
        space: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        [x: string]: any;
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    xs: `(min-width: ${number}px)`;
    sm: `(min-width: ${number}px)`;
    md: `(min-width: ${number}px)`;
    lg: `(min-width: ${number}px)`;
    xl: `(min-width: ${number}px)`;
    xxl: `(min-width:${number}px)`;
}, {
    fonts: {
        [x: string]: any;
        primary: string;
        secondary: string;
    };
    fontSize: {
        XS: string;
        SM: string;
        BASE: string;
        LG: string;
        H6: string;
        H5: string;
        H4: string;
        H3: string;
        H2: string;
        H1: string;
        HEADLINE: string;
    };
    fontWeights: {
        LIGHT: number;
        REGULAR: number;
        MEDIUM: number;
        SEMIBOLD: number;
        BOLD: number;
        EXTRABOLD: number;
        BLACK: number;
    };
    lineHeights: {
        SHORTER: string;
        SHORT: string;
        NORMAL: string;
        TALL: string;
        TALLER: string;
    };
    radii: {
        [x: string]: any;
    };
    space: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {
    [x: string]: any;
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    }, {
        fonts: {
            [x: string]: any;
            primary: string;
            secondary: string;
        };
        fontSize: {
            XS: string;
            SM: string;
            BASE: string;
            LG: string;
            H6: string;
            H5: string;
            H4: string;
            H3: string;
            H2: string;
            H1: string;
            HEADLINE: string;
        };
        fontWeights: {
            LIGHT: number;
            REGULAR: number;
            MEDIUM: number;
            SEMIBOLD: number;
            BOLD: number;
            EXTRABOLD: number;
            BLACK: number;
        };
        lineHeights: {
            SHORTER: string;
            SHORT: string;
            NORMAL: string;
            TALL: string;
            TALLER: string;
        };
        radii: {
            [x: string]: any;
        };
        space: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        [x: string]: any;
    }>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    fonts: {
        [x: string]: import("@stitches/react/types/theme").Token<string, string, "fonts", "cbs">;
        primary: import("@stitches/react/types/theme").Token<"primary", string, "fonts", "cbs">;
        secondary: import("@stitches/react/types/theme").Token<"secondary", string, "fonts", "cbs">;
    };
    fontSize: {
        XS: import("@stitches/react/types/theme").Token<"XS", string, "fontSize", "cbs">;
        SM: import("@stitches/react/types/theme").Token<"SM", string, "fontSize", "cbs">;
        BASE: import("@stitches/react/types/theme").Token<"BASE", string, "fontSize", "cbs">;
        LG: import("@stitches/react/types/theme").Token<"LG", string, "fontSize", "cbs">;
        H6: import("@stitches/react/types/theme").Token<"H6", string, "fontSize", "cbs">;
        H5: import("@stitches/react/types/theme").Token<"H5", string, "fontSize", "cbs">;
        H4: import("@stitches/react/types/theme").Token<"H4", string, "fontSize", "cbs">;
        H3: import("@stitches/react/types/theme").Token<"H3", string, "fontSize", "cbs">;
        H2: import("@stitches/react/types/theme").Token<"H2", string, "fontSize", "cbs">;
        H1: import("@stitches/react/types/theme").Token<"H1", string, "fontSize", "cbs">;
        HEADLINE: import("@stitches/react/types/theme").Token<"HEADLINE", string, "fontSize", "cbs">;
    };
    fontWeights: {
        LIGHT: import("@stitches/react/types/theme").Token<"LIGHT", string, "fontWeights", "cbs">;
        REGULAR: import("@stitches/react/types/theme").Token<"REGULAR", string, "fontWeights", "cbs">;
        MEDIUM: import("@stitches/react/types/theme").Token<"MEDIUM", string, "fontWeights", "cbs">;
        SEMIBOLD: import("@stitches/react/types/theme").Token<"SEMIBOLD", string, "fontWeights", "cbs">;
        BOLD: import("@stitches/react/types/theme").Token<"BOLD", string, "fontWeights", "cbs">;
        EXTRABOLD: import("@stitches/react/types/theme").Token<"EXTRABOLD", string, "fontWeights", "cbs">;
        BLACK: import("@stitches/react/types/theme").Token<"BLACK", string, "fontWeights", "cbs">;
    };
    lineHeights: {
        SHORTER: import("@stitches/react/types/theme").Token<"SHORTER", string, "lineHeights", "cbs">;
        SHORT: import("@stitches/react/types/theme").Token<"SHORT", string, "lineHeights", "cbs">;
        NORMAL: import("@stitches/react/types/theme").Token<"NORMAL", string, "lineHeights", "cbs">;
        TALL: import("@stitches/react/types/theme").Token<"TALL", string, "lineHeights", "cbs">;
        TALLER: import("@stitches/react/types/theme").Token<"TALLER", string, "lineHeights", "cbs">;
    };
    radii: {
        [x: string]: import("@stitches/react/types/theme").Token<string, string, "radii", "cbs">;
    };
    space: {};
}, config: {
    prefix: "cbs";
    media: {
        xs: `(min-width: ${number}px)`;
        sm: `(min-width: ${number}px)`;
        md: `(min-width: ${number}px)`;
        lg: `(min-width: ${number}px)`;
        xl: `(min-width: ${number}px)`;
        xxl: `(min-width:${number}px)`;
    };
    theme: {
        fonts: {
            [x: string]: any;
            primary: string;
            secondary: string;
        };
        fontSize: {
            XS: string;
            SM: string;
            BASE: string;
            LG: string;
            H6: string;
            H5: string;
            H4: string;
            H3: string;
            H2: string;
            H1: string;
            HEADLINE: string;
        };
        fontWeights: {
            LIGHT: number;
            REGULAR: number;
            MEDIUM: number;
            SEMIBOLD: number;
            BOLD: number;
            EXTRABOLD: number;
            BLACK: number;
        };
        lineHeights: {
            SHORTER: string;
            SHORT: string;
            NORMAL: string;
            TALL: string;
            TALLER: string;
        };
        radii: {
            [x: string]: any;
        };
        space: unknown;
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        [x: string]: any;
    };
};
export default stitches;
//# sourceMappingURL=stitches.config.d.ts.map