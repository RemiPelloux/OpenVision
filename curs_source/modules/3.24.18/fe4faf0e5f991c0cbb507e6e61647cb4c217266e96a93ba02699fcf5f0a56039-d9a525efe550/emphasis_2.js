import { i } from "./plugin-brand-icon.js";
function rhr(r, e) {
    const a = {
        type: "element",
        tagName: "em",
        properties: {},
        children: r.all(e)
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { rhr };
var __wakaru_Gxi_initialized = false;
export function Gxi() {
if (__wakaru_Gxi_initialized) return;
__wakaru_Gxi_initialized = true;
"";
i(rhr, "emphasis");

}
