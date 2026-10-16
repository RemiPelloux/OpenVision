var RECENTLY_CREATED_USER_WINDOW_MS;
export { RECENTLY_CREATED_USER_WINDOW_MS };
var __wakaru_init_recently_created_user_initialized = false;
export function init_recently_created_user() {
if (__wakaru_init_recently_created_user_initialized) return;
__wakaru_init_recently_created_user_initialized = true;
"use strict";
RECENTLY_CREATED_USER_WINDOW_MS = 2 * 60 * 60 * 1e3;

}
