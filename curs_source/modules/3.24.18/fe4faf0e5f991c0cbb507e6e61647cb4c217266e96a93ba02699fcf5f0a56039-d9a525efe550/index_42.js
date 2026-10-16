import { i } from "./plugin-brand-icon.js";
function ucr(r) {
    if (typeof r != "string") throw new TypeError("Expected a string");
    return r.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
export { ucr };
var __wakaru_jvi_initialized = false;
export function jvi() {
if (__wakaru_jvi_initialized) return;
__wakaru_jvi_initialized = true;
i(ucr, "escapeStringRegexp");

}
