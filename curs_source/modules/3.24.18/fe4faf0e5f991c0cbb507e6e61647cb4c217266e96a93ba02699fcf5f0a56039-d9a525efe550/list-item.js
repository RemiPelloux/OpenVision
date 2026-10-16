import { VNe, rRt } from "./check-bullet.js";
import { _lr, m3i } from "./check-list-item-indent.js";
import { i } from "./plugin-brand-icon.js";
function klr(r, e, a, s) {
    const l = _lr(a);
    let u = a.bulletCurrent || VNe(a);
    e && e.type === "list" && e.ordered && (u = (typeof e.start == "number" && e.start > -1 ? e.start : 1) + (a.options.incrementListMarker === !1 ? 0 : e.children.indexOf(r)) + u);
    let p = u.length + 1;
    (l === "tab" || l === "mixed" && (e && e.type === "list" && e.spread || r.spread)) && (p = Math.ceil(p / 4) * 4);
    const m = a.createTracker(s);
    m.move(u + " ".repeat(p - u.length)), m.shift(p);
    const b = a.enter("listItem"), g = a.indentLines(a.containerFlow(r, m.current()), _);
    return b(), g;
    function _(v, x, C) {
        return x ? (C ? "" : " ".repeat(p)) + v : (C ? u : u + " ".repeat(p - u.length)) + v;
    }
    i(_, "map");
}
export { klr };
var __wakaru_f3i_initialized = false;
export function f3i() {
if (__wakaru_f3i_initialized) return;
__wakaru_f3i_initialized = true;
rRt(), m3i(), i(klr, "listItem");

}
