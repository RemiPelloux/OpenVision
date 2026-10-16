import { init_bcs_client } from "./bcs-client.js";
import { Code } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { ErrorDetails_Error, init_utils_pb2 } from "../../../proto/dist/generated/aiserver/v1/utils_pb.js";
import { connectCodeOfRoot, errorMessageOf } from "../../../tree_chunk_napi_exports.js";
var AgentStoreMintFailedError, MINT_CREDENTIAL_ERROR_KINDS, QUOTA_EXCEEDED_MARKER, MINT_TRANSIENT_CONNECT_CODES;
export { AgentStoreMintFailedError, MINT_CREDENTIAL_ERROR_KINDS, MINT_TRANSIENT_CONNECT_CODES, QUOTA_EXCEEDED_MARKER };
var __wakaru_init_connect_errors_initialized = false;
export function init_connect_errors() {
if (__wakaru_init_connect_errors_initialized) return;
__wakaru_init_connect_errors_initialized = true;
"use strict";
init_utils_pb2();
init_esm3();
init_bcs_client();
AgentStoreMintFailedError = class extends Error {
    constructor(args){
        const message = errorMessageOf(args.cause);
        super(message.length > 0 ? message : "Agent store mint failed", {
            cause: args.cause
        });
        this.name = "AgentStoreMintFailedError";
        this.cause = args.cause;
        this.connectCode = connectCodeOfRoot(args.cause);
        this.retryAfterMs = args.retryAfterMs;
        this.attempts = args.attempts;
    }
};
MINT_CREDENTIAL_ERROR_KINDS = new Set([
    ErrorDetails_Error.NOT_LOGGED_IN,
    ErrorDetails_Error.INVALID_AUTH_ID,
    ErrorDetails_Error.AUTH_TOKEN_NOT_FOUND,
    ErrorDetails_Error.AUTH_TOKEN_EXPIRED
]);
QUOTA_EXCEEDED_MARKER = "agent_store_quota_exceeded";
MINT_TRANSIENT_CONNECT_CODES = new Set([
    Code.Unavailable,
    Code.ResourceExhausted,
    Code.Internal,
    Code.DeadlineExceeded
]);

}
