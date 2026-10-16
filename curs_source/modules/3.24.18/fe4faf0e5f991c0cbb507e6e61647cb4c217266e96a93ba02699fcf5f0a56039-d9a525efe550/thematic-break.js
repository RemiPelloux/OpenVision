import { Tlr, v3i } from "./check-rule-repetition.js";
import { iRt, ylr } from "./check-rule.js";
import { i } from "./plugin-brand-icon.js";
function $lr(r, e, a) {
    const s = (iRt(a) + (a.options.ruleSpaces ? " " : "")).repeat(Tlr(a));
    return a.options.ruleSpaces ? s.slice(0, -1) : s;
}
export { $lr };
var __wakaru_x3i_initialized = false;
export function x3i() {
if (__wakaru_x3i_initialized) return;
__wakaru_x3i_initialized = true;
v3i(), ylr(), i($lr, "thematicBreak");

}
