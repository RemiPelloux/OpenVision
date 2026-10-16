import { Gt, Pn, Qe, Zm, st, tt } from "./Iwo.js";
import { bo } from "./arrays.js";
import { DfC, Dt_ } from "./diff-list-scroll-persistence.js";
import { $t_, OfC } from "./diff-row-height-model.js";
import { Ldt, Mt_ } from "./glass-diff-virtualization-constants.js";
import { FfC, UfC } from "./gpc.js";
import { BfC } from "./top-visible-file-path.js";
import { E } from "./tslib.es6.js";
var $pc;
export { $pc };
var __wakaru_Ht__initialized = false;
export function Ht_() {
if (__wakaru_Ht__initialized) return;
__wakaru_Ht__initialized = true;
"use strict";
E(), bo(), Gt(), Qe(), DfC(), OfC(), Ldt(), BfC(), $pc = class extends st {
    constructor(){
        super(), this._onDidChangeEmitter = this._register(new tt), this.onDidChange = this._onDidChangeEmitter.event, this._rowHeightModel = this._register(new $t_), this.onDidChangeRowHeight = this._rowHeightModel.onDidChangeRowHeight, this._filePaths = [], this._filePathSet = new Set, this._openByFilePath = new Map, this._contentReadyByFilePath = new Map, this._cardRootElementByFilePath = new Map, this._diffContentElementByFilePath = new Map, this._defaultOpen = !0;
        const t = {
            getFileIndex: (e)=>this._filePaths.indexOf(e),
            getTopVisibleFilePath: ()=>this.getTopVisibleFilePath(),
            getFileCardTopOffsetPx: (e)=>this._getFileCardTopOffset(e),
            getEstimatedFileTopPx: (e)=>this._getEstimatedFileTopPx(e),
            onDidChangeRowHeight: this.onDidChangeRowHeight
        };
        this._scrollPersistence = this._register(new Dt_(t));
    }
    onViewportChanged(t) {
        this._viewportElement = t, this._scrollPersistence.bindViewport(t);
    }
    setViewId(t) {
        this._scrollPersistence.setViewId(t);
    }
    getScrollAnchor() {
        return this._scrollPersistence.getAnchor();
    }
    restoreScrollAnchor() {
        this._scrollPersistence.restore();
    }
    deactivateForScopeSwitch() {
        this._scrollPersistence.bindViewport(void 0), this._viewportElement = void 0;
    }
    _getEstimatedFileTopPx(t) {
        let e = 0;
        for(let n = 0; n < t; n++)e += this._rowHeightModel.getRowHeight(this._filePaths[n]);
        return e;
    }
    setFilePaths(t) {
        if (Zm(this._filePaths, t)) return;
        this._filePaths = Object.freeze([
            ...t
        ]);
        const e = new Set(this._filePaths);
        this._filePathSet = e, this._defaultOpen = this._filePaths.length <= Mt_;
        for (const n of [
            ...this._openByFilePath.keys()
        ])e.has(n) || this._openByFilePath.delete(n);
        for (const n of [
            ...this._contentReadyByFilePath.keys()
        ])e.has(n) || this._contentReadyByFilePath.delete(n);
        for (const n of [
            ...this._cardRootElementByFilePath.keys()
        ])e.has(n) || this._cardRootElementByFilePath.delete(n);
        this._rowHeightModel.pruneFilePaths(e), this._emitDidChange();
    }
    bindMountedCardElement(t, e) {
        return this._cardRootElementByFilePath.set(t, e), Pn(()=>{
            this._cardRootElementByFilePath.get(t) === e && this._cardRootElementByFilePath.delete(t);
        });
    }
    bindCardDiffContentElement(t, e) {
        return this._diffContentElementByFilePath.set(t, e), Pn(()=>{
            this._diffContentElementByFilePath.get(t) === e && this._diffContentElementByFilePath.delete(t);
        });
    }
    getDiffCardSelectionTarget(t) {
        const e = this._filePathForCaret(t);
        if (e === void 0) return;
        const n = this._getCardRootElement(e);
        if (n) return {
            cardRoot: n,
            diffContentElement: this._getDiffContentElement(e)
        };
    }
    getCardOpenState(t) {
        return this._openByFilePath.get(t) ?? this._defaultOpen;
    }
    getCardContentReady(t) {
        return this._contentReadyByFilePath.get(t) ?? !1;
    }
    setCardOpen({ filePath: t, open: e, revealHeaderIfOutsideViewport: n }) {
        if (this.getCardOpenState(t) === e) return;
        const i = !e && n ? this._getFileCardTopOffset(t) : void 0;
        this._openByFilePath.set(t, e), this._rowHeightModel.reportPhase(t, e ? {
            kind: "opening",
            floorPx: this._rowHeightModel.getRowHeight(t)
        } : {
            kind: "collapsed"
        }), this._emitDidChange();
        const r = i === void 0 ? void 0 : UfC({
            cardTopOffsetPx: i
        });
        r !== void 0 && this.scrollViewportBy(r);
    }
    setCardContentReady(t, e) {
        (this._contentReadyByFilePath.get(t) ?? !1) !== e && (this._contentReadyByFilePath.set(t, e), this._emitDidChange());
    }
    getRowHeight(t) {
        return this._rowHeightModel.getRowHeight(t);
    }
    getRowHeightRecord(t) {
        return this._rowHeightModel.getRowHeightRecord(t);
    }
    registerFacts(t) {
        this._rowHeightModel.registerFacts(t);
    }
    reportPhase(t, e) {
        this._rowHeightModel.reportPhase(t, e), this._emitDidChange();
    }
    reportHunkShape(t, e, n) {
        this._rowHeightModel.reportHunkShape(t, e, n);
    }
    recordMeasurement(t, e, n) {
        return this._rowHeightModel.recordMeasurement(t, e, n);
    }
    hasBoundViewport() {
        return this._viewportElement !== void 0;
    }
    hasMountedCardElement(t) {
        return this._getCardRootElement(t) !== void 0;
    }
    getFileCardTopOffsetPx(t) {
        return this._getFileCardTopOffset(t);
    }
    isCardMostlyOffscreen(t) {
        const e = this._viewportElement;
        if (!e) return !0;
        const n = e.getBoundingClientRect(), i = this._getCardRootElement(t)?.getBoundingClientRect(), r = 8;
        return !i || i.bottom < n.top + r || i.top > n.bottom - r;
    }
    applyLineRevealInFile(t, e) {
        const n = this._viewportElement, i = this._getCardRootElement(t);
        if (!n || !i) return;
        const r = n.getBoundingClientRect(), s = i.getBoundingClientRect(), a = n.scrollTop + (s.top - r.top) + e - n.clientHeight / 2, l = Math.max(0, n.scrollHeight - n.clientHeight), c = Math.max(0, Math.min(l, a));
        n.scrollTo({
            top: c,
            behavior: "instant"
        });
    }
    scrollViewportBy(t) {
        if (!this._viewportElement || !Number.isFinite(t) || t === 0) return;
        const e = Math.max(0, this._viewportElement.scrollHeight - this._viewportElement.clientHeight), n = Math.max(0, Math.min(e, this._viewportElement.scrollTop + t));
        n !== this._viewportElement.scrollTop && this._viewportElement.scrollTo({
            top: n,
            behavior: "instant"
        });
    }
    getTopVisibleFilePath() {
        if (!this._viewportElement) return;
        const t = this._viewportElement.getBoundingClientRect().top, e = [];
        for (const n of this._filePaths){
            const i = this._getCardRootElement(n);
            if (!i) continue;
            const r = i.getBoundingClientRect();
            e.push({
                filePath: n,
                bottomOffset: r.bottom - t
            });
        }
        return FfC(e);
    }
    dispose() {
        this._viewportElement = void 0, this._cardRootElementByFilePath.clear(), this._openByFilePath.clear(), this._contentReadyByFilePath.clear(), this._filePathSet.clear(), super.dispose();
    }
    _getFileCardTopOffset(t) {
        const e = this._viewportElement;
        if (!e) return;
        const n = this._getCardRootElement(t);
        if (n) return n.getBoundingClientRect().top - e.getBoundingClientRect().top;
    }
    _getCardRootElement(t) {
        const e = this._cardRootElementByFilePath.get(t);
        if (e) {
            if (!e.isConnected) {
                this._cardRootElementByFilePath.delete(t);
                return;
            }
            return e;
        }
    }
    _getDiffContentElement(t) {
        const e = this._diffContentElementByFilePath.get(t);
        if (e) {
            if (!e.isConnected) {
                this._diffContentElementByFilePath.delete(t);
                return;
            }
            return e;
        }
    }
    _filePathForCaret(t) {
        if (t) {
            for (const [e, n] of this._cardRootElementByFilePath)if (n.isConnected && n.contains(t)) return e;
        }
    }
    _emitDidChange() {
        this._onDidChangeEmitter.fire();
    }
};

}
