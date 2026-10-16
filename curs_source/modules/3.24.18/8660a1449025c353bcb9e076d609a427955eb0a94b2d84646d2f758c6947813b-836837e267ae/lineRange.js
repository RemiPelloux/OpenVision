import { Ei, idn, rdn, t$e, xh } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { Im, W3 } from "./offsetRange.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var wd, eyt;
export { eyt, wd };
var __wakaru_DD_initialized = false;
export function DD() {
if (__wakaru_DD_initialized) return;
__wakaru_DD_initialized = true;
"use strict";
E(), Ei(), W3(), Qs(), p4(), wd = class Zge {
    static fromRange(e) {
        return new Zge(e.startLineNumber, e.endLineNumber);
    }
    static fromRangeInclusive(e) {
        return new Zge(e.startLineNumber, e.endLineNumber + 1);
    }
    static subtract(e, n) {
        return n ? e.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < e.endLineNumberExclusive ? [
            new Zge(e.startLineNumber, n.startLineNumber),
            new Zge(n.endLineNumberExclusive, e.endLineNumberExclusive)
        ] : n.startLineNumber <= e.startLineNumber && e.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < e.endLineNumberExclusive ? [
            new Zge(Math.max(n.endLineNumberExclusive, e.startLineNumber), e.endLineNumberExclusive)
        ] : [
            new Zge(e.startLineNumber, Math.min(n.startLineNumber, e.endLineNumberExclusive))
        ] : [
            e
        ];
    }
    static joinMany(e) {
        if (e.length === 0) return [];
        let n = new eyt(e[0].slice());
        for(let i = 1; i < e.length; i++)n = n.getUnion(new eyt(e[i].slice()));
        return n.ranges;
    }
    static join(e) {
        if (e.length === 0) throw new xh("lineRanges cannot be empty");
        let n = e[0].startLineNumber, i = e[0].endLineNumberExclusive;
        for(let r = 1; r < e.length; r++)n = Math.min(n, e[r].startLineNumber), i = Math.max(i, e[r].endLineNumberExclusive);
        return new Zge(n, i);
    }
    static ofLength(e, n) {
        return new Zge(e, e + n);
    }
    static deserialize(e) {
        return new Zge(e[0], e[1]);
    }
    constructor(e, n){
        if (e > n) throw new xh(`startLineNumber ${e} cannot be after endLineNumberExclusive ${n}`);
        this.startLineNumber = e, this.endLineNumberExclusive = n;
    }
    contains(e) {
        return this.startLineNumber <= e && e < this.endLineNumberExclusive;
    }
    get isEmpty() {
        return this.startLineNumber === this.endLineNumberExclusive;
    }
    delta(e) {
        return new Zge(this.startLineNumber + e, this.endLineNumberExclusive + e);
    }
    deltaLength(e) {
        return new Zge(this.startLineNumber, this.endLineNumberExclusive + e);
    }
    get length() {
        return this.endLineNumberExclusive - this.startLineNumber;
    }
    join(e) {
        return new Zge(Math.min(this.startLineNumber, e.startLineNumber), Math.max(this.endLineNumberExclusive, e.endLineNumberExclusive));
    }
    toString() {
        return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
    }
    intersect(e) {
        const n = Math.max(this.startLineNumber, e.startLineNumber), i = Math.min(this.endLineNumberExclusive, e.endLineNumberExclusive);
        if (n <= i) return new Zge(n, i);
    }
    intersectsStrict(e) {
        return this.startLineNumber < e.endLineNumberExclusive && e.startLineNumber < this.endLineNumberExclusive;
    }
    overlapOrTouch(e) {
        return this.startLineNumber <= e.endLineNumberExclusive && e.startLineNumber <= this.endLineNumberExclusive;
    }
    equals(e) {
        return this.startLineNumber === e.startLineNumber && this.endLineNumberExclusive === e.endLineNumberExclusive;
    }
    toInclusiveRange() {
        return this.isEmpty ? null : new qt(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
    }
    toExclusiveRange() {
        return new qt(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
    }
    mapToLineArray(e) {
        const n = [];
        for(let i = this.startLineNumber; i < this.endLineNumberExclusive; i++)n.push(e(i));
        return n;
    }
    forEach(e) {
        for(let n = this.startLineNumber; n < this.endLineNumberExclusive; n++)e(n);
    }
    serialize() {
        return [
            this.startLineNumber,
            this.endLineNumberExclusive
        ];
    }
    includes(e) {
        return this.startLineNumber <= e && e < this.endLineNumberExclusive;
    }
    toOffsetRange() {
        return new Im(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
    }
    distanceToRange(e) {
        return this.endLineNumberExclusive <= e.startLineNumber ? e.startLineNumber - this.endLineNumberExclusive : e.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - e.endLineNumberExclusive : 0;
    }
    distanceToLine(e) {
        return this.contains(e) ? 0 : e < this.startLineNumber ? this.startLineNumber - e : e - this.endLineNumberExclusive;
    }
    addMargin(e, n) {
        return new Zge(this.startLineNumber - e, this.endLineNumberExclusive + n);
    }
}, eyt = class Yjn {
    constructor(e = []){
        this._normalizedRanges = e;
    }
    get ranges() {
        return this._normalizedRanges;
    }
    addRange(e) {
        if (e.length === 0) return;
        const n = t$e(this._normalizedRanges, (r)=>r.endLineNumberExclusive >= e.startLineNumber), i = rdn(this._normalizedRanges, (r)=>r.startLineNumber <= e.endLineNumberExclusive) + 1;
        if (n === i) this._normalizedRanges.splice(n, 0, e);
        else if (n === i - 1) {
            const r = this._normalizedRanges[n];
            this._normalizedRanges[n] = r.join(e);
        } else {
            const r = this._normalizedRanges[n].join(this._normalizedRanges[i - 1]).join(e);
            this._normalizedRanges.splice(n, i - n, r);
        }
    }
    contains(e) {
        const n = idn(this._normalizedRanges, (i)=>i.startLineNumber <= e);
        return !!n && n.endLineNumberExclusive > e;
    }
    intersects(e) {
        const n = idn(this._normalizedRanges, (i)=>i.startLineNumber < e.endLineNumberExclusive);
        return !!n && n.endLineNumberExclusive > e.startLineNumber;
    }
    getUnion(e) {
        if (this._normalizedRanges.length === 0) return e;
        if (e._normalizedRanges.length === 0) return this;
        const n = [];
        let i = 0, r = 0, s = null;
        for(; i < this._normalizedRanges.length || r < e._normalizedRanges.length;){
            let o = null;
            if (i < this._normalizedRanges.length && r < e._normalizedRanges.length) {
                const a = this._normalizedRanges[i], l = e._normalizedRanges[r];
                a.startLineNumber < l.startLineNumber ? (o = a, i++) : (o = l, r++);
            } else i < this._normalizedRanges.length ? (o = this._normalizedRanges[i], i++) : (o = e._normalizedRanges[r], r++);
            s === null ? s = o : s.endLineNumberExclusive >= o.startLineNumber ? s = new wd(s.startLineNumber, Math.max(s.endLineNumberExclusive, o.endLineNumberExclusive)) : (n.push(s), s = o);
        }
        return s !== null && n.push(s), new Yjn(n);
    }
    subtractFrom(e) {
        const n = t$e(this._normalizedRanges, (o)=>o.endLineNumberExclusive >= e.startLineNumber), i = rdn(this._normalizedRanges, (o)=>o.startLineNumber <= e.endLineNumberExclusive) + 1;
        if (n === i) return new Yjn([
            e
        ]);
        const r = [];
        let s = e.startLineNumber;
        for(let o = n; o < i; o++){
            const a = this._normalizedRanges[o];
            a.startLineNumber > s && r.push(new wd(s, a.startLineNumber)), s = a.endLineNumberExclusive;
        }
        return s < e.endLineNumberExclusive && r.push(new wd(s, e.endLineNumberExclusive)), new Yjn(r);
    }
    toString() {
        return this._normalizedRanges.map((e)=>e.toString()).join(", ");
    }
    getIntersection(e) {
        const n = [];
        let i = 0, r = 0;
        for(; i < this._normalizedRanges.length && r < e._normalizedRanges.length;){
            const s = this._normalizedRanges[i], o = e._normalizedRanges[r], a = s.intersect(o);
            a && !a.isEmpty && n.push(a), s.endLineNumberExclusive < o.endLineNumberExclusive ? i++ : r++;
        }
        return new Yjn(n);
    }
    getWithDelta(e) {
        return new Yjn(this._normalizedRanges.map((n)=>n.delta(e)));
    }
};

}
