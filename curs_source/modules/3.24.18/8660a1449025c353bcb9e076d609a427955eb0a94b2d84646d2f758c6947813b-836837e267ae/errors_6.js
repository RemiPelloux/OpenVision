import { jFe } from "./core_3.js";
import { Nfa, ad } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { yb } from "./util_2.js";
var $fa, Hfa, Fpi;
export { $fa, Fpi, Hfa };
var __wakaru_J5r_initialized = false;
export function J5r() {
if (__wakaru_J5r_initialized) return;
__wakaru_J5r_initialized = true;
E(), jFe(), yb(), $fa = (t, e)=>{
    t.name = "$ZodError", Object.defineProperty(t, "_zod", {
        value: t._zod,
        enumerable: !1
    }), Object.defineProperty(t, "issues", {
        value: e,
        enumerable: !1
    }), t.message = JSON.stringify(e, Nfa, 2), Object.defineProperty(t, "toString", {
        value: ()=>t.message,
        enumerable: !1
    });
}, Hfa = ad("$ZodError", $fa), Fpi = ad("$ZodError", $fa, {
    Parent: Error
});

}
