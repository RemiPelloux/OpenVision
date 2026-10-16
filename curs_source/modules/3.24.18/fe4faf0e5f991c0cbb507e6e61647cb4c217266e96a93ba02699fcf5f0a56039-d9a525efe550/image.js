import { HNe, UMt } from "./check-quote.js";
import { i } from "./plugin-brand-icon.js";
function YMt(r, e, a, s) {
    const l = HNe(a), u = l === '"' ? "Quote" : "Apostrophe", p = a.enter("image");
    let m = a.enter("label");
    const b = a.createTracker(s);
    let g = b.move("![");
    return g += b.move(a.safe(r.alt, {
        before: g,
        after: "]",
        ...b.current()
    })), g += b.move("]("), m(), !r.url && r.title || /[\0- \u007F]/.test(r.url) ? (m = a.enter("destinationLiteral"), g += b.move("<"), g += b.move(a.safe(r.url, {
        before: g,
        after: ">",
        ...b.current()
    })), g += b.move(">")) : (m = a.enter("destinationRaw"), g += b.move(a.safe(r.url, {
        before: g,
        after: r.title ? " " : ")",
        ...b.current()
    }))), m(), r.title && (m = a.enter(`title${u}`), g += b.move(" " + l), g += b.move(a.safe(r.title, {
        before: g,
        after: l,
        ...b.current()
    })), g += b.move(l), m()), g += b.move(")"), p(), g;
}
function dlr() {
    return "!";
}
export { YMt, dlr };
var __wakaru_i3i_initialized = false;
export function i3i() {
if (__wakaru_i3i_initialized) return;
__wakaru_i3i_initialized = true;
UMt(), YMt.peek = dlr, i(YMt, "image"), i(dlr, "imagePeek");

}
