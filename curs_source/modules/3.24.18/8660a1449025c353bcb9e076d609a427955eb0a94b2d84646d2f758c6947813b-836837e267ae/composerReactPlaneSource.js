import { Crs, hsl } from "./Aeg.js";
import { Akw, CKe, Dkw, Ikw, Lkw, Mkw, Nkw, Okw, Pkw, Rkw, xkw } from "./BA.js";
import { Pn, Qe, st } from "./Iwo.js";
import { $Jk, AJk, FJk, HJk, OJk, RJk, UQk, W_f, cJk, dbf, f2l, jMi, lJk, lbs, oJk, pJk, uJk, v2l } from "./Ycg.js";
import { bs, sd } from "./chat_pb.js";
import { _2l } from "./composerHeaderStructureBackfill.js";
import { BMi, G_f, vDn } from "./composerReactPlaneHostRows.js";
import { mbf } from "./composerReactPlaneRows.js";
import { ubf } from "./composerReactPlaneStructure.js";
import { fDn, tKe } from "./composerTranscriptPerfCounters.js";
import { cbs } from "./composerTranscriptRowHydration.js";
import { Ekw, SOf } from "./composerTranscriptTailState.js";
import { mkt } from "./conversation-density.js";
import { Mt } from "./index_197.js";
import { Zgi, rfi } from "./ipa.js";
import { cp } from "./objects.js";
import { E } from "./tslib.es6.js";
import { ks, pi } from "./ze.js";
var kOf, wOf, COf;
export { COf, kOf, wOf };
var __wakaru_Fkw_initialized = false;
export function Fkw() {
if (__wakaru_Fkw_initialized) return;
__wakaru_Fkw_initialized = true;
"use strict";
E(), Mt(), pi(), sd(), Qe(), cp(), vDn(), mbf(), _2l(), ubf(), cbs(), fDn(), hsl(), Ekw(), kOf = {
    currentBubbleIds: [],
    editingBubbleIds: [],
    selectedBubbleIds: [],
    findBubbleIds: []
}, wOf = 2, COf = class extends st {
    constructor(t, e = {}){
        super(), this.transcriptSource = t, this.rowsListeners = new Set, this.contentListeners = new Map, this.pendingContentNotificationRowIds = new Set, this.revisionByRowId = new Map, this.committedHeightByRowId = new Map, this.committedHeightBandsByEpochId = new Map, this.computedHeightSeedByRowId = new Map, this.expansionOverrides = new Map, this.defaultOpenWorkGroupRowIds = new Set, this.trackedRows = new Map, this.mountedBubbleSubscriptions = new Map, this.mountedBubbleIds = [], this.pendingLoadByBubbleId = new Map, this.lastMountedBubbleIsGenerating = !1, this.lastHeaderIsGenerating = !1, this.hasPublishedSettleForGenerationCycle = !1, this.headerStructurePublishSuppressions = 0, this.lastStructureGeneratingBubbleIds = [], this.contentCacheByRowId = new Map, this.deferredStructureBubbleIds = new Set, this.lastMarkdownRowById = new Map, this.structureRows = [], this.structureRowsById = new Map, this.structureRowIndexById = new Map, this.workGroupRowIdsBySourceId = new Map, this.rederiveRowIds = new Set, this.descriptorCache = new WeakMap, this.sawLiveWork = !1, this.retentionPins = kOf, this.hostCards = BMi, this.latchedRestoreSawGenerating = !1, this.hostRowSignatureByRowId = new Map, this.subscribeRows = (n)=>(this.rowsListeners.add(n), ()=>{
                this.rowsListeners.delete(n);
            }), this.getRowsSnapshot = ()=>this.snapshot, this.subscribeRowContent = (n, i)=>{
            let r = this.contentListeners.get(n);
            return r === void 0 && (r = new Set, this.contentListeners.set(n, r)), r.add(i), UQk(n), ()=>{
                const s = this.contentListeners.get(n);
                s !== void 0 && (s.delete(i), s.size === 0 && this.contentListeners.delete(n));
            };
        }, this.getRowContent = (n)=>{
            const i = this.structureRowsById.get(n);
            if (i === void 0 || i.content.kind !== "transcript") return;
            const r = this.revisionByRowId.get(n) ?? 1, s = this.contentCacheByRowId.get(n);
            if (s !== void 0 && s.revision === r) return s.row;
            const o = i.content.row.kind === "workGroup" ? this.transcriptSource.getActiveToolBubbleIds().filter((u)=>i.content.kind === "transcript" && i.content.row.sourceIds.includes(u)) : [], l = [
                ...new Set([
                    ...i.bubbleIds,
                    ...o
                ])
            ].map((u)=>this.transcriptSource.getBubbleSnapshot(u));
            let c = Zgi(jMi(i.content.row, lbs(l)));
            if (c.kind === "assistantMarkdown") if (c.entry.markdown.trim().length > 0) this.lastMarkdownRowById.set(n, c);
            else {
                const u = this.lastMarkdownRowById.get(n);
                u !== void 0 && (c = u);
            }
            return this.contentCacheByRowId.set(n, {
                revision: r,
                row: c
            }), c;
        }, this.trackRow = (n)=>{
            const i = this.trackedRows.get(n);
            if (i !== void 0) return i.refCount += 1, this.createUntrackDisposable(n);
            const r = this.structureRowsById.get(n)?.bubbleIds ?? [];
            return this.trackedRows.set(n, {
                refCount: 1,
                bubbleIds: r
            }), this.publishRevisionBatch(new Set([
                n
            ]), "hydration", void 0, "always", "carry-computed-seed"), this.renewMountedBubbleSubscription(), this.createUntrackDisposable(n);
        }, this.handleMountedBubblesChanged = (n)=>{
            if (this.deferredStructureBubbleIds.has(n)) {
                this.publishStructure("hydration", this.getAffectedRowIdsForBubble(n), {
                    reviseContentChanges: !0
                });
                return;
            }
            const i = this.transcriptSource.getHeadersSnapshot().isGenerating, r = this.lastMountedBubbleIsGenerating;
            this.lastMountedBubbleIsGenerating = i;
            const s = this.resolveGenerationPublicationCause(r, i, "stream-delta"), o = this.getAffectedRowIdsForBubble(n);
            if (s === void 0) {
                this.publishRevisionBatch(o, "hydration", i, "unless-streaming-content");
                return;
            }
            if (s === "stream-settle") {
                this.publishStructure(s, o, {
                    reviseContentChanges: !0
                });
                return;
            }
            this.publishRevisionBatch(o, s, i, "unless-streaming-content");
        }, this.flushContentListeners = ()=>{
            const n = [
                ...this.pendingContentNotificationRowIds
            ];
            this.pendingContentNotificationRowIds.clear();
            for (const i of n){
                const r = this.contentListeners.get(i);
                if (r !== void 0) for (const s of [
                    ...r
                ])s();
            }
        }, this.flushRowsListeners = ()=>{
            for (const n of [
                ...this.rowsListeners
            ])n();
        }, this.sourceId = t.sourceId, this.presentationInputs = {
            conversationDensity: e.conversationDensity ?? mkt,
            showWorkInProgressHeader: e.showWorkInProgressHeader ?? !1,
            includeEndOfTurnSummary: e.includeEndOfTurnSummary ?? !1,
            showRoutedModelInWorkHeader: e.showRoutedModelInWorkHeader ?? !0,
            hideHumanMessages: e.hideHumanMessages ?? !1,
            useProjectWorkGrouping: e.useProjectWorkGrouping ?? !1,
            useProjectTranscriptPresentation: e.useProjectTranscriptPresentation ?? !1,
            floatSteers: e.floatSteers ?? !1
        }, this.planeInputs = e.planeInputs ?? G_f, this.tailStateController = this._register(new SOf(t, ()=>this.publishStructure("tool-status-change", new Set))), this.snapshot = ks(()=>this.buildStructureSnapshot("hydration", new Set, !1).snapshot), this.lastMountedBubbleIsGenerating = this.snapshot.isGenerating, this.lastHeaderIsGenerating = this.snapshot.isGenerating, this._register(t.subscribeHeaders(()=>{
            this.publishHeaderStructure();
        })), this._register(Pn(()=>{
            for (const n of this.mountedBubbleSubscriptions.values())n.dispose();
            this.mountedBubbleSubscriptions.clear(), this.trackedRows.clear();
        }));
    }
    get composerId() {
        return this.transcriptSource.composerId;
    }
    setPresentationInputs(t) {
        xkw(this.presentationInputs, t) || (this.presentationInputs = t, this.publishStructure("hydration"));
    }
    setRetentionPins(t) {
        const e = Akw(t);
        if (Rkw(this.retentionPins, e)) return;
        const n = CKe(this.retentionPins.editingBubbleIds, e.editingBubbleIds) ? void 0 : new Set([
            ...this.retentionPins.editingBubbleIds,
            ...e.editingBubbleIds
        ]);
        if (this.retentionPins = e, n === void 0) return;
        const i = new Set;
        for (const r of this.structureRows)r.bubbleIds.some((s)=>n.has(s)) && i.add(r.rowId);
        this.publishRevisionBatch(i, "hydration");
    }
    setComputedHeightEpoch(t) {
        this.setComputedHeightEpochAndSeeds(t, []);
    }
    setComputedHeightSeed(t) {
        return this.setComputedHeightSeeds([
            t
        ]);
    }
    setComputedHeightEpochAndSeeds(t, e) {
        let n = !1;
        if (this.computedHeightEpochId !== t) {
            const i = this.computedHeightEpochId;
            if (this.computedHeightEpochId = t, this.computedHeightSeedByRowId.size > 0) {
                for (const r of this.computedHeightSeedByRowId.keys())this.rederiveRowIds.add(r);
                this.computedHeightSeedByRowId.clear(), n = !0;
            }
            n = this.rotateCommittedHeightBand(i, t) || n;
        }
        return n = this.applyComputedHeightSeeds(e) || n, n && this.publishDescriptorEstimates(), n;
    }
    setComputedHeightSeeds(t) {
        const e = this.applyComputedHeightSeeds(t);
        return e && this.publishDescriptorEstimates(), e;
    }
    applyComputedHeightSeeds(t) {
        let e = !1;
        const n = t.length > 1;
        let i;
        const r = (s)=>n ? (i ??= new Map(this.snapshot.rows.map((o)=>[
                    o.rowId,
                    o.estimatedHeightPx
                ])), i.get(s)) : this.snapshot.rows.find((o)=>o.rowId === s)?.estimatedHeightPx;
        for (const s of t){
            const o = this.structureRowsById.get(s.rowId), a = this.revisionByRowId.get(s.rowId);
            if (o === void 0 || a !== s.sourceRevision || this.computedHeightEpochId !== s.epochId || !Number.isFinite(s.heightPx) || s.heightPx <= 0) continue;
            const l = {
                ...s,
                heightPx: Math.max(1, Math.round(s.heightPx))
            }, c = this.computedHeightSeedByRowId.get(s.rowId);
            if (c !== void 0 && Pkw(c, l)) continue;
            const u = r(s.rowId), d = dbf({
                row: o,
                revision: a,
                committedHeightPx: this.committedHeightByRowId.get(s.rowId),
                computedHeightPx: l.heightPx
            }).estimatedHeightPx, h = u === d ? l : {
                ...l,
                sourceRevision: a + 1
            };
            h.sourceRevision !== a && this.revisionByRowId.set(s.rowId, h.sourceRevision), this.rederiveRowIds.add(s.rowId), this.computedHeightSeedByRowId.set(s.rowId, h), e = !0;
        }
        return e;
    }
    resolveRestoredFromBubbleId(t) {
        const e = this.planeInputs.restoredFromBubbleId;
        if (e !== void 0) return this.latchedRestoredFromBubbleId = e, this.latchedRestoreSawGenerating = t, e;
        if (this.latchedRestoredFromBubbleId === void 0) return;
        if (t) return this.latchedRestoreSawGenerating = !0, this.latchedRestoredFromBubbleId;
        const n = this.latchedRestoreSawGenerating, i = this.planeInputs.hasUndoableCheckout === !0;
        if (n || i) {
            this.latchedRestoredFromBubbleId = void 0, this.latchedRestoreSawGenerating = !1;
            return;
        }
        return this.latchedRestoredFromBubbleId;
    }
    setPlaneInputs(t) {
        if (f2l(this.planeInputs, t)) return;
        const e = this.planeInputs.hasRunningSubagentsInLastTurn !== t.hasRunningSubagentsInLastTurn || this.planeInputs.restoredFromBubbleId !== t.restoredFromBubbleId || this.planeInputs.hasUndoableCheckout !== t.hasUndoableCheckout || this.planeInputs.omitStartAnchoredCloudStatus !== t.omitStartAnchoredCloudStatus || !cJk(this.planeInputs.runningTaskByBubbleId, t.runningTaskByBubbleId) || !v2l(this.planeInputs.taskCompletedAtMsByBubbleId, t.taskCompletedAtMsByBubbleId), n = !e && f2l({
            ...this.planeInputs,
            terminalSpacerHeightPx: t.terminalSpacerHeightPx
        }, t), i = !e && !n && f2l({
            ...this.planeInputs,
            runningTaskByBubbleId: t.runningTaskByBubbleId
        }, t);
        this.planeInputs = t, !(n && this.applyTerminalSpacerHeight(t.terminalSpacerHeightPx)) && (i && this.applyRunningTaskStatus(t.runningTaskByBubbleId) || this.publishStructure("hydration", e ? void 0 : new Set, {
            preserveStreamSettleWhenTranscriptUnchanged: !0
        }));
    }
    setHostCards(t) {
        lJk(this.hostCards, t) || (this.hostCards = t, this.publishStructure("hydration", new Set, {
            preserveStreamSettleWhenTranscriptUnchanged: !0
        }));
    }
    resolveLiveTurnCause(t) {
        if (t !== "hydration") return t;
        const e = this.transcriptSource.getHeadersSnapshot(), n = e.headers[e.headers.length - 1];
        return e.isGenerating && n !== void 0 && n.type !== bs.HUMAN ? "stream-delta" : "hydration";
    }
    applyTerminalSpacerHeight(t) {
        if (t === void 0) return !1;
        const e = this.structureRows[this.structureRows.length - 1];
        if (e === void 0 || e.content.kind !== "fixed-geometry") return !1;
        const n = Math.max(0, Math.round(t));
        if (e.content.heightPx === n) return !0;
        const i = {
            ...e,
            estimatedHeightPx: n,
            content: {
                kind: "fixed-geometry",
                heightPx: n
            }
        };
        return ks(()=>{
            this.structureRows = [
                ...this.structureRows.slice(0, -1),
                i
            ], this.structureRowsById.set(i.rowId, i);
            const r = W_f(i);
            r !== void 0 && this.hostRowSignatureByRowId.set(i.rowId, r), this.publishRevisionBatch(new Set([
                i.rowId
            ]), this.snapshot.revisionCause === "stream-settle" ? "stream-settle" : "hydration");
        }), !0;
    }
    applyRunningTaskStatus(t) {
        const e = new Set, n = [];
        for (const i of this.structureRows){
            if (i.content.kind !== "transcript" || i.content.row.kind !== "workGroup") {
                n.push(i);
                continue;
            }
            const r = i.content.row, s = Okw(r.sourceIds, t);
            if (r.runningTaskCount !== s.runningTaskCount) return !1;
            if (r.runningTaskStatus === s.runningTaskStatus) {
                n.push(i);
                continue;
            }
            const o = {
                ...i,
                content: {
                    ...i.content,
                    row: {
                        ...r,
                        runningTaskStatus: s.runningTaskStatus
                    }
                }
            };
            n.push(o), e.add(i.rowId);
        }
        return e.size === 0 || ks(()=>{
            this.structureRows = n;
            for (const i of n)e.has(i.rowId) && this.structureRowsById.set(i.rowId, i);
            this.publishRevisionBatch(e, this.snapshot.revisionCause === "stream-settle" ? "stream-settle" : "hydration");
        }), !0;
    }
    omitsStartAnchoredCloudStatus() {
        return this.planeInputs.omitStartAnchoredCloudStatus === !0;
    }
    getStructureRows() {
        return this.structureRows;
    }
    isRowExpanded(t) {
        return this.expansionOverrides.get(t) ?? this.defaultOpenWorkGroupRowIds.has(t);
    }
    invalidateRowGeometry(t, e) {
        return this.revisionByRowId.has(t) ? (this.publishRevisionBatch(new Set([
            t
        ]), e), !0) : !1;
    }
    invalidateRowsForBubble(t, e) {
        const n = new Set;
        for (const i of this.structureRows)i.bubbleIds.includes(t) && n.add(i.rowId);
        return n.size === 0 ? !1 : (this.publishRevisionBatch(n, e), !0);
    }
    setRowExpanded(t, e) {
        this.isRowExpanded(t) !== e && (this.expansionOverrides.set(t, e), this.publishStructure("disclosure-toggle", new Set([
            t
        ])));
    }
    collectHeaderIdsNeedingStructureBackfill(t) {
        return pJk(this.transcriptSource.getHeadersSnapshot().headers, t);
    }
    async backfillHeaderStructure(t) {
        if (t.length !== 0) {
            this.headerStructurePublishSuppressions += 1;
            try {
                await this.transcriptSource.backfillHeaderMetadata(t);
            } finally{
                this.headerStructurePublishSuppressions -= 1, this.headerStructurePublishSuppressions === 0 && this.lastHeaderIsGenerating !== this.transcriptSource.getHeadersSnapshot().isGenerating && this.publishHeaderStructure();
            }
        }
    }
    loadBubbles(t) {
        const e = [
            ...new Set(t)
        ], n = new Set, i = [];
        for (const r of e){
            const s = this.pendingLoadByBubbleId.get(r);
            s === void 0 ? i.push(r) : n.add(s);
        }
        if (i.length > 0) {
            let r;
            try {
                r = this.transcriptSource.loadBubbles(i);
            } catch (s) {
                r = Promise.reject(s);
            }
            for (const s of i)this.pendingLoadByBubbleId.set(s, r);
            r.then(()=>{
                this.finishBubbleLoad(i, r);
                for (const s of i)this.handleMountedBubblesChanged(s);
            }, ()=>this.finishBubbleLoad(i, r)), n.add(r);
        }
        return Promise.all(n).then(()=>{});
    }
    getRowRequiredBubbleIds(t) {
        return this.structureRowsById.get(t)?.requiredBubbleIds ?? [];
    }
    getBubblePrefetchState(t) {
        const e = this.transcriptSource.getBubbleLoadState(t);
        switch(e.status){
            case "loaded":
                return e.composerMessage?.isPlaceholder === !0 ? {
                    kind: "placeholder",
                    bubbleId: t
                } : {
                    kind: "loaded",
                    bubbleId: t
                };
            case "loading":
            case "unloaded":
                return {
                    kind: "unloaded",
                    bubbleId: t
                };
            case "missing":
                return {
                    kind: "missing",
                    bubbleId: t
                };
            case "error":
                return {
                    kind: "error",
                    bubbleId: t
                };
        }
    }
    isBubbleReady(t) {
        return this.getBubblePrefetchState(t).kind === "loaded";
    }
    getLoadedNonHumanBubbleIds() {
        const t = [];
        for (const e of this.transcriptSource.getHeadersSnapshot().headers)e.type !== bs.HUMAN && this.isBubbleReady(e.bubbleId) && t.push(e.bubbleId);
        return t;
    }
    getAlwaysRetainedBubbleIds() {
        const t = new Set(this.transcriptSource.getHeadersSnapshot().generatingBubbleIds);
        for (const e of this.transcriptSource.getActiveToolBubbleIds())t.add(e);
        for (const e of this.tailStateController.getState().approval?.row.sourceIds ?? [])t.add(e);
        for (const e of this.retentionPins.editingBubbleIds)t.add(e);
        for (const e of this.retentionPins.currentBubbleIds)t.add(e);
        for (const e of this.retentionPins.selectedBubbleIds)t.add(e);
        for (const e of this.retentionPins.findBubbleIds)t.add(e);
        return [
            ...t
        ];
    }
    evictBubbles(t) {
        this.transcriptSource.evictBubbles(t);
    }
    noteCommittedRowHeights(t) {
        for (const e of t)this.committedHeightByRowId.get(e.rowId) !== e.heightPx && (this.committedHeightByRowId.set(e.rowId, e.heightPx), this.rederiveRowIds.add(e.rowId));
    }
    rotateCommittedHeightBand(t, e) {
        const n = this.committedHeightByRowId;
        this.committedHeightBandsByEpochId.delete(t), this.committedHeightBandsByEpochId.set(t, n);
        const i = this.committedHeightBandsByEpochId.get(e), r = new Map(n);
        if (i !== void 0) {
            this.committedHeightBandsByEpochId.delete(e);
            for (const [o, a] of i)r.set(o, a);
        }
        for(; this.committedHeightBandsByEpochId.size > wOf;){
            const o = this.committedHeightBandsByEpochId.keys().next().value;
            this.committedHeightBandsByEpochId.delete(o);
        }
        this.committedHeightByRowId = r;
        let s = !1;
        for (const [o, a] of this.structureRowsById){
            if (a.content.kind === "fixed-geometry") continue;
            const l = n.get(o), c = r.get(o);
            if (c !== void 0 && c !== l) {
                const u = this.revisionByRowId.get(o) ?? 1;
                this.revisionByRowId.set(o, u + 1), this.rederiveRowIds.add(o), s = !0;
            }
        }
        return s;
    }
    createUntrackDisposable(t) {
        return Pn(()=>{
            const e = this.trackedRows.get(t);
            e !== void 0 && (e.refCount -= 1, !(e.refCount > 0) && (this.trackedRows.delete(t), this.renewMountedBubbleSubscription()));
        });
    }
    advanceRevision(t, e = "drop-computed-seed") {
        const n = this.revisionByRowId.get(t) ?? 1, i = n + 1;
        this.revisionByRowId.set(t, i);
        const r = this.computedHeightSeedByRowId.get(t);
        e === "carry-computed-seed" && r !== void 0 && r.sourceRevision === n ? this.computedHeightSeedByRowId.set(t, {
            ...r,
            sourceRevision: i
        }) : this.computedHeightSeedByRowId.delete(t), this.contentCacheByRowId.delete(t);
    }
    publishRevisionBatch(t, e, n = this.snapshot.isGenerating, i = "always", r = "drop-computed-seed") {
        if (t.size === 0) return;
        for (const c of t)this.advanceRevision(c, r);
        const s = this.snapshot, o = s.rows.slice(), a = new Set(t), l = this.patchDescriptors(o, new Set([
            ...t,
            ...this.rederiveRowIds
        ]), a);
        this.rederiveRowIds.clear(), this.snapshot = {
            status: s.status,
            rows: o,
            isGenerating: n,
            revisionCause: this.resolveLiveTurnCause(e)
        }, (i === "always" || n !== s.isGenerating || l || !this.revisedRowsAreMonotonicStreaming(a)) && this.notifyRowsListeners(), this.notifyContentListeners(t);
    }
    patchDescriptors(t, e, n) {
        let i = !1;
        for (const r of e){
            const s = this.structureRowIndexById.get(r);
            if (s === void 0) continue;
            const o = this.descriptorFor(this.structureRows[s]);
            o.estimatedHeightPx !== t[s]?.estimatedHeightPx && (i = !0), o.revision !== t[s]?.revision && n.add(r), t[s] = o;
        }
        return i;
    }
    revisedRowsAreMonotonicStreaming(t) {
        for (const e of t){
            const n = this.structureRowsById.get(e);
            if (n === void 0 || n.content.kind !== "transcript" || rfi(n.content.row).kind !== "monotonic-streaming") return !1;
        }
        return !0;
    }
    publishStructure(t, e, { preserveStreamSettleWhenTranscriptUnchanged: n = !1, reviseContentChanges: i = e === void 0 } = {}) {
        ks(()=>{
            const r = this.snapshot.revisionCause, s = this.buildStructureSnapshot(t, e, i);
            this.rederiveRowIds.clear(), this.snapshot = n && r === "stream-settle" && !s.hasTranscriptChanges ? {
                ...s.snapshot,
                revisionCause: "stream-settle"
            } : s.snapshot, this.renewMountedBubbleSubscription(), this.notifyRowsListeners(), this.notifyContentListeners(s.changedRowIds);
        });
    }
    publishHeaderStructure() {
        if (this.headerStructurePublishSuppressions > 0) return;
        const t = this.transcriptSource.getHeadersSnapshot().isGenerating, e = this.lastHeaderIsGenerating;
        this.lastHeaderIsGenerating = t;
        const n = this.resolveGenerationPublicationCause(e, t, "hydration");
        n !== void 0 && this.publishStructure(n, t ? new Set : void 0);
    }
    getAffectedRowIdsForBubble(t) {
        const e = new Set;
        for (const [n, i] of this.trackedRows)i.bubbleIds.includes(t) && e.add(n);
        for (const n of this.workGroupRowIdsBySourceId.get(t) ?? [])e.add(n);
        return e;
    }
    renewMountedBubbleSubscription() {
        const t = [
            ...new Set([
                ...this.trackedRows.values()
            ].flatMap((e)=>[
                    ...e.bubbleIds
                ]))
        ].sort();
        if (!CKe(this.mountedBubbleIds, t)) {
            const e = new Set(t);
            for (const [n, i] of this.mountedBubbleSubscriptions)e.has(n) || (i.dispose(), this.mountedBubbleSubscriptions.delete(n));
            this.mountedBubbleIds = t, this.synchronizeMountedGenerationLatch();
            for (const n of t)this.mountedBubbleSubscriptions.has(n) || this.mountedBubbleSubscriptions.set(n, this.transcriptSource.subscribeBubble(n, ()=>this.handleMountedBubblesChanged(n)));
        }
    }
    resolveGenerationPublicationCause(t, e, n) {
        if (e) return this.hasPublishedSettleForGenerationCycle = !1, n;
        if (!t) return "hydration";
        if (!this.hasPublishedSettleForGenerationCycle) return this.hasPublishedSettleForGenerationCycle = !0, "stream-settle";
    }
    synchronizeMountedGenerationLatch() {
        const t = this.transcriptSource.getHeadersSnapshot().isGenerating;
        this.lastMountedBubbleIsGenerating = t, t && (this.hasPublishedSettleForGenerationCycle = !1);
    }
    finishBubbleLoad(t, e) {
        for (const n of t)this.pendingLoadByBubbleId.get(n) === e && this.pendingLoadByBubbleId.delete(n);
    }
    notifyContentListeners(t) {
        if (t.size !== 0) {
            for (const e of t)this.pendingContentNotificationRowIds.add(e);
            Crs(this.flushContentListeners);
        }
    }
    notifyRowsListeners() {
        Crs(this.flushRowsListeners);
    }
    publishDescriptorEstimates() {
        const t = this.deriveDescriptors();
        Lkw(this.snapshot.rows, t) || (this.rederiveRowIds.clear(), this.snapshot = {
            ...this.snapshot,
            rows: t,
            revisionCause: "hydration"
        }, this.notifyRowsListeners());
    }
    deriveDescriptors() {
        return this.structureRows.map((t)=>this.descriptorFor(t));
    }
    descriptorFor(t) {
        tKe.planeDescriptorRowsVisited += 1;
        const e = this.revisionByRowId.get(t.rowId) ?? 1, n = this.committedHeightByRowId.get(t.rowId), i = this.computedHeightSeedByRowId.get(t.rowId), r = i?.sourceRevision === e && i.epochId === this.computedHeightEpochId ? i.heightPx : void 0, s = this.descriptorCache.get(t);
        if (s !== void 0 && s.revision === e && s.committedHeightPx === n && s.computedHeightPx === r) return s.descriptor;
        const o = dbf({
            row: t,
            revision: e,
            committedHeightPx: n,
            computedHeightPx: r
        });
        return this.descriptorCache.set(t, {
            revision: e,
            committedHeightPx: n,
            computedHeightPx: r,
            descriptor: o
        }), o;
    }
    buildStructureSnapshot(t, e, n) {
        tKe.planeStructureBuilds += 1;
        const i = this.transcriptSource.getHeadersSnapshot();
        (i.isGenerating || this.planeInputs.hasRunningSubagentsInLastTurn) && (this.sawLiveWork = !0);
        const r = this.transcriptSource.getHeaderEntries(i.headers, i.generatingBubbleIds, i.isGenerating), s = AJk({
            headers: i,
            entries: r,
            conversationDensity: this.presentationInputs.conversationDensity,
            showWorkInProgressHeader: this.presentationInputs.showWorkInProgressHeader,
            includeEndOfTurnSummary: this.presentationInputs.includeEndOfTurnSummary,
            showRoutedModelInWorkHeader: this.presentationInputs.showRoutedModelInWorkHeader,
            hasRunningSubagentsInLastTurn: this.planeInputs.hasRunningSubagentsInLastTurn,
            runningTaskByBubbleId: this.planeInputs.runningTaskByBubbleId,
            taskCompletedAtMsByBubbleId: this.planeInputs.taskCompletedAtMsByBubbleId,
            unfoldLatestTurn: this.sawLiveWork,
            useProjectWorkGrouping: this.presentationInputs.useProjectWorkGrouping,
            useProjectTranscriptPresentation: this.presentationInputs.useProjectTranscriptPresentation,
            floatSteers: this.presentationInputs.floatSteers,
            getWorkGroupExpansionOverride: (S)=>this.expansionOverrides.get(S),
            firstUnreadBubbleId: this.planeInputs.firstUnreadBubbleId,
            restoredFromBubbleId: this.resolveRestoredFromBubbleId(i.isGenerating),
            transcriptContinuesAbove: this.omitsStartAnchoredCloudStatus()
        }), o = this.tailStateController.update({
            rows: s,
            headers: i.headers,
            generatingBubbleIds: i.generatingBubbleIds,
            isConversationGenerating: i.isGenerating,
            isCloudAgent: this.planeInputs.resolvedBcId !== void 0 && !this.planeInputs.isSideChat,
            hasActiveWorktreeSetup: this.planeInputs.hasActiveWorktreeSetup,
            isActivityGroupExpanded: (S)=>this.isRowExpanded(S),
            planningSnapshot: this.planeInputs.planningSnapshot,
            showsCloudOptimisticPlanningRow: oJk(s, this.planeInputs, (S)=>{
                const k = this.transcriptSource.getBubbleLoadState(S);
                return k.status === "loaded" && k.composerMessage?.isOptimistic === !0;
            })
        }), a = RJk({
            skeleton: s,
            tailState: o.state,
            headers: i,
            planeInputs: this.planeInputs,
            hostCards: this.hostCards,
            transcriptSource: this.transcriptSource,
            getExpansionOverride: (S)=>this.expansionOverrides.get(S),
            hideHumanMessages: this.presentationInputs.hideHumanMessages,
            showAutoRoutingResultDisplay: !this.presentationInputs.showRoutedModelInWorkHeader
        });
        this.deferredStructureBubbleIds = a.deferredBubbleIds;
        const l = a.rows, c = this.structureRows.filter((S)=>S.content.kind === "transcript").map((S)=>S.rowId), u = l.filter((S)=>S.content.kind === "transcript").map((S)=>S.rowId);
        let d = !CKe(c, u);
        this.defaultOpenWorkGroupRowIds = a.defaultOpenWorkGroupRowIds;
        for (const S of a.workGroupRowIdsToLatchOpen)this.expansionOverrides.set(S, !0);
        const h = uJk({
            previousSignatures: this.hostRowSignatureByRowId,
            rows: l
        }), p = new Set(this.structureRows.map((S)=>S.rowId)), g = new Set([
            ...i.generatingBubbleIds,
            ...this.lastStructureGeneratingBubbleIds
        ]), f = new Map, _ = new Set, b = [];
        for (const S of l){
            if (!p.has(S.rowId)) {
                this.revisionByRowId.has(S.rowId) ? (this.advanceRevision(S.rowId), _.add(S.rowId)) : (this.revisionByRowId.set(S.rowId, 1), this.contentCacheByRowId.delete(S.rowId)), b.push(S), f.set(S.rowId, S);
                continue;
            }
            const k = this.structureRowsById.get(S.rowId);
            let C = !1;
            S.content.kind !== "transcript" ? h.changedRowIds.has(S.rowId) && (this.advanceRevision(S.rowId), _.add(S.rowId), C = !0) : (o.changedRowIds.has(S.rowId) || e?.has(S.rowId) === !0 || !CKe(k?.bubbleIds ?? [], S.bubbleIds) || OJk(k, S) || Ikw(k, S.content.row) || $Jk(k, S) || HJk(k, S) || S.bubbleIds.some((I)=>g.has(I)) || n && !Mkw(k, S) || FJk(k, S)) && (this.advanceRevision(S.rowId), _.add(S.rowId), d = !0, C = !0);
            const T = !C && k !== void 0 && Dkw(k, S) ? k : S;
            b.push(T), f.set(S.rowId, T);
        }
        this.hostRowSignatureByRowId = new Map(h.signatures), this.structureRows = b, this.structureRowsById = f, this.structureRowIndexById = new Map(b.map((S, k)=>[
                S.rowId,
                k
            ])), this.workGroupRowIdsBySourceId = Nkw(b), this.lastStructureGeneratingBubbleIds = i.generatingBubbleIds;
        for (const S of this.computedHeightSeedByRowId.keys())f.has(S) || this.computedHeightSeedByRowId.delete(S);
        for (const [S, k] of this.trackedRows){
            const C = f.get(S)?.bubbleIds ?? [];
            k.bubbleIds = C;
        }
        return {
            snapshot: {
                status: i.status,
                rows: this.deriveDescriptors(),
                isGenerating: i.isGenerating,
                revisionCause: this.resolveLiveTurnCause(t)
            },
            changedRowIds: _,
            hasTranscriptChanges: d
        };
    }
};

}
