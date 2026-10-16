import { Hws, LZg, MZg, PZg } from "./DSs.js";
import { x } from "./tslib.es6.js";
var eXe;
export { eXe };
var __wakaru_OZg_initialized = false;
export function OZg() {
if (__wakaru_OZg_initialized) return;
__wakaru_OZg_initialized = true;
x(), eXe = (function(e) {
    if (e == null) return LZg;
    if (typeof e == "string") return PZg(e);
    if (typeof e == "object") return MZg(e);
    if (typeof e == "function") return Hws(e);
    throw new Error("Expected function, string, or array as `test`");
});

}
