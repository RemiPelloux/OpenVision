import { $0i } from "./core_5.js";
import { E6, EV1 } from "./gYa.js";
import { E } from "./tslib.es6.js";
import { uIn } from "./util_4.js";
var kXa, KUm, H0i;
export { H0i, KUm, kXa };
var __wakaru_BV1_initialized = false;
export function BV1() {
if (__wakaru_BV1_initialized) return;
__wakaru_BV1_initialized = true;
E(), $0i(), uIn(), kXa = (t, e)=>{
    t.name = "$ZodError", Object.defineProperty(t, "_zod", {
        value: t._zod,
        enumerable: !1
    }), Object.defineProperty(t, "issues", {
        value: e,
        enumerable: !1
    }), Object.defineProperty(t, "message", {
        get () {
            return JSON.stringify(e, EV1, 2);
        },
        enumerable: !0
    }), Object.defineProperty(t, "toString", {
        value: ()=>t.message,
        enumerable: !1
    });
}, KUm = E6("$ZodError", kXa), H0i = E6("$ZodError", kXa, {
    Parent: Error
});

}
