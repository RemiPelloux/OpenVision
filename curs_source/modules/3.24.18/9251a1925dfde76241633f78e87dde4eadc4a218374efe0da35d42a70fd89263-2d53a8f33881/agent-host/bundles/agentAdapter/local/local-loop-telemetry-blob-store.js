import { init_dist5 } from "../../../../agent-kv/dist/index.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createCounter, createHistogram, toBase64 } from "../../../../dist_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
var logger128, TELEMETRY_BLOB_FLUSH_BATCH_SIZE, telemetryBlobFlushCount, telemetryBlobDedupedCount, telemetryBlobDroppedCount, LocalLoopTelemetryBlobStore;
export { LocalLoopTelemetryBlobStore, TELEMETRY_BLOB_FLUSH_BATCH_SIZE, logger128, telemetryBlobDedupedCount, telemetryBlobDroppedCount, telemetryBlobFlushCount };
var __wakaru_init_local_loop_telemetry_blob_store_initialized = false;
export function init_local_loop_telemetry_blob_store() {
if (__wakaru_init_local_loop_telemetry_blob_store_initialized) return;
__wakaru_init_local_loop_telemetry_blob_store_initialized = true;
"use strict";
init_dist5();
init_dist();
init_dist4();
logger128 = createLogger("@anysphere/agent-host:local-loop-telemetry-blob-store");
TELEMETRY_BLOB_FLUSH_BATCH_SIZE = 100;
telemetryBlobFlushCount = createHistogram("agent_client.local_loop.kvblob_telemetry.flush.blob_count", {
    description: "Blobs per conversation-blob telemetry upload from the local loop",
    labelNames: [
        "outcome"
    ]
});
telemetryBlobDedupedCount = createCounter("agent_client.local_loop.kvblob_telemetry.deduped_blob_count", {
    description: "Blob writes the local loop's telemetry mirror skipped as already published this turn"
});
telemetryBlobDroppedCount = createCounter("agent_client.local_loop.kvblob_telemetry.dropped_blob_count", {
    description: "Buffered blobs the local loop dropped because the server declined the telemetry"
});
LocalLoopTelemetryBlobStore = class {
    constructor(options2){
        this.options = options2;
        this.pending = new Map();
        this.published = new Set();
        this.sequenceNumber = 0;
        this.inflight = new Set();
    }
    decide(ctx, enabled) {
        if (this.decision !== void 0) {
            return;
        }
        this.decision = enabled;
        if (!enabled && this.pending.size > 0) {
            telemetryBlobDroppedCount.increment(ctx, this.pending.size);
            this.pending.clear();
        }
    }
    setAttemptRequestId(attemptRequestId) {
        this.attemptRequestId = attemptRequestId;
    }
    async getBlob(_ctx, _blobId) {
        return void 0;
    }
    async setBlob(ctx, blobId, blobData) {
        if (this.decision === false) {
            return;
        }
        const key = toBase64(blobId);
        if (this.published.has(key)) {
            telemetryBlobDedupedCount.increment(ctx, 1);
            return;
        }
        this.pending.set(key, {
            id: blobId,
            value: blobData
        });
    }
    async setBlobLocallyOnly(ctx, blobId, blobData) {
        return this.setBlob(ctx, blobId, blobData);
    }
    async flush(ctx) {
        if (this.pending.size <= TELEMETRY_BLOB_FLUSH_BATCH_SIZE) {
            return;
        }
        this.flushAllPending(ctx);
    }
    flushAllPending(ctx) {
        if (this.decision !== true || this.pending.size === 0) {
            return;
        }
        const attemptRequestId = this.attemptRequestId;
        if (attemptRequestId === void 0) {
            return;
        }
        const batch = Array.from(this.pending.values());
        const keys = Array.from(this.pending.keys());
        this.pending = new Map();
        for (const key of keys){
            this.published.add(key);
        }
        const sequenceNumber = this.sequenceNumber;
        this.sequenceNumber += 1;
        const upload = this.options.uploader.upload(ctx, {
            conversationId: this.options.conversationId,
            attemptRequestId,
            sequenceNumber,
            blobs: batch
        }).then(()=>{
            telemetryBlobFlushCount.histogram(ctx, batch.length, {
                outcome: "uploaded"
            });
        }, (error3)=>{
            telemetryBlobFlushCount.histogram(ctx, batch.length, {
                outcome: "failed"
            });
            logger128.warn(ctx, "Conversation blob telemetry upload failed; dropped", {
                conversationId: this.options.conversationId,
                attemptRequestId,
                sequenceNumber,
                blobCount: batch.length,
                error: error3 instanceof Error ? error3.message : String(error3)
            });
        });
        this.inflight.add(upload);
        void upload.finally(()=>{
            this.inflight.delete(upload);
        });
    }
    async settled() {
        while(this.inflight.size > 0){
            await Promise.all(Array.from(this.inflight));
        }
    }
};

}
