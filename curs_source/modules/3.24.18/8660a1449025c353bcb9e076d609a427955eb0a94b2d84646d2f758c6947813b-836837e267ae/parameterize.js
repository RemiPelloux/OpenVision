import { E } from "./tslib.es6.js";
function Lhr(t, ...e) {
    const n = new String(String.raw(t, ...e));
    return n.__sentry_template_string__ = t.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), n.__sentry_template_values__ = e, n;
}
var Ohr;
export { Lhr, Ohr };
var __wakaru_RGu_initialized = false;
export function RGu() {
if (__wakaru_RGu_initialized) return;
__wakaru_RGu_initialized = true;
"use strict";
E(), Ohr = Lhr;

}
