import { BSi } from "./blob-store.ts";
import { kl } from "./browser.ts";
import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { D5a, U4, hpe, iie } from "./ipa.js";
import { E } from "./tslib.es6.js";
var iL1, rL1, sL1, oL1, aL1, lL1, cL1, D4p, N4p, N5a, L5a, uL1;
export { D4p, L5a, N4p, N5a, aL1, cL1, iL1, lL1, oL1, rL1, sL1, uL1 };
var __wakaru_dL1_initialized = false;
export function dL1() {
if (__wakaru_dL1_initialized) return;
__wakaru_dL1_initialized = true;
"use strict";
E(), Ng(), iCe(), kl(), BSi(), iL1 = iie("@anysphere/agent-kv"), rL1 = U4("agent_kv.cached.get_blob.duration_ms", {
    description: "Duration of CachedBlobStore getBlob operations in milliseconds"
}), sL1 = U4("agent_kv.cached.set_blob.duration_ms", {
    description: "Duration of CachedBlobStore setBlob operations in milliseconds"
}), oL1 = U4("agent_kv.cached.flush.duration_ms", {
    description: "Duration of CachedBlobStore flush operations in milliseconds"
}), aL1 = U4("agent_kv.cached.cache_bytes", {
    description: "Resident bytes held in the CachedBlobStore in-memory cache, sampled on flush"
}), lL1 = hpe("agent_kv.cached.get_blob.results", {
    description: "Number of CachedBlobStore getBlob operations by cache result type",
    labelNames: [
        "cache_type"
    ]
}), cL1 = hpe("agent_kv.nearby.decrypt_errors", {
    description: "Number of nearby blob reads that found ciphertext but failed to decrypt it (wrong encryption key)"
}), D4p = hpe("agent_kv.nearby.decrypt_fallback_success", {
    description: "Number of nearby blob reads where the primary encryption key failed but the fallback key decrypted the blob"
}), N4p = U4("agent_kv.encrypted.get_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore getBlob operations in milliseconds"
}), N5a = U4("agent_kv.encrypted.set_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore setBlob operations in milliseconds"
}), L5a = class extends Error {
    constructor(t){
        super("Failed to decrypt nearby blob (encryption key mismatch)", {
            cause: t
        }), this.name = "NearbyBlobDecryptError";
    }
}, uL1 = class ZZe {
    constructor(e, n, i = null){
        this.blobStore = e, this.encryptionKeyStr = n, this.fallbackDecryptKeyStr = i;
    }
    static{
        this.ALGORITHM = "AES-GCM";
    }
    static{
        this.IV_LENGTH = 12;
    }
    static async deriveKey(e) {
        const i = new TextEncoder().encode(e), r = await crypto.subtle.digest("SHA-256", i);
        return crypto.subtle.importKey("raw", r, {
            name: ZZe.ALGORITHM,
            length: 256
        }, !0, [
            "encrypt",
            "decrypt"
        ]);
    }
    async getEncryptionKey() {
        return this.encryptionKey === void 0 && (this.encryptionKey = await ZZe.deriveKey(this.encryptionKeyStr)), this.encryptionKey;
    }
    async getFallbackDecryptKey() {
        return this.fallbackDecryptKeyStr === null ? null : (this.fallbackDecryptKey === void 0 && (this.fallbackDecryptKey = await ZZe.deriveKey(this.fallbackDecryptKeyStr)), this.fallbackDecryptKey);
    }
    async getBlob(e, n) {
        const i = performance.now();
        try {
            const r = await this.blobStore.getBlob(e, n);
            if (r === void 0) return;
            const s = r.slice(0, ZZe.IV_LENGTH), o = r.slice(ZZe.IV_LENGTH);
            let a;
            try {
                a = await crypto.subtle.decrypt({
                    name: ZZe.ALGORITHM,
                    iv: s
                }, await this.getEncryptionKey(), o);
            } catch (l) {
                const c = await this.getFallbackDecryptKey();
                if (c === null) throw new L5a(l);
                try {
                    a = await crypto.subtle.decrypt({
                        name: ZZe.ALGORITHM,
                        iv: s
                    }, c, o), D4p.increment(e, 1);
                } catch  {
                    throw new L5a(l);
                }
            }
            return new Uint8Array(a);
        } finally{
            const r = performance.now() - i;
            N4p.histogram(e, r);
        }
    }
    async encryptBlob(e) {
        const n = crypto.getRandomValues(new Uint8Array(ZZe.IV_LENGTH)), i = await crypto.subtle.encrypt({
            name: ZZe.ALGORITHM,
            iv: n
        }, await this.getEncryptionKey(), D5a(e)), r = new Uint8Array(n.length + i.byteLength);
        return r.set(n, 0), r.set(new Uint8Array(i), n.length), r;
    }
    async setBlob(e, n, i) {
        const r = performance.now();
        try {
            const s = await this.encryptBlob(i);
            await this.blobStore.setBlob(e, n, s);
        } finally{
            const s = performance.now() - r;
            N5a.histogram(e, s);
        }
    }
    async setBlobLocallyOnly(e, n, i) {
        const r = performance.now();
        try {
            const s = await this.encryptBlob(i);
            await this.blobStore.setBlobLocallyOnly(e, n, s);
        } finally{
            const s = performance.now() - r;
            N5a.histogram(e, s);
        }
    }
    async flush(e) {
        return await this.blobStore.flush(e);
    }
};

}
