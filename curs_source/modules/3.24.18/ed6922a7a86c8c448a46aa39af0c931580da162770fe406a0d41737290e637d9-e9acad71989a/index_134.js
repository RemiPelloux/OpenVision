import { YTi, w5t } from "./index_37.js";
import { x } from "./tslib.es6.js";
var $ws;
export { $ws };
var __wakaru_DZg_initialized = false;
export function DZg() {
if (__wakaru_DZg_initialized) return;
__wakaru_DZg_initialized = true;
x(), YTi(), $ws = (function(e, t, n) {
    const i = w5t(n);
    if (!e || !e.type || !e.children) throw new Error("Expected parent node");
    if (typeof t == "number") {
        if (t < 0 || t === Number.POSITIVE_INFINITY) throw new Error("Expected positive finite number as index");
    } else if (t = e.children.indexOf(t), t < 0) throw new Error("Expected child node or index");
    for(; ++t < e.children.length;)if (i(e.children[t], t, e)) return e.children[t];
});

}
