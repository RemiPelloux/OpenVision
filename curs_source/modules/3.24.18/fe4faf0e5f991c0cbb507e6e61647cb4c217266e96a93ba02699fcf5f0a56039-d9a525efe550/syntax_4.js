import { ixi, zdr } from "./edit-map.js";
import { Ka, Zl, gl, op } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { Bdr, axi } from "./infer.js";
import { i } from "./plugin-brand-icon.js";
function qdr() {
    return {
        flow: {
            null: {
                name: "table",
                tokenize: Udr,
                resolveAll: Gdr
            }
        }
    };
}
function Udr(r, e, a) {
    const s = this;
    let l = 0, u = 0, p;
    return m;
    function m(B) {
        let V = s.events.length - 1;
        for(; V > -1;){
            const K = s.events[V][1].type;
            if (K === "lineEnding" || K === "linePrefix") V--;
            else break;
        }
        const H = V > -1 ? s.events[V][1].type : null, Z = H === "tableHead" || H === "tableRow" ? j : b;
        return Z === j && s.parser.lazy[s.now().line] ? a(B) : Z(B);
    }
    function b(B) {
        return r.enter("tableHead"), r.enter("tableRow"), g(B);
    }
    function g(B) {
        return B === 124 || (p = !0, u += 1), _(B);
    }
    function _(B) {
        return B === null ? a(B) : Ka(B) ? u > 1 ? (u = 0, s.interrupt = !0, r.exit("tableRow"), r.enter("lineEnding"), r.consume(B), r.exit("lineEnding"), C) : a(B) : gl(B) ? wc(r, _, "whitespace")(B) : (u += 1, p && (p = !1, l += 1), B === 124 ? (r.enter("tableCellDivider"), r.consume(B), r.exit("tableCellDivider"), p = !0, _) : (r.enter("data"), v(B)));
    }
    function v(B) {
        return B === null || B === 124 || op(B) ? (r.exit("data"), _(B)) : (r.consume(B), B === 92 ? x : v);
    }
    function x(B) {
        return B === 92 || B === 124 ? (r.consume(B), v) : v(B);
    }
    function C(B) {
        return s.interrupt = !1, s.parser.lazy[s.now().line] ? a(B) : (r.enter("tableDelimiterRow"), p = !1, gl(B) ? wc(r, E, "linePrefix", s.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(B) : E(B));
    }
    function E(B) {
        return B === 45 || B === 58 ? $(B) : B === 124 ? (p = !0, r.enter("tableCellDivider"), r.consume(B), r.exit("tableCellDivider"), A) : L(B);
    }
    function A(B) {
        return gl(B) ? wc(r, $, "whitespace")(B) : $(B);
    }
    function $(B) {
        return B === 58 ? (u += 1, p = !0, r.enter("tableDelimiterMarker"), r.consume(B), r.exit("tableDelimiterMarker"), I) : B === 45 ? (u += 1, I(B)) : B === null || Ka(B) ? P(B) : L(B);
    }
    function I(B) {
        return B === 45 ? (r.enter("tableDelimiterFiller"), N(B)) : L(B);
    }
    function N(B) {
        return B === 45 ? (r.consume(B), N) : B === 58 ? (p = !0, r.exit("tableDelimiterFiller"), r.enter("tableDelimiterMarker"), r.consume(B), r.exit("tableDelimiterMarker"), R) : (r.exit("tableDelimiterFiller"), R(B));
    }
    function R(B) {
        return gl(B) ? wc(r, P, "whitespace")(B) : P(B);
    }
    function P(B) {
        return B === 124 ? E(B) : B === null || Ka(B) ? !p || l !== u ? L(B) : (r.exit("tableDelimiterRow"), r.exit("tableHead"), e(B)) : L(B);
    }
    function L(B) {
        return a(B);
    }
    function j(B) {
        return r.enter("tableRow"), z(B);
    }
    function z(B) {
        return B === 124 ? (r.enter("tableCellDivider"), r.consume(B), r.exit("tableCellDivider"), z) : B === null || Ka(B) ? (r.exit("tableRow"), e(B)) : gl(B) ? wc(r, z, "whitespace")(B) : (r.enter("data"), q(B));
    }
    function q(B) {
        return B === null || B === 124 || op(B) ? (r.exit("data"), z(B)) : (r.consume(B), B === 92 ? O : q);
    }
    function O(B) {
        return B === 92 || B === 124 ? (r.consume(B), q) : q(B);
    }
}
function Gdr(r, e) {
    let a = -1, s = !0, l = 0, u = [
        0,
        0,
        0,
        0
    ], p = [
        0,
        0,
        0,
        0
    ], m = !1, b = 0, g, _, v;
    const x = new zdr;
    for(; ++a < r.length;){
        const C = r[a], E = C[1];
        C[0] === "enter" ? E.type === "tableHead" ? (m = !1, b !== 0 && (ORt(x, e, b, g, _), _ = void 0, b = 0), g = {
            type: "table",
            start: Object.assign({}, E.start),
            end: Object.assign({}, E.end)
        }, x.add(a, 0, [
            [
                "enter",
                g,
                e
            ]
        ])) : E.type === "tableRow" || E.type === "tableDelimiterRow" ? (s = !0, v = void 0, u = [
            0,
            0,
            0,
            0
        ], p = [
            0,
            a + 1,
            0,
            0
        ], m && (m = !1, _ = {
            type: "tableBody",
            start: Object.assign({}, E.start),
            end: Object.assign({}, E.end)
        }, x.add(a, 0, [
            [
                "enter",
                _,
                e
            ]
        ])), l = E.type === "tableDelimiterRow" ? 2 : _ ? 3 : 1) : l && (E.type === "data" || E.type === "tableDelimiterMarker" || E.type === "tableDelimiterFiller") ? (s = !1, p[2] === 0 && (u[1] !== 0 && (p[0] = p[1], v = Ofe(x, e, u, l, void 0, v), u = [
            0,
            0,
            0,
            0
        ]), p[2] = a)) : E.type === "tableCellDivider" && (s ? s = !1 : (u[1] !== 0 && (p[0] = p[1], v = Ofe(x, e, u, l, void 0, v)), u = p, p = [
            u[1],
            a,
            0,
            0
        ])) : E.type === "tableHead" ? (m = !0, b = a) : E.type === "tableRow" || E.type === "tableDelimiterRow" ? (b = a, u[1] !== 0 ? (p[0] = p[1], v = Ofe(x, e, u, l, a, v)) : p[1] !== 0 && (v = Ofe(x, e, p, l, a, v)), l = 0) : l && (E.type === "data" || E.type === "tableDelimiterMarker" || E.type === "tableDelimiterFiller") && (p[3] = a);
    }
    for(b !== 0 && ORt(x, e, b, g, _), x.consume(e.events), a = -1; ++a < e.events.length;){
        const C = e.events[a];
        C[0] === "enter" && C[1].type === "table" && (C[1]._align = Bdr(e.events, a));
    }
    return r;
}
function Ofe(r, e, a, s, l, u) {
    const p = s === 1 ? "tableHeader" : s === 2 ? "tableDelimiter" : "tableData", m = "tableContent";
    a[0] !== 0 && (u.end = Object.assign({}, RB(e.events, a[0])), r.add(a[0], 0, [
        [
            "exit",
            u,
            e
        ]
    ]));
    const b = RB(e.events, a[1]);
    if (u = {
        type: p,
        start: Object.assign({}, b),
        end: Object.assign({}, b)
    }, r.add(a[1], 0, [
        [
            "enter",
            u,
            e
        ]
    ]), a[2] !== 0) {
        const g = RB(e.events, a[2]), _ = RB(e.events, a[3]), v = {
            type: m,
            start: Object.assign({}, g),
            end: Object.assign({}, _)
        };
        if (r.add(a[2], 0, [
            [
                "enter",
                v,
                e
            ]
        ]), s !== 2) {
            const x = e.events[a[2]], C = e.events[a[3]];
            if (x[1].end = Object.assign({}, C[1].end), x[1].type = "chunkText", x[1].contentType = "text", a[3] > a[2] + 1) {
                const E = a[2] + 1, A = a[3] - a[2] - 1;
                r.add(E, A, []);
            }
        }
        r.add(a[3] + 1, 0, [
            [
                "exit",
                v,
                e
            ]
        ]);
    }
    return l !== void 0 && (u.end = Object.assign({}, RB(e.events, l)), r.add(l, 0, [
        [
            "exit",
            u,
            e
        ]
    ]), u = void 0), u;
}
function ORt(r, e, a, s, l) {
    const u = [], p = RB(e.events, a);
    l && (l.end = Object.assign({}, p), u.push([
        "exit",
        l,
        e
    ])), s.end = Object.assign({}, p), u.push([
        "exit",
        s,
        e
    ]), r.add(a + 1, 0, u);
}
function RB(r, e) {
    const a = r[e], s = a[0] === "enter" ? "start" : "end";
    return a[1][s];
}
export { Gdr, ORt, Ofe, RB, Udr, qdr };
var __wakaru_oxi_initialized = false;
export function oxi() {
if (__wakaru_oxi_initialized) return;
__wakaru_oxi_initialized = true;
ng(), Zl(), ixi(), axi(), i(qdr, "gfmTable"), i(Udr, "tokenizeTable"), i(Gdr, "resolveTable"), i(Ofe, "flushCell"), i(ORt, "flushTableEnd"), i(RB, "getPoint");

}
