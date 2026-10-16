import { UZd } from "./A3u.js";
import { Oo, jn } from "./HVr.js";
import { ag, oc } from "./map.js";
import { x } from "./tslib.es6.js";
var bqi, qpo, yqi, $Zd, HZd, WZd, GZd, VZd, jZd, Sqi, zpo, Kpo, Ypo, qZd, zZd, Xpo, KZd, YZd, XZd, Zpo, ZZd, kqi, QZd, JZd, eQd, tQd, nQd, CPe, Qpo, iQd, P2n, rQd, TPe;
export { $Zd, CPe, GZd, HZd, JZd, KZd, Kpo, P2n, QZd, Qpo, Sqi, TPe, VZd, WZd, XZd, Xpo, YZd, Ypo, ZZd, Zpo, bqi, eQd, iQd, jZd, kqi, nQd, qZd, qpo, rQd, tQd, yqi, zZd, zpo };
var __wakaru_sQd_initialized = false;
export function sQd() {
if (__wakaru_sQd_initialized) return;
__wakaru_sQd_initialized = true;
"use strict";
if (x(), oc(), jn(), bqi = "", qpo = " ", yqi = "\\", $Zd = /^\s+$/, HZd = /(?:[^\\]|^)\\$/, WZd = /^\\!/, GZd = /^\\#/, VZd = /\r?\n/g, jZd = /^\.*\/|^\.+$/, Sqi = "/", zpo = 5e4, Kpo = "node-ignore", typeof Symbol < "u" && (Kpo = Symbol.for("node-ignore")), Ypo = Kpo, qZd = (e, t, n)=>Object.defineProperty(e, t, {
        value: n
    }), zZd = /([0-z])-([0-z])/g, Xpo = ()=>!1, KZd = (e)=>e.replace(zZd, (t, n, i)=>n.charCodeAt(0) <= i.charCodeAt(0) ? t : bqi), YZd = (e)=>{
    const { length: t } = e;
    return e.slice(0, t - t % 2);
}, XZd = [
    [
        /^\uFEFF/,
        ()=>bqi
    ],
    [
        /\\?\s+$/,
        (e)=>e.indexOf("\\") === 0 ? qpo : bqi
    ],
    [
        /\\\s/g,
        ()=>qpo
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
        (e, t, n)=>t + 6 < n.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
    ],
    [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (e, t, n)=>{
            const i = n.replace(/\\\*/g, "[^\\/]*");
            return t + i;
        }
    ],
    [
        /\\\\\\(?=[$.|*+(){^])/g,
        ()=>yqi
    ],
    [
        /\\\\/g,
        ()=>yqi
    ],
    [
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (e, t, n, i, r)=>t === yqi ? `\\[${n}${YZd(i)}${r}` : r === "]" && i.length % 2 === 0 ? `[${KZd(n)}${i}]` : "[]"
    ],
    [
        /(?:[^*])$/,
        (e)=>/\/$/.test(e) ? `${e}$` : `${e}(?=$|\\/$)`
    ],
    [
        /(\^|\\\/)?\\\*$/,
        (e, t)=>`${t ? `${t}[^/]+` : "[^/]*"}(?=$|\\/$)`
    ]
], Zpo = Object.create(null), ZZd = (e, t)=>{
    let n = Zpo[e];
    return n || (n = XZd.reduce((i, r)=>i.replace(r[0], r[1].bind(e)), e), Zpo[e] = n), t ? new RegExp(n, "i") : new RegExp(n);
}, kqi = (e)=>typeof e == "string", QZd = (e)=>e && kqi(e) && !$Zd.test(e) && !HZd.test(e) && e.indexOf("#") !== 0, JZd = (e)=>e.split(VZd), eQd = class {
    constructor(e, t, n, i){
        this.origin = e, this.pattern = t, this.negative = n, this.regex = i;
    }
}, tQd = (e, t)=>{
    const n = e;
    let i = !1;
    e.indexOf("!") === 0 && (i = !0, e = e.substr(1)), e = e.replace(WZd, "!").replace(GZd, "#");
    const r = ZZd(e, t);
    return new eQd(n, e, i, r);
}, nQd = (e, t)=>{
    throw new t(e);
}, CPe = (e, t, n)=>kqi(e) ? e ? CPe.isNotRelative(e) ? n(`path should be a \`path.relative()\`d string, but got "${t}"`, RangeError) : !0 : n("path must not be empty", TypeError) : n(`path must be a string, but got \`${t}\``, TypeError), Qpo = (e)=>jZd.test(e), CPe.isNotRelative = Qpo, CPe.convert = (e)=>e, iQd = class {
    constructor({ ignorecase: e = !0, ignoreCase: t = e, allowRelativePaths: n = !1 } = {}){
        qZd(this, Ypo, !0), this._rules = [], this._ignoreCase = t, this._allowRelativePaths = n, this._initCache();
    }
    _initCache() {
        this._ignoreCache = new ag(zpo), this._testCache = new ag(zpo);
    }
    _addPattern(e) {
        if (e && e[Ypo]) {
            this._rules = this._rules.concat(e._rules), this._added = !0;
            return;
        }
        if (QZd(e)) {
            const t = tQd(e, this._ignoreCase);
            this._added = !0, this._rules.push(t);
        }
    }
    add(e) {
        return this._added = !1, UZd(kqi(e) ? JZd(e) : e).forEach(this._addPattern, this), this._added && this._initCache(), this;
    }
    addPattern(e) {
        return this.add(e);
    }
    _testOne(e, t) {
        let n = !1, i = !1;
        return this._rules.forEach((r)=>{
            const { negative: s } = r;
            if (i === s && n !== i || s && !n && !i && !t) return;
            r.regex.test(e) && (n = !s, i = s);
        }), {
            ignored: n,
            unignored: i
        };
    }
    _test(e, t, n, i) {
        const r = e && CPe.convert(e);
        return CPe(r, e, this._allowRelativePaths ? Xpo : nQd), this._t(r, t, n, i);
    }
    _t(e, t, n, i) {
        const r = t.get(e);
        if (r !== void 0) return r;
        if (i || (i = e.split(Sqi)), i.pop(), !i.length) {
            const o = this._testOne(e, n);
            return t.set(e, o), o;
        }
        const s = this._t(i.join(Sqi) + Sqi, t, n, i);
        if (s.ignored) return t.set(e, s), s;
        {
            const o = this._testOne(e, n);
            return t.set(e, o), o;
        }
    }
    ignores(e) {
        return this._test(e, this._ignoreCache, !1).ignored;
    }
    createFilter() {
        return (e)=>!this.ignores(e);
    }
    filter(e) {
        return UZd(e).filter(this.createFilter());
    }
    test(e) {
        return this._test(e, this._testCache, !0);
    }
}, P2n = (e)=>new iQd(e), rQd = (e)=>CPe(e && CPe.convert(e), e, Xpo), P2n.isPathValid = rQd, P2n.default = P2n, TPe = P2n, Oo) {
    const e = (n)=>/^\\\\\?\\/.test(n) || /["<>|\u0000-\u001F]+/u.test(n) ? n : n.replace(/\\/g, "/");
    CPe.convert = e;
    const t = /^[a-z]:\//i;
    CPe.isNotRelative = (n)=>t.test(n) || Qpo(n);
}

}
