import { CMt } from "./index_30.js";
import { Ife } from "./index_31.js";
import { fP, hNe } from "./index_9.js";
import { i } from "./plugin-brand-icon.js";
import { Vsr, j4 } from "./schema_2.js";
function Ksr(r, e) {
    let a = {
        type: "root",
        children: []
    };
    const s = {
        schema: e ? {
            ...j4,
            ...e
        } : j4,
        stack: []
    }, l = IMt(s, r);
    return l && (Array.isArray(l) ? l.length === 1 ? a = l[0] : a.children = l : a = l), a;
}
function IMt(r, e) {
    if (e && typeof e == "object") {
        const a = e;
        switch(typeof a.type == "string" ? a.type : ""){
            case "comment":
                return Xsr(r, a);
            case "doctype":
                return Ysr(r, a);
            case "element":
                return Jsr(r, a);
            case "root":
                return Qsr(r, a);
            case "text":
                return ecr(r, a);
            default:
        }
    }
}
function Xsr(r, e) {
    if (r.schema.allowComments) {
        const a = typeof e.value == "string" ? e.value : "", s = a.indexOf("-->"), u = {
            type: "comment",
            value: s < 0 ? a : a.slice(0, s)
        };
        return _J(u, e), u;
    }
}
function Ysr(r, e) {
    if (r.schema.allowDoctypes) {
        const a = {
            type: "doctype"
        };
        return _J(a, e), a;
    }
}
function Jsr(r, e) {
    const a = typeof e.tagName == "string" ? e.tagName : "";
    r.stack.push(a);
    const s = NMt(r, e.children), l = tcr(r, e.properties);
    r.stack.pop();
    let u = !1;
    if (a && a !== "*" && (!r.schema.tagNames || r.schema.tagNames.includes(a)) && (u = !0, r.schema.ancestors && QT.call(r.schema.ancestors, a))) {
        const m = r.schema.ancestors[a];
        let b = -1;
        for(u = !1; ++b < m.length;)r.stack.includes(m[b]) && (u = !0);
    }
    if (!u) return r.schema.strip && !r.schema.strip.includes(a) ? s : void 0;
    const p = {
        type: "element",
        tagName: a,
        properties: l,
        children: s
    };
    return _J(p, e), p;
}
function Qsr(r, e) {
    const s = {
        type: "root",
        children: NMt(r, e.children)
    };
    return _J(s, e), s;
}
function ecr(r, e) {
    const s = {
        type: "text",
        value: typeof e.value == "string" ? e.value : ""
    };
    return _J(s, e), s;
}
function NMt(r, e) {
    const a = [];
    if (Array.isArray(e)) {
        const s = e;
        let l = -1;
        for(; ++l < s.length;){
            const u = IMt(r, s[l]);
            u && (Array.isArray(u) ? a.push(...u) : a.push(u));
        }
    }
    return a;
}
function tcr(r, e) {
    const a = r.stack[r.stack.length - 1], s = r.schema.attributes, l = r.schema.required, u = s && QT.call(s, a) ? s[a] : void 0, p = s && QT.call(s, "*") ? s["*"] : void 0, m = e && typeof e == "object" ? e : {}, b = {};
    let g;
    for(g in m)if (QT.call(m, g)) {
        const _ = m[g];
        let v = MMt(r, PMt(u, g), g, _);
        v == null && (v = MMt(r, PMt(p, g), g, _)), v != null && (b[g] = v);
    }
    if (l && QT.call(l, a)) {
        const _ = l[a];
        for(g in _)QT.call(_, g) && !QT.call(b, g) && (b[g] = _[g]);
    }
    return b;
}
function MMt(r, e, a, s) {
    return e ? Array.isArray(s) ? ncr(r, e, a, s) : RMt(r, e, a, s) : void 0;
}
function ncr(r, e, a, s) {
    let l = -1;
    const u = [];
    for(; ++l < s.length;){
        const p = RMt(r, e, a, s[l]);
        (typeof p == "number" || typeof p == "string") && u.push(p);
    }
    return u;
}
function RMt(r, e, a, s) {
    if (!(typeof s != "boolean" && typeof s != "number" && typeof s != "string") && rcr(r, a, s)) {
        if (typeof e == "object" && e.length > 1) {
            let l = !1, u = 0;
            for(; ++u < e.length;){
                const p = e[u];
                if (p && typeof p == "object" && "flags" in p) {
                    if (p.test(String(s))) {
                        l = !0;
                        break;
                    }
                } else if (p === s) {
                    l = !0;
                    break;
                }
            }
            if (!l) return;
        }
        return r.schema.clobber && r.schema.clobberPrefix && r.schema.clobber.includes(a) ? r.schema.clobberPrefix + s : s;
    }
}
function rcr(r, e, a) {
    const s = r.schema.protocols && QT.call(r.schema.protocols, e) ? r.schema.protocols[e] : void 0;
    if (!s || s.length === 0) return !0;
    const l = String(a), u = l.indexOf(":"), p = l.indexOf("?"), m = l.indexOf("#"), b = l.indexOf("/");
    if (u < 0 || b > -1 && u > b || p > -1 && u > p || m > -1 && u > m) return !0;
    let g = -1;
    for(; ++g < s.length;){
        const _ = s[g];
        if (u === _.length && l.slice(0, _.length) === _) return !0;
    }
    return !1;
}
function _J(r, e) {
    const a = CMt(e);
    e.data && (r.data = fP(e.data)), a && (r.position = a);
}
function PMt(r, e) {
    let a, s = -1;
    if (r) for(; ++s < r.length;){
        const l = r[s], u = typeof l == "string" ? l : l[0];
        if (u === e) return l;
        u === "data*" && (a = l);
    }
    if (e.length > 4 && e.slice(0, 4).toLowerCase() === "data") return a;
}
var QT;
export { IMt, Jsr, Ksr, MMt, NMt, PMt, QT, Qsr, RMt, Xsr, Ysr, _J, ecr, ncr, rcr, tcr };
var __wakaru_Rvi_initialized = false;
export function Rvi() {
if (__wakaru_Rvi_initialized) return;
__wakaru_Rvi_initialized = true;
hNe(), Ife(), Vsr(), QT = {}.hasOwnProperty, i(Ksr, "sanitize"), i(IMt, "transform"), i(Xsr, "comment"), i(Ysr, "doctype"), i(Jsr, "element"), i(Qsr, "root"), i(ecr, "text"), i(NMt, "children"), i(tcr, "properties"), i(MMt, "propertyValue"), i(ncr, "propertyValueMany"), i(RMt, "propertyValuePrimitive"), i(rcr, "safeProtocol"), i(_J, "patch"), i(PMt, "findDefinition");

}
