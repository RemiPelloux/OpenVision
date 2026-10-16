import { i } from "./plugin-brand-icon.js";
function iRt(r) {
    const e = r.options.rule || "*";
    if (e !== "*" && e !== "-" && e !== "_") throw new Error("Cannot serialize rules with `" + e + "` for `options.rule`, expected `*`, `-`, or `_`");
    return e;
}
export { iRt };
var __wakaru_ylr_initialized = false;
export function ylr() {
if (__wakaru_ylr_initialized) return;
__wakaru_ylr_initialized = true;
i(iRt, "checkRule");

}
