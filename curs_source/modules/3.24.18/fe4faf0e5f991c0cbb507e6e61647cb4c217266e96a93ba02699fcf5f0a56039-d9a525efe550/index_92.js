import { i } from "./plugin-brand-icon.js";
function qfe(r) {
    return typeof r == "object" ? r.type === "text" ? mPt(r.value) : !1 : mPt(r);
}
function mPt(r) {
    return r.replace(Kmr, "") === "";
}
var Kmr;
export { Kmr, mPt, qfe };
var __wakaru_hxi_initialized = false;
export function hxi() {
if (__wakaru_hxi_initialized) return;
__wakaru_hxi_initialized = true;
Kmr = /[ \t\n\f\r]/g, i(qfe, "whitespace"), i(mPt, "empty");

}
