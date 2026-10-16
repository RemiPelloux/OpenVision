import { i } from "./plugin-brand-icon.js";
function Chr(r, e) {
    const a = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { Chr };
var __wakaru_l4i_initialized = false;
export function l4i() {
if (__wakaru_l4i_initialized) return;
__wakaru_l4i_initialized = true;
"";
i(Chr, "thematicBreak");

}
