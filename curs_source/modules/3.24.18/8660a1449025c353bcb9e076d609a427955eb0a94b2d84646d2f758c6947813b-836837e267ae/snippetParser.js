import { Cw, ti } from "./charCode.js";
import { E } from "./tslib.es6.js";
import { Nzd } from "./ze.js";
var $qo, Lzd, LBt, cne, Hqo, a_e, xoi, Ozd, THe, Aoi, aEr, Cwe;
export { $qo, Aoi, Cwe, Hqo, LBt, Lzd, Ozd, THe, aEr, a_e, cne, xoi };
var __wakaru_A5e_initialized = false;
export function A5e() {
if (__wakaru_A5e_initialized) return;
__wakaru_A5e_initialized = true;
"use strict";
E(), Cw(), $qo = class VZe {
    constructor(){
        this.value = "", this.pos = 0;
    }
    static isDigitCharacter(e) {
        return e >= ti.Digit0 && e <= ti.Digit9;
    }
    static isVariableCharacter(e) {
        return e === ti.Underline || e >= ti.a && e <= ti.z || e >= ti.A && e <= ti.Z;
    }
    text(e) {
        this.value = e, this.pos = 0;
    }
    tokenText(e) {
        return this.value.substr(e.pos, e.len);
    }
    next() {
        if (this.pos >= this.value.length) return {
            type: 14,
            pos: this.pos,
            len: 0
        };
        const e = this.pos;
        let n = 0, i = this.value.charCodeAt(e), r;
        if (r = VZe._table[i], typeof r == "number") return this.pos += 1, {
            type: r,
            pos: e,
            len: 1
        };
        if (VZe.isDigitCharacter(i)) {
            r = 8;
            do n += 1, i = this.value.charCodeAt(e + n);
            while (VZe.isDigitCharacter(i))
            return this.pos += n, {
                type: r,
                pos: e,
                len: n
            };
        }
        if (VZe.isVariableCharacter(i)) {
            r = 9;
            do i = this.value.charCodeAt(e + ++n);
            while (VZe.isVariableCharacter(i) || VZe.isDigitCharacter(i))
            return this.pos += n, {
                type: r,
                pos: e,
                len: n
            };
        }
        r = 10;
        do n += 1, i = this.value.charCodeAt(e + n);
        while (!isNaN(i) && typeof VZe._table[i] > "u" && !VZe.isDigitCharacter(i) && !VZe.isVariableCharacter(i))
        return this.pos += n, {
            type: r,
            pos: e,
            len: n
        };
    }
}, $qo._table = {
    [ti.DollarSign]: 0,
    [ti.Colon]: 1,
    [ti.Comma]: 2,
    [ti.OpenCurlyBrace]: 3,
    [ti.CloseCurlyBrace]: 4,
    [ti.Backslash]: 5,
    [ti.Slash]: 6,
    [ti.Pipe]: 7,
    [ti.Plus]: 11,
    [ti.Dash]: 12,
    [ti.QuestionMark]: 13
}, Lzd = $qo, LBt = class {
    constructor(){
        this._children = [];
    }
    appendChild(t) {
        return t instanceof cne && this._children[this._children.length - 1] instanceof cne ? this._children[this._children.length - 1].value += t.value : (t.parent = this, this._children.push(t)), this;
    }
    replace(t, e) {
        const { parent: n } = t, i = n.children.indexOf(t), r = n.children.slice(0);
        r.splice(i, 1, ...e), n._children = r, (function s(o, a) {
            for (const l of o)l.parent = a, s(l.children, l);
        })(e, n);
    }
    get children() {
        return this._children;
    }
    get rightMostDescendant() {
        return this._children.length > 0 ? this._children[this._children.length - 1].rightMostDescendant : this;
    }
    get snippet() {
        let t = this;
        for(;;){
            if (!t) return;
            if (t instanceof aEr) return t;
            t = t.parent;
        }
    }
    toString() {
        return this.children.reduce((t, e)=>t + e.toString(), "");
    }
    len() {
        return 0;
    }
}, cne = class AJc extends LBt {
    constructor(e){
        super(), this.value = e;
    }
    static escape(e) {
        return e.replace(/\$|}|\\/g, "\\$&");
    }
    toString() {
        return this.value;
    }
    toTextmateString() {
        return AJc.escape(this.value);
    }
    len() {
        return this.value.length;
    }
    clone() {
        return new AJc(this.value);
    }
}, Hqo = class extends LBt {
}, a_e = class yRb extends Hqo {
    constructor(e){
        super(), this.index = e;
    }
    static compareByIndex(e, n) {
        return e.index === n.index ? 0 : e.isFinalTabstop ? 1 : n.isFinalTabstop || e.index < n.index ? -1 : e.index > n.index ? 1 : 0;
    }
    get isFinalTabstop() {
        return this.index === 0;
    }
    get choice() {
        return this._children.length === 1 && this._children[0] instanceof xoi ? this._children[0] : void 0;
    }
    toTextmateString() {
        let e = "";
        return this.transform && (e = this.transform.toTextmateString()), this.children.length === 0 && !this.transform ? `$${this.index}` : this.children.length === 0 ? `\${${this.index}${e}}` : this.choice ? `\${${this.index}|${this.choice.toTextmateString()}|${e}}` : `\${${this.index}:${this.children.map((n)=>n.toTextmateString()).join("")}${e}}`;
    }
    clone() {
        const e = new yRb(this.index);
        return this.transform && (e.transform = this.transform.clone()), e._children = this.children.map((n)=>n.clone()), e;
    }
}, xoi = class SRb extends LBt {
    constructor(){
        super(...arguments), this.options = [];
    }
    appendChild(e) {
        return e instanceof cne && (e.parent = this, this.options.push(e)), this;
    }
    toString() {
        return this.options[0].value;
    }
    toTextmateString() {
        return this.options.map((e)=>e.value.replace(/\||,|\\/g, "\\$&")).join(",");
    }
    len() {
        return this.options[0].len();
    }
    clone() {
        const e = new SRb;
        return this.options.forEach(e.appendChild, e), e;
    }
}, Ozd = class kRb extends LBt {
    constructor(){
        super(...arguments), this.regexp = new RegExp("");
    }
    resolve(e) {
        const n = this;
        let i = !1, r = e.replace(this.regexp, function() {
            return i = !0, n._replace(Array.prototype.slice.call(arguments, 0, -2));
        });
        return !i && this._children.some((s)=>s instanceof THe && !!s.elseValue) && (r = this._replace([])), r;
    }
    _replace(e) {
        let n = "";
        for (const i of this._children)if (i instanceof THe) {
            let r = e[i.index] || "";
            r = i.resolve(r), n += r;
        } else n += i.toString();
        return n;
    }
    toString() {
        return "";
    }
    toTextmateString() {
        return `/${this.regexp.source}/${this.children.map((e)=>e.toTextmateString())}/${(this.regexp.ignoreCase ? "i" : "") + (this.regexp.global ? "g" : "")}`;
    }
    clone() {
        const e = new kRb;
        return e.regexp = new RegExp(this.regexp.source, (this.regexp.ignoreCase ? "i" : "") + (this.regexp.global ? "g" : "")), e._children = this.children.map((n)=>n.clone()), e;
    }
}, THe = class wRb extends LBt {
    constructor(e, n, i, r){
        super(), this.index = e, this.shorthandName = n, this.ifValue = i, this.elseValue = r;
    }
    resolve(e) {
        return this.shorthandName === "upcase" ? e ? e.toLocaleUpperCase() : "" : this.shorthandName === "downcase" ? e ? e.toLocaleLowerCase() : "" : this.shorthandName === "capitalize" ? e ? e[0].toLocaleUpperCase() + e.substr(1) : "" : this.shorthandName === "pascalcase" ? e ? this._toPascalCase(e) : "" : this.shorthandName === "camelcase" ? e ? this._toCamelCase(e) : "" : e && typeof this.ifValue == "string" ? this.ifValue : !e && typeof this.elseValue == "string" ? this.elseValue : e || "";
    }
    _toPascalCase(e) {
        const n = e.match(/[a-z0-9]+/gi);
        return n ? n.map((i)=>i.charAt(0).toUpperCase() + i.substr(1)).join("") : e;
    }
    _toCamelCase(e) {
        const n = e.match(/[a-z0-9]+/gi);
        return n ? n.map((i, r)=>r === 0 ? i.charAt(0).toLowerCase() + i.substr(1) : i.charAt(0).toUpperCase() + i.substr(1)).join("") : e;
    }
    toTextmateString() {
        let e = "${";
        return e += this.index, this.shorthandName ? e += `:/${this.shorthandName}` : this.ifValue && this.elseValue ? e += `:?${this.ifValue}:${this.elseValue}` : this.ifValue ? e += `:+${this.ifValue}` : this.elseValue && (e += `:-${this.elseValue}`), e += "}", e;
    }
    clone() {
        return new wRb(this.index, this.shorthandName, this.ifValue, this.elseValue);
    }
}, Aoi = class CRb extends Hqo {
    constructor(e){
        super(), this.name = e;
    }
    resolve(e) {
        let n = e.resolve(this);
        return this.transform && (n = this.transform.resolve(n || "")), n !== void 0 ? (this._children = [
            new cne(n)
        ], !0) : !1;
    }
    toTextmateString() {
        let e = "";
        return this.transform && (e = this.transform.toTextmateString()), this.children.length === 0 ? `\${${this.name}${e}}` : `\${${this.name}:${this.children.map((n)=>n.toTextmateString()).join("")}${e}}`;
    }
    clone() {
        const e = new CRb(this.name);
        return this.transform && (e.transform = this.transform.clone()), e._children = this.children.map((n)=>n.clone()), e;
    }
}, aEr = class TRb extends LBt {
    get placeholderInfo() {
        if (!this._placeholders) {
            const e = [];
            let n;
            this.walk(function(i) {
                return i instanceof a_e && (e.push(i), n = !n || n.index < i.index ? i : n), !0;
            }), this._placeholders = {
                all: e,
                last: n
            };
        }
        return this._placeholders;
    }
    get placeholders() {
        const { all: e } = this.placeholderInfo;
        return e;
    }
    offset(e) {
        let n = 0, i = !1;
        return this.walk((r)=>r === e ? (i = !0, !1) : (n += r.len(), !0)), i ? n : -1;
    }
    fullLen(e) {
        let n = 0;
        return Nzd([
            e
        ], (i)=>(n += i.len(), !0)), n;
    }
    enclosingPlaceholders(e) {
        const n = [];
        let { parent: i } = e;
        for(; i;)i instanceof a_e && n.push(i), i = i.parent;
        return n;
    }
    resolveVariables(e) {
        return this.walk((n)=>(n instanceof Aoi && n.resolve(e) && (this._placeholders = void 0), !0)), this;
    }
    appendChild(e) {
        return this._placeholders = void 0, super.appendChild(e);
    }
    replace(e, n) {
        return this._placeholders = void 0, super.replace(e, n);
    }
    toTextmateString() {
        return this.children.reduce((e, n)=>e + n.toTextmateString(), "");
    }
    clone() {
        const e = new TRb;
        return this._children = this.children.map((n)=>n.clone()), e;
    }
    walk(e) {
        Nzd(this.children, e);
    }
}, Cwe = class ERb {
    constructor(){
        this._scanner = new Lzd, this._token = {
            type: 14,
            pos: 0,
            len: 0
        };
    }
    static escape(e) {
        return e.replace(/\$|}|\\/g, "\\$&");
    }
    static asInsertText(e) {
        return new ERb().parse(e).toString();
    }
    static guessNeedsClipboard(e) {
        return /\${?CLIPBOARD/.test(e);
    }
    parse(e, n, i) {
        const r = new aEr;
        return this.parseFragment(e, r), this.ensureFinalTabstop(r, i ?? !1, n ?? !1), r;
    }
    parseFragment(e, n) {
        const i = n.children.length;
        for(this._scanner.text(e), this._token = this._scanner.next(); this._parse(n););
        const r = new Map, s = [];
        n.walk((l)=>(l instanceof a_e && (l.isFinalTabstop ? r.set(0, void 0) : !r.has(l.index) && l.children.length > 0 ? r.set(l.index, l.children) : s.push(l)), !0));
        const o = (l, c)=>{
            const u = r.get(l.index);
            if (!u) return;
            const d = new a_e(l.index);
            d.transform = l.transform;
            for (const h of u){
                const p = h.clone();
                d.appendChild(p), p instanceof a_e && r.has(p.index) && !c.has(p.index) && (c.add(p.index), o(p, c), c.delete(p.index));
            }
            n.replace(l, [
                d
            ]);
        }, a = new Set;
        for (const l of s)o(l, a);
        return n.children.slice(i);
    }
    ensureFinalTabstop(e, n, i) {
        (n || i && e.placeholders.length > 0) && (e.placeholders.find((s)=>s.index === 0) || e.appendChild(new a_e(0)));
    }
    _accept(e, n) {
        if (e === void 0 || this._token.type === e) {
            const i = n ? this._scanner.tokenText(this._token) : !0;
            return this._token = this._scanner.next(), i;
        }
        return !1;
    }
    _backTo(e) {
        return this._scanner.pos = e.pos + e.len, this._token = e, !1;
    }
    _until(e) {
        const n = this._token;
        for(; this._token.type !== e;){
            if (this._token.type === 14) return !1;
            if (this._token.type === 5) {
                const r = this._scanner.next();
                if (r.type !== 0 && r.type !== 4 && r.type !== 5) return !1;
            }
            this._token = this._scanner.next();
        }
        const i = this._scanner.value.substring(n.pos, this._token.pos).replace(/\\(\$|}|\\)/g, "$1");
        return this._token = this._scanner.next(), i;
    }
    _parse(e) {
        return this._parseEscaped(e) || this._parseTabstopOrVariableName(e) || this._parseComplexPlaceholder(e) || this._parseComplexVariable(e) || this._parseAnything(e);
    }
    _parseEscaped(e) {
        let n;
        return (n = this._accept(5, !0)) ? (n = this._accept(0, !0) || this._accept(4, !0) || this._accept(5, !0) || n, e.appendChild(new cne(n)), !0) : !1;
    }
    _parseTabstopOrVariableName(e) {
        let n;
        const i = this._token;
        return this._accept(0) && (n = this._accept(9, !0) || this._accept(8, !0)) ? (e.appendChild(/^\d+$/.test(n) ? new a_e(Number(n)) : new Aoi(n)), !0) : this._backTo(i);
    }
    _parseComplexPlaceholder(e) {
        let n;
        const i = this._token;
        if (!(this._accept(0) && this._accept(3) && (n = this._accept(8, !0)))) return this._backTo(i);
        const s = new a_e(Number(n));
        if (this._accept(1)) for(;;){
            if (this._accept(4)) return e.appendChild(s), !0;
            if (!this._parse(s)) return e.appendChild(new cne("${" + n + ":")), s.children.forEach(e.appendChild, e), !0;
        }
        else if (s.index > 0 && this._accept(7)) {
            const o = new xoi;
            for(;;){
                if (this._parseChoiceElement(o)) {
                    if (this._accept(2)) continue;
                    if (this._accept(7) && (s.appendChild(o), this._accept(4))) return e.appendChild(s), !0;
                }
                return this._backTo(i), !1;
            }
        } else return this._accept(6) ? this._parseTransform(s) ? (e.appendChild(s), !0) : (this._backTo(i), !1) : this._accept(4) ? (e.appendChild(s), !0) : this._backTo(i);
    }
    _parseChoiceElement(e) {
        const n = this._token, i = [];
        for(; !(this._token.type === 2 || this._token.type === 7);){
            let r;
            if ((r = this._accept(5, !0)) ? r = this._accept(2, !0) || this._accept(7, !0) || this._accept(5, !0) || r : r = this._accept(void 0, !0), !r) return this._backTo(n), !1;
            i.push(r);
        }
        return i.length === 0 ? (this._backTo(n), !1) : (e.appendChild(new cne(i.join(""))), !0);
    }
    _parseComplexVariable(e) {
        let n;
        const i = this._token;
        if (!(this._accept(0) && this._accept(3) && (n = this._accept(9, !0)))) return this._backTo(i);
        const s = new Aoi(n);
        if (this._accept(1)) for(;;){
            if (this._accept(4)) return e.appendChild(s), !0;
            if (!this._parse(s)) return e.appendChild(new cne("${" + n + ":")), s.children.forEach(e.appendChild, e), !0;
        }
        else return this._accept(6) ? this._parseTransform(s) ? (e.appendChild(s), !0) : (this._backTo(i), !1) : this._accept(4) ? (e.appendChild(s), !0) : this._backTo(i);
    }
    _parseTransform(e) {
        const n = new Ozd;
        let i = "", r = "";
        for(; !this._accept(6);){
            let s;
            if (s = this._accept(5, !0)) {
                s = this._accept(6, !0) || s, i += s;
                continue;
            }
            if (this._token.type !== 14) {
                i += this._accept(void 0, !0);
                continue;
            }
            return !1;
        }
        for(; !this._accept(6);){
            let s;
            if (s = this._accept(5, !0)) {
                s = this._accept(5, !0) || this._accept(6, !0) || s, n.appendChild(new cne(s));
                continue;
            }
            if (!(this._parseFormatString(n) || this._parseAnything(n))) return !1;
        }
        for(; !this._accept(4);){
            if (this._token.type !== 14) {
                r += this._accept(void 0, !0);
                continue;
            }
            return !1;
        }
        try {
            n.regexp = new RegExp(i, r);
        } catch  {
            return !1;
        }
        return e.transform = n, !0;
    }
    _parseFormatString(e) {
        const n = this._token;
        if (!this._accept(0)) return !1;
        let i = !1;
        this._accept(3) && (i = !0);
        const r = this._accept(8, !0);
        if (r) if (i) {
            if (this._accept(4)) return e.appendChild(new THe(Number(r))), !0;
            if (!this._accept(1)) return this._backTo(n), !1;
        } else return e.appendChild(new THe(Number(r))), !0;
        else return this._backTo(n), !1;
        if (this._accept(6)) {
            const s = this._accept(9, !0);
            return !s || !this._accept(4) ? (this._backTo(n), !1) : (e.appendChild(new THe(Number(r), s)), !0);
        } else if (this._accept(11)) {
            const s = this._until(4);
            if (s) return e.appendChild(new THe(Number(r), void 0, s, void 0)), !0;
        } else if (this._accept(12)) {
            const s = this._until(4);
            if (s) return e.appendChild(new THe(Number(r), void 0, void 0, s)), !0;
        } else if (this._accept(13)) {
            const s = this._until(1);
            if (s) {
                const o = this._until(4);
                if (o) return e.appendChild(new THe(Number(r), void 0, s, o)), !0;
            }
        } else {
            const s = this._until(4);
            if (s) return e.appendChild(new THe(Number(r), void 0, void 0, s)), !0;
        }
        return this._backTo(n), !1;
    }
    _parseAnything(e) {
        return this._token.type !== 14 ? (e.appendChild(new cne(this._scanner.tokenText(this._token))), this._accept(void 0), !0) : !1;
    }
};

}
