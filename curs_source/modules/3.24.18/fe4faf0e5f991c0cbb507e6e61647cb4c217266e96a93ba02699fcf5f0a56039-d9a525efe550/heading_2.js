import { i } from "./plugin-brand-icon.js";
function ahr(r, e) {
    const a = {
        type: "element",
        tagName: "h" + e.depth,
        properties: {},
        children: r.all(e)
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { ahr };
var __wakaru_Hxi_initialized = false;
export function Hxi() {
if (__wakaru_Hxi_initialized) return;
__wakaru_Hxi_initialized = true;
"";
i(ahr, "heading");

}
