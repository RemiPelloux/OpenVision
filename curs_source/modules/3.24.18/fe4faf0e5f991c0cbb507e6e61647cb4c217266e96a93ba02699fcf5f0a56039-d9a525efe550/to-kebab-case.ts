import { i } from "./plugin-brand-icon.js";
function g0r(r) {
    return r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
export { g0r };
var __wakaru_U4i_initialized = false;
export function U4i() {
if (__wakaru_U4i_initialized) return;
__wakaru_U4i_initialized = true;
"use strict";
i(g0r, "toKebabCase");

}
