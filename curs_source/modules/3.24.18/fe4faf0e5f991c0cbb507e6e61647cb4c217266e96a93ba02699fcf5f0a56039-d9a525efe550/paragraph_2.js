import { i } from "./plugin-brand-icon.js";
function ghr(r, e) {
    const a = {
        type: "element",
        tagName: "p",
        properties: {},
        children: r.all(e)
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { ghr };
var __wakaru_t4i_initialized = false;
export function t4i() {
if (__wakaru_t4i_initialized) return;
__wakaru_t4i_initialized = true;
"";
i(ghr, "paragraph");

}
