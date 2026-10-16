import { Shr, u4i } from "./index_111.js";
import { CMt } from "./index_30.js";
import { Ife } from "./index_31.js";
import { R4 } from "./index_6.js";
import { ffe } from "./index_7.js";
import { fP, hNe } from "./index_9.js";
import { i } from "./plugin-brand-icon.js";
function $hr(r, e) {
    const a = e || Phr, s = new Map, l = new Map, u = new Map, p = {
        ...Shr,
        ...a.handlers
    }, m = {
        all: g,
        applyData: Nhr,
        definitionById: s,
        footnoteById: l,
        footnoteCounts: u,
        footnoteOrder: [],
        handlers: p,
        one: b,
        options: a,
        patch: Ihr,
        wrap: Rhr
    };
    return R4(r, function(_) {
        if (_.type === "definition" || _.type === "footnoteDefinition") {
            const v = _.type === "definition" ? s : l, x = String(_.identifier).toUpperCase();
            v.has(x) || v.set(x, _);
        }
    }), m;
    function b(_, v) {
        const x = _.type, C = m.handlers[x];
        if (bMe.call(m.handlers, x) && C) return C(m, _, v);
        if (m.options.passThrough && m.options.passThrough.includes(x)) {
            if ("children" in _) {
                const { children: A, ...$ } = _, I = fP($);
                return I.children = m.all(_), I;
            }
            return fP(_);
        }
        return (m.options.unknownHandler || Mhr)(m, _, v);
    }
    i(b, "one");
    function g(_) {
        const v = [];
        if ("children" in _) {
            const x = _.children;
            let C = -1;
            for(; ++C < x.length;){
                const E = m.one(x[C], _);
                if (E) {
                    if (C && x[C - 1].type === "break" && (!Array.isArray(E) && E.type === "text" && (E.value = PPt(E.value)), !Array.isArray(E) && E.type === "element")) {
                        const A = E.children[0];
                        A && A.type === "text" && (A.value = PPt(A.value));
                    }
                    Array.isArray(E) ? v.push(...E) : v.push(E);
                }
            }
        }
        return v;
    }
    i(g, "all");
}
function Ihr(r, e) {
    r.position && (e.position = CMt(r));
}
function Nhr(r, e) {
    let a = e;
    if (r && r.data) {
        const s = r.data.hName, l = r.data.hChildren, u = r.data.hProperties;
        if (typeof s == "string") if (a.type === "element") a.tagName = s;
        else {
            const p = "children" in a ? a.children : [
                a
            ];
            a = {
                type: "element",
                tagName: s,
                properties: {},
                children: p
            };
        }
        a.type === "element" && u && Object.assign(a.properties, fP(u)), "children" in a && a.children && l !== null && l !== void 0 && (a.children = l);
    }
    return a;
}
function Mhr(r, e) {
    const a = e.data || {}, s = "value" in e && !(bMe.call(a, "hProperties") || bMe.call(a, "hChildren")) ? {
        type: "text",
        value: e.value
    } : {
        type: "element",
        tagName: "div",
        properties: {},
        children: r.all(e)
    };
    return r.patch(e, s), r.applyData(e, s);
}
function Rhr(r, e) {
    const a = [];
    let s = -1;
    for(e && a.push({
        type: "text",
        value: `
`
    }); ++s < r.length;)s && a.push({
        type: "text",
        value: `
`
    }), a.push(r[s]);
    return e && r.length > 0 && a.push({
        type: "text",
        value: `
`
    }), a;
}
function PPt(r) {
    let e = 0, a = r.charCodeAt(e);
    for(; a === 9 || a === 32;)e++, a = r.charCodeAt(e);
    return r.slice(e);
}
var bMe, Phr;
export { $hr, Ihr, Mhr, Nhr, PPt, Phr, Rhr, bMe };
var __wakaru_p4i_initialized = false;
export function p4i() {
if (__wakaru_p4i_initialized) return;
__wakaru_p4i_initialized = true;
hNe(), ffe(), Ife(), u4i(), bMe = {}.hasOwnProperty, Phr = {}, i($hr, "createState"), i(Ihr, "patch"), i(Nhr, "applyData"), i(Mhr, "defaultUnknownHandler"), i(Rhr, "wrap"), i(PPt, "trimMarkdownSpaceStart");

}
