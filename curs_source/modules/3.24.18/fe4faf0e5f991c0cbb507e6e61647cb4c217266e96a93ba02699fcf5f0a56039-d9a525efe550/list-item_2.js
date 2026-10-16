import { i } from "./plugin-brand-icon.js";
function mhr(r, e, a) {
    const s = r.all(e), l = a ? fhr(a) : IPt(e), u = {}, p = [];
    if (typeof e.checked == "boolean") {
        const _ = s[0];
        let v;
        _ && _.type === "element" && _.tagName === "p" ? v = _ : (v = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
        }, s.unshift(v)), v.children.length > 0 && v.children.unshift({
            type: "text",
            value: " "
        }), v.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: e.checked,
                disabled: !0
            },
            children: []
        }), u.className = [
            "task-list-item"
        ];
    }
    let m = -1;
    for(; ++m < s.length;){
        const _ = s[m];
        (l || m !== 0 || _.type !== "element" || _.tagName !== "p") && p.push({
            type: "text",
            value: `
`
        }), _.type === "element" && _.tagName === "p" && !l ? p.push(..._.children) : p.push(_);
    }
    const b = s[s.length - 1];
    b && (l || b.type !== "element" || b.tagName !== "p") && p.push({
        type: "text",
        value: `
`
    });
    const g = {
        type: "element",
        tagName: "li",
        properties: u,
        children: p
    };
    return r.patch(e, g), r.applyData(e, g);
}
function fhr(r) {
    let e = !1;
    if (r.type === "list") {
        e = r.spread || !1;
        const a = r.children;
        let s = -1;
        for(; !e && ++s < a.length;)e = IPt(a[s]);
    }
    return e;
}
function IPt(r) {
    const e = r.spread;
    return e ?? r.children.length > 1;
}
export { IPt, fhr, mhr };
var __wakaru_Qxi_initialized = false;
export function Qxi() {
if (__wakaru_Qxi_initialized) return;
__wakaru_Qxi_initialized = true;
"";
i(mhr, "listItem"), i(fhr, "listLoose"), i(IPt, "listItemLoose");

}
