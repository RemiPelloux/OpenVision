import { i } from "./plugin-brand-icon.js";
function _hr(r, e, a) {
    const s = a ? a.children : void 0, u = (s ? s.indexOf(e) : 1) === 0 ? "th" : "td", p = a && a.type === "table" ? a.align : void 0, m = p ? p.length : e.children.length;
    let b = -1;
    const g = [];
    for(; ++b < m;){
        const v = e.children[b], x = {}, C = p ? p[b] : void 0;
        C && (x.align = C);
        let E = {
            type: "element",
            tagName: u,
            properties: x,
            children: []
        };
        v && (E.children = r.all(v), r.patch(v, E), E = r.applyData(v, E)), g.push(E);
    }
    const _ = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: r.wrap(g, !0)
    };
    return r.patch(e, _), r.applyData(e, _);
}
export { _hr };
var __wakaru_a4i_initialized = false;
export function a4i() {
if (__wakaru_a4i_initialized) return;
__wakaru_a4i_initialized = true;
"";
i(_hr, "tableRow");

}
