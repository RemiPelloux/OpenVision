"use strict";
var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(t, r);
    s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return t[r];
        }
    }), Object.defineProperty(e, n, s);
} : function(e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r];
}), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), o = this && this.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var r in e)"default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
    return s(t, e), t;
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Cookie = void 0;
const i = require("./module-16098.js"), a = o(require("./module-82715.js")), c = require("./module-95779.js"), l = require("./module-92658.js"), u = require("./module-55606.js"), d = require("./module-23779.js"), p = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, m = /[\x20-\x3A\x3C-\x7E]+/, h = /[\x00-\x1F]/, f = [
    "\n",
    "\r",
    "\0"
];
function g(e, t) {
    let r, n, s = (e = function(e) {
        if (a.isEmptyString(e)) return e;
        for(let t = 0; t < f.length; t++){
            const r = f[t], n = r ? e.indexOf(r) : -1;
            -1 !== n && (e = e.slice(0, n));
        }
        return e;
    }(e)).indexOf("=");
    if (t) 0 === s && (s = (e = e.substring(1)).indexOf("="));
    else if (s <= 0) return;
    if (s <= 0 ? (r = "", n = e.trim()) : (r = e.slice(0, s).trim(), n = e.slice(s + 1).trim()), h.test(r) || h.test(n)) return;
    const o = new v;
    return o.key = r, o.value = n, o;
}
function y(e) {
    if (!e || a.isEmptyString(e)) return;
    let t;
    if ("string" == typeof e) try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    else t = e;
    const r = new v;
    return v.serializableProperties.forEach((e)=>{
        if (t && "object" == typeof t && (0, c.inOperator)(e, t)) {
            const n = t[e];
            if (void 0 === n) return;
            if ((0, c.inOperator)(e, w) && n === w[e]) return;
            switch(e){
                case "key":
                case "value":
                case "sameSite":
                    "string" == typeof n && (r[e] = n);
                    break;
                case "expires":
                case "creation":
                case "lastAccessed":
                    "number" == typeof n || "string" == typeof n || n instanceof Date ? r[e] = "Infinity" == t[e] ? "Infinity" : new Date(n) : null === n && (r[e] = null);
                    break;
                case "maxAge":
                    "number" != typeof n && "Infinity" !== n && "-Infinity" !== n || (r[e] = n);
                    break;
                case "domain":
                case "path":
                    "string" != typeof n && null !== n || (r[e] = n);
                    break;
                case "secure":
                case "httpOnly":
                    "boolean" == typeof n && (r[e] = n);
                    break;
                case "extensions":
                    Array.isArray(n) && n.every((e)=>"string" == typeof e) && (r[e] = n);
                    break;
                case "hostOnly":
                case "pathIsDefault":
                    "boolean" != typeof n && null !== n || (r[e] = n);
            }
        }
    }), r;
}
const w = {
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
class v {
    constructor(e = {}){
        this.key = e.key ?? w.key, this.value = e.value ?? w.value, this.expires = e.expires ?? w.expires, this.maxAge = e.maxAge ?? w.maxAge, this.domain = e.domain ?? w.domain, this.path = e.path ?? w.path, this.secure = e.secure ?? w.secure, this.httpOnly = e.httpOnly ?? w.httpOnly, this.extensions = e.extensions ?? w.extensions, this.creation = e.creation ?? w.creation, this.hostOnly = e.hostOnly ?? w.hostOnly, this.pathIsDefault = e.pathIsDefault ?? w.pathIsDefault, this.lastAccessed = e.lastAccessed ?? w.lastAccessed, this.sameSite = e.sameSite ?? w.sameSite, this.creation = e.creation ?? new Date, Object.defineProperty(this, "creationIndex", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: ++v.cookiesCreated
        }), this.creationIndex = v.cookiesCreated;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        const e = Date.now(), t = null != this.hostOnly ? this.hostOnly.toString() : "?", r = this.creation && "Infinity" !== this.creation ? `${String(e - this.creation.getTime())}ms` : "?", n = this.lastAccessed && "Infinity" !== this.lastAccessed ? `${String(e - this.lastAccessed.getTime())}ms` : "?";
        return `Cookie="${this.toString()}; hostOnly=${t}; aAge=${n}; cAge=${r}"`;
    }
    toJSON() {
        const e = {};
        for (const t of v.serializableProperties){
            const r = this[t];
            if (r !== w[t]) switch(t){
                case "key":
                case "value":
                case "sameSite":
                    "string" == typeof r && (e[t] = r);
                    break;
                case "expires":
                case "creation":
                case "lastAccessed":
                    "number" == typeof r || "string" == typeof r || r instanceof Date ? e[t] = "Infinity" == r ? "Infinity" : new Date(r).toISOString() : null === r && (e[t] = null);
                    break;
                case "maxAge":
                    "number" != typeof r && "Infinity" !== r && "-Infinity" !== r || (e[t] = r);
                    break;
                case "domain":
                case "path":
                    "string" != typeof r && null !== r || (e[t] = r);
                    break;
                case "secure":
                case "httpOnly":
                    "boolean" == typeof r && (e[t] = r);
                    break;
                case "extensions":
                    Array.isArray(r) && (e[t] = r);
                    break;
                case "hostOnly":
                case "pathIsDefault":
                    "boolean" != typeof r && null !== r || (e[t] = r);
            }
        }
        return e;
    }
    clone() {
        return y(this.toJSON());
    }
    validate() {
        if (!this.value || !p.test(this.value)) return !1;
        if (!("Infinity" == this.expires || this.expires instanceof Date || (0, u.parseDate)(this.expires))) return !1;
        if (null != this.maxAge && "Infinity" !== this.maxAge && ("-Infinity" === this.maxAge || this.maxAge <= 0)) return !1;
        if (null != this.path && !m.test(this.path)) return !1;
        const e = this.cdomain();
        if (e) {
            if (e.match(/\.$/)) return !1;
            if (null == (0, i.getPublicSuffix)(e)) return !1;
        }
        return !0;
    }
    setExpires(e) {
        e instanceof Date ? this.expires = e : this.expires = (0, u.parseDate)(e) || "Infinity";
    }
    setMaxAge(e) {
        this.maxAge = e === 1 / 0 ? "Infinity" : e === -1 / 0 ? "-Infinity" : e;
    }
    cookieString() {
        const e = this.value || "";
        return this.key ? `${this.key}=${e}` : e;
    }
    toString() {
        let e = this.cookieString();
        return "Infinity" != this.expires && this.expires instanceof Date && (e += `; Expires=${(0, l.formatDate)(this.expires)}`), null != this.maxAge && this.maxAge != 1 / 0 && (e += `; Max-Age=${String(this.maxAge)}`), this.domain && !this.hostOnly && (e += `; Domain=${this.domain}`), this.path && (e += `; Path=${this.path}`), this.secure && (e += "; Secure"), this.httpOnly && (e += "; HttpOnly"), this.sameSite && "none" !== this.sameSite && (this.sameSite.toLowerCase() === v.sameSiteCanonical.lax.toLowerCase() ? e += `; SameSite=${v.sameSiteCanonical.lax}` : this.sameSite.toLowerCase() === v.sameSiteCanonical.strict.toLowerCase() ? e += `; SameSite=${v.sameSiteCanonical.strict}` : e += `; SameSite=${this.sameSite}`), this.extensions && this.extensions.forEach((t)=>{
            e += `; ${t}`;
        }), e;
    }
    TTL(e = Date.now()) {
        if (null != this.maxAge && "number" == typeof this.maxAge) return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
        const t = this.expires;
        return "Infinity" === t ? 1 / 0 : (t?.getTime() ?? e) - (e || Date.now());
    }
    expiryTime(e) {
        if (null != this.maxAge) {
            const t = e || this.lastAccessed || new Date, r = "number" == typeof this.maxAge ? this.maxAge : -1 / 0, n = r <= 0 ? -1 / 0 : 1e3 * r;
            return "Infinity" === t ? 1 / 0 : t.getTime() + n;
        }
        return "Infinity" == this.expires ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
    }
    expiryDate(e) {
        const t = this.expiryTime(e);
        return t == 1 / 0 ? new Date(2147483647e3) : t == -1 / 0 ? new Date(0) : null == t ? void 0 : new Date(t);
    }
    isPersistent() {
        return null != this.maxAge || "Infinity" != this.expires;
    }
    canonicalizedDomain() {
        return (0, d.canonicalDomain)(this.domain);
    }
    cdomain() {
        return (0, d.canonicalDomain)(this.domain);
    }
    static parse(e, t) {
        return function(e, t) {
            if (a.isEmptyString(e) || !a.isString(e)) return;
            const r = (e = e.trim()).indexOf(";"), n = g(-1 === r ? e : e.slice(0, r), t?.loose ?? !1);
            if (!n) return;
            if (-1 === r) return n;
            const s = e.slice(r + 1).trim();
            if (0 === s.length) return n;
            const o = s.split(";");
            for(; o.length;){
                const e = (o.shift() ?? "").trim();
                if (0 === e.length) continue;
                const t = e.indexOf("=");
                let r, s;
                switch(-1 === t ? (r = e, s = null) : (r = e.slice(0, t), s = e.slice(t + 1)), r = r.trim().toLowerCase(), s && (s = s.trim()), r){
                    case "expires":
                        if (s) {
                            const e = (0, u.parseDate)(s);
                            e && (n.expires = e);
                        }
                        break;
                    case "max-age":
                        if (s && /^-?[0-9]+$/.test(s)) {
                            const e = parseInt(s, 10);
                            n.setMaxAge(e);
                        }
                        break;
                    case "domain":
                        if (s) {
                            const e = s.trim().replace(/^\./, "");
                            e && (n.domain = e.toLowerCase());
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
                        n.extensions = n.extensions || [], n.extensions.push(e);
                }
            }
            return n;
        }(e, t);
    }
    static fromJSON(e) {
        return y(e);
    }
}
exports.Cookie = v, v.cookiesCreated = 0, v.sameSiteLevel = {
    strict: 3,
    lax: 2,
    none: 1
}, v.sameSiteCanonical = {
    strict: "Strict",
    lax: "Lax"
}, v.serializableProperties = [
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
