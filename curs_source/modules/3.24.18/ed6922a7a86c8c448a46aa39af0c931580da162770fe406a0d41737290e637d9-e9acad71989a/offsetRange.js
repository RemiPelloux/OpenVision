import { Zu, si } from "./HVr.js";
import { x } from "./tslib.es6.js";
var Mh, MPc;
export { MPc, Mh };
var __wakaru_uR_initialized = false;
export function uR() {
if (__wakaru_uR_initialized) return;
__wakaru_uR_initialized = true;
"use strict";
x(), si(), Mh = class Bye {
    constructor(t, n){
        if (this.start = t, this.endExclusive = n, t > n) throw new Zu(`Invalid range: ${this.toString()}`);
    }
    static fromTo(t, n) {
        return new Bye(t, n);
    }
    static addRange(t, n) {
        let i = 0;
        for(; i < n.length && n[i].endExclusive < t.start;)i++;
        let r = i;
        for(; r < n.length && n[r].start <= t.endExclusive;)r++;
        if (i === r) n.splice(i, 0, t);
        else {
            const s = Math.min(t.start, n[i].start), o = Math.max(t.endExclusive, n[r - 1].endExclusive);
            n.splice(i, r - i, new Bye(s, o));
        }
    }
    static tryCreate(t, n) {
        if (!(t > n)) return new Bye(t, n);
    }
    static ofLength(t) {
        return new Bye(0, t);
    }
    static ofStartAndLength(t, n) {
        return new Bye(t, t + n);
    }
    static emptyAt(t) {
        return new Bye(t, t);
    }
    get isEmpty() {
        return this.start === this.endExclusive;
    }
    delta(t) {
        return new Bye(this.start + t, this.endExclusive + t);
    }
    deltaStart(t) {
        return new Bye(this.start + t, this.endExclusive);
    }
    deltaEnd(t) {
        return new Bye(this.start, this.endExclusive + t);
    }
    get length() {
        return this.endExclusive - this.start;
    }
    toString() {
        return `[${this.start}, ${this.endExclusive})`;
    }
    equals(t) {
        return this.start === t.start && this.endExclusive === t.endExclusive;
    }
    containsRange(t) {
        return this.start <= t.start && t.endExclusive <= this.endExclusive;
    }
    contains(t) {
        return this.start <= t && t < this.endExclusive;
    }
    join(t) {
        return new Bye(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive));
    }
    intersect(t) {
        const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
        if (n <= i) return new Bye(n, i);
    }
    intersectionLength(t) {
        const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
        return Math.max(0, i - n);
    }
    intersects(t) {
        const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
        return n < i;
    }
    intersectsOrTouches(t) {
        const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
        return n <= i;
    }
    isBefore(t) {
        return this.endExclusive <= t.start;
    }
    isAfter(t) {
        return this.start >= t.endExclusive;
    }
    slice(t) {
        return t.slice(this.start, this.endExclusive);
    }
    substring(t) {
        return t.substring(this.start, this.endExclusive);
    }
    clip(t) {
        if (this.isEmpty) throw new Zu(`Invalid clipping range: ${this.toString()}`);
        return Math.max(this.start, Math.min(this.endExclusive - 1, t));
    }
    clipCyclic(t) {
        if (this.isEmpty) throw new Zu(`Invalid clipping range: ${this.toString()}`);
        return t < this.start ? this.endExclusive - (this.start - t) % this.length : t >= this.endExclusive ? this.start + (t - this.start) % this.length : t;
    }
    map(t) {
        const n = [];
        for(let i = this.start; i < this.endExclusive; i++)n.push(t(i));
        return n;
    }
    forEach(t) {
        for(let n = this.start; n < this.endExclusive; n++)t(n);
    }
}, MPc = class jSm {
    constructor(){
        this._sortedRanges = [];
    }
    addRange(t) {
        let n = 0;
        for(; n < this._sortedRanges.length && this._sortedRanges[n].endExclusive < t.start;)n++;
        let i = n;
        for(; i < this._sortedRanges.length && this._sortedRanges[i].start <= t.endExclusive;)i++;
        if (n === i) this._sortedRanges.splice(n, 0, t);
        else {
            const r = Math.min(t.start, this._sortedRanges[n].start), s = Math.max(t.endExclusive, this._sortedRanges[i - 1].endExclusive);
            this._sortedRanges.splice(n, i - n, new Mh(r, s));
        }
    }
    toString() {
        return this._sortedRanges.map((t)=>t.toString()).join(", ");
    }
    intersectsStrict(t) {
        let n = 0;
        for(; n < this._sortedRanges.length && this._sortedRanges[n].endExclusive <= t.start;)n++;
        return n < this._sortedRanges.length && this._sortedRanges[n].start < t.endExclusive;
    }
    intersectWithRange(t) {
        const n = new jSm;
        for (const i of this._sortedRanges){
            const r = i.intersect(t);
            r && n.addRange(r);
        }
        return n;
    }
    intersectWithRangeLength(t) {
        return this.intersectWithRange(t).length;
    }
    get length() {
        return this._sortedRanges.reduce((t, n)=>t + n.length, 0);
    }
};

}
