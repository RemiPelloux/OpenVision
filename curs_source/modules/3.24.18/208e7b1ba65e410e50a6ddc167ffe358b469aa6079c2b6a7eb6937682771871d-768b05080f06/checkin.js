import { oi } from "./dsn.js";
import { hs } from "./envelope.js";
import { h } from "./tslib.es6.js";
var __wakaru_SW_initialized = false;
export function SW() {
if (__wakaru_SW_initialized) return;
__wakaru_SW_initialized = true;
"use strict";
h(), oi(), hs();

}
