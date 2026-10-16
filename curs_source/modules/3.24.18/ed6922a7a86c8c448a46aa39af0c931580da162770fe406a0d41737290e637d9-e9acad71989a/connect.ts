import { $so, ANd, BCv, H0v, J0v, T0v, W0v, Y0v, YLd, ZMn, a0v, c0v, e1v, g0v, hNd, i1v, j0v, n1v, o1v, q0v, t1v, z0v } from "./A3u.js";
import { BMu, E8i, I$, S_, Wj, eYs, ifv } from "./De_3.js";
import { PMe, ojs, x1, zd } from "./agent_pb.js";
import { _so, aUe, rPe } from "./agent_service_pb.js";
import { Yu } from "./browser.ts";
import { ADd, IDd } from "./checkpoint-controller.ts";
import { NWi } from "./common_2.ts";
import { hg } from "./connect.js";
import { QQ, ege, iFu } from "./controlled.ts";
import { kWi } from "./controlled_2.ts";
import { CLd, FHt, Hse, YW, hb } from "./errors.ts";
import { LLd, Zso } from "./exec-controller.ts";
import { Lse, W0e, _X } from "./exec_pb.js";
import { z3 } from "./index_10.ts";
import { CX } from "./index_11.ts";
import { d0v } from "./index_199.js";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { FLd, Qso } from "./interaction-controller.ts";
import { yPd } from "./interaction-query-ids.ts";
import { E0v } from "./llm-gateway-credential.ts";
import { lNd } from "./mcp-tools-proto.ts";
import { bi } from "./protobuf.js";
import { vU } from "./qIc.js";
import { GLd, WLd } from "./request-context-blob.ts";
import { KLd } from "./request-context-outcome.ts";
import { cNd } from "./retry-policy.ts";
import { rkt } from "./shell-stream.ts";
import { $6e, Sbt, hee } from "./shell_exec_pb.js";
import { K0v } from "./soft-cancel-linger.ts";
import { CNd, kNd, wNd } from "./stall-detector.ts";
import { eoo } from "./transport-failure-kind.ts";
import { x } from "./tslib.es6.js";
import { ioo } from "./turn-runner.ts";
import { b$t } from "./writable-iterable.ts";
var WWi, DNd, u_e, MNd, PNd, roo, soo;
export { DNd, MNd, PNd, WWi, roo, soo, u_e };
var __wakaru_LNd_initialized = false;
export function LNd() {
if (__wakaru_LNd_initialized) return;
__wakaru_LNd_initialized = true;
"use strict";
x(), z3(), CX(), A1(), Gp(), zd(), aUe(), _X(), hee(), Yu(), bi(), hg(), d0v(), ADd(), NWi(), FHt(), LLd(), FLd(), E0v(), GLd(), KLd(), cNd(), lNd(), K0v(), CNd(), eoo(), ioo(), ioo(), WWi = I$(Symbol("agentStreamMetadata"), void 0), DNd = Wj("@anysphere/agent-client:abort"), u_e = Wj("@anysphere/agent-client:retry"), MNd = Wj("@anysphere/agent-client:request-context-blob"), PNd = (e)=>{
    const t = typeof e?.abortReasonName == "string" ? e.abortReasonName : void 0, n = typeof e?.abortReasonMessage == "string" ? e.abortReasonMessage : void 0;
    if (!(t === void 0 && n === void 0)) return {
        abortReasonName: t,
        abortReasonMessage: n
    };
}, roo = (e)=>{
    const t = [];
    switch(t.push(e.message.case), e.message.case){
        case "conversationAction":
            t.push(e.message.value.action.case);
            break;
        case "execClientMessage":
            t.push(e.message.value.message.case);
            break;
        case "execClientControlMessage":
            t.push(e.message.value.message.case);
            break;
        case "kvClientMessage":
            t.push(e.message.value.message.case);
            break;
        case "interactionResponse":
            t.push(e.message.value.result.case);
            break;
        case "interactionUpdate":
            switch(t.push(e.message.value.message.case), e.message.value.message.case){
                case "partialToolCall":
                case "toolCallCompleted":
                case "toolCallStarted":
                    t.push(e.message.value.message.value.toolCall?.tool.case);
                    break;
                case "toolCallDelta":
                    t.push(e.message.value.message.value.toolCallDelta?.delta.case);
                    break;
            }
            break;
        case "interactionQuery":
            t.push(e.message.value.query.case);
            break;
        case "execServerMessage":
            t.push(e.message.value.message.case);
            break;
        case "execServerControlMessage":
            t.push(e.message.value.message.case);
            break;
    }
    return t.filter((n)=>n !== void 0).join(":");
}, soo = class {
    constructor(e, t, n = {}){
        this.client = e, this.endpointUrl = t, this.options = n, this.hasStartedStream = !1;
    }
    async run(e, t, n, i, r, s, o, a, c, l, u) {
        var h = [];
        try {
            if (u.maxSteps !== void 0) throw new CLd(u.maxSteps);
            const f = new WLd(o), v = u.generationUUID ?? BMu(), b = new yPd, y = BCv(r, b), T = {
                sources: [],
                abortReasonName: void 0,
                abortReasonMessage: void 0
            }, E = (P)=>{
                const N = g0v(P), O = T.sources.includes("stall_detector") || N?.stallAborted === !0, F = H0v(T.sources), H = o1v(P), $ = H.underlyingConnectError;
                return {
                    relayed: N,
                    stallAborted: O,
                    abortOrigin: F === "none" && O ? "stall_detector" : F,
                    reading: N === void 0 ? {
                        errorName: H.errorName,
                        connectCode: $?.code,
                        connectCodeName: $?.codeName,
                        connectCause: $?.cause,
                        abortSources: [
                            ...T.sources
                        ],
                        abortReasonName: T.abortReasonName,
                        ...$ === void 0 ? {} : {
                            underlyingConnectError: $
                        }
                    } : {
                        errorName: N.errorName,
                        connectCode: N.connectCode,
                        connectCodeName: N.connectCodeName,
                        connectCause: N.connectCause,
                        ...hNd(N.loop) ? {
                            loop: N.loop
                        } : {},
                        ...N.transportMode === void 0 ? {} : {
                            transportMode: N.transportMode
                        }
                    }
                };
            };
            let A = 0, R = 0;
            try {
                u.onNetworkPhaseStart?.();
            } catch (P) {
                u_e.warn(e, "onNetworkPhaseStart callback failed", {
                    error: String(P)
                });
            }
            const D = QQ(h, S_(e.withName("networkPhase")));
            e = D.ctx, await ifv(D.span, ()=>e1v({
                    ctx: e,
                    state: t,
                    action: n,
                    checkpointHandler: c,
                    runOptions: u,
                    requestId: v,
                    loop: this.options.loop ?? "nal",
                    notifyInitialResume: !0,
                    logging: {
                        ...this.options.retryLogging ?? {
                            tag: "nal_agent_retries",
                            includeErrorObjects: !0
                        },
                        diagnostics: (P)=>{
                            const { stallAborted: N, abortOrigin: O, reading: F } = E(P);
                            return {
                                stallAborted: N,
                                abortOrigin: O,
                                ...J0v(F)
                            };
                        }
                    },
                    cancellation: {
                        toCancelledError: ()=>new hb("Request cancelled")
                    },
                    hooks: {
                        beginAttempt: ()=>{
                            T.sources = [], T.abortReasonName = void 0, T.abortReasonMessage = void 0, R = ++A;
                        },
                        runAttempt: async ({ state: P, action: N, checkpointHandler: O, attempt: F, attemptRequestId: H, notifyConnected: $, notifyApplicationProgress: W })=>{
                            const G = i1v(y, R, ()=>A);
                            await this.runInternal(e, P, N, i, G, s, f, a, O, l, u, H, v, b, T, $, W, F);
                        },
                        classify: (P, N)=>{
                            const { abortOrigin: O, relayed: F } = E(P), H = j0v(P, W0v(u, N), {
                                ...N,
                                retriesEnabled: u.enableAgentRetries ?? !1,
                                abortOrigin: O
                            }), $ = F?.transportFailureKind;
                            return YLd($) ? {
                                ...H,
                                transportFailureKind: $
                            } : H;
                        },
                        buildNonRetriedErrorInfo: (P)=>({
                                ...P,
                                enableAgentRetries: u.enableAgentRetries ?? !1,
                                stallAborted: E(P.error).stallAborted,
                                abortSources: [
                                    ...T.sources
                                ],
                                abortReasonName: T.abortReasonName,
                                abortReasonMessage: T.abortReasonMessage
                            }),
                        reconnectTrigger: (P, N, O)=>{
                            const { relayed: F, stallAborted: H, reading: $ } = E(P), W = P instanceof Hse ? P : $so(P, {
                                requestId: O.failedAttemptRequestId
                            });
                            return {
                                errorClass: F?.errorName ?? W.name,
                                connectCode: $.connectCode,
                                connectCodeName: $.connectCodeName,
                                errorCode: W.displayInfo?.errorCode,
                                countAsServerError: N.countAsServerError,
                                countAsTransportError: N.countAsTransportError,
                                stallAborted: H,
                                originatingRequestId: O.originalRequestId,
                                attemptRequestId: O.failedAttemptRequestId,
                                ...$.transportMode === void 0 ? {} : {
                                    transportMode: $.transportMode
                                },
                                endpointUrl: this.endpointUrl
                            };
                        },
                        onRetryCommitted: ()=>a.reopen()
                    }
                }));
        } catch (f) {
            var p = f, g = !0;
        } finally{
            ege(h, p, g);
        }
    }
    async runInternal(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T = "agent.request.attempt") {
        var E = [];
        try {
            const D = e;
            e = this.options.prepareAttemptContext?.(e, {
                attempt: y,
                attemptRequestId: h,
                originalRequestId: p,
                runOptions: u
            }) ?? e;
            const P = QQ(E, S_(e.withName(T)));
            P.span.setAttribute("agent.attempt", y), P.span.setAttribute("agent.request_id", h), P.span.setAttribute("agent.original_request_id", p), e = P.ctx, e = eYs(e, "agent.request_id", h), e = eYs(e, "agent.original_request_id", p), e = e.with(WWi, {
                requestId: h,
                rootParentRequestId: u.rootParentRequestId,
                modelDetails: i
            });
            const N = new Set(f.sources);
            let O = f.abortReasonName !== void 0 || f.abortReasonMessage !== void 0;
            const F = (Dt, lt)=>{
                if (N.has(Dt)) return;
                N.add(Dt), f.sources = [
                    ...N
                ];
                const Tt = PNd(lt);
                !O && Tt !== void 0 && (O = !0, f.abortReasonName = Tt.abortReasonName, f.abortReasonMessage = Tt.abortReasonMessage), DNd.error(e, "Agent client stream abort", new Error(Dt), {
                    abortSource: Dt,
                    requestId: h,
                    conversationId: u.conversationId,
                    ...lt ?? {}
                });
            };
            if (!e.signal.aborted) e.signal.addEventListener("abort", ()=>{
                const Dt = e.signal.reason;
                F("ctx_signal_abort", E8i(Dt));
            }, {
                once: !0
            });
            else {
                const Dt = e.signal.reason;
                F("ctx_signal_abort", E8i(Dt));
            }
            const [H, $] = e.withCancel();
            if (!a.signal?.aborted) a.signal?.addEventListener("abort", ()=>{
                const Dt = a.signal?.reason;
                F("conversation_action_abort", E8i(Dt)), $();
            }, {
                once: !0
            });
            else {
                const Dt = a.signal?.reason;
                F("conversation_action_abort", E8i(Dt)), $();
            }
            if (e.canceled || H.canceled) {
                const Dt = {
                    ctxCanceled: e.canceled,
                    softCancel: H.canceled
                };
                throw F("pre_run_cancel", Dt), new hb("User aborted request");
            }
            const W = S_(e.withName("createControlledExecManager")), G = kWi.fromResources(s);
            W[Symbol.dispose]();
            const [q, z] = e.withCancel(), X = new kNd, { failThresholdMs: Y, advisoryThresholdMs: Z } = Y0v(u.stallDetectorConfig, {
                isRunningInTest: u.isRunningInTest
            }), K = QQ(E, new wNd(q, {
                thresholdMs: Y,
                advisoryThresholdMs: Z,
                loop: this.options.loop,
                onStall: ()=>{
                    F("stall_detector", {
                        thresholdMs: Y,
                        advisoryThresholdMs: Z
                    }), z();
                },
                onStallCallback: u.onStall,
                handlerTracker: X
            }));
            let J, ne;
            const ee = ZMn(), se = new b$t(ee, (Dt)=>(K.reset("outbound_write", roo(Dt)), Dt)), re = QQ(E, S_(e.withName("writeInitialRequest")));
            let ue;
            const ce = q0v(l), de = u.requestContextBlobTransportMode ?? "legacy", le = y === 0 && n.action.case === "userMessageAction" && t.turns.length === 0, ye = de === "ref_only" && le ? "dual" : de, [, _e] = await Promise.all([
                ANd({
                    ctx: e,
                    action: n,
                    resources: s,
                    blobStore: o,
                    options: u,
                    source: "run_request",
                    transportMode: ye,
                    notifyBytes: y === 0
                }),
                u.mintLlmGatewayCredential === void 0 ? Promise.resolve(void 0) : T0v(u.mintLlmGatewayCredential, {
                    signal: H.signal,
                    isCanceled: ()=>H.canceled,
                    requestId: h
                })
            ]), me = {
                action: n,
                headers: u.headers ?? {}
            }, Ce = this.options.decorateAttempt?.(me, u) ?? me, xe = new ojs({
                conversationState: t,
                action: Ce.action,
                modelDetails: i,
                requestedModel: u.requestedModel,
                clientLlmGatewayCredential: _e,
                mcpTools: ce,
                conversationGroupId: u.conversationGroupId,
                conversationId: u.conversationId,
                agentSessionId: u.agentSessionId,
                mcpFileSystemOptions: u.mcpFileSystemOptions,
                customSystemPrompt: u.customSystemPrompt,
                systemPromptSpec: u.systemPromptSpec,
                harness: u.harness,
                computerUseCoordinateMode: u.computerUseCoordinateMode,
                suggestNextPrompt: u.suggestNextPrompt,
                subagentTypeName: u.subagentTypeName,
                excludeWorkspaceContext: u.excludeWorkspaceContext,
                devRawModelSlug: u.devRawModelSlug,
                selectedSubagentModels: u.selectedSubagentModels,
                subagentModelOverrides: u.subagentModelOverrides ?? [],
                selectedSubagentModelDetails: u.selectedSubagentModelsLegacy,
                clientSupportsInlineImages: u.clientSupportsInlineImages,
                clientSupportsPreviewCard: u.clientSupportsPreviewCard,
                startedAsNewProject: u.startedAsNewProject,
                firstProjectOnboarding: u.firstProjectOnboarding,
                clientSupportsSendToUser: u.clientSupportsSendToUser,
                clientSupportsRoutedModelUpdate: u.clientSupportsRoutedModelUpdate,
                canCreateCloudSubagents: u.canCreateCloudSubagents,
                suppressSubagentProgressUpdateTool: u.suppressSubagentProgressUpdateTool,
                runId: p,
                nextInteractionQueryId: g.peekNext()
            });
            if (ue = se.write(new rPe({
                message: {
                    case: "runRequest",
                    value: xe
                }
            })), H.canceled) {
                const Dt = {
                    ctxCanceled: e.canceled,
                    softCancel: H.canceled
                };
                throw F("post_write_cancel", Dt), re[Symbol.dispose](), new hb("User aborted request");
            }
            const Le = {
                ...Ce.headers,
                "x-request-id": h,
                "x-original-request-id": p,
                ...a0v(u),
                ...c0v()
            };
            J = S_(e.withName("handshakeEstablishment")), J.span.setAttribute("handshake.firstStreamOnClient", !this.hasStartedStream), this.hasStartedStream = !0;
            const Be = this.client.run(J.ctx, ee, {
                signal: q.signal,
                headers: Le,
                onHeader: u.onHeader,
                onNetworkStarted: ()=>{
                    ne === void 0 && (ne = performance.now());
                }
            }), je = performance.now(), Ge = (Dt)=>{
                J && (J.span.setAttribute("handshake.firstMessageHeartbeat", Dt), ne !== void 0 && J.span.setAttribute("handshake.preNetworkMs", ne - je), J[Symbol.dispose](), J = void 0), v();
                const lt = performance.now();
                u.onFirstMessage?.(lt - je), ne !== void 0 && u.onFirstMessageNetwork?.(lt - ne);
            }, Xe = ()=>{
                b(), u.onFirstNonHeartbeatResponse?.(performance.now() - je, y);
            }, Ke = u.onTtftBreakdown ? (Dt)=>{
                u.onTtftBreakdown(Dt, y);
            } : void 0, { interactionStream: et, execStream: We, checkpointStream: it, kvStream: Ne, done: Fe } = t1v(e, Be, K, Ge, H.signal, e.signal, Xe, Ke);
            let Qe;
            const tt = {
                handleCheckpoint: async (Dt, lt, Tt)=>{
                    await c.handleCheckpoint(Dt, lt, Tt), Qe = Tt?.resumeEligibility ?? "eligible";
                },
                getLatestCheckpoint: ()=>c.getLatestCheckpoint()
            };
            re[Symbol.dispose]();
            const st = 5e3;
            let vt;
            const ht = ()=>{
                vt = setTimeout(()=>{
                    se.write(new rPe({
                        message: {
                            case: "clientHeartbeat",
                            value: new _so
                        }
                    })).then(()=>K.onClientSentHeartbeat(), ()=>{}), ht();
                }, st);
            }, ut = ()=>{
                vt !== void 0 && (clearTimeout(vt), vt = void 0);
            };
            ht();
            try {
                let Dt;
                if (n.action.case === "shellCommandAction" && n.action.value.execId) {
                    const Yt = n.action.value, _n = new $6e({
                        command: Yt.shellCommand?.command || "",
                        parsingResult: new Sbt,
                        skipApproval: !0
                    }), ln = s.get(rkt).execute(e, _n, {
                        execId: Yt.execId
                    }), Mn = new Qso(et, r, new b$t(se, (Dn)=>new rPe({
                            message: {
                                case: "interactionResponse",
                                value: Dn
                            }
                        })), K);
                    Dt = {
                        run: async (Dn)=>{
                            await Promise.all([
                                X.track("handleShellStream", n1v(Dn, ln, r)),
                                X.track("interactionController", Mn.run(Dn))
                            ]);
                        }
                    };
                } else {
                    const Yt = new Qso(et, r, new b$t(se, (_n)=>new rPe({
                            message: {
                                case: "interactionResponse",
                                value: _n
                            }
                        })), K);
                    Dt = {
                        run: async (_n)=>{
                            await X.track("interactionController", Yt.run(_n));
                        }
                    };
                }
                ue !== void 0 && await Promise.race([
                    ue,
                    Fe.catch(()=>{})
                ]);
                const lt = new b$t(se, (Yt)=>{
                    if (vU(Yt, W0e)) return new rPe({
                        message: {
                            case: "execClientMessage",
                            value: Yt
                        }
                    });
                    if (vU(Yt, Lse)) return new rPe({
                        message: {
                            case: "execClientControlMessage",
                            value: Yt
                        }
                    });
                    throw new Error(`Unknown exec message (type: ${vU(Yt) ? Yt.getType().typeName : typeof Yt})`);
                }), Tt = new Zso(We, lt, G), ct = new iFu(Ne, new b$t(se, (Yt)=>new rPe({
                        message: {
                            case: "kvClientMessage",
                            value: Yt
                        }
                    })), o, {
                    beforeGetBlob: async (Yt, _n)=>o.persistForRemoteRead(Yt, _n)
                }), Kt = new IDd(it, tt, e);
                let Rt, Gt;
                const sn = {
                    promise: new Promise((Yt, _n)=>{
                        Rt = Yt, Gt = _n;
                    }),
                    resolve: Rt,
                    reject: Gt
                };
                H.canceled ? (sn.resolve(), et.close()) : H.signal.addEventListener("abort", ()=>{
                    sn.resolve(), et.close();
                }, {
                    once: !0
                }), Tt.run(H).then(sn.resolve).catch(sn.reject);
                const un = Promise.allSettled([
                    X.track("streamSplitter", Fe.finally(()=>{
                        ut(), a.close(), lt.close();
                    })),
                    X.track("execHandler", sn.promise),
                    Dt.run(e),
                    X.track("checkpointController", Kt.run()),
                    X.track("kvHandler", ct.run(e)),
                    X.track("conversationActionManager", a.run(e, {
                        write: async (Yt)=>{
                            await ANd({
                                ctx: e,
                                action: Yt,
                                resources: s,
                                blobStore: o,
                                options: u,
                                source: "queued_action"
                            }), await se.write(new rPe({
                                message: {
                                    case: "conversationAction",
                                    value: Yt
                                }
                            }));
                        }
                    }))
                ]);
                let kt, ot;
                const St = {
                    promise: new Promise((Yt, _n)=>{
                        kt = Yt, ot = _n;
                    }),
                    resolve: kt,
                    reject: ot
                };
                un.then(St.resolve).catch(St.reject), e.canceled ? St.reject(new hb("User aborted request")) : e.signal.addEventListener("abort", ()=>St.reject(new hb("User aborted request")), {
                    once: !0
                });
                const ft = ()=>{
                    if (e.signal.aborted) {
                        z();
                        return;
                    }
                    z0v({
                        done: Fe,
                        lingerMs: u.softCancelLingerMs
                    }).then((Yt)=>{
                        u_e.info(e, "Soft-cancel transport linger finished", {
                            outcome: Yt,
                            requestId: h
                        }), z();
                    });
                };
                H.canceled ? (ft(), St.reject(new hb("User aborted request"))) : H.signal.addEventListener("abort", ()=>{
                    ft(), St.reject(new hb("User aborted request"));
                }, {
                    once: !0
                });
                const Mt = await St.promise, Bt = Mt[0], Ot = Mt[1], Wt = Mt[3], nn = (Yt)=>Yt.reason instanceof Error ? `${Yt.reason.name}: ${Yt.reason.message}` : String(Yt.reason);
                if (Wt.status === "rejected") throw new YW("Checkpoint persistence failed", {
                    cause: Wt.reason instanceof Error ? Wt.reason : void 0,
                    requestId: h,
                    displayInfo: {
                        title: "Checkpoint persistence failed",
                        detail: nn(Wt),
                        isRetryable: !1
                    }
                });
                const pn = Qe === "ineligible_terminal_turn";
                if (pn) {
                    const Yt = {
                        ...Bt.status === "rejected" ? {
                            streamSplitter: nn(Bt)
                        } : {},
                        ...Ot.status === "rejected" ? {
                            execHandler: nn(Ot)
                        } : {}
                    };
                    Object.keys(Yt).length > 0 && u_e.debug(e, "Ignoring handler errors after terminal checkpoint", Yt);
                }
                if (Bt.status === "rejected" && !pn) throw Bt.reason;
                if (Ot.status === "rejected" && !pn) throw Ot.reason;
                H.canceled || await this.processUnprocessedMessages(D, a, tt, i, r, s, o, l, u, h, p, g, f, K, v, b);
            } finally{
                ut(), J && (J[Symbol.dispose](), J = void 0);
            }
        } catch (D) {
            var A = D, R = !0;
        } finally{
            ege(E, A, R);
        }
    }
    async processUnprocessedMessages(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v) {
        if (!t.hasUnprocessedMessages()) return;
        const b = t.getUnprocessedUserMessages(), y = n.getLatestCheckpoint();
        if (!y || b.length === 0) return;
        const T = b[0];
        t.markMessageAsProcessed(T), t.resetStream(), g[Symbol.dispose]();
        const E = n.getLatestCheckpoint();
        try {
            await this.runInternal(e, y, new x1({
                action: {
                    case: "userMessageAction",
                    value: new PMe({
                        userMessage: T
                    })
                }
            }), i, r, s, o, t, n, a, c, l, u, h, p, f, v, 0, "agent.request.queuedMessage");
        } catch (A) {
            const R = n.getLatestCheckpoint();
            throw E === R && t.requeueMessage(T), A;
        }
    }
};

}
