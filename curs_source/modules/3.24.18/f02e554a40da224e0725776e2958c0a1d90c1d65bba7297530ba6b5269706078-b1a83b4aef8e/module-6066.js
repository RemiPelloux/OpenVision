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
}), exports.CookieJar = void 0;
const o = require("./module-6098.js"), a = i(require("./module-2715.js")), u = require("./module-2715.js"), c = require("./module-6595.js"), l = require("./module-6218.js"), m = require("./module-798.js"), d = require("./module-5379.js"), f = require("./module-5779.js"), p = require("./module-3779.js"), h = require("./module-1548.js"), g = require("./module-3707.js"), A = require("./module-8128.js"), _ = require("./module-5024.js"), y = require("./module-9414.js"), w = {
    loose: !1,
    sameSiteContext: void 0,
    ignoreError: !1,
    http: !0
}, S = {
    http: !0,
    expire: !0,
    allPaths: !1,
    sameSiteContext: void 0,
    sort: void 0
}, J = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function B(t) {
    if (t && "object" == typeof t && "hostname" in t && "string" == typeof t.hostname && "pathname" in t && "string" == typeof t.pathname && "protocol" in t && "string" == typeof t.protocol) return {
        hostname: t.hostname,
        pathname: t.pathname,
        protocol: t.protocol
    };
    if ("string" != typeof t) throw new u.ParameterError("`url` argument is not a string or URL.");
    try {
        return new URL(decodeURI(t));
    } catch  {
        return new URL(t);
    }
}
function E(t) {
    const e = String(t).toLowerCase();
    return "none" === e || "lax" === e || "strict" === e ? e : void 0;
}
function I(t) {
    const e = t.toLowerCase();
    switch(e){
        case h.PrefixSecurityEnum.STRICT:
        case h.PrefixSecurityEnum.SILENT:
        case h.PrefixSecurityEnum.DISABLED:
            return e;
        default:
            return h.PrefixSecurityEnum.SILENT;
    }
}
class C {
    constructor(t, e){
        "boolean" == typeof e && (e = {
            rejectPublicSuffixes: e
        }), this.rejectPublicSuffixes = e?.rejectPublicSuffixes ?? !0, this.enableLooseMode = e?.looseMode ?? !1, this.allowSpecialUseDomain = e?.allowSpecialUseDomain ?? !0, this.prefixSecurity = I(e?.prefixSecurity ?? "silent"), this.store = t ?? new l.MemoryCookieStore;
    }
    callSync(t) {
        if (!this.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        let e, r = null;
        try {
            t.call(this, (t, n)=>{
                r = t, e = n;
            });
        } catch (t) {
            r = t;
        }
        if (r) throw r;
        return e;
    }
    setCookie(t, e, r, n) {
        "function" == typeof r && (n = r, r = void 0);
        const s = (0, f.createPromiseCallback)(n), i = s.callback;
        let u;
        try {
            if ("string" == typeof e && a.validate(a.isNonEmptyString(e), n, (0, f.safeToString)(r)), u = B(e), "function" == typeof e) return s.reject(new Error("No URL was specified"));
            if ("function" == typeof r && (r = w), a.validate("function" == typeof i, i), !a.isNonEmptyString(t) && !a.isObject(t) && t instanceof String && 0 == t.length) return s.resolve(void 0);
        } catch (t) {
            return s.reject(t);
        }
        const c = (0, p.canonicalDomain)(u.hostname) ?? null, l = r?.loose || this.enableLooseMode;
        let m = null;
        if (r?.sameSiteContext && (m = E(r.sameSiteContext), !m)) return s.reject(new Error(J));
        if ("string" == typeof t || t instanceof String) {
            const e = d.Cookie.parse(t.toString(), {
                loose: l
            });
            if (!e) {
                const t = new Error("Cookie failed to parse");
                return r?.ignoreError ? s.resolve(void 0) : s.reject(t);
            }
            t = e;
        } else if (!(t instanceof d.Cookie)) {
            const t = new Error("First argument to setCookie must be a Cookie object or string");
            return r?.ignoreError ? s.resolve(void 0) : s.reject(t);
        }
        const _ = r?.now || new Date;
        if (this.rejectPublicSuffixes && t.domain) try {
            const e = t.cdomain();
            if (null == ("string" == typeof e ? (0, o.getPublicSuffix)(e, {
                allowSpecialUseDomain: this.allowSpecialUseDomain,
                ignoreError: r?.ignoreError
            }) : null) && !h.IP_V6_REGEX_OBJECT.test(t.domain)) {
                const t = new Error("Cookie has domain set to a public suffix");
                return r?.ignoreError ? s.resolve(void 0) : s.reject(t);
            }
        } catch (t) {
            return r?.ignoreError ? s.resolve(void 0) : s.reject(t);
        }
        if (t.domain) {
            if (!(0, A.domainMatch)(c ?? void 0, t.cdomain() ?? void 0, !1)) {
                const e = new Error(`Cookie not in this host's domain. Cookie:${t.cdomain() ?? "null"} Request:${c ?? "null"}`);
                return r?.ignoreError ? s.resolve(void 0) : s.reject(e);
            }
            null == t.hostOnly && (t.hostOnly = !1);
        } else t.hostOnly = !0, t.domain = c;
        if (t.path && "/" === t.path[0] || (t.path = (0, g.defaultPath)(u.pathname), t.pathIsDefault = !0), !1 === r?.http && t.httpOnly) {
            const t = new Error("Cookie is HttpOnly and this isn't an HTTP API");
            return r.ignoreError ? s.resolve(void 0) : s.reject(t);
        }
        if ("none" !== t.sameSite && void 0 !== t.sameSite && m && "none" === m) {
            const t = new Error("Cookie is SameSite but this is a cross-origin request");
            return r?.ignoreError ? s.resolve(void 0) : s.reject(t);
        }
        const y = this.prefixSecurity === h.PrefixSecurityEnum.SILENT;
        if (!(this.prefixSecurity === h.PrefixSecurityEnum.DISABLED)) {
            let e, n = !1;
            if (!function(t) {
                return !("string" == typeof t.key && t.key.startsWith("__Secure-")) || t.secure;
            }(t) ? (n = !0, e = "Cookie has __Secure prefix but Secure attribute is not set") : function(t) {
                return !("string" == typeof t.key && t.key.startsWith("__Host-")) || Boolean(t.secure && t.hostOnly && null != t.path && "/" === t.path);
            }(t) || (n = !0, e = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'"), n) return r?.ignoreError || y ? s.resolve(void 0) : s.reject(new Error(e));
        }
        const S = this.store;
        S.updateCookie || (S.updateCookie = async function(t, e, r) {
            return this.putCookie(e).then(()=>r?.(null), (t)=>r?.(t));
        });
        return S.findCookie(t.domain, t.path, t.key, function(e, n) {
            if (e) return void i(e);
            const s = function(e) {
                e ? i(e) : i(null, "string" == typeof t ? void 0 : t);
            };
            if (n) {
                if (r && "http" in r && !1 === r.http && n.httpOnly) return e = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), void (r.ignoreError ? i(null, void 0) : i(e));
                t instanceof d.Cookie && (t.creation = n.creation, t.creationIndex = n.creationIndex, t.lastAccessed = _, S.updateCookie(n, t, s));
            } else t instanceof d.Cookie && (t.creation = t.lastAccessed = _, S.putCookie(t, s));
        }), s.promise;
    }
    setCookieSync(t, e, r) {
        const n = r ? this.setCookie.bind(this, t, e, r) : this.setCookie.bind(this, t, e);
        return this.callSync(n);
    }
    getCookies(t, e, r) {
        "function" == typeof e ? (r = e, e = S) : void 0 === e && (e = S);
        const n = (0, f.createPromiseCallback)(r), s = n.callback;
        let i;
        try {
            "string" == typeof t && a.validate(a.isNonEmptyString(t), s, t), i = B(t), a.validate(a.isObject(e), s, (0, f.safeToString)(e)), a.validate("function" == typeof s, s);
        } catch (t) {
            return n.reject(t);
        }
        const o = (0, p.canonicalDomain)(i.hostname), u = i.pathname || "/", c = i.protocol && ("https:" == i.protocol || "wss:" == i.protocol);
        let l = 0;
        if (e.sameSiteContext) {
            const t = E(e.sameSiteContext);
            if (null == t) return n.reject(new Error(J));
            if (l = d.Cookie.sameSiteLevel[t], !l) return n.reject(new Error(J));
        }
        const h = e.http ?? !0, g = Date.now(), y = e.expire ?? !0, w = e.allPaths ?? !1, I = this.store;
        function C(t) {
            if (t.hostOnly) {
                if (t.domain != o) return !1;
            } else if (!(0, A.domainMatch)(o ?? void 0, t.domain ?? void 0, !1)) return !1;
            if (!w && "string" == typeof t.path && !(0, m.pathMatch)(u, t.path)) return !1;
            if (t.secure && !c) return !1;
            if (t.httpOnly && !h) return !1;
            if (l) {
                let e;
                if (e = "lax" === t.sameSite ? d.Cookie.sameSiteLevel.lax : "strict" === t.sameSite ? d.Cookie.sameSiteLevel.strict : d.Cookie.sameSiteLevel.none, e > l) return !1;
            }
            const e = t.expiryTime();
            return !(y && null != e && e <= g) || (I.removeCookie(t.domain, t.path, t.key, ()=>{}), !1);
        }
        return I.findCookies(o, w ? null : u, this.allowSpecialUseDomain, (t, r)=>{
            if (t) return void s(t);
            if (null == r) return void s(null, []);
            r = r.filter(C), "sort" in e && !1 !== e.sort && (r = r.sort(_.cookieCompare));
            const n = new Date;
            for (const t of r)t.lastAccessed = n;
            s(null, r);
        }), n.promise;
    }
    getCookiesSync(t, e) {
        return this.callSync(this.getCookies.bind(this, t, e)) ?? [];
    }
    getCookieString(t, e, r) {
        "function" == typeof e && (r = e, e = void 0);
        const n = (0, f.createPromiseCallback)(r);
        return this.getCookies(t, e, function(t, e) {
            t ? n.callback(t) : n.callback(null, e?.sort(_.cookieCompare).map((t)=>t.cookieString()).join("; "));
        }), n.promise;
    }
    getCookieStringSync(t, e) {
        return this.callSync(e ? this.getCookieString.bind(this, t, e) : this.getCookieString.bind(this, t)) ?? "";
    }
    getSetCookieStrings(t, e, r) {
        "function" == typeof e && (r = e, e = void 0);
        const n = (0, f.createPromiseCallback)(r);
        return this.getCookies(t, e, function(t, e) {
            t ? n.callback(t) : n.callback(null, e?.map((t)=>t.toString()));
        }), n.promise;
    }
    getSetCookieStringsSync(t, e = {}) {
        return this.callSync(this.getSetCookieStrings.bind(this, t, e)) ?? [];
    }
    serialize(t) {
        const e = (0, f.createPromiseCallback)(t);
        let r = this.store.constructor.name;
        a.isObject(r) && (r = null);
        const n = {
            version: `tough-cookie@${y.version}`,
            storeType: r,
            rejectPublicSuffixes: this.rejectPublicSuffixes,
            enableLooseMode: this.enableLooseMode,
            allowSpecialUseDomain: this.allowSpecialUseDomain,
            prefixSecurity: I(this.prefixSecurity),
            cookies: []
        };
        return "function" != typeof this.store.getAllCookies ? e.reject(new Error("store does not support getAllCookies and cannot be serialized")) : (this.store.getAllCookies((t, r)=>{
            t ? e.callback(t) : null != r ? (n.cookies = r.map((t)=>{
                const e = t.toJSON();
                return delete e.creationIndex, e;
            }), e.callback(null, n)) : e.callback(null, n);
        }), e.promise);
    }
    serializeSync() {
        return this.callSync((t)=>{
            this.serialize(t);
        });
    }
    toJSON() {
        return this.serializeSync();
    }
    _importCookies(t, e) {
        let r;
        if (t && "object" == typeof t && (0, f.inOperator)("cookies", t) && Array.isArray(t.cookies) && (r = t.cookies), !r) return void e(new Error("serialized jar has no cookies array"), void 0);
        r = r.slice();
        const n = (t)=>{
            if (t) e(t, void 0);
            else if (Array.isArray(r)) {
                if (!r.length) return void e(t, this);
                let s;
                try {
                    s = d.Cookie.fromJSON(r.shift());
                } catch (t) {
                    return void e(t instanceof Error ? t : new Error, void 0);
                }
                if (void 0 === s) return void n(null);
                this.store.putCookie(s, n);
            }
        };
        n(null);
    }
    _importCookiesSync(t) {
        this.callSync(this._importCookies.bind(this, t));
    }
    clone(t, e) {
        "function" == typeof t && (e = t, t = void 0);
        const r = (0, f.createPromiseCallback)(e), n = r.callback;
        return this.serialize((e, s)=>e ? r.reject(e) : C.deserialize(s ?? "", t, n)), r.promise;
    }
    _cloneSync(t) {
        const e = t && "function" != typeof t ? this.clone.bind(this, t) : this.clone.bind(this);
        return this.callSync((t)=>{
            e(t);
        });
    }
    cloneSync(t) {
        if (!t) return this._cloneSync();
        if (!t.synchronous) throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
        return this._cloneSync(t);
    }
    removeAllCookies(t) {
        const e = (0, f.createPromiseCallback)(t), r = e.callback, n = this.store;
        return "function" == typeof n.removeAllCookies && n.removeAllCookies !== c.Store.prototype.removeAllCookies ? (n.removeAllCookies(r), e.promise) : (n.getAllCookies((t, e)=>{
            if (t) return void r(t);
            if (e || (e = []), 0 === e.length) return void r(null, void 0);
            let s = 0;
            const i = [], o = function(t) {
                t && i.push(t), s++, s !== e.length || (i[0] ? r(i[0]) : r(null, void 0));
            };
            e.forEach((t)=>{
                n.removeCookie(t.domain, t.path, t.key, o);
            });
        }), e.promise);
    }
    removeAllCookiesSync() {
        this.callSync((t)=>{
            this.removeAllCookies(t);
        });
    }
    static deserialize(t, e, r) {
        "function" == typeof e && (r = e, e = void 0);
        const n = (0, f.createPromiseCallback)(r);
        let s;
        if ("string" == typeof t) try {
            s = JSON.parse(t);
        } catch (t) {
            return n.reject(t instanceof Error ? t : new Error);
        }
        else s = t;
        const i = (t)=>s && "object" == typeof s && (0, f.inOperator)(t, s) ? s[t] : void 0, o = (t)=>{
            const e = i(t);
            return "boolean" == typeof e ? e : void 0;
        }, a = new C(e, {
            rejectPublicSuffixes: o("rejectPublicSuffixes"),
            looseMode: o("enableLooseMode"),
            allowSpecialUseDomain: o("allowSpecialUseDomain"),
            prefixSecurity: I(((t)=>{
                const e = i(t);
                return "string" == typeof e ? e : void 0;
            })("prefixSecurity") ?? "silent")
        });
        return a._importCookies(s, (t)=>{
            t ? n.callback(t) : n.callback(null, a);
        }), n.promise;
    }
    static deserializeSync(t, e) {
        const r = "string" == typeof t ? JSON.parse(t) : t, n = (t)=>r && "object" == typeof r && (0, f.inOperator)(t, r) ? r[t] : void 0, s = (t)=>{
            const e = n(t);
            return "boolean" == typeof e ? e : void 0;
        }, i = new C(e, {
            rejectPublicSuffixes: s("rejectPublicSuffixes"),
            looseMode: s("enableLooseMode"),
            allowSpecialUseDomain: s("allowSpecialUseDomain"),
            prefixSecurity: I(((t)=>{
                const e = n(t);
                return "string" == typeof e ? e : void 0;
            })("prefixSecurity") ?? "silent")
        });
        if (!i.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        return i._importCookiesSync(r), i;
    }
    static fromJSON(t, e) {
        return C.deserializeSync(t, e);
    }
}
exports.CookieJar = C;
