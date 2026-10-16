import { Fa, ww } from "./Iwo.js";
import { bo } from "./arrays.js";
import { RQ, byt } from "./lineDecorations.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { LQ, lhe, u2 } from "./textEdit.js";
import { E } from "./tslib.es6.js";
var iCn, yyi, xWr;
export { iCn, xWr, yyi };
var __wakaru_AWr_initialized = false;
export function AWr() {
if (__wakaru_AWr_initialized) return;
__wakaru_AWr_initialized = true;
"use strict";
E(), bo(), Fa(), jc(), Qs(), LQ(), byt(), iCn = class {
    constructor(t, e){
        this.lineNumber = t, this.parts = e;
    }
    equals(t) {
        return this.lineNumber === t.lineNumber && this.parts.length === t.parts.length && this.parts.every((e, n)=>e.equals(t.parts[n]));
    }
    render(t, e = !1) {
        return new lhe([
            ...this.parts.map((n)=>new u2(qt.fromPositions(new er(this.lineNumber, n.column)), e ? `[${n.lines.map((i)=>i.line).join(`
`)}]` : n.lines.map((i)=>i.line).join(`
`)))
        ]).applyToString(t);
    }
    renderForScreenReader(t) {
        if (this.parts.length === 0) return "";
        const e = this.parts[this.parts.length - 1], n = t.substr(0, e.column - 1);
        return new lhe([
            ...this.parts.map((r)=>new u2(qt.fromPositions(new er(1, r.column)), r.lines.map((s)=>s.line).join(`
`)))
        ]).applyToString(n).substring(this.parts[0].column - 1);
    }
    isEmpty() {
        return this.parts.every((t)=>t.lines.length === 0);
    }
    get lineCount() {
        return 1 + this.parts.reduce((t, e)=>t + e.lines.length - 1, 0);
    }
}, yyi = class {
    constructor(t, e, n, i = []){
        this.column = t, this.text = e, this.preview = n, this._inlineDecorations = i, this.lines = ww(this.text).map((r, s)=>({
                line: r,
                lineDecorations: RQ.filter(this._inlineDecorations, s + 1, 1, r.length + 1)
            }));
    }
    equals(t) {
        return this.column === t.column && this.lines.length === t.lines.length && this.lines.every((e, n)=>e.line === t.lines[n].line && RQ.equalsArr(e.lineDecorations, t.lines[n].lineDecorations));
    }
}, xWr = class {
    constructor(t, e, n, i = 0){
        this.lineNumber = t, this.columnRange = e, this.text = n, this.additionalReservedLineCount = i, this.parts = [
            new yyi(this.columnRange.endColumnExclusive, this.text, !1)
        ], this.newLines = ww(this.text);
    }
    renderForScreenReader(t) {
        return this.newLines.join(`
`);
    }
    render(t, e = !1) {
        const n = this.columnRange.toRange(this.lineNumber);
        return e ? new lhe([
            new u2(qt.fromPositions(n.getStartPosition()), "("),
            new u2(qt.fromPositions(n.getEndPosition()), `)[${this.newLines.join(`
`)}]`)
        ]).applyToString(t) : new lhe([
            new u2(n, this.newLines.join(`
`))
        ]).applyToString(t);
    }
    get lineCount() {
        return this.newLines.length;
    }
    isEmpty() {
        return this.parts.every((t)=>t.lines.length === 0);
    }
    equals(t) {
        return this.lineNumber === t.lineNumber && this.columnRange.equals(t.columnRange) && this.newLines.length === t.newLines.length && this.newLines.every((e, n)=>e === t.newLines[n]) && this.additionalReservedLineCount === t.additionalReservedLineCount;
    }
};

}
