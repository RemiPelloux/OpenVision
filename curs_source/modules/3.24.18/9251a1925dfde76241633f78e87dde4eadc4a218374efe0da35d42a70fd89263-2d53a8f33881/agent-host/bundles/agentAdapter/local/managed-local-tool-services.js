import { init_managed_local_launched_defaults } from "./managed-local-launched-defaults.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { Code } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_aiserver_pb } from "../../../../proto/dist/generated/aiserver/v1/aiserver_pb.js";
import { init_repository_pb } from "../../../../proto/dist/generated/aiserver/v1/repository_pb.js";
var MANAGED_LOCAL_SEMANTIC_SEARCH_DEFAULT_TOP_K, ManagedLocalGenerateImageError, ManagedLocalGenerateImageModelRestrictedError, VIDEO_TIMEOUT_ADVICE, ManagedLocalGenerateVideoError, X_SEARCH_USER_FACING_CODES;
export { MANAGED_LOCAL_SEMANTIC_SEARCH_DEFAULT_TOP_K, ManagedLocalGenerateImageError, ManagedLocalGenerateImageModelRestrictedError, ManagedLocalGenerateVideoError, VIDEO_TIMEOUT_ADVICE, X_SEARCH_USER_FACING_CODES };
var __wakaru_init_managed_local_tool_services_initialized = false;
export function init_managed_local_tool_services() {
if (__wakaru_init_managed_local_tool_services_initialized) return;
__wakaru_init_managed_local_tool_services_initialized = true;
"use strict";
init_dist35();
init_aiserver_pb();
init_repository_pb();
init_esm3();
init_managed_local_launched_defaults();
MANAGED_LOCAL_SEMANTIC_SEARCH_DEFAULT_TOP_K = 25;
ManagedLocalGenerateImageError = class extends Error {
    constructor(message){
        super(message);
        this.name = "ManagedLocalGenerateImageError";
    }
};
ManagedLocalGenerateImageModelRestrictedError = class extends Error {
    constructor(message){
        super(message);
        this.name = "ManagedLocalGenerateImageModelRestrictedError";
    }
};
VIDEO_TIMEOUT_ADVICE = "xAI may still bill this job; do not retry unless the user asks.";
ManagedLocalGenerateVideoError = class extends Error {
    constructor(message){
        super(message);
        this.name = "ManagedLocalGenerateVideoError";
    }
};
X_SEARCH_USER_FACING_CODES = new Set([
    Code.InvalidArgument,
    Code.FailedPrecondition,
    Code.PermissionDenied,
    Code.ResourceExhausted,
    Code.Unauthenticated,
    Code.Unimplemented
]);

}
