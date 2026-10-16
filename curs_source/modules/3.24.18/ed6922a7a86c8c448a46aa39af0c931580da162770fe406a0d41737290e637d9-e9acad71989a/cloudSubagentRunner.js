import { td } from "./A3u.js";
import { Mse, qh, t0 } from "./De_3.js";
import { Rl, Se, ja, si, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { jle } from "./agent-store-ids.ts";
import { LQi } from "./agentCompatService.js";
import { V6 } from "./agentRepositoryService.js";
import { Kv, Rb } from "./agentRepositoryServiceTypes.js";
import { hSh } from "./agentStoreSubagentMount.js";
import { Hm, I1, mX, pX, zd } from "./agent_pb.js";
import { Sg, jp } from "./aiService.js";
import { Za, na } from "./authenticationService.js";
import { MWt, SUe, Yd, Zc, hm, kUe, luo, pPe, qVi, wUe, yUe } from "./background_composer_pb.js";
import { Dbh, Dqv, KSh, Mqv, _tt, i3n, lSh, sCo, wVt, wZi } from "./cgh.js";
import { bU } from "./cloud-agent.ts";
import { swt, tGt } from "./cloudAgentCacheService.js";
import { cCo } from "./cloudAgentLifecycleObservability.js";
import { sZ } from "./cloudAgentRepositoryService.js";
import { h3n, mCo } from "./cloudAgentStream.js";
import { YSh, ezv } from "./cloudSubagentTranscriptProjection.js";
import { $n, vi } from "./commands.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Kr, qs } from "./experimentService.js";
import { kk, r0 } from "./gitContextService.js";
import { Ml } from "./index.ts";
import { Gp } from "./index_3.ts";
import { Ze, _t } from "./instantiation.js";
import { B0 } from "./localAgentRepository.js";
import { Cp, vp } from "./metricsService.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { pS } from "./qIc.js";
import { MD, Uj, w2 } from "./requested_model_pb.js";
import { WX, aoe } from "./selectedContext.js";
import { Xh, im } from "./structuredLog.js";
import { Obh } from "./subagentSpawnMetrics.js";
import { x } from "./tslib.es6.js";
import { Fw } from "./utils_24.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
import { D2, a0 } from "./workspaceMetadataService.js";
import { HGt, UPe } from "./xmo.js";
function $Zv(e) {
    return Object.defineProperty(e, P1o, {
        value: !0
    }), e;
}
function HZv(e) {
    return e instanceof Error && e[P1o] === !0;
}
function NQi(e, t) {
    const n = [];
    return t.bcId && n.push(`cloud subagent ${t.bcId}`), t.requestId && n.push(`server request ID ${t.requestId}`), n.length === 0 ? e : `${e} (${n.join(", ")})`;
}
async function U1h(e, t) {
    await e.pauseBackgroundComposer(new luo({
        bcId: t,
        source: Zc.AS_SUBAGENT_FROM_LOCAL
    }));
}
var $1h, F3n, P1o, OQi;
export { $1h, $Zv, F3n, HZv, NQi, OQi, P1o, U1h };
var __wakaru_H1h_initialized = false;
export function H1h() {
if (__wakaru_H1h_initialized) return;
__wakaru_H1h_initialized = true;
"use strict";
x(), Gp(), zd(), Uj(), hm(), si(), Se(), Js(), Ze(), B0(), im(), ci(), Sg(), Fw(), r0(), Za(), V6(), sZ(), Rb(), tGt(), h3n(), cCo(), a0(), i0(), aoe(), ezv(), hSh(), vi(), qs(), Cp(), Obh(), nl(), LQi(), Ml(), $1h = 3e4, F3n = sCo, P1o = Symbol("cloudSubagentCorrelatedError"), OQi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p){
        super(), this.aiService = e, this.cloudAgentCacheService = t, this.agentRepositoryService = n, this.workspaceMetadataService = i, this.workspaceContextService = r, this.modelConfigService = s, this.structuredLogService = o, this.instantiationService = a, this.selectedContextService = c, this.gitContextService = l, this.cursorAuthenticationService = u, this.composerDataService = h, this.metricsService = p, this.sessions = new Map, this.liveStreams = new Set, this.clearEpochAborts = new Set, this.cacheEpoch = 0, this._disposed = !1, this._register(this.cloudAgentCacheService.onWillClearAll(()=>{
            this.cacheEpoch++, this.abortLiveProducersForCacheClear();
        }));
    }
    abortLiveProducersForCacheClear() {
        for (const e of this.clearEpochAborts)e.abort();
        for (const e of this.liveStreams)e.abort();
    }
    dispose() {
        this._disposed = !0, this.abortLiveProducersForCacheClear(), super.dispose();
    }
    throwIfDisposed() {
        if (this._disposed) throw new Rl;
    }
    isStaleEpoch(e) {
        return e !== this.cacheEpoch;
    }
    throwIfDisposedOrStaleEpoch(e) {
        if (this.throwIfDisposed(), this.isStaleEpoch(e)) throw new Rl;
    }
    async createOrResumeCloudSubagent(e) {
        this.throwIfDisposed();
        const t = this.cacheEpoch;
        if (e.forkAgentId) throw new Error('environment: "cloud" does not support forkAgentId/resume="self" yet.');
        if (e.continuationConfig) throw new Error('environment: "cloud" does not support continuation subagents yet.');
        if (e.resumeAgentId) {
            const o = await this.createSessionForExistingCloudSubagent(e, t);
            return this.commitCanonicalSession(o).bcId;
        }
        const n = this.composerDataService.getHandleIfLoaded(e.parentConversationId)?.data, i = n?.isProject === !0 ? e.parentConversationId : _tt({
            composer: n,
            getComposer: (o)=>this.composerDataService.getHandleIfLoaded(o)?.data
        }), r = Dbh({
            parentConversationId: e.parentConversationId,
            parentComposer: n,
            getComposer: (o)=>this.composerDataService.getHandleIfLoaded(o)?.data
        }), s = performance.now();
        try {
            const o = await this.createNewCloudSubagent(e, t, r, i);
            return i3n(this.metricsService, {
                phase: "total",
                surfaceKind: r,
                durationMs: performance.now() - s,
                outcome: "ok"
            }), o;
        } catch (o) {
            throw i3n(this.metricsService, {
                phase: "total",
                surfaceKind: r,
                durationMs: performance.now() - s,
                outcome: ja(o) ? "aborted" : "error"
            }), o;
        }
    }
    async createNewCloudSubagent(e, t, n, i) {
        const r = this.resolveCloudEnvironment(e), s = await this.resolveCloudStartRef(e), o = `bc-${zn()}`, a = zn(), c = await this.buildStartRequestModelFields(e.modelId, e.modelParameters), l = new I1({
            text: e.prompt,
            messageId: a,
            selectedContext: e.selectedContext
        }), { conversationAction: u, startingMessageType: h } = wVt(l, void 0);
        let p = [];
        try {
            p = await this.instantiationService.invokeFunction(async (A)=>{
                const R = A.get($n), D = A.get(Kr);
                if (!wZi(D)) return [];
                const P = performance.now();
                await lSh({
                    commandService: R,
                    experimentService: D,
                    parentConversationId: e.parentConversationId,
                    childConversationId: o,
                    registerLocalShellMounts: !1
                }), i3n(this.metricsService, {
                    phase: "store_inherit",
                    surfaceKind: n,
                    durationMs: performance.now() - P,
                    outcome: "ok"
                });
                const N = Mqv(e.parentConversationId);
                i !== void 0 && !N.includes(i) && N.push(i);
                const O = performance.now();
                return await Dqv({
                    commandService: R,
                    experimentService: D,
                    agentIds: N
                }), i3n(this.metricsService, {
                    phase: "store_flush",
                    surfaceKind: n,
                    durationMs: performance.now() - O,
                    outcome: "ok"
                }), N;
            });
        } catch  {}
        const g = i === void 0 ? void 0 : {
            name: this.composerDataService.getHandleIfLoaded(i)?.data.name?.trim() || void 0,
            subagent: {
                storeDir: p.includes(i) ? `${jle}/${i}` : void 0
            }
        }, f = new kUe({
            bcId: o,
            snapshotNameOrId: r.repoUrl,
            devcontainerStartingPoint: new SUe({
                url: r.fullRepoUrl,
                ref: s
            }),
            snapshotWorkspaceRootPath: bU,
            returnImmediately: !0,
            repoUrl: r.fullRepoUrl,
            source: Zc.AS_SUBAGENT_FROM_LOCAL,
            autoBranch: !0,
            baseBranch: s,
            conversationAction: u,
            startingMessageType: h,
            addInitialMessageToResponses: !0,
            repositoryInfo: {
                pathEncryptionKey: "",
                shouldSyncIndex: !1
            },
            modelDetails: c.legacyModelDetails,
            requestedModels: c.requestedModels,
            teamId: this.cursorAuthenticationService.getTeamId(),
            cloudSubagentParent: new MWt({
                parentAgentId: e.parentConversationId,
                parentToolCallId: e.toolCallId,
                parentAgentType: yUe.LOCAL,
                subagentTypeName: e.subagentType
            }),
            requestedAdditionalStoreIds: p,
            projectDetails: g,
            skills: []
        }), v = zn();
        this.structuredLogService.info("background_composer", "CloudSubagentRunner: starting cloud subagent", {
            bcId: o,
            requestId: v,
            parentConversationId: e.parentConversationId,
            toolCallId: e.toolCallId,
            subagentType: e.subagentType
        }), this.throwIfDisposedOrStaleEpoch(t);
        let b;
        const y = performance.now();
        try {
            b = await this.aiService.backgroundComposerSyncClient.startBackgroundComposerFromSnapshot(f, {
                signal: e.abortSignal,
                headers: td(v)
            }), i3n(this.metricsService, {
                phase: "start_rpc",
                surfaceKind: n,
                durationMs: performance.now() - y,
                outcome: "ok"
            });
        } catch (A) {
            const R = F3n(A);
            throw this.structuredLogService.error("background_composer", "CloudSubagentRunner: StartBackgroundComposerFromSnapshot failed", void 0, {
                bcId: o,
                requestId: v,
                parentConversationId: e.parentConversationId,
                toolCallId: e.toolCallId,
                subagentType: e.subagentType,
                error: R
            }), new Error(NQi(R, {
                bcId: o,
                requestId: v
            }), {
                cause: A
            });
        }
        const T = b.composer?.bcId || o;
        if (T !== o) throw new Error(`Cloud subagent returned unexpected agent id: ${T}`);
        const E = {
            bcId: o,
            kickoffMessageId: a,
            parentConversationId: e.parentConversationId,
            cacheEpoch: t,
            interruptedRunIds: new Set,
            activeRuns: 0,
            nextRunId: 0,
            activeRunIds: new Set
        };
        return this.commitCanonicalSession(E), o;
    }
    async resolveCloudStartRef(e) {
        const t = e.cloudBaseBranch?.trim();
        return t && t.length > 0 ? this.normalizeBaseBranchName(t) : await this.resolveCurrentBranch();
    }
    async resolveCurrentBranch() {
        const e = (await this.gitContextService.getCurrentBranch())?.trim() ?? "";
        if (!e) throw new Error('environment: "cloud" requires a base branch; no cloud_base_branch was provided and the current branch could not be determined.');
        return this.normalizeBaseBranchName(e);
    }
    normalizeBaseBranchName(e) {
        let t = e.trim();
        if (t.startsWith("refs/heads/") ? t = t.slice(11) : t.startsWith("heads/") ? t = t.slice(6) : t.startsWith("refs/remotes/") ? t = t.slice(13) : t.startsWith("remotes/") && (t = t.slice(8)), t.startsWith("origin/") && (t = t.slice(7)), !t || t.startsWith("-")) throw new Error(`Invalid cloud base branch: ${e}`);
        return t;
    }
    async runCloudSubagent(e, t) {
        const n = this.sessions.get(e) ?? await this.createSessionForExistingCloudSubagent({
            ...t,
            resumeAgentId: e
        }, this.cacheEpoch);
        let i, r;
        try {
            ({ session: i, runId: r } = this.acquireSessionForRun(n));
        } catch (s) {
            if (!ja(s)) throw s;
            return {
                success: !1,
                composerId: e,
                error: "Cloud subagent was aborted",
                terminationReason: "aborted"
            };
        }
        try {
            let s = i.kickoffMessageId, o;
            return t.resumeAgentId && (s = this.prepareCloudFollowup(i), o = async (a)=>{
                await this.submitCloudFollowup(i, t, s), a.requestReconnect();
            }), await this.runWithCompletionStream(i, t, s, r, o);
        } finally{
            this.releaseSession(i, r);
        }
    }
    isCloudSubagentOwnedByParent(e, t) {
        const n = this.sessions.get(e);
        return n ? n.parentConversationId === t : !1;
    }
    markAsInterrupted(e) {
        const t = this.sessions.get(e), n = t ? this.latestActiveRunId(t) : void 0;
        t !== void 0 && n !== void 0 && t.interruptedRunIds.add(n);
    }
    async abortCloudSubagent(e) {
        try {
            await U1h(this.aiService.backgroundComposerSyncClient, e);
        } finally{
            this.deleteSessionIfIdle(e);
        }
    }
    resolveCloudEnvironment(e) {
        const t = e.parentConversationId ? this.agentRepositoryService.getAgentHeader(e.parentConversationId) : void 0, n = t ? UPe(t.trackedGitRepos.value) : [], i = n.length > 0 ? n : this.getWorkspaceRepoUrls(), r = [
            ...new Set(i.map((a)=>t0(a)).filter(Boolean))
        ];
        if (r.length !== 1) throw new Error(`environment: "cloud" requires exactly one known git remote for the parent workspace; found ${r.length}.`);
        const s = r[0], o = Mse(s);
        if (!o) throw new Error(`environment: "cloud" could not normalize git remote: ${s}`);
        return {
            repoUrl: s,
            fullRepoUrl: o
        };
    }
    getWorkspaceRepoUrls() {
        const e = pS(this.workspaceContextService.getWorkspace());
        return HGt(this.workspaceMetadataService.getMetadata(e));
    }
    async createSessionForExistingCloudSubagent(e, t) {
        const n = e.resumeAgentId;
        if (!n) throw new Error("Missing cloud subagent id.");
        return await this.assertCloudSubagentBelongsToParent(n, e.parentConversationId, e.abortSignal), {
            bcId: n,
            kickoffMessageId: zn(),
            parentConversationId: e.parentConversationId,
            cacheEpoch: t,
            interruptedRunIds: new Set,
            activeRuns: 0,
            nextRunId: 0,
            activeRunIds: new Set
        };
    }
    async assertCloudSubagentBelongsToParent(e, t, n) {
        const i = t.trim();
        if (!i) throw new Error("Missing parent conversation id for cloud subagent resume.");
        const r = zn();
        let s;
        try {
            s = await this.aiService.backgroundComposerSyncClient.getBackgroundComposerInfo(new wUe({
                bcId: e,
                includeDiff: !1,
                doNotThrowIfSetupNotFinished: !0
            }), {
                signal: n,
                headers: td(r)
            });
        } catch (a) {
            const c = F3n(a);
            throw this.structuredLogService.error("background_composer", "CloudSubagentRunner: GetBackgroundComposerInfo failed for resume", void 0, {
                bcId: e,
                requestId: r,
                parentConversationId: i,
                error: c
            }), new Error(NQi(c, {
                bcId: e,
                requestId: r
            }), {
                cause: a
            });
        }
        const o = s.composer?.composer?.cloudSubagentParent;
        if (o?.parentAgentType !== yUe.LOCAL || o.parentAgentId.trim() !== i) throw new Error("Cloud subagent parent mismatch for resume.");
    }
    commitCanonicalSession(e) {
        const t = this.sessions.get(e.bcId);
        t !== void 0 && this.isStaleEpoch(t.cacheEpoch) && this.sessions.delete(e.bcId), this.throwIfDisposedOrStaleEpoch(e.cacheEpoch);
        const n = this.sessions.get(e.bcId) ?? e;
        return this.throwIfDisposedOrStaleEpoch(n.cacheEpoch), this.sessions.set(n.bcId, n), n;
    }
    acquireSessionForRun(e) {
        const t = this.commitCanonicalSession(e), n = t.nextRunId + 1;
        return t.nextRunId = n, t.activeRunIds.add(n), t.activeRuns = t.activeRunIds.size, {
            session: t,
            runId: n
        };
    }
    releaseSession(e, t) {
        e.activeRunIds.delete(t), e.activeRuns = e.activeRunIds.size, e.activeRuns === 0 && this.sessions.get(e.bcId) === e && this.sessions.delete(e.bcId);
    }
    latestActiveRunId(e) {
        let t;
        for (const n of e.activeRunIds)t = n;
        return t;
    }
    deleteSessionIfIdle(e) {
        const t = this.sessions.get(e);
        (!t || t.activeRuns === 0) && this.sessions.delete(e);
    }
    prepareCloudFollowup(e) {
        const t = zn();
        return e.kickoffMessageId = t, t;
    }
    async submitCloudFollowup(e, t, n) {
        const i = new I1({
            text: t.prompt,
            messageId: n,
            selectedContext: t.selectedContext
        }), { conversationAction: r } = wVt(i, void 0), s = await this.buildStartRequestModelFields(t.modelId, t.modelParameters), o = zn();
        let a = "AddAsyncFollowupBackgroundComposer", c = o;
        try {
            await this.aiService.backgroundComposerSyncClient.addAsyncFollowupBackgroundComposer(new pPe({
                bcId: e.bcId,
                synchronous: !1,
                followupConversationAction: r,
                followupId: n,
                followupSource: Zc.AS_SUBAGENT_FROM_LOCAL,
                modelDetails: s.legacyModelDetails,
                requestedModel: s.requestedModels[0]
            }), {
                signal: t.abortSignal,
                headers: td(o)
            }), t.interrupt && (a = "SubmitPendingFollowupNow", c = zn(), await this.aiService.backgroundComposerSyncClient.submitPendingFollowupNow(new qVi({
                bcId: e.bcId,
                followupId: n
            }), {
                signal: t.abortSignal,
                headers: td(c)
            }));
        } catch (l) {
            const u = F3n(l);
            throw this.structuredLogService.error("background_composer", "CloudSubagentRunner: cloud subagent followup submit failed", void 0, {
                bcId: e.bcId,
                requestId: c,
                rpc: a,
                parentConversationId: e.parentConversationId,
                toolCallId: t.toolCallId,
                followupId: n,
                error: u
            }), $Zv(new Error(NQi(u, {
                bcId: e.bcId,
                requestId: c
            }), {
                cause: l
            }));
        }
    }
    async buildStartRequestModelFields(e, t) {
        const n = this.modelConfigService.fixupModelConfigForCurrentFlag(this.modelConfigService.getModelConfig("composer")), i = (t?.length ? {
            modelId: e,
            parameters: t.map((s)=>({
                    ...s
                }))
        } : void 0) ?? n.selectedModels?.find((s)=>s.modelId === e);
        if (i === void 0) return {
            requestedModels: [
                new MD({
                    modelId: e,
                    maxMode: n.maxMode
                })
            ],
            legacyModelDetails: void 0
        };
        const r = this.modelConfigService.resolveModelParametersForSubmission(e, i.parameters, n.maxMode);
        return {
            requestedModels: [
                new MD({
                    modelId: e,
                    maxMode: n.maxMode,
                    parameters: r.map((s)=>new w2({
                            id: s.id,
                            value: s.value
                        }))
                })
            ],
            legacyModelDetails: void 0
        };
    }
    createCloudStream(e, t, n) {
        const i = this.instantiationService.invokeFunction((s)=>s.get(Kr)), r = new mCo(e, t.onInteractionUpdate, this.aiService, this.cloudAgentCacheService, this.structuredLogService, t.onWorkflowStatus, void 0, i, void 0, this.metricsService);
        return r.conversationStateListeners.add(t.onConversationState), this._disposed || n?.aborted ? (r.abort(), r) : (this.liveStreams.add(r), r);
    }
    releaseCloudStream(e) {
        e !== void 0 && (e.abort(), this.liveStreams.delete(e));
    }
    async runWithCompletionStream(e, t, n, i, r) {
        let s, o;
        const a = new AbortController;
        this.clearEpochAborts.add(a);
        const c = AbortSignal.any([
            t.abortSignal,
            a.signal
        ]);
        try {
            if (this._disposed || this.isStaleEpoch(e.cacheEpoch) || c.aborted) return !this._disposed && t.abortSignal.aborted && !e.interruptedRunIds.delete(i) && await this.abortCloudSubagent(e.bcId).catch(()=>{}), {
                success: !1,
                composerId: e.bcId,
                error: "Cloud subagent was aborted",
                terminationReason: "aborted"
            };
            const l = this.createCloudTurnCompletionPromise(()=>s, c, n), u = {
                onInteractionUpdate: (b)=>{
                    o !== void 0 && o.applyInteractionUpdate(b, s?.getLatestOffsetKey()), l.listeners.onInteractionUpdate(b);
                },
                onWorkflowStatus: l.listeners.onWorkflowStatus,
                onConversationState: ()=>{
                    const b = s?.conversationState.value;
                    o !== void 0 && b !== void 0 && o.seedFromState(b, s?.getLatestOffsetKey()), l.listeners.onConversationState();
                }
            };
            s = this.createCloudStream(e.bcId, u, c), o = new YSh({
                targetMessageId: n,
                fallbackStartTurnIndex: 0,
                blobStore: s.blobStore,
                instantiationService: this.instantiationService,
                selectedContextService: this.selectedContextService,
                structuredLogService: this.structuredLogService,
                toolCallId: t.toolCallId,
                parentConversationId: e.parentConversationId
            }), await this.waitForInitialState(s, c), l.captureBaseline();
            const h = s.conversationState.value, p = h?.turns.length ?? 0;
            o.setFallbackStartTurnIndex(p), h !== void 0 && await o.seedFromState(h, s.getLatestOffsetKey()), await r?.(s);
            const g = await l.promise;
            await o.whenIdle();
            const f = o.getFinalMessage();
            if (f !== void 0) return {
                success: !0,
                composerId: e.bcId,
                finalMessage: f,
                toolCallCount: o.getToolCallCount(),
                terminationReason: "completed"
            };
            const v = await this.extractResultFromState(t, s, g.state, n, g.baselineTurnCount);
            return {
                success: !0,
                composerId: e.bcId,
                finalMessage: v.finalMessage,
                toolCallCount: v.toolCallCount,
                terminationReason: "completed"
            };
        } catch (l) {
            if (c.aborted) return t.abortSignal.aborted && !e.interruptedRunIds.delete(i) && await this.abortCloudSubagent(e.bcId).catch(()=>{}), {
                success: !1,
                composerId: e.bcId,
                error: "Cloud subagent was aborted",
                terminationReason: "aborted"
            };
            const u = HZv(l), h = u ? l instanceof Error ? l.message : String(l) : F3n(l);
            return this.structuredLogService.error("background_composer", "CloudSubagentRunner: cloud subagent run failed", void 0, {
                bcId: e.bcId,
                streamRequestId: s?.requestId,
                parentConversationId: e.parentConversationId,
                toolCallId: t.toolCallId,
                subagentType: t.subagentType,
                error: h
            }), {
                success: !1,
                composerId: e.bcId,
                error: u ? h : NQi(h, {
                    bcId: e.bcId,
                    requestId: s?.requestId
                }),
                terminationReason: "error"
            };
        } finally{
            e.interruptedRunIds.delete(i), this.clearEpochAborts.delete(a), this.releaseCloudStream(s);
        }
    }
    createCloudTurnCompletionPromise(e, t, n) {
        let i = !1, r = !1, s = !1, o = -1, a, c = !1, l = !1, u = !1, h, p;
        const g = new Promise((P, N)=>{
            h = P, p = N;
        }), f = ()=>{
            if (o >= 0) return;
            o = e().conversationState.value?.turns.length ?? 0;
        }, v = ()=>{
            if (i || !s || !r) return;
            const P = e().conversationState.value ?? new Hm, N = Math.max(0, o);
            (a !== void 0 && P.turns.length > a || P.turns.length > N) && (i = !0, h({
                state: P,
                baselineTurnCount: a !== void 0 ? Math.min(N, a) : N
            }));
        }, b = (P)=>{
            i || (i = !0, p(new Error(P)));
        }, y = ()=>{
            u && (s = !0, u = !1), v();
        }, T = async (P)=>{
            if (a !== void 0) return r = !0, !0;
            if (c) return l = !0, !1;
            c = !0;
            try {
                const N = P ?? e().conversationState.value ?? new Hm, O = await this.findTargetTurnIndex(e(), N, n);
                return O !== void 0 && (a = O, r = !0, (o < 0 || O < o) && (o = O)), a !== void 0;
            } catch (N) {
                const O = N instanceof Error ? N.message : String(N);
                return b(`Failed to inspect cloud subagent conversation state: ${O}`), !1;
            } finally{
                c = !1;
                const N = l && !i && a === void 0;
                l = !1, N && T().then((O)=>{
                    O && y();
                });
            }
        }, E = ()=>{
            (r || a !== void 0) && (u = !0);
            const P = e().conversationState.value ?? new Hm;
            T(P).then((N)=>{
                N && (s = !0, u = !1, v());
            });
        }, A = (P)=>{
            if (P.message.case === "userMessageAppended") {
                P.message.value.userMessage?.messageId === n && (r = !0, T().then((N)=>{
                    N && y();
                }), v());
                return;
            }
            P.message.case === "turnEnded" && E();
        }, R = (P)=>{
            if ((P === Yd.IDLE || P === Yd.ARCHIVED) && E(), P === Yd.ERROR || P === Yd.EXPIRED) {
                const N = e().getLatestUserFacingErrorDetails();
                b(N?.errorMessage ?? `Cloud subagent ended with status ${Yd[P]}`);
            }
        }, D = ()=>{
            f(), (r || s) && a === void 0 && T().then((P)=>{
                P && y();
            }), v();
        };
        return t.addEventListener("abort", ()=>b("Cloud subagent was aborted"), {
            once: !0
        }), {
            promise: g,
            captureBaseline: f,
            listeners: {
                onInteractionUpdate: A,
                onWorkflowStatus: R,
                onConversationState: D
            }
        };
    }
    async findTargetTurnIndex(e, t, n) {
        return KSh(e.blobStore, t, n);
    }
    async waitForInitialState(e, t) {
        let n;
        const i = new Promise((r, s)=>{
            n = setTimeout(()=>s(new Error("Timed out waiting for cloud subagent initial state")), $1h);
        });
        try {
            await Promise.race([
                e.ready,
                i,
                new Promise((r, s)=>{
                    t.addEventListener("abort", ()=>s(new Error("aborted")), {
                        once: !0
                    });
                })
            ]);
        } finally{
            n && clearTimeout(n);
        }
    }
    async extractResultFromState(e, t, n, i, r) {
        try {
            let s, o = 0;
            const c = await this.findTargetTurnIndex(t, n, i) ?? Math.max(0, Math.min(r, n.turns.length));
            for(let l = c; l < n.turns.length; l++){
                const u = await t.blobStore.getBlob(qh(), n.turns[l]);
                if (!u) continue;
                const h = mX.fromBinary(u);
                if (h.turn.case === "agentConversationTurn") for (const p of h.turn.value.steps){
                    const g = await t.blobStore.getBlob(qh(), p);
                    if (!g) continue;
                    const f = pX.fromBinary(g);
                    f.message.case === "assistantMessage" ? s = f.message.value.text : f.message.case === "toolCall" && o++;
                }
            }
            return {
                finalMessage: s,
                toolCallCount: o
            };
        } catch (s) {
            return this.structuredLogService.debug("background_composer", "CloudSubagentRunner: failed to extract final state", {
                error: s instanceof Error ? s.message : String(s),
                toolCallId: e.toolCallId
            }), {
                finalMessage: void 0,
                toolCallCount: 0
            };
        }
    }
}, OQi = ie([
    C(0, jp),
    C(1, swt),
    C(2, Kv),
    C(3, D2),
    C(4, Jn),
    C(5, QS),
    C(6, Xh),
    C(7, _t),
    C(8, WX),
    C(9, kk),
    C(10, na),
    C(11, Zs),
    C(12, vp)
], OQi);

}
