import { Gt, Qe, st, tt } from "./Iwo.js";
import { G4, Rbe } from "./inlineDiffService.js";
import { er, jc } from "./position.js";
import { Iu, Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
var L0g;
export { L0g };
var __wakaru_FIk_initialized = false;
export function FIk() {
if (__wakaru_FIk_initialized) return;
__wakaru_FIk_initialized = true;
"use strict";
E(), Gt(), Qe(), Lr(), jc(), G4(), L0g = class extends st {
    constructor(t, e){
        super(), this._inlineDiffService = t, this._diffDecorationVisibilityService = e, this.sourceId = "inlineDiffService", this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._register(this._inlineDiffService.inlineDiffs.event(()=>{
            this._onDidChange.fire();
        })), this._register(this._diffDecorationVisibilityService.onDidChangeGlobal(()=>{
            this._onDidChange.fire();
        })), this._register(this._inlineDiffService.onDidChangeParkedDiffs(()=>{
            this._onDidChange.fire();
        }));
    }
    _getDiffs() {
        return this._inlineDiffService.inlineDiffs.nonReactive();
    }
    _getParked() {
        return this._inlineDiffService.getParkedDiffs().filter((t)=>this._inlineDiffService.getHandlerByDiffId(t.diffId) === void 0);
    }
    getDescriptors() {
        return [
            ...this._getDiffs().map((t)=>this._toDescriptor(t)),
            ...this._getParked().map((t)=>this._parkedToDescriptor(t))
        ];
    }
    getDescriptorsForUri(t) {
        return [
            ...this._getDiffs().filter((e)=>Iu.isEqual(e.uri, t)).map((e)=>this._toDescriptor(e)),
            ...this._getParked().filter((e)=>Iu.isEqual(e.uri, t)).map((e)=>this._parkedToDescriptor(e))
        ];
    }
    getDescriptorById(t) {
        const e = this._getDiffs().find((i)=>i.id === t);
        if (e) return this._toDescriptor(e);
        const n = this._getParked().find((i)=>i.diffId === t);
        return n ? this._parkedToDescriptor(n) : void 0;
    }
    canHandle(t) {
        return this._inlineDiffService.getHandlerByDiffId(t) !== void 0 || this._getParked().some((e)=>e.diffId === t);
    }
    _isParked(t) {
        return this._inlineDiffService.getHandlerByDiffId(t) === void 0 && this._inlineDiffService.getParkedDiffs().some((e)=>e.diffId === t);
    }
    accept(t, e) {
        return this._isParked(t) ? this._inlineDiffService.restoreParkedDiff(t).then((n)=>{
            n && this._inlineDiffService.acceptDiff(t, e);
        }) : (this._inlineDiffService.acceptDiff(t, e), Promise.resolve());
    }
    reject(t, e, n) {
        return this._isParked(t) ? this._inlineDiffService.restoreParkedDiff(t).then((i)=>{
            i && this._inlineDiffService.rejectDiff(t, e, n);
        }) : (this._inlineDiffService.rejectDiff(t, e, n), Promise.resolve());
    }
    acceptChange(t, e) {
        const n = this._changeToPosition(t, e);
        return n ? this._inlineDiffService.acceptPartialDiff(t, n) : !0;
    }
    rejectChange(t, e) {
        const n = this._changeToPosition(t, e);
        return n ? this._inlineDiffService.rejectPartialDiff(t, n) : !0;
    }
    cancel(t) {
        this._inlineDiffService.cancelDiff(t);
    }
    getBaselineTextLines(t) {
        const e = this._getDiffs().find((i)=>i.id === t);
        if (e) return e.originalTextLines;
        const n = this._getParked().find((i)=>i.diffId === t);
        return n ? [
            ...n.originalTextLines
        ] : void 0;
    }
    getRecentDiffDescriptors(t) {
        throw new Error("Not implemented");
    }
    _shouldHideDecorations(t) {
        return this._diffDecorationVisibilityService.shouldHideInlineDiffs();
    }
    _parkedToDescriptor(t) {
        const e = this._diffDecorationVisibilityService.shouldHideInlineDiffs();
        return {
            id: t.diffId,
            sourceId: this.sourceId,
            uri: t.uri,
            currentRange: {
                startLineNumber: 1,
                endLineNumberExclusive: t.originalTextLines.length + 1
            },
            changes: [],
            metadata: {
                generationId: t.generationUUID,
                composerId: t.composerId,
                toolCallId: t.toolCallId,
                hideDeletionViewZones: e,
                hideDecorations: e,
                source: Rbe
            }
        };
    }
    _toDescriptor(t) {
        const e = t.activeLine !== void 0, n = this._shouldHideDecorations(t), i = n;
        return {
            id: t.id,
            sourceId: this.sourceId,
            uri: t.uri,
            currentRange: {
                startLineNumber: t.currentRange.startLineNumber,
                endLineNumberExclusive: t.currentRange.endLineNumberExclusive
            },
            changes: t.changes,
            originalLineTokens: t.originalLineTokens,
            streamingState: e ? {
                activeLine: t.activeLine,
                pendingRange: t.pendingRange ? {
                    startLineNumber: t.pendingRange.startLineNumber,
                    endLineNumberExclusive: t.pendingRange.endLineNumberExclusive
                } : void 0
            } : void 0,
            metadata: {
                generationId: t.generationUUID,
                composerId: t.composerMetadata?.composerId,
                toolCallId: t.composerMetadata?.toolCallId ?? t.toolCallId,
                hideDeletionViewZones: i,
                source: t.source,
                showNativeAcceptReject: t.showNativeAcceptReject,
                createdAt: t.createdAt,
                hideDecorations: n
            }
        };
    }
    _changeToPosition(t, e) {
        const n = this._getDiffs().find((r)=>r.id === t);
        if (!n) return;
        const i = n.currentRange.startLineNumber + e.addedRange.startLineNumber - 1;
        return new er(i, 1);
    }
};

}
