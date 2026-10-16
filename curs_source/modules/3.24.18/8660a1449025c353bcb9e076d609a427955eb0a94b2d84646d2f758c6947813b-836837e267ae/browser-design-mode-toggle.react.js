import { Px0 } from "./annotate-upsell-button.react.js";
import { Z5i } from "./design-annotation-send-immediately-switch.react.js";
import { Ix0 } from "./design-annotation-send-pill.react.js";
import { _ee } from "./design-annotation-service.js";
import { mv } from "./editor-panel-context.react.js";
import { _On } from "./glass-motion.react.js";
import { zc } from "./glass-notification-service.js";
import { BS } from "./glass-toast.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { Cxv } from "./use-annotate-familiarity.react.js";
import { Put } from "./use-application-setting.react_2.js";
import { a6i } from "./use-design-annotation-state.react.js";
import { K2s } from "./use-design-mode-target-agent.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { rYl } from "./use-send-design-annotation.react.js";
import { In } from "./use-service.react_2.js";
var VJl, KJl, YJl, XJl, Nxv, Lxv, Oxv;
export { KJl, Lxv, Nxv, Oxv, VJl, XJl, YJl };
var __wakaru_Fxv_initialized = false;
export function Fxv() {
if (__wakaru_Fxv_initialized) return;
__wakaru_Fxv_initialized = true;
"use strict";
E(), Mt(), Ru(), In(), _On(), _ee(), zc(), BS(), Z5i(), Ix0(), Put(), a6i(), rYl(), Cxv(), Px0(), mv(), K2s(), VJl = [
    .19,
    1,
    .22,
    1
], KJl = {
    duration: .12,
    ease: VJl
}, YJl = {
    opacity: 0,
    y: 4
}, XJl = {
    opacity: 1,
    y: 0,
    transition: {
        duration: .16,
        ease: VJl
    }
}, Nxv = {
    enter: YJl,
    shown: XJl,
    exit: {
        opacity: 0,
        pointerEvents: "none",
        transition: KJl
    }
}, Lxv = {
    enter: YJl,
    shown: XJl,
    exit: (t)=>({
            opacity: 0,
            y: t === "send" ? -4 : 0,
            pointerEvents: "none",
            transition: KJl
        })
}, Oxv = {
    annotateIdle: {
        kMwMTN: "glass-19aaqeu",
        $$css: !0
    }
};

}
