import { Jvi, rlr } from "./check-emphasis.js";
import { GMt, kJ } from "./encode-character-reference.js";
import { Lfe, ilr } from "./encode-info.js";
import { i } from "./plugin-brand-icon.js";
function HMt(r, e, a, s) {
    const l = rlr(a), u = a.enter("emphasis"), p = a.createTracker(s), m = p.move(l);
    let b = p.move(a.containerPhrasing(r, {
        after: l,
        before: m,
        ...p.current()
    }));
    const g = b.charCodeAt(0), _ = Lfe(s.before.charCodeAt(s.before.length - 1), g, l);
    _.inside && (b = kJ(g) + b.slice(1));
    const v = b.charCodeAt(b.length - 1), x = Lfe(s.after.charCodeAt(0), v, l);
    x.inside && (b = b.slice(0, -1) + kJ(v));
    const C = p.move(l);
    return u(), a.attentionEncodeSurroundingInfo = {
        after: x.outside,
        before: _.outside
    }, m + b + C;
}
function alr(r, e, a) {
    return a.options.emphasis || "*";
}
export { HMt, alr };
var __wakaru_Qvi_initialized = false;
export function Qvi() {
if (__wakaru_Qvi_initialized) return;
__wakaru_Qvi_initialized = true;
Jvi(), GMt(), ilr(), HMt.peek = alr, i(HMt, "emphasis"), i(alr, "emphasisPeek");

}
