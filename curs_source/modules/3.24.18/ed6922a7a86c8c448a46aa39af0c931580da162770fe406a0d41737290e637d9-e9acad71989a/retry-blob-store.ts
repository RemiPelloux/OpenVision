import { C2, Wj, xee } from "./De_3.js";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { x } from "./tslib.es6.js";
var hvv, pvv, mvv, gvv, fvv, vvv;
export { fvv, gvv, hvv, mvv, pvv, vvv };
var __wakaru__vv_initialized = false;
export function _vv() {
if (__wakaru__vv_initialized) return;
__wakaru__vv_initialized = true;
"use strict";
x(), Gp(), mde(), hvv = Wj("RetryBlobStore"), pvv = xee("agent_kv.retry.retries", {
    description: "Number of RetryBlobStore retry attempts (one per re-issued operation, not counting the first try)",
    labelNames: [
        "operation",
        "outcome"
    ]
}), mvv = C2("agent_kv.retry.get_blob.duration_ms", {
    description: "Duration of RetryBlobStore getBlob operations in milliseconds"
}), gvv = C2("agent_kv.retry.set_blob.duration_ms", {
    description: "Duration of RetryBlobStore setBlob operations in milliseconds"
}), fvv = C2("agent_kv.retry.set_blob_locally_only.duration_ms", {
    description: "Duration of RetryBlobStore setBlobLocallyOnly operations in milliseconds"
}), vvv = C2("agent_kv.retry.flush.duration_ms", {
    description: "Duration of RetryBlobStore flush operations in milliseconds"
});

}
