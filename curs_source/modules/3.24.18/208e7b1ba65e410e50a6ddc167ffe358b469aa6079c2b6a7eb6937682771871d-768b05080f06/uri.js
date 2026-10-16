import { it } from "./buffer.js";
import { $e } from "./network.js";
import { Ce, De, Yt } from "./path.js";
import { ee, oe } from "./platform.js";
import { h } from "./tslib.es6.js";
function ixe(e, t) {
    if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
    if (e.scheme && !V5.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (e.path) {
        if (e.authority) {
            if (!$5.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (j5.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
    }
}
function axe(e, t) {
    return !e && !t ? "file" : e;
}
function oxe(e, t) {
    switch(e){
        case "https":
        case "http":
        case "file":
            t ? t[0] !== As && (t = As + t) : t = As;
            break;
    }
    return t;
}
function B5(e, t, n) {
    let r, s = -1;
    for(let i = 0; i < e.length; i++){
        const a = e.charCodeAt(i);
        if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47 || n && a === 91 || n && a === 93 || n && a === 58) s !== -1 && (r += encodeURIComponent(e.substring(s, i)), s = -1), r !== void 0 && (r += e.charAt(i));
        else {
            r === void 0 && (r = e.substr(0, i));
            const o = PR[a];
            o !== void 0 ? (s !== -1 && (r += encodeURIComponent(e.substring(s, i)), s = -1), r += o) : s === -1 && (s = i);
        }
    }
    return s !== -1 && (r += encodeURIComponent(e.substring(s))), r !== void 0 ? r : e;
}
function cxe(e) {
    let t;
    for(let n = 0; n < e.length; n++){
        const r = e.charCodeAt(n);
        r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, n)), t += PR[r]) : t !== void 0 && (t += e[n]);
    }
    return t !== void 0 ? t : e;
}
function Yv(e, t) {
    let n;
    return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, ee && (n = n.replace(/\//g, "\\")), n;
}
function AR(e, t) {
    const n = t ? cxe : B5;
    let r = "", { scheme: s, authority: i, path: a, query: o, fragment: l } = e;
    if (s && (r += s, r += ":"), (i || s === "file") && (r += As, r += As), i) {
        let d = i.indexOf("@");
        if (d !== -1) {
            const u = i.substr(0, d);
            i = i.substr(d + 1), d = u.lastIndexOf(":"), d === -1 ? r += n(u, !1, !1) : (r += n(u.substr(0, d), !1, !1), r += ":", r += n(u.substr(d + 1), !1, !0)), r += "@";
        }
        i = i.toLowerCase(), d = i.lastIndexOf(":"), d === -1 ? r += n(i, !1, !0) : (r += n(i.substr(0, d), !1, !0), r += i.substr(d));
    }
    if (a) {
        if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
            const d = a.charCodeAt(1);
            d >= 65 && d <= 90 && (a = `/${String.fromCharCode(d + 32)}:${a.substr(3)}`);
        } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
            const d = a.charCodeAt(0);
            d >= 65 && d <= 90 && (a = `${String.fromCharCode(d + 32)}:${a.substr(2)}`);
        }
        r += n(a, !0, !1);
    }
    return o && (r += "?", r += n(o, !1, !1)), l && (r += "#", r += t ? l : B5(l, !1, !1)), r;
}
function G5(e) {
    try {
        return decodeURIComponent(e);
    } catch  {
        return e.length > 3 ? e.substr(0, 3) + G5(e.substr(3)) : e;
    }
}
function Jv(e) {
    return e.match(NR) ? e.replace(NR, (t)=>G5(t)) : e;
}
var V5, $5, j5, xt, As, H5, x, MR, nc, PR, NR;
export { $5, AR, As, B5, G5, H5, Jv, MR, NR, PR, V5, Yv, axe, cxe, ixe, j5, nc, oxe, x, xt };
var __wakaru_ye_initialized = false;
export function ye() {
if (__wakaru_ye_initialized) return;
__wakaru_ye_initialized = true;
"use strict";
h(), Ce(), oe(), $e(), it(), V5 = /^\w[\w\d+.-]*$/, $5 = /^\//, j5 = /^\/\//, xt = "", As = "/", H5 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, x = class wb {
    static isUri(t) {
        return t instanceof wb ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1;
    }
    constructor(t, n, r, s, i, a = !1){
        typeof t == "object" ? (this.scheme = t.scheme || xt, this.authority = t.authority || xt, this.path = t.path || xt, this.query = t.query || xt, this.fragment = t.fragment || xt) : (this.scheme = axe(t, a), this.authority = n || xt, this.path = oxe(this.scheme, r || xt), this.query = s || xt, this.fragment = i || xt, ixe(this, a));
    }
    get fsPath() {
        return Yv(this, !1);
    }
    with(t) {
        if (!t) return this;
        let { scheme: n, authority: r, path: s, query: i, fragment: a } = t;
        return n === void 0 ? n = this.scheme : n === null && (n = xt), r === void 0 ? r = this.authority : r === null && (r = xt), s === void 0 ? s = this.path : s === null && (s = xt), i === void 0 ? i = this.query : i === null && (i = xt), a === void 0 ? a = this.fragment : a === null && (a = xt), n === this.scheme && r === this.authority && s === this.path && i === this.query && a === this.fragment ? this : new nc(n, r, s, i, a);
    }
    static parse(t, n = !1) {
        const r = H5.exec(t);
        return r ? new nc(r[2] || xt, Jv(r[4] || xt), Jv(r[5] || xt), Jv(r[7] || xt), Jv(r[9] || xt), n) : new nc(xt, xt, xt, xt, xt);
    }
    static file(t) {
        let n = xt;
        if (ee && (t = t.replace(/\\/g, As)), t[0] === As && t[1] === As) {
            const r = t.indexOf(As, 2);
            r === -1 ? (n = t.substring(2), t = As) : (n = t.substring(2, r), t = t.substring(r) || As);
        }
        return new nc("file", n, t, xt, xt);
    }
    static from(t, n) {
        return new nc(t.scheme, t.authority, t.path, t.query, t.fragment, n);
    }
    static joinPath(t, ...n) {
        if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
        let r;
        return ee && t.scheme === "file" ? r = wb.file(Yt.join(Yv(t, !0), ...n)).path : r = De.join(t.path, ...n), t.with({
            path: r
        });
    }
    toString(t = !1) {
        return AR(this, t);
    }
    toJSON() {
        return this;
    }
    static revive(t) {
        if (t) {
            if (t instanceof wb) return t;
            {
                const n = new nc(t);
                return n._formatted = t.external ?? null, n._fsPath = t._sep === MR ? t.fsPath ?? null : null, n;
            }
        } else return t;
    }
    [Symbol.for("debug.description")]() {
        return `URI(${this.toString()})`;
    }
}, MR = ee ? 1 : void 0, nc = class extends x {
    constructor(){
        super(...arguments), this._formatted = null, this._fsPath = null;
    }
    get fsPath() {
        return this._fsPath || (this._fsPath = Yv(this, !1)), this._fsPath;
    }
    toString(e = !1) {
        return e ? AR(this, !0) : (this._formatted || (this._formatted = AR(this, !1)), this._formatted);
    }
    toJSON() {
        const e = {
            $mid: 1
        };
        return this._fsPath && (e.fsPath = this._fsPath, e._sep = MR), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }
}, PR = {
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
}, NR = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

}
