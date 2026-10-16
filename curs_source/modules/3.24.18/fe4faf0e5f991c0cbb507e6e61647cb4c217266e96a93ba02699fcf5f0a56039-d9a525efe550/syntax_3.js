import { NB, WMt } from "./index_54.js";
import { ik, vP } from "./index_69.js";
import { Dfe, QNe } from "./index_73.js";
import { i } from "./plugin-brand-icon.js";
function Fdr(r) {
    let a = (r || {}).singleTilde;
    const s = {
        name: "strikethrough",
        tokenize: u,
        resolveAll: l
    };
    return a == null && (a = !0), {
        text: {
            126: s
        },
        insideSpan: {
            null: [
                s
            ]
        },
        attentionMarkers: {
            null: [
                126
            ]
        }
    };
    function l(p, m) {
        let b = -1;
        for(; ++b < p.length;)if (p[b][0] === "enter" && p[b][1].type === "strikethroughSequenceTemporary" && p[b][1]._close) {
            let g = b;
            for(; g--;)if (p[g][0] === "exit" && p[g][1].type === "strikethroughSequenceTemporary" && p[g][1]._open && p[b][1].end.offset - p[b][1].start.offset === p[g][1].end.offset - p[g][1].start.offset) {
                p[b][1].type = "strikethroughSequence", p[g][1].type = "strikethroughSequence";
                const _ = {
                    type: "strikethrough",
                    start: Object.assign({}, p[g][1].start),
                    end: Object.assign({}, p[b][1].end)
                }, v = {
                    type: "strikethroughText",
                    start: Object.assign({}, p[g][1].end),
                    end: Object.assign({}, p[b][1].start)
                }, x = [
                    [
                        "enter",
                        _,
                        m
                    ],
                    [
                        "enter",
                        p[g][1],
                        m
                    ],
                    [
                        "exit",
                        p[g][1],
                        m
                    ],
                    [
                        "enter",
                        v,
                        m
                    ]
                ], C = m.parser.constructs.insideSpan.null;
                C && ik(x, x.length, 0, Dfe(C, p.slice(g + 1, b), m)), ik(x, x.length, 0, [
                    [
                        "exit",
                        v,
                        m
                    ],
                    [
                        "enter",
                        p[b][1],
                        m
                    ],
                    [
                        "exit",
                        p[b][1],
                        m
                    ],
                    [
                        "exit",
                        _,
                        m
                    ]
                ]), ik(p, g - 1, b - g + 3, x), b = g + x.length - 2;
                break;
            }
        }
        for(b = -1; ++b < p.length;)p[b][1].type === "strikethroughSequenceTemporary" && (p[b][1].type = "data");
        return p;
    }
    i(l, "resolveAllStrikethrough");
    function u(p, m, b) {
        const g = this.previous, _ = this.events;
        let v = 0;
        return x;
        function x(E) {
            return g === 126 && _[_.length - 1][1].type !== "characterEscape" ? b(E) : (p.enter("strikethroughSequenceTemporary"), C(E));
        }
        function C(E) {
            const A = NB(g);
            if (E === 126) return v > 1 ? b(E) : (p.consume(E), v++, C);
            if (v < 2 && !a) return b(E);
            const $ = p.exit("strikethroughSequenceTemporary"), I = NB(E);
            return $._open = !I || I === 2 && !!A, $._close = !A || A === 2 && !!I, m(E);
        }
    }
    i(u, "tokenizeStrikethrough");
}
export { Fdr };
var __wakaru_nxi_initialized = false;
export function nxi() {
if (__wakaru_nxi_initialized) return;
__wakaru_nxi_initialized = true;
vP(), WMt(), QNe(), i(Fdr, "gfmStrikethrough");

}
