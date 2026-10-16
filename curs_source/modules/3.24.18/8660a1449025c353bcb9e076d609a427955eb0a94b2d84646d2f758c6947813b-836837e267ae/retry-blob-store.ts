import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { U4, hpe, iie } from "./ipa.js";
import { E } from "./tslib.es6.js";
var CL1, TL1, EL1, IL1, xL1, AL1;
export { AL1, CL1, EL1, IL1, TL1, xL1 };
var __wakaru_RL1_initialized = false;
export function RL1() {
if (__wakaru_RL1_initialized) return;
__wakaru_RL1_initialized = true;
"use strict";
E(), Ng(), iCe(), CL1 = iie("RetryBlobStore"), TL1 = hpe("agent_kv.retry.retries", {
    description: "Number of RetryBlobStore retry attempts (one per re-issued operation, not counting the first try)",
    labelNames: [
        "operation",
        "outcome"
    ]
}), EL1 = U4("agent_kv.retry.get_blob.duration_ms", {
    description: "Duration of RetryBlobStore getBlob operations in milliseconds"
}), IL1 = U4("agent_kv.retry.set_blob.duration_ms", {
    description: "Duration of RetryBlobStore setBlob operations in milliseconds"
}), xL1 = U4("agent_kv.retry.set_blob_locally_only.duration_ms", {
    description: "Duration of RetryBlobStore setBlobLocallyOnly operations in milliseconds"
}), AL1 = U4("agent_kv.retry.flush.duration_ms", {
    description: "Duration of RetryBlobStore flush operations in milliseconds"
});

}
