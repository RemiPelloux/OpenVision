import { Yu } from "./browser.ts";
import { x } from "./tslib.es6.js";
import { ci } from "./workspace.js";
var __wakaru_two_initialized = false;
export function two() {
if (__wakaru_two_initialized) return;
__wakaru_two_initialized = true;
"use strict";
x(), Yu(), ci();

}
