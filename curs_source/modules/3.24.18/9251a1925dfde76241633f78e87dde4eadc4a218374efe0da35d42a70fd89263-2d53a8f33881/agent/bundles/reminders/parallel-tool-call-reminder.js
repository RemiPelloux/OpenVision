var PARALLEL_TOOL_CALL_REMINDER_TEXT;
export { PARALLEL_TOOL_CALL_REMINDER_TEXT };
var __wakaru_init_parallel_tool_call_reminder_initialized = false;
export function init_parallel_tool_call_reminder() {
if (__wakaru_init_parallel_tool_call_reminder_initialized) return;
__wakaru_init_parallel_tool_call_reminder_initialized = true;
"use strict";
PARALLEL_TOOL_CALL_REMINDER_TEXT = "<system_reminder>First privately list what you need next; then request every item that doesn't depend on another's result in this one response.</system_reminder>";

}
