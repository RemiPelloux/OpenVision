import { h1s } from "./MenuRoot.js";
import { Xre } from "./MenuRootContext.js";
import { d1s } from "./MenuSubmenuRootContext.js";
import { x } from "./tslib.es6.js";
var __wakaru_waf_initialized = false;
export function waf() {
if (__wakaru_waf_initialized) return;
__wakaru_waf_initialized = true;
x(), h1s(), Xre(), d1s();

}
