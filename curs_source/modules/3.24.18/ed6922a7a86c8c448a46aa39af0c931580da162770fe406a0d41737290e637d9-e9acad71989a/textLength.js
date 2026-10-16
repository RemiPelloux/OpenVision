import { Vl, hA } from "./lineRange.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var kvi, FP;
export { FP, kvi };
var __wakaru_$ge_initialized = false;
export function $ge() {
if (__wakaru_$ge_initialized) return;
__wakaru_$ge_initialized = true;
"use strict";
x(), hA(), ya(), qi(), kvi = class lxe {
    constructor(t, n){
        this.lineCount = t, this.columnCount = n;
    }
    static lengthDiffNonNegative(t, n) {
        return n.isLessThan(t) ? lxe.zero : t.lineCount === n.lineCount ? new lxe(0, n.columnCount - t.columnCount) : new lxe(n.lineCount - t.lineCount, n.columnCount);
    }
    static betweenPositions(t, n) {
        return t.lineNumber === n.lineNumber ? new lxe(0, n.column - t.column) : new lxe(n.lineNumber - t.lineNumber, n.column - 1);
    }
    static fromPosition(t) {
        return new lxe(t.lineNumber - 1, t.column - 1);
    }
    static ofRange(t) {
        return lxe.betweenPositions(t.getStartPosition(), t.getEndPosition());
    }
    static ofText(t) {
        let n = 0, i = 0;
        for (const r of t)r === `
` ? (n++, i = 0) : i++;
        return new lxe(n, i);
    }
    isZero() {
        return this.lineCount === 0 && this.columnCount === 0;
    }
    isLessThan(t) {
        return this.lineCount !== t.lineCount ? this.lineCount < t.lineCount : this.columnCount < t.columnCount;
    }
    isGreaterThan(t) {
        return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount > t.columnCount;
    }
    isGreaterThanOrEqualTo(t) {
        return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount >= t.columnCount;
    }
    equals(t) {
        return this.lineCount === t.lineCount && this.columnCount === t.columnCount;
    }
    compare(t) {
        return this.lineCount !== t.lineCount ? this.lineCount - t.lineCount : this.columnCount - t.columnCount;
    }
    add(t) {
        return t.lineCount === 0 ? new lxe(this.lineCount, this.columnCount + t.columnCount) : new lxe(this.lineCount + t.lineCount, t.columnCount);
    }
    createRange(t) {
        return this.lineCount === 0 ? new dt(t.lineNumber, t.column, t.lineNumber, t.column + this.columnCount) : new dt(t.lineNumber, t.column, t.lineNumber + this.lineCount, this.columnCount + 1);
    }
    toRange() {
        return new dt(1, 1, this.lineCount + 1, this.columnCount + 1);
    }
    toLineRange() {
        return Vl.ofLength(1, this.lineCount + 1);
    }
    addToPosition(t) {
        return this.lineCount === 0 ? new Yn(t.lineNumber, t.column + this.columnCount) : new Yn(t.lineNumber + this.lineCount, this.columnCount + 1);
    }
    addToRange(t) {
        return dt.fromPositions(this.addToPosition(t.getStartPosition()), this.addToPosition(t.getEndPosition()));
    }
    toString() {
        return `${this.lineCount},${this.columnCount}`;
    }
}, kvi.zero = new kvi(0, 0), FP = kvi;

}
