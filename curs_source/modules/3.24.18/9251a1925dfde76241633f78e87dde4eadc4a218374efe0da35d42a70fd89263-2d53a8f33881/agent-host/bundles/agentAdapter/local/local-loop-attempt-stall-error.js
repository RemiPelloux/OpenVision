import { Code } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var LocalLoopAttemptStalledError, MAX_CAUSE_DEPTH;
export { LocalLoopAttemptStalledError, MAX_CAUSE_DEPTH };
var __wakaru_init_local_loop_attempt_stall_error_initialized = false;
export function init_local_loop_attempt_stall_error() {
if (__wakaru_init_local_loop_attempt_stall_error_initialized) return;
__wakaru_init_local_loop_attempt_stall_error_initialized = true;
"use strict";
init_esm3();
LocalLoopAttemptStalledError = class extends ConnectError {
    constructor(message, thresholdMs){
        super(message, Code.Unavailable);
        this.thresholdMs = thresholdMs;
    }
};
MAX_CAUSE_DEPTH = 10;

}
