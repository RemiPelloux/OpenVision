import { Ka, Zl } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function xur(r) {
    let e = r.length - 4, a = 3, s, l;
    if ((r[a][1].type === "lineEnding" || r[a][1].type === "space") && (r[e][1].type === "lineEnding" || r[e][1].type === "space")) {
        for(s = a; ++s < e;)if (r[s][1].type === "codeTextData") {
            r[a][1].type = "codeTextPadding", r[e][1].type = "codeTextPadding", a += 2, e -= 2;
            break;
        }
    }
    for(s = a - 1, e++; ++s <= e;)l === void 0 ? s !== e && r[s][1].type !== "lineEnding" && (l = s) : (s === e || r[s][1].type === "lineEnding") && (r[l][1].type = "codeTextData", s !== l + 2 && (r[l][1].end = r[s - 1][1].end, r.splice(l + 2, s - l - 2), e -= s - l - 2, s = l + 2), l = void 0);
    return r;
}
function Cur(r) {
    return r !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Sur(r, e, a) {
    const s = this;
    let l = 0, u, p;
    return m;
    function m(x) {
        return r.enter("codeText"), r.enter("codeTextSequence"), b(x);
    }
    function b(x) {
        return x === 96 ? (r.consume(x), l++, b) : (r.exit("codeTextSequence"), g(x));
    }
    function g(x) {
        return x === null ? a(x) : x === 32 ? (r.enter("space"), r.consume(x), r.exit("space"), g) : x === 96 ? (p = r.enter("codeTextSequence"), u = 0, v(x)) : Ka(x) ? (r.enter("lineEnding"), r.consume(x), r.exit("lineEnding"), g) : (r.enter("codeTextData"), _(x));
    }
    function _(x) {
        return x === null || x === 32 || x === 96 || Ka(x) ? (r.exit("codeTextData"), g(x)) : (r.consume(x), _);
    }
    function v(x) {
        return x === 96 ? (r.consume(x), u++, v) : u === l ? (r.exit("codeTextSequence"), r.exit("codeText"), e(x)) : (p.type = "codeTextData", _(x));
    }
}
var Eur;
export { Cur, Eur, Sur, xur };
var __wakaru_B3i_initialized = false;
export function B3i() {
if (__wakaru_B3i_initialized) return;
__wakaru_B3i_initialized = true;
Zl(), Eur = {
    name: "codeText",
    previous: Cur,
    resolve: xur,
    tokenize: Sur
}, i(xur, "resolveCodeText"), i(Cur, "previous"), i(Sur, "tokenizeCodeText");

}
