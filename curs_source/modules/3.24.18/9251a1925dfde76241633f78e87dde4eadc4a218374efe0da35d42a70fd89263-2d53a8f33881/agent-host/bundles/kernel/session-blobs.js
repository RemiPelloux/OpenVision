import { init_dist5 } from "../../../agent-kv/dist/index.js";
var MAX_SESSION_BLOBS_PER_REQUEST, MAX_SESSION_BLOB_ID_BYTES;
export { MAX_SESSION_BLOBS_PER_REQUEST, MAX_SESSION_BLOB_ID_BYTES };
var __wakaru_init_session_blobs_initialized = false;
export function init_session_blobs() {
if (__wakaru_init_session_blobs_initialized) return;
__wakaru_init_session_blobs_initialized = true;
"use strict";
init_dist5();
MAX_SESSION_BLOBS_PER_REQUEST = 64;
MAX_SESSION_BLOB_ID_BYTES = 64;

}
