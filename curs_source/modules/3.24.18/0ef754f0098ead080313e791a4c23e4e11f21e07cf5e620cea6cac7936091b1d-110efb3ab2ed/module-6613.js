function a(e) {
    return Array.isArray(e) ? e : [
        e
    ];
}
const n = /^\s+$/, t = /(?:[^\\]|^)\\$/, s = /^\\!/, o = /^\\#/, r = /\r?\n/g, i = /^\.{0,2}\/|^\.{1,2}$/, l = /\/$/, d = "/";
let m = "node-ignore";
"undefined" != typeof Symbol && (m = Symbol.for("node-ignore"));
const c = m, p = (e, a, n)=>(Object.defineProperty(e, a, {
        value: n
    }), n), A = /([0-z])-([0-z])/g, u = ()=>!1, g = [
    [
        /^\uFEFF/,
        ()=>""
    ],
    [
        /((?:\\\\)*?)(\\?\s+)$/,
        (e, a, n)=>a + (0 === n.indexOf("\\") ? " " : "")
    ],
    [
        /(\\+?)\s/g,
        (e, a)=>{
            const { length: n } = a;
            return a.slice(0, n - n % 2) + " ";
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
        (e, a, n)=>a + 6 < n.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
    ],
    [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (e, a, n)=>a + n.replace(/\\\*/g, "[^\\/]*")
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
        (e, a, n, t, s)=>"\\" === a ? `\\[${n}${((e)=>{
                const { length: a } = e;
                return e.slice(0, a - a % 2);
            })(t)}${s}` : "]" === s && t.length % 2 == 0 ? `[${((e)=>e.replace(A, (e, a, n)=>a.charCodeAt(0) <= n.charCodeAt(0) ? e : ""))(n)}${t}]` : "[]"
    ],
    [
        /(?:[^*])$/,
        (e)=>/\/$/.test(e) ? `${e}$` : `${e}(?=$|\\/$)`
    ]
], T = /(^|\\\/)?\\\*$/, h = "regex", k = "checkRegex", _ = {
    [h]: (e, a)=>`${a ? `${a}[^/]+` : "[^/]*"}(?=$|\\/$)`,
    [k]: (e, a)=>`${a ? `${a}[^/]*` : "[^/]*"}(?=$|\\/$)`
}, E = (e)=>"string" == typeof e;
class f {
    constructor(e, a, n, t, s, o){
        this.pattern = e, this.mark = a, this.negative = s, p(this, "body", n), p(this, "ignoreCase", t), p(this, "regexPrefix", o);
    }
    get regex() {
        const e = "_" + h;
        return this[e] ? this[e] : this._make(h, e);
    }
    get checkRegex() {
        const e = "_" + k;
        return this[e] ? this[e] : this._make(k, e);
    }
    _make(e, a) {
        const n = this.regexPrefix.replace(T, _[e]), t = this.ignoreCase ? new RegExp(n, "i") : new RegExp(n);
        return p(this, a, t);
    }
}
const C = ({ pattern: e, mark: a }, n)=>{
    let t = !1, r = e;
    0 === r.indexOf("!") && (t = !0, r = r.substr(1)), r = r.replace(s, "!").replace(o, "#");
    const i = ((e)=>g.reduce((a, [n, t])=>a.replace(n, t.bind(e)), e))(r);
    return new f(e, a, r, n, t, i);
};
class I {
    constructor(e){
        this._ignoreCase = e, this._rules = [];
    }
    _add(e) {
        if (e && e[c]) return this._rules = this._rules.concat(e._rules._rules), void (this._added = !0);
        if (E(e) && (e = {
            pattern: e
        }), ((e)=>e && E(e) && !n.test(e) && !t.test(e) && 0 !== e.indexOf("#"))(e.pattern)) {
            const a = C(e, this._ignoreCase);
            this._added = !0, this._rules.push(a);
        }
    }
    add(e) {
        return this._added = !1, a(E(e) ? ((e)=>e.split(r).filter(Boolean))(e) : e).forEach(this._add, this), this._added;
    }
    test(e, a, n) {
        let t, s = !1, o = !1;
        this._rules.forEach((r)=>{
            const { negative: i } = r;
            if (o === i && s !== o || i && !s && !o && !a) return;
            r[n].test(e) && (s = !i, o = i, t = i ? void 0 : r);
        });
        const r = {
            ignored: s,
            unignored: o
        };
        return t && (r.rule = t), r;
    }
}
const v = (e, a)=>{
    throw new a(e);
}, y = (e, a, n)=>{
    if (!E(e)) return n(`path must be a string, but got \`${a}\``, TypeError);
    if (!e) return n("path must not be empty", TypeError);
    if (y.isNotRelative(e)) {
        return n(`path should be a ${"`path.relative()`d"} string, but got "${a}"`, RangeError);
    }
    return !0;
}, S = (e)=>i.test(e);
y.isNotRelative = S, y.convert = (e)=>e;
class R {
    constructor({ ignorecase: e = !0, ignoreCase: a = e, allowRelativePaths: n = !1 } = {}){
        p(this, c, !0), this._rules = new I(a), this._strictPathCheck = !n, this._initCache();
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
    _test(e, a, n, t) {
        const s = e && y.convert(e);
        return y(s, e, this._strictPathCheck ? v : u), this._t(s, a, n, t);
    }
    checkIgnore(e) {
        if (!l.test(e)) return this.test(e);
        const a = e.split(d).filter(Boolean);
        if (a.pop(), a.length) {
            const e = this._t(a.join(d) + d, this._testCache, !0, a);
            if (e.ignored) return e;
        }
        return this._rules.test(e, !1, k);
    }
    _t(e, a, n, t) {
        if (e in a) return a[e];
        if (t || (t = e.split(d).filter(Boolean)), t.pop(), !t.length) return a[e] = this._rules.test(e, n, h);
        const s = this._t(t.join(d) + d, a, n, t);
        return a[e] = s.ignored ? s : this._rules.test(e, n, h);
    }
    ignores(e) {
        return this._test(e, this._ignoreCache, !1).ignored;
    }
    createFilter() {
        return (e)=>!this.ignores(e);
    }
    filter(e) {
        return a(e).filter(this.createFilter());
    }
    test(e) {
        return this._test(e, this._testCache, !0);
    }
}
const N = (e)=>new R(e), B = ()=>{
    y.convert = (e)=>/^\\\\\?\\/.test(e) || /["<>|\u0000-\u001F]+/u.test(e) ? e : e.replace(/\\/g, "/");
    const e = /^[a-z]:\//i;
    y.isNotRelative = (a)=>e.test(a) || S(a);
};
"undefined" != typeof process && "win32" === process.platform && B(), module.exports = N, N.default = N, module.exports.isPathValid = (e)=>y(e && y.convert(e), e, u), p(module.exports, Symbol.for("setupWindows"), B);
