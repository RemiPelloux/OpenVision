import { xJ } from "./blank-line.js";
import { Zl, op } from "./index_41.js";
import { L4, jfe } from "./index_47.js";
import { ng, wc } from "./index_74.js";
import { DRt } from "./index_81.js";
import { i } from "./plugin-brand-icon.js";
function $dr() {
    return {
        document: {
            91: {
                name: "gfmFootnoteDefinition",
                tokenize: Rdr,
                continuation: {
                    tokenize: Pdr
                },
                exit: jdr
            }
        },
        text: {
            91: {
                name: "gfmFootnoteCall",
                tokenize: Mdr
            },
            93: {
                name: "gfmPotentialFootnoteCall",
                add: "after",
                tokenize: Idr,
                resolveTo: Ndr
            }
        }
    };
}
function Idr(r, e, a) {
    const s = this;
    let l = s.events.length;
    const u = s.parser.gfmFootnotes || (s.parser.gfmFootnotes = []);
    let p;
    for(; l--;){
        const b = s.events[l][1];
        if (b.type === "labelImage") {
            p = b;
            break;
        }
        if (b.type === "gfmFootnoteCall" || b.type === "labelLink" || b.type === "label" || b.type === "image" || b.type === "link") break;
    }
    return m;
    function m(b) {
        if (!p || !p._balanced) return a(b);
        const g = L4(s.sliceSerialize({
            start: p.end,
            end: s.now()
        }));
        return g.codePointAt(0) !== 94 || !u.includes(g.slice(1)) ? a(b) : (r.enter("gfmFootnoteCallLabelMarker"), r.consume(b), r.exit("gfmFootnoteCallLabelMarker"), e(b));
    }
}
function Ndr(r, e) {
    let a = r.length, s;
    for(; a--;)if (r[a][1].type === "labelImage" && r[a][0] === "enter") {
        s = r[a][1];
        break;
    }
    r[a + 1][1].type = "data", r[a + 3][1].type = "gfmFootnoteCallLabelMarker";
    const l = {
        type: "gfmFootnoteCall",
        start: Object.assign({}, r[a + 3][1].start),
        end: Object.assign({}, r[r.length - 1][1].end)
    }, u = {
        type: "gfmFootnoteCallMarker",
        start: Object.assign({}, r[a + 3][1].end),
        end: Object.assign({}, r[a + 3][1].end)
    };
    u.end.column++, u.end.offset++, u.end._bufferIndex++;
    const p = {
        type: "gfmFootnoteCallString",
        start: Object.assign({}, u.end),
        end: Object.assign({}, r[r.length - 1][1].start)
    }, m = {
        type: "chunkString",
        contentType: "string",
        start: Object.assign({}, p.start),
        end: Object.assign({}, p.end)
    }, b = [
        r[a + 1],
        r[a + 2],
        [
            "enter",
            l,
            e
        ],
        r[a + 3],
        r[a + 4],
        [
            "enter",
            u,
            e
        ],
        [
            "exit",
            u,
            e
        ],
        [
            "enter",
            p,
            e
        ],
        [
            "enter",
            m,
            e
        ],
        [
            "exit",
            m,
            e
        ],
        [
            "exit",
            p,
            e
        ],
        r[r.length - 2],
        r[r.length - 1],
        [
            "exit",
            l,
            e
        ]
    ];
    return r.splice(a, r.length - a + 1, ...b), r;
}
function Mdr(r, e, a) {
    const s = this, l = s.parser.gfmFootnotes || (s.parser.gfmFootnotes = []);
    let u = 0, p;
    return m;
    function m(v) {
        return r.enter("gfmFootnoteCall"), r.enter("gfmFootnoteCallLabelMarker"), r.consume(v), r.exit("gfmFootnoteCallLabelMarker"), b;
    }
    function b(v) {
        return v !== 94 ? a(v) : (r.enter("gfmFootnoteCallMarker"), r.consume(v), r.exit("gfmFootnoteCallMarker"), r.enter("gfmFootnoteCallString"), r.enter("chunkString").contentType = "string", g);
    }
    function g(v) {
        if (u > 999 || v === 93 && !p || v === null || v === 91 || op(v)) return a(v);
        if (v === 93) {
            r.exit("chunkString");
            const x = r.exit("gfmFootnoteCallString");
            return l.includes(L4(s.sliceSerialize(x))) ? (r.enter("gfmFootnoteCallLabelMarker"), r.consume(v), r.exit("gfmFootnoteCallLabelMarker"), r.exit("gfmFootnoteCall"), e) : a(v);
        }
        return op(v) || (p = !0), u++, r.consume(v), v === 92 ? _ : g;
    }
    function _(v) {
        return v === 91 || v === 92 || v === 93 ? (r.consume(v), u++, g) : g(v);
    }
}
function Rdr(r, e, a) {
    const s = this, l = s.parser.gfmFootnotes || (s.parser.gfmFootnotes = []);
    let u, p = 0, m;
    return b;
    function b(E) {
        return r.enter("gfmFootnoteDefinition")._container = !0, r.enter("gfmFootnoteDefinitionLabel"), r.enter("gfmFootnoteDefinitionLabelMarker"), r.consume(E), r.exit("gfmFootnoteDefinitionLabelMarker"), g;
    }
    function g(E) {
        return E === 94 ? (r.enter("gfmFootnoteDefinitionMarker"), r.consume(E), r.exit("gfmFootnoteDefinitionMarker"), r.enter("gfmFootnoteDefinitionLabelString"), r.enter("chunkString").contentType = "string", _) : a(E);
    }
    function _(E) {
        if (p > 999 || E === 93 && !m || E === null || E === 91 || op(E)) return a(E);
        if (E === 93) {
            r.exit("chunkString");
            const A = r.exit("gfmFootnoteDefinitionLabelString");
            return u = L4(s.sliceSerialize(A)), r.enter("gfmFootnoteDefinitionLabelMarker"), r.consume(E), r.exit("gfmFootnoteDefinitionLabelMarker"), r.exit("gfmFootnoteDefinitionLabel"), x;
        }
        return op(E) || (m = !0), p++, r.consume(E), E === 92 ? v : _;
    }
    function v(E) {
        return E === 91 || E === 92 || E === 93 ? (r.consume(E), p++, _) : _(E);
    }
    function x(E) {
        return E === 58 ? (r.enter("definitionMarker"), r.consume(E), r.exit("definitionMarker"), l.includes(u) || l.push(u), wc(r, C, "gfmFootnoteDefinitionWhitespace")) : a(E);
    }
    function C(E) {
        return e(E);
    }
}
function Pdr(r, e, a) {
    return r.check(xJ, e, r.attempt(Ddr, e, a));
}
function jdr(r) {
    r.exit("gfmFootnoteDefinition");
}
function Ldr(r, e, a) {
    const s = this;
    return wc(r, l, "gfmFootnoteDefinitionIndent", 5);
    function l(u) {
        const p = s.events[s.events.length - 1];
        return p && p[1].type === "gfmFootnoteDefinitionIndent" && p[2].sliceSerialize(p[1], !0).length === 4 ? e(u) : a(u);
    }
}
var Ddr;
export { $dr, Ddr, Idr, Ldr, Mdr, Ndr, Pdr, Rdr, jdr };
var __wakaru_exi_initialized = false;
export function exi() {
if (__wakaru_exi_initialized) return;
__wakaru_exi_initialized = true;
DRt(), ng(), Zl(), jfe(), Ddr = {
    tokenize: Ldr,
    partial: !0
}, i($dr, "gfmFootnote"), i(Idr, "tokenizePotentialGfmFootnoteCall"), i(Ndr, "resolveToPotentialGfmFootnoteCall"), i(Mdr, "tokenizeGfmFootnoteCall"), i(Rdr, "tokenizeDefinitionStart"), i(Pdr, "tokenizeDefinitionContinuation"), i(jdr, "gfmFootnoteDefinitionEnd"), i(Ldr, "tokenizeIndent");

}
