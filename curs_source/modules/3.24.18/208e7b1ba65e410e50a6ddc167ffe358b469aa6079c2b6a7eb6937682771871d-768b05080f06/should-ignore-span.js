import { gt } from "./debug-build.js";
import { Ke } from "./debug-logger.js";
import { Ui } from "./string.js";
import { h } from "./tslib.es6.js";
var __wakaru_VC_initialized = false;
export function VC() {
if (__wakaru_VC_initialized) return;
__wakaru_VC_initialized = true;
"use strict";
h(), gt(), Ke(), Ui();

}
