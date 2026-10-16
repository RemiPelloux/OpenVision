import { init_dist27 } from "../../redaction/dist/index.js";
var USER_INFO_TAG_REGEX, SYSTEM_REMINDER_OPEN, SYSTEM_REMINDER_ONLY_RE, SYNTHETIC_USER_TURN_PROVIDER_KEY;
export { SYNTHETIC_USER_TURN_PROVIDER_KEY, SYSTEM_REMINDER_ONLY_RE, SYSTEM_REMINDER_OPEN, USER_INFO_TAG_REGEX };
var __wakaru_init_prepare_messages_initialized = false;
export function init_prepare_messages() {
if (__wakaru_init_prepare_messages_initialized) return;
__wakaru_init_prepare_messages_initialized = true;
"use strict";
init_dist27();
USER_INFO_TAG_REGEX = /<user_info>[\s\S]*<\/user_info>/;
SYSTEM_REMINDER_OPEN = "<system_reminder>";
SYSTEM_REMINDER_ONLY_RE = /^\s*(?:<system_reminder>(?:(?!<\/system_reminder>)[\s\S])*<\/system_reminder>\s*)+$/;
SYNTHETIC_USER_TURN_PROVIDER_KEY = "syntheticUserTurn";

}
