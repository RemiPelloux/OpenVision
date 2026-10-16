import { x } from "./tslib.es6.js";
function Uhi(e, ...t) {
    const n = new String(String.raw(e, ...t));
    return n.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), n.__sentry_template_values__ = t, n;
}
var $hi;
export { $hi, Uhi };
var __wakaru_lCc_initialized = false;
export function lCc() {
if (__wakaru_lCc_initialized) return;
__wakaru_lCc_initialized = true;
"use strict";
x(), $hi = Uhi;

}
