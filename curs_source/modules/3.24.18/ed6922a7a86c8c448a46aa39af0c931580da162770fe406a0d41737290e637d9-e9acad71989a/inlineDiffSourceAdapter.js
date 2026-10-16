import { Se, bt, ve, we } from "./HVr.js";
import { CN, Fee } from "./inlineDiffService.js";
import { Yn, ya } from "./position.js";
import { Li, pl } from "./resources.js";
import { x } from "./tslib.es6.js";
var ZOh;
export { ZOh };
var __wakaru_el__initialized = false;
export function el_() {
if (__wakaru_el__initialized) return;
__wakaru_el__initialized = true;
"use strict";
x(), bt(), Se(), Li(), ya(), CN(), ZOh = class extends we {
    constructor(e, t){
        super(), this._inlineDiffService = e, this._diffDecorationVisibilityService = t, this.sourceId = "inlineDiffService", this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._register(this._inlineDiffService.inlineDiffs.event(()=>{
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
        return this._inlineDiffService.getParkedDiffs().filter((e)=>this._inlineDiffService.getHandlerByDiffId(e.diffId) === void 0);
    }
    getDescriptors() {
        return [
            ...this._getDiffs().map((e)=>this._toDescriptor(e)),
            ...this._getParked().map((e)=>this._parkedToDescriptor(e))
        ];
    }
    getDescriptorsForUri(e) {
        return [
            ...this._getDiffs().filter((t)=>pl.isEqual(t.uri, e)).map((t)=>this._toDescriptor(t)),
            ...this._getParked().filter((t)=>pl.isEqual(t.uri, e)).map((t)=>this._parkedToDescriptor(t))
        ];
    }
    getDescriptorById(e) {
        const t = this._getDiffs().find((i)=>i.id === e);
        if (t) return this._toDescriptor(t);
        const n = this._getParked().find((i)=>i.diffId === e);
        return n ? this._parkedToDescriptor(n) : void 0;
    }
    canHandle(e) {
        return this._inlineDiffService.getHandlerByDiffId(e) !== void 0 || this._getParked().some((t)=>t.diffId === e);
    }
    _isParked(e) {
        return this._inlineDiffService.getHandlerByDiffId(e) === void 0 && this._inlineDiffService.getParkedDiffs().some((t)=>t.diffId === e);
    }
    accept(e, t) {
        return this._isParked(e) ? this._inlineDiffService.restoreParkedDiff(e).then((n)=>{
            n && this._inlineDiffService.acceptDiff(e, t);
        }) : (this._inlineDiffService.acceptDiff(e, t), Promise.resolve());
    }
    reject(e, t, n) {
        return this._isParked(e) ? this._inlineDiffService.restoreParkedDiff(e).then((i)=>{
            i && this._inlineDiffService.rejectDiff(e, t, n);
        }) : (this._inlineDiffService.rejectDiff(e, t, n), Promise.resolve());
    }
    acceptChange(e, t) {
        const n = this._changeToPosition(e, t);
        return n ? this._inlineDiffService.acceptPartialDiff(e, n) : !0;
    }
    rejectChange(e, t) {
        const n = this._changeToPosition(e, t);
        return n ? this._inlineDiffService.rejectPartialDiff(e, n) : !0;
    }
    cancel(e) {
        this._inlineDiffService.cancelDiff(e);
    }
    getBaselineTextLines(e) {
        const t = this._getDiffs().find((i)=>i.id === e);
        if (t) return t.originalTextLines;
        const n = this._getParked().find((i)=>i.diffId === e);
        return n ? [
            ...n.originalTextLines
        ] : void 0;
    }
    getRecentDiffDescriptors(e) {
        throw new Error("Not implemented");
    }
    _shouldHideDecorations(e) {
        return this._diffDecorationVisibilityService.shouldHideInlineDiffs();
    }
    _parkedToDescriptor(e) {
        const t = this._diffDecorationVisibilityService.shouldHideInlineDiffs();
        return {
            id: e.diffId,
            sourceId: this.sourceId,
            uri: e.uri,
            currentRange: {
                startLineNumber: 1,
                endLineNumberExclusive: e.originalTextLines.length + 1
            },
            changes: [],
            metadata: {
                generationId: e.generationUUID,
                composerId: e.composerId,
                toolCallId: e.toolCallId,
                hideDeletionViewZones: t,
                hideDecorations: t,
                source: Fee
            }
        };
    }
    _toDescriptor(e) {
        const t = e.activeLine !== void 0, n = this._shouldHideDecorations(e), i = n;
        return {
            id: e.id,
            sourceId: this.sourceId,
            uri: e.uri,
            currentRange: {
                startLineNumber: e.currentRange.startLineNumber,
                endLineNumberExclusive: e.currentRange.endLineNumberExclusive
            },
            changes: e.changes,
            originalLineTokens: e.originalLineTokens,
            streamingState: t ? {
                activeLine: e.activeLine,
                pendingRange: e.pendingRange ? {
                    startLineNumber: e.pendingRange.startLineNumber,
                    endLineNumberExclusive: e.pendingRange.endLineNumberExclusive
                } : void 0
            } : void 0,
            metadata: {
                generationId: e.generationUUID,
                composerId: e.composerMetadata?.composerId,
                toolCallId: e.composerMetadata?.toolCallId ?? e.toolCallId,
                hideDeletionViewZones: i,
                source: e.source,
                showNativeAcceptReject: e.showNativeAcceptReject,
                createdAt: e.createdAt,
                hideDecorations: n
            }
        };
    }
    _changeToPosition(e, t) {
        const n = this._getDiffs().find((r)=>r.id === e);
        if (!n) return;
        const i = n.currentRange.startLineNumber + t.addedRange.startLineNumber - 1;
        return new Yn(i, 1);
    }
};

}
