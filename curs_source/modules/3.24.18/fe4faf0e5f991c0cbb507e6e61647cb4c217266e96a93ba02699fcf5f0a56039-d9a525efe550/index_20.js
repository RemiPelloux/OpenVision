import { MS } from "./default.js";
import { oJ } from "./find.js";
import { EB, SB, yC } from "./index_10.js";
import { bNt, yNt } from "./index_15.js";
import { jir } from "./index_16.js";
import { Lir } from "./index_17.js";
import { pvi } from "./index_18.js";
import { ENe, wC } from "./index_19.js";
import { i } from "./plugin-brand-icon.js";
function Dir(r, e) {
    const a = e || {};
    return ANe({
        file: a.file || void 0,
        location: !1,
        schema: a.space === "svg" ? yC : SB,
        verbose: a.verbose || !1
    }, r);
}
function ANe(r, e) {
    let a;
    switch(e.nodeName){
        case "#comment":
            {
                const s = e;
                return a = {
                    type: "comment",
                    value: s.data
                }, yfe(r, s, a), a;
            }
        case "#document":
        case "#document-fragment":
            {
                const s = e, l = "mode" in s ? s.mode === "quirks" || s.mode === "limited-quirks" : !1;
                if (a = {
                    type: "root",
                    children: _Nt(r, e.childNodes),
                    data: {
                        quirksMode: l
                    }
                }, r.file && r.location) {
                    const u = String(r.file), p = Lir(u), m = p.toPoint(0), b = p.toPoint(u.length);
                    a.position = {
                        start: m,
                        end: b
                    };
                }
                return a;
            }
        case "#documentType":
            {
                const s = e;
                return a = {
                    type: "doctype"
                }, yfe(r, s, a), a;
            }
        case "#text":
            {
                const s = e;
                return a = {
                    type: "text",
                    value: s.value
                }, yfe(r, s, a), a;
            }
        default:
            return a = Fir(r, e), a;
    }
}
function _Nt(r, e) {
    let a = -1;
    const s = [];
    for(; ++a < e.length;){
        const l = ANe(r, e[a]);
        s.push(l);
    }
    return s;
}
function Fir(r, e) {
    const a = r.schema;
    r.schema = e.namespaceURI === wC.svg ? yC : SB;
    let s = -1;
    const l = {};
    for(; ++s < e.attrs.length;){
        const m = e.attrs[s], b = (m.prefix ? m.prefix + ":" : "") + m.name;
        vNt.call(zir, b) || (l[b] = m.value);
    }
    const p = (r.schema.space === "svg" ? yNt : bNt)(e.tagName, l, _Nt(r, e.childNodes));
    if (yfe(r, e, p), p.tagName === "template") {
        const m = e, b = m.sourceCodeLocation, g = b && b.startTag && AB(b.startTag), _ = b && b.endTag && AB(b.endTag), v = ANe(r, m.content);
        g && _ && r.file && (v.position = {
            start: g.end,
            end: _.start
        }), p.content = v;
    }
    return r.schema = a, p;
}
function yfe(r, e, a) {
    if ("sourceCodeLocation" in e && e.sourceCodeLocation && r.file) {
        const s = Oir(r, a, e.sourceCodeLocation);
        s && (r.location = !0, a.position = s);
    }
}
function Oir(r, e, a) {
    const s = AB(a);
    if (e.type === "element") {
        const l = e.children[e.children.length - 1];
        if (s && !a.endTag && l && l.position && l.position.end && (s.end = Object.assign({}, l.position.end)), r.verbose) {
            const u = {};
            let p;
            if (a.attrs) for(p in a.attrs)vNt.call(a.attrs, p) && (u[oJ(r.schema, p).property] = AB(a.attrs[p]));
            a.startTag;
            const m = AB(a.startTag), b = a.endTag ? AB(a.endTag) : void 0, g = {
                opening: m
            };
            b && (g.closing = b), g.properties = u, e.data = {
                position: g
            };
        }
    }
    return s;
}
function AB(r) {
    const e = kNt({
        line: r.startLine,
        column: r.startCol,
        offset: r.startOffset
    }), a = kNt({
        line: r.endLine,
        column: r.endCol,
        offset: r.endOffset
    });
    return e || a ? {
        start: e,
        end: a
    } : void 0;
}
function kNt(r) {
    return r.line && r.column ? r : void 0;
}
var vNt, zir;
export { AB, ANe, Dir, Fir, Oir, _Nt, kNt, vNt, yfe, zir };
var __wakaru_mvi_initialized = false;
export function mvi() {
if (__wakaru_mvi_initialized) return;
__wakaru_mvi_initialized = true;
MS(), jir(), EB(), pvi(), ENe(), vNt = {}.hasOwnProperty, zir = Object.prototype, i(Dir, "fromParse5"), i(ANe, "one"), i(_Nt, "all"), i(Fir, "element"), i(yfe, "patch"), i(Oir, "createLocation"), i(AB, "position"), i(kNt, "point");

}
