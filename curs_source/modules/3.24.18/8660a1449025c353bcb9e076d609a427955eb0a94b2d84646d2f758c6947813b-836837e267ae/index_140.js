import { Cda, XdS, YdS, ZdS } from "./nca.js";
import { E } from "./tslib.es6.js";
var E1t;
export { E1t };
var __wakaru_JdS_initialized = false;
export function JdS() {
if (__wakaru_JdS_initialized) return;
__wakaru_JdS_initialized = true;
E(), E1t = (function(t) {
    if (t == null) return ZdS;
    if (typeof t == "string") return XdS(t);
    if (typeof t == "object") return YdS(t);
    if (typeof t == "function") return Cda(t);
    throw new Error("Expected function, string, or array as `test`");
});

}
