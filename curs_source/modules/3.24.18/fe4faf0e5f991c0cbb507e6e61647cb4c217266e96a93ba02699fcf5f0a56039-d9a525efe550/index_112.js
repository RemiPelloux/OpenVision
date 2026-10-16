import { MS } from "./default.js";
import { Thr, d4i } from "./footer.js";
import { i } from "./plugin-brand-icon.js";
import { $hr, p4i } from "./state.js";
function jPt(r, e) {
    const a = $hr(r, e), s = a.one(r, void 0), l = Thr(a), u = Array.isArray(s) ? {
        type: "root",
        children: s
    } : s || {
        type: "root",
        children: []
    };
    return l && ("children" in u, u.children.push({
        type: "text",
        value: `
`
    }, l)), u;
}
export { jPt };
var __wakaru_m4i_initialized = false;
export function m4i() {
if (__wakaru_m4i_initialized) return;
__wakaru_m4i_initialized = true;
MS(), d4i(), p4i(), i(jPt, "toHast");

}
