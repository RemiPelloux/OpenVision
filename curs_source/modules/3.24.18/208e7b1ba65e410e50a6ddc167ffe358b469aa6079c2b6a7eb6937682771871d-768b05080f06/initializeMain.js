import { fnt } from "./continuousProfilingService_2.js";
import { Ye } from "./environmentMainService.js";
import { Qr } from "./ipc.js";
import { te } from "./log.js";
import { Tt } from "./productService.js";
import { h } from "./tslib.es6.js";
import { pt } from "./windows.js";
var __wakaru_vnt_initialized = false;
export function vnt() {
if (__wakaru_vnt_initialized) return;
__wakaru_vnt_initialized = true;
"use strict";
h(), Qr(), fnt(), Ye(), te(), Tt(), pt();

}
