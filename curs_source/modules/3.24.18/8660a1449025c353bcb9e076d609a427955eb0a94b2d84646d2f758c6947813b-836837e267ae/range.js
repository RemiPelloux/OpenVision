import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
var qt;
export { qt };
var __wakaru_Qs_initialized = false;
export function Qs() {
if (__wakaru_Qs_initialized) return;
__wakaru_Qs_initialized = true;
"use strict";
E(), jc(), qt = class y9 {
    constructor(e, n, i, r){
        let s, o, a, l;
        e == null || typeof e == "number" || Number.isNaN(e) ? (s = e, o = n, a = i, l = r) : "startLineNumber" in e && "startColumn" in e ? (s = e.startLineNumber, o = e.startColumn, a = e.endLineNumber, l = e.endColumn) : (s = e.startLineNumber, o = 1, a = e.endLineNumberExclusive, l = 1), s > a || s === a && o > l ? (this.startLineNumber = a, this.startColumn = l, this.endLineNumber = s, this.endColumn = o) : (this.startLineNumber = s, this.startColumn = o, this.endLineNumber = a, this.endColumn = l);
    }
    asIRange() {
        return {
            startLineNumber: this.startLineNumber,
            startColumn: this.startColumn,
            endLineNumber: this.endLineNumber,
            endColumn: this.endColumn
        };
    }
    isEmpty() {
        return y9.isEmpty(this);
    }
    static isEmpty(e) {
        return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
    }
    containsPosition(e) {
        return y9.containsPosition(this, e);
    }
    static containsPosition(e, n) {
        return !(n.lineNumber < e.startLineNumber || n.lineNumber > e.endLineNumber || n.lineNumber === e.startLineNumber && n.column < e.startColumn || n.lineNumber === e.endLineNumber && n.column > e.endColumn);
    }
    static strictContainsPosition(e, n) {
        return !(n.lineNumber < e.startLineNumber || n.lineNumber > e.endLineNumber || n.lineNumber === e.startLineNumber && n.column <= e.startColumn || n.lineNumber === e.endLineNumber && n.column >= e.endColumn);
    }
    containsRange(e) {
        return y9.containsRange(this, e);
    }
    static containsRange(e, n) {
        return !(n.startLineNumber < e.startLineNumber || n.endLineNumber < e.startLineNumber || n.startLineNumber > e.endLineNumber || n.endLineNumber > e.endLineNumber || n.startLineNumber === e.startLineNumber && n.startColumn < e.startColumn || n.endLineNumber === e.endLineNumber && n.endColumn > e.endColumn);
    }
    strictContainsRange(e) {
        return y9.strictContainsRange(this, e);
    }
    static strictContainsRange(e, n) {
        return !(n.startLineNumber < e.startLineNumber || n.endLineNumber < e.startLineNumber || n.startLineNumber > e.endLineNumber || n.endLineNumber > e.endLineNumber || n.startLineNumber === e.startLineNumber && n.startColumn <= e.startColumn || n.endLineNumber === e.endLineNumber && n.endColumn >= e.endColumn);
    }
    plusRange(e) {
        return y9.plusRange(this, e);
    }
    static getRangeAbove(e, n) {
        const i = Math.max(e.startLineNumber - n, 1), r = e.startLineNumber;
        return new y9(i, e.startColumn, r, e.startColumn);
    }
    static getRangeOnBelow(e, n, i) {
        const r = e.endLineNumber, s = Math.min(e.endLineNumber + n, i);
        return new y9(r, e.endColumn, s, e.endColumn);
    }
    static getExtendedRange(e, n, i) {
        const r = Math.max(e.startLineNumber - n, 0), s = Math.min(e.endLineNumber + n, i);
        return new y9(r, e.startColumn, s, e.endColumn);
    }
    static plusRange(e, n) {
        let i, r, s, o;
        return n.startLineNumber < e.startLineNumber ? (i = n.startLineNumber, r = n.startColumn) : n.startLineNumber === e.startLineNumber ? (i = n.startLineNumber, r = Math.min(n.startColumn, e.startColumn)) : (i = e.startLineNumber, r = e.startColumn), n.endLineNumber > e.endLineNumber ? (s = n.endLineNumber, o = n.endColumn) : n.endLineNumber === e.endLineNumber ? (s = n.endLineNumber, o = Math.max(n.endColumn, e.endColumn)) : (s = e.endLineNumber, o = e.endColumn), new y9(i, r, s, o);
    }
    intersectRanges(e) {
        return y9.intersectRanges(this, e);
    }
    static intersectRanges(e, n) {
        let i = e.startLineNumber, r = e.startColumn, s = e.endLineNumber, o = e.endColumn;
        const a = n.startLineNumber, l = n.startColumn, c = n.endLineNumber, u = n.endColumn;
        return i < a ? (i = a, r = l) : i === a && (r = Math.max(r, l)), s > c ? (s = c, o = u) : s === c && (o = Math.min(o, u)), i > s || i === s && r > o ? null : new y9(i, r, s, o);
    }
    static inverseEditRange(e, n) {
        return {
            startLineNumber: e.startLineNumber,
            startColumn: e.startColumn,
            endLineNumber: e.startLineNumber + n.split(`
`).length - 1,
            endColumn: n.lastIndexOf(`
`) === -1 ? e.startColumn + n.length : n.length - n.lastIndexOf(`
`)
        };
    }
    whereIs(e) {
        return e.endLineNumber < this.startLineNumber || e.endLineNumber === this.startLineNumber && e.endColumn <= this.startColumn ? "before" : e.startLineNumber > this.endLineNumber || e.startLineNumber === this.endLineNumber && e.startColumn >= this.endColumn ? "after" : "overlapping";
    }
    static rangeAfterEdit(e, n) {
        const i = y9.lift(e).whereIs(n.range);
        switch(i){
            case "overlapping":
                throw new Error("Range is overlapping. The range after edit is ambiguous.");
            case "after":
                return e;
            case "before":
                {
                    const r = n.text.split(`
`).length - 1 - (n.range.endLineNumber - n.range.startLineNumber);
                    if (n.range.endLineNumber < e.startLineNumber) return {
                        startLineNumber: e.startLineNumber + r,
                        startColumn: e.startColumn,
                        endLineNumber: e.endLineNumber + r,
                        endColumn: e.endColumn
                    };
                    {
                        const s = n.text.lastIndexOf(`
`) === -1 ? n.text.length : n.text.length - n.text.lastIndexOf(`
`) - 1, o = n.range.startLineNumber === n.range.endLineNumber ? n.range.endColumn - n.range.startColumn : n.range.endColumn - 1, a = s - o;
                        return {
                            startLineNumber: e.startLineNumber + r,
                            startColumn: e.startColumn + a,
                            endLineNumber: e.endLineNumber + r,
                            endColumn: e.startLineNumber === e.endLineNumber ? e.endColumn + a : e.endColumn
                        };
                    }
                }
            default:
                {
                    const r = i;
                    return e;
                }
        }
    }
    equalsRange(e) {
        return y9.equalsRange(this, e);
    }
    static equalsRange(e, n) {
        return !e && !n ? !0 : !!e && !!n && e.startLineNumber === n.startLineNumber && e.startColumn === n.startColumn && e.endLineNumber === n.endLineNumber && e.endColumn === n.endColumn;
    }
    getEndPosition() {
        return y9.getEndPosition(this);
    }
    static getEndPosition(e) {
        return new er(e.endLineNumber, e.endColumn);
    }
    getStartPosition() {
        return y9.getStartPosition(this);
    }
    static getStartPosition(e) {
        return new er(e.startLineNumber, e.startColumn);
    }
    toString() {
        return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
    }
    setEndPosition(e, n) {
        return new y9(this.startLineNumber, this.startColumn, e, n);
    }
    setStartPosition(e, n) {
        return new y9(e, n, this.endLineNumber, this.endColumn);
    }
    collapseToStart() {
        return y9.collapseToStart(this);
    }
    static collapseToStart(e) {
        return new y9(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn);
    }
    collapseToEnd() {
        return y9.collapseToEnd(this);
    }
    static collapseToEnd(e) {
        return new y9(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn);
    }
    delta(e) {
        return new y9(this.startLineNumber + e, this.startColumn, this.endLineNumber + e, this.endColumn);
    }
    isSingleLine() {
        return this.startLineNumber === this.endLineNumber;
    }
    static fromPositions(e, n = e) {
        return new y9(e.lineNumber, e.column, n.lineNumber, n.column);
    }
    static lift(e) {
        return e ? new y9(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : null;
    }
    static isIRange(e) {
        return e && typeof e.startLineNumber == "number" && typeof e.startColumn == "number" && typeof e.endLineNumber == "number" && typeof e.endColumn == "number";
    }
    static areIntersectingOrTouching(e, n) {
        return !(e.endLineNumber < n.startLineNumber || e.endLineNumber === n.startLineNumber && e.endColumn < n.startColumn || n.endLineNumber < e.startLineNumber || n.endLineNumber === e.startLineNumber && n.endColumn < e.startColumn);
    }
    static areIntersecting(e, n) {
        return !(e.endLineNumber < n.startLineNumber || e.endLineNumber === n.startLineNumber && e.endColumn <= n.startColumn || n.endLineNumber < e.startLineNumber || n.endLineNumber === e.startLineNumber && n.endColumn <= e.startColumn);
    }
    static areOnlyIntersecting(e, n) {
        return !(e.endLineNumber < n.startLineNumber - 1 || e.endLineNumber === n.startLineNumber && e.endColumn < n.startColumn - 1 || n.endLineNumber < e.startLineNumber - 1 || n.endLineNumber === e.startLineNumber && n.endColumn < e.startColumn - 1);
    }
    static compareRangesUsingStarts(e, n) {
        if (e && n) {
            const s = e.startLineNumber | 0, o = n.startLineNumber | 0;
            if (s === o) {
                const a = e.startColumn | 0, l = n.startColumn | 0;
                if (a === l) {
                    const c = e.endLineNumber | 0, u = n.endLineNumber | 0;
                    if (c === u) {
                        const d = e.endColumn | 0, h = n.endColumn | 0;
                        return d - h;
                    }
                    return c - u;
                }
                return a - l;
            }
            return s - o;
        }
        return (e ? 1 : 0) - (n ? 1 : 0);
    }
    static compareRangesUsingEnds(e, n) {
        return e.endLineNumber === n.endLineNumber ? e.endColumn === n.endColumn ? e.startLineNumber === n.startLineNumber ? e.startColumn - n.startColumn : e.startLineNumber - n.startLineNumber : e.endColumn - n.endColumn : e.endLineNumber - n.endLineNumber;
    }
    static spansMultipleLines(e) {
        return e.endLineNumber > e.startLineNumber;
    }
    toJSON() {
        return this;
    }
};

}
