import { hvi } from "./core_4.js";
import { Ut1, g6 } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { cwn } from "./util_3.js";
var mEa, Qhp, mvi;
export { Qhp, mEa, mvi };
var __wakaru_Gt1_initialized = false;
export function Gt1() {
if (__wakaru_Gt1_initialized) return;
__wakaru_Gt1_initialized = true;
E(), hvi(), cwn(), mEa = (t, e)=>{
    t.name = "$ZodError", Object.defineProperty(t, "_zod", {
        value: t._zod,
        enumerable: !1
    }), Object.defineProperty(t, "issues", {
        value: e,
        enumerable: !1
    }), Object.defineProperty(t, "message", {
        get () {
            return JSON.stringify(e, Ut1, 2);
        },
        enumerable: !0
    }), Object.defineProperty(t, "toString", {
        value: ()=>t.message,
        enumerable: !1
    });
}, Qhp = g6("$ZodError", mEa), mvi = g6("$ZodError", mEa, {
    Parent: Error
});

}
