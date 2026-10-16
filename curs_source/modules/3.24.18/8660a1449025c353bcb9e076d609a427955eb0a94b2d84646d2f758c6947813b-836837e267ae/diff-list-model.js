import { Gt, Nt, Pn, Qe, st, tt } from "./Iwo.js";
import { VfC, Yt_ } from "./diff-find-engine.js";
import { I6n, Ldt } from "./glass-diff-virtualization-constants.js";
import { E } from "./tslib.es6.js";
var emc;
export { emc };
var __wakaru_Xt__initialized = false;
export function Xt_() {
if (__wakaru_Xt__initialized) return;
__wakaru_Xt__initialized = true;
"use strict";
E(), Gt(), Qe(), Ldt(), VfC(), emc = class extends st {
    constructor(t){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onDidChangeRowHeight = this._register(new tt), this.onDidChangeRowHeight = this._onDidChangeRowHeight.event, this.rows = [], this._virtualizerRelay = this._register(new Nt), this._findEngine = this._register(new Yt_({
            revealRowForMatch: (e)=>{
                this.setCardOpen({
                    filePath: e.diffKey,
                    open: !0
                }), this.scrollToRow(e.diffKey);
            }
        })), this.onDidChangeFind = this._findEngine.onDidChange, this._activeVirtualizer = t, this._bindVirtualizerRelay();
    }
    get activeVirtualizer() {
        return this._activeVirtualizer;
    }
    setActiveVirtualizer(t) {
        t !== this._activeVirtualizer && (this._activeVirtualizer = t, this._bindVirtualizerRelay());
    }
    setRows(t) {
        this.rows = t, this._onDidChange.fire();
    }
    bindScrollPort(t) {
        return this._scrollPort = t, Pn(()=>{
            this._scrollPort === t && (this._scrollPort = void 0);
        });
    }
    onViewportChanged(t) {
        this._activeVirtualizer.onViewportChanged(t);
    }
    bindMountedCardElement(t, e) {
        return this._activeVirtualizer.bindMountedCardElement(t, e);
    }
    bindCardDiffContentElement(t, e) {
        return this._activeVirtualizer.bindCardDiffContentElement(t, e);
    }
    getDiffCardSelectionTarget(t) {
        return this._activeVirtualizer.getDiffCardSelectionTarget(t);
    }
    scrollToFile(t, e) {
        const n = e?.openIfCollapsed ?? !0, i = this._rowIndexOf(t);
        if (i < 0) return;
        const r = this._activeVirtualizer.getFileCardTopOffsetPx(t);
        r === void 0 ? this._scrollPort?.scrollToIndex(i, {
            align: "start"
        }) : this._activeVirtualizer.scrollViewportBy(r - I6n), n && this.setCardOpen({
            filePath: t,
            open: !0
        });
    }
    scrollToRow(t) {
        const e = this._rowIndexOf(t);
        e < 0 || this._activeVirtualizer.hasMountedCardElement(t) || (this._scrollPort?.scrollToIndex(e, {
            align: "start"
        }), this.setCardOpen({
            filePath: t,
            open: !0
        }));
    }
    scrollRevealOffsetInRow(t, e) {
        const n = this._rowIndexOf(t);
        if (!(n < 0 || !this._activeVirtualizer.hasBoundViewport())) {
            if (this._activeVirtualizer.isCardMostlyOffscreen(t)) {
                this._scrollPort?.scrollToIndex(n, {
                    align: "start"
                }), this.setCardOpen({
                    filePath: t,
                    open: !0
                }), requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        this._activeVirtualizer.applyLineRevealInFile(t, e);
                    });
                });
                return;
            }
            this.setCardOpen({
                filePath: t,
                open: !0
            }), this._activeVirtualizer.applyLineRevealInFile(t, e);
        }
    }
    preExtendRowForGrowth(t, e) {
        const n = this._rowIndexOf(t);
        n < 0 || this._scrollPort?.preExtendForGrowth(n, e);
    }
    _rowIndexOf(t) {
        return this.rows.findIndex((e)=>e.id === t);
    }
    getRowHeight(t) {
        return this._activeVirtualizer.getRowHeight(t.id);
    }
    getRowHeightForId(t) {
        return this._activeVirtualizer.getRowHeight(t);
    }
    getRowHeightRecord(t) {
        return this._activeVirtualizer.getRowHeightRecord(t.id);
    }
    recordMeasurement(t, e, n) {
        return this._activeVirtualizer.recordMeasurement(t.id, e, n);
    }
    getCardOpenState(t) {
        return this._activeVirtualizer.getCardOpenState(t);
    }
    setCardOpen(t) {
        this._activeVirtualizer.setCardOpen(t);
    }
    registerFacts(t, e) {
        this._activeVirtualizer.registerFacts({
            ...e,
            filePath: t
        });
    }
    reportPhase(t, e) {
        this._activeVirtualizer.reportPhase(t, e);
    }
    reportHunkShape(t, e, n) {
        this._activeVirtualizer.reportHunkShape(t, e, n);
    }
    getFindSnapshot() {
        return this._findEngine.getSnapshot();
    }
    openFind() {
        this._findEngine.open(), this._onFindOpened();
    }
    closeFind() {
        this._onFindClosing(), this._findEngine.close();
    }
    setFindQuery(t) {
        this._findEngine.setQuery(t);
    }
    nextFindMatch() {
        this._findEngine.nextMatch();
    }
    previousFindMatch() {
        this._findEngine.prevMatch();
    }
    clearScrollTarget() {
        this._findEngine.clearScrollTarget();
    }
    getSearchStateForRow(t) {
        return this._findEngine.getSearchStateForRow(t);
    }
    reportPinnedReveals(t, e) {
        this._findEngine.reportPinnedReveals(t, e);
    }
    getPinnedRevealsForFile(t) {
        return this._findEngine.getPinnedRevealsForFile(t);
    }
    _onFindOpened() {}
    _onFindClosing() {}
    _bindVirtualizerRelay() {
        this._virtualizerRelay.clear(), this._virtualizerRelay.add(this._activeVirtualizer.onDidChange(()=>this._onDidChange.fire())), this._virtualizerRelay.add(this._activeVirtualizer.onDidChangeRowHeight((t)=>this._onDidChangeRowHeight.fire(t)));
    }
    bindVirtualizerLifetime() {
        this._bindVirtualizerRelay();
    }
    unbindVirtualizerLifetime() {
        this._virtualizerRelay.clear();
    }
};

}
