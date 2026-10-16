import { G$ } from "./auth-fsm.ts";
import { V$ } from "./connection-fsm.ts";
import { $$ } from "./projection.ts";
import { h } from "./tslib.es6.js";
var __wakaru_eje_initialized = false;
export function eje() {
if (__wakaru_eje_initialized) return;
__wakaru_eje_initialized = true;
"use strict";
h(), G$(), V$(), $$();

}
