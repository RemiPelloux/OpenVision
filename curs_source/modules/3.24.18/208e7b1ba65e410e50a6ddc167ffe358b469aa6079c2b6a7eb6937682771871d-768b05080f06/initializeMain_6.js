import { Ye } from "./environmentMainService.js";
import { Qr } from "./ipc.js";
import { te } from "./log.js";
import { Mit } from "./performanceTelemetryService.js";
import { Tt } from "./productService.js";
import { h } from "./tslib.es6.js";
import { pt } from "./windows.js";
var __wakaru_Nit_initialized = false;
export function Nit() {
if (__wakaru_Nit_initialized) return;
__wakaru_Nit_initialized = true;
"use strict";
h(), Qr(), Ye(), te(), Tt(), pt(), Mit();

}
