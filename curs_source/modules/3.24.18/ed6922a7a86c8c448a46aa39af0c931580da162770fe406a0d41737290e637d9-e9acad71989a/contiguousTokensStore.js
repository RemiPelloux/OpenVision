import { xpn } from "./HVr.js";
import { dr } from "./arrays.js";
import { WV, ZAe, h3c } from "./contiguousTokensEditing.js";
import { EBe, s2 } from "./encodedTokenAttributes.js";
import { P7, uA } from "./lineTokens.js";
import { Yn, ya } from "./position.js";
import { E3c, YBe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var oJr;
export { oJr };
var __wakaru_wfg_initialized = false;
export function wfg() {
if (__wakaru_wfg_initialized) return;
__wakaru_wfg_initialized = true;
"use strict";
x(), dr(), ya(), h3c(), P7(), EBe(), oJr = class wIa {
    constructor(t){
        this._lineTokens = [], this._len = 0, this._languageIdCodec = t;
    }
    flush() {
        this._lineTokens = [], this._len = 0;
    }
    get hasTokens() {
        return this._lineTokens.length > 0;
    }
    getTokens(t, n, i) {
        let r = null;
        if (n < this._len && (r = this._lineTokens[n]), r !== null && r !== ZAe) return new uA(YBe(r), i, this._languageIdCodec);
        const s = new Uint32Array(2);
        return s[0] = i.length, s[1] = E3c(this._languageIdCodec.encodeLanguageId(t)), new uA(s, i, this._languageIdCodec);
    }
    static _massageTokens(t, n, i) {
        const r = i ? YBe(i) : null;
        if (n === 0) {
            let s = !1;
            if (r && r.length > 1 && (s = s2.getLanguageId(r[1]) !== t), !s) return ZAe;
        }
        if (!r || r.length === 0) {
            const s = new Uint32Array(2);
            return s[0] = n, s[1] = E3c(t), s.buffer;
        }
        return r[r.length - 2] = n, r.byteOffset === 0 && r.byteLength === r.buffer.byteLength ? r.buffer : r;
    }
    _ensureLine(t) {
        for(; t >= this._len;)this._lineTokens[this._len] = null, this._len++;
    }
    _deleteLines(t, n) {
        n !== 0 && (t + n > this._len && (n = this._len - t), this._lineTokens.splice(t, n), this._len -= n);
    }
    _insertLines(t, n) {
        if (n === 0) return;
        const i = [];
        for(let r = 0; r < n; r++)i[r] = null;
        this._lineTokens = xpn(this._lineTokens, t, i), this._len += n;
    }
    setTokens(t, n, i, r, s) {
        const o = wIa._massageTokens(this._languageIdCodec.encodeLanguageId(t), i, r);
        this._ensureLine(n);
        const a = this._lineTokens[n];
        return this._lineTokens[n] = o, s ? !wIa._equals(a, o) : !1;
    }
    static _equals(t, n) {
        if (!t || !n) return !t && !n;
        const i = YBe(t), r = YBe(n);
        if (i.length !== r.length) return !1;
        for(let s = 0, o = i.length; s < o; s++)if (i[s] !== r[s]) return !1;
        return !0;
    }
    acceptEdit(t, n, i) {
        this._acceptDeleteRange(t), this._acceptInsertText(new Yn(t.startLineNumber, t.startColumn), n, i);
    }
    _acceptDeleteRange(t) {
        const n = t.startLineNumber - 1;
        if (n >= this._len) return;
        if (t.startLineNumber === t.endLineNumber) {
            if (t.startColumn === t.endColumn) return;
            this._lineTokens[n] = WV.delete(this._lineTokens[n], t.startColumn - 1, t.endColumn - 1);
            return;
        }
        this._lineTokens[n] = WV.deleteEnding(this._lineTokens[n], t.startColumn - 1);
        const i = t.endLineNumber - 1;
        let r = null;
        i < this._len && (r = WV.deleteBeginning(this._lineTokens[i], t.endColumn - 1)), this._lineTokens[n] = WV.append(this._lineTokens[n], r), this._deleteLines(t.startLineNumber, t.endLineNumber - t.startLineNumber);
    }
    _acceptInsertText(t, n, i) {
        if (n === 0 && i === 0) return;
        const r = t.lineNumber - 1;
        if (!(r >= this._len)) {
            if (n === 0) {
                this._lineTokens[r] = WV.insert(this._lineTokens[r], t.column - 1, i);
                return;
            }
            this._lineTokens[r] = WV.deleteEnding(this._lineTokens[r], t.column - 1), this._lineTokens[r] = WV.insert(this._lineTokens[r], t.column - 1, i), this._insertLines(t.lineNumber, n);
        }
    }
    setMultilineTokens(t, n) {
        if (t.length === 0) return {
            changes: []
        };
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r];
            let a = 0, c = 0, l = !1;
            for(let u = o.startLineNumber; u <= o.endLineNumber; u++)l ? (this.setTokens(n.getLanguageId(), u - 1, n.getLineLength(u), o.getLineTokens(u), !1), c = u) : this.setTokens(n.getLanguageId(), u - 1, n.getLineLength(u), o.getLineTokens(u), !0) && (l = !0, a = u, c = u);
            l && i.push({
                fromLineNumber: a,
                toLineNumber: c
            });
        }
        return {
            changes: i
        };
    }
};

}
