import { Ka, Zl, gl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function Adr(r, e) {
    let a = r.length, s, l, u;
    for(; a--;)if (r[a][0] === "enter") {
        if (r[a][1].type === "content") {
            s = a;
            break;
        }
        r[a][1].type === "paragraph" && (l = a);
    } else r[a][1].type === "content" && r.splice(a, 1), !u && r[a][1].type === "definition" && (u = a);
    const p = {
        type: "setextHeading",
        start: {
            ...r[s][1].start
        },
        end: {
            ...r[r.length - 1][1].end
        }
    };
    return r[l][1].type = "setextHeadingText", u ? (r.splice(l, 0, [
        "enter",
        p,
        e
    ]), r.splice(u + 1, 0, [
        "exit",
        r[s][1],
        e
    ]), r[s][1].end = {
        ...r[u][1].end
    }) : r[s][1] = p, r.push([
        "exit",
        p,
        e
    ]), r;
}
function Tdr(r, e, a) {
    const s = this;
    let l;
    return u;
    function u(g) {
        let _ = s.events.length, v;
        for(; _--;)if (s.events[_][1].type !== "lineEnding" && s.events[_][1].type !== "linePrefix" && s.events[_][1].type !== "content") {
            v = s.events[_][1].type === "paragraph";
            break;
        }
        return !s.parser.lazy[s.now().line] && (s.interrupt || v) ? (r.enter("setextHeadingLine"), l = g, p(g)) : a(g);
    }
    function p(g) {
        return r.enter("setextHeadingLineSequence"), m(g);
    }
    function m(g) {
        return g === l ? (r.consume(g), m) : (r.exit("setextHeadingLineSequence"), gl(g) ? wc(r, b, "lineSuffix")(g) : b(g));
    }
    function b(g) {
        return g === null || Ka(g) ? (r.exit("setextHeadingLine"), e(g)) : a(g);
    }
}
var LRt;
export { Adr, LRt, Tdr };
var __wakaru_Q3i_initialized = false;
export function Q3i() {
if (__wakaru_Q3i_initialized) return;
__wakaru_Q3i_initialized = true;
ng(), Zl(), LRt = {
    name: "setextUnderline",
    resolveTo: Adr,
    tokenize: Tdr
}, i(Adr, "resolveToSetextUnderline"), i(Tdr, "tokenizeSetextUnderline");

}
