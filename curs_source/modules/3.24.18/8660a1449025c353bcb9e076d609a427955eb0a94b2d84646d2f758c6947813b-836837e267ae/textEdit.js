import { Ei, Fa, Ike, Zm, bdn, i$e, q0o, ww, xde, xh } from "./Iwo.js";
import { bo } from "./arrays.js";
import { YE } from "./assert.js";
import { er, jc } from "./position.js";
import { Ffn, TWo } from "./positionToOffset.js";
import { Qs, qt } from "./range.js";
import { N5, WAe } from "./textLength.js";
import { E } from "./tslib.es6.js";
import { hTr } from "./ze.js";
var lhe, u2, pTr, ZGd, eoi, Byt;
export { Byt, ZGd, eoi, lhe, pTr, u2 };
var __wakaru_LQ_initialized = false;
export function LQ() {
if (__wakaru_LQ_initialized) return;
__wakaru_LQ_initialized = true;
"use strict";
E(), bo(), YE(), Ei(), Fa(), jc(), TWo(), Qs(), WAe(), lhe = class Qjn {
    constructor(e){
        this.edits = e, xde(()=>i$e(e, (n, i)=>n.range.getEndPosition().isBeforeOrEqual(i.range.getStartPosition())));
    }
    static fromOffsetEdit(e, n) {
        const i = e.edits.map((r)=>new u2(n.getTransformer().getRange(r.replaceRange), r.newText));
        return new Qjn(i);
    }
    static single(e, n) {
        return new Qjn([
            new u2(e, n)
        ]);
    }
    static insert(e, n) {
        return new Qjn([
            new u2(qt.fromPositions(e, e), n)
        ]);
    }
    normalize() {
        const e = [];
        for (const n of this.edits)if (e.length > 0 && e[e.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
            const i = e[e.length - 1];
            e[e.length - 1] = new u2(i.range.plusRange(n.range), i.text + n.text);
        } else n.isEmpty || e.push(n);
        return new Qjn(e);
    }
    mapPosition(e) {
        let n = 0, i = 0, r = 0;
        for (const s of this.edits){
            const o = s.range.getStartPosition();
            if (e.isBeforeOrEqual(o)) break;
            const a = s.range.getEndPosition(), l = N5.ofText(s.text);
            if (e.isBefore(a)) {
                const c = new er(o.lineNumber + n, o.column + (o.lineNumber + n === i ? r : 0)), u = l.addToPosition(c);
                return hTr(c, u);
            }
            o.lineNumber + n !== i && (r = 0), n += l.lineCount - (s.range.endLineNumber - s.range.startLineNumber), l.lineCount === 0 ? a.lineNumber !== o.lineNumber ? r += l.columnCount - (a.column - 1) : r += l.columnCount - (a.column - o.column) : r = l.columnCount, i = a.lineNumber + n;
        }
        return new er(e.lineNumber + n, e.column + (e.lineNumber + n === i ? r : 0));
    }
    mapRange(e) {
        function n(o) {
            return o instanceof er ? o : o.getStartPosition();
        }
        function i(o) {
            return o instanceof er ? o : o.getEndPosition();
        }
        const r = n(this.mapPosition(e.getStartPosition())), s = i(this.mapPosition(e.getEndPosition()));
        return hTr(r, s);
    }
    inverseMapPosition(e, n) {
        return this.inverse(n).mapPosition(e);
    }
    inverseMapRange(e, n) {
        return this.inverse(n).mapRange(e);
    }
    apply(e) {
        let n = "", i = new er(1, 1);
        for (const s of this.edits){
            const o = s.range, a = o.getStartPosition(), l = o.getEndPosition(), c = hTr(i, a);
            c.isEmpty() || (n += e.getValueOfRange(c)), n += s.text, i = l;
        }
        const r = hTr(i, e.endPositionExclusive);
        return r.isEmpty() || (n += e.getValueOfRange(r)), n;
    }
    applyToString(e) {
        const n = new Byt(e);
        return this.apply(n);
    }
    inverse(e) {
        const n = this.getNewRanges();
        return new Qjn(this.edits.map((i, r)=>new u2(n[r], e.getValueOfRange(i.range))));
    }
    getNewRanges() {
        const e = [];
        let n = 0, i = 0, r = 0;
        for (const s of this.edits){
            const o = N5.ofText(s.text), a = er.lift({
                lineNumber: s.range.startLineNumber + i,
                column: s.range.startColumn + (s.range.startLineNumber === n ? r : 0)
            }), l = o.createRange(a);
            e.push(l), i = l.endLineNumber - s.range.endLineNumber, r = l.endColumn - s.range.endColumn, n = s.range.endLineNumber;
        }
        return e;
    }
    toSingle(e) {
        if (this.edits.length === 0) throw new xh;
        if (this.edits.length === 1) return this.edits[0];
        const n = this.edits[0].range.getStartPosition(), i = this.edits[this.edits.length - 1].range.getEndPosition();
        let r = "";
        for(let s = 0; s < this.edits.length; s++){
            const o = this.edits[s];
            if (r += o.text, s < this.edits.length - 1) {
                const a = this.edits[s + 1], l = qt.fromPositions(o.range.getEndPosition(), a.range.getStartPosition()), c = e.getValueOfRange(l);
                r += c;
            }
        }
        return new u2(qt.fromPositions(n, i), r);
    }
    equals(e) {
        return Zm(this.edits, e.edits, (n, i)=>n.equals(i));
    }
}, u2 = class PZi {
    constructor(e, n){
        this.range = e, this.text = n;
    }
    static joinEdits(e, n) {
        if (e.length === 0) throw new xh;
        if (e.length === 1) return e[0];
        const i = e[0].range.getStartPosition(), r = e[e.length - 1].range.getEndPosition();
        let s = "";
        for(let o = 0; o < e.length; o++){
            const a = e[o];
            if (s += a.text, o < e.length - 1) {
                const l = e[o + 1], c = qt.fromPositions(a.range.getEndPosition(), l.range.getStartPosition()), u = n.getValueOfRange(c);
                s += u;
            }
        }
        return new PZi(qt.fromPositions(i, r), s);
    }
    get isEmpty() {
        return this.range.isEmpty() && this.text.length === 0;
    }
    static equals(e, n) {
        return e.range.equalsRange(n.range) && e.text === n.text;
    }
    toSingleEditOperation() {
        return {
            range: this.range,
            text: this.text
        };
    }
    toEdit() {
        return new lhe([
            this
        ]);
    }
    equals(e) {
        return PZi.equals(this, e);
    }
    extendToCoverRange(e, n) {
        if (this.range.containsRange(e)) return this;
        const i = this.range.plusRange(e), r = n.getValueOfRange(qt.fromPositions(i.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(qt.fromPositions(this.range.getEndPosition(), i.getEndPosition())), o = r + this.text + s;
        return new PZi(i, o);
    }
    extendToFullLine(e) {
        const n = new qt(this.range.startLineNumber, 1, this.range.endLineNumber, e.getTransformer().getLineLength(this.range.endLineNumber) + 1);
        return this.extendToCoverRange(n, e);
    }
    removeCommonPrefix(e) {
        const n = e.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i = this.text.replaceAll(`\r
`, `
`), r = Ike(n, i), s = N5.ofText(n.substring(0, r)).addToPosition(this.range.getStartPosition()), o = i.substring(r), a = qt.fromPositions(s, this.range.getEndPosition());
        return new PZi(a, o);
    }
    isEffectiveDeletion(e) {
        let n = this.text.replaceAll(`\r
`, `
`), i = e.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
        const r = Ike(n, i);
        n = n.substring(r), i = i.substring(r);
        const s = bdn(n, i);
        return n = n.substring(0, n.length - s), i = i.substring(0, i.length - s), n === "";
    }
}, pTr = class {
    constructor(){
        this._transformer = void 0;
    }
    get endPositionExclusive() {
        return this.length.addToPosition(new er(1, 1));
    }
    get lineRange() {
        return this.length.toLineRange();
    }
    getValue() {
        return this.getValueOfRange(this.length.toRange());
    }
    getLineLength(t) {
        return this.getValueOfRange(new qt(t, 1, t, Number.MAX_SAFE_INTEGER)).length;
    }
    getTransformer() {
        return this._transformer || (this._transformer = new Ffn(this.getValue())), this._transformer;
    }
    getLineAt(t) {
        return this.getValueOfRange(new qt(t, 1, t, Number.MAX_SAFE_INTEGER));
    }
    getLines() {
        const t = this.getValue();
        return ww(t);
    }
}, ZGd = class extends pTr {
    constructor(t, e){
        q0o(e >= 1), super(), this._getLineContent = t, this._lineCount = e;
    }
    getValueOfRange(t) {
        if (t.startLineNumber === t.endLineNumber) return this._getLineContent(t.startLineNumber).substring(t.startColumn - 1, t.endColumn - 1);
        let e = this._getLineContent(t.startLineNumber).substring(t.startColumn - 1);
        for(let n = t.startLineNumber + 1; n < t.endLineNumber; n++)e += `
` + this._getLineContent(n);
        return e += `
` + this._getLineContent(t.endLineNumber).substring(0, t.endColumn - 1), e;
    }
    getLineLength(t) {
        return this._getLineContent(t).length;
    }
    get length() {
        const t = this._getLineContent(this._lineCount);
        return new N5(this._lineCount - 1, t.length);
    }
}, eoi = class extends ZGd {
    constructor(t){
        super((e)=>t[e - 1], t.length);
    }
}, Byt = class extends pTr {
    constructor(t){
        super(), this.value = t, this._t = new Ffn(this.value);
    }
    getValueOfRange(t) {
        return this._t.getOffsetRange(t).substring(this.value);
    }
    get length() {
        return this._t.textLength;
    }
};

}
