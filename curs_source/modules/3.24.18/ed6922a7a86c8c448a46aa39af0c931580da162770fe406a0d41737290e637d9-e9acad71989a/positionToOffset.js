import { nNt } from "./HVr.js";
import { FT } from "./arraysFind.js";
import { Mh, uR } from "./offsetRange.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { $ge, FP } from "./textLength.js";
import { x } from "./tslib.es6.js";
var aFt;
export { aFt };
var __wakaru_Sts_initialized = false;
export function Sts() {
if (__wakaru_Sts_initialized) return;
__wakaru_Sts_initialized = true;
"use strict";
x(), FT(), uR(), ya(), qi(), $ge(), aFt = class {
    constructor(e){
        this.text = e, this.lineStartOffsetByLineIdx = [], this.lineEndOffsetByLineIdx = [], this.lineStartOffsetByLineIdx.push(0);
        for(let t = 0; t < e.length; t++)e.charAt(t) === `
` && (this.lineStartOffsetByLineIdx.push(t + 1), t > 0 && e.charAt(t - 1) === "\r" ? this.lineEndOffsetByLineIdx.push(t - 1) : this.lineEndOffsetByLineIdx.push(t));
        this.lineEndOffsetByLineIdx.push(e.length);
    }
    getOffset(e) {
        const t = this._validatePosition(e);
        return this.lineStartOffsetByLineIdx[t.lineNumber - 1] + t.column - 1;
    }
    _validatePosition(e) {
        if (e.lineNumber < 1) return new Yn(1, 1);
        const t = this.textLength.lineCount + 1;
        if (e.lineNumber > t) {
            const i = this.getLineLength(t);
            return new Yn(t, i + 1);
        }
        if (e.column < 1) return new Yn(e.lineNumber, 1);
        const n = this.getLineLength(e.lineNumber);
        return e.column - 1 > n ? new Yn(e.lineNumber, n + 1) : e;
    }
    getOffsetRange(e) {
        return new Mh(this.getOffset(e.getStartPosition()), this.getOffset(e.getEndPosition()));
    }
    getPosition(e) {
        const t = nNt(this.lineStartOffsetByLineIdx, (r)=>r <= e), n = t + 1, i = e - this.lineStartOffsetByLineIdx[t] + 1;
        return new Yn(n, i);
    }
    getRange(e) {
        return dt.fromPositions(this.getPosition(e.start), this.getPosition(e.endExclusive));
    }
    getTextLength(e) {
        return FP.ofRange(this.getRange(e));
    }
    get textLength() {
        const e = this.lineStartOffsetByLineIdx.length - 1;
        return new FP(e, this.text.length - this.lineStartOffsetByLineIdx[e]);
    }
    getLineLength(e) {
        return this.lineEndOffsetByLineIdx[e - 1] - this.lineStartOffsetByLineIdx[e - 1];
    }
};

}
