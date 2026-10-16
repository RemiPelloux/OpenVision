import { Yn, ya } from "./position.js";
import { x } from "./tslib.es6.js";
var dt;
export { dt };
var __wakaru_qi_initialized = false;
export function qi() {
if (__wakaru_qi_initialized) return;
__wakaru_qi_initialized = true;
"use strict";
x(), ya(), dt = class Z2 {
    constructor(t, n, i, r){
        let s, o, a, c;
        t == null || typeof t == "number" || Number.isNaN(t) ? (s = t, o = n, a = i, c = r) : "startLineNumber" in t && "startColumn" in t ? (s = t.startLineNumber, o = t.startColumn, a = t.endLineNumber, c = t.endColumn) : (s = t.startLineNumber, o = 1, a = t.endLineNumberExclusive, c = 1), s > a || s === a && o > c ? (this.startLineNumber = a, this.startColumn = c, this.endLineNumber = s, this.endColumn = o) : (this.startLineNumber = s, this.startColumn = o, this.endLineNumber = a, this.endColumn = c);
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
        return Z2.isEmpty(this);
    }
    static isEmpty(t) {
        return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
    }
    containsPosition(t) {
        return Z2.containsPosition(this, t);
    }
    static containsPosition(t, n) {
        return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
    }
    static strictContainsPosition(t, n) {
        return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
    }
    containsRange(t) {
        return Z2.containsRange(this, t);
    }
    static containsRange(t, n) {
        return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
    }
    strictContainsRange(t) {
        return Z2.strictContainsRange(this, t);
    }
    static strictContainsRange(t, n) {
        return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
    }
    plusRange(t) {
        return Z2.plusRange(this, t);
    }
    static getRangeAbove(t, n) {
        const i = Math.max(t.startLineNumber - n, 1), r = t.startLineNumber;
        return new Z2(i, t.startColumn, r, t.startColumn);
    }
    static getRangeOnBelow(t, n, i) {
        const r = t.endLineNumber, s = Math.min(t.endLineNumber + n, i);
        return new Z2(r, t.endColumn, s, t.endColumn);
    }
    static getExtendedRange(t, n, i) {
        const r = Math.max(t.startLineNumber - n, 0), s = Math.min(t.endLineNumber + n, i);
        return new Z2(r, t.startColumn, s, t.endColumn);
    }
    static plusRange(t, n) {
        let i, r, s, o;
        return n.startLineNumber < t.startLineNumber ? (i = n.startLineNumber, r = n.startColumn) : n.startLineNumber === t.startLineNumber ? (i = n.startLineNumber, r = Math.min(n.startColumn, t.startColumn)) : (i = t.startLineNumber, r = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, o = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, o = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, o = t.endColumn), new Z2(i, r, s, o);
    }
    intersectRanges(t) {
        return Z2.intersectRanges(this, t);
    }
    static intersectRanges(t, n) {
        let i = t.startLineNumber, r = t.startColumn, s = t.endLineNumber, o = t.endColumn;
        const a = n.startLineNumber, c = n.startColumn, l = n.endLineNumber, u = n.endColumn;
        return i < a ? (i = a, r = c) : i === a && (r = Math.max(r, c)), s > l ? (s = l, o = u) : s === l && (o = Math.min(o, u)), i > s || i === s && r > o ? null : new Z2(i, r, s, o);
    }
    static inverseEditRange(t, n) {
        return {
            startLineNumber: t.startLineNumber,
            startColumn: t.startColumn,
            endLineNumber: t.startLineNumber + n.split(`
`).length - 1,
            endColumn: n.lastIndexOf(`
`) === -1 ? t.startColumn + n.length : n.length - n.lastIndexOf(`
`)
        };
    }
    whereIs(t) {
        return t.endLineNumber < this.startLineNumber || t.endLineNumber === this.startLineNumber && t.endColumn <= this.startColumn ? "before" : t.startLineNumber > this.endLineNumber || t.startLineNumber === this.endLineNumber && t.startColumn >= this.endColumn ? "after" : "overlapping";
    }
    static rangeAfterEdit(t, n) {
        const i = Z2.lift(t).whereIs(n.range);
        switch(i){
            case "overlapping":
                throw new Error("Range is overlapping. The range after edit is ambiguous.");
            case "after":
                return t;
            case "before":
                {
                    const r = n.text.split(`
`).length - 1 - (n.range.endLineNumber - n.range.startLineNumber);
                    if (n.range.endLineNumber < t.startLineNumber) return {
                        startLineNumber: t.startLineNumber + r,
                        startColumn: t.startColumn,
                        endLineNumber: t.endLineNumber + r,
                        endColumn: t.endColumn
                    };
                    {
                        const s = n.text.lastIndexOf(`
`) === -1 ? n.text.length : n.text.length - n.text.lastIndexOf(`
`) - 1, o = n.range.startLineNumber === n.range.endLineNumber ? n.range.endColumn - n.range.startColumn : n.range.endColumn - 1, a = s - o;
                        return {
                            startLineNumber: t.startLineNumber + r,
                            startColumn: t.startColumn + a,
                            endLineNumber: t.endLineNumber + r,
                            endColumn: t.startLineNumber === t.endLineNumber ? t.endColumn + a : t.endColumn
                        };
                    }
                }
            default:
                {
                    const r = i;
                    return t;
                }
        }
    }
    equalsRange(t) {
        return Z2.equalsRange(this, t);
    }
    static equalsRange(t, n) {
        return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
    }
    getEndPosition() {
        return Z2.getEndPosition(this);
    }
    static getEndPosition(t) {
        return new Yn(t.endLineNumber, t.endColumn);
    }
    getStartPosition() {
        return Z2.getStartPosition(this);
    }
    static getStartPosition(t) {
        return new Yn(t.startLineNumber, t.startColumn);
    }
    toString() {
        return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
    }
    setEndPosition(t, n) {
        return new Z2(this.startLineNumber, this.startColumn, t, n);
    }
    setStartPosition(t, n) {
        return new Z2(t, n, this.endLineNumber, this.endColumn);
    }
    collapseToStart() {
        return Z2.collapseToStart(this);
    }
    static collapseToStart(t) {
        return new Z2(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
    }
    collapseToEnd() {
        return Z2.collapseToEnd(this);
    }
    static collapseToEnd(t) {
        return new Z2(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
    }
    delta(t) {
        return new Z2(this.startLineNumber + t, this.startColumn, this.endLineNumber + t, this.endColumn);
    }
    isSingleLine() {
        return this.startLineNumber === this.endLineNumber;
    }
    static fromPositions(t, n = t) {
        return new Z2(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    static lift(t) {
        return t ? new Z2(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
    }
    static isIRange(t) {
        return t && typeof t.startLineNumber == "number" && typeof t.startColumn == "number" && typeof t.endLineNumber == "number" && typeof t.endColumn == "number";
    }
    static areIntersectingOrTouching(t, n) {
        return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn);
    }
    static areIntersecting(t, n) {
        return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn);
    }
    static areOnlyIntersecting(t, n) {
        return !(t.endLineNumber < n.startLineNumber - 1 || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn - 1 || n.endLineNumber < t.startLineNumber - 1 || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn - 1);
    }
    static compareRangesUsingStarts(t, n) {
        if (t && n) {
            const s = t.startLineNumber | 0, o = n.startLineNumber | 0;
            if (s === o) {
                const a = t.startColumn | 0, c = n.startColumn | 0;
                if (a === c) {
                    const l = t.endLineNumber | 0, u = n.endLineNumber | 0;
                    if (l === u) {
                        const h = t.endColumn | 0, p = n.endColumn | 0;
                        return h - p;
                    }
                    return l - u;
                }
                return a - c;
            }
            return s - o;
        }
        return (t ? 1 : 0) - (n ? 1 : 0);
    }
    static compareRangesUsingEnds(t, n) {
        return t.endLineNumber === n.endLineNumber ? t.endColumn === n.endColumn ? t.startLineNumber === n.startLineNumber ? t.startColumn - n.startColumn : t.startLineNumber - n.startLineNumber : t.endColumn - n.endColumn : t.endLineNumber - n.endLineNumber;
    }
    static spansMultipleLines(t) {
        return t.endLineNumber > t.startLineNumber;
    }
    toJSON() {
        return this;
    }
};

}
