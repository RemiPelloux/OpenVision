import { MB, vJ } from "./index_71.js";
import { i } from "./plugin-brand-icon.js";
function phr(r, e) {
    const a = {
        href: MB(e.url)
    };
    e.title !== null && e.title !== void 0 && (a.title = e.title);
    const s = {
        type: "element",
        tagName: "a",
        properties: a,
        children: r.all(e)
    };
    return r.patch(e, s), r.applyData(e, s);
}
export { phr };
var __wakaru_Jxi_initialized = false;
export function Jxi() {
if (__wakaru_Jxi_initialized) return;
__wakaru_Jxi_initialized = true;
vJ(), i(phr, "link");

}
