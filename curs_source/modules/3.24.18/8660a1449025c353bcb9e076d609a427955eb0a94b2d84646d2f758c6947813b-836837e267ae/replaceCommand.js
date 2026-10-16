import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
import { lFd } from "./ze.js";
var mW, Xkr, cFd, Oii, Fii, uFd, Zkr;
export { Fii, Oii, Xkr, Zkr, cFd, mW, uFd };
var __wakaru_wgn_initialized = false;
export function wgn() {
if (__wakaru_wgn_initialized) return;
__wakaru_wgn_initialized = true;
"use strict";
E(), jc(), Qs(), Cy(), mW = class {
    constructor(t, e, n = !1){
        this._range = t, this._text = e, this.insertsAutoWhitespace = n;
    }
    getEditOperations(t, e) {
        e.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(t, e) {
        const i = e.getInverseEditOperations()[0].range;
        return bu.fromPositions(i.getEndPosition());
    }
}, Xkr = class {
    constructor(t, e, n = !1){
        this._range = t, this._text = e, this.insertsAutoWhitespace = n;
    }
    getEditOperations(t, e) {
        const n = this._range.getStartPosition(), i = this._range.getEndPosition(), r = i.lineNumber, s = this._text.length + (this._range.isEmpty() ? 0 : -1);
        let o = lFd(t, i, s);
        o.lineNumber > r && (o = new er(r, t.getLineMaxColumn(r)));
        const a = qt.fromPositions(n, o);
        e.addTrackedEditOperation(a, this._text);
    }
    computeCursorState(t, e) {
        const i = e.getInverseEditOperations()[0].range;
        return bu.fromPositions(i.getEndPosition());
    }
}, cFd = class {
    constructor(t, e){
        this._range = t, this._text = e;
    }
    getEditOperations(t, e) {
        e.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(t, e) {
        const i = e.getInverseEditOperations()[0].range;
        return bu.fromRange(i, 0);
    }
}, Oii = class {
    constructor(t, e, n = !1){
        this._range = t, this._text = e, this.insertsAutoWhitespace = n;
    }
    getEditOperations(t, e) {
        e.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(t, e) {
        const i = e.getInverseEditOperations()[0].range;
        return bu.fromPositions(i.getStartPosition());
    }
}, Fii = class {
    constructor(t, e, n, i, r = !1){
        this._range = t, this._text = e, this._columnDeltaOffset = i, this._lineNumberDeltaOffset = n, this.insertsAutoWhitespace = r;
    }
    getEditOperations(t, e) {
        e.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(t, e) {
        const i = e.getInverseEditOperations()[0].range;
        return bu.fromPositions(i.getEndPosition().delta(this._lineNumberDeltaOffset, this._columnDeltaOffset));
    }
}, uFd = class {
    constructor(t){
        this._range = t;
    }
    getEditOperations(t, e) {
        const n = t.getValueInRange(this._range), i = this._range.getEndPosition(), r = i.lineNumber;
        let s = lFd(t, i, n.length);
        s.lineNumber > r && (s = new er(r, t.getLineMaxColumn(r)));
        const o = qt.fromPositions(i, s);
        e.addTrackedEditOperation(o, "");
    }
    computeCursorState(t, e) {
        const i = e.getInverseEditOperations()[0].range;
        return bu.fromPositions(i.getEndPosition());
    }
}, Zkr = class {
    constructor(t, e, n, i = !1){
        this._range = t, this._text = e, this._initialSelection = n, this._forceMoveMarkers = i, this._selectionId = null;
    }
    getEditOperations(t, e) {
        e.addTrackedEditOperation(this._range, this._text, this._forceMoveMarkers), this._selectionId = e.trackSelection(this._initialSelection);
    }
    computeCursorState(t, e) {
        return e.getTrackedSelection(this._selectionId);
    }
};

}
