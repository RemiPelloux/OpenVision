import { ik, vP } from "./index_69.js";
import { i } from "./plugin-brand-icon.js";
import { Aur, q3i } from "./splice-buffer.js";
function IRt(r) {
    const e = {};
    let a = -1, s, l, u, p, m, b, g;
    const _ = new Aur(r);
    for(; ++a < _.length;){
        for(; a in e;)a = e[a];
        if (s = _.get(a), a && s[1].type === "chunkFlow" && _.get(a - 1)[1].type === "listItemPrefix" && (b = s[1]._tokenizer.events, u = 0, u < b.length && b[u][1].type === "lineEndingBlank" && (u += 2), u < b.length && b[u][1].type === "content")) for(; ++u < b.length && b[u][1].type !== "content";)b[u][1].type === "chunkText" && (b[u][1]._isInFirstContentOfListItem = !0, u++);
        if (s[0] === "enter") s[1].contentType && (Object.assign(e, Tur(_, a)), a = e[a], g = !0);
        else if (s[1]._container) {
            for(u = a, l = void 0; u--;)if (p = _.get(u), p[1].type === "lineEnding" || p[1].type === "lineEndingBlank") p[0] === "enter" && (l && (_.get(l)[1].type = "lineEndingBlank"), p[1].type = "lineEnding", l = u);
            else if (!(p[1].type === "linePrefix" || p[1].type === "listItemIndent")) break;
            l && (s[1].end = {
                ..._.get(l)[1].start
            }, m = _.slice(l, a), m.unshift(s), _.splice(l, a - l + 1, m));
        }
    }
    return ik(r, 0, Number.POSITIVE_INFINITY, _.slice(0)), !g;
}
function Tur(r, e) {
    const a = r.get(e)[1], s = r.get(e)[2];
    let l = e - 1;
    const u = [];
    let p = a._tokenizer;
    p || (p = s.parser[a.contentType](a.start), a._contentTypeTextTrailing && (p._contentTypeTextTrailing = !0));
    const m = p.events, b = [], g = {};
    let _, v, x = -1, C = a, E = 0, A = 0;
    const $ = [
        A
    ];
    for(; C;){
        for(; r.get(++l)[1] !== C;);
        u.push(l), C._tokenizer || (_ = s.sliceStream(C), C.next || _.push(null), v && p.defineSkip(C.start), C._isInFirstContentOfListItem && (p._gfmTasklistFirstContentOfListItem = !0), p.write(_), C._isInFirstContentOfListItem && (p._gfmTasklistFirstContentOfListItem = void 0)), v = C, C = C.next;
    }
    for(C = a; ++x < m.length;)m[x][0] === "exit" && m[x - 1][0] === "enter" && m[x][1].type === m[x - 1][1].type && m[x][1].start.line !== m[x][1].end.line && (A = x + 1, $.push(A), C._tokenizer = void 0, C.previous = void 0, C = C.next);
    for(p.events = [], C ? (C._tokenizer = void 0, C.previous = void 0) : $.pop(), x = $.length; x--;){
        const I = m.slice($[x], $[x + 1]), N = u.pop();
        b.push([
            N,
            N + I.length - 1
        ]), r.splice(N, 2, I);
    }
    for(b.reverse(), x = -1; ++x < b.length;)g[E + b[x][0]] = E + b[x][1], E += b[x][1] - b[x][0] - 1;
    return g;
}
export { IRt, Tur };
var __wakaru_$ur_initialized = false;
export function $ur() {
if (__wakaru_$ur_initialized) return;
__wakaru_$ur_initialized = true;
vP(), q3i(), i(IRt, "subtokenize"), i(Tur, "subcontent");

}
