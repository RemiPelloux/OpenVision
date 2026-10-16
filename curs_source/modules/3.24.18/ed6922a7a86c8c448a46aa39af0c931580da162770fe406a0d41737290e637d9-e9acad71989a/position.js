import { x } from "./tslib.es6.js";
var Yn;
export { Yn };
var __wakaru_ya_initialized = false;
export function ya() {
if (__wakaru_ya_initialized) return;
__wakaru_ya_initialized = true;
"use strict";
x(), Yn = class IAt {
    constructor(t, n){
        this.lineNumber = t, this.column = n;
    }
    with(t = this.lineNumber, n = this.column) {
        return t === this.lineNumber && n === this.column ? this : new IAt(t, n);
    }
    delta(t = 0, n = 0) {
        return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
    }
    equals(t) {
        return IAt.equals(this, t);
    }
    static equals(t, n) {
        return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
    }
    isBefore(t) {
        return IAt.isBefore(this, t);
    }
    static isBefore(t, n) {
        return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
    }
    isBeforeOrEqual(t) {
        return IAt.isBeforeOrEqual(this, t);
    }
    static isBeforeOrEqual(t, n) {
        return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column;
    }
    static compare(t, n) {
        const i = t.lineNumber | 0, r = n.lineNumber | 0;
        if (i === r) {
            const s = t.column | 0, o = n.column | 0;
            return s - o;
        }
        return i - r;
    }
    clone() {
        return new IAt(this.lineNumber, this.column);
    }
    toString() {
        return "(" + this.lineNumber + "," + this.column + ")";
    }
    static lift(t) {
        return new IAt(t.lineNumber, t.column);
    }
    static isIPosition(t) {
        return t && typeof t.lineNumber == "number" && typeof t.column == "number";
    }
    toJSON() {
        return {
            lineNumber: this.lineNumber,
            column: this.column
        };
    }
};

}
