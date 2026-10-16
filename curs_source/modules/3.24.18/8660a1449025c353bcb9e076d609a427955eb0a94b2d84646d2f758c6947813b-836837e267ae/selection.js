import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var bu;
export { bu };
var __wakaru_Cy_initialized = false;
export function Cy() {
if (__wakaru_Cy_initialized) return;
__wakaru_Cy_initialized = true;
"use strict";
E(), jc(), Qs(), bu = class gNe extends qt {
    constructor(e, n, i, r){
        super(e, n, i, r), this.selectionStartLineNumber = e, this.selectionStartColumn = n, this.positionLineNumber = i, this.positionColumn = r;
    }
    toString() {
        return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
    }
    equalsSelection(e) {
        return gNe.selectionsEqual(this, e);
    }
    static selectionsEqual(e, n) {
        return e.selectionStartLineNumber === n.selectionStartLineNumber && e.selectionStartColumn === n.selectionStartColumn && e.positionLineNumber === n.positionLineNumber && e.positionColumn === n.positionColumn;
    }
    getDirection() {
        return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1;
    }
    setEndPosition(e, n) {
        return this.getDirection() === 0 ? new gNe(this.startLineNumber, this.startColumn, e, n) : new gNe(e, n, this.startLineNumber, this.startColumn);
    }
    getPosition() {
        return new er(this.positionLineNumber, this.positionColumn);
    }
    getSelectionStart() {
        return new er(this.selectionStartLineNumber, this.selectionStartColumn);
    }
    setStartPosition(e, n) {
        return this.getDirection() === 0 ? new gNe(e, n, this.endLineNumber, this.endColumn) : new gNe(this.endLineNumber, this.endColumn, e, n);
    }
    static fromPositions(e, n = e) {
        return new gNe(e.lineNumber, e.column, n.lineNumber, n.column);
    }
    static fromRange(e, n) {
        return n === 0 ? new gNe(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : new gNe(e.endLineNumber, e.endColumn, e.startLineNumber, e.startColumn);
    }
    static liftSelection(e) {
        return new gNe(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
    }
    static selectionsArrEqual(e, n) {
        if (e && !n || !e && n) return !1;
        if (!e && !n) return !0;
        if (e.length !== n.length) return !1;
        for(let i = 0, r = e.length; i < r; i++)if (!this.selectionsEqual(e[i], n[i])) return !1;
        return !0;
    }
    static isISelection(e) {
        return e && typeof e.selectionStartLineNumber == "number" && typeof e.selectionStartColumn == "number" && typeof e.positionLineNumber == "number" && typeof e.positionColumn == "number";
    }
    static createWithDirection(e, n, i, r, s) {
        return s === 0 ? new gNe(e, n, i, r) : new gNe(i, r, e, n);
    }
};

}
