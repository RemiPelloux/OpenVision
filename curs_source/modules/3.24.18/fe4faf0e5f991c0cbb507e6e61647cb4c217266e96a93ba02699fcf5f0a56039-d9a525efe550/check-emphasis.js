import { i } from "./plugin-brand-icon.js";
function rlr(r) {
    const e = r.options.emphasis || "*";
    if (e !== "*" && e !== "_") throw new Error("Cannot serialize emphasis with `" + e + "` for `options.emphasis`, expected `*`, or `_`");
    return e;
}
export { rlr };
var __wakaru_Jvi_initialized = false;
export function Jvi() {
if (__wakaru_Jvi_initialized) return;
__wakaru_Jvi_initialized = true;
i(rlr, "checkEmphasis");

}
