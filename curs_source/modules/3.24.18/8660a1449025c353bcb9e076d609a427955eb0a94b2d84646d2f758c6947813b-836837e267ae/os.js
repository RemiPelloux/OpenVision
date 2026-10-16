import { Wsh, aQo, j8t, wli } from "./shared.js";
import { E } from "./tslib.es6.js";
var $8t, lQo, Y_n, oRr, F7y, B7y, Gsh;
export { $8t, B7y, F7y, Gsh, Y_n, lQo, oRr };
var __wakaru_Wnt_initialized = false;
export function Wnt() {
if (__wakaru_Wnt_initialized) return;
__wakaru_Wnt_initialized = true;
E(), aQo(), $8t = /^i(os$|p)/.test(j8t) || j8t === "macintel" && Wsh > 1, lQo = "android", Y_n = j8t === lQo || wli.includes(lQo), oRr = !$8t && j8t.startsWith("mac"), F7y = j8t.startsWith("win"), B7y = !Y_n && /^(linux|chrome os)/.test(j8t), Gsh = oRr || $8t;

}
