import { C2, Wj, aYs, xee } from "./De_3.js";
import { MMn } from "./blob-store.ts";
import { Yu } from "./browser.ts";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { x } from "./tslib.es6.js";
var Ffv, Bfv, Ufv, $fv, Hfv, Wfv, Gfv, u2u, d2u, cYs, lYs, Vfv;
export { $fv, Bfv, Ffv, Gfv, Hfv, Ufv, Vfv, Wfv, cYs, d2u, lYs, u2u };
var __wakaru_jfv_initialized = false;
export function jfv() {
if (__wakaru_jfv_initialized) return;
__wakaru_jfv_initialized = true;
"use strict";
x(), Gp(), mde(), Yu(), MMn(), Ffv = Wj("@anysphere/agent-kv"), Bfv = C2("agent_kv.cached.get_blob.duration_ms", {
    description: "Duration of CachedBlobStore getBlob operations in milliseconds"
}), Ufv = C2("agent_kv.cached.set_blob.duration_ms", {
    description: "Duration of CachedBlobStore setBlob operations in milliseconds"
}), $fv = C2("agent_kv.cached.flush.duration_ms", {
    description: "Duration of CachedBlobStore flush operations in milliseconds"
}), Hfv = C2("agent_kv.cached.cache_bytes", {
    description: "Resident bytes held in the CachedBlobStore in-memory cache, sampled on flush"
}), Wfv = xee("agent_kv.cached.get_blob.results", {
    description: "Number of CachedBlobStore getBlob operations by cache result type",
    labelNames: [
        "cache_type"
    ]
}), Gfv = xee("agent_kv.nearby.decrypt_errors", {
    description: "Number of nearby blob reads that found ciphertext but failed to decrypt it (wrong encryption key)"
}), u2u = xee("agent_kv.nearby.decrypt_fallback_success", {
    description: "Number of nearby blob reads where the primary encryption key failed but the fallback key decrypted the blob"
}), d2u = C2("agent_kv.encrypted.get_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore getBlob operations in milliseconds"
}), cYs = C2("agent_kv.encrypted.set_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore setBlob operations in milliseconds"
}), lYs = class extends Error {
    constructor(e){
        super("Failed to decrypt nearby blob (encryption key mismatch)", {
            cause: e
        }), this.name = "NearbyBlobDecryptError";
    }
}, Vfv = class _Oe {
    constructor(t, n, i = null){
        this.blobStore = t, this.encryptionKeyStr = n, this.fallbackDecryptKeyStr = i;
    }
    static{
        this.ALGORITHM = "AES-GCM";
    }
    static{
        this.IV_LENGTH = 12;
    }
    static async deriveKey(t) {
        const i = new TextEncoder().encode(t), r = await crypto.subtle.digest("SHA-256", i);
        return crypto.subtle.importKey("raw", r, {
            name: _Oe.ALGORITHM,
            length: 256
        }, !0, [
            "encrypt",
            "decrypt"
        ]);
    }
    async getEncryptionKey() {
        return this.encryptionKey === void 0 && (this.encryptionKey = await _Oe.deriveKey(this.encryptionKeyStr)), this.encryptionKey;
    }
    async getFallbackDecryptKey() {
        return this.fallbackDecryptKeyStr === null ? null : (this.fallbackDecryptKey === void 0 && (this.fallbackDecryptKey = await _Oe.deriveKey(this.fallbackDecryptKeyStr)), this.fallbackDecryptKey);
    }
    async getBlob(t, n) {
        const i = performance.now();
        try {
            const r = await this.blobStore.getBlob(t, n);
            if (r === void 0) return;
            const s = r.slice(0, _Oe.IV_LENGTH), o = r.slice(_Oe.IV_LENGTH);
            let a;
            try {
                a = await crypto.subtle.decrypt({
                    name: _Oe.ALGORITHM,
                    iv: s
                }, await this.getEncryptionKey(), o);
            } catch (c) {
                const l = await this.getFallbackDecryptKey();
                if (l === null) throw new lYs(c);
                try {
                    a = await crypto.subtle.decrypt({
                        name: _Oe.ALGORITHM,
                        iv: s
                    }, l, o), u2u.increment(t, 1);
                } catch  {
                    throw new lYs(c);
                }
            }
            return new Uint8Array(a);
        } finally{
            const r = performance.now() - i;
            d2u.histogram(t, r);
        }
    }
    async encryptBlob(t) {
        const n = crypto.getRandomValues(new Uint8Array(_Oe.IV_LENGTH)), i = await crypto.subtle.encrypt({
            name: _Oe.ALGORITHM,
            iv: n
        }, await this.getEncryptionKey(), aYs(t)), r = new Uint8Array(n.length + i.byteLength);
        return r.set(n, 0), r.set(new Uint8Array(i), n.length), r;
    }
    async setBlob(t, n, i) {
        const r = performance.now();
        try {
            const s = await this.encryptBlob(i);
            await this.blobStore.setBlob(t, n, s);
        } finally{
            const s = performance.now() - r;
            cYs.histogram(t, s);
        }
    }
    async setBlobLocallyOnly(t, n, i) {
        const r = performance.now();
        try {
            const s = await this.encryptBlob(i);
            await this.blobStore.setBlobLocallyOnly(t, n, s);
        } finally{
            const s = performance.now() - r;
            cYs.histogram(t, s);
        }
    }
    async flush(t) {
        return await this.blobStore.flush(t);
    }
};

}
