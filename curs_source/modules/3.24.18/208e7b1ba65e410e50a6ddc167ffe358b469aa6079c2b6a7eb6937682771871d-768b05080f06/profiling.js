import { dt } from "./currentScopes.js";
import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { h } from "./tslib.es6.js";
var __wakaru_v8e_initialized = false;
export function v8e() {
if (__wakaru_v8e_initialized) return;
__wakaru_v8e_initialized = true;
"use strict";
h(), dt(), gt(), Ke();

}
