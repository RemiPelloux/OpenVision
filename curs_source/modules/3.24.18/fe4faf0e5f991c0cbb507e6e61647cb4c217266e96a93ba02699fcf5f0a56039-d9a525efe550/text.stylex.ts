import { i } from "./plugin-brand-icon.js";
import { X$e, _Tt, dC, jY, kJn, qy, v1, vJn, vw, wTt } from "./typography.stylex.ts";
function xJn({ color: r, size: e, truncate: a, variant: s, weight: l }) {
    return [
        $p.base,
        jY.root,
        CJn[e],
        SJn[l],
        s === "code" ? $p.variantCode : null,
        r ? EJn[r] : null,
        a === "start" ? $p.truncateStart : null,
        a === "end" ? dC.root : null
    ];
}
var $p, CJn, SJn, EJn;
export { $p, CJn, EJn, SJn, xJn };
var __wakaru_oki_initialized = false;
export function oki() {
if (__wakaru_oki_initialized) return;
__wakaru_oki_initialized = true;
"use strict";
v1(), $p = {
    base: {
        kMv6JI: "ui-1acoasx",
        keoZOQ: "ui-dj266r",
        k71WvV: "ui-14z9mp",
        k1K539: "ui-at24cr",
        keTefX: "ui-1lziwak",
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-yri2b",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1c1uobl",
        $$css: !0
    },
    sizeInherit: {
        kGuDYH: "ui-1qlqyl8",
        kLWn49: "ui-15bjb6t",
        kb6lSQ: "ui-4gjf66",
        $$css: !0
    },
    variantCode: {
        kMv6JI: "ui-ul7cyv",
        $$css: !0
    },
    weightRegular: {
        k63SB2: "ui-20ajya",
        $$css: !0
    },
    weightMedium: {
        k63SB2: "ui-1yl5bsf",
        $$css: !0
    },
    weightSemibold: {
        k63SB2: "ui-13ebx5f",
        $$css: !0
    },
    weightBold: {
        k63SB2: "ui-1v8v64w",
        $$css: !0
    },
    colorPrimary: {
        kMwMTN: "ui-1wd3ewq",
        $$css: !0
    },
    colorSecondary: {
        kMwMTN: "ui-19aaqeu",
        $$css: !0
    },
    colorTertiary: {
        kMwMTN: "ui-4b2ntj",
        $$css: !0
    },
    colorQuaternary: {
        kMwMTN: "ui-1e4uaio",
        $$css: !0
    },
    colorActive: {
        kMwMTN: "ui-7qsbfx",
        $$css: !0
    },
    colorFocused: {
        kMwMTN: "ui-zlszhr",
        $$css: !0
    },
    colorRed: {
        kMwMTN: "ui-1jh5svw",
        $$css: !0
    },
    colorRedSecondary: {
        kMwMTN: "ui-o7cye4",
        $$css: !0
    },
    colorYellow: {
        kMwMTN: "ui-1izesbo",
        $$css: !0
    },
    colorYellowSecondary: {
        kMwMTN: "ui-14nh9a",
        $$css: !0
    },
    colorGreen: {
        kMwMTN: "ui-1w5rjie",
        $$css: !0
    },
    colorGreenSecondary: {
        kMwMTN: "ui-dki84f",
        $$css: !0
    },
    colorMagenta: {
        kMwMTN: "ui-xjecij",
        $$css: !0
    },
    colorMagentaSecondary: {
        kMwMTN: "ui-29qggb",
        $$css: !0
    },
    colorCyan: {
        kMwMTN: "ui-1d0l12",
        $$css: !0
    },
    colorCyanSecondary: {
        kMwMTN: "ui-l34bp",
        $$css: !0
    },
    colorOrange: {
        kMwMTN: "ui-11pqmr",
        $$css: !0
    },
    colorOrangeSecondary: {
        kMwMTN: "ui-11nfuof",
        $$css: !0
    },
    truncateStart: {
        k1xSpc: "ui-1lliihq",
        kzqmXN: "ui-h8yej3",
        k7Eaqz: "ui-euugli",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kg5iWk: "ui-lyipyv",
        k8aIck: "ui-jlip5",
        kqG3fB: "ui-kyw5k8",
        ksoyAI: "ui-zyj77d",
        k9WMMc: "ui-dpxx8g",
        $$css: !0
    }
}, CJn = {
    xs: wTt.root,
    sm: qy.root,
    md: vw.root,
    lg: X$e.root,
    xl: _Tt.root,
    "2xl": kJn.root,
    "3xl": vJn.root,
    inherit: $p.sizeInherit
}, SJn = {
    regular: $p.weightRegular,
    medium: $p.weightMedium,
    semibold: $p.weightSemibold,
    bold: $p.weightBold
}, EJn = {
    primary: $p.colorPrimary,
    secondary: $p.colorSecondary,
    tertiary: $p.colorTertiary,
    quaternary: $p.colorQuaternary,
    active: $p.colorActive,
    focused: $p.colorFocused,
    red: $p.colorRed,
    "red-secondary": $p.colorRedSecondary,
    yellow: $p.colorYellow,
    "yellow-secondary": $p.colorYellowSecondary,
    green: $p.colorGreen,
    "green-secondary": $p.colorGreenSecondary,
    magenta: $p.colorMagenta,
    "magenta-secondary": $p.colorMagentaSecondary,
    cyan: $p.colorCyan,
    "cyan-secondary": $p.colorCyanSecondary,
    orange: $p.colorOrange,
    "orange-secondary": $p.colorOrangeSecondary
}, i(xJn, "textStyleForProps");

}
