import { Ncv } from "./De_3.js";
import { Zu, si } from "./HVr.js";
import { Mh, uR } from "./offsetRange.js";
import { x } from "./tslib.es6.js";
var a6i, i4e, _N;
export { _N, a6i, i4e };
var __wakaru_cyt_initialized = false;
export function cyt() {
if (__wakaru_cyt_initialized) return;
__wakaru_cyt_initialized = true;
"use strict";
x(), si(), uR(), a6i = class OAt {
    constructor(t){
        this.edits = t;
        let n = -1;
        for (const i of t){
            if (!(i.replaceRange.start >= n)) throw new Zu(`Edits must be disjoint and sorted. Found ${i} after ${n}`);
            n = i.replaceRange.endExclusive;
        }
    }
    static fromJson(t) {
        return new OAt(t.map(_N.fromJson));
    }
    static replace(t, n) {
        return new OAt([
            new _N(t, n)
        ]);
    }
    static insert(t, n) {
        return OAt.replace(Mh.emptyAt(t), n);
    }
    normalize() {
        const t = [];
        let n;
        for (const i of this.edits)i.newText.length === 0 && i.replaceRange.length === 0 || (n && n.replaceRange.endExclusive === i.replaceRange.start ? n = new _N(n.replaceRange.join(i.replaceRange), n.newText + i.newText) : (n && t.push(n), n = i));
        return n && t.push(n), new OAt(t);
    }
    toString() {
        return `[${this.edits.map((n)=>n.toString()).join(", ")}]`;
    }
    apply(t) {
        const n = [];
        let i = 0;
        for (const r of this.edits)n.push(t.substring(i, r.replaceRange.start)), n.push(r.newText), i = r.replaceRange.endExclusive;
        return n.push(t.substring(i)), n.join("");
    }
    compose(t) {
        return Ncv(this, t);
    }
    inverse(t) {
        const n = [];
        let i = 0;
        for (const r of this.edits)n.push(new _N(Mh.ofStartAndLength(r.replaceRange.start + i, r.newText.length), t.substring(r.replaceRange.start, r.replaceRange.endExclusive))), i += r.newText.length - r.replaceRange.length;
        return new OAt(n);
    }
    getNewTextRanges() {
        const t = [];
        let n = 0;
        for (const i of this.edits)t.push(Mh.ofStartAndLength(i.replaceRange.start + n, i.newText.length)), n += i.newText.length - i.replaceRange.length;
        return t;
    }
    get isEmpty() {
        return this.edits.length === 0;
    }
    tryRebase(t, n) {
        const i = [];
        let r = 0, s = 0, o = 0;
        for(; s < this.edits.length || r < t.edits.length;){
            const a = t.edits[r], c = this.edits[s];
            if (c) if (!a) i.push(new _N(c.replaceRange.delta(o), c.newText)), s++;
            else if (c.replaceRange.intersectsOrTouches(a.replaceRange)) {
                if (s++, n) return;
            } else c.replaceRange.start < a.replaceRange.start ? (i.push(new _N(c.replaceRange.delta(o), c.newText)), s++) : (r++, o += a.newText.length - a.replaceRange.length);
            else break;
        }
        return new OAt(i);
    }
    applyToOffset(t) {
        let n = 0;
        for (const i of this.edits)if (i.replaceRange.start <= t) {
            if (t < i.replaceRange.endExclusive) return i.replaceRange.start + n;
            n += i.newText.length - i.replaceRange.length;
        } else break;
        return t + n;
    }
    applyToOffsetRange(t) {
        return new Mh(this.applyToOffset(t.start), this.applyToOffset(t.endExclusive));
    }
    applyInverseToOffset(t) {
        let n = 0;
        for (const i of this.edits){
            const r = i.newText.length;
            if (i.replaceRange.start <= t - n) {
                if (t - n < i.replaceRange.start + r) return i.replaceRange.start;
                n += r - i.replaceRange.length;
            } else break;
        }
        return t - n;
    }
    equals(t) {
        if (this.edits.length !== t.edits.length) return !1;
        for(let n = 0; n < this.edits.length; n++)if (!this.edits[n].equals(t.edits[n])) return !1;
        return !0;
    }
}, a6i.empty = new a6i([]), i4e = a6i, _N = class D1r {
    constructor(t, n){
        this.replaceRange = t, this.newText = n;
    }
    static fromJson(t) {
        return new D1r(Mh.ofStartAndLength(t.pos, t.len), t.txt);
    }
    static insert(t, n) {
        return new D1r(Mh.emptyAt(t), n);
    }
    static replace(t, n) {
        return new D1r(t, n);
    }
    toString() {
        return `${this.replaceRange} -> "${this.newText}"`;
    }
    get isEmpty() {
        return this.newText.length === 0 && this.replaceRange.length === 0;
    }
    apply(t) {
        return t.substring(0, this.replaceRange.start) + this.newText + t.substring(this.replaceRange.endExclusive);
    }
    getRangeAfterApply() {
        return new Mh(this.replaceRange.start, this.replaceRange.start + this.newText.length);
    }
    equals(t) {
        return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText;
    }
};

}
