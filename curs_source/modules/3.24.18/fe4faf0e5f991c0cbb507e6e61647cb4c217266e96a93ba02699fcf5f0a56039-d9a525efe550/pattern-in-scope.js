import { i } from "./plugin-brand-icon.js";
function Xcr(r, e) {
    return zMt(r, e.inConstruct, !0) && !zMt(r, e.notInConstruct, !1);
}
function zMt(r, e, a) {
    if (typeof e == "string" && (e = [
        e
    ]), !e || e.length === 0) return a;
    let s = -1;
    for(; ++s < e.length;)if (r.includes(e[s])) return !0;
    return !1;
}
export { Xcr, zMt };
var __wakaru_Hvi_initialized = false;
export function Hvi() {
if (__wakaru_Hvi_initialized) return;
__wakaru_Hvi_initialized = true;
i(Xcr, "patternInScope"), i(zMt, "listInScope");

}
