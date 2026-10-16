import { QY } from "./index_4.js";
import { mfe } from "./index_5.js";
import { i } from "./plugin-brand-icon.js";
function R4(r, e, a, s) {
    let l, u, p;
    typeof e == "function" && typeof a != "function" ? (u = void 0, p = e, l = a) : (u = e, p = a, l = s), QY(r, u, m, l);
    function m(b, g) {
        const _ = g[g.length - 1], v = _ ? _.children.indexOf(b) : void 0;
        return p(b, v, _);
    }
    i(m, "overload");
}
export { R4 };
var __wakaru_Hki_initialized = false;
export function Hki() {
if (__wakaru_Hki_initialized) return;
__wakaru_Hki_initialized = true;
mfe(), mfe(), i(R4, "visit");

}
