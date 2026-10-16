var SYSTEM_REMINDER_TAG_PATTERN;
export { SYSTEM_REMINDER_TAG_PATTERN };
var __wakaru_init_sanitize_system_reminder_initialized = false;
export function init_sanitize_system_reminder() {
if (__wakaru_init_sanitize_system_reminder_initialized) return;
__wakaru_init_sanitize_system_reminder_initialized = true;
"use strict";
SYSTEM_REMINDER_TAG_PATTERN = /<(\/?)system_reminder>/gi;

}
