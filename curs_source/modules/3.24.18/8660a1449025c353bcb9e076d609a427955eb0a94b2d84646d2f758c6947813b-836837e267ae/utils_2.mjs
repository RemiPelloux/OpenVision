import { $As, DYl } from "./float-regex.mjs";
import { rg0 } from "./is-nullish.mjs";
import { ig0 } from "./ofv.js";
import { Sbv, sg0 } from "./single-color-regex.mjs";
import { E } from "./tslib.es6.js";
var HAs, NYl;
export { HAs, NYl };
var __wakaru_LYl_initialized = false;
export function LYl() {
if (__wakaru_LYl_initialized) return;
__wakaru_LYl_initialized = true;
E(), DYl(), rg0(), sg0(), HAs = (t, e)=>(n)=>!!(typeof n == "string" && Sbv.test(n) && n.startsWith(t) || e && !ig0(n) && Object.prototype.hasOwnProperty.call(n, e)), NYl = (t, e, n)=>(i)=>{
        if (typeof i != "string") return i;
        const [r, s, o, a] = i.match($As);
        return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        };
    };

}
