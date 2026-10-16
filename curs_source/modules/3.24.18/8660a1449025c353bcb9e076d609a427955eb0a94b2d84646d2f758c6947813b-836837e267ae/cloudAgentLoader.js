import { Oog, Zog } from "./Aeg.js";
import { Ei, Hc } from "./Iwo.js";
import { v_t } from "./SZu.js";
import { A1k, M1k } from "./Ycg.js";
import { Dqe, Po, pd } from "./background_composer_pb.js";
import { wgg } from "./cloudAgentKickoffHydration.js";
import { CEi, dol, iag } from "./cloudAgentStream.js";
import { kEi } from "./cloudConversationTurnWindow.js";
import { y6 } from "./composerCapabilities.js";
import { uv } from "./composerData.js";
import { iCt } from "./composerDataHandle.js";
import { HPe } from "./composerModeUtils.js";
import { cGt } from "./controlled_3.ts";
import { bqt } from "./conversationStreamOffsets.js";
import { Fpe, Znl, uzt } from "./gYa.js";
import { nl } from "./index.ts";
import { FO } from "./index_10.ts";
import { B4, kbe } from "./ipa.js";
import { rG } from "./populateConversationFromState.js";
import { gis } from "./promptTokenBreakdown.js";
import { E } from "./tslib.es6.js";
import { Npe, RTn } from "./yBp.js";
var Cgg, zcl, Tgg, Egg;
export { Cgg, Egg, Tgg, zcl };
var __wakaru_D1k_initialized = false;
export function D1k() {
if (__wakaru_D1k_initialized) return;
__wakaru_D1k_initialized = true;
"use strict";
E(), FO(), nl(), Ei(), pd(), rG(), kEi(), wgg(), y6(), uv(), HPe(), iCt(), gis(), bqt(), CEi(), Cgg = iag, zcl = 4096, Tgg = 64, Egg = class {
    constructor(t){
        this.options = t, this._appliedWorkflowStatusOffsetKeys = new Map;
    }
    _workflowStatusHistory(t) {
        return {
            appliedOffsetKey: ()=>this._appliedWorkflowStatusOffsetKeys.get(t),
            rowUpdatedAtMs: ()=>this.options.getAgentRowUpdatedAtMs?.(t),
            recordApplied: (e)=>{
                const n = this._appliedWorkflowStatusOffsetKeys.get(t);
                (n === void 0 || Fpe(e, n) > 0) && this._appliedWorkflowStatusOffsetKeys.set(t, e);
            }
        };
    }
    async _loadPendingKickoffPromptFromDetailedComposer(t, e) {
        try {
            const r = (await (await this.options.aiService.backgroundComposerClient()).getBackgroundComposerInfo(new Dqe({
                bcId: t
            }))).composer;
            if (!r) return;
            const s = await A1k(r, this.options.selectedContextService, this.options.structuredLogService, e);
            return s && this.options.cloudAgentCacheService.savePendingKickoffPrompt(t, s), s;
        } catch (n) {
            this.options.structuredLogService.warn("background_composer", "CloudAgentRepository: Failed to seed kickoff prompt from detailed composer", {
                bcId: t,
                error: n instanceof Error ? n : void 0
            });
            return;
        }
    }
    async load(t, e = !1) {
        if (e) {
            await this._startStream(t);
            return;
        }
        const n = this.options.cloudAgentCacheService.loadState(t).catch(()=>{}), i = this.options.cloudAgentCacheService.loadPendingKickoffPrompt(t).catch(()=>{}), { cloudStream: r, initialState: s, turnWindowSize: o, turnWindowLimit: a } = await this._startStream(t, n, this.options.getChatBlobStore(t));
        return this._hydrateComposer({
            bcId: t,
            cloudStream: r,
            initialState: s,
            turnWindowSize: o,
            turnWindowLimit: a,
            cachedStatePromise: n,
            pendingKickoffPromptPromise: i
        });
    }
    async _startStream(t, e, n) {
        const i = new Set, r = new Set, s = new Set;
        let o = Promise.resolve(), a = !1;
        const l = (P, M)=>{
            o = o.then(async ()=>{
                if (!a) {
                    try {
                        this.options.onWorkflowStatus?.(t, P, M);
                    } catch (O) {
                        this.options.structuredLogService.error("background_composer", "CloudAgentRepository: Error in workflow status callback", O instanceof Error ? O : void 0, {
                            bcId: t,
                            status: P
                        });
                    }
                    for (const O of s){
                        if (a) return;
                        try {
                            await O(P);
                        } catch (N) {
                            this.options.structuredLogService.error("background_composer", "CloudAgentRepository: Error in workflow status listener", N instanceof Error ? N : void 0, {
                                bcId: t,
                                status: P
                            });
                        }
                    }
                }
            }).catch((O)=>{
                this.options.structuredLogService.error("background_composer", "CloudAgentRepository: Unexpected workflow status dispatch failure", O instanceof Error ? O : void 0, {
                    bcId: t,
                    status: P
                });
            });
        }, c = [], u = [];
        let d = !1;
        const h = (P, M)=>{
            if (this.options.onInteractionUpdateFanout?.(t, P, i.size), i.size === 0) {
                c.push({
                    update: P,
                    offsetKey: M
                }), c.length > zcl && (c.shift(), d || (d = !0, this.options.structuredLogService.debug("background_composer", "CloudAgentRepository: pre-attach interaction update buffer overflow; oldest updates dropped", {
                    bcId: t,
                    cap: zcl
                })));
                return;
            }
            for (const O of i)O(P);
        }, p = new Set;
        this.options.streams.get(t)?.abort(), this.options.onStreamOpen?.(t);
        const g = this.options.getHydrationTurnWindowSize?.(t), f = this.options.getHydrationTurnWindowLimit?.(t) ?? g, _ = new dol(t, h, this.options.aiService, this.options.cloudAgentCacheService, this.options.structuredLogService, (P, M)=>{
            l(P, M);
        }, (P)=>{
            for (const M of r)M(P);
        }, this.options.experimentService, this.options.onAgentName === void 0 ? void 0 : (P)=>this.options.onAgentName(t, P), this.options.metricsService, e, g, n, this._workflowStatusHistory(t));
        this.options.streams.set(t, _), _.interactionQueryListeners.add((P)=>{
            if (p.size === 0) {
                u.push({
                    query: P,
                    offsetKey: _.getLatestOffsetKey()
                }), u.length > Tgg && u.shift();
                return;
            }
            for (const M of p)M(P);
        });
        const b = ()=>{
            const P = _.getConversationStateOffsetKey();
            if (P === void 0 || P.length === 0) return;
            const M = (N)=>N !== void 0 && Fpe(N, P) <= 0, O = (N)=>{
                for(let U = N.length - 1; U >= 0; U--)M(N[U].offsetKey) && N.splice(U, 1);
            };
            O(c), O(u);
        };
        _.conversationStateListeners.add(b);
        let y;
        const S = new Promise((P, M)=>{
            y = setTimeout(()=>M(new Error("Timed out waiting for initial conversation state")), Cgg);
        });
        let k;
        try {
            k = await Promise.race([
                _.ready,
                S
            ]);
        } catch (P) {
            throw _.abort(), this.options.streams.get(t) === _ && this.options.streams.delete(t), P;
        } finally{
            y && clearTimeout(y);
        }
        const C = this.options.streams.get(t);
        if (_.isAborted || C !== _) throw _.abort(), C === _ && this.options.streams.delete(t), new Hc;
        const T = this.options.onPinnedWorkerOffline, I = T === void 0 ? void 0 : _.pinnedWorkerOffline.onChange((P)=>{
            this.options.activeStreams.get(t) === A && T(t, P);
        }), A = {
            bcId: t,
            abortController: _.abortController,
            connected: _.connected,
            conversationState: _.conversationState,
            getLatestOffsetKey: ()=>_.getLatestOffsetKey(),
            getLatestAdmittedCustomModeStateBlobId: ()=>_.getLatestAdmittedCustomModeStateBlobId(),
            getLatestVideoAnnotationsBlobIdState: ()=>_.getLatestVideoAnnotationsBlobIdState(),
            getLatestVoiceCallsBlobIdState: ()=>_.getLatestVoiceCallsBlobIdState(),
            getConversationStateOffsetKey: ()=>_.getConversationStateOffsetKey(),
            getCurrentSubagentRunsByParentToolCallId: _.getCurrentSubagentRunsByParentToolCallId,
            getLatestNumCompletedTurns: ()=>_.getLatestNumCompletedTurns(),
            getLatestSuggestedRepoNames: ()=>_.getLatestSuggestedRepoNames(),
            getLatestUserFacingErrorDetails: ()=>_.getLatestUserFacingErrorDetails(),
            getLatestResubmitSkippedOffsetKey: ()=>_.getLatestResubmitSkippedOffsetKey(),
            clearUserFacingErrorDetails: ()=>_.clearUserFacingErrorDetails(),
            clearUserFacingErrorDetailsWithRestore: ()=>_.clearUserFacingErrorDetailsWithRestore(),
            streamError: _.streamError,
            clearStreamError: ()=>_.clearStreamError(),
            pinnedWorkerOffline: _.pinnedWorkerOffline,
            debugInjectStreamMessage: (P)=>_.debugInjectStreamMessage(P),
            interactionUpdateListeners: i,
            interactionQueryListeners: p,
            conversationStateListeners: _.conversationStateListeners,
            admittedCustomModeStateListeners: _.admittedCustomModeStateListeners,
            videoAnnotationsBlobIdListeners: _.videoAnnotationsBlobIdListeners,
            voiceCallsBlobIdListeners: _.voiceCallsBlobIdListeners,
            suggestedRepoNamesListeners: _.suggestedRepoNamesListeners,
            newInitialStateListeners: r,
            workflowStatusListeners: s,
            blobStore: _.blobStore,
            get participantsByUserId () {
                return _.participantsByUserId;
            },
            requestReconnect: ()=>_.requestReconnect(),
            isStreamLoopExited: ()=>_.streamLoopExited,
            isTerminalParked: ()=>_.terminalParked,
            waitForNetworkInitialState: ()=>_.waitForNetworkInitialState(),
            getLastStreamActivityAtMs: ()=>_.getLastStreamActivityAtMs(),
            takePendingInteractionUpdates: ()=>(b(), c.splice(0)),
            takePendingInteractionQueries: ()=>(b(), u.splice(0).map((P)=>P.query)),
            abort: ()=>{
                a = !0, I?.dispose(), this.options.activeStreams.get(t) === A && T?.(t, !1), (c.length > 0 || u.length > 0) && this.options.structuredLogService.info("background_composer", "CloudAgentRepository: stream aborted with undelivered pre-attach interaction updates", {
                    bcId: t,
                    droppedUpdateCount: c.length,
                    droppedQueryCount: u.length,
                    hadInteractionListeners: i.size > 0,
                    latestOffsetKey: _.getLatestOffsetKey(),
                    newestDroppedOffsetKey: c[c.length - 1]?.offsetKey
                }), i.clear(), p.clear(), _.interactionQueryListeners.clear(), _.conversationStateListeners.clear(), _.admittedCustomModeStateListeners.clear(), _.videoAnnotationsBlobIdListeners.clear(), _.voiceCallsBlobIdListeners.clear(), _.suggestedRepoNamesListeners.clear(), r.clear(), s.clear(), c.length = 0, u.length = 0, _.abort();
            }
        };
        return this.options.activeStreams.set(t, A), T?.(t, _.pinnedWorkerOffline.value), this.options.notifyActiveStreamAttached(t, A), {
            cloudStream: _,
            initialState: k,
            turnWindowSize: g,
            turnWindowLimit: f
        };
    }
    async _hydrateComposer(t) {
        const { bcId: e, cloudStream: n, initialState: i, turnWindowLimit: r, cachedStatePromise: s, pendingKickoffPromptPromise: o } = t, a = B4(this.options.modelConfigService.getModelConfig("background-composer"), e);
        a.createdFromBackgroundAgent = {
            bcId: e,
            shouldStreamMessages: !0,
            kickoffMessageId: void 0
        };
        const l = new cGt;
        a.conversationActionManager = l;
        const c = RTn(a), u = kbe(this.options.instantiationService, e, {
            savedCapabilityData: [],
            providedHandle: c
        });
        a.capabilities = u;
        let d = i.tokenDetails;
        try {
            const h = await s;
            this.options.structuredLogService.info("background_composer", "CloudAgentRepository: cache bootstrap result", {
                bcId: e,
                cacheHit: !!h?.state
            });
            const p = n.conversationState.value ?? i;
            d = p.tokenDetails, a.conversationState = p;
            const g = p === h?.state ? "cache" : "initialState", f = Date.now();
            let _ = await o;
            !_ && p.turns.length === 0 && (_ = await this._loadPendingKickoffPromptFromDetailedComposer(e, n.blobStore));
            const b = M1k(p, _);
            b.kickoffMessageId && (a.createdFromBackgroundAgent = {
                ...a.createdFromBackgroundAgent,
                kickoffMessageId: b.kickoffMessageId
            }), b.shouldClearPendingKickoffPrompt && this.options.cloudAgentCacheService.deletePendingKickoffPrompt(e);
            const y = this.options.getHydrationBackgroundComposerStatus?.(e), S = y === Po.RUNNING || y === Po.CREATING, k = v_t(this.options.getHydrationSideChatSeedTurnCount?.(e), p.turns.length), C = async (I, A)=>Npe({
                    conversationState: p,
                    blobStore: n.blobStore,
                    instantiationService: this.options.instantiationService,
                    selectedContextService: this.options.selectedContextService,
                    structuredLogService: this.options.structuredLogService,
                    kickoffMessageId: b.kickoffMessageId,
                    maxTurns: I,
                    existingConversationMap: A?.conversationMap ?? b.existingConversationMap,
                    existingConversationHeaders: A?.conversationHeaders ?? b.existingConversationHeaders,
                    enableLazyStepLoading: !0,
                    onlyLastStepForCompletedTurns: !0,
                    lastTurnPending: S,
                    skipLeadingTurns: k,
                    backgroundComposerSource: this.options.getHydrationBackgroundComposerSource?.(e),
                    conversationParentAgentId: this.options.getHydrationParentAgentId?.(e),
                    resolveMessageSenderLabel: Zog({
                        viewerAuthId: this.options.getViewerAuthId?.(),
                        participantsByUserId: n.participantsByUserId
                    }),
                    latestSubagentRunsByParentToolCallId: n.getCurrentSubagentRunsByParentToolCallId
                });
            let T = await C(r);
            if (r !== void 0) {
                const I = Math.max(0, p.turns.length - k), A = await Oog({
                    currentLimit: r,
                    pageSize: r,
                    availableTurns: I,
                    hydrated: T,
                    populate: (P, M)=>C(P, M)
                });
                T = A.hydrated, A.limit !== r && this.options.onHydrationTurnWindowLimitGrown?.(e, A.limit);
            }
            a.unifiedMode = uzt(p.mode), a.conversationMap = T.conversationMap, a.fullConversationHeadersOnly = T.conversationHeaders, a.todos = T.todos, a.latestCloudAgentTurnRequestId = T.latestAgentTurnRequestId, this.options.placeholderResolvers.set(e, T.resolvePlaceholder), this.options.structuredLogService.info("background_composer", `CloudAgentRepository: ${g} hydration applied`, {
                bcId: e,
                headers: T.conversationHeaders.length,
                elapsedMs: Date.now() - f
            }), this.options.onInitialStateHydrated?.(e, p, b.kickoffMessageId, S);
        } catch (h) {
            this.options.structuredLogService.error("background_composer", "CloudAgentRepository: Failed to populate conversation from state", h instanceof Error ? h : void 0, {
                bcId: e
            }), a.conversationLoadError = h instanceof Error && h.message.length > 0 ? h.message : String(h);
        }
        return Object.assign(a, Znl(d, !0)), a;
    }
};

}
