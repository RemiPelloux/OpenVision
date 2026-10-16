import { Pa, dfr, gxo, mxo } from "./SZu.js";
import { vfr } from "./errors_3.js";
import { Qq } from "./index_15.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var N2o, cad, Ave;
export { Ave, N2o, cad };
var __wakaru_uad_initialized = false;
export function uad() {
if (__wakaru_uad_initialized) return;
__wakaru_uad_initialized = true;
E(), Qq(), Qq(), ky(), N2o = (t, e)=>{
    vfr.init(t, e), t.name = "ZodError", Object.defineProperties(t, {
        format: {
            value: (n)=>gxo(t, n)
        },
        flatten: {
            value: (n)=>mxo(t, n)
        },
        addIssue: {
            value: (n)=>{
                t.issues.push(n), t.message = JSON.stringify(t.issues, dfr, 2);
            }
        },
        addIssues: {
            value: (n)=>{
                t.issues.push(...n), t.message = JSON.stringify(t.issues, dfr, 2);
            }
        },
        isEmpty: {
            get () {
                return t.issues.length === 0;
            }
        }
    });
}, cad = Pa("ZodError", N2o), Ave = Pa("ZodError", N2o, {
    Parent: Error
});

}
