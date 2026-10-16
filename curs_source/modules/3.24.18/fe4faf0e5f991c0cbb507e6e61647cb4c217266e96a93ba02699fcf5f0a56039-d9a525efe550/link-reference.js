import { i } from "./plugin-brand-icon.js";
function nRt(r, e, a, s) {
    const l = r.referenceType, u = a.enter("linkReference");
    let p = a.enter("label");
    const m = a.createTracker(s);
    let b = m.move("[");
    const g = a.containerPhrasing(r, {
        before: b,
        after: "]",
        ...m.current()
    });
    b += m.move(g + "]["), p();
    const _ = a.stack;
    a.stack = [], p = a.enter("reference");
    const v = a.safe(a.associationId(r), {
        before: b,
        after: "]",
        ...m.current()
    });
    return p(), a.stack = _, u(), l === "full" || !g || g !== v ? b += m.move(v + "]") : l === "shortcut" ? b = b.slice(0, -1) : b += m.move("]"), b;
}
function hlr() {
    return "[";
}
export { hlr, nRt };
var __wakaru_l3i_initialized = false;
export function l3i() {
if (__wakaru_l3i_initialized) return;
__wakaru_l3i_initialized = true;
nRt.peek = hlr, i(nRt, "linkReference"), i(hlr, "linkReferencePeek");

}
