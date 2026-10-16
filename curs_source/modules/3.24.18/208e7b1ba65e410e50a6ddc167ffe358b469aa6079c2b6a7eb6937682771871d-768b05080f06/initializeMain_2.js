import { at } from "./configuration.js";
import { Ye } from "./environmentMainService.js";
import { Qr } from "./ipc.js";
import { te } from "./log.js";
import { knt } from "./pathInspectionService.js";
import { h } from "./tslib.es6.js";
var __wakaru_ynt_initialized = false;
export function ynt() {
if (__wakaru_ynt_initialized) return;
__wakaru_ynt_initialized = true;
"use strict";
h(), Qr(), knt(), te(), at(), Ye();

}
