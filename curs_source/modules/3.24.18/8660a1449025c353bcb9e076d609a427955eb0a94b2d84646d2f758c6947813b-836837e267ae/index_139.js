import { Fbn, lMr } from "./index_42.js";
import { E } from "./tslib.es6.js";
var wda;
export { wda };
var __wakaru_KdS_initialized = false;
export function KdS() {
if (__wakaru_KdS_initialized) return;
__wakaru_KdS_initialized = true;
E(), lMr(), wda = (function(t, e, n) {
    const i = Fbn(n);
    if (!t || !t.type || !t.children) throw new Error("Expected parent node");
    if (typeof e == "number") {
        if (e < 0 || e === Number.POSITIVE_INFINITY) throw new Error("Expected positive finite number as index");
    } else if (e = t.children.indexOf(e), e < 0) throw new Error("Expected child node or index");
    for(; ++e < t.children.length;)if (i(t.children[e], e, t)) return t.children[e];
});

}
