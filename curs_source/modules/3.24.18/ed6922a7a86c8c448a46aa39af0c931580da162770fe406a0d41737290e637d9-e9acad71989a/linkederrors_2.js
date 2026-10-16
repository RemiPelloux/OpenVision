import { M9n, wjh } from "./eventbuilder_2.js";
import { $u } from "./index_10.js";
import { Whi } from "./linkederrors.js";
import { x } from "./tslib.es6.js";
function ksr(e, t) {
    const n = g2o(e, t), i = {
        type: oS_(t),
        value: aS_(t)
    };
    return n.length && (i.stacktrace = {
        frames: n
    }), i.type === void 0 && i.value === "" && (i.value = "Unrecoverable error caught"), i;
}
function g2o(e, t) {
    const n = t.stacktrace || t.stack || "", i = rS_(t), r = sS_(t);
    try {
        return e(n, i, r);
    } catch  {}
    return [];
}
function rS_(e) {
    return e && wjh.test(e.message) ? 1 : 0;
}
function sS_(e) {
    return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function yjh(e) {
    return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? e instanceof WebAssembly.Exception : !1;
}
function oS_(e) {
    const t = e?.name;
    return !t && yjh(e) ? e.message && Array.isArray(e.message) && e.message.length == 2 ? e.message[0] : "WebAssembly.Exception" : t;
}
function aS_(e) {
    const t = e?.message;
    return yjh(e) ? Array.isArray(e.message) && e.message.length == 2 ? e.message[1] : "wasm exception" : t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message";
}
var dqh, hqh, pqh, mqh, D2o;
export { D2o, aS_, dqh, g2o, hqh, ksr, mqh, oS_, pqh, rS_, sS_, yjh };
var __wakaru_gqh_initialized = false;
export function gqh() {
if (__wakaru_gqh_initialized) return;
__wakaru_gqh_initialized = true;
x(), $u(), M9n(), dqh = "cause", hqh = 5, pqh = "LinkedErrors", mqh = ((e = {})=>{
    const t = e.limit || hqh, n = e.key || dqh;
    return {
        name: pqh,
        preprocessEvent (i, r, s) {
            const o = s.getOptions();
            Whi(ksr, o.stackParser, n, t, i, r);
        }
    };
}), D2o = mqh;

}
