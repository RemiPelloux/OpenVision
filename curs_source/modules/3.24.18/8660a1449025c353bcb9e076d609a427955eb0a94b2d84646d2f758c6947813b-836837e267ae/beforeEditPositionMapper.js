import { Jbt } from "./eolCounter.js";
import { Ftt } from "./length.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { Dri, L5, ND, Pri, efn, hwe, tfn } from "./ze.js";
var tyt, UBd, jBd;
export { UBd, jBd, tyt };
var __wakaru_a0r_initialized = false;
export function a0r() {
if (__wakaru_a0r_initialized) return;
__wakaru_a0r_initialized = true;
"use strict";
E(), Qs(), Jbt(), Ftt(), tyt = class TAb {
    constructor(e, n, i){
        this.startOffset = e, this.endOffset = n, this.newLength = i;
    }
    static fromModelContentChanges(e) {
        return e.map((i)=>{
            const r = qt.lift(i.range), [s, , o] = Pri(i);
            return new TAb(tfn(r.getStartPosition()), tfn(r.getEndPosition()), L5(s, o));
        }).reverse();
    }
    toString() {
        return `[${hwe(this.startOffset)}...${hwe(this.endOffset)}) -> ${hwe(this.newLength)}`;
    }
}, UBd = class {
    constructor(t){
        this.nextEditIdx = 0, this.deltaOldToNewLineCount = 0, this.deltaOldToNewColumnCount = 0, this.deltaLineIdxInOld = -1, this.edits = t.map((e)=>jBd.from(e));
    }
    getOffsetBeforeChange(t) {
        return this.adjustNextEdit(t), this.translateCurToOld(t);
    }
    getDistanceToNextChange(t) {
        this.adjustNextEdit(t);
        const e = this.edits[this.nextEditIdx], n = e ? this.translateOldToCur(e.offsetObj) : null;
        return n === null ? null : Dri(t, n);
    }
    translateOldToCur(t) {
        return t.lineCount === this.deltaLineIdxInOld ? L5(t.lineCount + this.deltaOldToNewLineCount, t.columnCount + this.deltaOldToNewColumnCount) : L5(t.lineCount + this.deltaOldToNewLineCount, t.columnCount);
    }
    translateCurToOld(t) {
        const e = hwe(t);
        return e.lineCount - this.deltaOldToNewLineCount === this.deltaLineIdxInOld ? L5(e.lineCount - this.deltaOldToNewLineCount, e.columnCount - this.deltaOldToNewColumnCount) : L5(e.lineCount - this.deltaOldToNewLineCount, e.columnCount);
    }
    adjustNextEdit(t) {
        for(; this.nextEditIdx < this.edits.length;){
            const e = this.edits[this.nextEditIdx], n = this.translateOldToCur(e.endOffsetAfterObj);
            if (efn(n, t)) {
                this.nextEditIdx++;
                const i = hwe(n), r = hwe(this.translateOldToCur(e.endOffsetBeforeObj)), s = i.lineCount - r.lineCount;
                this.deltaOldToNewLineCount += s;
                const o = this.deltaLineIdxInOld === e.endOffsetBeforeObj.lineCount ? this.deltaOldToNewColumnCount : 0, a = i.columnCount - r.columnCount;
                this.deltaOldToNewColumnCount = o + a, this.deltaLineIdxInOld = e.endOffsetBeforeObj.lineCount;
            } else break;
        }
    }
}, jBd = class EAb {
    static from(e) {
        return new EAb(e.startOffset, e.endOffset, e.newLength);
    }
    constructor(e, n, i){
        this.endOffsetBeforeObj = hwe(n), this.endOffsetAfterObj = hwe(ND(e, i)), this.offsetObj = hwe(e);
    }
};

}
