import { Ga, Lse, Nse, qXn } from "./Iwo.js";
import { bo } from "./arrays.js";
import { j8d, rne } from "./contiguousTokensEditing.js";
import { Jbt } from "./eolCounter.js";
import { DD, wd } from "./lineRange.js";
import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
import { Qbt } from "./ze.js";
var h$o;
export { h$o };
var __wakaru_wPy_initialized = false;
export function wPy() {
if (__wakaru_wPy_initialized) return;
__wakaru_wPy_initialized = true;
"use strict";
E(), bo(), Ga(), jc(), Jbt(), j8d(), DD(), h$o = class DAb {
    static deserialize(e, n, i) {
        const r = new Uint32Array(e.buffer), s = Nse(e, n);
        n += 4;
        const o = Nse(e, n);
        n += 4;
        const a = [];
        for(let l = 0; l < o; l++){
            const c = Nse(e, n);
            n += 4, a.push(r.subarray(n / 4, n / 4 + c / 4)), n += c;
        }
        return i.push(new DAb(s, a)), n;
    }
    get startLineNumber() {
        return this._startLineNumber;
    }
    get endLineNumber() {
        return this._startLineNumber + this._tokens.length - 1;
    }
    constructor(e, n){
        this._startLineNumber = e, this._tokens = n;
    }
    getLineRange() {
        return new wd(this._startLineNumber, this._startLineNumber + this._tokens.length);
    }
    getLineTokens(e) {
        return this._tokens[e - this._startLineNumber];
    }
    appendLineTokens(e) {
        this._tokens.push(e);
    }
    serializeSize() {
        let e = 0;
        e += 4, e += 4;
        for(let n = 0; n < this._tokens.length; n++){
            const i = this._tokens[n];
            if (!(i instanceof Uint32Array)) throw new Error("Not supported!");
            e += 4, e += i.byteLength;
        }
        return e;
    }
    serialize(e, n) {
        Lse(e, this._startLineNumber, n), n += 4, Lse(e, this._tokens.length, n), n += 4;
        for(let i = 0; i < this._tokens.length; i++){
            const r = this._tokens[i];
            if (!(r instanceof Uint32Array)) throw new Error("Not supported!");
            Lse(e, r.byteLength, n), n += 4, e.set(new Uint8Array(r.buffer), n), n += r.byteLength;
        }
        return n;
    }
    applyEdit(e, n) {
        const [i, r] = Qbt(n);
        this._acceptDeleteRange(e), this._acceptInsertText(new er(e.startLineNumber, e.startColumn), i, r);
    }
    _acceptDeleteRange(e) {
        if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) return;
        const n = e.startLineNumber - this._startLineNumber, i = e.endLineNumber - this._startLineNumber;
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
                this._tokens[n] = rne.delete(this._tokens[n], e.startColumn - 1, e.endColumn - 1);
                return;
            }
            if (n >= 0) if (this._tokens[n] = rne.deleteEnding(this._tokens[n], e.startColumn - 1), i < this._tokens.length) {
                const r = rne.deleteBeginning(this._tokens[i], e.endColumn - 1);
                this._tokens[n] = rne.append(this._tokens[n], r), this._tokens.splice(n + 1, i - n);
            } else this._tokens[n] = rne.append(this._tokens[n], null), this._tokens = this._tokens.slice(0, n + 1);
            else {
                const r = -n;
                this._startLineNumber -= r, this._tokens[i] = rne.deleteBeginning(this._tokens[i], e.endColumn - 1), this._tokens = this._tokens.slice(i);
            }
        }
    }
    _acceptInsertText(e, n, i) {
        if (n === 0 && i === 0) return;
        const r = e.lineNumber - this._startLineNumber;
        if (r < 0) {
            this._startLineNumber += n;
            return;
        }
        if (!(r >= this._tokens.length)) {
            if (n === 0) {
                this._tokens[r] = rne.insert(this._tokens[r], e.column - 1, i);
                return;
            }
            this._tokens[r] = rne.deleteEnding(this._tokens[r], e.column - 1), this._tokens[r] = rne.insert(this._tokens[r], e.column - 1, i), this._insertLines(e.lineNumber, n);
        }
    }
    _insertLines(e, n) {
        if (n === 0) return;
        const i = [];
        for(let r = 0; r < n; r++)i[r] = null;
        this._tokens = qXn(this._tokens, e, i);
    }
};

}
