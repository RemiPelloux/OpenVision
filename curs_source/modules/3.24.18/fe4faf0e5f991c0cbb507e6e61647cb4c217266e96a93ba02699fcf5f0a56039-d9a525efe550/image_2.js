import { MB, vJ } from "./index_71.js";
import { i } from "./plugin-brand-icon.js";
function lhr(r, e) {
    const a = {
        src: MB(e.url)
    };
    e.alt !== null && e.alt !== void 0 && (a.alt = e.alt), e.title !== null && e.title !== void 0 && (a.title = e.title);
    const s = {
        type: "element",
        tagName: "img",
        properties: a,
        children: []
    };
    return r.patch(e, s), r.applyData(e, s);
}
export { lhr };
var __wakaru_Kxi_initialized = false;
export function Kxi() {
if (__wakaru_Kxi_initialized) return;
__wakaru_Kxi_initialized = true;
vJ(), i(lhr, "image");

}
