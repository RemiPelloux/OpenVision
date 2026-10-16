import { xc } from "./glass-storage-service.js";
import { jlt } from "./persistent-state.js";
import { dv } from "./storage-keys.js";
import { E } from "./tslib.es6.js";
var __wakaru_EZl_initialized = false;
export function EZl() {
if (__wakaru_EZl_initialized) return;
__wakaru_EZl_initialized = true;
"use strict";
E(), jlt(), dv(), xc();

}
