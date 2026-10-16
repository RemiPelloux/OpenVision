import { external_exports } from "../../external_exports.js";
import { init_zod } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_utils_pb2 } from "../../proto/dist/generated/aiserver/v1/utils_pb.js";
var RELAYED_ATTEMPT_FAILURE_KEY, relayedAttemptFailureSchema;
export { RELAYED_ATTEMPT_FAILURE_KEY, relayedAttemptFailureSchema };
var __wakaru_init_relayed_attempt_failure_initialized = false;
export function init_relayed_attempt_failure() {
if (__wakaru_init_relayed_attempt_failure_initialized) return;
__wakaru_init_relayed_attempt_failure_initialized = true;
"use strict";
init_utils_pb2();
init_zod();
RELAYED_ATTEMPT_FAILURE_KEY = "relayedAttemptFailure";
relayedAttemptFailureSchema = external_exports.object({
    transport: external_exports.boolean(),
    stallAborted: external_exports.boolean(),
    errorName: external_exports.string(),
    connectCode: external_exports.number().optional(),
    connectCodeName: external_exports.string().optional(),
    connectCause: external_exports.object({
        code: external_exports.union([
            external_exports.string(),
            external_exports.number()
        ]).optional(),
        name: external_exports.string().optional()
    }).optional(),
    transportFailureKind: external_exports.string().optional(),
    loop: external_exports.string().optional(),
    transportMode: external_exports.string().optional()
});

}
