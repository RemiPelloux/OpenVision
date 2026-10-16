import { Z$e, sJn } from "./control-tone.ts";
import { i } from "./plugin-brand-icon.js";
function pJn(r) {
    return gJn.has(r);
}
function mJn(r) {
    return bJn.has(r);
}
function V$e(r, e) {
    const a = r === "secondary" && e !== void 0 && !sJn(e);
    return {
        applyControlTone: r !== "secondary" || a,
        applyFilledColors: pJn(r) && !a,
        applyNonFilledBackground: mJn(r) || a
    };
}
var fJn, hJn, gJn, bJn;
export { V$e, bJn, fJn, gJn, hJn, mJn, pJn };
var __wakaru_fTt_initialized = false;
export function fTt() {
if (__wakaru_fTt_initialized) return;
__wakaru_fTt_initialized = true;
"use strict";
Z$e(), fJn = [
    "primary",
    "secondary",
    "media"
], hJn = [
    "outline",
    "ghost",
    "text"
], gJn = new Set(fJn), bJn = new Set(hJn), i(pJn, "isFilledButtonVariant"), i(mJn, "isNonFilledButtonVariant"), i(V$e, "resolveButtonToneRecipe");

}
