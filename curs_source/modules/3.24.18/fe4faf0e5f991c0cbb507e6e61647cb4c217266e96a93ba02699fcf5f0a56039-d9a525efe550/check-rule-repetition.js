import { i } from "./plugin-brand-icon.js";
function Tlr(r) {
    const e = r.options.ruleRepetition || 3;
    if (e < 3) throw new Error("Cannot serialize rules with repetition `" + e + "` for `options.ruleRepetition`, expected `3` or more");
    return e;
}
export { Tlr };
var __wakaru_v3i_initialized = false;
export function v3i() {
if (__wakaru_v3i_initialized) return;
__wakaru_v3i_initialized = true;
i(Tlr, "checkRuleRepetition");

}
