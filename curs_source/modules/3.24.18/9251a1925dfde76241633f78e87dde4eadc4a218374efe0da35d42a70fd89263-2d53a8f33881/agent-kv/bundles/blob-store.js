import { init_serde } from "./serde.js";
import { createHistogram, toHex } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var inMemoryGetBlobLatency, inMemorySetBlobLatency, InMemoryBlobStore, InMemoryTypedStore;
export { InMemoryBlobStore, InMemoryTypedStore, inMemoryGetBlobLatency, inMemorySetBlobLatency };
var __wakaru_init_blob_store_initialized = false;
export function init_blob_store() {
if (__wakaru_init_blob_store_initialized) return;
__wakaru_init_blob_store_initialized = true;
"use strict";
init_dist4();
init_serde();
inMemoryGetBlobLatency = createHistogram("agent_kv.in_memory.get_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore getBlob operations in milliseconds"
});
inMemorySetBlobLatency = createHistogram("agent_kv.in_memory.set_blob.duration_ms", {
    description: "Duration of InMemoryBlobStore setBlob operations in milliseconds"
});
InMemoryBlobStore = class {
    constructor(){
        this.blobs = new Map();
    }
    getBlob(ctx, blobId) {
        const startTime = performance.now();
        try {
            const blob = this.blobs.get(toHex(blobId));
            return Promise.resolve(blob);
        } finally{
            const duration3 = performance.now() - startTime;
            inMemoryGetBlobLatency.histogram(ctx, duration3);
        }
    }
    setBlob(ctx, blobId, blobData) {
        const startTime = performance.now();
        try {
            this.blobs.set(toHex(blobId), blobData);
            return Promise.resolve();
        } finally{
            const duration3 = performance.now() - startTime;
            inMemorySetBlobLatency.histogram(ctx, duration3);
        }
    }
    setBlobLocallyOnly(ctx, blobId, blobData) {
        return this.setBlob(ctx, blobId, blobData);
    }
    flush(_ctx) {
        return Promise.resolve();
    }
};
InMemoryTypedStore = class {
    constructor(){
        this.store = new Map();
    }
    set(key, value) {
        this.store.set(key, value);
    }
    subscribe(_key, _listener) {
        return ()=>{};
    }
    get(key) {
        const value = this.store.get(key);
        if (value === void 0) {
            throw new Error(`Key ${String(key)} not found in store`);
        }
        return value;
    }
};

}
