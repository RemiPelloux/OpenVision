import { Zu, dge, nNt, si, tNt } from "./HVr.js";
import { FT } from "./arraysFind.js";
import { Mh, uR } from "./offsetRange.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var Vl, wze;
export { Vl, wze };
var __wakaru_hA_initialized = false;
export function hA() {
if (__wakaru_hA_initialized) return;
__wakaru_hA_initialized = true;
"use strict";
x(), si(), uR(), qi(), FT(), Vl = class _ne {
    static fromRange(t) {
        return new _ne(t.startLineNumber, t.endLineNumber);
    }
    static fromRangeInclusive(t) {
        return new _ne(t.startLineNumber, t.endLineNumber + 1);
    }
    static subtract(t, n) {
        return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [
            new _ne(t.startLineNumber, n.startLineNumber),
            new _ne(n.endLineNumberExclusive, t.endLineNumberExclusive)
        ] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [
            new _ne(Math.max(n.endLineNumberExclusive, t.startLineNumber), t.endLineNumberExclusive)
        ] : [
            new _ne(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))
        ] : [
            t
        ];
    }
    static joinMany(t) {
        if (t.length === 0) return [];
        let n = new wze(t[0].slice());
        for(let i = 1; i < t.length; i++)n = n.getUnion(new wze(t[i].slice()));
        return n.ranges;
    }
    static join(t) {
        if (t.length === 0) throw new Zu("lineRanges cannot be empty");
        let n = t[0].startLineNumber, i = t[0].endLineNumberExclusive;
        for(let r = 1; r < t.length; r++)n = Math.min(n, t[r].startLineNumber), i = Math.max(i, t[r].endLineNumberExclusive);
        return new _ne(n, i);
    }
    static ofLength(t, n) {
        return new _ne(t, t + n);
    }
    static deserialize(t) {
        return new _ne(t[0], t[1]);
    }
    constructor(t, n){
        if (t > n) throw new Zu(`startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`);
        this.startLineNumber = t, this.endLineNumberExclusive = n;
    }
    contains(t) {
        return this.startLineNumber <= t && t < this.endLineNumberExclusive;
    }
    get isEmpty() {
        return this.startLineNumber === this.endLineNumberExclusive;
    }
    delta(t) {
        return new _ne(this.startLineNumber + t, this.endLineNumberExclusive + t);
    }
    deltaLength(t) {
        return new _ne(this.startLineNumber, this.endLineNumberExclusive + t);
    }
    get length() {
        return this.endLineNumberExclusive - this.startLineNumber;
    }
    join(t) {
        return new _ne(Math.min(this.startLineNumber, t.startLineNumber), Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive));
    }
    toString() {
        return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
    }
    intersect(t) {
        const n = Math.max(this.startLineNumber, t.startLineNumber), i = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
        if (n <= i) return new _ne(n, i);
    }
    intersectsStrict(t) {
        return this.startLineNumber < t.endLineNumberExclusive && t.startLineNumber < this.endLineNumberExclusive;
    }
    overlapOrTouch(t) {
        return this.startLineNumber <= t.endLineNumberExclusive && t.startLineNumber <= this.endLineNumberExclusive;
    }
    equals(t) {
        return this.startLineNumber === t.startLineNumber && this.endLineNumberExclusive === t.endLineNumberExclusive;
    }
    toInclusiveRange() {
        return this.isEmpty ? null : new dt(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
    }
    toExclusiveRange() {
        return new dt(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
    }
    mapToLineArray(t) {
        const n = [];
        for(let i = this.startLineNumber; i < this.endLineNumberExclusive; i++)n.push(t(i));
        return n;
    }
    forEach(t) {
        for(let n = this.startLineNumber; n < this.endLineNumberExclusive; n++)t(n);
    }
    serialize() {
        return [
            this.startLineNumber,
            this.endLineNumberExclusive
        ];
    }
    includes(t) {
        return this.startLineNumber <= t && t < this.endLineNumberExclusive;
    }
    toOffsetRange() {
        return new Mh(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
    }
    distanceToRange(t) {
        return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
    }
    distanceToLine(t) {
        return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
    }
    addMargin(t, n) {
        return new _ne(this.startLineNumber - t, this.endLineNumberExclusive + n);
    }
}, wze = class Cin {
    constructor(t = []){
        this._normalizedRanges = t;
    }
    get ranges() {
        return this._normalizedRanges;
    }
    addRange(t) {
        if (t.length === 0) return;
        const n = dge(this._normalizedRanges, (r)=>r.endLineNumberExclusive >= t.startLineNumber), i = nNt(this._normalizedRanges, (r)=>r.startLineNumber <= t.endLineNumberExclusive) + 1;
        if (n === i) this._normalizedRanges.splice(n, 0, t);
        else if (n === i - 1) {
            const r = this._normalizedRanges[n];
            this._normalizedRanges[n] = r.join(t);
        } else {
            const r = this._normalizedRanges[n].join(this._normalizedRanges[i - 1]).join(t);
            this._normalizedRanges.splice(n, i - n, r);
        }
    }
    contains(t) {
        const n = tNt(this._normalizedRanges, (i)=>i.startLineNumber <= t);
        return !!n && n.endLineNumberExclusive > t;
    }
    intersects(t) {
        const n = tNt(this._normalizedRanges, (i)=>i.startLineNumber < t.endLineNumberExclusive);
        return !!n && n.endLineNumberExclusive > t.startLineNumber;
    }
    getUnion(t) {
        if (this._normalizedRanges.length === 0) return t;
        if (t._normalizedRanges.length === 0) return this;
        const n = [];
        let i = 0, r = 0, s = null;
        for(; i < this._normalizedRanges.length || r < t._normalizedRanges.length;){
            let o = null;
            if (i < this._normalizedRanges.length && r < t._normalizedRanges.length) {
                const a = this._normalizedRanges[i], c = t._normalizedRanges[r];
                a.startLineNumber < c.startLineNumber ? (o = a, i++) : (o = c, r++);
            } else i < this._normalizedRanges.length ? (o = this._normalizedRanges[i], i++) : (o = t._normalizedRanges[r], r++);
            s === null ? s = o : s.endLineNumberExclusive >= o.startLineNumber ? s = new Vl(s.startLineNumber, Math.max(s.endLineNumberExclusive, o.endLineNumberExclusive)) : (n.push(s), s = o);
        }
        return s !== null && n.push(s), new Cin(n);
    }
    subtractFrom(t) {
        const n = dge(this._normalizedRanges, (o)=>o.endLineNumberExclusive >= t.startLineNumber), i = nNt(this._normalizedRanges, (o)=>o.startLineNumber <= t.endLineNumberExclusive) + 1;
        if (n === i) return new Cin([
            t
        ]);
        const r = [];
        let s = t.startLineNumber;
        for(let o = n; o < i; o++){
            const a = this._normalizedRanges[o];
            a.startLineNumber > s && r.push(new Vl(s, a.startLineNumber)), s = a.endLineNumberExclusive;
        }
        return s < t.endLineNumberExclusive && r.push(new Vl(s, t.endLineNumberExclusive)), new Cin(r);
    }
    toString() {
        return this._normalizedRanges.map((t)=>t.toString()).join(", ");
    }
    getIntersection(t) {
        const n = [];
        let i = 0, r = 0;
        for(; i < this._normalizedRanges.length && r < t._normalizedRanges.length;){
            const s = this._normalizedRanges[i], o = t._normalizedRanges[r], a = s.intersect(o);
            a && !a.isEmpty && n.push(a), s.endLineNumberExclusive < o.endLineNumberExclusive ? i++ : r++;
        }
        return new Cin(n);
    }
    getWithDelta(t) {
        return new Cin(this._normalizedRanges.map((n)=>n.delta(t)));
    }
};

}
