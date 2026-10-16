import { Ent } from "./fileAppendService.js";
import { Qr } from "./ipc.js";
import { te } from "./log.js";
import { h } from "./tslib.es6.js";
var __wakaru_Rnt_initialized = false;
export function Rnt() {
if (__wakaru_Rnt_initialized) return;
__wakaru_Rnt_initialized = true;
"use strict";
h(), Qr(), Ent(), te();

}
