import { GFo, MI, d5e, ju } from "./agent_pb.js";
import { V6e, _qe, x7a } from "./agent_service_pb.js";
import { kl } from "./browser.ts";
import { cym, lym } from "./checkpoint-controller.ts";
import { cYr } from "./common_2.ts";
import { dp } from "./connect.js";
import { V4p, jxe, kde } from "./controlled.ts";
import { YKr } from "./controlled_2.ts";
import { ETn, T1, V1m, bJ, kpe } from "./errors.ts";
import { hUa, ikm } from "./exec-controller.ts";
import { Bve, Xse, p5e } from "./exec_pb.js";
import { FO } from "./index_10.ts";
import { uie } from "./index_11.ts";
import { eUa } from "./index_203.js";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { okm, pUa } from "./interaction-controller.ts";
import { YSm } from "./interaction-query-ids.ts";
import { E5a, SS, Xqr, cX, iie, pOp, wN1 } from "./ipa.js";
import { CB1 } from "./llm-gateway-credential.ts";
import { Mkm } from "./mcp-tools-proto.ts";
import { hr } from "./protobuf.js";
import { dkm, hkm } from "./request-context-blob.ts";
import { vkm } from "./request-context-outcome.ts";
import { Pkm } from "./retry-policy.ts";
import { lGt } from "./shell-stream.ts";
import { $te, D$e, v4t } from "./shell_exec_pb.js";
import { zB1 } from "./soft-cancel-linger.ts";
import { Vkm, qkm, zkm } from "./stall-detector.ts";
import { gUa } from "./transport-failure-kind.ts";
import { E } from "./tslib.es6.js";
import { _Ua } from "./turn-runner.ts";
import { TCn } from "./writable-iterable.ts";
import { DWt, F91, GB1, JB1, Lkm, QB1, Qkm, UB1, VB1, WB1, ZB1, _km, aB1, e81, jB1, oB1, pB1, qB1, r81, t81, tUa, wB1 } from "./yBp.js";
import { tz } from "./ze.js";
var fYr, ewm, oPe, twm, nwm, bUa, yUa;
export { bUa, ewm, fYr, nwm, oPe, twm, yUa };
var __wakaru_iwm_initialized = false;
export function iwm() {
if (__wakaru_iwm_initialized) return;
__wakaru_iwm_initialized = true;
"use strict";
E(), FO(), uie(), OT(), Ng(), ju(), V6e(), Xse(), $te(), kl(), hr(), dp(), eUa(), cym(), cYr(), ETn(), ikm(), okm(), CB1(), hkm(), vkm(), Pkm(), Mkm(), zB1(), Vkm(), gUa(), _Ua(), _Ua(), fYr = cX(Symbol("agentStreamMetadata"), void 0), ewm = iie("@anysphere/agent-client:abort"), oPe = iie("@anysphere/agent-client:retry"), twm = iie("@anysphere/agent-client:request-context-blob"), nwm = (t)=>{
    const e = typeof t?.abortReasonName == "string" ? t.abortReasonName : void 0, n = typeof t?.abortReasonMessage == "string" ? t.abortReasonMessage : void 0;
    if (!(e === void 0 && n === void 0)) return {
        abortReasonName: e,
        abortReasonMessage: n
    };
}, bUa = (t)=>{
    const e = [];
    switch(e.push(t.message.case), t.message.case){
        case "conversationAction":
            e.push(t.message.value.action.case);
            break;
        case "execClientMessage":
            e.push(t.message.value.message.case);
            break;
        case "execClientControlMessage":
            e.push(t.message.value.message.case);
            break;
        case "kvClientMessage":
            e.push(t.message.value.message.case);
            break;
        case "interactionResponse":
            e.push(t.message.value.result.case);
            break;
        case "interactionUpdate":
            switch(e.push(t.message.value.message.case), t.message.value.message.case){
                case "partialToolCall":
                case "toolCallCompleted":
                case "toolCallStarted":
                    e.push(t.message.value.message.value.toolCall?.tool.case);
                    break;
                case "toolCallDelta":
                    e.push(t.message.value.message.value.toolCallDelta?.delta.case);
                    break;
            }
            break;
        case "interactionQuery":
            e.push(t.message.value.query.case);
            break;
        case "execServerMessage":
            e.push(t.message.value.message.case);
            break;
        case "execServerControlMessage":
            e.push(t.message.value.message.case);
            break;
    }
    return e.filter((n)=>n !== void 0).join(":");
}, yUa = class {
    constructor(t, e, n = {}){
        this.client = t, this.endpointUrl = e, this.options = n, this.hasStartedStream = !1;
    }
    async run(t, e, n, i, r, s, o, a, l, c, u) {
        var d = [];
        try {
            if (u.maxSteps !== void 0) throw new V1m(u.maxSteps);
            const g = new dkm(o), f = u.generationUUID ?? pOp(), _ = new YSm, b = F91(r, _), y = {
                sources: [],
                abortReasonName: void 0,
                abortReasonMessage: void 0
            }, S = (I)=>{
                const A = pB1(I), P = y.sources.includes("stall_detector") || A?.stallAborted === !0, M = UB1(y.sources), O = r81(I), N = O.underlyingConnectError;
                return {
                    relayed: A,
                    stallAborted: P,
                    abortOrigin: M === "none" && P ? "stall_detector" : M,
                    reading: A === void 0 ? {
                        errorName: O.errorName,
                        connectCode: N?.code,
                        connectCodeName: N?.codeName,
                        connectCause: N?.cause,
                        abortSources: [
                            ...y.sources
                        ],
                        abortReasonName: y.abortReasonName,
                        ...N === void 0 ? {} : {
                            underlyingConnectError: N
                        }
                    } : {
                        errorName: A.errorName,
                        connectCode: A.connectCode,
                        connectCodeName: A.connectCodeName,
                        connectCause: A.connectCause,
                        ...Lkm(A.loop) ? {
                            loop: A.loop
                        } : {},
                        ...A.transportMode === void 0 ? {} : {
                            transportMode: A.transportMode
                        }
                    }
                };
            };
            let k = 0, C = 0;
            try {
                u.onNetworkPhaseStart?.();
            } catch (I) {
                oPe.warn(t, "onNetworkPhaseStart callback failed", {
                    error: String(I)
                });
            }
            const T = kde(d, SS(t.withName("networkPhase")));
            t = T.ctx, await wN1(T.span, ()=>QB1({
                    ctx: t,
                    state: e,
                    action: n,
                    checkpointHandler: l,
                    runOptions: u,
                    requestId: f,
                    loop: this.options.loop ?? "nal",
                    notifyInitialResume: !0,
                    logging: {
                        ...this.options.retryLogging ?? {
                            tag: "nal_agent_retries",
                            includeErrorObjects: !0
                        },
                        diagnostics: (I)=>{
                            const { stallAborted: A, abortOrigin: P, reading: M } = S(I);
                            return {
                                stallAborted: A,
                                abortOrigin: P,
                                ...ZB1(M)
                            };
                        }
                    },
                    cancellation: {
                        toCancelledError: ()=>new T1("Request cancelled")
                    },
                    hooks: {
                        beginAttempt: ()=>{
                            y.sources = [], y.abortReasonName = void 0, y.abortReasonMessage = void 0, C = ++k;
                        },
                        runAttempt: async ({ state: I, action: A, checkpointHandler: P, attempt: M, attemptRequestId: O, notifyConnected: N, notifyApplicationProgress: U })=>{
                            const j = t81(b, C, ()=>k);
                            await this.runInternal(t, I, A, i, j, s, g, a, P, c, u, O, f, _, y, N, U, M);
                        },
                        classify: (I, A)=>{
                            const { abortOrigin: P, relayed: M } = S(I), O = WB1(I, jB1(u, A), {
                                ...A,
                                retriesEnabled: u.enableAgentRetries ?? !1,
                                abortOrigin: P
                            }), N = M?.transportFailureKind;
                            return _km(N) ? {
                                ...O,
                                transportFailureKind: N
                            } : O;
                        },
                        buildNonRetriedErrorInfo: (I)=>({
                                ...I,
                                enableAgentRetries: u.enableAgentRetries ?? !1,
                                stallAborted: S(I.error).stallAborted,
                                abortSources: [
                                    ...y.sources
                                ],
                                abortReasonName: y.abortReasonName,
                                abortReasonMessage: y.abortReasonMessage
                            }),
                        reconnectTrigger: (I, A, P)=>{
                            const { relayed: M, stallAborted: O, reading: N } = S(I), U = I instanceof kpe ? I : tUa(I, {
                                requestId: P.failedAttemptRequestId
                            });
                            return {
                                errorClass: M?.errorName ?? U.name,
                                connectCode: N.connectCode,
                                connectCodeName: N.connectCodeName,
                                errorCode: U.displayInfo?.errorCode,
                                countAsServerError: A.countAsServerError,
                                countAsTransportError: A.countAsTransportError,
                                stallAborted: O,
                                originatingRequestId: P.originalRequestId,
                                attemptRequestId: P.failedAttemptRequestId,
                                ...N.transportMode === void 0 ? {} : {
                                    transportMode: N.transportMode
                                },
                                endpointUrl: this.endpointUrl
                            };
                        },
                        onRetryCommitted: ()=>a.reopen()
                    }
                }));
        } catch (g) {
            var h = g, p = !0;
        } finally{
            jxe(d, h, p);
        }
    }
    async runInternal(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y = "agent.request.attempt") {
        var S = [];
        try {
            const T = t;
            t = this.options.prepareAttemptContext?.(t, {
                attempt: b,
                attemptRequestId: d,
                originalRequestId: h,
                runOptions: u
            }) ?? t;
            const I = kde(S, SS(t.withName(y)));
            I.span.setAttribute("agent.attempt", b), I.span.setAttribute("agent.request_id", d), I.span.setAttribute("agent.original_request_id", h), t = I.ctx, t = E5a(t, "agent.request_id", d), t = E5a(t, "agent.original_request_id", h), t = t.with(fYr, {
                requestId: d,
                rootParentRequestId: u.rootParentRequestId,
                modelDetails: i
            });
            const A = new Set(g.sources);
            let P = g.abortReasonName !== void 0 || g.abortReasonMessage !== void 0;
            const M = (Je, Ge)=>{
                if (A.has(Je)) return;
                A.add(Je), g.sources = [
                    ...A
                ];
                const xe = nwm(Ge);
                !P && xe !== void 0 && (P = !0, g.abortReasonName = xe.abortReasonName, g.abortReasonMessage = xe.abortReasonMessage), ewm.error(t, "Agent client stream abort", new Error(Je), {
                    abortSource: Je,
                    requestId: d,
                    conversationId: u.conversationId,
                    ...Ge ?? {}
                });
            };
            if (!t.signal.aborted) t.signal.addEventListener("abort", ()=>{
                const Je = t.signal.reason;
                M("ctx_signal_abort", Xqr(Je));
            }, {
                once: !0
            });
            else {
                const Je = t.signal.reason;
                M("ctx_signal_abort", Xqr(Je));
            }
            const [O, N] = t.withCancel();
            if (!a.signal?.aborted) a.signal?.addEventListener("abort", ()=>{
                const Je = a.signal?.reason;
                M("conversation_action_abort", Xqr(Je)), N();
            }, {
                once: !0
            });
            else {
                const Je = a.signal?.reason;
                M("conversation_action_abort", Xqr(Je)), N();
            }
            if (t.canceled || O.canceled) {
                const Je = {
                    ctxCanceled: t.canceled,
                    softCancel: O.canceled
                };
                throw M("pre_run_cancel", Je), new T1("User aborted request");
            }
            const U = SS(t.withName("createControlledExecManager")), j = YKr.fromResources(s);
            U[Symbol.dispose]();
            const [$, H] = t.withCancel(), G = new qkm, { failThresholdMs: q, advisoryThresholdMs: K } = VB1(u.stallDetectorConfig, {
                isRunningInTest: u.isRunningInTest
            }), V = kde(S, new zkm($, {
                thresholdMs: q,
                advisoryThresholdMs: K,
                loop: this.options.loop,
                onStall: ()=>{
                    M("stall_detector", {
                        thresholdMs: q,
                        advisoryThresholdMs: K
                    }), H();
                },
                onStallCallback: u.onStall,
                handlerTracker: G
            }));
            let Y, J;
            const Q = DWt(), te = new TCn(Q, (Je)=>(V.reset("outbound_write", bUa(Je)), Je)), ee = kde(S, SS(t.withName("writeInitialRequest")));
            let re;
            const ie = GB1(c), oe = u.requestContextBlobTransportMode ?? "legacy", se = b === 0 && n.action.case === "userMessageAction" && e.turns.length === 0, le = oe === "ref_only" && se ? "dual" : oe, [, ce] = await Promise.all([
                Qkm({
                    ctx: t,
                    action: n,
                    resources: s,
                    blobStore: o,
                    options: u,
                    source: "run_request",
                    transportMode: le,
                    notifyBytes: b === 0
                }),
                u.mintLlmGatewayCredential === void 0 ? Promise.resolve(void 0) : wB1(u.mintLlmGatewayCredential, {
                    signal: O.signal,
                    isCanceled: ()=>O.canceled,
                    requestId: d
                })
            ]), ae = {
                action: n,
                headers: u.headers ?? {}
            }, de = this.options.decorateAttempt?.(ae, u) ?? ae, he = new GFo({
                conversationState: e,
                action: de.action,
                modelDetails: i,
                requestedModel: u.requestedModel,
                clientLlmGatewayCredential: ce,
                mcpTools: ie,
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
                runId: h,
                nextInteractionQueryId: p.peekNext()
            });
            if (re = te.write(new _qe({
                message: {
                    case: "runRequest",
                    value: he
                }
            })), O.canceled) {
                const Je = {
                    ctxCanceled: t.canceled,
                    softCancel: O.canceled
                };
                throw M("post_write_cancel", Je), ee[Symbol.dispose](), new T1("User aborted request");
            }
            const ge = {
                ...de.headers,
                "x-request-id": d,
                "x-original-request-id": h,
                ...oB1(u),
                ...aB1()
            };
            Y = SS(t.withName("handshakeEstablishment")), Y.span.setAttribute("handshake.firstStreamOnClient", !this.hasStartedStream), this.hasStartedStream = !0;
            const pe = this.client.run(Y.ctx, Q, {
                signal: $.signal,
                headers: ge,
                onHeader: u.onHeader,
                onNetworkStarted: ()=>{
                    J === void 0 && (J = performance.now());
                }
            }), ve = performance.now(), fe = (Je)=>{
                Y && (Y.span.setAttribute("handshake.firstMessageHeartbeat", Je), J !== void 0 && Y.span.setAttribute("handshake.preNetworkMs", J - ve), Y[Symbol.dispose](), Y = void 0), f();
                const Ge = performance.now();
                u.onFirstMessage?.(Ge - ve), J !== void 0 && u.onFirstMessageNetwork?.(Ge - J);
            }, Te = ()=>{
                _(), u.onFirstNonHeartbeatResponse?.(performance.now() - ve, b);
            }, _e = u.onTtftBreakdown ? (Je)=>{
                u.onTtftBreakdown(Je, b);
            } : void 0, { interactionStream: Ce, execStream: Se, checkpointStream: Pe, kvStream: we, done: Ie } = JB1(t, pe, V, fe, O.signal, t.signal, Te, _e);
            let Me;
            const De = {
                handleCheckpoint: async (Je, Ge, xe)=>{
                    await l.handleCheckpoint(Je, Ge, xe), Me = xe?.resumeEligibility ?? "eligible";
                },
                getLatestCheckpoint: ()=>l.getLatestCheckpoint()
            };
            ee[Symbol.dispose]();
            const Ne = 5e3;
            let be;
            const je = ()=>{
                be = setTimeout(()=>{
                    te.write(new _qe({
                        message: {
                            case: "clientHeartbeat",
                            value: new x7a
                        }
                    })).then(()=>V.onClientSentHeartbeat(), ()=>{}), je();
                }, Ne);
            }, $e = ()=>{
                be !== void 0 && (clearTimeout(be), be = void 0);
            };
            je();
            try {
                let Je;
                if (n.action.case === "shellCommandAction" && n.action.value.execId) {
                    const bt = n.action.value, St = new D$e({
                        command: bt.shellCommand?.command || "",
                        parsingResult: new v4t,
                        skipApproval: !0
                    }), kt = s.get(lGt).execute(t, St, {
                        execId: bt.execId
                    }), xt = new pUa(Ce, r, new TCn(te, (Pt)=>new _qe({
                            message: {
                                case: "interactionResponse",
                                value: Pt
                            }
                        })), V);
                    Je = {
                        run: async (Pt)=>{
                            await Promise.all([
                                G.track("handleShellStream", e81(Pt, kt, r)),
                                G.track("interactionController", xt.run(Pt))
                            ]);
                        }
                    };
                } else {
                    const bt = new pUa(Ce, r, new TCn(te, (St)=>new _qe({
                            message: {
                                case: "interactionResponse",
                                value: St
                            }
                        })), V);
                    Je = {
                        run: async (St)=>{
                            await G.track("interactionController", bt.run(St));
                        }
                    };
                }
                re !== void 0 && await Promise.race([
                    re,
                    Ie.catch(()=>{})
                ]);
                const Ge = new TCn(te, (bt)=>{
                    if (tz(bt, p5e)) return new _qe({
                        message: {
                            case: "execClientMessage",
                            value: bt
                        }
                    });
                    if (tz(bt, Bve)) return new _qe({
                        message: {
                            case: "execClientControlMessage",
                            value: bt
                        }
                    });
                    throw new Error(`Unknown exec message (type: ${tz(bt) ? bt.getType().typeName : typeof bt})`);
                }), xe = new hUa(Se, Ge, j), Oe = new V4p(we, new TCn(te, (bt)=>new _qe({
                        message: {
                            case: "kvClientMessage",
                            value: bt
                        }
                    })), o, {
                    beforeGetBlob: async (bt, St)=>o.persistForRemoteRead(bt, St)
                }), ct = new lym(Pe, De, t);
                let Ye, Ve;
                const lt = {
                    promise: new Promise((bt, St)=>{
                        Ye = bt, Ve = St;
                    }),
                    resolve: Ye,
                    reject: Ve
                };
                O.canceled ? (lt.resolve(), Ce.close()) : O.signal.addEventListener("abort", ()=>{
                    lt.resolve(), Ce.close();
                }, {
                    once: !0
                }), xe.run(O).then(lt.resolve).catch(lt.reject);
                const He = Promise.allSettled([
                    G.track("streamSplitter", Ie.finally(()=>{
                        $e(), a.close(), Ge.close();
                    })),
                    G.track("execHandler", lt.promise),
                    Je.run(t),
                    G.track("checkpointController", ct.run()),
                    G.track("kvHandler", Oe.run(t)),
                    G.track("conversationActionManager", a.run(t, {
                        write: async (bt)=>{
                            await Qkm({
                                ctx: t,
                                action: bt,
                                resources: s,
                                blobStore: o,
                                options: u,
                                source: "queued_action"
                            }), await te.write(new _qe({
                                message: {
                                    case: "conversationAction",
                                    value: bt
                                }
                            }));
                        }
                    }))
                ]);
                let gt, ht;
                const ot = {
                    promise: new Promise((bt, St)=>{
                        gt = bt, ht = St;
                    }),
                    resolve: gt,
                    reject: ht
                };
                He.then(ot.resolve).catch(ot.reject), t.canceled ? ot.reject(new T1("User aborted request")) : t.signal.addEventListener("abort", ()=>ot.reject(new T1("User aborted request")), {
                    once: !0
                });
                const Be = ()=>{
                    if (t.signal.aborted) {
                        H();
                        return;
                    }
                    qB1({
                        done: Ie,
                        lingerMs: u.softCancelLingerMs
                    }).then((bt)=>{
                        oPe.info(t, "Soft-cancel transport linger finished", {
                            outcome: bt,
                            requestId: d
                        }), H();
                    });
                };
                O.canceled ? (Be(), ot.reject(new T1("User aborted request"))) : O.signal.addEventListener("abort", ()=>{
                    Be(), ot.reject(new T1("User aborted request"));
                }, {
                    once: !0
                });
                const Ue = await ot.promise, it = Ue[0], qe = Ue[1], pt = Ue[3], dt = (bt)=>bt.reason instanceof Error ? `${bt.reason.name}: ${bt.reason.message}` : String(bt.reason);
                if (pt.status === "rejected") throw new bJ("Checkpoint persistence failed", {
                    cause: pt.reason instanceof Error ? pt.reason : void 0,
                    requestId: d,
                    displayInfo: {
                        title: "Checkpoint persistence failed",
                        detail: dt(pt),
                        isRetryable: !1
                    }
                });
                const ft = Me === "ineligible_terminal_turn";
                if (ft) {
                    const bt = {
                        ...it.status === "rejected" ? {
                            streamSplitter: dt(it)
                        } : {},
                        ...qe.status === "rejected" ? {
                            execHandler: dt(qe)
                        } : {}
                    };
                    Object.keys(bt).length > 0 && oPe.debug(t, "Ignoring handler errors after terminal checkpoint", bt);
                }
                if (it.status === "rejected" && !ft) throw it.reason;
                if (qe.status === "rejected" && !ft) throw qe.reason;
                O.canceled || await this.processUnprocessedMessages(T, a, De, i, r, s, o, c, u, d, h, p, g, V, f, _);
            } finally{
                $e(), Y && (Y[Symbol.dispose](), Y = void 0);
            }
        } catch (T) {
            var k = T, C = !0;
        } finally{
            jxe(S, k, C);
        }
    }
    async processUnprocessedMessages(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f) {
        if (!e.hasUnprocessedMessages()) return;
        const _ = e.getUnprocessedUserMessages(), b = n.getLatestCheckpoint();
        if (!b || _.length === 0) return;
        const y = _[0];
        e.markMessageAsProcessed(y), e.resetStream(), p[Symbol.dispose]();
        const S = n.getLatestCheckpoint();
        try {
            await this.runInternal(t, b, new MI({
                action: {
                    case: "userMessageAction",
                    value: new d5e({
                        userMessage: y
                    })
                }
            }), i, r, s, o, e, n, a, l, c, u, d, h, g, f, 0, "agent.request.queuedMessage");
        } catch (k) {
            const C = n.getLatestCheckpoint();
            throw S === C && e.requeueMessage(y), k;
        }
    }
};

}
