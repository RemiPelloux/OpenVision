import { i } from "./plugin-brand-icon.js";
function wme(r) {
    return r !== void 0 && wJn.has(r);
}
var sP, yJn, wJn, gTt, bTt;
export { bTt, gTt, sP, wJn, wme, yJn };
var __wakaru_K$e_initialized = false;
export function K$e() {
if (__wakaru_K$e_initialized) return;
__wakaru_K$e_initialized = true;
"use strict";
sP = {
    background: {
        "--ui-button-bg": "ui-1gwrc9l ui-302ab4 ui-1luhpj5 ui-14iu9ww",
        "--ui-button-bg-hover": "ui-s16ggv ui-1kvkcw9 ui-hqa6pe ui-e032zu",
        $$css: !0
    },
    outline: {
        kMzoRj: "ui-mkeg23",
        ksu8eU: "ui-1y0btm7",
        kVAM5u: "ui-13747pv ui-wm9d6",
        $$css: !0
    }
}, yJn = [
    "accent",
    "success",
    "warning",
    "danger"
], wJn = new Set(yJn), i(wme, "isColoredControlTone"), gTt = {
    accent: {
        "--ui-button-bg-hover": "ui-2qxk4j",
        $$css: !0
    },
    success: {
        "--ui-button-bg-hover": "ui-11h7f69",
        $$css: !0
    },
    warning: {
        "--ui-button-bg-hover": "ui-1donwlf",
        $$css: !0
    },
    danger: {
        "--ui-button-bg-hover": "ui-x6ealz",
        $$css: !0
    }
}, bTt = {
    accent: {
        kVAM5u: "ui-5r2jki ui-wm9d6",
        $$css: !0
    },
    success: {
        kVAM5u: "ui-1gvt79p ui-wm9d6",
        $$css: !0
    },
    warning: {
        kVAM5u: "ui-1cucnr7 ui-wm9d6",
        $$css: !0
    },
    danger: {
        kVAM5u: "ui-105evjg ui-wm9d6",
        $$css: !0
    }
};

}
