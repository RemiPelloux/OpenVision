import { Plg, nNt, tNt } from "./HVr.js";
import { FT } from "./arraysFind.js";
import { qy } from "./charCode.js";
import { Mh, uR } from "./offsetRange.js";
import { Yn, ya } from "./position.js";
import { DFt, J8c, Q8c, Z8c } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { eyi } from "./utils_14.js";
var Avn, e7c;
export { Avn, e7c };
var __wakaru_t7c_initialized = false;
export function t7c() {
if (__wakaru_t7c_initialized) return;
__wakaru_t7c_initialized = true;
"use strict";
x(), FT(), qy(), uR(), ya(), qi(), eyi(), Avn = class {
    constructor(e, t, n){
        this.lines = e, this.range = t, this.considerWhitespaceChanges = n, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
        for(let i = this.range.startLineNumber; i <= this.range.endLineNumber; i++){
            let r = e[i - 1], s = 0;
            i === this.range.startLineNumber && this.range.startColumn > 1 && (s = this.range.startColumn - 1, r = r.substring(s)), this.lineStartOffsets.push(s);
            let o = 0;
            if (!n) {
                const c = r.trimStart();
                o = r.length - c.length, r = c.trimEnd();
            }
            this.trimmedWsLengthsByLineIdx.push(o);
            const a = i === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - s - o, r.length) : r.length;
            for(let c = 0; c < a; c++)this.elements.push(r.charCodeAt(c));
            i < this.range.endLineNumber && (this.elements.push(10), this.firstElementOffsetByLineIdx.push(this.elements.length));
        }
    }
    toString() {
        return `Slice: "${this.text}"`;
    }
    get text() {
        return this.getText(new Mh(0, this.length));
    }
    getText(e) {
        return this.elements.slice(e.start, e.endExclusive).map((t)=>String.fromCharCode(t)).join("");
    }
    getElement(e) {
        return this.elements[e];
    }
    get length() {
        return this.elements.length;
    }
    getBoundaryScore(e) {
        const t = J8c(e > 0 ? this.elements[e - 1] : -1), n = J8c(e < this.elements.length ? this.elements[e] : -1);
        if (t === 7 && n === 8) return 0;
        if (t === 8) return 150;
        let i = 0;
        return t !== n && (i += 10, t === 0 && n === 1 && (i += 1)), i += Q8c(t), i += Q8c(n), i;
    }
    translateOffset(e, t = "right") {
        const n = nNt(this.firstElementOffsetByLineIdx, (r)=>r <= e), i = e - this.firstElementOffsetByLineIdx[n];
        return new Yn(this.range.startLineNumber + n, 1 + this.lineStartOffsets[n] + i + (i === 0 && t === "left" ? 0 : this.trimmedWsLengthsByLineIdx[n]));
    }
    translateRange(e) {
        const t = this.translateOffset(e.start, "right"), n = this.translateOffset(e.endExclusive, "left");
        return n.isBefore(t) ? dt.fromPositions(n, n) : dt.fromPositions(t, n);
    }
    findWordContaining(e) {
        if (e < 0 || e >= this.elements.length || !DFt(this.elements[e])) return;
        let t = e;
        for(; t > 0 && DFt(this.elements[t - 1]);)t--;
        let n = e;
        for(; n < this.elements.length && DFt(this.elements[n]);)n++;
        return new Mh(t, n);
    }
    findSubWordContaining(e) {
        if (e < 0 || e >= this.elements.length || !DFt(this.elements[e])) return;
        let t = e;
        for(; t > 0 && DFt(this.elements[t - 1]) && !Z8c(this.elements[t]);)t--;
        let n = e;
        for(; n < this.elements.length && DFt(this.elements[n]) && !Z8c(this.elements[n]);)n++;
        return new Mh(t, n);
    }
    countLinesIn(e) {
        return this.translateOffset(e.endExclusive).lineNumber - this.translateOffset(e.start).lineNumber;
    }
    isStronglyEqual(e, t) {
        return this.elements[e] === this.elements[t];
    }
    extendToFullLines(e) {
        const t = tNt(this.firstElementOffsetByLineIdx, (i)=>i <= e.start) ?? 0, n = Plg(this.firstElementOffsetByLineIdx, (i)=>e.endExclusive <= i) ?? this.elements.length;
        return new Mh(t, n);
    }
}, e7c = {
    0: 0,
    1: 0,
    2: 0,
    3: 10,
    4: 2,
    5: 30,
    6: 3,
    7: 10,
    8: 10
};

}
