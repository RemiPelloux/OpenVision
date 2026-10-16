import { idn, rdn, y_y } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { Cw } from "./charCode.js";
import { Im, W3 } from "./offsetRange.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { xTr } from "./utils_14.js";
import { Eqd, Iqd, Tqd, ovn } from "./ze.js";
var roi, xqd;
export { roi, xqd };
var __wakaru_Aqd_initialized = false;
export function Aqd() {
if (__wakaru_Aqd_initialized) return;
__wakaru_Aqd_initialized = true;
"use strict";
E(), p4(), Cw(), W3(), jc(), Qs(), xTr(), roi = class {
    constructor(t, e, n){
        this.lines = t, this.range = e, this.considerWhitespaceChanges = n, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
        for(let i = this.range.startLineNumber; i <= this.range.endLineNumber; i++){
            let r = t[i - 1], s = 0;
            i === this.range.startLineNumber && this.range.startColumn > 1 && (s = this.range.startColumn - 1, r = r.substring(s)), this.lineStartOffsets.push(s);
            let o = 0;
            if (!n) {
                const l = r.trimStart();
                o = r.length - l.length, r = l.trimEnd();
            }
            this.trimmedWsLengthsByLineIdx.push(o);
            const a = i === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - s - o, r.length) : r.length;
            for(let l = 0; l < a; l++)this.elements.push(r.charCodeAt(l));
            i < this.range.endLineNumber && (this.elements.push(10), this.firstElementOffsetByLineIdx.push(this.elements.length));
        }
    }
    toString() {
        return `Slice: "${this.text}"`;
    }
    get text() {
        return this.getText(new Im(0, this.length));
    }
    getText(t) {
        return this.elements.slice(t.start, t.endExclusive).map((e)=>String.fromCharCode(e)).join("");
    }
    getElement(t) {
        return this.elements[t];
    }
    get length() {
        return this.elements.length;
    }
    getBoundaryScore(t) {
        const e = Iqd(t > 0 ? this.elements[t - 1] : -1), n = Iqd(t < this.elements.length ? this.elements[t] : -1);
        if (e === 7 && n === 8) return 0;
        if (e === 8) return 150;
        let i = 0;
        return e !== n && (i += 10, e === 0 && n === 1 && (i += 1)), i += Eqd(e), i += Eqd(n), i;
    }
    translateOffset(t, e = "right") {
        const n = rdn(this.firstElementOffsetByLineIdx, (r)=>r <= t), i = t - this.firstElementOffsetByLineIdx[n];
        return new er(this.range.startLineNumber + n, 1 + this.lineStartOffsets[n] + i + (i === 0 && e === "left" ? 0 : this.trimmedWsLengthsByLineIdx[n]));
    }
    translateRange(t) {
        const e = this.translateOffset(t.start, "right"), n = this.translateOffset(t.endExclusive, "left");
        return n.isBefore(e) ? qt.fromPositions(n, n) : qt.fromPositions(e, n);
    }
    findWordContaining(t) {
        if (t < 0 || t >= this.elements.length || !ovn(this.elements[t])) return;
        let e = t;
        for(; e > 0 && ovn(this.elements[e - 1]);)e--;
        let n = t;
        for(; n < this.elements.length && ovn(this.elements[n]);)n++;
        return new Im(e, n);
    }
    findSubWordContaining(t) {
        if (t < 0 || t >= this.elements.length || !ovn(this.elements[t])) return;
        let e = t;
        for(; e > 0 && ovn(this.elements[e - 1]) && !Tqd(this.elements[e]);)e--;
        let n = t;
        for(; n < this.elements.length && ovn(this.elements[n]) && !Tqd(this.elements[n]);)n++;
        return new Im(e, n);
    }
    countLinesIn(t) {
        return this.translateOffset(t.endExclusive).lineNumber - this.translateOffset(t.start).lineNumber;
    }
    isStronglyEqual(t, e) {
        return this.elements[t] === this.elements[e];
    }
    extendToFullLines(t) {
        const e = idn(this.firstElementOffsetByLineIdx, (i)=>i <= t.start) ?? 0, n = y_y(this.firstElementOffsetByLineIdx, (i)=>t.endExclusive <= i) ?? this.elements.length;
        return new Im(e, n);
    }
}, xqd = {
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
