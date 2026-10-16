import { CHAR_HARD_LIMIT, init_common9 } from "../../common.js";
var READ_CHAR_HARD_LIMIT, LARGE_TEXT_BLOB_THRESHOLD;
export { LARGE_TEXT_BLOB_THRESHOLD, READ_CHAR_HARD_LIMIT };
var __wakaru_init_common17_initialized = false;
export function init_common17() {
if (__wakaru_init_common17_initialized) return;
__wakaru_init_common17_initialized = true;
"use strict";
init_common9();
READ_CHAR_HARD_LIMIT = CHAR_HARD_LIMIT;
LARGE_TEXT_BLOB_THRESHOLD = 1e4;

}
