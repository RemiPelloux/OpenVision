import { I5, aYu, oYu } from "./Iwo.js";
import { bo } from "./arrays.js";
import { p4 } from "./arraysFind.js";
import { O1, swe } from "./cursorCommon.js";
import { BPy, N$o } from "./oneCursor.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
var L$o;
export { L$o };
var __wakaru_UPy_initialized = false;
export function UPy() {
if (__wakaru_UPy_initialized) return;
__wakaru_UPy_initialized = true;
"use strict";
E(), bo(), p4(), swe(), BPy(), jc(), Qs(), Cy(), L$o = class {
    constructor(t){
        this.context = t, this.cursors = [
            new N$o(t)
        ], this.lastAddedCursorIndex = 0;
    }
    dispose() {
        for (const t of this.cursors)t.dispose(this.context);
    }
    startTrackingSelections() {
        for (const t of this.cursors)t.startTrackingSelection(this.context);
    }
    stopTrackingSelections() {
        for (const t of this.cursors)t.stopTrackingSelection(this.context);
    }
    updateContext(t) {
        this.context = t;
    }
    ensureValidState() {
        for (const t of this.cursors)t.ensureValidState(this.context);
    }
    readSelectionFromMarkers() {
        return this.cursors.map((t)=>t.readSelectionFromMarkers(this.context));
    }
    getAll() {
        return this.cursors.map((t)=>t.asCursorState());
    }
    getViewPositions() {
        return this.cursors.map((t)=>t.viewState.position);
    }
    getTopMostViewPosition() {
        return aYu(this.cursors, I5((t)=>t.viewState.position, er.compare)).viewState.position;
    }
    getBottomMostViewPosition() {
        return oYu(this.cursors, I5((t)=>t.viewState.position, er.compare)).viewState.position;
    }
    getSelections() {
        return this.cursors.map((t)=>t.modelState.selection);
    }
    getViewSelections() {
        return this.cursors.map((t)=>t.viewState.selection);
    }
    setSelections(t) {
        this.setStates(O1.fromModelSelections(t));
    }
    getPrimaryCursor() {
        return this.cursors[0].asCursorState();
    }
    setStates(t) {
        t !== null && (this.cursors[0].setState(this.context, t[0].modelState, t[0].viewState), this._setSecondaryStates(t.slice(1)));
    }
    _setSecondaryStates(t) {
        const e = this.cursors.length - 1, n = t.length;
        if (e < n) {
            const i = n - e;
            for(let r = 0; r < i; r++)this._addSecondaryCursor();
        } else if (e > n) {
            const i = e - n;
            for(let r = 0; r < i; r++)this._removeSecondaryCursor(this.cursors.length - 2);
        }
        for(let i = 0; i < n; i++)this.cursors[i + 1].setState(this.context, t[i].modelState, t[i].viewState);
    }
    killSecondaryCursors() {
        this._setSecondaryStates([]);
    }
    _addSecondaryCursor() {
        this.cursors.push(new N$o(this.context)), this.lastAddedCursorIndex = this.cursors.length - 1;
    }
    getLastAddedCursorIndex() {
        return this.cursors.length === 1 || this.lastAddedCursorIndex === 0 ? 0 : this.lastAddedCursorIndex;
    }
    _removeSecondaryCursor(t) {
        this.lastAddedCursorIndex >= t + 1 && this.lastAddedCursorIndex--, this.cursors[t + 1].dispose(this.context), this.cursors.splice(t + 1, 1);
    }
    normalize() {
        if (this.cursors.length === 1) return;
        const t = this.cursors.slice(0), e = [];
        for(let n = 0, i = t.length; n < i; n++)e.push({
            index: n,
            selection: t[n].modelState.selection
        });
        e.sort(I5((n)=>n.selection, qt.compareRangesUsingStarts));
        for(let n = 0; n < e.length - 1; n++){
            const i = e[n], r = e[n + 1], s = i.selection, o = r.selection;
            if (!this.context.cursorConfig.multiCursorMergeOverlapping) continue;
            let a;
            if (o.isEmpty() || s.isEmpty() ? a = o.getStartPosition().isBeforeOrEqual(s.getEndPosition()) : a = o.getStartPosition().isBefore(s.getEndPosition()), a) {
                const l = i.index < r.index ? n : n + 1, c = i.index < r.index ? n + 1 : n, u = e[c].index, d = e[l].index, h = e[c].selection, p = e[l].selection;
                if (!h.equalsSelection(p)) {
                    const g = h.plusRange(p), f = h.selectionStartLineNumber === h.startLineNumber && h.selectionStartColumn === h.startColumn, _ = p.selectionStartLineNumber === p.startLineNumber && p.selectionStartColumn === p.startColumn;
                    let b;
                    u === this.lastAddedCursorIndex ? (b = f, this.lastAddedCursorIndex = d) : b = _;
                    let y;
                    b ? y = new bu(g.startLineNumber, g.startColumn, g.endLineNumber, g.endColumn) : y = new bu(g.endLineNumber, g.endColumn, g.startLineNumber, g.startColumn), e[l].selection = y;
                    const S = O1.fromModelSelection(y);
                    t[d].setState(this.context, S.modelState, S.viewState);
                }
                for (const g of e)g.index > u && g.index--;
                t.splice(u, 1), e.splice(c, 1), this._removeSecondaryCursor(u - 1), n--;
            }
        }
    }
};

}
