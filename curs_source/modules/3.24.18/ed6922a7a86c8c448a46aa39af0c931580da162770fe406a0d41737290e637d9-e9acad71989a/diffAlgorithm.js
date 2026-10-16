import { BEc, Zu, si } from "./HVr.js";
import { dr } from "./arrays.js";
import { Mh, uR } from "./offsetRange.js";
import { x } from "./tslib.es6.js";
var Yge, PO, IFt, cKe, Jbi, xvn, j8c;
export { IFt, Jbi, PO, Yge, cKe, j8c, xvn };
var __wakaru_AFt_initialized = false;
export function AFt() {
if (__wakaru_AFt_initialized) return;
__wakaru_AFt_initialized = true;
"use strict";
x(), dr(), si(), uR(), Yge = class GIa {
    constructor(t, n){
        this.diffs = t, this.hitTimeout = n;
    }
    static trivial(t, n) {
        return new GIa([
            new PO(Mh.ofLength(t.length), Mh.ofLength(n.length))
        ], !1);
    }
    static trivialTimedOut(t, n) {
        return new GIa([
            new PO(Mh.ofLength(t.length), Mh.ofLength(n.length))
        ], !0);
    }
}, PO = class qWe {
    constructor(t, n){
        this.seq1Range = t, this.seq2Range = n;
    }
    static invert(t, n) {
        const i = [];
        return BEc(t, (r, s)=>{
            i.push(qWe.fromOffsetPairs(r ? r.getEndExclusives() : cKe.zero, s ? s.getStarts() : new cKe(n, (r ? r.seq2Range.endExclusive - r.seq1Range.endExclusive : 0) + n)));
        }), i;
    }
    static fromOffsetPairs(t, n) {
        return new qWe(new Mh(t.offset1, n.offset1), new Mh(t.offset2, n.offset2));
    }
    static assertSorted(t) {
        let n;
        for (const i of t){
            if (n && !(n.seq1Range.endExclusive <= i.seq1Range.start && n.seq2Range.endExclusive <= i.seq2Range.start)) throw new Zu("Sequence diffs must be sorted");
            n = i;
        }
    }
    swap() {
        return new qWe(this.seq2Range, this.seq1Range);
    }
    toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
    }
    join(t) {
        return new qWe(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
    }
    delta(t) {
        return t === 0 ? this : new qWe(this.seq1Range.delta(t), this.seq2Range.delta(t));
    }
    deltaStart(t) {
        return t === 0 ? this : new qWe(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
    }
    deltaEnd(t) {
        return t === 0 ? this : new qWe(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
    }
    intersectsOrTouches(t) {
        return this.seq1Range.intersectsOrTouches(t.seq1Range) || this.seq2Range.intersectsOrTouches(t.seq2Range);
    }
    intersect(t) {
        const n = this.seq1Range.intersect(t.seq1Range), i = this.seq2Range.intersect(t.seq2Range);
        if (!(!n || !i)) return new qWe(n, i);
    }
    getStarts() {
        return new cKe(this.seq1Range.start, this.seq2Range.start);
    }
    getEndExclusives() {
        return new cKe(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
    }
}, IFt = class Bkm {
    constructor(t, n){
        this.offset1 = t, this.offset2 = n;
    }
    toString() {
        return `${this.offset1} <-> ${this.offset2}`;
    }
    delta(t) {
        return t === 0 ? this : new Bkm(this.offset1 + t, this.offset2 + t);
    }
    equals(t) {
        return this.offset1 === t.offset1 && this.offset2 === t.offset2;
    }
}, IFt.zero = new IFt(0, 0), IFt.max = new IFt(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), cKe = IFt, Jbi = class {
    isValid() {
        return !0;
    }
}, Jbi.instance = new Jbi, xvn = Jbi, j8c = class {
    constructor(e, t){
        if (this.timeout = e, this.shouldGracefullyFallBackOnTimeout = t, this.startTime = Date.now(), this.numChecks = 0, this.valid = !0, e <= 0) throw new Zu("timeout must be positive");
        this.expireTime = this.startTime + e;
    }
    isValid() {
        return this.numChecks++, this.valid === !1 || this.numChecks % 25 != 0 ? this.valid : (!(Date.now() < this.expireTime) && this.valid && (this.valid = !1), this.valid);
    }
    disable() {
        this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = ()=>!0, this.valid = !0;
    }
};

}
