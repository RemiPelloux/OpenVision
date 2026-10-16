import { Ei, xh } from "./Iwo.js";
import { bo } from "./arrays.js";
import { YE } from "./assert.js";
import { DD, wd } from "./lineRange.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { LQ, u2 } from "./textEdit.js";
import { E } from "./tslib.es6.js";
import { QGd, evn } from "./ze.js";
var ywe, I7, ane;
export { I7, ane, ywe };
var __wakaru_Swe_initialized = false;
export function Swe() {
if (__wakaru_Swe_initialized) return;
__wakaru_Swe_initialized = true;
"use strict";
E(), bo(), YE(), Ei(), DD(), jc(), Qs(), LQ(), ywe = class Jjn {
    static inverse(e, n, i) {
        const r = [];
        let s = 1, o = 1;
        for (const l of e){
            const c = new Jjn(new wd(s, l.original.startLineNumber), new wd(o, l.modified.startLineNumber));
            c.modified.isEmpty || r.push(c), s = l.original.endLineNumberExclusive, o = l.modified.endLineNumberExclusive;
        }
        const a = new Jjn(new wd(s, n + 1), new wd(o, i + 1));
        return a.modified.isEmpty || r.push(a), r;
    }
    static clip(e, n, i) {
        const r = [];
        for (const s of e){
            const o = s.original.intersect(n), a = s.modified.intersect(i);
            o && !o.isEmpty && a && !a.isEmpty && r.push(new Jjn(o, a));
        }
        return r;
    }
    constructor(e, n){
        this.original = e, this.modified = n;
    }
    toString() {
        return `{${this.original.toString()}->${this.modified.toString()}}`;
    }
    flip() {
        return new Jjn(this.modified, this.original);
    }
    join(e) {
        return new Jjn(this.original.join(e.original), this.modified.join(e.modified));
    }
    get changedLineCount() {
        return Math.max(this.original.length, this.modified.length);
    }
    toRangeMapping() {
        const e = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
        if (e && n) return new ane(e, n);
        if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
            if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) throw new xh("not a valid diff");
            return new ane(new qt(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new qt(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        } else return new ane(new qt(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new qt(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
    }
    toRangeMapping2(e, n) {
        if (QGd(this.original.endLineNumberExclusive, e) && QGd(this.modified.endLineNumberExclusive, n)) return new ane(new qt(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new qt(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        if (!this.original.isEmpty && !this.modified.isEmpty) return new ane(qt.fromPositions(new er(this.original.startLineNumber, 1), evn(new er(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), e)), qt.fromPositions(new er(this.modified.startLineNumber, 1), evn(new er(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new ane(qt.fromPositions(evn(new er(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), e), evn(new er(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), e)), qt.fromPositions(evn(new er(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), evn(new er(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        throw new xh;
    }
}, I7 = class nXs extends ywe {
    static fromRangeMappings(e) {
        const n = wd.join(e.map((r)=>wd.fromRangeInclusive(r.originalRange))), i = wd.join(e.map((r)=>wd.fromRangeInclusive(r.modifiedRange)));
        return new nXs(n, i, e);
    }
    constructor(e, n, i){
        super(e, n), this.innerChanges = i;
    }
    flip() {
        return new nXs(this.modified, this.original, this.innerChanges?.map((e)=>e.flip()));
    }
    withInnerChangesFromLineRanges() {
        return new nXs(this.original, this.modified, [
            this.toRangeMapping()
        ]);
    }
}, ane = class e$n {
    static fromEdit(e) {
        const n = e.getNewRanges();
        return e.edits.map((r, s)=>new e$n(r.range, n[s]));
    }
    static fromEditJoin(e) {
        const n = e.getNewRanges(), i = e.edits.map((r, s)=>new e$n(r.range, n[s]));
        return e$n.join(i);
    }
    static join(e) {
        if (e.length === 0) throw new xh("Cannot join an empty list of range mappings");
        let n = e[0];
        for(let i = 1; i < e.length; i++)n = n.join(e[i]);
        return n;
    }
    static assertSorted(e) {
        for(let n = 1; n < e.length; n++){
            const i = e[n - 1], r = e[n];
            if (!(i.originalRange.getEndPosition().isBeforeOrEqual(r.originalRange.getStartPosition()) && i.modifiedRange.getEndPosition().isBeforeOrEqual(r.modifiedRange.getStartPosition()))) throw new xh("Range mappings must be sorted");
        }
    }
    constructor(e, n){
        this.originalRange = e, this.modifiedRange = n;
    }
    toString() {
        return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
    }
    flip() {
        return new e$n(this.modifiedRange, this.originalRange);
    }
    toTextEdit(e) {
        const n = e.getValueOfRange(this.modifiedRange);
        return new u2(this.originalRange, n);
    }
    join(e) {
        return new e$n(this.originalRange.plusRange(e.originalRange), this.modifiedRange.plusRange(e.modifiedRange));
    }
};

}
