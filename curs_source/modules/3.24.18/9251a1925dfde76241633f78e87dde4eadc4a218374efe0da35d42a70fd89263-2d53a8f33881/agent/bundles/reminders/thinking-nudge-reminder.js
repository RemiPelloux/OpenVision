var THINKING_NUDGE_REMINDER_TEXT;
export { THINKING_NUDGE_REMINDER_TEXT };
var __wakaru_init_thinking_nudge_reminder_initialized = false;
export function init_thinking_nudge_reminder() {
if (__wakaru_init_thinking_nudge_reminder_initialized) return;
__wakaru_init_thinking_nudge_reminder_initialized = true;
"use strict";
THINKING_NUDGE_REMINDER_TEXT = "\n\n<system_reminder>Please use <think> tags to think through the problem step by step before making your next tool call. Start your next message with <think> tag.</system_reminder>";

}
