import { Fo, _K, bK, xpn } from "./HVr.js";
import { dr } from "./arrays.js";
import { WV, h3c } from "./contiguousTokensEditing.js";
import { kze } from "./eolCounter.js";
import { Vl, hA } from "./lineRange.js";
import { Yn, ya } from "./position.js";
import { Sze } from "./qIc.js";
import { x } from "./tslib.es6.js";
var eJr;
export { eJr };
var __wakaru_bfg_initialized = false;
export function bfg() {
if (__wakaru_bfg_initialized) return;
__wakaru_bfg_initialized = true;
"use strict";
x(), dr(), Fo(), ya(), kze(), h3c(), hA(), eJr = class ckm {
    static deserialize(t, n, i) {
        const r = new Uint32Array(t.buffer), s = _K(t, n);
        n += 4;
        const o = _K(t, n);
        n += 4;
        const a = [];
        for(let c = 0; c < o; c++){
            const l = _K(t, n);
            n += 4, a.push(r.subarray(n / 4, n / 4 + l / 4)), n += l;
        }
        return i.push(new ckm(s, a)), n;
    }
    get startLineNumber() {
        return this._startLineNumber;
    }
    get endLineNumber() {
        return this._startLineNumber + this._tokens.length - 1;
    }
    constructor(t, n){
        this._startLineNumber = t, this._tokens = n;
    }
    getLineRange() {
        return new Vl(this._startLineNumber, this._startLineNumber + this._tokens.length);
    }
    getLineTokens(t) {
        return this._tokens[t - this._startLineNumber];
    }
    appendLineTokens(t) {
        this._tokens.push(t);
    }
    serializeSize() {
        let t = 0;
        t += 4, t += 4;
        for(let n = 0; n < this._tokens.length; n++){
            const i = this._tokens[n];
            if (!(i instanceof Uint32Array)) throw new Error("Not supported!");
            t += 4, t += i.byteLength;
        }
        return t;
    }
    serialize(t, n) {
        bK(t, this._startLineNumber, n), n += 4, bK(t, this._tokens.length, n), n += 4;
        for(let i = 0; i < this._tokens.length; i++){
            const r = this._tokens[i];
            if (!(r instanceof Uint32Array)) throw new Error("Not supported!");
            bK(t, r.byteLength, n), n += 4, t.set(new Uint8Array(r.buffer), n), n += r.byteLength;
        }
        return n;
    }
    applyEdit(t, n) {
        const [i, r] = Sze(n);
        this._acceptDeleteRange(t), this._acceptInsertText(new Yn(t.startLineNumber, t.startColumn), i, r);
    }
    _acceptDeleteRange(t) {
        if (t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn) return;
        const n = t.startLineNumber - this._startLineNumber, i = t.endLineNumber - this._startLineNumber;
        if (i < 0) {
            const r = i - n;
            this._startLineNumber -= r;
            return;
        }
        if (!(n >= this._tokens.length)) {
            if (n < 0 && i >= this._tokens.length) {
                this._startLineNumber = 0, this._tokens = [];
                return;
            }
            if (n === i) {
                this._tokens[n] = WV.delete(this._tokens[n], t.startColumn - 1, t.endColumn - 1);
                return;
            }
            if (n >= 0) if (this._tokens[n] = WV.deleteEnding(this._tokens[n], t.startColumn - 1), i < this._tokens.length) {
                const r = WV.deleteBeginning(this._tokens[i], t.endColumn - 1);
                this._tokens[n] = WV.append(this._tokens[n], r), this._tokens.splice(n + 1, i - n);
            } else this._tokens[n] = WV.append(this._tokens[n], null), this._tokens = this._tokens.slice(0, n + 1);
            else {
                const r = -n;
                this._startLineNumber -= r, this._tokens[i] = WV.deleteBeginning(this._tokens[i], t.endColumn - 1), this._tokens = this._tokens.slice(i);
            }
        }
    }
    _acceptInsertText(t, n, i) {
        if (n === 0 && i === 0) return;
        const r = t.lineNumber - this._startLineNumber;
        if (r < 0) {
            this._startLineNumber += n;
            return;
        }
        if (!(r >= this._tokens.length)) {
            if (n === 0) {
                this._tokens[r] = WV.insert(this._tokens[r], t.column - 1, i);
                return;
            }
            this._tokens[r] = WV.deleteEnding(this._tokens[r], t.column - 1), this._tokens[r] = WV.insert(this._tokens[r], t.column - 1, i), this._insertLines(t.lineNumber, n);
        }
    }
    _insertLines(t, n) {
        if (n === 0) return;
        const i = [];
        for(let r = 0; r < n; r++)i[r] = null;
        this._tokens = xpn(this._tokens, t, i);
    }
};

}
