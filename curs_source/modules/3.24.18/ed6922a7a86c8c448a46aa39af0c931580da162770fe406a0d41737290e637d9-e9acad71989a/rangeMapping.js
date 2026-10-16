import { Zu, si } from "./HVr.js";
import { dr } from "./arrays.js";
import { C0 } from "./assert.js";
import { Vl, hA } from "./lineRange.js";
import { Yn, ya } from "./position.js";
import { C8c, CFt } from "./qIc.js";
import { dt, qi } from "./range.js";
import { PE, yW } from "./textEdit.js";
import { x } from "./tslib.es6.js";
var Mle, C3, KV;
export { C3, KV, Mle };
var __wakaru_Ple_initialized = false;
export function Ple() {
if (__wakaru_Ple_initialized) return;
__wakaru_Ple_initialized = true;
"use strict";
x(), dr(), C0(), si(), hA(), ya(), qi(), yW(), Mle = class Iin {
    static inverse(t, n, i) {
        const r = [];
        let s = 1, o = 1;
        for (const c of t){
            const l = new Iin(new Vl(s, c.original.startLineNumber), new Vl(o, c.modified.startLineNumber));
            l.modified.isEmpty || r.push(l), s = c.original.endLineNumberExclusive, o = c.modified.endLineNumberExclusive;
        }
        const a = new Iin(new Vl(s, n + 1), new Vl(o, i + 1));
        return a.modified.isEmpty || r.push(a), r;
    }
    static clip(t, n, i) {
        const r = [];
        for (const s of t){
            const o = s.original.intersect(n), a = s.modified.intersect(i);
            o && !o.isEmpty && a && !a.isEmpty && r.push(new Iin(o, a));
        }
        return r;
    }
    constructor(t, n){
        this.original = t, this.modified = n;
    }
    toString() {
        return `{${this.original.toString()}->${this.modified.toString()}}`;
    }
    flip() {
        return new Iin(this.modified, this.original);
    }
    join(t) {
        return new Iin(this.original.join(t.original), this.modified.join(t.modified));
    }
    get changedLineCount() {
        return Math.max(this.original.length, this.modified.length);
    }
    toRangeMapping() {
        const t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
        if (t && n) return new KV(t, n);
        if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
            if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) throw new Zu("not a valid diff");
            return new KV(new dt(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new dt(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        } else return new KV(new dt(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new dt(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
    }
    toRangeMapping2(t, n) {
        if (C8c(this.original.endLineNumberExclusive, t) && C8c(this.modified.endLineNumberExclusive, n)) return new KV(new dt(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new dt(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
        if (!this.original.isEmpty && !this.modified.isEmpty) return new KV(dt.fromPositions(new Yn(this.original.startLineNumber, 1), CFt(new Yn(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), dt.fromPositions(new Yn(this.modified.startLineNumber, 1), CFt(new Yn(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new KV(dt.fromPositions(CFt(new Yn(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), CFt(new Yn(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), dt.fromPositions(CFt(new Yn(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), CFt(new Yn(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
        throw new Zu;
    }
}, C3 = class g1r extends Mle {
    static fromRangeMappings(t) {
        const n = Vl.join(t.map((r)=>Vl.fromRangeInclusive(r.originalRange))), i = Vl.join(t.map((r)=>Vl.fromRangeInclusive(r.modifiedRange)));
        return new g1r(n, i, t);
    }
    constructor(t, n, i){
        super(t, n), this.innerChanges = i;
    }
    flip() {
        return new g1r(this.modified, this.original, this.innerChanges?.map((t)=>t.flip()));
    }
    withInnerChangesFromLineRanges() {
        return new g1r(this.original, this.modified, [
            this.toRangeMapping()
        ]);
    }
}, KV = class Ain {
    static fromEdit(t) {
        const n = t.getNewRanges();
        return t.edits.map((r, s)=>new Ain(r.range, n[s]));
    }
    static fromEditJoin(t) {
        const n = t.getNewRanges(), i = t.edits.map((r, s)=>new Ain(r.range, n[s]));
        return Ain.join(i);
    }
    static join(t) {
        if (t.length === 0) throw new Zu("Cannot join an empty list of range mappings");
        let n = t[0];
        for(let i = 1; i < t.length; i++)n = n.join(t[i]);
        return n;
    }
    static assertSorted(t) {
        for(let n = 1; n < t.length; n++){
            const i = t[n - 1], r = t[n];
            if (!(i.originalRange.getEndPosition().isBeforeOrEqual(r.originalRange.getStartPosition()) && i.modifiedRange.getEndPosition().isBeforeOrEqual(r.modifiedRange.getStartPosition()))) throw new Zu("Range mappings must be sorted");
        }
    }
    constructor(t, n){
        this.originalRange = t, this.modifiedRange = n;
    }
    toString() {
        return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
    }
    flip() {
        return new Ain(this.modifiedRange, this.originalRange);
    }
    toTextEdit(t) {
        const n = t.getValueOfRange(this.modifiedRange);
        return new PE(this.originalRange, n);
    }
    join(t) {
        return new Ain(this.originalRange.plusRange(t.originalRange), this.modifiedRange.plusRange(t.modifiedRange));
    }
};

}
