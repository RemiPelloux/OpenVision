import { i } from "./plugin-brand-icon.js";
function TNe(r, e) {
    const a = e || {};
    function s(l, ...u) {
        let p = s.invalid;
        const m = s.handlers;
        if (l && xNt.call(l, r)) {
            const b = String(l[r]);
            p = xNt.call(m, b) ? m[b] : s.unknown;
        }
        if (p) return p.call(this, l, ...u);
    }
    return i(s, "one"), s.handlers = a.handlers || {}, s.invalid = a.invalid, s.unknown = a.unknown, s;
}
var xNt;
export { TNe, xNt };
var __wakaru_CNt_initialized = false;
export function CNt() {
if (__wakaru_CNt_initialized) return;
__wakaru_CNt_initialized = true;
xNt = {}.hasOwnProperty, i(TNe, "zwitch");

}
