import { MB, vJ } from "./index_71.js";
import { i } from "./plugin-brand-icon.js";
import { $Pt, shr } from "./revert.js";
function dhr(r, e) {
    const a = String(e.identifier).toUpperCase(), s = r.definitionById.get(a);
    if (!s) return $Pt(r, e);
    const l = {
        href: MB(s.url || "")
    };
    s.title !== null && s.title !== void 0 && (l.title = s.title);
    const u = {
        type: "element",
        tagName: "a",
        properties: l,
        children: r.all(e)
    };
    return r.patch(e, u), r.applyData(e, u);
}
export { dhr };
var __wakaru_Yxi_initialized = false;
export function Yxi() {
if (__wakaru_Yxi_initialized) return;
__wakaru_Yxi_initialized = true;
vJ(), shr(), i(dhr, "linkReference");

}
