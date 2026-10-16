import { Zl, op } from "./index_41.js";
import { L4, jfe } from "./index_47.js";
import { ik, l3, vP } from "./index_69.js";
import { Dfe, QNe } from "./index_73.js";
import { NRt, jur } from "./index_76.js";
import { Lur, MRt } from "./index_77.js";
import { Dur, RRt } from "./index_78.js";
import { Fur, SJ } from "./index_79.js";
import { i } from "./plugin-brand-icon.js";
function idr(r) {
    let e = -1;
    const a = [];
    for(; ++e < r.length;){
        const s = r[e][1];
        if (a.push(r[e]), s.type === "labelImage" || s.type === "labelLink" || s.type === "labelEnd") {
            const l = s.type === "labelImage" ? 4 : 2;
            s.type = "data", e += l;
        }
    }
    return r.length !== a.length && ik(r, 0, r.length, a), r;
}
function adr(r, e) {
    let a = r.length, s = 0, l, u, p, m;
    for(; a--;)if (l = r[a][1], u) {
        if (l.type === "link" || l.type === "labelLink" && l._inactive) break;
        r[a][0] === "enter" && l.type === "labelLink" && (l._inactive = !0);
    } else if (p) {
        if (r[a][0] === "enter" && (l.type === "labelImage" || l.type === "labelLink") && !l._balanced && (u = a, l.type !== "labelLink")) {
            s = 2;
            break;
        }
    } else l.type === "labelEnd" && (p = a);
    const b = {
        type: r[u][1].type === "labelLink" ? "link" : "image",
        start: {
            ...r[u][1].start
        },
        end: {
            ...r[r.length - 1][1].end
        }
    }, g = {
        type: "label",
        start: {
            ...r[u][1].start
        },
        end: {
            ...r[p][1].end
        }
    }, _ = {
        type: "labelText",
        start: {
            ...r[u + s + 2][1].end
        },
        end: {
            ...r[p - 2][1].start
        }
    };
    return m = [
        [
            "enter",
            b,
            e
        ],
        [
            "enter",
            g,
            e
        ]
    ], m = l3(m, r.slice(u + 1, u + s + 3)), m = l3(m, [
        [
            "enter",
            _,
            e
        ]
    ]), m = l3(m, Dfe(e.parser.constructs.insideSpan.null, r.slice(u + s + 4, p - 3), e)), m = l3(m, [
        [
            "exit",
            _,
            e
        ],
        r[p - 2],
        r[p - 1],
        [
            "exit",
            g,
            e
        ]
    ]), m = l3(m, r.slice(p + 1)), m = l3(m, [
        [
            "exit",
            b,
            e
        ]
    ]), ik(r, u, r.length, m), r;
}
function odr(r, e, a) {
    const s = this;
    let l = s.events.length, u, p;
    for(; l--;)if ((s.events[l][1].type === "labelImage" || s.events[l][1].type === "labelLink") && !s.events[l][1]._balanced) {
        u = s.events[l][1];
        break;
    }
    return m;
    function m(x) {
        return u ? u._inactive ? v(x) : (p = s.parser.defined.includes(L4(s.sliceSerialize({
            start: u.end,
            end: s.now()
        }))), r.enter("labelEnd"), r.enter("labelMarker"), r.consume(x), r.exit("labelMarker"), r.exit("labelEnd"), b) : a(x);
    }
    function b(x) {
        return x === 40 ? r.attempt(udr, _, p ? _ : v)(x) : x === 91 ? r.attempt(ddr, _, p ? g : v)(x) : p ? _(x) : v(x);
    }
    function g(x) {
        return r.attempt(pdr, _, v)(x);
    }
    function _(x) {
        return e(x);
    }
    function v(x) {
        return u._balanced = !0, a(x);
    }
}
function sdr(r, e, a) {
    return s;
    function s(v) {
        return r.enter("resource"), r.enter("resourceMarker"), r.consume(v), r.exit("resourceMarker"), l;
    }
    function l(v) {
        return op(v) ? SJ(r, u)(v) : u(v);
    }
    function u(v) {
        return v === 41 ? _(v) : NRt(r, p, m, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(v);
    }
    function p(v) {
        return op(v) ? SJ(r, b)(v) : _(v);
    }
    function m(v) {
        return a(v);
    }
    function b(v) {
        return v === 34 || v === 39 || v === 40 ? RRt(r, g, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(v) : _(v);
    }
    function g(v) {
        return op(v) ? SJ(r, _)(v) : _(v);
    }
    function _(v) {
        return v === 41 ? (r.enter("resourceMarker"), r.consume(v), r.exit("resourceMarker"), r.exit("resource"), e) : a(v);
    }
}
function cdr(r, e, a) {
    const s = this;
    return l;
    function l(m) {
        return MRt.call(s, r, u, p, "reference", "referenceMarker", "referenceString")(m);
    }
    function u(m) {
        return s.parser.defined.includes(L4(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1))) ? e(m) : a(m);
    }
    function p(m) {
        return a(m);
    }
}
function ldr(r, e, a) {
    return s;
    function s(u) {
        return r.enter("reference"), r.enter("referenceMarker"), r.consume(u), r.exit("referenceMarker"), l;
    }
    function l(u) {
        return u === 93 ? (r.enter("referenceMarker"), r.consume(u), r.exit("referenceMarker"), r.exit("reference"), e) : a(u);
    }
}
var rMe, udr, ddr, pdr;
export { adr, cdr, ddr, idr, ldr, odr, pdr, rMe, sdr, udr };
var __wakaru_jRt_initialized = false;
export function jRt() {
if (__wakaru_jRt_initialized) return;
__wakaru_jRt_initialized = true;
jur(), Lur(), Dur(), Fur(), Zl(), vP(), jfe(), QNe(), rMe = {
    name: "labelEnd",
    resolveAll: idr,
    resolveTo: adr,
    tokenize: odr
}, udr = {
    tokenize: sdr
}, ddr = {
    tokenize: cdr
}, pdr = {
    tokenize: ldr
}, i(idr, "resolveAllLabelEnd"), i(adr, "resolveToLabelEnd"), i(odr, "tokenizeLabelEnd"), i(sdr, "tokenizeResource"), i(cdr, "tokenizeReferenceFull"), i(ldr, "tokenizeReferenceCollapsed");

}
