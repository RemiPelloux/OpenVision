import { fC } from "./Text.js";
import { kBf, wBf } from "./f0s.js";
import { x } from "./tslib.es6.js";
var gEn;
export { gEn };
var __wakaru_CBf_initialized = false;
export function CBf() {
if (__wakaru_CBf_initialized) return;
__wakaru_CBf_initialized = true;
"use strict";
x(), fC(), gEn = Object.assign(wBf, {
    Row: kBf
});

}
