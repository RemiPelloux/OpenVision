import { NB, WMt } from "./index_54.js";
import { i } from "./plugin-brand-icon.js";
function Lfe(r, e, a) {
    const s = NB(r), l = NB(e);
    return s === void 0 ? l === void 0 ? a === "_" ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !1
    } : l === 1 ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !0
    } : s === 1 ? l === void 0 ? {
        inside: !1,
        outside: !1
    } : l === 1 ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !1
    } : l === void 0 ? {
        inside: !1,
        outside: !1
    } : l === 1 ? {
        inside: !0,
        outside: !1
    } : {
        inside: !1,
        outside: !1
    };
}
export { Lfe };
var __wakaru_ilr_initialized = false;
export function ilr() {
if (__wakaru_ilr_initialized) return;
__wakaru_ilr_initialized = true;
WMt(), i(Lfe, "encodeInfo");

}
