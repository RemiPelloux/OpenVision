import { Zl, gl } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function wc(r, e, a, s) {
    const l = s ? s - 1 : Number.POSITIVE_INFINITY;
    let u = 0;
    return p;
    function p(b) {
        return gl(b) ? (r.enter(a), m(b)) : e(b);
    }
    function m(b) {
        return gl(b) && u++ < l ? (r.consume(b), m) : (r.exit(a), e(b));
    }
}
export { wc };
var __wakaru_ng_initialized = false;
export function ng() {
if (__wakaru_ng_initialized) return;
__wakaru_ng_initialized = true;
Zl(), i(wc, "factorySpace");

}
