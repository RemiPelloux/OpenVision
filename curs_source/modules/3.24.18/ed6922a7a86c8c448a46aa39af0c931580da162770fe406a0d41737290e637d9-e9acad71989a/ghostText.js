import { Ps, ry } from "./HVr.js";
import { dr } from "./arrays.js";
import { Wze, gW } from "./lineDecorations.js";
import { Yn, ya } from "./position.js";
import { dt, qi } from "./range.js";
import { CJ, PE, yW } from "./textEdit.js";
import { x } from "./tslib.es6.js";
var _7t, fRn, s6i;
export { _7t, fRn, s6i };
var __wakaru_o6i_initialized = false;
export function o6i() {
if (__wakaru_o6i_initialized) return;
__wakaru_o6i_initialized = true;
"use strict";
x(), dr(), Ps(), ya(), qi(), yW(), Wze(), _7t = class {
    constructor(e, t){
        this.lineNumber = e, this.parts = t;
    }
    equals(e) {
        return this.lineNumber === e.lineNumber && this.parts.length === e.parts.length && this.parts.every((t, n)=>t.equals(e.parts[n]));
    }
    render(e, t = !1) {
        return new CJ([
            ...this.parts.map((n)=>new PE(dt.fromPositions(new Yn(this.lineNumber, n.column)), t ? `[${n.lines.map((i)=>i.line).join(`
`)}]` : n.lines.map((i)=>i.line).join(`
`)))
        ]).applyToString(e);
    }
    renderForScreenReader(e) {
        if (this.parts.length === 0) return "";
        const t = this.parts[this.parts.length - 1], n = e.substr(0, t.column - 1);
        return new CJ([
            ...this.parts.map((r)=>new PE(dt.fromPositions(new Yn(1, r.column)), r.lines.map((s)=>s.line).join(`
`)))
        ]).applyToString(n).substring(this.parts[0].column - 1);
    }
    isEmpty() {
        return this.parts.every((e)=>e.lines.length === 0);
    }
    get lineCount() {
        return 1 + this.parts.reduce((e, t)=>e + t.lines.length - 1, 0);
    }
}, fRn = class {
    constructor(e, t, n, i = []){
        this.column = e, this.text = t, this.preview = n, this._inlineDecorations = i, this.lines = ry(this.text).map((r, s)=>({
                line: r,
                lineDecorations: gW.filter(this._inlineDecorations, s + 1, 1, r.length + 1)
            }));
    }
    equals(e) {
        return this.column === e.column && this.lines.length === e.lines.length && this.lines.every((t, n)=>t.line === e.lines[n].line && gW.equalsArr(t.lineDecorations, e.lines[n].lineDecorations));
    }
}, s6i = class {
    constructor(e, t, n, i = 0){
        this.lineNumber = e, this.columnRange = t, this.text = n, this.additionalReservedLineCount = i, this.parts = [
            new fRn(this.columnRange.endColumnExclusive, this.text, !1)
        ], this.newLines = ry(this.text);
    }
    renderForScreenReader(e) {
        return this.newLines.join(`
`);
    }
    render(e, t = !1) {
        const n = this.columnRange.toRange(this.lineNumber);
        return t ? new CJ([
            new PE(dt.fromPositions(n.getStartPosition()), "("),
            new PE(dt.fromPositions(n.getEndPosition()), `)[${this.newLines.join(`
`)}]`)
        ]).applyToString(e) : new CJ([
            new PE(n, this.newLines.join(`
`))
        ]).applyToString(e);
    }
    get lineCount() {
        return this.newLines.length;
    }
    isEmpty() {
        return this.parts.every((e)=>e.lines.length === 0);
    }
    equals(e) {
        return this.lineNumber === e.lineNumber && this.columnRange.equals(e.columnRange) && this.newLines.length === e.newLines.length && this.newLines.every((t, n)=>t === e.newLines[n]) && this.additionalReservedLineCount === e.additionalReservedLineCount;
    }
};

}
