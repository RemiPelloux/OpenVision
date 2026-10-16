var CLOSED_SQLITE_MESSAGE, CLOSED_LOCAL_INDEX_MESSAGE, CLOSED_AUDIT_INDEX_MESSAGE;
export { CLOSED_AUDIT_INDEX_MESSAGE, CLOSED_LOCAL_INDEX_MESSAGE, CLOSED_SQLITE_MESSAGE };
var __wakaru_init_closed_index_error_initialized = false;
export function init_closed_index_error() {
if (__wakaru_init_closed_index_error_initialized) return;
__wakaru_init_closed_index_error_initialized = true;
"use strict";
CLOSED_SQLITE_MESSAGE = "The database connection is not open";
CLOSED_LOCAL_INDEX_MESSAGE = "agent store local index is closed";
CLOSED_AUDIT_INDEX_MESSAGE = "agent store audit index is closed";

}
