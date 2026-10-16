import { Mie } from "./misc.js";
import { Vce } from "./time.js";
import { x } from "./tslib.es6.js";
var __wakaru_ahi_initialized = false;
export function ahi() {
if (__wakaru_ahi_initialized) return;
__wakaru_ahi_initialized = true;
"use strict";
x(), Mie(), Vce();

}
