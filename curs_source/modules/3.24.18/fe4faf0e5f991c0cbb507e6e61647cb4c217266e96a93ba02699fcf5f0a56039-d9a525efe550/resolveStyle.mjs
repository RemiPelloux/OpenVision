import { i } from "./plugin-brand-icon.js";
function PQn(r, e) {
    return typeof r == "function" ? r(e) : r;
}
export { PQn };
var __wakaru_dki_initialized = false;
export function dki() {
if (__wakaru_dki_initialized) return;
__wakaru_dki_initialized = true;
i(PQn, "resolveStyle");

}
