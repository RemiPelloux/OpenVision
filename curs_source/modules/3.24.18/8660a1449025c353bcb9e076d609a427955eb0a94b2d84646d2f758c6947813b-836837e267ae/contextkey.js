import { D, Di, Ei, Fa, Vq, _r, a_, bCo, rXu, smr, th, xa, yCo } from "./Iwo.js";
import { S6t, TTo, aQu, cQu, jn, oQu, vyy, wZn, zmr } from "./SZu.js";
import { Cw, ti } from "./charCode.js";
import { It } from "./instantiation.js";
import { Bt } from "./nls.js";
import { Bdn, fyy } from "./scanner.js";
import { E } from "./tslib.es6.js";
var wj, Udn, uQu, dQu, hQu, pQu, mQu, ITo, gQu, fQu, vQu, _Qu, xTo, bQu, mt, Vmr, Kmr, Fte, Ymr, Dde, jdn, k6t, ATo, RTo, Xmr, $dn, CZn, Zmr, Qmr, Jmr, egr, yQu, PTo, tgr, MTo, cn, Rr;
export { $dn, ATo, CZn, Dde, Fte, ITo, Jmr, Kmr, MTo, PTo, Qmr, RTo, Rr, Udn, Vmr, Xmr, Ymr, Zmr, _Qu, bQu, cn, dQu, egr, fQu, gQu, hQu, jdn, k6t, mQu, mt, pQu, tgr, uQu, vQu, wj, xTo, yQu };
var __wakaru_Hi_initialized = false;
export function Hi() {
if (__wakaru_Hi_initialized) return;
__wakaru_Hi_initialized = true;
"use strict";
E(), Cw(), Di(), Fa(), fyy(), It(), Bt(), Ei(), wj = new Map, wj.set("false", !1), wj.set("true", !0), wj.set("isMac", _r), wj.set("isLinux", a_), wj.set("isWindows", xa), wj.set("isWeb", th), wj.set("isMacNative", _r && !th), wj.set("isEdge", yCo), wj.set("isFirefox", bCo), wj.set("isChrome", smr), wj.set("isSafari", rXu), Udn = new Map, uQu = Object.prototype.hasOwnProperty, dQu = {
    regexParsingWithErrorRecovery: !0
}, hQu = D(1818, null), pQu = D(1819, null), mQu = D(1820, null), ITo = D(1821, null), gQu = D(1822, null), fQu = D(1823, null), vQu = D(1824, null), _Qu = D(1825, null), xTo = class oXi {
    constructor(e = dQu){
        this._config = e, this._scanner = new Bdn, this._tokens = [], this._current = 0, this._parsingErrors = [], this._flagsGYRe = /g|y/g;
    }
    get lexingErrors() {
        return this._scanner.errors;
    }
    get parsingErrors() {
        return this._parsingErrors;
    }
    parse(e) {
        if (e === "") {
            this._parsingErrors.push({
                message: hQu,
                offset: 0,
                lexeme: "",
                additionalInfo: pQu
            });
            return;
        }
        this._tokens = this._scanner.reset(e).scan(), this._current = 0, this._parsingErrors = [];
        try {
            const n = this._expr();
            if (!this._isAtEnd()) {
                const i = this._peek(), r = i.type === 17 ? fQu : void 0;
                throw this._parsingErrors.push({
                    message: gQu,
                    offset: i.offset,
                    lexeme: Bdn.getLexeme(i),
                    additionalInfo: r
                }), oXi._parseError;
            }
            return n;
        } catch (n) {
            if (n !== oXi._parseError) throw n;
            return;
        }
    }
    _expr() {
        return this._or();
    }
    _or() {
        const e = [
            this._and()
        ];
        for(; this._matchOne(16);){
            const n = this._and();
            e.push(n);
        }
        return e.length === 1 ? e[0] : mt.or(...e);
    }
    _and() {
        const e = [
            this._term()
        ];
        for(; this._matchOne(15);){
            const n = this._term();
            e.push(n);
        }
        return e.length === 1 ? e[0] : mt.and(...e);
    }
    _term() {
        if (this._matchOne(2)) {
            const e = this._peek();
            switch(e.type){
                case 11:
                    return this._advance(), Fte.INSTANCE;
                case 12:
                    return this._advance(), Dde.INSTANCE;
                case 0:
                    {
                        this._advance();
                        const n = this._expr();
                        return this._consume(1, ITo), n?.negate();
                    }
                case 17:
                    return this._advance(), $dn.create(e.lexeme);
                default:
                    throw this._errExpectedButGot("KEY | true | false | '(' expression ')'", e);
            }
        }
        return this._primary();
    }
    _primary() {
        const e = this._peek();
        switch(e.type){
            case 11:
                return this._advance(), mt.true();
            case 12:
                return this._advance(), mt.false();
            case 0:
                {
                    this._advance();
                    const n = this._expr();
                    return this._consume(1, ITo), n;
                }
            case 17:
                {
                    if (e.lexeme.startsWith("@")) {
                        this._advance();
                        const r = e.lexeme.substring(1);
                        if (r.startsWith("!")) {
                            const o = r.substring(1), a = oQu(o);
                            if (a) return Vmr.createWithoutRegistration(r, ()=>!a());
                        }
                        const s = oQu(r) || (()=>!1);
                        return Vmr.createWithoutRegistration(r, s);
                    }
                    const n = e.lexeme;
                    if (this._advance(), this._matchOne(9)) {
                        const r = this._peek();
                        if (!this._config.regexParsingWithErrorRecovery) {
                            if (this._advance(), r.type !== 10) throw this._errExpectedButGot("REGEX", r);
                            const s = r.lexeme, o = s.lastIndexOf("/"), a = o === s.length - 1 ? void 0 : this._removeFlagsGY(s.substring(o + 1));
                            let l;
                            try {
                                l = new RegExp(s.substring(1, o), a);
                            } catch  {
                                throw this._errExpectedButGot("REGEX", r);
                            }
                            return egr.create(n, l);
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
                                    for(let h = 0; h < r.lexeme.length; h++)r.lexeme.charCodeAt(h) === ti.OpenParen ? a++ : r.lexeme.charCodeAt(h) === ti.CloseParen && a--;
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
                                                for(let h = 0; h < o.lexeme.length; h++)o.lexeme.charCodeAt(h) === ti.OpenParen ? a++ : r.lexeme.charCodeAt(h) === ti.CloseParen && a--;
                                        }
                                        if (a < 0) break;
                                        s.push(Bdn.getLexeme(o)), this._advance(), o = this._peek();
                                    }
                                    const l = s.join(""), c = l.lastIndexOf("/"), u = c === l.length - 1 ? void 0 : this._removeFlagsGY(l.substring(c + 1));
                                    let d;
                                    try {
                                        d = new RegExp(l.substring(1, c), u);
                                    } catch  {
                                        throw this._errExpectedButGot("REGEX", r);
                                    }
                                    return mt.regex(n, d);
                                }
                            case 18:
                                {
                                    const s = r.lexeme;
                                    this._advance();
                                    let o = null;
                                    if (!Vq(s)) {
                                        const a = s.indexOf("/"), l = s.lastIndexOf("/");
                                        if (a !== l && a >= 0) {
                                            const c = s.slice(a + 1, l), u = s[l + 1] === "i" ? "i" : "";
                                            try {
                                                o = new RegExp(c, u);
                                            } catch  {
                                                throw this._errExpectedButGot("REGEX", r);
                                            }
                                        }
                                    }
                                    if (o === null) throw this._errExpectedButGot("REGEX", r);
                                    return egr.create(n, o);
                                }
                            default:
                                throw this._errExpectedButGot("REGEX", this._peek());
                        }
                    }
                    if (this._matchOne(14)) {
                        this._consume(13, mQu);
                        const r = this._value();
                        return mt.notIn(n, r);
                    }
                    switch(this._peek().type){
                        case 3:
                            {
                                this._advance();
                                const r = this._value();
                                if (this._previous().type === 18) return mt.equals(n, r);
                                switch(r){
                                    case "true":
                                        return mt.has(n);
                                    case "false":
                                        return mt.not(n);
                                    default:
                                        return mt.equals(n, r);
                                }
                            }
                        case 4:
                            {
                                this._advance();
                                const r = this._value();
                                if (this._previous().type === 18) return mt.notEquals(n, r);
                                switch(r){
                                    case "true":
                                        return mt.not(n);
                                    case "false":
                                        return mt.has(n);
                                    default:
                                        return mt.notEquals(n, r);
                                }
                            }
                        case 5:
                            return this._advance(), Qmr.create(n, this._value());
                        case 6:
                            return this._advance(), Jmr.create(n, this._value());
                        case 7:
                            return this._advance(), CZn.create(n, this._value());
                        case 8:
                            return this._advance(), Zmr.create(n, this._value());
                        case 13:
                            return this._advance(), mt.in(n, this._value());
                        default:
                            return mt.has(n);
                    }
                }
            case 20:
                throw this._parsingErrors.push({
                    message: vQu,
                    offset: e.offset,
                    lexeme: "",
                    additionalInfo: _Qu
                }), oXi._parseError;
            default:
                throw this._errExpectedButGot(`true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`, this._peek());
        }
    }
    _value() {
        const e = this._peek();
        switch(e.type){
            case 17:
            case 18:
                return this._advance(), e.lexeme;
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
    _removeFlagsGY(e) {
        return e.replaceAll(this._flagsGYRe, "");
    }
    _previous() {
        return this._tokens[this._current - 1];
    }
    _matchOne(e) {
        return this._check(e) ? (this._advance(), !0) : !1;
    }
    _advance() {
        return this._isAtEnd() || this._current++, this._previous();
    }
    _consume(e, n) {
        if (this._check(e)) return this._advance();
        throw this._errExpectedButGot(n, this._peek());
    }
    _errExpectedButGot(e, n, i) {
        const r = D(1826, null, e, Bdn.getLexeme(n)), s = n.offset, o = Bdn.getLexeme(n);
        return this._parsingErrors.push({
            message: r,
            offset: s,
            lexeme: o,
            additionalInfo: i
        }), oXi._parseError;
    }
    _check(e) {
        return this._peek().type === e;
    }
    _peek() {
        return this._tokens[this._current];
    }
    _isAtEnd() {
        return this._peek().type === 20;
    }
}, xTo._parseError = new Error, bQu = xTo, mt = class {
    static false() {
        return Fte.INSTANCE;
    }
    static true() {
        return Dde.INSTANCE;
    }
    static has(t) {
        return jdn.create(t);
    }
    static equals(t, e) {
        return k6t.create(t, e);
    }
    static notEquals(t, e) {
        return Xmr.create(t, e);
    }
    static regex(t, e) {
        return egr.create(t, e);
    }
    static in(t, e) {
        return ATo.create(t, e);
    }
    static notIn(t, e) {
        return RTo.create(t, e);
    }
    static not(t) {
        return $dn.create(t);
    }
    static and(...t) {
        return PTo.create(t, null, !0);
    }
    static or(...t) {
        return tgr.create(t, null, !0);
    }
    static greater(t, e) {
        return CZn.create(t, e);
    }
    static greaterEquals(t, e) {
        return Zmr.create(t, e);
    }
    static smaller(t, e) {
        return Qmr.create(t, e);
    }
    static smallerEquals(t, e) {
        return Jmr.create(t, e);
    }
    static function(t, e) {
        return Vmr.create(t, e);
    }
    static deserialize(t) {
        return t == null ? void 0 : this._parser.parse(t);
    }
}, mt._parser = new bQu({
    regexParsingWithErrorRecovery: !1
}), Vmr = class $Ys {
    constructor(e, n){
        this.type = 16, this.id = e, this.fn = n;
    }
    static create(e, n) {
        return vyy(e, n), new $Ys(e, n);
    }
    static createWithoutRegistration(e, n) {
        return new $Ys(e, n);
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : TTo(this.id, e.id);
    }
    equals(e) {
        return e.type === this.type && this.id === e.id;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return this.fn();
    }
    serialize() {
        return `@${this.id}`;
    }
    keys() {
        return [];
    }
    map(e) {
        return this;
    }
    negate() {
        return $Ys.createWithoutRegistration(`!${this.id}`, ()=>!this.fn());
    }
}, Kmr = class {
    constructor(){
        this.type = 0;
    }
    cmp(e) {
        return this.type - e.type;
    }
    equals(e) {
        return e.type === this.type;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return !1;
    }
    serialize() {
        return "false";
    }
    keys() {
        return [];
    }
    map(e) {
        return this;
    }
    negate() {
        return Dde.INSTANCE;
    }
}, Kmr.INSTANCE = new Kmr, Fte = Kmr, Ymr = class {
    constructor(){
        this.type = 1;
    }
    cmp(e) {
        return this.type - e.type;
    }
    equals(e) {
        return e.type === this.type;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return !0;
    }
    serialize() {
        return "true";
    }
    keys() {
        return [];
    }
    map(e) {
        return this;
    }
    negate() {
        return Fte.INSTANCE;
    }
}, Ymr.INSTANCE = new Ymr, Dde = Ymr, jdn = class Kxb {
    constructor(e, n){
        this.key = e, this.negated = n, this.type = 2;
    }
    static create(e, n = null) {
        const i = wj.get(e);
        return typeof i == "boolean" ? i ? Dde.INSTANCE : Fte.INSTANCE : new Kxb(e, n);
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : TTo(this.key, e.key);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key : !1;
    }
    substituteConstants() {
        const e = wj.get(this.key);
        return typeof e == "boolean" ? e ? Dde.INSTANCE : Fte.INSTANCE : this;
    }
    evaluate(e) {
        return !!e.getValue(this.key);
    }
    serialize() {
        return this.key;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapDefined(this.key);
    }
    negate() {
        return this.negated || (this.negated = $dn.create(this.key, this)), this.negated;
    }
}, k6t = class Yxb {
    constructor(e, n, i){
        this.key = e, this.value = n, this.negated = i, this.type = 4;
    }
    static create(e, n, i = null) {
        if (typeof n == "boolean") return n ? jdn.create(e, i) : $dn.create(e, i);
        const r = wj.get(e);
        return typeof r == "boolean" ? n === (r ? "true" : "false") ? Dde.INSTANCE : Fte.INSTANCE : new Yxb(e, n, i);
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : S6t(this.key, this.value, e.key, e.value);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key && this.value === e.value : !1;
    }
    substituteConstants() {
        const e = wj.get(this.key);
        if (typeof e == "boolean") {
            const n = e ? "true" : "false";
            return this.value === n ? Dde.INSTANCE : Fte.INSTANCE;
        }
        return this;
    }
    evaluate(e) {
        return e.getValue(this.key) == this.value;
    }
    serialize() {
        return `${this.key} == '${this.value}'`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapEquals(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = Xmr.create(this.key, this.value, this)), this.negated;
    }
}, ATo = class Xxb {
    constructor(e, n){
        this.key = e, this.valueKey = n, this.type = 10, this.negated = null;
    }
    static create(e, n) {
        return new Xxb(e, n);
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : S6t(this.key, this.valueKey, e.key, e.valueKey);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key && this.valueKey === e.valueKey : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        const n = e.getValue(this.valueKey), i = e.getValue(this.key);
        return Array.isArray(n) ? n.includes(i) : typeof i == "string" && typeof n == "object" && n !== null ? uQu.call(n, i) : !1;
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
    map(e) {
        return e.mapIn(this.key, this.valueKey);
    }
    negate() {
        return this.negated || (this.negated = RTo.create(this.key, this.valueKey)), this.negated;
    }
}, RTo = class Zxb {
    constructor(e, n){
        this.key = e, this.valueKey = n, this.type = 11, this._negated = ATo.create(e, n);
    }
    static create(e, n) {
        return new Zxb(e, n);
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : this._negated.cmp(e._negated);
    }
    equals(e) {
        return e.type === this.type ? this._negated.equals(e._negated) : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return !this._negated.evaluate(e);
    }
    serialize() {
        return `${this.key} not in '${this.valueKey}'`;
    }
    keys() {
        return this._negated.keys();
    }
    map(e) {
        return e.mapNotIn(this.key, this.valueKey);
    }
    negate() {
        return this._negated;
    }
}, Xmr = class Qxb {
    constructor(e, n, i){
        this.key = e, this.value = n, this.negated = i, this.type = 5;
    }
    static create(e, n, i = null) {
        if (typeof n == "boolean") return n ? $dn.create(e, i) : jdn.create(e, i);
        const r = wj.get(e);
        return typeof r == "boolean" ? n === (r ? "true" : "false") ? Fte.INSTANCE : Dde.INSTANCE : new Qxb(e, n, i);
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : S6t(this.key, this.value, e.key, e.value);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key && this.value === e.value : !1;
    }
    substituteConstants() {
        const e = wj.get(this.key);
        if (typeof e == "boolean") {
            const n = e ? "true" : "false";
            return this.value === n ? Fte.INSTANCE : Dde.INSTANCE;
        }
        return this;
    }
    evaluate(e) {
        return e.getValue(this.key) != this.value;
    }
    serialize() {
        return `${this.key} != '${this.value}'`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapNotEquals(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = k6t.create(this.key, this.value, this)), this.negated;
    }
}, $dn = class Jxb {
    constructor(e, n){
        this.key = e, this.negated = n, this.type = 3;
    }
    static create(e, n = null) {
        const i = wj.get(e);
        return typeof i == "boolean" ? i ? Fte.INSTANCE : Dde.INSTANCE : new Jxb(e, n);
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : TTo(this.key, e.key);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key : !1;
    }
    substituteConstants() {
        const e = wj.get(this.key);
        return typeof e == "boolean" ? e ? Fte.INSTANCE : Dde.INSTANCE : this;
    }
    evaluate(e) {
        return !e.getValue(this.key);
    }
    serialize() {
        return `!${this.key}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapNot(this.key);
    }
    negate() {
        return this.negated || (this.negated = jdn.create(this.key, this)), this.negated;
    }
}, CZn = class eAb {
    constructor(e, n, i){
        this.key = e, this.value = n, this.negated = i, this.type = 12;
    }
    static create(e, n, i = null) {
        return zmr(n, (r)=>new eAb(e, r, i));
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : S6t(this.key, this.value, e.key, e.value);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key && this.value === e.value : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return typeof this.value == "string" ? !1 : parseFloat(e.getValue(this.key)) > this.value;
    }
    serialize() {
        return `${this.key} > ${this.value}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapGreater(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = Jmr.create(this.key, this.value, this)), this.negated;
    }
}, Zmr = class tAb {
    constructor(e, n, i){
        this.key = e, this.value = n, this.negated = i, this.type = 13;
    }
    static create(e, n, i = null) {
        return zmr(n, (r)=>new tAb(e, r, i));
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : S6t(this.key, this.value, e.key, e.value);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key && this.value === e.value : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return typeof this.value == "string" ? !1 : parseFloat(e.getValue(this.key)) >= this.value;
    }
    serialize() {
        return `${this.key} >= ${this.value}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapGreaterEquals(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = Qmr.create(this.key, this.value, this)), this.negated;
    }
}, Qmr = class nAb {
    constructor(e, n, i){
        this.key = e, this.value = n, this.negated = i, this.type = 14;
    }
    static create(e, n, i = null) {
        return zmr(n, (r)=>new nAb(e, r, i));
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : S6t(this.key, this.value, e.key, e.value);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key && this.value === e.value : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return typeof this.value == "string" ? !1 : parseFloat(e.getValue(this.key)) < this.value;
    }
    serialize() {
        return `${this.key} < ${this.value}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapSmaller(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = Zmr.create(this.key, this.value, this)), this.negated;
    }
}, Jmr = class iAb {
    constructor(e, n, i){
        this.key = e, this.value = n, this.negated = i, this.type = 15;
    }
    static create(e, n, i = null) {
        return zmr(n, (r)=>new iAb(e, r, i));
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : S6t(this.key, this.value, e.key, e.value);
    }
    equals(e) {
        return e.type === this.type ? this.key === e.key && this.value === e.value : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return typeof this.value == "string" ? !1 : parseFloat(e.getValue(this.key)) <= this.value;
    }
    serialize() {
        return `${this.key} <= ${this.value}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapSmallerEquals(this.key, this.value);
    }
    negate() {
        return this.negated || (this.negated = CZn.create(this.key, this.value, this)), this.negated;
    }
}, egr = class rAb {
    constructor(e, n){
        this.key = e, this.regexp = n, this.type = 7, this.negated = null;
    }
    static create(e, n) {
        return new rAb(e, n);
    }
    cmp(e) {
        if (e.type !== this.type) return this.type - e.type;
        if (this.key < e.key) return -1;
        if (this.key > e.key) return 1;
        const n = this.regexp ? this.regexp.source : "", i = e.regexp ? e.regexp.source : "";
        return n < i ? -1 : n > i ? 1 : 0;
    }
    equals(e) {
        if (e.type === this.type) {
            const n = this.regexp ? this.regexp.source : "", i = e.regexp ? e.regexp.source : "";
            return this.key === e.key && n === i;
        }
        return !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        const n = e.getValue(this.key);
        return this.regexp ? this.regexp.test(n) : !1;
    }
    serialize() {
        const e = this.regexp ? `/${this.regexp.source}/${this.regexp.flags}` : "/invalid/";
        return `${this.key} =~ ${e}`;
    }
    keys() {
        return [
            this.key
        ];
    }
    map(e) {
        return e.mapRegex(this.key, this.regexp);
    }
    negate() {
        return this.negated || (this.negated = yQu.create(this)), this.negated;
    }
}, yQu = class qQc {
    constructor(e){
        this._actual = e, this.type = 8;
    }
    static create(e) {
        return new qQc(e);
    }
    cmp(e) {
        return e.type !== this.type ? this.type - e.type : this._actual.cmp(e._actual);
    }
    equals(e) {
        return e.type === this.type ? this._actual.equals(e._actual) : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(e) {
        return !this._actual.evaluate(e);
    }
    serialize() {
        return `!(${this._actual.serialize()})`;
    }
    keys() {
        return this._actual.keys();
    }
    map(e) {
        return new qQc(this._actual.map(e));
    }
    negate() {
        return this._actual;
    }
}, PTo = class Wjn {
    constructor(e, n){
        this.expr = e, this.negated = n, this.type = 6;
    }
    static create(e, n, i) {
        return Wjn._normalizeArr(e, n, i);
    }
    cmp(e) {
        if (e.type !== this.type) return this.type - e.type;
        if (this.expr.length < e.expr.length) return -1;
        if (this.expr.length > e.expr.length) return 1;
        for(let n = 0, i = this.expr.length; n < i; n++){
            const r = wZn(this.expr[n], e.expr[n]);
            if (r !== 0) return r;
        }
        return 0;
    }
    equals(e) {
        if (e.type === this.type) {
            if (this.expr.length !== e.expr.length) return !1;
            for(let n = 0, i = this.expr.length; n < i; n++)if (!this.expr[n].equals(e.expr[n])) return !1;
            return !0;
        }
        return !1;
    }
    substituteConstants() {
        const e = aQu(this.expr);
        return e === this.expr ? this : Wjn.create(e, this.negated, !1);
    }
    evaluate(e) {
        for(let n = 0, i = this.expr.length; n < i; n++)if (!this.expr[n].evaluate(e)) return !1;
        return !0;
    }
    static _normalizeArr(e, n, i) {
        const r = [];
        let s = !1;
        for (const o of e)if (o) {
            if (o.type === 1) {
                s = !0;
                continue;
            }
            if (o.type === 0) return Fte.INSTANCE;
            if (o.type === 6) {
                r.push(...o.expr);
                continue;
            }
            r.push(o);
        }
        if (r.length === 0 && s) return Dde.INSTANCE;
        if (r.length !== 0) {
            if (r.length === 1) return r[0];
            r.sort(wZn);
            for(let o = 1; o < r.length; o++)r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
            if (r.length === 1) return r[0];
            for(; r.length > 1;){
                const o = r[r.length - 1];
                if (o.type !== 9) break;
                r.pop();
                const a = r.pop(), l = r.length === 0, c = tgr.create(o.expr.map((u)=>Wjn.create([
                        u,
                        a
                    ], null, i)), null, l);
                c && (r.push(c), r.sort(wZn));
            }
            if (r.length === 1) return r[0];
            if (i) {
                for(let o = 0; o < r.length; o++)for(let a = o + 1; a < r.length; a++)if (r[o].negate().equals(r[a])) return Fte.INSTANCE;
                if (r.length === 1) return r[0];
            }
            return new Wjn(r, n);
        }
    }
    serialize() {
        return this.expr.map((e)=>e.serialize()).join(" && ");
    }
    keys() {
        const e = [];
        for (const n of this.expr)e.push(...n.keys());
        return e;
    }
    map(e) {
        return new Wjn(this.expr.map((n)=>n.map(e)), null);
    }
    negate() {
        if (!this.negated) {
            const e = [];
            for (const n of this.expr)e.push(n.negate());
            this.negated = tgr.create(e, this, !0);
        }
        return this.negated;
    }
}, tgr = class Msn {
    constructor(e, n){
        this.expr = e, this.negated = n, this.type = 9;
    }
    static create(e, n, i) {
        return Msn._normalizeArr(e, n, i);
    }
    cmp(e) {
        if (e.type !== this.type) return this.type - e.type;
        if (this.expr.length < e.expr.length) return -1;
        if (this.expr.length > e.expr.length) return 1;
        for(let n = 0, i = this.expr.length; n < i; n++){
            const r = wZn(this.expr[n], e.expr[n]);
            if (r !== 0) return r;
        }
        return 0;
    }
    equals(e) {
        if (e.type === this.type) {
            if (this.expr.length !== e.expr.length) return !1;
            for(let n = 0, i = this.expr.length; n < i; n++)if (!this.expr[n].equals(e.expr[n])) return !1;
            return !0;
        }
        return !1;
    }
    substituteConstants() {
        const e = aQu(this.expr);
        return e === this.expr ? this : Msn.create(e, this.negated, !1);
    }
    evaluate(e) {
        for(let n = 0, i = this.expr.length; n < i; n++)if (this.expr[n].evaluate(e)) return !0;
        return !1;
    }
    static _normalizeArr(e, n, i) {
        let r = [], s = !1;
        if (e) {
            for(let o = 0, a = e.length; o < a; o++){
                const l = e[o];
                if (l) {
                    if (l.type === 0) {
                        s = !0;
                        continue;
                    }
                    if (l.type === 1) return Dde.INSTANCE;
                    if (l.type === 9) {
                        r = r.concat(l.expr);
                        continue;
                    }
                    r.push(l);
                }
            }
            if (r.length === 0 && s) return Fte.INSTANCE;
            r.sort(wZn);
        }
        if (r.length !== 0) {
            if (r.length === 1) return r[0];
            for(let o = 1; o < r.length; o++)r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
            if (r.length === 1) return r[0];
            if (i) {
                for(let o = 0; o < r.length; o++)for(let a = o + 1; a < r.length; a++)if (r[o].negate().equals(r[a])) return Dde.INSTANCE;
                if (r.length === 1) return r[0];
            }
            return new Msn(r, n);
        }
    }
    serialize() {
        return this.expr.map((e)=>e.serialize()).join(" || ");
    }
    keys() {
        const e = [];
        for (const n of this.expr)e.push(...n.keys());
        return e;
    }
    map(e) {
        return new Msn(this.expr.map((n)=>n.map(e)), null);
    }
    negate() {
        if (!this.negated) {
            const e = [];
            for (const n of this.expr)e.push(n.negate());
            for(; e.length > 1;){
                const n = e.shift(), i = e.shift(), r = [];
                for (const s of cQu(n))for (const o of cQu(i))r.push(PTo.create([
                    s,
                    o
                ], null, !1));
                e.unshift(Msn.create(r, null, !1));
            }
            this.negated = Msn.create(e, this, !0);
        }
        return this.negated;
    }
}, MTo = class HYs extends jdn {
    static all() {
        return HYs._info.values();
    }
    constructor(e, n, i){
        super(e, null), this._defaultValue = n, typeof i == "object" ? HYs._info.push({
            ...i,
            key: e
        }) : i !== !0 && HYs._info.push({
            key: e,
            description: i,
            type: n != null ? typeof n : void 0
        });
    }
    bindTo(e) {
        return e.createKey(this.key, this._defaultValue);
    }
    getValue(e) {
        return e.getContextKeyValue(this.key);
    }
    toNegated() {
        return this.negate();
    }
    isEqualTo(e) {
        return k6t.create(this.key, e);
    }
    notEqualsTo(e) {
        return Xmr.create(this.key, e);
    }
    greater(e) {
        return CZn.create(this.key, e);
    }
}, MTo._info = [], cn = MTo, Rr = jn("contextKeyService");

}
