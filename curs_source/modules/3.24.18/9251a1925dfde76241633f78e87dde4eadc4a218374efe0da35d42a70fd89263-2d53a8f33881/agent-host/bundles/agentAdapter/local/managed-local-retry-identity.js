var MANAGED_LOCAL_RETRY_IDENTITY;
export { MANAGED_LOCAL_RETRY_IDENTITY };
var __wakaru_init_managed_local_retry_identity_initialized = false;
export function init_managed_local_retry_identity() {
if (__wakaru_init_managed_local_retry_identity_initialized) return;
__wakaru_init_managed_local_retry_identity_initialized = true;
"use strict";
MANAGED_LOCAL_RETRY_IDENTITY = {
    logTag: "managed_local_agent_retries",
    reconnectEndpoint: "InferenceService.RunInference"
};

}
