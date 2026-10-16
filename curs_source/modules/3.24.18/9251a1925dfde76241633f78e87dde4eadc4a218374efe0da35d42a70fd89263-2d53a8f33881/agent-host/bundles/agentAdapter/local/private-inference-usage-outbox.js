import { createContext } from "../../storage/instruments.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { init_esm3 } from "../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_private_inference_pb } from "../../../../proto/dist/generated/aiserver/v1/private_inference_pb.js";
import { decodeRecord, flushFailureReason, partition, recordBytes, recordKey2, runUntilCanceled, toRequest } from "../../../../tree_chunk_napi_exports.js";
function wait(ctx) {
    return new Promise((resolve36)=>{
        if (ctx.canceled) {
            resolve36();
            return;
        }
        ctx.signal.addEventListener("abort", ()=>resolve36(), {
            once: true
        });
    });
}
var import_node_crypto46, PRIVATE_INFERENCE_USAGE_FLUSH_METRIC, PREFIX, BATCH_SIZE, BATCH_BYTES, LEASE_MS, REQUEST_MS, POLL_MS, RETRY_MS, MAX_RETRY_MS, coordinationSchema, TURN_SEGMENT, PrivateInferenceUsageOutbox;
export { BATCH_BYTES, BATCH_SIZE, LEASE_MS, MAX_RETRY_MS, POLL_MS, PREFIX, PRIVATE_INFERENCE_USAGE_FLUSH_METRIC, PrivateInferenceUsageOutbox, REQUEST_MS, RETRY_MS, TURN_SEGMENT, coordinationSchema, import_node_crypto46, wait };
var __wakaru_init_private_inference_usage_outbox_initialized = false;
export function init_private_inference_usage_outbox() {
if (__wakaru_init_private_inference_usage_outbox_initialized) return;
__wakaru_init_private_inference_usage_outbox_initialized = true;
"use strict";
import_node_crypto46 = require("node:crypto");
init_dist();
init_private_inference_pb();
init_esm3();
init_zod();
PRIVATE_INFERENCE_USAGE_FLUSH_METRIC = "agent_host.private_inference.usage_flush";
PREFIX = "private-inference-usage/v1/";
BATCH_SIZE = 50;
BATCH_BYTES = 512 * 1024;
LEASE_MS = 6e4;
REQUEST_MS = 2e4;
POLL_MS = 3e4;
RETRY_MS = 1e3;
MAX_RETRY_MS = 3e5;
coordinationSchema = external_exports.object({
    token: external_exports.string().min(1),
    expiresAt: external_exports.number().finite(),
    retryAt: external_exports.number().finite(),
    failures: external_exports.number().int().min(0).max(10)
});
TURN_SEGMENT = "~turn";
PrivateInferenceUsageOutbox = class {
    constructor(options2){
        this.options = options2;
        this.disposed = false;
        this.identityVersion = 0;
        this.flushAgain = false;
    }
    start() {
        if (this.disposed || this.identitySubscription !== void 0) {
            return;
        }
        this.identitySubscription = this.options.backend.onDidChangeIdentity(()=>{
            this.identityVersion++;
            this.cancelRequest?.();
            this.schedule(0);
        });
        this.schedule(0);
    }
    enqueue(identity, invocation) {
        if (invocation.usageUuid.length === 0 || invocation.invocationId.length === 0) {
            throw new Error("Private inference usage requires a complete identity");
        }
        this.enqueueRecord(identity, {
            kind: "invocation",
            value: invocation
        });
    }
    enqueueTurn(identity, turn) {
        if (turn.usageUuid.length === 0) {
            throw new Error("Private inference turn outcome requires a usage id");
        }
        this.enqueueRecord(identity, {
            kind: "turn",
            value: turn
        });
    }
    enqueueRecord(identity, record3) {
        if (this.disposed) {
            throw new Error("Private inference usage outbox is disposed");
        }
        if (identity.authId.length === 0 || identity.backendUrl.length === 0) {
            throw new Error("Private inference usage requires a complete identity");
        }
        if (recordBytes(record3) > BATCH_BYTES) {
            throw new Error("Private inference usage record exceeds batch size");
        }
        const key = recordKey2(identity, record3);
        const json2 = record3.value.toJsonString();
        this.options.store.transaction(()=>{
            const existing = this.options.store.items.get(key);
            if (existing !== void 0 && existing !== json2) {
                throw new Error(`Conflicting private inference usage ${record3.kind}`);
            }
            if (existing === void 0) {
                this.options.store.items.set(key, json2);
            }
        });
        this.start();
        this.schedule(0);
    }
    flush() {
        if (this.disposed) {
            return Promise.resolve();
        }
        if (this.inFlight !== void 0) {
            return this.inFlight;
        }
        this.start();
        this.cancelScheduled();
        this.flushAgain = false;
        let delay3 = RETRY_MS;
        this.inFlight = this.flushOnce().then((nextDelay)=>{
            delay3 = nextDelay;
        }).finally(()=>{
            this.inFlight = void 0;
            this.schedule(this.flushAgain ? 0 : delay3);
        });
        return this.inFlight;
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.identitySubscription?.dispose();
        this.identitySubscription = void 0;
        this.cancelScheduled();
        this.cancelRequest?.();
        this.cancelRequest = void 0;
    }
    async flushOnce() {
        const [ctx, cancel] = createContext().withTimeoutAndCancel(REQUEST_MS);
        this.cancelRequest = cancel;
        const identityVersion = this.identityVersion;
        let lease;
        try {
            const identity = await runUntilCanceled(ctx, ()=>this.options.backend.getIdentity());
            if (ctx.canceled) {
                throw ctx.reason;
            }
            if (identity === void 0 || this.options.store.items.keys(partition("pending", identity)).length === 0) {
                return POLL_MS;
            }
            const claim = this.claimLease(identity);
            if ("waitMs" in claim) {
                return claim.waitMs;
            }
            lease = claim;
            const batch = this.readBatch(identity);
            if (ctx.canceled || Date.now() >= lease.expiresAt) {
                throw new Error("Private inference usage flush lease expired");
            }
            if (batch.length > 0) {
                await runUntilCanceled(ctx, ()=>this.options.backend.reportUsage(identity, toRequest(batch), ctx.signal));
            }
            if (ctx.canceled) {
                throw ctx.reason;
            }
            this.settleLease(lease, batch);
            if (batch.length > 0) {
                this.countFlush("sent");
            }
            return batch.length > 0 ? 0 : POLL_MS;
        } catch (error3) {
            if (this.disposed) {
                return POLL_MS;
            }
            let delay3 = RETRY_MS;
            if (lease !== void 0) {
                try {
                    delay3 = this.settleLease(lease);
                } catch (storeError) {
                    this.options.onError(storeError);
                }
            }
            if (identityVersion !== this.identityVersion) {
                this.countFlush("superseded");
                return 0;
            }
            this.countFlush("failed", flushFailureReason(error3));
            this.options.onError(error3);
            return delay3;
        } finally{
            cancel();
            this.cancelRequest = void 0;
        }
    }
    claimLease(identity) {
        const key = partition("coordination", identity);
        return this.options.store.transaction(()=>{
            const previous = coordinationSchema.optional().parse(this.options.store.items.get(key));
            const now2 = Date.now();
            const availableAt = Math.max(previous?.expiresAt ?? 0, previous?.retryAt ?? 0);
            if (availableAt > now2) {
                return {
                    waitMs: Math.min(POLL_MS, availableAt - now2)
                };
            }
            const next = {
                token: (0, import_node_crypto46.randomUUID)(),
                expiresAt: now2 + LEASE_MS,
                retryAt: 0,
                failures: previous?.failures ?? 0
            };
            this.options.store.items.set(key, next);
            return {
                key,
                token: next.token,
                expiresAt: next.expiresAt
            };
        });
    }
    readBatch(identity) {
        const batch = [];
        let bytes = 0;
        const keys = this.options.store.items.keys(partition("pending", identity)).slice(0, BATCH_SIZE);
        for (const key of keys){
            const json2 = this.options.store.items.get(key);
            if (json2 === void 0) {
                continue;
            }
            if (typeof json2 !== "string") {
                throw new Error("Invalid private inference usage record");
            }
            const record3 = decodeRecord(key, json2);
            if (recordKey2(identity, record3) !== key) {
                throw new Error("Private inference usage record identity mismatch");
            }
            const size = recordBytes(record3);
            if (size > BATCH_BYTES) {
                throw new Error("Private inference usage record exceeds batch size");
            }
            if (bytes + size > BATCH_BYTES) {
                break;
            }
            bytes += size;
            batch.push({
                key,
                json: json2,
                record: record3
            });
        }
        return batch;
    }
    settleLease(lease, acknowledged) {
        return this.options.store.transaction(()=>{
            const current = coordinationSchema.optional().parse(this.options.store.items.get(lease.key));
            const now2 = Date.now();
            if (current?.token !== lease.token || current.expiresAt <= now2) {
                return 0;
            }
            if (acknowledged !== void 0) {
                for (const record3 of acknowledged){
                    const stored = this.options.store.items.get(record3.key);
                    if (stored !== void 0 && stored !== record3.json) {
                        throw new Error("Private inference usage changed during upload");
                    }
                    if (stored !== void 0) {
                        this.options.store.items.delete(record3.key);
                    }
                }
                this.options.store.items.delete(lease.key);
                return 0;
            }
            const delay3 = Math.min(MAX_RETRY_MS, RETRY_MS * 2 ** current.failures);
            this.options.store.items.set(lease.key, {
                ...current,
                expiresAt: 0,
                retryAt: now2 + delay3,
                failures: Math.min(10, current.failures + 1)
            });
            return delay3;
        });
    }
    schedule(delay3) {
        if (this.disposed) {
            return;
        }
        if (this.inFlight !== void 0) {
            this.flushAgain = true;
            return;
        }
        const at2 = Date.now() + delay3;
        if (this.scheduled !== void 0 && this.scheduled.at <= at2) {
            return;
        }
        this.cancelScheduled();
        const [ctx, cancel] = createContext().withTimeoutAndCancel(delay3);
        const scheduled = {
            at: at2,
            cancel
        };
        this.scheduled = scheduled;
        void wait(ctx).then(()=>{
            if (this.scheduled !== scheduled || this.disposed) {
                return;
            }
            this.scheduled = void 0;
            void this.flush().catch(this.options.onError);
        });
    }
    cancelScheduled() {
        const scheduled = this.scheduled;
        this.scheduled = void 0;
        scheduled?.cancel();
    }
    countFlush(outcome, reason) {
        try {
            this.options.metrics?.increment?.({
                stat: PRIVATE_INFERENCE_USAGE_FLUSH_METRIC,
                value: 1,
                tags: reason === void 0 ? {
                    outcome
                } : {
                    outcome,
                    reason
                }
            });
        } catch (error3) {
            this.options.onError(error3);
        }
    }
};

}
