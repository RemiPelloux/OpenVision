import { i } from "./plugin-brand-icon.js";
function KYn(r) {
    if (!(!r || typeof CSSAnimation > "u")) for (const e of r.getAnimations({
        subtree: !0
    }))e instanceof CSSAnimation && XYn.has(e.animationName) && (e.startTime = 0);
}
var XYn;
export { KYn, XYn };
var __wakaru_J_i_initialized = false;
export function J_i() {
if (__wakaru_J_i_initialized) return;
__wakaru_J_i_initialized = true;
"use strict";
XYn = new Set([
    "ui-progress-spin",
    "cursor-icon-spin"
]), i(KYn, "syncSpinnerToDocumentTimeline");

}
