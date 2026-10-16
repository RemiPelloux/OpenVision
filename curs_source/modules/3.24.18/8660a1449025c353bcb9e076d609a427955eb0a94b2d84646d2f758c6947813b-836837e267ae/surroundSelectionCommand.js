import { Qs, qt } from "./range.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
var WFd, GFd;
export { GFd, WFd };
var __wakaru_qFd_initialized = false;
export function qFd() {
if (__wakaru_qFd_initialized) return;
__wakaru_qFd_initialized = true;
"use strict";
E(), Qs(), Cy(), WFd = class {
    constructor(t, e, n){
        this._range = t, this._charBeforeSelection = e, this._charAfterSelection = n;
    }
    getEditOperations(t, e) {
        e.addTrackedEditOperation(new qt(this._range.startLineNumber, this._range.startColumn, this._range.startLineNumber, this._range.startColumn), this._charBeforeSelection), e.addTrackedEditOperation(new qt(this._range.endLineNumber, this._range.endColumn, this._range.endLineNumber, this._range.endColumn), this._charAfterSelection);
    }
    computeCursorState(t, e) {
        const n = e.getInverseEditOperations(), i = n[0].range, r = n[1].range;
        return new bu(i.endLineNumber, i.endColumn, r.endLineNumber, r.endColumn - this._charAfterSelection.length);
    }
}, GFd = class {
    constructor(t, e, n){
        this._position = t, this._text = e, this._charAfter = n;
    }
    getEditOperations(t, e) {
        e.addTrackedEditOperation(new qt(this._position.lineNumber, this._position.column, this._position.lineNumber, this._position.column), this._text + this._charAfter);
    }
    computeCursorState(t, e) {
        const i = e.getInverseEditOperations()[0].range;
        return new bu(i.endLineNumber, i.startColumn, i.endLineNumber, i.endColumn - this._charAfter.length);
    }
};

}
