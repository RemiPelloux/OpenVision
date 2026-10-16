import { DP, FEc, OEc } from "./HVr.js";
import { dr } from "./arrays.js";
import { FT } from "./arraysFind.js";
import { ire, wb } from "./cursorCommon.js";
import { MJr, Yfg } from "./oneCursor.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
var PJr;
export { PJr };
var __wakaru_Xfg_initialized = false;
export function Xfg() {
if (__wakaru_Xfg_initialized) return;
__wakaru_Xfg_initialized = true;
"use strict";
x(), dr(), FT(), ire(), Yfg(), ya(), qi(), _f(), PJr = class {
    constructor(e){
        this.context = e, this.cursors = [
            new MJr(e)
        ], this.lastAddedCursorIndex = 0;
    }
    dispose() {
        for (const e of this.cursors)e.dispose(this.context);
    }
    startTrackingSelections() {
        for (const e of this.cursors)e.startTrackingSelection(this.context);
    }
    stopTrackingSelections() {
        for (const e of this.cursors)e.stopTrackingSelection(this.context);
    }
    updateContext(e) {
        this.context = e;
    }
    ensureValidState() {
        for (const e of this.cursors)e.ensureValidState(this.context);
    }
    readSelectionFromMarkers() {
        return this.cursors.map((e)=>e.readSelectionFromMarkers(this.context));
    }
    getAll() {
        return this.cursors.map((e)=>e.asCursorState());
    }
    getViewPositions() {
        return this.cursors.map((e)=>e.viewState.position);
    }
    getTopMostViewPosition() {
        return FEc(this.cursors, DP((e)=>e.viewState.position, Yn.compare)).viewState.position;
    }
    getBottomMostViewPosition() {
        return OEc(this.cursors, DP((e)=>e.viewState.position, Yn.compare)).viewState.position;
    }
    getSelections() {
        return this.cursors.map((e)=>e.modelState.selection);
    }
    getViewSelections() {
        return this.cursors.map((e)=>e.viewState.selection);
    }
    setSelections(e) {
        this.setStates(wb.fromModelSelections(e));
    }
    getPrimaryCursor() {
        return this.cursors[0].asCursorState();
    }
    setStates(e) {
        e !== null && (this.cursors[0].setState(this.context, e[0].modelState, e[0].viewState), this._setSecondaryStates(e.slice(1)));
    }
    _setSecondaryStates(e) {
        const t = this.cursors.length - 1, n = e.length;
        if (t < n) {
            const i = n - t;
            for(let r = 0; r < i; r++)this._addSecondaryCursor();
        } else if (t > n) {
            const i = t - n;
            for(let r = 0; r < i; r++)this._removeSecondaryCursor(this.cursors.length - 2);
        }
        for(let i = 0; i < n; i++)this.cursors[i + 1].setState(this.context, e[i].modelState, e[i].viewState);
    }
    killSecondaryCursors() {
        this._setSecondaryStates([]);
    }
    _addSecondaryCursor() {
        this.cursors.push(new MJr(this.context)), this.lastAddedCursorIndex = this.cursors.length - 1;
    }
    getLastAddedCursorIndex() {
        return this.cursors.length === 1 || this.lastAddedCursorIndex === 0 ? 0 : this.lastAddedCursorIndex;
    }
    _removeSecondaryCursor(e) {
        this.lastAddedCursorIndex >= e + 1 && this.lastAddedCursorIndex--, this.cursors[e + 1].dispose(this.context), this.cursors.splice(e + 1, 1);
    }
    normalize() {
        if (this.cursors.length === 1) return;
        const e = this.cursors.slice(0), t = [];
        for(let n = 0, i = e.length; n < i; n++)t.push({
            index: n,
            selection: e[n].modelState.selection
        });
        t.sort(DP((n)=>n.selection, dt.compareRangesUsingStarts));
        for(let n = 0; n < t.length - 1; n++){
            const i = t[n], r = t[n + 1], s = i.selection, o = r.selection;
            if (!this.context.cursorConfig.multiCursorMergeOverlapping) continue;
            let a;
            if (o.isEmpty() || s.isEmpty() ? a = o.getStartPosition().isBeforeOrEqual(s.getEndPosition()) : a = o.getStartPosition().isBefore(s.getEndPosition()), a) {
                const c = i.index < r.index ? n : n + 1, l = i.index < r.index ? n + 1 : n, u = t[l].index, h = t[c].index, p = t[l].selection, g = t[c].selection;
                if (!p.equalsSelection(g)) {
                    const f = p.plusRange(g), v = p.selectionStartLineNumber === p.startLineNumber && p.selectionStartColumn === p.startColumn, b = g.selectionStartLineNumber === g.startLineNumber && g.selectionStartColumn === g.startColumn;
                    let y;
                    u === this.lastAddedCursorIndex ? (y = v, this.lastAddedCursorIndex = h) : y = b;
                    let T;
                    y ? T = new za(f.startLineNumber, f.startColumn, f.endLineNumber, f.endColumn) : T = new za(f.endLineNumber, f.endColumn, f.startLineNumber, f.startColumn), t[c].selection = T;
                    const E = wb.fromModelSelection(T);
                    e[h].setState(this.context, E.modelState, E.viewState);
                }
                for (const f of t)f.index > u && f.index--;
                e.splice(u, 1), t.splice(l, 1), this._removeSecondaryCursor(u - 1), n--;
            }
        }
    }
};

}
