import { Sk1, wHt } from "./rte-page-ink.stylex.js";
import { Aoe, B5e } from "./tokens.stylex.js";
import { E } from "./tslib.es6.js";
var VTp, Bwt, Ek1, Uwt, bPa, Ik1, M$r, yPa, CHt, KTp, YTp, j_i, $_i, XTp, ZTp, QTp, SPa, Mp, dst, o$, IP, Qhe, D$r, Xne, B0e, JTp;
export { $_i, B0e, Bwt, CHt, D$r, Ek1, IP, Ik1, JTp, KTp, M$r, Mp, QTp, Qhe, SPa, Uwt, VTp, XTp, Xne, YTp, ZTp, bPa, dst, j_i, o$, yPa };
var __wakaru_H_i_initialized = false;
export function H_i() {
if (__wakaru_H_i_initialized) return;
__wakaru_H_i_initialized = true;
"use strict";
E(), B5e(), Sk1(), VTp = {
    k1xSpc: "ui-1rg5ohu",
    kaIpWk: "ui-1e6avla",
    kmuXW: "ui-2lah0s",
    $$css: !0
}, Bwt = wHt.ink, Ek1 = wHt.inkSecondary, Uwt = wHt.inkTertiary, bPa = wHt.hairlineSubtle, Ik1 = wHt.hairline, M$r = wHt.fill, yPa = [
    Bwt,
    Uwt,
    `color-mix(in srgb, ${Uwt} 45%, transparent)`,
    M$r
], CHt = (t, e)=>`var(--rte-page-data-${t}, ${e})`, KTp = 8, YTp = CHt("other", M$r), j_i = (t)=>t < KTp ? CHt(String(t), yPa[Math.min(t, yPa.length - 1)]) : YTp, $_i = (t)=>CHt("0", t), XTp = (t)=>CHt("rest", t), ZTp = CHt("other", Uwt), QTp = CHt("area", "transparent"), SPa = {
    success: `var(--rte-page-tone-success, ${Aoe["--cursor-text-success-primary"]})`,
    warning: `var(--rte-page-tone-warning, ${Aoe["--cursor-text-warning-primary"]})`,
    danger: `var(--rte-page-tone-danger, ${Aoe["--cursor-text-danger-primary"]})`
}, Mp = {
    body1: {
        kGuDYH: "ui-if65rj",
        kLWn49: "ui-1fc57z9",
        kb6lSQ: "ui-12oo3zp",
        $$css: !0
    },
    body2: {
        kGuDYH: "ui-4z9k3i",
        kLWn49: "ui-d4r4e8",
        kb6lSQ: "ui-1yppyca",
        $$css: !0
    },
    label: {
        kGuDYH: "ui-fifm61",
        kLWn49: "ui-1d3mw78",
        kb6lSQ: "ui-12oo3zp",
        $$css: !0
    },
    regular: {
        k63SB2: "ui-o1l8bm",
        $$css: !0
    },
    medium: {
        k63SB2: "ui-k50ysn",
        $$css: !0
    },
    ink: {
        kMwMTN: "ui-gv6h3j",
        $$css: !0
    },
    inkSecondary: {
        kMwMTN: "ui-1g4d90q",
        $$css: !0
    },
    inkTertiary: {
        kMwMTN: "ui-1rrbmv7",
        $$css: !0
    },
    tabular: {
        kcqcaj: "ui-ss6m8b",
        $$css: !0
    },
    right: {
        k9WMMc: "ui-1hr2gdg",
        $$css: !0
    },
    nowrap: {
        khDVqt: "ui-uxw1ft",
        $$css: !0
    },
    truncate: {
        kVQacm: "ui-b3r6kr",
        kg5iWk: "ui-lyipyv",
        khDVqt: "ui-uxw1ft",
        k7Eaqz: "ui-euugli",
        $$css: !0
    },
    tone: (t)=>[
            {
                kMwMTN: t != null ? "ui-14rh7hd" : t,
                $$css: !0
            },
            {
                "--x-color": t ?? void 0
            }
        ]
}, dst = {
    reset: {
        kogj98: "ui-1ghz6dp",
        kmVPX3: "ui-1717udv",
        $$css: !0
    },
    failure: {
        kGuDYH: "ui-1j6dyjg",
        kLWn49: "ui-1d3mw78",
        kMwMTN: "ui-1rrbmv7",
        $$css: !0
    },
    column: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        $$css: !0
    },
    dot: (t, e)=>[
            VTp,
            {
                kzqmXN: t != null ? "ui-5lhr3w" : t,
                kZKoxP: t != null ? "ui-16ye13r" : t,
                kWkggS: e != null ? "ui-l8spv7" : e,
                $$css: !0
            },
            {
                "--x-width": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-height": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-backgroundColor": e ?? void 0
            }
        ]
}, o$ = (t)=>typeof t == "object" && t !== null && !Array.isArray(t), IP = (t)=>typeof t == "string", Qhe = (t)=>typeof t == "number" && Number.isFinite(t), D$r = (t)=>typeof t == "boolean", Xne = (t, e)=>t === void 0 || e(t), B0e = (t, e)=>Array.isArray(t) && t.every(e), JTp = new Set([
    "http:",
    "https:",
    "mailto:"
]);

}
