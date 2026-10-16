import { fn } from "./is.js";
import { bc } from "./normalize.js";
import { h } from "./tslib.es6.js";
import { dn } from "./worldwide.js";
var __wakaru_LB_initialized = false;
export function LB() {
if (__wakaru_LB_initialized) return;
__wakaru_LB_initialized = true;
"use strict";
h(), fn(), bc(), dn();

}
