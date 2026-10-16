import { Code } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { init_esm3 } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var ALREADY_EXISTS_RE, NOT_FOUND_RE, INVALID_ARGUMENT_RE, UNAVAILABLE_RE, FAILED_PRECONDITION_RE, OUT_OF_RANGE_RE, FILE_READ_ERROR_CODES;
export { ALREADY_EXISTS_RE, FAILED_PRECONDITION_RE, FILE_READ_ERROR_CODES, INVALID_ARGUMENT_RE, NOT_FOUND_RE, OUT_OF_RANGE_RE, UNAVAILABLE_RE };
var __wakaru_init_errors8_initialized = false;
export function init_errors8() {
if (__wakaru_init_errors8_initialized) return;
__wakaru_init_errors8_initialized = true;
"use strict";
init_esm3();
ALREADY_EXISTS_RE = /already exists/i;
NOT_FOUND_RE = /not found|unknown session/i;
INVALID_ARGUMENT_RE = /is required|must be|invalid|cannot be empty|empty session|sessionId is required/i;
UNAVAILABLE_RE = /disposing|disposed|shutting down/i;
FAILED_PRECONDITION_RE = /in progress|failed precondition/i;
OUT_OF_RANGE_RE = /cursor too old/i;
FILE_READ_ERROR_CODES = [
    {
        name: "AgentHostFileNotFoundError",
        code: "FILE_NOT_FOUND",
        connectCode: Code.NotFound
    },
    {
        name: "AgentHostFileChangedError",
        code: "FILE_CHANGED",
        connectCode: Code.DataLoss
    },
    {
        name: "AgentHostFileOutOfRangeError",
        code: "FILE_OUT_OF_RANGE",
        connectCode: Code.OutOfRange
    }
];

}
