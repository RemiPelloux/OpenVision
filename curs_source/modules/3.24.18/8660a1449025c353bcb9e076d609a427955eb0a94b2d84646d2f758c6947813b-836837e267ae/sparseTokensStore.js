import { qXn } from "./Iwo.js";
import { bo } from "./arrays.js";
import { PD, SY } from "./lineTokens.js";
import { E } from "./tslib.es6.js";
var t7d;
export { t7d };
var __wakaru_xPy_initialized = false;
export function xPy() {
if (__wakaru_xPy_initialized) return;
__wakaru_xPy_initialized = true;
"use strict";
E(), bo(), SY(), t7d = class OAb {
    constructor(e){
        this._pieces = [], this._isComplete = !1, this._languageIdCodec = e;
    }
    flush() {
        this._pieces = [], this._isComplete = !1;
    }
    isEmpty() {
        return this._pieces.length === 0;
    }
    set(e, n) {
        this._pieces = e || [], this._isComplete = n;
    }
    setPartial(e, n) {
        let i = e;
        if (n.length > 0) {
            const s = n[0].getRange(), o = n[n.length - 1].getRange();
            if (!s || !o) return e;
            i = e.plusRange(s).plusRange(o);
        }
        let r = null;
        for(let s = 0, o = this._pieces.length; s < o; s++){
            const a = this._pieces[s];
            if (a.endLineNumber < i.startLineNumber) continue;
            if (a.startLineNumber > i.endLineNumber) {
                r = r || {
                    index: s
                };
                break;
            }
            if (a.removeTokens(i), a.isEmpty()) {
                this._pieces.splice(s, 1), s--, o--;
                continue;
            }
            if (a.endLineNumber < i.startLineNumber) continue;
            if (a.startLineNumber > i.endLineNumber) {
                r = r || {
                    index: s
                };
                continue;
            }
            const [l, c] = a.split(i);
            if (l.isEmpty()) {
                r = r || {
                    index: s
                };
                continue;
            }
            c.isEmpty() || (this._pieces.splice(s, 1, l, c), s++, o++, r = r || {
                index: s
            });
        }
        return r = r || {
            index: this._pieces.length
        }, n.length > 0 && (this._pieces = qXn(this._pieces, r.index, n)), i;
    }
    isComplete() {
        return this._isComplete;
    }
    addSparseTokens(e, n) {
        if (n.getLineContent().length === 0) return n;
        const i = this._pieces;
        if (i.length === 0) return n;
        const r = OAb._findFirstPieceWithLine(i, e), s = i[r].getLineTokens(e);
        if (!s) return n;
        const o = n.getCount(), a = s.getCount();
        let l = 0;
        const c = [];
        let u = 0, d = 0;
        const h = (g, f)=>{
            g !== d && (d = g, c[u++] = g, c[u++] = f);
        }, p = n.getLineContent().length;
        for(let g = 0; g < a; g++){
            const f = s.getStartCharacter(g), _ = Math.min(s.getEndCharacter(g), p), b = s.getMetadata(g), y = ((b & 1 ? 2048 : 0) | (b & 2 ? 4096 : 0) | (b & 4 ? 8192 : 0) | (b & 8 ? 16384 : 0) | (b & 16 ? 16744448 : 0) | (b & 32 ? 4278190080 : 0)) >>> 0, S = ~y >>> 0;
            for(; l < o && n.getEndOffset(l) <= f;)h(n.getEndOffset(l), n.getMetadata(l)), l++;
            for(l < o && n.getStartOffset(l) < f && h(f, n.getMetadata(l)); l < o && n.getEndOffset(l) < _;)h(n.getEndOffset(l), n.getMetadata(l) & S | b & y), l++;
            if (l < o) h(_, n.getMetadata(l) & S | b & y), n.getEndOffset(l) === _ && l++;
            else {
                const k = Math.min(Math.max(0, l - 1), o - 1);
                h(_, n.getMetadata(k) & S | b & y);
            }
        }
        for(; l < o;)h(n.getEndOffset(l), n.getMetadata(l)), l++;
        return new PD(new Uint32Array(c), n.getLineContent(), this._languageIdCodec);
    }
    static _findFirstPieceWithLine(e, n) {
        let i = 0, r = e.length - 1;
        for(; i < r;){
            let s = i + Math.floor((r - i) / 2);
            if (e[s].endLineNumber < n) i = s + 1;
            else if (e[s].startLineNumber > n) r = s - 1;
            else {
                for(; s > i && e[s - 1].startLineNumber <= n && n <= e[s - 1].endLineNumber;)s--;
                return s;
            }
        }
        return i;
    }
    acceptEdit(e, n, i, r, s) {
        for (const o of this._pieces)o.acceptEdit(e, n, i, r, s);
    }
};

}
