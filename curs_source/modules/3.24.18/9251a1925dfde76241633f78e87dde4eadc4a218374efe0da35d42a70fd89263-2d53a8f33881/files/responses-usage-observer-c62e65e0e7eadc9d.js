import { NonRetriableError } from "../../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../../agent-client/dist/index.js";
import { init_private_inference_pb } from "../../../../../proto/dist/generated/aiserver/v1/private_inference_pb.js";
var ResponsesUsageRecordingError;
export { ResponsesUsageRecordingError };
var __wakaru_init_responses_usage_observer_initialized = false;
export function init_responses_usage_observer() {
if (__wakaru_init_responses_usage_observer_initialized) return;
__wakaru_init_responses_usage_observer_initialized = true;
"use strict";
init_dist9();
init_private_inference_pb();
ResponsesUsageRecordingError = class extends NonRetriableError {
    constructor(usage, cause){
        super("Failed to record private inference usage", {
            ...cause instanceof Error ? {
                cause
            } : {}
        });
        this.usage = usage;
    }
};

}
