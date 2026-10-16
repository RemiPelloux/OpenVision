import { DD, wd } from "./lineRange.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var o0r, N5;
export { N5, o0r };
var __wakaru_WAe_initialized = false;
export function WAe() {
if (__wakaru_WAe_initialized) return;
__wakaru_WAe_initialized = true;
"use strict";
E(), DD(), jc(), Qs(), o0r = class Z7e {
    constructor(e, n){
        this.lineCount = e, this.columnCount = n;
    }
    static lengthDiffNonNegative(e, n) {
        return n.isLessThan(e) ? Z7e.zero : e.lineCount === n.lineCount ? new Z7e(0, n.columnCount - e.columnCount) : new Z7e(n.lineCount - e.lineCount, n.columnCount);
    }
    static betweenPositions(e, n) {
        return e.lineNumber === n.lineNumber ? new Z7e(0, n.column - e.column) : new Z7e(n.lineNumber - e.lineNumber, n.column - 1);
    }
    static fromPosition(e) {
        return new Z7e(e.lineNumber - 1, e.column - 1);
    }
    static ofRange(e) {
        return Z7e.betweenPositions(e.getStartPosition(), e.getEndPosition());
    }
    static ofText(e) {
        let n = 0, i = 0;
        for (const r of e)r === `
` ? (n++, i = 0) : i++;
        return new Z7e(n, i);
    }
    isZero() {
        return this.lineCount === 0 && this.columnCount === 0;
    }
    isLessThan(e) {
        return this.lineCount !== e.lineCount ? this.lineCount < e.lineCount : this.columnCount < e.columnCount;
    }
    isGreaterThan(e) {
        return this.lineCount !== e.lineCount ? this.lineCount > e.lineCount : this.columnCount > e.columnCount;
    }
    isGreaterThanOrEqualTo(e) {
        return this.lineCount !== e.lineCount ? this.lineCount > e.lineCount : this.columnCount >= e.columnCount;
    }
    equals(e) {
        return this.lineCount === e.lineCount && this.columnCount === e.columnCount;
    }
    compare(e) {
        return this.lineCount !== e.lineCount ? this.lineCount - e.lineCount : this.columnCount - e.columnCount;
    }
    add(e) {
        return e.lineCount === 0 ? new Z7e(this.lineCount, this.columnCount + e.columnCount) : new Z7e(this.lineCount + e.lineCount, e.columnCount);
    }
    createRange(e) {
        return this.lineCount === 0 ? new qt(e.lineNumber, e.column, e.lineNumber, e.column + this.columnCount) : new qt(e.lineNumber, e.column, e.lineNumber + this.lineCount, this.columnCount + 1);
    }
    toRange() {
        return new qt(1, 1, this.lineCount + 1, this.columnCount + 1);
    }
    toLineRange() {
        return wd.ofLength(1, this.lineCount + 1);
    }
    addToPosition(e) {
        return this.lineCount === 0 ? new er(e.lineNumber, e.column + this.columnCount) : new er(e.lineNumber + this.lineCount, this.columnCount + 1);
    }
    addToRange(e) {
        return qt.fromPositions(this.addToPosition(e.getStartPosition()), this.addToPosition(e.getEndPosition()));
    }
    toString() {
        return `${this.lineCount},${this.columnCount}`;
    }
}, o0r.zero = new o0r(0, 0), N5 = o0r;

}
