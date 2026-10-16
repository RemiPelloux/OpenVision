import { Aqe, Ps, Rpn, Zu, jie, nh, rJ, ry, si, vAe } from "./HVr.js";
import { dr } from "./arrays.js";
import { C0 } from "./assert.js";
import { Yn, ya } from "./position.js";
import { Sts, aFt } from "./positionToOffset.js";
import { $bi } from "./qIc.js";
import { dt, qi } from "./range.js";
import { $ge, FP } from "./textLength.js";
import { x } from "./tslib.es6.js";
var CJ, PE, Hbi, w8c, wvn, oKe;
export { CJ, Hbi, PE, oKe, w8c, wvn };
var __wakaru_yW_initialized = false;
export function yW() {
if (__wakaru_yW_initialized) return;
__wakaru_yW_initialized = true;
"use strict";
x(), dr(), C0(), si(), Ps(), ya(), Sts(), qi(), $ge(), CJ = class xin {
    constructor(t){
        this.edits = t, rJ(()=>vAe(t, (n, i)=>n.range.getEndPosition().isBeforeOrEqual(i.range.getStartPosition())));
    }
    static fromOffsetEdit(t, n) {
        const i = t.edits.map((r)=>new PE(n.getTransformer().getRange(r.replaceRange), r.newText));
        return new xin(i);
    }
    static single(t, n) {
        return new xin([
            new PE(t, n)
        ]);
    }
    static insert(t, n) {
        return new xin([
            new PE(dt.fromPositions(t, t), n)
        ]);
    }
    normalize() {
        const t = [];
        for (const n of this.edits)if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
            const i = t[t.length - 1];
            t[t.length - 1] = new PE(i.range.plusRange(n.range), i.text + n.text);
        } else n.isEmpty || t.push(n);
        return new xin(t);
    }
    mapPosition(t) {
        let n = 0, i = 0, r = 0;
        for (const s of this.edits){
            const o = s.range.getStartPosition();
            if (t.isBeforeOrEqual(o)) break;
            const a = s.range.getEndPosition(), c = FP.ofText(s.text);
            if (t.isBefore(a)) {
                const l = new Yn(o.lineNumber + n, o.column + (o.lineNumber + n === i ? r : 0)), u = c.addToPosition(l);
                return $bi(l, u);
            }
            o.lineNumber + n !== i && (r = 0), n += c.lineCount - (s.range.endLineNumber - s.range.startLineNumber), c.lineCount === 0 ? a.lineNumber !== o.lineNumber ? r += c.columnCount - (a.column - 1) : r += c.columnCount - (a.column - o.column) : r = c.columnCount, i = a.lineNumber + n;
        }
        return new Yn(t.lineNumber + n, t.column + (t.lineNumber + n === i ? r : 0));
    }
    mapRange(t) {
        function n(o) {
            return o instanceof Yn ? o : o.getStartPosition();
        }
        function i(o) {
            return o instanceof Yn ? o : o.getEndPosition();
        }
        const r = n(this.mapPosition(t.getStartPosition())), s = i(this.mapPosition(t.getEndPosition()));
        return $bi(r, s);
    }
    inverseMapPosition(t, n) {
        return this.inverse(n).mapPosition(t);
    }
    inverseMapRange(t, n) {
        return this.inverse(n).mapRange(t);
    }
    apply(t) {
        let n = "", i = new Yn(1, 1);
        for (const s of this.edits){
            const o = s.range, a = o.getStartPosition(), c = o.getEndPosition(), l = $bi(i, a);
            l.isEmpty() || (n += t.getValueOfRange(l)), n += s.text, i = c;
        }
        const r = $bi(i, t.endPositionExclusive);
        return r.isEmpty() || (n += t.getValueOfRange(r)), n;
    }
    applyToString(t) {
        const n = new oKe(t);
        return this.apply(n);
    }
    inverse(t) {
        const n = this.getNewRanges();
        return new xin(this.edits.map((i, r)=>new PE(n[r], t.getValueOfRange(i.range))));
    }
    getNewRanges() {
        const t = [];
        let n = 0, i = 0, r = 0;
        for (const s of this.edits){
            const o = FP.ofText(s.text), a = Yn.lift({
                lineNumber: s.range.startLineNumber + i,
                column: s.range.startColumn + (s.range.startLineNumber === n ? r : 0)
            }), c = o.createRange(a);
            t.push(c), i = c.endLineNumber - s.range.endLineNumber, r = c.endColumn - s.range.endColumn, n = s.range.endLineNumber;
        }
        return t;
    }
    toSingle(t) {
        if (this.edits.length === 0) throw new Zu;
        if (this.edits.length === 1) return this.edits[0];
        const n = this.edits[0].range.getStartPosition(), i = this.edits[this.edits.length - 1].range.getEndPosition();
        let r = "";
        for(let s = 0; s < this.edits.length; s++){
            const o = this.edits[s];
            if (r += o.text, s < this.edits.length - 1) {
                const a = this.edits[s + 1], c = dt.fromPositions(o.range.getEndPosition(), a.range.getStartPosition()), l = t.getValueOfRange(c);
                r += l;
            }
        }
        return new PE(dt.fromPositions(n, i), r);
    }
    equals(t) {
        return nh(this.edits, t.edits, (n, i)=>n.equals(i));
    }
}, PE = class KXn {
    constructor(t, n){
        this.range = t, this.text = n;
    }
    static joinEdits(t, n) {
        if (t.length === 0) throw new Zu;
        if (t.length === 1) return t[0];
        const i = t[0].range.getStartPosition(), r = t[t.length - 1].range.getEndPosition();
        let s = "";
        for(let o = 0; o < t.length; o++){
            const a = t[o];
            if (s += a.text, o < t.length - 1) {
                const c = t[o + 1], l = dt.fromPositions(a.range.getEndPosition(), c.range.getStartPosition()), u = n.getValueOfRange(l);
                s += u;
            }
        }
        return new KXn(dt.fromPositions(i, r), s);
    }
    get isEmpty() {
        return this.range.isEmpty() && this.text.length === 0;
    }
    static equals(t, n) {
        return t.range.equalsRange(n.range) && t.text === n.text;
    }
    toSingleEditOperation() {
        return {
            range: this.range,
            text: this.text
        };
    }
    toEdit() {
        return new CJ([
            this
        ]);
    }
    equals(t) {
        return KXn.equals(this, t);
    }
    extendToCoverRange(t, n) {
        if (this.range.containsRange(t)) return this;
        const i = this.range.plusRange(t), r = n.getValueOfRange(dt.fromPositions(i.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(dt.fromPositions(this.range.getEndPosition(), i.getEndPosition())), o = r + this.text + s;
        return new KXn(i, o);
    }
    extendToFullLine(t) {
        const n = new dt(this.range.startLineNumber, 1, this.range.endLineNumber, t.getTransformer().getLineLength(this.range.endLineNumber) + 1);
        return this.extendToCoverRange(n, t);
    }
    removeCommonPrefix(t) {
        const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i = this.text.replaceAll(`\r
`, `
`), r = jie(n, i), s = FP.ofText(n.substring(0, r)).addToPosition(this.range.getStartPosition()), o = i.substring(r), a = dt.fromPositions(s, this.range.getEndPosition());
        return new KXn(a, o);
    }
    isEffectiveDeletion(t) {
        let n = this.text.replaceAll(`\r
`, `
`), i = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
        const r = jie(n, i);
        n = n.substring(r), i = i.substring(r);
        const s = Aqe(n, i);
        return n = n.substring(0, n.length - s), i = i.substring(0, i.length - s), n === "";
    }
}, Hbi = class {
    constructor(){
        this._transformer = void 0;
    }
    get endPositionExclusive() {
        return this.length.addToPosition(new Yn(1, 1));
    }
    get lineRange() {
        return this.length.toLineRange();
    }
    getValue() {
        return this.getValueOfRange(this.length.toRange());
    }
    getLineLength(e) {
        return this.getValueOfRange(new dt(e, 1, e, Number.MAX_SAFE_INTEGER)).length;
    }
    getTransformer() {
        return this._transformer || (this._transformer = new aFt(this.getValue())), this._transformer;
    }
    getLineAt(e) {
        return this.getValueOfRange(new dt(e, 1, e, Number.MAX_SAFE_INTEGER));
    }
    getLines() {
        const e = this.getValue();
        return ry(e);
    }
}, w8c = class extends Hbi {
    constructor(e, t){
        Rpn(t >= 1), super(), this._getLineContent = e, this._lineCount = t;
    }
    getValueOfRange(e) {
        if (e.startLineNumber === e.endLineNumber) return this._getLineContent(e.startLineNumber).substring(e.startColumn - 1, e.endColumn - 1);
        let t = this._getLineContent(e.startLineNumber).substring(e.startColumn - 1);
        for(let n = e.startLineNumber + 1; n < e.endLineNumber; n++)t += `
` + this._getLineContent(n);
        return t += `
` + this._getLineContent(e.endLineNumber).substring(0, e.endColumn - 1), t;
    }
    getLineLength(e) {
        return this._getLineContent(e).length;
    }
    get length() {
        const e = this._getLineContent(this._lineCount);
        return new FP(this._lineCount - 1, e.length);
    }
}, wvn = class extends w8c {
    constructor(e){
        super((t)=>e[t - 1], e.length);
    }
}, oKe = class extends Hbi {
    constructor(e){
        super(), this.value = e, this._t = new aFt(this.value);
    }
    getValueOfRange(e) {
        return this._t.getOffsetRange(e).substring(this.value);
    }
    get length() {
        return this._t.textLength;
    }
};

}
