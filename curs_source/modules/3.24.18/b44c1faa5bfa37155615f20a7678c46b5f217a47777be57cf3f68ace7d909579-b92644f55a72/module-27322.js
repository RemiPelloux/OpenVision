"use strict";
require.d(exports, {
    pH: ()=>x,
    Bc: ()=>B,
    hC: ()=>K,
    aq: ()=>de,
    ve: ()=>i.ve,
    We: ()=>i.We,
    wf: ()=>pe,
    cm: ()=>a.cm,
    iE: ()=>ue,
    l9: ()=>ne,
    y_: ()=>M,
    aD: ()=>a.aD,
    Bk: ()=>i.Bk,
    Yy: ()=>oe,
    sh: ()=>_,
    d_: ()=>i.d_,
    h4: ()=>q,
    TU: ()=>v,
    n: ()=>m,
    nk: ()=>a.nk,
    nj: ()=>a.nj,
    Fo: ()=>i.Fo,
    bO: ()=>a.bO,
    CI: ()=>R
});
var n = require("./module-69584.js"), s = require("./module-76222.js");
class o {
}
var i = require("./module-47030.js"), a = require("./module-20600.js"), c = require("./module-37949.js"), l = require("./module-46144.js"), u = require("./module-65716.js");
const d = (0, c.h)("@anysphere/agent-kv:subagent-states"), p = (0, l.Pu)("agent_kv.subagent_state_ref.missing_blob", {
    description: "Subagent state refs whose blob was missing, counted per read until a checkpoint rewrites the ref. fallback=inline kept the entry saved beside the ref (usually a transcript-free summary), dropped omitted the subagent, superseded kept a newer in-memory state.",
    labelNames: [
        "reader",
        "fallback"
    ]
});
function m(e, t) {
    d.warn(e, "Subagent state ref blob not found; restoring without its transcript", t), p.increment(e, 1, {
        reader: t.reader,
        fallback: t.fallback
    });
}
const h = [
    "default",
    "plan",
    "debug",
    "search"
], f = [
    "allowlist",
    "unrestricted",
    "auto-review"
], g = 32, y = /^[0-9a-f]+$/;
function w() {
    const e = new Uint8Array(g);
    return crypto.getRandomValues(e), (0, a.nj)(e);
}
function v(e) {
    return "string" == typeof e && e.length === 2 * g && y.test(e);
}
const _ = (e)=>({
        agentId: e ?? crypto.randomUUID(),
        latestRootBlobId: new Uint8Array,
        name: "New Agent",
        mode: "default",
        isRunEverything: !1,
        approvalMode: void 0,
        createdAt: Date.now(),
        lastUsedModel: void 0,
        lastDebugServerPort: void 0,
        currentPlanUri: void 0,
        subagentInfo: void 0,
        blobEncryptionKey: w()
    });
new Set(h);
new Set(f);
const A = new a.cm(s.kW), S = new a.cm(n.RGk), b = new a.cm(n.kJk), E = new a.cm(n.cmU), I = new a.cm(n.KRq), C = new a.cm(n.oIR), k = new a.cm(n.qKL);
class x {
    constructor(e, t, r = {}){
        this.blobStore = e, this.metadataStore = t, this.serde = new a.cm(n.Y9z), this.conversationStateStructure = new n.Y9z, this.fixedRootBlobId = r.fixedRootBlobId;
    }
    subscribeToMetadata(e, t) {
        return this.metadataStore.subscribe(e, ()=>{
            t(this.metadataStore.get(e));
        });
    }
    setMetadata(e, t) {
        this.metadataStore.set(e, t);
    }
    getMetadata(e) {
        return this.metadataStore.get(e);
    }
    getId() {
        return this.getMetadata("agentId");
    }
    getBlobStore() {
        return this.blobStore;
    }
    getConversationStateStructure() {
        return this.conversationStateStructure;
    }
    async getLastRequestIdFromConversation(e) {
        const t = this.conversationStateStructure.turns;
        if (0 === t.length) return null;
        for(let r = t.length - 1; r >= 0; r--){
            const n = t[r], s = await this.blobStore.getBlob(e, n);
            if (!s) continue;
            const o = E.deserialize(s);
            if ("agentConversationTurn" === o.turn.case) {
                return o.turn.value.requestId ?? null;
            }
        }
        return null;
    }
    async getFullConversation(e) {
        return this.deserializeConversationStateStructure(e, this.conversationStateStructure);
    }
    async deserializeConversationStateStructure(e, t) {
        return async function(e, t, r) {
            const s = new n.ljj, o = [], i = t.turns;
            for (const t of i){
                const s = await r.getBlob(e, t);
                if (!s) continue;
                const i = E.deserialize(s);
                let a;
                switch(i.turn.case){
                    case "agentConversationTurn":
                        {
                            const t = i.turn.value, s = await r.getBlob(e, t.userMessage);
                            if (!s) continue;
                            const o = S.deserialize(s), c = [];
                            for (const n of t.steps){
                                const t = await r.getBlob(e, n);
                                if (t) {
                                    const e = b.deserialize(t);
                                    c.push(e);
                                }
                            }
                            const l = new n.i9c({
                                userMessage: o,
                                steps: c
                            });
                            a = new n.j97({
                                turn: {
                                    case: "agentConversationTurn",
                                    value: l
                                }
                            });
                            break;
                        }
                    case "shellConversationTurn":
                        {
                            const t = i.turn.value, s = await r.getBlob(e, t.shellCommand);
                            if (!s) continue;
                            const o = C.deserialize(s), c = await r.getBlob(e, t.shellOutput);
                            if (!c) continue;
                            const l = k.deserialize(c), u = new n.tms({
                                shellCommand: o,
                                shellOutput: l
                            });
                            a = new n.j97({
                                turn: {
                                    case: "shellConversationTurn",
                                    value: u
                                }
                            });
                            break;
                        }
                }
                a && o.push(a);
            }
            s.turns = o;
            const a = [];
            for (const n of t.todos){
                const t = await r.getBlob(e, n);
                if (t) {
                    const e = A.deserialize(t);
                    a.push(e);
                }
            }
            if (s.todos = a, t.summary) {
                const n = await r.getBlob(e, t.summary);
                if (n) {
                    const e = I.deserialize(n);
                    s.summary = e;
                }
            }
            return s;
        }(e, t, this.blobStore);
    }
    async getFullConversationWithSubagents(e) {
        const t = this.conversationStateStructure, r = await this.deserializeConversationStateStructure(e, t), s = {}, o = await async function(e, t, r) {
            const s = {
                ...t.subagentStates ?? {}
            }, o = Object.entries(t.subagentStateRefs ?? {});
            if (0 === o.length) return s;
            const i = await (0, u.PH)(o, async ([t, s])=>{
                const o = await r.getBlob(e, s);
                if (void 0 === o) return {
                    kind: "missing",
                    subagentId: t,
                    blobIdHex: (0, a.nj)(s)
                };
                try {
                    return {
                        kind: "loaded",
                        subagentId: t,
                        state: n.aK_.fromBinary(o)
                    };
                } catch (e) {
                    return {
                        kind: "failed",
                        error: e
                    };
                }
            }, {
                max: 8
            }), c = i.find((e)=>"failed" === e.kind);
            if (void 0 !== c && "failed" === c.kind) throw c.error;
            for (const t of i)if ("loaded" === t.kind) s[t.subagentId] = t.state;
            else if ("missing" === t.kind) {
                const r = void 0 !== s[t.subagentId];
                m(e, {
                    reader: "resolve",
                    fallback: r ? "inline" : "dropped",
                    subagentId: t.subagentId,
                    blobIdHex: t.blobIdHex
                });
            }
            return s;
        }(e, t, this.blobStore);
        for (const [t, r] of Object.entries(o))if (r.conversationState) {
            const n = await this.deserializeConversationStateStructure(e, r.conversationState);
            s[t] = {
                conversationState: n,
                createdTimestampMs: r.createdTimestampMs,
                lastUsedTimestampMs: r.lastUsedTimestampMs,
                subagentType: r.subagentType
            };
        }
        return {
            conversationState: r,
            subagentStates: s
        };
    }
    getLatestCheckpoint() {
        return this.getConversationStateStructure();
    }
    async handleCheckpoint(e, t) {
        const r = this.serde.serialize(t), n = this.fixedRootBlobId ?? await (0, i.Bk)(r);
        await this.blobStore.setBlob(e, n, r), this.setMetadata("latestRootBlobId", n), this.conversationStateStructure = t;
    }
    async resetFromDb(e) {
        await this.tryResetFromDb(e);
    }
    async tryResetFromDb(e) {
        try {
            const t = this.getMetadata("latestRootBlobId");
            if (!t || 0 === t.length) return this.conversationStateStructure = new n.Y9z, !1;
            const r = await this.blobStore.getBlob(e, t);
            if (!r) return this.conversationStateStructure = new n.Y9z, !1;
            const s = this.serde.deserialize(r);
            return this.conversationStateStructure = s, !0;
        } catch (e) {
            return this.conversationStateStructure = new n.Y9z, !1;
        }
    }
    async dispose() {
        this.blobStore instanceof o && await this.blobStore.dispose();
    }
}
const T = (0, require("./module-33002.js").cF)(Symbol("blob-read-kind"), void 0);
function R(e, t) {
    return e.get(T) === t ? e : e.with(T, t);
}
class B extends Error {
    constructor(e, t){
        super(`This conversation's data is missing and can't be restored. Start a new chat to continue.${function(e) {
            if (0 === e.length) return "";
            const t = e.slice(0, 3).map((e)=>e.slice(0, 12));
            return ` (${1 === e.length ? `missing blob ${t[0]}` : `${e.length} missing blobs: ${t.join(", ")}${e.length > t.length ? ", …" : ""}`})`;
        }(e)}`, void 0 !== t?.cause ? {
            cause: t.cause
        } : void 0), this.isUsageError = !0, this.isBlobNotFound = !0, this.name = "BlobNotFoundError", this.blobIdHexes = [
            ...e
        ];
    }
}
const P = 10;
function J(e) {
    return e instanceof Error && (e instanceof B || !0 === e.isBlobNotFound || "BlobNotFoundError" === e.name);
}
function M(e) {
    let t = e;
    for(let e = 0; e < P; e++){
        if (null == t) return;
        if (J(t)) return t;
        if ("object" != typeof t || !("cause" in t)) return;
        t = t.cause;
    }
}
function q(e) {
    return void 0 !== M(e);
}
"function" == typeof SuppressedError && SuppressedError;
(0, c.h)("@anysphere/agent-kv"), (0, l.v5)("agent_kv.cached.get_blob.duration_ms", {
    description: "Duration of CachedBlobStore getBlob operations in milliseconds"
}), (0, l.v5)("agent_kv.cached.set_blob.duration_ms", {
    description: "Duration of CachedBlobStore setBlob operations in milliseconds"
}), (0, l.v5)("agent_kv.cached.flush.duration_ms", {
    description: "Duration of CachedBlobStore flush operations in milliseconds"
}), (0, l.v5)("agent_kv.cached.cache_bytes", {
    description: "Resident bytes held in the CachedBlobStore in-memory cache, sampled on flush"
}), (0, l.Pu)("agent_kv.cached.get_blob.results", {
    description: "Number of CachedBlobStore getBlob operations by cache result type",
    labelNames: [
        "cache_type"
    ]
}), (0, l.Pu)("agent_kv.nearby.decrypt_errors", {
    description: "Number of nearby blob reads that found ciphertext but failed to decrypt it (wrong encryption key)"
});
const D = (0, l.Pu)("agent_kv.nearby.decrypt_fallback_success", {
    description: "Number of nearby blob reads where the primary encryption key failed but the fallback key decrypted the blob"
}), O = (0, l.v5)("agent_kv.encrypted.get_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore getBlob operations in milliseconds"
}), N = (0, l.v5)("agent_kv.encrypted.set_blob.duration_ms", {
    description: "Duration of EncryptedBlobStore setBlob operations in milliseconds"
});
class F extends Error {
    constructor(e){
        super("Failed to decrypt nearby blob (encryption key mismatch)", {
            cause: e
        }), this.name = "NearbyBlobDecryptError";
    }
}
class U {
    constructor(e, t, r = null){
        this.blobStore = e, this.encryptionKeyStr = t, this.fallbackDecryptKeyStr = r;
    }
    static async deriveKey(e) {
        const t = (new TextEncoder).encode(e), r = await crypto.subtle.digest("SHA-256", t);
        return crypto.subtle.importKey("raw", r, {
            name: U.ALGORITHM,
            length: 256
        }, !0, [
            "encrypt",
            "decrypt"
        ]);
    }
    async getEncryptionKey() {
        return void 0 === this.encryptionKey && (this.encryptionKey = await U.deriveKey(this.encryptionKeyStr)), this.encryptionKey;
    }
    async getFallbackDecryptKey() {
        return null === this.fallbackDecryptKeyStr ? null : (void 0 === this.fallbackDecryptKey && (this.fallbackDecryptKey = await U.deriveKey(this.fallbackDecryptKeyStr)), this.fallbackDecryptKey);
    }
    async getBlob(e, t) {
        const r = performance.now();
        try {
            const r = await this.blobStore.getBlob(e, t);
            if (void 0 === r) return;
            const n = r.slice(0, U.IV_LENGTH), s = r.slice(U.IV_LENGTH);
            let o;
            try {
                o = await crypto.subtle.decrypt({
                    name: U.ALGORITHM,
                    iv: n
                }, await this.getEncryptionKey(), s);
            } catch (t) {
                const r = await this.getFallbackDecryptKey();
                if (null === r) throw new F(t);
                try {
                    o = await crypto.subtle.decrypt({
                        name: U.ALGORITHM,
                        iv: n
                    }, r, s), D.increment(e, 1);
                } catch  {
                    throw new F(t);
                }
            }
            return new Uint8Array(o);
        } finally{
            const t = performance.now() - r;
            O.histogram(e, t);
        }
    }
    async encryptBlob(e) {
        const t = crypto.getRandomValues(new Uint8Array(U.IV_LENGTH)), r = await crypto.subtle.encrypt({
            name: U.ALGORITHM,
            iv: t
        }, await this.getEncryptionKey(), (0, i.Fo)(e)), n = new Uint8Array(t.length + r.byteLength);
        return n.set(t, 0), n.set(new Uint8Array(r), t.length), n;
    }
    async setBlob(e, t, r) {
        const n = performance.now();
        try {
            const n = await this.encryptBlob(r);
            await this.blobStore.setBlob(e, t, n);
        } finally{
            const t = performance.now() - n;
            N.histogram(e, t);
        }
    }
    async setBlobLocallyOnly(e, t, r) {
        const n = performance.now();
        try {
            const n = await this.encryptBlob(r);
            await this.blobStore.setBlobLocallyOnly(e, t, n);
        } finally{
            const t = performance.now() - n;
            N.histogram(e, t);
        }
    }
    async flush(e) {
        return await this.blobStore.flush(e);
    }
}
U.ALGORITHM = "AES-GCM", U.IV_LENGTH = 12;
var L = require("./module-98875.js"), $ = require("./module-54386.js"), Q = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, j = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const G = (0, c.h)("ControlledKvManager");
function H(e, t, r) {
    return e ? (0, L.F)({
        traceId: e.traceId,
        spanId: e.spanId,
        traceFlags: e.traceFlags ?? 1
    }, t, r) : r;
}
function z(e, t, r, n, s) {
    s <= r || (0, L.xd)(e.withName(`${t}.slow`), {
        startTime: n,
        attributes: {
            durationMs: s,
            slowThresholdMs: r
        }
    }, n + s);
}
const W = (0, l.v5)("agent_kv.controlled.get_blob.duration_ms", {
    description: "Duration of ControlledKvManager getBlob operations in milliseconds"
}), V = (0, l.v5)("agent_kv.controlled.set_blob.duration_ms", {
    description: "Duration of ControlledKvManager setBlob operations in milliseconds"
});
class K {
    constructor(e, t, r, n = {}){
        this.serverStream = e, this.clientStream = t, this.blobStore = r, this.options = n;
    }
    async run(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = Q(t, (0, L.VI)(e.withName("ControlledKvManager.run")), !1).ctx, n = new Set, s = (e)=>{
                n.add(e), e.finally(()=>{
                    n.delete(e);
                });
            };
            try {
                for await (const e of this.serverStream){
                    const t = performance.now(), n = Date.now();
                    switch(e.message.case){
                        case "getBlobArgs":
                            {
                                const o = e.message.value.blobId;
                                s((async ()=>{
                                    const s = H(e.spanContext, "ControlledKvManager.getBlob", r);
                                    try {
                                        await this.options.beforeGetBlob?.(s, o);
                                        const t = await this.blobStore.getBlob(s, o);
                                        await this.clientStream.write(new $.gm({
                                            id: e.id,
                                            message: {
                                                case: "getBlobResult",
                                                value: {
                                                    blobData: t ? (0, i.Fo)(t) : void 0
                                                }
                                            }
                                        }));
                                    } catch (t) {
                                        G.error(s, "Error handling getBlob", t);
                                        const r = t instanceof Error ? t.message : String(t);
                                        try {
                                            await this.clientStream.write(new $.gm({
                                                id: e.id,
                                                message: {
                                                    case: "getBlobResult",
                                                    value: {
                                                        blobData: void 0,
                                                        error: {
                                                            message: r
                                                        }
                                                    }
                                                }
                                            }));
                                        } catch (e) {
                                            G.error(s, "Error writing failed getBlobResult", e);
                                        }
                                    } finally{
                                        const e = performance.now() - t;
                                        W.histogram(s, e), z(s, "ControlledKvManager.getBlob", 50, n, e);
                                    }
                                })());
                                break;
                            }
                        case "setBlobArgs":
                            {
                                const o = e.message.value.blobId, i = e.message.value.blobData;
                                s((async ()=>{
                                    const s = H(e.spanContext, "ControlledKvManager.setBlob", r);
                                    try {
                                        await this.blobStore.setBlob(s, o, i), await this.clientStream.write(new $.gm({
                                            id: e.id,
                                            message: {
                                                case: "setBlobResult",
                                                value: {
                                                    error: void 0
                                                }
                                            }
                                        }));
                                    } catch (t) {
                                        const r = t instanceof Error ? t.message : String(t);
                                        try {
                                            await this.clientStream.write(new $.gm({
                                                id: e.id,
                                                message: {
                                                    case: "setBlobResult",
                                                    value: {
                                                        error: {
                                                            message: r
                                                        }
                                                    }
                                                }
                                            }));
                                        } catch (e) {
                                            G.error(s, "Error writing setBlobResult", e);
                                        }
                                    } finally{
                                        const e = performance.now() - t;
                                        V.histogram(s, e), z(s, "ControlledKvManager.setBlob", 100, n, e);
                                    }
                                })());
                                break;
                            }
                    }
                }
            } finally{
                await Promise.allSettled(n);
            }
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            j(t);
        }
    }
}
var Y = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Z = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const X = (0, c.h)("@anysphere/agent-kv"), ee = (0, l.v5)("agent_kv.writethrough.get_blob.duration_ms", {
    description: "Duration of WritethroughBlobStore getBlob operations in milliseconds"
}), te = (0, l.v5)("agent_kv.writethrough.set_blob.duration_ms", {
    description: "Duration of WritethroughBlobStore setBlob operations in milliseconds"
}), re = (0, l.v5)("agent_kv.writethrough.flush.duration_ms", {
    description: "Duration of WritethroughBlobStore flush operations in milliseconds"
});
class ne {
    constructor(e, t){
        this.primaryStore = e, this.secondaryStore = t;
    }
    async getBlob(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = Y(r, (0, L.VI)(e.withName("WritethroughBlobStore.getBlob")), !1), s = performance.now();
            try {
                return await this.primaryStore.getBlob(n.ctx, t);
            } finally{
                const t = performance.now() - s;
                ee.histogram(e, t);
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Z(r);
        }
    }
    async setBlob(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = Y(n, (0, L.VI)(e.withName("WritethroughBlobStore.setBlob")), !1), o = performance.now();
            try {
                await this.writeBothStores(s.ctx, t, r, {
                    awaitSecondary: !1
                });
            } finally{
                const t = performance.now() - o;
                te.histogram(e, t);
            }
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Z(n);
        }
    }
    async setBlobAwaitingSecondary(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = Y(n, (0, L.VI)(e.withName("WritethroughBlobStore.setBlobAwaitingSecondary")), !1), o = performance.now();
            try {
                await this.writeBothStores(s.ctx, t, r, {
                    awaitSecondary: !0
                });
            } finally{
                const t = performance.now() - o;
                te.histogram(e, t);
            }
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Z(n);
        }
    }
    async writeBothStores(e, t, r, n) {
        const s = this.primaryStore.setBlob(e, t, r), o = this.secondaryStore.setBlob(e, t, r).catch((t)=>{
            X.error(e, "Secondary store write failed in WritethroughBlobStore", t);
        });
        await s, n.awaitSecondary && (await o, await this.secondaryStore.flush(e).catch((t)=>{
            X.error(e, "Secondary store flush failed in WritethroughBlobStore.setBlobAwaitingSecondary", t);
        }));
    }
    async setBlobLocallyOnly(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = Y(n, (0, L.VI)(e.withName("WritethroughBlobStore.setBlobLocallyOnly")), !1);
            return this.setBlob(s.ctx, t, r);
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Z(n);
        }
    }
    async flush(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = Y(t, (0, L.VI)(e.withName("WritethroughBlobStore.flush")), !1), n = performance.now();
            try {
                const e = this.primaryStore.flush(r.ctx);
                this.secondaryStore.flush(r.ctx).catch((e)=>{
                    X.error(r.ctx, "Secondary store flush failed in WritethroughBlobStore", e);
                });
                await e;
            } finally{
                const t = performance.now() - n;
                re.histogram(e, t);
            }
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            Z(t);
        }
    }
    isBlobDurable(e) {
        return this.primaryStore.isBlobDurable?.(e) ?? !0;
    }
}
const se = Symbol.for("anysphere.blobMetadataCallback");
function oe(e) {
    if (se in e) return e[se];
}
const ie = (0, c.h)("@anysphere/agent-kv:reference"), ae = (0, l.Pu)("agent_kv.lazy_reference.cache_miss", {
    description: "Number of large or slow LazyReference cache misses that require loading and deserializing a blob",
    labelNames: [
        "blob_type"
    ]
}), ce = (0, l.v5)("agent_kv.lazy_reference.deserialize_bytes", {
    description: "Blob byte size loaded on a large or slow LazyReference deserialize cache miss",
    labelNames: [
        "blob_type"
    ]
}), le = (0, l.v5)("agent_kv.lazy_reference.deserialize_ms", {
    description: "Time spent deserializing a blob on a large or slow LazyReference cache miss",
    labelNames: [
        "blob_type"
    ]
});
class ue {
}
class de {
    constructor(e, t, r){
        this.serde = e, this.blobStore = t, this.lastWrittenValue = void 0, this.value = r;
    }
    get(e) {
        return Promise.resolve(this.value);
    }
    set(e) {
        this.value = e;
    }
    async writeToBlobStore(e) {
        if (this.value instanceof ue) return this.value.writeToBlobStore(e);
        if (this.value === this.lastWrittenValue?.value) return (0, i.d_)(this.blobStore, this.lastWrittenValue.blobId) || await this.blobStore.setBlob(e, this.lastWrittenValue.blobId, this.lastWrittenValue.blobData), this.lastWrittenValue.blobId;
        const t = this.serde.serialize(this.value), r = await (0, i.Bk)(t), n = oe(this.blobStore), s = this.serde.getBlobType?.();
        return n && s && n({
            blobId: r,
            blobType: s
        }), await this.blobStore.setBlob(e, r, t), this.lastWrittenValue = {
            value: this.value,
            blobId: r,
            blobData: t
        }, r;
    }
}
class pe {
    constructor(e, t, r){
        this.serde = e, this.blobStore = t, this.blobId = r, this.valuePromise = void 0, this.lastWrittenValue = void 0, this.lastWrittenBlobData = void 0;
    }
    async get(e) {
        if (void 0 === this.valuePromise) {
            const t = function(e) {
                const t = e.getBlobType?.();
                if (void 0 === t) return "unknown";
                switch(t.kind){
                    case "proto":
                        return t.typeName;
                    case "json":
                        return "json";
                    case "string":
                        return "string";
                    case "image":
                        return `image:${t.mimeType}`;
                    case "file":
                        return t.mimeType ? `file:${t.mimeType}` : "file";
                    default:
                        return t;
                }
            }(this.serde), r = function(e, t) {
                return void 0 === e.get(T) ? e.with(T, t) : e;
            }(e, "lazy_reference");
            this.valuePromise = this.blobStore.getBlob(r, this.blobId).then((r)=>{
                if (void 0 === r) throw new B([
                    (0, a.nj)(this.blobId)
                ]);
                const n = performance.now(), s = this.serde.deserialize(r);
                this.lastWrittenBlobData = r;
                const o = performance.now() - n;
                return (r.byteLength >= 524288 || o >= 100) && (ae.increment(e, 1, {
                    blob_type: t
                }), ce.histogram(e, r.byteLength, {
                    blob_type: t
                }), le.histogram(e, o, {
                    blob_type: t
                }), ie.warn(e, "Large lazy reference deserialize", {
                    blobType: t,
                    blobBytes: r.byteLength,
                    deserializeDurationMs: o
                })), s;
            }), this.valuePromise.then((e)=>{
                this.lastWrittenValue = e;
            }, ()=>{});
        }
        return this.valuePromise;
    }
    set(e) {
        this.valuePromise = Promise.resolve(e);
    }
    async writeToBlobStore(e) {
        if (void 0 === this.valuePromise) return this.blobId;
        const t = await this.get(e);
        if (t instanceof ue) return t.writeToBlobStore(e);
        if (t === this.lastWrittenValue) return void 0 === this.lastWrittenBlobData || (0, i.d_)(this.blobStore, this.blobId) || await this.blobStore.setBlob(e, this.blobId, this.lastWrittenBlobData), this.blobId;
        const r = this.serde.serialize(t), n = await (0, i.Bk)(r), s = oe(this.blobStore), o = this.serde.getBlobType?.();
        return s && o && s({
            blobId: n,
            blobType: o
        }), await this.blobStore.setBlob(e, n, r), this.lastWrittenValue = t, this.lastWrittenBlobData = r, this.blobId = n, n;
    }
}
"function" == typeof SuppressedError && SuppressedError;
(0, c.h)("RetryBlobStore"), (0, l.Pu)("agent_kv.retry.retries", {
    description: "Number of RetryBlobStore retry attempts (one per re-issued operation, not counting the first try)",
    labelNames: [
        "operation",
        "outcome"
    ]
}), (0, l.v5)("agent_kv.retry.get_blob.duration_ms", {
    description: "Duration of RetryBlobStore getBlob operations in milliseconds"
}), (0, l.v5)("agent_kv.retry.set_blob.duration_ms", {
    description: "Duration of RetryBlobStore setBlob operations in milliseconds"
}), (0, l.v5)("agent_kv.retry.set_blob_locally_only.duration_ms", {
    description: "Duration of RetryBlobStore setBlobLocallyOnly operations in milliseconds"
}), (0, l.v5)("agent_kv.retry.flush.duration_ms", {
    description: "Duration of RetryBlobStore flush operations in milliseconds"
});
