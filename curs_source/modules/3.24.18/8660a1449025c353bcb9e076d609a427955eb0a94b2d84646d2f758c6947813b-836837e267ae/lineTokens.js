import { Ei, xr } from "./Iwo.js";
import { Obt, S7 } from "./encodedTokenAttributes.js";
import { Im, W3 } from "./offsetRange.js";
import { $Fd, fwr } from "./tokenArray.js";
import { E } from "./tslib.es6.js";
var dUo, PD, HFd;
export { HFd, PD, dUo };
var __wakaru_SY_initialized = false;
export function SY() {
if (__wakaru_SY_initialized) return;
__wakaru_SY_initialized = true;
"use strict";
E(), Obt(), W3(), fwr(), Ei(), dUo = class Lsn {
    constructor(e, n, i){
        this._lineTokensBrand = void 0, (e.length > 1 ? e[e.length - 2] : 0) !== n.length && xr(new Error("Token length and text length do not match!")), this._tokens = e, this._tokensCount = this._tokens.length >>> 1, this._text = n, this.languageIdCodec = i;
    }
    static createEmpty(e, n) {
        const i = Lsn.defaultTokenMetadata, r = new Uint32Array(2);
        return r[0] = e.length, r[1] = i, new Lsn(r, e, n);
    }
    static createFromTextAndMetadata(e, n) {
        let i = 0, r = "";
        const s = new Array;
        for (const { text: o, metadata: a } of e)s.push(i + o.length, a), i += o.length, r += o;
        return new Lsn(new Uint32Array(s), r, n);
    }
    static convertToEndOffset(e, n) {
        const r = (e.length >>> 1) - 1;
        for(let s = 0; s < r; s++)e[s << 1] = e[s + 1 << 1];
        e[r << 1] = n;
    }
    static findIndexInTokensArray(e, n) {
        if (e.length <= 2) return 0;
        let i = 0, r = (e.length >>> 1) - 1;
        for(; i < r;){
            const s = i + Math.floor((r - i) / 2), o = e[s << 1];
            if (o === n) return s + 1;
            o < n ? i = s + 1 : o > n && (r = s);
        }
        return i;
    }
    equals(e) {
        return e instanceof Lsn ? this.slicedEquals(e, 0, this._tokensCount) : !1;
    }
    slicedEquals(e, n, i) {
        if (this._text !== e._text || this._tokensCount !== e._tokensCount) return !1;
        const r = n << 1, s = r + (i << 1);
        for(let o = r; o < s; o++)if (this._tokens[o] !== e._tokens[o]) return !1;
        return !0;
    }
    getLineContent() {
        return this._text;
    }
    getCount() {
        return this._tokensCount;
    }
    getStartOffset(e) {
        return e > 0 ? this._tokens[e - 1 << 1] : 0;
    }
    getMetadata(e) {
        return this._tokens[(e << 1) + 1];
    }
    getLanguageId(e) {
        const n = this._tokens[(e << 1) + 1], i = S7.getLanguageId(n);
        return this.languageIdCodec.decodeLanguageId(i);
    }
    getStandardTokenType(e) {
        const n = this._tokens[(e << 1) + 1];
        return S7.getTokenType(n);
    }
    getForeground(e) {
        const n = this._tokens[(e << 1) + 1];
        return S7.getForeground(n);
    }
    getClassName(e) {
        const n = this._tokens[(e << 1) + 1];
        return S7.getClassNameFromMetadata(n);
    }
    getInlineStyle(e, n) {
        const i = this._tokens[(e << 1) + 1];
        return S7.getInlineStyleFromMetadata(i, n);
    }
    getPresentation(e) {
        const n = this._tokens[(e << 1) + 1];
        return S7.getPresentationFromMetadata(n);
    }
    getEndOffset(e) {
        return this._tokens[e << 1];
    }
    findTokenIndexAtOffset(e) {
        return Lsn.findIndexInTokensArray(this._tokens, e);
    }
    inflate() {
        return this;
    }
    sliceAndInflate(e, n, i) {
        return new HFd(this, e, n, i);
    }
    sliceZeroCopy(e) {
        return this.sliceAndInflate(e.start, e.endExclusive, 0);
    }
    withInserted(e) {
        if (e.length === 0) return this;
        let n = 0, i = 0, r = "";
        const s = new Array;
        let o = 0;
        for(;;){
            const a = n < this._tokensCount ? this._tokens[n << 1] : -1, l = i < e.length ? e[i] : null;
            if (a !== -1 && (l === null || a <= l.offset)) {
                r += this._text.substring(o, a);
                const c = this._tokens[(n << 1) + 1];
                s.push(r.length, c), n++, o = a;
            } else if (l) {
                if (l.offset > o) {
                    r += this._text.substring(o, l.offset);
                    const c = this._tokens[(n << 1) + 1];
                    s.push(r.length, c), o = l.offset;
                }
                r += l.text, s.push(r.length, l.tokenMetadata), i++;
            } else break;
        }
        return new Lsn(new Uint32Array(s), r, this.languageIdCodec);
    }
    getTokensInRange(e) {
        const n = new $Fd, i = this.findTokenIndexAtOffset(e.start), r = this.findTokenIndexAtOffset(e.endExclusive);
        for(let s = i; s <= r; s++){
            const a = new Im(this.getStartOffset(s), this.getEndOffset(s)).intersectionLength(e);
            a > 0 && n.add(a, this.getMetadata(s));
        }
        return n.build();
    }
    getTokenText(e) {
        const n = this.getStartOffset(e), i = this.getEndOffset(e);
        return this._text.substring(n, i);
    }
    forEach(e) {
        const n = this.getCount();
        for(let i = 0; i < n; i++)e(i);
    }
    extractObject() {
        return {
            tokens: this._tokens,
            text: this._text
        };
    }
    toString() {
        let e = "";
        return this.forEach((n)=>{
            e += `[${this.getTokenText(n)}]{${this.getClassName(n)}}`;
        }), e;
    }
}, dUo.defaultTokenMetadata = (32768 | 2 << 24) >>> 0, PD = dUo, HFd = class yAb {
    constructor(e, n, i, r){
        this._source = e, this._startOffset = n, this._endOffset = i, this._deltaOffset = r, this._firstTokenIndex = e.findTokenIndexAtOffset(n), this.languageIdCodec = e.languageIdCodec, this._tokensCount = 0;
        for(let s = this._firstTokenIndex, o = e.getCount(); s < o && !(e.getStartOffset(s) >= i); s++)this._tokensCount++;
    }
    getMetadata(e) {
        return this._source.getMetadata(this._firstTokenIndex + e);
    }
    getLanguageId(e) {
        return this._source.getLanguageId(this._firstTokenIndex + e);
    }
    getLineContent() {
        return this._source.getLineContent().substring(this._startOffset, this._endOffset);
    }
    equals(e) {
        return e instanceof yAb ? this._startOffset === e._startOffset && this._endOffset === e._endOffset && this._deltaOffset === e._deltaOffset && this._source.slicedEquals(e._source, this._firstTokenIndex, this._tokensCount) : !1;
    }
    getCount() {
        return this._tokensCount;
    }
    getStandardTokenType(e) {
        return this._source.getStandardTokenType(this._firstTokenIndex + e);
    }
    getForeground(e) {
        return this._source.getForeground(this._firstTokenIndex + e);
    }
    getEndOffset(e) {
        const n = this._source.getEndOffset(this._firstTokenIndex + e);
        return Math.min(this._endOffset, n) - this._startOffset + this._deltaOffset;
    }
    getClassName(e) {
        return this._source.getClassName(this._firstTokenIndex + e);
    }
    getInlineStyle(e, n) {
        return this._source.getInlineStyle(this._firstTokenIndex + e, n);
    }
    getPresentation(e) {
        return this._source.getPresentation(this._firstTokenIndex + e);
    }
    findTokenIndexAtOffset(e) {
        return this._source.findTokenIndexAtOffset(e + this._startOffset - this._deltaOffset) - this._firstTokenIndex;
    }
    getTokenText(e) {
        const n = this._firstTokenIndex + e, i = this._source.getStartOffset(n), r = this._source.getEndOffset(n);
        let s = this._source.getTokenText(n);
        return i < this._startOffset && (s = s.substring(this._startOffset - i)), r > this._endOffset && (s = s.substring(0, s.length - (r - this._endOffset))), s;
    }
    forEach(e) {
        for(let n = 0; n < this.getCount(); n++)e(n);
    }
};

}
