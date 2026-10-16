import { S } from "./HVr.js";
import { tc } from "./colorRegistry.js";
import { HV, oQr } from "./editorColorRegistry.js";
import { DBe, KXr, Lge, are, kgn } from "./editorColors.js";
import { rt } from "./nls.js";
import { Lt, pa } from "./qIc.js";
import { Dq, Ry, k0t, p5n } from "./theme_2.js";
import { x } from "./tslib.es6.js";
var t4, gir, FDo, c5h, l5h, dzt, u5h, d5h, h5h, p5h, m5h, BDo, kd_, g5h, f5h, wd_, v5h, _5h, b5h, y5h, Cd_, Td_, Ed_, fir;
export { BDo, Cd_, Ed_, FDo, Td_, _5h, b5h, c5h, d5h, dzt, f5h, fir, g5h, gir, h5h, kd_, l5h, m5h, p5h, t4, u5h, v5h, wd_, y5h };
var __wakaru_a7e_initialized = false;
export function a7e() {
if (__wakaru_a7e_initialized) return;
__wakaru_a7e_initialized = true;
"use strict";
x(), HV(), rt(), tc(), Ry(), t4 = [], gir = Lt("terminal.background", null, S(10416, null)), FDo = Lt("terminal.foreground", {
    light: "#333333",
    dark: "#CCCCCC",
    hcDark: "#FFFFFF",
    hcLight: "#292929"
}, S(10417, null)), c5h = Lt("terminalCursor.foreground", null, S(10418, null)), l5h = Lt("terminalCursor.background", null, S(10419, null)), dzt = Lt("terminal.selectionBackground", Lge, S(10420, null)), u5h = Lt("terminal.inactiveSelectionBackground", {
    light: pa(dzt, .5),
    dark: pa(dzt, .5),
    hcDark: pa(dzt, .7),
    hcLight: pa(dzt, .5)
}, S(10421, null)), d5h = Lt("terminal.selectionForeground", {
    light: null,
    dark: null,
    hcDark: "#000000",
    hcLight: "#ffffff"
}, S(10422, null)), h5h = Lt("terminalCommandDecoration.defaultBackground", {
    light: "#00000040",
    dark: "#ffffff40",
    hcDark: "#ffffff80",
    hcLight: "#00000040"
}, S(10423, null)), p5h = Lt("terminalCommandDecoration.successBackground", {
    dark: "#1B81A8",
    light: "#2090D3",
    hcDark: "#1B81A8",
    hcLight: "#007100"
}, S(10424, null)), m5h = Lt("terminalCommandDecoration.errorBackground", {
    dark: "#F14C4C",
    light: "#E51400",
    hcDark: "#F14C4C",
    hcLight: "#B5200D"
}, S(10425, null)), BDo = Lt("terminalOverviewRuler.cursorForeground", "#A0A0A0CC", S(10426, null)), kd_ = Lt("terminal.border", Dq, S(10427, null)), g5h = Lt("terminalOverviewRuler.border", oQr, S(10428, null)), f5h = Lt("terminal.findMatchBackground", {
    dark: kgn,
    light: kgn,
    hcDark: null,
    hcLight: "#0F4A85"
}, S(10429, null), !0), wd_ = Lt("terminal.hoverHighlightBackground", pa(KXr, .5), S(10430, null)), v5h = Lt("terminal.findMatchBorder", {
    dark: null,
    light: null,
    hcDark: "#f38518",
    hcLight: "#0F4A85"
}, S(10431, null)), _5h = Lt("terminal.findMatchHighlightBackground", {
    dark: are,
    light: are,
    hcDark: null,
    hcLight: null
}, S(10432, null), !0), b5h = Lt("terminal.findMatchHighlightBorder", {
    dark: null,
    light: null,
    hcDark: "#f38518",
    hcLight: "#0F4A85"
}, S(10433, null)), y5h = Lt("terminalOverviewRuler.findMatchForeground", {
    dark: DBe,
    light: DBe,
    hcDark: "#f38518",
    hcLight: "#0F4A85"
}, S(10434, null)), Cd_ = Lt("terminal.dropBackground", k0t, S(10435, null), !0), Td_ = Lt("terminal.tab.activeBorder", p5n, S(10436, null)), Ed_ = Lt("terminal.initialHintForeground", {
    dark: "#ffffff56",
    light: "#0007",
    hcDark: null,
    hcLight: null
}, S(10437, null)), fir = {
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
