import { i } from "./plugin-brand-icon.js";
function JMt(r, e, a, s) {
    const l = r.referenceType, u = a.enter("imageReference");
    let p = a.enter("label");
    const m = a.createTracker(s);
    let b = m.move("![");
    const g = a.safe(r.alt, {
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
function plr() {
    return "!";
}
export { JMt, plr };
var __wakaru_a3i_initialized = false;
export function a3i() {
if (__wakaru_a3i_initialized) return;
__wakaru_a3i_initialized = true;
JMt.peek = plr, i(JMt, "imageReference"), i(plr, "imageReferencePeek");

}
