import { NonRetriableError } from "../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { detailForReason2 } from "../../../../tree_chunk_napi_exports.js";
var UnsupportedResolvedModelError;
export { UnsupportedResolvedModelError };
var __wakaru_init_unsupported_resolved_model_error_initialized = false;
export function init_unsupported_resolved_model_error() {
if (__wakaru_init_unsupported_resolved_model_error_initialized) return;
__wakaru_init_unsupported_resolved_model_error_initialized = true;
"use strict";
init_dist9();
UnsupportedResolvedModelError = class extends NonRetriableError {
    constructor(reason, resolvedModelId){
        super(`Local loop cannot construct prompts for the resolved model: ${reason}`, {
            displayInfo: {
                title: "Local loop can't run this model",
                detail: detailForReason2(reason, resolvedModelId),
                isRetryable: false
            }
        });
        this.reason = reason;
        this.resolvedModelId = resolvedModelId;
    }
};

}
