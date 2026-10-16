Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Range = void 0;
const i = require("./module-584.js");
class r {
    constructor(e, t, n, i){
        let r, s, o, a;
        null == e || "number" == typeof e || Number.isNaN(e) ? (r = e, s = t, o = n, a = i) : "startLineNumber" in e && "startColumn" in e ? (r = e.startLineNumber, s = e.startColumn, o = e.endLineNumber, a = e.endColumn) : (r = e.startLineNumber, s = 1, o = e.endLineNumberExclusive, a = 1), r > o || r === o && s > a ? (this.startLineNumber = o, this.startColumn = a, this.endLineNumber = r, this.endColumn = s) : (this.startLineNumber = r, this.startColumn = s, this.endLineNumber = o, this.endColumn = a);
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
        return r.isEmpty(this);
    }
    static isEmpty(e) {
        return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
    }
    containsPosition(e) {
        return r.containsPosition(this, e);
    }
    static containsPosition(e, t) {
        return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && !(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn);
    }
    static strictContainsPosition(e, t) {
        return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && !(t.lineNumber === e.startLineNumber && t.column <= e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column >= e.endColumn);
    }
    containsRange(e) {
        return r.containsRange(this, e);
    }
    static containsRange(e, t) {
        return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && !(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn);
    }
    strictContainsRange(e) {
        return r.strictContainsRange(this, e);
    }
    static strictContainsRange(e, t) {
        return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && !(t.startLineNumber === e.startLineNumber && t.startColumn <= e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn >= e.endColumn);
    }
    plusRange(e) {
        return r.plusRange(this, e);
    }
    static getRangeAbove(e, t) {
        const n = Math.max(e.startLineNumber - t, 1), i = e.startLineNumber;
        return new r(n, e.startColumn, i, e.startColumn);
    }
    static getRangeOnBelow(e, t, n) {
        const i = e.endLineNumber, s = Math.min(e.endLineNumber + t, n);
        return new r(i, e.endColumn, s, e.endColumn);
    }
    static getExtendedRange(e, t, n) {
        const i = Math.max(e.startLineNumber - t, 0), s = Math.min(e.endLineNumber + t, n);
        return new r(i, e.startColumn, s, e.endColumn);
    }
    static plusRange(e, t) {
        let n, i, s, o;
        return t.startLineNumber < e.startLineNumber ? (n = t.startLineNumber, i = t.startColumn) : t.startLineNumber === e.startLineNumber ? (n = t.startLineNumber, i = Math.min(t.startColumn, e.startColumn)) : (n = e.startLineNumber, i = e.startColumn), t.endLineNumber > e.endLineNumber ? (s = t.endLineNumber, o = t.endColumn) : t.endLineNumber === e.endLineNumber ? (s = t.endLineNumber, o = Math.max(t.endColumn, e.endColumn)) : (s = e.endLineNumber, o = e.endColumn), new r(n, i, s, o);
    }
    intersectRanges(e) {
        return r.intersectRanges(this, e);
    }
    static intersectRanges(e, t) {
        let n = e.startLineNumber, i = e.startColumn, s = e.endLineNumber, o = e.endColumn;
        const a = t.startLineNumber, u = t.startColumn, l = t.endLineNumber, h = t.endColumn;
        return n < a ? (n = a, i = u) : n === a && (i = Math.max(i, u)), s > l ? (s = l, o = h) : s === l && (o = Math.min(o, h)), n > s || n === s && i > o ? null : new r(n, i, s, o);
    }
    static inverseEditRange(e, t) {
        return {
            startLineNumber: e.startLineNumber,
            startColumn: e.startColumn,
            endLineNumber: e.startLineNumber + t.split("\n").length - 1,
            endColumn: -1 === t.lastIndexOf("\n") ? e.startColumn + t.length : t.length - t.lastIndexOf("\n")
        };
    }
    whereIs(e) {
        return e.endLineNumber < this.startLineNumber || e.endLineNumber === this.startLineNumber && e.endColumn <= this.startColumn ? "before" : e.startLineNumber > this.endLineNumber || e.startLineNumber === this.endLineNumber && e.startColumn >= this.endColumn ? "after" : "overlapping";
    }
    static rangeAfterEdit(e, t) {
        const n = r.lift(e).whereIs(t.range);
        switch(n){
            case "overlapping":
                throw new Error("Range is overlapping. The range after edit is ambiguous.");
            case "after":
                return e;
            case "before":
                {
                    const n = t.text.split("\n").length - 1 - (t.range.endLineNumber - t.range.startLineNumber);
                    if (t.range.endLineNumber < e.startLineNumber) return {
                        startLineNumber: e.startLineNumber + n,
                        startColumn: e.startColumn,
                        endLineNumber: e.endLineNumber + n,
                        endColumn: e.endColumn
                    };
                    {
                        const i = (-1 === t.text.lastIndexOf("\n") ? t.text.length : t.text.length - t.text.lastIndexOf("\n") - 1) - (t.range.startLineNumber === t.range.endLineNumber ? t.range.endColumn - t.range.startColumn : t.range.endColumn - 1);
                        return {
                            startLineNumber: e.startLineNumber + n,
                            startColumn: e.startColumn + i,
                            endLineNumber: e.endLineNumber + n,
                            endColumn: e.startLineNumber === e.endLineNumber ? e.endColumn + i : e.endColumn
                        };
                    }
                }
            default:
                return e;
        }
    }
    equalsRange(e) {
        return r.equalsRange(this, e);
    }
    static equalsRange(e, t) {
        return !e && !t || !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn;
    }
    getEndPosition() {
        return r.getEndPosition(this);
    }
    static getEndPosition(e) {
        return new i.Position(e.endLineNumber, e.endColumn);
    }
    getStartPosition() {
        return r.getStartPosition(this);
    }
    static getStartPosition(e) {
        return new i.Position(e.startLineNumber, e.startColumn);
    }
    toString() {
        return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
    }
    setEndPosition(e, t) {
        return new r(this.startLineNumber, this.startColumn, e, t);
    }
    setStartPosition(e, t) {
        return new r(e, t, this.endLineNumber, this.endColumn);
    }
    collapseToStart() {
        return r.collapseToStart(this);
    }
    static collapseToStart(e) {
        return new r(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn);
    }
    collapseToEnd() {
        return r.collapseToEnd(this);
    }
    static collapseToEnd(e) {
        return new r(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn);
    }
    delta(e) {
        return new r(this.startLineNumber + e, this.startColumn, this.endLineNumber + e, this.endColumn);
    }
    isSingleLine() {
        return this.startLineNumber === this.endLineNumber;
    }
    static fromPositions(e, t = e) {
        return new r(e.lineNumber, e.column, t.lineNumber, t.column);
    }
    static lift(e) {
        return e ? new r(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : null;
    }
    static isIRange(e) {
        return e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn;
    }
    static areIntersectingOrTouching(e, t) {
        return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn);
    }
    static areIntersecting(e, t) {
        return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn);
    }
    static areOnlyIntersecting(e, t) {
        return !(e.endLineNumber < t.startLineNumber - 1 || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn - 1) && !(t.endLineNumber < e.startLineNumber - 1 || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn - 1);
    }
    static compareRangesUsingStarts(e, t) {
        if (e && t) {
            const n = 0 | e.startLineNumber, i = 0 | t.startLineNumber;
            if (n === i) {
                const n = 0 | e.startColumn, i = 0 | t.startColumn;
                if (n === i) {
                    const n = 0 | e.endLineNumber, i = 0 | t.endLineNumber;
                    if (n === i) {
                        return (0 | e.endColumn) - (0 | t.endColumn);
                    }
                    return n - i;
                }
                return n - i;
            }
            return n - i;
        }
        return (e ? 1 : 0) - (t ? 1 : 0);
    }
    static compareRangesUsingEnds(e, t) {
        return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber;
    }
    static spansMultipleLines(e) {
        return e.endLineNumber > e.startLineNumber;
    }
    toJSON() {
        return this;
    }
}
exports.Range = r;
