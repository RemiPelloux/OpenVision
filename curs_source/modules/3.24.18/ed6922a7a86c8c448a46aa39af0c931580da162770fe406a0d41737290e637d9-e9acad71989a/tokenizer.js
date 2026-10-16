import { Opi, si } from "./HVr.js";
import { Ivi, Tze } from "./ast.js";
import { EBe, s2 } from "./encodedTokenAttributes.js";
import { WBe, uW } from "./length.js";
import { BP, Fgg, Sle, pA } from "./qIc.js";
import { dre, mOt } from "./smallImmutableSet.js";
import { x } from "./tslib.es6.js";
var GBe, kQr, gFc, fFc;
export { GBe, fFc, gFc, kQr };
var __wakaru_wQr_initialized = false;
export function wQr() {
if (__wakaru_wQr_initialized) return;
__wakaru_wQr_initialized = true;
"use strict";
x(), si(), EBe(), Ivi(), WBe(), mOt(), GBe = class {
    constructor(e, t, n, i, r){
        this.length = e, this.kind = t, this.bracketId = n, this.bracketIds = i, this.astNode = r;
    }
}, kQr = class {
    constructor(e, t){
        this.textModel = e, this.bracketTokens = t, this.reader = new gFc(this.textModel, this.bracketTokens), this._offset = uW, this.didPeek = !1, this.peeked = null, this.textBufferLineCount = e.getLineCount(), this.textBufferLastLineLength = e.getLineLength(this.textBufferLineCount);
    }
    get offset() {
        return this._offset;
    }
    get length() {
        return BP(this.textBufferLineCount - 1, this.textBufferLastLineLength);
    }
    getText() {
        return this.textModel.getValue();
    }
    skip(e) {
        this.didPeek = !1, this._offset = pA(this._offset, e);
        const t = Sle(this._offset);
        this.reader.setPosition(t.lineCount, t.columnCount);
    }
    read() {
        let e;
        return this.peeked ? (this.didPeek = !1, e = this.peeked) : e = this.reader.read(), e && (this._offset = pA(this._offset, e.length)), e;
    }
    peek() {
        return this.didPeek || (this.peeked = this.reader.read(), this.didPeek = !0), this.peeked;
    }
}, gFc = class {
    constructor(e, t){
        this.textModel = e, this.bracketTokens = t, this.lineIdx = 0, this.line = null, this.lineCharOffset = 0, this.lineTokens = null, this.lineTokenOffset = 0, this.peekedToken = null, this.textBufferLineCount = e.getLineCount(), this.textBufferLastLineLength = e.getLineLength(this.textBufferLineCount);
    }
    setPosition(e, t) {
        e === this.lineIdx ? (this.lineCharOffset = t, this.line !== null && (this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset))) : (this.lineIdx = e, this.lineCharOffset = t, this.line = null), this.peekedToken = null;
    }
    read() {
        if (this.peekedToken) {
            const r = this.peekedToken;
            return this.peekedToken = null, this.lineCharOffset += r.length, r;
        }
        if (this.lineIdx > this.textBufferLineCount - 1 || this.lineIdx === this.textBufferLineCount - 1 && this.lineCharOffset >= this.textBufferLastLineLength) return null;
        this.line === null && (this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1), this.line = this.lineTokens.getLineContent(), this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset));
        const e = this.lineIdx, t = this.lineCharOffset;
        let n = 0;
        for(;;){
            const r = this.lineTokens, s = r.getCount();
            let o = null;
            if (this.lineTokenOffset < s) {
                const a = r.getMetadata(this.lineTokenOffset);
                for(; this.lineTokenOffset + 1 < s && a === r.getMetadata(this.lineTokenOffset + 1);)this.lineTokenOffset++;
                const c = s2.getTokenType(a) === 0, l = s2.containsBalancedBrackets(a), u = r.getEndOffset(this.lineTokenOffset);
                if (l && c && this.lineCharOffset < u) {
                    const h = r.getLanguageId(this.lineTokenOffset), p = this.line.substring(this.lineCharOffset, u), g = this.bracketTokens.getSingleLanguageBracketTokens(h), f = g.regExpGlobal;
                    if (f) {
                        f.lastIndex = 0;
                        const v = f.exec(p);
                        v && (o = g.getToken(v[0]), o && (this.lineCharOffset += v.index));
                    }
                }
                if (n += u - this.lineCharOffset, o) if (e !== this.lineIdx || t !== this.lineCharOffset) {
                    this.peekedToken = o;
                    break;
                } else return this.lineCharOffset += o.length, o;
                else this.lineTokenOffset++, this.lineCharOffset = u;
            } else if (this.lineIdx === this.textBufferLineCount - 1 || (this.lineIdx++, this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1), this.lineTokenOffset = 0, this.line = this.lineTokens.getLineContent(), this.lineCharOffset = 0, n += 33, n > 1e3)) break;
            if (n > 1500) break;
        }
        const i = Fgg(e, t, this.lineIdx, this.lineCharOffset);
        return new GBe(i, 0, -1, dre.getEmpty(), new Tze(i));
    }
}, fFc = class {
    constructor(e, t){
        this.text = e, this._offset = uW, this.idx = 0;
        const n = t.getRegExpStr(), i = n ? new RegExp(n + `|
`, "gi") : null, r = [];
        let s, o = 0, a = 0, c = 0, l = 0;
        const u = [];
        for(let g = 0; g < 60; g++)u.push(new GBe(BP(0, g), 0, -1, dre.getEmpty(), new Tze(BP(0, g))));
        const h = [];
        for(let g = 0; g < 60; g++)h.push(new GBe(BP(1, g), 0, -1, dre.getEmpty(), new Tze(BP(1, g))));
        if (i) for(i.lastIndex = 0; (s = i.exec(e)) !== null;){
            const g = s.index, f = s[0];
            if (f === `
`) o++, a = g + 1;
            else {
                if (c !== g) {
                    let v;
                    if (l === o) {
                        const b = g - c;
                        if (b < u.length) v = u[b];
                        else {
                            const y = BP(0, b);
                            v = new GBe(y, 0, -1, dre.getEmpty(), new Tze(y));
                        }
                    } else {
                        const b = o - l, y = g - a;
                        if (b === 1 && y < h.length) v = h[y];
                        else {
                            const T = BP(b, y);
                            v = new GBe(T, 0, -1, dre.getEmpty(), new Tze(T));
                        }
                    }
                    r.push(v);
                }
                r.push(t.getToken(f)), c = g + f.length, l = o;
            }
        }
        const p = e.length;
        if (c !== p) {
            const g = l === o ? BP(0, p - c) : BP(o - l, p - a);
            r.push(new GBe(g, 0, -1, dre.getEmpty(), new Tze(g)));
        }
        this.length = BP(o, p - a), this.tokens = r;
    }
    get offset() {
        return this._offset;
    }
    read() {
        return this.tokens[this.idx++] || null;
    }
    peek() {
        return this.tokens[this.idx] || null;
    }
    skip(e) {
        throw new Opi;
    }
    getText() {
        return this.text;
    }
};

}
