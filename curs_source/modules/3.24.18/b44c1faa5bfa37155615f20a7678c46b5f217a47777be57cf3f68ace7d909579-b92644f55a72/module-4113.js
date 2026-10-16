"use strict";
require.d(exports, {
    wB: ()=>us,
    mJ: ()=>ds,
    qU: ()=>ps
});
var n = require("./module-9639.js"), s = require("./module-37949.js"), o = require("./module-33002.js"), i = require("./module-17392.js"), a = require("./module-60431.js"), c = require("./module-65588.js"), l = require("./module-17714.js"), u = require("./module-77213.js"), d = require("./module-31791.js"), p = require("./module-4410.js"), m = require("./module-5326.js"), h = require("./module-76263.js"), f = require("./module-46421.js"), g = require("./module-95750.js"), y = require("./module-1025.js");
var w = require("./module-67360.js"), v = require("./module-87339.js");
async function _(e, t = {}) {
    if ("external" === e.kind) {
        const t = e.agentTransport;
        return {
            agentClient: new i.PW({
                run: (e, r, n)=>t.run(e, r, n)
            }, e.agentBackendUrl),
            dispose: ()=>{}
        };
    }
    const r = await async function(e) {
        const t = {
            credentialManager: e.credentialManager,
            backendUrl: e.backendUrl,
            agentBackendUrl: e.agentBackendUrl,
            clientIdentity: e.clientIdentity,
            enabledFeatureGates: e.enabledFeatureGates
        }, r = e.createNetworkHost?.(t) ?? (0, v.Z)((0, w.W)(t), {
            clientIdentity: t.clientIdentity
        });
        return await r.initialize(), r;
    }(e), n = void 0 !== t.createNetworkAgentClient ? await t.createNetworkAgentClient(r) : await async function(e, t = {}) {
        const r = e, n = t.createTransportHandler ?? ((e)=>new c.AiConnectTransportHandler(e)), s = t.createContextClient ?? ((e, t)=>(0, a.Zj)(e, t)), o = t.createConnectClient ?? f.UU, w = t.createAgentClient ?? ((e, t)=>new i.PW(e, t)), v = t.loadBackgroundComposerService ?? (async ()=>d.BackgroundComposerService), _ = n(r), A = _.isSetup.then(()=>{});
        let S;
        var b, E;
        void 0 === r.getCursorAuthToken() && void 0 !== r.getCursorCreds() ? (b = _, E = A, S = {
            unary: async (e, t, r, n, s, o, i)=>(await E, b.getTransport().unary(e, t, r, n, s, o, i)),
            stream: async (e, t, r, n, s, o, i)=>(await E, b.getTransport().stream(e, t, r, n, s, o, i))
        }) : (await A, S = _.getTransport());
        const I = r.getCursorCreds()?.agentBackendUrlNonPrivacy.default ?? r.getCursorCreds()?.backendUrl ?? "", C = s(l.AgentService, S), k = (0, g.u)({
            run: (e, t, r)=>C.run(e, t, r)
        });
        let x;
        const T = w(void 0 === t.wrapAgentTransport ? k : t.wrapAgentTransport(k), I), R = {
            transport: S,
            isHttp2TransportFor: (e)=>_.isHttp2TransportFor(e)
        }, B = void 0 === t.wrapInferenceTransport ? R : t.wrapInferenceTransport(R), P = o(p.InferenceService, B.transport), J = o(u.AiService, B.transport), M = {
            runWebSearch: J.runWebSearch,
            runWebFetch: J.runWebFetch,
            runGenerateImage: J.runGenerateImage,
            runGenerateVideo: J.runGenerateVideo,
            runXSearch: J.runXSearch,
            codebaseSearch: o(h.RepositoryService, B.transport),
            smartModeClassifier: J
        }, q = new y.ZC(r, o(m.PrivateInferenceService, B.transport)), D = o(l.AgentService, B.transport);
        return {
            client: T,
            transport: S,
            inferenceTransport: B.transport,
            managedInferenceClient: P,
            managedAgentToolsClient: M,
            managedAgentServiceClient: D,
            privateInferenceBackend: q,
            backgroundComposerClientProvider: ()=>(x ??= Promise.resolve().then(()=>v()).then((e)=>o(e, S)).catch((e)=>{
                    throw x = void 0, e;
                }), x),
            transportReady: A,
            dispose: ()=>{
                q.dispose(), _.dispose(), e.dispose?.();
            }
        };
    }(r, {
        ...void 0 === e.wrapAgentTransport ? {} : {
            wrapAgentTransport: e.wrapAgentTransport
        },
        ...void 0 === e.wrapInferenceTransport ? {} : {
            wrapInferenceTransport: e.wrapInferenceTransport
        }
    });
    return void 0 !== n.transport && void 0 !== e.onConnectTransportReady && e.onConnectTransportReady(n.transport), {
        agentClient: n.client,
        managedInferenceClient: n.managedInferenceClient,
        managedAgentToolsClient: n.managedAgentToolsClient,
        managedAgentServiceClient: n.managedAgentServiceClient,
        inferenceTransport: n.inferenceTransport,
        privateInferenceBackend: n.privateInferenceBackend,
        backgroundComposerClientProvider: n.backgroundComposerClientProvider,
        runtimeCapabilities: r,
        dispose: ()=>n.dispose()
    };
}
var A = require("./module-84959.js"), S = require("./module-92801.js");
const b = "InferenceService.RunInference is not enabled for this account";
class E {
    constructor(){
        this.latched = !1, this.denials = 0, this.gateReadOff = !1;
    }
    recordDenial() {
        this.latched || (this.latched = !0, this.denials += 1, this.gateReadOff = !1);
    }
    observeGate(e) {
        return !!this.latched && (e ? this.gateReadOff && 1 === this.denials && (this.latched = !1) : this.gateReadOff = !0, this.latched);
    }
}
class I extends i.SK {
    constructor(e){
        super("The local agent loop was turned off for this account during the turn", {
            cause: e,
            displayInfo: {
                title: "Local agent loop turned off",
                detail: "The local agent loop was turned off for your account while this turn was running. Resume to continue on the backend loop.",
                isRetryable: !0
            }
        });
    }
}
var C = require("./module-51635.js"), k = require("./module-56151.js"), x = require("./module-77598.js"), T = require("./module-45904.js"), R = require("./module-81958.js");
const B = 524288, P = 3e4, J = 1e3, M = R.Ik({
    token: R.Yj().min(1),
    expiresAt: R.ai().finite(),
    retryAt: R.ai().finite(),
    failures: R.ai().int().min(0).max(10)
}), q = "~turn";
class D {
    constructor(e){
        this.options = e, this.disposed = !1, this.identityVersion = 0, this.flushAgain = !1;
    }
    start() {
        this.disposed || void 0 !== this.identitySubscription || (this.identitySubscription = this.options.backend.onDidChangeIdentity(()=>{
            this.identityVersion++, this.cancelRequest?.(), this.schedule(0);
        }), this.schedule(0));
    }
    enqueue(e, t) {
        if (0 === t.usageUuid.length || 0 === t.invocationId.length) throw new Error("Private inference usage requires a complete identity");
        this.enqueueRecord(e, {
            kind: "invocation",
            value: t
        });
    }
    enqueueTurn(e, t) {
        if (0 === t.usageUuid.length) throw new Error("Private inference turn outcome requires a usage id");
        this.enqueueRecord(e, {
            kind: "turn",
            value: t
        });
    }
    enqueueRecord(e, t) {
        if (this.disposed) throw new Error("Private inference usage outbox is disposed");
        if (0 === e.authId.length || 0 === e.backendUrl.length) throw new Error("Private inference usage requires a complete identity");
        if (L(t) > B) throw new Error("Private inference usage record exceeds batch size");
        const r = N(e, t), n = t.value.toJsonString();
        this.options.store.transaction(()=>{
            const e = this.options.store.items.get(r);
            if (void 0 !== e && e !== n) throw new Error(`Conflicting private inference usage ${t.kind}`);
            void 0 === e && this.options.store.items.set(r, n);
        }), this.start(), this.schedule(0);
    }
    flush() {
        if (this.disposed) return Promise.resolve();
        if (void 0 !== this.inFlight) return this.inFlight;
        this.start(), this.cancelScheduled(), this.flushAgain = !1;
        let e = J;
        return this.inFlight = this.flushOnce().then((t)=>{
            e = t;
        }).finally(()=>{
            this.inFlight = void 0, this.schedule(this.flushAgain ? 0 : e);
        }), this.inFlight;
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.identitySubscription?.dispose(), this.identitySubscription = void 0, this.cancelScheduled(), this.cancelRequest?.(), this.cancelRequest = void 0);
    }
    async flushOnce() {
        const [e, t] = (0, o.q6)().withTimeoutAndCancel(2e4);
        this.cancelRequest = t;
        const r = this.identityVersion;
        let n;
        try {
            const t = await $(e, ()=>this.options.backend.getIdentity());
            if (e.canceled) throw e.reason;
            if (void 0 === t || 0 === this.options.store.items.keys(O("pending", t)).length) return P;
            const r = this.claimLease(t);
            if ("waitMs" in r) return r.waitMs;
            n = r;
            const s = this.readBatch(t);
            if (e.canceled || Date.now() >= n.expiresAt) throw new Error("Private inference usage flush lease expired");
            if (s.length > 0 && await $(e, ()=>this.options.backend.reportUsage(t, U(s), e.signal)), e.canceled) throw e.reason;
            return this.settleLease(n, s), s.length > 0 && this.countFlush("sent"), s.length > 0 ? 0 : P;
        } catch (e) {
            if (this.disposed) return P;
            let t = J;
            if (void 0 !== n) try {
                t = this.settleLease(n);
            } catch (e) {
                this.options.onError(e);
            }
            return r !== this.identityVersion ? (this.countFlush("superseded"), 0) : (this.countFlush("failed", function(e) {
                if (e instanceof S.T) return A.C[e.code] ?? "Unknown";
                if (e instanceof Error) return "" === e.name ? "Error" : e.name;
                return "Unknown";
            }(e)), this.options.onError(e), t);
        } finally{
            t(), this.cancelRequest = void 0;
        }
    }
    claimLease(e) {
        const t = O("coordination", e);
        return this.options.store.transaction(()=>{
            const e = M.optional().parse(this.options.store.items.get(t)), r = Date.now(), n = Math.max(e?.expiresAt ?? 0, e?.retryAt ?? 0);
            if (n > r) return {
                waitMs: Math.min(P, n - r)
            };
            const s = {
                token: (0, x.randomUUID)(),
                expiresAt: r + 6e4,
                retryAt: 0,
                failures: e?.failures ?? 0
            };
            return this.options.store.items.set(t, s), {
                key: t,
                token: s.token,
                expiresAt: s.expiresAt
            };
        });
    }
    readBatch(e) {
        const t = [];
        let r = 0;
        const n = this.options.store.items.keys(O("pending", e)).slice(0, 50);
        for (const s of n){
            const n = this.options.store.items.get(s);
            if (void 0 === n) continue;
            if ("string" != typeof n) throw new Error("Invalid private inference usage record");
            const o = F(s, n);
            if (N(e, o) !== s) throw new Error("Private inference usage record identity mismatch");
            const i = L(o);
            if (i > B) throw new Error("Private inference usage record exceeds batch size");
            if (r + i > B) break;
            r += i, t.push({
                key: s,
                json: n,
                record: o
            });
        }
        return t;
    }
    settleLease(e, t) {
        return this.options.store.transaction(()=>{
            const r = M.optional().parse(this.options.store.items.get(e.key)), n = Date.now();
            if (r?.token !== e.token || r.expiresAt <= n) return 0;
            if (void 0 !== t) {
                for (const e of t){
                    const t = this.options.store.items.get(e.key);
                    if (void 0 !== t && t !== e.json) throw new Error("Private inference usage changed during upload");
                    void 0 !== t && this.options.store.items.delete(e.key);
                }
                return this.options.store.items.delete(e.key), 0;
            }
            const s = Math.min(3e5, J * 2 ** r.failures);
            return this.options.store.items.set(e.key, {
                ...r,
                expiresAt: 0,
                retryAt: n + s,
                failures: Math.min(10, r.failures + 1)
            }), s;
        });
    }
    schedule(e) {
        if (this.disposed) return;
        if (void 0 !== this.inFlight) return void (this.flushAgain = !0);
        const t = Date.now() + e;
        if (void 0 !== this.scheduled && this.scheduled.at <= t) return;
        this.cancelScheduled();
        const [r, n] = (0, o.q6)().withTimeoutAndCancel(e), s = {
            at: t,
            cancel: n
        };
        this.scheduled = s, (0, o.uk)(r).then(()=>{
            this.scheduled !== s || this.disposed || (this.scheduled = void 0, this.flush().catch(this.options.onError));
        });
    }
    cancelScheduled() {
        const e = this.scheduled;
        this.scheduled = void 0, e?.cancel();
    }
    countFlush(e, t) {
        try {
            this.options.metrics?.increment?.({
                stat: "agent_host.private_inference.usage_flush",
                value: 1,
                tags: void 0 === t ? {
                    outcome: e
                } : {
                    outcome: e,
                    reason: t
                }
            });
        } catch (e) {
            this.options.onError(e);
        }
    }
}
function O(e, t) {
    return `private-inference-usage/v1/${e}/${encodeURIComponent(t.authId)}/${encodeURIComponent(t.backendUrl)}/`;
}
function N(e, t) {
    const r = `${O("pending", e)}${encodeURIComponent(t.value.usageUuid)}/`;
    return "invocation" === t.kind ? `${r}${encodeURIComponent(t.value.invocationId)}` : `${r}${q}`;
}
function F(e, t) {
    return e.endsWith(`/${q}`) ? {
        kind: "turn",
        value: T.YN.fromJsonString(t, {
            ignoreUnknownFields: !0
        })
    } : {
        kind: "invocation",
        value: T.u0.fromJsonString(t, {
            ignoreUnknownFields: !0
        })
    };
}
function U(e) {
    const t = new T.Ln;
    for (const { record: r } of e)"invocation" === r.kind ? t.invocations.push(r.value) : t.turns.push(r.value);
    return t;
}
function L(e) {
    return U([
        {
            key: "",
            json: "",
            record: e
        }
    ]).toBinary().byteLength;
}
function $(e, t) {
    return e.canceled ? Promise.reject(e.reason) : new Promise((r, n)=>{
        const s = ()=>n(e.reason);
        e.signal.addEventListener("abort", s, {
            once: !0
        });
        try {
            t().then(r, n).finally(()=>e.signal.removeEventListener("abort", s));
        } catch (t) {
            e.signal.removeEventListener("abort", s), n(t);
        }
    });
}
var Q = require("./module-35068.js"), j = require("./module-84304.js");
function G(e, t) {
    let r = e;
    return void 0 !== t.requestId && (r = r.with(j.ku, t.requestId)), void 0 !== t.parentRequestId && (r = r.with(j.UI, t.parentRequestId)), void 0 !== t.rootParentRequestId && (r = r.with(j.OR, t.rootParentRequestId)), r;
}
var H = require("./module-34472.js");
const z = [
    [
        "IS_CLOUD_AGENT",
        "true"
    ],
    [
        "EVERYSPHERE_DEV_IN_CLOUD",
        "1"
    ]
];
var W = require("./module-31421.js");
class V extends Error {
    constructor(){
        super(...arguments), this.name = "LlmGatewayCredentialError";
    }
}
function K(e, t) {
    const r = e.trim();
    return "" === r ? Promise.reject(new V("LLM Gateway credential helper command must not be empty")) : !0 === t.signal?.aborted ? Promise.reject(new V("LLM Gateway credential helper run was aborted")) : new Promise((e, n)=>{
        const s = "win32" === process.platform ? (0, W.spawn)("cmd.exe", [
            "/d",
            "/s",
            "/c",
            `"${r}"`
        ], {
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            windowsHide: !0,
            windowsVerbatimArguments: !0
        }) : (0, W.spawn)("/bin/sh", [
            "-c",
            r
        ], {
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            detached: !0
        }), o = [], i = [];
        let a = 0, c = 0, l = !1;
        const u = (e)=>{
            l || (l = !0, clearTimeout(h), clearTimeout(m), t.signal?.removeEventListener("abort", p), n(e));
        }, d = (e)=>{
            (()=>{
                if ("win32" !== process.platform) {
                    if (void 0 !== s.pid) try {
                        return void process.kill(-s.pid, "SIGKILL");
                    } catch  {}
                    s.kill("SIGKILL");
                } else void 0 !== s.pid ? (0, W.spawn)("taskkill", [
                    "/pid",
                    String(s.pid),
                    "/t",
                    "/f"
                ], {
                    stdio: "ignore",
                    windowsHide: !0
                }).on("error", ()=>{
                    s.kill("SIGKILL");
                }) : s.kill("SIGKILL");
            })(), s.stdout.destroy(), s.stderr.destroy(), u(e);
        }, p = ()=>{
            d(new V("LLM Gateway credential helper run was aborted"));
        };
        let m;
        t.signal?.addEventListener("abort", p, {
            once: !0
        });
        const h = setTimeout(()=>{
            if (0 === s.exitCode) return m = setTimeout(()=>{
                l || d(new V("LLM Gateway credential helper exited successfully but left child processes holding stdout past the deadline; helper scripts must not let background children inherit stdout (for example, redirect them to /dev/null)"));
            }, 250), void m.unref?.();
            d(new V(`LLM Gateway credential helper timed out after ${t.timeoutMs}ms`));
        }, t.timeoutMs);
        h.unref?.(), s.stdout.on("data", (e)=>{
            const r = Buffer.from(e);
            a += r.length, a > t.maxOutputBytes ? d(new V(`LLM Gateway credential helper exceeded the ${t.maxOutputBytes}-byte output limit`)) : o.push(r);
        }), s.stderr.on("data", (e)=>{
            if (c >= 8192) return;
            const t = Buffer.from(e);
            c += t.length, i.push(t);
        }), s.on("error", (e)=>{
            u(new V("LLM Gateway credential helper failed to start", {
                cause: e
            }));
        }), s.on("close", (r, n)=>{
            if (l) return;
            if (0 === r) return l = !0, clearTimeout(h), clearTimeout(m), t.signal?.removeEventListener("abort", p), void e(Buffer.concat(o).toString("utf8"));
            const s = Buffer.concat(i).toString("utf8");
            u(new V(`LLM Gateway credential helper exited unsuccessfully: ${function(e, t) {
                if (null !== e) return `exit code ${e}`;
                return null !== t ? `signal ${t}` : "unknown exit status";
            }(r, n)}${function(e) {
                const t = e.trim();
                if (!t) return "";
                return `; stderr: ${(r = t, r.replace(/[A-Za-z0-9_./+=-]{24,}/gu, "[redacted]")).slice(0, 1e3)}`;
                var r;
            }(s)}`));
        });
    });
}
function Y(e, t = {}) {
    const r = t.now ?? Date.now, n = t.runHelper ?? K, s = e.timeoutMs ?? 1e4, o = e.maxOutputBytes ?? 1048576;
    let i, a;
    const c = async (t)=>{
        const a = await n(e.helperCommand, {
            timeoutMs: s,
            maxOutputBytes: o,
            signal: t
        });
        if (t.aborted) throw new V("LLM Gateway credential helper run was cancelled");
        const c = a.trim();
        if ("" === c) throw new V("LLM Gateway credential helper produced empty output");
        if (/[\r\n]/u.test(c)) throw new V("LLM Gateway credential helper produced multi-line output");
        return i = {
            value: c,
            expiresAtMs: r() + e.ttlMs
        }, c;
    };
    return {
        getCredential ({ signal: e }) {
            if (e.aborted) return Promise.reject(new V("LLM Gateway credential request was cancelled"));
            if (void 0 !== i && r() < i.expiresAtMs) return Promise.resolve(i.value);
            if (void 0 === a) {
                const e = new AbortController, t = {
                    promise: c(e.signal).finally(()=>{
                        a === t && (a = void 0);
                    }),
                    waiters: 0,
                    abort: e
                };
                a = t;
            }
            const t = a;
            return t.waiters += 1, function(e, t, r) {
                return new Promise((n, s)=>{
                    const o = ()=>{
                        s(new V("LLM Gateway credential request was cancelled")), r();
                    };
                    t.addEventListener("abort", o, {
                        once: !0
                    }), e.then((e)=>{
                        t.removeEventListener("abort", o), n(e);
                    }, (e)=>{
                        t.removeEventListener("abort", o), s(e);
                    });
                });
            }(t.promise, e, ()=>{
                t.waiters -= 1, 0 === t.waiters && (t.abort.abort(), a === t && (a = void 0));
            });
        }
    };
}
function Z(e = process.env) {
    const t = function(e) {
        if (z.some(([t, r])=>e[t] === r)) return;
        const t = e.CURSOR_LLM_GATEWAY_API_KEY_HELPER?.trim();
        if (!t) return;
        const r = e.CURSOR_LLM_GATEWAY_API_KEY_HELPER_TTL_MS?.trim(), n = void 0 === r || "" === r ? Number.NaN : Number(r);
        return {
            helperCommand: t,
            ttlMs: Number.isFinite(n) && n > 0 && n <= 36e5 ? n : 3e5
        };
    }(e);
    if (void 0 === t) return;
    const r = Y(t);
    return async (e)=>({
            bearerToken: await r.getCredential({
                signal: e
            })
        });
}
class X {
    constructor(e, t = {}){
        this.client = e, this.mintLlmGatewayCredential = "from-local-env" === t.llmGatewayCredential ? Z() : void 0;
    }
    async run(e) {
        const t = this.mintLlmGatewayCredential, r = void 0 === t ? e.runOptions : {
            ...e.runOptions,
            mintLlmGatewayCredential: t
        }, n = e.runOptions.conversationId, s = G(e.ctx, {
            requestId: e.runOptions.generationUUID,
            parentRequestId: e.runOptions.parentRequestId,
            rootParentRequestId: e.runOptions.rootParentRequestId
        }).with(H.u, {
            conversationId: n,
            composerId: e.runOptions.conversationGroupId ?? n,
            requestId: e.runOptions.generationUUID ?? "",
            modelName: e.runOptions.requestedModel?.modelId ?? e.modelDetails?.modelId ?? "",
            ...e.runOptions.parentAgentToolCallId ? {
                parentToolCallId: e.runOptions.parentAgentToolCallId
            } : {}
        });
        (0, Q.notifyAgentStoreConversationTurn)(n, "start");
        try {
            await this.client.run(s, e.conversationState, e.action, e.modelDetails, e.interactionListener, e.resources, e.blobStore, e.conversationActionManager, e.checkpointHandler, e.mcpTools, r);
        } finally{
            (0, Q.notifyAgentStoreConversationTurn)(n, "end");
        }
    }
    dispose() {}
}
const ee = ()=>({
        runtime: "connect",
        reason: "managed-local-unavailable",
        disposition: "expected"
    });
var te = require("./module-11247.js");
const re = (0, s.h)("@anysphere/agent-host:turn-routing");
class ne extends i.SK {
    constructor(e){
        super(`A turn that restricts its tools runs only on the local loop, and it was routed to the backend (${e})`, {
            displayInfo: {
                title: "This turn's tool restriction needs the local loop",
                detail: `This turn limits the tools its agent may use, and only the local loop enforces that. It was routed to the backend loop (${e}), so it was refused rather than run with every tool.`,
                isRetryable: !1
            }
        });
    }
}
function se(e, t) {
    return {
        ...e,
        ctx: e.ctx.with(te.y, t)
    };
}
function oe(e, t, r) {
    e.runOptions.onTurnRuntimeSelected?.({
        runtime: t,
        reason: r
    });
}
function ie(e) {
    const t = e.runOptions.requestedModel?.modelId, r = e.modelDetails?.modelId;
    return {
        conversationId: e.runOptions.conversationId,
        generationUUID: e.runOptions.generationUUID,
        actionCase: e.action.action.case,
        modelId: t || r || void 0
    };
}
class ae {
    constructor(e, t = ee, r, n, s){
        this.connect = e, this.route = t, this.managedLocal = r, this.metrics = n, this.enrollmentLatch = s;
    }
    async run(e) {
        const t = await this.route(e), r = ie(e);
        switch(re.info(e.ctx, "Selected Agent Host turn runtime", {
            runtime: t.runtime,
            reason: t.reason,
            ...r
        }), "connect" === t.runtime && "fallback" === t.disposition && (re.warn(e.ctx, "Local loop fell back to the backend loop for this turn", {
            reason: t.reason,
            ...r
        }), this.count(e.ctx, "agent_host.local_loop.fallback", {
            reason: t.reason
        })), t.runtime){
            case "connect":
                return this.runOnConnect(e, t.reason);
            case "managed-local":
                if (void 0 === this.managedLocal) throw new Error(`managed-local runtime selected (${t.reason}) but no managed-local adapter exists`);
                return oe(e, "managed-local", t.reason), void 0 === this.enrollmentLatch ? this.managedLocal.run(se(e, t.runtime)) : this.runOnLocalLoop(e, this.managedLocal, this.enrollmentLatch);
            case "fail":
                throw t.error;
            default:
                {
                    const e = t;
                    throw new Error(`Unknown turn route decision: ${JSON.stringify(e)}`);
                }
        }
    }
    runOnConnect(e, t) {
        if (void 0 !== e.runOptions.toolRestriction) throw new ne(t);
        return oe(e, "connect", t), this.connect.run(se(e, "connect"));
    }
    async runOnLocalLoop(e, t, r) {
        const n = function(e) {
            let t = !1;
            const r = new Set, n = (t)=>({
                    sendUpdate: t,
                    query: e.query.bind(e),
                    enqueuePostTurnEndedWork: e.enqueuePostTurnEndedWork?.bind(e),
                    flushPostTurnEndedWork: e.flushPostTurnEndedWork?.bind(e)
                });
            return {
                listener: n((n, s)=>{
                    if ((0, i.qi)(s)) t = !0;
                    else if ("userMessageAppended" === s.message.case) {
                        const e = s.message.value.userMessage?.messageId;
                        e && r.add(e);
                    }
                    return e.sendUpdate(n, s);
                }),
                sawModelOutput: ()=>t,
                listenerForRerun: ()=>n((t, n)=>"userMessageAppended" === n.message.case && r.has(n.message.value.userMessage?.messageId ?? "") ? Promise.resolve() : e.sendUpdate(t, n))
            };
        }(e.interactionListener);
        try {
            await t.run(se({
                ...e,
                interactionListener: n.listener
            }, "managed-local"));
        } catch (t) {
            if (!function(e) {
                const t = new Set;
                let r = e;
                for(; r instanceof Error && !t.has(r);){
                    if (t.add(r), r instanceof i.Yv) {
                        const e = r.displayInfo;
                        if (e?.connectCode === A.C.PermissionDenied && e.detail === b) return !0;
                    } else if (r instanceof S.T && r.code === A.C.PermissionDenied && r.rawMessage === b) return !0;
                    r = r.cause;
                }
                return !1;
            }(t)) throw t;
            r.recordDenial();
            const s = n.sawModelOutput() ? "failed_mid_turn" : "retried_on_connect";
            if (re.warn(e.ctx, "Local loop refused for this account", {
                outcome: s,
                ...ie(e)
            }), this.count(e.ctx, "agent_host.local_loop.enrollment_denied", {
                outcome: s
            }), "failed_mid_turn" === s) throw new I(t);
            return e.conversationActionManager.resetStream(), this.runOnConnect({
                ...e,
                interactionListener: n.listenerForRerun()
            }, "enrollment-denied");
        }
    }
    count(e, t, r) {
        try {
            this.metrics?.increment?.({
                stat: t,
                value: 1,
                tags: r
            });
        } catch (r) {
            re.warn(e, "Local loop counter emission failed", {
                stat: t,
                error: String(r)
            });
        }
    }
    dispose() {
        let e;
        try {
            this.managedLocal?.dispose();
        } catch (t) {
            e = t;
        }
        try {
            this.connect.dispose();
        } catch (t) {
            e ??= t;
        }
        if (void 0 !== e) throw e;
    }
}
var ce = require("./module-58878.js"), le = require("./module-69584.js"), ue = require("./module-86209.js"), de = require("./module-62337.js"), pe = require("./module-15071.js"), me = require("./module-17819.js");
const he = [
    /[\s~^:?*\\]/,
    /\[/,
    /\.\./,
    /@\{/,
    /\/\//,
    /\/$/,
    /\.lock$/,
    /\.$/
];
async function fe(e) {
    const t = await async function(e, t, r) {
        const n = [];
        let s = t.length > 0;
        for (const i of t){
            const t = await e.exec((0, o.q6)(), i, [
                "config",
                "--get-regexp",
                "^remote\\..*\\.url$"
            ], {
                caller: "cloudSubagentRepositoryResolver"
            }).catch(()=>{});
            if (0 !== t?.exitCode) {
                s = !1;
                continue;
            }
            const a = ye(t.stdout).map((e)=>we(e, i)).filter((e)=>void 0 !== e), c = (void 0 === r || 0 === r.identityKeys.size ? void 0 : a.find((e)=>r.identityKeys.has((0, pe.CR)(e.repoUrl)))) ?? a[0];
            if (void 0 === c) {
                s = !1;
                continue;
            }
            const l = (0, pe.CR)(c.repoUrl), u = a.filter((e)=>(0, pe.xY)((0, pe.CR)(e.repoUrl), l));
            n.push(ge(u, r) ?? c);
        }
        return {
            repositories: n,
            everyWorkspaceResolved: s
        };
    }(e.gitExecutor, e.workspacePaths, e.preferredRepos);
    if (!t.everyWorkspaceResolved) return {
        kind: "fallback",
        reason: "workspace_not_resolved"
    };
    if (1 !== new Set(t.repositories.map((e)=>(0, pe.CR)(e.repoUrl))).size) return {
        kind: "fallback",
        reason: "repository_not_unique"
    };
    const r = new Map;
    for (const e of t.repositories){
        const t = r.get(e.transportScheme);
        if (void 0 === t) r.set(e.transportScheme, e.transportPort);
        else if (t !== e.transportPort) return {
            kind: "fallback",
            reason: "repository_not_unique"
        };
    }
    const n = ge(t.repositories, e.preferredRepos);
    if (void 0 === n) return {
        kind: "fallback",
        reason: "repository_not_unique"
    };
    const s = e.requestedBaseBranch?.trim(), i = void 0 !== s && s.length > 0 ? Se(s) : await async function(e, t) {
        const r = new Set;
        for (const n of new Set(t)){
            const t = await e.exec((0, o.q6)(), n, [
                "branch",
                "--show-current"
            ], {
                caller: "cloudSubagentRepositoryResolver"
            }).catch(()=>{}), s = 0 === t?.exitCode && t.stdout.trim() || void 0;
            if (void 0 === s) return;
            r.add(Se(s));
        }
        return 1 === r.size ? r.values().next().value : void 0;
    }(e.gitExecutor, t.repositories.map((e)=>e.workspacePath));
    return void 0 === i ? {
        kind: "fallback",
        reason: "branch_not_unique"
    } : {
        kind: "resolved",
        binding: {
            repoUrl: n.repoUrl,
            fullRepoUrl: n.fullRepoUrl,
            baseBranch: i
        }
    };
}
function ge(e, t) {
    return (void 0 === t || 0 === t.transportUrls.size ? void 0 : e.find((e)=>t.transportUrls.has(e.fullRepoUrl))) ?? e[0];
}
function ye(e) {
    const t = [];
    for (const r of e.split("\n")){
        const e = r.search(/\s/);
        if (-1 === e) continue;
        const n = r.slice(0, e), s = r.slice(e + 1).trim();
        n.startsWith("remote.") && n.endsWith(".url") && s.length > 0 && t.push(s);
    }
    return t;
}
function we(e, t) {
    const r = function(e) {
        if (e.includes("://")) return e;
        const t = e.match(/^[^@/]+@([^:]+):(.+)$/);
        if (null === t) return e;
        return `https://${t[1]}/${t[2]}`;
    }(e), n = r.match(/^([a-z][a-z0-9+.-]*):\/\//i)?.[1]?.toLowerCase();
    if (void 0 === n || ![
        "http",
        "https",
        "ssh",
        "git"
    ].includes(n)) return;
    const s = (0, pe.zB)(r), o = (0, pe.dA)(r);
    return 0 !== s.length && 0 !== o.length ? {
        repoUrl: s,
        fullRepoUrl: o,
        workspacePath: t,
        transportScheme: ve({
            rawUrl: e,
            rewrittenUrl: r,
            scheme: n
        }),
        transportPort: Ae({
            url: r,
            scheme: n
        })
    } : void 0;
}
function ve(e) {
    return e.rewrittenUrl !== e.rawUrl || "ssh" === e.scheme ? "ssh" : "http" === e.scheme || "https" === e.scheme ? e.scheme : "git";
}
const _e = {
    ssh: "22",
    git: "9418"
};
function Ae(e) {
    try {
        const t = new URL(e.url).port;
        return t === _e[e.scheme] ? "" : t;
    } catch  {
        return "";
    }
}
function Se(e) {
    let t = e.trim();
    for (const e of [
        "refs/heads/",
        "heads/",
        "refs/remotes/",
        "remotes/"
    ])if (t.startsWith(e)) {
        t = t.slice(e.length);
        break;
    }
    if (t.startsWith("origin/") && (t = t.slice(7)), !function(e) {
        if (0 === e.length) return !1;
        for (const t of e){
            const e = t.charCodeAt(0);
            if (e < 32 || 127 === e) return !1;
        }
        return e.trim() === e && !(e.startsWith("-") || e.startsWith(".") || e.startsWith("/")) && "HEAD" !== e && "@" !== e && !e.split("/").some((e)=>e.startsWith(".") || e.endsWith(".lock") || e.endsWith(".")) && he.every((t)=>!t.test(e));
    }(t)) throw new Error(`Invalid cloud base branch: ${e}`);
    return t;
}
const be = "0d1cbb47-6f2e-4f0e-9c2a-58c0a1f6f0d4";
function Ee(e) {
    return function(e) {
        const t = new Map, r = async (r, n, s)=>{
            const o = s.parentConversationId?.trim();
            if (!o) throw new Error("Missing parent conversation id for cloud subagent resume.");
            const i = t.get(n);
            if (void 0 !== i) {
                if (i.parent.parentSessionId !== o) throw new Error("Cloud subagent parent mismatch for resume.");
                return void Be(e.logTrace, "resume-ownership", {
                    agentId: n,
                    source: "in-memory"
                });
            }
            const a = await async function(e) {
                const t = (0, x.randomUUID)();
                let r;
                try {
                    r = await (await e.backend.backgroundComposerClientProvider()).getBackgroundComposerInfo(new de.Y_J({
                        bcId: e.bcId,
                        includeDiff: !1,
                        doNotThrowIfSetupNotFinished: !0
                    }), Ve(e.ctx, t));
                } catch (r) {
                    throw new Error(`Cloud subagent ownership check failed: ${Fe(r)} (cloud subagent ${e.bcId}, server request ID ${t})`, {
                        cause: r
                    });
                }
                const n = r.composer?.composer?.cloudSubagentParent;
                if (n?.parentAgentType !== de.A4w.LOCAL || n.parentAgentId.trim() !== e.requestedParentId) throw new Error("Cloud subagent parent mismatch for resume.");
                return {
                    parentToolCallId: n.parentToolCallId
                };
            }({
                ctx: r,
                backend: e.backend,
                bcId: n,
                requestedParentId: o
            });
            t.set(n, {
                kind: "remote-cloud",
                sessionId: n,
                parent: {
                    parentSessionId: o,
                    parentToolCallId: a.parentToolCallId,
                    rootSessionId: s.rootParentConversationId?.trim() || o
                }
            }), Be(e.logTrace, "resume-ownership", {
                agentId: n,
                source: "server-record"
            });
        };
        return {
            createOrResumeCloudSubagent: async (n, s)=>{
                if (void 0 !== s.forkAgentId) throw new Error('environment: "cloud" does not support forkAgentId/resume="self" yet.');
                if (void 0 !== s.continuationConfig) throw new Error('environment: "cloud" does not support continuation subagents yet.');
                const o = s.resumeAgentId?.trim();
                if (o) return await r(n, o, s), o;
                const i = s.parentConversationId?.trim();
                if (!i) throw new Error("Cloud subagent creation requires a parent conversation id.");
                const a = await e.creator.create(n, s);
                return t.set(a, {
                    kind: "remote-cloud",
                    sessionId: a,
                    parent: {
                        parentSessionId: i,
                        parentToolCallId: s.toolCallId.trim(),
                        rootSessionId: s.rootParentConversationId?.trim() || i
                    }
                }), Be(e.logTrace, "create-fresh", {
                    agentId: a,
                    toolCallId: s.toolCallId,
                    runInBackground: s.runInBackground
                }), a;
            },
            runCloudSubagent: async (n, s, i)=>{
                const a = i.resumeAgentId?.trim();
                return a && !t.has(a) && await r(n, a, i), async function(e) {
                    const t = function(e) {
                        const t = e.args.resumeAgentId?.trim();
                        if (!t) return {
                            kind: "initial",
                            targetMessageId: e.args.toolCallId
                        };
                        if (e.args.prompt.trim().length > 0) {
                            const t = (0, x.randomUUID)(), r = e.args.parentConversationId?.trim() ?? "", n = e.backend.getParentEffectiveMaxMode(r);
                            return {
                                kind: "followup",
                                targetMessageId: t,
                                submit: (r)=>(async function(e) {
                                        const t = (0, x.randomUUID)();
                                        Be(e.logTrace, "followup-submit", {
                                            agentId: e.agentId,
                                            followupId: e.followupId,
                                            interrupt: !0 === e.args.interrupt,
                                            requestId: t
                                        });
                                        const r = await Ge({
                                            ctx: e.ctx,
                                            backend: e.backend,
                                            parentSessionId: e.args.parentConversationId?.trim() ?? "",
                                            maxMode: e.maxMode,
                                            args: e.args,
                                            logWarning: e.logWarning
                                        }), n = await e.backend.backgroundComposerClientProvider();
                                        await n.addAsyncFollowupBackgroundComposer(new de.FFs({
                                            bcId: e.agentId,
                                            synchronous: !1,
                                            followupConversationAction: je({
                                                prompt: e.args.prompt,
                                                messageId: e.followupId,
                                                selectedContext: e.args.selectedContext
                                            }),
                                            followupId: e.followupId,
                                            followupSource: de._bo.AS_SUBAGENT_FROM_LOCAL,
                                            requestedModel: He(e.args, e.maxMode, r)
                                        }), Ve(e.ctx, t)), !0 === e.args.interrupt && await n.submitPendingFollowupNow(new de.$te({
                                            bcId: e.agentId,
                                            followupId: e.followupId
                                        }), Ve(e.ctx, (0, x.randomUUID)()));
                                    })({
                                        ctx: r,
                                        agentId: e.agentId,
                                        args: e.args,
                                        followupId: t,
                                        maxMode: n,
                                        backend: e.backend,
                                        logWarning: e.logWarning,
                                        logTrace: e.logTrace
                                    })
                            };
                        }
                        return {
                            kind: "await-idle"
                        };
                    }(e);
                    Be(e.logTrace, "watch-start", {
                        agentId: e.agentId,
                        toolCallId: e.args.toolCallId,
                        watch: t.kind,
                        runInBackground: e.args.runInBackground
                    });
                    try {
                        const r = await async function(e, t) {
                            let r, n, s, o, i, a = !1, c = !1, l = !1, u = 0, d = 0, p = !1, m = !1;
                            const h = "await-idle" === t.kind ? void 0 : t.targetMessageId, f = (e)=>{
                                0 !== e.length && e !== r && (r = e, u = 0);
                            };
                            for(;;){
                                Ye(e.ctx);
                                const [g, y] = e.ctx.withCancel();
                                let w;
                                const v = ()=>{
                                    void 0 !== w && clearTimeout(w), w = setTimeout(()=>y(new Error("Cloud subagent stream became inactive")), Re);
                                };
                                try {
                                    v();
                                    const u = await e.backend.backgroundComposerClientProvider(), y = (0, x.randomUUID)(), w = u.streamConversation(new de.D23({
                                        bcId: e.agentId,
                                        offsetKey: r,
                                        filterHeavyStepData: !0,
                                        shouldSendPrefetchedBlobsFirst: !1,
                                        prefetchOnlyLastStepPerTurn: !0,
                                        maxBlobsAfterPrefetch: 0,
                                        allowStreamingWhenTerminalStatus: !0,
                                        includeStreamHeartbeats: !0,
                                        purpose: de.OE5.LIVE
                                    }), Ve(g, y));
                                    for await (const r of w){
                                        v();
                                        const u = r.message;
                                        if ("followup" === t.kind && !l) {
                                            const r = "initialState" === u.case || "workflowStatusWithOffset" === u.case ? u.value.workflowStatus : void 0;
                                            if (void 0 !== r) {
                                                const e = Je({
                                                    status: r,
                                                    watchKind: t.kind,
                                                    sawTargetMessage: a,
                                                    sawTurnActivity: c
                                                });
                                                if ("error" === e?.kind) throw new Ue(e.message);
                                                o = r === de.sB5.RUNNING || r === de.sB5.WAITING_FOR_BACKGROUND_WORK;
                                            }
                                            l = !0;
                                            try {
                                                await t.submit(e.ctx);
                                            } catch (t) {
                                                throw new Le(`Cloud subagent follow-up submit failed for ${e.agentId}: ${Fe(t)}`);
                                            }
                                        }
                                        let g;
                                        switch(u.case){
                                            case "initialState":
                                                {
                                                    const r = u.value.cloudAgentState?.conversationState;
                                                    n = r ?? n, s ??= n?.turns.length, "followup" === t.kind && void 0 !== r && await Pe({
                                                        ctx: e.ctx,
                                                        agentId: e.agentId,
                                                        backend: e.backend,
                                                        conversationState: r,
                                                        minimumTurnIndex: Math.max(0, (s ?? 1) - 1),
                                                        targetMessageId: t.targetMessageId
                                                    }) && (m = !0, g = i, i = void 0), u.value.workflowStatus !== de.sB5.RUNNING && u.value.workflowStatus !== de.sB5.WAITING_FOR_BACKGROUND_WORK || (c = !0);
                                                    const o = Je({
                                                        status: u.value.workflowStatus,
                                                        watchKind: t.kind,
                                                        sawTargetMessage: a,
                                                        sawTurnActivity: c
                                                    });
                                                    g ??= "followup" === t.kind && "error" !== o?.kind ? void 0 : o, Be(e.logTrace, "workflow-status", {
                                                        agentId: e.agentId,
                                                        status: u.value.workflowStatus,
                                                        source: "initial-state"
                                                    });
                                                    break;
                                                }
                                            case "interactionUpdateWithOffset":
                                                {
                                                    f(u.value.offsetKey);
                                                    const e = u.value.interactionUpdate;
                                                    if ("userMessageAppended" === e?.message.case) void 0 !== h && e.message.value.userMessage?.messageId === h && (a = !0);
                                                    else if ("turnEnded" === e?.message.case) {
                                                        if ("initial" === t.kind && (a || c)) g = {
                                                            kind: "completed",
                                                            requireSummary: !1
                                                        };
                                                        else if ("followup" === t.kind && a) {
                                                            const e = {
                                                                kind: "completed",
                                                                requireSummary: !1
                                                            };
                                                            m ? g = e : !0 !== o || p ? i = e : p = !0;
                                                        }
                                                    }
                                                    break;
                                                }
                                            case "workflowStatusWithOffset":
                                                {
                                                    f(u.value.offsetKey);
                                                    const r = u.value.workflowStatus;
                                                    r !== de.sB5.RUNNING && r !== de.sB5.WAITING_FOR_BACKGROUND_WORK || (c = !0);
                                                    const n = Je({
                                                        status: r,
                                                        watchKind: t.kind,
                                                        sawTargetMessage: a,
                                                        sawTurnActivity: c
                                                    });
                                                    g = "followup" !== t.kind || "completed" !== n?.kind || m ? n : void 0, Be(e.logTrace, "workflow-status", {
                                                        agentId: e.agentId,
                                                        status: r,
                                                        source: "stream-update"
                                                    });
                                                    break;
                                                }
                                            case "cloudAgentStateWithIdAndOffset":
                                                {
                                                    f(u.value.offsetKey);
                                                    const r = u.value.cloudAgentState?.conversationState;
                                                    n = r ?? n, s ??= n?.turns.length, "followup" === t.kind && void 0 !== r && await Pe({
                                                        ctx: e.ctx,
                                                        agentId: e.agentId,
                                                        backend: e.backend,
                                                        conversationState: r,
                                                        minimumTurnIndex: Math.max(0, (s ?? 1) - 1),
                                                        targetMessageId: t.targetMessageId
                                                    }) && (m = !0, g = i, i = void 0);
                                                    break;
                                                }
                                        }
                                        if ("error" === g?.kind) throw new Ue(g.message);
                                        if ("completed" === g?.kind) {
                                            if ("followup" === t.kind && !m) continue;
                                            const r = await Me(e);
                                            if (g.requireSummary && !r) {
                                                if (d >= Te) throw new Qe(`Cloud subagent summary was unavailable after ${Te} retries for ${e.agentId}`);
                                                throw d += 1, new $e(`Cloud subagent summary is not ready for ${e.agentId}`);
                                            }
                                            return r;
                                        }
                                    }
                                    throw new Error("Cloud subagent stream ended before the turn completed");
                                } catch (t) {
                                    if (Ye(e.ctx), !Oe(t)) throw t;
                                    if (u >= xe) throw new Error(`Native cloud subagent stream failed after ${xe} retries without progress for ${e.agentId}: ${Fe(t)}`, {
                                        cause: t
                                    });
                                    const r = Ke(u, Ce, ke);
                                    u += 1, e.logWarning?.(`Native cloud subagent stream disconnected for ${e.agentId}; retrying in ${r}ms: ${Fe(t)}`), await Ne(r, e.ctx.signal);
                                } finally{
                                    void 0 !== w && clearTimeout(w), y();
                                }
                            }
                        }(e, t);
                        return Be(e.logTrace, "watch-terminal", {
                            agentId: e.agentId,
                            watch: t.kind,
                            outcome: "completed",
                            hasSummary: void 0 !== r
                        }), {
                            status: "completed",
                            ...void 0 === r ? {} : {
                                finalMessage: r
                            }
                        };
                    } catch (r) {
                        if (e.ctx.signal.aborted) {
                            try {
                                const t = (0, o.q6)().withTimeout(1e4);
                                await (await e.backend.backgroundComposerClientProvider()).pauseBackgroundComposer(new de.O6D({
                                    bcId: e.agentId,
                                    source: de._bo.AS_SUBAGENT_FROM_LOCAL
                                }), Ve(t, (0, x.randomUUID)()));
                            } catch (t) {
                                e.logWarning?.(`Failed to pause aborted native cloud subagent ${e.agentId}: ${Fe(t)}`);
                            }
                            return Be(e.logTrace, "watch-terminal", {
                                agentId: e.agentId,
                                watch: t.kind,
                                outcome: "aborted"
                            }), {
                                status: "aborted",
                                error: "Cloud subagent was aborted"
                            };
                        }
                        return Be(e.logTrace, "watch-terminal", {
                            agentId: e.agentId,
                            watch: t.kind,
                            outcome: "error",
                            errorName: r instanceof Error ? r.name : typeof r
                        }), {
                            status: "error",
                            error: Fe(r)
                        };
                    }
                }({
                    ctx: n,
                    agentId: s,
                    args: i,
                    backend: e.backend,
                    logWarning: e.logWarning,
                    logTrace: e.logTrace
                });
            },
            ownsCloudChildLifecycle: !0
        };
    }({
        creator: Ie({
            ...e,
            resolveCloudSubagentStorePreparer: ce.V2
        }),
        backend: e.backend,
        logWarning: e.nativeCloudSubagents.logWarning,
        logTrace: e.nativeCloudSubagents.logTrace
    });
}
function Ie(e) {
    return new ze(e);
}
const Ce = 1e3, ke = 3e4, xe = 8, Te = 8, Re = 75e3;
function Be(e, t, r) {
    e?.(`[native-cloud-subagent] ${t} ${JSON.stringify(r)}`);
}
async function Pe(e) {
    const t = e.conversationState?.turns;
    if (void 0 === t) return !1;
    const r = await e.backend.backgroundComposerClientProvider();
    for(let n = t.length - 1; n >= e.minimumTurnIndex; n -= 1){
        const s = await r.getBlobForAgentKV(new de.Wt4({
            bcId: e.agentId,
            blobId: new Uint8Array(t[n])
        }), Ve(e.ctx, (0, x.randomUUID)()));
        if (0 === s.blobData.length) continue;
        const o = le.cmU.fromBinary(s.blobData);
        if ("agentConversationTurn" !== o.turn.case) continue;
        const i = o.turn.value.userMessage;
        if (0 === i.length) continue;
        const a = await r.getBlobForAgentKV(new de.Wt4({
            bcId: e.agentId,
            blobId: new Uint8Array(i)
        }), Ve(e.ctx, (0, x.randomUUID)()));
        if (0 !== a.blobData.length && le.RGk.fromBinary(a.blobData).messageId === e.targetMessageId) return !0;
    }
    return !1;
}
function Je(e) {
    switch(e.status){
        case de.sB5.IDLE:
        case de.sB5.ARCHIVED:
            return "followup" === e.watchKind ? e.sawTargetMessage ? {
                kind: "completed",
                requireSummary: !1
            } : void 0 : "await-idle" === e.watchKind ? {
                kind: "completed",
                requireSummary: !1
            } : {
                kind: "completed",
                requireSummary: !(e.sawTargetMessage || e.sawTurnActivity)
            };
        case de.sB5.ERROR:
        case de.sB5.EXPIRED:
            return {
                kind: "error",
                message: `Cloud subagent ended with workflow status ${e.status}`
            };
        default:
            return;
    }
}
async function Me(e) {
    for(let t = 0; t < 3; t += 1)try {
        const t = (0, x.randomUUID)();
        return (await (await e.backend.backgroundComposerClientProvider()).getTurnSummaryBackgroundComposer(new de.zoE({
            bcId: e.agentId,
            sourceType: de._bo.AS_SUBAGENT_FROM_LOCAL
        }), Ve(e.ctx, t))).summary.trim() || void 0;
    } catch (r) {
        if (Ye(e.ctx), !Oe(r) || 2 === t) return void e.logWarning?.(`Failed to hydrate native cloud subagent summary for ${e.agentId}: ${Fe(r)}`);
        await Ne(Ke(t, Ce, ke), e.ctx.signal);
    }
}
function qe(e) {
    const t = [], r = new Set;
    let n = e;
    for(; null !== n && ("object" == typeof n || "function" == typeof n) && !r.has(n);)t.push(n), r.add(n), n = "cause" in n ? n.cause : void 0;
    for (const e of t)if (De(e)) return new S.T(e.rawMessage, e.code, void 0, void 0, e);
    for (const e of t){
        if (!(e instanceof Error)) continue;
        const t = /^\[([a-z_]+)\](?:\s+(.*))?$/.exec(e.message);
        if (null === t) continue;
        const r = (0, me.X)(t[1] ?? "");
        if (void 0 !== r) return new S.T(t[2] ?? "", r, void 0, void 0, e);
    }
    return S.T.from(e);
}
function De(e) {
    if (null === e || "object" != typeof e) return !1;
    const t = e;
    return "number" == typeof t.code && t.code >= A.C.Canceled && t.code <= A.C.Unauthenticated && "string" == typeof t.rawMessage;
}
function Oe(e) {
    if (e instanceof $e) return !0;
    if (e instanceof Ue || e instanceof Le || e instanceof Qe) return !1;
    const t = qe(e);
    return t.code === A.C.Canceled || t.code === A.C.Unknown || t.code === A.C.DeadlineExceeded || t.code === A.C.NotFound || t.code === A.C.ResourceExhausted || t.code === A.C.Aborted || t.code === A.C.Internal || t.code === A.C.Unavailable || t.code === A.C.DataLoss;
}
function Ne(e, t) {
    return t.aborted ? Promise.reject(t.reason ?? new Error("Cloud subagent cancelled")) : new Promise((r, n)=>{
        const s = setTimeout(()=>{
            t.removeEventListener("abort", o), r();
        }, e), o = ()=>{
            clearTimeout(s), n(t.reason ?? new Error("Cloud subagent cancelled"));
        };
        t.addEventListener("abort", o, {
            once: !0
        }), t.aborted && o();
    });
}
function Fe(e) {
    return e instanceof Error ? e.message : String(e);
}
class Ue extends Error {
}
class Le extends Error {
}
class $e extends Error {
}
class Qe extends Error {
}
function je(e) {
    return new le.QFf({
        action: {
            case: "userMessageAction",
            value: new le.Vtf({
                userMessage: new le.RGk({
                    text: e.prompt,
                    messageId: e.messageId,
                    selectedContext: e.selectedContext,
                    mode: le.xyI.AGENT
                }),
                sendToInteractionListener: !0
            })
        }
    });
}
async function Ge(e) {
    if (e.args.modelParameters.length > 0) return e.args.modelParameters;
    const t = e.backend.resolveSavedModelParameters;
    if (void 0 !== t) try {
        const r = await t({
            ctx: e.ctx,
            parentSessionId: e.parentSessionId,
            rootSessionId: e.args.rootParentConversationId?.trim() || e.parentSessionId,
            modelId: e.args.modelId,
            ...void 0 === e.maxMode ? {} : {
                maxMode: e.maxMode
            }
        });
        return r?.map((e)=>({
                id: e.id,
                value: e.value
            }));
    } catch (t) {
        return void e.logWarning?.(`Saved model parameter lookup degraded to the bare model id for ${e.args.modelId}: ${Fe(t)}`);
    }
}
function He(e, t, r) {
    return new ue.G4({
        modelId: e.modelId,
        ...void 0 === t ? {} : {
            maxMode: t
        },
        parameters: (r ?? e.modelParameters).map((e)=>new ue.SR({
                id: e.id,
                value: e.value
            }))
    });
}
class ze {
    constructor(e){
        this.options = e, this.creationByIdentity = new Map, this.createInFlight = new Map;
    }
    async resolveCloudEnvironmentRepoPreference(e) {
        const t = this.cloudEnvironmentRepoPreferenceCache;
        if (void 0 !== t && Date.now() < t.expiresAtMs) return t.preference;
        const r = this.cloudEnvironmentRepoPreferenceInFlight;
        if (void 0 !== r) return Ze(r, e);
        const n = this.fetchCloudEnvironmentRepoPreference().finally(()=>{
            this.cloudEnvironmentRepoPreferenceInFlight === n && (this.cloudEnvironmentRepoPreferenceInFlight = void 0);
        });
        return this.cloudEnvironmentRepoPreferenceInFlight = n, Ze(n, e);
    }
    async fetchCloudEnvironmentRepoPreference() {
        const e = Date.now();
        let t;
        const [r, n] = (0, o.q6)().withTimeoutAndCancel(5e3);
        try {
            const e = await this.options.backend.backgroundComposerClientProvider(), n = [];
            let s;
            do {
                const t = await e.listEnvironments(new de.Cwe({
                    includeEnvironmentJson: !1,
                    ...void 0 === s ? {} : {
                        pageToken: s
                    }
                }), {
                    signal: r.signal
                });
                n.push(...t.environments), s = t.hasMore && t.nextPageToken ? t.nextPageToken : void 0;
            }while (void 0 !== s)
            t = (0, pe._f)(n);
        } catch (e) {
            this.options.nativeCloudSubagents.logWarning?.(`Cloud environment lookup failed; resolving repositories without environment preference: ${String(e)}`), t = void 0;
        } finally{
            n();
        }
        return this.cloudEnvironmentRepoPreferenceCache = {
            preference: t,
            expiresAtMs: e + 6e4
        }, t;
    }
    async create(e, t) {
        if (void 0 !== t.resumeAgentId || void 0 !== t.forkAgentId || void 0 !== t.continuationConfig) throw new Error("Native cloud subagent creator only handles fresh creations.");
        const r = t.parentConversationId?.trim(), n = t.toolCallId.trim();
        if (!r || !n) throw new Error("Cloud subagent creation requires parent conversation and tool call IDs.");
        const s = `${r}\0${n}`, o = `bc-${function(e, t) {
            const r = Buffer.from(t.replaceAll("-", ""), "hex"), n = (0, x.createHash)("sha1").update(r).update(e, "utf8").digest(), s = Buffer.from(n.subarray(0, 16));
            s[6] = 15 & s[6] | 80, s[8] = 63 & s[8] | 128;
            const o = s.toString("hex");
            return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20)}`;
        }(`local-task:${(i = {
            parentConversationId: r,
            parentToolCallId: n
        }).parentConversationId}:${i.parentToolCallId}`, be)}`;
        var i;
        const a = this.creationByIdentity.get(s);
        if ("created" === a?.status) return Be(this.options.nativeCloudSubagents.logTrace, "create-replay", {
            status: a.status,
            agentId: a.bcId,
            toolCallId: n
        }), a.bcId;
        if ("uncertain" === a?.status) throw Be(this.options.nativeCloudSubagents.logTrace, "create-replay", {
            status: a.status,
            agentId: a.bcId,
            toolCallId: n
        }), a.error;
        const c = this.createInFlight.get(s);
        if (void 0 !== c) return Be(this.options.nativeCloudSubagents.logTrace, "create-replay", {
            status: "in-flight",
            toolCallId: n
        }), Ze(c, e);
        this.creationByIdentity.set(s, {
            status: "reserved",
            bcId: o
        });
        const l = this.options.backend.getParentEffectiveMaxMode(r), u = this.start(e, t, r, n, o, l).then((e)=>(this.creationByIdentity.set(s, {
                status: "created",
                bcId: e
            }), e)).catch((e)=>{
            throw e instanceof We ? this.creationByIdentity.set(s, {
                status: "uncertain",
                bcId: o,
                error: e
            }) : this.creationByIdentity.delete(s), e;
        });
        this.createInFlight.set(s, u);
        try {
            return await u;
        } finally{
            this.createInFlight.get(s) === u && this.createInFlight.delete(s);
        }
    }
    async start(e, t, r, n, s, o) {
        Ye(e);
        const i = this.options.resolveSessionOptions(r);
        if (void 0 === i) throw Be(this.options.nativeCloudSubagents.logTrace, "preflight-error", {
            reason: "missing-session-options",
            agentId: s,
            toolCallId: n
        }), new Error(`No agent-host session options for cloud subagent parent ${r}.`);
        const a = i.workspacePaths ?? [];
        if (0 === a.length || a.some((e)=>0 === e.trim().length)) throw Be(this.options.nativeCloudSubagents.logTrace, "preflight-error", {
            reason: "missing-workspace-roots",
            agentId: s,
            toolCallId: n
        }), new Error(`No non-empty workspace roots for cloud subagent parent ${r}.`);
        const c = await this.resolveCloudEnvironmentRepoPreference(e);
        Ye(e);
        const l = await fe({
            gitExecutor: this.options.gitExecutor,
            workspacePaths: a,
            requestedBaseBranch: t.cloudBaseBranch,
            ...void 0 === c ? {} : {
                preferredRepos: c
            }
        });
        if (Ye(e), "fallback" === l.kind) throw Be(this.options.nativeCloudSubagents.logTrace, "preflight-error", {
            reason: l.reason,
            agentId: s,
            toolCallId: n
        }), new Error(function(e) {
            switch(e){
                case "workspace_not_resolved":
                    return 'environment: "cloud" requires every workspace folder to be a git repository with a supported remote.';
                case "repository_not_unique":
                    return 'environment: "cloud" requires exactly one known git remote for the parent workspace.';
                case "branch_not_unique":
                    return 'environment: "cloud" requires a base branch; no cloud_base_branch was provided and the current branch could not be determined.';
            }
        }(l.reason));
        const u = i.owningProject, d = u?.projectAgentId.trim() || void 0, p = await async function(e) {
            if (void 0 === e.preparer) return [];
            try {
                Ye(e.ctx);
                const t = await e.preparer.prepareCloudSubagentStores({
                    signal: e.ctx.signal,
                    parentStoreId: e.parentStoreId,
                    additionalStoreIds: e.additionalStoreIds
                });
                return Ye(e.ctx), [
                    ...new Set(t.map((e)=>e.trim()).filter(Boolean))
                ];
            } catch (t) {
                if (e.ctx.signal.aborted) throw t;
                return e.logWarning?.("Cloud subagent store preparation degraded to none."), [];
            }
        }({
            ctx: e,
            parentStoreId: r,
            additionalStoreIds: void 0 === d ? [] : [
                d
            ],
            preparer: this.options.resolveCloudSubagentStorePreparer?.(),
            logWarning: this.options.nativeCloudSubagents.logWarning
        });
        Ye(e);
        const m = void 0 === u ? void 0 : new le.umU({
            ...u.projectName?.trim() ? {
                name: u.projectName.trim()
            } : {},
            subagent: new le.H1o({
                ...void 0 !== d && p.includes(d) ? {
                    storeDir: `/cursor/stores/${d}`
                } : {}
            })
        }), h = this.options.backend.getTeamId(), f = await Ge({
            ctx: e,
            backend: this.options.backend,
            parentSessionId: r,
            maxMode: o,
            args: t,
            logWarning: this.options.nativeCloudSubagents.logWarning
        }), g = new de.IU4({
            bcId: s,
            snapshotNameOrId: l.binding.repoUrl,
            devcontainerStartingPoint: new de.Zlj({
                url: l.binding.fullRepoUrl,
                ref: l.binding.baseBranch
            }),
            snapshotWorkspaceRootPath: "/workspace",
            returnImmediately: !0,
            repoUrl: l.binding.fullRepoUrl,
            source: de._bo.AS_SUBAGENT_FROM_LOCAL,
            autoBranch: !0,
            baseBranch: l.binding.baseBranch,
            conversationAction: je({
                prompt: t.prompt,
                messageId: n,
                selectedContext: t.selectedContext
            }),
            startingMessageType: de.sPB.USER_MESSAGE,
            addInitialMessageToResponses: !0,
            repositoryInfo: {
                pathEncryptionKey: "",
                shouldSyncIndex: !1
            },
            requestedModels: [
                He(t, o, f)
            ],
            ...void 0 === h ? {} : {
                teamId: h
            },
            cloudSubagentParent: new de.gqt({
                parentAgentId: r,
                parentToolCallId: n,
                parentAgentType: de.A4w.LOCAL,
                subagentTypeName: t.subagentType
            }),
            requestedAdditionalStoreIds: p,
            projectDetails: m,
            skills: []
        }), y = (0, x.randomUUID)();
        Be(this.options.nativeCloudSubagents.logTrace, "native-start", {
            agentId: s,
            requestId: y,
            toolCallId: n,
            runInBackground: t.runInBackground
        });
        try {
            const t = await (await this.options.backend.backgroundComposerClientProvider()).startBackgroundComposerFromSnapshot(g, Ve(e, y)), r = t.composer?.bcId || s;
            if (r !== s) throw new We(`Cloud subagent returned unexpected agent id: ${r}`);
            return Be(this.options.nativeCloudSubagents.logTrace, "native-created", {
                agentId: s,
                requestId: y,
                toolCallId: n
            }), s;
        } catch (e) {
            const t = qe(e);
            if (Be(this.options.nativeCloudSubagents.logTrace, "native-start-error", {
                agentId: s,
                requestId: y,
                errorName: e instanceof Error ? e.name : typeof e,
                code: A.C[t.code],
                message: t.rawMessage.slice(0, 200)
            }), e instanceof We) throw e;
            if (function(e) {
                return e.code === A.C.InvalidArgument || e.code === A.C.NotFound || e.code === A.C.PermissionDenied || e.code === A.C.FailedPrecondition || e.code === A.C.Unauthenticated || e.code === A.C.Unimplemented || e.code === A.C.ResourceExhausted;
            }(t)) throw new Error(`Cloud subagent start was rejected by the server: ${t.rawMessage} (${A.C[t.code]}; bcId ${s}, request ID ${y})`, {
                cause: e
            });
            throw new We(`Cloud subagent start outcome is unknown (${A.C[t.code]}: ${t.rawMessage}; bcId ${s}, request ID ${y})`, e);
        }
    }
}
class We extends Error {
    constructor(e, t){
        super(e, void 0 === t ? void 0 : {
            cause: t
        }), this.name = "AgentHostCloudCreateOutcomeUnknownError";
    }
}
function Ve(e, t) {
    return {
        signal: e.signal,
        headers: {
            "X-Request-ID": t,
            "X-Amzn-Trace-Id": `Root=${t}`
        }
    };
}
function Ke(e, t, r) {
    return Math.random() * Math.min(t * 2 ** e, r);
}
function Ye(e) {
    if (e.signal.aborted) throw e.signal.reason ?? new Error("Cloud subagent creation cancelled");
}
function Ze(e, t) {
    return t.signal.aborted ? Promise.reject(t.signal.reason ?? new Error("Cloud subagent creation cancelled")) : new Promise((r, n)=>{
        const s = ()=>{
            n(t.signal.reason ?? new Error("Cloud subagent creation cancelled"));
        };
        t.signal.addEventListener("abort", s, {
            once: !0
        }), e.then(r, n).finally(()=>{
            t.signal.removeEventListener("abort", s);
        });
    });
}
const Xe = "composer-2.5-fast";
function et(e = Xe) {
    return new le.Gmx({
        modelId: e,
        displayModelId: e,
        displayName: e,
        displayNameShort: e,
        aliases: []
    });
}
class tt {
    constructor(){
        this.entries = new Map, this.lastByComposer = new Map;
    }
    expect(e) {
        this.entry(e).expected = !0;
    }
    isExpected(e) {
        return !0 === this.entries.get(e)?.expected;
    }
    offer(e, t) {
        const r = this.entry(e);
        r.overlay = t;
        const n = r.waiters.splice(0);
        for (const e of n)e.resolve(t);
    }
    peek(e) {
        return this.entries.get(e)?.overlay;
    }
    recordLast(e, t) {
        this.lastByComposer.set(e, t);
    }
    last(e) {
        return this.lastByComposer.get(e);
    }
    awaitOverlay(e, t) {
        const r = this.entries.get(e)?.overlay;
        if (void 0 !== r) return Promise.resolve(r);
        if (void 0 !== t && t <= 0) return Promise.resolve(void 0);
        const n = this.entry(e);
        return new Promise((e)=>{
            let r, s = !1;
            const i = (t)=>{
                s || (s = !0, r?.(), e(t));
            }, a = {
                resolve: i
            };
            if (n.waiters.push(a), void 0 === t) return;
            const [c, l] = (0, o.q6)().withTimeoutAndCancel(t);
            r = l, c.signal.addEventListener("abort", ()=>{
                const e = n.waiters.indexOf(a);
                e >= 0 && n.waiters.splice(e, 1), i(void 0);
            }, {
                once: !0
            });
        });
    }
    forget(e) {
        const t = this.entries.get(e);
        if (void 0 !== t) {
            this.entries.delete(e);
            for (const e of t.waiters)e.resolve(void 0);
        }
    }
    entry(e) {
        const t = this.entries.get(e);
        if (void 0 !== t) return t;
        const r = {
            expected: !1,
            overlay: void 0,
            waiters: []
        };
        return this.entries.set(e, r), r;
    }
}
class rt {
    constructor(){
        this.runningCount = 0;
    }
    tryAcquire(e) {
        if (this.runningCount >= e) return;
        this.runningCount += 1;
        let t = !1;
        return ()=>{
            t || (t = !0, this.runningCount -= 1);
        };
    }
}
var nt = require("./module-27498.js"), st = require("./module-82103.js"), ot = require("./module-46612.js"), it = require("./module-43195.js"), at = require("./module-3702.js"), ct = require("./module-61754.js");
const lt = {
    generation: ct.KQ,
    source: "static",
    commit: void 0,
    builtAt: void 0
};
class ut {
    constructor(e, t = Date.now){
        this.log = e, this.now = t, this.listeners = new Set;
    }
    current() {
        return this.serving;
    }
    onDidChange(e) {
        return this.listeners.add(e), ()=>this.listeners.delete(e);
    }
    serve(e, t, r) {
        const n = (0, ct.eN)(e, t);
        if (void 0 === n) return this.log(`serving module ${e.generation.slice(0, 12)} has no telemetry identity`), void this.set(void 0);
        const s = this.serving, o = void 0 !== s && s.identity.generation === n.generation && s.identity.source === n.source;
        o && s.cause === r && s.identity.channel === n.channel || this.set({
            identity: n,
            cause: r,
            since: o ? s.since : this.now()
        });
    }
    follow(e) {
        const t = e.servedNow();
        return void 0 !== t && this.serve(t.module, t.channel, t.cause), e.onDidServe(({ module: e, channel: t, cause: r })=>this.serve(e, t, r));
    }
    clear() {
        void 0 !== this.serving && this.set(void 0);
    }
    set(e) {
        this.serving = e;
        for (const t of this.listeners)try {
            t(e);
        } catch (e) {
            this.log(`serving module change not reported: ${e instanceof Error ? e.message : String(e)}`);
        }
    }
}
var dt = require("./module-36038.js"), pt = require("./module-90417.js"), mt = require("./module-39738.js"), ht = require("./module-68892.js"), ft = require("./module-12544.js"), gt = require("./module-11491.js");
const yt = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, wt = 36700160;
function vt(e) {
    switch(e.dataOrBlobId?.case){
        case "data":
            return e.dataOrBlobId.value.length;
        case "blobIdWithData":
            return e.dataOrBlobId.value.data.length;
        default:
            return 0;
    }
}
function _t(e) {
    if ("watchVideo" !== e.subagentType || void 0 === e.selectedContext) return;
    if ((e.selectedContext.selectedVideos ?? []).length > 5) throw new Error("Video attachments are limited to 5 files.");
    if (function(e) {
        let t = 0;
        for (const r of e.selectedVideos ?? [])t += vt(r);
        return t;
    }(e.selectedContext) > wt) throw new Error(`Video attachments exceed maximum total inline size of 36700160 bytes (${Math.round(35)}MB).`);
}
function At(e, t) {
    return "number" == typeof e && Number.isFinite(e) && e >= 1 ? Math.floor(e) : t;
}
function St(e) {
    switch(e){
        case gt.dU.UNSPECIFIED:
        case gt.dU.LOCAL:
            return "local";
        case gt.dU.CLOUD:
            return "cloud";
        default:
            throw new Error(`Unsupported subagent execution environment: ${e}`);
    }
}
function bt(e) {
    switch(e.status){
        case "completed":
        case "background":
            return "success";
        case "aborted":
            return "aborted";
        case "error":
            return "error";
        default:
            return e;
    }
}
function Et(e) {
    switch(e.status){
        case "completed":
        case "background":
            return e.finalMessage?.trim() || void 0;
        case "aborted":
        case "error":
            return e.error;
        default:
            return e;
    }
}
function It(e) {
    const t = e.toolCallId.trim();
    if (t) return [
        t,
        e.resumeAgentId ?? "",
        e.forkAgentId ?? ""
    ].join("\0");
}
function Ct(e, t) {
    return `${e}:${t}`;
}
function kt(e) {
    return e.stampedRoot.length > 0 && e.stampedRoot !== e.parentSessionId ? e.stampedRoot : e.liveRoot || e.stampedRoot || e.parentSessionId;
}
async function xt(e) {
    const { args: t, resolveRequiredGlobalCommands: r } = e;
    if (void 0 === r) return t.prompt;
    const s = t.parentConversationId?.trim() || e.parentConversationId;
    try {
        const o = await r({
            ctx: e.ctx,
            parentSessionId: s,
            rootSessionId: kt({
                stampedRoot: t.rootParentConversationId?.trim() ?? "",
                liveRoot: e.rootSessionId ?? "",
                parentSessionId: s
            }),
            subagentType: t.subagentType
        });
        return (0, n.rSS)(t.prompt, o ?? []);
    } catch  {
        return t.prompt;
    }
}
function Tt(e, t) {
    const r = e.map((e)=>{
        const t = e.success ? "SUCCESS" : "FAILED";
        return `## Agent ${e.agentId} -- ${t}\n\n${e.finalMessage}`;
    }).join("\n\n---\n\n");
    return t.replace("{summaries}", r);
}
function Rt(e) {
    return Boolean(e.resumeAgentId) && (0, n.UOG)(e.prompt);
}
function Bt(e) {
    return !0 === e.interrupt && Rt(e);
}
function Pt(e) {
    return e?.requestedModel?.maxMode ?? e?.modelDetails?.maxMode;
}
function Jt(e) {
    const { retrySettings: t, subagentModelSettings: r, requestContextBlobTransport: n, blobEncryptionKey: s, clientTurnSettings: o, toolRestriction: i, subagentSmartModeAutoRun: a } = e, c = t?.stallDetectorConfig;
    return {
        ...void 0 === t?.enableAgentRetries ? {} : {
            enableAgentRetries: t.enableAgentRetries
        },
        ...void 0 === t?.fixedRetryDelayMs ? {} : {
            fixedRetryDelayMs: t.fixedRetryDelayMs
        },
        ...void 0 === t?.endlessRetries ? {} : {
            endlessRetries: !0 === t.endlessRetries?.()
        },
        ...void 0 === c?.advisoryTimeoutMs ? {} : {
            stallAdvisoryTimeoutMs: c.advisoryTimeoutMs
        },
        ...void 0 === c?.failTimeoutMs ? {} : {
            stallFailTimeoutMs: c.failTimeoutMs
        },
        ...void 0 === t?.isRunningInTest ? {} : {
            isRunningInTest: t.isRunningInTest
        },
        ...void 0 === n?.requestContextBlobTransportMode ? {} : {
            requestContextBlobTransportMode: n.requestContextBlobTransportMode
        },
        ...void 0 === n?.requestContextBlobMaxBytes ? {} : {
            requestContextBlobMaxBytes: n.requestContextBlobMaxBytes
        },
        ...void 0 === n?.requestContextDynamicInlineMaxBytes ? {} : {
            requestContextDynamicInlineMaxBytes: n.requestContextDynamicInlineMaxBytes
        },
        ...void 0 === s ? {} : {
            blobEncryptionKey: s
        },
        ...void 0 === o?.headers ? {} : {
            requestHeaders: o.headers
        },
        ...void 0 === o?.maxSteps ? {} : {
            maxSteps: o.maxSteps
        },
        ...void 0 === o?.canCreateCloudSubagents ? {} : {
            canCreateCloudSubagents: o.canCreateCloudSubagents
        },
        ...void 0 === o?.localLoopGateEnabled ? {} : {
            localLoopGateEnabled: o.localLoopGateEnabled
        },
        ...void 0 === o?.startedAsNewProject ? {} : {
            startedAsNewProject: o.startedAsNewProject
        },
        ...void 0 === o?.firstProjectOnboarding ? {} : {
            firstProjectOnboarding: o.firstProjectOnboarding
        },
        ...void 0 === o?.harness || "" === o.harness ? {} : {
            harness: o.harness
        },
        ...void 0 === o?.suggestNextPrompt ? {} : {
            suggestNextPrompt: o.suggestNextPrompt
        },
        ...void 0 === o?.clientSupportsInlineImages ? {} : {
            clientSupportsInlineImages: o.clientSupportsInlineImages
        },
        ...void 0 === o?.clientSupportsPreviewCard ? {} : {
            clientSupportsPreviewCard: o.clientSupportsPreviewCard
        },
        ...void 0 === o?.clientSupportsSendToUser ? {} : {
            clientSupportsSendToUser: o.clientSupportsSendToUser
        },
        ...void 0 === o?.clientSupportsRoutedModelUpdate ? {} : {
            clientSupportsRoutedModelUpdate: o.clientSupportsRoutedModelUpdate
        },
        ...void 0 === r ? {} : {
            selectedSubagentModels: [
                ...r.selectedSubagentModels
            ],
            subagentModelOverrides: [
                ...r.subagentModelOverrides
            ]
        },
        ...void 0 === i ? {} : {
            allowedTools: i.allowed ?? [],
            excludedTools: i.excluded
        },
        ...void 0 === a ? {} : {
            subagentSmartModeAutoRun: a
        }
    };
}
function Mt(e) {
    if (void 0 !== e) return {
        requestContextBlobTransportMode: e.requestContextBlobTransportMode,
        requestContextBlobMaxBytes: e.requestContextBlobMaxBytes,
        requestContextDynamicInlineMaxBytes: e.requestContextDynamicInlineMaxBytes
    };
}
function qt(e) {
    if (void 0 === e) return;
    const { [pt.WI]: t, ...r } = e.headers ?? {};
    return {
        headers: 0 === Object.keys(r).length ? void 0 : r,
        maxSteps: e.maxSteps,
        canCreateCloudSubagents: e.canCreateCloudSubagents,
        localLoopGateEnabled: e.localLoopGateEnabled,
        startedAsNewProject: e.startedAsNewProject,
        firstProjectOnboarding: e.firstProjectOnboarding,
        harness: e.harness,
        suggestNextPrompt: e.suggestNextPrompt,
        clientSupportsInlineImages: e.clientSupportsInlineImages,
        clientSupportsPreviewCard: e.clientSupportsPreviewCard,
        clientSupportsSendToUser: e.clientSupportsSendToUser,
        clientSupportsRoutedModelUpdate: e.clientSupportsRoutedModelUpdate
    };
}
async function Dt(e) {
    const t = e.subagentArgs.modelParameters.length > 0 ? e.subagentArgs.modelParameters : await async function(e) {
        const { args: t, maxMode: r, resolveSavedModelParameters: n } = e;
        if (void 0 === n) return [];
        const s = t.parentConversationId?.trim() || e.parentConversationId;
        try {
            return await n({
                ctx: e.ctx,
                parentSessionId: s,
                rootSessionId: kt({
                    stampedRoot: t.rootParentConversationId?.trim() ?? "",
                    liveRoot: e.rootSessionId ?? "",
                    parentSessionId: s
                }),
                modelId: t.modelId || Xe,
                ...void 0 === r ? {} : {
                    maxMode: r
                }
            }) ?? [];
        } catch  {
            return [];
        }
    }({
        ctx: e.ctx,
        args: e.subagentArgs,
        maxMode: e.parentMaxMode,
        resolveSavedModelParameters: e.resolveSavedModelParameters,
        parentConversationId: e.parentConversationId ?? "",
        rootSessionId: e.rootSessionId
    }), r = t.length > 0 || void 0 !== e.parentMaxMode ? new ue.G4({
        modelId: e.subagentArgs.modelId || Xe,
        ...void 0 === e.parentMaxMode ? {} : {
            maxMode: e.parentMaxMode
        },
        parameters: t.map((e)=>new ue.SR({
                id: e.id,
                value: e.value
            }))
    }) : void 0;
    let n;
    return void 0 === r && (n = e.subagentArgs.modelId ? new le.Gmx({
        modelId: e.subagentArgs.modelId,
        displayModelId: e.subagentArgs.modelId,
        displayName: e.subagentArgs.modelId
    }) : et()), void 0 !== e.subagentArgs.credentials.case && (void 0 !== r ? r.credentials = e.subagentArgs.credentials : void 0 !== n && (n.credentials = e.subagentArgs.credentials)), {
        requestedModel: r,
        modelDetails: n,
        lastTurnModel: {
            ...e.subagentArgs.modelId ? {
                modelId: e.subagentArgs.modelId
            } : {},
            ...void 0 === n ? {} : {
                modelDetails: n
            },
            ...void 0 === r ? {} : {
                requestedModel: r
            },
            turnOptions: Jt({
                retrySettings: e.retrySettings,
                subagentModelSettings: e.subagentModelSettings,
                requestContextBlobTransport: e.requestContextBlobTransport,
                blobEncryptionKey: e.blobEncryptionKey,
                clientTurnSettings: e.clientTurnSettings,
                toolRestriction: e.toolRestriction,
                subagentSmartModeAutoRun: e.subagentSmartModeAutoRun
            }),
            ...void 0 === e.customSubagents ? {} : {
                customSubagents: e.customSubagents
            },
            ...void 0 === e.projectFolder ? {} : {
                projectFolder: e.projectFolder
            },
            ...void 0 === e.requestContext ? {} : {
                requestContext: e.requestContext
            }
        }
    };
}
var Ot = require("./module-60525.js"), Nt = require("./module-39024.js"), Ft = require("./module-77314.js");
class Ut {
    constructor(e){
        this.options = e, this.pending = new Set, this.delayMs = e.delayMs ?? 1e3;
    }
    schedule(e) {
        this.options.isLive(e) && (this.pending.add(e), void 0 === this.flushTimer && (this.flushTimer = setTimeout(()=>{
            this.flushTimer = void 0, this.flush();
        }, this.delayMs)));
    }
    cancel(e) {
        this.pending.delete(e), this.clearTimerIfIdle();
    }
    cancelAll() {
        this.pending.clear(), void 0 !== this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = void 0);
    }
    flush() {
        const e = [
            ...this.pending
        ];
        this.pending.clear();
        for (const t of e)this.options.isLive(t) && this.options.emitUpdated(t);
    }
    clearTimerIfIdle() {
        0 === this.pending.size && void 0 !== this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = void 0);
    }
}
function Lt(e) {
    return new le.QFf({
        action: {
            case: "backgroundTaskCompletionAction",
            value: new le.Kwc({
                completions: [
                    ...e
                ]
            })
        }
    });
}
function $t(e) {
    if ("backgroundTaskCompletionAction" === e.action.case) return e.action.value.completions.map((e)=>e.taskId).filter((e)=>e.length > 0);
}
function Qt(e) {
    switch(e){
        case Ot.NX.SHELL:
            return "shell";
        case Ot.NX.SUBAGENT:
            return "subagent";
        case Ot.NX.UNSPECIFIED:
        case void 0:
            return;
        default:
            return e;
    }
}
function jt(e) {
    switch(e){
        case Ot.wy.RUNNING:
            return "running";
        case Ot.wy.QUEUED:
            return "queued";
        case Ot.wy.UNSPECIFIED:
        case void 0:
            return;
        default:
            return e;
    }
}
function Gt(e) {
    switch(e){
        case "shell":
            return Ot.NX.SHELL;
        case "subagent":
            return Ot.NX.SUBAGENT;
        default:
            return e;
    }
}
function Ht(e) {
    switch(e){
        case "running":
            return Ot.wy.RUNNING;
        case "queued":
            return Ot.wy.QUEUED;
        default:
            return e;
    }
}
function zt(e) {
    return {
        id: e.id,
        kind: Gt(e.kind),
        state: Ht(e.state),
        ownerId: e.ownerId,
        hasAbort: e.hasAbort,
        metadata: e.metadata
    };
}
var Wt = require("./module-16074.js");
function Vt(e, t, r) {
    return t.has(e) ? t.get(e) : r;
}
function Kt(e, t, r) {
    const n = t.get(e);
    return void 0 === n || void 0 === r ? r ?? n : Math.max(n, r);
}
function Yt(e, t) {
    const r = Vt(e.sessionId, t.titles, e.title), n = Kt(e.sessionId, t.updatedAt), s = t.modelIds.get(e.sessionId), o = t.workspacePaths.get(e.sessionId);
    return {
        sessionId: e.sessionId,
        status: Ot.g6.IDLE,
        lastEventId: BigInt(0),
        queuedTurnIds: [],
        ...void 0 === r ? {} : {
            title: r
        },
        ...void 0 === s ? {} : {
            modelId: s
        },
        ...(0, Wt.Ox)(void 0 === o ? void 0 : {
            workspacePaths: o,
            displayPath: t.workspaceDisplayPaths.get(e.sessionId)
        }),
        ...void 0 === e.forkedFromSessionId ? {} : {
            forkedFromSessionId: e.forkedFromSessionId
        },
        ...void 0 === e.parent ? {} : {
            parent: {
                parentSessionId: e.parent.parentSessionId,
                parentToolCallId: e.parent.parentToolCallId,
                rootSessionId: e.parent.rootSessionId
            }
        },
        ...void 0 === n ? {} : {
            updatedAt: dt.Timestamp.fromDate(new Date(n))
        }
    };
}
var Zt = require("./module-80962.js"), Xt = require("./module-69457.js"), er = require("./module-27322.js");
function tr(e) {
    return e.startsWith("bc-");
}
function rr(e) {
    const t = new Set;
    return sr(e, t, new Set), [
        ...t
    ];
}
async function nr(e, t, r, n, s) {
    if (0 !== r.size) {
        ir(t, r, s, new Set), await async function(e, t, r, n, s) {
            const o = {};
            for (const [i, a] of Object.entries(t.subagentStateRefs ?? {})){
                const c = r.get(i) ?? i, l = await cr(e, n, a, r, s?.get(i));
                if (void 0 !== l) {
                    o[c] = l;
                    continue;
                }
                if (void 0 === (t.subagentStates[c] ?? t.subagentStates[i])) throw new Error(`Agent host fork could not load subagent state for child: ${i}`);
            }
            t.subagentStateRefs = o;
        }(e, t, r, n, s), t.subagentThreads = lr(t.subagentThreads, r);
        for (const e of Object.values(t.subagentRunsByParentToolCallId ?? {}))void 0 !== e.subagentId && (e.subagentId = r.get(e.subagentId) ?? e.subagentId);
    }
}
function sr(e, t, r) {
    if (!r.has(e)) {
        r.add(e);
        for (const r of Object.keys(e.subagentStates ?? {}))or(t, r);
        for (const r of Object.keys(e.subagentStateRefs ?? {}))or(t, r);
        for (const r of Object.keys(e.subagentThreads ?? {}))or(t, r);
        for (const r of Object.values(e.subagentRunsByParentToolCallId ?? {}))or(t, r.subagentId);
        for (const n of Object.values(e.subagentStates ?? {}))void 0 !== n.conversationState && sr(n.conversationState, t, r);
    }
}
function or(e, t) {
    const r = t?.trim();
    void 0 !== r && r.length > 0 && !tr(r) && e.add(r);
}
function ir(e, t, r, n) {
    if (n.has(e)) return;
    n.add(e);
    const s = {};
    for (const [o, i] of Object.entries(e.subagentStates ?? {})){
        const e = t.get(o) ?? o, a = r?.get(o);
        void 0 !== a ? i.conversationState = a.clone() : void 0 !== i.conversationState && ar(i.conversationState, t, r, n), s[e] = i;
    }
    e.subagentStates = s;
}
function ar(e, t, r, n) {
    ir(e, t, r, n), e.subagentThreads = lr(e.subagentThreads, t);
    for (const r of Object.values(e.subagentRunsByParentToolCallId ?? {}))void 0 !== r.subagentId && (r.subagentId = t.get(r.subagentId) ?? r.subagentId);
    e.subagentStateRefs = lr(e.subagentStateRefs, t);
}
async function cr(e, t, r, n, s) {
    if (void 0 === t) return r;
    const o = await t.getBlob(e, r);
    if (void 0 === o) return;
    const i = le.aK_.fromBinary(o);
    void 0 !== s ? i.conversationState = s.clone() : void 0 !== i.conversationState && ar(i.conversationState, n, void 0, new Set);
    const a = i.toBinary(), c = await (0, er.Bk)(a);
    return await t.setBlob(e, c, a), c;
}
function lr(e, t) {
    const r = {};
    for (const [n, s] of Object.entries(e ?? {}))r[t.get(n) ?? n] = s;
    return r;
}
var ur = require("./module-56126.js");
async function dr(e, t, r) {
    if (r.visiting.has(r.source.sessionId)) return [];
    r.visiting.add(r.source.sessionId);
    const n = new Set(rr(r.copiedHistory));
    if (r.includeCurrentChildren) for (const s of (await async function(e, t, r) {
        const n = new Set;
        for (const e of t.listLiveSessions())!0 !== e.deleted && e.parent?.parentSessionId === r && n.add(e.sessionId);
        const s = t.sessionCatalog;
        if (void 0 === s) return [
            ...n
        ];
        const o = await s.listSessions(e, {
            parentSessionId: r,
            limit: Zt.KH
        });
        for (const e of o)e.parent?.parentSessionId === r && n.add(e.sessionId);
        return [
            ...n
        ];
    }(e, t, r.source.sessionId)))n.add(s);
    const s = new Map, o = [];
    try {
        for (const i of n){
            if (i === r.source.sessionId || i === r.destinationParentSessionId || r.idRemap.has(i) || tr(i)) continue;
            const n = await hr(e, t, r.source.sessionId, i), a = crypto.randomUUID();
            if (r.idRemap.set(i, a), void 0 === n) continue;
            t.reserveSessionId(a), r.reservedChildIds.push(a);
            const c = await mr(e, {
                copiedHistory: r.copiedHistory,
                childId: i,
                live: n.session,
                includeCurrentChildren: r.includeCurrentChildren,
                blobStore: r.source.store.getBlobStore()
            }), l = c.history, u = await dr(e, t, {
                source: n.session,
                copiedHistory: l,
                destinationParentSessionId: a,
                destinationRootSessionId: r.destinationRootSessionId,
                includeCurrentChildren: r.includeCurrentChildren,
                idRemap: r.idRemap,
                visiting: r.visiting,
                reservedChildIds: r.reservedChildIds
            });
            let d;
            c.writeBack && s.set(i, l);
            try {
                d = await n.session.store.createFork(e, {
                    sessionId: a,
                    initialHistory: l
                });
            } catch (e) {
                throw await fr(u, new Set), e;
            }
            o.push({
                sourceSessionId: n.session.sessionId,
                destinationSessionId: a,
                destinationParentSessionId: r.destinationParentSessionId,
                destinationRootSessionId: r.destinationRootSessionId,
                parentToolCallId: n.parentToolCallId,
                history: l,
                sessionOptions: n.session.sessionOptions,
                owningClientInstanceId: n.session.owningClientInstanceId,
                store: d,
                children: u
            });
        }
        return await nr(e, r.copiedHistory, r.idRemap, r.source.store.getBlobStore(), s), r.visiting.delete(r.source.sessionId), o;
    } catch (e) {
        throw await fr(o, new Set), e;
    }
}
async function pr(e, t, r, n) {
    for (const s of t)await n(e, s), r.push(s.destinationSessionId), await pr(e, s.children, r, n);
}
async function mr(e, t) {
    if (t.includeCurrentChildren) return {
        history: (0, ur.ks)(t.live.store.getConversationState()),
        writeBack: !0
    };
    const r = await async function(e, t, r, n) {
        const s = t.subagentStates?.[r]?.conversationState;
        if (void 0 !== s) return (0, ur.ks)(s);
        const o = t.subagentStateRefs?.[r];
        if (void 0 === o) return;
        const i = await n.getBlob(e, o);
        if (void 0 === i) return;
        const a = le.aK_.fromBinary(i);
        if (void 0 === a.conversationState) return;
        return (0, ur.ks)(a.conversationState);
    }(e, t.copiedHistory, t.childId, t.blobStore);
    return void 0 === r ? {
        history: new le.Y9z,
        writeBack: !1
    } : {
        history: r,
        writeBack: !0
    };
}
async function hr(e, t, r, n) {
    let s, o = t.getSession(n);
    if (void 0 === o || !0 === o.deleted) {
        const i = t.sessionCatalog;
        if (void 0 === i) return;
        const a = (await i.listSessions(e, {
            parentSessionId: r,
            limit: Zt.KH
        })).find((e)=>e.sessionId === n);
        let c;
        if (c = void 0 === a ? void 0 : a.parent?.parentSessionId !== r ? "other" : a.parent.parentToolCallId, "other" === c) return;
        if (void 0 !== c && (s = c), void 0 === i.ensureLoaded || !await i.ensureLoaded(e, n)) {
            if (void 0 !== c) throw new Error(`Agent host fork could not load child session: ${n}`);
            return;
        }
        if (o = t.getSession(n), void 0 === o || !0 === o.deleted) throw new Error(`Agent host fork could not load child session: ${n}`);
    }
    return o.parent?.parentSessionId === r ? {
        session: o,
        parentToolCallId: o.parent.parentToolCallId
    } : void 0 === o.parent && void 0 !== s ? {
        session: o,
        parentToolCallId: s
    } : void 0;
}
async function fr(e, t) {
    for (const r of e)await fr(r.children, t), t.has(r.destinationSessionId) || await r.store.dispose?.();
}
var gr = require("./module-91693.js");
async function yr(e, t, r, n) {
    const s = function(e) {
        const t = new Set, r = [];
        for (const n of e){
            const e = (0, er.nj)(n);
            t.has(e) || (t.add(e), r.push(n));
        }
        return r;
    }(r), o = [], i = [], a = [];
    let c = [], l = BigInt(0);
    for (const [r, u] of s.entries()){
        const d = await t.getBlob(e, u);
        if (void 0 === d) {
            i.push(u);
            continue;
        }
        const p = BigInt(d.byteLength);
        if (void 0 !== n && n > BigInt(0)) {
            if (0 === o.length && p > n) {
                a.push(u);
                continue;
            }
            if (l + p > n) {
                c = s.slice(r);
                break;
            }
        }
        l += p, o.push({
            blobId: (0, er.Fo)(u),
            data: (0, er.Fo)(d)
        });
    }
    return {
        blobs: o,
        missingBlobIds: i,
        oversizeBlobIds: a,
        remainingBlobIds: c
    };
}
function wr(e, t) {
    const r = vr(e, t), n = _r(e, t);
    return {
        sessionId: e.sessionId,
        workspacePaths: [
            ...r
        ],
        ...void 0 === n ? {} : {
            owningClientInstanceId: n
        },
        ...void 0 === e.parent ? {} : {
            parent: e.parent
        }
    };
}
function vr(e, t) {
    if (void 0 !== e.sessionOptions) return e.sessionOptions.workspacePaths ?? [];
    const r = t.catalogWorkspacePaths.get(e.sessionId);
    if (void 0 !== r) return r;
    const n = e.parent?.parentSessionId;
    if (void 0 === n) return [];
    const s = t.sessions.get(n);
    return void 0 !== s ? vr(s, t) : t.catalogWorkspacePaths.get(n) ?? [];
}
function _r(e, t) {
    if (void 0 !== e.owningClientInstanceId) return e.owningClientInstanceId;
    const r = t.catalogOwningClientInstanceIds.get(e.sessionId);
    if (void 0 !== r) return r;
    const n = e.parent?.parentSessionId;
    if (void 0 === n) return;
    const s = t.sessions.get(n);
    return void 0 !== s ? _r(s, t) : t.catalogOwningClientInstanceIds.get(n);
}
function Ar(e) {
    e.updatedAt = Math.max(Date.now(), e.updatedAt ?? 0);
}
var Sr = require("./module-11541.js");
class br {
    constructor(){
        this.fanout = new Sr.W;
    }
    async *subscribe(e, t, r) {
        const n = {
            events: new Sr.l,
            notify: void 0,
            matches: r ?? (()=>!0),
            announcedIds: new Set,
            pendingDeletes: new Set,
            snapshotPending: !0,
            filtered: void 0 !== r
        };
        this.fanout.add(n);
        try {
            const r = (await t()).filter((e)=>!n.pendingDeletes.has(e.sessionId));
            for (const e of r)n.announcedIds.add(e.sessionId);
            for(n.snapshotPending = !1, n.pendingDeletes.clear(), yield {
                event: {
                    case: "snapshot",
                    value: {
                        sessions: r.map(ur.J5)
                    }
                }
            }; !e.signal.aborted;){
                const t = n.events.shift();
                void 0 === t ? await this.fanout.waitForEvent(e, n) : yield t;
            }
        } finally{
            this.fanout.delete(n);
        }
    }
    emitAdded(e, t) {
        this.fanout.forEach((r)=>{
            r.filtered && !r.matches(t) || (r.announcedIds.has(e.sessionId) ? this.push(r, {
                event: {
                    case: "updated",
                    value: {
                        session: e
                    }
                }
            }) : (r.announcedIds.add(e.sessionId), this.push(r, {
                event: {
                    case: "added",
                    value: {
                        session: e
                    }
                }
            })));
        });
    }
    emitUpdated(e, t) {
        this.fanout.forEach((r)=>{
            if (!r.filtered) return void this.push(r, {
                event: {
                    case: "updated",
                    value: {
                        session: e
                    }
                }
            });
            const n = r.matches(t), s = r.announcedIds.has(e.sessionId);
            if (!n || !s) return n && !s ? (r.announcedIds.add(e.sessionId), void this.push(r, {
                event: {
                    case: "added",
                    value: {
                        session: e
                    }
                }
            })) : void (!n && s && (r.announcedIds.delete(e.sessionId), this.push(r, {
                event: {
                    case: "deleted",
                    value: {
                        sessionId: e.sessionId
                    }
                }
            })));
            this.push(r, {
                event: {
                    case: "updated",
                    value: {
                        session: e
                    }
                }
            });
        });
    }
    emitDeleted(e) {
        this.fanout.forEach((t)=>{
            if (t.snapshotPending) return t.pendingDeletes.add(e), t.announcedIds.delete(e), void this.push(t, {
                event: {
                    case: "deleted",
                    value: {
                        sessionId: e
                    }
                }
            });
            t.filtered && !t.announcedIds.has(e) || (t.announcedIds.delete(e), this.push(t, {
                event: {
                    case: "deleted",
                    value: {
                        sessionId: e
                    }
                }
            }));
        });
    }
    push(e, t) {
        e.events.push((0, ur.q4)(t)), this.fanout.wake(e);
    }
}
var Er = require("./module-52883.js");
function Ir(e, t, r, n) {
    const s = function(e, t) {
        const r = e.get(t);
        if (void 0 === r || r.deleted) return [];
        const n = new Map;
        for (const t of e.values()){
            const e = t.parent?.parentSessionId;
            if (void 0 === e || t.deleted) continue;
            const r = n.get(e) ?? [];
            r.push(t), n.set(e, r);
        }
        const s = [], o = [
            r
        ], i = new Set;
        for(let e = o.shift(); void 0 !== e; e = o.shift())if (!i.has(e.sessionId)) {
            i.add(e.sessionId), s.push(e);
            for (const t of n.get(e.sessionId) ?? [])o.push(t);
        }
        return s;
    }(e, t), o = new Set(s.map((e)=>e.sessionId));
    for (const t of s){
        const r = void 0 === t.parent ? void 0 : e.get(t.parent.parentSessionId);
        if (void 0 === r || !o.has(r.sessionId)) continue;
        r.backgroundWorkRegistry.listWork({
            kind: "subagent",
            state: "running"
        }).some((e)=>e.id === t.sessionId) && r.backgroundWorkRegistry.suppress(r.sessionId, t.sessionId);
    }
    let i = !1;
    for (const e of s)(0, Er.He)(e, r, n) > 0 && (i = !0);
    return i;
}
async function Cr(e, t, r, n) {
    if (void 0 === n) return;
    const s = await async function(e, t, r) {
        const n = await e.sessionCatalog?.listSessions(t, {
            limit: Zt.KH
        }, (e)=>e.sessionId === r) ?? [];
        return n.find((e)=>e.sessionId === r);
    }(e, t, r);
    if (void 0 !== s && !kr(s.parent, n)) return;
    const o = e.sessions.has(r);
    await e.ensureSessionLoaded(t, r);
    const i = e.sessions.get(r);
    if (void 0 !== i && !0 !== i.deleted) {
        if (void 0 !== i.parent) return kr(i.parent, n) ? i : void 0;
        if (!o) return i.parent = n, e.emitSessionUpdated(i), i;
    }
}
function kr(e, t) {
    return e?.parentSessionId === t.parentSessionId && e.rootSessionId === t.rootSessionId;
}
var xr = require("./module-19209.js");
const Tr = (0, s.h)("agent-host");
class Rr {
    constructor(e){
        this.options = e, this.sessions = new Map, this.creatingSessionIds = new Set, this.deletingSessionIds = new Set, this.announcedSessions = new WeakSet, this.sessionTitles = new Map, this.archivedSessionIds = new Set, this.catalogUpdatedAt = new Map, this.catalogModelIds = new Map, this.catalogWorkspacePaths = new Map, this.catalogWorkspaceDisplayPaths = new Map, this.catalogOwningClientInstanceIds = new Map, this.catalogHostOwnedStorage = new Map, this.sessionWatchers = new br, this.appendSessionUpdates = new Ut({
            isLive: (e)=>this.isLiveSessionInstance(e),
            emitUpdated: (e)=>this.emitSessionUpdatedNow(e)
        });
        const t = e.sessionCatalog?.onTitleChanged;
        void 0 !== t && (this.unsubscribeCatalogTitleChanged = t((e, t)=>{
            this.applyExternalSessionTitle(e, t);
        }));
        const r = e.sessionCatalog?.onArchivedChanged;
        void 0 !== r && (this.unsubscribeCatalogArchivedChanged = r((e, t)=>{
            this.applyExternalSessionArchived(e, t);
        }));
        const n = e.sessionCatalog?.onModelChanged;
        void 0 !== n && (this.unsubscribeCatalogModelChanged = n((e, t)=>{
            this.applyExternalSessionModel(e, t);
        }));
        const s = e.sessionCatalog?.onHostOwnedStorageChanged;
        void 0 !== s && (this.unsubscribeCatalogHostOwnedStorageChanged = s((e, t)=>{
            this.applyExternalSessionHostOwnedStorage(e, t);
        }));
    }
    dispose() {
        return this.appendSessionUpdates.cancelAll(), this.disposePromise ??= this.disposeInternal(), this.disposePromise;
    }
    async deleteSession(e, t) {
        this.ensureNotDisposing(), this.validateSessionId(t.sessionId);
        const r = this.sessions.get(t.sessionId);
        if (void 0 === r) {
            const r = await this.hasLiveOrCatalogSession(e, t.sessionId);
            if (this.sessionWatchers.emitDeleted(t.sessionId), this.catalogWorkspacePaths.delete(t.sessionId), this.catalogWorkspaceDisplayPaths.delete(t.sessionId), this.catalogOwningClientInstanceIds.delete(t.sessionId), this.catalogUpdatedAt.delete(t.sessionId), this.catalogModelIds.delete(t.sessionId), this.sessionTitles.delete(t.sessionId), !r) throw new Error(`Agent host session not found: ${t.sessionId}`);
            return this.options.onSessionDeleted?.(t.sessionId), {};
        }
        const n = !0 === this.options.subagentsAsSessions && void 0 === r.parent ? function(e, t) {
            const r = [];
            for (const [n, s] of e)n !== t && s.parent?.rootSessionId === t && !0 !== s.deleted && r.push(n);
            return [
                ...r,
                t
            ];
        }(this.sessions, t.sessionId) : [
            t.sessionId
        ];
        for (const e of n)await this.deleteHostedSession(e);
        return {};
    }
    async interruptTurn(e, t) {
        if (this.ensureNotDisposing(), !0 === t.sessionTree) return this.validateSessionId(t.sessionId), {
            interrupted: Ir(this.sessions, t.sessionId, t.reason, {
                initiatedBy: t.initiatedBy
            })
        };
        const r = this.getSession(t.sessionId);
        return {
            interrupted: (0, Er.ht)(r, t.turnId, t.reason, {
                initiatedBy: t.initiatedBy
            })
        };
    }
    async cancelQueuedTurn(e, t) {
        this.ensureNotDisposing();
        const r = this.getSession(t.sessionId), n = (0, Er.VG)(r, t.turnId, t.reason, {
            initiatedBy: t.initiatedBy
        });
        return n && this.emitSessionUpdated(r), {
            cancelled: n
        };
    }
    async respondToInteraction(e, t) {
        this.ensureNotDisposing();
        const r = this.getSession(t.sessionId).interactionRegistry, { answer: n } = t;
        return {
            status: "interactionResponse" === n.case ? r.respond(t.interactionId, n.value) : r.respondToHostQuestion(t.interactionId, n)
        };
    }
    watchSessionInteractions(e, t) {
        return this.ensureNotDisposing(), this.getSession(t.sessionId).interactionRegistry.watch(e);
    }
    async createSession(e, t, r) {
        this.ensureNotDisposing(), this.reserveSessionId(t.sessionId);
        try {
            return await this.createReservedSession(e, t, {
                ...void 0 === r?.parent ? {} : {
                    parent: r.parent
                },
                initialHistoryMode: r?.initialHistoryMode
            });
        } finally{
            this.creatingSessionIds.delete(t.sessionId);
        }
    }
    async forkSession(e, t) {
        this.ensureNotDisposing(), await this.ensureSessionLoaded(e, t.sessionId);
        const r = this.getSession(t.sessionId), n = crypto.randomUUID();
        this.reserveSessionId(n);
        const s = [], o = [];
        let i = [];
        try {
            const a = this.getSessionHistoryForFork(r, t.throughTurnId);
            let c;
            i = await dr(e, {
                listLiveSessions: ()=>this.sessions.values(),
                getSession: (e)=>this.sessions.get(e),
                sessionCatalog: this.options.sessionCatalog,
                reserveSessionId: (e)=>this.reserveSessionId(e)
            }, {
                source: r,
                copiedHistory: a,
                destinationParentSessionId: n,
                destinationRootSessionId: n,
                includeCurrentChildren: void 0 === t.throughTurnId,
                idRemap: new Map,
                visiting: new Set,
                reservedChildIds: s
            });
            try {
                c = await r.store.createFork(e, {
                    sessionId: n,
                    initialHistory: a
                }), await this.createReservedSession(e, {
                    sessionId: n,
                    initialHistory: a,
                    ...void 0 === r.sessionOptions ? {} : {
                        sessionOptions: r.sessionOptions
                    },
                    ...void 0 === r.owningClientInstanceId ? {} : {
                        owningClientInstanceId: r.owningClientInstanceId
                    }
                }, {
                    forkedFromSessionId: r.sessionId
                }, c), o.push(n), await pr(e, i, o, async (e, t)=>{
                    await this.createReservedSession(e, {
                        sessionId: t.destinationSessionId,
                        initialHistory: t.history,
                        ...void 0 === t.sessionOptions ? {} : {
                            sessionOptions: t.sessionOptions
                        },
                        ...void 0 === t.owningClientInstanceId ? {} : {
                            owningClientInstanceId: t.owningClientInstanceId
                        }
                    }, {
                        forkedFromSessionId: t.sourceSessionId,
                        parent: {
                            parentSessionId: t.destinationParentSessionId,
                            parentToolCallId: t.parentToolCallId,
                            rootSessionId: t.destinationRootSessionId
                        }
                    }, t.store);
                });
            } catch (t) {
                throw await async function(e, t, r, n, s) {
                    for (const r of [
                        ...t
                    ].reverse())s(r) && await n(e, r);
                    await fr(r, new Set(t));
                }(e, o, i, async (e, t)=>{
                    await this.deleteSession(e, {
                        sessionId: t
                    });
                }, (e)=>this.sessions.has(e)), void 0 === c || o.includes(n) || await c.dispose?.(), t;
            }
            return {
                sessionId: n
            };
        } finally{
            this.creatingSessionIds.delete(n);
            for (const e of s)this.creatingSessionIds.delete(e);
        }
    }
    async createReservedSession(e, t, r, n, s) {
        const { session: o, events: i } = await this.options.createHostedSession(e, t, n, {
            ...void 0 === r?.parent ? {} : {
                parent: r.parent
            },
            ...void 0 === r?.forkedFromSessionId ? {} : {
                forkedFromSessionId: r.forkedFromSessionId
            },
            initialHistoryMode: r?.initialHistoryMode,
            hostHooks: {
                queueBackgroundWakeup: (e)=>{
                    this.queueHostOwnedBackgroundWakeup(t.sessionId, e);
                },
                createChildSession: async (e, r, n, s)=>{
                    const o = await async function(e, t, r, n, s) {
                        const o = e.sessions.get(r);
                        if (void 0 !== o) {
                            if (!0 === o.deleted) return;
                            return void 0 !== n && void 0 !== o.parent && o.parent.parentSessionId === n.parentSessionId && o.parent.rootSessionId === n.rootSessionId ? o : void 0 === o.parent && s ? (void 0 !== n && (o.parent = n, e.emitSessionUpdated(o)), o) : void 0;
                        }
                        if (!s) return;
                        await e.ensureSessionLoaded(t, r);
                        const i = e.sessions.get(r);
                        return void 0 !== i && !0 !== i.deleted ? void 0 !== i.parent ? void 0 !== n && i.parent.parentSessionId === n.parentSessionId && i.parent.rootSessionId === n.rootSessionId ? i : void 0 : (void 0 !== n && (i.parent = n, e.emitSessionUpdated(i)), i) : void 0;
                    }(this.sessionTreeHost(), e, r.sessionId, n?.parent, !0 === n?.adoptVerifiedDurableChild);
                    if (void 0 !== o) return o;
                    if (!0 === n?.requireExistingChild) {
                        const t = await Cr(this.sessionTreeHost(), e, r.sessionId, n.parent);
                        if (void 0 === t) throw new Error(`Subagent ${r.sessionId} not found.`);
                        return t;
                    }
                    const i = function(e, t) {
                        if (void 0 === e && void 0 === t) return;
                        const r = {
                            ...e,
                            ...t
                        };
                        return {
                            ...r,
                            ...void 0 === r.workspacePaths ? {} : {
                                workspacePaths: [
                                    ...r.workspacePaths
                                ]
                            },
                            ...void 0 === r.owningProject ? {} : {
                                owningProject: {
                                    ...r.owningProject
                                }
                            },
                            ...void 0 === r.localSubagentLimits ? {} : {
                                localSubagentLimits: {
                                    ...r.localSubagentLimits
                                }
                            }
                        };
                    }(t.sessionOptions, r.sessionOptions), a = r.owningClientInstanceId ?? r.clientInstanceId ?? t.owningClientInstanceId ?? t.clientInstanceId, c = {
                        ...r,
                        ...void 0 === i ? {} : {
                            sessionOptions: i
                        },
                        ...void 0 === a ? {} : {
                            owningClientInstanceId: a
                        }
                    };
                    if (void 0 === r.initialHistory) await this.createSession(e, c, n);
                    else {
                        let s;
                        this.reserveSessionId(r.sessionId);
                        try {
                            s = await this.getSession(t.sessionId).store.createFork(e, {
                                sessionId: r.sessionId,
                                initialHistory: r.initialHistory
                            }), await this.createReservedSession(e, c, void 0 === n?.parent ? void 0 : {
                                parent: n.parent
                            }, s), s = void 0;
                        } finally{
                            await s?.dispose?.(), this.creatingSessionIds.delete(r.sessionId);
                        }
                    }
                    return this.getSession(r.sessionId);
                }
            }
        }, s);
        o.forkedFromSessionId = r?.forkedFromSessionId, i.setOnAppend(()=>{
            Ar(o), this.appendSessionUpdates.schedule(o);
        }), o.onAwaitingInputChanged = ()=>this.emitSessionUpdated(o), o.onBackgroundWorkChanged = ()=>this.emitSessionUpdated(o), this.sessions.set(t.sessionId, o), o.store.markLive?.();
        const a = o.owningClientInstanceId?.trim();
        return void 0 !== a && a.length > 0 && this.catalogOwningClientInstanceIds.set(t.sessionId, a), void 0 !== o.sessionOptions?.workspacePaths && this.catalogWorkspacePaths.set(t.sessionId, o.sessionOptions.workspacePaths), this.emitSessionUpdatedNow(o), {};
    }
    hasHostedSession(e) {
        return !!this.creatingSessionIds.has(e) || this.hasLiveSession(e);
    }
    hasLiveSession(e) {
        const t = this.sessions.get(e);
        return void 0 !== t && !0 !== t.deleted;
    }
    servingModule() {
        return this.options.servingModule?.current();
    }
    onDidChangeServingModule(e) {
        return this.options.servingModule?.onDidChange(e) ?? (()=>{});
    }
    async hasSession(e, t) {
        return {
            exists: this.hasHostedSession(t.sessionId)
        };
    }
    countHostedSessions() {
        let e = 0;
        for (const t of this.sessions.values())!0 !== t.deleted && (e += 1);
        for (const t of this.creatingSessionIds){
            const r = this.sessions.get(t);
            void 0 !== r && !0 !== r.deleted || (e += 1);
        }
        return e += this.deletingSessionIds.size, e;
    }
    async listSessions(e, t) {
        return {
            sessions: await this.listSessionSummaries(e, t)
        };
    }
    watchSessions(e, t) {
        const r = void 0 === t ? void 0 : {
            workspacePathsFilter: t.workspacePathsFilter,
            matchAnyWorkspaceRoot: t.matchAnyWorkspaceRoot,
            ownerClientInstanceId: t.ownerClientInstanceId,
            includeOwnerUnrootedSessions: t.includeOwnerUnrootedSessions
        }, n = function(e) {
            return void 0 !== e && ((e.workspacePathsFilter?.length ?? 0) > 0 || !0 === e.includeOwnerUnrootedSessions);
        }(r);
        return this.sessionWatchers.subscribe(e, ()=>this.listSessionSummaries(e, r), n ? (e)=>(0, Nt.zl)(e, r) : void 0);
    }
    async listWorkspaces(e, t) {
        const r = await this.options.workspaceCatalog?.listWorkspaces(e);
        if (void 0 === r) throw new Wt.YE;
        return {
            workspaces: (0, Wt.Qj)(r)
        };
    }
    async setSessionTitle(e, t) {
        if (this.ensureNotDisposing(), this.validateSessionId(t.sessionId), !await this.hasLiveOrCatalogSession(e, t.sessionId)) throw new Error(`Agent host session not found: ${t.sessionId}`);
        const r = t.title;
        if (void 0 === r) return await this.options.sessionCatalog?.setTitle?.(e, t.sessionId, void 0), void this.emitSessionCatalogFieldsUpdated(t.sessionId);
        this.sessionTitles.set(t.sessionId, r);
        const n = this.sessions.get(t.sessionId);
        void 0 !== n && !0 !== n.deleted && (n.title = r), await this.options.sessionCatalog?.setTitle?.(e, t.sessionId, r), this.emitSessionCatalogFieldsUpdated(t.sessionId);
    }
    async sendMessage(e, t) {
        return this.sendAction(e, {
            sessionId: t.sessionId,
            action: (0, pt.J2)(t.text, t.messageId),
            modelId: t.modelId,
            modelDetails: t.modelDetails,
            requestedModel: t.requestedModel,
            turnOptions: t.turnOptions
        });
    }
    async sendAction(e, t) {
        if (this.ensureNotDisposing(), (0, gr.lw)(t) && "userMessageAction" !== t.action.action.case) throw new gr.Ym;
        (0, pt.G5)(t.turnOptions);
        const r = this.getSession(t.sessionId), n = t.replaceQueuedTurnId, s = {
            getSendNowBehavior: this.options.getSendNowBehavior,
            emitSessionUpdated: (e)=>this.emitSessionUpdated(e),
            enqueueOrStartAction: (e, t, r)=>this.enqueueOrStartAction(e, t, r)
        };
        return void 0 !== n && "" !== n ? (0, gr.OC)({
            session: r,
            request: t,
            turnId: n,
            host: s
        }) : (0, gr.Sd)(t) ? (0, gr.Kg)(r, t, s.getSendNowBehavior) ?? (0, gr.fP)({
            ctx: e,
            session: r,
            request: t,
            host: s
        }) : this.enqueueOrStartAction(e, t);
    }
    async enqueueOrStartAction(e, t, r) {
        const n = this.getSession(t.sessionId), s = void 0 === t.action ? void 0 : (0, xr.xL)(n, t.action);
        if ("steer" === s?.kind) return {
            turnId: s.turnId,
            deliveredAs: Ot.CD.STEERED
        };
        if ("reject" === s?.kind) throw new Error(`Agent host rejected context injection: ${s.reason}`);
        const o = this.findExistingBackgroundWakeupTurn(n, t.action);
        if (void 0 !== o) return {
            turnId: o,
            deliveredAs: Ot.CD.QUEUE
        };
        const i = crypto.randomUUID(), a = (0, pt.pA)(t.turnOptions), c = void 0 === t.requestedModel ? a : {
            ...a,
            requestedModel: t.requestedModel
        }, l = t.modelDetails ?? (void 0 === t.requestedModel ? this.options.createModelDetails?.(t.modelId) ?? et(t.modelId) : void 0), u = this.options.getRunOptions?.({
            sessionId: t.sessionId,
            turnId: i,
            runOptions: c
        }) ?? c, d = "enqueue" === s?.kind && void 0 !== t.action && (0, xr.n$)(t.action) ? {
            ...u,
            generationUUID: i
        } : u;
        return Ar(n), n.lastTurnModel = function(e) {
            const { previous: t, request: r } = e, n = r.requestContextDecoration ?? t?.requestContextDecoration;
            return {
                ...void 0 === r.modelId ? {} : {
                    modelId: r.modelId
                },
                ...void 0 === r.modelDetails ? {} : {
                    modelDetails: r.modelDetails
                },
                ...void 0 === r.requestedModel ? {} : {
                    requestedModel: r.requestedModel
                },
                ...void 0 === r.turnOptions ? {} : {
                    turnOptions: r.turnOptions
                },
                ...void 0 === n ? {} : {
                    requestContextDecoration: n
                },
                ...void 0 === t?.customSubagents ? {} : {
                    customSubagents: t.customSubagents
                },
                ...void 0 === t?.projectFolder ? {} : {
                    projectFolder: t.projectFolder
                },
                ...void 0 === t?.requestContext ? {} : {
                    requestContext: t.requestContext
                },
                ...void 0 === t?.requestId ? {} : {
                    requestId: t.requestId
                },
                ...void 0 === t?.parentRequestId ? {} : {
                    parentRequestId: t.parentRequestId
                },
                ...void 0 === t?.rootParentRequestId ? {} : {
                    rootParentRequestId: t.rootParentRequestId
                }
            };
        }({
            previous: n.lastTurnModel,
            request: {
                ...void 0 === t.modelId ? {} : {
                    modelId: t.modelId
                },
                ...void 0 === l ? {} : {
                    modelDetails: l
                },
                ...void 0 === t.requestedModel ? {} : {
                    requestedModel: t.requestedModel
                },
                ...void 0 === t.turnOptions ? {} : {
                    turnOptions: t.turnOptions
                },
                ...void 0 === t.requestContextDecoration ? {} : {
                    requestContextDecoration: t.requestContextDecoration
                }
            }
        }), this.rememberBackgroundWakeupTurn(n, t.action, i), (0, Er.rW)({
            ctx: e,
            request: "enqueue" === s?.kind ? {
                ...t,
                action: s.action
            } : t,
            session: n,
            turnId: i,
            modelDetails: l,
            runOptions: d,
            onSessionUpdated: (e)=>this.emitSessionUpdated(e),
            ...!0 === r?.insertAtHead ? {
                insertAtHead: !0
            } : {}
        }), {
            turnId: i,
            deliveredAs: Ot.CD.QUEUE
        };
    }
    watchSessionBackgroundWork(e, t) {
        const r = this.getSession(t.sessionId), n = {
            kind: Qt(t.kind),
            state: jt(t.state),
            ownerId: t.ownerId ?? void 0
        };
        return r.backgroundWorkWatchers.subscribe(e, ()=>r.backgroundWorkRegistry.listWork(n).map(zt));
    }
    watchSessionTurnLifecycle(e, t) {
        return this.getSession(t.sessionId).turnLifecycleWatchers.subscribe(e);
    }
    async abortBackgroundWork(e, t) {
        return {
            aborted: this.getSession(t.sessionId).backgroundWorkRegistry.abortWork(t.workId)
        };
    }
    async abortAllBackgroundWork(e, t) {
        return {
            abortedCount: this.getSession(t.sessionId).backgroundWorkRegistry.abortAllWork({
                kind: Qt(t.kind),
                state: jt(t.state),
                ownerId: t.ownerId ?? void 0
            })
        };
    }
    attachSession(e, t) {
        return this.ensureNotDisposing(), this.attachSessionInternal(e, t);
    }
    async *attachSessionInternal(e, t) {
        await this.ensureSessionLoaded(e, t.sessionId), yield* this.getSession(t.sessionId).events.subscribe(e, t.lastEventId, !0 === t.backgroundTaskCompletionsOnly ? {
            backgroundTaskCompletionsOnly: !0
        } : void 0);
    }
    async getSessionBlobs(e, t) {
        if (this.ensureNotDisposing(), t.blobIds.length > 64) throw new Error(`blobIds must be at most 64 per request, got ${t.blobIds.length}`);
        if (t.blobIds.some((e)=>e.byteLength > 64)) throw new Error("blobIds must be at most 64 bytes each");
        await this.ensureSessionLoaded(e, t.sessionId);
        return yr(e, this.getSession(t.sessionId).store.getBlobStore(), t.blobIds, t.maxResponseBytes);
    }
    readFile(e, t) {
        return this.ensureNotDisposing(), this.readFileInternal(e, t);
    }
    async *readFileInternal(e, t) {
        const r = (0, Xt.cC)(t.path);
        yield* (0, Xt.Ng)(e, r, {
            readOffset: t.readOffset ?? BigInt(0),
            readLimit: t.readLimit ?? BigInt(0),
            cachedMtimeMs: t.cachedMtimeMs
        });
    }
    sessionTreeHost() {
        return {
            sessions: this.sessions,
            sessionCatalog: this.options.sessionCatalog,
            ensureSessionLoaded: (e, t)=>this.ensureSessionLoaded(e, t),
            emitSessionUpdated: (e)=>this.emitSessionUpdated(e)
        };
    }
    async ensureSessionLoaded(e, t) {
        this.validateSessionId(t);
        const r = this.sessions.get(t);
        if (void 0 !== r && !0 !== r.deleted) return;
        if (!0 === r?.deleted) return;
        const n = this.options.sessionCatalog?.ensureLoaded;
        if (void 0 === n) return;
        if (!await n(e, t)) return;
        const s = this.sessions.get(t);
        if (void 0 === s || !0 === s.deleted) throw new Error(`Agent host session catalog ensureLoaded returned true but session is not hosted: ${t}`);
    }
    async disposeInternal() {
        let e;
        this.unsubscribeCatalogTitleChanged?.(), this.unsubscribeCatalogArchivedChanged?.(), this.unsubscribeCatalogModelChanged?.(), this.unsubscribeCatalogHostOwnedStorageChanged?.();
        const t = [
            ...this.sessions.values()
        ];
        this.appendSessionUpdates.cancelAll();
        for (const e of t){
            e.disposing = !0;
            const t = e.interactionRegistry.close("Agent host is disposing");
            for (const r of t)(0, Er.ht)(e, r, "Agent host is disposing", {
                immediate: !0,
                initiatedBy: Ot.TQ.HOST
            });
            (0, Er.l$)(e, "Agent host is disposing");
            for (const t of [
                ...e.hostedTaskTurnAborts.values()
            ])t("Agent host is disposing", {
                immediate: !0,
                initiatedBy: Ot.TQ.HOST
            });
            (0, Er.sl)(e);
        }
        for (const r of t)try {
            await r.turnChain;
        } catch (t) {
            e ??= t;
        }
        for (const e of t)e.events.close(), e.backgroundWorkWatchers.close(), e.turnLifecycleWatchers.close();
        for (const r of t){
            try {
                await r.disposeResources();
            } catch (t) {
                e ??= t;
            }
            try {
                await r.store.dispose?.();
            } catch (t) {
                e ??= t;
            }
        }
        try {
            await this.options.dispose?.();
        } catch (t) {
            e ??= t;
        }
        if (void 0 !== e) throw e;
    }
    getSession(e) {
        this.validateSessionId(e);
        const t = this.sessions.get(e);
        if (void 0 === t || t.deleted) throw new Error(`Agent host session not found: ${e}`);
        return t;
    }
    async listSessionSummaries(e, t) {
        const r = (0, Zt.oF)(t?.limit), n = {
            ...t,
            limit: r
        }, s = this.options.sessionCatalog, o = new Map(this.catalogModelIds), i = (e)=>(0, Nt.Gk)(e.parent, t) && (0, Nt.zl)(this.catalogEntryFilterIdentity(e), t), a = void 0 === s ? [] : await s.listSessions(e, n, i), c = new Map(this.catalogModelIds);
        this.seedCatalogSessionMetadata(a, t), (0, Zt.sZ)({
            catalogModelIds: this.catalogModelIds,
            beforeList: o,
            afterList: c
        });
        const l = new Map;
        for (const e of this.sessions.values())!0 !== e.deleted && (0, Nt.Gk)(e.parent, t) && (0, Nt.zl)(this.sessionFilterIdentity(e), t) && (0, Zt.j7)(e) && (this.archivedSessionIds.has(e.sessionId) || l.set(e.sessionId, this.toSessionSummary(e)));
        if (void 0 === s) return [
            ...l.values()
        ].sort(Zt.zZ).slice(0, r);
        const u = new Map;
        for (const e of a)i(e) && (l.has(e.sessionId) || u.set(e.sessionId, Yt(e, this.catalogMirrors())));
        for (const [e, t] of l)u.set(e, t);
        return [
            ...u.values()
        ].sort(Zt.zZ).slice(0, r);
    }
    seedCatalogSessionMetadata(e, t) {
        for (const r of e){
            if (!(0, Nt.Gk)(r.parent, t)) continue;
            void 0 !== r.updatedAt && this.catalogUpdatedAt.set(r.sessionId, r.updatedAt);
            const e = r.modelId?.trim();
            void 0 !== e && e.length > 0 ? this.catalogModelIds.set(r.sessionId, e) : this.catalogModelIds.delete(r.sessionId);
            const n = void 0 === r.workspace ? void 0 : (0, Wt.r6)(r.workspace);
            if (void 0 !== n) {
                const e = this.catalogWorkspacePaths.get(r.sessionId), t = void 0 !== e && e.length === n.workspacePaths.length && e.every((e, t)=>e === n.workspacePaths[t]);
                this.catalogWorkspacePaths.set(r.sessionId, n.workspacePaths), void 0 !== n.displayPath ? this.catalogWorkspaceDisplayPaths.set(r.sessionId, n.displayPath) : t || this.catalogWorkspaceDisplayPaths.delete(r.sessionId);
            }
            const s = r.owningClientInstanceId?.trim();
            void 0 !== s && s.length > 0 && this.catalogOwningClientInstanceIds.set(r.sessionId, s), !0 !== r.hostOwnedStorage || this.catalogHostOwnedStorage.has(r.sessionId) || this.catalogHostOwnedStorage.set(r.sessionId, !0);
            const o = r.title?.trim();
            void 0 !== o && o.length > 0 && (this.sessionTitles.has(r.sessionId) || this.sessionTitles.set(r.sessionId, o));
            const i = this.sessions.get(r.sessionId);
            void 0 !== i && !0 !== i.deleted && void 0 === i.title && void 0 !== o && (i.title = o);
        }
    }
    catalogMirrors() {
        return {
            titles: this.sessionTitles,
            updatedAt: this.catalogUpdatedAt,
            modelIds: this.catalogModelIds,
            workspacePaths: this.catalogWorkspacePaths,
            workspaceDisplayPaths: this.catalogWorkspaceDisplayPaths
        };
    }
    sessionFilterIdentity(e) {
        return wr(e, {
            sessions: this.sessions,
            catalogWorkspacePaths: this.catalogWorkspacePaths,
            catalogOwningClientInstanceIds: this.catalogOwningClientInstanceIds
        });
    }
    catalogEntryFilterIdentity(e) {
        const t = void 0 === e.workspace ? void 0 : (0, Wt.r6)(e.workspace), r = e.owningClientInstanceId?.trim();
        return function(e, t) {
            const r = e.owningClientInstanceId ?? t.catalogOwningClientInstanceIds.get(e.sessionId);
            return {
                sessionId: e.sessionId,
                workspacePaths: e.workspacePaths ?? t.catalogWorkspacePaths.get(e.sessionId) ?? [],
                ...void 0 === r ? {} : {
                    owningClientInstanceId: r
                },
                ...void 0 === e.parent ? {} : {
                    parent: e.parent
                }
            };
        }({
            sessionId: e.sessionId,
            ...void 0 === e.parent ? {} : {
                parent: e.parent
            },
            ...void 0 === t ? {} : {
                workspacePaths: t.workspacePaths
            },
            ...void 0 === r || 0 === r.length ? {} : {
                owningClientInstanceId: r
            }
        }, {
            catalogWorkspacePaths: this.catalogWorkspacePaths,
            catalogOwningClientInstanceIds: this.catalogOwningClientInstanceIds
        });
    }
    resolveLiveSessionWorkspace(e) {
        const t = e.sessionOptions?.workspacePaths;
        if (void 0 === t) {
            const t = this.catalogWorkspacePaths.get(e.sessionId);
            return void 0 === t ? void 0 : {
                workspacePaths: t,
                displayPath: this.catalogWorkspaceDisplayPaths.get(e.sessionId)
            };
        }
        const r = t.filter((e)=>e.length > 0);
        return {
            workspacePaths: r,
            worktreeMainPath: e.sessionOptions?.worktreeMainPath,
            displayPath: (0, Wt.wi)(r, this.options.userHomeDirectory)
        };
    }
    toSessionSummary(e) {
        const t = Vt(e.sessionId, this.sessionTitles, e.title), r = Kt(e.sessionId, this.catalogUpdatedAt, e.updatedAt), n = this.catalogModelIds.get(e.sessionId), { runningTurnId: s, queuedTurnIds: o } = (0, Er.sN)(e);
        return {
            sessionId: e.sessionId,
            status: this.computeSessionStatus(e),
            lastEventId: e.events.getLastEventId(),
            queuedTurnIds: o,
            ...void 0 === s ? {} : {
                runningTurnId: s
            },
            ...void 0 === t ? {} : {
                title: t
            },
            ...void 0 === n ? {} : {
                modelId: n
            },
            ...(0, Wt.Ox)(this.resolveLiveSessionWorkspace(e)),
            ...void 0 === e.forkedFromSessionId ? {} : {
                forkedFromSessionId: e.forkedFromSessionId
            },
            ...void 0 === e.parent ? {} : {
                parent: {
                    parentSessionId: e.parent.parentSessionId,
                    parentToolCallId: e.parent.parentToolCallId,
                    rootSessionId: e.parent.rootSessionId
                }
            },
            ...void 0 === r ? {} : {
                updatedAt: dt.Timestamp.fromDate(new Date(r))
            }
        };
    }
    applyExternalSessionTitle(e, t) {
        if (void 0 !== this.disposePromise) return;
        if (this.sessionTitles.get(e) === t) return;
        this.sessionTitles.set(e, t);
        const r = this.sessions.get(e);
        void 0 !== r && !0 !== r.deleted && (r.title = t), this.emitSessionCatalogFieldsUpdated(e);
    }
    applyExternalSessionModel(e, t) {
        if (void 0 !== this.disposePromise) return;
        const r = t?.trim(), n = r || void 0;
        this.catalogModelIds.get(e) !== n && (void 0 === n ? this.catalogModelIds.delete(e) : this.catalogModelIds.set(e, n), this.emitSessionCatalogFieldsUpdated(e));
    }
    applyExternalSessionArchived(e, t) {
        if (void 0 !== this.disposePromise) return;
        if (this.archivedSessionIds.has(e) === t) return;
        const r = this.sessions.get(e);
        if (t) return this.archivedSessionIds.add(e), void 0 !== r && this.announcedSessions.delete(r), void this.sessionWatchers.emitDeleted(e);
        if (this.archivedSessionIds.delete(e), void 0 !== r && this.isLiveSessionInstance(r)) return void this.emitSessionUpdatedNow(r);
        const n = Yt({
            sessionId: e
        }, this.catalogMirrors());
        this.sessionWatchers.emitAdded(n, this.catalogEntryFilterIdentity({
            sessionId: e
        }));
    }
    applyExternalSessionHostOwnedStorage(e, t) {
        if (void 0 !== this.disposePromise) return;
        const r = this.catalogHostOwnedStorage.get(e) ?? !1;
        if (this.catalogHostOwnedStorage.set(e, t), r === t) return;
        const n = this.sessions.get(e);
        void 0 !== n && this.isLiveSessionInstance(n) ? this.emitSessionUpdated(n) : t ? this.archivedSessionIds.has(e) || this.sessionWatchers.emitAdded(Yt({
            sessionId: e
        }, this.catalogMirrors()), this.catalogEntryFilterIdentity({
            sessionId: e
        })) : this.sessionWatchers.emitDeleted(e);
    }
    emitSessionCatalogFieldsUpdated(e) {
        if (void 0 !== this.disposePromise) return;
        if (this.archivedSessionIds.has(e)) return;
        const t = this.sessions.get(e);
        if (void 0 !== t && this.isLiveSessionInstance(t) && this.announcedSessions.has(t)) return void this.emitSessionUpdated(t);
        const r = Yt({
            sessionId: e
        }, this.catalogMirrors());
        this.sessionWatchers.emitUpdated(r, this.catalogEntryFilterIdentity({
            sessionId: e
        }));
    }
    computeSessionStatus(e) {
        return e.awaitingInputCount > 0 ? Ot.g6.AWAITING_INPUT : e.pendingTurns > 0 || e.backgroundWorkRegistry.hasRunningWork({
            kind: "subagent"
        }) ? Ot.g6.RUNNING : Ot.g6.IDLE;
    }
    queueHostOwnedBackgroundWakeup(e, t) {
        if (0 === t.length || !0 === this.options.surfaceOwnsBackgroundWakeups) return;
        const r = this.sessions.get(e);
        if (void 0 === r || r.deleted) return;
        if (void 0 !== this.findExistingBackgroundWakeupTurn(r, Lt(t))) return;
        const n = function(e) {
            if (void 0 === e) return;
            const { generationUuid: t, ...r } = e;
            return r;
        }(r.lastTurnModel?.turnOptions);
        this.sendAction((0, o.q6)(), {
            sessionId: e,
            action: Lt(t),
            ...void 0 === r.lastTurnModel?.modelId ? {} : {
                modelId: r.lastTurnModel.modelId
            },
            ...void 0 === r.lastTurnModel?.modelDetails ? {} : {
                modelDetails: r.lastTurnModel.modelDetails
            },
            ...void 0 === r.lastTurnModel?.requestedModel ? {} : {
                requestedModel: r.lastTurnModel.requestedModel
            },
            ...void 0 === n ? {} : {
                turnOptions: n
            },
            ...void 0 === r.lastTurnModel?.requestContextDecoration ? {} : {
                requestContextDecoration: r.lastTurnModel.requestContextDecoration
            }
        }).catch((t)=>{
            Tr.warn((0, o.q6)(), "Host-owned background wakeup failed", {
                sessionId: e,
                error: t
            });
        });
    }
    findExistingBackgroundWakeupTurn(e, t) {
        if (void 0 === t) return;
        const r = $t(t);
        if (void 0 === r || 0 === r.length) return;
        const n = e.backgroundWorkRegistry.findExactWakeupTurn(r);
        if (void 0 === n) return;
        const s = e.turns.get(n);
        if (void 0 !== s && "finished" !== s.state && !s.cancelled) return n;
        e.backgroundWorkRegistry.forgetWakeupTurnsForTurn(n);
    }
    rememberBackgroundWakeupTurn(e, t, r) {
        if (void 0 === t) return;
        const n = $t(t);
        if (void 0 !== n) for (const t of n)e.backgroundWorkRegistry.rememberWakeupTurn({
            taskId: t,
            turnId: r
        });
    }
    emitSessionUpdated(e) {
        this.appendSessionUpdates.cancel(e), this.emitSessionUpdatedNow(e);
    }
    emitSessionUpdatedNow(e) {
        this.isLiveSessionInstance(e) && (this.archivedSessionIds.has(e.sessionId) || (this.announcedSessions.has(e) ? this.sessionWatchers.emitUpdated(this.toSessionSummary(e), this.sessionFilterIdentity(e)) : (0, Zt.j7)(e) && (this.announcedSessions.add(e), this.sessionWatchers.emitAdded(this.toSessionSummary(e), this.sessionFilterIdentity(e)))));
    }
    isLiveSessionInstance(e) {
        return void 0 === this.disposePromise && !e.deleted && this.sessions.get(e.sessionId) === e;
    }
    async deleteHostedSession(e) {
        this.validateSessionId(e);
        const t = this.sessions.get(e);
        if (void 0 !== t && !t.deleted) {
            t.deleted = !0, this.deletingSessionIds.add(e);
            try {
                let r;
                this.appendSessionUpdates.cancel(t), t.backgroundWorkWatchers.close(), t.turnLifecycleWatchers.close(), (0, Er.EL)(t, "session deleted"), (0, Er.sl)(t), t.backgroundWorkRegistry.abortAllWork();
                try {
                    await t.turnChain;
                } catch (e) {
                    r ??= e;
                }
                this.sessions.delete(e);
                try {
                    this.options.onSessionDeleted?.(e);
                } catch (e) {
                    r ??= e;
                }
                t.interactionRegistry.close("session deleted"), t.events.close();
                try {
                    await t.disposeResources();
                } catch (e) {
                    r ??= e;
                }
                try {
                    await t.store.dispose?.();
                } catch (e) {
                    r ??= e;
                }
                if (this.sessionWatchers.emitDeleted(e), void 0 !== r) throw r;
            } finally{
                this.deletingSessionIds.delete(e);
            }
        }
    }
    validateSessionId(e) {
        if (0 === e.trim().length) throw new Error("sessionId is required");
        (0, Ft.M)(e);
    }
    async hasLiveOrCatalogSession(e, t) {
        const r = this.sessions.get(t);
        if (void 0 !== r && !0 !== r.deleted) return !0;
        const n = this.options.sessionCatalog;
        if (void 0 === n) return !1;
        return (await n.listSessions(e)).some((e)=>e.sessionId === t);
    }
    reserveSessionId(e) {
        if (this.validateSessionId(e), this.sessions.has(e) || this.creatingSessionIds.has(e)) throw new Error(`Agent host session already exists: ${e}`);
        this.creatingSessionIds.add(e);
    }
    getSessionHistoryForFork(e, t) {
        if (void 0 === t) return (0, ur.ks)(e.store.getConversationState());
        if (0 === t.trim().length) throw new Error("throughTurnId cannot be empty");
        return e.events.getSessionHistoryThroughTurn(t);
    }
    ensureNotDisposing() {
        if (void 0 !== this.disposePromise) throw new Error("Agent host is disposing");
    }
}
var Br = require("./module-8898.js");
class Pr {
    constructor(e){
        this.open = e, this.closed = !1;
    }
    get items() {
        return this.opened().items;
    }
    transaction(e) {
        return this.opened().transaction(e);
    }
    close() {
        this.closed = !0, this.store?.close();
    }
    opened() {
        if (void 0 === this.store) {
            if (this.closed) throw new Error("Agent host global store is closed");
            this.store = this.open();
        }
        return this.store;
    }
}
var Jr = require("./module-67640.js"), Mr = require("./module-89396.js");
function qr(e) {
    switch(e){
        case "shell":
            return le.aZc.SHELL;
        case "subagent":
            return le.aZc.SUBAGENT;
        default:
            return e;
    }
}
function Dr(e) {
    switch(e){
        case "success":
            return le.uHL.SUCCESS;
        case "error":
            return le.uHL.ERROR;
        case "aborted":
            return le.uHL.ABORTED;
        default:
            return e;
    }
}
const Or = (0, s.h)("agent-host:background-work-registry");
class Nr extends n.R10 {
    constructor(e){
        super(), this.ctx = e, this.wakeupTurnByTaskId = new Map;
    }
    setOnCompletionEnqueued(e) {
        this.completionCallback = e;
    }
    setOnWorkChanged(e) {
        this.workChangedCallback = e;
    }
    rememberWakeupTurn(e) {
        this.wakeupTurnByTaskId.set(e.taskId, e.turnId);
    }
    findWakeupTurn(e) {
        return this.wakeupTurnByTaskId.get(e);
    }
    findExactWakeupTurn(e) {
        if (0 === e.length) return;
        const t = [
            ...new Set(e)
        ], r = t.map((e)=>this.wakeupTurnByTaskId.get(e)), n = r[0];
        if (void 0 === n || r.some((e)=>e !== n)) return;
        let s = 0;
        for (const e of this.wakeupTurnByTaskId.values())e === n && (s += 1);
        return s === t.length ? n : void 0;
    }
    forgetWakeupTurnsForTurn(e) {
        for (const [t, r] of this.wakeupTurnByTaskId)r === e && this.wakeupTurnByTaskId.delete(t);
    }
    upsertWork(...e) {
        this.wakeupTurnByTaskId.delete(e[0].id), super.upsertWork(...e), this.workChangedCallback?.();
    }
    clearWork(...e) {
        const t = super.clearWork(...e);
        return t && this.workChangedCallback?.(), t;
    }
    abortWork(...e) {
        const t = super.abortWork(...e);
        return t && this.workChangedCallback?.(), t;
    }
    abortAllWork(...e) {
        const t = super.abortAllWork(...e);
        return t > 0 && this.workChangedCallback?.(), t;
    }
    enqueue(...e) {
        const t = this.getWakeupRevision();
        super.enqueue(...e);
        const r = this.getWakeupRevision() > t;
        r && this.completionCallback?.(), this.logEnqueueOutcome(e[0], r);
    }
    logEnqueueOutcome(e, t) {
        void 0 !== this.ctx && Or.info(this.ctx, "agent.background_wakeup_enqueue", {
            event: "agent.background_wakeup_enqueue",
            outcome: t ? "enqueued" : "dropped",
            wakeup_id: e.id,
            conversation_id: e.conversationId,
            source: e.source,
            task_id: e.payload.taskId,
            work_kind: e.payload.kind,
            completion_status: e.payload.status
        });
    }
}
const Fr = (0, s.h)("agent-host:hosted-child-request-context");
function Ur(e) {
    const t = e.clone();
    return t.fileContents = {}, t.precomputedHumanChanges = [], t.recentlyAddedPlugin = void 0, t.matchedInstalledPlugin = void 0, t.debugModeConfig = void 0, t.hooksAdditionalContext = void 0, t.searchConversationsEnabled = !1, t.conversationNotesListing = void 0, void 0 !== t.env && (t.env.agentConversationNotesFolder = "", t.env.devForceNextSmartModeClassifierBlockToken = void 0, t.env.devDelayNextSmartModeClassifierToken = void 0), t;
}
function Lr(e, t, r) {
    !1 === e.customSubagentsInfoComplete && void 0 !== t && (e.customSubagents = [
        ...t
    ], e.customSubagentsInfoComplete = !0), e.env?.projectFolder || void 0 === r || (e.env ??= new Mr.GE, e.env.projectFolder = r);
}
function $r(e, t) {
    return void 0 === t ? e : new n.dwX(e, [
        (0, n.VNS)(n.MZM, (r = t, {
            execute: async ()=>new Mr._G({
                    result: {
                        case: "success",
                        value: new Mr.yW({
                            requestContext: Ur(r)
                        })
                    }
                })
        }))
    ]);
    var r;
}
var Qr = require("./module-18130.js"), jr = require("./module-829.js"), Gr = require("./module-18951.js"), Hr = require("./module-60544.js"), zr = require("./module-3411.js");
async function Wr(e) {
    const t = e.conversationActionManager ?? new zr.h;
    return "userMessageAction" === e.action.action.case && (e.action.action.value.sendToInteractionListener = !0), await e.adapter.run({
        ctx: e.ctx,
        conversationState: e.conversationState,
        action: e.action,
        modelDetails: e.modelDetails,
        interactionListener: e.interactionListener,
        resources: e.resources,
        blobStore: e.blobStore,
        conversationActionManager: t,
        checkpointHandler: e.checkpointHandler,
        mcpTools: e.mcpTools ?? [],
        runOptions: e.runOptions
    }), {
        conversationActionManager: t
    };
}
function Vr(e, t, r) {
    const n = function(e, t = new er.ve) {
        const r = new er.We, n = (0, er.sh)(e), s = new er.pH(t, r);
        return s.setMetadata("agentId", n.agentId), s.setMetadata("latestRootBlobId", n.latestRootBlobId), s.setMetadata("name", n.name), s.setMetadata("createdAt", n.createdAt), s.setMetadata("mode", n.mode), s.setMetadata("isRunEverything", n.isRunEverything), s.setMetadata("lastUsedModel", n.lastUsedModel), s.setMetadata("lastDebugServerPort", n.lastDebugServerPort), s.setMetadata("currentPlanUri", n.currentPlanUri), s;
    }(e ?? crypto.randomUUID(), t);
    let s = r ?? n.getConversationStateStructure();
    return {
        getConversationState: ()=>s,
        getBlobStore: ()=>n.getBlobStore(),
        async handleCheckpoint (e, t) {
            s = t, await n.handleCheckpoint(e, t);
        },
        createFork: async (e, t)=>Vr(t.sessionId, n.getBlobStore())
    };
}
const Kr = "Await timed out while task is still running";
function Yr(e) {
    if (!Boolean(e.resumeAgentId && !(0, n.UOG)(e.prompt) && !0 === e.readonly && !0 !== e.runInBackground)) return !1;
    if (0 === (e.parentConversationId ?? "").trim().length) throw new Error(`Missing parentConversationId for subagent await/status check (subagentId: ${e.resumeAgentId})`);
    return !0;
}
async function Zr(e, t, r) {
    const n = e.getTrackedBackgroundRun(t);
    return n ? en(n, r.signal) : e.isBackgroundRunBusy(t) ? async function(e, t, r) {
        for(; e.isBackgroundRunBusy(t);){
            if (r.signal.aborted) return {
                status: "error",
                error: Kr
            };
            const n = e.getTrackedBackgroundRun(t);
            if (n) return en(n, r.signal);
            await Xr(r.withDetached().withTimeout(50).signal);
        }
        return {
            status: "completed",
            toolCallCount: 0
        };
    }(e, t, r) : {
        status: "error",
        error: `No background subagent found for id: ${t}`
    };
}
function Xr(e) {
    return new Promise((t)=>{
        e.aborted ? t() : e.addEventListener("abort", ()=>t(), {
            once: !0
        });
    });
}
async function en(e, t) {
    if (t.aborted) return {
        status: "error",
        error: Kr
    };
    const r = {
        status: "error",
        error: Kr
    };
    return new Promise((n)=>{
        const s = ()=>{
            n(r);
        };
        t.addEventListener("abort", s, {
            once: !0
        }), e.promise.then(n).finally(()=>t.removeEventListener("abort", s));
    });
}
async function tn(e, t, r) {
    const n = r.agentId, s = e.getTrackedBackgroundRun(n);
    if (void 0 === s) return e.isBackgroundRunBusy(n) ? rn(n) : new ft.zJ({
        result: {
            case: "notFound",
            value: new ft.Hq({
                agentId: n
            })
        }
    });
    const o = await function(e, t, r) {
        if (r.signal.aborted) return Promise.resolve(void 0);
        const [n, s] = r.withTimeoutAndCancel(Math.max(0, t));
        return new Promise((t)=>{
            const r = ()=>{
                t(void 0);
            };
            n.signal.addEventListener("abort", r, {
                once: !0
            }), e.promise.then(t).finally(()=>{
                n.signal.removeEventListener("abort", r), s();
            });
        });
    }(s, r.timeoutMs, t);
    if (void 0 === o) return rn(n, s.transcriptPath);
    switch(o.status){
        case "completed":
            return new ft.zJ({
                result: {
                    case: "complete",
                    value: new ft.bE({
                        agentId: n,
                        toolCallCount: o.toolCallCount ?? 0,
                        transcriptPath: s.transcriptPath,
                        ...void 0 === o.finalMessage ? {} : {
                            finalMessage: o.finalMessage
                        }
                    })
                }
            });
        case "background":
            return rn(n, s.transcriptPath);
        case "aborted":
        case "error":
            return new ft.zJ({
                result: {
                    case: "error",
                    value: new ft.Y({
                        agentId: n,
                        error: o.error ?? "Subagent was aborted"
                    })
                }
            });
        default:
            return o;
    }
}
function rn(e, t) {
    return new ft.zJ({
        result: {
            case: "stillRunning",
            value: new ft.L5({
                agentId: e,
                transcriptPath: t
            })
        }
    });
}
var nn = require("./module-23152.js"), sn = require("./module-36190.js");
class on {
    constructor(e){
        this.options = e, this.replayByToolCallId = new Map, this.executionByToolCallId = new Map, this.verifiedReplayChildIds = new Set, this.capturedRootSessionId = e.rootSessionId;
    }
    clearReplayForExplicitContinuation(e) {
        (e.resumeAgentId || e.forkAgentId) && this.replayByToolCallId.delete(e.toolCallId.trim());
    }
    async findIndexedReplayChild(e, t) {
        const r = this.options.findExistingChildSessionId, n = e.toolCallId.trim();
        if (void 0 === r || t || e.resumeAgentId || e.forkAgentId || !n) return;
        const s = (await r({
            parentToolCallId: n
        }))?.trim();
        return void 0 !== s && this.options.isValidChildSessionId(s) ? s : void 0;
    }
    rememberVerifiedReplayChild(e) {
        if (!this.verifiedReplayChildIds.has(e) && this.verifiedReplayChildIds.size >= 100) {
            const e = this.verifiedReplayChildIds.values().next().value;
            void 0 !== e && this.verifiedReplayChildIds.delete(e);
        }
        this.verifiedReplayChildIds.add(e);
    }
    takeVerifiedReplayChild(e) {
        return this.verifiedReplayChildIds.delete(e);
    }
    async claim({ args: e, proposedChildSessionId: t, indexedChildSessionId: r }) {
        const n = this.options.store, s = e.toolCallId.trim();
        if (!this.options.enabled || void 0 === n || e.resumeAgentId || e.forkAgentId || !s) return;
        const o = await n.claim({
            parentSessionId: this.options.parentSessionId,
            rootSessionId: this.rootSessionId(),
            parentToolCallId: s,
            proposedChildSessionId: r ?? t
        });
        if (!this.options.isValidChildSessionId(o.invocation.childSessionId)) throw new Error(`Durable Task invocation has invalid child session id: ${o.invocation.childSessionId}`);
        let i;
        return "existing" === o.kind ? i = o.invocation.childSessionId : void 0 !== r && r === o.invocation.childSessionId && (i = r), void 0 !== i ? (this.replayByToolCallId.set(s, o.invocation), {
            replayResumeAgentId: i
        }) : {
            claimedChildSessionId: o.invocation.childSessionId
        };
    }
    completedOutcome({ parentToolCallId: e, childSessionId: t }) {
        const r = this.replayByToolCallId.get(e.trim());
        if ("completed" === r?.kind && r.childSessionId === t) return r.outcome;
    }
    runOnce(e, t) {
        const r = e.toolCallId.trim();
        if (!this.options.enabled || void 0 === this.options.store || e.resumeAgentId || e.forkAgentId || !r) return t();
        const n = this.executionByToolCallId.get(r);
        if (void 0 !== n) return n;
        const s = t();
        this.executionByToolCallId.set(r, s);
        const o = ()=>{
            this.executionByToolCallId.get(r) === s && this.executionByToolCallId.delete(r);
        };
        return s.then(o, o), s;
    }
    async shouldResumeCheckpoint(e, t, r) {
        const n = e.toolCallId.trim(), s = this.replayByToolCallId.get(n);
        return ("checkpointed" === s?.kind || "started" === s?.kind && r.toBinary().length > 0) && (this.replayByToolCallId.delete(n), "started" === s?.kind && await this.markCheckpointed(e, t), !0);
    }
    async createConversationAction(e, t, r, n) {
        return await this.shouldResumeCheckpoint(e, t, r) ? new le.QFf({
            action: {
                case: "resumeAction",
                value: new le.qKo
            }
        }) : new le.QFf({
            action: {
                case: "userMessageAction",
                value: new le.Vtf({
                    userMessage: new le.RGk({
                        text: e.prompt,
                        mode: n,
                        ...void 0 === e.selectedContext ? {} : {
                            selectedContext: e.selectedContext
                        }
                    })
                })
            }
        });
    }
    async markCheckpointed(e, t) {
        const r = this.key(e, t);
        void 0 !== r && await this.options.store?.markCheckpointed(r);
    }
    async markCompleted(e, t, r) {
        if ("completed" !== r.status && "background" !== r.status) return;
        const n = this.key(e, t);
        void 0 !== n && await this.options.store?.markCompleted({
            ...n,
            outcome: r
        });
    }
    key(e, t) {
        if (void 0 === this.options.store || e.resumeAgentId || e.forkAgentId) return;
        const r = e.toolCallId.trim();
        return r ? {
            parentSessionId: this.options.parentSessionId,
            rootSessionId: this.rootSessionId(),
            parentToolCallId: r,
            childSessionId: t
        } : void 0;
    }
    rootSessionId() {
        return this.options.getRootSessionId?.() ?? this.capturedRootSessionId;
    }
}
function an(e) {
    return "completed" === e.status ? e.finalMessage ?? "" : "error" === e.status ? e.error : "Subagent was aborted by the user";
}
class cn {
    constructor(e){
        this.options = e, this.childParentIds = new Map, this.parentChildIds = new Map, this.queuedChildCompletions = new Map, this.childCompletionWaiters = new Map, this.pendingCleanups = new Set;
    }
    registerParentChildLink(e, t) {
        const r = t?.trim();
        if (!r || r === e) return;
        if (!this.options.isTrackedSpawner(r)) return;
        const n = this.childParentIds.get(e);
        if (n === r) return;
        n && (this.parentChildIds.get(n)?.delete(e), 0 === (this.parentChildIds.get(n)?.size ?? 0) && this.parentChildIds.delete(n)), this.childParentIds.set(e, r);
        const s = this.parentChildIds.get(r) ?? new Set;
        s.add(e), this.parentChildIds.set(r, s);
    }
    removeParentChildLink(e) {
        const t = this.childParentIds.get(e);
        if (!t) return;
        this.childParentIds.delete(e);
        const r = this.parentChildIds.get(t);
        r?.delete(e), 0 === (r?.size ?? 0) && this.parentChildIds.delete(t);
    }
    enqueueChildCompletion(e, t) {
        const r = this.childParentIds.get(e);
        if (!r) return !1;
        const n = this.queuedChildCompletions.get(r) ?? [];
        n.push({
            agentId: e,
            success: "completed" === t.status,
            finalMessage: an(t)
        }), this.queuedChildCompletions.set(r, n), this.removeParentChildLink(e);
        const s = this.childCompletionWaiters.get(r);
        if (void 0 !== s) {
            this.childCompletionWaiters.delete(r);
            for (const e of s)e();
        }
        return !0;
    }
    async collectAvailableChildCompletions(e, t) {
        const r = this.drainChildCompletions(e);
        return r.length > 0 ? r : this.hasPendingChildSubagents(e) ? (await this.waitForChildCompletion(e, t), this.drainChildCompletions(e)) : [];
    }
    deferCleanup(e) {
        this.pendingCleanups.add(e);
    }
    hasDeferredCleanup(e) {
        return this.pendingCleanups.has(e);
    }
    cleanupChildCompletionState(e) {
        this.pendingCleanups.delete(e);
        const t = this.parentChildIds.get(e);
        if (void 0 !== t) for (const e of t)this.childParentIds.delete(e);
        this.removeParentChildLink(e), this.parentChildIds.delete(e), this.queuedChildCompletions.delete(e), this.childCompletionWaiters.delete(e);
    }
    hasPendingChildSubagents(e) {
        return (this.parentChildIds.get(e)?.size ?? 0) > 0;
    }
    drainChildCompletions(e) {
        const t = this.queuedChildCompletions.get(e) ?? [];
        return this.queuedChildCompletions.delete(e), t;
    }
    async waitForChildCompletion(e, t) {
        if (t.aborted) throw new Error("aborted");
        await new Promise((r, n)=>{
            const s = this.childCompletionWaiters.get(e) ?? new Set, o = ()=>{
                a(), r();
            }, i = ()=>{
                a(), n(new Error("aborted"));
            }, a = ()=>{
                s.delete(o), 0 === s.size && this.childCompletionWaiters.delete(e), t.removeEventListener("abort", i);
            };
            s.add(o), this.childCompletionWaiters.set(e, s), t.addEventListener("abort", i, {
                once: !0
            });
        });
    }
}
async function ln(e, t, r, n, s, o) {
    let i, a, c = 0;
    for(let l = 0; l < s; l++){
        if (e.signal.aborted) return {
            status: "aborted",
            error: "Subagent was aborted"
        };
        const s = 0 === l ? r.prompt : un(n, c, i), u = 0 === l ? new ft.Pw({
            ...r,
            runInBackground: !1
        }) : new ft.Pw({
            ...r,
            prompt: s,
            resumeAgentId: t,
            runInBackground: !1
        });
        if (a = await o.runTurn(e, u), "completed" !== a.status) return a;
        const d = a.toolCallCount ?? 0, p = a.finalMessage ?? "";
        if (void 0 !== i && p.includes(i)) return a;
        d > 0 ? (c = 0, i = void 0) : (c += 1, i = c >= n.idleThreshold ? `DONE_${(0, x.randomUUID)().replace(/-/g, "").slice(0, 8)}` : void 0);
    }
    return a ?? {
        status: "error",
        error: "Subagent continuation exited unexpectedly"
    };
}
function un(e, t, r) {
    return t >= e.idleThreshold && void 0 !== r ? e.escapeMessageTemplate.replace("{idle_count}", String(t)).replace("{escape_token}", r) : e.nudgeMessage;
}
class dn {
    constructor(e){
        this.conversationActionManager = new zr.h, this.abortRequested = !1, this.settled = !1, this.disposed = !1, this.dispatchCtx = e.ctx;
        const [t, r] = e.ctx.withDetached().withCancel();
        this.turnCtx = t, this.cancelTurnCtx = r, this.forwardDispatchAbort = ()=>{
            r(e.ctx.signal.reason);
        }, e.ctx.signal.addEventListener("abort", this.forwardDispatchAbort, {
            once: !0
        }), e.ctx.signal.aborted && this.forwardDispatchAbort(), this.abortTurn = (t, r)=>{
            this.abortRequested || this.turnCtx.signal.aborted || this.disposed || (this.abortRequested = !0, this.abortReasonValue = t?.trim() || "Subagent was aborted", this.abortInitiatedByValue = r?.initiatedBy, e.onAbortRequested?.(), !0 !== r?.immediate ? (this.conversationActionManager.abort(this.abortReasonValue), this.armHardCancelBackstop()) : this.cancelTurnCtx(this.abortReasonValue));
        };
    }
    isAborted() {
        return this.abortRequested || this.turnCtx.signal.aborted;
    }
    get abortReason() {
        return this.abortReasonValue;
    }
    get abortInitiatedBy() {
        return this.abortInitiatedByValue;
    }
    claimSettle() {
        return !this.settled && (this.settled = !0, !0);
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.dispatchCtx.signal.removeEventListener("abort", this.forwardDispatchAbort), this.releaseHardCancelBackstop?.(), this.releaseHardCancelBackstop = void 0, this.conversationActionManager.dispose());
    }
    armHardCancelBackstop() {
        const [e, t] = this.dispatchCtx.withDetached().withTimeoutAndCancel(8e3);
        let r = !1;
        this.releaseHardCancelBackstop = ()=>{
            r = !0, t();
        }, e.signal.addEventListener("abort", ()=>{
            r || this.cancelTurnCtx(this.abortReasonValue);
        }, {
            once: !0
        });
    }
}
var pn = require("./module-38812.js");
class mn extends Error {
    constructor(e){
        super(`Agent host bubbled interaction has no active parent turn: ${e}`), this.name = "AgentHostNoActiveParentTurnError";
    }
}
const hn = (0, s.h)("agent-host:subagent-interaction-policy"), fn = "Interaction not available to subagent";
function gn(e) {
    return void 0 === e || e === Ot.w3.UNSPECIFIED ? Ot.w3.AUTO_REJECT : e;
}
function yn(e, t = fn) {
    const r = (0, pn.oF)(e, t);
    if (void 0 === r) throw new Error(`Unhandled interaction query type for subagent auto-reject: ${String(e.query.case)}`);
    return r;
}
const wn = {
    webSearchRequestQuery: "bubble-to-parent",
    webFetchRequestQuery: "bubble-to-parent",
    askQuestionInteractionQuery: "surface-to-user",
    createPlanRequestQuery: "surface-to-user",
    mcpAuthRequestQuery: "surface-to-user",
    connectScmRequestQuery: "surface-to-user",
    switchModeRequestQuery: "host-execute",
    setupVmEnvironmentArgs: "auto-reject",
    prManagementRequestQuery: "auto-reject",
    generateImageRequestQuery: "auto-reject",
    replaceEnvArgs: "auto-reject"
};
const vn = new Set([
    "agent",
    "chat",
    "plan",
    "debug",
    "triage",
    "multitask"
]);
function _n(e, t, r) {
    if ("switchModeRequestQuery" !== t.query.case) throw new Error(`Expected switchModeRequestQuery, got ${String(t.query.case)}`);
    const n = t.query.value.args?.targetModeId?.trim() ?? "";
    return vn.has(n) ? (hn.info(e, "Subagent switch-mode host-approved", {
        childSessionId: r.childSessionId,
        parentToolCallId: r.parentToolCallId,
        targetModeId: n
    }), mt.x1.switchModeApproved(t.id)) : (hn.info(e, "Subagent switch-mode target is not loop-executable; rejecting", {
        childSessionId: r.childSessionId,
        parentToolCallId: r.parentToolCallId,
        targetModeId: n
    }), mt.x1.switchModeRejected(t.id, function(e) {
        return `Mode '${e}' is not supported for subagent mode switches`;
    }(n)));
}
async function An(e, t) {
    const r = gn(t.policy), n = function(e) {
        const t = e.query.case;
        return void 0 === t ? "auto-reject" : wn[t] ?? "auto-reject";
    }(t.query);
    switch(r){
        case Ot.w3.BUBBLE_TO_PARENT:
            return "host-execute" === n ? _n(e, t.query, t.correlation) : "bubble-to-parent" !== n ? (hn.info(e, "Subagent interaction query kind does not bubble to parent; auto-rejecting", {
                childSessionId: t.correlation.childSessionId,
                parentToolCallId: t.correlation.parentToolCallId,
                queryCase: t.query.query.case
            }), yn(t.query)) : Sn(e, t);
        case Ot.w3.SURFACE_TO_USER:
            return "host-execute" === n ? _n(e, t.query, t.correlation) : "bubble-to-parent" === n ? Sn(e, t) : "surface-to-user" === n ? void 0 === t.surfaceToUser ? (hn.info(e, "SURFACE_TO_USER has no child interaction surface; auto-rejecting", {
                childSessionId: t.correlation.childSessionId,
                parentToolCallId: t.correlation.parentToolCallId,
                queryCase: t.query.query.case
            }), yn(t.query)) : t.surfaceToUser(e, t.query, t.correlation) : (hn.info(e, "Subagent interaction query kind does not surface to user; auto-rejecting", {
                childSessionId: t.correlation.childSessionId,
                parentToolCallId: t.correlation.parentToolCallId,
                queryCase: t.query.query.case
            }), yn(t.query));
        case Ot.w3.AUTO_REJECT:
        case Ot.w3.UNSPECIFIED:
            return yn(t.query);
        default:
            return r;
    }
}
function Sn(e, t) {
    return bn(e, {
        ...t,
        question: t.query,
        kind: t.query.query.case,
        reject: (e)=>yn(t.query, e)
    });
}
async function bn(e, t) {
    const { question: r, correlation: n } = t;
    if (!(!1 === t.parentHasActiveTurn?.())) try {
        return await t.bubbleToParent(e, r, n);
    } catch (e) {
        if (!(e instanceof mn)) throw e;
    }
    return void 0 !== t.surfaceToUser ? (hn.info(e, "Parent has no active turn; surfacing bubbled subagent interaction on the child channel", {
        childSessionId: n.childSessionId,
        parentToolCallId: n.parentToolCallId,
        queryCase: t.kind
    }), t.surfaceToUser(e, r, n)) : (hn.info(e, "Parent has no active turn and the child has no interaction surface; auto-rejecting bubbled subagent interaction", {
        childSessionId: n.childSessionId,
        parentToolCallId: n.parentToolCallId,
        queryCase: t.kind
    }), t.reject("Parent turn is not running, so the subagent's approval could not be shown"));
}
function En(e) {
    return e.getRootSessionId?.() ?? e.rootSessionId ?? e.parentConversationId;
}
function In(e, t) {
    const r = En(t), n = e.rootParentConversationId?.trim() ?? "", s = e.parentConversationId?.trim() ?? "";
    if (n === r || n.length > 0 && n !== s && n !== t.parentConversationId) return e;
    const o = e.clone();
    return o.rootParentConversationId = r, o;
}
var Cn = require("./module-643.js");
const kn = (0, s.h)("agent-host:subagent-spawn-metrics");
class xn {
    constructor(e, t){
        this.metrics = e, this.getSurfaceKind = t, this.pending = new WeakMap;
    }
    async createOrResume(e, t, r, n) {
        const s = r ? Cn.performance.now() : void 0, o = function(e) {
            if (e.resumeAgentId) return "resume";
            return e.forkAgentId ? "fork" : "create";
        }(t);
        let i = "ok";
        try {
            return await n();
        } catch (t) {
            throw i = Tn(t, e.signal) ? "aborted" : "error", t;
        } finally{
            void 0 !== s && this.completeCreateOrResume(e, t, s, o, i);
        }
    }
    async run(e, t, r) {
        try {
            const n = await r(), s = this.pending.get(t);
            return "background" === n.status && !0 === s?.storeInheritanceStarted ? await s.settled : this.finish(e, t, function(e) {
                if ("aborted" === e.status) return "aborted";
                if ("error" === e.status) return "error";
                return "ok";
            }(n)), n;
        } catch (r) {
            throw this.finish(e, t, Tn(r, e.signal) ? "aborted" : "error"), r;
        }
    }
    async recordStoreInheritance(e, t, r) {
        const n = this.pending.get(t);
        void 0 !== n && (n.storeInheritanceStarted = !0);
        const s = Cn.performance.now(), o = await r();
        return void 0 !== n && "ok" === o && this.record(e, {
            phase: "store_inherit",
            mode: n.mode,
            durationMs: Cn.performance.now() - s,
            outcome: o
        }), this.finish(e, t, "ok"), o;
    }
    completeCreateOrResume(e, t, r, s, o) {
        if ("ok" === o && (0, n.UOG)(t.prompt)) {
            const e = Promise.withResolvers();
            return void this.pending.set(t, {
                startedAtMs: r,
                mode: s,
                settled: e.promise,
                settle: e.resolve,
                storeInheritanceStarted: !1
            });
        }
        this.record(e, {
            phase: "total",
            mode: s,
            durationMs: Cn.performance.now() - r,
            outcome: o
        });
    }
    finish(e, t, r) {
        const n = this.pending.get(t);
        void 0 !== n && (this.pending.delete(t), this.record(e, {
            phase: "total",
            mode: n.mode,
            durationMs: Cn.performance.now() - n.startedAtMs,
            outcome: r
        }), n.settle());
    }
    record(e, t) {
        if (void 0 !== this.metrics) try {
            this.metrics.distribution({
                stat: "composer.subagent.localSpawnMs",
                value: Rn(t.durationMs),
                tags: {
                    phase: t.phase,
                    mode: t.mode,
                    surface_kind: this.getSurfaceKind(),
                    outcome: t.outcome,
                    owner: "agent_host"
                }
            });
        } catch (t) {
            kn.warn(e, "Local subagent spawn metric emission failed", {
                error: String(t)
            });
        }
    }
}
function Tn(e, t) {
    return t.aborted || e instanceof Error && ("AbortError" === e.name || "CancellationError" === e.name);
}
function Rn(e) {
    return Number.isFinite(e) ? Math.round(Math.min(e, 18e5)) : 0;
}
const Bn = (0, s.h)("agent-host:subagent-store-mounts");
class Pn {
    constructor(e){
        this.options = e, this.activeRunsByChildId = new Map, this.applyByChildId = new Map, this.mountedChildIds = new Set;
    }
    async applyForRun(e, t, r) {
        const n = this.activeRunsByChildId.get(t) ?? 0;
        if (this.activeRunsByChildId.set(t, n + 1), n > 0) return await this.applyByChildId.get(t) ?? "unavailable";
        const s = this.options.resolveMounter();
        if (void 0 === s) return "unavailable";
        const o = (async ()=>{
            try {
                return await s.applySubagentStoreMounts({
                    signal: e.signal,
                    parentStoreId: this.options.resolveParentStoreId(r),
                    childStoreId: t
                }), this.mountedChildIds.add(t), "ok";
            } catch (t) {
                return Bn.warn(e, "Subagent store-mount apply failed", {
                    error: String(t)
                }), function(e, t) {
                    return t.aborted || e instanceof Error && ("AbortError" === e.name || "CancellationError" === e.name);
                }(t, e.signal) ? "aborted" : "error";
            }
        })();
        this.applyByChildId.set(t, o);
        try {
            return await o;
        } finally{
            this.applyByChildId.delete(t);
        }
    }
    async clearAfterRun(e, t) {
        const r = this.activeRunsByChildId.get(t) ?? 0;
        if (r > 1) return void this.activeRunsByChildId.set(t, r - 1);
        if (this.activeRunsByChildId.delete(t), !this.mountedChildIds.delete(t)) return;
        const n = this.options.resolveMounter();
        if (void 0 !== n) try {
            await n.clearSubagentStoreMounts({
                childStoreId: t
            });
        } catch (t) {
            Bn.warn(e, "Subagent store-mount clear failed", {
                error: String(t)
            });
        }
    }
}
var Jn = require("./module-51455.js"), Mn = require("./module-76760.js"), qn = require("./module-24804.js");
const Dn = (0, s.h)("agent-host:subagent-transcript-writer");
async function On(e, t) {
    await (0, Jn.mkdir)((0, Mn.dirname)(e), {
        recursive: !0
    }), await (0, Jn.writeFile)(e, t, "utf-8");
}
class Nn {
    constructor(e){
        this.writeChain = Promise.resolve(), this.conversationId = e.conversationId;
        const t = (t, r)=>(0, Mn.join)(e.projectDir, (0, qn.sk)({
                conversationId: t,
                ext: r,
                kind: "subagent",
                parentConversationId: e.parentConversationId
            }));
        this.transcriptPath = t(e.conversationId, "jsonl"), this.transcriptStore = new qn.YF(e.projectDir, e.blobStore, On, {
            writeText: !1,
            writeJsonl: !0,
            pathResolver: t
        });
    }
    getTranscriptPath() {
        return this.transcriptPath;
    }
    async ensureTranscriptFile(e) {
        let t;
        return await this.enqueueWrite(e, async ()=>{
            await (0, Jn.mkdir)((0, Mn.dirname)(this.transcriptPath), {
                recursive: !0
            }), await (0, Jn.writeFile)(this.transcriptPath, "", {
                flag: "a"
            }), t = this.transcriptPath;
        }), t;
    }
    writeFromState(e, t) {
        this.enqueueWrite(e, async ()=>{
            await this.transcriptStore.writeFromStateFull(e, t, this.conversationId);
        });
    }
    writeTurnEnded(e, t, r) {
        return this.enqueueWrite(e, async ()=>{
            await this.transcriptStore.writeFromStateFull(e, t, this.conversationId, {
                turnEnded: r
            });
        });
    }
    waitForPendingWrites() {
        return this.writeChain;
    }
    enqueueWrite(e, t) {
        return this.writeChain = this.writeChain.then(async ()=>{
            try {
                await t();
            } catch (t) {
                Dn.warn(e, "Subagent transcript write failed", {
                    conversationId: this.conversationId,
                    error: String(t)
                });
            }
        }), this.writeChain;
    }
}
const Fn = (0, s.h)("agent-host:subagent-host-adapter");
class Un {
    constructor(e){
        this.options = e, this.sessions = new Map, this.hostedChildByIdentity = new Map, this.mintInFlightByIdentity = new Map, this.backgroundRuns = new Map, this.backgroundPromises = new Set, this.interruptedBackgroundRunKeys = new Set, this.activeForegroundExecutions = new Map, this.pendingForegroundBackgroundToolCallIds = new Set, this.lifecycleStore = new n.VMj, this.storeMounts = new Pn({
            resolveMounter: ()=>(this.options.resolveLocalSubagentStoreMounter ?? nn.ux)(),
            resolveParentStoreId: (e)=>e.parentConversationId?.trim() || this.options.parentConversationId
        }), this.childCompletions = new cn({
            isTrackedSpawner: (e)=>this.sessions.has(e) || this.ownSessionCollectEnabled && e === this.options.parentConversationId
        }), this.ownSessionCollectEnabled = !1, this.fallbackLocalRunSlots = new rt, this.turnAbortRequestedAgentIds = new Set, this.localSpawnMetrics = new xn(e.metrics, ()=>e.getLocalSubagentSpawnSurfaceKind?.() ?? "agent"), this.durableInvocations = new on({
            enabled: !0 === e.subagentsAsSessions,
            parentSessionId: e.parentConversationId,
            rootSessionId: e.rootSessionId ?? e.parentConversationId,
            ...void 0 === e.getRootSessionId ? {} : {
                getRootSessionId: e.getRootSessionId
            },
            store: e.durableSubagentInvocations,
            ...void 0 === e.findExistingChildSessionId ? {} : {
                findExistingChildSessionId: e.findExistingChildSessionId
            },
            isValidChildSessionId: (e)=>yt.test(e)
        });
    }
    getOwnSessionChildCollectControl() {
        return {
            enableCollect: ()=>{
                this.ownSessionCollectEnabled = !0;
            },
            collectAvailableChildCompletions: (e)=>this.childCompletions.collectAvailableChildCompletions(this.options.parentConversationId, e),
            cleanup: ()=>{
                this.ownSessionCollectEnabled = !1, this.childCompletions.cleanupChildCompletionState(this.options.parentConversationId);
            }
        };
    }
    tryAcquireLocalRunSlot() {
        return (this.options.getLocalRunSlots?.() ?? this.fallbackLocalRunSlots).tryAcquire(At(this.options.localSubagentLimits?.maxRunning, 32));
    }
    async createOrResumeSession(e, t) {
        const r = St(t.environment);
        return _t(t), this.localSpawnMetrics.createOrResume(e, t, "local" === r && !Yr(t), async ()=>{
            const n = t.forkAgentId?.trim() ?? "";
            if (this.durableInvocations.clearReplayForExplicitContinuation(t), t.resumeAgentId && n) throw new Error("Cannot set both resumeAgentId and forkAgentId for the same subagent request.");
            if ("cloud" === r) {
                const r = this.requireCloudSubagentRunner(), n = Bt(t);
                n || this.throwIfFollowupTargetsBusyRun(t);
                const s = In(t, this.options), o = await r.createOrResumeCloudSubagent(e, s);
                return n && this.detachBusyCloudRunForInterrupt(t), !0 === r.ownsCloudChildLifecycle && this.options.emitSubagentStarted?.({
                    turnId: this.options.getParentActiveTurnId?.()?.trim() || "",
                    parentToolCallId: t.toolCallId.trim(),
                    childSessionId: o,
                    rootSessionId: s.rootParentConversationId?.trim() || En(this.options)
                }), o;
            }
            if (n && (n !== (t.parentConversationId?.trim() ?? "") || n !== this.options.parentConversationId)) throw new Error("Forking an existing child is not supported in headless subagents; only self-forking the running parent is supported.");
            if (n && !0 !== this.options.subagentsAsSessions) throw new Error("Self-forking requires subagentsAsSessions in headless subagents.");
            const s = It(t), o = void 0 === s ? void 0 : this.mintInFlightByIdentity.get(s);
            if (void 0 !== o) return await o;
            const i = void 0 === s ? void 0 : this.hostedChildByIdentity.get(s), a = await this.durableInvocations.findIndexedReplayChild(t, void 0 !== i && this.sessions.has(i)), c = i ?? (0, x.randomUUID)(), l = await this.durableInvocations.claim({
                args: t,
                proposedChildSessionId: c,
                ...void 0 === a ? {} : {
                    indexedChildSessionId: a
                }
            }), u = l?.claimedChildSessionId;
            let d = l?.replayResumeAgentId;
            void 0 === l && (d = a), void 0 !== d && (t = new ft.Pw({
                ...t,
                resumeAgentId: d
            }), this.durableInvocations.rememberVerifiedReplayChild(d));
            const p = t.resumeAgentId;
            if (p && function(e) {
                if (!yt.test(e)) throw new Error(`Invalid resumeAgentId format: ${e}`);
            }(p), p && !t.prompt) return p;
            if (void 0 === d && (Bt(t) ? await this.interruptBusyLocalBackgroundRun(t) : this.throwIfFollowupTargetsBusyRun(t)), p && this.sessions.has(p)) return p;
            if (!0 === this.options.subagentsAsSessions) {
                const r = void 0 !== p && void 0 === d && void 0 === u;
                return this.createOrResumeHostedChildSession(e, t, p, u, r);
            }
            const m = p ?? (0, x.randomUUID)(), h = Vr(m), f = this.createTranscriptWriter(m, h, t);
            return this.sessions.set(m, {
                store: h,
                toolCallId: t.toolCallId,
                ...void 0 === f ? {} : {
                    transcriptWriter: f
                }
            }), this.childCompletions.registerParentChildLink(m, t.parentConversationId), m;
        });
    }
    createTranscriptWriter(e, t, r) {
        return function(e) {
            const t = e.spec;
            if (void 0 === t) return;
            const r = "function" == typeof t.projectDir ? t.projectDir() : t.projectDir;
            return r ? new Nn({
                projectDir: r,
                conversationId: e.conversationId,
                parentConversationId: e.parentConversationId,
                blobStore: e.blobStore
            }) : void 0;
        }({
            spec: this.options.subagentTranscripts,
            conversationId: e,
            parentConversationId: r.parentConversationId?.trim() || this.options.parentConversationId,
            blobStore: t.getBlobStore()
        });
    }
    async createOrResumeHostedChildSession(e, t, r, n, s) {
        const o = It(t);
        if (void 0 !== o) {
            const i = this.hostedChildByIdentity.get(o);
            if (void 0 !== i && this.sessions.has(i)) return i;
            const a = this.mintInFlightByIdentity.get(o);
            if (void 0 !== a) return a;
            const c = (async ()=>{
                const i = n ?? r ?? this.hostedChildByIdentity.get(o) ?? (0, x.randomUUID)();
                return this.sessions.has(i) ? this.hostedChildByIdentity.set(o, i) : await this.mintHostedChildSession(e, i, t, s), i;
            })();
            this.mintInFlightByIdentity.set(o, c);
            try {
                return await c;
            } finally{
                this.mintInFlightByIdentity.get(o) === c && this.mintInFlightByIdentity.delete(o);
            }
        }
        const i = n ?? r ?? (0, x.randomUUID)();
        return this.sessions.has(i) || await this.mintHostedChildSession(e, i, t, s), i;
    }
    async mintHostedChildSession(e, t, r, n) {
        const s = this.options.createChildSession;
        if (void 0 === s) throw new Error("subagentsAsSessions requires createChildSession to be configured");
        const o = En(this.options), i = r.toolCallId.trim(), a = function(e) {
            if (void 0 !== e) return {
                interactionPolicy: gn(e)
            };
        }(this.options.childInteractionPolicy), c = (r.forkAgentId?.trim() ?? "").length > 0, l = this.options.getLatestParentCheckpoint, u = this.options.getParentBlobStore;
        let d;
        if (c && void 0 === l) throw new Error("Self-forking requires getLatestParentCheckpoint to be configured.");
        if (c && void 0 !== l && (d = l().clone()), c && void 0 === u) throw new Error("Self-forking requires getParentBlobStore to be configured.");
        const p = this.durableInvocations.takeVerifiedReplayChild(t), m = await s(e, {
            sessionId: t,
            ...void 0 === d ? {} : {
                initialHistory: d
            },
            ...void 0 === a ? {} : {
                sessionOptions: a
            }
        }, {
            parent: {
                parentSessionId: this.options.parentConversationId,
                parentToolCallId: i,
                rootSessionId: o
            },
            ...p ? {
                adoptVerifiedDurableChild: !0
            } : {},
            ...n ? {
                requireExistingChild: !0
            } : {}
        }, c ? u?.() : void 0), h = gn(m.interactionPolicy ?? this.options.childInteractionPolicy), f = this.createTranscriptWriter(t, m.store, r);
        this.sessions.set(t, {
            store: m.store,
            toolCallId: r.toolCallId,
            hosted: {
                interactionListener: m.interactionListener,
                appendConversationState: m.appendConversationState,
                beginBlobReadSummary: m.beginBlobReadSummary,
                appendTurnStarted: m.appendTurnStarted,
                appendTurnCompleted: m.appendTurnCompleted,
                appendTurnSettledByError: m.appendTurnSettledByError,
                appendTurnCancelled: m.appendTurnCancelled,
                appendTurnInteractionsSuperseded: m.appendTurnInteractionsSuperseded,
                setActiveTurnId: m.setActiveTurnId,
                interactionPolicy: h,
                subagentExecutor: m.subagentExecutor,
                subagentAwaitExecutor: m.subagentAwaitExecutor,
                forceBackgroundSubagentExecutor: m.forceBackgroundSubagentExecutor,
                subagentCollectControl: m.subagentCollectControl,
                ...void 0 === m.surfaceInteraction ? {} : {
                    surfaceInteraction: m.surfaceInteraction
                },
                ...void 0 === m.surfaceHostQuestion ? {} : {
                    surfaceHostQuestion: m.surfaceHostQuestion
                }
            },
            ...void 0 === f ? {} : {
                transcriptWriter: f
            }
        }), this.childCompletions.registerParentChildLink(t, r.parentConversationId);
        const g = It(r);
        void 0 !== g && this.hostedChildByIdentity.set(g, t), this.options.emitSubagentStarted?.({
            turnId: this.options.getParentActiveTurnId?.()?.trim() || "",
            parentToolCallId: i,
            childSessionId: t,
            rootSessionId: o
        });
    }
    async runSession(e, t, r, n) {
        return this.localSpawnMetrics.run(e, r, ()=>this.durableInvocations.runOnce(r, ()=>this.runSessionOnce(e, t, r, n)));
    }
    async runSessionOnce(e, t, r, s) {
        _t(r);
        const o = St(r.environment);
        if ("local" === o && Yr(r)) return Zr(this, r.resumeAgentId, e);
        if ("local" === o) {
            const e = this.durableInvocations.completedOutcome({
                parentToolCallId: r.toolCallId,
                childSessionId: t
            });
            if (void 0 !== e) return e;
        }
        let i;
        if ("cloud" === o) {
            const e = this.requireCloudSubagentRunner();
            i = (n)=>e.runCloudSubagent(n, t, In(r, this.options));
        } else {
            const e = this.sessions.get(t);
            if (!e) return {
                status: "error",
                error: `Subagent session not found: ${t}`
            };
            let s;
            if ((0, n.UOG)(r.prompt) && (s = this.tryAcquireLocalRunSlot(), void 0 === s)) return {
                status: "error",
                error: (0, n.QCH)({
                    maxRunning: At(this.options.localSubagentLimits?.maxRunning, 32)
                })
            };
            const o = s;
            i = async (n)=>{
                try {
                    const s = this.options.getParentEffectiveMaxMode?.(r.parentConversationId?.trim() || this.options.parentConversationId);
                    return await this.executeSubagent(n, t, r, {
                        ...e,
                        parentMaxMode: s
                    });
                } catch (e) {
                    return n.signal.aborted ? {
                        status: "aborted",
                        error: "Subagent was aborted"
                    } : {
                        status: "error",
                        error: e instanceof Error ? e.message : String(e)
                    };
                } finally{
                    o?.();
                }
            };
        }
        if (r.runInBackground) {
            const [s, o] = e.withDetached().withCancel(), a = this.registerBackgroundRun(t, i(s), r, o), c = await this.ensureBackgroundTranscriptPath(e, t);
            a.transcriptPath = c;
            const l = {
                status: "background",
                backgroundReason: n.qLf.AGENT_REQUEST,
                ...void 0 === c ? {} : {
                    transcriptPath: c
                },
                toolCallCount: 0
            };
            return await this.durableInvocations.markCompleted(r, t, l), l;
        }
        const [a, c] = e.withDetached().withCancel();
        let l = !1;
        const u = ()=>{
            l || c();
        };
        e.signal.addEventListener("abort", u, {
            once: !0
        }), e.signal.aborted && u();
        const d = i(a), p = Promise.withResolvers(), m = r.toolCallId.trim(), h = ()=>{
            this.options.cancelBubbledInteractionToParent?.({
                childSessionId: t,
                parentToolCallId: m
            }, "Subagent force-backgrounded; cancelling pending bubbled interaction");
        }, f = {
            requestBackground: ()=>(l || (l = !0, h(), e.signal.removeEventListener("abort", u), p.resolve()), !0)
        };
        m && this.activeForegroundExecutions.set(m, f), this.activeForegroundExecutions.set(t, f);
        const g = !!m && this.pendingForegroundBackgroundToolCallIds.delete(m), y = this.pendingForegroundBackgroundToolCallIds.delete(t);
        (g || y) && f.requestBackground();
        try {
            const s = await Promise.race([
                d.then((e)=>({
                        case: "completed",
                        outcome: e
                    })),
                p.promise.then(()=>({
                        case: "backgrounded"
                    }))
            ]);
            if ("backgrounded" === s.case) {
                h();
                const s = a.signal.aborted || this.turnAbortRequestedAgentIds.has(t) ? void 0 : this.registerBackgroundRun(t, d, r, c);
                void 0 === s && this.childCompletions.removeParentChildLink(t);
                const o = await this.ensureBackgroundTranscriptPath(e, t);
                void 0 !== s && (s.transcriptPath = o);
                const i = {
                    status: "background",
                    backgroundReason: n.qLf.USER_REQUEST,
                    ...void 0 === o ? {} : {
                        transcriptPath: o
                    },
                    toolCallCount: 0
                };
                return await this.durableInvocations.markCompleted(r, t, i), i;
            }
            return this.childCompletions.removeParentChildLink(t), await this.durableInvocations.markCompleted(r, t, s.outcome), s.outcome;
        } finally{
            m && this.activeForegroundExecutions.get(m) === f && this.activeForegroundExecutions.delete(m), this.activeForegroundExecutions.get(t) === f && this.activeForegroundExecutions.delete(t), l || e.signal.removeEventListener("abort", u);
        }
    }
    async ensureBackgroundTranscriptPath(e, t) {
        return this.sessions.get(t)?.transcriptWriter?.ensureTranscriptFile(e);
    }
    releaseSession(e) {
        if (this.lifecycleStore.release(e), this.isBackgroundRunBusy(e)) return void this.childCompletions.deferCleanup(e);
        this.childCompletions.cleanupChildCompletionState(e), this.sessions.get(e)?.hosted?.subagentCollectControl?.cleanup();
        const t = this.sessions.get(e);
        void 0 === t?.hosted && this.sessions.delete(e);
    }
    async forceBackgroundByToolCallId(e) {
        const t = e.trim();
        if (!t) return new ft.a3({
            status: ft.jh.NOT_FOUND
        });
        const r = this.activeForegroundExecutions.get(t);
        let n;
        if (r) n = r.requestBackground() ? ft.jh.ACCEPTED : ft.jh.NOT_FOUND;
        else {
            if (this.pendingForegroundBackgroundToolCallIds.size >= 100) {
                const e = this.pendingForegroundBackgroundToolCallIds.values().next().value;
                void 0 !== e && this.pendingForegroundBackgroundToolCallIds.delete(e);
            }
            this.pendingForegroundBackgroundToolCallIds.add(t), n = ft.jh.ACCEPTED;
        }
        return new ft.a3({
            status: n
        });
    }
    isBackgroundRunBusy(e) {
        return this.lifecycleStore.isBusy(e) || this.backgroundRuns.has(e);
    }
    getTrackedBackgroundRun(e) {
        return this.backgroundRuns.get(e);
    }
    throwIfFollowupTargetsBusyRun(e) {
        if (Rt(e) && this.isBackgroundRunBusy(e.resumeAgentId)) throw new Error(n.y7k);
    }
    async interruptBusyLocalBackgroundRun(e) {
        const t = e.resumeAgentId, r = t ? this.backgroundRuns.get(t) : void 0;
        t && void 0 !== r ? (this.interruptedBackgroundRunKeys.add(Ct(t, r.runId)), this.lifecycleStore.abort(t), await r.promise) : this.throwIfFollowupTargetsBusyRun(e);
    }
    detachBusyCloudRunForInterrupt(e) {
        const t = e.resumeAgentId, r = t ? this.backgroundRuns.get(t) : void 0;
        t && void 0 !== r && (this.backgroundRuns.delete(t), this.lifecycleStore.finishRun(t, r.runId));
    }
    requireCloudSubagentRunner() {
        if (void 0 !== this.options.getParentToolRestriction?.()) throw new Error("A turn that restricts its tools cannot start a cloud subagent.");
        const e = this.options.cloudSubagentsUnavailableReason?.();
        if (void 0 !== e) throw new Error(e);
        if (void 0 === this.options.cloudSubagentRunner) throw new Error("Cloud subagent runner is not available.");
        return this.options.cloudSubagentRunner;
    }
    registerBackgroundRun(e, t, r, s) {
        const o = function(e, t) {
            const r = e.prompt?.trim();
            if (r) {
                const e = r.indexOf("\n");
                return (-1 === e ? r : r.slice(0, e)).slice(0, 80);
            }
            return `Subagent ${t.slice(0, 8)}`;
        }(r, e), i = "cloud" !== St(r.environment), a = this.lifecycleStore.startRun(e, {
            abort: s
        }), c = t.catch((e)=>({
                status: "error",
                error: e instanceof Error ? e.message : String(e)
            })), l = {
            runId: a,
            promise: c
        };
        return this.backgroundRuns.set(e, l), this.backgroundPromises.add(c), i && (this.childCompletions.registerParentChildLink(e, r.parentConversationId), this.options.backgroundWorkRegistry.upsertWork({
            id: e,
            kind: "subagent",
            state: "running",
            ownerId: this.options.parentConversationId,
            abort: s,
            metadata: (0, n.zyy)({
                title: o,
                startTimeMs: Date.now()
            })
        })), c.then((t)=>{
            this.lifecycleStore.finishRun(e, a);
            const n = this.interruptedBackgroundRunKeys.delete(Ct(e, a)), s = this.backgroundRuns.get(e);
            if (s?.runId === a) {
                if (this.backgroundRuns.delete(e), i) {
                    if (!n) {
                        this.childCompletions.enqueueChildCompletion(e, t) || this.options.backgroundWorkRegistry.enqueue({
                            conversationId: this.options.parentConversationId,
                            id: e,
                            source: "subagent",
                            payload: {
                                taskId: e,
                                toolCallId: r.toolCallId || void 0,
                                kind: "subagent",
                                status: bt(t),
                                title: o,
                                detail: Et(t),
                                reason: "task_finished"
                            }
                        });
                    }
                    this.options.backgroundWorkRegistry.clearWork(e);
                }
                this.maybeCleanupReleasedChildCompletionState(e);
            }
            return t;
        }).finally(()=>this.backgroundPromises.delete(c)), l;
    }
    async executeSubagent(e, t, r, s) {
        if (!(0, n.UOG)(r.prompt)) return {
            status: "completed",
            toolCallCount: 0
        };
        await this.localSpawnMetrics.recordStoreInheritance(e, r, ()=>this.storeMounts.applyForRun(e, t, r));
        try {
            const n = await async function(e, t, r) {
                return new ft.Pw({
                    ...t,
                    prompt: await xt({
                        ctx: e,
                        args: t,
                        resolveRequiredGlobalCommands: r.resolveRequiredGlobalCommands,
                        parentConversationId: r.parentConversationId,
                        rootSessionId: r.rootSessionId
                    })
                });
            }(e, r, {
                ...this.options,
                rootSessionId: En(this.options)
            });
            return n.continuationConfig ? await async function(e, t, r, n, s) {
                const o = n.collectBackgroundChildren ? s.hostedCollectControl : void 0;
                o?.enableCollect();
                try {
                    const i = n.maxLoops > 0 ? n.maxLoops : Number.POSITIVE_INFINITY;
                    let a = await ln(e, t, r, n, i, s);
                    if (!n.collectBackgroundChildren || "completed" !== a.status) return a;
                    const c = 500;
                    for(let l = 0; l < c; l++){
                        if (e.signal.aborted) return {
                            status: "aborted",
                            error: "Subagent was aborted"
                        };
                        let c;
                        try {
                            c = void 0 !== o ? await o.collectAvailableChildCompletions(e.signal) : await s.collectAvailableChildCompletions(e.signal);
                        } catch  {
                            return {
                                status: "aborted",
                                error: "Subagent was aborted"
                            };
                        }
                        if (0 === c.length) return a;
                        const l = Tt([
                            ...c
                        ], n.childrenCompletedMessageTemplate);
                        if (a = await ln(e, t, new ft.Pw({
                            ...r,
                            prompt: l,
                            resumeAgentId: t,
                            runInBackground: !1
                        }), n, i, s), "completed" !== a.status) return a;
                    }
                    return a;
                } finally{
                    o?.cleanup();
                }
            }(e, t, n, n.continuationConfig, {
                runTurn: (e, r)=>this.executeSubagentTurn(e, t, r, s),
                collectAvailableChildCompletions: (e)=>this.childCompletions.collectAvailableChildCompletions(t, e),
                ...void 0 === s.hosted?.subagentCollectControl ? {} : {
                    hostedCollectControl: s.hosted.subagentCollectControl
                }
            }) : await this.executeSubagentTurn(e, t, n, s);
        } finally{
            await this.storeMounts.clearAfterRun(e, t);
        }
    }
    async executeSubagentTurn(e, t, r, s) {
        const o = new n.nRD;
        let a = 0, c = n.yWW, l = 0;
        const u = s.hosted, d = {
            sendUpdate: async (e, n)=>{
                o.onUpdate(n), "toolCallStarted" === n.message.case && (a += 1), void 0 !== u && await u.interactionListener.sendUpdate(e, n), void 0 !== this.options.onInteractionUpdate && await this.options.onInteractionUpdate(t, n, r.toolCallId || void 0);
            },
            query: async (e, n)=>void 0 === u ? function(e) {
                    const t = e.query.case;
                    switch(t){
                        case "webSearchRequestQuery":
                            return mt.x1.webSearchRejected(e.id, "Web search is not supported in headless subagent");
                        case "webFetchRequestQuery":
                            return mt.x1.webFetchRejected(e.id, "Web fetch is not supported in headless subagent");
                        case "switchModeRequestQuery":
                            return mt.x1.switchModeRejected(e.id, "Subagent mode switches are not supported in headless mode");
                        case "askQuestionInteractionQuery":
                            {
                                const t = new ht.tz({
                                    result: {
                                        case: "rejected",
                                        value: new ht.ox({
                                            reason: "Interactive questions are not supported in headless subagent mode"
                                        })
                                    }
                                });
                                return mt.x1.askQuestion(e.id, t);
                            }
                        default:
                            throw new Error(`Unhandled interaction query type in headless subagent: ${String(t)}`);
                    }
                }(n) : An(e, {
                    policy: u.interactionPolicy,
                    query: n,
                    correlation: {
                        childSessionId: t,
                        parentToolCallId: r.toolCallId.trim()
                    },
                    bubbleToParent: (e, t, r)=>{
                        const n = this.options.bubbleInteractionToParent;
                        if (void 0 === n) throw new Error("BUBBLE_TO_PARENT requires bubbleInteractionToParent to be configured");
                        return n(e, t, r);
                    },
                    ...void 0 === this.options.getParentActiveTurnId ? {} : {
                        parentHasActiveTurn: ()=>"" !== (this.options.getParentActiveTurnId?.()?.trim() ?? "")
                    },
                    ...void 0 === u.surfaceInteraction ? {} : {
                        surfaceToUser: u.surfaceInteraction
                    }
                })
        }, p = this.options.getResources({
            agentId: t,
            parentAgentId: r.parentConversationId,
            askHostQuestion: (e, n)=>void 0 === u ? Promise.resolve((0, sn.sJ)(n, fn)) : async function(e, t) {
                    return bn(e, {
                        ...t,
                        kind: t.question.case,
                        reject: (e)=>(0, sn.sJ)(t.question, e)
                    });
                }(e, {
                    question: n,
                    correlation: {
                        childSessionId: t,
                        parentToolCallId: r.toolCallId.trim()
                    },
                    bubbleToParent: (e, t, r)=>{
                        const n = this.options.bubbleHostQuestionToParent;
                        if (void 0 === n) throw new Error("Bubbling a Host question requires bubbleHostQuestionToParent");
                        return n(e, t, r);
                    },
                    ...void 0 === this.options.getParentActiveTurnId ? {} : {
                        parentHasActiveTurn: ()=>"" !== (this.options.getParentActiveTurnId?.()?.trim() ?? "")
                    },
                    ...void 0 === u.surfaceHostQuestion ? {} : {
                        surfaceToUser: u.surfaceHostQuestion
                    }
                }),
            ...void 0 === u?.subagentExecutor ? {} : {
                childSubagentExecutor: u.subagentExecutor
            },
            ...void 0 === u?.subagentAwaitExecutor ? {} : {
                childSubagentAwaitExecutor: u.subagentAwaitExecutor
            },
            ...void 0 === u?.forceBackgroundSubagentExecutor ? {} : {
                childForceBackgroundSubagentExecutor: u.forceBackgroundSubagentExecutor
            }
        }), m = this.options.getParentRequestContext?.(), h = void 0 === m ? void 0 : Ur(m), f = this.options.getParentRequestContextDecoration?.();
        void 0 !== h && (0, Gr.P7)(h, f);
        const g = (0, Gr.DS)($r(p, h), f), y = r.readonly ? (0, n.uaw)(g) : g, w = await this.durableInvocations.createConversationAction(r, t, s.store.getConversationState(), function(e) {
            return e.resumeAgentId && e.mode === gt.FL.UNSPECIFIED && !e.readonly ? le.xyI.UNSPECIFIED : e.mode === gt.FL.PLAN ? le.xyI.PLAN : e.readonly ? le.xyI.ASK : le.xyI.AGENT;
        }(r)), v = this.options.getParentRetryStallSettings?.(), _ = this.options.getParentSubagentModelSettings?.(), A = this.options.getParentBlobEncryptionKey?.(), S = this.options.getParentClientTurnSettings?.(), b = this.options.getParentTurnLineage?.(), E = function(e, t, r) {
            const n = (0, j.RE)(e) ?? r?.requestId;
            return {
                subagentTypeName: t.subagentType || void 0,
                parentAgentToolCallId: t.toolCallId || void 0,
                directMetaParentChildSubagent: !0 === t.directMetaParentChildSubagent,
                parentRequestId: n,
                rootParentRequestId: (0, j.nH)(e) ?? r?.rootParentRequestId ?? n
            };
        }(e, r, b), I = this.options.getParentToolRestriction?.(), C = this.options.getParentCustomSubagents?.(), k = this.options.getParentProjectFolder?.();
        void 0 !== h && Lr(h, C, k), await async function(e) {
            const { ctx: t, action: r, resources: s, notesSessionId: o, parentRequestContext: a, parentCustomSubagents: c, parentProjectFolder: l } = e, u = (0, i.tK)(r);
            if (void 0 === u || void 0 !== u.requestContext) return;
            const d = {
                childSessionId: o,
                actionCase: r.action.case,
                usedParentRequestContext: void 0 !== a
            };
            try {
                let e;
                if (void 0 !== a) e = Ur(a);
                else {
                    const r = s.get(n.MZM);
                    if (void 0 === r) return void Fr.warn(t, "Hosted child turn runs without request context: executor missing", d);
                    const i = await r.execute(t, new Mr._K({
                        notesSessionId: o
                    }));
                    if (e = "success" === i.result.case ? i.result.value.requestContext : void 0, void 0 === e) return void Fr.warn(t, "Hosted child turn runs without request context: executor returned none", {
                        ...d,
                        resultCase: i.result.case
                    });
                }
                Lr(e, c, l), u.requestContext = e;
            } catch (e) {
                Fr.warn(t, "Hosted child turn runs without request context: fetch failed", {
                    ...d,
                    error: String(e)
                });
            }
        }({
            ctx: e,
            action: w,
            resources: y,
            notesSessionId: t,
            ...void 0 === h ? {} : {
                parentRequestContext: h
            },
            ...void 0 === C ? {} : {
                parentCustomSubagents: C
            },
            ...void 0 === k ? {} : {
                parentProjectFolder: k
            }
        });
        const T = this.options.getParentRequestContextBlobTransportSettings?.(), { requestedModel: R, modelDetails: B, lastTurnModel: P } = await Dt({
            ctx: e,
            subagentArgs: r,
            parentMaxMode: s.parentMaxMode,
            retrySettings: v,
            requestContextBlobTransport: T,
            ...void 0 === _ ? {} : {
                subagentModelSettings: _
            },
            ...void 0 === A ? {} : {
                blobEncryptionKey: A
            },
            ...void 0 === S ? {} : {
                clientTurnSettings: S
            },
            ...void 0 === I ? {} : {
                toolRestriction: I
            },
            ...void 0 === C ? {} : {
                customSubagents: C
            },
            ...void 0 === k ? {} : {
                projectFolder: k
            },
            ...void 0 === h ? {} : {
                requestContext: h
            },
            ...void 0 === f?.smartModeClassifierAutoModeEnabled ? {} : {
                subagentSmartModeAutoRun: f.smartModeClassifierAutoModeEnabled
            },
            resolveSavedModelParameters: this.options.resolveSavedModelParameters,
            parentConversationId: this.options.parentConversationId,
            rootSessionId: En(this.options)
        }), J = void 0 === u ? void 0 : (0, x.randomUUID)(), M = J ?? (0, x.randomUUID)(), q = {
            ...P,
            requestId: M,
            ...void 0 === E.parentRequestId ? {} : {
                parentRequestId: E.parentRequestId
            },
            ...void 0 === E.rootParentRequestId ? {} : {
                rootParentRequestId: E.rootParentRequestId
            }
        }, D = new dn({
            ctx: e,
            onAbortRequested: ()=>this.turnAbortRequestedAgentIds.add(t)
        }), O = (t)=>{
            if (void 0 !== u && void 0 !== J && D.claimSettle()) try {
                t(u, J);
            } catch (t) {
                Fn.warn(e, "Hosted child turn settle append failed", {
                    turnId: J,
                    error: String(t)
                });
            }
        }, N = ()=>{
            const e = r.toolCallId.trim();
            e && this.options.cancelBubbledInteractionToParent?.({
                childSessionId: t,
                parentToolCallId: e
            }, "Subagent was aborted; cancelling pending bubbled interaction");
        };
        let F = !1;
        const U = (t)=>s.transcriptWriter?.writeTurnEnded(e, s.store.getConversationState(), t);
        try {
            void 0 !== u && void 0 !== J && (u.appendTurnStarted(J, function(e, t) {
                return void 0 === t ? e : {
                    ...e,
                    requestContextDecoration: t
                };
            }(q, f), D.abortTurn), u.setActiveTurnId(J));
            const e = u?.beginBlobReadSummary(D.turnCtx) ?? {
                ctx: D.turnCtx,
                finish: ()=>{}
            };
            try {
                const i = G(e.ctx, {
                    requestId: M,
                    parentRequestId: E.parentRequestId,
                    rootParentRequestId: E.rootParentRequestId
                });
                await Wr({
                    ctx: i,
                    adapter: this.options.adapter,
                    conversationState: s.store.getConversationState(),
                    action: w,
                    interactionListener: d,
                    resources: y,
                    blobStore: s.store.getBlobStore(),
                    checkpointHandler: {
                        handleCheckpoint: async (e, n, i)=>{
                            c = o.snapshot(), l = a, "ineligible_terminal_turn" === i?.resumeEligibility && (F = !0), await s.store.handleCheckpoint(e, n), await this.durableInvocations.markCheckpointed(r, t), u?.appendConversationState((0, ur.ks)(n)), s.transcriptWriter?.writeFromState(e, n);
                        },
                        getLatestCheckpoint: ()=>s.store.getConversationState()
                    },
                    runOptions: {
                        conversationId: t,
                        conversationGroupId: En(this.options),
                        generationUUID: M,
                        ...E,
                        selectedSubagentModels: [
                            ..._?.selectedSubagentModels ?? []
                        ],
                        subagentModelOverrides: [
                            ..._?.subagentModelOverrides ?? []
                        ],
                        enableAgentRetries: v?.enableAgentRetries ?? !1,
                        fixedRetryDelayMs: v?.fixedRetryDelayMs,
                        endlessRetries: v?.endlessRetries,
                        stallDetectorConfig: v?.stallDetectorConfig,
                        isRunningInTest: v?.isRunningInTest,
                        ...T,
                        headers: (0, pt.Pb)(S?.headers, (0, pt.jz)(A)),
                        maxSteps: S?.maxSteps,
                        canCreateCloudSubagents: S?.canCreateCloudSubagents,
                        localLoopGateEnabled: S?.localLoopGateEnabled,
                        startedAsNewProject: S?.startedAsNewProject,
                        firstProjectOnboarding: S?.firstProjectOnboarding,
                        harness: S?.harness,
                        suggestNextPrompt: S?.suggestNextPrompt,
                        clientSupportsInlineImages: S?.clientSupportsInlineImages,
                        clientSupportsPreviewCard: S?.clientSupportsPreviewCard,
                        clientSupportsSendToUser: S?.clientSupportsSendToUser,
                        clientSupportsRoutedModelUpdate: S?.clientSupportsRoutedModelUpdate,
                        toolRestriction: I,
                        ...void 0 === C ? {} : {
                            customSubagents: [
                                ...C
                            ]
                        },
                        ...void 0 === k ? {} : {
                            projectFolder: k
                        },
                        onRetryStarting: async (e, t)=>{
                            t.isResume ? (o.restore(c), a = l) : (o.restore(n.yWW), a = 0, c = n.yWW, l = 0), void 0 !== u && void 0 !== J && u.appendTurnInteractionsSuperseded(J, t.isResume ? {
                                case: "resumeFromCheckpoint",
                                value: t.conversationState
                            } : {
                                case: "replayActionFromState",
                                value: t.conversationState
                            });
                        },
                        ...void 0 === R ? {} : {
                            requestedModel: R
                        }
                    },
                    modelDetails: B,
                    conversationActionManager: D.conversationActionManager
                });
            } finally{
                e.finish();
            }
            return D.isAborted() ? (O((e, t)=>e.appendTurnCancelled(t, D.abortReason ?? "Subagent was aborted", D.abortInitiatedBy)), N(), await U({
                status: "aborted"
            }), {
                status: "aborted",
                error: "Subagent was aborted"
            }) : (O((e, t)=>e.appendTurnCompleted(t)), await U({
                status: "success"
            }), {
                status: "completed",
                finalMessage: o.finalize(),
                toolCallCount: a
            });
        } catch (e) {
            return D.isAborted() ? (O((t, r)=>t.appendTurnCancelled(r, D.abortReason ?? (e instanceof Error ? e.message : "Subagent was aborted"), D.abortInitiatedBy)), N(), await U({
                status: "aborted"
            }), {
                status: "aborted",
                error: "Subagent was aborted"
            }) : F ? (o.restore(c), a = l, O((e, t)=>e.appendTurnCompleted(t)), await U({
                status: "success"
            }), {
                status: "completed",
                finalMessage: o.finalize(),
                toolCallCount: a
            }) : (O((t, r)=>t.appendTurnSettledByError(r, e)), await U({
                status: "error",
                error: e instanceof Error ? e.message : String(e)
            }), {
                status: "error",
                error: e instanceof Error ? e.message : String(e)
            });
        } finally{
            if (D.dispose(), this.turnAbortRequestedAgentIds.delete(t), void 0 !== u && void 0 !== J) try {
                u.setActiveTurnId(void 0);
            } catch (t) {
                Fn.warn(e, "Clearing hosted child active turn failed", {
                    turnId: J,
                    error: String(t)
                });
            }
        }
    }
    maybeCleanupReleasedChildCompletionState(e) {
        this.childCompletions.hasDeferredCleanup(e) && !this.isBackgroundRunBusy(e) && (this.childCompletions.cleanupChildCompletionState(e), this.sessions.get(e)?.hosted?.subagentCollectControl?.cleanup());
    }
}
class Ln {
    constructor(){
        this.fanout = new Sr.W;
    }
    async *subscribe(e, t) {
        const r = {
            getSnapshot: t,
            events: new Sr.l,
            notify: void 0
        };
        this.fanout.add(r);
        try {
            if (this.fanout.isClosed) return;
            for(yield {
                event: {
                    case: "snapshot",
                    value: {
                        work: t().map(ur.C8)
                    }
                }
            }; !e.signal.aborted && !this.fanout.isClosed;){
                const t = r.events.shift();
                void 0 === t ? await this.fanout.waitForEvent(e, r) : yield t;
            }
        } finally{
            this.fanout.delete(r);
        }
    }
    emitState() {
        this.fanout.isClosed || this.fanout.forEach((e)=>{
            e.events.push({
                event: {
                    case: "state",
                    value: {
                        work: e.getSnapshot().map(ur.C8)
                    }
                }
            }), this.fanout.wake(e);
        });
    }
    close() {
        this.fanout.close();
    }
}
function $n(e) {
    return `subagent:${e.childSessionId}:${e.parentToolCallId}`;
}
function Qn(e) {
    return `subagent-surfaced:${e.childSessionId}:${e.parentToolCallId}`;
}
class jn {
    constructor(e, t, r){
        this.sessionId = e, this.events = t, this.registry = r, this.bubbledInteractionSeq = 0, this.hostInteractionSeq = 0, this.surfacedInteractionSeq = 0;
    }
    setActiveTurnId(e) {
        const t = this.activeTurnId;
        this.activeTurnId = e, void 0 === e && void 0 !== t && this.registry.cancelTurn(t, new Error("Parent turn ended while interaction was still pending"), {
            settleRejectBubbled: !0
        });
    }
    cancelBubbledFromChild(e, t) {
        this.registry.settleRejectByRequestId({
            requestId: $n(e),
            reason: t ?? "Subagent force-backgrounded; cancelling pending bubbled interaction"
        });
    }
    getActiveTurnId() {
        return this.activeTurnId;
    }
    setUpdateInterceptor(e) {
        this.interceptUpdate = e;
    }
    async sendUpdate(e, t) {
        !0 !== this.interceptUpdate?.(t) && this.events.appendInteractionUpdate(t);
    }
    async query(e, t) {
        const r = this.activeTurnId;
        if (void 0 === r) throw new Error(`Agent host interaction query has no active turn: ${this.sessionId}`);
        return this.registry.query(e, r, t);
    }
    async queryFromChild(e, t, r) {
        const { turnId: n, key: s } = this.bubbledKey(r, t.id);
        return this.registry.query(e, n, t, s);
    }
    async querySurfacedForSubagent(e, t, r) {
        const { turnId: n, key: s } = this.surfacedKey(r, t.id);
        return this.registry.query(e, n, t, s);
    }
    async askHostQuestion(e, t) {
        const r = this.activeTurnId;
        if (void 0 === r) throw new Error(`Agent host question has no active turn: ${this.sessionId}`);
        const n = ++this.hostInteractionSeq;
        return this.registry.askHostQuestion(e, r, t, {
            requestId: `host:${n}`,
            interactionId: `${r}:host:${n}`
        });
    }
    async askHostQuestionFromChild(e, t, r) {
        const { turnId: n, key: s } = this.bubbledKey(r, 0);
        return this.registry.askHostQuestion(e, n, t, s);
    }
    async askHostQuestionSurfacedForSubagent(e, t, r) {
        const { turnId: n, key: s } = this.surfacedKey(r, 0);
        return this.registry.askHostQuestion(e, n, t, s);
    }
    bubbledKey(e, t) {
        const r = this.activeTurnId;
        if (void 0 === r) throw new mn(this.sessionId);
        const n = ++this.bubbledInteractionSeq;
        return {
            turnId: r,
            key: {
                requestId: $n(e),
                interactionId: (s = {
                    turnId: r,
                    correlation: e,
                    queryId: t,
                    seq: n
                }, `${s.turnId}:${$n(s.correlation)}:${s.queryId}:${s.seq}`)
            }
        };
        var s;
    }
    surfacedKey(e, t) {
        const r = this.activeTurnId;
        if (void 0 === r) throw new Error(`Agent host surfaced interaction has no active child turn: ${this.sessionId}`);
        const n = ++this.surfacedInteractionSeq;
        return {
            turnId: r,
            key: {
                requestId: Qn(e),
                interactionId: (s = {
                    turnId: r,
                    correlation: e,
                    queryId: t,
                    seq: n
                }, `${s.turnId}:${Qn(s.correlation)}:${s.queryId}:${s.seq}`)
            }
        };
        var s;
    }
}
var Gn = require("./module-76183.js");
class Hn {
    constructor(){
        this.fanout = new Sr.W, this.unwatched = new Sr.l;
    }
    async *subscribe(e) {
        const t = {
            events: new Sr.l,
            notify: void 0
        };
        for(let e = this.unwatched.shift(); void 0 !== e; e = this.unwatched.shift())t.events.push(e);
        this.fanout.add(t);
        try {
            for(yield new Ot.m$({
                event: {
                    case: "ready",
                    value: new Ot.lX
                }
            }); !e.signal.aborted && !this.fanout.isClosed;){
                const r = t.events.shift();
                void 0 === r ? await this.fanout.waitForEvent(e, t) : yield r;
            }
        } finally{
            this.fanout.delete(t);
        }
    }
    emit(e) {
        if (!this.fanout.isClosed) return 0 === this.fanout.size ? (this.unwatched.length >= 256 && this.unwatched.shift(), void this.unwatched.push(new Ot.m$({
            event: {
                case: "lifecycle",
                value: e.clone()
            }
        }))) : void this.fanout.forEach((t)=>{
            t.events.push(new Ot.m$({
                event: {
                    case: "lifecycle",
                    value: e.clone()
                }
            })), this.fanout.wake(t);
        });
    }
    close() {
        this.fanout.close(), this.unwatched = new Sr.l;
    }
}
var zn, Wn = require("./module-42956.js"), Vn = function(e, t, r, n) {
    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
};
zn = new WeakMap;
const Kn = new class {
    constructor(){
        zn.set(this, new WeakMap);
    }
    mark(e, t) {
        Vn(this, zn, "f").set(e, t);
    }
    get(e, t) {
        return Vn(this, zn, "f").get(e)?.get(t);
    }
};
function Yn(e) {
    const t = new Map;
    for (const [r, n] of Xn(e)){
        const e = n.history[n.history.length - 1];
        t.set(r, {
            latestStep: e?.step?.trim() || void 0,
            finalSummary: n.finalSummary || void 0,
            completedSubtitle: n.completedSubtitle || void 0
        });
    }
    return t;
}
function Zn(e, t) {
    const r = e.communicateUpdateStatesByParentToolCallId;
    return r instanceof Map ? r.get(t) : r?.[t];
}
function Xn(e) {
    const t = e.communicateUpdateStatesByParentToolCallId;
    return t instanceof Map ? [
        ...t.entries()
    ] : Object.entries(t ?? {});
}
const es = "x-cursor-agent-transport-mode";
function ts(e, t, r) {
    e.activeTurnMaxModeHolds += 1, t?.(e.sessionId, r);
}
function rs(e, t) {
    e.activeTurnMaxModeHolds = Math.max(0, e.activeTurnMaxModeHolds - 1), 0 === e.activeTurnMaxModeHolds && t?.(e.sessionId, void 0);
}
function ns(e, t, r) {
    e.pendingTurns = Math.max(0, e.pendingTurns - 1), e.hostedTaskTurnCompleters.get(t)?.(), e.hostedTaskTurnCompleters.delete(t), e.hostedTaskTurnAborts.delete(t), rs(e, r), e.onAwaitingInputChanged?.(), (0, Er.YF)(e);
}
async function ss(e) {
    const { ctx: t, request: r, options: s } = e, o = e.parent?.rootSessionId ?? r.sessionId, i = e.sessionStore?.getBlobStore() ?? e.sharedBlobStore ?? s.createBlobStore?.({
        sessionId: r.sessionId,
        rootSessionId: o,
        ...void 0 !== e.parent?.parentSessionId ? {
            parentSessionId: e.parent.parentSessionId
        } : {}
    }) ?? new er.ve, a = (0, Wn.a)(i), c = e.sessionStore ?? s.createSessionStore?.({
        sessionId: r.sessionId,
        blobStore: i
    }), l = void 0 === c && "seed" === e.initialHistoryMode ? r.initialHistory : void 0, u = c ?? Vr(r.sessionId, i, l);
    void 0 !== r.initialHistory && void 0 === l && await u.handleCheckpoint(t, r.initialHistory);
    const d = s.createBackgroundWorkRegistry?.() ?? new Nr(t), p = new Ln;
    d.setOnWorkChanged(()=>{
        p.emitState(), Y.onBackgroundWorkChanged?.();
    });
    const m = !0 === s.subagentsAsSessions, h = new Gn.aJ(m ? {
        maxInMemoryEvents: s.sessionEventLogMaxInMemoryEvents ?? Gn.Cw,
        ...void 0 === s.sessionEventLogOverflowSink ? {} : {
            overflowSink: s.sessionEventLogOverflowSink
        }
    } : {}), f = new Hn;
    d.setOnCompletionEnqueued(()=>{
        const t = d.drainCompletions().map((e)=>(function(e) {
                const t = (0, n.NSZ)(e.reason);
                return new le.KFq({
                    taskId: e.taskId,
                    kind: qr(e.kind),
                    status: Dr(e.status),
                    title: e.title,
                    ...e.detail ? {
                        detail: e.detail
                    } : {},
                    ...e.outputPath ? {
                        outputPath: e.outputPath
                    } : {},
                    ...e.toolCallId ? {
                        toolCallId: e.toolCallId
                    } : {},
                    ...void 0 !== t ? {
                        reason: t
                    } : {}
                });
            })(e));
        for (const e of t)h.appendBackgroundTaskCompleted(e);
        t.length > 0 && e.hostHooks?.queueBackgroundWakeup?.(t);
    });
    const g = new sn.vS(h, {
        onAwaitingInputStarted: ()=>{
            Y.awaitingInputCount += 1, Y.onAwaitingInputChanged?.();
        },
        onAwaitingInputEnded: ()=>{
            Y.awaitingInputCount = Math.max(0, Y.awaitingInputCount - 1), Y.onAwaitingInputChanged?.();
        },
        onInteractionKeyReuse: (e)=>s.metrics?.increment?.({
                stat: sn.zv,
                value: 1,
                tags: {
                    outcome: e.outcome,
                    query_case: e.queryCase
                }
            }),
        onInteractionResponded: (e, t)=>{
            const r = (0, sn.c3)(e, t);
            void 0 !== r && s.onMcpAuthApproved?.(r);
        }
    }), y = new jn(r.sessionId, h, g), w = e.parent?.rootSessionId ?? r.sessionId, v = void 0 !== e.parent ? gn(r.sessionOptions?.interactionPolicy) : void 0;
    let _, A, S;
    const b = s.subagentTranscripts;
    let E, I, C, k, x, T, R, B, P, J, M;
    const q = (e)=>{
        const t = e.clone();
        !1 !== t.customSubagentsInfoComplete && (J = t.customSubagents), void 0 !== P && !1 === t.customSubagentsInfoComplete || (P = t), M = t.env?.projectFolder || void 0;
        const r = t.env?.smartModeClassifierAutoModeEnabled;
        void 0 !== r && (k = new Ot.hV({
            smartModeClassifierAutoModeEnabled: r
        }));
    }, D = s.findExistingSubagentSessionId, O = s.getLocalSubagentRunSlots, N = s.getLocalSubagentSpawnSurfaceKind, F = new Un({
        adapter: s.adapter,
        backgroundWorkRegistry: d,
        cloudSubagentRunner: s.cloudSubagentRunner,
        cloudSubagentsUnavailableReason: s.cloudSubagentsUnavailableReason,
        getParentEffectiveMaxMode: s.getParentEffectiveMaxMode,
        getParentRetryStallSettings: ()=>E ?? function(e) {
                const t = (0, pt.pA)(e);
                if (void 0 !== t) return {
                    enableAgentRetries: t.enableAgentRetries,
                    fixedRetryDelayMs: t.fixedRetryDelayMs,
                    endlessRetries: t.endlessRetries,
                    stallDetectorConfig: t.stallDetectorConfig,
                    isRunningInTest: t.isRunningInTest
                };
            }(Y.lastTurnModel?.turnOptions),
        getParentSubagentModelSettings: ()=>I ?? function(e) {
                const t = (0, pt.pA)(e);
                if (void 0 !== t && (void 0 !== t.selectedSubagentModels || void 0 !== t.subagentModelOverrides)) return {
                    selectedSubagentModels: t.selectedSubagentModels ?? [],
                    subagentModelOverrides: t.subagentModelOverrides ?? []
                };
            }(Y.lastTurnModel?.turnOptions),
        getParentRequestContextBlobTransportSettings: ()=>{
            return C ?? (e = Y.lastTurnModel?.turnOptions, Mt((0, pt.pA)(e)));
            var e;
        },
        getParentRequestContextDecoration: ()=>{
            return e = k ?? Y.lastTurnModel?.requestContextDecoration, t = Y.lastTurnModel?.turnOptions?.subagentSmartModeAutoRun, void 0 === t ? e : new Ot.hV({
                smartModeClassifierAutoModeEnabled: t
            });
            var e, t;
        },
        getParentRequestContext: ()=>P ?? Y.lastTurnModel?.requestContext,
        getParentBlobEncryptionKey: ()=>x ?? Y.lastTurnModel?.turnOptions?.blobEncryptionKey,
        getParentClientTurnSettings: ()=>{
            return T ?? (e = Y.lastTurnModel?.turnOptions, qt((0, pt.pA)(e)));
            var e;
        },
        getParentTurnLineage: ()=>R ?? function(e) {
                if (void 0 !== e?.requestId || void 0 !== e?.rootParentRequestId) return {
                    requestId: e.requestId,
                    rootParentRequestId: e.rootParentRequestId ?? e.requestId
                };
            }(Y.lastTurnModel),
        getParentToolRestriction: ()=>B ?? (0, pt.G5)(Y.lastTurnModel?.turnOptions),
        getParentCustomSubagents: ()=>J ?? Y.lastTurnModel?.customSubagents,
        getParentProjectFolder: ()=>M ?? Y.lastTurnModel?.projectFolder,
        resolveSavedModelParameters: s.resolveSavedModelParameters,
        resolveRequiredGlobalCommands: s.resolveRequiredGlobalCommands,
        durableSubagentInvocations: s.durableSubagentInvocations,
        ...void 0 === s.metrics ? {} : {
            metrics: s.metrics
        },
        ...void 0 === N ? {} : {
            getLocalSubagentSpawnSurfaceKind: ()=>N(Y.parent?.rootSessionId ?? r.sessionId)
        },
        ...void 0 === D ? {} : {
            findExistingChildSessionId: ({ parentToolCallId: e })=>D({
                    parentSessionId: r.sessionId,
                    rootSessionId: w,
                    parentToolCallId: e
                })
        },
        ...void 0 === r.sessionOptions?.localSubagentLimits && void 0 === s.localSubagentLimits ? {} : {
            localSubagentLimits: r.sessionOptions?.localSubagentLimits ?? s.localSubagentLimits
        },
        ...void 0 === O ? {} : {
            getLocalRunSlots: ()=>O(Y.parent?.rootSessionId ?? r.sessionId)
        },
        parentConversationId: r.sessionId,
        conversationGroupId: w,
        rootSessionId: w,
        getRootSessionId: ()=>Y.parent?.rootSessionId ?? r.sessionId,
        subagentsAsSessions: m,
        ...void 0 === b ? {} : {
            subagentTranscripts: {
                projectDir: ()=>(function(e, t) {
                        if (void 0 === e) return;
                        const r = e.projectDir;
                        if ("string" == typeof r) return r || void 0;
                        try {
                            return r({
                                sessionId: t
                            }) || void 0;
                        } catch  {
                            return;
                        }
                    })(b, r.sessionId)
            }
        },
        ...void 0 === s.subagentInteractionPolicy ? {} : {
            childInteractionPolicy: s.subagentInteractionPolicy
        },
        getResources: ({ agentId: e, parentAgentId: t, childSubagentExecutor: r, childSubagentAwaitExecutor: n, childForceBackgroundSubagentExecutor: o, askHostQuestion: i })=>{
            if (void 0 === _) throw new Error("Subagent executor was requested before initialization");
            return s.createResources({
                sessionId: e,
                rootSessionId: w,
                parentSessionId: t,
                subagentExecutor: r ?? _,
                subagentAwaitExecutor: n ?? as(A),
                forceBackgroundSubagentExecutor: o ?? is(S),
                backgroundWorkRegistry: d,
                askHostQuestion: i
            });
        },
        onInteractionUpdate: (e, r, n)=>(async function(e, t, r, n, s) {
                if ("toolCallStarted" !== n.message.case && "toolCallCompleted" !== n.message.case) return;
                const o = n.message.value.toolCall;
                if ("communicateUpdateToolCall" !== o?.tool.case) return;
                const i = o.tool.value.args, a = i?.currentStep?.trim(), c = i?.finalSummary?.trim(), l = i?.completedSubtitle?.trim();
                if (!a && !c && !l) return;
                const u = s?.trim();
                if (!u) return;
                const d = t.getConversationState(), p = Zn(d, u), m = p?.history ?? [], h = m[m.length - 1], f = void 0 !== a && a.length > 0 && (h?.step?.trim() || void 0) !== a, g = c || p?.finalSummary || void 0, y = l || p?.completedSubtitle || void 0, w = {
                    latestStep: f ? a : h?.step?.trim() || void 0,
                    finalSummary: g,
                    completedSubtitle: y
                };
                if (!f && g === (p?.finalSummary || void 0) && y === (p?.completedSubtitle || void 0) && (v = Kn.get(t, u), _ = w, void 0 !== v && v.latestStep === _.latestStep && v.finalSummary === _.finalSummary && v.completedSubtitle === _.completedSubtitle)) return;
                var v, _;
                const A = (0, ur.ks)(d), S = Zn(A, u), b = S?.history ?? [], E = b[b.length - 1], I = f ? b.reduce((e, t)=>Math.max(e, t.messageIndex), -1) + 1 : E?.messageIndex, C = f ? [
                    ...b,
                    new le.NH9({
                        step: a,
                        messageIndex: I ?? 0
                    })
                ] : b, k = new le.RCW({
                    history: C,
                    finalSummary: g,
                    completedSubtitle: y
                }), x = A.communicateUpdateStatesByParentToolCallId ?? {};
                A.communicateUpdateStatesByParentToolCallId = {
                    ...x,
                    [u]: k
                }, r.appendConversationState(A), await t.handleCheckpoint(e, A), Kn.mark(t, Yn(A));
            })(t, u, h, r, n),
        createChildSession: m ? async (t, r, n, o)=>{
            const i = e.hostHooks;
            if (void 0 === i) throw new Error("subagentsAsSessions requires host hooks for createChildSession");
            const a = await i.createChildSession(t, r, n, o);
            return {
                sessionId: a.sessionId,
                store: a.store,
                interactionListener: a.interactionListener,
                appendConversationState: (e)=>a.events.appendConversationState(e),
                beginBlobReadSummary: a.beginBlobReadSummary,
                appendTurnStarted: (e, t, r)=>{
                    a.events.appendTurnStarted(e), void 0 !== t && (a.lastTurnModel = t), ts(a, s.noteActiveTurnMaxMode, Pt(t)), a.pendingTurns += 1, a.hostedTaskTurnCompleters.set(e, function(e) {
                        let t;
                        const r = new Promise((e)=>{
                            t = e;
                        });
                        return e.turnChain = e.turnChain.then(()=>r, ()=>r), t;
                    }(a)), void 0 !== r && a.hostedTaskTurnAborts.set(e, r), a.onAwaitingInputChanged?.();
                },
                appendTurnCompleted: (e)=>{
                    try {
                        a.events.appendTurnCompleted(e);
                    } finally{
                        ns(a, e, s.noteActiveTurnMaxMode);
                    }
                },
                appendTurnSettledByError: (e, t)=>{
                    try {
                        a.events.appendTurnSettledByError(e, t);
                    } finally{
                        ns(a, e, s.noteActiveTurnMaxMode);
                    }
                },
                appendTurnCancelled: (e, t, r)=>{
                    try {
                        a.events.appendTurnCancelled(e, t, r);
                    } finally{
                        ns(a, e, s.noteActiveTurnMaxMode);
                    }
                },
                appendTurnInteractionsSuperseded: (e, t)=>a.events.appendTurnInteractionsSuperseded(e, t),
                setActiveTurnId: (e)=>a.interactionListener.setActiveTurnId(e),
                interactionPolicy: a.interactionPolicy ?? gn(r.sessionOptions?.interactionPolicy),
                subagentExecutor: a.subagentExecutor,
                subagentAwaitExecutor: a.subagentAwaitExecutor,
                forceBackgroundSubagentExecutor: a.forceBackgroundSubagentExecutor,
                subagentCollectControl: a.subagentCollectControl,
                surfaceInteraction: (e, t, r)=>a.interactionListener.querySurfacedForSubagent(e, t, r),
                surfaceHostQuestion: (e, t, r)=>a.interactionListener.askHostQuestionSurfacedForSubagent(e, t, r)
            };
        } : void 0,
        getLatestParentCheckpoint: ()=>u.getConversationState(),
        getParentBlobStore: ()=>u.getBlobStore(),
        getParentActiveTurnId: ()=>y.getActiveTurnId(),
        bubbleInteractionToParent: (U = y, async (e, t, r)=>void 0 !== U.queryFromChild ? U.queryFromChild(e, t, r) : U.query(e, t)),
        bubbleHostQuestionToParent: (e, t, r)=>y.askHostQuestionFromChild(e, t, r),
        cancelBubbledInteractionToParent: (e, t)=>{
            y.cancelBubbledFromChild(e, t);
        },
        emitSubagentStarted: (e)=>{
            h.appendSubagentStarted(e);
        }
    });
    var U;
    const L = ($ = F, (0, n.hv_)($));
    var $;
    _ = L;
    const Q = (j = F, {
        execute: async (e, t)=>tn(j, e, t)
    });
    var j;
    A = Q;
    const H = function(e) {
        return {
            execute: async (t, r)=>e.forceBackgroundByToolCallId(r.toolCallId)
        };
    }(F);
    S = H;
    const z = e.parent?.parentSessionId ?? e.forkedFromSessionId, W = s.createResources({
        sessionId: r.sessionId,
        rootSessionId: w,
        ...void 0 === z ? {} : {
            parentSessionId: z
        },
        ...void 0 === e.parent ? {} : {
            parent: e.parent
        },
        subagentExecutor: L,
        subagentAwaitExecutor: Q,
        forceBackgroundSubagentExecutor: H,
        backgroundWorkRegistry: d,
        askHostQuestion: (e, t)=>y.askHostQuestion(e, t)
    }), V = e.parent, K = r.owningClientInstanceId?.trim() || r.clientInstanceId?.trim() || void 0, Y = {
        sessionId: r.sessionId,
        ...void 0 === r.sessionOptions ? {} : {
            sessionOptions: os(r.sessionOptions)
        },
        ...void 0 === K ? {} : {
            owningClientInstanceId: K
        },
        store: u,
        events: h,
        interactionListener: y,
        interactionRegistry: g,
        backgroundWorkRegistry: d,
        backgroundWorkWatchers: p,
        subagentExecutor: L,
        subagentAwaitExecutor: Q,
        forceBackgroundSubagentExecutor: H,
        subagentCollectControl: F.getOwnSessionChildCollectControl(),
        turnLifecycleWatchers: f,
        finishTurnLifecycle: (e)=>{
            f.emit(new Ot.JW({
                turnId: e,
                event: {
                    case: "finished",
                    value: new Ot.zU
                }
            }));
        },
        beginBlobReadSummary: (e)=>{
            const t = s.storageInstruments;
            return void 0 === t ? {
                ctx: e,
                finish: ()=>{}
            } : t.beginBlobReadSummary(e, r.sessionId, a);
        },
        applyCheckpoint: async (e, t)=>{
            await async function(e, t, r) {
                const n = (0, ur.ks)(r), s = Xn(t.store.getConversationState());
                s.length > 0 && function(e, t) {
                    const r = Xn(e), n = new Map(t);
                    for (const [e, t] of r)n.set(e, t);
                    e.communicateUpdateStatesByParentToolCallId = Object.fromEntries(n);
                }(n, s);
                await t.store.handleCheckpoint(e, n), Kn.mark(t.store, Yn(n)), t.events.appendConversationState(n);
            }(e, Y, t);
        },
        rebase: async (e, t)=>{
            const r = (0, ur.ks)(t);
            await u.handleCheckpoint(e, r), Kn.mark(u, Yn(r)), h.appendConversationState(r);
        },
        disposeResources: ()=>s.disposeResources?.(W),
        run: async (t)=>{
            y.setActiveTurnId(t.turnId), E = {
                enableAgentRetries: t.runOptions?.enableAgentRetries,
                fixedRetryDelayMs: t.runOptions?.fixedRetryDelayMs,
                endlessRetries: t.runOptions?.endlessRetries,
                stallDetectorConfig: t.runOptions?.stallDetectorConfig,
                isRunningInTest: t.runOptions?.isRunningInTest
            }, I = {
                selectedSubagentModels: t.runOptions?.selectedSubagentModels ?? [],
                subagentModelOverrides: t.runOptions?.subagentModelOverrides ?? []
            }, C = Mt(t.runOptions), k = t.requestContextDecoration, x = t.runOptions?.headers?.[pt.WI], T = qt(t.runOptions);
            const n = t.runOptions?.generationUUID ?? t.turnId, o = t.runOptions?.parentRequestId ?? Y.lastTurnModel?.parentRequestId, i = t.runOptions?.rootParentRequestId ?? Y.lastTurnModel?.rootParentRequestId, a = i ?? o ?? n;
            R = {
                requestId: n,
                rootParentRequestId: a
            };
            const c = G(t.ctx, {
                requestId: n,
                parentRequestId: o,
                rootParentRequestId: a
            });
            B = t.runOptions?.toolRestriction;
            try {
                ts(Y, s.noteActiveTurnMaxMode, Pt({
                    requestedModel: t.runOptions?.requestedModel,
                    modelDetails: t.modelDetails
                }));
                const n = t.runOptions?.generationUUID ?? t.turnId, a = s.requestContextOverlayMailbox, l = !0 === s.ownRequestContext && void 0 === e.parent && void 0 !== a;
                if (l && void 0 !== a) {
                    const e = (0, Gr.DC)(t.action);
                    void 0 !== e && (a.expect(n), a.offer(n, (0, Qr.He)(e)), (0, Gr.tY)(t.action));
                } else {
                    (0, Gr.ko)(t.action, t.requestContextDecoration);
                    const e = (0, Gr.DC)(t.action);
                    void 0 !== e && q(e);
                }
                const d = (e)=>{
                    q(l ? (0, Gr.yj)(e) : e);
                }, p = l ? (0, jr.G)(W) : void 0, m = void 0 === a || void 0 === p || a.isExpected(n) ? void 0 : ()=>p({
                        ctx: c,
                        args: new Mr._K
                    }), g = l && void 0 !== a ? {
                    mailbox: a,
                    requestId: n,
                    composerId: r.sessionId,
                    pullOverlay: m,
                    prefetchFileAccess: s.prefetchFileAccess,
                    onTiming: (e)=>{
                        s.metrics?.distribution({
                            stat: "agent_host.own_request_context.base_ms",
                            value: e.baseMs
                        }), s.metrics?.distribution({
                            stat: "agent_host.own_request_context.overlay_wait_after_base_ms",
                            value: e.overlayWaitMs,
                            tags: {
                                used_overlay: e.usedOverlay ? "true" : "false",
                                overlay_source: e.overlaySource,
                                timed_out: e.timedOut ? "true" : "false",
                                used_last_overlay: e.usedLastOverlay ? "true" : "false",
                                first_turn_waited: e.firstTurnWaited ? "true" : "false"
                            }
                        }), s.metrics?.distribution({
                            stat: "agent_host.own_request_context.prefetch_ms",
                            value: e.prefetchMs,
                            tags: {
                                file_count: String(e.prefetchFileCount)
                            }
                        }), s.metrics?.distribution({
                            stat: "agent_host.own_request_context.prefetch_file_count",
                            value: e.prefetchFileCount
                        }), s.metrics?.distribution({
                            stat: "agent_host.own_request_context.prefetch_total_bytes",
                            value: e.prefetchTotalBytes
                        });
                    }
                } : void 0;
                await async function(e) {
                    const [t] = e.ctx.withCancel();
                    let r = e.initialState ?? new le.Y9z;
                    const n = {
                        async handleCheckpoint (t, n) {
                            r = n, await e.onCheckpoint?.(n);
                        },
                        getLatestCheckpoint: ()=>r
                    }, s = e.modelDetails ?? (void 0 === e.runOptions?.requestedModel ? et() : void 0), o = {
                        conversationId: e.conversationId,
                        ...e.runOptions,
                        subagentModelOverrides: e.runOptions?.subagentModelOverrides ?? []
                    };
                    return await Wr({
                        ctx: t,
                        adapter: e.adapter,
                        conversationState: r,
                        action: e.initialAction,
                        modelDetails: s,
                        interactionListener: e.interactionListener,
                        resources: e.resources,
                        blobStore: e.blobStore,
                        checkpointHandler: n,
                        mcpTools: e.mcpTools,
                        runOptions: o,
                        conversationActionManager: e.conversationActionManager
                    }), {
                        finalState: r
                    };
                }({
                    ctx: c,
                    adapter: s.adapter,
                    conversationId: r.sessionId,
                    initialAction: t.action,
                    initialState: u.getConversationState(),
                    modelDetails: t.modelDetails,
                    interactionListener: y,
                    resources: (0, Gr.DS)((0, Hr.QF)($r(W, void 0 === e.parent ? void 0 : P ?? Y.lastTurnModel?.requestContext), g), t.requestContextDecoration, d),
                    blobStore: u.getBlobStore(),
                    mcpTools: s.mcpTools,
                    conversationActionManager: t.conversationActionManager,
                    onCheckpoint: (e)=>Y.applyCheckpoint(c, e),
                    runOptions: {
                        ...t.runOptions,
                        conversationId: r.sessionId,
                        generationUUID: t.runOptions?.generationUUID ?? t.turnId,
                        ...void 0 === o ? {} : {
                            parentRequestId: o
                        },
                        ...void 0 === i ? {} : {
                            rootParentRequestId: i
                        },
                        onNetworkPhaseStart: ()=>{
                            f.emit(new Ot.JW({
                                turnId: t.turnId,
                                event: {
                                    case: "networkPhaseStarted",
                                    value: new Ot.mX
                                }
                            }));
                        },
                        onTurnRuntimeSelected: (e)=>{
                            f.emit(new Ot.JW({
                                turnId: t.turnId,
                                event: {
                                    case: "turnRuntimeSelected",
                                    value: new Ot.bt({
                                        runtime: e.runtime,
                                        reason: e.reason
                                    })
                                }
                            }));
                        },
                        onHeader: (e)=>{
                            const r = e.get("x-cursor-server-region") ?? void 0, n = e.get(es) ?? void 0;
                            void 0 === r && void 0 === n || f.emit(new Ot.JW({
                                turnId: t.turnId,
                                event: {
                                    case: "responseMetadata",
                                    value: new Ot.gW({
                                        serverRegion: r,
                                        transportMode: n
                                    })
                                }
                            }));
                        },
                        onConnectionStateChange: (e)=>{
                            const r = "connected" === e.state ? new Ot.P4({
                                state: {
                                    case: "connected",
                                    value: new Ot.PY
                                }
                            }) : new Ot.P4({
                                state: {
                                    case: "reconnecting",
                                    value: new Ot.tP({
                                        attempt: e.attempt,
                                        trigger: void 0 === e.trigger ? void 0 : new Ot.Lk(e.trigger)
                                    })
                                }
                            });
                            f.emit(new Ot.JW({
                                turnId: t.turnId,
                                event: {
                                    case: "connectionStateChanged",
                                    value: r
                                }
                            }));
                        },
                        onFirstMessage: (e)=>{
                            f.emit(new Ot.JW({
                                turnId: t.turnId,
                                event: {
                                    case: "firstMessage",
                                    value: new Ot.F0({
                                        elapsedMs: e
                                    })
                                }
                            }));
                        },
                        onFirstMessageNetwork: (e)=>{
                            f.emit(new Ot.JW({
                                turnId: t.turnId,
                                event: {
                                    case: "firstMessageNetwork",
                                    value: new Ot.Zg({
                                        elapsedMs: e
                                    })
                                }
                            }));
                        },
                        onFirstNonHeartbeatResponse: (e, r)=>{
                            f.emit(new Ot.JW({
                                turnId: t.turnId,
                                event: {
                                    case: "firstNonHeartbeatResponse",
                                    value: new Ot.uQ({
                                        handshakeMs: e,
                                        attempt: r
                                    })
                                }
                            }));
                        },
                        onTtftBreakdown: (e, r)=>{
                            f.emit(new Ot.JW({
                                turnId: t.turnId,
                                event: {
                                    case: "ttftBreakdown",
                                    value: new Ot.PF({
                                        serverFirstTokenMs: e.serverFirstTokenMs,
                                        preStreamSetupMs: e.preStreamSetupMs,
                                        waitForFirstEventMs: e.waitForFirstEventMs,
                                        providerTtftMs: e.providerTtftMs,
                                        slowPoolWaitMs: e.slowPoolWaitMs,
                                        clientPrepMs: e.clientPrepMs,
                                        clientClock: "client" === e.clock,
                                        attempt: r
                                    })
                                }
                            }));
                        },
                        onRetryStarting: async (e, r)=>{
                            await t.runOptions?.onRetryStarting?.(e, r), h.appendTurnInteractionsSuperseded(t.turnId, r.isResume ? {
                                case: "resumeFromCheckpoint",
                                value: r.conversationState
                            } : {
                                case: "replayActionFromState",
                                value: r.conversationState
                            });
                        }
                    }
                });
            } finally{
                rs(Y, s.noteActiveTurnMaxMode), y.setActiveTurnId(void 0);
            }
        },
        turnChain: Promise.resolve(),
        hostedTaskTurnCompleters: new Map,
        hostedTaskTurnAborts: new Map,
        pendingTurns: 0,
        activeTurnMaxModeHolds: 0,
        awaitingInputCount: 0,
        ...void 0 === V ? {} : {
            parent: V
        },
        ...void 0 === v ? {} : {
            interactionPolicy: v
        },
        deleted: !1,
        turns: new Map,
        queuedRunOrder: []
    };
    return h.appendConversationState(u.getConversationState()), {
        session: Y,
        events: h
    };
}
function os(e) {
    return {
        ...e,
        ...void 0 === e.workspacePaths ? {} : {
            workspacePaths: [
                ...e.workspacePaths
            ]
        },
        ...void 0 === e.owningProject ? {} : {
            owningProject: {
                ...e.owningProject
            }
        },
        ...void 0 === e.localSubagentLimits ? {} : {
            localSubagentLimits: {
                ...e.localSubagentLimits
            }
        }
    };
}
function is(e) {
    if (void 0 === e) throw new Error("Force-background subagent executor was requested before initialization");
    return e;
}
function as(e) {
    if (void 0 === e) throw new Error("Subagent await executor was requested before initialization");
    return e;
}
const cs = (0, s.h)("agent-host:private-inference-usage"), ls = (0, s.h)("@anysphere/agent-host:turn-routing");
async function us(e, t) {
    return ds(e, void 0, t);
}
async function ds(e, t, s, i) {
    if (void 0 !== e.cloudSubagentRunner && void 0 !== e.nativeCloudSubagents) throw new Error("Configure either cloudSubagentRunner or nativeCloudSubagents, not both.");
    if (void 0 !== e.nativeCloudSubagents && "builtin" !== e.network.kind) throw new Error("Native cloud subagent support requires builtin networking.");
    if (void 0 !== e.storage && (void 0 === e.storageDir || e.storage.storageDir !== e.storageDir)) throw new Error("A prebuilt AgentHostStorage requires its matching CreateAgentHostOptions.storageDir.");
    const a = new Jr.Pz({
        ...void 0 === e.hostContext ? {} : {
            ctx: e.hostContext
        },
        ...void 0 === e.metrics ? {} : {
            metrics: e.metrics
        },
        ...void 0 === e.onStorageFault ? {} : {
            onStorageFault: e.onStorageFault
        }
    }), c = e.storage ?? ps({
        ...e,
        storageObserver: a.storageObserver
    }), l = void 0 === c ? void 0 : new Pr(()=>c.openGlobalStore());
    let u;
    try {
        u = await async function(e, t, n, s, i) {
            const a = await _(e.network, n), c = new X(a.agentClient, {
                llmGatewayCredential: "from-local-env"
            }), l = void 0 !== i.globalStore && void 0 !== a.privateInferenceBackend ? new D({
                store: i.globalStore,
                backend: a.privateInferenceBackend,
                metrics: e.metrics,
                onError: (t)=>{
                    const r = t instanceof Error ? t.name : typeof t;
                    try {
                        cs.warn(e.hostContext?.() ?? (0, o.q6)(), "Private inference usage reporting failed", {
                            errorName: r
                        });
                    } catch  {
                        console.warn("Private inference usage reporting failed", r);
                    }
                }
            }) : void 0, u = e.piOptions?.routing ?? ("private-inference" === s?.kind ? s.privateInference : void 0), d = {
                ...i,
                ...void 0 === l ? {} : {
                    privateInferenceUsage: l
                }
            }, p = void 0 !== t, m = void 0 === u ? new E : void 0, h = (t, r, n)=>{
                const s = void 0 === r ? void 0 : (0, k.kI)(new X(r), e.metrics, n);
                p && void 0 === s && ls.warn(e.hostContext?.() ?? (0, o.q6)(), "Local loop requested but no managed client could be built; turns will run on the backend loop", {
                    networkKind: e.network.kind
                });
                const i = (0, C.QZ)({
                    managedLocalAvailable: void 0 !== s,
                    localLoopRequested: p,
                    ...void 0 === a.runtimeCapabilities ? {} : {
                        runtimeCapabilities: a.runtimeCapabilities
                    },
                    ...void 0 === u ? {} : {
                        privateInference: u
                    },
                    ...void 0 === e.readPrivateInferenceEnrollment ? {} : {
                        readEnrollmentAfterActivation: e.readPrivateInferenceEnrollment
                    },
                    ...void 0 === m ? {} : {
                        enrollmentLatch: m
                    }
                });
                return new ae(t, i, s, e.metrics, m);
            }, f = "local-loop" === s?.kind ? s.agentHarness?.log : void 0, g = new ut(f ?? ((t)=>ls.warn(e.hostContext?.() ?? (0, o.q6)(), t)));
            let y;
            try {
                const o = function(e, t, r) {
                    if ("local-loop" !== t?.kind || void 0 === t.agentHarness) return;
                    const { agentHarness: n } = t;
                    if (void 0 !== e.piOptions) return void n.log("private inference configured; managed-local turns stay on the statically linked client");
                    if (void 0 === r.inferenceTransport) return void n.log("no backend transport to lend a generation; managed-local turns stay on the statically linked client");
                    return {
                        agentHarness: n,
                        inferenceTransport: r.inferenceTransport
                    };
                }(e, s, a);
                if (void 0 !== o) y = function(e, t, r, n, s, o, i) {
                    const a = e.loader(), c = i.follow(a), l = {
                        run: (e)=>r.run(e),
                        dispose: ()=>{}
                    }, u = new at.Wn({
                        loader: a,
                        compose: (r, i, a)=>{
                            const c = new Map;
                            let u;
                            try {
                                u = r.harness.createTransport((0, it.k)(r, {
                                    backendTransport: (0, ot.bL)(t, c),
                                    getPrivacyModeEnum: s,
                                    log: e.log,
                                    metrics: o,
                                    loopLogContext: e.loopLogContext
                                }));
                            } catch (e) {
                                throw new ot.R2(r.info, {
                                    reason: e instanceof Error ? e.message : String(e),
                                    errorClass: "compose",
                                    early: !0,
                                    cause: e
                                });
                            }
                            const d = (0, at.y)(r.info, r.channel, r.sequence);
                            let p;
                            try {
                                p = n(l, (0, ot.hj)(u, r.info, i, c, d, {
                                    onQuietStop: a
                                }), d);
                            } catch (t) {
                                try {
                                    u.dispose();
                                } catch (t) {
                                    e.log(`transport dispose failed after composition failed: ${t instanceof Error ? t.message : String(t)}`);
                                }
                                throw t;
                            }
                            return {
                                run: (e)=>p.run(e),
                                dispose: ()=>{
                                    try {
                                        p.dispose();
                                    } finally{
                                        u.dispose();
                                    }
                                }
                            };
                        },
                        log: e.log,
                        ...void 0 === o ? {} : {
                            metrics: o
                        },
                        logContext: e.loopLogContext,
                        ...void 0 === e.onModuleReverted ? {} : {
                            onRevert: e.onModuleReverted
                        },
                        disposeShared: ()=>{
                            c();
                            try {
                                r.dispose();
                            } finally{
                                a.retire("this host is going away");
                            }
                        }
                    });
                    return a.announce(), u;
                }(o.agentHarness, o.inferenceTransport, c, h, ()=>a.runtimeCapabilities?.getPrivacyModeEnum?.(), e.metrics, g);
                else if (void 0 !== e.piOptions) {
                    const t = n?.createPrivateInferenceLoopClient ?? (await require.e(695).then(require.bind(require, 93695))).createPrivateInferenceLoopClient;
                    y = h(c, await t({
                        piOptions: e.piOptions,
                        backendClients: a,
                        host: d,
                        attachAttemptContext: e.attachLocalLoopAttemptContext
                    }), {});
                } else {
                    const e = "local-loop" === s?.kind, r = e ? at.yi : {}, n = t?.(a, d, r);
                    e && void 0 !== n && g.serve(lt, void 0, "no_harness"), y = h(c, n, r);
                }
            } catch (e) {
                throw l?.dispose(), a.dispose(), e;
            }
            return {
                adapter: y,
                backendClients: a,
                privateInferenceUsage: l,
                servingModule: g
            };
        }(e, t, s, i, {
            globalStore: l
        });
    } catch (e) {
        throw l?.close(), e;
    }
    const d = u.adapter, p = new Map, m = new Map, h = new tt, f = new Map, g = (0, nt.cK)({
        gitExecutor: e.gitExecutor
    });
    let y = e.cloudSubagentRunner;
    try {
        if (void 0 !== e.nativeCloudSubagents) {
            const t = u.backendClients.backgroundComposerClientProvider;
            if (void 0 === t) throw new Error("Native cloud subagent support requires builtin networking.");
            y = Ee({
                nativeCloudSubagents: e.nativeCloudSubagents,
                gitExecutor: g,
                backend: {
                    backgroundComposerClientProvider: t,
                    getTeamId: ()=>u.backendClients.runtimeCapabilities?.getTeamId?.(),
                    getParentEffectiveMaxMode: (e)=>p.get(e),
                    resolveSavedModelParameters: e.resolveSavedModelParameters
                },
                resolveSessionOptions: (e)=>m.get(e)
            });
        }
    } catch (e) {
        throw d.dispose(), u.privateInferenceUsage?.dispose(), u.backendClients.dispose(), l?.close(), e;
    }
    const w = (0, st._)({
        mcpProvider: e.mcpProvider
    }), v = void 0 === e.mcpProvider, A = new Set, S = function(e) {
        return new Rr(e);
    }({
        servingModule: u.servingModule,
        subagentsAsSessions: e.subagentsAsSessions,
        ...!0 === e.surfaceOwnsBackgroundWakeups ? {
            surfaceOwnsBackgroundWakeups: !0
        } : {},
        getSendNowBehavior: e.getSendNowBehavior,
        onSessionDeleted: (e)=>{
            m.delete(e), p.delete(e), f.delete(e);
        },
        ...void 0 === e.sessionCatalog ? {} : {
            sessionCatalog: e.sessionCatalog
        },
        ...void 0 === e.workspaceCatalog ? {} : {
            workspaceCatalog: e.workspaceCatalog
        },
        ...void 0 === e.userHomeDirectory ? {} : {
            userHomeDirectory: e.userHomeDirectory
        },
        createModelDetails: (t)=>e.modelDetails ?? et(t ?? e.modelId),
        createHostedSession: async (t, r, s, o, i)=>{
            const c = await ss({
                ctx: t,
                request: r,
                sessionStore: s,
                sharedBlobStore: i,
                parent: o?.parent,
                forkedFromSessionId: o?.forkedFromSessionId,
                initialHistoryMode: o?.initialHistoryMode,
                hostHooks: o?.hostHooks,
                options: {
                    adapter: d,
                    cloudSubagentRunner: y,
                    cloudSubagentsUnavailableReason: e.cloudSubagentsUnavailableReason,
                    getParentEffectiveMaxMode: (e)=>p.get(e),
                    onMcpAuthApproved: (e)=>w.noteGrantChanged?.(t, e),
                    resolveSavedModelParameters: e.resolveSavedModelParameters,
                    resolveRequiredGlobalCommands: e.resolveRequiredGlobalCommands,
                    findExistingSubagentSessionId: e.findExistingSubagentSessionId,
                    durableSubagentInvocations: e.durableSubagentInvocations,
                    ...void 0 === e.metrics ? {} : {
                        metrics: e.metrics
                    },
                    storageInstruments: a,
                    getLocalSubagentSpawnSurfaceKind: (e)=>void 0 === m.get(e)?.owningProject ? "agent" : "project",
                    localSubagentLimits: e.localSubagentLimits,
                    getLocalSubagentRunSlots: (e)=>{
                        let t = f.get(e);
                        return void 0 === t && (t = new rt, f.set(e, t)), t;
                    },
                    ...void 0 === e.nativeCloudSubagents && void 0 === e.resolveSavedModelParameters ? {} : {
                        noteActiveTurnMaxMode: (e, t)=>{
                            void 0 === t ? p.delete(e) : p.set(e, t);
                        }
                    },
                    createBlobStore: e.createBlobStore,
                    createSessionStore: e.createSessionStore,
                    subagentsAsSessions: e.subagentsAsSessions,
                    subagentInteractionPolicy: e.subagentInteractionPolicy,
                    ...void 0 === e.sessionEventLogMaxInMemoryEvents ? {} : {
                        sessionEventLogMaxInMemoryEvents: e.sessionEventLogMaxInMemoryEvents
                    },
                    ...void 0 === e.sessionEventLogOverflowSink ? {} : {
                        sessionEventLogOverflowSink: e.sessionEventLogOverflowSink
                    },
                    ...void 0 === e.subagentTranscripts ? {} : {
                        subagentTranscripts: e.subagentTranscripts
                    },
                    ...!0 === e.ownRequestContext ? (l = h, u = e.prefetchFileAccess, void 0 === u ? {
                        ownRequestContext: !0,
                        requestContextOverlayMailbox: l
                    } : {
                        ownRequestContext: !0,
                        requestContextOverlayMailbox: l,
                        prefetchFileAccess: u
                    }) : {},
                    createResources: (t)=>{
                        const r = function(e, t, r, s) {
                            const o = e.createResources({
                                sessionId: t.sessionId,
                                rootSessionId: t.rootSessionId,
                                parentSessionId: t.parentSessionId,
                                ...void 0 === t.parent ? {} : {
                                    parent: t.parent
                                },
                                backgroundWorkRegistry: t.backgroundWorkRegistry,
                                gitExecutor: r,
                                mcpLease: s,
                                askHostQuestion: t.askHostQuestion
                            }), i = new ms(o);
                            return i.register(n.ZnQ, t.subagentExecutor), i.register(n.rz0, t.subagentAwaitExecutor), i.register(n.I2x, t.forceBackgroundSubagentExecutor), i;
                        }(e, t, g, w);
                        return A.add(r), r;
                    },
                    disposeResources: async (e)=>{
                        e instanceof ms && (A.delete(e), await e.dispose());
                    }
                }
            });
            var l, u;
            return void 0 === c.session.sessionOptions ? m.delete(r.sessionId) : m.set(r.sessionId, c.session.sessionOptions), c;
        },
        dispose: async ()=>{
            let e;
            for (const t of A)try {
                await t.dispose();
            } catch (t) {
                e ??= t;
            }
            A.clear(), m.clear(), f.clear();
            try {
                d.dispose();
            } catch (t) {
                e ??= t;
            }
            u.servingModule.clear();
            try {
                u.privateInferenceUsage?.dispose();
            } catch (t) {
                e ??= t;
            }
            try {
                l?.close();
            } catch (t) {
                e ??= t;
            }
            try {
                u.backendClients.dispose();
            } catch (t) {
                e ??= t;
            }
            if (v) try {
                w.dispose();
            } catch (t) {
                e ??= t;
            }
            if (void 0 !== e) throw e;
        }
    });
    try {
        if (u.privateInferenceUsage?.start(), !0 === e.ownRequestContext) {
            const e = h;
            return Object.assign(S, {
                expectRequestContextOverlay (t) {
                    e.expect(t);
                },
                offerRequestContextOverlay (t, r) {
                    e.offer(t, r);
                }
            });
        }
        return S;
    } catch (e) {
        try {
            await S.dispose();
        } catch (t) {
            throw new AggregateError([
                e,
                t
            ], "Agent host initialization failed");
        }
        throw e;
    }
}
function ps(e) {
    if (void 0 !== e.storageDir) return new Br.DH(e.storageDir, e.storageObserver ?? new Jr.Pz({
        ...void 0 === e.hostContext ? {} : {
            ctx: e.hostContext
        },
        ...void 0 === e.metrics ? {} : {
            metrics: e.metrics
        },
        ...void 0 === e.onStorageFault ? {} : {
            onStorageFault: e.onStorageFault
        }
    }).storageObserver);
}
class ms {
    constructor(e){
        this.provider = e;
    }
    register(e, t) {
        this.provider.register(e, t);
    }
    get(e) {
        return this.provider.get(e);
    }
    entries() {
        return this.provider.entries();
    }
    async dispose() {
        await this.provider.dispose?.();
    }
}
