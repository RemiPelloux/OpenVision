import { ftn } from "./glass-fsd-launch-helpers.js";
import { mFs } from "./glass-fsd-pr-resolution.js";
import { FFC } from "./glass-fsd-pull-request-view.js";
import { Kf } from "./reactive.js";
import { E } from "./tslib.es6.js";
var __wakaru_HFC_initialized = false;
export function HFC() {
if (__wakaru_HFC_initialized) return;
__wakaru_HFC_initialized = true;
"use strict";
E(), Kf(), ftn(), mFs(), FFC();

}
