import { require_react_dom_client_production } from "./cjs/react-dom-client.production.js";
var __wakaru_require_client_cache;
export function require_client() {
if (__wakaru_require_client_cache) return __wakaru_require_client_cache.exports;
var e = {};
var n = { exports: e };
__wakaru_require_client_cache = n;
"use strict";
!function e() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
        console.error(e);
    }
}(), n.exports = require_react_dom_client_production();

return n.exports;
}
