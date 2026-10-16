import { Yn, ya } from "./position.js";
import { HMc } from "./qIc.js";
import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
var Y9, cfi, WMc, zmn, Kmn, GMc, lfi;
export { GMc, Kmn, WMc, Y9, cfi, lfi, zmn };
var __wakaru_y2t_initialized = false;
export function y2t() {
if (__wakaru_y2t_initialized) return;
__wakaru_y2t_initialized = true;
"use strict";
x(), ya(), qi(), _f(), Y9 = class {
    constructor(e, t, n = !1){
        this._range = e, this._text = t, this.insertsAutoWhitespace = n;
    }
    getEditOperations(e, t) {
        t.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(e, t) {
        const i = t.getInverseEditOperations()[0].range;
        return za.fromPositions(i.getEndPosition());
    }
}, cfi = class {
    constructor(e, t, n = !1){
        this._range = e, this._text = t, this.insertsAutoWhitespace = n;
    }
    getEditOperations(e, t) {
        const n = this._range.getStartPosition(), i = this._range.getEndPosition(), r = i.lineNumber, s = this._text.length + (this._range.isEmpty() ? 0 : -1);
        let o = HMc(e, i, s);
        o.lineNumber > r && (o = new Yn(r, e.getLineMaxColumn(r)));
        const a = dt.fromPositions(n, o);
        t.addTrackedEditOperation(a, this._text);
    }
    computeCursorState(e, t) {
        const i = t.getInverseEditOperations()[0].range;
        return za.fromPositions(i.getEndPosition());
    }
}, WMc = class {
    constructor(e, t){
        this._range = e, this._text = t;
    }
    getEditOperations(e, t) {
        t.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(e, t) {
        const i = t.getInverseEditOperations()[0].range;
        return za.fromRange(i, 0);
    }
}, zmn = class {
    constructor(e, t, n = !1){
        this._range = e, this._text = t, this.insertsAutoWhitespace = n;
    }
    getEditOperations(e, t) {
        t.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(e, t) {
        const i = t.getInverseEditOperations()[0].range;
        return za.fromPositions(i.getStartPosition());
    }
}, Kmn = class {
    constructor(e, t, n, i, r = !1){
        this._range = e, this._text = t, this._columnDeltaOffset = i, this._lineNumberDeltaOffset = n, this.insertsAutoWhitespace = r;
    }
    getEditOperations(e, t) {
        t.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(e, t) {
        const i = t.getInverseEditOperations()[0].range;
        return za.fromPositions(i.getEndPosition().delta(this._lineNumberDeltaOffset, this._columnDeltaOffset));
    }
}, GMc = class {
    constructor(e){
        this._range = e;
    }
    getEditOperations(e, t) {
        const n = e.getValueInRange(this._range), i = this._range.getEndPosition(), r = i.lineNumber;
        let s = HMc(e, i, n.length);
        s.lineNumber > r && (s = new Yn(r, e.getLineMaxColumn(r)));
        const o = dt.fromPositions(i, s);
        t.addTrackedEditOperation(o, "");
    }
    computeCursorState(e, t) {
        const i = t.getInverseEditOperations()[0].range;
        return za.fromPositions(i.getEndPosition());
    }
}, lfi = class {
    constructor(e, t, n, i = !1){
        this._range = e, this._text = t, this._initialSelection = n, this._forceMoveMarkers = i, this._selectionId = null;
    }
    getEditOperations(e, t) {
        t.addTrackedEditOperation(this._range, this._text, this._forceMoveMarkers), this._selectionId = t.trackSelection(this._initialSelection);
    }
    computeCursorState(e, t) {
        return t.getTrackedSelection(this._selectionId);
    }
};

}
