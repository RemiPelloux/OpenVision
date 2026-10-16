import { HNe, UMt } from "./check-quote.js";
import { i } from "./plugin-brand-icon.js";
function nlr(r, e, a, s) {
    const l = HNe(a), u = l === '"' ? "Quote" : "Apostrophe", p = a.enter("definition");
    let m = a.enter("label");
    const b = a.createTracker(s);
    let g = b.move("[");
    return g += b.move(a.safe(a.associationId(r), {
        before: g,
        after: "]",
        ...b.current()
    })), g += b.move("]: "), m(), !r.url || /[\0- \u007F]/.test(r.url) ? (m = a.enter("destinationLiteral"), g += b.move("<"), g += b.move(a.safe(r.url, {
        before: g,
        after: ">",
        ...b.current()
    })), g += b.move(">")) : (m = a.enter("destinationRaw"), g += b.move(a.safe(r.url, {
        before: g,
        after: r.title ? " " : `
`,
        ...b.current()
    }))), m(), r.title && (m = a.enter(`title${u}`), g += b.move(" " + l), g += b.move(a.safe(r.title, {
        before: g,
        after: l,
        ...b.current()
    })), g += b.move(l), m()), p(), g;
}
export { nlr };
var __wakaru_Yvi_initialized = false;
export function Yvi() {
if (__wakaru_Yvi_initialized) return;
__wakaru_Yvi_initialized = true;
UMt(), i(nlr, "definition");

}
