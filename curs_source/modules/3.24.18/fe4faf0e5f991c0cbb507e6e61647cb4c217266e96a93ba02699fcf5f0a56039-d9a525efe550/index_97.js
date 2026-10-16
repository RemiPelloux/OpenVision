import { i } from "./plugin-brand-icon.js";
function TJ(r) {
    return !r || typeof r != "object" ? "" : "position" in r || "type" in r ? hPt(r.position) : "start" in r || "end" in r ? hPt(r) : "line" in r || "column" in r ? pMe(r) : "";
}
function pMe(r) {
    return gPt(r && r.line) + ":" + gPt(r && r.column);
}
function hPt(r) {
    return pMe(r && r.start) + "-" + pMe(r && r.end);
}
function gPt(r) {
    return r && typeof r == "number" ? r : 1;
}
export { TJ, gPt, hPt, pMe };
var __wakaru_kxi_initialized = false;
export function kxi() {
if (__wakaru_kxi_initialized) return;
__wakaru_kxi_initialized = true;
i(TJ, "stringifyPosition"), i(pMe, "point"), i(hPt, "position"), i(gPt, "index");

}
