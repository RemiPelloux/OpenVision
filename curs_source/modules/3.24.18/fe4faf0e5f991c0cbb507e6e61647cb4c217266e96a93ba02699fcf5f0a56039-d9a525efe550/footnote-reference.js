import { MB, vJ } from "./index_71.js";
import { i } from "./plugin-brand-icon.js";
function ihr(r, e) {
    const a = typeof r.options.clobberPrefix == "string" ? r.options.clobberPrefix : "user-content-", s = String(e.identifier).toUpperCase(), l = MB(s.toLowerCase()), u = r.footnoteOrder.indexOf(s);
    let p, m = r.footnoteCounts.get(s);
    m === void 0 ? (m = 0, r.footnoteOrder.push(s), p = r.footnoteOrder.length) : p = u + 1, m += 1, r.footnoteCounts.set(s, m);
    const b = {
        type: "element",
        tagName: "a",
        properties: {
            href: "#" + a + "fn-" + l,
            id: a + "fnref-" + l + (m > 1 ? "-" + m : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: [
                "footnote-label"
            ]
        },
        children: [
            {
                type: "text",
                value: String(p)
            }
        ]
    };
    r.patch(e, b);
    const g = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [
            b
        ]
    };
    return r.patch(e, g), r.applyData(e, g);
}
export { ihr };
var __wakaru_Wxi_initialized = false;
export function Wxi() {
if (__wakaru_Wxi_initialized) return;
__wakaru_Wxi_initialized = true;
vJ(), i(ihr, "footnoteReference");

}
