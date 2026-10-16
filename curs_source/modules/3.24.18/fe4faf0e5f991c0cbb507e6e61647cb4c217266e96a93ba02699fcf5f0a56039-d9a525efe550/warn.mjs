import { i } from "./plugin-brand-icon.js";
function PTt(...r) {
    {
        const e = r.join(" ");
        jTt.has(e) || (jTt.add(e), console.warn(`Base UI: ${e}`));
    }
}
var jTt;
export { PTt, jTt };
var __wakaru_NQn_initialized = false;
export function NQn() {
if (__wakaru_NQn_initialized) return;
__wakaru_NQn_initialized = true;
jTt = new Set, i(PTt, "warn");

}
