Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RangeMapping = exports.DetailedLineRangeMapping = exports.LineRangeMapping = void 0, exports.lineRangeMappingFromRangeMappings = function(e, t, n, s = !1) {
    const o = [];
    for (const r of (0, i.groupAdjacentBy)(e.map((e)=>m(e, t, n)), (e, t)=>e.original.overlapOrTouch(t.original) || e.modified.overlapOrTouch(t.modified))){
        const e = r[0], t = r[r.length - 1];
        o.push(new d(e.original.join(t.original), e.modified.join(t.modified), r.map((e)=>e.innerChanges[0])));
    }
    return (0, r.assertFn)(()=>{
        if (!s && o.length > 0) {
            if (o[0].modified.startLineNumber !== o[0].original.startLineNumber) return !1;
            if (n.length.lineCount - o[o.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - o[o.length - 1].original.endLineNumberExclusive) return !1;
        }
        return (0, r.checkAdjacentItems)(o, (e, t)=>t.original.startLineNumber - e.original.endLineNumberExclusive === t.modified.startLineNumber - e.modified.endLineNumberExclusive && e.original.endLineNumberExclusive < t.original.startLineNumber && e.modified.endLineNumberExclusive < t.modified.startLineNumber);
    }), o;
}, exports.getLineRangeMapping = m;
const i = require("./module-501.js"), r = require("./module-141.js"), s = require("./module-976.js"), o = require("./module-496.js"), a = require("./module-584.js"), u = require("./module-298.js"), l = require("./module-768.js");
class h {
    static inverse(e, t, n) {
        const i = [];
        let r = 1, s = 1;
        for (const t of e){
            const e = new h(new o.LineRange(r, t.original.startLineNumber), new o.LineRange(s, t.modified.startLineNumber));
            e.modified.isEmpty || i.push(e), r = t.original.endLineNumberExclusive, s = t.modified.endLineNumberExclusive;
        }
        const a = new h(new o.LineRange(r, t + 1), new o.LineRange(s, n + 1));
        return a.modified.isEmpty || i.push(a), i;
    }
    static clip(e, t, n) {
        const i = [];
        for (const r of e){
            const e = r.original.intersect(t), s = r.modified.intersect(n);
            e && !e.isEmpty && s && !s.isEmpty && i.push(new h(e, s));
        }
        return i;
    }
    constructor(e, t){
        this.original = e, this.modified = t;
    }
    toString() {
        return `{${this.original.toString()}->${this.modified.toString()}}`;
    }
    flip() {
        return new h(this.modified, this.original);
    }
    join(e) {
        return new h(this.original.join(e.original), this.modified.join(e.modified));
    }
    get changedLineCount() {
        return Math.max(this.original.length, this.modified.length);
    }
    toRangeMapping() {
        const e = this.original.toInclusiveRange(), t = this.modified.toInclusiveRange();
        if (e && t) return new g(e, t);
        if (1 === this.original.startLineNumber || 1 === this.modified.startLineNumber) {
            if (1 !== this.modified.startLineNumber || 1 !== this.original.startLineNumber) throw new s.BugIndicatingError("not a valid diff");
            return new g(new u.Range(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new u.Range(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        }
        return new g(new u.Range(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new u.Range(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
    }
    toRangeMapping2(e, t) {
        if (f(this.original.endLineNumberExclusive, e) && f(this.modified.endLineNumberExclusive, t)) return new g(new u.Range(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new u.Range(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        if (!this.original.isEmpty && !this.modified.isEmpty) return new g(u.Range.fromPositions(new a.Position(this.original.startLineNumber, 1), c(new a.Position(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), e)), u.Range.fromPositions(new a.Position(this.modified.startLineNumber, 1), c(new a.Position(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)));
        if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new g(u.Range.fromPositions(c(new a.Position(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), e), c(new a.Position(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), e)), u.Range.fromPositions(c(new a.Position(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), c(new a.Position(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)));
        throw new s.BugIndicatingError;
    }
}
function c(e, t) {
    if (e.lineNumber < 1) return new a.Position(1, 1);
    if (e.lineNumber > t.length) return new a.Position(t.length, t[t.length - 1].length + 1);
    const n = t[e.lineNumber - 1];
    return e.column > n.length + 1 ? new a.Position(e.lineNumber, n.length + 1) : e;
}
function f(e, t) {
    return e >= 1 && e <= t.length;
}
exports.LineRangeMapping = h;
class d extends h {
    static fromRangeMappings(e) {
        const t = o.LineRange.join(e.map((e)=>o.LineRange.fromRangeInclusive(e.originalRange))), n = o.LineRange.join(e.map((e)=>o.LineRange.fromRangeInclusive(e.modifiedRange)));
        return new d(t, n, e);
    }
    constructor(e, t, n){
        super(e, t), this.innerChanges = n;
    }
    flip() {
        return new d(this.modified, this.original, this.innerChanges?.map((e)=>e.flip()));
    }
    withInnerChangesFromLineRanges() {
        return new d(this.original, this.modified, [
            this.toRangeMapping()
        ]);
    }
}
exports.DetailedLineRangeMapping = d;
class g {
    static fromEdit(e) {
        const t = e.getNewRanges();
        return e.edits.map((e, n)=>new g(e.range, t[n]));
    }
    static fromEditJoin(e) {
        const t = e.getNewRanges(), n = e.edits.map((e, n)=>new g(e.range, t[n]));
        return g.join(n);
    }
    static join(e) {
        if (0 === e.length) throw new s.BugIndicatingError("Cannot join an empty list of range mappings");
        let t = e[0];
        for(let n = 1; n < e.length; n++)t = t.join(e[n]);
        return t;
    }
    static assertSorted(e) {
        for(let t = 1; t < e.length; t++){
            const n = e[t - 1], i = e[t];
            if (!n.originalRange.getEndPosition().isBeforeOrEqual(i.originalRange.getStartPosition()) || !n.modifiedRange.getEndPosition().isBeforeOrEqual(i.modifiedRange.getStartPosition())) throw new s.BugIndicatingError("Range mappings must be sorted");
        }
    }
    constructor(e, t){
        this.originalRange = e, this.modifiedRange = t;
    }
    toString() {
        return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
    }
    flip() {
        return new g(this.modifiedRange, this.originalRange);
    }
    toTextEdit(e) {
        const t = e.getValueOfRange(this.modifiedRange);
        return new l.SingleTextEdit(this.originalRange, t);
    }
    join(e) {
        return new g(this.originalRange.plusRange(e.originalRange), this.modifiedRange.plusRange(e.modifiedRange));
    }
}
function m(e, t, n) {
    let i = 0, r = 0;
    1 === e.modifiedRange.endColumn && 1 === e.originalRange.endColumn && e.originalRange.startLineNumber + i <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + i <= e.modifiedRange.endLineNumber && (r = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + r && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + r && (i = 1);
    const s = new o.LineRange(e.originalRange.startLineNumber + i, e.originalRange.endLineNumber + 1 + r), a = new o.LineRange(e.modifiedRange.startLineNumber + i, e.modifiedRange.endLineNumber + 1 + r);
    return new d(s, a, [
        e
    ]);
}
exports.RangeMapping = g;
