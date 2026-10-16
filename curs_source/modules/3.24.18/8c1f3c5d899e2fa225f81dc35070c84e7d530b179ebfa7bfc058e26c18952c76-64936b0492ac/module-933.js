Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DateTimeout = exports.InfiniteTimeout = exports.OffsetPair = exports.SequenceDiff = exports.DiffAlgorithmResult = void 0;
const i = require("./module-501.js"), r = require("./module-976.js"), s = require("./module-991.js");
class o {
    static trivial(e, t) {
        return new o([
            new a(s.OffsetRange.ofLength(e.length), s.OffsetRange.ofLength(t.length))
        ], !1);
    }
    static trivialTimedOut(e, t) {
        return new o([
            new a(s.OffsetRange.ofLength(e.length), s.OffsetRange.ofLength(t.length))
        ], !0);
    }
    constructor(e, t){
        this.diffs = e, this.hitTimeout = t;
    }
}
exports.DiffAlgorithmResult = o;
class a {
    static invert(e, t) {
        const n = [];
        return (0, i.forEachAdjacent)(e, (e, i)=>{
            n.push(a.fromOffsetPairs(e ? e.getEndExclusives() : u.zero, i ? i.getStarts() : new u(t, (e ? e.seq2Range.endExclusive - e.seq1Range.endExclusive : 0) + t)));
        }), n;
    }
    static fromOffsetPairs(e, t) {
        return new a(new s.OffsetRange(e.offset1, t.offset1), new s.OffsetRange(e.offset2, t.offset2));
    }
    static assertSorted(e) {
        let t;
        for (const n of e){
            if (t && !(t.seq1Range.endExclusive <= n.seq1Range.start && t.seq2Range.endExclusive <= n.seq2Range.start)) throw new r.BugIndicatingError("Sequence diffs must be sorted");
            t = n;
        }
    }
    constructor(e, t){
        this.seq1Range = e, this.seq2Range = t;
    }
    swap() {
        return new a(this.seq2Range, this.seq1Range);
    }
    toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
    }
    join(e) {
        return new a(this.seq1Range.join(e.seq1Range), this.seq2Range.join(e.seq2Range));
    }
    delta(e) {
        return 0 === e ? this : new a(this.seq1Range.delta(e), this.seq2Range.delta(e));
    }
    deltaStart(e) {
        return 0 === e ? this : new a(this.seq1Range.deltaStart(e), this.seq2Range.deltaStart(e));
    }
    deltaEnd(e) {
        return 0 === e ? this : new a(this.seq1Range.deltaEnd(e), this.seq2Range.deltaEnd(e));
    }
    intersectsOrTouches(e) {
        return this.seq1Range.intersectsOrTouches(e.seq1Range) || this.seq2Range.intersectsOrTouches(e.seq2Range);
    }
    intersect(e) {
        const t = this.seq1Range.intersect(e.seq1Range), n = this.seq2Range.intersect(e.seq2Range);
        if (t && n) return new a(t, n);
    }
    getStarts() {
        return new u(this.seq1Range.start, this.seq2Range.start);
    }
    getEndExclusives() {
        return new u(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
    }
}
exports.SequenceDiff = a;
class u {
    static{
        this.zero = new u(0, 0);
    }
    static{
        this.max = new u(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
    constructor(e, t){
        this.offset1 = e, this.offset2 = t;
    }
    toString() {
        return `${this.offset1} <-> ${this.offset2}`;
    }
    delta(e) {
        return 0 === e ? this : new u(this.offset1 + e, this.offset2 + e);
    }
    equals(e) {
        return this.offset1 === e.offset1 && this.offset2 === e.offset2;
    }
}
exports.OffsetPair = u;
class l {
    static{
        this.instance = new l;
    }
    isValid() {
        return !0;
    }
}
exports.InfiniteTimeout = l;
exports.DateTimeout = class {
    constructor(e, t){
        if (this.timeout = e, this.shouldGracefullyFallBackOnTimeout = t, this.startTime = Date.now(), this.numChecks = 0, this.valid = !0, e <= 0) throw new r.BugIndicatingError("timeout must be positive");
        this.expireTime = this.startTime + e;
    }
    isValid() {
        if (this.numChecks++, !1 === this.valid || this.numChecks % 25 != 0) return this.valid;
        return !(Date.now() < this.expireTime) && this.valid && (this.valid = !1), this.valid;
    }
    disable() {
        this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = ()=>!0, this.valid = !0;
    }
};
