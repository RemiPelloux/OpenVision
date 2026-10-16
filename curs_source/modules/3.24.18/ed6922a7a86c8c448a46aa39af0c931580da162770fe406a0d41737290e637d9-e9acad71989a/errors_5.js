import { GEn } from "./core_3.js";
import { FHf, fN } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { dUt } from "./util_2.js";
var eNs, $tu, jEn;
export { $tu, eNs, jEn };
var __wakaru_WHf_initialized = false;
export function WHf() {
if (__wakaru_WHf_initialized) return;
__wakaru_WHf_initialized = true;
x(), GEn(), dUt(), eNs = (e, t)=>{
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
        value: e._zod,
        enumerable: !1
    }), Object.defineProperty(e, "issues", {
        value: t,
        enumerable: !1
    }), Object.defineProperty(e, "message", {
        get () {
            return JSON.stringify(t, FHf, 2);
        },
        enumerable: !0
    }), Object.defineProperty(e, "toString", {
        value: ()=>e.message,
        enumerable: !1
    });
}, $tu = fN("$ZodError", eNs), jEn = fN("$ZodError", eNs, {
    Parent: Error
});

}
