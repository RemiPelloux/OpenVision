import { Pa, dfr } from "./SZu.js";
import { uQn } from "./core.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var fxo, vfr, Eve;
export { Eve, fxo, vfr };
var __wakaru_hrd_initialized = false;
export function hrd() {
if (__wakaru_hrd_initialized) return;
__wakaru_hrd_initialized = true;
E(), uQn(), ky(), fxo = (t, e)=>{
    t.name = "$ZodError", Object.defineProperty(t, "_zod", {
        value: t._zod,
        enumerable: !1
    }), Object.defineProperty(t, "issues", {
        value: e,
        enumerable: !1
    }), t.message = JSON.stringify(e, dfr, 2), Object.defineProperty(t, "toString", {
        value: ()=>t.message,
        enumerable: !1
    });
}, vfr = Pa("$ZodError", fxo), Eve = Pa("$ZodError", fxo, {
    Parent: Error
});

}
