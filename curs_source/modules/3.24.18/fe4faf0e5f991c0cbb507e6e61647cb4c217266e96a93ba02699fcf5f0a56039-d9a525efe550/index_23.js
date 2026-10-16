import { MS } from "./default.js";
import { oJ } from "./find.js";
import { EB, SB, yC } from "./index_10.js";
import { kNe, vNe } from "./index_11.js";
import { CNe, xNe } from "./index_14.js";
import { ENe, wC } from "./index_19.js";
import { CNt, TNe } from "./index_22.js";
import { i } from "./plugin-brand-icon.js";
function Bir(r, e) {
    const s = (e || Kir).space;
    return SNt(r, s === "svg" ? yC : SB);
}
function qir(r, e) {
    const a = {
        nodeName: "#document",
        mode: (r.data || {}).quirksMode ? "quirks" : "no-quirks",
        childNodes: []
    };
    return a.childNodes = $Ne(r.children, a, e), TB(r, a), a;
}
function Uir(r, e) {
    const a = {
        nodeName: "#document-fragment",
        childNodes: []
    };
    return a.childNodes = $Ne(r.children, a, e), TB(r, a), a;
}
function Gir(r) {
    const e = {
        nodeName: "#documentType",
        name: "html",
        publicId: "",
        systemId: "",
        parentNode: null
    };
    return TB(r, e), e;
}
function Wir(r) {
    const e = {
        nodeName: "#text",
        value: r.value,
        parentNode: null
    };
    return TB(r, e), e;
}
function Hir(r) {
    const e = {
        nodeName: "#comment",
        data: r.value,
        parentNode: null
    };
    return TB(r, e), e;
}
function Zir(r, e) {
    const a = e;
    let s = a;
    r.type === "element" && r.tagName.toLowerCase() === "svg" && a.space === "html" && (s = yC);
    const l = [];
    let u;
    if (r.properties) {
        for(u in r.properties)if (u !== "children" && Xir.call(r.properties, u)) {
            const b = Vir(s, u, r.properties[u]);
            b && l.push(b);
        }
    }
    const p = s.space;
    const m = {
        nodeName: r.tagName,
        tagName: r.tagName,
        attrs: l,
        namespaceURI: wC[p],
        childNodes: [],
        parentNode: null
    };
    return m.childNodes = $Ne(r.children, m, s), TB(r, m), r.tagName === "template" && r.content && (m.content = Uir(r.content, s)), m;
}
function Vir(r, e, a) {
    const s = oJ(r, e);
    if (a === !1 || a === null || a === void 0 || typeof a == "number" && Number.isNaN(a) || !a && s.boolean) return;
    Array.isArray(a) && (a = s.commaSeparated ? kNe(a) : xNe(a));
    const l = {
        name: s.attribute,
        value: a === !0 ? "" : String(a)
    };
    if (s.space && s.space !== "html" && s.space !== "svg") {
        const u = l.name.indexOf(":");
        u < 0 ? l.prefix = "" : (l.name = l.name.slice(u + 1), l.prefix = s.attribute.slice(0, u)), l.namespace = wC[s.space];
    }
    return l;
}
function $Ne(r, e, a) {
    let s = -1;
    const l = [];
    if (r) for(; ++s < r.length;){
        const u = SNt(r[s], a);
        u.parentNode = e, l.push(u);
    }
    return l;
}
function TB(r, e) {
    const a = r.position;
    a && a.start && a.end && (a.start.offset, a.end.offset, e.sourceCodeLocation = {
        startLine: a.start.line,
        startCol: a.start.column,
        startOffset: a.start.offset,
        endLine: a.end.line,
        endCol: a.end.column,
        endOffset: a.end.offset
    });
}
var Kir, Xir, SNt;
export { $Ne, Bir, Gir, Hir, Kir, SNt, TB, Uir, Vir, Wir, Xir, Zir, qir };
var __wakaru_hvi_initialized = false;
export function hvi() {
if (__wakaru_hvi_initialized) return;
__wakaru_hvi_initialized = true;
vNe(), MS(), EB(), CNe(), ENe(), CNt(), Kir = {}, Xir = {}.hasOwnProperty, SNt = TNe("type", {
    handlers: {
        root: qir,
        element: Zir,
        text: Wir,
        comment: Hir,
        doctype: Gir
    }
}), i(Bir, "toParse5"), i(qir, "root"), i(Uir, "fragment"), i(Gir, "doctype"), i(Wir, "text"), i(Hir, "comment"), i(Zir, "element"), i(Vir, "createProperty"), i($Ne, "all"), i(TB, "patch");

}
