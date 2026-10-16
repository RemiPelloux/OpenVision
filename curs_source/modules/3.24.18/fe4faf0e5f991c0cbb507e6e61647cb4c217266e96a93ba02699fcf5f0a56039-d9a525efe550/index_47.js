import { i } from "./plugin-brand-icon.js";
function L4(r) {
    return r.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
export { L4 };
var __wakaru_jfe_initialized = false;
export function jfe() {
if (__wakaru_jfe_initialized) return;
__wakaru_jfe_initialized = true;
i(L4, "normalizeIdentifier");

}
