function t(e) {
    return Array.isArray(e) ? e : [
        e
    ];
}
const r = /^\s+$/, n = /(?:[^\\]|^)\\$/, o = /^\\!/, s = /^\\#/, i = /\r?\n/g, a = /^\.{0,2}\/|^\.{1,2}$/, l = /\/$/, c = "/";
let u = "node-ignore";
"undefined" != typeof Symbol && (u = Symbol.for("node-ignore"));
const d = u, p = (e, t, r)=>(Object.defineProperty(e, t, {
        value: r
    }), r), h = /([0-z])-([0-z])/g, m = ()=>!1, f = [
    [
        /^\uFEFF/,
        ()=>""
    ],
    [
        /((?:\\\\)*?)(\\?\s+)$/,
        (e, t, r)=>t + (0 === r.indexOf("\\") ? " " : "")
    ],
    [
        /(\\+?)\s/g,
        (e, t)=>{
            const { length: r } = t;
            return t.slice(0, r - r % 2) + " ";
        }
    ],
    [
        /[\\$.|*+(){^]/g,
        (e)=>`\\${e}`
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
        (e, t, r)=>t + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
    ],
    [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (e, t, r)=>t + r.replace(/\\\*/g, "[^\\/]*")
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
        (e, t, r, n, o)=>"\\" === t ? `\\[${r}${((e)=>{
                const { length: t } = e;
                return e.slice(0, t - t % 2);
            })(n)}${o}` : "]" === o && n.length % 2 == 0 ? `[${((e)=>e.replace(h, (e, t, r)=>t.charCodeAt(0) <= r.charCodeAt(0) ? e : ""))(r)}${n}]` : "[]"
    ],
    [
        /(?:[^*])$/,
        (e)=>/\/$/.test(e) ? `${e}$` : `${e}(?=$|\\/$)`
    ]
], g = /(^|\\\/)?\\\*$/, y = "regex", v = "checkRegex", w = {
    [y]: (e, t)=>`${t ? `${t}[^/]+` : "[^/]*"}(?=$|\\/$)`,
    [v]: (e, t)=>`${t ? `${t}[^/]*` : "[^/]*"}(?=$|\\/$)`
}, b = (e)=>"string" == typeof e;
class _ {
    constructor(e, t, r, n, o, s){
        this.pattern = e, this.mark = t, this.negative = o, p(this, "body", r), p(this, "ignoreCase", n), p(this, "regexPrefix", s);
    }
    get regex() {
        const e = "_" + y;
        return this[e] ? this[e] : this._make(y, e);
    }
    get checkRegex() {
        const e = "_" + v;
        return this[e] ? this[e] : this._make(v, e);
    }
    _make(e, t) {
        const r = this.regexPrefix.replace(g, w[e]), n = this.ignoreCase ? new RegExp(r, "i") : new RegExp(r);
        return p(this, t, n);
    }
}
const S = ({ pattern: e, mark: t }, r)=>{
    let n = !1, i = e;
    0 === i.indexOf("!") && (n = !0, i = i.substr(1)), i = i.replace(o, "!").replace(s, "#");
    const a = ((e)=>f.reduce((t, [r, n])=>t.replace(r, n.bind(e)), e))(i);
    return new _(e, t, i, r, n, a);
};
class x {
    constructor(e){
        this._ignoreCase = e, this._rules = [];
    }
    _add(e) {
        if (e && e[d]) return this._rules = this._rules.concat(e._rules._rules), void (this._added = !0);
        if (b(e) && (e = {
            pattern: e
        }), ((e)=>e && b(e) && !r.test(e) && !n.test(e) && 0 !== e.indexOf("#"))(e.pattern)) {
            const t = S(e, this._ignoreCase);
            this._added = !0, this._rules.push(t);
        }
    }
    add(e) {
        return this._added = !1, t(b(e) ? ((e)=>e.split(i).filter(Boolean))(e) : e).forEach(this._add, this), this._added;
    }
    test(e, t, r) {
        let n, o = !1, s = !1;
        this._rules.forEach((i)=>{
            const { negative: a } = i;
            if (s === a && o !== s || a && !o && !s && !t) return;
            i[r].test(e) && (o = !a, s = a, n = a ? void 0 : i);
        });
        const i = {
            ignored: o,
            unignored: s
        };
        return n && (i.rule = n), i;
    }
}
const k = (e, t)=>{
    throw new t(e);
}, E = (e, t, r)=>{
    if (!b(e)) return r(`path must be a string, but got \`${t}\``, TypeError);
    if (!e) return r("path must not be empty", TypeError);
    if (E.isNotRelative(e)) {
        return r(`path should be a ${"`path.relative()`d"} string, but got "${t}"`, RangeError);
    }
    return !0;
}, T = (e)=>a.test(e);
E.isNotRelative = T, E.convert = (e)=>e;
class C {
    constructor({ ignorecase: e = !0, ignoreCase: t = e, allowRelativePaths: r = !1 } = {}){
        p(this, d, !0), this._rules = new x(t), this._strictPathCheck = !r, this._initCache();
    }
    _initCache() {
        this._ignoreCache = Object.create(null), this._testCache = Object.create(null);
    }
    add(e) {
        return this._rules.add(e) && this._initCache(), this;
    }
    addPattern(e) {
        return this.add(e);
    }
    _test(e, t, r, n) {
        const o = e && E.convert(e);
        return E(o, e, this._strictPathCheck ? k : m), this._t(o, t, r, n);
    }
    checkIgnore(e) {
        if (!l.test(e)) return this.test(e);
        const t = e.split(c).filter(Boolean);
        if (t.pop(), t.length) {
            const e = this._t(t.join(c) + c, this._testCache, !0, t);
            if (e.ignored) return e;
        }
        return this._rules.test(e, !1, v);
    }
    _t(e, t, r, n) {
        if (e in t) return t[e];
        if (n || (n = e.split(c).filter(Boolean)), n.pop(), !n.length) return t[e] = this._rules.test(e, r, y);
        const o = this._t(n.join(c) + c, t, r, n);
        return t[e] = o.ignored ? o : this._rules.test(e, r, y);
    }
    ignores(e) {
        return this._test(e, this._ignoreCache, !1).ignored;
    }
    createFilter() {
        return (e)=>!this.ignores(e);
    }
    filter(e) {
        return t(e).filter(this.createFilter());
    }
    test(e) {
        return this._test(e, this._testCache, !0);
    }
}
const I = (e)=>new C(e), A = ()=>{
    E.convert = (e)=>/^\\\\\?\\/.test(e) || /["<>|\u0000-\u001F]+/u.test(e) ? e : e.replace(/\\/g, "/");
    const e = /^[a-z]:\//i;
    E.isNotRelative = (t)=>e.test(t) || T(t);
};
"undefined" != typeof process && "win32" === process.platform && A(), module.exports = I, I.default = I, module.exports.isPathValid = (e)=>E(e && E.convert(e), e, m), p(module.exports, Symbol.for("setupWindows"), A);
