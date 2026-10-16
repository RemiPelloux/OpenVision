import { UTt, Vmk, Vrg, Zrs, dEi, lag, nol, vxn, wog, zmk } from "./Aeg.js";
import { Ei, Hc, Qe, Ya, st } from "./Iwo.js";
import { x0 } from "./SZu.js";
import { Ubk, chg, dos, jbk } from "./Ycg.js";
import { Oke } from "./agent-store-ids.ts";
import { tIi } from "./agentCompatService.js";
import { Ry } from "./agentRepositoryService.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { Eog } from "./agentStoreSubagentMount.js";
import { fY, iz, ju, nf, t0 } from "./agent_pb.js";
import { Dc, jl } from "./aiService.js";
import { Rs, ss } from "./authenticationService.js";
import { Dp, Dqe, Eot, Iot, Pqe, RZr, SEn, ec, pd, wot } from "./background_composer_pb.js";
import { h7 } from "./cloud-agent.ts";
import { jCt, yqt } from "./cloudAgentCacheService.js";
import { sol } from "./cloudAgentLifecycleObservability.js";
import { Hx } from "./cloudAgentRepositoryService.js";
import { CEi, dol } from "./cloudAgentStream.js";
import { cag, ggk } from "./cloudSubagentTranscriptProjection.js";
import { nr, rs } from "./commands.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Cr, _s } from "./experimentService.js";
import { Nk, sle } from "./gYa.js";
import { Jv, hy } from "./gitContextService.js";
import { nl } from "./index.ts";
import { Ng } from "./index_3.ts";
import { It, dn } from "./instantiation.js";
import { Xp, b6, sf } from "./ipa.js";
import { ub } from "./localAgentRepository.js";
import { Uh, ip } from "./metricsService.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { AD, JF, SQ } from "./requested_model_pb.js";
import { cle, lG } from "./selectedContext.js";
import { Cm, wh } from "./structuredLog.js";
import { Qrg } from "./subagentSpawnMetrics.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { gT } from "./utils_24.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { vh } from "./yBp.js";
var uhg, nIi, Nll, hos;
export { Nll, hos, nIi, uhg };
var __wakaru_dhg_initialized = false;
export function dhg() {
if (__wakaru_dhg_initialized) return;
__wakaru_dhg_initialized = true;
"use strict";
E(), Ng(), ju(), SQ(), pd(), Ei(), Qe(), Xo(), It(), ub(), Cm(), Sr(), Dc(), gT(), hy(), Rs(), Ry(), Hx(), wl(), yqt(), CEi(), sol(), Lh(), of(), cle(), ggk(), Eog(), rs(), _s(), ip(), Qrg(), Pl(), tIi(), nl(), uhg = 3e4, nIi = nol, Nll = Symbol("cloudSubagentCorrelatedError"), hos = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h){
        super(), this.aiService = t, this.cloudAgentCacheService = e, this.agentRepositoryService = n, this.workspaceMetadataService = i, this.workspaceContextService = r, this.modelConfigService = s, this.structuredLogService = o, this.instantiationService = a, this.selectedContextService = l, this.gitContextService = c, this.cursorAuthenticationService = u, this.composerDataService = d, this.metricsService = h, this.sessions = new Map, this.liveStreams = new Set, this.clearEpochAborts = new Set, this.cacheEpoch = 0, this._disposed = !1, this._register(this.cloudAgentCacheService.onWillClearAll(()=>{
            this.cacheEpoch++, this.abortLiveProducersForCacheClear();
        }));
    }
    abortLiveProducersForCacheClear() {
        for (const t of this.clearEpochAborts)t.abort();
        for (const t of this.liveStreams)t.abort();
    }
    dispose() {
        this._disposed = !0, this.abortLiveProducersForCacheClear(), super.dispose();
    }
    throwIfDisposed() {
        if (this._disposed) throw new Hc;
    }
    isStaleEpoch(t) {
        return t !== this.cacheEpoch;
    }
    throwIfDisposedOrStaleEpoch(t) {
        if (this.throwIfDisposed(), this.isStaleEpoch(t)) throw new Hc;
    }
    async createOrResumeCloudSubagent(t) {
        this.throwIfDisposed();
        const e = this.cacheEpoch;
        if (t.forkAgentId) throw new Error('environment: "cloud" does not support forkAgentId/resume="self" yet.');
        if (t.continuationConfig) throw new Error('environment: "cloud" does not support continuation subagents yet.');
        if (t.resumeAgentId) {
            const o = await this.createSessionForExistingCloudSubagent(t, e);
            return this.commitCanonicalSession(o).bcId;
        }
        const n = this.composerDataService.getHandleIfLoaded(t.parentConversationId)?.data, i = n?.isProject === !0 ? t.parentConversationId : UTt({
            composer: n,
            getComposer: (o)=>this.composerDataService.getHandleIfLoaded(o)?.data
        }), r = Vrg({
            parentConversationId: t.parentConversationId,
            parentComposer: n,
            getComposer: (o)=>this.composerDataService.getHandleIfLoaded(o)?.data
        }), s = performance.now();
        try {
            const o = await this.createNewCloudSubagent(t, e, r, i);
            return dEi(this.metricsService, {
                phase: "total",
                surfaceKind: r,
                durationMs: performance.now() - s,
                outcome: "ok"
            }), o;
        } catch (o) {
            throw dEi(this.metricsService, {
                phase: "total",
                surfaceKind: r,
                durationMs: performance.now() - s,
                outcome: Ya(o) ? "aborted" : "error"
            }), o;
        }
    }
    async createNewCloudSubagent(t, e, n, i) {
        const r = this.resolveCloudEnvironment(t), s = await this.resolveCloudStartRef(t), o = `bc-${Ai()}`, a = Ai(), l = await this.buildStartRequestModelFields(t.modelId, t.modelParameters), c = new t0({
            text: t.prompt,
            messageId: a,
            selectedContext: t.selectedContext
        }), { conversationAction: u, startingMessageType: d } = vxn(c, void 0);
        let h = [];
        try {
            h = await this.instantiationService.invokeFunction(async (k)=>{
                const C = k.get(nr), T = k.get(Cr);
                if (!Zrs(T)) return [];
                const I = performance.now();
                await wog({
                    commandService: C,
                    experimentService: T,
                    parentConversationId: t.parentConversationId,
                    childConversationId: o,
                    registerLocalShellMounts: !1
                }), dEi(this.metricsService, {
                    phase: "store_inherit",
                    surfaceKind: n,
                    durationMs: performance.now() - I,
                    outcome: "ok"
                });
                const A = Vmk(t.parentConversationId);
                i !== void 0 && !A.includes(i) && A.push(i);
                const P = performance.now();
                return await zmk({
                    commandService: C,
                    experimentService: T,
                    agentIds: A
                }), dEi(this.metricsService, {
                    phase: "store_flush",
                    surfaceKind: n,
                    durationMs: performance.now() - P,
                    outcome: "ok"
                }), A;
            });
        } catch  {}
        const p = i === void 0 ? void 0 : {
            name: this.composerDataService.getHandleIfLoaded(i)?.data.name?.trim() || void 0,
            subagent: {
                storeDir: h.includes(i) ? `${Oke}/${i}` : void 0
            }
        }, g = new Iot({
            bcId: o,
            snapshotNameOrId: r.repoUrl,
            devcontainerStartingPoint: new Eot({
                url: r.fullRepoUrl,
                ref: s
            }),
            snapshotWorkspaceRootPath: h7,
            returnImmediately: !0,
            repoUrl: r.fullRepoUrl,
            source: ec.AS_SUBAGENT_FROM_LOCAL,
            autoBranch: !0,
            baseBranch: s,
            conversationAction: u,
            startingMessageType: d,
            addInitialMessageToResponses: !0,
            repositoryInfo: {
                pathEncryptionKey: "",
                shouldSyncIndex: !1
            },
            modelDetails: l.legacyModelDetails,
            requestedModels: l.requestedModels,
            teamId: this.cursorAuthenticationService.getTeamId(),
            cloudSubagentParent: new SEn({
                parentAgentId: t.parentConversationId,
                parentToolCallId: t.toolCallId,
                parentAgentType: wot.LOCAL,
                subagentTypeName: t.subagentType
            }),
            requestedAdditionalStoreIds: h,
            projectDetails: p,
            skills: []
        }), f = Ai();
        this.structuredLogService.info("background_composer", "CloudSubagentRunner: starting cloud subagent", {
            bcId: o,
            requestId: f,
            parentConversationId: t.parentConversationId,
            toolCallId: t.toolCallId,
            subagentType: t.subagentType
        }), this.throwIfDisposedOrStaleEpoch(e);
        let _;
        const b = performance.now();
        try {
            _ = await this.aiService.backgroundComposerSyncClient.startBackgroundComposerFromSnapshot(g, {
                signal: t.abortSignal,
                headers: vh(f)
            }), dEi(this.metricsService, {
                phase: "start_rpc",
                surfaceKind: n,
                durationMs: performance.now() - b,
                outcome: "ok"
            });
        } catch (k) {
            const C = nIi(k);
            throw this.structuredLogService.error("background_composer", "CloudSubagentRunner: StartBackgroundComposerFromSnapshot failed", void 0, {
                bcId: o,
                requestId: f,
                parentConversationId: t.parentConversationId,
                toolCallId: t.toolCallId,
                subagentType: t.subagentType,
                error: C
            }), new Error(dos(C, {
                bcId: o,
                requestId: f
            }), {
                cause: k
            });
        }
        const y = _.composer?.bcId || o;
        if (y !== o) throw new Error(`Cloud subagent returned unexpected agent id: ${y}`);
        const S = {
            bcId: o,
            kickoffMessageId: a,
            parentConversationId: t.parentConversationId,
            cacheEpoch: e,
            interruptedRunIds: new Set,
            activeRuns: 0,
            nextRunId: 0,
            activeRunIds: new Set
        };
        return this.commitCanonicalSession(S), o;
    }
    async resolveCloudStartRef(t) {
        const e = t.cloudBaseBranch?.trim();
        return e && e.length > 0 ? this.normalizeBaseBranchName(e) : await this.resolveCurrentBranch();
    }
    async resolveCurrentBranch() {
        const t = (await this.gitContextService.getCurrentBranch())?.trim() ?? "";
        if (!t) throw new Error('environment: "cloud" requires a base branch; no cloud_base_branch was provided and the current branch could not be determined.');
        return this.normalizeBaseBranchName(t);
    }
    normalizeBaseBranchName(t) {
        let e = t.trim();
        if (e.startsWith("refs/heads/") ? e = e.slice(11) : e.startsWith("heads/") ? e = e.slice(6) : e.startsWith("refs/remotes/") ? e = e.slice(13) : e.startsWith("remotes/") && (e = e.slice(8)), e.startsWith("origin/") && (e = e.slice(7)), !e || e.startsWith("-")) throw new Error(`Invalid cloud base branch: ${t}`);
        return e;
    }
    async runCloudSubagent(t, e) {
        const n = this.sessions.get(t) ?? await this.createSessionForExistingCloudSubagent({
            ...e,
            resumeAgentId: t
        }, this.cacheEpoch);
        let i, r;
        try {
            ({ session: i, runId: r } = this.acquireSessionForRun(n));
        } catch (s) {
            if (!Ya(s)) throw s;
            return {
                success: !1,
                composerId: t,
                error: "Cloud subagent was aborted",
                terminationReason: "aborted"
            };
        }
        try {
            let s = i.kickoffMessageId, o;
            return e.resumeAgentId && (s = this.prepareCloudFollowup(i), o = async (a)=>{
                await this.submitCloudFollowup(i, e, s), a.requestReconnect();
            }), await this.runWithCompletionStream(i, e, s, r, o);
        } finally{
            this.releaseSession(i, r);
        }
    }
    isCloudSubagentOwnedByParent(t, e) {
        const n = this.sessions.get(t);
        return n ? n.parentConversationId === e : !1;
    }
    markAsInterrupted(t) {
        const e = this.sessions.get(t), n = e ? this.latestActiveRunId(e) : void 0;
        e !== void 0 && n !== void 0 && e.interruptedRunIds.add(n);
    }
    async abortCloudSubagent(t) {
        try {
            await chg(this.aiService.backgroundComposerSyncClient, t);
        } finally{
            this.deleteSessionIfIdle(t);
        }
    }
    resolveCloudEnvironment(t) {
        const e = t.parentConversationId ? this.agentRepositoryService.getAgentHeader(t.parentConversationId) : void 0, n = e ? Nk(e.trackedGitRepos.value) : [], i = n.length > 0 ? n : this.getWorkspaceRepoUrls(), r = [
            ...new Set(i.map((a)=>sf(a)).filter(Boolean))
        ];
        if (r.length !== 1) throw new Error(`environment: "cloud" requires exactly one known git remote for the parent workspace; found ${r.length}.`);
        const s = r[0], o = b6(s);
        if (!o) throw new Error(`environment: "cloud" could not normalize git remote: ${s}`);
        return {
            repoUrl: s,
            fullRepoUrl: o
        };
    }
    getWorkspaceRepoUrls() {
        const t = x0(this.workspaceContextService.getWorkspace());
        return sle(this.workspaceMetadataService.getMetadata(t));
    }
    async createSessionForExistingCloudSubagent(t, e) {
        const n = t.resumeAgentId;
        if (!n) throw new Error("Missing cloud subagent id.");
        return await this.assertCloudSubagentBelongsToParent(n, t.parentConversationId, t.abortSignal), {
            bcId: n,
            kickoffMessageId: Ai(),
            parentConversationId: t.parentConversationId,
            cacheEpoch: e,
            interruptedRunIds: new Set,
            activeRuns: 0,
            nextRunId: 0,
            activeRunIds: new Set
        };
    }
    async assertCloudSubagentBelongsToParent(t, e, n) {
        const i = e.trim();
        if (!i) throw new Error("Missing parent conversation id for cloud subagent resume.");
        const r = Ai();
        let s;
        try {
            s = await this.aiService.backgroundComposerSyncClient.getBackgroundComposerInfo(new Dqe({
                bcId: t,
                includeDiff: !1,
                doNotThrowIfSetupNotFinished: !0
            }), {
                signal: n,
                headers: vh(r)
            });
        } catch (a) {
            const l = nIi(a);
            throw this.structuredLogService.error("background_composer", "CloudSubagentRunner: GetBackgroundComposerInfo failed for resume", void 0, {
                bcId: t,
                requestId: r,
                parentConversationId: i,
                error: l
            }), new Error(dos(l, {
                bcId: t,
                requestId: r
            }), {
                cause: a
            });
        }
        const o = s.composer?.composer?.cloudSubagentParent;
        if (o?.parentAgentType !== wot.LOCAL || o.parentAgentId.trim() !== i) throw new Error("Cloud subagent parent mismatch for resume.");
    }
    commitCanonicalSession(t) {
        const e = this.sessions.get(t.bcId);
        e !== void 0 && this.isStaleEpoch(e.cacheEpoch) && this.sessions.delete(t.bcId), this.throwIfDisposedOrStaleEpoch(t.cacheEpoch);
        const n = this.sessions.get(t.bcId) ?? t;
        return this.throwIfDisposedOrStaleEpoch(n.cacheEpoch), this.sessions.set(n.bcId, n), n;
    }
    acquireSessionForRun(t) {
        const e = this.commitCanonicalSession(t), n = e.nextRunId + 1;
        return e.nextRunId = n, e.activeRunIds.add(n), e.activeRuns = e.activeRunIds.size, {
            session: e,
            runId: n
        };
    }
    releaseSession(t, e) {
        t.activeRunIds.delete(e), t.activeRuns = t.activeRunIds.size, t.activeRuns === 0 && this.sessions.get(t.bcId) === t && this.sessions.delete(t.bcId);
    }
    latestActiveRunId(t) {
        let e;
        for (const n of t.activeRunIds)e = n;
        return e;
    }
    deleteSessionIfIdle(t) {
        const e = this.sessions.get(t);
        (!e || e.activeRuns === 0) && this.sessions.delete(t);
    }
    prepareCloudFollowup(t) {
        const e = Ai();
        return t.kickoffMessageId = e, e;
    }
    async submitCloudFollowup(t, e, n) {
        const i = new t0({
            text: e.prompt,
            messageId: n,
            selectedContext: e.selectedContext
        }), { conversationAction: r } = vxn(i, void 0), s = await this.buildStartRequestModelFields(e.modelId, e.modelParameters), o = Ai();
        let a = "AddAsyncFollowupBackgroundComposer", l = o;
        try {
            await this.aiService.backgroundComposerSyncClient.addAsyncFollowupBackgroundComposer(new Pqe({
                bcId: t.bcId,
                synchronous: !1,
                followupConversationAction: r,
                followupId: n,
                followupSource: ec.AS_SUBAGENT_FROM_LOCAL,
                modelDetails: s.legacyModelDetails,
                requestedModel: s.requestedModels[0]
            }), {
                signal: e.abortSignal,
                headers: vh(o)
            }), e.interrupt && (a = "SubmitPendingFollowupNow", l = Ai(), await this.aiService.backgroundComposerSyncClient.submitPendingFollowupNow(new RZr({
                bcId: t.bcId,
                followupId: n
            }), {
                signal: e.abortSignal,
                headers: vh(l)
            }));
        } catch (c) {
            const u = nIi(c);
            throw this.structuredLogService.error("background_composer", "CloudSubagentRunner: cloud subagent followup submit failed", void 0, {
                bcId: t.bcId,
                requestId: l,
                rpc: a,
                parentConversationId: t.parentConversationId,
                toolCallId: e.toolCallId,
                followupId: n,
                error: u
            }), Ubk(new Error(dos(u, {
                bcId: t.bcId,
                requestId: l
            }), {
                cause: c
            }));
        }
    }
    async buildStartRequestModelFields(t, e) {
        const n = this.modelConfigService.fixupModelConfigForCurrentFlag(this.modelConfigService.getModelConfig("composer")), i = (e?.length ? {
            modelId: t,
            parameters: e.map((s)=>({
                    ...s
                }))
        } : void 0) ?? n.selectedModels?.find((s)=>s.modelId === t);
        if (i === void 0) return {
            requestedModels: [
                new AD({
                    modelId: t,
                    maxMode: n.maxMode
                })
            ],
            legacyModelDetails: void 0
        };
        const r = this.modelConfigService.resolveModelParametersForSubmission(t, i.parameters, n.maxMode);
        return {
            requestedModels: [
                new AD({
                    modelId: t,
                    maxMode: n.maxMode,
                    parameters: r.map((s)=>new JF({
                            id: s.id,
                            value: s.value
                        }))
                })
            ],
            legacyModelDetails: void 0
        };
    }
    createCloudStream(t, e, n) {
        const i = this.instantiationService.invokeFunction((s)=>s.get(Cr)), r = new dol(t, e.onInteractionUpdate, this.aiService, this.cloudAgentCacheService, this.structuredLogService, e.onWorkflowStatus, void 0, i, void 0, this.metricsService);
        return r.conversationStateListeners.add(e.onConversationState), this._disposed || n?.aborted ? (r.abort(), r) : (this.liveStreams.add(r), r);
    }
    releaseCloudStream(t) {
        t !== void 0 && (t.abort(), this.liveStreams.delete(t));
    }
    async runWithCompletionStream(t, e, n, i, r) {
        let s, o;
        const a = new AbortController;
        this.clearEpochAborts.add(a);
        const l = AbortSignal.any([
            e.abortSignal,
            a.signal
        ]);
        try {
            if (this._disposed || this.isStaleEpoch(t.cacheEpoch) || l.aborted) return !this._disposed && e.abortSignal.aborted && !t.interruptedRunIds.delete(i) && await this.abortCloudSubagent(t.bcId).catch(()=>{}), {
                success: !1,
                composerId: t.bcId,
                error: "Cloud subagent was aborted",
                terminationReason: "aborted"
            };
            const c = this.createCloudTurnCompletionPromise(()=>s, l, n), u = {
                onInteractionUpdate: (_)=>{
                    o !== void 0 && o.applyInteractionUpdate(_, s?.getLatestOffsetKey()), c.listeners.onInteractionUpdate(_);
                },
                onWorkflowStatus: c.listeners.onWorkflowStatus,
                onConversationState: ()=>{
                    const _ = s?.conversationState.value;
                    o !== void 0 && _ !== void 0 && o.seedFromState(_, s?.getLatestOffsetKey()), c.listeners.onConversationState();
                }
            };
            s = this.createCloudStream(t.bcId, u, l), o = new cag({
                targetMessageId: n,
                fallbackStartTurnIndex: 0,
                blobStore: s.blobStore,
                instantiationService: this.instantiationService,
                selectedContextService: this.selectedContextService,
                structuredLogService: this.structuredLogService,
                toolCallId: e.toolCallId,
                parentConversationId: t.parentConversationId
            }), await this.waitForInitialState(s, l), c.captureBaseline();
            const d = s.conversationState.value, h = d?.turns.length ?? 0;
            o.setFallbackStartTurnIndex(h), d !== void 0 && await o.seedFromState(d, s.getLatestOffsetKey()), await r?.(s);
            const p = await c.promise;
            await o.whenIdle();
            const g = o.getFinalMessage();
            if (g !== void 0) return {
                success: !0,
                composerId: t.bcId,
                finalMessage: g,
                toolCallCount: o.getToolCallCount(),
                terminationReason: "completed"
            };
            const f = await this.extractResultFromState(e, s, p.state, n, p.baselineTurnCount);
            return {
                success: !0,
                composerId: t.bcId,
                finalMessage: f.finalMessage,
                toolCallCount: f.toolCallCount,
                terminationReason: "completed"
            };
        } catch (c) {
            if (l.aborted) return e.abortSignal.aborted && !t.interruptedRunIds.delete(i) && await this.abortCloudSubagent(t.bcId).catch(()=>{}), {
                success: !1,
                composerId: t.bcId,
                error: "Cloud subagent was aborted",
                terminationReason: "aborted"
            };
            const u = jbk(c), d = u ? c instanceof Error ? c.message : String(c) : nIi(c);
            return this.structuredLogService.error("background_composer", "CloudSubagentRunner: cloud subagent run failed", void 0, {
                bcId: t.bcId,
                streamRequestId: s?.requestId,
                parentConversationId: t.parentConversationId,
                toolCallId: e.toolCallId,
                subagentType: e.subagentType,
                error: d
            }), {
                success: !1,
                composerId: t.bcId,
                error: u ? d : dos(d, {
                    bcId: t.bcId,
                    requestId: s?.requestId
                }),
                terminationReason: "error"
            };
        } finally{
            t.interruptedRunIds.delete(i), this.clearEpochAborts.delete(a), this.releaseCloudStream(s);
        }
    }
    createCloudTurnCompletionPromise(t, e, n) {
        let i = !1, r = !1, s = !1, o = -1, a, l = !1, c = !1, u = !1, d, h;
        const p = new Promise((I, A)=>{
            d = I, h = A;
        }), g = ()=>{
            if (o >= 0) return;
            o = t().conversationState.value?.turns.length ?? 0;
        }, f = ()=>{
            if (i || !s || !r) return;
            const I = t().conversationState.value ?? new nf, A = Math.max(0, o);
            (a !== void 0 && I.turns.length > a || I.turns.length > A) && (i = !0, d({
                state: I,
                baselineTurnCount: a !== void 0 ? Math.min(A, a) : A
            }));
        }, _ = (I)=>{
            i || (i = !0, h(new Error(I)));
        }, b = ()=>{
            u && (s = !0, u = !1), f();
        }, y = async (I)=>{
            if (a !== void 0) return r = !0, !0;
            if (l) return c = !0, !1;
            l = !0;
            try {
                const A = I ?? t().conversationState.value ?? new nf, P = await this.findTargetTurnIndex(t(), A, n);
                return P !== void 0 && (a = P, r = !0, (o < 0 || P < o) && (o = P)), a !== void 0;
            } catch (A) {
                const P = A instanceof Error ? A.message : String(A);
                return _(`Failed to inspect cloud subagent conversation state: ${P}`), !1;
            } finally{
                l = !1;
                const A = c && !i && a === void 0;
                c = !1, A && y().then((P)=>{
                    P && b();
                });
            }
        }, S = ()=>{
            (r || a !== void 0) && (u = !0);
            const I = t().conversationState.value ?? new nf;
            y(I).then((A)=>{
                A && (s = !0, u = !1, f());
            });
        }, k = (I)=>{
            if (I.message.case === "userMessageAppended") {
                I.message.value.userMessage?.messageId === n && (r = !0, y().then((A)=>{
                    A && b();
                }), f());
                return;
            }
            I.message.case === "turnEnded" && S();
        }, C = (I)=>{
            if ((I === Dp.IDLE || I === Dp.ARCHIVED) && S(), I === Dp.ERROR || I === Dp.EXPIRED) {
                const A = t().getLatestUserFacingErrorDetails();
                _(A?.errorMessage ?? `Cloud subagent ended with status ${Dp[I]}`);
            }
        }, T = ()=>{
            g(), (r || s) && a === void 0 && y().then((I)=>{
                I && b();
            }), f();
        };
        return e.addEventListener("abort", ()=>_("Cloud subagent was aborted"), {
            once: !0
        }), {
            promise: p,
            captureBaseline: g,
            listeners: {
                onInteractionUpdate: k,
                onWorkflowStatus: C,
                onConversationState: T
            }
        };
    }
    async findTargetTurnIndex(t, e, n) {
        return lag(t.blobStore, e, n);
    }
    async waitForInitialState(t, e) {
        let n;
        const i = new Promise((r, s)=>{
            n = setTimeout(()=>s(new Error("Timed out waiting for cloud subagent initial state")), uhg);
        });
        try {
            await Promise.race([
                t.ready,
                i,
                new Promise((r, s)=>{
                    e.addEventListener("abort", ()=>s(new Error("aborted")), {
                        once: !0
                    });
                })
            ]);
        } finally{
            n && clearTimeout(n);
        }
    }
    async extractResultFromState(t, e, n, i, r) {
        try {
            let s, o = 0;
            const l = await this.findTargetTurnIndex(e, n, i) ?? Math.max(0, Math.min(r, n.turns.length));
            for(let c = l; c < n.turns.length; c++){
                const u = await e.blobStore.getBlob(Xp(), n.turns[c]);
                if (!u) continue;
                const d = fY.fromBinary(u);
                if (d.turn.case === "agentConversationTurn") for (const h of d.turn.value.steps){
                    const p = await e.blobStore.getBlob(Xp(), h);
                    if (!p) continue;
                    const g = iz.fromBinary(p);
                    g.message.case === "assistantMessage" ? s = g.message.value.text : g.message.case === "toolCall" && o++;
                }
            }
            return {
                finalMessage: s,
                toolCallCount: o
            };
        } catch (s) {
            return this.structuredLogService.debug("background_composer", "CloudSubagentRunner: failed to extract final state", {
                error: s instanceof Error ? s.message : String(s),
                toolCallId: t.toolCallId
            }), {
                finalMessage: void 0,
                toolCallCount: 0
            };
        }
    }
}, hos = Re([
    F(0, jl),
    F(1, jCt),
    F(2, ma),
    F(3, Qg),
    F(4, yr),
    F(5, eg),
    F(6, wh),
    F(7, dn),
    F(8, lG),
    F(9, Jv),
    F(10, ss),
    F(11, no),
    F(12, Uh)
], hos);

}
