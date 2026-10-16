import { $fe, _C } from "./index_30.js";
import { Ife } from "./index_31.js";
import { i } from "./plugin-brand-icon.js";
function whr(r, e) {
    const a = r.all(e), s = a.shift(), l = [];
    if (s) {
        const p = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: r.wrap([
                s
            ], !0)
        };
        r.patch(e.children[0], p), l.push(p);
    }
    if (a.length > 0) {
        const p = {
            type: "element",
            tagName: "tbody",
            properties: {},
            children: r.wrap(a, !0)
        }, m = _C(e.children[1]), b = $fe(e.children[e.children.length - 1]);
        m && b && (p.position = {
            start: m,
            end: b
        }), l.push(p);
    }
    const u = {
        type: "element",
        tagName: "table",
        properties: {},
        children: r.wrap(l, !0)
    };
    return r.patch(e, u), r.applyData(e, u);
}
export { whr };
var __wakaru_i4i_initialized = false;
export function i4i() {
if (__wakaru_i4i_initialized) return;
__wakaru_i4i_initialized = true;
Ife(), i(whr, "table");

}
