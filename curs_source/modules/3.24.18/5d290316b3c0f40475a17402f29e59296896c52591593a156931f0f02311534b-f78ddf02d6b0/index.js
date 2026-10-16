import { h } from "./tslib.es6.js";
var __wakaru_f7_cache;
export function f7() {
if (__wakaru_f7_cache) return __wakaru_f7_cache.exports;
var e = {};
var t = { exports: e };
__wakaru_f7_cache = t;
h();
function r(E) {
    return Array.isArray(E) ? E : [
        E
    ];
}
var n = void 0, s = "", i = " ", o = "\\", a = /^\s+$/, c = /(?:[^\\]|^)\\$/, l = /^\\!/, u = /^\\#/, d = /\r?\n/g, f = /^\.{0,2}\/|^\.{1,2}$/, p = /\/$/, g = "/", _ = "node-ignore";
typeof Symbol < "u" && (_ = Symbol.for("node-ignore"));
var y = _, m = (E, x, U)=>(Object.defineProperty(E, x, {
        value: U
    }), U), A = /([0-z])-([0-z])/g, S = ()=>!1, v = (E)=>E.replace(A, (x, U, q)=>U.charCodeAt(0) <= q.charCodeAt(0) ? x : s), b = (E)=>{
    const { length: x } = E;
    return E.slice(0, x - x % 2);
}, I = [
    [
        /^\uFEFF/,
        ()=>s
    ],
    [
        /((?:\\\\)*?)(\\?\s+)$/,
        (E, x, U)=>x + (U.indexOf("\\") === 0 ? i : s)
    ],
    [
        /(\\+?)\s/g,
        (E, x)=>{
            const { length: U } = x;
            return x.slice(0, U - U % 2) + i;
        }
    ],
    [
        /[\\$.|*+(){^]/g,
        (E)=>`\\${E}`
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
        (E, x, U)=>x + 6 < U.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
    ],
    [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (E, x, U)=>{
            const q = U.replace(/\\\*/g, "[^\\/]*");
            return x + q;
        }
    ],
    [
        /\\\\\\(?=[$.|*+(){^])/g,
        ()=>o
    ],
    [
        /\\\\/g,
        ()=>o
    ],
    [
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (E, x, U, q, ue)=>x === o ? `\\[${U}${b(q)}${ue}` : ue === "]" && q.length % 2 === 0 ? `[${v(U)}${q}]` : "[]"
    ],
    [
        /(?:[^*])$/,
        (E)=>/\/$/.test(E) ? `${E}$` : `${E}(?=$|\\/$)`
    ]
], O = /(^|\\\/)?\\\*$/, M = "regex", F = "checkRegex", H = "_", ee = {
    [M] (E, x) {
        return `${x ? `${x}[^/]+` : "[^/]*"}(?=$|\\/$)`;
    },
    [F] (E, x) {
        return `${x ? `${x}[^/]*` : "[^/]*"}(?=$|\\/$)`;
    }
}, Y = (E)=>I.reduce((x, [U, q])=>x.replace(U, q.bind(E)), E), B = (E)=>typeof E == "string", P = (E)=>E && B(E) && !a.test(E) && !c.test(E) && E.indexOf("#") !== 0, T = (E)=>E.split(d).filter(Boolean), R = class {
    constructor(E, x, U, q, ue, ht){
        this.pattern = E, this.mark = x, this.negative = ue, m(this, "body", U), m(this, "ignoreCase", q), m(this, "regexPrefix", ht);
    }
    get regex() {
        const E = H + M;
        return this[E] ? this[E] : this._make(M, E);
    }
    get checkRegex() {
        const E = H + F;
        return this[E] ? this[E] : this._make(F, E);
    }
    _make(E, x) {
        const U = this.regexPrefix.replace(O, ee[E]), q = this.ignoreCase ? new RegExp(U, "i") : new RegExp(U);
        return m(this, x, q);
    }
}, C = ({ pattern: E, mark: x }, U)=>{
    let q = !1, ue = E;
    ue.indexOf("!") === 0 && (q = !0, ue = ue.substr(1)), ue = ue.replace(l, "!").replace(u, "#");
    const ht = Y(ue);
    return new R(E, x, ue, U, q, ht);
}, L = class {
    constructor(E){
        this._ignoreCase = E, this._rules = [];
    }
    _add(E) {
        if (E && E[y]) {
            this._rules = this._rules.concat(E._rules._rules), this._added = !0;
            return;
        }
        if (B(E) && (E = {
            pattern: E
        }), P(E.pattern)) {
            const x = C(E, this._ignoreCase);
            this._added = !0, this._rules.push(x);
        }
    }
    add(E) {
        return this._added = !1, r(B(E) ? T(E) : E).forEach(this._add, this), this._added;
    }
    test(E, x, U) {
        let q = !1, ue = !1, ht;
        this._rules.forEach((Dn)=>{
            const { negative: lr } = Dn;
            ue === lr && q !== ue || lr && !q && !ue && !x || !Dn[U].test(E) || (q = !lr, ue = lr, ht = lr ? n : Dn);
        });
        const Mn = {
            ignored: q,
            unignored: ue
        };
        return ht && (Mn.rule = ht), Mn;
    }
}, D = (E, x)=>{
    throw new x(E);
}, N = (E, x, U)=>B(E) ? E ? N.isNotRelative(E) ? U(`path should be a \`path.relative()\`d string, but got "${x}"`, RangeError) : !0 : U("path must not be empty", TypeError) : U(`path must be a string, but got \`${x}\``, TypeError), z = (E)=>f.test(E);
N.isNotRelative = z, N.convert = (E)=>E;
var Q = class {
    constructor({ ignorecase: E = !0, ignoreCase: x = E, allowRelativePaths: U = !1 } = {}){
        m(this, y, !0), this._rules = new L(x), this._strictPathCheck = !U, this._initCache();
    }
    _initCache() {
        this._ignoreCache = Object.create(null), this._testCache = Object.create(null);
    }
    add(E) {
        return this._rules.add(E) && this._initCache(), this;
    }
    addPattern(E) {
        return this.add(E);
    }
    _test(E, x, U, q) {
        const ue = E && N.convert(E);
        return N(ue, E, this._strictPathCheck ? D : S), this._t(ue, x, U, q);
    }
    checkIgnore(E) {
        if (!p.test(E)) return this.test(E);
        const x = E.split(g).filter(Boolean);
        if (x.pop(), x.length) {
            const U = this._t(x.join(g) + g, this._testCache, !0, x);
            if (U.ignored) return U;
        }
        return this._rules.test(E, !1, F);
    }
    _t(E, x, U, q) {
        if (E in x) return x[E];
        if (q || (q = E.split(g).filter(Boolean)), q.pop(), !q.length) return x[E] = this._rules.test(E, U, M);
        const ue = this._t(q.join(g) + g, x, U, q);
        return x[E] = ue.ignored ? ue : this._rules.test(E, U, M);
    }
    ignores(E) {
        return this._test(E, this._ignoreCache, !1).ignored;
    }
    createFilter() {
        return (E)=>!this.ignores(E);
    }
    filter(E) {
        return r(E).filter(this.createFilter());
    }
    test(E) {
        return this._test(E, this._testCache, !0);
    }
}, G = (E)=>new Q(E), Me = (E)=>N(E && N.convert(E), E, S), He = ()=>{
    const E = (U)=>/^\\\\\?\\/.test(U) || /["<>|\u0000-\u001F]+/u.test(U) ? U : U.replace(/\\/g, "/");
    N.convert = E;
    const x = /^[a-z]:\//i;
    N.isNotRelative = (U)=>x.test(U) || z(U);
};
typeof process < "u" && process.platform === "win32" && He(), t.exports = G, G.default = G, t.exports.isPathValid = Me, m(t.exports, Symbol.for("setupWindows"), He);

return t.exports;
}
