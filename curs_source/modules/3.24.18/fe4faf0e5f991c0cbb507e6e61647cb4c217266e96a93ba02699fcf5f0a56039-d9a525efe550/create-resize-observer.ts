import { i } from "./plugin-brand-icon.js";
function y$t(r) {
    return typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
}
export { y$t };
var __wakaru_rtr_initialized = false;
export function rtr() {
if (__wakaru_rtr_initialized) return;
__wakaru_rtr_initialized = true;
"use strict";
i(y$t, "createResizeObserver");

}
