import { Ret, SDv, hqi, wDv, xpo, yDv } from "./A3u.js";
import { Eee, RMn, S$t, S_, Wj, qW, qh, rh, zv } from "./De_3.js";
import { gCh, tQi } from "./ECo.js";
import { Fo, Pk, Se, po, rn, we, wi } from "./HVr.js";
import { ie } from "./actions_2.js";
import { Mtt, p0h, p8e } from "./agentClientService.js";
import { Xde } from "./agentExecProviderService.js";
import { QKv, uCh } from "./agentMigrationFailureClassifier.js";
import { EZv } from "./agentModelRequestRouting.js";
import { Cjt, Ltt } from "./agentResponseAdapter.js";
import { RUe } from "./agentStoreScopePaths.js";
import { Ptt } from "./agentStreamMetadataKey.js";
import { $Fn } from "./agentTraceContext.js";
import { Hm, I1, JVs, KVs, PMe, Wyt, a$t, c$t, l$t, mX, ode, pX, rUi, x1, xd, zVs, zd } from "./agent_pb.js";
import { Sg, jp } from "./aiService.js";
import { Q0e, ub } from "./async.cursor.js";
import { bn, xg } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { AX, Jj } from "./backgroundWorkRegistry.js";
import { F0h, P3n, t1o } from "./blobEncryptionKeyHeader.js";
import { ett, lVt } from "./browser_2.ts";
import { Hko, XSh, YFn, _tt, l_h, oko, ovh, tCt } from "./cgh.js";
import { Hu, Tr, ade } from "./chat_pb.js";
import { IZv } from "./checkpointHandlerOwnership.js";
import { lLe, z1e } from "./cloudEnvironmentTemplateService.js";
import { TCt } from "./cloudProjects.js";
import { $n, vi } from "./commands.js";
import { BU, SN } from "./composerBlobStore.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Cn, qt } from "./configuration.js";
import { Rht, So } from "./constants_8.js";
import { QPe, sko } from "./conversationActionManager.js";
import { CZi, p3n } from "./conversationClassificationService.js";
import { Bw, LR } from "./cursorRules.js";
import { Vr, Yi } from "./environmentService.js";
import { jM } from "./errors.ts";
import { Kr, qs } from "./experimentService.js";
import { PZv } from "./explicitSubagentModels.js";
import { eQi, x0o } from "./fileAppendService.js";
import { Fi, Ii } from "./files.js";
import { m0h } from "./ideClientCapabilities.js";
import { Ml } from "./index.ts";
import { ZW } from "./index_12.ts";
import { Odh } from "./index_15.ts";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { Ze, _t } from "./instantiation.js";
import { Opo, Upo } from "./interactiveChildInbox.js";
import { h8e, xtt } from "./knowledgeBaseService.js";
import { B0 } from "./localAgentRepository.js";
import { Qn, Wn } from "./log.js";
import { eZ } from "./mcpService.js";
import { P1 } from "./mcpServiceTypes.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { gt } from "./network.js";
import { fu, zl } from "./pathService.js";
import { nG } from "./populateConversationFromState.js";
import { IR, xl } from "./privacy_mode_pb.js";
import { Nmt } from "./project-subagents.ts";
import { n3n } from "./projectLineage.js";
import { pS, t2 } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Q3u } from "./reactiveStorageTypes_2.js";
import { tzv } from "./releaseSessionCancelHandle.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { akt, jLn } from "./request-context-blob.ts";
import { ako } from "./requestedModelForComposer.js";
import { MD, w2 } from "./requested_model_pb.js";
import { Tee, Uyt, jW } from "./selected_context_pb.js";
import { Lk } from "./sentry.js";
import { h2 } from "./side-chats.ts";
import { Vn, yn } from "./storage_2.js";
import { XB } from "./trace.js";
import { yv } from "./tracing_2.js";
import { I1h, NZv } from "./transcriptAppend.js";
import { Gbo, L1e, Wbo } from "./transcriptPaths.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ku } from "./utilities_3.js";
import { hu, xf } from "./utils_pb.js";
import { S$, k0e, w0e } from "./utils_pb_2.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
import { D2, a0 } from "./workspaceMetadataService.js";
import { NR } from "./workspaceProjectPaths.js";
import { $$, HGt, KUe, Udh, XUe, pYi } from "./xmo.js";
function kQi(e, t) {
    const n = {
        ...t
    };
    if (e !== void 0 && e.length === F0h && n[P3n] === void 0) {
        const i = Array.from(e, (r)=>r.toString(16).padStart(2, "0")).join("");
        n[P3n] = i;
    }
    return n;
}
function T1o(e) {
    return e.subagentTypeName, (e.selectedModels?.length ?? 0) > 0;
}
async function xZv(e, t, n) {
    const i = n ?? e.get(t);
    i && (await i.flush(), e.get(t) === i && e.delete(t));
}
function AZv(e) {
    const { overrides: t, resolveModelParametersForSubmission: n } = e, i = [];
    for (const r of Q3u){
        const s = t?.[r];
        if (s) switch(s.mode){
            case "default":
                continue;
            case "disabled":
            case "inherit":
                i.push(new l$t({
                    subagentType: r,
                    selection: {
                        case: s.mode,
                        value: !0
                    }
                }));
                continue;
            case "model":
                {
                    const o = RZv({
                        config: s.modelConfig,
                        resolveModelParametersForSubmission: n
                    });
                    if (!o) continue;
                    i.push(new l$t({
                        subagentType: r,
                        selection: {
                            case: "model",
                            value: o
                        }
                    }));
                    continue;
                }
        }
    }
    return i;
}
function RZv(e) {
    const { config: t, resolveModelParametersForSubmission: n } = e;
    if (!t) return;
    const i = t.selectedModels?.[0];
    if (!i || i.modelId === "default") return;
    const r = t.maxMode === !0, s = n(i.modelId, i.parameters, r);
    return new MD({
        modelId: i.modelId,
        maxMode: r,
        parameters: s.map((o)=>new w2({
                id: o.id,
                value: o.value
            }))
    });
}
function DZv(e, t, n) {
    return t === !0 ? !0 : l_h(n) || Hko(e, n);
}
function MZv(e) {
    const { modelDetails: t, flagEnabled: n, availableModels: i, storage: r, resolveModelParametersForSubmission: s } = e, o = t.maxMode === !0;
    if (YFn(t) || !(n || o)) return {};
    const a = r.aiSettings?.modelOverrideEnabled ?? [], c = r.aiSettings?.modelOverrideDisabled ?? [], l = i.filter((u)=>{
        if (!u.supportsAgent || DZv(u.name, u.isUserAdded, r)) return !1;
        let h = u.defaultOn ?? !1;
        return c.includes(u.name) ? h = !1 : a.includes(u.name) && (h = !0), h;
    });
    return l.length === 0 ? {} : {
        selectedSubagentModels: l.map((u)=>{
            const h = s(u.name, o);
            return new MD({
                modelId: u.name,
                maxMode: o,
                parameters: h.map((p)=>new w2({
                        id: p.id,
                        value: p.value
                    }))
            });
        })
    };
}
async function LZv(e, t, n, i) {
    if (!await i.exists(e)) throw new I1h(e);
    if (e.scheme === gt.file) {
        await n.appendFile(e.fsPath, t);
        return;
    }
    const r = wi.fromString(t), s = await i.readFile(e);
    await i.writeFile(e, wi.concat([
        s.value,
        r
    ]));
}
function x1o({ privacyMode: e, mode: t, maxBlobBytes: n, maxInlineDynamicBytes: i }) {
    if (e === xl.UNSPECIFIED || e === xl.NO_STORAGE) return {
        mode: "legacy",
        maxBlobBytes: akt,
        maxInlineDynamicBytes: jLn
    };
    const r = Math.min(Math.max(0, n), akt);
    return {
        mode: t,
        maxBlobBytes: r,
        maxInlineDynamicBytes: Math.min(Math.max(0, i), r)
    };
}
function OZv(e) {
    const t = S$t(e.filter((n)=>n !== void 0));
    return t.size === 1 ? [
        ...t
    ][0] : void 0;
}
function A1h(e, t) {
    const n = OZv(e);
    return n === void 0 ? !1 : gCh(t).has(n);
}
function R1h(e, t, n) {
    return e.some((i)=>A1h(i, t)) ? !0 : (n.lookUpGitReposMissingFromCatalog(e.flat().filter((i)=>i !== void 0)), !1);
}
function FZv(e) {
    return e?.repositoryInfo.filter((t)=>t.isTracked).flatMap((t)=>t.remoteUrls) ?? [];
}
function D1h({ bubble: e, selectedContext: t, mode: n }) {
    const i = e.isSimulatedMsg === !0, r = i && e.simulatedMsgReason !== void 0 && e.simulatedMsgReason !== xd.UNSPECIFIED;
    return new I1({
        text: e.text,
        messageId: e.bubbleId,
        mode: n,
        richText: e.richText,
        selectedContext: t,
        ...i && {
            isSimulatedMsg: !0,
            ...r && {
                simulatedMsgReason: e.simulatedMsgReason,
                simulatedMessageMetadata: e.simulatedMessageMetadata
            }
        }
    });
}
function M1h({ userText: e, richText: t, messageId: n, conversationId: i, selectedContext: r, mode: s, bestOfNGroupId: o, simulatedMsgReason: a, simulatedMessageMetadata: c, sentByVoiceCall: l, systemReminder: u, beforeSubmitPromptHookAdditionalContexts: h, projectDetails: p, customModeIntent: g }) {
    const f = a === void 0 ? g : void 0;
    return new I1({
        text: e,
        messageId: n ?? i,
        selectedContext: r,
        mode: s,
        bestOfNGroupId: o,
        richText: t,
        hookAdditionalContexts: [
            ...h ?? []
        ],
        ...p !== void 0 ? {
            projectDetails: p
        } : {},
        ...f !== void 0 ? {
            customModeIntent: f
        } : {},
        ...a !== void 0 && {
            isSimulatedMsg: !0,
            simulatedMsgReason: a,
            simulatedMessageMetadata: c
        },
        ...l === !0 && {
            sentByVoiceCall: !0
        },
        ...u !== void 0 && u.length > 0 && {
            subagentSystemReminder: u
        }
    });
}
function P1h(e) {
    return e.owningProjectAgentId !== void 0 && e.simulatedMsgReason === void 0 && e.bestOfNGroupId === void 0;
}
async function BZv(e) {
    const t = await crypto.subtle.digest("SHA-256", e);
    return new Uint8Array(t);
}
function PQi(e, t) {
    return e.aborted ? {
        status: "aborted",
        error: O1h
    } : t !== void 0 ? {
        status: "error",
        error: t instanceof Error ? t.message : String(t)
    } : {
        status: "success"
    };
}
function L1h(e) {
    const t = e.data.fullConversationHeadersOnly;
    for(let n = t.length - 1; n >= 0; n--){
        const i = t[n];
        if (i?.type === Tr.HUMAN) return;
        if (i?.type === Tr.AI) {
            const r = e.data.conversationMap[i.bubbleId]?.text?.trim();
            if (r) return r;
        }
    }
}
function UZv(e) {
    const t = e.data.fullConversationHeadersOnly;
    for(let n = t.length - 1; n >= 0; n--){
        const i = t[n];
        if (i?.type !== Tr.HUMAN) continue;
        if (!/^[A-Za-z0-9_-]+$/.test(i.bubbleId)) return;
        const r = i.createdAt ?? e.data.conversationMap[i.bubbleId]?.createdAt, s = new Date(r ?? 0);
        return {
            runId: i.bubbleId,
            pathTimestamp: Number.isNaN(s.getTime()) ? new Date(0) : s
        };
    }
}
function N1h(e, t = {}) {
    let n = !1;
    const i = e.data.fullConversationHeadersOnly;
    for(let r = i.length - 1; r >= 0; r--){
        const s = i[r];
        if (s?.type === Tr.HUMAN) {
            n = e.data.conversationMap[s.bubbleId]?.isSimulatedMsg === !0;
            break;
        }
    }
    return {
        isSimulatedTurn: t.isSimulatedTurn === !0 || n,
        isBestOfNTurn: t.isBestOfNTurn === !0 || e.data.isBestOfNParent === !0 || e.data.isBestOfNSubcomposer === !0
    };
}
var I1o, A1o, AN, R1o, D1o, M1o, O1h, F1h, B1h, O3n, Zde;
export { A1h, A1o, AN, AZv, B1h, BZv, D1h, D1o, DZv, F1h, FZv, I1o, L1h, LZv, M1h, M1o, MZv, N1h, O1h, O3n, OZv, P1h, PQi, R1h, R1o, RZv, T1o, UZv, Zde, kQi, x1o, xZv };
var __wakaru_LQi_initialized = false;
export function LQi() {
if (__wakaru_LQi_initialized) return;
__wakaru_LQi_initialized = true;
"use strict";
x(), ZW(), A1(), ett(), Gp(), zd(), Ml(), jW(), w0e(), Hu(), IR(), hu(), bn(), ub(), Fo(), So(), Se(), tzv(), vi(), Qt(), Js(), Cn(), Fi(), Ze(), Qn(), Vn(), Lk(), yv(), ci(), CZi(), BU(), nl(), n3n(), Sg(), eZ(), Za(), Bw(), Vr(), qs(), xtt(), i0(), ako(), fu(), Ip(), NR(), x0o(), B0(), Ha(), Ku(), QKv(), TCt(), lLe(), a0(), Mtt(), m0h(), t1o(), Xde(), $Fn(), Cjt(), EZv(), IZv(), sko(), PZv(), L1e(), nG(), Upo(), RUe(), NZv(), AX(), I1o = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), A1o = (e)=>{
    throw TypeError(e);
}, AN = (e, t)=>(n, i)=>t(n, i, e), R1o = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && A1o("Object expected");
        var i, r;
        n && (i = t[I1o("asyncDispose")]), i === void 0 && (i = t[I1o("dispose")], n && (r = i)), typeof i != "function" && A1o("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, D1o = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, M1o = Wj("@anysphere/agent-compat-service"), O1h = "User aborted/interrupted manually.", F1h = class {
    constructor(e){
        this.agentClientService = e;
    }
    executeTurn(e) {
        return this.agentClientService.run(e.ctx, e.conversationState, e.action, e.modelDetails, e.interactionListener, e.resourceAccessor, e.blobStore, e.conversationActionManager, e.checkpointHandler, e.mcpTools, e.runOptions);
    }
}, B1h = class {
    constructor(e, t, n, i, r){
        this.conversationId = e, this.priorConversationState = t, this.onCheckpoint = n, this.transcriptWriter = i, this.onTranscriptWritten = r, this.writeDelayer = new xg(1e3), this.hasWrittenOnce = !1, this.handleCheckpoint = async (s, o)=>{
            try {
                this.onCheckpoint && await this.onCheckpoint(o), this.priorConversationState = o, this.transcriptWriter && (this.latestWriteState = {
                    ctx: s,
                    checkpoint: o
                }, this.hasWrittenOnce || (this.hasWrittenOnce = !0, this.writeDelayer.trigger(()=>this.flushWrite())));
            } catch (a) {
                throw console.error("[AgentCompatService] Error storing checkpoint:", a), a;
            }
        }, this.getLatestCheckpoint = ()=>this.priorConversationState, this.writtenRootPromptCount = t.rootPromptMessagesJson.length;
    }
    async flushWrite(e) {
        if (!this.transcriptWriter) return;
        const t = this.latestWriteState ?? (e?.isFinalWrite ? {
            ctx: qh(),
            checkpoint: this.priorConversationState
        } : void 0);
        if (!t) return;
        const { ctx: n, checkpoint: i } = t;
        this.latestWriteState = void 0;
        try {
            const r = await this.transcriptWriter(n, i, {
                ...e,
                previousRootPromptCount: this.writtenRootPromptCount
            });
            typeof r == "number" && (this.writtenRootPromptCount = r), this.onTranscriptWritten?.(this.conversationId);
        } catch (r) {
            console.error("[AgentCompatService] Error writing transcript:", r);
        }
    }
    async flush() {
        this.writeDelayer.cancel(), await this.flushWrite({
            isFinalWrite: !0
        });
    }
}, O3n = 15, Zde = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A, R, D, P, N, O){
        super(), this.storageService = t, this.cursorRulesService = n, this.workspaceContextService = i, this.aiService = r, this.knowledgeBaseService = s, this.modelConfigService = o, this.agentClientService = a, this.instantiationService = c, this.composerDataService = l, this.pathService = u, this.remoteAgentService = h, this.experimentService = p, this.mcpService = g, this.fileService = f, this.conversationClassificationService = v, this.logService = b, this.configurationService = y, this.environmentService = T, this.cursorAuthenticationService = E, this.reactiveStorageService = A, this.fileAppendService = R, this.cloudEnvironmentTemplateService = D, this.workspaceMetadataService = P, this.commandService = N, this.backgroundWorkService = O, this._sessionIdToCancelFn = this._register(new po), this._activeCheckpointHandlers = new Map, this._executionStrategy = e?.executionStrategy ?? new F1h(this.agentClientService), this._register(rn(()=>this._executionStrategy.dispose?.()));
    }
    logSessionReplacement(e, t, n, i) {
        const r = {
            conversationId: t,
            requestId: n,
            abortSource: "session_replaced",
            abortSourceLocation: i
        };
        M1o.error(e, "AgentCompat replacing active session", new Error("session_replaced"), r);
    }
    stampIdeClientCapabilities(e) {
        return p0h(e, {
            isRunningInTest: e.isRunningInTest ?? this.environmentService.enableSmokeTestDriver === !0,
            localLoopGateEnabled: this.readLocalLoopGate()
        });
    }
    canCreateCloudSubagents(e) {
        const t = pS(this.workspaceContextService.getWorkspace());
        return R1h([
            FZv(e),
            HGt(this.workspaceMetadataService.getMetadata(t))
        ], tQi(this.cloudEnvironmentTemplateService.data.value), this.cloudEnvironmentTemplateService);
    }
    readLocalLoopGate() {
        return this.experimentService.checkFeatureGate("agent_host_local_loop", {
            disableExposureLog: !0
        });
    }
    async resolveProjectSubagentDetails(e) {
        const t = _tt({
            composer: e.composer,
            getComposer: (r)=>this.composerDataService.getHandleIfLoaded(r)?.data
        });
        if (!P1h({
            owningProjectAgentId: t,
            simulatedMsgReason: e.simulatedMsgReason,
            bestOfNGroupId: e.bestOfNGroupId
        }) || t === void 0) return;
        const n = await this.resolveAgentStoreFilesDir(t);
        if (n === void 0) return;
        const i = e.composer?.subagentInfo?.subagentTypeName === Nmt;
        return new Wyt({
            ...i ? {
                name: this.resolveProjectDisplayName(t)
            } : {},
            subagent: new zVs({
                storeDir: n
            })
        });
    }
    async resolveProjectSideChatDetails(e) {
        if (e.composer?.subagentInfo?.subagentTypeName !== h2 || e.simulatedMsgReason !== void 0 || e.bestOfNGroupId !== void 0) return;
        const t = e.composer.subagentInfo.sideChatSeedTurnCount;
        if (t === void 0 || e.conversationStateTurnCount !== t) return;
        const n = _tt({
            composer: e.composer,
            getComposer: (r)=>this.composerDataService.getHandleIfLoaded(r)?.data,
            includeSideChats: !0
        });
        if (n === void 0) return;
        const i = await this.resolveAgentStoreFilesDir(n);
        if (i !== void 0) return new Wyt({
            name: this.resolveProjectDisplayName(n),
            sideChat: new KVs({
                storeDir: i
            })
        });
    }
    async resolveAgentStoreFilesDir(e) {
        return hqi(this.commandService, e);
    }
    resolveProjectDisplayName(e) {
        const t = this.composerDataService.getHandleIfLoaded(e)?.data.name?.trim();
        return t || void 0;
    }
    getRequestContextBlobTransportConfig() {
        const e = this.cursorAuthenticationService.granularPrivacyModeRawEnum();
        if (e === xl.UNSPECIFIED || e === xl.NO_STORAGE) return x1o({
            privacyMode: e,
            mode: "legacy",
            maxBlobBytes: akt,
            maxInlineDynamicBytes: jLn
        });
        const t = this.experimentService.getDynamicConfig("nal_request_context_blob_transport_config", {
            disableExposureLog: !1
        });
        return x1o({
            privacyMode: e,
            mode: t.mode,
            maxBlobBytes: t.max_blob_bytes,
            maxInlineDynamicBytes: t.max_inline_dynamic_bytes
        });
    }
    async runAgentLoop(e, t) {
        var n = [];
        try {
            e = R1o(n, S_(e.withName("AgentCompatService.runAgentLoop"))).ctx;
            const { userText: o, richText: a, mode: c, selectedContext: l, requestContext: u, modelDetails: h, generationUUID: p, conversationId: g, messageId: f, abortController: v, onCheckpoint: b, resourceAccessor: y, bestOfNGroupId: T, headers: E, parentRequestId: A, rootParentRequestId: R, parentAgentToolCallId: D, conversationState: P, historyRewrite: N, onHeader: O, composerHandle: F } = t, H = F.composerId, $ = D || F.data.subagentInfo?.toolCallId;
            e = e.with(Ptt, {
                conversationId: g,
                composerId: H,
                requestId: p,
                modelName: h.modelName ?? "",
                ...$ ? {
                    parentToolCallId: $
                } : {},
                ...F.data.createdFromBackgroundAgent?.shouldStreamMessages === !1 ? {
                    resumeAgentStore: !0
                } : {}
            }), e = tCt(e, {
                requestId: p,
                composerId: H
            });
            const W = e, [G, q] = W.withCancel(), z = rn(q);
            this._sessionIdToCancelFn.has(g) && this.logSessionReplacement(e, g, p, "runAgentLoop"), this._sessionIdToCancelFn.set(g, z);
            const Y = this.composerDataService.getComposerData(F);
            let Z = Y?.conversationActionManager;
            Z || (Z = new QPe(g, v, this.instantiationService, p), this.composerDataService.updateComposerDataSetStore(F, (le)=>le("conversationActionManager", Z)));
            const K = Eee(RMn(e.withName("client.network_ttft")));
            let J = !1;
            const ne = (le)=>{
                J || (J = !0, le && K && K.setStatus({
                    code: 2,
                    message: le instanceof Error ? le.message : String(le)
                }), K?.end());
            }, ee = {
                ...t.hooks,
                onFirstToken: ()=>{
                    ne(), t.hooks?.onFirstToken?.();
                }
            };
            let se, re, ue, ce, de;
            try {
                ue = S_(e.withName("AgentCompatService.agentClientService.run")), se = new Ltt(this.instantiationService, F, Z, p, ee);
                const le = this.modelConfigService.getSelectedModelsForComposer(F), ye = T1o({
                    selectedModels: le,
                    subagentTypeName: t.subagentTypeName
                }), _e = ye ? void 0 : new ode({
                    modelId: h.modelName,
                    maxMode: h.maxMode,
                    credentials: this.convertModelDetailsToCredentials(h)
                }), me = await this.resolveProjectSubagentDetails({
                    composer: Y,
                    simulatedMsgReason: t.simulatedMsgReason,
                    bestOfNGroupId: T
                }) ?? await this.resolveProjectSideChatDetails({
                    composer: Y,
                    conversationStateTurnCount: P.turns.length,
                    simulatedMsgReason: t.simulatedMsgReason,
                    bestOfNGroupId: T
                }), Ce = (t.prependUserMessages ?? []).map(({ bubble: vt, selectedContext: ht })=>D1h({
                        bubble: vt,
                        selectedContext: ht,
                        mode: c
                    })), xe = M1h({
                    userText: o,
                    richText: a,
                    messageId: f,
                    conversationId: g,
                    selectedContext: l,
                    mode: c,
                    bestOfNGroupId: T,
                    simulatedMsgReason: t.simulatedMsgReason,
                    simulatedMessageMetadata: t.simulatedMessageMetadata,
                    sentByVoiceCall: t.sentByVoiceCall,
                    systemReminder: t.systemReminder,
                    beforeSubmitPromptHookAdditionalContexts: t.beforeSubmitPromptHookAdditionalContexts,
                    projectDetails: me,
                    customModeIntent: t.customModeIntent
                }), Le = t.conversationActionOverride ?? new x1({
                    action: {
                        case: "userMessageAction",
                        value: new PMe({
                            userMessage: xe,
                            requestContext: u,
                            prependUserMessages: Ce,
                            interruptedPendingToolCallResolutions: t.interruptedPendingToolCallResolutions
                        })
                    }
                }), Be = new SN(this.storageService, g), je = !!t.subagentTypeName, Ge = je ? Y?.subagentInfo?.parentComposerId : void 0;
                ce = Ge, re = this.createCheckpointHandler(g, b, P, {
                    isSubagent: je,
                    parentConversationId: Ge
                });
                const Xe = ye ? this.buildRequestedModel(h, F) : void 0, Ke = this.getSmokeTestEndlessRetries(), et = this.getSmokeTestRetryDelayMs(), We = this.experimentService.checkFeatureGate("nal_agent_retries", {
                    disableExposureLog: !1
                }), it = this.configurationService.getValue(Rht);
                M1o.debug(e, "[AgentCompatService] suggestNextPrompt setting", {
                    suggestNextPrompt: it
                });
                const { selectedSubagentModels: Ne } = this.getSelectedSubagentModelSelections(h), Fe = this.getSubagentModelOverrides(), Qe = this.getRequestContextBlobTransportConfig(), tt = {
                    conversationId: g,
                    conversationGroupId: t.conversationGroupId,
                    agentSessionId: Y?.agentSessionId?.trim() || void 0,
                    generationUUID: p,
                    canCreateCloudSubagents: this.canCreateCloudSubagents(u),
                    parentRequestId: A,
                    rootParentRequestId: R,
                    parentAgentToolCallId: D,
                    headers: kQi(Y?.blobEncryptionKey, E),
                    onHeader: O,
                    requestedModel: Xe,
                    selectedSubagentModels: Ne,
                    subagentModelOverrides: Fe,
                    onConnectionStateChange: t.onConnectionStateChange,
                    onRetryStarting: async (vt, ht)=>{
                        await t.onRetryStarting?.(vt, ht);
                    },
                    onRetryResuming: t.onRetryResuming,
                    stallDetectorConfig: this.getStallDetectorTimeoutConfig(),
                    enableAgentRetries: We,
                    requestContextBlobTransportMode: Qe.mode,
                    requestContextBlobMaxBytes: Qe.maxBlobBytes,
                    requestContextDynamicInlineMaxBytes: Qe.maxInlineDynamicBytes,
                    endlessRetries: Ke,
                    fixedRetryDelayMs: et,
                    suggestNextPrompt: it,
                    startedAsNewProject: Y?.startedAsNewProject === !0 ? !0 : void 0,
                    firstProjectOnboarding: Y?.firstProjectOnboarding === !0 ? !0 : void 0,
                    subagentTypeName: t.subagentTypeName,
                    suppressSubagentProgressUpdateTool: t.suppressSubagentProgressUpdateTool,
                    harness: t.harness,
                    onStall: this._createStallCallback(g),
                    onNetworkPhaseStart: t.onNetworkPhaseStart,
                    onPreSendTimings: t.onPreSendTimings,
                    onRequestContextBytes: t.onRequestContextBytes,
                    onFirstMessage: t.onFirstMessage,
                    onFirstMessageNetwork: t.onFirstMessageNetwork,
                    onFirstNonHeartbeatResponse: t.onFirstNonHeartbeatResponse,
                    onTtftBreakdown: t.onTtftBreakdown,
                    onTurnRuntimeSelected: t.onTurnRuntimeSelected
                };
                t.onTurnDispatch?.(), await this._executionStrategy.executeTurn({
                    ctx: G,
                    conversationId: g,
                    composerHandle: F,
                    conversationState: P,
                    historyRewrite: N,
                    action: Le,
                    requestContextDecoration: t.requestContextDecoration,
                    subagentSmartModeAutoRun: t.subagentSmartModeAutoRun,
                    modelDetails: _e,
                    interactionListener: se,
                    resourceAccessor: y,
                    blobStore: Be,
                    conversationActionManager: Z,
                    checkpointHandler: re,
                    mcpTools: [],
                    runOptions: this.stampIdeClientCapabilities(tt),
                    abortController: v,
                    onInteractionHistorySuperseded: t.onInteractionHistorySuperseded
                }), de = PQi(v.signal);
            } catch (le) {
                throw de = PQi(v.signal, le), ne(le), le instanceof jM && le.displayInfo?.title, le;
            } finally{
                ne(), ue?.[Symbol.dispose](), Pk(se, Z), F.data.conversationActionManager === Z && this.composerDataService.updateComposerDataSetStore(F, (ye)=>ye("conversationActionManager", void 0)), re && await this.unregisterCheckpointHandler(g, re);
                const le = this._sessionIdToCancelFn.get(g) === z;
                de && le && await this.writeTerminalRunArtifactsBestEffort(e, {
                    conversationId: g,
                    parentConversationId: ce,
                    state: re?.getLatestCheckpoint() ?? P,
                    turnEnded: de,
                    composerHandle: F,
                    runId: p,
                    isSimulatedTurn: t.simulatedMsgReason !== void 0,
                    isBestOfNTurn: T !== void 0
                }), le && XSh(this._sessionIdToCancelFn, g, z);
            }
        } catch (s) {
            var i = s, r = !0;
        } finally{
            D1o(n, i, r);
        }
    }
    async resume(e, t) {
        var n = [];
        try {
            e = R1o(n, S_(e.withName("AgentCompatService.resume"))).ctx;
            const { requestContext: o, modelDetails: a, generationUUID: c, conversationId: l, abortController: u, onCheckpoint: h, resourceAccessor: p, headers: g, parentRequestId: f, rootParentRequestId: v, parentAgentToolCallId: b, conversationState: y, onHeader: T, composerHandle: E } = t, A = E.composerId, R = b || E.data.subagentInfo?.toolCallId;
            e = e.with(Ptt, {
                conversationId: l,
                composerId: A,
                requestId: c,
                modelName: a.modelName ?? "",
                ...R ? {
                    parentToolCallId: R
                } : {},
                ...E.data.createdFromBackgroundAgent?.shouldStreamMessages === !1 ? {
                    resumeAgentStore: !0
                } : {}
            }), e = tCt(e, {
                requestId: c,
                composerId: A
            });
            const D = e, [P, N] = D.withCancel(), O = rn(N);
            this._sessionIdToCancelFn.has(l) && this.logSessionReplacement(e, l, c, "resume"), this._sessionIdToCancelFn.set(l, O);
            let H = E.data.conversationActionManager;
            H || (H = new QPe(l, u, this.instantiationService, c), this.composerDataService.updateComposerDataSetStore(E, (Ce)=>Ce("conversationActionManager", H)));
            const $ = new Ltt(this.instantiationService, E, H, c, t.hooks), W = !!t.subagentTypeName, G = this.modelConfigService.getSelectedModelsForComposer(E), q = T1o({
                selectedModels: G,
                subagentTypeName: t.subagentTypeName
            }), z = q ? void 0 : new ode({
                modelId: a.modelName,
                maxMode: a.maxMode,
                credentials: this.convertModelDetailsToCredentials(a)
            }), X = new x1({
                action: {
                    case: "resumeAction",
                    value: new a$t({
                        requestContext: o
                    })
                }
            }), Y = new SN(this.storageService, l), Z = this.composerDataService.getComposerData(E), K = W ? Z?.subagentInfo?.parentComposerId : void 0, J = this.createCheckpointHandler(l, h, y, {
                isSubagent: W,
                parentConversationId: K
            }), ne = this.experimentService.checkFeatureGate("nal_agent_retries", {
                disableExposureLog: !1
            }), ee = q ? this.buildRequestedModel(a, E) : void 0, se = this.getSmokeTestEndlessRetries(), re = this.getSmokeTestRetryDelayMs(), { selectedSubagentModels: ue } = this.getSelectedSubagentModelSelections(a), ce = this.getSubagentModelOverrides(), de = this.getRequestContextBlobTransportConfig(), le = {
                conversationId: l,
                agentSessionId: Z?.agentSessionId?.trim() || void 0,
                generationUUID: c,
                canCreateCloudSubagents: this.canCreateCloudSubagents(o),
                parentRequestId: f,
                rootParentRequestId: v,
                parentAgentToolCallId: b,
                headers: kQi(Z?.blobEncryptionKey, g),
                onHeader: T,
                requestedModel: ee,
                selectedSubagentModels: ue,
                subagentModelOverrides: ce,
                onRetryStarting: async (Ce, xe)=>{
                    await t.onRetryStarting?.(Ce, xe);
                },
                onRetryResuming: t.onRetryResuming,
                stallDetectorConfig: this.getStallDetectorTimeoutConfig(),
                enableAgentRetries: ne,
                requestContextBlobTransportMode: de.mode,
                requestContextBlobMaxBytes: de.maxBlobBytes,
                requestContextDynamicInlineMaxBytes: de.maxInlineDynamicBytes,
                endlessRetries: se,
                fixedRetryDelayMs: re,
                suggestNextPrompt: this.configurationService.getValue(Rht),
                startedAsNewProject: Z?.startedAsNewProject === !0 ? !0 : void 0,
                firstProjectOnboarding: Z?.firstProjectOnboarding === !0 ? !0 : void 0,
                subagentTypeName: t.subagentTypeName,
                suppressSubagentProgressUpdateTool: t.suppressSubagentProgressUpdateTool,
                harness: t.harness,
                onStall: this._createStallCallback(l),
                onNetworkPhaseStart: t.onNetworkPhaseStart,
                onRequestContextBytes: t.onRequestContextBytes,
                onFirstMessage: t.onFirstMessage,
                onFirstMessageNetwork: t.onFirstMessageNetwork,
                onFirstNonHeartbeatResponse: t.onFirstNonHeartbeatResponse,
                onTtftBreakdown: t.onTtftBreakdown,
                onTurnRuntimeSelected: t.onTurnRuntimeSelected
            }, ye = S_(e.withName("AgentCompatService.agentClientService.resume")), _e = this._executionStrategy.executeTurn({
                ctx: P,
                conversationId: l,
                composerHandle: E,
                conversationState: y,
                action: X,
                requestContextDecoration: t.requestContextDecoration,
                subagentSmartModeAutoRun: t.subagentSmartModeAutoRun,
                modelDetails: z,
                interactionListener: $,
                resourceAccessor: p,
                blobStore: Y,
                conversationActionManager: H,
                checkpointHandler: J,
                mcpTools: [],
                runOptions: this.stampIdeClientCapabilities(le),
                abortController: u,
                onInteractionHistorySuperseded: t.onInteractionHistorySuperseded
            });
            let me;
            try {
                await _e, me = PQi(u.signal);
            } catch (Ce) {
                throw me = PQi(u.signal, Ce), Ce instanceof jM && Ce.displayInfo?.title, Ce;
            } finally{
                ye[Symbol.dispose](), Pk($, H), E.data.conversationActionManager === H && this.composerDataService.updateComposerDataSetStore(E, (xe)=>xe("conversationActionManager", void 0)), await this.unregisterCheckpointHandler(l, J);
                const Ce = this._sessionIdToCancelFn.get(l) === O;
                me && Ce && await this.writeTerminalRunArtifactsBestEffort(e, {
                    conversationId: l,
                    parentConversationId: K,
                    state: J.getLatestCheckpoint() ?? y,
                    turnEnded: me,
                    composerHandle: E,
                    runId: c
                }), Ce && XSh(this._sessionIdToCancelFn, l, O);
            }
        } catch (s) {
            var i = s, r = !0;
        } finally{
            D1o(n, i, r);
        }
    }
    _flattenHandlerStates(e, t) {
        if (!e) return {};
        const n = {};
        for (const [i, r] of Object.entries(e))n[`handler_${i}_state`] = r.state, n[`handler_${i}_duration_ms`] = r.durationMs, r.error && !t && (n[`handler_${i}_error`] = r.error);
        return n;
    }
    _createStallCallback(e) {
        const t = Zde.STALL_LOG_TOKEN;
        return (n)=>{
            const i = n.type === "heartbeat_only" ? "stream_stall_heartbeat_only" : "stream_stall", r = n.type === "heartbeat_only" ? n.lastMeaningfulActivityAgoMs : n.lastActivityAgoMs;
            XB((s)=>{
                s.setFingerprint([
                    "vscode-stall",
                    i,
                    "any_stream_activity"
                ]), s.setLevel("warning"), s.setTag("hang.category", i), s.setTag("hang.waiting_for", "any_stream_activity"), n.modelName && s.setTag("hang.model_name", n.modelName), n.type === "heartbeat_only" && s.setTag("hang.heartbeats_only", "true");
                const o = this.cursorAuthenticationService.privacyMode();
                s.setContext("hang_details", {
                    category: i,
                    waiting_for: "any_stream_activity",
                    last_activity_ago_ms: r,
                    last_activity_type: n.lastActivityType,
                    request_id: n.requestId,
                    conversation_id: e,
                    model_name: n.modelName,
                    heartbeats_only: n.type === "heartbeat_only",
                    last_heartbeat_ago_ms: n.lastServerHeartbeatAgoMs,
                    stream_open: !n.streamEnded,
                    lastMeaningfulActivityAgoMs: n.lastMeaningfulActivityAgoMs,
                    lastInboundMessageType: n.lastInboundMessageType,
                    lastOutboundMessageType: n.lastOutboundMessageType,
                    aborted: n.aborted,
                    lastClientHeartbeatAgoMs: n.lastClientHeartbeatAgoMs,
                    thresholdMs: n.thresholdMs,
                    ...this._flattenHandlerStates(n.handlers, o)
                });
                const a = i === "stream_stall_heartbeat_only" ? `VSCode stall: heartbeats only, no meaningful data for ${Math.round(r / 1e3)}s` : `VSCode stall: no activity for ${Math.round(r / 1e3)}s`, c = new Error(a);
                c.name = "VSCodeStallDetected", t2(c);
            });
        };
    }
    getStallDetectorTimeoutConfig() {
        const e = this.environmentService.smokeTestNalStreamTimeoutMs;
        if (e !== void 0) return {
            advisoryTimeoutMs: void 0,
            failTimeoutMs: e
        };
        const t = this.experimentService.getDynamicConfig("nal_stall_detector_timeout_config", {
            disableExposureLog: !1
        });
        return {
            advisoryTimeoutMs: t.advisoryTimeoutMs,
            failTimeoutMs: t.failTimeoutMs
        };
    }
    getSmokeTestEndlessRetries() {
        if (this.environmentService.smokeTestNalEndlessRetries) return ()=>!0;
    }
    getSmokeTestRetryDelayMs() {
        return this.environmentService.smokeTestNalRetryDelayMs;
    }
    getSelectedSubagentModelSelections(e) {
        return MZv({
            modelDetails: e,
            flagEnabled: this.experimentService.checkFeatureGate("explicit_subagent_models", {
                disableExposureLog: !1
            }),
            availableModels: this.modelConfigService.getAvailableDefaultModels(),
            storage: this.reactiveStorageService.applicationUserPersistentStorage,
            resolveModelParametersForSubmission: (t, n)=>this.modelConfigService.resolveModelParametersForSubmission(t, void 0, n)
        });
    }
    getSubagentModelOverrides() {
        const e = rh(this.storageService, "subagentModelOverrides");
        return AZv({
            overrides: e,
            resolveModelParametersForSubmission: (t, n, i)=>this.modelConfigService.resolveModelParametersForSubmission(t, n, i)
        });
    }
    buildRequestedModel(e, t) {
        return oko({
            composerDataService: this.composerDataService,
            modelConfigService: this.modelConfigService,
            logService: this.logService
        }, e, t);
    }
    convertModelDetailsToCredentials(e) {
        return ovh(e);
    }
    async summarize(e, t) {
        const { composerId: n, resourceAccessor: i, abortController: r, onCheckpoint: s } = t, o = await this.composerDataService.getComposerHandleById(n);
        if (!o) throw new Error(`No composer data handle found for composer: ${n}`);
        const a = this.composerDataService.getComposerData(o);
        if (!a) throw new Error(`No composer found for ID: ${n}`);
        const c = new SN(this.storageService, n), l = a.conversationState;
        if (!l) throw new Error(`No conversation state found for composer: ${n}`);
        const u = this.createCheckpointHandler(n, s, l), h = new x1({
            action: {
                case: "summarizeAction",
                value: new rUi({})
            }
        }), p = new xf({
            modelName: a.modelConfig?.modelName,
            maxMode: !1
        }), g = this.modelConfigService.getSelectedModelsForComposer(o), f = T1o({
            selectedModels: g,
            subagentTypeName: void 0
        }), v = f ? void 0 : new ode({
            modelId: a.modelConfig?.modelName,
            maxMode: !1,
            credentials: this.convertModelDetailsToCredentials(p)
        }), b = f ? this.buildRequestedModel(p, o) : void 0, y = zn(), T = new QPe(n, r, this.instantiationService, y);
        this.composerDataService.updateComposerDataSetStore(o, (R)=>{
            R("conversationActionManager", T), R("chatGenerationUUID", y);
        });
        const E = new Ltt(this.instantiationService, o, T, y), A = this._executionStrategy.executeTurn({
            ctx: e,
            conversationId: n,
            composerHandle: o,
            conversationState: l,
            action: h,
            modelDetails: v,
            interactionListener: E,
            resourceAccessor: i,
            blobStore: c,
            conversationActionManager: T,
            checkpointHandler: u,
            mcpTools: [],
            runOptions: this.stampIdeClientCapabilities({
                conversationId: n,
                agentSessionId: a.agentSessionId?.trim() || void 0,
                generationUUID: y,
                headers: kQi(a.blobEncryptionKey),
                stallDetectorConfig: this.getStallDetectorTimeoutConfig(),
                requestedModel: b,
                subagentModelOverrides: [],
                onStall: this._createStallCallback(n),
                onTurnRuntimeSelected: t.onTurnRuntimeSelected
            }),
            abortController: r
        });
        try {
            await A;
        } catch (R) {
            throw R instanceof jM && R.displayInfo?.title, R;
        } finally{
            Pk(E, T), o.data.conversationActionManager === T && this.composerDataService.updateComposerDataSetStore(o, (R)=>R("conversationActionManager", void 0)), o.data.chatGenerationUUID === y && this.composerDataService.updateComposerDataSetStore(o, (R)=>R("chatGenerationUUID", void 0)), await this.unregisterCheckpointHandler(n, u);
        }
    }
    async createTranscriptStore(e, t) {
        const n = this.workspaceContextService.getWorkspace(), i = await $$(n, this.pathService), r = i.fsPath, s = t?.isSubagent === !0, o = t?.parentConversationId, a = async (p, g)=>{
            const f = this.getProjectRelativeFileUris(i, p);
            if (f) {
                try {
                    await this.fileService.createFolder(f.parentDir);
                } catch  {}
                await this.fileService.writeFile(f.uri, wi.fromString(g));
            }
        }, c = new SN(this.storageService, e), l = s ? "subagent" : "primary", u = (p, g)=>pYi({
                conversationId: p,
                ext: g,
                kind: l,
                parentConversationId: o
            }), h = async (p, g)=>{
            const f = this.getProjectRelativeFileUris(i, p);
            if (!f) return;
            const v = !await this.transcriptFileEndsWithNewline(f.uri);
            await LZv(f.uri, v ? `
${g}` : g, this.fileAppendService, this.fileService);
        };
        return new Odh(r, c, a, {
            writeText: !1,
            writeJsonl: !0,
            pathResolver: u,
            appendFile: h
        });
    }
    async transcriptFileEndsWithNewline(e) {
        try {
            const t = await this.fileService.stat(e);
            return t.size ? (await this.fileService.readFile(e, {
                position: t.size - 1,
                length: 1
            })).value.toString() === `
` : !0;
        } catch  {
            return !0;
        }
    }
    getProjectRelativeFileUris(e, t) {
        const n = t.split("/").filter(Boolean);
        if (n.length !== 0) return {
            uri: Ee.joinPath(e, ...n),
            parentDir: n.length > 1 ? Ee.joinPath(e, ...n.slice(0, -1)) : e
        };
    }
    createTranscriptWriter(e, t) {
        return async (n, i, r)=>{
            const o = r?.isFinalWrite === !0 && this.experimentService.checkFeatureGate("x-chat-context", {
                disableExposureLog: !0
            }), a = await this.createTranscriptStore(e, {
                ...t
            }), c = o ? {
                overviewFactory: (l)=>this.agentClientService.createTranscriptOverview(n, l)
            } : void 0;
            return a.writeFromStateIncremental(n, i, e, r?.previousRootPromptCount ?? 0, c);
        };
    }
    createCheckpointHandler(e, t, n, i) {
        const r = i?.skipTranscript ? void 0 : this.createTranscriptWriter(e, {
            isSubagent: i?.isSubagent,
            parentConversationId: i?.parentConversationId
        }), s = new B1h(e, n, t, r, (o)=>{
            this.conversationClassificationService.classifyConversationsByIds([
                o
            ]);
        });
        return this._activeCheckpointHandlers.set(e, s), s;
    }
    async unregisterCheckpointHandler(e, t) {
        await xZv(this._activeCheckpointHandlers, e, t);
    }
    async writeTurnEndedTranscriptBestEffort(e, t) {
        try {
            await (await this.createTranscriptStore(t.conversationId, {
                isSubagent: !!t.parentConversationId,
                parentConversationId: t.parentConversationId
            })).writeFromStateIncremental(e, t.state, t.conversationId, t.state.rootPromptMessagesJson.length, {
                turnEnded: t.turnEnded
            });
        } catch (n) {
            this.logService.warn("[AgentCompatService] Failed to write turn-ended transcript", {
                conversationId: t.conversationId,
                error: n
            });
        }
    }
    async writeTerminalRunArtifactsBestEffort(e, t) {
        await this.writeTurnEndedTranscriptBestEffort(e, {
            conversationId: t.conversationId,
            parentConversationId: t.parentConversationId,
            state: t.state,
            turnEnded: t.turnEnded
        }), await this.deliverInteractiveChildCompletionBestEffort({
            composerHandle: t.composerHandle,
            childComposerId: t.conversationId,
            runId: t.runId,
            turnEnded: t.turnEnded,
            isSimulatedTurn: t.isSimulatedTurn,
            isBestOfNTurn: t.isBestOfNTurn
        });
    }
    async deliverInteractiveChildCompletionBestEffort(e) {
        try {
            const t = this.experimentService.checkFeatureGate(Opo, {
                disableExposureLog: !0
            }), n = this.composerDataService.getComposerData(e.composerHandle), i = n?.subagentInfo?.parentComposerId;
            if (i === void 0) return;
            const r = N1h(e.composerHandle, e), s = _tt({
                composer: n,
                getComposer: (v)=>this.composerDataService.getHandleIfLoaded(v)?.data,
                includeSideChats: !0
            }), o = e.composerHandle.data.fullConversationHeadersOnly.filter((v)=>v.type === Tr.HUMAN), a = o.at(-1), c = a === void 0 ? void 0 : e.composerHandle.data.conversationMap[a.bubbleId], l = o.length > 1 && c !== void 0 && c.isSimulatedMsg !== !0 && c.subagentSpawnTaskToolCallId === void 0, u = yDv({
                inboxGateEnabled: t,
                wakeEnabled: this.environmentService.isGlass === !0,
                subagentTypeName: n?.subagentInfo?.subagentTypeName,
                isTaskOrigin: n?.subagentInfo?.subagentType === ade.TASK,
                currentTurnIsDirectUserEntered: l,
                parentComposerId: i,
                owningProjectAgentId: s,
                ...r
            });
            if (u === "none") return;
            const h = UZv(e.composerHandle), p = L1h(e.composerHandle), g = e.turnEnded.status === "success" ? void 0 : e.turnEnded.error;
            if (u === "background-task") {
                this.backgroundWorkService.enqueue(SDv({
                    parentComposerId: i,
                    childComposerId: e.childComposerId,
                    runId: e.runId,
                    turnId: h?.runId,
                    currentTurnIsDirectUserEntered: l,
                    status: e.turnEnded.status,
                    title: this.composerDataService.getComposerTitle(e.childComposerId),
                    errorText: g,
                    resultText: p
                }));
                return;
            }
            const f = await this.resolveAgentStoreFilesDir(i);
            if (f === void 0) return;
            await wDv(this.fileService, {
                parentStoreFilesDir: f,
                turn: {
                    parentComposerId: i,
                    childComposerId: e.childComposerId,
                    runId: h?.runId ?? e.runId,
                    status: e.turnEnded.status,
                    errorText: g,
                    resultText: p,
                    finishedAt: new Date,
                    pathTimestamp: h?.pathTimestamp
                }
            });
        } catch (t) {
            this.logService.warn("[AgentCompatService] Failed to persist or wake interactive-child completion", {
                conversationId: e.childComposerId,
                error: t
            });
        }
    }
    async flushTranscriptForConversation(e) {
        const t = this._activeCheckpointHandlers.get(e);
        if (t) try {
            await t.flush();
        } catch (n) {
            this.logService.warn("[AgentCompatService] Failed to flush transcript for conversation", {
                conversationId: e,
                error: n
            });
        }
    }
    async getConversationStateForCloudTransfer(e, t) {
        const n = qh();
        let i = t;
        if (!i) {
            const b = this._activeCheckpointHandlers.get(e);
            b && (i = b.getLatestCheckpoint());
        }
        const r = new SN(this.storageService, e);
        if (!i) {
            const b = this.composerDataService.getHandleIfLoaded(e);
            i = b ? this.composerDataService.getComposerData(b)?.conversationState : void 0;
        }
        if (!i) {
            console.warn("[AgentCompatService] No conversation state found for cloud transfer", {
                composerId: e
            });
            return;
        }
        const s = Hm.fromBinary(i.toBinary()), o = new Set, a = new Map, c = new Set, l = [], u = (b)=>{
            b && b.length > 0 && o.add(zv(b));
        }, h = (b)=>{
            for (const y of b.turns)u(y);
            b.summary && u(b.summary), u(b.summaryArchive);
            for (const y of b.todos)u(y);
            b.plan && u(b.plan);
            for (const [, y] of Object.entries(b.fileStates))u(y);
            for (const y of Object.values(b.fileStatesV2))u(y.content), u(y.initialContent);
            for (const y of b.summaryArchives)u(y);
            for (const y of b.rootPromptMessagesJson)u(y);
            for (const y of Object.values(b.subagentStates))y.conversationState && h(y.conversationState);
            for (const y of Object.values(b.subagentStateRefs))if (u(y), y && y.length > 0) {
                const T = zv(y);
                c.has(T) || (c.add(T), l.push(T));
            }
        };
        h(s);
        const p = new Set, g = async ()=>{
            for (const b of o)if (!p.has(b)) {
                p.add(b);
                try {
                    const y = qW(b), T = await r.getBlob(n, y);
                    T && a.set(b, T);
                } catch (y) {
                    this.logService.error("[AgentCompatService] Failed to fetch blob for cloud transfer", {
                        blobIdHex: b,
                        error: y
                    });
                }
            }
        };
        for(await g(); l.length > 0;){
            const b = l.splice(0);
            for (const y of b){
                const T = a.get(y);
                if (T) try {
                    const E = c$t.fromBinary(T);
                    E.conversationState && h(E.conversationState);
                } catch (E) {
                    this.logService.error("[AgentCompatService] Failed to decode subagent state blob for cloud transfer", {
                        blobIdHex: y,
                        error: E
                    });
                }
            }
            await g();
        }
        await this.collectNestedBlobs(n, r, a, new Set(o)), await this.collectConversationStateGraphBlobs(n, s, r, a);
        try {
            await this.embedPastChatTranscriptsForCloudTransfer(a);
        } catch (b) {
            console.warn("[AgentCompatService] Failed to embed past chat transcripts for cloud transfer", {
                composerId: e,
                error: b
            });
        }
        try {
            await this.embedPlanSelectionsForCloudTransfer(a);
        } catch (b) {
            console.warn("[AgentCompatService] Failed to embed plan selections for cloud transfer", {
                composerId: e,
                error: b
            });
        }
        try {
            await this.embedImplicitFileMentionsForCloudTransfer(a);
        } catch (b) {
            console.warn("[AgentCompatService] Failed to embed implicit file mentions for cloud transfer", {
                composerId: e,
                error: b
            });
        }
        const f = s.toBinary(), v = await BZv(f);
        return a.set(zv(v), f), {
            conversationStateStructure: s,
            blobs: a
        };
    }
    static encodeTranscriptFilename(e) {
        return `${encodeURIComponent(e).replace(/%/g, "_")}.txt`;
    }
    static getBasename(e) {
        const n = e.replace(/\\/g, "/").split("/");
        return n[n.length - 1] ?? e;
    }
    static countLinesAndLastColumn(e) {
        const t = e.split(`
`), n = Math.max(1, t.length), i = (t[t.length - 1]?.length ?? 0) + 1;
        return {
            endLine: n,
            endCol: i
        };
    }
    static extractAtMentionTokens(e) {
        const t = [], n = /@([^\s]+)/g;
        let i;
        for(; (i = n.exec(e)) !== null;){
            const s = (i[1] ?? "").replace(/[)\],.?!;:]+$/g, "");
            s.trim().length > 0 && t.push(s);
        }
        return t;
    }
    async embedPastChatTranscriptsForCloudTransfer(e) {
        const t = this.workspaceContextService.getWorkspace(), n = await XUe(t, this.pathService), i = new Map, r = new Q0e(O3n);
        for (const [s, o] of e){
            await r.yieldIfExhausted();
            let a;
            try {
                a = I1.fromBinary(o);
            } catch  {
                continue;
            }
            const c = a.selectedContext, l = c?.pastChats ?? [];
            if (!c || l.length === 0) continue;
            c.codeSelections || (c.codeSelections = []);
            const u = c.codeSelections, h = new Set(u.map((g)=>g.relativePath).filter((g)=>typeof g == "string"));
            let p = !1;
            for (const g of l){
                const f = g.agentId ?? "";
                if (f.trim().length === 0) continue;
                const v = lVt(f), b = Zde.encodeTranscriptFilename(f), y = b.replace(/\.txt$/, ""), T = `agent-transcripts/${v}/${v}.txt`, E = `${y}.jsonl`, A = `agent-transcripts/${v}/${v}.jsonl`, R = `agent-transcripts/${E}`, D = `agent-transcripts/${b}`;
                if (h.has(A) || h.has(T) || h.has(R) || h.has(D)) continue;
                const P = i.get(f);
                let N = P?.text, O = P?.relativePath ?? A, F = P?.uri ?? Ee.joinPath(n, v, `${v}.jsonl`);
                if (N === void 0) {
                    const G = await Udh(this.fileService, KUe({
                        transcriptsDir: n,
                        conversationId: f,
                        preferJsonl: !0
                    }), {
                        maxBytes: Wbo,
                        headBytes: Gbo
                    });
                    if (G) {
                        N = G.content, F = G.uri;
                        const q = Ee.joinPath(n, v, `${v}.jsonl`), z = Ee.joinPath(n, v, `${v}.txt`), X = Ee.joinPath(n, E), Y = Ee.joinPath(n, b);
                        O = new Map([
                            [
                                q.path,
                                A
                            ],
                            [
                                z.path,
                                T
                            ],
                            [
                                X.path,
                                R
                            ],
                            [
                                Y.path,
                                D
                            ]
                        ]).get(G.uri.path) ?? A;
                    } else N = "";
                    i.set(f, {
                        text: N,
                        uri: F,
                        relativePath: O
                    });
                }
                if (N.trim().length === 0) continue;
                const { endLine: H, endCol: $ } = Zde.countLinesAndLastColumn(N), W = new Uyt({
                    content: N,
                    path: F.toString(),
                    relativePath: O,
                    range: new k0e({
                        start: new S$({
                            line: 1,
                            column: 1
                        }),
                        end: new S$({
                            line: H,
                            column: $
                        })
                    })
                });
                u.push(W), h.add(A), h.add(T), h.add(R), h.add(D), p = !0;
            }
            if (p) try {
                e.set(s, a.toBinary());
            } catch (g) {
                console.warn("[AgentCompatService] Failed to re-serialize UserMessage after embedding transcripts", {
                    blobIdHex: s,
                    error: g
                });
            }
        }
    }
    async embedPlanSelectionsForCloudTransfer(e) {
        const t = [], n = new Q0e(O3n);
        for (const [i, r] of e){
            await n.yieldIfExhausted();
            let s;
            try {
                s = pX.fromBinary(r);
            } catch  {
                continue;
            }
            if (s.message.case !== "toolCall") continue;
            const o = s.message.value;
            if (o.tool.case !== "createPlanToolCall") continue;
            const a = o.tool.value, c = a.args?.plan ?? "", l = a.result?.planUri ?? "", u = Zde.getBasename(l);
            c.trim().length === 0 || l.trim().length === 0 || u.trim().length === 0 || t.push({
                planUri: l,
                planText: c,
                basename: u
            });
        }
        if (t.length !== 0) for (const [i, r] of e){
            await n.yieldIfExhausted();
            let s;
            try {
                s = I1.fromBinary(r);
            } catch  {
                continue;
            }
            const o = s.text ?? "";
            if (o.trim().length === 0) continue;
            const a = t.find((v)=>!!(o.includes(v.planUri) || o.includes(v.basename)));
            if (!a) continue;
            s.selectedContext || (s.selectedContext = new Tee);
            const c = s.selectedContext;
            c.codeSelections || (c.codeSelections = []);
            const l = c.codeSelections;
            if (l.some((v)=>{
                const b = v.relativePath ?? "", y = v.path ?? "";
                return b.includes(a.basename) || y.includes(a.basename);
            })) continue;
            const h = `.cursor/plans/${a.basename}`, p = a.planText, { endLine: g, endCol: f } = Zde.countLinesAndLastColumn(p);
            l.push(new Uyt({
                content: p,
                path: a.planUri,
                relativePath: h,
                range: new k0e({
                    start: new S$({
                        line: 1,
                        column: 1
                    }),
                    end: new S$({
                        line: g,
                        column: f
                    })
                })
            }));
            try {
                e.set(i, s.toBinary());
            } catch (v) {
                console.warn("[AgentCompatService] Failed to re-serialize UserMessage after embedding plan selection", {
                    blobIdHex: i,
                    error: v
                });
            }
        }
    }
    async embedImplicitFileMentionsForCloudTransfer(e) {
        const n = this.workspaceContextService.getWorkspace().folders.map((l)=>l.uri);
        if (n.length === 0) return;
        const i = 512e3, r = 24e3, s = 6, o = new Set([
            ".ts",
            ".tsx",
            ".js",
            ".jsx",
            ".json",
            ".md",
            ".txt",
            ".proto",
            ".yml",
            ".yaml",
            ".toml",
            ".sql"
        ]), a = async (l)=>{
            for (const u of n){
                const h = Ee.joinPath(u, l);
                try {
                    const p = await this.fileService.readFile(h);
                    if (p.value.byteLength > i) return;
                    const g = p.value.toString();
                    return g.includes("\0") ? void 0 : {
                        uri: h,
                        content: g
                    };
                } catch  {}
            }
        }, c = new Q0e(O3n);
        for (const [l, u] of e){
            await c.yieldIfExhausted();
            let h;
            try {
                h = I1.fromBinary(u);
            } catch  {
                continue;
            }
            const p = h.text ?? "";
            if (p.trim().length === 0) continue;
            const g = Zde.extractAtMentionTokens(p).filter((T)=>T.includes("/") || T.includes("\\")).slice(0, s);
            if (g.length === 0) continue;
            h.selectedContext || (h.selectedContext = new Tee);
            const f = h.selectedContext;
            f.codeSelections || (f.codeSelections = []);
            const v = f.codeSelections, b = new Set(v.map((T)=>T.relativePath).filter((T)=>typeof T == "string"));
            let y = !1;
            for (const T of g){
                const E = T.replace(/\\/g, "/"), A = E.includes(".") ? E.slice(E.lastIndexOf(".")).toLowerCase() : "";
                if (!o.has(A) || b.has(E)) continue;
                const R = await a(E);
                if (!R) continue;
                const D = R.content, P = D.length > r ? `${D.slice(0, r)}

... (truncated) ...
` : D, { endLine: N, endCol: O } = Zde.countLinesAndLastColumn(P);
                v.push(new Uyt({
                    content: P,
                    path: R.uri.toString(),
                    relativePath: E,
                    range: new k0e({
                        start: new S$({
                            line: 1,
                            column: 1
                        }),
                        end: new S$({
                            line: N,
                            column: O
                        })
                    })
                })), b.add(E), y = !0;
            }
            if (y) try {
                e.set(l, h.toBinary());
            } catch (T) {
                console.warn("[AgentCompatService] Failed to re-serialize UserMessage after embedding implicit file mentions", {
                    blobIdHex: l,
                    error: T
                });
            }
        }
    }
    async collectConversationStateGraphBlobs(e, t, n, i) {
        const r = {
            getBlob: async (o, a)=>{
                const c = zv(a), l = i.get(c);
                if (l) return l;
                const u = await n.getBlob(o, a);
                if (!u) throw new Error(`${uCh}: ${c}`);
                return i.set(c, u), u;
            }
        }, s = await Ret(t, r);
        for (const o of s)await r.getBlob(e, o);
    }
    async collectNestedBlobs(e, t, n, i, r = new Set) {
        const s = new Set, o = (u)=>{
            if (u && u.length > 0) {
                const h = zv(u);
                i.has(h) || s.add(h);
            }
        }, a = (u)=>{
            u && u.length > 0 && r.add(zv(u)), o(u);
        }, c = (u)=>{
            const h = I1.fromBinary(u);
            if (!h.selectedContext) return !1;
            const p = [];
            xpo(h.selectedContext, p);
            for (const g of p)o(g);
            return !0;
        }, l = new Q0e(O3n);
        for (const [u, h] of n)if (!i.has(u + ":parsed")) {
            i.add(u + ":parsed"), await l.yieldIfExhausted();
            try {
                const p = mX.fromBinary(h);
                let g = !1;
                if (p.turn.case === "agentConversationTurn") {
                    g = !0;
                    const f = p.turn.value;
                    a(f.userMessage);
                    for (const v of f.steps)o(v);
                } else if (p.turn.case === "shellConversationTurn") {
                    g = !0;
                    const f = p.turn.value;
                    o(f.shellCommand), o(f.shellOutput);
                }
                if (g) continue;
            } catch  {}
            if (r.has(u)) try {
                c(h);
                continue;
            } catch  {}
            try {
                if (pX.fromBinary(h).message.case) continue;
            } catch  {}
            try {
                const p = JVs.fromBinary(h);
                let g = !1;
                for (const f of p.summarizedMessages)g = !0, o(f);
                if (p.summaryMessage && p.summaryMessage.length > 0 && (g = !0, o(p.summaryMessage)), g) continue;
            } catch  {}
            try {
                if (c(h)) continue;
            } catch  {}
        }
        if (s.size > 0) {
            for (const u of s){
                i.add(u);
                try {
                    const h = qW(u), p = await t.getBlob(e, h);
                    p && n.set(u, p);
                } catch (h) {
                    console.error("[AgentCompatService] Failed to fetch nested blob", {
                        blobIdHex: u,
                        error: h
                    });
                }
            }
            await this.collectNestedBlobs(e, t, n, i, r);
        }
    }
}, Zde.STALL_LOG_TOKEN = "stall-detector", Zde = ie([
    AN(1, yn),
    AN(2, LR),
    AN(3, Jn),
    AN(4, jp),
    AN(5, h8e),
    AN(6, QS),
    AN(7, p8e),
    AN(8, _t),
    AN(9, Zs),
    AN(10, zl),
    AN(11, Kd),
    AN(12, Kr),
    AN(13, P1),
    AN(14, Ii),
    AN(15, p3n),
    AN(16, Wn),
    AN(17, qt),
    AN(18, Yi),
    AN(19, na),
    AN(20, Do),
    AN(21, eQi),
    AN(22, z1e),
    AN(23, D2),
    AN(24, $n),
    AN(25, Jj)
], Zde);

}
