import { AXe } from "./core_2.js";
import { $pf, ADe } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { cv } from "./util.js";
var EEs, K9l, u1n;
export { EEs, K9l, u1n };
var __wakaru_xEs_initialized = false;
export function xEs() {
if (__wakaru_xEs_initialized) return;
__wakaru_xEs_initialized = true;
x(), AXe(), cv(), EEs = (e, t)=>{
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
        value: e._zod,
        enumerable: !1
    }), Object.defineProperty(e, "issues", {
        value: t,
        enumerable: !1
    }), e.message = JSON.stringify(t, $pf, 2), Object.defineProperty(e, "toString", {
        value: ()=>e.message,
        enumerable: !1
    });
}, K9l = ADe("$ZodError", EEs), u1n = ADe("$ZodError", EEs, {
    Parent: Error
});

}
