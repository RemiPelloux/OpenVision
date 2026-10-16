import { KIn } from "./core_4.js";
import { To, vBi } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var e4s, wBi, fse;
export { e4s, fse, wBi };
var __wakaru_bvu_initialized = false;
export function bvu() {
if (__wakaru_bvu_initialized) return;
__wakaru_bvu_initialized = true;
x(), KIn(), Fv(), e4s = (e, t)=>{
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
        value: e._zod,
        enumerable: !1
    }), Object.defineProperty(e, "issues", {
        value: t,
        enumerable: !1
    }), e.message = JSON.stringify(t, vBi, 2), Object.defineProperty(e, "toString", {
        value: ()=>e.message,
        enumerable: !1
    });
}, wBi = To("$ZodError", e4s), fse = To("$ZodError", e4s, {
    Parent: Error
});

}
