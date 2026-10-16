import { MB, vJ } from "./index_71.js";
import { i } from "./plugin-brand-icon.js";
import { $Pt, shr } from "./revert.js";
function chr(r, e) {
    const a = String(e.identifier).toUpperCase(), s = r.definitionById.get(a);
    if (!s) return $Pt(r, e);
    const l = {
        src: MB(s.url || ""),
        alt: e.alt
    };
    s.title !== null && s.title !== void 0 && (l.title = s.title);
    const u = {
        type: "element",
        tagName: "img",
        properties: l,
        children: []
    };
    return r.patch(e, u), r.applyData(e, u);
}
export { chr };
var __wakaru_Vxi_initialized = false;
export function Vxi() {
if (__wakaru_Vxi_initialized) return;
__wakaru_Vxi_initialized = true;
vJ(), shr(), i(chr, "imageReference");

}
