import { init_request_context_encoder } from "./request-context-encoder.js";
import { init_dist8 } from "../../agent-exec/dist/index.js";
import { init_dist5 } from "../../agent-kv/dist/index.js";
import { createCounter, createHistogram, retryPromise, toHex } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { init_request_context_exec_pb } from "../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
var REQUEST_CONTEXT_BLOB_HARD_MAX_BYTES, REQUEST_CONTEXT_DYNAMIC_INLINE_MAX_BYTES, DEFAULT_TRANSIENT_BLOB_BUDGET_BYTES, requestContextBlobPrepared, requestContextBlobBytes, requestContextBlobPreparationDuration, TransientRequestContextBlobStore;
export { DEFAULT_TRANSIENT_BLOB_BUDGET_BYTES, REQUEST_CONTEXT_BLOB_HARD_MAX_BYTES, REQUEST_CONTEXT_DYNAMIC_INLINE_MAX_BYTES, TransientRequestContextBlobStore, requestContextBlobBytes, requestContextBlobPreparationDuration, requestContextBlobPrepared };
var __wakaru_init_request_context_blob_initialized = false;
export function init_request_context_blob() {
if (__wakaru_init_request_context_blob_initialized) return;
__wakaru_init_request_context_blob_initialized = true;
"use strict";
init_dist8();
init_dist5();
init_dist4();
init_request_context_exec_pb();
init_dist3();
init_request_context_encoder();
REQUEST_CONTEXT_BLOB_HARD_MAX_BYTES = 15 * 1024 * 1024;
REQUEST_CONTEXT_DYNAMIC_INLINE_MAX_BYTES = 1 * 1024 * 1024;
DEFAULT_TRANSIENT_BLOB_BUDGET_BYTES = 4 * REQUEST_CONTEXT_BLOB_HARD_MAX_BYTES;
requestContextBlobPrepared = createCounter("agent_client.request_context_blob.prepared", {
    description: "Prepared RequestContext blob references"
});
requestContextBlobBytes = createHistogram("agent_client.request_context_blob.bytes", {
    description: "Serialized RequestContext bytes staged by the client"
});
requestContextBlobPreparationDuration = createHistogram("agent_client.request_context_blob.preparation_ms", {
    description: "Time to hydrate, serialize, and hash RequestContext"
});
TransientRequestContextBlobStore = class {
    constructor(parent, maxTransientBytes = DEFAULT_TRANSIENT_BLOB_BUDGET_BYTES){
        this.parent = parent;
        this.maxTransientBytes = maxTransientBytes;
        this.transientBlobs = new Map();
        this.persistedBlobIds = new Set();
        this.transientBytes = 0;
    }
    seed(blobId, blobData) {
        return this.seedAll([
            {
                blobId,
                blobData
            }
        ]);
    }
    seedAll(blobs) {
        const nextSizes = new Map();
        for (const { blobId, blobData } of blobs){
            nextSizes.set(toHex(blobId), blobData.byteLength);
        }
        let nextTransientBytes = this.transientBytes;
        for (const [key, nextSize] of nextSizes){
            nextTransientBytes -= this.transientBlobs.get(key)?.byteLength ?? 0;
            nextTransientBytes += nextSize;
        }
        if (nextTransientBytes > this.maxTransientBytes) {
            return false;
        }
        for (const { blobId, blobData } of blobs){
            this.transientBlobs.set(toHex(blobId), blobData);
        }
        this.transientBytes = nextTransientBytes;
        return true;
    }
    has(blobId) {
        return this.transientBlobs.has(toHex(blobId));
    }
    hasAll(blobIds) {
        return blobIds.every((blobId)=>this.has(blobId));
    }
    async getBlob(ctx, blobId) {
        const key = toHex(blobId);
        const transient = this.transientBlobs.get(key);
        if (transient === void 0) {
            return await this.parent.getBlob(ctx, blobId);
        }
        return transient;
    }
    async persistForRemoteRead(ctx, blobId) {
        const key = toHex(blobId);
        const transient = this.transientBlobs.get(key);
        if (transient === void 0 || this.persistedBlobIds.has(key)) {
            return;
        }
        await retryPromise(()=>this.parent.setBlob(ctx, blobId, transient), 2);
        this.persistedBlobIds.add(key);
    }
    async setBlob(ctx, blobId, blobData) {
        await this.parent.setBlob(ctx, blobId, blobData);
    }
    async setBlobLocallyOnly(ctx, blobId, blobData) {
        await this.parent.setBlobLocallyOnly(ctx, blobId, blobData);
    }
    async flush(ctx) {
        await this.parent.flush(ctx);
    }
};

}
