import { Ka, Zl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function RRt(r, e, a, s, l, u) {
    let p;
    return m;
    function m(x) {
        return x === 34 || x === 39 || x === 40 ? (r.enter(s), r.enter(l), r.consume(x), r.exit(l), p = x === 40 ? 41 : x, b) : a(x);
    }
    function b(x) {
        return x === p ? (r.enter(l), r.consume(x), r.exit(l), r.exit(s), e) : (r.enter(u), g(x));
    }
    function g(x) {
        return x === p ? (r.exit(u), b(p)) : x === null ? a(x) : Ka(x) ? (r.enter("lineEnding"), r.consume(x), r.exit("lineEnding"), wc(r, g, "linePrefix")) : (r.enter("chunkString", {
            contentType: "string"
        }), _(x));
    }
    function _(x) {
        return x === p || x === null || Ka(x) ? (r.exit("chunkString"), g(x)) : (r.consume(x), x === 92 ? v : _);
    }
    function v(x) {
        return x === p || x === 92 ? (r.consume(x), _) : _(x);
    }
}
export { RRt };
var __wakaru_Dur_initialized = false;
export function Dur() {
if (__wakaru_Dur_initialized) return;
__wakaru_Dur_initialized = true;
ng(), Zl(), i(RRt, "factoryTitle");

}
