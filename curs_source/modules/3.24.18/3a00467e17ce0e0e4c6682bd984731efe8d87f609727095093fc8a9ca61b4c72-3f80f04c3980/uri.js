import { $a } from "./buffer.js";
import { tr } from "./network.js";
import { B, F, le } from "./path.js";
import { V, X } from "./platform.js";
import { w } from "./tslib.es6.js";
function ja(e, t) {
    if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
    if (e.scheme && !Pi.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (e.path) {
        if (e.authority) {
            if (!Di.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (Ti.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
    }
}
function Wa(e, t) {
    return !e && !t ? "file" : e;
}
function Ua(e, t) {
    switch(e){
        case "https":
        case "http":
        case "file":
            t ? t[0] !== ce && (t = ce + t) : t = ce;
            break;
    }
    return t;
}
function Ai(e, t, r) {
    let s, i = -1;
    for(let n = 0; n < e.length; n++){
        const a = e.charCodeAt(n);
        if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47 || r && a === 91 || r && a === 93 || r && a === 58) i !== -1 && (s += encodeURIComponent(e.substring(i, n)), i = -1), s !== void 0 && (s += e.charAt(n));
        else {
            s === void 0 && (s = e.substr(0, n));
            const o = s1[a];
            o !== void 0 ? (i !== -1 && (s += encodeURIComponent(e.substring(i, n)), i = -1), s += o) : i === -1 && (i = n);
        }
    }
    return i !== -1 && (s += encodeURIComponent(e.substring(i))), s !== void 0 ? s : e;
}
function qa(e) {
    let t;
    for(let r = 0; r < e.length; r++){
        const s = e.charCodeAt(r);
        s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, r)), t += s1[s]) : t !== void 0 && (t += e[r]);
    }
    return t !== void 0 ? t : e;
}
function Xt(e, t) {
    let r;
    return e.authority && e.path.length > 1 && e.scheme === "file" ? r = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? r = e.path.substr(1) : r = e.path[1].toLowerCase() + e.path.substr(2) : r = e.path, V && (r = r.replace(/\//g, "\\")), r;
}
function t1(e, t) {
    const r = t ? qa : Ai;
    let s = "", { scheme: i, authority: n, path: a, query: o, fragment: l } = e;
    if (i && (s += i, s += ":"), (n || i === "file") && (s += ce, s += ce), n) {
        let c = n.indexOf("@");
        if (c !== -1) {
            const h = n.substr(0, c);
            n = n.substr(c + 1), c = h.lastIndexOf(":"), c === -1 ? s += r(h, !1, !1) : (s += r(h.substr(0, c), !1, !1), s += ":", s += r(h.substr(c + 1), !1, !0)), s += "@";
        }
        n = n.toLowerCase(), c = n.lastIndexOf(":"), c === -1 ? s += r(n, !1, !0) : (s += r(n.substr(0, c), !1, !0), s += n.substr(c));
    }
    if (a) {
        if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
            const c = a.charCodeAt(1);
            c >= 65 && c <= 90 && (a = `/${String.fromCharCode(c + 32)}:${a.substr(3)}`);
        } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
            const c = a.charCodeAt(0);
            c >= 65 && c <= 90 && (a = `${String.fromCharCode(c + 32)}:${a.substr(2)}`);
        }
        s += r(a, !0, !1);
    }
    return o && (s += "?", s += r(o, !1, !1)), l && (s += "#", s += t ? l : Ai(l, !1, !1)), s;
}
function ki(e) {
    try {
        return decodeURIComponent(e);
    } catch  {
        return e.length > 3 ? e.substr(0, 3) + ki(e.substr(3)) : e;
    }
}
function er(e) {
    return e.match(i1) ? e.replace(i1, (t)=>ki(t)) : e;
}
var Pi, Di, Ti, W, ce, Oi, Y, r1, Qe, s1, i1;
export { Ai, Di, Oi, Pi, Qe, Ti, Ua, W, Wa, Xt, Y, ce, er, i1, ja, ki, qa, r1, s1, t1 };
var __wakaru_Ye_initialized = false;
export function Ye() {
if (__wakaru_Ye_initialized) return;
__wakaru_Ye_initialized = true;
"use strict";
w(), le(), X(), tr(), $a(), Pi = /^\w[\w\d+.-]*$/, Di = /^\//, Ti = /^\/\//, W = "", ce = "/", Oi = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, Y = class gr {
    static isUri(t) {
        return t instanceof gr ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1;
    }
    constructor(t, r, s, i, n, a = !1){
        typeof t == "object" ? (this.scheme = t.scheme || W, this.authority = t.authority || W, this.path = t.path || W, this.query = t.query || W, this.fragment = t.fragment || W) : (this.scheme = Wa(t, a), this.authority = r || W, this.path = Ua(this.scheme, s || W), this.query = i || W, this.fragment = n || W, ja(this, a));
    }
    get fsPath() {
        return Xt(this, !1);
    }
    with(t) {
        if (!t) return this;
        let { scheme: r, authority: s, path: i, query: n, fragment: a } = t;
        return r === void 0 ? r = this.scheme : r === null && (r = W), s === void 0 ? s = this.authority : s === null && (s = W), i === void 0 ? i = this.path : i === null && (i = W), n === void 0 ? n = this.query : n === null && (n = W), a === void 0 ? a = this.fragment : a === null && (a = W), r === this.scheme && s === this.authority && i === this.path && n === this.query && a === this.fragment ? this : new Qe(r, s, i, n, a);
    }
    static parse(t, r = !1) {
        const s = Oi.exec(t);
        return s ? new Qe(s[2] || W, er(s[4] || W), er(s[5] || W), er(s[7] || W), er(s[9] || W), r) : new Qe(W, W, W, W, W);
    }
    static file(t) {
        let r = W;
        if (V && (t = t.replace(/\\/g, ce)), t[0] === ce && t[1] === ce) {
            const s = t.indexOf(ce, 2);
            s === -1 ? (r = t.substring(2), t = ce) : (r = t.substring(2, s), t = t.substring(s) || ce);
        }
        return new Qe("file", r, t, W, W);
    }
    static from(t, r) {
        return new Qe(t.scheme, t.authority, t.path, t.query, t.fragment, r);
    }
    static joinPath(t, ...r) {
        if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
        let s;
        return V && t.scheme === "file" ? s = gr.file(B.join(Xt(t, !0), ...r)).path : s = F.join(t.path, ...r), t.with({
            path: s
        });
    }
    toString(t = !1) {
        return t1(this, t);
    }
    toJSON() {
        return this;
    }
    static revive(t) {
        if (t) {
            if (t instanceof gr) return t;
            {
                const r = new Qe(t);
                return r._formatted = t.external ?? null, r._fsPath = t._sep === r1 ? t.fsPath ?? null : null, r;
            }
        } else return t;
    }
    [Symbol.for("debug.description")]() {
        return `URI(${this.toString()})`;
    }
}, r1 = V ? 1 : void 0, Qe = class extends Y {
    constructor(){
        super(...arguments), this._formatted = null, this._fsPath = null;
    }
    get fsPath() {
        return this._fsPath || (this._fsPath = Xt(this, !1)), this._fsPath;
    }
    toString(e = !1) {
        return e ? t1(this, !0) : (this._formatted || (this._formatted = t1(this, !1)), this._formatted);
    }
    toJSON() {
        const e = {
            $mid: 1
        };
        return this._fsPath && (e.fsPath = this._fsPath, e._sep = r1), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }
}, s1 = {
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
}, i1 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

}
