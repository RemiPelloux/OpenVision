import { Di } from "./Iwo.js";
import { mv } from "./editor-panel-context.react.js";
import { cS } from "./glass-clipboard-service.js";
import { aw } from "./glass-context-key-service.js";
import { a5 } from "./glass-dialog-service.js";
import { hv } from "./glass-file-service.js";
import { dPs } from "./glass-floating-toolbar.react.js";
import { zc } from "./glass-notification-service.js";
import { xc } from "./glass-storage-service.js";
import { Gv } from "./glassContextKeys.js";
import { CZg } from "./imagePreviewZoom.js";
import { TIt } from "./imageViewerActions.js";
import { Mt } from "./index_197.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { r1 } from "./use-command-bridge.react.js";
import { hEe } from "./use-delayer.react.js";
import { Oxs } from "./use-scheduled-focus.react.js";
import { In } from "./use-service.react_2.js";
var a5n, XPs;
export { XPs, a5n };
var __wakaru_qtc_initialized = false;
export function qtc() {
if (__wakaru_qtc_initialized) return;
__wakaru_qtc_initialized = true;
"use strict";
E(), a5(), Mt(), $b(), Di(), aw(), CZg(), TIt(), Gv(), r1(), hEe(), Oxs(), In(), cS(), hv(), zc(), xc(), mv(), dPs(), a5n = {
    root: {
        k1xSpc: "glass-78zum5",
        kXwgrk: "glass-dt5ytf",
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        k7Eaqz: "glass-euugli",
        kAzted: "glass-2lwn1j",
        kVQacm: "glass-b3r6kr",
        kVAEAm: "glass-1n2onr6",
        $$css: !0
    },
    stage: {
        k1xSpc: "glass-78zum5",
        kGNEyG: "glass-6s0dn4",
        kjj79g: "glass-l56j7k",
        kZKoxP: "glass-5yr21d",
        kB7OPa: "glass-9f619",
        $$css: !0
    },
    stagePaddingNarrow: {
        kmVPX3: "glass-4qekds",
        $$css: !0
    },
    stagePaddingWide: {
        kmVPX3: "glass-buaoic",
        $$css: !0
    },
    zoomLabel: {
        k7Eaqz: "glass-s3rnhp",
        kcqcaj: "glass-ss6m8b",
        $$css: !0
    }
}, XPs = (t)=>t.getModifierState("Alt");

}
