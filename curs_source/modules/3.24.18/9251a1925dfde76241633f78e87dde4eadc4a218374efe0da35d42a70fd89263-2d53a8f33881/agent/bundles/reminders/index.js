import { init_apply_reminders } from "./apply-reminders.js";
import { init_context_builder } from "./context-builder.js";
import { init_laziness_prevention_reminder } from "./laziness-prevention-reminder.js";
import { init_parallel_tool_call_reminder } from "./parallel-tool-call-reminder.js";
import { init_post_tool_reminders } from "./post-tool-reminders.js";
import { init_slack_semantic_status_reminder } from "./slack-semantic-status-reminder.js";
import { init_thinking_nudge_reminder } from "./thinking-nudge-reminder.js";
import { init_types16 } from "./types.js";
var __wakaru_init_reminders_initialized = false;
export function init_reminders() {
if (__wakaru_init_reminders_initialized) return;
__wakaru_init_reminders_initialized = true;
"use strict";
init_apply_reminders();
init_context_builder();
init_laziness_prevention_reminder();
init_parallel_tool_call_reminder();
init_post_tool_reminders();
init_slack_semantic_status_reminder();
init_thinking_nudge_reminder();
init_types16();

}
