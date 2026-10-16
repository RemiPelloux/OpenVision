import { Ga, Lse, Nse, yby } from "./Iwo.js";
import { Q$e } from "./stringBuilder.js";
import { E } from "./tslib.es6.js";
import { kAy, v0r } from "./ze.js";
var k5e, a8d;
export { a8d, k5e };
var __wakaru_l8d_initialized = false;
export function l8d() {
if (__wakaru_l8d_initialized) return;
__wakaru_l8d_initialized = true;
"use strict";
E(), Ga(), Q$e(), k5e = class Q7e {
    constructor(e, n, i, r){
        this.oldPosition = e, this.oldText = n, this.newPosition = i, this.newText = r;
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
    shift(e) {
        return new Q7e(this.oldPosition + e, this.oldText, this.newPosition + e, this.newText);
    }
    toString() {
        return this.oldText.length === 0 ? `(insert@${this.oldPosition} "${v0r(this.newText)}")` : this.newText.length === 0 ? `(delete@${this.oldPosition} "${v0r(this.oldText)}")` : `(replace@${this.oldPosition} "${v0r(this.oldText)}" with "${v0r(this.newText)}")`;
    }
    static _writeStringSize(e) {
        return 4 + 2 * e.length;
    }
    static _writeString(e, n, i) {
        const r = n.length;
        Lse(e, r, i), i += 4;
        for(let s = 0; s < r; s++)yby(e, n.charCodeAt(s), i), i += 2;
        return i;
    }
    static _readString(e, n) {
        const i = Nse(e, n);
        return n += 4, kAy(e, n, i);
    }
    writeSize() {
        return 8 + Q7e._writeStringSize(this.oldText) + Q7e._writeStringSize(this.newText);
    }
    write(e, n) {
        return Lse(e, this.oldPosition, n), n += 4, Lse(e, this.newPosition, n), n += 4, n = Q7e._writeString(e, this.oldText, n), n = Q7e._writeString(e, this.newText, n), n;
    }
    static read(e, n, i) {
        const r = Nse(e, n);
        n += 4;
        const s = Nse(e, n);
        n += 4;
        const o = Q7e._readString(e, n);
        n += Q7e._writeStringSize(o);
        const a = Q7e._readString(e, n);
        return n += Q7e._writeStringSize(a), i.push(new Q7e(r, o, s, a)), n;
    }
}, a8d = class lmt {
    constructor(e, n){
        this._prevEdits = e, this._currEdits = n, this._result = [], this._resultLen = 0, this._prevLen = this._prevEdits.length, this._prevDeltaOffset = 0, this._currLen = this._currEdits.length, this._currDeltaOffset = 0;
    }
    compress() {
        let e = 0, n = 0, i = this._getPrev(e), r = this._getCurr(n);
        for(; e < this._prevLen || n < this._currLen;){
            if (i === null) {
                this._acceptCurr(r), r = this._getCurr(++n);
                continue;
            }
            if (r === null) {
                this._acceptPrev(i), i = this._getPrev(++e);
                continue;
            }
            if (r.oldEnd <= i.newPosition) {
                this._acceptCurr(r), r = this._getCurr(++n);
                continue;
            }
            if (i.newEnd <= r.oldPosition) {
                this._acceptPrev(i), i = this._getPrev(++e);
                continue;
            }
            if (r.oldPosition < i.newPosition) {
                const [c, u] = lmt._splitCurr(r, i.newPosition - r.oldPosition);
                this._acceptCurr(c), r = u;
                continue;
            }
            if (i.newPosition < r.oldPosition) {
                const [c, u] = lmt._splitPrev(i, r.oldPosition - i.newPosition);
                this._acceptPrev(c), i = u;
                continue;
            }
            let a, l;
            if (r.oldEnd === i.newEnd) a = i, l = r, i = this._getPrev(++e), r = this._getCurr(++n);
            else if (r.oldEnd < i.newEnd) {
                const [c, u] = lmt._splitPrev(i, r.oldLength);
                a = c, l = r, i = u, r = this._getCurr(++n);
            } else {
                const [c, u] = lmt._splitCurr(r, i.newLength);
                a = i, l = c, i = this._getPrev(++e), r = u;
            }
            this._result[this._resultLen++] = new k5e(a.oldPosition, a.oldText, l.newPosition, l.newText), this._prevDeltaOffset += a.newLength - a.oldLength, this._currDeltaOffset += l.newLength - l.oldLength;
        }
        const s = lmt._merge(this._result);
        return lmt._removeNoOps(s);
    }
    _acceptCurr(e) {
        this._result[this._resultLen++] = lmt._rebaseCurr(this._prevDeltaOffset, e), this._currDeltaOffset += e.newLength - e.oldLength;
    }
    _getCurr(e) {
        return e < this._currLen ? this._currEdits[e] : null;
    }
    _acceptPrev(e) {
        this._result[this._resultLen++] = lmt._rebasePrev(this._currDeltaOffset, e), this._prevDeltaOffset += e.newLength - e.oldLength;
    }
    _getPrev(e) {
        return e < this._prevLen ? this._prevEdits[e] : null;
    }
    static _rebaseCurr(e, n) {
        return new k5e(n.oldPosition - e, n.oldText, n.newPosition, n.newText);
    }
    static _rebasePrev(e, n) {
        return new k5e(n.oldPosition, n.oldText, n.newPosition + e, n.newText);
    }
    static _splitPrev(e, n) {
        const i = e.newText.substr(0, n), r = e.newText.substr(n);
        return [
            new k5e(e.oldPosition, e.oldText, e.newPosition, i),
            new k5e(e.oldEnd, "", e.newPosition + n, r)
        ];
    }
    static _splitCurr(e, n) {
        const i = e.oldText.substr(0, n), r = e.oldText.substr(n);
        return [
            new k5e(e.oldPosition, i, e.newPosition, e.newText),
            new k5e(e.oldPosition + n, r, e.newEnd, "")
        ];
    }
    static _merge(e) {
        if (e.length === 0) return e;
        const n = [];
        let i = 0, r = e[0];
        for(let s = 1; s < e.length; s++){
            const o = e[s];
            r.oldEnd === o.oldPosition ? r = new k5e(r.oldPosition, r.oldText + o.oldText, r.newPosition, r.newText + o.newText) : (n[i++] = r, r = o);
        }
        return n[i++] = r, n;
    }
    static _removeNoOps(e) {
        if (e.length === 0) return e;
        const n = [];
        let i = 0;
        for(let r = 0; r < e.length; r++){
            const s = e[r];
            s.oldText !== s.newText && (n[i++] = s);
        }
        return n;
    }
};

}
