import { yh } from "./log-metadata.ts";
import { x$ } from "./oauth-logging.ts";
import { h } from "./tslib.es6.js";
var __wakaru_L$e_initialized = false;
export function L$e() {
if (__wakaru_L$e_initialized) return;
__wakaru_L$e_initialized = true;
"use strict";
h(), yh(), x$();

}
