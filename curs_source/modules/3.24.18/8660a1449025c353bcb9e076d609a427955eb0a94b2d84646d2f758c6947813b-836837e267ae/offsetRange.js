import { Ei, xh } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Im, jFd;
export { Im, jFd };
var __wakaru_W3_initialized = false;
export function W3() {
if (__wakaru_W3_initialized) return;
__wakaru_W3_initialized = true;
"use strict";
E(), Ei(), Im = class fNe {
    constructor(e, n){
        if (this.start = e, this.endExclusive = n, e > n) throw new xh(`Invalid range: ${this.toString()}`);
    }
    static fromTo(e, n) {
        return new fNe(e, n);
    }
    static addRange(e, n) {
        let i = 0;
        for(; i < n.length && n[i].endExclusive < e.start;)i++;
        let r = i;
        for(; r < n.length && n[r].start <= e.endExclusive;)r++;
        if (i === r) n.splice(i, 0, e);
        else {
            const s = Math.min(e.start, n[i].start), o = Math.max(e.endExclusive, n[r - 1].endExclusive);
            n.splice(i, r - i, new fNe(s, o));
        }
    }
    static tryCreate(e, n) {
        if (!(e > n)) return new fNe(e, n);
    }
    static ofLength(e) {
        return new fNe(0, e);
    }
    static ofStartAndLength(e, n) {
        return new fNe(e, e + n);
    }
    static emptyAt(e) {
        return new fNe(e, e);
    }
    get isEmpty() {
        return this.start === this.endExclusive;
    }
    delta(e) {
        return new fNe(this.start + e, this.endExclusive + e);
    }
    deltaStart(e) {
        return new fNe(this.start + e, this.endExclusive);
    }
    deltaEnd(e) {
        return new fNe(this.start, this.endExclusive + e);
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
        return new fNe(Math.min(this.start, e.start), Math.max(this.endExclusive, e.endExclusive));
    }
    intersect(e) {
        const n = Math.max(this.start, e.start), i = Math.min(this.endExclusive, e.endExclusive);
        if (n <= i) return new fNe(n, i);
    }
    intersectionLength(e) {
        const n = Math.max(this.start, e.start), i = Math.min(this.endExclusive, e.endExclusive);
        return Math.max(0, i - n);
    }
    intersects(e) {
        const n = Math.max(this.start, e.start), i = Math.min(this.endExclusive, e.endExclusive);
        return n < i;
    }
    intersectsOrTouches(e) {
        const n = Math.max(this.start, e.start), i = Math.min(this.endExclusive, e.endExclusive);
        return n <= i;
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
        if (this.isEmpty) throw new xh(`Invalid clipping range: ${this.toString()}`);
        return Math.max(this.start, Math.min(this.endExclusive - 1, e));
    }
    clipCyclic(e) {
        if (this.isEmpty) throw new xh(`Invalid clipping range: ${this.toString()}`);
        return e < this.start ? this.endExclusive - (this.start - e) % this.length : e >= this.endExclusive ? this.start + (e - this.start) % this.length : e;
    }
    map(e) {
        const n = [];
        for(let i = this.start; i < this.endExclusive; i++)n.push(e(i));
        return n;
    }
    forEach(e) {
        for(let n = this.start; n < this.endExclusive; n++)e(n);
    }
}, jFd = class bAb {
    constructor(){
        this._sortedRanges = [];
    }
    addRange(e) {
        let n = 0;
        for(; n < this._sortedRanges.length && this._sortedRanges[n].endExclusive < e.start;)n++;
        let i = n;
        for(; i < this._sortedRanges.length && this._sortedRanges[i].start <= e.endExclusive;)i++;
        if (n === i) this._sortedRanges.splice(n, 0, e);
        else {
            const r = Math.min(e.start, this._sortedRanges[n].start), s = Math.max(e.endExclusive, this._sortedRanges[i - 1].endExclusive);
            this._sortedRanges.splice(n, i - n, new Im(r, s));
        }
    }
    toString() {
        return this._sortedRanges.map((e)=>e.toString()).join(", ");
    }
    intersectsStrict(e) {
        let n = 0;
        for(; n < this._sortedRanges.length && this._sortedRanges[n].endExclusive <= e.start;)n++;
        return n < this._sortedRanges.length && this._sortedRanges[n].start < e.endExclusive;
    }
    intersectWithRange(e) {
        const n = new bAb;
        for (const i of this._sortedRanges){
            const r = i.intersect(e);
            r && n.addRange(r);
        }
        return n;
    }
    intersectWithRangeLength(e) {
        return this.intersectWithRange(e).length;
    }
    get length() {
        return this._sortedRanges.reduce((e, n)=>e + n.length, 0);
    }
};

}
