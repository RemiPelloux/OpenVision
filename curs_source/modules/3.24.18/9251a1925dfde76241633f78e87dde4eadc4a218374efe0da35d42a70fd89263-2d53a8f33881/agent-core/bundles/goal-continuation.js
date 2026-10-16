var GOAL_STATUS_ACTIVE, GOAL_ID_PATTERN;
export { GOAL_ID_PATTERN, GOAL_STATUS_ACTIVE };
var __wakaru_init_goal_continuation_initialized = false;
export function init_goal_continuation() {
if (__wakaru_init_goal_continuation_initialized) return;
__wakaru_init_goal_continuation_initialized = true;
"use strict";
GOAL_STATUS_ACTIVE = 1;
GOAL_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

}
