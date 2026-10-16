import { rdn } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { Im, W3 } from "./offsetRange.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { N5, WAe } from "./textLength.js";
import { E } from "./tslib.es6.js";
var Ffn;
export { Ffn };
var __wakaru_TWo_initialized = false;
export function TWo() {
if (__wakaru_TWo_initialized) return;
__wakaru_TWo_initialized = true;
"use strict";
E(), p4(), W3(), jc(), Qs(), WAe(), Ffn = class {
    constructor(t){
        this.text = t, this.lineStartOffsetByLineIdx = [], this.lineEndOffsetByLineIdx = [], this.lineStartOffsetByLineIdx.push(0);
        for(let e = 0; e < t.length; e++)t.charAt(e) === `
` && (this.lineStartOffsetByLineIdx.push(e + 1), e > 0 && t.charAt(e - 1) === "\r" ? this.lineEndOffsetByLineIdx.push(e - 1) : this.lineEndOffsetByLineIdx.push(e));
        this.lineEndOffsetByLineIdx.push(t.length);
    }
    getOffset(t) {
        const e = this._validatePosition(t);
        return this.lineStartOffsetByLineIdx[e.lineNumber - 1] + e.column - 1;
    }
    _validatePosition(t) {
        if (t.lineNumber < 1) return new er(1, 1);
        const e = this.textLength.lineCount + 1;
        if (t.lineNumber > e) {
            const i = this.getLineLength(e);
            return new er(e, i + 1);
        }
        if (t.column < 1) return new er(t.lineNumber, 1);
        const n = this.getLineLength(t.lineNumber);
        return t.column - 1 > n ? new er(t.lineNumber, n + 1) : t;
    }
    getOffsetRange(t) {
        return new Im(this.getOffset(t.getStartPosition()), this.getOffset(t.getEndPosition()));
    }
    getPosition(t) {
        const e = rdn(this.lineStartOffsetByLineIdx, (r)=>r <= t), n = e + 1, i = t - this.lineStartOffsetByLineIdx[e] + 1;
        return new er(n, i);
    }
    getRange(t) {
        return qt.fromPositions(this.getPosition(t.start), this.getPosition(t.endExclusive));
    }
    getTextLength(t) {
        return N5.ofRange(this.getRange(t));
    }
    get textLength() {
        const t = this.lineStartOffsetByLineIdx.length - 1;
        return new N5(t, this.text.length - this.lineStartOffsetByLineIdx[t]);
    }
    getLineLength(t) {
        return this.lineEndOffsetByLineIdx[t - 1] - this.lineStartOffsetByLineIdx[t - 1];
    }
};

}
