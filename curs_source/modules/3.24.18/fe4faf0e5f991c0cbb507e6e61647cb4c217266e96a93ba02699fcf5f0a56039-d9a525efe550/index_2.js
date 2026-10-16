import { i } from "./plugin-brand-icon.js";
function Jrr(r) {
    const e = [];
    let a = -1;
    for(; ++a < r.length;)e[a] = JY(r[a]);
    return pfe(s);
    function s(...l) {
        let u = -1;
        for(; ++u < e.length;)if (e[u].apply(this, l)) return !0;
        return !1;
    }
}
function Qrr(r) {
    const e = r;
    return pfe(a);
    function a(s) {
        const l = s;
        let u;
        for(u in r)if (l[u] !== e[u]) return !1;
        return !0;
    }
}
function eir(r) {
    return pfe(e);
    function e(a) {
        return a && a.type === r;
    }
}
function pfe(r) {
    return e;
    function e(a, s, l) {
        return !!(nir(a) && r.call(this, a, typeof s == "number" ? s : void 0, l || void 0));
    }
}
function tir() {
    return !0;
}
function nir(r) {
    return r !== null && typeof r == "object" && "type" in r;
}
var JY;
export { JY, Jrr, Qrr, eir, nir, pfe, tir };
var __wakaru_qki_initialized = false;
export function qki() {
if (__wakaru_qki_initialized) return;
__wakaru_qki_initialized = true;
JY = i((function(r) {
    if (r == null) return tir;
    if (typeof r == "function") return pfe(r);
    if (typeof r == "object") return Array.isArray(r) ? Jrr(r) : Qrr(r);
    if (typeof r == "string") return eir(r);
    throw new Error("Expected function, string, or object as test");
}), "convert"), i(Jrr, "anyFactory"), i(Qrr, "propsFactory"), i(eir, "typeFactory"), i(pfe, "castFactory"), i(tir, "ok"), i(nir, "looksLikeANode");

}
