import { S2n, qWi, qWt, wPe } from "./A3u.js";
import { G0e, O5, a8i, eSt, qh } from "./De_3.js";
import { Rl, si } from "./HVr.js";
import { xd } from "./agent_pb.js";
import { go, hm, wUe } from "./background_composer_pb.js";
import { FSh, kSh } from "./cgh.js";
import { Tr, Uv } from "./chat_pb.js";
import { Wxh } from "./cloudAgentKickoffHydration.js";
import { Hxh } from "./cloudAgentRepositoryService.js";
import { GSh, h3n, mCo } from "./cloudAgentStream.js";
import { u3n } from "./cloudConversationTurnWindow.js";
import { T2 } from "./composerCapabilities.js";
import { Wf } from "./composerData.js";
import { HHt } from "./composerDataHandle.js";
import { F1e } from "./composerModeUtils.js";
import { skt } from "./controlled_3.ts";
import { rwt } from "./conversationStreamOffsets.js";
import { Ml } from "./index.ts";
import { z3 } from "./index_10.ts";
import { nG } from "./populateConversationFromState.js";
import { uSo } from "./promptTokenBreakdown.js";
import { Obn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { SFn, sgh, zee } from "./xmo.js";
function Uxh(e) {
    if (e?.action) switch(e.action.case){
        case "userMessageAction":
            return e.action.value.userMessage;
        case "subscriptionNotificationAction":
            return e.action.value.notifications.at(-1);
        case "startPlanAction":
            return e.action.value.userMessage;
        case void 0:
            return;
        default:
            return;
    }
}
async function $xh(e, t, n) {
    const i = e.selectedContext ? await qWt(qh(), e.selectedContext, n, t) : {}, r = e.simulatedMsgReason, s = r !== void 0 && r !== xd.UNSPECIFIED, o = S2n(e.simulatedMessageMetadata);
    return new Uv({
        type: Tr.HUMAN,
        text: e.text ?? "",
        richText: e.richText,
        isSimulatedMsg: e.isSimulatedMsg,
        ...s && {
            simulatedMsgReason: r,
            ...o !== void 0 && {
                simulatedMessageMetadata: o
            }
        },
        ...i
    });
}
async function qe_(e, t, n, i) {
    const r = Uxh(e.originalConversationAction);
    if (!r) return;
    const s = await $xh(r, n, i), o = await t.getContextObjectFromPopulatedConversationMessage(s, r.selectedContext), a = r.simulatedMsgReason, c = a !== void 0 && a !== xd.UNSPECIFIED, l = S2n(r.simulatedMessageMetadata), u = s.text ?? "", h = s.richText && eSt(s.richText);
    if (u.trim().length > 0 || (h?.trim().length ?? 0) > 0 || a8i(o)) return {
        text: u,
        richText: h && h.length > 0 ? h : void 0,
        messageId: r.messageId,
        context: o,
        isSimulatedMsg: r.isSimulatedMsg,
        ...c && {
            simulatedMsgReason: a
        },
        ...c && l !== void 0 && {
            simulatedMessageMetadata: l
        }
    };
}
function Ye_(e, t) {
    return t ? e.turns.length > 0 ? {
        existingConversationMap: {},
        existingConversationHeaders: [],
        kickoffMessageId: void 0,
        shouldClearPendingKickoffPrompt: !0
    } : Hxh(t) : {
        existingConversationMap: {},
        existingConversationHeaders: [],
        kickoffMessageId: void 0,
        shouldClearPendingKickoffPrompt: !1
    };
}
var Gxh, LTo, Vxh, jxh;
export { $xh, Gxh, LTo, Uxh, Vxh, Ye_, jxh, qe_ };
var __wakaru_Xe__initialized = false;
export function Xe_() {
if (__wakaru_Xe__initialized) return;
__wakaru_Xe__initialized = true;
"use strict";
x(), z3(), Ml(), si(), hm(), nG(), u3n(), Wxh(), T2(), Wf(), F1e(), HHt(), uSo(), rwt(), h3n(), Gxh = GSh, LTo = 4096, Vxh = 64, jxh = class {
    constructor(e){
        this.options = e, this._appliedWorkflowStatusOffsetKeys = new Map;
    }
    _workflowStatusHistory(e) {
        return {
            appliedOffsetKey: ()=>this._appliedWorkflowStatusOffsetKeys.get(e),
            rowUpdatedAtMs: ()=>this.options.getAgentRowUpdatedAtMs?.(e),
            recordApplied: (t)=>{
                const n = this._appliedWorkflowStatusOffsetKeys.get(e);
                (n === void 0 || zee(t, n) > 0) && this._appliedWorkflowStatusOffsetKeys.set(e, t);
            }
        };
    }
    async _loadPendingKickoffPromptFromDetailedComposer(e, t) {
        try {
            const r = (await (await this.options.aiService.backgroundComposerClient()).getBackgroundComposerInfo(new wUe({
                bcId: e
            }))).composer;
            if (!r) return;
            const s = await qe_(r, this.options.selectedContextService, this.options.structuredLogService, t);
            return s && this.options.cloudAgentCacheService.savePendingKickoffPrompt(e, s), s;
        } catch (n) {
            this.options.structuredLogService.warn("background_composer", "CloudAgentRepository: Failed to seed kickoff prompt from detailed composer", {
                bcId: e,
                error: n instanceof Error ? n : void 0
            });
            return;
        }
    }
    async load(e, t = !1) {
        if (t) {
            await this._startStream(e);
            return;
        }
        const n = this.options.cloudAgentCacheService.loadState(e).catch(()=>{}), i = this.options.cloudAgentCacheService.loadPendingKickoffPrompt(e).catch(()=>{}), { cloudStream: r, initialState: s, turnWindowSize: o, turnWindowLimit: a } = await this._startStream(e, n, this.options.getChatBlobStore(e));
        return this._hydrateComposer({
            bcId: e,
            cloudStream: r,
            initialState: s,
            turnWindowSize: o,
            turnWindowLimit: a,
            cachedStatePromise: n,
            pendingKickoffPromptPromise: i
        });
    }
    async _startStream(e, t, n) {
        const i = new Set, r = new Set, s = new Set;
        let o = Promise.resolve(), a = !1;
        const c = (O, F)=>{
            o = o.then(async ()=>{
                if (!a) {
                    try {
                        this.options.onWorkflowStatus?.(e, O, F);
                    } catch (H) {
                        this.options.structuredLogService.error("background_composer", "CloudAgentRepository: Error in workflow status callback", H instanceof Error ? H : void 0, {
                            bcId: e,
                            status: O
                        });
                    }
                    for (const H of s){
                        if (a) return;
                        try {
                            await H(O);
                        } catch ($) {
                            this.options.structuredLogService.error("background_composer", "CloudAgentRepository: Error in workflow status listener", $ instanceof Error ? $ : void 0, {
                                bcId: e,
                                status: O
                            });
                        }
                    }
                }
            }).catch((H)=>{
                this.options.structuredLogService.error("background_composer", "CloudAgentRepository: Unexpected workflow status dispatch failure", H instanceof Error ? H : void 0, {
                    bcId: e,
                    status: O
                });
            });
        }, l = [], u = [];
        let h = !1;
        const p = (O, F)=>{
            if (this.options.onInteractionUpdateFanout?.(e, O, i.size), i.size === 0) {
                l.push({
                    update: O,
                    offsetKey: F
                }), l.length > LTo && (l.shift(), h || (h = !0, this.options.structuredLogService.debug("background_composer", "CloudAgentRepository: pre-attach interaction update buffer overflow; oldest updates dropped", {
                    bcId: e,
                    cap: LTo
                })));
                return;
            }
            for (const H of i)H(O);
        }, g = new Set;
        this.options.streams.get(e)?.abort(), this.options.onStreamOpen?.(e);
        const f = this.options.getHydrationTurnWindowSize?.(e), v = this.options.getHydrationTurnWindowLimit?.(e) ?? f, b = new mCo(e, p, this.options.aiService, this.options.cloudAgentCacheService, this.options.structuredLogService, (O, F)=>{
            c(O, F);
        }, (O)=>{
            for (const F of r)F(O);
        }, this.options.experimentService, this.options.onAgentName === void 0 ? void 0 : (O)=>this.options.onAgentName(e, O), this.options.metricsService, t, f, n, this._workflowStatusHistory(e));
        this.options.streams.set(e, b), b.interactionQueryListeners.add((O)=>{
            if (g.size === 0) {
                u.push({
                    query: O,
                    offsetKey: b.getLatestOffsetKey()
                }), u.length > Vxh && u.shift();
                return;
            }
            for (const F of g)F(O);
        });
        const y = ()=>{
            const O = b.getConversationStateOffsetKey();
            if (O === void 0 || O.length === 0) return;
            const F = ($)=>$ !== void 0 && zee($, O) <= 0, H = ($)=>{
                for(let W = $.length - 1; W >= 0; W--)F($[W].offsetKey) && $.splice(W, 1);
            };
            H(l), H(u);
        };
        b.conversationStateListeners.add(y);
        let T;
        const E = new Promise((O, F)=>{
            T = setTimeout(()=>F(new Error("Timed out waiting for initial conversation state")), Gxh);
        });
        let A;
        try {
            A = await Promise.race([
                b.ready,
                E
            ]);
        } catch (O) {
            throw b.abort(), this.options.streams.get(e) === b && this.options.streams.delete(e), O;
        } finally{
            T && clearTimeout(T);
        }
        const R = this.options.streams.get(e);
        if (b.isAborted || R !== b) throw b.abort(), R === b && this.options.streams.delete(e), new Rl;
        const D = this.options.onPinnedWorkerOffline, P = D === void 0 ? void 0 : b.pinnedWorkerOffline.onChange((O)=>{
            this.options.activeStreams.get(e) === N && D(e, O);
        }), N = {
            bcId: e,
            abortController: b.abortController,
            connected: b.connected,
            conversationState: b.conversationState,
            getLatestOffsetKey: ()=>b.getLatestOffsetKey(),
            getLatestAdmittedCustomModeStateBlobId: ()=>b.getLatestAdmittedCustomModeStateBlobId(),
            getLatestVideoAnnotationsBlobIdState: ()=>b.getLatestVideoAnnotationsBlobIdState(),
            getLatestVoiceCallsBlobIdState: ()=>b.getLatestVoiceCallsBlobIdState(),
            getConversationStateOffsetKey: ()=>b.getConversationStateOffsetKey(),
            getCurrentSubagentRunsByParentToolCallId: b.getCurrentSubagentRunsByParentToolCallId,
            getLatestNumCompletedTurns: ()=>b.getLatestNumCompletedTurns(),
            getLatestSuggestedRepoNames: ()=>b.getLatestSuggestedRepoNames(),
            getLatestUserFacingErrorDetails: ()=>b.getLatestUserFacingErrorDetails(),
            getLatestResubmitSkippedOffsetKey: ()=>b.getLatestResubmitSkippedOffsetKey(),
            clearUserFacingErrorDetails: ()=>b.clearUserFacingErrorDetails(),
            clearUserFacingErrorDetailsWithRestore: ()=>b.clearUserFacingErrorDetailsWithRestore(),
            streamError: b.streamError,
            clearStreamError: ()=>b.clearStreamError(),
            pinnedWorkerOffline: b.pinnedWorkerOffline,
            debugInjectStreamMessage: (O)=>b.debugInjectStreamMessage(O),
            interactionUpdateListeners: i,
            interactionQueryListeners: g,
            conversationStateListeners: b.conversationStateListeners,
            admittedCustomModeStateListeners: b.admittedCustomModeStateListeners,
            videoAnnotationsBlobIdListeners: b.videoAnnotationsBlobIdListeners,
            voiceCallsBlobIdListeners: b.voiceCallsBlobIdListeners,
            suggestedRepoNamesListeners: b.suggestedRepoNamesListeners,
            newInitialStateListeners: r,
            workflowStatusListeners: s,
            blobStore: b.blobStore,
            get participantsByUserId () {
                return b.participantsByUserId;
            },
            requestReconnect: ()=>b.requestReconnect(),
            isStreamLoopExited: ()=>b.streamLoopExited,
            isTerminalParked: ()=>b.terminalParked,
            waitForNetworkInitialState: ()=>b.waitForNetworkInitialState(),
            getLastStreamActivityAtMs: ()=>b.getLastStreamActivityAtMs(),
            takePendingInteractionUpdates: ()=>(y(), l.splice(0)),
            takePendingInteractionQueries: ()=>(y(), u.splice(0).map((O)=>O.query)),
            abort: ()=>{
                a = !0, P?.dispose(), this.options.activeStreams.get(e) === N && D?.(e, !1), (l.length > 0 || u.length > 0) && this.options.structuredLogService.info("background_composer", "CloudAgentRepository: stream aborted with undelivered pre-attach interaction updates", {
                    bcId: e,
                    droppedUpdateCount: l.length,
                    droppedQueryCount: u.length,
                    hadInteractionListeners: i.size > 0,
                    latestOffsetKey: b.getLatestOffsetKey(),
                    newestDroppedOffsetKey: l[l.length - 1]?.offsetKey
                }), i.clear(), g.clear(), b.interactionQueryListeners.clear(), b.conversationStateListeners.clear(), b.admittedCustomModeStateListeners.clear(), b.videoAnnotationsBlobIdListeners.clear(), b.voiceCallsBlobIdListeners.clear(), b.suggestedRepoNamesListeners.clear(), r.clear(), s.clear(), l.length = 0, u.length = 0, b.abort();
            }
        };
        return this.options.activeStreams.set(e, N), D?.(e, b.pinnedWorkerOffline.value), this.options.notifyActiveStreamAttached(e, N), {
            cloudStream: b,
            initialState: A,
            turnWindowSize: f,
            turnWindowLimit: v
        };
    }
    async _hydrateComposer(e) {
        const { bcId: t, cloudStream: n, initialState: i, turnWindowLimit: r, cachedStatePromise: s, pendingKickoffPromptPromise: o } = e, a = O5(this.options.modelConfigService.getModelConfig("background-composer"), t);
        a.createdFromBackgroundAgent = {
            bcId: t,
            shouldStreamMessages: !0,
            kickoffMessageId: void 0
        };
        const c = new skt;
        a.conversationActionManager = c;
        const l = qWi(a), u = G0e(this.options.instantiationService, t, {
            savedCapabilityData: [],
            providedHandle: l
        });
        a.capabilities = u;
        let h = i.tokenDetails;
        try {
            const p = await s;
            this.options.structuredLogService.info("background_composer", "CloudAgentRepository: cache bootstrap result", {
                bcId: t,
                cacheHit: !!p?.state
            });
            const g = n.conversationState.value ?? i;
            h = g.tokenDetails, a.conversationState = g;
            const f = g === p?.state ? "cache" : "initialState", v = Date.now();
            let b = await o;
            !b && g.turns.length === 0 && (b = await this._loadPendingKickoffPromptFromDetailedComposer(t, n.blobStore));
            const y = Ye_(g, b);
            y.kickoffMessageId && (a.createdFromBackgroundAgent = {
                ...a.createdFromBackgroundAgent,
                kickoffMessageId: y.kickoffMessageId
            }), y.shouldClearPendingKickoffPrompt && this.options.cloudAgentCacheService.deletePendingKickoffPrompt(t);
            const T = this.options.getHydrationBackgroundComposerStatus?.(t), E = T === go.RUNNING || T === go.CREATING, A = Obn(this.options.getHydrationSideChatSeedTurnCount?.(t), g.turns.length), R = async (P, N)=>wPe({
                    conversationState: g,
                    blobStore: n.blobStore,
                    instantiationService: this.options.instantiationService,
                    selectedContextService: this.options.selectedContextService,
                    structuredLogService: this.options.structuredLogService,
                    kickoffMessageId: y.kickoffMessageId,
                    maxTurns: P,
                    existingConversationMap: N?.conversationMap ?? y.existingConversationMap,
                    existingConversationHeaders: N?.conversationHeaders ?? y.existingConversationHeaders,
                    enableLazyStepLoading: !0,
                    onlyLastStepForCompletedTurns: !0,
                    lastTurnPending: E,
                    skipLeadingTurns: A,
                    backgroundComposerSource: this.options.getHydrationBackgroundComposerSource?.(t),
                    conversationParentAgentId: this.options.getHydrationParentAgentId?.(t),
                    resolveMessageSenderLabel: FSh({
                        viewerAuthId: this.options.getViewerAuthId?.(),
                        participantsByUserId: n.participantsByUserId
                    }),
                    latestSubagentRunsByParentToolCallId: n.getCurrentSubagentRunsByParentToolCallId
                });
            let D = await R(r);
            if (r !== void 0) {
                const P = Math.max(0, g.turns.length - A), N = await kSh({
                    currentLimit: r,
                    pageSize: r,
                    availableTurns: P,
                    hydrated: D,
                    populate: (O, F)=>R(O, F)
                });
                D = N.hydrated, N.limit !== r && this.options.onHydrationTurnWindowLimitGrown?.(t, N.limit);
            }
            a.unifiedMode = SFn(g.mode), a.conversationMap = D.conversationMap, a.fullConversationHeadersOnly = D.conversationHeaders, a.todos = D.todos, a.latestCloudAgentTurnRequestId = D.latestAgentTurnRequestId, this.options.placeholderResolvers.set(t, D.resolvePlaceholder), this.options.structuredLogService.info("background_composer", `CloudAgentRepository: ${f} hydration applied`, {
                bcId: t,
                headers: D.conversationHeaders.length,
                elapsedMs: Date.now() - v
            }), this.options.onInitialStateHydrated?.(t, g, y.kickoffMessageId, E);
        } catch (p) {
            this.options.structuredLogService.error("background_composer", "CloudAgentRepository: Failed to populate conversation from state", p instanceof Error ? p : void 0, {
                bcId: t
            }), a.conversationLoadError = p instanceof Error && p.message.length > 0 ? p.message : String(p);
        }
        return Object.assign(a, sgh(h, !0)), a;
    }
};

}
