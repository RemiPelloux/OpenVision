import { Slr, w3i } from "./check-strong.js";
import { GMt, kJ } from "./encode-character-reference.js";
import { Lfe, ilr } from "./encode-info.js";
import { i } from "./plugin-brand-icon.js";
function aRt(r, e, a, s) {
    const l = Slr(a), u = a.enter("strong"), p = a.createTracker(s), m = p.move(l + l);
    let b = p.move(a.containerPhrasing(r, {
        after: l,
        before: m,
        ...p.current()
    }));
    const g = b.charCodeAt(0), _ = Lfe(s.before.charCodeAt(s.before.length - 1), g, l);
    _.inside && (b = kJ(g) + b.slice(1));
    const v = b.charCodeAt(b.length - 1), x = Lfe(s.after.charCodeAt(0), v, l);
    x.inside && (b = b.slice(0, -1) + kJ(v));
    const C = p.move(l + l);
    return u(), a.attentionEncodeSurroundingInfo = {
        after: x.outside,
        before: _.outside
    }, m + b + C;
}
function Elr(r, e, a) {
    return a.options.strong || "*";
}
export { Elr, aRt };
var __wakaru__3i_initialized = false;
export function _3i() {
if (__wakaru__3i_initialized) return;
__wakaru__3i_initialized = true;
w3i(), GMt(), ilr(), aRt.peek = Elr, i(aRt, "strong"), i(Elr, "strongPeek");

}
