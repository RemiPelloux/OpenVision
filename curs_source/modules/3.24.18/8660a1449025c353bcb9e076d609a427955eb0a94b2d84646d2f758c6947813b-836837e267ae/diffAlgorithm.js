import { Ei, cYu, xh } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Im, W3 } from "./offsetRange.js";
import { E } from "./tslib.es6.js";
var iRe, aB, ivn, jyt, ITr, noi, bqd;
export { ITr, aB, bqd, iRe, ivn, jyt, noi };
var __wakaru_rvn_initialized = false;
export function rvn() {
if (__wakaru_rvn_initialized) return;
__wakaru_rvn_initialized = true;
"use strict";
E(), bo(), Ei(), W3(), iRe = class EJc {
    constructor(e, n){
        this.diffs = e, this.hitTimeout = n;
    }
    static trivial(e, n) {
        return new EJc([
            new aB(Im.ofLength(e.length), Im.ofLength(n.length))
        ], !1);
    }
    static trivialTimedOut(e, n) {
        return new EJc([
            new aB(Im.ofLength(e.length), Im.ofLength(n.length))
        ], !0);
    }
}, aB = class dmt {
    constructor(e, n){
        this.seq1Range = e, this.seq2Range = n;
    }
    static invert(e, n) {
        const i = [];
        return cYu(e, (r, s)=>{
            i.push(dmt.fromOffsetPairs(r ? r.getEndExclusives() : jyt.zero, s ? s.getStarts() : new jyt(n, (r ? r.seq2Range.endExclusive - r.seq1Range.endExclusive : 0) + n)));
        }), i;
    }
    static fromOffsetPairs(e, n) {
        return new dmt(new Im(e.offset1, n.offset1), new Im(e.offset2, n.offset2));
    }
    static assertSorted(e) {
        let n;
        for (const i of e){
            if (n && !(n.seq1Range.endExclusive <= i.seq1Range.start && n.seq2Range.endExclusive <= i.seq2Range.start)) throw new xh("Sequence diffs must be sorted");
            n = i;
        }
    }
    swap() {
        return new dmt(this.seq2Range, this.seq1Range);
    }
    toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
    }
    join(e) {
        return new dmt(this.seq1Range.join(e.seq1Range), this.seq2Range.join(e.seq2Range));
    }
    delta(e) {
        return e === 0 ? this : new dmt(this.seq1Range.delta(e), this.seq2Range.delta(e));
    }
    deltaStart(e) {
        return e === 0 ? this : new dmt(this.seq1Range.deltaStart(e), this.seq2Range.deltaStart(e));
    }
    deltaEnd(e) {
        return e === 0 ? this : new dmt(this.seq1Range.deltaEnd(e), this.seq2Range.deltaEnd(e));
    }
    intersectsOrTouches(e) {
        return this.seq1Range.intersectsOrTouches(e.seq1Range) || this.seq2Range.intersectsOrTouches(e.seq2Range);
    }
    intersect(e) {
        const n = this.seq1Range.intersect(e.seq1Range), i = this.seq2Range.intersect(e.seq2Range);
        if (!(!n || !i)) return new dmt(n, i);
    }
    getStarts() {
        return new jyt(this.seq1Range.start, this.seq2Range.start);
    }
    getEndExclusives() {
        return new jyt(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
    }
}, ivn = class cRb {
    constructor(e, n){
        this.offset1 = e, this.offset2 = n;
    }
    toString() {
        return `${this.offset1} <-> ${this.offset2}`;
    }
    delta(e) {
        return e === 0 ? this : new cRb(this.offset1 + e, this.offset2 + e);
    }
    equals(e) {
        return this.offset1 === e.offset1 && this.offset2 === e.offset2;
    }
}, ivn.zero = new ivn(0, 0), ivn.max = new ivn(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), jyt = ivn, ITr = class {
    isValid() {
        return !0;
    }
}, ITr.instance = new ITr, noi = ITr, bqd = class {
    constructor(t, e){
        if (this.timeout = t, this.shouldGracefullyFallBackOnTimeout = e, this.startTime = Date.now(), this.numChecks = 0, this.valid = !0, t <= 0) throw new xh("timeout must be positive");
        this.expireTime = this.startTime + t;
    }
    isValid() {
        return this.numChecks++, this.valid === !1 || this.numChecks % 25 != 0 ? this.valid : (!(Date.now() < this.expireTime) && this.valid && (this.valid = !1), this.valid);
    }
    disable() {
        this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = ()=>!0, this.valid = !0;
    }
};

}
