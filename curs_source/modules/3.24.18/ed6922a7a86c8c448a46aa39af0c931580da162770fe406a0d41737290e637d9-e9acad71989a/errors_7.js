import { wBi } from "./errors_6.js";
import { J6s, Q6s, To, vBi } from "./f0s.js";
import { NU } from "./index_190.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var _7s, vyu, _se;
export { _7s, _se, vyu };
var __wakaru__yu_initialized = false;
export function _yu() {
if (__wakaru__yu_initialized) return;
__wakaru__yu_initialized = true;
x(), NU(), NU(), Fv(), _7s = (e, t)=>{
    wBi.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
        format: {
            value: (n)=>J6s(e, n)
        },
        flatten: {
            value: (n)=>Q6s(e, n)
        },
        addIssue: {
            value: (n)=>{
                e.issues.push(n), e.message = JSON.stringify(e.issues, vBi, 2);
            }
        },
        addIssues: {
            value: (n)=>{
                e.issues.push(...n), e.message = JSON.stringify(e.issues, vBi, 2);
            }
        },
        isEmpty: {
            get () {
                return e.issues.length === 0;
            }
        }
    });
}, vyu = To("ZodError", _7s), _se = To("ZodError", _7s, {
    Parent: Error
});

}
