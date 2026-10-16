import { init_types10 } from "./types.js";
import { init_sandbox_conversion } from "../sandbox-conversion.js";
var __wakaru_init_plan_initialized = false;
export function init_plan() {
if (__wakaru_init_plan_initialized) return;
__wakaru_init_plan_initialized = true;
"use strict";
init_sandbox_conversion();
init_types10();

}
