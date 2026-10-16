import { I0, Qe } from "./charCode.js";
import { E } from "./configurationRegistry.js";
import { Ve } from "./errors.js";
import { Ne } from "./nls.js";
import { h } from "./tslib.es6.js";
function T4(e) {
    return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
function A0(...e) {
    switch(e.length){
        case 1:
            return E(1839, null, e[0]);
        case 2:
            return E(1840, null, e[0], e[1]);
        case 3:
            return E(1841, null, e[0], e[1], e[2]);
        default:
            return;
    }
}
var xF, FF, bT, Ql;
export { A0, FF, Ql, T4, bT, xF };
var __wakaru_n5e_initialized = false;
export function n5e() {
if (__wakaru_n5e_initialized) return;
__wakaru_n5e_initialized = true;
"use strict";
h(), I0(), Ve(), Ne(), xF = E(1842, null), FF = E(1843, null), bT = class yx {
    constructor(){
        this._input = "", this._start = 0, this._current = 0, this._tokens = [], this._errors = [], this.stringRe = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy;
    }
    static getLexeme(t) {
        switch(t.type){
            case 0:
                return "(";
            case 1:
                return ")";
            case 2:
                return "!";
            case 3:
                return t.isTripleEq ? "===" : "==";
            case 4:
                return t.isTripleEq ? "!==" : "!=";
            case 5:
                return "<";
            case 6:
                return "<=";
            case 7:
                return ">=";
            case 8:
                return ">=";
            case 9:
                return "=~";
            case 10:
                return t.lexeme;
            case 11:
                return "true";
            case 12:
                return "false";
            case 13:
                return "in";
            case 14:
                return "not";
            case 15:
                return "&&";
            case 16:
                return "||";
            case 17:
                return t.lexeme;
            case 18:
                return t.lexeme;
            case 19:
                return t.lexeme;
            case 20:
                return "EOF";
            default:
                throw T4(`unhandled token type: ${JSON.stringify(t)}; have you forgotten to add a case?`);
        }
    }
    get errors() {
        return this._errors;
    }
    reset(t) {
        return this._input = t, this._start = 0, this._current = 0, this._tokens = [], this._errors = [], this;
    }
    scan() {
        for(; !this._isAtEnd();)switch(this._start = this._current, this._advance()){
            case Qe.OpenParen:
                this._addToken(0);
                break;
            case Qe.CloseParen:
                this._addToken(1);
                break;
            case Qe.ExclamationMark:
                if (this._match(Qe.Equals)) {
                    const n = this._match(Qe.Equals);
                    this._tokens.push({
                        type: 4,
                        offset: this._start,
                        isTripleEq: n
                    });
                } else this._addToken(2);
                break;
            case Qe.SingleQuote:
                this._quotedString();
                break;
            case Qe.Slash:
                this._regex();
                break;
            case Qe.Equals:
                if (this._match(Qe.Equals)) {
                    const n = this._match(Qe.Equals);
                    this._tokens.push({
                        type: 3,
                        offset: this._start,
                        isTripleEq: n
                    });
                } else this._match(Qe.Tilde) ? this._addToken(9) : this._error(A0("==", "=~"));
                break;
            case Qe.LessThan:
                this._addToken(this._match(Qe.Equals) ? 6 : 5);
                break;
            case Qe.GreaterThan:
                this._addToken(this._match(Qe.Equals) ? 8 : 7);
                break;
            case Qe.Ampersand:
                this._match(Qe.Ampersand) ? this._addToken(15) : this._error(A0("&&"));
                break;
            case Qe.Pipe:
                this._match(Qe.Pipe) ? this._addToken(16) : this._error(A0("||"));
                break;
            case Qe.Space:
            case Qe.CarriageReturn:
            case Qe.Tab:
            case Qe.LineFeed:
            case Qe.NoBreakSpace:
                break;
            default:
                this._string();
        }
        return this._start = this._current, this._addToken(20), Array.from(this._tokens);
    }
    _match(t) {
        return this._isAtEnd() || this._input.charCodeAt(this._current) !== t ? !1 : (this._current++, !0);
    }
    _advance() {
        return this._input.charCodeAt(this._current++);
    }
    _peek() {
        return this._isAtEnd() ? Qe.Null : this._input.charCodeAt(this._current);
    }
    _addToken(t) {
        this._tokens.push({
            type: t,
            offset: this._start
        });
    }
    _error(t) {
        const n = this._start, r = this._input.substring(this._start, this._current), s = {
            type: 19,
            offset: this._start,
            lexeme: r
        };
        this._errors.push({
            offset: n,
            lexeme: r,
            additionalInfo: t
        }), this._tokens.push(s);
    }
    _string() {
        this.stringRe.lastIndex = this._start;
        const t = this.stringRe.exec(this._input);
        if (t) {
            this._current = this._start + t[0].length;
            const n = this._input.substring(this._start, this._current), r = yx._keywords.get(n);
            r ? this._addToken(r) : this._tokens.push({
                type: 17,
                lexeme: n,
                offset: this._start
            });
        }
    }
    _quotedString() {
        for(; this._peek() !== Qe.SingleQuote && !this._isAtEnd();)this._advance();
        if (this._isAtEnd()) {
            this._error(xF);
            return;
        }
        this._advance(), this._tokens.push({
            type: 18,
            lexeme: this._input.substring(this._start + 1, this._current - 1),
            offset: this._start + 1
        });
    }
    _regex() {
        let t = this._current, n = !1, r = !1;
        for(;;){
            if (t >= this._input.length) {
                this._current = t, this._error(FF);
                return;
            }
            const i = this._input.charCodeAt(t);
            if (n) n = !1;
            else if (i === Qe.Slash && !r) {
                t++;
                break;
            } else i === Qe.OpenSquareBracket ? r = !0 : i === Qe.Backslash ? n = !0 : i === Qe.CloseSquareBracket && (r = !1);
            t++;
        }
        for(; t < this._input.length && yx._regexFlags.has(this._input.charCodeAt(t));)t++;
        this._current = t;
        const s = this._input.substring(this._start, this._current);
        this._tokens.push({
            type: 10,
            lexeme: s,
            offset: this._start
        });
    }
    _isAtEnd() {
        return this._current >= this._input.length;
    }
}, bT._regexFlags = new Set([
    "i",
    "g",
    "s",
    "m",
    "y",
    "u"
].map((e)=>e.charCodeAt(0))), bT._keywords = new Map([
    [
        "not",
        14
    ],
    [
        "in",
        13
    ],
    [
        "false",
        12
    ],
    [
        "true",
        11
    ]
]), Ql = bT;

}
