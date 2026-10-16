"use strict";
require.d(exports, {
    EP: ()=>y,
    WZ: ()=>J
});
var n = require("./module-6688.js"), s = require("./module-17392.js"), o = require("./module-27322.js"), i = require("./module-37949.js"), a = require("./module-46144.js"), c = require("./module-86209.js"), l = require("./module-8844.js"), u = require("./module-65716.js"), d = require("./module-92801.js"), p = require("./module-84959.js"), m = require("./module-2788.js"), h = require("./module-91417.js"), f = require("./module-56151.js");
const g = (0, i.h)("@anysphere/agent-host:run-inference-session"), y = "x-cursor-agent-transport-mode", w = 5e3, v = (0, a.Pu)("agent_client.run_inference.client_heartbeat", {
    description: "Client heartbeat frames on the RunInference request stream, by outcome",
    labelNames: [
        "outcome",
        "transport_mode",
        "loop"
    ]
}), _ = (0, a.Pu)("agent_client.run_inference.agent_event", {
    description: "RunInference agent_event frames by outcome: written to the attempt stream, dropped because the server does not accept them, or dropped on a closed stream",
    labelNames: [
        "outcome",
        "transport_mode",
        "loop"
    ]
}), A = (0, a.v5)("agent_client.run_inference.client_heartbeat.gap_ms", {
    description: "Observed gap between consecutive client heartbeat sends on one attempt",
    labelNames: [
        "transport_mode",
        "loop"
    ]
}), S = "local_loop", b = 250;
function E(e) {
    if (void 0 !== e) return {
        unusedTokensThresholdToStartBackgroundSummarization: e.unusedTokensThresholdToStart,
        unusedPercentTokensThresholdToStartBackgroundSummarization: e.unusedPercentTokensThresholdToStart,
        unusedTokensThresholdToPersistBackgroundSummarization: e.unusedTokensThresholdToPersist,
        unusedPercentTokensThresholdToPersistBackgroundSummarization: e.unusedPercentTokensThresholdToPersist,
        requireTriggerThresholdForMidLoopPersist: e.requireTriggerThresholdForMidLoopPersist,
        discardOnError: e.discardOnError
    };
}
function I(e) {
    return new l.lj({
        conversationId: e.conversationId,
        conversationGroupId: e.conversationGroupId,
        requestedModel: x(e.requestedModel),
        routingConversation: Array.from(e.routingConversation),
        agentMode: e.agentMode,
        turnAgentMode: e.turnAgentMode,
        subagentTypeName: e.subagentTypeName || void 0,
        selectedSubagentModels: e.selectedSubagentModels.map(x),
        subagentModelOverrides: e.subagentModelOverrides.map(k),
        supportsLongReasoningReminder: !0,
        supportsAgentLoopError: !0,
        ...!0 === e.isSummarizeAction ? {
            isSummarizeAction: !0
        } : {},
        agentModule: e.agentModule,
        previousRequestId: e.previousRequestId,
        executePlan: C(e.executePlan)
    });
}
function C(e) {
    if (void 0 !== e && void 0 !== e.planFileContent) return new l.ni({
        planFileContent: e.planFileContent,
        planFileUri: e.planFileUri
    });
}
function k(e) {
    const t = e.selection;
    switch(t.case){
        case "model":
            return new l.FT({
                subagentType: e.subagentType,
                selection: {
                    case: "model",
                    value: x(t.value)
                }
            });
        case "inherit":
        case "disabled":
            return new l.FT({
                subagentType: e.subagentType,
                selection: {
                    case: t.case,
                    value: t.value
                }
            });
        default:
            return new l.FT({
                subagentType: e.subagentType
            });
    }
}
function x(e) {
    return new l.RK({
        modelId: e.modelId,
        maxMode: e.maxMode,
        parameters: e.parameters.map((e)=>({
                id: e.id,
                value: e.value
            })),
        builtInModel: e.builtInModel
    });
}
function T(e) {
    return new c.G4({
        modelId: e.modelId,
        maxMode: e.maxMode,
        parameters: e.parameters.map((e)=>new c.SR({
                id: e.id,
                value: e.value
            })),
        builtInModel: e.builtInModel
    });
}
function R(e) {
    const t = new d.T(e.message, e.code);
    for (const r of e.details)t.details.push({
        type: r.type,
        value: r.value
    });
    return (0, n.kwO)(t) ?? t;
}
function B(e) {
    return new l.jR({
        message: {
            case: "cancelInvocation",
            value: new l.G2({
                invocationId: e
            })
        }
    });
}
class P {
    constructor(){
        this.frames = [];
    }
    push(e) {
        void 0 === this.terminal && (this.frames.push(e), this.wake?.());
    }
    end(e) {
        void 0 === this.terminal && (this.terminal = {
            error: e
        }, this.wake?.());
    }
    async *[Symbol.asyncIterator]() {
        for(;;){
            for(; this.frames.length > 0;){
                const e = this.frames.shift();
                void 0 !== e && (yield e);
            }
            if (void 0 !== this.terminal) {
                if (void 0 !== this.terminal.error) throw this.terminal.error;
                return;
            }
            await new Promise((e)=>{
                this.wake = e;
            }), this.wake = void 0;
        }
    }
}
async function J(e, t) {
    if (t.signal.aborted) throw new d.T("Attempt already cancelled", p.C.Canceled);
    const r = new AbortController;
    let n, i = 0;
    const a = ()=>{
        i -= 1, 0 === i && n?.abort();
    }, c = new AbortController, C = (0, m.Jt)(), k = new Map, x = new Map;
    let J, M, q;
    const D = new Promise((e, t)=>{
        M = e, q = t;
    }), { failThresholdMs: O, advisoryThresholdMs: N } = (0, s.By)(t.stallDetectorConfig, {
        isRunningInTest: t.isRunningInTest
    }), F = t.ctx.with(s.rS, {
        requestId: t.attemptRequestId,
        modelDetails: void 0
    }), U = new s.r0(F, {
        thresholdMs: O,
        advisoryThresholdMs: N,
        heartbeatOnlyThresholdMs: 0,
        loop: "local_loop",
        onStall: ()=>{
            Q(new h.S(`RunInference attempt stalled: no frames for ${O}ms`, O)), r.abort();
        }
    });
    let L = !1;
    const $ = ()=>{
        L || (L = !0, U[Symbol.dispose]());
    }, Q = (e)=>{
        void 0 === J && (J = e, $(), c.abort(), q?.(e), q = void 0, M = void 0, j(e));
    }, j = (e)=>{
        for (const t of k.values())t.end(e);
        k.clear();
        for (const t of x.values())t.reject(e);
        x.clear();
    }, G = new Set, H = (e)=>{
        G.has(e) || (G.add(e), C.write(B(e)).catch(()=>{}));
    };
    let z = !1, W = !1;
    const V = ()=>{
        if (z && W) {
            for (const e of k.keys())H(e);
            j(new d.T("RunInference attempt cancelled", p.C.Canceled, void 0, void 0, t.signal.reason));
        } else ((e)=>{
            if (0 === i) return void r.abort(e);
            const t = new AbortController;
            n = t, (0, u.st)(b, t.signal).then(()=>{
                n === t && (n = void 0), r.abort(e);
            });
        })(t.signal.reason);
    };
    t.signal.addEventListener("abort", V, {
        once: !0
    });
    const K = ()=>{
        t.signal.removeEventListener("abort", V), $(), c.abort(), n?.abort(), n = void 0, r.abort();
    };
    let Y = "unknown";
    const Z = e.runInference(C, {
        signal: r.signal,
        headers: {
            ...t.requestHeaders,
            "x-request-id": t.attemptRequestId,
            "x-original-request-id": t.originalRequestId,
            ...(0, f.qk)(t.ctx)
        },
        onHeader: (e)=>{
            const r = e.get(y) ?? void 0;
            void 0 !== r && (Y = r, g.info(t.ctx, "RunInference attempt opened", {
                attemptRequestId: t.attemptRequestId,
                transportMode: Y
            }));
            try {
                t.onHeader?.(e);
            } catch (e) {
                g.warn(t.ctx, "RunInference onHeader callback threw", {
                    attemptRequestId: t.attemptRequestId,
                    error: e instanceof Error ? e.stack ?? e.message : String(e)
                });
            }
        }
    }), X = (async ()=>{
        try {
            for await (const e of Z){
                const t = "heartbeat" === e.message.case;
                switch(t && U.onServerSentHeartbeat(), U.reset("inbound_message", e.message.case ?? "unknown", !t), e.message.case){
                    case "heartbeat":
                        break;
                    case "runReady":
                        M?.(e), M = void 0, q = void 0;
                        break;
                    case "invocationResponse":
                        {
                            const t = e.message.value;
                            void 0 !== t.response && k.get(t.invocationId)?.push(t.response);
                            break;
                        }
                    case "invocationEnd":
                        {
                            const t = e.message.value, r = k.get(t.invocationId);
                            k.delete(t.invocationId), r?.end(void 0 === t.error ? void 0 : R(t.error));
                            break;
                        }
                    case "subagentModelsResolved":
                        {
                            const t = e.message.value, r = x.get(t.resolutionId);
                            x.delete(t.resolutionId), r?.resolve(t);
                            break;
                        }
                }
            }
            U.onStreamEnded(), Q(new d.T("RunInference attempt ended", p.C.Unavailable));
        } catch (e) {
            Q(t.signal.aborted ? new d.T("RunInference attempt cancelled", p.C.Canceled, void 0, void 0, e) : d.T.from(e));
        }
    })(), ee = async (e)=>{
        let t;
        U.reset("outbound_write", e.message.case ?? "unknown");
        try {
            t = await Promise.race([
                C.write(e).then(()=>!0),
                X.then(()=>!1)
            ]);
        } catch (e) {
            throw J ?? d.T.from(e);
        }
        if (!t) throw J ?? new d.T("RunInference attempt ended", p.C.Unavailable);
    };
    let te;
    U.reset("outbound_write", "runRequest"), C.write(new l.jR({
        message: {
            case: "runRequest",
            value: I(t)
        }
    })).catch((e)=>{
        Q(d.T.from(e));
    });
    try {
        te = await D;
    } catch (e) {
        throw K(), e;
    }
    const re = "runReady" === te.message.case ? te.message.value : void 0, ne = re?.resolvedModel;
    if (void 0 === re || void 0 === ne) throw K(), new d.T("RunInference attempt did not produce a resolved model", p.C.Internal);
    let se = !1;
    const oe = (e, r)=>{
        try {
            const n = {
                transport_mode: Y,
                loop: S
            };
            void 0 !== r && A.histogram(t.ctx, r, n), v.increment(t.ctx, 1, {
                outcome: e,
                ...n
            });
        } catch (e) {
            if (se) return;
            se = !0, g.debug(t.ctx, "RunInference client heartbeat metrics failed; continuing", {
                attemptRequestId: t.attemptRequestId,
                error: e instanceof Error ? e.message : String(e)
            });
        }
    };
    if (re.acceptsClientHeartbeat) {
        const e = t.clientHeartbeatIntervalMs ?? w;
        (async ()=>{
            let r = Date.now();
            for(; !c.signal.aborted;){
                if (await (0, u.st)(e, c.signal), c.signal.aborted) return;
                try {
                    await C.write(new l.jR({
                        message: {
                            case: "clientHeartbeat",
                            value: new l.IS
                        }
                    }));
                } catch (e) {
                    return oe("write_failed"), void g.debug(t.ctx, "RunInference client heartbeat write failed; stopping", {
                        attemptRequestId: t.attemptRequestId,
                        error: e instanceof Error ? e.message : String(e)
                    });
                }
                U.onClientSentHeartbeat();
                const n = Date.now();
                oe("sent", n - r), r = n;
            }
        })();
    } else oe("not_accepted"), g.warn(t.ctx, "RunInference server does not accept client heartbeats", {
        attemptRequestId: t.attemptRequestId,
        transportMode: Y
    });
    let ie = !1;
    let ae, ce = !1, le = !1;
    const ue = (e)=>{
        if (le || ie || void 0 !== J) return;
        let r;
        le = !0;
        try {
            r = new l.jR({
                message: {
                    case: "runRequestLog",
                    value: new l.Zf({
                        agentRunRequest: (0, o.Fo)(e().toBinary())
                    })
                }
            });
        } catch (e) {
            return void g.warn(t.ctx, "RunInference request log could not be built; skipping", {
                attemptRequestId: t.attemptRequestId,
                error: e instanceof Error ? e.message : String(e)
            });
        }
        U.reset("outbound_write", "runRequestLog"), C.write(r).catch((e)=>{
            g.debug(t.ctx, "RunInference request log write failed; dropped", {
                attemptRequestId: t.attemptRequestId,
                error: e instanceof Error ? e.message : String(e)
            });
        });
    }, de = (e)=>({
            stream: (t, r)=>{
                const n = t instanceof l.Zc ? t : new l.Zc(t), s = n.invocationId ?? crypto.randomUUID(), o = function(e) {
                    const t = e.clone();
                    return t.requestedModel = void 0, t.modelId = void 0, t.conversationId = void 0, t.conversationGroupId = void 0, t.invocationId = void 0, t.automationId = void 0, t.inferenceReason = void 0, t;
                }(n), i = new P, a = r?.signal;
                return async function*() {
                    if (void 0 !== J) throw J;
                    if (ie) throw new d.T("RunInference attempt already finished", p.C.FailedPrecondition);
                    if (a?.aborted) throw new d.T("Invocation cancelled", p.C.Canceled);
                    k.set(s, i);
                    const t = ()=>H(s);
                    a?.addEventListener("abort", t, {
                        once: !0
                    });
                    let r = !1;
                    try {
                        await ee(new l.jR({
                            message: {
                                case: "invokeModel",
                                value: new l.YG({
                                    invocationId: s,
                                    request: o,
                                    purpose: e
                                })
                            }
                        })), e === l.NN.UNSPECIFIED && (()=>{
                            if (ce) return;
                            ce = !0;
                            const e = ae;
                            ae = void 0, void 0 !== e && ue(e);
                        })();
                        for await (const e of i)yield e;
                        r = !0;
                    } finally{
                        a?.removeEventListener("abort", t), r || k.get(s) !== i || (k.delete(s), H(s));
                    }
                }();
            }
        }), pe = function(e) {
        const t = e?.model;
        if (void 0 !== e && void 0 !== t) return {
            model: T(t),
            isFallbackToMainModel: e.isFallbackToMainModel,
            maxPromptChars: e.maxPromptChars > 0 ? e.maxPromptChars : void 0,
            backgroundProps: E(e.background)
        };
    }(re.summarization), me = re.acceptsAgentEvents;
    let he = !1, fe = !1;
    const ge = (e)=>{
        try {
            _.increment(t.ctx, 1, {
                outcome: e,
                transport_mode: Y,
                loop: S
            });
        } catch (e) {
            if (fe) return;
            fe = !0, g.debug(t.ctx, "RunInference agent event metrics failed; continuing", {
                attemptRequestId: t.attemptRequestId,
                error: e instanceof Error ? e.message : String(e)
            });
        }
    }, ye = {
        emit: (e, r, n)=>me ? ie || void 0 !== J ? (ge("write_failed"), !1) : (i += 1, C.write(new l.jR({
                message: {
                    case: "agentEvent",
                    value: new l.SD({
                        methodName: e,
                        optionsJson: r,
                        clientReportedAtMs: BigInt(n)
                    })
                }
            })).then(()=>ge("written"), ()=>ge("write_failed")).finally(a), !0) : (ge("not_accepted"), he || (he = !0, g.warn(t.ctx, "RunInference server does not accept agent events", {
                attemptRequestId: t.attemptRequestId,
                transportMode: Y
            })), !1)
    };
    return z = !0, W = re.acceptsAbortedFinish, {
        resolvedModel: T(ne),
        supportsSelfSummary: re.supportsSelfSummary,
        routedModelDisplayName: re.routedModelDisplayName,
        promptModelMetadata: re.promptModelMetadata,
        summarization: void 0 === pe ? void 0 : {
            ...pe,
            inferenceClient: de(l.NN.CONTEXT_SUMMARIZATION)
        },
        nonFileRules: re.nonFileRules,
        metricLabels: re.metricLabels,
        inferenceClient: de(l.NN.UNSPECIFIED),
        agentRunRequestLogRequested: re.agentRunRequestLogRequested,
        kvBlobTelemetryEnabled: re.kvBlobTelemetryEnabled,
        reportAgentRunRequest: (e)=>{
            re.agentRunRequestLogRequested && !le && (ce ? ue(e) : ae = e);
        },
        agentEvents: ye,
        acceptsAgentEvents: me,
        resolveCustomSubagentModels: re.acceptsSubagentModelResolution ? async (e)=>{
            if (void 0 !== J) throw J;
            if (ie) throw new d.T("RunInference attempt already finished", p.C.FailedPrecondition);
            const t = crypto.randomUUID(), r = new Promise((e, r)=>{
                x.set(t, {
                    resolve: e,
                    reject: r
                });
            }), n = new l.jR({
                message: {
                    case: "resolveSubagentModels",
                    value: new l.iv({
                        resolutionId: t,
                        requestedModels: [
                            ...e
                        ]
                    })
                }
            });
            try {
                const [, e] = await Promise.all([
                    ee(n),
                    r
                ]);
                return new Map(e.models.map((e)=>[
                        e.requested,
                        void 0 === e.resolvedSlug || "" === e.resolvedSlug ? void 0 : e.resolvedSlug
                    ]));
            } catch (e) {
                throw x.delete(t), e;
            }
        } : void 0,
        finish: async (e)=>{
            if (ie) return;
            ie = !0;
            const r = (async ()=>{
                for (const e of Array.from(k.keys()))await ee(B(e));
                await ee(new l.jR({
                    message: {
                        case: "finishRun",
                        value: new l.D4({
                            aborted: t.signal.aborted && W,
                            turnCompleted: !0 === e?.turnCompleted
                        })
                    }
                })), C.close(), await X;
            })();
            try {
                await (0, u.wj)(r, 5e3);
            } catch  {} finally{
                K();
            }
        }
    };
}
