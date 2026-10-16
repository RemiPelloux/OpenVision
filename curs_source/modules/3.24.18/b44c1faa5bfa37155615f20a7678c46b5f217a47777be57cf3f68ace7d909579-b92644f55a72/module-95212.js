"use strict";
require.d(exports, {
    o: ()=>G,
    C: ()=>V
});
var n = require("./module-6688.js"), s = require("./module-17392.js"), o = require("./module-14101.js"), i = require("./module-98739.js"), a = require("./module-3355.js"), c = require("./module-73877.js"), l = require("./module-27322.js"), u = require("./module-24804.js"), d = require("./module-37949.js"), p = require("./module-46144.js"), m = require("./module-69584.js"), h = require("./module-86209.js"), f = require("./module-5289.js"), g = require("./module-90991.js"), y = require("./module-28780.js"), w = require("./module-33002.js");
const v = (0, d.h)("@anysphere/agent-host:local-loop-agent-event-tracker"), _ = (0, p.Pu)("agent_host.local_loop.agent_event", {
    description: "AgentEventTracker calls made by the local loop, by what happened to them: forwarded to the backend, declined by an attempt whose sink would not take them, or dropped and why",
    labelNames: [
        "outcome",
        "method"
    ]
}), A = (0, p.Pu)("agent_host.local_loop.agent_event.field_truncated", {
    description: "Text fields on local loop tracker calls cut to the wire cap before forwarding, so the event is recorded truncated rather than dropped",
    labelNames: [
        "method",
        "field"
    ]
});
var S = require("./module-34472.js");
const b = "default";
function E(e, t, r, s) {
    const o = t.conversationId, i = t.conversationGroupId ?? o, a = function(e) {
        return "auto-smart" === e.modelId && e.parameters.some((e)=>"optimize_for" === e.id && "cost" === e.value) ? b : e.modelId;
    }(r), c = a.replaceAll(".", "-");
    return e.with(n.txo, "local_loop").with(n.kuS, s).with(n.UIk, t.parentRequestId).with(n.OR_, t.rootParentRequestId).with(n.Ah6, t.parentAgentToolCallId).with(n.A6C, o).with(n.bGt, i).with(n.dfP, r.modelId).with(n.RQ8, r.maxMode).with(n.vJE, a === b).with(n.b9P, "premium" === c).with(S.u, {
        conversationId: o,
        composerId: i,
        requestId: s,
        modelName: r.modelId,
        ...t.parentAgentToolCallId ? {
            parentToolCallId: t.parentAgentToolCallId
        } : {}
    });
}
const I = (0, d.h)("@anysphere/agent-host:local-loop-attempt-release"), C = {
    turnCompleted: !1
};
var k = require("./module-91417.js");
var x = require("./module-9639.js");
var T = require("./module-56151.js");
function R(e) {
    const t = e.isBackendRouted?.bind(e);
    return {
        execute (t, r, n) {
            if (!r.skipApproval) return e.execute(t, r, n);
            const s = r.clone();
            return s.skipApproval = !1, e.execute(t, s, n);
        },
        ...void 0 === t ? {} : {
            isBackendRouted: t
        }
    };
}
var B = require("./module-41943.js");
const P = 28e5, J = 1e6, M = {
    enableRetryUncategorizedErrors: !0,
    enableReduceInputsRetry: !0,
    useRelaxedSplitIndexGuard: !1,
    preserveLastUserMessage: !0,
    maxOutputTokens: 32e3,
    throwOnRetryExhaustion: !1,
    alwaysRetryOutputTokenLimit: !0,
    enableDeterministicFallback: !0,
    deterministicFallbackWindowRatio: .02
}, q = {
    enableReduceInputsRetry: !1,
    enableRetryUncategorizedErrors: !0,
    enableRetryNoSummaryResponse: !0,
    openAiCompactionEnableRetryNoSummaryResponse: !1,
    anthropicCompactionEnableRetryNoSummaryResponse: !1
};
function D(e) {
    return void 0 === e || !Number.isFinite(e) || e <= 0 || e >= J ? P : Math.floor(P * (e / J));
}
const O = (0, d.h)("@anysphere/agent-host:local-loop-telemetry-blob-store"), N = (0, p.v5)("agent_client.local_loop.kvblob_telemetry.flush.blob_count", {
    description: "Blobs per conversation-blob telemetry upload from the local loop",
    labelNames: [
        "outcome"
    ]
}), F = (0, p.Pu)("agent_client.local_loop.kvblob_telemetry.deduped_blob_count", {
    description: "Blob writes the local loop's telemetry mirror skipped as already published this turn"
}), U = (0, p.Pu)("agent_client.local_loop.kvblob_telemetry.dropped_blob_count", {
    description: "Buffered blobs the local loop dropped because the server declined the telemetry"
});
class L {
    constructor(e){
        this.options = e, this.pending = new Map, this.published = new Set, this.sequenceNumber = 0, this.inflight = new Set;
    }
    decide(e, t) {
        void 0 === this.decision && (this.decision = t, !t && this.pending.size > 0 && (U.increment(e, this.pending.size), this.pending.clear()));
    }
    setAttemptRequestId(e) {
        this.attemptRequestId = e;
    }
    async getBlob(e, t) {}
    async setBlob(e, t, r) {
        if (!1 === this.decision) return;
        const n = (0, l.nk)(t);
        this.published.has(n) ? F.increment(e, 1) : this.pending.set(n, {
            id: t,
            value: r
        });
    }
    async setBlobLocallyOnly(e, t, r) {
        return this.setBlob(e, t, r);
    }
    async flush(e) {
        this.pending.size <= 100 || this.flushAllPending(e);
    }
    flushAllPending(e) {
        if (!0 !== this.decision || 0 === this.pending.size) return;
        const t = this.attemptRequestId;
        if (void 0 === t) return;
        const r = Array.from(this.pending.values()), n = Array.from(this.pending.keys());
        this.pending = new Map;
        for (const e of n)this.published.add(e);
        const s = this.sequenceNumber;
        this.sequenceNumber += 1;
        const o = this.options.uploader.upload(e, {
            conversationId: this.options.conversationId,
            attemptRequestId: t,
            sequenceNumber: s,
            blobs: r
        }).then(()=>{
            N.histogram(e, r.length, {
                outcome: "uploaded"
            });
        }, (n)=>{
            N.histogram(e, r.length, {
                outcome: "failed"
            }), O.warn(e, "Conversation blob telemetry upload failed; dropped", {
                conversationId: this.options.conversationId,
                attemptRequestId: t,
                sequenceNumber: s,
                blobCount: r.length,
                error: n instanceof Error ? n.message : String(n)
            });
        });
        this.inflight.add(o), o.finally(()=>{
            this.inflight.delete(o);
        });
    }
    async settled() {
        for(; this.inflight.size > 0;)await Promise.all(Array.from(this.inflight));
    }
}
var $ = require("./module-87159.js");
const Q = (0, d.h)("@anysphere/agent-host:local-loop-agent-client"), j = (0, p.Pu)("agent_host.local_loop.agent_event_tracker_unbound", {
    description: "Local loop attempts whose AgentEventTracker had no destination and were not allowlisted; every product event of the attempt was dropped",
    labelNames: [
        "reason"
    ]
});
class G {
    constructor(e){
        this.options = e, this.pendingGenerationOwners = new WeakMap, this.orphanedSummaryHoldTimeoutMs = e.orphanedSummaryHoldTimeoutMs ?? 3e5, this.pendingSummaries = (0, n.j3k)({
            detachedGenerationTimeoutMs: this.orphanedSummaryHoldTimeoutMs
        });
    }
    pendingSummaryStoreFor(e) {
        const t = this.pendingSummaries;
        return {
            ...t,
            trackPendingGeneration: (r)=>{
                this.pendingGenerationOwners.set(r.promiseInfo, e), t.trackPendingGeneration?.(r);
            }
        };
    }
    orphanedGenerationOf(e, t) {
        const r = this.pendingSummaries.peekPendingGeneration(e);
        if (void 0 !== r && this.pendingGenerationOwners.get(r.promiseInfo) === t) return r;
    }
    bindAgentEvents(e, t, r, s) {
        const o = this.options.agentEvents, i = t.attempt?.agentEvents;
        let a;
        if (e.get(n.ZaD) === (0, w.q6)().get(n.ZaD) ? a = "tracker_replaced" : "source" in o && void 0 === i && (a = "sink_missing"), r(i), "unbound" in o && Q.debug(e, "Local loop agent events unbound by policy", {
            requestId: s.requestId,
            attemptRequestId: s.attemptRequestId,
            reason: o.unbound.reason
        }), void 0 === a) return;
        const c = "tracker_replaced" === a ? "Local loop attempt context lost its AgentEventTracker binding; product analytics for this attempt are dropped" : "Local loop attempt handle carries no agent event sink and the client is not allowlisted; product analytics for this attempt are dropped";
        if (s.isRunningInTest) throw new Error(`${c} (${a})`);
        j.increment(e, 1, {
            reason: a
        }), Q.error(e, c, {
            requestId: s.requestId,
            attemptRequestId: s.attemptRequestId,
            violation: a
        });
    }
    async run(e, t, r, d, p, S, b, P, J, O, N) {
        const F = N.generationUUID ?? crypto.randomUUID(), U = function(e, t) {
            if (t.requestedModel?.modelId) return t.requestedModel.clone();
            if (e?.modelId) return new h.G4({
                modelId: e.modelId,
                maxMode: e.maxMode ?? !1
            });
            throw new s.SK("Local agent requires a model");
        }(d, N), j = U.modelId, G = this.resolvePrivacyMode(e, F), V = this.createTurnLabeling({
            ctx: e,
            requestId: F,
            conversationId: N.conversationId,
            conversationState: t,
            blobStore: b
        }), Y = (0, u.nb)(e, b, t.turns), Z = (0, T.lJ)({
            ctx: e,
            requestId: F,
            onTtftBreakdown: N.onTtftBreakdown
        }), X = (0, a.u)((0, o.wH)(Z.wrapListener(p), new o.xc(N.nextInteractionQueryId)), G), [ee, te] = e.withCancel(), re = function(e) {
            let t;
            const r = [], n = (e)=>{
                void 0 !== t && "declined" !== t.forwardOrDecline("trackContextInjectionLifecycle", e) || r.length < 64 && r.push(e);
            };
            return {
                record: (t, r)=>{
                    n(function(e) {
                        const { injectionId: t, state: r, runId: n } = e;
                        return {
                            injectionId: t,
                            outcome: r.kind,
                            ..."rejected" === r.kind ? {
                                reason: r.reason
                            } : {},
                            runId: n
                        };
                    }({
                        injectionId: t,
                        state: r,
                        runId: e
                    }));
                },
                attach: (e)=>{
                    t = e;
                    for (const e of r.splice(0))n(e);
                }
            };
        }(F), ne = new i.D$(ee, new i.FC(32), ()=>te("cancel_action"), {
            contextInjection: {
                activeRunId: F,
                onInjectionStateChange: (t, r)=>{
                    re.record(t, r), X.sendUpdate(e, c.P.contextInjectionState(G, t, r)).catch((r)=>{
                        Q.warn(e, "Failed to send context injection state update", {
                            requestId: F,
                            injectionId: t,
                            error: r
                        });
                    });
                }
            }
        });
        P.run(ee, {
            write: async (e)=>{
                ne.push((0, g.p46)(e, G));
            }
        }).catch((t)=>{
            Q.warn(e, "Conversation action pump ended with an error", {
                requestId: F,
                error: t
            });
        });
        const se = ()=>{
            ne.endRun(), te(P.signal.reason);
        };
        P.signal.aborted ? se() : P.signal.addEventListener("abort", se, {
            once: !0
        });
        let oe, ie = "success";
        const ae = void 0 !== this.options.conversationBlobUploader && G === f.PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED && "" !== N.conversationId ? new L({
            conversationId: N.conversationId,
            uploader: this.options.conversationBlobUploader
        }) : void 0, ce = void 0 === ae ? b : new l.l9(b, ae);
        let le = {};
        const ue = (0, T.Oc)(), de = function(e) {
            let t, r = Promise.resolve();
            const n = async (t, r)=>{
                try {
                    await t.finish(r);
                } catch (t) {
                    I.warn(e, "Local loop attempt finish failed", {
                        error: t instanceof Error ? t.stack ?? t.message : String(t)
                    });
                }
            }, s = (e)=>{
                const s = t;
                return t = void 0, void 0 !== s && (r = r.then(()=>n(s, e))), r;
            };
            return {
                hold: (e)=>{
                    void 0 !== t && s(C), t = e;
                },
                release: s,
                park: async (r, s, o)=>{
                    const i = t;
                    if (t = void 0, void 0 === i) return;
                    const [a, c] = e.withDetached().withTimeoutAndCancel(s), l = new Promise((e)=>{
                        a.signal.addEventListener("abort", ()=>e("timeout"), {
                            once: !0
                        });
                    });
                    try {
                        const t = await Promise.race([
                            r.then(()=>"settled", ()=>"settled"),
                            l
                        ]);
                        I.info(e, "[summarization-hold] Releasing the held attempt", {
                            outcome: t
                        });
                    } finally{
                        c(), await n(i, o);
                    }
                }
            };
        }(ee);
        try {
            await (0, s.fZ)({
                ctx: ee,
                state: t,
                action: r,
                checkpointHandler: J,
                runOptions: N,
                requestId: N.firstAttemptRequestId ?? F,
                originalRequestId: F,
                loop: "local_loop",
                ..."delegated" === this.options.retryLogging ? {} : {
                    logging: {
                        tag: this.options.retryLogging?.tag ?? "local_loop_agent_retries",
                        diagnostics: (e)=>({
                                ...K(e),
                                ...le
                            })
                    }
                },
                cancellation: {
                    shortCircuit: ()=>ee.canceled,
                    toCancelledError: (e, t)=>(function(e, t) {
                            return e instanceof s.cc ? e : new s.cc("Local agent request cancelled", {
                                cause: e instanceof Error ? e : void 0,
                                requestId: t
                            });
                        })(e, t)
                },
                hooks: {
                    beginAttempt: ()=>{
                        le = {};
                    },
                    runAttempt: async (e)=>{
                        ue.dropHeld(), await de.release(C), Z.beginAttempt(e.attempt);
                        try {
                            N.onNetworkPhaseStart?.();
                        } catch (e) {
                            Q.warn(ee, "onNetworkPhaseStart callback failed", {
                                requestId: F,
                                error: e instanceof Error ? e.stack ?? e.message : String(e)
                            });
                        }
                        const t = function() {
                            let e, t = !1, r = [];
                            const s = (0, w.q6)(), o = (t, r, n)=>{
                                if (void 0 === e) return _.increment(s, 1, {
                                    outcome: "no_sink",
                                    method: t
                                }), "declined";
                                try {
                                    const o = e.emit(t, r, n);
                                    return _.increment(s, 1, {
                                        outcome: o ? "forwarded" : "sink_declined",
                                        method: t
                                    }), o ? "forwarded" : "declined";
                                } catch (e) {
                                    return _.increment(s, 1, {
                                        outcome: "sink_threw",
                                        method: t
                                    }), v.debug(s, "Local loop agent event sink threw; event dropped", {
                                        methodName: t,
                                        error: e instanceof Error ? e.message : String(e)
                                    }), "dropped";
                                }
                            }, i = (e, t)=>{
                                const r = (0, n.gB_)(e, t, (t)=>A.increment(s, 1, {
                                        method: e,
                                        field: t
                                    }));
                                return void 0 === r && _.increment(s, 1, {
                                    outcome: "oversized",
                                    method: e
                                }), r;
                            }, a = (e, n)=>{
                                const a = Date.now(), c = i(e, n);
                                void 0 !== c && (t ? o(e, c, a) : void 0 !== r && r.length < 256 ? r.push({
                                    methodName: e,
                                    optionsJson: c,
                                    clientReportedAtMs: a
                                }) : _.increment(s, 1, {
                                    outcome: "buffer_full",
                                    method: e
                                }));
                            };
                            return {
                                tracker: {
                                    trackUnfinishedTodos: (e, t)=>a("trackUnfinishedTodos", t),
                                    trackUnfinishedTodosWhenCreatedTodos: (e, t)=>a("trackUnfinishedTodosWhenCreatedTodos", t),
                                    trackUnfinishedTodosWhenHadUnfinishedTodosAtStart: (e, t)=>a("trackUnfinishedTodosWhenHadUnfinishedTodosAtStart", t),
                                    trackSummarizationTriggered: (e, t)=>a("trackSummarizationTriggered", t),
                                    trackSummaryLifecycle: ()=>{},
                                    trackPromptTokens: (e, t)=>a("trackPromptTokens", t),
                                    trackNumberOfToolCalls: (e, t)=>a("trackNumberOfToolCalls", t),
                                    trackToolCallStarted: (e, t)=>a("trackToolCallStarted", t),
                                    trackToolCallResult: (e, t)=>a("trackToolCallResult", t),
                                    trackComputerUseExecution: (e, t)=>a("trackComputerUseExecution", t),
                                    trackRecordScreenExecution: (e, t)=>a("trackRecordScreenExecution", t),
                                    trackLoopDetected: (e, t)=>a("trackLoopDetected", t),
                                    trackSubagentCreated: (e, t)=>a("trackSubagentCreated", t),
                                    trackSubagentCompleted: (e, t)=>a("trackSubagentCompleted", t),
                                    trackShellSandboxResult: (e, t)=>a("trackShellSandboxResult", t),
                                    trackSkillUsed: (e, t)=>a("trackSkillUsed", t),
                                    trackSkillApplied: (e, t)=>a("trackSkillApplied", t),
                                    trackHookExecuted: (e, t)=>a("trackHookExecuted", t),
                                    trackSmartModeClassifierCall: (e, t)=>a("trackSmartModeClassifierCall", t),
                                    trackUnauthorizedAccessJudgeVerdict: (e, t)=>a("trackUnauthorizedAccessJudgeVerdict", t),
                                    trackPlanModeModelFinished: (e, t)=>a("trackPlanModeModelFinished", t),
                                    trackMcpToolCall: (e, t)=>a("trackMcpToolCall", t),
                                    trackMcpToolCallResult: (e, t)=>a("trackMcpToolCallResult", t),
                                    trackContextInjectionLifecycle: (e, t)=>a("trackContextInjectionLifecycle", t)
                                },
                                bind: (n)=>{
                                    e = n, t = !0;
                                    const s = r;
                                    r = void 0;
                                    for (const e of s ?? [])o(e.methodName, e.optionsJson, e.clientReportedAtMs);
                                },
                                forwardOrDecline: (e, r)=>{
                                    if (!t) return "declined";
                                    const n = Date.now(), s = i(e, r);
                                    return void 0 === s ? "dropped" : o(e, s, n);
                                }
                            };
                        }(), r = E(ee, N, U, e.attemptRequestId).with(n.ZaD, t.tracker).with(n.rgi, ue.sink), o = {
                            ...N,
                            onHeader: (e)=>{
                                const t = e.get($.EP);
                                null !== t && (le = {
                                    transportMode: t
                                }), N.onHeader?.(e);
                            }
                        }, i = new AbortController, a = ()=>i.abort(ee.signal.reason);
                        ee.signal.aborted ? a() : ee.signal.addEventListener("abort", a, {
                            once: !0
                        });
                        const c = {
                            requestedModel: U,
                            runOptions: o,
                            attempt: e.attempt,
                            attemptRequestId: e.attemptRequestId,
                            originalRequestId: F,
                            conversationState: e.state,
                            action: e.action,
                            previousRequestId: await Y,
                            signal: i.signal,
                            ctx: r,
                            onFirstInvocationStart: ()=>Z.markFirstInvocationStart()
                        }, l = this.options.prepareAttemptContext?.(r, c) ?? r, u = await this.options.createPromptSession({
                            ...c,
                            ctx: l
                        });
                        de.hold(u.attempt), this.bindAgentEvents(l, u, (e)=>{
                            t.bind(e), re.attach(t);
                        }, {
                            requestId: F,
                            attemptRequestId: e.attemptRequestId,
                            isRunningInTest: !0 === N.isRunningInTest
                        }), e.notifyConnected(), void 0 !== ae && (ae.setAttemptRequestId(e.attemptRequestId), ae.decide(l, !0 === u.attempt?.kvBlobTelemetryEnabled));
                        const p = {
                            ...X,
                            sendUpdate: (t, r)=>((0, s.qi)(r) && e.notifyApplicationProgress(), X.sendUpdate(t, r))
                        }, h = (0, T.ct)(l, u.attempt?.metricLabels), b = await this.options.createAgentConfig({
                            modelId: j,
                            originalRequestId: F,
                            modelDetails: d,
                            requestedModel: U,
                            resolvedModel: u.attempt?.resolvedModel,
                            resolvedModelMetadata: u.attempt?.resolvedModelMetadata,
                            nonFileRules: u.attempt?.nonFileRules,
                            conversationState: e.state,
                            action: e.action,
                            runOptions: N,
                            projectFolder: N.projectFolder,
                            resolveCustomSubagentModels: u.attempt?.resolveCustomSubagentModels,
                            agentEventsRecorded: void 0 !== u.attempt?.agentEvents && !0 === u.attempt.agentEventsAccepted,
                            ctx: h
                        }), I = b.config, k = u.attempt?.backgroundSummarizationProps, P = u.selfSummaryPromptSession, J = void 0 === P ? u.promptToolSession : {
                            getExecutor: (e)=>new n.Ycw(P.getExecutor(e))
                        }, L = {}, H = N.conversationId, z = void 0 !== H && G !== f.PrivacyMode.NO_STORAGE ? {
                            conversationId: I.conversationId ?? H,
                            pendingSummaryStore: this.pendingSummaryStoreFor(L)
                        } : void 0, W = {
                            ...I,
                            ...!0 === u.attempt?.supportsSelfSummary ? {
                                selfSummaryConfig: {
                                    promptSession: J,
                                    canUseSelfSummary: ()=>!0,
                                    ...q
                                }
                            } : {},
                            ...void 0 === k ? {} : {
                                backgroundSummarizationProps: k
                            },
                            ...z
                        }, K = u.attempt?.routedModelDisplayName;
                        void 0 !== K && K.length > 0 && (0, n.nl9)(e.action) && await X.sendUpdate(h, (0, g.btc)(new m.Uq({
                            message: {
                                case: "routedModel",
                                value: new m.IQS({
                                    displayName: K
                                })
                            }
                        }), G));
                        const te = (0, g.p46)(e.action, G);
                        (0, n.fSq)(te, b.resolvedSubagentSystemReminder);
                        const se = (0, y.D)(e.action);
                        void 0 !== b.prepareRequestContext && void 0 !== se && await b.prepareRequestContext(h, se);
                        const ie = function(e, t, r) {
                            if (void 0 === r) return e;
                            const n = {
                                async execute (n, s, o) {
                                    const i = await e.get(x.MZM).execute(n, s, o), a = "success" === i.result.case ? i.result.value.requestContext : void 0;
                                    return void 0 !== a && await r(t, a), i;
                                }
                            };
                            return new x.dSv(e, [
                                (0, x.VNS)(x.MZM, n)
                            ]);
                        }(function(e, t) {
                            if (void 0 === t) return e;
                            const r = (0, n.PZU)((0, n.JLo)(new x.dSv(e, [
                                (0, x.VNS)(x.XPF, t.executor)
                            ]), new n.bal), new n.hoO);
                            return t.enforceReadOnlyCap ? new x.dSv(r, [
                                (0, x.VNS)(x.Yib, R(e.get(x.Yib)))
                            ]) : r;
                        }(void 0 !== b.allowedWritePrefixes && b.allowedWritePrefixes.length > 0 ? (0, n.W07)(S, b.allowedWritePrefixes) : S, b.smartModeClassifier), h, b.prepareRequestContext), pe = V?.wrapPromptToolSession(u.promptToolSession, {
                            resolvedModelId: u.attempt?.resolvedModel.modelId
                        }) ?? u.promptToolSession;
                        u.attempt?.reportAgentRunRequest?.(()=>new m.Mpn({
                                conversationState: e.state,
                                action: e.action,
                                modelDetails: d,
                                mcpTools: (0, s.W7)(O),
                                conversationId: N.conversationId
                            }));
                        const me = new n.XJX(W, pe, p, ie, ce, function(e) {
                            const { summarization: t } = e;
                            return void 0 !== t ? new B.o5(t.promptSession, t.isFallbackToMainModel, {
                                ...M,
                                maxPromptChars: t.maxPromptChars ?? D(t.isFallbackToMainModel ? e.contextWindowTokens : void 0)
                            }) : new B.o5(e.promptSession, !0, {
                                ...M,
                                maxPromptChars: D(e.contextWindowTokens)
                            });
                        }({
                            promptSession: u.summarizationPromptSession ?? u.promptSession,
                            summarization: u.attempt?.summarization,
                            contextWindowTokens: u.attempt?.resolvedModelMetadata?.agentTokenLimit
                        }), ne);
                        Z.markRunStreamStart(), oe = await me.runStream(h, (0, g.bvF)(e.state, G), te, O, (t, r)=>e.checkpointHandler.handleCheckpoint(t, r)), ne.endRun();
                        const he = void 0 === z ? void 0 : this.orphanedGenerationOf(z.conversationId, L);
                        if (void 0 === he) return await de.release({
                            turnCompleted: !0
                        }), void ee.signal.removeEventListener("abort", a);
                        ee.signal.removeEventListener("abort", a), Q.info(h, "[summarization-hold] Keeping the attempt open for the background summarization still running at turn end", {
                            requestId: F,
                            attemptRequestId: e.attemptRequestId,
                            summarizerModel: he.promiseInfo.modelId,
                            holdTimeoutMs: this.orphanedSummaryHoldTimeoutMs
                        }), de.park(he.promiseInfo.promise, this.orphanedSummaryHoldTimeoutMs, {
                            turnCompleted: !0
                        });
                    },
                    classify: (e, t)=>{
                        if (e instanceof n.i6m) {
                            const r = {
                                cause: e,
                                requestId: t.attemptRequestId
                            };
                            return {
                                action: "throw",
                                error: e.maxSteps === N.maxSteps ? new s.i6(e.maxSteps, r) : new s.SK(e.message, r)
                            };
                        }
                        const r = (0, s.gZ)(e, (0, s.uu)(N, t, this.options.retryCaps), {
                            ...t,
                            retriesEnabled: !0 === N.enableAgentRetries,
                            abortOrigin: H(e),
                            ...void 0 === le.transportMode ? {} : {
                                attemptTransportMode: le.transportMode
                            }
                        });
                        return "throw" === r.action && W.set(r.error, {
                            transport: !0 === r.countAsTransportError,
                            ...z(e),
                            ...void 0 === r.transportFailureKind ? {} : {
                                transportFailureKind: r.transportFailureKind
                            },
                            loop: "local_loop",
                            ...le
                        }), r;
                    },
                    buildNonRetriedErrorInfo: (e)=>({
                            ...e,
                            stallAborted: (0, k.h)(e.error),
                            abortSources: (0, k.h)(e.error) ? [
                                "stall_detector"
                            ] : []
                        }),
                    reconnectTrigger: (e, t, r)=>{
                        const n = z(e);
                        return {
                            errorClass: n.errorName,
                            connectCode: n.connectCode,
                            connectCodeName: n.connectCodeName,
                            countAsServerError: t.countAsServerError,
                            countAsTransportError: t.countAsTransportError,
                            stallAborted: n.stallAborted,
                            originatingRequestId: r.originalRequestId,
                            attemptRequestId: r.failedAttemptRequestId,
                            ...le,
                            ...void 0 === this.options.reconnectEndpoint ? {} : {
                                endpointUrl: this.options.reconnectEndpoint
                            }
                        };
                    }
                }
            });
        } catch (e) {
            throw ie = ee.canceled || e instanceof s.cc ? "aborted" : "errored", e;
        } finally{
            ue.flushHeld(ee), ne.endRun(), await de.release(C), P.signal.removeEventListener("abort", se), ae?.flushAllPending(e);
            try {
                V?.onRunFinished(ie, oe);
            } catch (t) {
                Q.warn(e, "Local loop turn labeling failed", {
                    requestId: F,
                    error: t
                });
            }
            try {
                await this.options.onRunFinished?.(e, {
                    requestId: F,
                    status: ie
                });
            } catch (t) {
                Q.error(e, "Local loop onRunFinished hook failed", {
                    requestId: F,
                    error: t
                });
            }
        }
    }
    createTurnLabeling(e) {
        try {
            return this.options.createTurnLabeling?.(e);
        } catch (t) {
            return void Q.warn(e.ctx, "Local loop turn labeling setup failed", {
                requestId: e.requestId,
                error: t
            });
        }
    }
    resolvePrivacyMode(e, t) {
        let r;
        try {
            r = this.options.getPrivacyMode();
        } catch  {
            r = void 0;
        }
        return void 0 === r ? (Q.warn(e, "Privacy mode unresolved; assuming NO_STORAGE", {
            requestId: t
        }), f.PrivacyMode.NO_STORAGE) : r;
    }
}
function H(e) {
    return (0, k.h)(e) ? "stall_detector" : "none";
}
function z(e) {
    const { errorName: t, underlyingConnectError: r } = (0, s.EF)(e);
    return {
        errorName: t ?? typeof e,
        stallAborted: (0, k.h)(e),
        connectCode: r?.code,
        connectCodeName: r?.codeName,
        connectCause: r?.cause
    };
}
const W = new WeakMap;
function V(e) {
    return W.get(e) ?? {
        transport: !1,
        ...z(e)
    };
}
function K(e) {
    return {
        ...(0, s.P_)(z(e)),
        abortOrigin: H(e)
    };
}
