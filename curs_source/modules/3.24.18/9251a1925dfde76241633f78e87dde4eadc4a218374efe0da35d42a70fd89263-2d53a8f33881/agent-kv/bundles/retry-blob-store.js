import { createLogger } from "./subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var logger6, retryAttempts, retryGetBlobLatency, retrySetBlobLatency, retrySetBlobLocallyOnlyLatency, retryFlushLatency;
export { logger6, retryAttempts, retryFlushLatency, retryGetBlobLatency, retrySetBlobLatency, retrySetBlobLocallyOnlyLatency };
var __wakaru_init_retry_blob_store_initialized = false;
export function init_retry_blob_store() {
if (__wakaru_init_retry_blob_store_initialized) return;
__wakaru_init_retry_blob_store_initialized = true;
"use strict";
init_dist();
init_dist4();
logger6 = createLogger("RetryBlobStore");
retryAttempts = createCounter("agent_kv.retry.retries", {
    description: "Number of RetryBlobStore retry attempts (one per re-issued operation, not counting the first try)",
    labelNames: [
        "operation",
        "outcome"
    ]
});
retryGetBlobLatency = createHistogram("agent_kv.retry.get_blob.duration_ms", {
    description: "Duration of RetryBlobStore getBlob operations in milliseconds"
});
retrySetBlobLatency = createHistogram("agent_kv.retry.set_blob.duration_ms", {
    description: "Duration of RetryBlobStore setBlob operations in milliseconds"
});
retrySetBlobLocallyOnlyLatency = createHistogram("agent_kv.retry.set_blob_locally_only.duration_ms", {
    description: "Duration of RetryBlobStore setBlobLocallyOnly operations in milliseconds"
});
retryFlushLatency = createHistogram("agent_kv.retry.flush.duration_ms", {
    description: "Duration of RetryBlobStore flush operations in milliseconds"
});

}
