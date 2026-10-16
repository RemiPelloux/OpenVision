import { Fo, Uug, _K, bK } from "./HVr.js";
import { Pvi, ppg } from "./qIc.js";
import { lwe } from "./stringBuilder.js";
import { x } from "./tslib.es6.js";
var _we, MFc;
export { MFc, _we };
var __wakaru_PFc_initialized = false;
export function PFc() {
if (__wakaru_PFc_initialized) return;
__wakaru_PFc_initialized = true;
"use strict";
x(), Fo(), lwe(), _we = class uxe {
    constructor(t, n, i, r){
        this.oldPosition = t, this.oldText = n, this.newPosition = i, this.newText = r;
    }
    get oldLength() {
        return this.oldText.length;
    }
    get oldEnd() {
        return this.oldPosition + this.oldText.length;
    }
    get newLength() {
        return this.newText.length;
    }
    get newEnd() {
        return this.newPosition + this.newText.length;
    }
    shift(t) {
        return new uxe(this.oldPosition + t, this.oldText, this.newPosition + t, this.newText);
    }
    toString() {
        return this.oldText.length === 0 ? `(insert@${this.oldPosition} "${Pvi(this.newText)}")` : this.newText.length === 0 ? `(delete@${this.oldPosition} "${Pvi(this.oldText)}")` : `(replace@${this.oldPosition} "${Pvi(this.oldText)}" with "${Pvi(this.newText)}")`;
    }
    static _writeStringSize(t) {
        return 4 + 2 * t.length;
    }
    static _writeString(t, n, i) {
        const r = n.length;
        bK(t, r, i), i += 4;
        for(let s = 0; s < r; s++)Uug(t, n.charCodeAt(s), i), i += 2;
        return i;
    }
    static _readString(t, n) {
        const i = _K(t, n);
        return n += 4, ppg(t, n, i);
    }
    writeSize() {
        return 8 + uxe._writeStringSize(this.oldText) + uxe._writeStringSize(this.newText);
    }
    write(t, n) {
        return bK(t, this.oldPosition, n), n += 4, bK(t, this.newPosition, n), n += 4, n = uxe._writeString(t, this.oldText, n), n = uxe._writeString(t, this.newText, n), n;
    }
    static read(t, n, i) {
        const r = _K(t, n);
        n += 4;
        const s = _K(t, n);
        n += 4;
        const o = uxe._readString(t, n);
        n += uxe._writeStringSize(o);
        const a = uxe._readString(t, n);
        return n += uxe._writeStringSize(a), i.push(new uxe(r, o, s, a)), n;
    }
}, MFc = class GWe {
    constructor(t, n){
        this._prevEdits = t, this._currEdits = n, this._result = [], this._resultLen = 0, this._prevLen = this._prevEdits.length, this._prevDeltaOffset = 0, this._currLen = this._currEdits.length, this._currDeltaOffset = 0;
    }
    compress() {
        let t = 0, n = 0, i = this._getPrev(t), r = this._getCurr(n);
        for(; t < this._prevLen || n < this._currLen;){
            if (i === null) {
                this._acceptCurr(r), r = this._getCurr(++n);
                continue;
            }
            if (r === null) {
                this._acceptPrev(i), i = this._getPrev(++t);
                continue;
            }
            if (r.oldEnd <= i.newPosition) {
                this._acceptCurr(r), r = this._getCurr(++n);
                continue;
            }
            if (i.newEnd <= r.oldPosition) {
                this._acceptPrev(i), i = this._getPrev(++t);
                continue;
            }
            if (r.oldPosition < i.newPosition) {
                const [l, u] = GWe._splitCurr(r, i.newPosition - r.oldPosition);
                this._acceptCurr(l), r = u;
                continue;
            }
            if (i.newPosition < r.oldPosition) {
                const [l, u] = GWe._splitPrev(i, r.oldPosition - i.newPosition);
                this._acceptPrev(l), i = u;
                continue;
            }
            let a, c;
            if (r.oldEnd === i.newEnd) a = i, c = r, i = this._getPrev(++t), r = this._getCurr(++n);
            else if (r.oldEnd < i.newEnd) {
                const [l, u] = GWe._splitPrev(i, r.oldLength);
                a = l, c = r, i = u, r = this._getCurr(++n);
            } else {
                const [l, u] = GWe._splitCurr(r, i.newLength);
                a = i, c = l, i = this._getPrev(++t), r = u;
            }
            this._result[this._resultLen++] = new _we(a.oldPosition, a.oldText, c.newPosition, c.newText), this._prevDeltaOffset += a.newLength - a.oldLength, this._currDeltaOffset += c.newLength - c.oldLength;
        }
        const s = GWe._merge(this._result);
        return GWe._removeNoOps(s);
    }
    _acceptCurr(t) {
        this._result[this._resultLen++] = GWe._rebaseCurr(this._prevDeltaOffset, t), this._currDeltaOffset += t.newLength - t.oldLength;
    }
    _getCurr(t) {
        return t < this._currLen ? this._currEdits[t] : null;
    }
    _acceptPrev(t) {
        this._result[this._resultLen++] = GWe._rebasePrev(this._currDeltaOffset, t), this._prevDeltaOffset += t.newLength - t.oldLength;
    }
    _getPrev(t) {
        return t < this._prevLen ? this._prevEdits[t] : null;
    }
    static _rebaseCurr(t, n) {
        return new _we(n.oldPosition - t, n.oldText, n.newPosition, n.newText);
    }
    static _rebasePrev(t, n) {
        return new _we(n.oldPosition, n.oldText, n.newPosition + t, n.newText);
    }
    static _splitPrev(t, n) {
        const i = t.newText.substr(0, n), r = t.newText.substr(n);
        return [
            new _we(t.oldPosition, t.oldText, t.newPosition, i),
            new _we(t.oldEnd, "", t.newPosition + n, r)
        ];
    }
    static _splitCurr(t, n) {
        const i = t.oldText.substr(0, n), r = t.oldText.substr(n);
        return [
            new _we(t.oldPosition, i, t.newPosition, t.newText),
            new _we(t.oldPosition + n, r, t.newEnd, "")
        ];
    }
    static _merge(t) {
        if (t.length === 0) return t;
        const n = [];
        let i = 0, r = t[0];
        for(let s = 1; s < t.length; s++){
            const o = t[s];
            r.oldEnd === o.oldPosition ? r = new _we(r.oldPosition, r.oldText + o.oldText, r.newPosition, r.newText + o.newText) : (n[i++] = r, r = o);
        }
        return n[i++] = r, n;
    }
    static _removeNoOps(t) {
        if (t.length === 0) return t;
        const n = [];
        let i = 0;
        for(let r = 0; r < t.length; r++){
            const s = t[r];
            s.oldText !== s.newText && (n[i++] = s);
        }
        return n;
    }
};

}
