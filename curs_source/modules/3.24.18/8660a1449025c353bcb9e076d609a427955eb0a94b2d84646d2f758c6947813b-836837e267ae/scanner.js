import { D, Ei, I0o } from "./Iwo.js";
import { CTo } from "./SZu.js";
import { Cw, ti } from "./charCode.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var rQu, sQu, qmr, Bdn;
export { Bdn, qmr, rQu, sQu };
var __wakaru_fyy_initialized = false;
export function fyy() {
if (__wakaru_fyy_initialized) return;
__wakaru_fyy_initialized = true;
"use strict";
E(), Cw(), Ei(), Bt(), rQu = D(1842, null), sQu = D(1843, null), qmr = class GQc {
    constructor(){
        this._input = "", this._start = 0, this._current = 0, this._tokens = [], this._errors = [], this.stringRe = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy;
    }
    static getLexeme(e) {
        switch(e.type){
            case 0:
                return "(";
            case 1:
                return ")";
            case 2:
                return "!";
            case 3:
                return e.isTripleEq ? "===" : "==";
            case 4:
                return e.isTripleEq ? "!==" : "!=";
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
                return e.lexeme;
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
                return e.lexeme;
            case 18:
                return e.lexeme;
            case 19:
                return e.lexeme;
            case 20:
                return "EOF";
            default:
                throw I0o(`unhandled token type: ${JSON.stringify(e)}; have you forgotten to add a case?`);
        }
    }
    get errors() {
        return this._errors;
    }
    reset(e) {
        return this._input = e, this._start = 0, this._current = 0, this._tokens = [], this._errors = [], this;
    }
    scan() {
        for(; !this._isAtEnd();)switch(this._start = this._current, this._advance()){
            case ti.OpenParen:
                this._addToken(0);
                break;
            case ti.CloseParen:
                this._addToken(1);
                break;
            case ti.ExclamationMark:
                if (this._match(ti.Equals)) {
                    const n = this._match(ti.Equals);
                    this._tokens.push({
                        type: 4,
                        offset: this._start,
                        isTripleEq: n
                    });
                } else this._addToken(2);
                break;
            case ti.SingleQuote:
                this._quotedString();
                break;
            case ti.Slash:
                this._regex();
                break;
            case ti.Equals:
                if (this._match(ti.Equals)) {
                    const n = this._match(ti.Equals);
                    this._tokens.push({
                        type: 3,
                        offset: this._start,
                        isTripleEq: n
                    });
                } else this._match(ti.Tilde) ? this._addToken(9) : this._error(CTo("==", "=~"));
                break;
            case ti.LessThan:
                this._addToken(this._match(ti.Equals) ? 6 : 5);
                break;
            case ti.GreaterThan:
                this._addToken(this._match(ti.Equals) ? 8 : 7);
                break;
            case ti.Ampersand:
                this._match(ti.Ampersand) ? this._addToken(15) : this._error(CTo("&&"));
                break;
            case ti.Pipe:
                this._match(ti.Pipe) ? this._addToken(16) : this._error(CTo("||"));
                break;
            case ti.Space:
            case ti.CarriageReturn:
            case ti.Tab:
            case ti.LineFeed:
            case ti.NoBreakSpace:
                break;
            default:
                this._string();
        }
        return this._start = this._current, this._addToken(20), Array.from(this._tokens);
    }
    _match(e) {
        return this._isAtEnd() || this._input.charCodeAt(this._current) !== e ? !1 : (this._current++, !0);
    }
    _advance() {
        return this._input.charCodeAt(this._current++);
    }
    _peek() {
        return this._isAtEnd() ? ti.Null : this._input.charCodeAt(this._current);
    }
    _addToken(e) {
        this._tokens.push({
            type: e,
            offset: this._start
        });
    }
    _error(e) {
        const n = this._start, i = this._input.substring(this._start, this._current), r = {
            type: 19,
            offset: this._start,
            lexeme: i
        };
        this._errors.push({
            offset: n,
            lexeme: i,
            additionalInfo: e
        }), this._tokens.push(r);
    }
    _string() {
        this.stringRe.lastIndex = this._start;
        const e = this.stringRe.exec(this._input);
        if (e) {
            this._current = this._start + e[0].length;
            const n = this._input.substring(this._start, this._current), i = GQc._keywords.get(n);
            i ? this._addToken(i) : this._tokens.push({
                type: 17,
                lexeme: n,
                offset: this._start
            });
        }
    }
    _quotedString() {
        for(; this._peek() !== ti.SingleQuote && !this._isAtEnd();)this._advance();
        if (this._isAtEnd()) {
            this._error(rQu);
            return;
        }
        this._advance(), this._tokens.push({
            type: 18,
            lexeme: this._input.substring(this._start + 1, this._current - 1),
            offset: this._start + 1
        });
    }
    _regex() {
        let e = this._current, n = !1, i = !1;
        for(;;){
            if (e >= this._input.length) {
                this._current = e, this._error(sQu);
                return;
            }
            const s = this._input.charCodeAt(e);
            if (n) n = !1;
            else if (s === ti.Slash && !i) {
                e++;
                break;
            } else s === ti.OpenSquareBracket ? i = !0 : s === ti.Backslash ? n = !0 : s === ti.CloseSquareBracket && (i = !1);
            e++;
        }
        for(; e < this._input.length && GQc._regexFlags.has(this._input.charCodeAt(e));)e++;
        this._current = e;
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
}, qmr._regexFlags = new Set([
    "i",
    "g",
    "s",
    "m",
    "y",
    "u"
].map((t)=>t.charCodeAt(0))), qmr._keywords = new Map([
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
]), Bdn = qmr;

}
