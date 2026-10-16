import { i } from "./plugin-brand-icon.js";
function nhr(r, e) {
    const a = {
        type: "element",
        tagName: "del",
        properties: {},
        children: r.all(e)
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { nhr };
var __wakaru_Uxi_initialized = false;
export function Uxi() {
if (__wakaru_Uxi_initialized) return;
__wakaru_Uxi_initialized = true;
"";
i(nhr, "strikethrough");

}
