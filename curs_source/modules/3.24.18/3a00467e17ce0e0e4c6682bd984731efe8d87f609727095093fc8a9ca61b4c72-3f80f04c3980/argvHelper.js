import { $n } from "./argv.js";
import { Vt } from "./nls.js";
import { ol } from "./telemetrySource.js";
import { w } from "./tslib.es6.js";
var __wakaru_fl_initialized = false;
export function fl() {
if (__wakaru_fl_initialized) return;
__wakaru_fl_initialized = true;
"use strict";
w(), Vt(), ol(), $n();

}
