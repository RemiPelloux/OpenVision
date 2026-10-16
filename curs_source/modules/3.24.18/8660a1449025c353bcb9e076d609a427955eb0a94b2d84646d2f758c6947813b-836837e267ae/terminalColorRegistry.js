import { D } from "./Iwo.js";
import { Ap } from "./colorRegistry.js";
import { doe, fjo } from "./editorColorRegistry.js";
import { IUo, Mtt, Pwr, b5e, cwe } from "./editorColors.js";
import { Bt } from "./nls.js";
import { I2, I9e, gAi, tKt } from "./theme_2.js";
import { E } from "./tslib.es6.js";
import { iu, mn } from "./ze.js";
var QJ, Lds, _vl, FRg, BRg, v2n, URg, jRg, $Rg, HRg, WRg, bvl, EMk, GRg, qRg, IMk, zRg, VRg, KRg, YRg, xMk, AMk, RMk, Ods;
export { $Rg, AMk, BRg, EMk, FRg, GRg, HRg, IMk, KRg, Lds, Ods, QJ, RMk, URg, VRg, WRg, YRg, _vl, bvl, jRg, qRg, v2n, xMk, zRg };
var __wakaru_XEt_initialized = false;
export function XEt() {
if (__wakaru_XEt_initialized) return;
__wakaru_XEt_initialized = true;
"use strict";
E(), doe(), Bt(), Ap(), I2(), QJ = [], Lds = mn("terminal.background", null, D(10416, null)), _vl = mn("terminal.foreground", {
    light: "#333333",
    dark: "#CCCCCC",
    hcDark: "#FFFFFF",
    hcLight: "#292929"
}, D(10417, null)), FRg = mn("terminalCursor.foreground", null, D(10418, null)), BRg = mn("terminalCursor.background", null, D(10419, null)), v2n = mn("terminal.selectionBackground", b5e, D(10420, null)), URg = mn("terminal.inactiveSelectionBackground", {
    light: iu(v2n, .5),
    dark: iu(v2n, .5),
    hcDark: iu(v2n, .7),
    hcLight: iu(v2n, .5)
}, D(10421, null)), jRg = mn("terminal.selectionForeground", {
    light: null,
    dark: null,
    hcDark: "#000000",
    hcLight: "#ffffff"
}, D(10422, null)), $Rg = mn("terminalCommandDecoration.defaultBackground", {
    light: "#00000040",
    dark: "#ffffff40",
    hcDark: "#ffffff80",
    hcLight: "#00000040"
}, D(10423, null)), HRg = mn("terminalCommandDecoration.successBackground", {
    dark: "#1B81A8",
    light: "#2090D3",
    hcDark: "#1B81A8",
    hcLight: "#007100"
}, D(10424, null)), WRg = mn("terminalCommandDecoration.errorBackground", {
    dark: "#F14C4C",
    light: "#E51400",
    hcDark: "#F14C4C",
    hcLight: "#B5200D"
}, D(10425, null)), bvl = mn("terminalOverviewRuler.cursorForeground", "#A0A0A0CC", D(10426, null)), EMk = mn("terminal.border", I9e, D(10427, null)), GRg = mn("terminalOverviewRuler.border", fjo, D(10428, null)), qRg = mn("terminal.findMatchBackground", {
    dark: Pwr,
    light: Pwr,
    hcDark: null,
    hcLight: "#0F4A85"
}, D(10429, null), !0), IMk = mn("terminal.hoverHighlightBackground", iu(IUo, .5), D(10430, null)), zRg = mn("terminal.findMatchBorder", {
    dark: null,
    light: null,
    hcDark: "#f38518",
    hcLight: "#0F4A85"
}, D(10431, null)), VRg = mn("terminal.findMatchHighlightBackground", {
    dark: cwe,
    light: cwe,
    hcDark: null,
    hcLight: null
}, D(10432, null), !0), KRg = mn("terminal.findMatchHighlightBorder", {
    dark: null,
    light: null,
    hcDark: "#f38518",
    hcLight: "#0F4A85"
}, D(10433, null)), YRg = mn("terminalOverviewRuler.findMatchForeground", {
    dark: Mtt,
    light: Mtt,
    hcDark: "#f38518",
    hcLight: "#0F4A85"
}, D(10434, null)), xMk = mn("terminal.dropBackground", tKt, D(10435, null), !0), AMk = mn("terminal.tab.activeBorder", gAi, D(10436, null)), RMk = mn("terminal.initialHintForeground", {
    dark: "#ffffff56",
    light: "#0007",
    hcDark: null,
    hcLight: null
}, D(10437, null)), Ods = {
    "terminal.ansiBlack": {
        index: 0,
        defaults: {
            light: "#000000",
            dark: "#000000",
            hcDark: "#000000",
            hcLight: "#292929"
        }
    },
    "terminal.ansiRed": {
        index: 1,
        defaults: {
            light: "#cd3131",
            dark: "#cd3131",
            hcDark: "#cd0000",
            hcLight: "#cd3131"
        }
    },
    "terminal.ansiGreen": {
        index: 2,
        defaults: {
            light: "#107C10",
            dark: "#0DBC79",
            hcDark: "#00cd00",
            hcLight: "#136C13"
        }
    },
    "terminal.ansiYellow": {
        index: 3,
        defaults: {
            light: "#949800",
            dark: "#e5e510",
            hcDark: "#cdcd00",
            hcLight: "#949800"
        }
    },
    "terminal.ansiBlue": {
        index: 4,
        defaults: {
            light: "#0451a5",
            dark: "#2472c8",
            hcDark: "#0000ee",
            hcLight: "#0451a5"
        }
    },
    "terminal.ansiMagenta": {
        index: 5,
        defaults: {
            light: "#bc05bc",
            dark: "#bc3fbc",
            hcDark: "#cd00cd",
            hcLight: "#bc05bc"
        }
    },
    "terminal.ansiCyan": {
        index: 6,
        defaults: {
            light: "#0598bc",
            dark: "#11a8cd",
            hcDark: "#00cdcd",
            hcLight: "#0598bc"
        }
    },
    "terminal.ansiWhite": {
        index: 7,
        defaults: {
            light: "#555555",
            dark: "#e5e5e5",
            hcDark: "#e5e5e5",
            hcLight: "#555555"
        }
    },
    "terminal.ansiBrightBlack": {
        index: 8,
        defaults: {
            light: "#666666",
            dark: "#666666",
            hcDark: "#7f7f7f",
            hcLight: "#666666"
        }
    },
    "terminal.ansiBrightRed": {
        index: 9,
        defaults: {
            light: "#cd3131",
            dark: "#f14c4c",
            hcDark: "#ff0000",
            hcLight: "#cd3131"
        }
    },
    "terminal.ansiBrightGreen": {
        index: 10,
        defaults: {
            light: "#14CE14",
            dark: "#23d18b",
            hcDark: "#00ff00",
            hcLight: "#00bc00"
        }
    },
    "terminal.ansiBrightYellow": {
        index: 11,
        defaults: {
            light: "#b5ba00",
            dark: "#f5f543",
            hcDark: "#ffff00",
            hcLight: "#b5ba00"
        }
    },
    "terminal.ansiBrightBlue": {
        index: 12,
        defaults: {
            light: "#0451a5",
            dark: "#3b8eea",
            hcDark: "#5c5cff",
            hcLight: "#0451a5"
        }
    },
    "terminal.ansiBrightMagenta": {
        index: 13,
        defaults: {
            light: "#bc05bc",
            dark: "#d670d6",
            hcDark: "#ff00ff",
            hcLight: "#bc05bc"
        }
    },
    "terminal.ansiBrightCyan": {
        index: 14,
        defaults: {
            light: "#0598bc",
            dark: "#29b8db",
            hcDark: "#00ffff",
            hcLight: "#0598bc"
        }
    },
    "terminal.ansiBrightWhite": {
        index: 15,
        defaults: {
            light: "#a5a5a5",
            dark: "#e5e5e5",
            hcDark: "#ffffff",
            hcLight: "#a5a5a5"
        }
    }
};

}
