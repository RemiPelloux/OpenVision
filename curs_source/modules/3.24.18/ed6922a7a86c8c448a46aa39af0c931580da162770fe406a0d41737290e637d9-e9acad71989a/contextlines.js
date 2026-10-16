import { $u } from "./index_10.js";
import { DWr, qhn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Og } from "./worldwide.js";
function tk_(e, t) {
    const n = Csr.document, i = Csr.location && qhn(Csr.location.href);
    if (!n || !i) return e;
    const r = e.exception?.values;
    if (!r?.length) return e;
    const s = n.documentElement.innerHTML;
    if (!s) return e;
    const o = [
        "<!DOCTYPE html>",
        "<html>",
        ...s.split(`
`),
        "</html>"
    ];
    return r.forEach((a)=>{
        const c = a.stacktrace;
        c?.frames && (c.frames = c.frames.map((l)=>nk_(l, o, i, t)));
    }), e;
}
function nk_(e, t, n, i) {
    return e.filename !== n || !e.lineno || !t.length || DWr(t, e, i), e;
}
var Csr, Mqh, Pqh, Lqh, Nqh;
export { Csr, Lqh, Mqh, Nqh, Pqh, nk_, tk_ };
var __wakaru_ik__initialized = false;
export function ik_() {
if (__wakaru_ik__initialized) return;
__wakaru_ik__initialized = true;
x(), $u(), Csr = Og, Mqh = 7, Pqh = "ContextLines", Lqh = ((e = {})=>{
    const t = e.frameContextLines != null ? e.frameContextLines : Mqh;
    return {
        name: Pqh,
        processEvent (n) {
            return tk_(n, t);
        }
    };
}), Nqh = Lqh;

}
