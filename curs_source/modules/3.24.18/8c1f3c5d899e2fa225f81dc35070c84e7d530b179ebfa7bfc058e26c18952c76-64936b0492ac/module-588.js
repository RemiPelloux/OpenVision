Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TextLength = void 0;
const i = require("./module-496.js"), r = require("./module-584.js"), s = require("./module-298.js");
class o {
    static{
        this.zero = new o(0, 0);
    }
    static lengthDiffNonNegative(e, t) {
        return t.isLessThan(e) ? o.zero : e.lineCount === t.lineCount ? new o(0, t.columnCount - e.columnCount) : new o(t.lineCount - e.lineCount, t.columnCount);
    }
    static betweenPositions(e, t) {
        return e.lineNumber === t.lineNumber ? new o(0, t.column - e.column) : new o(t.lineNumber - e.lineNumber, t.column - 1);
    }
    static fromPosition(e) {
        return new o(e.lineNumber - 1, e.column - 1);
    }
    static ofRange(e) {
        return o.betweenPositions(e.getStartPosition(), e.getEndPosition());
    }
    static ofText(e) {
        let t = 0, n = 0;
        for (const i of e)"\n" === i ? (t++, n = 0) : n++;
        return new o(t, n);
    }
    constructor(e, t){
        this.lineCount = e, this.columnCount = t;
    }
    isZero() {
        return 0 === this.lineCount && 0 === this.columnCount;
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
        return 0 === e.lineCount ? new o(this.lineCount, this.columnCount + e.columnCount) : new o(this.lineCount + e.lineCount, e.columnCount);
    }
    createRange(e) {
        return 0 === this.lineCount ? new s.Range(e.lineNumber, e.column, e.lineNumber, e.column + this.columnCount) : new s.Range(e.lineNumber, e.column, e.lineNumber + this.lineCount, this.columnCount + 1);
    }
    toRange() {
        return new s.Range(1, 1, this.lineCount + 1, this.columnCount + 1);
    }
    toLineRange() {
        return i.LineRange.ofLength(1, this.lineCount + 1);
    }
    addToPosition(e) {
        return 0 === this.lineCount ? new r.Position(e.lineNumber, e.column + this.columnCount) : new r.Position(e.lineNumber + this.lineCount, this.columnCount + 1);
    }
    addToRange(e) {
        return s.Range.fromPositions(this.addToPosition(e.getStartPosition()), this.addToPosition(e.getEndPosition()));
    }
    toString() {
        return `${this.lineCount},${this.columnCount}`;
    }
}
exports.TextLength = o;
