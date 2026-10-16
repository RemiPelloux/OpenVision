import { i } from "./plugin-brand-icon.js";
function yhr(r, e) {
    const a = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: r.all(e)
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { yhr };
var __wakaru_r4i_initialized = false;
export function r4i() {
if (__wakaru_r4i_initialized) return;
__wakaru_r4i_initialized = true;
"";
i(yhr, "strong");

}
