import { dt } from "./currentScopes.js";
import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { h } from "./tslib.es6.js";
var __wakaru_ar_initialized = false;
export function ar() {
if (__wakaru_ar_initialized) return;
__wakaru_ar_initialized = true;
"use strict";
h(), dt(), gt(), Ke();

}
