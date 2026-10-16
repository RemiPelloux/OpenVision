import { NB, WMt } from "./index_54.js";
import { ik, l3, vP } from "./index_69.js";
import { Dfe, QNe } from "./index_73.js";
import { i } from "./plugin-brand-icon.js";
function cur(r, e) {
    let a = -1, s, l, u, p, m, b, g, _;
    for(; ++a < r.length;)if (r[a][0] === "enter" && r[a][1].type === "attentionSequence" && r[a][1]._close) {
        for(s = a; s--;)if (r[s][0] === "exit" && r[s][1].type === "attentionSequence" && r[s][1]._open && e.sliceSerialize(r[s][1]).charCodeAt(0) === e.sliceSerialize(r[a][1]).charCodeAt(0)) {
            if ((r[s][1]._close || r[a][1]._open) && (r[a][1].end.offset - r[a][1].start.offset) % 3 && !((r[s][1].end.offset - r[s][1].start.offset + r[a][1].end.offset - r[a][1].start.offset) % 3)) continue;
            b = r[s][1].end.offset - r[s][1].start.offset > 1 && r[a][1].end.offset - r[a][1].start.offset > 1 ? 2 : 1;
            const v = {
                ...r[s][1].end
            }, x = {
                ...r[a][1].start
            };
            vRt(v, -b), vRt(x, b), p = {
                type: b > 1 ? "strongSequence" : "emphasisSequence",
                start: v,
                end: {
                    ...r[s][1].end
                }
            }, m = {
                type: b > 1 ? "strongSequence" : "emphasisSequence",
                start: {
                    ...r[a][1].start
                },
                end: x
            }, u = {
                type: b > 1 ? "strongText" : "emphasisText",
                start: {
                    ...r[s][1].end
                },
                end: {
                    ...r[a][1].start
                }
            }, l = {
                type: b > 1 ? "strong" : "emphasis",
                start: {
                    ...p.start
                },
                end: {
                    ...m.end
                }
            }, r[s][1].end = {
                ...p.start
            }, r[a][1].start = {
                ...m.end
            }, g = [], r[s][1].end.offset - r[s][1].start.offset && (g = l3(g, [
                [
                    "enter",
                    r[s][1],
                    e
                ],
                [
                    "exit",
                    r[s][1],
                    e
                ]
            ])), g = l3(g, [
                [
                    "enter",
                    l,
                    e
                ],
                [
                    "enter",
                    p,
                    e
                ],
                [
                    "exit",
                    p,
                    e
                ],
                [
                    "enter",
                    u,
                    e
                ]
            ]), g = l3(g, Dfe(e.parser.constructs.insideSpan.null, r.slice(s + 1, a), e)), g = l3(g, [
                [
                    "exit",
                    u,
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
                    l,
                    e
                ]
            ]), r[a][1].end.offset - r[a][1].start.offset ? (_ = 2, g = l3(g, [
                [
                    "enter",
                    r[a][1],
                    e
                ],
                [
                    "exit",
                    r[a][1],
                    e
                ]
            ])) : _ = 0, ik(r, s - 1, a - s + 3, g), a = s + g.length - _ - 2;
            break;
        }
    }
    for(a = -1; ++a < r.length;)r[a][1].type === "attentionSequence" && (r[a][1].type = "data");
    return r;
}
function lur(r, e) {
    const a = this.parser.constructs.attentionMarkers.null, s = this.previous, l = NB(s);
    let u;
    return p;
    function p(b) {
        return u = b, r.enter("attentionSequence"), m(b);
    }
    function m(b) {
        if (b === u) return r.consume(b), m;
        const g = r.exit("attentionSequence"), _ = NB(b), v = !_ || _ === 2 && l || a.includes(b), x = !l || l === 2 && _ || a.includes(s);
        return g._open = !!(u === 42 ? v : v && (l || !x)), g._close = !!(u === 42 ? x : x && (_ || !v)), e(b);
    }
}
function vRt(r, e) {
    r.column += e, r.offset += e, r._bufferIndex += e;
}
var eMe;
export { cur, eMe, lur, vRt };
var __wakaru_P3i_initialized = false;
export function P3i() {
if (__wakaru_P3i_initialized) return;
__wakaru_P3i_initialized = true;
vP(), WMt(), QNe(), eMe = {
    name: "attention",
    resolveAll: cur,
    tokenize: lur
}, i(cur, "resolveAllAttention"), i(lur, "tokenizeAttention"), i(vRt, "movePoint");

}
