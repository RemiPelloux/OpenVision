import { EAw, LRw, NRw, U0w, a9l, lRw, oRw, v9f, vNi, w6l, wRw } from "./BA.js";
import { Pn, Qe, Vn, m1, st } from "./Iwo.js";
import { q_f } from "./Ycg.js";
import { Yu, qn } from "./async.js";
import { aRw } from "./composerActiveToolBubbleRetention.js";
import { _2l } from "./composerHeaderStructureBackfill.js";
import { tU } from "./composerMessagesHelpers.js";
import { aNi } from "./composerMessagesToolCalls.js";
import { Uks } from "./composerTranscriptApproval.js";
import { o9l } from "./composerTranscriptEntries.js";
import { uRw } from "./composerTranscriptHeaderProjection.js";
import { fDn, tKe } from "./composerTranscriptPerfCounters.js";
import { ceg, hzt } from "./gYa.js";
import { v1 } from "./store.js";
import { E } from "./tslib.es6.js";
import { $se, Wu, gA, ks, pi, vt } from "./ze.js";
var l9l, _9f, b9f;
export { _9f, b9f, l9l };
var __wakaru_ORw_initialized = false;
export function ORw() {
if (__wakaru_ORw_initialized) return;
__wakaru_ORw_initialized = true;
"use strict";
E(), pi(), v1(), Qe(), qn(), aNi(), tU(), aRw(), Uks(), uRw(), o9l(), _2l(), fDn(), l9l = 100, _9f = class extends st {
    constructor(t, e, n, i = ()=>"off", r = ()=>!1){
        super(), this.composerHandle = t, this.composerDataService = e, this.storageService = n, this.getSendMessageNormalizationMode = i, this.getProjectAgentToolRows = r, this.headersRevision = 0, this.lastProjectedByBubbleId = new Map, this.headerListeners = new Set, this.bubbleListeners = new Map, this.waveBubbleEntriesCache = new Map, this.waveBubbleEntriesCacheClearScheduled = !1, this.editDisplayCache = new Map, this.editDisplayCacheKeysByBubble = new Map, this.pendingEditDisplayHydration = new Set, this.conversationStateListeners = new Set, this.conversationStateSubscription = this._register(new Vn), this.composerId = t.composerId, this.sourceId = `solid:${t.composerId}`, this._register(Pn(()=>{
            this.conversationStateSubscription.clear(), this.conversationStateListeners.clear();
        })), this._register(vNi(()=>{
            NRw(this.getComposerDataForReactiveTracking());
        }, ()=>{
            this.invalidateHeadersSnapshot(), this.notifyHeaderListeners();
        }, "computed"));
    }
    dispose() {
        this.editDisplayCache.clear(), this.editDisplayCacheKeysByBubble.clear(), this.cachedHeadersSnapshot = void 0, this.cachedHeaderBubbleIds = void 0, this.cachedConversationMapRef = void 0, this.disposeBubbleGeneratingSelector?.(), this.disposeBubbleGeneratingSelector = void 0, this.isBubbleGeneratingSelector = void 0, this.disposeActiveToolBubbleIdsMemo?.(), this.disposeActiveToolBubbleIdsMemo = void 0, this.activeToolBubbleIdsMemo = void 0, this.composerDataService.releaseHeaderGroupingPreviewStrings?.(this.composerHandle), super.dispose();
    }
    getComposerDataForReactiveTracking() {
        return this.composerDataService.getComposerDataIfLoadedReactive?.(this.composerId) ?? this.composerDataService.getComposerData(this.composerHandle);
    }
    isBubbleGenerating(t) {
        return this.isBubbleGeneratingSelector === void 0 && (this.isBubbleGeneratingSelector = gA((e)=>(this.disposeBubbleGeneratingSelector = e, $se(()=>a9l(this.getComposerDataForReactiveTracking()?.generatingBubbleIds), (n, i)=>i.includes(n))))), this.isBubbleGeneratingSelector(t);
    }
    subscribeHeaders(t) {
        if (this._store.isDisposed) return st.None;
        this.headerListeners.add(t);
        const e = vNi(()=>{
            this.getPendingToolCallIds();
        }, ()=>{
            this.invalidateHeadersSnapshot(), t();
        }, "computed");
        return Pn(()=>{
            this.headerListeners.delete(t), e.dispose();
        });
    }
    subscribeBubble(t, e) {
        return this.subscribeBubbles([
            t
        ], e);
    }
    subscribeBubbleInvalidations(t, e) {
        if (this._store.isDisposed) return st.None;
        const n = this.subscribeConversationState(()=>{});
        for (const i of t){
            let r = this.bubbleListeners.get(i);
            r || (r = new Set, this.bubbleListeners.set(i, r)), r.add(e);
        }
        return Pn(()=>{
            for (const i of t){
                const r = this.bubbleListeners.get(i);
                r && (r.delete(e), r.size === 0 && this.bubbleListeners.delete(i));
            }
            n.dispose();
        });
    }
    subscribeBubbles(t, e) {
        if (this._store.isDisposed) return st.None;
        const n = LRw(e), i = this.subscribeBubbleInvalidations(t, n.notify), r = ()=>{
            for (const l of t){
                const c = this.composerDataService.getComposerBubble(this.composerHandle, l);
                c !== void 0 && this.buildAndCacheBubbleEntries(l, c, this.isBubbleGenerating(l));
            }
        };
        let s = vNi(r, n.notify), o = ks(()=>this.getComposerDataForReactiveTracking());
        const a = this.subscribeConversationState(()=>{
            const l = ks(()=>this.getComposerDataForReactiveTracking());
            l !== o && (o = l, s.dispose(), s = vNi(r, n.notify)), n.notify();
        });
        return Pn(()=>{
            m1(s, a, n, i);
        });
    }
    subscribeConversationState(t) {
        return this._store.isDisposed ? st.None : (this.conversationStateListeners.add(t), this.conversationStateSubscription.value === void 0 && (this.conversationStateSubscription.value = vNi(()=>{
            this.observedNormalizationMode = this.getSendMessageNormalizationMode();
            const e = this.getComposerDataForReactiveTracking();
            e !== void 0 && e.fullConversationHeadersOnly;
        }, ()=>{
            const e = this.observedNormalizationMode;
            if (e !== this.deliveredNormalizationMode) {
                this.deliveredNormalizationMode = e;
                for (const n of [
                    ...this.bubbleListeners.keys()
                ])this.notifyBubbleListeners(n);
            }
            for (const n of [
                ...this.conversationStateListeners
            ])n();
        }), this.deliveredNormalizationMode = this.observedNormalizationMode), Pn(()=>{
            this.conversationStateListeners.delete(t) && this.conversationStateListeners.size === 0 && this.conversationStateSubscription.clear();
        }));
    }
    getHeadersSnapshot() {
        if (this.cachedHeadersSnapshot?.revision === this.headersRevision) return this.cachedHeadersSnapshot;
        const t = this.composerDataService.getComposerData(this.composerHandle);
        if (!t) return this.lastProjectedByBubbleId = new Map, this.cachedHeadersSnapshot = {
            status: "loading",
            composerId: this.composerId,
            headers: [],
            generatingBubbleIds: [],
            isGenerating: !1,
            revision: this.headersRevision
        }, this.cachedHeadersSnapshot;
        const e = this.lastProjectedByBubbleId, n = new Map;
        tKe.headerSnapshotBuilds += 1;
        const i = hzt(t).map((o)=>{
            const a = lRw(Wu(o), e.get(o.bubbleId));
            return n.set(o.bubbleId, a), a;
        }), r = a9l(ceg(t)), s = this.composerDataService.isComposerGeneratingForDisplay(this.composerHandle, t.status === "generating");
        return this.lastProjectedByBubbleId = n, this.cachedHeadersSnapshot = {
            status: "ready",
            composerId: this.composerId,
            headers: i,
            generatingBubbleIds: r,
            isGenerating: s,
            revision: this.headersRevision
        }, this.cachedHeadersSnapshot;
    }
    classifyBubble(t) {
        const e = this.composerDataService.getComposerData(this.composerHandle);
        if (!e) return {
            status: "loading",
            bubbleId: t
        };
        let n = this.cachedConversationMapRef;
        (n === void 0 || n.composer !== e) && (n = {
            composer: e,
            map: ks(()=>e.conversationMap)
        }, this.cachedConversationMapRef = n);
        const i = n.map[t];
        return i ? {
            status: "loaded",
            bubbleId: t,
            bubble: i,
            composer: e
        } : {
            status: ks(()=>this.getHeaderBubbleIdSet(e.fullConversationHeadersOnly).has(t)) ? "unloaded" : "missing",
            bubbleId: t
        };
    }
    getBubbleLoadState(t) {
        const e = this.classifyBubble(t);
        return e.status !== "loaded" ? {
            status: e.status,
            bubbleId: t
        } : {
            status: "loaded",
            bubbleId: t,
            composerMessage: e.bubble
        };
    }
    getBubbleSnapshot(t) {
        const e = this.classifyBubble(t);
        return e.status !== "loaded" ? {
            status: e.status,
            bubbleId: t
        } : {
            status: "loaded",
            bubbleId: t,
            composerMessage: e.bubble,
            entries: this.getBubbleEntriesForSnapshot(t, e.bubble, this.isBubbleGenerating(t))
        };
    }
    getBubbleEntriesForSnapshot(t, e, n) {
        const i = ks(()=>this.getSendMessageNormalizationMode()) === "active", r = this.waveBubbleEntriesCache.get(t);
        return r !== void 0 && r.bubble === e && r.isStreaming === n && r.promoteSentMessages === i ? r.entries : this.buildAndCacheBubbleEntries(t, e, n, i);
    }
    buildAndCacheBubbleEntries(t, e, n, i = ks(()=>this.getSendMessageNormalizationMode()) === "active") {
        const r = this.createBubbleEntries(t, e, n, i);
        return this.waveBubbleEntriesCache.set(t, {
            bubble: e,
            isStreaming: n,
            promoteSentMessages: i,
            entries: r
        }), this.waveBubbleEntriesCacheClearScheduled || (this.waveBubbleEntriesCacheClearScheduled = !0, queueMicrotask(()=>{
            this.waveBubbleEntriesCacheClearScheduled = !1, this.waveBubbleEntriesCache.clear();
        })), r;
    }
    createBubbleEntries(t, e, n, i) {
        return v9f({
            bubbleId: t,
            bubble: e,
            editToolCallDisplay: this.getCachedEditToolCallDisplay(t, e),
            isStreaming: n,
            promoteSentMessages: i,
            demoteOrdinaryAssistantMarkdown: i,
            projectAgentToolRows: ks(()=>this.getProjectAgentToolRows()),
            getApprovalLiveness: ()=>EAw(this.composerHandle, this.composerDataService)
        });
    }
    getHeaderBubbleIdSet(t) {
        const e = this.cachedHeaderBubbleIds;
        if (e && e.headers === t && e.length === t.length) return e.ids;
        const n = new Set;
        for (const i of t)n.add(i.bubbleId);
        return this.cachedHeaderBubbleIds = {
            headers: t,
            length: t.length,
            ids: n
        }, n;
    }
    getHeaderEntries(t, e, n = !1) {
        return wRw({
            headers: t,
            generatingBubbleIds: e,
            isConversationGenerating: n,
            sendMessageNormalizationMode: this.getSendMessageNormalizationMode()
        });
    }
    getActiveToolBubbleIds() {
        return this.activeToolBubbleIdsMemo === void 0 && (this.activeToolBubbleIdsMemo = gA((t)=>(this.disposeActiveToolBubbleIdsMemo = t, vt(()=>this.collectActiveToolBubbleIds())))), this.activeToolBubbleIdsMemo();
    }
    collectActiveToolBubbleIds() {
        const t = this.getComposerDataForReactiveTracking();
        if (!t) return [];
        const e = ks(()=>Wu(t.conversationMap));
        return oRw({
            headers: t.fullConversationHeadersOnly,
            pendingToolCallIds: this.getPendingToolCallIds(),
            getToolData: (n)=>t.conversationMap[n]?.toolFormerData,
            getToolDataUntracked: (n)=>e[n]?.toolFormerData
        });
    }
    getPendingToolCallIds() {
        return new Set(this.composerDataService.getPendingUserDecisionGroup(this.composerHandle).map((t)=>t.toolCallId));
    }
    async loadBubbles(t) {
        await this.composerDataService.ensureBubbleBodies(this.composerHandle, t);
    }
    async backfillHeaderMetadata(t) {
        if (t.length === 0) return;
        await this.composerDataService.backfillHeaderMetadataFromStorage(this.composerHandle, t), this.invalidateHeadersSnapshot();
        const e = t.filter((s)=>{
            const o = this.getHeadersSnapshot().headers.find((a)=>a.bubbleId === s)?.grouping;
            return q_f(o);
        });
        if (e.length === 0) {
            this.notifyHeaderListeners();
            return;
        }
        const n = new Set, i = this.composerDataService.getComposerData(this.composerHandle);
        if (i) for (const s of e){
            const o = i.conversationMap[s];
            o !== void 0 && o.isPlaceholder !== !0 && n.add(s);
        }
        await this.composerDataService.ensureBubbleBodies(this.composerHandle, e);
        const r = e.filter((s)=>!n.has(s));
        r.length > 0 && this.evictBubbles(r), this.invalidateHeadersSnapshot(), this.notifyHeaderListeners();
    }
    evictBubbles(t) {
        const e = t.filter((i)=>this.bubbleHasFullBody(i));
        this.composerDataService.unloadBubblesByIds(this.composerHandle, [
            ...t
        ]);
        const n = e.filter((i)=>!this.bubbleHasFullBody(i));
        n.length > 0 && this.releaseEditDisplayCacheForBubbles(n);
    }
    bubbleHasFullBody(t) {
        const e = this.composerDataService.getComposerBubble(this.composerHandle, t);
        return e !== void 0 && e.isPlaceholder !== !0;
    }
    getCachedEditToolCallDisplay(t, e) {
        if (!e.toolFormerData) return;
        const n = e.toolFormerData, i = w6l(n);
        if (!i) return;
        const r = [
            n.toolCallId ?? t,
            i.beforeContentId ?? "",
            i.afterContentId ?? "",
            i.precomputedDiff === void 0 ? "" : "diff",
            i.isNewFile === void 0 ? "" : `new-${i.isNewFile}`
        ].join(":"), s = this.editDisplayCache.get(r);
        if (s) return s;
        if (!i.beforeContentId && !i.afterContentId) {
            if (i.precomputedDiff === void 0 && i.isNewFile === void 0) return;
            const o = {
                precomputedDiff: i.precomputedDiff,
                isNewFile: i.isNewFile
            };
            return this.editDisplayCache.set(r, o), this.retainEditDisplayCacheKey(t, r), o;
        }
        return !this.storageService || this.pendingEditDisplayHydration.has(r) ? i.precomputedDiff !== void 0 || i.isNewFile !== void 0 ? {
            precomputedDiff: i.precomputedDiff,
            isNewFile: i.isNewFile
        } : void 0 : (this.pendingEditDisplayHydration.add(r), this.retainEditDisplayCacheKey(t, r), U0w(i, this.storageService).then((o)=>{
            this.pendingEditDisplayHydration.delete(r), this.editDisplayCacheKeysByBubble.get(t)?.has(r) === !0 && (this.editDisplayCache.set(r, o), this.notifyBubbleListeners(t));
        }, ()=>{
            this.pendingEditDisplayHydration.delete(r);
        }), i.precomputedDiff !== void 0 || i.isNewFile !== void 0 ? {
            precomputedDiff: i.precomputedDiff,
            isNewFile: i.isNewFile
        } : void 0);
    }
    retainEditDisplayCacheKey(t, e) {
        let n = this.editDisplayCacheKeysByBubble.get(t);
        n === void 0 && (n = new Set, this.editDisplayCacheKeysByBubble.set(t, n)), n.add(e);
    }
    releaseEditDisplayCacheForBubbles(t) {
        for (const e of t){
            const n = this.editDisplayCacheKeysByBubble.get(e);
            if (n !== void 0) {
                this.editDisplayCacheKeysByBubble.delete(e);
                for (const i of n)this.editDisplayCache.delete(i);
            }
        }
    }
    notifyBubbleListeners(t) {
        const e = this.bubbleListeners.get(t);
        if (e) for (const n of e)n();
    }
    invalidateHeadersSnapshot() {
        this.headersRevision += 1, this.cachedHeadersSnapshot = void 0;
    }
    notifyHeaderListeners() {
        for (const t of [
            ...this.headerListeners
        ])t();
    }
}, b9f = {
    now: ()=>Date.now(),
    schedule: (t, e)=>{
        const n = new Yu(t, e);
        return n.schedule(), n;
    }
};

}
