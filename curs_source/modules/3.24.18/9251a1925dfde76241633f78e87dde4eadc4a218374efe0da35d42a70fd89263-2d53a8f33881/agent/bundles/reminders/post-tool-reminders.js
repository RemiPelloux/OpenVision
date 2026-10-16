import { init_laziness_prevention_reminder } from "./laziness-prevention-reminder.js";
import { init_parallel_tool_call_reminder } from "./parallel-tool-call-reminder.js";
import { init_thinking_nudge_reminder } from "./thinking-nudge-reminder.js";
var __wakaru_init_post_tool_reminders_initialized = false;
export function init_post_tool_reminders() {
if (__wakaru_init_post_tool_reminders_initialized) return;
__wakaru_init_post_tool_reminders_initialized = true;
"use strict";
init_laziness_prevention_reminder();
init_parallel_tool_call_reminder();
init_thinking_nudge_reminder();

}
