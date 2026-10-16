import { i } from "./plugin-brand-icon.js";
function Vcr(r, e, a, s) {
    const l = a.enter("blockquote"), u = a.createTracker(s);
    u.move("> "), u.shift(2);
    const p = a.indentLines(a.containerFlow(r, u.current()), Kcr);
    return l(), p;
}
function Kcr(r, e, a) {
    return ">" + (a ? "" : " ") + r;
}
export { Kcr, Vcr };
var __wakaru_Wvi_initialized = false;
export function Wvi() {
if (__wakaru_Wvi_initialized) return;
__wakaru_Wvi_initialized = true;
i(Vcr, "blockquote"), i(Kcr, "map");

}
