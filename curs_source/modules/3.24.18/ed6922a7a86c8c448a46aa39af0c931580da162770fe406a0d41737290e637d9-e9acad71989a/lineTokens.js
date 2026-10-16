import { ns, si } from "./HVr.js";
import { EBe, s2 } from "./encodedTokenAttributes.js";
import { Mh, uR } from "./offsetRange.js";
import { Ifi, PPc } from "./tokenArray.js";
import { x } from "./tslib.es6.js";
var IXr, uA, LPc;
export { IXr, LPc, uA };
var __wakaru_P7_initialized = false;
export function P7() {
if (__wakaru_P7_initialized) return;
__wakaru_P7_initialized = true;
"use strict";
x(), EBe(), uR(), Ifi(), si(), IXr = class RAt {
    constructor(t, n, i){
        this._lineTokensBrand = void 0, (t.length > 1 ? t[t.length - 2] : 0) !== n.length && ns(new Error("Token length and text length do not match!")), this._tokens = t, this._tokensCount = this._tokens.length >>> 1, this._text = n, this.languageIdCodec = i;
    }
    static createEmpty(t, n) {
        const i = RAt.defaultTokenMetadata, r = new Uint32Array(2);
        return r[0] = t.length, r[1] = i, new RAt(r, t, n);
    }
    static createFromTextAndMetadata(t, n) {
        let i = 0, r = "";
        const s = new Array;
        for (const { text: o, metadata: a } of t)s.push(i + o.length, a), i += o.length, r += o;
        return new RAt(new Uint32Array(s), r, n);
    }
    static convertToEndOffset(t, n) {
        const r = (t.length >>> 1) - 1;
        for(let s = 0; s < r; s++)t[s << 1] = t[s + 1 << 1];
        t[r << 1] = n;
    }
    static findIndexInTokensArray(t, n) {
        if (t.length <= 2) return 0;
        let i = 0, r = (t.length >>> 1) - 1;
        for(; i < r;){
            const s = i + Math.floor((r - i) / 2), o = t[s << 1];
            if (o === n) return s + 1;
            o < n ? i = s + 1 : o > n && (r = s);
        }
        return i;
    }
    equals(t) {
        return t instanceof RAt ? this.slicedEquals(t, 0, this._tokensCount) : !1;
    }
    slicedEquals(t, n, i) {
        if (this._text !== t._text || this._tokensCount !== t._tokensCount) return !1;
        const r = n << 1, s = r + (i << 1);
        for(let o = r; o < s; o++)if (this._tokens[o] !== t._tokens[o]) return !1;
        return !0;
    }
    getLineContent() {
        return this._text;
    }
    getCount() {
        return this._tokensCount;
    }
    getStartOffset(t) {
        return t > 0 ? this._tokens[t - 1 << 1] : 0;
    }
    getMetadata(t) {
        return this._tokens[(t << 1) + 1];
    }
    getLanguageId(t) {
        const n = this._tokens[(t << 1) + 1], i = s2.getLanguageId(n);
        return this.languageIdCodec.decodeLanguageId(i);
    }
    getStandardTokenType(t) {
        const n = this._tokens[(t << 1) + 1];
        return s2.getTokenType(n);
    }
    getForeground(t) {
        const n = this._tokens[(t << 1) + 1];
        return s2.getForeground(n);
    }
    getClassName(t) {
        const n = this._tokens[(t << 1) + 1];
        return s2.getClassNameFromMetadata(n);
    }
    getInlineStyle(t, n) {
        const i = this._tokens[(t << 1) + 1];
        return s2.getInlineStyleFromMetadata(i, n);
    }
    getPresentation(t) {
        const n = this._tokens[(t << 1) + 1];
        return s2.getPresentationFromMetadata(n);
    }
    getEndOffset(t) {
        return this._tokens[t << 1];
    }
    findTokenIndexAtOffset(t) {
        return RAt.findIndexInTokensArray(this._tokens, t);
    }
    inflate() {
        return this;
    }
    sliceAndInflate(t, n, i) {
        return new LPc(this, t, n, i);
    }
    sliceZeroCopy(t) {
        return this.sliceAndInflate(t.start, t.endExclusive, 0);
    }
    withInserted(t) {
        if (t.length === 0) return this;
        let n = 0, i = 0, r = "";
        const s = new Array;
        let o = 0;
        for(;;){
            const a = n < this._tokensCount ? this._tokens[n << 1] : -1, c = i < t.length ? t[i] : null;
            if (a !== -1 && (c === null || a <= c.offset)) {
                r += this._text.substring(o, a);
                const l = this._tokens[(n << 1) + 1];
                s.push(r.length, l), n++, o = a;
            } else if (c) {
                if (c.offset > o) {
                    r += this._text.substring(o, c.offset);
                    const l = this._tokens[(n << 1) + 1];
                    s.push(r.length, l), o = c.offset;
                }
                r += c.text, s.push(r.length, c.tokenMetadata), i++;
            } else break;
        }
        return new RAt(new Uint32Array(s), r, this.languageIdCodec);
    }
    getTokensInRange(t) {
        const n = new PPc, i = this.findTokenIndexAtOffset(t.start), r = this.findTokenIndexAtOffset(t.endExclusive);
        for(let s = i; s <= r; s++){
            const a = new Mh(this.getStartOffset(s), this.getEndOffset(s)).intersectionLength(t);
            a > 0 && n.add(a, this.getMetadata(s));
        }
        return n.build();
    }
    getTokenText(t) {
        const n = this.getStartOffset(t), i = this.getEndOffset(t);
        return this._text.substring(n, i);
    }
    forEach(t) {
        const n = this.getCount();
        for(let i = 0; i < n; i++)t(i);
    }
    extractObject() {
        return {
            tokens: this._tokens,
            text: this._text
        };
    }
    toString() {
        let t = "";
        return this.forEach((n)=>{
            t += `[${this.getTokenText(n)}]{${this.getClassName(n)}}`;
        }), t;
    }
}, IXr.defaultTokenMetadata = (32768 | 2 << 24) >>> 0, uA = IXr, LPc = class qSm {
    constructor(t, n, i, r){
        this._source = t, this._startOffset = n, this._endOffset = i, this._deltaOffset = r, this._firstTokenIndex = t.findTokenIndexAtOffset(n), this.languageIdCodec = t.languageIdCodec, this._tokensCount = 0;
        for(let s = this._firstTokenIndex, o = t.getCount(); s < o && !(t.getStartOffset(s) >= i); s++)this._tokensCount++;
    }
    getMetadata(t) {
        return this._source.getMetadata(this._firstTokenIndex + t);
    }
    getLanguageId(t) {
        return this._source.getLanguageId(this._firstTokenIndex + t);
    }
    getLineContent() {
        return this._source.getLineContent().substring(this._startOffset, this._endOffset);
    }
    equals(t) {
        return t instanceof qSm ? this._startOffset === t._startOffset && this._endOffset === t._endOffset && this._deltaOffset === t._deltaOffset && this._source.slicedEquals(t._source, this._firstTokenIndex, this._tokensCount) : !1;
    }
    getCount() {
        return this._tokensCount;
    }
    getStandardTokenType(t) {
        return this._source.getStandardTokenType(this._firstTokenIndex + t);
    }
    getForeground(t) {
        return this._source.getForeground(this._firstTokenIndex + t);
    }
    getEndOffset(t) {
        const n = this._source.getEndOffset(this._firstTokenIndex + t);
        return Math.min(this._endOffset, n) - this._startOffset + this._deltaOffset;
    }
    getClassName(t) {
        return this._source.getClassName(this._firstTokenIndex + t);
    }
    getInlineStyle(t, n) {
        return this._source.getInlineStyle(this._firstTokenIndex + t, n);
    }
    getPresentation(t) {
        return this._source.getPresentation(this._firstTokenIndex + t);
    }
    findTokenIndexAtOffset(t) {
        return this._source.findTokenIndexAtOffset(t + this._startOffset - this._deltaOffset) - this._firstTokenIndex;
    }
    getTokenText(t) {
        const n = this._firstTokenIndex + t, i = this._source.getStartOffset(n), r = this._source.getEndOffset(n);
        let s = this._source.getTokenText(n);
        return i < this._startOffset && (s = s.substring(this._startOffset - i)), r > this._endOffset && (s = s.substring(0, s.length - (r - this._endOffset))), s;
    }
    forEach(t) {
        for(let n = 0; n < this.getCount(); n++)t(n);
    }
};

}
