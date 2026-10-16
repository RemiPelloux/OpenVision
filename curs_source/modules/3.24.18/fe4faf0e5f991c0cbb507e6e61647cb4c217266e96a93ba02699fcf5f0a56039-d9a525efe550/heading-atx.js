import { Ka, Zl, gl, op } from "./index_41.js";
import { ik, vP } from "./index_69.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function Wur(r, e) {
    let a = r.length - 2, s = 3, l, u;
    return r[s][1].type === "whitespace" && (s += 2), a - 2 > s && r[a][1].type === "whitespace" && (a -= 2), r[a][1].type === "atxHeadingSequence" && (s === a - 1 || a - 4 > s && r[a - 2][1].type === "whitespace") && (a -= s + 1 === a ? 2 : 4), a > s && (l = {
        type: "atxHeadingText",
        start: r[s][1].start,
        end: r[a][1].end
    }, u = {
        type: "chunkText",
        start: r[s][1].start,
        end: r[a][1].end,
        contentType: "text"
    }, ik(r, s, a - s + 1, [
        [
            "enter",
            l,
            e
        ],
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
            "exit",
            l,
            e
        ]
    ])), r;
}
function Hur(r, e, a) {
    let s = 0;
    return l;
    function l(_) {
        return r.enter("atxHeading"), u(_);
    }
    function u(_) {
        return r.enter("atxHeadingSequence"), p(_);
    }
    function p(_) {
        return _ === 35 && s++ < 6 ? (r.consume(_), p) : _ === null || op(_) ? (r.exit("atxHeadingSequence"), m(_)) : a(_);
    }
    function m(_) {
        return _ === 35 ? (r.enter("atxHeadingSequence"), b(_)) : _ === null || Ka(_) ? (r.exit("atxHeading"), e(_)) : gl(_) ? wc(r, m, "whitespace")(_) : (r.enter("atxHeadingText"), g(_));
    }
    function b(_) {
        return _ === 35 ? (r.consume(_), b) : (r.exit("atxHeadingSequence"), m(_));
    }
    function g(_) {
        return _ === null || _ === 35 || op(_) ? (r.exit("atxHeadingText"), m(_)) : (r.consume(_), g);
    }
}
var Zur;
export { Hur, Wur, Zur };
var __wakaru_H3i_initialized = false;
export function H3i() {
if (__wakaru_H3i_initialized) return;
__wakaru_H3i_initialized = true;
ng(), Zl(), vP(), Zur = {
    name: "headingAtx",
    resolve: Wur,
    tokenize: Hur
}, i(Wur, "resolveHeadingAtx"), i(Hur, "tokenizeHeadingAtx");

}
