import { MB, vJ } from "./index_71.js";
import { fP, hNe } from "./index_9.js";
import { i } from "./plugin-brand-icon.js";
function Ehr(r, e) {
    const a = [
        {
            type: "text",
            value: "\u21A9"
        }
    ];
    return e > 1 && a.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [
            {
                type: "text",
                value: String(e)
            }
        ]
    }), a;
}
function Ahr(r, e) {
    return "Back to reference " + (r + 1) + (e > 1 ? "-" + e : "");
}
function Thr(r) {
    const e = typeof r.options.clobberPrefix == "string" ? r.options.clobberPrefix : "user-content-", a = r.options.footnoteBackContent || Ehr, s = r.options.footnoteBackLabel || Ahr, l = r.options.footnoteLabel || "Footnotes", u = r.options.footnoteLabelTagName || "h2", p = r.options.footnoteLabelProperties || {
        className: [
            "sr-only"
        ]
    }, m = [];
    let b = -1;
    for(; ++b < r.footnoteOrder.length;){
        const g = r.footnoteById.get(r.footnoteOrder[b]);
        if (!g) continue;
        const _ = r.all(g), v = String(g.identifier).toUpperCase(), x = MB(v.toLowerCase());
        let C = 0;
        const E = [], A = r.footnoteCounts.get(v);
        for(; A !== void 0 && ++C <= A;){
            E.length > 0 && E.push({
                type: "text",
                value: " "
            });
            let N = typeof a == "string" ? a : a(b, C);
            typeof N == "string" && (N = {
                type: "text",
                value: N
            }), E.push({
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + e + "fnref-" + x + (C > 1 ? "-" + C : ""),
                    dataFootnoteBackref: "",
                    ariaLabel: typeof s == "string" ? s : s(b, C),
                    className: [
                        "data-footnote-backref"
                    ]
                },
                children: Array.isArray(N) ? N : [
                    N
                ]
            });
        }
        const $ = _[_.length - 1];
        if ($ && $.type === "element" && $.tagName === "p") {
            const N = $.children[$.children.length - 1];
            N && N.type === "text" ? N.value += " " : $.children.push({
                type: "text",
                value: " "
            }), $.children.push(...E);
        } else _.push(...E);
        const I = {
            type: "element",
            tagName: "li",
            properties: {
                id: e + "fn-" + x
            },
            children: r.wrap(_, !0)
        };
        r.patch(g, I), m.push(I);
    }
    if (m.length !== 0) return {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: !0,
            className: [
                "footnotes"
            ]
        },
        children: [
            {
                type: "element",
                tagName: u,
                properties: {
                    ...fP(p),
                    id: "footnote-label"
                },
                children: [
                    {
                        type: "text",
                        value: l
                    }
                ]
            },
            {
                type: "text",
                value: `
`
            },
            {
                type: "element",
                tagName: "ol",
                properties: {},
                children: r.wrap(m, !0)
            },
            {
                type: "text",
                value: `
`
            }
        ]
    };
}
export { Ahr, Ehr, Thr };
var __wakaru_d4i_initialized = false;
export function d4i() {
if (__wakaru_d4i_initialized) return;
__wakaru_d4i_initialized = true;
hNe(), vJ(), i(Ehr, "defaultFootnoteBackContent"), i(Ahr, "defaultFootnoteBackLabel"), i(Thr, "footer");

}
