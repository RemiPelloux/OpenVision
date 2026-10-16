import { init_user_turn_reminders } from "./user-turn-reminders.js";
var STEP_SCOPED_CLEAR_AT;
export { STEP_SCOPED_CLEAR_AT };
var __wakaru_init_step_scoped_system_messages_initialized = false;
export function init_step_scoped_system_messages() {
if (__wakaru_init_step_scoped_system_messages_initialized) return;
__wakaru_init_step_scoped_system_messages_initialized = true;
"use strict";
init_user_turn_reminders();
STEP_SCOPED_CLEAR_AT = "next_user_message";

}
