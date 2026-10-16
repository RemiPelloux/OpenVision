import { dt, qi } from "./range.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
var NPc, OPc;
export { NPc, OPc };
var __wakaru_FPc_initialized = false;
export function FPc() {
if (__wakaru_FPc_initialized) return;
__wakaru_FPc_initialized = true;
"use strict";
x(), qi(), _f(), NPc = class {
    constructor(e, t, n){
        this._range = e, this._charBeforeSelection = t, this._charAfterSelection = n;
    }
    getEditOperations(e, t) {
        t.addTrackedEditOperation(new dt(this._range.startLineNumber, this._range.startColumn, this._range.startLineNumber, this._range.startColumn), this._charBeforeSelection), t.addTrackedEditOperation(new dt(this._range.endLineNumber, this._range.endColumn, this._range.endLineNumber, this._range.endColumn), this._charAfterSelection);
    }
    computeCursorState(e, t) {
        const n = t.getInverseEditOperations(), i = n[0].range, r = n[1].range;
        return new za(i.endLineNumber, i.endColumn, r.endLineNumber, r.endColumn - this._charAfterSelection.length);
    }
}, OPc = class {
    constructor(e, t, n){
        this._position = e, this._text = t, this._charAfter = n;
    }
    getEditOperations(e, t) {
        t.addTrackedEditOperation(new dt(this._position.lineNumber, this._position.column, this._position.lineNumber, this._position.column), this._text + this._charAfter);
    }
    computeCursorState(e, t) {
        const i = t.getInverseEditOperations()[0].range;
        return new za(i.endLineNumber, i.startColumn, i.endLineNumber, i.endColumn - this._charAfter.length);
    }
};

}
