import { a } from "./business-error.js";
import { A6, k2 } from "./create-message-loader.js";
import { E2, S2 } from "./init-scoped.js";
import { T2, wV } from "./module-713497da3b09e4d3_________________________________________________________________________________________________________________________________________________.js";
function C2(e) {
    return I2(e);
}
function op(e) {
    const t = Ec.get(e);
    if (t) return t;
    const { promise: r, resolve: n } = Promise.withResolvers(), o = S2(e, C2, (s)=>{
        Ec.delete(e), n(), console.error("[commerce-ui] i18n init failed", s);
    });
    o.on("initialized", a(function() {
        n();
    }, "markReady"));
    const i = {
        instance: o,
        ready: r
    };
    return Ec.set(e, i), i;
}
var I2, Ec;
export { C2, Ec, I2, op };
var __wakaru_A2_initialized = false;
export function A2() {
if (__wakaru_A2_initialized) return;
__wakaru_A2_initialized = true;
E2(), A6(), wV(), I2 = k2((e)=>T2(`../messages/${e}.json`).then((t)=>t.default)), a(C2, "loadMessages"), Ec = new Map, a(op, "getCommerceI18n");

}
