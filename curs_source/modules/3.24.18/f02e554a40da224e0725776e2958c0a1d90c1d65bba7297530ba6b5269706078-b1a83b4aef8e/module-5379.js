"use strict";
var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(e, r);
    s && !("get" in s ? !e.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return e[r];
        }
    }), Object.defineProperty(t, n, s);
} : function(t, e, r, n) {
    void 0 === n && (n = r), t[n] = e[r];
}), s = this && this.__setModuleDefault || (Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    });
} : function(t, e) {
    t.default = e;
}), i = this && this.__importStar || function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for(var r in t)"default" !== r && Object.prototype.hasOwnProperty.call(t, r) && n(e, t, r);
    return s(e, t), e;
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Cookie = void 0;
const o = require("./module-6098.js"), a = i(require("./module-2715.js")), u = require("./module-5779.js"), c = require("./module-2658.js"), l = require("./module-5606.js"), m = require("./module-3779.js"), d = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, f = /[\x20-\x3A\x3C-\x7E]+/, p = /[\x00-\x1F]/, h = [
    "\n",
    "\r",
    "\0"
];
function g(t, e) {
    let r, n, s = (t = function(t) {
        if (a.isEmptyString(t)) return t;
        for(let e = 0; e < h.length; e++){
            const r = h[e], n = r ? t.indexOf(r) : -1;
            -1 !== n && (t = t.slice(0, n));
        }
        return t;
    }(t)).indexOf("=");
    if (e) 0 === s && (s = (t = t.substring(1)).indexOf("="));
    else if (s <= 0) return;
    if (s <= 0 ? (r = "", n = t.trim()) : (r = t.slice(0, s).trim(), n = t.slice(s + 1).trim()), p.test(r) || p.test(n)) return;
    const i = new y;
    return i.key = r, i.value = n, i;
}
function A(t) {
    if (!t || a.isEmptyString(t)) return;
    let e;
    if ("string" == typeof t) try {
        e = JSON.parse(t);
    } catch  {
        return;
    }
    else e = t;
    const r = new y;
    return y.serializableProperties.forEach((t)=>{
        if (e && "object" == typeof e && (0, u.inOperator)(t, e)) {
            const n = e[t];
            if (void 0 === n) return;
            if ((0, u.inOperator)(t, _) && n === _[t]) return;
            switch(t){
                case "key":
                case "value":
                case "sameSite":
                    "string" == typeof n && (r[t] = n);
                    break;
                case "expires":
                case "creation":
                case "lastAccessed":
                    "number" == typeof n || "string" == typeof n || n instanceof Date ? r[t] = "Infinity" == e[t] ? "Infinity" : new Date(n) : null === n && (r[t] = null);
                    break;
                case "maxAge":
                    "number" != typeof n && "Infinity" !== n && "-Infinity" !== n || (r[t] = n);
                    break;
                case "domain":
                case "path":
                    "string" != typeof n && null !== n || (r[t] = n);
                    break;
                case "secure":
                case "httpOnly":
                    "boolean" == typeof n && (r[t] = n);
                    break;
                case "extensions":
                    Array.isArray(n) && n.every((t)=>"string" == typeof t) && (r[t] = n);
                    break;
                case "hostOnly":
                case "pathIsDefault":
                    "boolean" != typeof n && null !== n || (r[t] = n);
            }
        }
    }), r;
}
const _ = {
    key: "",
    value: "",
    expires: "Infinity",
    maxAge: null,
    domain: null,
    path: null,
    secure: !1,
    httpOnly: !1,
    extensions: null,
    hostOnly: null,
    pathIsDefault: null,
    creation: null,
    lastAccessed: null,
    sameSite: void 0
};
class y {
    constructor(t = {}){
        this.key = t.key ?? _.key, this.value = t.value ?? _.value, this.expires = t.expires ?? _.expires, this.maxAge = t.maxAge ?? _.maxAge, this.domain = t.domain ?? _.domain, this.path = t.path ?? _.path, this.secure = t.secure ?? _.secure, this.httpOnly = t.httpOnly ?? _.httpOnly, this.extensions = t.extensions ?? _.extensions, this.creation = t.creation ?? _.creation, this.hostOnly = t.hostOnly ?? _.hostOnly, this.pathIsDefault = t.pathIsDefault ?? _.pathIsDefault, this.lastAccessed = t.lastAccessed ?? _.lastAccessed, this.sameSite = t.sameSite ?? _.sameSite, this.creation = t.creation ?? new Date, Object.defineProperty(this, "creationIndex", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: ++y.cookiesCreated
        }), this.creationIndex = y.cookiesCreated;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        const t = Date.now(), e = null != this.hostOnly ? this.hostOnly.toString() : "?", r = this.creation && "Infinity" !== this.creation ? `${String(t - this.creation.getTime())}ms` : "?", n = this.lastAccessed && "Infinity" !== this.lastAccessed ? `${String(t - this.lastAccessed.getTime())}ms` : "?";
        return `Cookie="${this.toString()}; hostOnly=${e}; aAge=${n}; cAge=${r}"`;
    }
    toJSON() {
        const t = {};
        for (const e of y.serializableProperties){
            const r = this[e];
            if (r !== _[e]) switch(e){
                case "key":
                case "value":
                case "sameSite":
                    "string" == typeof r && (t[e] = r);
                    break;
                case "expires":
                case "creation":
                case "lastAccessed":
                    "number" == typeof r || "string" == typeof r || r instanceof Date ? t[e] = "Infinity" == r ? "Infinity" : new Date(r).toISOString() : null === r && (t[e] = null);
                    break;
                case "maxAge":
                    "number" != typeof r && "Infinity" !== r && "-Infinity" !== r || (t[e] = r);
                    break;
                case "domain":
                case "path":
                    "string" != typeof r && null !== r || (t[e] = r);
                    break;
                case "secure":
                case "httpOnly":
                    "boolean" == typeof r && (t[e] = r);
                    break;
                case "extensions":
                    Array.isArray(r) && (t[e] = r);
                    break;
                case "hostOnly":
                case "pathIsDefault":
                    "boolean" != typeof r && null !== r || (t[e] = r);
            }
        }
        return t;
    }
    clone() {
        return A(this.toJSON());
    }
    validate() {
        if (!this.value || !d.test(this.value)) return !1;
        if (!("Infinity" == this.expires || this.expires instanceof Date || (0, l.parseDate)(this.expires))) return !1;
        if (null != this.maxAge && "Infinity" !== this.maxAge && ("-Infinity" === this.maxAge || this.maxAge <= 0)) return !1;
        if (null != this.path && !f.test(this.path)) return !1;
        const t = this.cdomain();
        if (t) {
            if (t.match(/\.$/)) return !1;
            if (null == (0, o.getPublicSuffix)(t)) return !1;
        }
        return !0;
    }
    setExpires(t) {
        t instanceof Date ? this.expires = t : this.expires = (0, l.parseDate)(t) || "Infinity";
    }
    setMaxAge(t) {
        this.maxAge = t === 1 / 0 ? "Infinity" : t === -1 / 0 ? "-Infinity" : t;
    }
    cookieString() {
        const t = this.value || "";
        return this.key ? `${this.key}=${t}` : t;
    }
    toString() {
        let t = this.cookieString();
        return "Infinity" != this.expires && this.expires instanceof Date && (t += `; Expires=${(0, c.formatDate)(this.expires)}`), null != this.maxAge && this.maxAge != 1 / 0 && (t += `; Max-Age=${String(this.maxAge)}`), this.domain && !this.hostOnly && (t += `; Domain=${this.domain}`), this.path && (t += `; Path=${this.path}`), this.secure && (t += "; Secure"), this.httpOnly && (t += "; HttpOnly"), this.sameSite && "none" !== this.sameSite && (this.sameSite.toLowerCase() === y.sameSiteCanonical.lax.toLowerCase() ? t += `; SameSite=${y.sameSiteCanonical.lax}` : this.sameSite.toLowerCase() === y.sameSiteCanonical.strict.toLowerCase() ? t += `; SameSite=${y.sameSiteCanonical.strict}` : t += `; SameSite=${this.sameSite}`), this.extensions && this.extensions.forEach((e)=>{
            t += `; ${e}`;
        }), t;
    }
    TTL(t = Date.now()) {
        if (null != this.maxAge && "number" == typeof this.maxAge) return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
        const e = this.expires;
        return "Infinity" === e ? 1 / 0 : (e?.getTime() ?? t) - (t || Date.now());
    }
    expiryTime(t) {
        if (null != this.maxAge) {
            const e = t || this.lastAccessed || new Date, r = "number" == typeof this.maxAge ? this.maxAge : -1 / 0, n = r <= 0 ? -1 / 0 : 1e3 * r;
            return "Infinity" === e ? 1 / 0 : e.getTime() + n;
        }
        return "Infinity" == this.expires ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
    }
    expiryDate(t) {
        const e = this.expiryTime(t);
        return e == 1 / 0 ? new Date(2147483647e3) : e == -1 / 0 ? new Date(0) : null == e ? void 0 : new Date(e);
    }
    isPersistent() {
        return null != this.maxAge || "Infinity" != this.expires;
    }
    canonicalizedDomain() {
        return (0, m.canonicalDomain)(this.domain);
    }
    cdomain() {
        return (0, m.canonicalDomain)(this.domain);
    }
    static parse(t, e) {
        return function(t, e) {
            if (a.isEmptyString(t) || !a.isString(t)) return;
            const r = (t = t.trim()).indexOf(";"), n = g(-1 === r ? t : t.slice(0, r), e?.loose ?? !1);
            if (!n) return;
            if (-1 === r) return n;
            const s = t.slice(r + 1).trim();
            if (0 === s.length) return n;
            const i = s.split(";");
            for(; i.length;){
                const t = (i.shift() ?? "").trim();
                if (0 === t.length) continue;
                const e = t.indexOf("=");
                let r, s;
                switch(-1 === e ? (r = t, s = null) : (r = t.slice(0, e), s = t.slice(e + 1)), r = r.trim().toLowerCase(), s && (s = s.trim()), r){
                    case "expires":
                        if (s) {
                            const t = (0, l.parseDate)(s);
                            t && (n.expires = t);
                        }
                        break;
                    case "max-age":
                        if (s && /^-?[0-9]+$/.test(s)) {
                            const t = parseInt(s, 10);
                            n.setMaxAge(t);
                        }
                        break;
                    case "domain":
                        if (s) {
                            const t = s.trim().replace(/^\./, "");
                            t && (n.domain = t.toLowerCase());
                        }
                        break;
                    case "path":
                        n.path = s && "/" === s[0] ? s : null;
                        break;
                    case "secure":
                        n.secure = !0;
                        break;
                    case "httponly":
                        n.httpOnly = !0;
                        break;
                    case "samesite":
                        switch(s ? s.toLowerCase() : ""){
                            case "strict":
                                n.sameSite = "strict";
                                break;
                            case "lax":
                                n.sameSite = "lax";
                                break;
                            case "none":
                                n.sameSite = "none";
                                break;
                            default:
                                n.sameSite = void 0;
                        }
                        break;
                    default:
                        n.extensions = n.extensions || [], n.extensions.push(t);
                }
            }
            return n;
        }(t, e);
    }
    static fromJSON(t) {
        return A(t);
    }
}
exports.Cookie = y, y.cookiesCreated = 0, y.sameSiteLevel = {
    strict: 3,
    lax: 2,
    none: 1
}, y.sameSiteCanonical = {
    strict: "Strict",
    lax: "Lax"
}, y.serializableProperties = [
    "key",
    "value",
    "expires",
    "maxAge",
    "domain",
    "path",
    "secure",
    "httpOnly",
    "extensions",
    "hostOnly",
    "pathIsDefault",
    "creation",
    "lastAccessed",
    "sameSite"
];
