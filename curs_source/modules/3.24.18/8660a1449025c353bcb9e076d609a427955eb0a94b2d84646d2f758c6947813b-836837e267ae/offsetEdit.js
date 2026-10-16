import { Ei, xh } from "./Iwo.js";
import { gx1 } from "./ipa.js";
import { Im, W3 } from "./offsetRange.js";
import { E } from "./tslib.es6.js";
var RWr, Ist, v6;
export { Ist, RWr, v6 };
var __wakaru_qHt_initialized = false;
export function qHt() {
if (__wakaru_qHt_initialized) return;
__wakaru_qHt_initialized = true;
"use strict";
E(), Ei(), W3(), RWr = class jsn {
    constructor(e){
        this.edits = e;
        let n = -1;
        for (const i of e){
            if (!(i.replaceRange.start >= n)) throw new xh(`Edits must be disjoint and sorted. Found ${i} after ${n}`);
            n = i.replaceRange.endExclusive;
        }
    }
    static fromJson(e) {
        return new jsn(e.map(v6.fromJson));
    }
    static replace(e, n) {
        return new jsn([
            new v6(e, n)
        ]);
    }
    static insert(e, n) {
        return jsn.replace(Im.emptyAt(e), n);
    }
    normalize() {
        const e = [];
        let n;
        for (const i of this.edits)i.newText.length === 0 && i.replaceRange.length === 0 || (n && n.replaceRange.endExclusive === i.replaceRange.start ? n = new v6(n.replaceRange.join(i.replaceRange), n.newText + i.newText) : (n && e.push(n), n = i));
        return n && e.push(n), new jsn(e);
    }
    toString() {
        return `[${this.edits.map((n)=>n.toString()).join(", ")}]`;
    }
    apply(e) {
        const n = [];
        let i = 0;
        for (const r of this.edits)n.push(e.substring(i, r.replaceRange.start)), n.push(r.newText), i = r.replaceRange.endExclusive;
        return n.push(e.substring(i)), n.join("");
    }
    compose(e) {
        return gx1(this, e);
    }
    inverse(e) {
        const n = [];
        let i = 0;
        for (const r of this.edits)n.push(new v6(Im.ofStartAndLength(r.replaceRange.start + i, r.newText.length), e.substring(r.replaceRange.start, r.replaceRange.endExclusive))), i += r.newText.length - r.replaceRange.length;
        return new jsn(n);
    }
    getNewTextRanges() {
        const e = [];
        let n = 0;
        for (const i of this.edits)e.push(Im.ofStartAndLength(i.replaceRange.start + n, i.newText.length)), n += i.newText.length - i.replaceRange.length;
        return e;
    }
    get isEmpty() {
        return this.edits.length === 0;
    }
    tryRebase(e, n) {
        const i = [];
        let r = 0, s = 0, o = 0;
        for(; s < this.edits.length || r < e.edits.length;){
            const a = e.edits[r], l = this.edits[s];
            if (l) if (!a) i.push(new v6(l.replaceRange.delta(o), l.newText)), s++;
            else if (l.replaceRange.intersectsOrTouches(a.replaceRange)) {
                if (s++, n) return;
            } else l.replaceRange.start < a.replaceRange.start ? (i.push(new v6(l.replaceRange.delta(o), l.newText)), s++) : (r++, o += a.newText.length - a.replaceRange.length);
            else break;
        }
        return new jsn(i);
    }
    applyToOffset(e) {
        let n = 0;
        for (const i of this.edits)if (i.replaceRange.start <= e) {
            if (e < i.replaceRange.endExclusive) return i.replaceRange.start + n;
            n += i.newText.length - i.replaceRange.length;
        } else break;
        return e + n;
    }
    applyToOffsetRange(e) {
        return new Im(this.applyToOffset(e.start), this.applyToOffset(e.endExclusive));
    }
    applyInverseToOffset(e) {
        let n = 0;
        for (const i of this.edits){
            const r = i.newText.length;
            if (i.replaceRange.start <= e - n) {
                if (e - n < i.replaceRange.start + r) return i.replaceRange.start;
                n += r - i.replaceRange.length;
            } else break;
        }
        return e - n;
    }
    equals(e) {
        if (this.edits.length !== e.edits.length) return !1;
        for(let n = 0; n < this.edits.length; n++)if (!this.edits[n].equals(e.edits[n])) return !1;
        return !0;
    }
}, RWr.empty = new RWr([]), Ist = RWr, v6 = class wXs {
    constructor(e, n){
        this.replaceRange = e, this.newText = n;
    }
    static fromJson(e) {
        return new wXs(Im.ofStartAndLength(e.pos, e.len), e.txt);
    }
    static insert(e, n) {
        return new wXs(Im.emptyAt(e), n);
    }
    static replace(e, n) {
        return new wXs(e, n);
    }
    toString() {
        return `${this.replaceRange} -> "${this.newText}"`;
    }
    get isEmpty() {
        return this.newText.length === 0 && this.replaceRange.length === 0;
    }
    apply(e) {
        return e.substring(0, this.replaceRange.start) + this.newText + e.substring(this.replaceRange.endExclusive);
    }
    getRangeAfterApply() {
        return new Im(this.replaceRange.start, this.replaceRange.start + this.newText.length);
    }
    equals(e) {
        return this.replaceRange.equals(e.replaceRange) && this.newText === e.newText;
    }
};

}
