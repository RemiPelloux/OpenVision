var SAFE_SESSION_ID;
export { SAFE_SESSION_ID };
var __wakaru_init_session_id_initialized = false;
export function init_session_id() {
if (__wakaru_init_session_id_initialized) return;
__wakaru_init_session_id_initialized = true;
"use strict";
SAFE_SESSION_ID = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;

}
