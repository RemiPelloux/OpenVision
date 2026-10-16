import { JY } from "./index_2.js";
import { cNe } from "./index_3.js";
import { i } from "./plugin-brand-icon.js";
var cqt;
export { cqt };
var __wakaru_eCi_initialized = false;
export function eCi() {
if (__wakaru_eCi_initialized) return;
__wakaru_eCi_initialized = true;
cNe(), cqt = i((function(r, e, a) {
    const s = JY(a);
    if (!r || !r.type || !r.children) throw new Error("Expected parent node");
    if (typeof e == "number") {
        if (e < 0 || e === Number.POSITIVE_INFINITY) throw new Error("Expected positive finite number as index");
    } else if (e = r.children.indexOf(e), e < 0) throw new Error("Expected child node or index");
    for(; ++e < r.children.length;)if (s(r.children[e], e, r)) return r.children[e];
}), "findAfter");

}
