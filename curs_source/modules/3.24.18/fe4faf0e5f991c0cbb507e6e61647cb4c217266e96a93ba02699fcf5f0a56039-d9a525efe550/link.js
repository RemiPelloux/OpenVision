import { HNe, UMt } from "./check-quote.js";
import { eRt, s3i } from "./format-link-as-autolink.js";
import { i } from "./plugin-brand-icon.js";
function tRt(r, e, a, s) {
    const l = HNe(a), u = l === '"' ? "Quote" : "Apostrophe", p = a.createTracker(s);
    let m, b;
    if (eRt(r, a)) {
        const _ = a.stack;
        a.stack = [], m = a.enter("autolink");
        let v = p.move("<");
        return v += p.move(a.containerPhrasing(r, {
            before: v,
            after: ">",
            ...p.current()
        })), v += p.move(">"), m(), a.stack = _, v;
    }
    m = a.enter("link"), b = a.enter("label");
    let g = p.move("[");
    return g += p.move(a.containerPhrasing(r, {
        before: g,
        after: "](",
        ...p.current()
    })), g += p.move("]("), b(), !r.url && r.title || /[\0- \u007F]/.test(r.url) ? (b = a.enter("destinationLiteral"), g += p.move("<"), g += p.move(a.safe(r.url, {
        before: g,
        after: ">",
        ...p.current()
    })), g += p.move(">")) : (b = a.enter("destinationRaw"), g += p.move(a.safe(r.url, {
        before: g,
        after: r.title ? " " : ")",
        ...p.current()
    }))), b(), r.title && (b = a.enter(`title${u}`), g += p.move(" " + l), g += p.move(a.safe(r.title, {
        before: g,
        after: l,
        ...p.current()
    })), g += p.move(l), b()), g += p.move(")"), m(), g;
}
function flr(r, e, a) {
    return eRt(r, a) ? "<" : "[";
}
export { flr, tRt };
var __wakaru_c3i_initialized = false;
export function c3i() {
if (__wakaru_c3i_initialized) return;
__wakaru_c3i_initialized = true;
UMt(), s3i(), tRt.peek = flr, i(tRt, "link"), i(flr, "linkPeek");

}
