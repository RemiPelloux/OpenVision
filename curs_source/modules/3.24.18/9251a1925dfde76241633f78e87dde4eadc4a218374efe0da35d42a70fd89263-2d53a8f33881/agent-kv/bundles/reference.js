import { BlobNotFoundError, init_blob_not_found_error } from "./blob-not-found-error.js";
import { init_blob_read_kind } from "./blob-read-kind.js";
import { init_blob_store } from "./blob-store.js";
import { init_serde } from "./serde.js";
import { createLogger } from "./subagent-states.js";
import { init_typed_blob_store } from "./typed-blob-store.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram, getBlobId, getBlobMetadataCallback, getBlobTypeLabel, isBlobDurable, toHex, withDefaultBlobReadKind } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var logger5, LARGE_LAZY_REFERENCE_BLOB_BYTES, SLOW_LAZY_REFERENCE_DESERIALIZE_MS, lazyReferenceCacheMiss, lazyReferenceDeserializeBytes, lazyReferenceDeserializeDuration, Writeable, EagerReference, LazyReference;
export { EagerReference, LARGE_LAZY_REFERENCE_BLOB_BYTES, LazyReference, SLOW_LAZY_REFERENCE_DESERIALIZE_MS, Writeable, lazyReferenceCacheMiss, lazyReferenceDeserializeBytes, lazyReferenceDeserializeDuration, logger5 };
var __wakaru_init_reference_initialized = false;
export function init_reference() {
if (__wakaru_init_reference_initialized) return;
__wakaru_init_reference_initialized = true;
"use strict";
init_dist();
init_dist4();
init_blob_not_found_error();
init_blob_read_kind();
init_blob_store();
init_serde();
init_typed_blob_store();
logger5 = createLogger("@anysphere/agent-kv:reference");
LARGE_LAZY_REFERENCE_BLOB_BYTES = 512 * 1024;
SLOW_LAZY_REFERENCE_DESERIALIZE_MS = 100;
lazyReferenceCacheMiss = createCounter("agent_kv.lazy_reference.cache_miss", {
    description: "Number of large or slow LazyReference cache misses that require loading and deserializing a blob",
    labelNames: [
        "blob_type"
    ]
});
lazyReferenceDeserializeBytes = createHistogram("agent_kv.lazy_reference.deserialize_bytes", {
    description: "Blob byte size loaded on a large or slow LazyReference deserialize cache miss",
    labelNames: [
        "blob_type"
    ]
});
lazyReferenceDeserializeDuration = createHistogram("agent_kv.lazy_reference.deserialize_ms", {
    description: "Time spent deserializing a blob on a large or slow LazyReference cache miss",
    labelNames: [
        "blob_type"
    ]
});
Writeable = class {
};
EagerReference = class {
    constructor(serde, blobStore, value){
        this.serde = serde;
        this.blobStore = blobStore;
        this.lastWrittenValue = void 0;
        this.value = value;
    }
    get(_ctx) {
        return Promise.resolve(this.value);
    }
    set(value) {
        this.value = value;
    }
    async writeToBlobStore(ctx) {
        if (this.value instanceof Writeable) {
            return this.value.writeToBlobStore(ctx);
        }
        if (this.value === this.lastWrittenValue?.value) {
            if (!isBlobDurable(this.blobStore, this.lastWrittenValue.blobId)) {
                await this.blobStore.setBlob(ctx, this.lastWrittenValue.blobId, this.lastWrittenValue.blobData);
            }
            return this.lastWrittenValue.blobId;
        }
        const serialized = this.serde.serialize(this.value);
        const blobId = await getBlobId(serialized);
        const onBlobMetadata = getBlobMetadataCallback(this.blobStore);
        const blobType = this.serde.getBlobType?.();
        if (onBlobMetadata && blobType) {
            onBlobMetadata({
                blobId,
                blobType
            });
        }
        await this.blobStore.setBlob(ctx, blobId, serialized);
        this.lastWrittenValue = {
            value: this.value,
            blobId,
            blobData: serialized
        };
        return blobId;
    }
};
LazyReference = class {
    constructor(serde, blobStore, blobId){
        this.serde = serde;
        this.blobStore = blobStore;
        this.blobId = blobId;
        this.valuePromise = void 0;
        this.lastWrittenValue = void 0;
        this.lastWrittenBlobData = void 0;
    }
    async get(ctx) {
        if (this.valuePromise === void 0) {
            const blobType = getBlobTypeLabel(this.serde);
            const readCtx = withDefaultBlobReadKind(ctx, "lazy_reference");
            this.valuePromise = this.blobStore.getBlob(readCtx, this.blobId).then((blob)=>{
                if (blob === void 0) {
                    throw new BlobNotFoundError([
                        toHex(this.blobId)
                    ]);
                }
                const deserializeStart = performance.now();
                const value = this.serde.deserialize(blob);
                this.lastWrittenBlobData = blob;
                const deserializeDurationMs = performance.now() - deserializeStart;
                if (blob.byteLength >= LARGE_LAZY_REFERENCE_BLOB_BYTES || deserializeDurationMs >= SLOW_LAZY_REFERENCE_DESERIALIZE_MS) {
                    lazyReferenceCacheMiss.increment(ctx, 1, {
                        blob_type: blobType
                    });
                    lazyReferenceDeserializeBytes.histogram(ctx, blob.byteLength, {
                        blob_type: blobType
                    });
                    lazyReferenceDeserializeDuration.histogram(ctx, deserializeDurationMs, {
                        blob_type: blobType
                    });
                    logger5.warn(ctx, "Large lazy reference deserialize", {
                        blobType,
                        blobBytes: blob.byteLength,
                        deserializeDurationMs
                    });
                }
                return value;
            });
            this.valuePromise.then((value)=>{
                this.lastWrittenValue = value;
            }, ()=>{});
        }
        return this.valuePromise;
    }
    set(value) {
        this.valuePromise = Promise.resolve(value);
    }
    async writeToBlobStore(ctx) {
        if (this.valuePromise === void 0) {
            return this.blobId;
        }
        const value = await this.get(ctx);
        if (value instanceof Writeable) {
            return value.writeToBlobStore(ctx);
        }
        if (value === this.lastWrittenValue) {
            if (this.lastWrittenBlobData !== void 0 && !isBlobDurable(this.blobStore, this.blobId)) {
                await this.blobStore.setBlob(ctx, this.blobId, this.lastWrittenBlobData);
            }
            return this.blobId;
        }
        const serialized = this.serde.serialize(value);
        const blobId = await getBlobId(serialized);
        const onBlobMetadata = getBlobMetadataCallback(this.blobStore);
        const blobType = this.serde.getBlobType?.();
        if (onBlobMetadata && blobType) {
            onBlobMetadata({
                blobId,
                blobType
            });
        }
        await this.blobStore.setBlob(ctx, blobId, serialized);
        this.lastWrittenValue = value;
        this.lastWrittenBlobData = serialized;
        this.blobId = blobId;
        return blobId;
    }
};

}
