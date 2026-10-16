import { i } from "./plugin-brand-icon.js";
function HNe(r) {
    const e = r.options.quote || '"';
    if (e !== '"' && e !== "'") throw new Error("Cannot serialize title with `" + e + "` for `options.quote`, expected `\"`, or `'`");
    return e;
}
export { HNe };
var __wakaru_UMt_initialized = false;
export function UMt() {
if (__wakaru_UMt_initialized) return;
__wakaru_UMt_initialized = true;
i(HNe, "checkQuote");

}
