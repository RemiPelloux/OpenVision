function e(t) {
    return Array.isArray(t) ? t : [
        t
    ];
}
const r = /^\s+$/, i = /(?:[^\\]|^)\\$/, n = /^\\!/, o = /^\\#/, s = /\r?\n/g, a = /^\.{0,2}\/|^\.{1,2}$/, c = /\/$/, h = "/";
let l = "node-ignore";
"undefined" != typeof Symbol && (l = Symbol.for("node-ignore"));
const d = l, u = (t, e, r)=>(Object.defineProperty(t, e, {
        value: r
    }), r), f = /([0-z])-([0-z])/g, p = ()=>!1, g = [
    [
        /^\uFEFF/,
        ()=>""
    ],
    [
        /((?:\\\\)*?)(\\?\s+)$/,
        (t, e, r)=>e + (0 === r.indexOf("\\") ? " " : "")
    ],
    [
        /(\\+?)\s/g,
        (t, e)=>{
            const { length: r } = e;
            return e.slice(0, r - r % 2) + " ";
        }
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
        (t, e, r)=>e + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
    ],
    [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (t, e, r)=>e + r.replace(/\\\*/g, "[^\\/]*")
    ],
    [
        /\\\\\\(?=[$.|*+(){^])/g,
        ()=>"\\"
    ],
    [
        /\\\\/g,
        ()=>"\\"
    ],
    [
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (t, e, r, i, n)=>"\\" === e ? `\\[${r}${((t)=>{
                const { length: e } = t;
                return t.slice(0, e - e % 2);
            })(i)}${n}` : "]" === n && i.length % 2 == 0 ? `[${((t)=>t.replace(f, (t, e, r)=>e.charCodeAt(0) <= r.charCodeAt(0) ? t : ""))(r)}${i}]` : "[]"
    ],
    [
        /(?:[^*])$/,
        (t)=>/\/$/.test(t) ? `${t}$` : `${t}(?=$|\\/$)`
    ]
], m = /(^|\\\/)?\\\*$/, v = "regex", y = "checkRegex", b = {
    [v]: (t, e)=>`${e ? `${e}[^/]+` : "[^/]*"}(?=$|\\/$)`,
    [y]: (t, e)=>`${e ? `${e}[^/]*` : "[^/]*"}(?=$|\\/$)`
}, w = (t)=>"string" == typeof t;
class P {
    constructor(t, e, r, i, n, o){
        this.pattern = t, this.mark = e, this.negative = n, u(this, "body", r), u(this, "ignoreCase", i), u(this, "regexPrefix", o);
    }
    get regex() {
        const t = "_" + v;
        return this[t] ? this[t] : this._make(v, t);
    }
    get checkRegex() {
        const t = "_" + y;
        return this[t] ? this[t] : this._make(y, t);
    }
    _make(t, e) {
        const r = this.regexPrefix.replace(m, b[t]), i = this.ignoreCase ? new RegExp(r, "i") : new RegExp(r);
        return u(this, e, i);
    }
}
const _ = ({ pattern: t, mark: e }, r)=>{
    let i = !1, s = t;
    0 === s.indexOf("!") && (i = !0, s = s.substr(1)), s = s.replace(n, "!").replace(o, "#");
    const a = ((t)=>g.reduce((e, [r, i])=>e.replace(r, i.bind(t)), t))(s);
    return new P(t, e, s, r, i, a);
};
class k {
    constructor(t){
        this._ignoreCase = t, this._rules = [];
    }
    _add(t) {
        if (t && t[d]) return this._rules = this._rules.concat(t._rules._rules), void (this._added = !0);
        if (w(t) && (t = {
            pattern: t
        }), ((t)=>t && w(t) && !r.test(t) && !i.test(t) && 0 !== t.indexOf("#"))(t.pattern)) {
            const e = _(t, this._ignoreCase);
            this._added = !0, this._rules.push(e);
        }
    }
    add(t) {
        return this._added = !1, e(w(t) ? ((t)=>t.split(s).filter(Boolean))(t) : t).forEach(this._add, this), this._added;
    }
    test(t, e, r) {
        let i, n = !1, o = !1;
        this._rules.forEach((s)=>{
            const { negative: a } = s;
            if (o === a && n !== o || a && !n && !o && !e) return;
            s[r].test(t) && (n = !a, o = a, i = a ? void 0 : s);
        });
        const s = {
            ignored: n,
            unignored: o
        };
        return i && (s.rule = i), s;
    }
}
const $ = (t, e)=>{
    throw new e(t);
}, x = (t, e, r)=>{
    if (!w(t)) return r(`path must be a string, but got \`${e}\``, TypeError);
    if (!t) return r("path must not be empty", TypeError);
    if (x.isNotRelative(t)) {
        return r(`path should be a ${"`path.relative()`d"} string, but got "${e}"`, RangeError);
    }
    return !0;
}, S = (t)=>a.test(t);
x.isNotRelative = S, x.convert = (t)=>t;
class E {
    constructor({ ignorecase: t = !0, ignoreCase: e = t, allowRelativePaths: r = !1 } = {}){
        u(this, d, !0), this._rules = new k(e), this._strictPathCheck = !r, this._initCache();
    }
    _initCache() {
        this._ignoreCache = Object.create(null), this._testCache = Object.create(null);
    }
    add(t) {
        return this._rules.add(t) && this._initCache(), this;
    }
    addPattern(t) {
        return this.add(t);
    }
    _test(t, e, r, i) {
        const n = t && x.convert(t);
        return x(n, t, this._strictPathCheck ? $ : p), this._t(n, e, r, i);
    }
    checkIgnore(t) {
        if (!c.test(t)) return this.test(t);
        const e = t.split(h).filter(Boolean);
        if (e.pop(), e.length) {
            const t = this._t(e.join(h) + h, this._testCache, !0, e);
            if (t.ignored) return t;
        }
        return this._rules.test(t, !1, y);
    }
    _t(t, e, r, i) {
        if (t in e) return e[t];
        if (i || (i = t.split(h).filter(Boolean)), i.pop(), !i.length) return e[t] = this._rules.test(t, r, v);
        const n = this._t(i.join(h) + h, e, r, i);
        return e[t] = n.ignored ? n : this._rules.test(t, r, v);
    }
    ignores(t) {
        return this._test(t, this._ignoreCache, !1).ignored;
    }
    createFilter() {
        return (t)=>!this.ignores(t);
    }
    filter(t) {
        return e(t).filter(this.createFilter());
    }
    test(t) {
        return this._test(t, this._testCache, !0);
    }
}
const C = (t)=>new E(t), D = ()=>{
    x.convert = (t)=>/^\\\\\?\\/.test(t) || /["<>|\u0000-\u001F]+/u.test(t) ? t : t.replace(/\\/g, "/");
    const t = /^[a-z]:\//i;
    x.isNotRelative = (e)=>t.test(e) || S(e);
};
"undefined" != typeof process && "win32" === process.platform && D(), module.exports = C, C.default = C, module.exports.isPathValid = (t)=>x(t && x.convert(t), t, p), u(module.exports, Symbol.for("setupWindows"), D);
