import { init_blob_store } from "./blob-store.js";
import { createLogger } from "./subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram, toUint8Array } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var logger2, cachedGetBlobLatency, cachedSetBlobLatency, cachedFlushLatency, cachedCacheBytes, cachedGetBlobResults, cachedNearbyDecryptErrors, cachedNearbyDecryptFallbackSuccess, encryptedGetBlobLatency, encryptedSetBlobLatency, NearbyBlobDecryptError, EncryptedBlobStore;
export { EncryptedBlobStore, NearbyBlobDecryptError, cachedCacheBytes, cachedFlushLatency, cachedGetBlobLatency, cachedGetBlobResults, cachedNearbyDecryptErrors, cachedNearbyDecryptFallbackSuccess, cachedSetBlobLatency, encryptedGetBlobLatency, encryptedSetBlobLatency, logger2 };
var __wakaru_init_cached_blob_store_initialized = false;
export function init_cached_blob_store() {
if (__wakaru_init_cached_blob_store_initialized) return;
__wakaru_init_cached_blob_store_initialized = true;
"use strict";
init_dist();
init_dist4();
init_blob_store();
logger2 = createLogger("@anysphere/agent-kv");
cachedGetBlobLatency = createHistogram("agent_kv.cached.get_blob.duration_ms", {
    description: "Duration of CachedBlobStore getBlob operations in milliseconds"
});
cachedSetBlobLatency = createHistogram("agent_kv.cached.set_blob.duration_ms", {
    description: "Duration of CachedBlobStore setBlob operations in milliseconds"
});
cachedFlushLatency = createHistogram("agent_kv.cached.flush.duration_ms", {
    description: "Duration of CachedBlobStore flush operations in milliseconds"
});
cachedCacheBytes = createHistogram("agent_kv.cached.cache_bytes", {
    description: "Resident bytes held in the CachedBlobStore in-memory cache, sampled on flush"
});
cachedGetBlobResults = createCounter("agent_kv.cached.get_blob.results", {
    description: "Number of CachedBlobStore getBlob operations by cache result type",
    labelNames: [
        "cache_type"
    ]
});
cachedNearbyDecryptErrors = createCounter("agent_kv.nearby.decrypt_errors", {
    description: "Number of nearby blob reads that found ciphertext but failed to decrypt it (wrong encryption key)"
});
cachedNearbyDecryptFallbackSuccess = createCounter("agent_kv.nearby.decrypt_fallback_success", {
    description: "Number of nearby blob reads where the primary encryption key failed but the fallback key decrypted the blob"
});
encryptedGetBlobLatency = createHistogram("agent_kv.encrypted.get_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore getBlob operations in milliseconds"
});
encryptedSetBlobLatency = createHistogram("agent_kv.encrypted.set_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore setBlob operations in milliseconds"
});
NearbyBlobDecryptError = class extends Error {
    constructor(cause){
        super("Failed to decrypt nearby blob (encryption key mismatch)", {
            cause
        });
        this.name = "NearbyBlobDecryptError";
    }
};
EncryptedBlobStore = class _EncryptedBlobStore {
    constructor(blobStore, encryptionKeyStr, fallbackDecryptKeyStr = null){
        this.blobStore = blobStore;
        this.encryptionKeyStr = encryptionKeyStr;
        this.fallbackDecryptKeyStr = fallbackDecryptKeyStr;
    }
    static async deriveKey(keyStr) {
        const encoder2 = new TextEncoder();
        const keyMaterial = encoder2.encode(keyStr);
        const keyHash = await crypto.subtle.digest("SHA-256", keyMaterial);
        return crypto.subtle.importKey("raw", keyHash, {
            name: _EncryptedBlobStore.ALGORITHM,
            length: 256
        }, true, [
            "encrypt",
            "decrypt"
        ]);
    }
    async getEncryptionKey() {
        if (this.encryptionKey === void 0) {
            this.encryptionKey = await _EncryptedBlobStore.deriveKey(this.encryptionKeyStr);
        }
        return this.encryptionKey;
    }
    async getFallbackDecryptKey() {
        if (this.fallbackDecryptKeyStr === null) {
            return null;
        }
        if (this.fallbackDecryptKey === void 0) {
            this.fallbackDecryptKey = await _EncryptedBlobStore.deriveKey(this.fallbackDecryptKeyStr);
        }
        return this.fallbackDecryptKey;
    }
    async getBlob(ctx, blobId) {
        const startTime = performance.now();
        try {
            const encryptedValue = await this.blobStore.getBlob(ctx, blobId);
            if (encryptedValue === void 0) {
                return void 0;
            }
            const iv = encryptedValue.slice(0, _EncryptedBlobStore.IV_LENGTH);
            const ciphertext = encryptedValue.slice(_EncryptedBlobStore.IV_LENGTH);
            let decryptedValue;
            try {
                decryptedValue = await crypto.subtle.decrypt({
                    name: _EncryptedBlobStore.ALGORITHM,
                    iv
                }, await this.getEncryptionKey(), ciphertext);
            } catch (primaryError) {
                const fallbackKey = await this.getFallbackDecryptKey();
                if (fallbackKey === null) {
                    throw new NearbyBlobDecryptError(primaryError);
                }
                try {
                    decryptedValue = await crypto.subtle.decrypt({
                        name: _EncryptedBlobStore.ALGORITHM,
                        iv
                    }, fallbackKey, ciphertext);
                    cachedNearbyDecryptFallbackSuccess.increment(ctx, 1);
                } catch  {
                    throw new NearbyBlobDecryptError(primaryError);
                }
            }
            return new Uint8Array(decryptedValue);
        } finally{
            const duration3 = performance.now() - startTime;
            encryptedGetBlobLatency.histogram(ctx, duration3);
        }
    }
    async encryptBlob(blobData) {
        const iv = crypto.getRandomValues(new Uint8Array(_EncryptedBlobStore.IV_LENGTH));
        const encryptedValue = await crypto.subtle.encrypt({
            name: _EncryptedBlobStore.ALGORITHM,
            iv
        }, await this.getEncryptionKey(), toUint8Array(blobData));
        const combined = new Uint8Array(iv.length + encryptedValue.byteLength);
        combined.set(iv, 0);
        combined.set(new Uint8Array(encryptedValue), iv.length);
        return combined;
    }
    async setBlob(ctx, blobId, blobData) {
        const startTime = performance.now();
        try {
            const encryptedBlob = await this.encryptBlob(blobData);
            await this.blobStore.setBlob(ctx, blobId, encryptedBlob);
        } finally{
            const duration3 = performance.now() - startTime;
            encryptedSetBlobLatency.histogram(ctx, duration3);
        }
    }
    async setBlobLocallyOnly(ctx, blobId, blobData) {
        const startTime = performance.now();
        try {
            const encryptedBlob = await this.encryptBlob(blobData);
            await this.blobStore.setBlobLocallyOnly(ctx, blobId, encryptedBlob);
        } finally{
            const duration3 = performance.now() - startTime;
            encryptedSetBlobLatency.histogram(ctx, duration3);
        }
    }
    async flush(ctx) {
        return await this.blobStore.flush(ctx);
    }
};
EncryptedBlobStore.ALGORITHM = "AES-GCM";
EncryptedBlobStore.IV_LENGTH = 12;

}
