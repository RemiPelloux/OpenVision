import { Ei, Mpr } from "./Iwo.js";
import { h0r, nyt } from "./ast.js";
import { Obt, S7 } from "./encodedTokenAttributes.js";
import { Ftt, IQ } from "./length.js";
import { Xve, nfn } from "./smallImmutableSet.js";
import { E } from "./tslib.es6.js";
import { L5, ND, hwe, j2y } from "./ze.js";
var Btt, Djo, GBd, qBd;
export { Btt, Djo, GBd, qBd };
var __wakaru_Njo_initialized = false;
export function Njo() {
if (__wakaru_Njo_initialized) return;
__wakaru_Njo_initialized = true;
"use strict";
E(), Ei(), Obt(), h0r(), Ftt(), nfn(), Btt = class {
    constructor(t, e, n, i, r){
        this.length = t, this.kind = e, this.bracketId = n, this.bracketIds = i, this.astNode = r;
    }
}, Djo = class {
    constructor(t, e){
        this.textModel = t, this.bracketTokens = e, this.reader = new GBd(this.textModel, this.bracketTokens), this._offset = IQ, this.didPeek = !1, this.peeked = null, this.textBufferLineCount = t.getLineCount(), this.textBufferLastLineLength = t.getLineLength(this.textBufferLineCount);
    }
    get offset() {
        return this._offset;
    }
    get length() {
        return L5(this.textBufferLineCount - 1, this.textBufferLastLineLength);
    }
    getText() {
        return this.textModel.getValue();
    }
    skip(t) {
        this.didPeek = !1, this._offset = ND(this._offset, t);
        const e = hwe(this._offset);
        this.reader.setPosition(e.lineCount, e.columnCount);
    }
    read() {
        let t;
        return this.peeked ? (this.didPeek = !1, t = this.peeked) : t = this.reader.read(), t && (this._offset = ND(this._offset, t.length)), t;
    }
    peek() {
        return this.didPeek || (this.peeked = this.reader.read(), this.didPeek = !0), this.peeked;
    }
}, GBd = class {
    constructor(t, e){
        this.textModel = t, this.bracketTokens = e, this.lineIdx = 0, this.line = null, this.lineCharOffset = 0, this.lineTokens = null, this.lineTokenOffset = 0, this.peekedToken = null, this.textBufferLineCount = t.getLineCount(), this.textBufferLastLineLength = t.getLineLength(this.textBufferLineCount);
    }
    setPosition(t, e) {
        t === this.lineIdx ? (this.lineCharOffset = e, this.line !== null && (this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset))) : (this.lineIdx = t, this.lineCharOffset = e, this.line = null), this.peekedToken = null;
    }
    read() {
        if (this.peekedToken) {
            const r = this.peekedToken;
            return this.peekedToken = null, this.lineCharOffset += r.length, r;
        }
        if (this.lineIdx > this.textBufferLineCount - 1 || this.lineIdx === this.textBufferLineCount - 1 && this.lineCharOffset >= this.textBufferLastLineLength) return null;
        this.line === null && (this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1), this.line = this.lineTokens.getLineContent(), this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset));
        const t = this.lineIdx, e = this.lineCharOffset;
        let n = 0;
        for(;;){
            const r = this.lineTokens, s = r.getCount();
            let o = null;
            if (this.lineTokenOffset < s) {
                const a = r.getMetadata(this.lineTokenOffset);
                for(; this.lineTokenOffset + 1 < s && a === r.getMetadata(this.lineTokenOffset + 1);)this.lineTokenOffset++;
                const l = S7.getTokenType(a) === 0, c = S7.containsBalancedBrackets(a), u = r.getEndOffset(this.lineTokenOffset);
                if (c && l && this.lineCharOffset < u) {
                    const d = r.getLanguageId(this.lineTokenOffset), h = this.line.substring(this.lineCharOffset, u), p = this.bracketTokens.getSingleLanguageBracketTokens(d), g = p.regExpGlobal;
                    if (g) {
                        g.lastIndex = 0;
                        const f = g.exec(h);
                        f && (o = p.getToken(f[0]), o && (this.lineCharOffset += f.index));
                    }
                }
                if (n += u - this.lineCharOffset, o) if (t !== this.lineIdx || e !== this.lineCharOffset) {
                    this.peekedToken = o;
                    break;
                } else return this.lineCharOffset += o.length, o;
                else this.lineTokenOffset++, this.lineCharOffset = u;
            } else if (this.lineIdx === this.textBufferLineCount - 1 || (this.lineIdx++, this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1), this.lineTokenOffset = 0, this.line = this.lineTokens.getLineContent(), this.lineCharOffset = 0, n += 33, n > 1e3)) break;
            if (n > 1500) break;
        }
        const i = j2y(t, e, this.lineIdx, this.lineCharOffset);
        return new Btt(i, 0, -1, Xve.getEmpty(), new nyt(i));
    }
}, qBd = class {
    constructor(t, e){
        this.text = t, this._offset = IQ, this.idx = 0;
        const n = e.getRegExpStr(), i = n ? new RegExp(n + `|
`, "gi") : null, r = [];
        let s, o = 0, a = 0, l = 0, c = 0;
        const u = [];
        for(let p = 0; p < 60; p++)u.push(new Btt(L5(0, p), 0, -1, Xve.getEmpty(), new nyt(L5(0, p))));
        const d = [];
        for(let p = 0; p < 60; p++)d.push(new Btt(L5(1, p), 0, -1, Xve.getEmpty(), new nyt(L5(1, p))));
        if (i) for(i.lastIndex = 0; (s = i.exec(t)) !== null;){
            const p = s.index, g = s[0];
            if (g === `
`) o++, a = p + 1;
            else {
                if (l !== p) {
                    let f;
                    if (c === o) {
                        const _ = p - l;
                        if (_ < u.length) f = u[_];
                        else {
                            const b = L5(0, _);
                            f = new Btt(b, 0, -1, Xve.getEmpty(), new nyt(b));
                        }
                    } else {
                        const _ = o - c, b = p - a;
                        if (_ === 1 && b < d.length) f = d[b];
                        else {
                            const y = L5(_, b);
                            f = new Btt(y, 0, -1, Xve.getEmpty(), new nyt(y));
                        }
                    }
                    r.push(f);
                }
                r.push(e.getToken(g)), l = p + g.length, c = o;
            }
        }
        const h = t.length;
        if (l !== h) {
            const p = c === o ? L5(0, h - l) : L5(o - c, h - a);
            r.push(new Btt(p, 0, -1, Xve.getEmpty(), new nyt(p)));
        }
        this.length = L5(o, h - a), this.tokens = r;
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
    skip(t) {
        throw new Mpr;
    }
    getText() {
        return this.text;
    }
};

}
