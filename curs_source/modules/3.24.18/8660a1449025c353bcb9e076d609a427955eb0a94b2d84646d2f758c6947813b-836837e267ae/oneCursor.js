import { O1, swe, wQ } from "./cursorCommon.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
var N$o;
export { N$o };
var __wakaru_BPy_initialized = false;
export function BPy() {
if (__wakaru_BPy_initialized) return;
__wakaru_BPy_initialized = true;
"use strict";
E(), swe(), jc(), Qs(), Cy(), N$o = class $Ab {
    constructor(e){
        this._selTrackedRange = null, this._trackSelection = !0, this._setState(e, new wQ(new qt(1, 1, 1, 1), 0, 0, new er(1, 1), 0), new wQ(new qt(1, 1, 1, 1), 0, 0, new er(1, 1), 0));
    }
    dispose(e) {
        this._removeTrackedRange(e);
    }
    startTrackingSelection(e) {
        this._trackSelection = !0, this._updateTrackedRange(e);
    }
    stopTrackingSelection(e) {
        this._trackSelection = !1, this._removeTrackedRange(e);
    }
    _updateTrackedRange(e) {
        this._trackSelection && (this._selTrackedRange = e.model._setTrackedRange(this._selTrackedRange, this.modelState.selection, 0));
    }
    _removeTrackedRange(e) {
        this._selTrackedRange = e.model._setTrackedRange(this._selTrackedRange, null, 0);
    }
    asCursorState() {
        return new O1(this.modelState, this.viewState);
    }
    readSelectionFromMarkers(e) {
        const n = e.model._getTrackedRange(this._selTrackedRange);
        return this.modelState.selection.isEmpty() && !n.isEmpty() ? bu.fromRange(n.collapseToEnd(), this.modelState.selection.getDirection()) : bu.fromRange(n, this.modelState.selection.getDirection());
    }
    ensureValidState(e) {
        this._setState(e, this.modelState, this.viewState);
    }
    setState(e, n, i) {
        this._setState(e, n, i);
    }
    static _validatePositionWithCache(e, n, i, r) {
        return n.equals(i) ? r : e.normalizePosition(n, 2);
    }
    static _validateViewState(e, n) {
        const i = n.position, r = n.selectionStart.getStartPosition(), s = n.selectionStart.getEndPosition(), o = e.normalizePosition(i, 2), a = this._validatePositionWithCache(e, r, i, o), l = this._validatePositionWithCache(e, s, r, a);
        return i.equals(o) && r.equals(a) && s.equals(l) ? n : new wQ(qt.fromPositions(a, l), n.selectionStartKind, n.selectionStartLeftoverVisibleColumns + r.column - a.column, o, n.leftoverVisibleColumns + i.column - o.column);
    }
    _setState(e, n, i) {
        if (i && (i = $Ab._validateViewState(e.viewModel, i)), n) {
            const r = e.model.validateRange(n.selectionStart), s = n.selectionStart.equalsRange(r) ? n.selectionStartLeftoverVisibleColumns : 0, o = e.model.validatePosition(n.position), a = n.position.equals(o) ? n.leftoverVisibleColumns : 0;
            n = new wQ(r, n.selectionStartKind, s, o, a);
        } else {
            if (!i) return;
            const r = e.model.validateRange(e.coordinatesConverter.convertViewRangeToModelRange(i.selectionStart)), s = e.model.validatePosition(e.coordinatesConverter.convertViewPositionToModelPosition(i.position));
            n = new wQ(r, i.selectionStartKind, i.selectionStartLeftoverVisibleColumns, s, i.leftoverVisibleColumns);
        }
        if (i) {
            const r = e.coordinatesConverter.validateViewRange(i.selectionStart, n.selectionStart), s = e.coordinatesConverter.validateViewPosition(i.position, n.position);
            i = new wQ(r, n.selectionStartKind, n.selectionStartLeftoverVisibleColumns, s, n.leftoverVisibleColumns);
        } else {
            const r = e.coordinatesConverter.convertModelPositionToViewPosition(new er(n.selectionStart.startLineNumber, n.selectionStart.startColumn)), s = e.coordinatesConverter.convertModelPositionToViewPosition(new er(n.selectionStart.endLineNumber, n.selectionStart.endColumn)), o = new qt(r.lineNumber, r.column, s.lineNumber, s.column), a = e.coordinatesConverter.convertModelPositionToViewPosition(n.position);
            i = new wQ(o, n.selectionStartKind, n.selectionStartLeftoverVisibleColumns, a, n.leftoverVisibleColumns);
        }
        this.modelState = n, this.viewState = i, this._updateTrackedRange(e);
    }
};

}
