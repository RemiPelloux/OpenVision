import { init_blob_read_source, sourceByStore } from "./blob-read-source.js";
import { init_blob_read_summary, summaryKey } from "./blob-read-summary.js";
import { init_dist5 } from "../../../agent-kv/dist/index.js";
import { sessionBlobKey, toHex } from "../../../dist_exports.js";
function markAgentHostBlobReadSource(store, source) {
    sourceByStore.set(store, source);
    return store;
}
function recordAgentHostBlobRead(ctx, source, result) {
    const summary = ctx.get(summaryKey);
    if (summary === void 0 || summary.source !== source) {
        return;
    }
    if (result === "hit") {
        summary.counts.hits++;
    } else if (result === "miss") {
        summary.counts.misses++;
    } else {
        summary.counts.errors++;
    }
}
var AGENT_KV_PREFIX, LocalHostBlobStore, MirroredHostBlobStore;
export { AGENT_KV_PREFIX, LocalHostBlobStore, MirroredHostBlobStore, markAgentHostBlobReadSource, recordAgentHostBlobRead };
var __wakaru_init_session_blob_store_initialized = false;
export function init_session_blob_store() {
if (__wakaru_init_session_blob_store_initialized) return;
__wakaru_init_session_blob_store_initialized = true;
"use strict";
init_dist5();
init_blob_read_source();
init_blob_read_summary();
AGENT_KV_PREFIX = "agentKv:blob:";
LocalHostBlobStore = class {
    constructor(db){
        this.db = db;
        markAgentHostBlobReadSource(this, "host_sqlite");
    }
    async getBlob(ctx, blobId) {
        try {
            const bytes = this.db.blobs.get(sessionBlobKey(toHex(blobId)));
            recordAgentHostBlobRead(ctx, "host_sqlite", bytes === void 0 ? "miss" : "hit");
            return bytes;
        } catch (error3) {
            recordAgentHostBlobRead(ctx, "host_sqlite", "error");
            throw error3;
        }
    }
    async setBlob(_ctx, blobId, blobData) {
        this.db.blobs.set(sessionBlobKey(toHex(blobId)), blobData);
    }
    async setBlobLocallyOnly(ctx, blobId, blobData) {
        await this.setBlob(ctx, blobId, blobData);
    }
    async flush(_ctx) {}
};
MirroredHostBlobStore = class {
    constructor(db, mirror, reportMirrorWriteFailure = ()=>{}){
        this.mirror = mirror;
        this.reportMirrorWriteFailure = reportMirrorWriteFailure;
        this.pendingMirrorWrites = new Set();
        this.local = new LocalHostBlobStore(db);
        markAgentHostBlobReadSource(this, "host_sqlite");
    }
    async getBlob(ctx, blobId) {
        return this.local.getBlob(ctx, blobId);
    }
    async setBlob(ctx, blobId, blobData) {
        await this.writeLocallyThenMirror(ctx, blobId, blobData, false);
    }
    async setBlobLocallyOnly(ctx, blobId, blobData) {
        await this.writeLocallyThenMirror(ctx, blobId, blobData, true);
    }
    async flush(ctx) {
        await this.local.flush(ctx);
        while(this.pendingMirrorWrites.size > 0){
            await Promise.all([
                ...this.pendingMirrorWrites
            ]);
        }
        this.throwIfMirrorFailed();
    }
    async writeLocallyThenMirror(ctx, blobId, blobData, locallyOnly) {
        this.throwIfMirrorFailed();
        if (locallyOnly) {
            await this.local.setBlobLocallyOnly(ctx, blobId, blobData);
        } else {
            await this.local.setBlob(ctx, blobId, blobData);
        }
        await this.trackMirrorWrite({
            blobId,
            blobData,
            locallyOnly
        });
        this.throwIfMirrorFailed();
    }
    trackMirrorWrite(params) {
        const tracked = (async ()=>this.mirror(params))().then(()=>void 0, (error3)=>{
            if (this.latchedMirrorFailure === void 0) {
                this.latchedMirrorFailure = new Error(`Mirror write failed; the host-owned session store is now failed: ${error3 instanceof Error ? error3.message : String(error3)}`, {
                    cause: error3
                });
                this.reportMirrorWriteFailure();
            }
        });
        this.pendingMirrorWrites.add(tracked);
        void tracked.then(()=>this.pendingMirrorWrites.delete(tracked));
        return tracked;
    }
    throwIfMirrorFailed() {
        if (this.latchedMirrorFailure !== void 0) {
            throw this.latchedMirrorFailure;
        }
    }
};

}
