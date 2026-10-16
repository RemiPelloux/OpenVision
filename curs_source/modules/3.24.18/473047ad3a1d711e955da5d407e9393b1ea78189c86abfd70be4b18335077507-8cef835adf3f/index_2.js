import { T } from "./tslib.es6.js";
var __wakaru_GTe_cache;
export function GTe() {
if (__wakaru_GTe_cache) return __wakaru_GTe_cache.exports;
var e = {};
var n = { exports: e };
__wakaru_GTe_cache = n;
T();
function a(H) {
    return Array.isArray(H) ? H : [
        H
    ];
}
var r = void 0, s = "", o = " ", i = "\\", l = /^\s+$/, c = /(?:[^\\]|^)\\$/, d = /^\\!/, u = /^\\#/, p = /\r?\n/g, _ = /^\.{0,2}\/|^\.{1,2}$/, g = /\/$/, k = "/", R = "node-ignore";
typeof Symbol < "u" && (R = Symbol.for("node-ignore"));
var E = R, S = (H, oe, Se)=>(Object.defineProperty(H, oe, {
        value: Se
    }), Se), C = /([0-z])-([0-z])/g, A = ()=>!1, M = (H)=>H.replace(C, (oe, Se, Le)=>Se.charCodeAt(0) <= Le.charCodeAt(0) ? oe : s), N = (H)=>{
    const { length: oe } = H;
    return H.slice(0, oe - oe % 2);
}, U = [
    [
        /^\uFEFF/,
        ()=>s
    ],
    [
        /((?:\\\\)*?)(\\?\s+)$/,
        (H, oe, Se)=>oe + (Se.indexOf("\\") === 0 ? o : s)
    ],
    [
        /(\\+?)\s/g,
        (H, oe)=>{
            const { length: Se } = oe;
            return oe.slice(0, Se - Se % 2) + o;
        }
    ],
    [
        /[\\$.|*+(){^]/g,
        (H)=>`\\${H}`
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
        (H, oe, Se)=>oe + 6 < Se.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
    ],
    [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (H, oe, Se)=>{
            const Le = Se.replace(/\\\*/g, "[^\\/]*");
            return oe + Le;
        }
    ],
    [
        /\\\\\\(?=[$.|*+(){^])/g,
        ()=>i
    ],
    [
        /\\\\/g,
        ()=>i
    ],
    [
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (H, oe, Se, Le, we)=>oe === i ? `\\[${Se}${N(Le)}${we}` : we === "]" && Le.length % 2 === 0 ? `[${M(Se)}${Le}]` : "[]"
    ],
    [
        /(?:[^*])$/,
        (H)=>/\/$/.test(H) ? `${H}$` : `${H}(?=$|\\/$)`
    ]
], F = /(^|\\\/)?\\\*$/, W = "regex", $ = "checkRegex", q = "_", ne = {
    [W] (H, oe) {
        return `${oe ? `${oe}[^/]+` : "[^/]*"}(?=$|\\/$)`;
    },
    [$] (H, oe) {
        return `${oe ? `${oe}[^/]*` : "[^/]*"}(?=$|\\/$)`;
    }
}, re = (H)=>U.reduce((oe, [Se, Le])=>oe.replace(Se, Le.bind(H)), H), ce = (H)=>typeof H == "string", ie = (H)=>H && ce(H) && !l.test(H) && !c.test(H) && H.indexOf("#") !== 0, ee = (H)=>H.split(p).filter(Boolean), Z = class {
    constructor(H, oe, Se, Le, we, Ca){
        this.pattern = H, this.mark = oe, this.negative = we, S(this, "body", Se), S(this, "ignoreCase", Le), S(this, "regexPrefix", Ca);
    }
    get regex() {
        const H = q + W;
        return this[H] ? this[H] : this._make(W, H);
    }
    get checkRegex() {
        const H = q + $;
        return this[H] ? this[H] : this._make($, H);
    }
    _make(H, oe) {
        const Se = this.regexPrefix.replace(F, ne[H]), Le = this.ignoreCase ? new RegExp(Se, "i") : new RegExp(Se);
        return S(this, oe, Le);
    }
}, me = ({ pattern: H, mark: oe }, Se)=>{
    let Le = !1, we = H;
    we.indexOf("!") === 0 && (Le = !0, we = we.substr(1)), we = we.replace(d, "!").replace(u, "#");
    const Ca = re(we);
    return new Z(H, oe, we, Se, Le, Ca);
}, _e = class {
    constructor(H){
        this._ignoreCase = H, this._rules = [];
    }
    _add(H) {
        if (H && H[E]) {
            this._rules = this._rules.concat(H._rules._rules), this._added = !0;
            return;
        }
        if (ce(H) && (H = {
            pattern: H
        }), ie(H.pattern)) {
            const oe = me(H, this._ignoreCase);
            this._added = !0, this._rules.push(oe);
        }
    }
    add(H) {
        return this._added = !1, a(ce(H) ? ee(H) : H).forEach(this._add, this), this._added;
    }
    test(H, oe, Se) {
        let Le = !1, we = !1, Ca;
        this._rules.forEach((zn)=>{
            const { negative: ta } = zn;
            we === ta && Le !== we || ta && !Le && !we && !oe || !zn[Se].test(H) || (Le = !ta, we = ta, Ca = ta ? r : zn);
        });
        const Jn = {
            ignored: Le,
            unignored: we
        };
        return Ca && (Jn.rule = Ca), Jn;
    }
}, Re = (H, oe)=>{
    throw new oe(H);
}, ye = (H, oe, Se)=>ce(H) ? H ? ye.isNotRelative(H) ? Se(`path should be a \`path.relative()\`d string, but got "${oe}"`, RangeError) : !0 : Se("path must not be empty", TypeError) : Se(`path must be a string, but got \`${oe}\``, TypeError), O = (H)=>_.test(H);
ye.isNotRelative = O, ye.convert = (H)=>H;
var G = class {
    constructor({ ignorecase: H = !0, ignoreCase: oe = H, allowRelativePaths: Se = !1 } = {}){
        S(this, E, !0), this._rules = new _e(oe), this._strictPathCheck = !Se, this._initCache();
    }
    _initCache() {
        this._ignoreCache = Object.create(null), this._testCache = Object.create(null);
    }
    add(H) {
        return this._rules.add(H) && this._initCache(), this;
    }
    addPattern(H) {
        return this.add(H);
    }
    _test(H, oe, Se, Le) {
        const we = H && ye.convert(H);
        return ye(we, H, this._strictPathCheck ? Re : A), this._t(we, oe, Se, Le);
    }
    checkIgnore(H) {
        if (!g.test(H)) return this.test(H);
        const oe = H.split(k).filter(Boolean);
        if (oe.pop(), oe.length) {
            const Se = this._t(oe.join(k) + k, this._testCache, !0, oe);
            if (Se.ignored) return Se;
        }
        return this._rules.test(H, !1, $);
    }
    _t(H, oe, Se, Le) {
        if (H in oe) return oe[H];
        if (Le || (Le = H.split(k).filter(Boolean)), Le.pop(), !Le.length) return oe[H] = this._rules.test(H, Se, W);
        const we = this._t(Le.join(k) + k, oe, Se, Le);
        return oe[H] = we.ignored ? we : this._rules.test(H, Se, W);
    }
    ignores(H) {
        return this._test(H, this._ignoreCache, !1).ignored;
    }
    createFilter() {
        return (H)=>!this.ignores(H);
    }
    filter(H) {
        return a(H).filter(this.createFilter());
    }
    test(H) {
        return this._test(H, this._testCache, !0);
    }
}, x = (H)=>new G(H), X = (H)=>ye(H && ye.convert(H), H, A), be = ()=>{
    const H = (Se)=>/^\\\\\?\\/.test(Se) || /["<>|\u0000-\u001F]+/u.test(Se) ? Se : Se.replace(/\\/g, "/");
    ye.convert = H;
    const oe = /^[a-z]:\//i;
    ye.isNotRelative = (Se)=>oe.test(Se) || O(Se);
};
typeof process < "u" && process.platform === "win32" && be(), n.exports = x, x.default = x, n.exports.isPathValid = X, S(n.exports, Symbol.for("setupWindows"), be);

return n.exports;
}
