import { x } from "./tslib.es6.js";
var FDi;
export { FDi };
var __wakaru_euf_initialized = false;
export function euf() {
if (__wakaru_euf_initialized) return;
__wakaru_euf_initialized = true;
x(), FDi = (function(e) {
    return e.complete = "data-complete", e.indeterminate = "data-indeterminate", e.progressing = "data-progressing", e;
})({});

}
