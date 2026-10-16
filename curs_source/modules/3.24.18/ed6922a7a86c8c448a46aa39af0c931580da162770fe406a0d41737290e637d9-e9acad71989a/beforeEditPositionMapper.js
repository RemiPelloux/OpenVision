import { kze } from "./eolCounter.js";
import { WBe } from "./length.js";
import { BP, Qgn, Sle, Xgn, hOt, pA, pOt } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var Cze, uFc, dFc;
export { Cze, dFc, uFc };
var __wakaru_wvi_initialized = false;
export function wvi() {
if (__wakaru_wvi_initialized) return;
__wakaru_wvi_initialized = true;
"use strict";
x(), qi(), kze(), WBe(), Cze = class ekm {
    constructor(t, n, i){
        this.startOffset = t, this.endOffset = n, this.newLength = i;
    }
    static fromModelContentChanges(t) {
        return t.map((i)=>{
            const r = dt.lift(i.range), [s, , o] = Xgn(i);
            return new ekm(pOt(r.getStartPosition()), pOt(r.getEndPosition()), BP(s, o));
        }).reverse();
    }
    toString() {
        return `[${Sle(this.startOffset)}...${Sle(this.endOffset)}) -> ${Sle(this.newLength)}`;
    }
}, uFc = class {
    constructor(e){
        this.nextEditIdx = 0, this.deltaOldToNewLineCount = 0, this.deltaOldToNewColumnCount = 0, this.deltaLineIdxInOld = -1, this.edits = e.map((t)=>dFc.from(t));
    }
    getOffsetBeforeChange(e) {
        return this.adjustNextEdit(e), this.translateCurToOld(e);
    }
    getDistanceToNextChange(e) {
        this.adjustNextEdit(e);
        const t = this.edits[this.nextEditIdx], n = t ? this.translateOldToCur(t.offsetObj) : null;
        return n === null ? null : Qgn(e, n);
    }
    translateOldToCur(e) {
        return e.lineCount === this.deltaLineIdxInOld ? BP(e.lineCount + this.deltaOldToNewLineCount, e.columnCount + this.deltaOldToNewColumnCount) : BP(e.lineCount + this.deltaOldToNewLineCount, e.columnCount);
    }
    translateCurToOld(e) {
        const t = Sle(e);
        return t.lineCount - this.deltaOldToNewLineCount === this.deltaLineIdxInOld ? BP(t.lineCount - this.deltaOldToNewLineCount, t.columnCount - this.deltaOldToNewColumnCount) : BP(t.lineCount - this.deltaOldToNewLineCount, t.columnCount);
    }
    adjustNextEdit(e) {
        for(; this.nextEditIdx < this.edits.length;){
            const t = this.edits[this.nextEditIdx], n = this.translateOldToCur(t.endOffsetAfterObj);
            if (hOt(n, e)) {
                this.nextEditIdx++;
                const i = Sle(n), r = Sle(this.translateOldToCur(t.endOffsetBeforeObj)), s = i.lineCount - r.lineCount;
                this.deltaOldToNewLineCount += s;
                const o = this.deltaLineIdxInOld === t.endOffsetBeforeObj.lineCount ? this.deltaOldToNewColumnCount : 0, a = i.columnCount - r.columnCount;
                this.deltaOldToNewColumnCount = o + a, this.deltaLineIdxInOld = t.endOffsetBeforeObj.lineCount;
            } else break;
        }
    }
}, dFc = class tkm {
    static from(t) {
        return new tkm(t.startOffset, t.endOffset, t.newLength);
    }
    constructor(t, n, i){
        this.endOffsetBeforeObj = Sle(n), this.endOffsetAfterObj = Sle(pA(t, i)), this.offsetObj = Sle(t);
    }
};

}
