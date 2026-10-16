import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var za;
export { za };
var __wakaru__f_initialized = false;
export function _f() {
if (__wakaru__f_initialized) return;
__wakaru__f_initialized = true;
"use strict";
x(), ya(), qi(), za = class Fye extends dt {
    constructor(t, n, i, r){
        super(t, n, i, r), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = i, this.positionColumn = r;
    }
    toString() {
        return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
    }
    equalsSelection(t) {
        return Fye.selectionsEqual(this, t);
    }
    static selectionsEqual(t, n) {
        return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
    }
    getDirection() {
        return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1;
    }
    setEndPosition(t, n) {
        return this.getDirection() === 0 ? new Fye(this.startLineNumber, this.startColumn, t, n) : new Fye(t, n, this.startLineNumber, this.startColumn);
    }
    getPosition() {
        return new Yn(this.positionLineNumber, this.positionColumn);
    }
    getSelectionStart() {
        return new Yn(this.selectionStartLineNumber, this.selectionStartColumn);
    }
    setStartPosition(t, n) {
        return this.getDirection() === 0 ? new Fye(t, n, this.endLineNumber, this.endColumn) : new Fye(this.endLineNumber, this.endColumn, t, n);
    }
    static fromPositions(t, n = t) {
        return new Fye(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    static fromRange(t, n) {
        return n === 0 ? new Fye(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : new Fye(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn);
    }
    static liftSelection(t) {
        return new Fye(t.selectionStartLineNumber, t.selectionStartColumn, t.positionLineNumber, t.positionColumn);
    }
    static selectionsArrEqual(t, n) {
        if (t && !n || !t && n) return !1;
        if (!t && !n) return !0;
        if (t.length !== n.length) return !1;
        for(let i = 0, r = t.length; i < r; i++)if (!this.selectionsEqual(t[i], n[i])) return !1;
        return !0;
    }
    static isISelection(t) {
        return t && typeof t.selectionStartLineNumber == "number" && typeof t.selectionStartColumn == "number" && typeof t.positionLineNumber == "number" && typeof t.positionColumn == "number";
    }
    static createWithDirection(t, n, i, r, s) {
        return s === 0 ? new Fye(t, n, i, r) : new Fye(i, r, t, n);
    }
};

}
