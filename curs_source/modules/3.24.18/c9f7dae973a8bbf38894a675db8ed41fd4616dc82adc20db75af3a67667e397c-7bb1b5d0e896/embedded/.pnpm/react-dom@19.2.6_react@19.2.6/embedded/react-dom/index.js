import { require_react_dom_production } from "./cjs/react-dom.production.js";
var __wakaru_require_react_dom_cache;
export function require_react_dom() {
if (__wakaru_require_react_dom_cache) return __wakaru_require_react_dom_cache.exports;
var e = {};
var n = { exports: e };
__wakaru_require_react_dom_cache = n;
"use strict";
!function e() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
        console.error(e);
    }
}(), n.exports = require_react_dom_production();

return n.exports;
}
