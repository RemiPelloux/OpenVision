import { qXn } from "./Iwo.js";
import { bo } from "./arrays.js";
import { cHe, j8d, rne } from "./contiguousTokensEditing.js";
import { Obt, S7 } from "./encodedTokenAttributes.js";
import { PD, SY } from "./lineTokens.js";
import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
import { Wtt, e7d } from "./ze.js";
var _$o;
export { _$o };
var __wakaru_IPy_initialized = false;
export function IPy() {
if (__wakaru_IPy_initialized) return;
__wakaru_IPy_initialized = true;
"use strict";
E(), bo(), jc(), j8d(), SY(), Obt(), _$o = class oJc {
    constructor(e){
        this._lineTokens = [], this._len = 0, this._languageIdCodec = e;
    }
    flush() {
        this._lineTokens = [], this._len = 0;
    }
    get hasTokens() {
        return this._lineTokens.length > 0;
    }
    getTokens(e, n, i) {
        let r = null;
        if (n < this._len && (r = this._lineTokens[n]), r !== null && r !== cHe) return new PD(Wtt(r), i, this._languageIdCodec);
        const s = new Uint32Array(2);
        return s[0] = i.length, s[1] = e7d(this._languageIdCodec.encodeLanguageId(e)), new PD(s, i, this._languageIdCodec);
    }
    static _massageTokens(e, n, i) {
        const r = i ? Wtt(i) : null;
        if (n === 0) {
            let s = !1;
            if (r && r.length > 1 && (s = S7.getLanguageId(r[1]) !== e), !s) return cHe;
        }
        if (!r || r.length === 0) {
            const s = new Uint32Array(2);
            return s[0] = n, s[1] = e7d(e), s.buffer;
        }
        return r[r.length - 2] = n, r.byteOffset === 0 && r.byteLength === r.buffer.byteLength ? r.buffer : r;
    }
    _ensureLine(e) {
        for(; e >= this._len;)this._lineTokens[this._len] = null, this._len++;
    }
    _deleteLines(e, n) {
        n !== 0 && (e + n > this._len && (n = this._len - e), this._lineTokens.splice(e, n), this._len -= n);
    }
    _insertLines(e, n) {
        if (n === 0) return;
        const i = [];
        for(let r = 0; r < n; r++)i[r] = null;
        this._lineTokens = qXn(this._lineTokens, e, i), this._len += n;
    }
    setTokens(e, n, i, r, s) {
        const o = oJc._massageTokens(this._languageIdCodec.encodeLanguageId(e), i, r);
        this._ensureLine(n);
        const a = this._lineTokens[n];
        return this._lineTokens[n] = o, s ? !oJc._equals(a, o) : !1;
    }
    static _equals(e, n) {
        if (!e || !n) return !e && !n;
        const i = Wtt(e), r = Wtt(n);
        if (i.length !== r.length) return !1;
        for(let s = 0, o = i.length; s < o; s++)if (i[s] !== r[s]) return !1;
        return !0;
    }
    acceptEdit(e, n, i) {
        this._acceptDeleteRange(e), this._acceptInsertText(new er(e.startLineNumber, e.startColumn), n, i);
    }
    _acceptDeleteRange(e) {
        const n = e.startLineNumber - 1;
        if (n >= this._len) return;
        if (e.startLineNumber === e.endLineNumber) {
            if (e.startColumn === e.endColumn) return;
            this._lineTokens[n] = rne.delete(this._lineTokens[n], e.startColumn - 1, e.endColumn - 1);
            return;
        }
        this._lineTokens[n] = rne.deleteEnding(this._lineTokens[n], e.startColumn - 1);
        const i = e.endLineNumber - 1;
        let r = null;
        i < this._len && (r = rne.deleteBeginning(this._lineTokens[i], e.endColumn - 1)), this._lineTokens[n] = rne.append(this._lineTokens[n], r), this._deleteLines(e.startLineNumber, e.endLineNumber - e.startLineNumber);
    }
    _acceptInsertText(e, n, i) {
        if (n === 0 && i === 0) return;
        const r = e.lineNumber - 1;
        if (!(r >= this._len)) {
            if (n === 0) {
                this._lineTokens[r] = rne.insert(this._lineTokens[r], e.column - 1, i);
                return;
            }
            this._lineTokens[r] = rne.deleteEnding(this._lineTokens[r], e.column - 1), this._lineTokens[r] = rne.insert(this._lineTokens[r], e.column - 1, i), this._insertLines(e.lineNumber, n);
        }
    }
    setMultilineTokens(e, n) {
        if (e.length === 0) return {
            changes: []
        };
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r];
            let a = 0, l = 0, c = !1;
            for(let u = o.startLineNumber; u <= o.endLineNumber; u++)c ? (this.setTokens(n.getLanguageId(), u - 1, n.getLineLength(u), o.getLineTokens(u), !1), l = u) : this.setTokens(n.getLanguageId(), u - 1, n.getLineLength(u), o.getLineTokens(u), !0) && (c = !0, a = u, l = u);
            c && i.push({
                fromLineNumber: a,
                toLineNumber: l
            });
        }
        return {
            changes: i
        };
    }
};

}
