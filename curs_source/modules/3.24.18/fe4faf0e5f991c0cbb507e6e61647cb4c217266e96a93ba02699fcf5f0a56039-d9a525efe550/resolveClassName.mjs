import { i } from "./plugin-brand-icon.js";
function RQn(r, e) {
    return typeof r == "function" ? r(e) : r;
}
export { RQn };
var __wakaru_uki_initialized = false;
export function uki() {
if (__wakaru_uki_initialized) return;
__wakaru_uki_initialized = true;
i(RQn, "resolveClassName");

}
