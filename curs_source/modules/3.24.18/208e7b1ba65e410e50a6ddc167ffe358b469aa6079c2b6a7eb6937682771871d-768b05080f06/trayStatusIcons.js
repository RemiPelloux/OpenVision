import { Ce } from "./path.js";
import { h } from "./tslib.es6.js";
var __wakaru_uat_initialized = false;
export function uat() {
if (__wakaru_uat_initialized) return;
__wakaru_uat_initialized = true;
"use strict";
h(), Ce();

}
