Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.OffsetRangeSet = exports.OffsetRange = void 0;
const i = require("./module-976.js");
class r {
    static fromTo(e, t) {
        return new r(e, t);
    }
    static addRange(e, t) {
        let n = 0;
        for(; n < t.length && t[n].endExclusive < e.start;)n++;
        let i = n;
        for(; i < t.length && t[i].start <= e.endExclusive;)i++;
        if (n === i) t.splice(n, 0, e);
        else {
            const s = Math.min(e.start, t[n].start), o = Math.max(e.endExclusive, t[i - 1].endExclusive);
            t.splice(n, i - n, new r(s, o));
        }
    }
    static tryCreate(e, t) {
        if (!(e > t)) return new r(e, t);
    }
    static ofLength(e) {
        return new r(0, e);
    }
    static ofStartAndLength(e, t) {
        return new r(e, e + t);
    }
    static emptyAt(e) {
        return new r(e, e);
    }
    constructor(e, t){
        if (this.start = e, this.endExclusive = t, e > t) throw new i.BugIndicatingError(`Invalid range: ${this.toString()}`);
    }
    get isEmpty() {
        return this.start === this.endExclusive;
    }
    delta(e) {
        return new r(this.start + e, this.endExclusive + e);
    }
    deltaStart(e) {
        return new r(this.start + e, this.endExclusive);
    }
    deltaEnd(e) {
        return new r(this.start, this.endExclusive + e);
    }
    get length() {
        return this.endExclusive - this.start;
    }
    toString() {
        return `[${this.start}, ${this.endExclusive})`;
    }
    equals(e) {
        return this.start === e.start && this.endExclusive === e.endExclusive;
    }
    containsRange(e) {
        return this.start <= e.start && e.endExclusive <= this.endExclusive;
    }
    contains(e) {
        return this.start <= e && e < this.endExclusive;
    }
    join(e) {
        return new r(Math.min(this.start, e.start), Math.max(this.endExclusive, e.endExclusive));
    }
    intersect(e) {
        const t = Math.max(this.start, e.start), n = Math.min(this.endExclusive, e.endExclusive);
        if (t <= n) return new r(t, n);
    }
    intersectionLength(e) {
        const t = Math.max(this.start, e.start), n = Math.min(this.endExclusive, e.endExclusive);
        return Math.max(0, n - t);
    }
    intersects(e) {
        return Math.max(this.start, e.start) < Math.min(this.endExclusive, e.endExclusive);
    }
    intersectsOrTouches(e) {
        return Math.max(this.start, e.start) <= Math.min(this.endExclusive, e.endExclusive);
    }
    isBefore(e) {
        return this.endExclusive <= e.start;
    }
    isAfter(e) {
        return this.start >= e.endExclusive;
    }
    slice(e) {
        return e.slice(this.start, this.endExclusive);
    }
    substring(e) {
        return e.substring(this.start, this.endExclusive);
    }
    clip(e) {
        if (this.isEmpty) throw new i.BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
        return Math.max(this.start, Math.min(this.endExclusive - 1, e));
    }
    clipCyclic(e) {
        if (this.isEmpty) throw new i.BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
        return e < this.start ? this.endExclusive - (this.start - e) % this.length : e >= this.endExclusive ? this.start + (e - this.start) % this.length : e;
    }
    map(e) {
        const t = [];
        for(let n = this.start; n < this.endExclusive; n++)t.push(e(n));
        return t;
    }
    forEach(e) {
        for(let t = this.start; t < this.endExclusive; t++)e(t);
    }
}
exports.OffsetRange = r;
class s {
    constructor(){
        this._sortedRanges = [];
    }
    addRange(e) {
        let t = 0;
        for(; t < this._sortedRanges.length && this._sortedRanges[t].endExclusive < e.start;)t++;
        let n = t;
        for(; n < this._sortedRanges.length && this._sortedRanges[n].start <= e.endExclusive;)n++;
        if (t === n) this._sortedRanges.splice(t, 0, e);
        else {
            const i = Math.min(e.start, this._sortedRanges[t].start), s = Math.max(e.endExclusive, this._sortedRanges[n - 1].endExclusive);
            this._sortedRanges.splice(t, n - t, new r(i, s));
        }
    }
    toString() {
        return this._sortedRanges.map((e)=>e.toString()).join(", ");
    }
    intersectsStrict(e) {
        let t = 0;
        for(; t < this._sortedRanges.length && this._sortedRanges[t].endExclusive <= e.start;)t++;
        return t < this._sortedRanges.length && this._sortedRanges[t].start < e.endExclusive;
    }
    intersectWithRange(e) {
        const t = new s;
        for (const n of this._sortedRanges){
            const i = n.intersect(e);
            i && t.addRange(i);
        }
        return t;
    }
    intersectWithRangeLength(e) {
        return this.intersectWithRange(e).length;
    }
    get length() {
        return this._sortedRanges.reduce((e, t)=>e + t.length, 0);
    }
}
exports.OffsetRangeSet = s;
