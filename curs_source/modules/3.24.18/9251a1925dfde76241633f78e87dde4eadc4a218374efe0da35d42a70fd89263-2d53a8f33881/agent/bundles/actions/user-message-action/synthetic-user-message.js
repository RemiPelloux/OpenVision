import { init_dist2 } from "../../../../constants/dist/index.js";
var NOTIFICATION_TAG_NAMES, XML_TAG_REGEX;
export { NOTIFICATION_TAG_NAMES, XML_TAG_REGEX };
var __wakaru_init_synthetic_user_message_initialized = false;
export function init_synthetic_user_message() {
if (__wakaru_init_synthetic_user_message_initialized) return;
__wakaru_init_synthetic_user_message_initialized = true;
"use strict";
init_dist2();
NOTIFICATION_TAG_NAMES = [
    "system_notification",
    "agent_notification",
    "task_notification",
    "side_chat_boundary"
];
XML_TAG_REGEX = /<(?:(\/)\s*([A-Za-z_][\w:.-]*)\s*>|([A-Za-z_][\w:.-]*)(?:\s[^<>]*?)?(\/)?>)/g;

}
