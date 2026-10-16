import { i } from "./plugin-brand-icon.js";
function oJn(r) {
    return r !== void 0 && Object.hasOwn(pTt, r);
}
function sJn(r) {
    return r !== void 0 && dJn.has(r);
}
function uTt(r) {
    if (r !== void 0) return oJn(r) ? pTt[r] : r;
}
var dTt, cJn, pTt, lJn, nki, uJn, rki, iki, dJn, mTt;
export { cJn, dJn, dTt, iki, lJn, mTt, nki, oJn, pTt, rki, sJn, uJn, uTt };
var __wakaru_Z$e_initialized = false;
export function Z$e() {
if (__wakaru_Z$e_initialized) return;
__wakaru_Z$e_initialized = true;
"use strict";
dTt = [
    "secondary",
    "tertiary",
    "accent",
    "monochrome",
    "success",
    "warning",
    "danger"
], cJn = [
    "accent",
    "monochrome",
    "success",
    "danger",
    "warning"
], pTt = {
    plan: "warning",
    "git-added": "success",
    "git-modified": "warning",
    "git-removed": "danger"
}, lJn = [
    ...dTt,
    "plan",
    "git-added",
    "git-modified",
    "git-removed"
], nki = lJn.filter((r)=>r !== "tertiary"), uJn = [
    "accent",
    "success",
    "warning",
    "danger"
], rki = new Set(dTt), iki = new Set(cJn), dJn = new Set(uJn), i(oJn, "isAliasControlTone"), i(sJn, "isSecondaryButtonTone"), i(uTt, "resolveControlTone"), mTt = "accent";

}
