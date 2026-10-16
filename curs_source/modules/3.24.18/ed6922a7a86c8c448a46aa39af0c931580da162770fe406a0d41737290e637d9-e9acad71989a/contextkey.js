import { Ai, Dl, Dqr, Mqr, Oo, Pqr, Ps, S, gNt, jn, si, t5, vf } from "./HVr.js";
import { En, qy } from "./charCode.js";
import { Ze } from "./instantiation.js";
import { rt } from "./nls.js";
import { Ght, Hmn, Kgi, UYr, epg, iMc, oMc, rMc, vn } from "./qIc.js";
import { Jhg, d2t } from "./scanner.js";
import { x } from "./tslib.es6.js";
var s5, h2t, aMc, cMc, lMc, uMc, dMc, HYr, hMc, pMc, mMc, gMc, WYr, fMc, he, Ygi, Xgi, BV, Zgi, hJ, p2t, Vht, GYr, VYr, Qgi, m2t, g2t, Jgi, efi, tfi, nfi, vMc, jYr, ifi, qYr, At, xn;
export { At, BV, GYr, HYr, Jgi, Qgi, VYr, Vht, WYr, Xgi, Ygi, Zgi, aMc, cMc, dMc, efi, fMc, g2t, gMc, h2t, hJ, hMc, he, ifi, jYr, lMc, m2t, mMc, nfi, p2t, pMc, qYr, s5, tfi, uMc, vMc, xn };
var __wakaru_dn_initialized = false;
export function dn() {
if (__wakaru_dn_initialized) return;
__wakaru_dn_initialized = true;
"use strict";
x(), qy(), jn(), Ps(), Jhg(), Ze(), rt(), si(), s5 = new Map, s5.set("false", !1), s5.set("true", !0), s5.set("isMac", Ai), s5.set("isLinux", vf), s5.set("isWindows", Oo), s5.set("isWeb", Dl), s5.set("isMacNative", Ai && !Dl), s5.set("isEdge", Pqr), s5.set("isFirefox", Dqr), s5.set("isChrome", gNt), s5.set("isSafari", Mqr), h2t = new Map, aMc = Object.prototype.hasOwnProperty, cMc = {
    regexParsingWithErrorRecovery: !0
}, lMc = S(1818, null), uMc = S(1819, null), dMc = S(1820, null), HYr = S(1821, null), hMc = S(1822, null), pMc = S(1823, null), mMc = S(1824, null), gMc = S(1825, null), WYr = class MXn {
    constructor(t = cMc){
        this._config = t, this._scanner = new d2t, this._tokens = [], this._current = 0, this._parsingErrors = [], this._flagsGYRe = /g|y/g;
    }
    get lexingErrors() {
        return this._scanner.errors;
    }
    get parsingErrors() {
        return this._parsingErrors;
    }
    parse(t) {
        if (t === "") {
            this._parsingErrors.push({
                message: lMc,
                offset: 0,
                lexeme: "",
                additionalInfo: uMc
            });
            return;
        }
        this._tokens = this._scanner.reset(t).scan(), this._current = 0, this._parsingErrors = [];
        try {
            const n = this._expr();
            if (!this._isAtEnd()) {
                const i = this._peek(), r = i.type === 17 ? pMc : void 0;
                throw this._parsingErrors.push({
                    message: hMc,
                    offset: i.offset,
                    lexeme: d2t.getLexeme(i),
                    additionalInfo: r
                }), MXn._parseError;
            }
            return n;
        } catch (n) {
            if (n !== MXn._parseError) throw n;
            return;
        }
    }
    _expr() {
        return this._or();
    }
    _or() {
        const t = [
            this._and()
        ];
        for(; this._matchOne(16);){
            const n = this._and();
            t.push(n);
        }
        return t.length === 1 ? t[0] : he.or(...t);
    }
    _and() {
        const t = [
            this._term()
        ];
        for(; this._matchOne(15);){
            const n = this._term();
            t.push(n);
        }
        return t.length === 1 ? t[0] : he.and(...t);
    }
    _term() {
        if (this._matchOne(2)) {
            const t = this._peek();
            switch(t.type){
                case 11:
                    return this._advance(), BV.INSTANCE;
                case 12:
                    return this._advance(), hJ.INSTANCE;
                case 0:
                    {
                        this._advance();
                        const n = this._expr();
                        return this._consume(1, HYr), n?.negate();
                    }
                case 17:
                    return this._advance(), m2t.create(t.lexeme);
                default:
                    throw this._errExpectedButGot("KEY | true | false | '(' expression ')'", t);
            }
        }
        return this._primary();
    }
    _primary() {
        const t = this._peek();
        switch(t.type){
            case 11:
                return this._advance(), he.true();
            case 12:
                return this._advance(), he.false();
            case 0:
                {
                    this._advance();
                    const n = this._expr();
                    return this._consume(1, HYr), n;
                }
            case 17:
                {
                    if (t.lexeme.startsWith("@")) {
                        this._advance();
                        const r = t.lexeme.substring(1);
                        if (r.startsWith("!")) {
                            const o = r.substring(1), a = iMc(o);
                            if (a) return Ygi.createWithoutRegistration(r, ()=>!a());
                        }
                        const s = iMc(r) || (()=>!1);
                        return Ygi.createWithoutRegistration(r, s);
                    }
                    const n = t.lexeme;
                    if (this._advance(), this._matchOne(9)) {
                        const r = this._peek();
                        if (!this._config.regexParsingWithErrorRecovery) {
                            if (this._advance(), r.type !== 10) throw this._errExpectedButGot("REGEX", r);
                            const s = r.lexeme, o = s.lastIndexOf("/"), a = o === s.length - 1 ? void 0 : this._removeFlagsGY(s.substring(o + 1));
                            let c;
                            try {
                                c = new RegExp(s.substring(1, o), a);
                            } catch  {
                                throw this._errExpectedButGot("REGEX", r);
                            }
                            return nfi.create(n, c);
                        }
                        switch(r.type){
                            case 10:
                            case 19:
                                {
                                    const s = [
                                        r.lexeme
                                    ];
                                    this._advance();
                                    let o = this._peek(), a = 0;
                                    for(let p = 0; p < r.lexeme.length; p++)r.lexeme.charCodeAt(p) === En.OpenParen ? a++ : r.lexeme.charCodeAt(p) === En.CloseParen && a--;
                                    for(; !this._isAtEnd() && o.type !== 15 && o.type !== 16;){
                                        switch(o.type){
                                            case 0:
                                                a++;
                                                break;
                                            case 1:
                                                a--;
                                                break;
                                            case 10:
                                            case 18:
                                                for(let p = 0; p < o.lexeme.length; p++)o.lexeme.charCodeAt(p) === En.OpenParen ? a++ : r.lexeme.charCodeAt(p) === En.CloseParen && a--;
                                        }
                                        if (a < 0) break;
                                        s.push(d2t.getLexeme(o)), this._advance(), o = this._peek();
                                    }
                                    const c = s.join(""), l = c.lastIndexOf("/"), u = l === c.length - 1 ? void 0 : this._removeFlagsGY(c.substring(l + 1));
                                    let h;
                                    try {
                                        h = new RegExp(c.substring(1, l), u);
                                    } catch  {
                                        throw this._errExpectedButGot("REGEX", r);
                                    }
                                    return he.regex(n, h);
                                }
                            case 18:
                                {
                                    const s = r.lexeme;
                                    this._advance();
                                    let o = null;
                                    if (!t5(s)) {
                                        const a = s.indexOf("/"), c = s.lastIndexOf("/");
                                        if (a !== c && a >= 0) {
                                            const l = s.slice(a + 1, c), u = s[c + 1] === "i" ? "i" : "";
                                            try {
                                                o = new RegExp(l, u);
                                            } catch  {
                                                throw this._errExpectedButGot("REGEX", r);
                                            }
                                        }
                                    }
                                    if (o === null) throw this._errExpectedButGot("REGEX", r);
                                    return nfi.create(n, o);
                                }
                            default:
                                throw this._errExpectedButGot("REGEX", this._peek());
                        }
                    }
                    if (this._matchOne(14)) {
                        this._consume(13, dMc);
                        const r = this._value();
                        return he.notIn(n, r);
                    }
                    switch(this._peek().type){
                        case 3:
                            {
                                this._advance();
                                const r = this._value();
                                if (this._previous().type === 18) return he.equals(n, r);
                                switch(r){
                                    case "true":
                                        return he.has(n);
                                    case "false":
                                        return he.not(n);
                                    default:
                                        return he.equals(n, r);
                                }
                            }
                        case 4:
                            {
                                this._advance();
                                const r = this._value();
                                if (this._previous().type === 18) return he.notEquals(n, r);
                                switch(r){
                                    case "true":
                                        return he.not(n);
                                    case "false":
                                        return he.has(n);
                                    default:
                                        return he.notEquals(n, r);
                                }
                            }
                        case 5:
                            return this._advance(), efi.create(n, this._value());
                        case 6:
                            return this._advance(), tfi.create(n, this._value());
                        case 7:
                            return this._advance(), g2t.create(n, this._value());
                        case 8:
                            return this._advance(), Jgi.create(n, this._value());
                        case 13:
                            return this._advance(), he.in(n, this._value());
                        default:
                            return he.has(n);
                    }
                }
            case 20:
                throw this._parsingErrors.push({
                    message: mMc,
                    offset: t.offset,
                    lexeme: "",
                    additionalInfo: gMc
                }), MXn._parseError;
            default:
                throw this._errExpectedButGot(`true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`, this._peek());
        }
    }
    _value() {
        const t = this._peek();
        switch(t.type){
            case 17:
            case 18:
                return this._advance(), t.lexeme;
            case 11:
                return this._advance(), "true";
            case 12:
                return this._advance(), "false";
            case 13:
                return this._advance(), "in";
            default:
                return "";
        }
    }
    _removeFlagsGY(t) {
        return t.replaceAll(this._flagsGYRe, "");
    }
    _previous() {
        return this._tokens[this._current - 1];
    }
    _matchOne(t) {
        return this._check(t) ? (this._advance(), !0) : !1;
    }
    _advance() {
        return this._isAtEnd() || this._current++, this._previous();
    }
    _consume(t, n) {
        if (this._check(t)) return this._advance();
        throw this._errExpectedButGot(n, this._peek());
    }
    _errExpectedButGot(t, n, i) {
        const r = S(1826, null, t, d2t.getLexeme(n)), s = n.offset, o = d2t.getLexeme(n);
        return this._parsingErrors.push({
            message: r,
            offset: s,
            lexeme: o,
            additionalInfo: i
        }), MXn._parseError;
    }
    _check(t) {
        return this._peek().type === t;
    }
    _peek() {
        return this._tokens[this._current];
    }
    _isAtEnd() {
        return this._peek().type === 20;
    }
}, WYr._parseError = new Error, fMc = WYr, he = class {
    static false() {
        return BV.INSTANCE;
    }
    static true() {
        return hJ.INSTANCE;
    }
    static has(e) {
        return p2t.create(e);
    }
    static equals(e, t) {
        return Vht.create(e, t);
    }
    static notEquals(e, t) {
        return Qgi.create(e, t);
    }
    static regex(e, t) {
        return nfi.create(e, t);
    }
    static in(e, t) {
        return GYr.create(e, t);
    }
    static notIn(e, t) {
        return VYr.create(e, t);
    }
    static not(e) {
        return m2t.create(e);
    }
    static and(...e) {
        return jYr.create(e, null, !0);
    }
    static or(...e) {
        return ifi.create(e, null, !0);
    }
    static greater(e, t) {
        return g2t.create(e, t);
    }
    static greaterEquals(e, t) {
        return Jgi.create(e, t);
    }
    static smaller(e, t) {
        return efi.create(e, t);
    }
    static smallerEquals(e, t) {
        return tfi.create(e, t);
    }
    static function(e, t) {
        return Ygi.create(e, t);
    }
    static deserialize(e) {
        return e == null ? void 0 : this._parser.parse(e);
    }
}, he._parser = new fMc({
    regexParsingWithErrorRecovery: !1
}), Ygi = class t1r {
    constructor(t, n){
        this.type = 16, this.id = t, this.fn = n;
    }
    static create(t, n) {
        return epg(t, n), new t1r(t, n);
    }
    static createWithoutRegistration(t, n) {
        return new t1r(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : UYr(this.id, t.id);
    }
    equals(t) {
        return t.type === this.type && this.id === t.id;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return this.fn();
    }
    serialize() {
        return `@${this.id}`;
    }
    keys() {
        return [];
    }
    map(t) {
        return this;
    }
    negate() {
        return t1r.createWithoutRegistration(`!${this.id}`, ()=>!this.fn());
    }
}, Xgi = class {
    constructor(){
        this.type = 0;
    }
    cmp(t) {
        return this.type - t.type;
    }
    equals(t) {
        return t.type === this.type;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return !1;
    }
    serialize() {
        return "false";
    }
    keys() {
        return [];
    }
    map(t) {
        return this;
    }
    negate() {
        return hJ.INSTANCE;
    }
}, Xgi.INSTANCE = new Xgi, BV = Xgi, Zgi = class {
    constructor(){
        this.type = 1;
    }
    cmp(t) {
        return this.type - t.type;
    }
    equals(t) {
        return t.type === this.type;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return !0;
    }
    serialize() {
        return "true";
    }
    keys() {
        return [];
    }
    map(t) {
        return this;
    }
    negate() {
        return BV.INSTANCE;
    }
}, Zgi.INSTANCE = new Zgi, hJ = Zgi, p2t = class ISm {
    constructor(t, n){
        this.key = t, this.negated = n, this.type = 2;
    }
    static create(t, n = null) {
        const i = s5.get(t);
        return typeof i == "boolean" ? i ? hJ.INSTANCE : BV.INSTANCE : new ISm(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : UYr(this.key, t.key);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key : !1;
    }
    substituteConstants() {
        const t = s5.get(this.key);
        return typeof t == "boolean" ? t ? hJ.INSTANCE : BV.INSTANCE : this;
    }
    evaluate(t) {
        return !!t.getValue(this.key);
    }
    serialize() {
        return this.key;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapDefined(this.key);
    }
    negate() {
        return this.negated || (this.negated = m2t.create(this.key, this)), this.negated;
    }
}, Vht = class ASm {
    constructor(t, n, i){
        this.key = t, this.value = n, this.negated = i, this.type = 4;
    }
    static create(t, n, i = null) {
        if (typeof n == "boolean") return n ? p2t.create(t, i) : m2t.create(t, i);
        const r = s5.get(t);
        return typeof r == "boolean" ? n === (r ? "true" : "false") ? hJ.INSTANCE : BV.INSTANCE : new ASm(t, n, i);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : Ght(this.key, this.value, t.key, t.value);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.value === t.value : !1;
    }
    substituteConstants() {
        const t = s5.get(this.key);
        if (typeof t == "boolean") {
            const n = t ? "true" : "false";
            return this.value === n ? hJ.INSTANCE : BV.INSTANCE;
        }
        return this;
    }
    evaluate(t) {
        return t.getValue(this.key) == this.value;
    }
    serialize() {
        return `${this.key} == '${this.value}'`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapEquals(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = Qgi.create(this.key, this.value, this)), this.negated;
    }
}, GYr = class RSm {
    constructor(t, n){
        this.key = t, this.valueKey = n, this.type = 10, this.negated = null;
    }
    static create(t, n) {
        return new RSm(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : Ght(this.key, this.valueKey, t.key, t.valueKey);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.valueKey === t.valueKey : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        const n = t.getValue(this.valueKey), i = t.getValue(this.key);
        return Array.isArray(n) ? n.includes(i) : typeof i == "string" && typeof n == "object" && n !== null ? aMc.call(n, i) : !1;
    }
    serialize() {
        return `${this.key} in '${this.valueKey}'`;
    }
    keys() {
        return [
            this.key,
            this.valueKey
        ];
    }
    map(t) {
        return t.mapIn(this.key, this.valueKey);
    }
    negate() {
        return this.negated || (this.negated = VYr.create(this.key, this.valueKey)), this.negated;
    }
}, VYr = class DSm {
    constructor(t, n){
        this.key = t, this.valueKey = n, this.type = 11, this._negated = GYr.create(t, n);
    }
    static create(t, n) {
        return new DSm(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : this._negated.cmp(t._negated);
    }
    equals(t) {
        return t.type === this.type ? this._negated.equals(t._negated) : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return !this._negated.evaluate(t);
    }
    serialize() {
        return `${this.key} not in '${this.valueKey}'`;
    }
    keys() {
        return this._negated.keys();
    }
    map(t) {
        return t.mapNotIn(this.key, this.valueKey);
    }
    negate() {
        return this._negated;
    }
}, Qgi = class MSm {
    constructor(t, n, i){
        this.key = t, this.value = n, this.negated = i, this.type = 5;
    }
    static create(t, n, i = null) {
        if (typeof n == "boolean") return n ? m2t.create(t, i) : p2t.create(t, i);
        const r = s5.get(t);
        return typeof r == "boolean" ? n === (r ? "true" : "false") ? BV.INSTANCE : hJ.INSTANCE : new MSm(t, n, i);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : Ght(this.key, this.value, t.key, t.value);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.value === t.value : !1;
    }
    substituteConstants() {
        const t = s5.get(this.key);
        if (typeof t == "boolean") {
            const n = t ? "true" : "false";
            return this.value === n ? BV.INSTANCE : hJ.INSTANCE;
        }
        return this;
    }
    evaluate(t) {
        return t.getValue(this.key) != this.value;
    }
    serialize() {
        return `${this.key} != '${this.value}'`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapNotEquals(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = Vht.create(this.key, this.value, this)), this.negated;
    }
}, m2t = class PSm {
    constructor(t, n){
        this.key = t, this.negated = n, this.type = 3;
    }
    static create(t, n = null) {
        const i = s5.get(t);
        return typeof i == "boolean" ? i ? BV.INSTANCE : hJ.INSTANCE : new PSm(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : UYr(this.key, t.key);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key : !1;
    }
    substituteConstants() {
        const t = s5.get(this.key);
        return typeof t == "boolean" ? t ? BV.INSTANCE : hJ.INSTANCE : this;
    }
    evaluate(t) {
        return !t.getValue(this.key);
    }
    serialize() {
        return `!${this.key}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapNot(this.key);
    }
    negate() {
        return this.negated || (this.negated = p2t.create(this.key, this)), this.negated;
    }
}, g2t = class LSm {
    constructor(t, n, i){
        this.key = t, this.value = n, this.negated = i, this.type = 12;
    }
    static create(t, n, i = null) {
        return Kgi(n, (r)=>new LSm(t, r, i));
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : Ght(this.key, this.value, t.key, t.value);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.value === t.value : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return typeof this.value == "string" ? !1 : parseFloat(t.getValue(this.key)) > this.value;
    }
    serialize() {
        return `${this.key} > ${this.value}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapGreater(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = tfi.create(this.key, this.value, this)), this.negated;
    }
}, Jgi = class NSm {
    constructor(t, n, i){
        this.key = t, this.value = n, this.negated = i, this.type = 13;
    }
    static create(t, n, i = null) {
        return Kgi(n, (r)=>new NSm(t, r, i));
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : Ght(this.key, this.value, t.key, t.value);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.value === t.value : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return typeof this.value == "string" ? !1 : parseFloat(t.getValue(this.key)) >= this.value;
    }
    serialize() {
        return `${this.key} >= ${this.value}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapGreaterEquals(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = efi.create(this.key, this.value, this)), this.negated;
    }
}, efi = class OSm {
    constructor(t, n, i){
        this.key = t, this.value = n, this.negated = i, this.type = 14;
    }
    static create(t, n, i = null) {
        return Kgi(n, (r)=>new OSm(t, r, i));
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : Ght(this.key, this.value, t.key, t.value);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.value === t.value : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return typeof this.value == "string" ? !1 : parseFloat(t.getValue(this.key)) < this.value;
    }
    serialize() {
        return `${this.key} < ${this.value}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapSmaller(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = Jgi.create(this.key, this.value, this)), this.negated;
    }
}, tfi = class FSm {
    constructor(t, n, i){
        this.key = t, this.value = n, this.negated = i, this.type = 15;
    }
    static create(t, n, i = null) {
        return Kgi(n, (r)=>new FSm(t, r, i));
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : Ght(this.key, this.value, t.key, t.value);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.value === t.value : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return typeof this.value == "string" ? !1 : parseFloat(t.getValue(this.key)) <= this.value;
    }
    serialize() {
        return `${this.key} <= ${this.value}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapSmallerEquals(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = g2t.create(this.key, this.value, this)), this.negated;
    }
}, nfi = class BSm {
    constructor(t, n){
        this.key = t, this.regexp = n, this.type = 7, this.negated = null;
    }
    static create(t, n) {
        return new BSm(t, n);
    }
    cmp(t) {
        if (t.type !== this.type) return this.type - t.type;
        if (this.key < t.key) return -1;
        if (this.key > t.key) return 1;
        const n = this.regexp ? this.regexp.source : "", i = t.regexp ? t.regexp.source : "";
        return n < i ? -1 : n > i ? 1 : 0;
    }
    equals(t) {
        if (t.type === this.type) {
            const n = this.regexp ? this.regexp.source : "", i = t.regexp ? t.regexp.source : "";
            return this.key === t.key && n === i;
        }
        return !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        const n = t.getValue(this.key);
        return this.regexp ? this.regexp.test(n) : !1;
    }
    serialize() {
        const t = this.regexp ? `/${this.regexp.source}/${this.regexp.flags}` : "/invalid/";
        return `${this.key} =~ ${t}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(t) {
        return t.mapRegex(this.key, this.regexp);
    }
    negate() {
        return this.negated || (this.negated = vMc.create(this)), this.negated;
    }
}, vMc = class pIa {
    constructor(t){
        this._actual = t, this.type = 8;
    }
    static create(t) {
        return new pIa(t);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : this._actual.cmp(t._actual);
    }
    equals(t) {
        return t.type === this.type ? this._actual.equals(t._actual) : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        return !this._actual.evaluate(t);
    }
    serialize() {
        return `!(${this._actual.serialize()})`;
    }
    keys() {
        return this._actual.keys();
    }
    map(t) {
        return new pIa(this._actual.map(t));
    }
    negate() {
        return this._actual;
    }
}, jYr = class yin {
    constructor(t, n){
        this.expr = t, this.negated = n, this.type = 6;
    }
    static create(t, n, i) {
        return yin._normalizeArr(t, n, i);
    }
    cmp(t) {
        if (t.type !== this.type) return this.type - t.type;
        if (this.expr.length < t.expr.length) return -1;
        if (this.expr.length > t.expr.length) return 1;
        for(let n = 0, i = this.expr.length; n < i; n++){
            const r = Hmn(this.expr[n], t.expr[n]);
            if (r !== 0) return r;
        }
        return 0;
    }
    equals(t) {
        if (t.type === this.type) {
            if (this.expr.length !== t.expr.length) return !1;
            for(let n = 0, i = this.expr.length; n < i; n++)if (!this.expr[n].equals(t.expr[n])) return !1;
            return !0;
        }
        return !1;
    }
    substituteConstants() {
        const t = rMc(this.expr);
        return t === this.expr ? this : yin.create(t, this.negated, !1);
    }
    evaluate(t) {
        for(let n = 0, i = this.expr.length; n < i; n++)if (!this.expr[n].evaluate(t)) return !1;
        return !0;
    }
    static _normalizeArr(t, n, i) {
        const r = [];
        let s = !1;
        for (const o of t)if (o) {
            if (o.type === 1) {
                s = !0;
                continue;
            }
            if (o.type === 0) return BV.INSTANCE;
            if (o.type === 6) {
                r.push(...o.expr);
                continue;
            }
            r.push(o);
        }
        if (r.length === 0 && s) return hJ.INSTANCE;
        if (r.length !== 0) {
            if (r.length === 1) return r[0];
            r.sort(Hmn);
            for(let o = 1; o < r.length; o++)r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
            if (r.length === 1) return r[0];
            for(; r.length > 1;){
                const o = r[r.length - 1];
                if (o.type !== 9) break;
                r.pop();
                const a = r.pop(), c = r.length === 0, l = ifi.create(o.expr.map((u)=>yin.create([
                        u,
                        a
                    ], null, i)), null, c);
                l && (r.push(l), r.sort(Hmn));
            }
            if (r.length === 1) return r[0];
            if (i) {
                for(let o = 0; o < r.length; o++)for(let a = o + 1; a < r.length; a++)if (r[o].negate().equals(r[a])) return BV.INSTANCE;
                if (r.length === 1) return r[0];
            }
            return new yin(r, n);
        }
    }
    serialize() {
        return this.expr.map((t)=>t.serialize()).join(" && ");
    }
    keys() {
        const t = [];
        for (const n of this.expr)t.push(...n.keys());
        return t;
    }
    map(t) {
        return new yin(this.expr.map((n)=>n.map(t)), null);
    }
    negate() {
        if (!this.negated) {
            const t = [];
            for (const n of this.expr)t.push(n.negate());
            this.negated = ifi.create(t, this, !0);
        }
        return this.negated;
    }
}, ifi = class AAt {
    constructor(t, n){
        this.expr = t, this.negated = n, this.type = 9;
    }
    static create(t, n, i) {
        return AAt._normalizeArr(t, n, i);
    }
    cmp(t) {
        if (t.type !== this.type) return this.type - t.type;
        if (this.expr.length < t.expr.length) return -1;
        if (this.expr.length > t.expr.length) return 1;
        for(let n = 0, i = this.expr.length; n < i; n++){
            const r = Hmn(this.expr[n], t.expr[n]);
            if (r !== 0) return r;
        }
        return 0;
    }
    equals(t) {
        if (t.type === this.type) {
            if (this.expr.length !== t.expr.length) return !1;
            for(let n = 0, i = this.expr.length; n < i; n++)if (!this.expr[n].equals(t.expr[n])) return !1;
            return !0;
        }
        return !1;
    }
    substituteConstants() {
        const t = rMc(this.expr);
        return t === this.expr ? this : AAt.create(t, this.negated, !1);
    }
    evaluate(t) {
        for(let n = 0, i = this.expr.length; n < i; n++)if (this.expr[n].evaluate(t)) return !0;
        return !1;
    }
    static _normalizeArr(t, n, i) {
        let r = [], s = !1;
        if (t) {
            for(let o = 0, a = t.length; o < a; o++){
                const c = t[o];
                if (c) {
                    if (c.type === 0) {
                        s = !0;
                        continue;
                    }
                    if (c.type === 1) return hJ.INSTANCE;
                    if (c.type === 9) {
                        r = r.concat(c.expr);
                        continue;
                    }
                    r.push(c);
                }
            }
            if (r.length === 0 && s) return BV.INSTANCE;
            r.sort(Hmn);
        }
        if (r.length !== 0) {
            if (r.length === 1) return r[0];
            for(let o = 1; o < r.length; o++)r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
            if (r.length === 1) return r[0];
            if (i) {
                for(let o = 0; o < r.length; o++)for(let a = o + 1; a < r.length; a++)if (r[o].negate().equals(r[a])) return hJ.INSTANCE;
                if (r.length === 1) return r[0];
            }
            return new AAt(r, n);
        }
    }
    serialize() {
        return this.expr.map((t)=>t.serialize()).join(" || ");
    }
    keys() {
        const t = [];
        for (const n of this.expr)t.push(...n.keys());
        return t;
    }
    map(t) {
        return new AAt(this.expr.map((n)=>n.map(t)), null);
    }
    negate() {
        if (!this.negated) {
            const t = [];
            for (const n of this.expr)t.push(n.negate());
            for(; t.length > 1;){
                const n = t.shift(), i = t.shift(), r = [];
                for (const s of oMc(n))for (const o of oMc(i))r.push(jYr.create([
                    s,
                    o
                ], null, !1));
                t.unshift(AAt.create(r, null, !1));
            }
            this.negated = AAt.create(t, this, !0);
        }
        return this.negated;
    }
}, qYr = class n1r extends p2t {
    static all() {
        return n1r._info.values();
    }
    constructor(t, n, i){
        super(t, null), this._defaultValue = n, typeof i == "object" ? n1r._info.push({
            ...i,
            key: t
        }) : i !== !0 && n1r._info.push({
            key: t,
            description: i,
            type: n != null ? typeof n : void 0
        });
    }
    bindTo(t) {
        return t.createKey(this.key, this._defaultValue);
    }
    getValue(t) {
        return t.getContextKeyValue(this.key);
    }
    toNegated() {
        return this.negate();
    }
    isEqualTo(t) {
        return Vht.create(this.key, t);
    }
    notEqualsTo(t) {
        return Qgi.create(this.key, t);
    }
    greater(t) {
        return g2t.create(this.key, t);
    }
}, qYr._info = [], At = qYr, xn = vn("contextKeyService");

}
