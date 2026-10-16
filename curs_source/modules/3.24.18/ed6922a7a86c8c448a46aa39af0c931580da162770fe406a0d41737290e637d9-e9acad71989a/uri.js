import { Fo, Oo, Vug, dht, jn, jug, qug, uzr, wmi } from "./HVr.js";
import { li } from "./network.js";
import { Cw, Eu, ba } from "./path_2.js";
import { x } from "./tslib.es6.js";
var TIc, EIc, xIc, pM, bge, IIc, Ee, dzr, hht, hzr, pzr;
export { EIc, Ee, IIc, TIc, bge, dzr, hht, hzr, pM, pzr, xIc };
var __wakaru_Qt_initialized = false;
export function Qt() {
if (__wakaru_Qt_initialized) return;
__wakaru_Qt_initialized = true;
"use strict";
x(), ba(), jn(), li(), Fo(), TIc = /^\w[\w\d+.-]*$/, EIc = /^\//, xIc = /^\/\//, pM = "", bge = "/", IIc = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, Ee = class Q0r {
    static isUri(t) {
        return t instanceof Q0r ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1;
    }
    constructor(t, n, i, r, s, o = !1){
        typeof t == "object" ? (this.scheme = t.scheme || pM, this.authority = t.authority || pM, this.path = t.path || pM, this.query = t.query || pM, this.fragment = t.fragment || pM) : (this.scheme = jug(t, o), this.authority = n || pM, this.path = qug(this.scheme, i || pM), this.query = r || pM, this.fragment = s || pM, Vug(this, o));
    }
    get fsPath() {
        return dht(this, !1);
    }
    with(t) {
        if (!t) return this;
        let { scheme: n, authority: i, path: r, query: s, fragment: o } = t;
        return n === void 0 ? n = this.scheme : n === null && (n = pM), i === void 0 ? i = this.authority : i === null && (i = pM), r === void 0 ? r = this.path : r === null && (r = pM), s === void 0 ? s = this.query : s === null && (s = pM), o === void 0 ? o = this.fragment : o === null && (o = pM), n === this.scheme && i === this.authority && r === this.path && s === this.query && o === this.fragment ? this : new hht(n, i, r, s, o);
    }
    static parse(t, n = !1) {
        const i = IIc.exec(t);
        return i ? new hht(i[2] || pM, wmi(i[4] || pM), wmi(i[5] || pM), wmi(i[7] || pM), wmi(i[9] || pM), n) : new hht(pM, pM, pM, pM, pM);
    }
    static file(t) {
        let n = pM;
        if (Oo && (t = t.replace(/\\/g, bge)), t[0] === bge && t[1] === bge) {
            const i = t.indexOf(bge, 2);
            i === -1 ? (n = t.substring(2), t = bge) : (n = t.substring(2, i), t = t.substring(i) || bge);
        }
        return new hht("file", n, t, pM, pM);
    }
    static from(t, n) {
        return new hht(t.scheme, t.authority, t.path, t.query, t.fragment, n);
    }
    static joinPath(t, ...n) {
        if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
        let i;
        return Oo && t.scheme === "file" ? i = Q0r.file(Cw.join(dht(t, !0), ...n)).path : i = Eu.join(t.path, ...n), t.with({
            path: i
        });
    }
    toString(t = !1) {
        return uzr(this, t);
    }
    toJSON() {
        return this;
    }
    static revive(t) {
        if (t) {
            if (t instanceof Q0r) return t;
            {
                const n = new hht(t);
                return n._formatted = t.external ?? null, n._fsPath = t._sep === dzr ? t.fsPath ?? null : null, n;
            }
        } else return t;
    }
    [Symbol.for("debug.description")]() {
        return `URI(${this.toString()})`;
    }
}, dzr = Oo ? 1 : void 0, hht = class extends Ee {
    constructor(){
        super(...arguments), this._formatted = null, this._fsPath = null;
    }
    get fsPath() {
        return this._fsPath || (this._fsPath = dht(this, !1)), this._fsPath;
    }
    toString(e = !1) {
        return e ? uzr(this, !0) : (this._formatted || (this._formatted = uzr(this, !1)), this._formatted);
    }
    toJSON() {
        const e = {
            $mid: 1
        };
        return this._fsPath && (e.fsPath = this._fsPath, e._sep = dzr), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }
}, hzr = {
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
}, pzr = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

}
