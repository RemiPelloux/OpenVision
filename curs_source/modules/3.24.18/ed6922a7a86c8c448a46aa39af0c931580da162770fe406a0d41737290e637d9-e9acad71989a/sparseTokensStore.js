import { xpn } from "./HVr.js";
import { dr } from "./arrays.js";
import { P7, uA } from "./lineTokens.js";
import { x } from "./tslib.es6.js";
var x3c;
export { x3c };
var __wakaru_Cfg_initialized = false;
export function Cfg() {
if (__wakaru_Cfg_initialized) return;
__wakaru_Cfg_initialized = true;
"use strict";
x(), dr(), P7(), x3c = class dkm {
    constructor(t){
        this._pieces = [], this._isComplete = !1, this._languageIdCodec = t;
    }
    flush() {
        this._pieces = [], this._isComplete = !1;
    }
    isEmpty() {
        return this._pieces.length === 0;
    }
    set(t, n) {
        this._pieces = t || [], this._isComplete = n;
    }
    setPartial(t, n) {
        let i = t;
        if (n.length > 0) {
            const s = n[0].getRange(), o = n[n.length - 1].getRange();
            if (!s || !o) return t;
            i = t.plusRange(s).plusRange(o);
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
            const [c, l] = a.split(i);
            if (c.isEmpty()) {
                r = r || {
                    index: s
                };
                continue;
            }
            l.isEmpty() || (this._pieces.splice(s, 1, c, l), s++, o++, r = r || {
                index: s
            });
        }
        return r = r || {
            index: this._pieces.length
        }, n.length > 0 && (this._pieces = xpn(this._pieces, r.index, n)), i;
    }
    isComplete() {
        return this._isComplete;
    }
    addSparseTokens(t, n) {
        if (n.getLineContent().length === 0) return n;
        const i = this._pieces;
        if (i.length === 0) return n;
        const r = dkm._findFirstPieceWithLine(i, t), s = i[r].getLineTokens(t);
        if (!s) return n;
        const o = n.getCount(), a = s.getCount();
        let c = 0;
        const l = [];
        let u = 0, h = 0;
        const p = (f, v)=>{
            f !== h && (h = f, l[u++] = f, l[u++] = v);
        }, g = n.getLineContent().length;
        for(let f = 0; f < a; f++){
            const v = s.getStartCharacter(f), b = Math.min(s.getEndCharacter(f), g), y = s.getMetadata(f), T = ((y & 1 ? 2048 : 0) | (y & 2 ? 4096 : 0) | (y & 4 ? 8192 : 0) | (y & 8 ? 16384 : 0) | (y & 16 ? 16744448 : 0) | (y & 32 ? 4278190080 : 0)) >>> 0, E = ~T >>> 0;
            for(; c < o && n.getEndOffset(c) <= v;)p(n.getEndOffset(c), n.getMetadata(c)), c++;
            for(c < o && n.getStartOffset(c) < v && p(v, n.getMetadata(c)); c < o && n.getEndOffset(c) < b;)p(n.getEndOffset(c), n.getMetadata(c) & E | y & T), c++;
            if (c < o) p(b, n.getMetadata(c) & E | y & T), n.getEndOffset(c) === b && c++;
            else {
                const A = Math.min(Math.max(0, c - 1), o - 1);
                p(b, n.getMetadata(A) & E | y & T);
            }
        }
        for(; c < o;)p(n.getEndOffset(c), n.getMetadata(c)), c++;
        return new uA(new Uint32Array(l), n.getLineContent(), this._languageIdCodec);
    }
    static _findFirstPieceWithLine(t, n) {
        let i = 0, r = t.length - 1;
        for(; i < r;){
            let s = i + Math.floor((r - i) / 2);
            if (t[s].endLineNumber < n) i = s + 1;
            else if (t[s].startLineNumber > n) r = s - 1;
            else {
                for(; s > i && t[s - 1].startLineNumber <= n && n <= t[s - 1].endLineNumber;)s--;
                return s;
            }
        }
        return i;
    }
    acceptEdit(t, n, i, r, s) {
        for (const o of this._pieces)o.acceptEdit(t, n, i, r, s);
    }
};

}
