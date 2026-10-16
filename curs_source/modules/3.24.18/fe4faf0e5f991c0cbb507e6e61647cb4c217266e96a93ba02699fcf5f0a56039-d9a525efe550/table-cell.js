import { i } from "./plugin-brand-icon.js";
function khr(r, e) {
    const a = {
        type: "element",
        tagName: "td",
        properties: {},
        children: r.all(e)
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { khr };
var __wakaru_o4i_initialized = false;
export function o4i() {
if (__wakaru_o4i_initialized) return;
__wakaru_o4i_initialized = true;
"";
i(khr, "tableCell");

}
