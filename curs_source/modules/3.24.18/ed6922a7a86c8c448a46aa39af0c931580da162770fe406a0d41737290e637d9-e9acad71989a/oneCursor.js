import { iW, ire, wb } from "./cursorCommon.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
var MJr;
export { MJr };
var __wakaru_Yfg_initialized = false;
export function Yfg() {
if (__wakaru_Yfg_initialized) return;
__wakaru_Yfg_initialized = true;
"use strict";
x(), ire(), ya(), qi(), _f(), MJr = class fkm {
    constructor(t){
        this._selTrackedRange = null, this._trackSelection = !0, this._setState(t, new iW(new dt(1, 1, 1, 1), 0, 0, new Yn(1, 1), 0), new iW(new dt(1, 1, 1, 1), 0, 0, new Yn(1, 1), 0));
    }
    dispose(t) {
        this._removeTrackedRange(t);
    }
    startTrackingSelection(t) {
        this._trackSelection = !0, this._updateTrackedRange(t);
    }
    stopTrackingSelection(t) {
        this._trackSelection = !1, this._removeTrackedRange(t);
    }
    _updateTrackedRange(t) {
        this._trackSelection && (this._selTrackedRange = t.model._setTrackedRange(this._selTrackedRange, this.modelState.selection, 0));
    }
    _removeTrackedRange(t) {
        this._selTrackedRange = t.model._setTrackedRange(this._selTrackedRange, null, 0);
    }
    asCursorState() {
        return new wb(this.modelState, this.viewState);
    }
    readSelectionFromMarkers(t) {
        const n = t.model._getTrackedRange(this._selTrackedRange);
        return this.modelState.selection.isEmpty() && !n.isEmpty() ? za.fromRange(n.collapseToEnd(), this.modelState.selection.getDirection()) : za.fromRange(n, this.modelState.selection.getDirection());
    }
    ensureValidState(t) {
        this._setState(t, this.modelState, this.viewState);
    }
    setState(t, n, i) {
        this._setState(t, n, i);
    }
    static _validatePositionWithCache(t, n, i, r) {
        return n.equals(i) ? r : t.normalizePosition(n, 2);
    }
    static _validateViewState(t, n) {
        const i = n.position, r = n.selectionStart.getStartPosition(), s = n.selectionStart.getEndPosition(), o = t.normalizePosition(i, 2), a = this._validatePositionWithCache(t, r, i, o), c = this._validatePositionWithCache(t, s, r, a);
        return i.equals(o) && r.equals(a) && s.equals(c) ? n : new iW(dt.fromPositions(a, c), n.selectionStartKind, n.selectionStartLeftoverVisibleColumns + r.column - a.column, o, n.leftoverVisibleColumns + i.column - o.column);
    }
    _setState(t, n, i) {
        if (i && (i = fkm._validateViewState(t.viewModel, i)), n) {
            const r = t.model.validateRange(n.selectionStart), s = n.selectionStart.equalsRange(r) ? n.selectionStartLeftoverVisibleColumns : 0, o = t.model.validatePosition(n.position), a = n.position.equals(o) ? n.leftoverVisibleColumns : 0;
            n = new iW(r, n.selectionStartKind, s, o, a);
        } else {
            if (!i) return;
            const r = t.model.validateRange(t.coordinatesConverter.convertViewRangeToModelRange(i.selectionStart)), s = t.model.validatePosition(t.coordinatesConverter.convertViewPositionToModelPosition(i.position));
            n = new iW(r, i.selectionStartKind, i.selectionStartLeftoverVisibleColumns, s, i.leftoverVisibleColumns);
        }
        if (i) {
            const r = t.coordinatesConverter.validateViewRange(i.selectionStart, n.selectionStart), s = t.coordinatesConverter.validateViewPosition(i.position, n.position);
            i = new iW(r, n.selectionStartKind, n.selectionStartLeftoverVisibleColumns, s, n.leftoverVisibleColumns);
        } else {
            const r = t.coordinatesConverter.convertModelPositionToViewPosition(new Yn(n.selectionStart.startLineNumber, n.selectionStart.startColumn)), s = t.coordinatesConverter.convertModelPositionToViewPosition(new Yn(n.selectionStart.endLineNumber, n.selectionStart.endColumn)), o = new dt(r.lineNumber, r.column, s.lineNumber, s.column), a = t.coordinatesConverter.convertModelPositionToViewPosition(n.position);
            i = new iW(o, n.selectionStartKind, n.selectionStartLeftoverVisibleColumns, a, n.leftoverVisibleColumns);
        }
        this.modelState = n, this.viewState = i, this._updateTrackedRange(t);
    }
};

}
