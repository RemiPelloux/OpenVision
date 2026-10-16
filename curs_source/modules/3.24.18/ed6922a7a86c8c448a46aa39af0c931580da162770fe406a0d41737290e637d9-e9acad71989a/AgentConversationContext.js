import { qIi } from "./LinkNavigationContext.js";
import { kCn } from "./MarkdownDefaultsContext.js";
import { Vvt, v6t } from "./conversation-density.js";
import { x } from "./tslib.es6.js";
import { createContext as rgf } from "./react-runtime/react/esm-index-production.js";
var wMi;
export { wMi };
var __wakaru_hN_initialized = false;
export function hN() {
if (__wakaru_hN_initialized) return;
__wakaru_hN_initialized = true;
"use strict";
x(), qIi(), kCn(), Vvt(), wMi = rgf({
    conversationDensity: v6t,
    messageLayout: "default"
});

}
