import { Di, Eby, Ga, Iby, KCo, Tby, kmr, u6t, xa } from "./Iwo.js";
import { Ki } from "./network.js";
import { EC, Ul, lh } from "./path_2.js";
import { E } from "./tslib.es6.js";
var rZu, sZu, oZu, oO, nAe, aZu, rt, YCo, d6t, XCo, ZCo;
export { XCo, YCo, ZCo, aZu, d6t, nAe, oO, oZu, rZu, rt, sZu };
var __wakaru_fn_initialized = false;
export function fn() {
if (__wakaru_fn_initialized) return;
__wakaru_fn_initialized = true;
"use strict";
E(), Ul(), Di(), Ki(), Ga(), rZu = /^\w[\w\d+.-]*$/, sZu = /^\//, oZu = /^\/\//, oO = "", nAe = "/", aZu = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, rt = class UYs {
    static isUri(e) {
        return e instanceof UYs ? !0 : e ? typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function" : !1;
    }
    constructor(e, n, i, r, s, o = !1){
        typeof e == "object" ? (this.scheme = e.scheme || oO, this.authority = e.authority || oO, this.path = e.path || oO, this.query = e.query || oO, this.fragment = e.fragment || oO) : (this.scheme = Eby(e, o), this.authority = n || oO, this.path = Iby(this.scheme, i || oO), this.query = r || oO, this.fragment = s || oO, Tby(this, o));
    }
    get fsPath() {
        return u6t(this, !1);
    }
    with(e) {
        if (!e) return this;
        let { scheme: n, authority: i, path: r, query: s, fragment: o } = e;
        return n === void 0 ? n = this.scheme : n === null && (n = oO), i === void 0 ? i = this.authority : i === null && (i = oO), r === void 0 ? r = this.path : r === null && (r = oO), s === void 0 ? s = this.query : s === null && (s = oO), o === void 0 ? o = this.fragment : o === null && (o = oO), n === this.scheme && i === this.authority && r === this.path && s === this.query && o === this.fragment ? this : new d6t(n, i, r, s, o);
    }
    static parse(e, n = !1) {
        const i = aZu.exec(e);
        return i ? new d6t(i[2] || oO, kmr(i[4] || oO), kmr(i[5] || oO), kmr(i[7] || oO), kmr(i[9] || oO), n) : new d6t(oO, oO, oO, oO, oO);
    }
    static file(e) {
        let n = oO;
        if (xa && (e = e.replace(/\\/g, nAe)), e[0] === nAe && e[1] === nAe) {
            const i = e.indexOf(nAe, 2);
            i === -1 ? (n = e.substring(2), e = nAe) : (n = e.substring(2, i), e = e.substring(i) || nAe);
        }
        return new d6t("file", n, e, oO, oO);
    }
    static from(e, n) {
        return new d6t(e.scheme, e.authority, e.path, e.query, e.fragment, n);
    }
    static joinPath(e, ...n) {
        if (!e.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
        let i;
        return xa && e.scheme === "file" ? i = UYs.file(EC.join(u6t(e, !0), ...n)).path : i = lh.join(e.path, ...n), e.with({
            path: i
        });
    }
    toString(e = !1) {
        return KCo(this, e);
    }
    toJSON() {
        return this;
    }
    static revive(e) {
        if (e) {
            if (e instanceof UYs) return e;
            {
                const n = new d6t(e);
                return n._formatted = e.external ?? null, n._fsPath = e._sep === YCo ? e.fsPath ?? null : null, n;
            }
        } else return e;
    }
    [Symbol.for("debug.description")]() {
        return `URI(${this.toString()})`;
    }
}, YCo = xa ? 1 : void 0, d6t = class extends rt {
    constructor(){
        super(...arguments), this._formatted = null, this._fsPath = null;
    }
    get fsPath() {
        return this._fsPath || (this._fsPath = u6t(this, !1)), this._fsPath;
    }
    toString(t = !1) {
        return t ? KCo(this, !0) : (this._formatted || (this._formatted = KCo(this, !1)), this._formatted);
    }
    toJSON() {
        const t = {
            $mid: 1
        };
        return this._fsPath && (t.fsPath = this._fsPath, t._sep = YCo), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
    }
}, XCo = {
    58: "%3A",
    47: "%2F",
    63: "%3F",
    35: "%23",
    91: "%5B",
    93: "%5D",
    64: "%40",
    33: "%21",
    36: "%24",
    38: "%26",
    39: "%27",
    40: "%28",
    41: "%29",
    42: "%2A",
    43: "%2B",
    44: "%2C",
    59: "%3B",
    61: "%3D",
    32: "%20"
}, ZCo = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

}
