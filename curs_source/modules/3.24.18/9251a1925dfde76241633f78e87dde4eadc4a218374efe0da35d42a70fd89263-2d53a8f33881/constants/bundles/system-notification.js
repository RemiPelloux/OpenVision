var SYSTEM_NOTIFICATION_TAG, SYSTEM_NOTIFICATION_OPEN_TAG, SYSTEM_NOTIFICATION_CLOSE_TAG;
export { SYSTEM_NOTIFICATION_CLOSE_TAG, SYSTEM_NOTIFICATION_OPEN_TAG, SYSTEM_NOTIFICATION_TAG };
var __wakaru_init_system_notification_initialized = false;
export function init_system_notification() {
if (__wakaru_init_system_notification_initialized) return;
__wakaru_init_system_notification_initialized = true;
"use strict";
SYSTEM_NOTIFICATION_TAG = "system_notification";
SYSTEM_NOTIFICATION_OPEN_TAG = `<${SYSTEM_NOTIFICATION_TAG}>`;
SYSTEM_NOTIFICATION_CLOSE_TAG = `</${SYSTEM_NOTIFICATION_TAG}>`;

}
