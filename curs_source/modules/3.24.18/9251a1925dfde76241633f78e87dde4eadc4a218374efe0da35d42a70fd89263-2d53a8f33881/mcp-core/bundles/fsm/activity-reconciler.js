import { init_active_activities } from "./active-activities.js";
var __wakaru_init_activity_reconciler_initialized = false;
export function init_activity_reconciler() {
if (__wakaru_init_activity_reconciler_initialized) return;
__wakaru_init_activity_reconciler_initialized = true;
"use strict";
init_active_activities();

}
