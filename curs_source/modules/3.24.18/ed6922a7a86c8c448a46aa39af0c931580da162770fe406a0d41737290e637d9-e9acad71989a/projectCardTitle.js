import { x } from "./tslib.es6.js";
var cdl, ldl, Ngs;
export { Ngs, cdl, ldl };
var __wakaru_udl_initialized = false;
export function udl() {
if (__wakaru_udl_initialized) return;
__wakaru_udl_initialized = true;
"use strict";
x(), cdl = /^!\[[^\]]*\]\([^)]+\)$/, ldl = /^(?:<\/?(?:video|source)(?=[\s/>])[^>]*>\s*)+$/i, Ngs = /<video(?=[\s/>])[^>]*>[\s\S]*?<\/video\s*>/gi;

}
