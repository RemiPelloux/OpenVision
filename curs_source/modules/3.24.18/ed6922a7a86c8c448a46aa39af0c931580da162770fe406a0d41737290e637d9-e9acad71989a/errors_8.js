import { X2n } from "./core_5.js";
import { x } from "./tslib.es6.js";
import { dGt } from "./util_4.js";
import { kLv, xN } from "./xmo.js";
var Rgo, nth, Z2n;
export { Rgo, Z2n, nth };
var __wakaru_LLv_initialized = false;
export function LLv() {
if (__wakaru_LLv_initialized) return;
__wakaru_LLv_initialized = true;
x(), X2n(), dGt(), Rgo = (e, t)=>{
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
        value: e._zod,
        enumerable: !1
    }), Object.defineProperty(e, "issues", {
        value: t,
        enumerable: !1
    }), Object.defineProperty(e, "message", {
        get () {
            return JSON.stringify(t, kLv, 2);
        },
        enumerable: !0
    }), Object.defineProperty(e, "toString", {
        value: ()=>e.message,
        enumerable: !1
    });
}, nth = xN("$ZodError", Rgo), Z2n = xN("$ZodError", Rgo, {
    Parent: Error
});

}
