import { x } from "./tslib.es6.js";
var kts;
export { kts };
var __wakaru_ibg_initialized = false;
export function ibg() {
if (__wakaru_ibg_initialized) return;
__wakaru_ibg_initialized = true;
"use strict";
x(), ((e)=>{
    function t(n, i) {
        return new n.EditContext(i);
    }
    e.create = t;
})(kts || (kts = {}));

}
