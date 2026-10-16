import { i } from "./plugin-brand-icon.js";
function Slr(r) {
    const e = r.options.strong || "*";
    if (e !== "*" && e !== "_") throw new Error("Cannot serialize strong with `" + e + "` for `options.strong`, expected `*`, or `_`");
    return e;
}
export { Slr };
var __wakaru_w3i_initialized = false;
export function w3i() {
if (__wakaru_w3i_initialized) return;
__wakaru_w3i_initialized = true;
i(Slr, "checkStrong");

}
