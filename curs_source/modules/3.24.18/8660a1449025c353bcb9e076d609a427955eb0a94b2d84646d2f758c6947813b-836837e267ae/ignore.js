import { Di, xa } from "./Iwo.js";
import { du, kv } from "./map.js";
import { E } from "./tslib.es6.js";
import { W9m } from "./yBp.js";
var SJr, MKa, kJr, G9m, q9m, z9m, V9m, K9m, Y9m, wJr, DKa, NKa, LKa, X9m, Z9m, OKa, Q9m, J9m, eBm, FKa, tBm, CJr, nBm, iBm, rBm, sBm, oBm, Yqe, BKa, aBm, T0i, lBm, Xqe;
export { BKa, CJr, DKa, FKa, G9m, J9m, K9m, LKa, MKa, NKa, OKa, Q9m, SJr, T0i, V9m, X9m, Xqe, Y9m, Yqe, Z9m, aBm, eBm, iBm, kJr, lBm, nBm, oBm, q9m, rBm, sBm, tBm, wJr, z9m };
var __wakaru_cBm_initialized = false;
export function cBm() {
if (__wakaru_cBm_initialized) return;
__wakaru_cBm_initialized = true;
"use strict";
if (E(), du(), Di(), SJr = "", MKa = " ", kJr = "\\", G9m = /^\s+$/, q9m = /(?:[^\\]|^)\\$/, z9m = /^\\!/, V9m = /^\\#/, K9m = /\r?\n/g, Y9m = /^\.*\/|^\.+$/, wJr = "/", DKa = 5e4, NKa = "node-ignore", typeof Symbol < "u" && (NKa = Symbol.for("node-ignore")), LKa = NKa, X9m = (t, e, n)=>Object.defineProperty(t, e, {
        value: n
    }), Z9m = /([0-z])-([0-z])/g, OKa = ()=>!1, Q9m = (t)=>t.replace(Z9m, (e, n, i)=>n.charCodeAt(0) <= i.charCodeAt(0) ? e : SJr), J9m = (t)=>{
    const { length: e } = t;
    return t.slice(0, e - e % 2);
}, eBm = [
    [
        /^\uFEFF/,
        ()=>SJr
    ],
    [
        /\\?\s+$/,
        (t)=>t.indexOf("\\") === 0 ? MKa : SJr
    ],
    [
        /\\\s/g,
        ()=>MKa
    ],
    [
        /[\\$.|*+(){^]/g,
        (t)=>`\\${t}`
    ],
    [
        /(?!\\)\?/g,
        ()=>"[^/]"
    ],
    [
        /^\//,
        ()=>"^"
    ],
    [
        /\//g,
        ()=>"\\/"
    ],
    [
        /^\^*\\\*\\\*\\\//,
        ()=>"^(?:.*\\/)?"
    ],
    [
        /^(?=[^^])/,
        function() {
            return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
        }
    ],
    [
        /\\\/\\\*\\\*(?=\\\/|$)/g,
        (t, e, n)=>e + 6 < n.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
    ],
    [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (t, e, n)=>{
            const i = n.replace(/\\\*/g, "[^\\/]*");
            return e + i;
        }
    ],
    [
        /\\\\\\(?=[$.|*+(){^])/g,
        ()=>kJr
    ],
    [
        /\\\\/g,
        ()=>kJr
    ],
    [
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (t, e, n, i, r)=>e === kJr ? `\\[${n}${J9m(i)}${r}` : r === "]" && i.length % 2 === 0 ? `[${Q9m(n)}${i}]` : "[]"
    ],
    [
        /(?:[^*])$/,
        (t)=>/\/$/.test(t) ? `${t}$` : `${t}(?=$|\\/$)`
    ],
    [
        /(\^|\\\/)?\\\*$/,
        (t, e)=>`${e ? `${e}[^/]+` : "[^/]*"}(?=$|\\/$)`
    ]
], FKa = Object.create(null), tBm = (t, e)=>{
    let n = FKa[t];
    return n || (n = eBm.reduce((i, r)=>i.replace(r[0], r[1].bind(t)), t), FKa[t] = n), e ? new RegExp(n, "i") : new RegExp(n);
}, CJr = (t)=>typeof t == "string", nBm = (t)=>t && CJr(t) && !G9m.test(t) && !q9m.test(t) && t.indexOf("#") !== 0, iBm = (t)=>t.split(K9m), rBm = class {
    constructor(t, e, n, i){
        this.origin = t, this.pattern = e, this.negative = n, this.regex = i;
    }
}, sBm = (t, e)=>{
    const n = t;
    let i = !1;
    t.indexOf("!") === 0 && (i = !0, t = t.substr(1)), t = t.replace(z9m, "!").replace(V9m, "#");
    const r = tBm(t, e);
    return new rBm(n, t, i, r);
}, oBm = (t, e)=>{
    throw new e(t);
}, Yqe = (t, e, n)=>CJr(t) ? t ? Yqe.isNotRelative(t) ? n(`path should be a \`path.relative()\`d string, but got "${e}"`, RangeError) : !0 : n("path must not be empty", TypeError) : n(`path must be a string, but got \`${e}\``, TypeError), BKa = (t)=>Y9m.test(t), Yqe.isNotRelative = BKa, Yqe.convert = (t)=>t, aBm = class {
    constructor({ ignorecase: t = !0, ignoreCase: e = t, allowRelativePaths: n = !1 } = {}){
        X9m(this, LKa, !0), this._rules = [], this._ignoreCase = e, this._allowRelativePaths = n, this._initCache();
    }
    _initCache() {
        this._ignoreCache = new kv(DKa), this._testCache = new kv(DKa);
    }
    _addPattern(t) {
        if (t && t[LKa]) {
            this._rules = this._rules.concat(t._rules), this._added = !0;
            return;
        }
        if (nBm(t)) {
            const e = sBm(t, this._ignoreCase);
            this._added = !0, this._rules.push(e);
        }
    }
    add(t) {
        return this._added = !1, W9m(CJr(t) ? iBm(t) : t).forEach(this._addPattern, this), this._added && this._initCache(), this;
    }
    addPattern(t) {
        return this.add(t);
    }
    _testOne(t, e) {
        let n = !1, i = !1;
        return this._rules.forEach((r)=>{
            const { negative: s } = r;
            if (i === s && n !== i || s && !n && !i && !e) return;
            r.regex.test(t) && (n = !s, i = s);
        }), {
            ignored: n,
            unignored: i
        };
    }
    _test(t, e, n, i) {
        const r = t && Yqe.convert(t);
        return Yqe(r, t, this._allowRelativePaths ? OKa : oBm), this._t(r, e, n, i);
    }
    _t(t, e, n, i) {
        const r = e.get(t);
        if (r !== void 0) return r;
        if (i || (i = t.split(wJr)), i.pop(), !i.length) {
            const o = this._testOne(t, n);
            return e.set(t, o), o;
        }
        const s = this._t(i.join(wJr) + wJr, e, n, i);
        if (s.ignored) return e.set(t, s), s;
        {
            const o = this._testOne(t, n);
            return e.set(t, o), o;
        }
    }
    ignores(t) {
        return this._test(t, this._ignoreCache, !1).ignored;
    }
    createFilter() {
        return (t)=>!this.ignores(t);
    }
    filter(t) {
        return W9m(t).filter(this.createFilter());
    }
    test(t) {
        return this._test(t, this._testCache, !0);
    }
}, T0i = (t)=>new aBm(t), lBm = (t)=>Yqe(t && Yqe.convert(t), t, OKa), T0i.isPathValid = lBm, T0i.default = T0i, Xqe = T0i, xa) {
    const t = (n)=>/^\\\\\?\\/.test(n) || /["<>|\u0000-\u001F]+/u.test(n) ? n : n.replace(/\\/g, "/");
    Yqe.convert = t;
    const e = /^[a-z]:\//i;
    Yqe.isNotRelative = (n)=>e.test(n) || BKa(n);
}

}
