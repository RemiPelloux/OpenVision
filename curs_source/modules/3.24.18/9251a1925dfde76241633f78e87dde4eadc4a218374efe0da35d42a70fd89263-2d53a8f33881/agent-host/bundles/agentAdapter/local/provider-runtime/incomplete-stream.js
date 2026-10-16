var LocalIncompleteStreamError, INCOMPLETE_FINISH_REASONS;
export { INCOMPLETE_FINISH_REASONS, LocalIncompleteStreamError };
var __wakaru_init_incomplete_stream_initialized = false;
export function init_incomplete_stream() {
if (__wakaru_init_incomplete_stream_initialized) return;
__wakaru_init_incomplete_stream_initialized = true;
"use strict";
LocalIncompleteStreamError = class extends Error {
    constructor(finishReason){
        super(`Provider stream ended without a terminal finish reason (finishReason=${finishReason ?? "none"}) \u2014 connection likely dropped mid-stream`);
        this.name = "LocalIncompleteStreamError";
        this.finishReason = finishReason;
    }
};
INCOMPLETE_FINISH_REASONS = new Set([
    "unknown"
]);

}
