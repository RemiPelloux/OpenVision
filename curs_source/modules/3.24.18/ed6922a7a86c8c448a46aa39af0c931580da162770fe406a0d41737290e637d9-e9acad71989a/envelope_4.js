import { Kke } from "./dsn.js";
import { Yce } from "./envelope.js";
import { x } from "./tslib.es6.js";
var __wakaru_big_initialized = false;
export function big() {
if (__wakaru_big_initialized) return;
__wakaru_big_initialized = true;
"use strict";
x(), Kke(), Yce();

}
