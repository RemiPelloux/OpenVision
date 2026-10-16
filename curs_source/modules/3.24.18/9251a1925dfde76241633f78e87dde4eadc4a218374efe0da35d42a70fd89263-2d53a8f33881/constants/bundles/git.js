var NO_WRITE_FETCH_HEAD_MIN;
export { NO_WRITE_FETCH_HEAD_MIN };
var __wakaru_init_git_initialized = false;
export function init_git() {
if (__wakaru_init_git_initialized) return;
__wakaru_init_git_initialized = true;
"use strict";
NO_WRITE_FETCH_HEAD_MIN = {
    major: 2,
    minor: 29
};

}
