import { _tt } from "./coalescedScopeUpdate.js";
import { Ho } from "./global.js";
import { j } from "./lifecycle.js";
import { _a } from "./sentry.js";
import { wtt } from "./sessionReplay.js";
import { h } from "./tslib.es6.js";
var __wakaru_Itt_initialized = false;
export function Itt() {
if (__wakaru_Itt_initialized) return;
__wakaru_Itt_initialized = true;
"use strict";
h(), j(), _tt(), Ho(), _a(), wtt();

}
