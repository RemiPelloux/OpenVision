import { I0, Qe } from "./charCode.js";
import { E } from "./configurationRegistry.js";
import { Ve } from "./errors.js";
import { Q, ne } from "./instantiation.js";
import { Ne } from "./nls.js";
import { Fe, Jb, Xs, ee, g4, h4, oe, p4, q } from "./platform.js";
import { Ql, n5e } from "./scanner.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
function MUe(e) {
    return !e || typeof e != "string" ? !0 : e.trim().length === 0;
}
function r5e(e, t) {
    return Zl.has(e) && (console.warn(`A context key function with id '${e}' is already registered. Function collisions can lead to unexpected behavior.`), Zl.delete(e)), Zl.set(e, t), {
        dispose: ()=>{
            Zl.delete(e);
        }
    };
}
function WF(e) {
    return Zl.get(e);
}
function ip(e, t) {
    return e.cmp(t);
}
function RT(e, t) {
    if (typeof e == "string") {
        const n = parseFloat(e);
        isNaN(n) || (e = n);
    }
    return typeof e == "string" || typeof e == "number" ? t(e) : Er.INSTANCE;
}
function BF(e) {
    let t = null;
    for(let n = 0, r = e.length; n < r; n++){
        const s = e[n].substituteConstants();
        if (e[n] !== s && t === null) {
            t = [];
            for(let i = 0; i < n; i++)t[i] = e[i];
        }
        t !== null && (t[n] = s);
    }
    return t === null ? e : t;
}
function M0(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function cc(e, t, n, r) {
    return e < n ? -1 : e > n ? 1 : t < r ? -1 : t > r ? 1 : 0;
}
function GF(e) {
    return e.type === 9 ? e.expr : [
        e
    ];
}
var Bn, Zl, VF, $F, jF, HF, qF, P0, KF, zF, YF, JF, N0, XF, tr, CT, IT, Er, AT, Wr, ed, MT, D0, O0, PT, td, ap, NT, DT, OT, LT, QF, L0, UT, U0, x0, s5e;
export { $F, AT, BF, Bn, CT, D0, DT, Er, GF, HF, IT, JF, KF, L0, LT, M0, MT, MUe, N0, NT, O0, OT, P0, PT, QF, RT, U0, UT, VF, WF, Wr, XF, YF, Zl, ap, cc, ed, ip, jF, qF, r5e, s5e, td, tr, x0, zF };
var __wakaru_ZF_initialized = false;
export function ZF() {
if (__wakaru_ZF_initialized) return;
__wakaru_ZF_initialized = true;
"use strict";
h(), I0(), oe(), jn(), n5e(), ne(), Ne(), Ve(), Bn = new Map, Bn.set("false", !1), Bn.set("true", !0), Bn.set("isMac", q), Bn.set("isLinux", Fe), Bn.set("isWindows", ee), Bn.set("isWeb", Xs), Bn.set("isMacNative", q && !Xs), Bn.set("isEdge", g4), Bn.set("isFirefox", p4), Bn.set("isChrome", Jb), Bn.set("isSafari", h4), Zl = new Map, VF = Object.prototype.hasOwnProperty, $F = {
    regexParsingWithErrorRecovery: !0
}, jF = E(1818, null), HF = E(1819, null), qF = E(1820, null), P0 = E(1821, null), KF = E(1822, null), zF = E(1823, null), YF = E(1824, null), JF = E(1825, null), N0 = class a_ {
    constructor(t = $F){
        this._config = t, this._scanner = new Ql, this._tokens = [], this._current = 0, this._parsingErrors = [], this._flagsGYRe = /g|y/g;
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
                message: jF,
                offset: 0,
                lexeme: "",
                additionalInfo: HF
            });
            return;
        }
        this._tokens = this._scanner.reset(t).scan(), this._current = 0, this._parsingErrors = [];
        try {
            const n = this._expr();
            if (!this._isAtEnd()) {
                const r = this._peek(), s = r.type === 17 ? zF : void 0;
                throw this._parsingErrors.push({
                    message: KF,
                    offset: r.offset,
                    lexeme: Ql.getLexeme(r),
                    additionalInfo: s
                }), a_._parseError;
            }
            return n;
        } catch (n) {
            if (n !== a_._parseError) throw n;
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
        return t.length === 1 ? t[0] : tr.or(...t);
    }
    _and() {
        const t = [
            this._term()
        ];
        for(; this._matchOne(15);){
            const n = this._term();
            t.push(n);
        }
        return t.length === 1 ? t[0] : tr.and(...t);
    }
    _term() {
        if (this._matchOne(2)) {
            const t = this._peek();
            switch(t.type){
                case 11:
                    return this._advance(), Er.INSTANCE;
                case 12:
                    return this._advance(), Wr.INSTANCE;
                case 0:
                    {
                        this._advance();
                        const n = this._expr();
                        return this._consume(1, P0), n?.negate();
                    }
                case 17:
                    return this._advance(), td.create(t.lexeme);
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
                return this._advance(), tr.true();
            case 12:
                return this._advance(), tr.false();
            case 0:
                {
                    this._advance();
                    const n = this._expr();
                    return this._consume(1, P0), n;
                }
            case 17:
                {
                    if (t.lexeme.startsWith("@")) {
                        this._advance();
                        const s = t.lexeme.substring(1);
                        if (s.startsWith("!")) {
                            const a = s.substring(1), o = WF(a);
                            if (o) return CT.createWithoutRegistration(s, ()=>!o());
                        }
                        const i = WF(s) || (()=>!1);
                        return CT.createWithoutRegistration(s, i);
                    }
                    const n = t.lexeme;
                    if (this._advance(), this._matchOne(9)) {
                        const s = this._peek();
                        if (!this._config.regexParsingWithErrorRecovery) {
                            if (this._advance(), s.type !== 10) throw this._errExpectedButGot("REGEX", s);
                            const i = s.lexeme, a = i.lastIndexOf("/"), o = a === i.length - 1 ? void 0 : this._removeFlagsGY(i.substring(a + 1));
                            let l;
                            try {
                                l = new RegExp(i.substring(1, a), o);
                            } catch  {
                                throw this._errExpectedButGot("REGEX", s);
                            }
                            return LT.create(n, l);
                        }
                        switch(s.type){
                            case 10:
                            case 19:
                                {
                                    const i = [
                                        s.lexeme
                                    ];
                                    this._advance();
                                    let a = this._peek(), o = 0;
                                    for(let f = 0; f < s.lexeme.length; f++)s.lexeme.charCodeAt(f) === Qe.OpenParen ? o++ : s.lexeme.charCodeAt(f) === Qe.CloseParen && o--;
                                    for(; !this._isAtEnd() && a.type !== 15 && a.type !== 16;){
                                        switch(a.type){
                                            case 0:
                                                o++;
                                                break;
                                            case 1:
                                                o--;
                                                break;
                                            case 10:
                                            case 18:
                                                for(let f = 0; f < a.lexeme.length; f++)a.lexeme.charCodeAt(f) === Qe.OpenParen ? o++ : s.lexeme.charCodeAt(f) === Qe.CloseParen && o--;
                                        }
                                        if (o < 0) break;
                                        i.push(Ql.getLexeme(a)), this._advance(), a = this._peek();
                                    }
                                    const l = i.join(""), d = l.lastIndexOf("/"), u = d === l.length - 1 ? void 0 : this._removeFlagsGY(l.substring(d + 1));
                                    let m;
                                    try {
                                        m = new RegExp(l.substring(1, d), u);
                                    } catch  {
                                        throw this._errExpectedButGot("REGEX", s);
                                    }
                                    return tr.regex(n, m);
                                }
                            case 18:
                                {
                                    const i = s.lexeme;
                                    this._advance();
                                    let a = null;
                                    if (!MUe(i)) {
                                        const o = i.indexOf("/"), l = i.lastIndexOf("/");
                                        if (o !== l && o >= 0) {
                                            const d = i.slice(o + 1, l), u = i[l + 1] === "i" ? "i" : "";
                                            try {
                                                a = new RegExp(d, u);
                                            } catch  {
                                                throw this._errExpectedButGot("REGEX", s);
                                            }
                                        }
                                    }
                                    if (a === null) throw this._errExpectedButGot("REGEX", s);
                                    return LT.create(n, a);
                                }
                            default:
                                throw this._errExpectedButGot("REGEX", this._peek());
                        }
                    }
                    if (this._matchOne(14)) {
                        this._consume(13, qF);
                        const s = this._value();
                        return tr.notIn(n, s);
                    }
                    switch(this._peek().type){
                        case 3:
                            {
                                this._advance();
                                const s = this._value();
                                if (this._previous().type === 18) return tr.equals(n, s);
                                switch(s){
                                    case "true":
                                        return tr.has(n);
                                    case "false":
                                        return tr.not(n);
                                    default:
                                        return tr.equals(n, s);
                                }
                            }
                        case 4:
                            {
                                this._advance();
                                const s = this._value();
                                if (this._previous().type === 18) return tr.notEquals(n, s);
                                switch(s){
                                    case "true":
                                        return tr.not(n);
                                    case "false":
                                        return tr.has(n);
                                    default:
                                        return tr.notEquals(n, s);
                                }
                            }
                        case 5:
                            return this._advance(), DT.create(n, this._value());
                        case 6:
                            return this._advance(), OT.create(n, this._value());
                        case 7:
                            return this._advance(), ap.create(n, this._value());
                        case 8:
                            return this._advance(), NT.create(n, this._value());
                        case 13:
                            return this._advance(), tr.in(n, this._value());
                        default:
                            return tr.has(n);
                    }
                }
            case 20:
                throw this._parsingErrors.push({
                    message: YF,
                    offset: t.offset,
                    lexeme: "",
                    additionalInfo: JF
                }), a_._parseError;
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
    _errExpectedButGot(t, n, r) {
        const s = E(1826, null, t, Ql.getLexeme(n)), i = n.offset, a = Ql.getLexeme(n);
        return this._parsingErrors.push({
            message: s,
            offset: i,
            lexeme: a,
            additionalInfo: r
        }), a_._parseError;
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
}, N0._parseError = new Error, XF = N0, tr = class {
    static false() {
        return Er.INSTANCE;
    }
    static true() {
        return Wr.INSTANCE;
    }
    static has(e) {
        return ed.create(e);
    }
    static equals(e, t) {
        return MT.create(e, t);
    }
    static notEquals(e, t) {
        return PT.create(e, t);
    }
    static regex(e, t) {
        return LT.create(e, t);
    }
    static in(e, t) {
        return D0.create(e, t);
    }
    static notIn(e, t) {
        return O0.create(e, t);
    }
    static not(e) {
        return td.create(e);
    }
    static and(...e) {
        return L0.create(e, null, !0);
    }
    static or(...e) {
        return UT.create(e, null, !0);
    }
    static greater(e, t) {
        return ap.create(e, t);
    }
    static greaterEquals(e, t) {
        return NT.create(e, t);
    }
    static smaller(e, t) {
        return DT.create(e, t);
    }
    static smallerEquals(e, t) {
        return OT.create(e, t);
    }
    static function(e, t) {
        return CT.create(e, t);
    }
    static deserialize(e) {
        return e == null ? void 0 : this._parser.parse(e);
    }
}, tr._parser = new XF({
    regexParsingWithErrorRecovery: !1
}), CT = class Eb {
    constructor(t, n){
        this.type = 16, this.id = t, this.fn = n;
    }
    static create(t, n) {
        return r5e(t, n), new Eb(t, n);
    }
    static createWithoutRegistration(t, n) {
        return new Eb(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : M0(this.id, t.id);
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
        return Eb.createWithoutRegistration(`!${this.id}`, ()=>!this.fn());
    }
}, IT = class {
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
        return Wr.INSTANCE;
    }
}, IT.INSTANCE = new IT, Er = IT, AT = class {
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
        return Er.INSTANCE;
    }
}, AT.INSTANCE = new AT, Wr = AT, ed = class X9e {
    constructor(t, n){
        this.key = t, this.negated = n, this.type = 2;
    }
    static create(t, n = null) {
        const r = Bn.get(t);
        return typeof r == "boolean" ? r ? Wr.INSTANCE : Er.INSTANCE : new X9e(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : M0(this.key, t.key);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key : !1;
    }
    substituteConstants() {
        const t = Bn.get(this.key);
        return typeof t == "boolean" ? t ? Wr.INSTANCE : Er.INSTANCE : this;
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
        return this.negated || (this.negated = td.create(this.key, this)), this.negated;
    }
}, MT = class Q9e {
    constructor(t, n, r){
        this.key = t, this.value = n, this.negated = r, this.type = 4;
    }
    static create(t, n, r = null) {
        if (typeof n == "boolean") return n ? ed.create(t, r) : td.create(t, r);
        const s = Bn.get(t);
        return typeof s == "boolean" ? n === (s ? "true" : "false") ? Wr.INSTANCE : Er.INSTANCE : new Q9e(t, n, r);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : cc(this.key, this.value, t.key, t.value);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.value === t.value : !1;
    }
    substituteConstants() {
        const t = Bn.get(this.key);
        if (typeof t == "boolean") {
            const n = t ? "true" : "false";
            return this.value === n ? Wr.INSTANCE : Er.INSTANCE;
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
        return this.negated || (this.negated = PT.create(this.key, this.value, this)), this.negated;
    }
}, D0 = class Z9e {
    constructor(t, n){
        this.key = t, this.valueKey = n, this.type = 10, this.negated = null;
    }
    static create(t, n) {
        return new Z9e(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : cc(this.key, this.valueKey, t.key, t.valueKey);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.valueKey === t.valueKey : !1;
    }
    substituteConstants() {
        return this;
    }
    evaluate(t) {
        const n = t.getValue(this.valueKey), r = t.getValue(this.key);
        return Array.isArray(n) ? n.includes(r) : typeof r == "string" && typeof n == "object" && n !== null ? VF.call(n, r) : !1;
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
        return this.negated || (this.negated = O0.create(this.key, this.valueKey)), this.negated;
    }
}, O0 = class eLe {
    constructor(t, n){
        this.key = t, this.valueKey = n, this.type = 11, this._negated = D0.create(t, n);
    }
    static create(t, n) {
        return new eLe(t, n);
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
}, PT = class tLe {
    constructor(t, n, r){
        this.key = t, this.value = n, this.negated = r, this.type = 5;
    }
    static create(t, n, r = null) {
        if (typeof n == "boolean") return n ? td.create(t, r) : ed.create(t, r);
        const s = Bn.get(t);
        return typeof s == "boolean" ? n === (s ? "true" : "false") ? Er.INSTANCE : Wr.INSTANCE : new tLe(t, n, r);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : cc(this.key, this.value, t.key, t.value);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key && this.value === t.value : !1;
    }
    substituteConstants() {
        const t = Bn.get(this.key);
        if (typeof t == "boolean") {
            const n = t ? "true" : "false";
            return this.value === n ? Er.INSTANCE : Wr.INSTANCE;
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
        return this.negated || (this.negated = MT.create(this.key, this.value, this)), this.negated;
    }
}, td = class nLe {
    constructor(t, n){
        this.key = t, this.negated = n, this.type = 3;
    }
    static create(t, n = null) {
        const r = Bn.get(t);
        return typeof r == "boolean" ? r ? Er.INSTANCE : Wr.INSTANCE : new nLe(t, n);
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : M0(this.key, t.key);
    }
    equals(t) {
        return t.type === this.type ? this.key === t.key : !1;
    }
    substituteConstants() {
        const t = Bn.get(this.key);
        return typeof t == "boolean" ? t ? Er.INSTANCE : Wr.INSTANCE : this;
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
        return this.negated || (this.negated = ed.create(this.key, this)), this.negated;
    }
}, ap = class rLe {
    constructor(t, n, r){
        this.key = t, this.value = n, this.negated = r, this.type = 12;
    }
    static create(t, n, r = null) {
        return RT(n, (s)=>new rLe(t, s, r));
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : cc(this.key, this.value, t.key, t.value);
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
        return this.negated || (this.negated = OT.create(this.key, this.value, this)), this.negated;
    }
}, NT = class sLe {
    constructor(t, n, r){
        this.key = t, this.value = n, this.negated = r, this.type = 13;
    }
    static create(t, n, r = null) {
        return RT(n, (s)=>new sLe(t, s, r));
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : cc(this.key, this.value, t.key, t.value);
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
        return this.negated || (this.negated = DT.create(this.key, this.value, this)), this.negated;
    }
}, DT = class iLe {
    constructor(t, n, r){
        this.key = t, this.value = n, this.negated = r, this.type = 14;
    }
    static create(t, n, r = null) {
        return RT(n, (s)=>new iLe(t, s, r));
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : cc(this.key, this.value, t.key, t.value);
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
        return this.negated || (this.negated = NT.create(this.key, this.value, this)), this.negated;
    }
}, OT = class aLe {
    constructor(t, n, r){
        this.key = t, this.value = n, this.negated = r, this.type = 15;
    }
    static create(t, n, r = null) {
        return RT(n, (s)=>new aLe(t, s, r));
    }
    cmp(t) {
        return t.type !== this.type ? this.type - t.type : cc(this.key, this.value, t.key, t.value);
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
        return this.negated || (this.negated = ap.create(this.key, this.value, this)), this.negated;
    }
}, LT = class oLe {
    constructor(t, n){
        this.key = t, this.regexp = n, this.type = 7, this.negated = null;
    }
    static create(t, n) {
        return new oLe(t, n);
    }
    cmp(t) {
        if (t.type !== this.type) return this.type - t.type;
        if (this.key < t.key) return -1;
        if (this.key > t.key) return 1;
        const n = this.regexp ? this.regexp.source : "", r = t.regexp ? t.regexp.source : "";
        return n < r ? -1 : n > r ? 1 : 0;
    }
    equals(t) {
        if (t.type === this.type) {
            const n = this.regexp ? this.regexp.source : "", r = t.regexp ? t.regexp.source : "";
            return this.key === t.key && n === r;
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
        return this.negated || (this.negated = QF.create(this)), this.negated;
    }
}, QF = class wx {
    constructor(t){
        this._actual = t, this.type = 8;
    }
    static create(t) {
        return new wx(t);
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
        return new wx(this._actual.map(t));
    }
    negate() {
        return this._actual;
    }
}, L0 = class um {
    constructor(t, n){
        this.expr = t, this.negated = n, this.type = 6;
    }
    static create(t, n, r) {
        return um._normalizeArr(t, n, r);
    }
    cmp(t) {
        if (t.type !== this.type) return this.type - t.type;
        if (this.expr.length < t.expr.length) return -1;
        if (this.expr.length > t.expr.length) return 1;
        for(let n = 0, r = this.expr.length; n < r; n++){
            const s = ip(this.expr[n], t.expr[n]);
            if (s !== 0) return s;
        }
        return 0;
    }
    equals(t) {
        if (t.type === this.type) {
            if (this.expr.length !== t.expr.length) return !1;
            for(let n = 0, r = this.expr.length; n < r; n++)if (!this.expr[n].equals(t.expr[n])) return !1;
            return !0;
        }
        return !1;
    }
    substituteConstants() {
        const t = BF(this.expr);
        return t === this.expr ? this : um.create(t, this.negated, !1);
    }
    evaluate(t) {
        for(let n = 0, r = this.expr.length; n < r; n++)if (!this.expr[n].evaluate(t)) return !1;
        return !0;
    }
    static _normalizeArr(t, n, r) {
        const s = [];
        let i = !1;
        for (const a of t)if (a) {
            if (a.type === 1) {
                i = !0;
                continue;
            }
            if (a.type === 0) return Er.INSTANCE;
            if (a.type === 6) {
                s.push(...a.expr);
                continue;
            }
            s.push(a);
        }
        if (s.length === 0 && i) return Wr.INSTANCE;
        if (s.length !== 0) {
            if (s.length === 1) return s[0];
            s.sort(ip);
            for(let a = 1; a < s.length; a++)s[a - 1].equals(s[a]) && (s.splice(a, 1), a--);
            if (s.length === 1) return s[0];
            for(; s.length > 1;){
                const a = s[s.length - 1];
                if (a.type !== 9) break;
                s.pop();
                const o = s.pop(), l = s.length === 0, d = UT.create(a.expr.map((u)=>um.create([
                        u,
                        o
                    ], null, r)), null, l);
                d && (s.push(d), s.sort(ip));
            }
            if (s.length === 1) return s[0];
            if (r) {
                for(let a = 0; a < s.length; a++)for(let o = a + 1; o < s.length; o++)if (s[a].negate().equals(s[o])) return Er.INSTANCE;
                if (s.length === 1) return s[0];
            }
            return new um(s, n);
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
        return new um(this.expr.map((n)=>n.map(t)), null);
    }
    negate() {
        if (!this.negated) {
            const t = [];
            for (const n of this.expr)t.push(n.negate());
            this.negated = UT.create(t, this, !0);
        }
        return this.negated;
    }
}, UT = class kl {
    constructor(t, n){
        this.expr = t, this.negated = n, this.type = 9;
    }
    static create(t, n, r) {
        return kl._normalizeArr(t, n, r);
    }
    cmp(t) {
        if (t.type !== this.type) return this.type - t.type;
        if (this.expr.length < t.expr.length) return -1;
        if (this.expr.length > t.expr.length) return 1;
        for(let n = 0, r = this.expr.length; n < r; n++){
            const s = ip(this.expr[n], t.expr[n]);
            if (s !== 0) return s;
        }
        return 0;
    }
    equals(t) {
        if (t.type === this.type) {
            if (this.expr.length !== t.expr.length) return !1;
            for(let n = 0, r = this.expr.length; n < r; n++)if (!this.expr[n].equals(t.expr[n])) return !1;
            return !0;
        }
        return !1;
    }
    substituteConstants() {
        const t = BF(this.expr);
        return t === this.expr ? this : kl.create(t, this.negated, !1);
    }
    evaluate(t) {
        for(let n = 0, r = this.expr.length; n < r; n++)if (this.expr[n].evaluate(t)) return !0;
        return !1;
    }
    static _normalizeArr(t, n, r) {
        let s = [], i = !1;
        if (t) {
            for(let a = 0, o = t.length; a < o; a++){
                const l = t[a];
                if (l) {
                    if (l.type === 0) {
                        i = !0;
                        continue;
                    }
                    if (l.type === 1) return Wr.INSTANCE;
                    if (l.type === 9) {
                        s = s.concat(l.expr);
                        continue;
                    }
                    s.push(l);
                }
            }
            if (s.length === 0 && i) return Er.INSTANCE;
            s.sort(ip);
        }
        if (s.length !== 0) {
            if (s.length === 1) return s[0];
            for(let a = 1; a < s.length; a++)s[a - 1].equals(s[a]) && (s.splice(a, 1), a--);
            if (s.length === 1) return s[0];
            if (r) {
                for(let a = 0; a < s.length; a++)for(let o = a + 1; o < s.length; o++)if (s[a].negate().equals(s[o])) return Wr.INSTANCE;
                if (s.length === 1) return s[0];
            }
            return new kl(s, n);
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
        return new kl(this.expr.map((n)=>n.map(t)), null);
    }
    negate() {
        if (!this.negated) {
            const t = [];
            for (const n of this.expr)t.push(n.negate());
            for(; t.length > 1;){
                const n = t.shift(), r = t.shift(), s = [];
                for (const i of GF(n))for (const a of GF(r))s.push(L0.create([
                    i,
                    a
                ], null, !1));
                t.unshift(kl.create(s, null, !1));
            }
            this.negated = kl.create(t, this, !0);
        }
        return this.negated;
    }
}, U0 = class bb extends ed {
    static all() {
        return bb._info.values();
    }
    constructor(t, n, r){
        super(t, null), this._defaultValue = n, typeof r == "object" ? bb._info.push({
            ...r,
            key: t
        }) : r !== !0 && bb._info.push({
            key: t,
            description: r,
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
        return MT.create(this.key, t);
    }
    notEqualsTo(t) {
        return PT.create(this.key, t);
    }
    greater(t) {
        return ap.create(this.key, t);
    }
}, U0._info = [], x0 = U0, s5e = Q("contextKeyService");

}
