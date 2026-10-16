import { Kke } from "./dsn.js";
import { Yce } from "./envelope.js";
import { x } from "./tslib.es6.js";
var __wakaru_mig_initialized = false;
export function mig() {
if (__wakaru_mig_initialized) return;
__wakaru_mig_initialized = true;
"use strict";
x(), Kke(), Yce();

}
