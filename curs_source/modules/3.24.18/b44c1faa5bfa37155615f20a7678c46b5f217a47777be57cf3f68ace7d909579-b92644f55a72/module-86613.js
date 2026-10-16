function t(e) {
    return Array.isArray(e) ? e : [
        e
    ];
}
const r = /^\s+$/, n = /(?:[^\\]|^)\\$/, s = /^\\!/, o = /^\\#/, i = /\r?\n/g, a = /^\.{0,2}\/|^\.{1,2}$/, c = /\/$/, l = "/";
let u = "node-ignore";
"undefined" != typeof Symbol && (u = Symbol.for("node-ignore"));
const d = u, p = (e, t, r)=>(Object.defineProperty(e, t, {
        value: r
    }), r), m = /([0-z])-([0-z])/g, h = ()=>!1, f = [
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
        (e, t, r, n, s)=>"\\" === t ? `\\[${r}${((e)=>{
                const { length: t } = e;
                return e.slice(0, t - t % 2);
            })(n)}${s}` : "]" === s && n.length % 2 == 0 ? `[${((e)=>e.replace(m, (e, t, r)=>t.charCodeAt(0) <= r.charCodeAt(0) ? e : ""))(r)}${n}]` : "[]"
    ],
    [
        /(?:[^*])$/,
        (e)=>/\/$/.test(e) ? `${e}$` : `${e}(?=$|\\/$)`
    ]
], g = /(^|\\\/)?\\\*$/, y = "regex", w = "checkRegex", v = {
    [y]: (e, t)=>`${t ? `${t}[^/]+` : "[^/]*"}(?=$|\\/$)`,
    [w]: (e, t)=>`${t ? `${t}[^/]*` : "[^/]*"}(?=$|\\/$)`
}, _ = (e)=>"string" == typeof e;
class A {
    constructor(e, t, r, n, s, o){
        this.pattern = e, this.mark = t, this.negative = s, p(this, "body", r), p(this, "ignoreCase", n), p(this, "regexPrefix", o);
    }
    get regex() {
        const e = "_" + y;
        return this[e] ? this[e] : this._make(y, e);
    }
    get checkRegex() {
        const e = "_" + w;
        return this[e] ? this[e] : this._make(w, e);
    }
    _make(e, t) {
        const r = this.regexPrefix.replace(g, v[e]), n = this.ignoreCase ? new RegExp(r, "i") : new RegExp(r);
        return p(this, t, n);
    }
}
const S = ({ pattern: e, mark: t }, r)=>{
    let n = !1, i = e;
    0 === i.indexOf("!") && (n = !0, i = i.substr(1)), i = i.replace(s, "!").replace(o, "#");
    const a = ((e)=>f.reduce((t, [r, n])=>t.replace(r, n.bind(e)), e))(i);
    return new A(e, t, i, r, n, a);
};
class b {
    constructor(e){
        this._ignoreCase = e, this._rules = [];
    }
    _add(e) {
        if (e && e[d]) return this._rules = this._rules.concat(e._rules._rules), void (this._added = !0);
        if (_(e) && (e = {
            pattern: e
        }), ((e)=>e && _(e) && !r.test(e) && !n.test(e) && 0 !== e.indexOf("#"))(e.pattern)) {
            const t = S(e, this._ignoreCase);
            this._added = !0, this._rules.push(t);
        }
    }
    add(e) {
        return this._added = !1, t(_(e) ? ((e)=>e.split(i).filter(Boolean))(e) : e).forEach(this._add, this), this._added;
    }
    test(e, t, r) {
        let n, s = !1, o = !1;
        this._rules.forEach((i)=>{
            const { negative: a } = i;
            if (o === a && s !== o || a && !s && !o && !t) return;
            i[r].test(e) && (s = !a, o = a, n = a ? void 0 : i);
        });
        const i = {
            ignored: s,
            unignored: o
        };
        return n && (i.rule = n), i;
    }
}
const E = (e, t)=>{
    throw new t(e);
}, I = (e, t, r)=>{
    if (!_(e)) return r(`path must be a string, but got \`${t}\``, TypeError);
    if (!e) return r("path must not be empty", TypeError);
    if (I.isNotRelative(e)) {
        return r(`path should be a ${"`path.relative()`d"} string, but got "${t}"`, RangeError);
    }
    return !0;
}, C = (e)=>a.test(e);
I.isNotRelative = C, I.convert = (e)=>e;
class k {
    constructor({ ignorecase: e = !0, ignoreCase: t = e, allowRelativePaths: r = !1 } = {}){
        p(this, d, !0), this._rules = new b(t), this._strictPathCheck = !r, this._initCache();
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
        const s = e && I.convert(e);
        return I(s, e, this._strictPathCheck ? E : h), this._t(s, t, r, n);
    }
    checkIgnore(e) {
        if (!c.test(e)) return this.test(e);
        const t = e.split(l).filter(Boolean);
        if (t.pop(), t.length) {
            const e = this._t(t.join(l) + l, this._testCache, !0, t);
            if (e.ignored) return e;
        }
        return this._rules.test(e, !1, w);
    }
    _t(e, t, r, n) {
        if (e in t) return t[e];
        if (n || (n = e.split(l).filter(Boolean)), n.pop(), !n.length) return t[e] = this._rules.test(e, r, y);
        const s = this._t(n.join(l) + l, t, r, n);
        return t[e] = s.ignored ? s : this._rules.test(e, r, y);
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
const x = (e)=>new k(e), T = ()=>{
    I.convert = (e)=>/^\\\\\?\\/.test(e) || /["<>|\u0000-\u001F]+/u.test(e) ? e : e.replace(/\\/g, "/");
    const e = /^[a-z]:\//i;
    I.isNotRelative = (t)=>e.test(t) || C(t);
};
"undefined" != typeof process && "win32" === process.platform && T(), module.exports = x, x.default = x, module.exports.isPathValid = (e)=>I(e && I.convert(e), e, h), p(module.exports, Symbol.for("setupWindows"), T);
