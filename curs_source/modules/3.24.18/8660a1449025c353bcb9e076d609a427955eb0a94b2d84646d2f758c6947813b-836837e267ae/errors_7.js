import { jFe } from "./core_3.js";
import { Hfa, J5r } from "./errors_6.js";
import { $Fe } from "./index_146.js";
import { Nfa, ad, dTS, hTS } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { yb } from "./util_2.js";
var iva, pIS, a0e;
export { a0e, iva, pIS };
var __wakaru_mIS_initialized = false;
export function mIS() {
if (__wakaru_mIS_initialized) return;
__wakaru_mIS_initialized = true;
E(), $Fe(), yb(), J5r(), jFe(), iva = (t, e)=>{
    Hfa.init(t, e), t.name = "ZodError", Object.defineProperties(t, {
        format: {
            value: (n)=>hTS(t, n)
        },
        flatten: {
            value: (n)=>dTS(t, n)
        },
        addIssue: {
            value: (n)=>{
                t.issues.push(n), t.message = JSON.stringify(t.issues, Nfa, 2);
            }
        },
        addIssues: {
            value: (n)=>{
                t.issues.push(...n), t.message = JSON.stringify(t.issues, Nfa, 2);
            }
        },
        isEmpty: {
            get () {
                return t.issues.length === 0;
            }
        }
    });
}, pIS = ad("ZodError", iva), a0e = ad("ZodError", iva, {
    Parent: Error
});

}
