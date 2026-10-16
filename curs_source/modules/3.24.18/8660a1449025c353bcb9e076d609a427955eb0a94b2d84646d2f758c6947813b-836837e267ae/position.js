import { E } from "./tslib.es6.js";
var er;
export { er };
var __wakaru_jc_initialized = false;
export function jc() {
if (__wakaru_jc_initialized) return;
__wakaru_jc_initialized = true;
"use strict";
E(), er = class Nsn {
    constructor(e, n){
        this.lineNumber = e, this.column = n;
    }
    with(e = this.lineNumber, n = this.column) {
        return e === this.lineNumber && n === this.column ? this : new Nsn(e, n);
    }
    delta(e = 0, n = 0) {
        return this.with(Math.max(1, this.lineNumber + e), Math.max(1, this.column + n));
    }
    equals(e) {
        return Nsn.equals(this, e);
    }
    static equals(e, n) {
        return !e && !n ? !0 : !!e && !!n && e.lineNumber === n.lineNumber && e.column === n.column;
    }
    isBefore(e) {
        return Nsn.isBefore(this, e);
    }
    static isBefore(e, n) {
        return e.lineNumber < n.lineNumber ? !0 : n.lineNumber < e.lineNumber ? !1 : e.column < n.column;
    }
    isBeforeOrEqual(e) {
        return Nsn.isBeforeOrEqual(this, e);
    }
    static isBeforeOrEqual(e, n) {
        return e.lineNumber < n.lineNumber ? !0 : n.lineNumber < e.lineNumber ? !1 : e.column <= n.column;
    }
    static compare(e, n) {
        const i = e.lineNumber | 0, r = n.lineNumber | 0;
        if (i === r) {
            const s = e.column | 0, o = n.column | 0;
            return s - o;
        }
        return i - r;
    }
    clone() {
        return new Nsn(this.lineNumber, this.column);
    }
    toString() {
        return "(" + this.lineNumber + "," + this.column + ")";
    }
    static lift(e) {
        return new Nsn(e.lineNumber, e.column);
    }
    static isIPosition(e) {
        return e && typeof e.lineNumber == "number" && typeof e.column == "number";
    }
    toJSON() {
        return {
            lineNumber: this.lineNumber,
            column: this.column
        };
    }
};

}
