import { S, Wjr, si } from "./HVr.js";
import { En, qy } from "./charCode.js";
import { rt } from "./nls.js";
import { BYr } from "./qIc.js";
import { x } from "./tslib.es6.js";
var tMc, nMc, zgi, d2t;
export { d2t, nMc, tMc, zgi };
var __wakaru_Jhg_initialized = false;
export function Jhg() {
if (__wakaru_Jhg_initialized) return;
__wakaru_Jhg_initialized = true;
"use strict";
x(), qy(), si(), rt(), tMc = S(1842, null), nMc = S(1843, null), zgi = class hIa {
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
                throw Wjr(`unhandled token type: ${JSON.stringify(t)}; have you forgotten to add a case?`);
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
            case En.OpenParen:
                this._addToken(0);
                break;
            case En.CloseParen:
                this._addToken(1);
                break;
            case En.ExclamationMark:
                if (this._match(En.Equals)) {
                    const n = this._match(En.Equals);
                    this._tokens.push({
                        type: 4,
                        offset: this._start,
                        isTripleEq: n
                    });
                } else this._addToken(2);
                break;
            case En.SingleQuote:
                this._quotedString();
                break;
            case En.Slash:
                this._regex();
                break;
            case En.Equals:
                if (this._match(En.Equals)) {
                    const n = this._match(En.Equals);
                    this._tokens.push({
                        type: 3,
                        offset: this._start,
                        isTripleEq: n
                    });
                } else this._match(En.Tilde) ? this._addToken(9) : this._error(BYr("==", "=~"));
                break;
            case En.LessThan:
                this._addToken(this._match(En.Equals) ? 6 : 5);
                break;
            case En.GreaterThan:
                this._addToken(this._match(En.Equals) ? 8 : 7);
                break;
            case En.Ampersand:
                this._match(En.Ampersand) ? this._addToken(15) : this._error(BYr("&&"));
                break;
            case En.Pipe:
                this._match(En.Pipe) ? this._addToken(16) : this._error(BYr("||"));
                break;
            case En.Space:
            case En.CarriageReturn:
            case En.Tab:
            case En.LineFeed:
            case En.NoBreakSpace:
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
        return this._isAtEnd() ? En.Null : this._input.charCodeAt(this._current);
    }
    _addToken(t) {
        this._tokens.push({
            type: t,
            offset: this._start
        });
    }
    _error(t) {
        const n = this._start, i = this._input.substring(this._start, this._current), r = {
            type: 19,
            offset: this._start,
            lexeme: i
        };
        this._errors.push({
            offset: n,
            lexeme: i,
            additionalInfo: t
        }), this._tokens.push(r);
    }
    _string() {
        this.stringRe.lastIndex = this._start;
        const t = this.stringRe.exec(this._input);
        if (t) {
            this._current = this._start + t[0].length;
            const n = this._input.substring(this._start, this._current), i = hIa._keywords.get(n);
            i ? this._addToken(i) : this._tokens.push({
                type: 17,
                lexeme: n,
                offset: this._start
            });
        }
    }
    _quotedString() {
        for(; this._peek() !== En.SingleQuote && !this._isAtEnd();)this._advance();
        if (this._isAtEnd()) {
            this._error(tMc);
            return;
        }
        this._advance(), this._tokens.push({
            type: 18,
            lexeme: this._input.substring(this._start + 1, this._current - 1),
            offset: this._start + 1
        });
    }
    _regex() {
        let t = this._current, n = !1, i = !1;
        for(;;){
            if (t >= this._input.length) {
                this._current = t, this._error(nMc);
                return;
            }
            const s = this._input.charCodeAt(t);
            if (n) n = !1;
            else if (s === En.Slash && !i) {
                t++;
                break;
            } else s === En.OpenSquareBracket ? i = !0 : s === En.Backslash ? n = !0 : s === En.CloseSquareBracket && (i = !1);
            t++;
        }
        for(; t < this._input.length && hIa._regexFlags.has(this._input.charCodeAt(t));)t++;
        this._current = t;
        const r = this._input.substring(this._start, this._current);
        this._tokens.push({
            type: 10,
            lexeme: r,
            offset: this._start
        });
    }
    _isAtEnd() {
        return this._current >= this._input.length;
    }
}, zgi._regexFlags = new Set([
    "i",
    "g",
    "s",
    "m",
    "y",
    "u"
].map((e)=>e.charCodeAt(0))), zgi._keywords = new Map([
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
]), d2t = zgi;

}
