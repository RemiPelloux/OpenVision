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
}), exports.CookieJar = void 0;
const i = require("./module-16098.js"), a = o(require("./module-82715.js")), c = require("./module-82715.js"), l = require("./module-46595.js"), u = require("./module-56218.js"), d = require("./module-80798.js"), p = require("./module-95379.js"), m = require("./module-95779.js"), h = require("./module-23779.js"), f = require("./module-21548.js"), g = require("./module-83707.js"), y = require("./module-18128.js"), w = require("./module-85024.js"), v = require("./module-19414.js"), _ = {
    loose: !1,
    sameSiteContext: void 0,
    ignoreError: !1,
    http: !0
}, A = {
    http: !0,
    expire: !0,
    allPaths: !1,
    sameSiteContext: void 0,
    sort: void 0
}, S = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function b(e) {
    if (e && "object" == typeof e && "hostname" in e && "string" == typeof e.hostname && "pathname" in e && "string" == typeof e.pathname && "protocol" in e && "string" == typeof e.protocol) return {
        hostname: e.hostname,
        pathname: e.pathname,
        protocol: e.protocol
    };
    if ("string" != typeof e) throw new c.ParameterError("`url` argument is not a string or URL.");
    try {
        return new URL(decodeURI(e));
    } catch  {
        return new URL(e);
    }
}
function E(e) {
    const t = String(e).toLowerCase();
    return "none" === t || "lax" === t || "strict" === t ? t : void 0;
}
function I(e) {
    const t = e.toLowerCase();
    switch(t){
        case f.PrefixSecurityEnum.STRICT:
        case f.PrefixSecurityEnum.SILENT:
        case f.PrefixSecurityEnum.DISABLED:
            return t;
        default:
            return f.PrefixSecurityEnum.SILENT;
    }
}
class C {
    constructor(e, t){
        "boolean" == typeof t && (t = {
            rejectPublicSuffixes: t
        }), this.rejectPublicSuffixes = t?.rejectPublicSuffixes ?? !0, this.enableLooseMode = t?.looseMode ?? !1, this.allowSpecialUseDomain = t?.allowSpecialUseDomain ?? !0, this.prefixSecurity = I(t?.prefixSecurity ?? "silent"), this.store = e ?? new u.MemoryCookieStore;
    }
    callSync(e) {
        if (!this.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        let t, r = null;
        try {
            e.call(this, (e, n)=>{
                r = e, t = n;
            });
        } catch (e) {
            r = e;
        }
        if (r) throw r;
        return t;
    }
    setCookie(e, t, r, n) {
        "function" == typeof r && (n = r, r = void 0);
        const s = (0, m.createPromiseCallback)(n), o = s.callback;
        let c;
        try {
            if ("string" == typeof t && a.validate(a.isNonEmptyString(t), n, (0, m.safeToString)(r)), c = b(t), "function" == typeof t) return s.reject(new Error("No URL was specified"));
            if ("function" == typeof r && (r = _), a.validate("function" == typeof o, o), !a.isNonEmptyString(e) && !a.isObject(e) && e instanceof String && 0 == e.length) return s.resolve(void 0);
        } catch (e) {
            return s.reject(e);
        }
        const l = (0, h.canonicalDomain)(c.hostname) ?? null, u = r?.loose || this.enableLooseMode;
        let d = null;
        if (r?.sameSiteContext && (d = E(r.sameSiteContext), !d)) return s.reject(new Error(S));
        if ("string" == typeof e || e instanceof String) {
            const t = p.Cookie.parse(e.toString(), {
                loose: u
            });
            if (!t) {
                const e = new Error("Cookie failed to parse");
                return r?.ignoreError ? s.resolve(void 0) : s.reject(e);
            }
            e = t;
        } else if (!(e instanceof p.Cookie)) {
            const e = new Error("First argument to setCookie must be a Cookie object or string");
            return r?.ignoreError ? s.resolve(void 0) : s.reject(e);
        }
        const w = r?.now || new Date;
        if (this.rejectPublicSuffixes && e.domain) try {
            const t = e.cdomain();
            if (null == ("string" == typeof t ? (0, i.getPublicSuffix)(t, {
                allowSpecialUseDomain: this.allowSpecialUseDomain,
                ignoreError: r?.ignoreError
            }) : null) && !f.IP_V6_REGEX_OBJECT.test(e.domain)) {
                const e = new Error("Cookie has domain set to a public suffix");
                return r?.ignoreError ? s.resolve(void 0) : s.reject(e);
            }
        } catch (e) {
            return r?.ignoreError ? s.resolve(void 0) : s.reject(e);
        }
        if (e.domain) {
            if (!(0, y.domainMatch)(l ?? void 0, e.cdomain() ?? void 0, !1)) {
                const t = new Error(`Cookie not in this host's domain. Cookie:${e.cdomain() ?? "null"} Request:${l ?? "null"}`);
                return r?.ignoreError ? s.resolve(void 0) : s.reject(t);
            }
            null == e.hostOnly && (e.hostOnly = !1);
        } else e.hostOnly = !0, e.domain = l;
        if (e.path && "/" === e.path[0] || (e.path = (0, g.defaultPath)(c.pathname), e.pathIsDefault = !0), !1 === r?.http && e.httpOnly) {
            const e = new Error("Cookie is HttpOnly and this isn't an HTTP API");
            return r.ignoreError ? s.resolve(void 0) : s.reject(e);
        }
        if ("none" !== e.sameSite && void 0 !== e.sameSite && d && "none" === d) {
            const e = new Error("Cookie is SameSite but this is a cross-origin request");
            return r?.ignoreError ? s.resolve(void 0) : s.reject(e);
        }
        const v = this.prefixSecurity === f.PrefixSecurityEnum.SILENT;
        if (!(this.prefixSecurity === f.PrefixSecurityEnum.DISABLED)) {
            let t, n = !1;
            if (!function(e) {
                return !("string" == typeof e.key && e.key.startsWith("__Secure-")) || e.secure;
            }(e) ? (n = !0, t = "Cookie has __Secure prefix but Secure attribute is not set") : function(e) {
                return !("string" == typeof e.key && e.key.startsWith("__Host-")) || Boolean(e.secure && e.hostOnly && null != e.path && "/" === e.path);
            }(e) || (n = !0, t = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'"), n) return r?.ignoreError || v ? s.resolve(void 0) : s.reject(new Error(t));
        }
        const A = this.store;
        A.updateCookie || (A.updateCookie = async function(e, t, r) {
            return this.putCookie(t).then(()=>r?.(null), (e)=>r?.(e));
        });
        return A.findCookie(e.domain, e.path, e.key, function(t, n) {
            if (t) return void o(t);
            const s = function(t) {
                t ? o(t) : o(null, "string" == typeof e ? void 0 : e);
            };
            if (n) {
                if (r && "http" in r && !1 === r.http && n.httpOnly) return t = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), void (r.ignoreError ? o(null, void 0) : o(t));
                e instanceof p.Cookie && (e.creation = n.creation, e.creationIndex = n.creationIndex, e.lastAccessed = w, A.updateCookie(n, e, s));
            } else e instanceof p.Cookie && (e.creation = e.lastAccessed = w, A.putCookie(e, s));
        }), s.promise;
    }
    setCookieSync(e, t, r) {
        const n = r ? this.setCookie.bind(this, e, t, r) : this.setCookie.bind(this, e, t);
        return this.callSync(n);
    }
    getCookies(e, t, r) {
        "function" == typeof t ? (r = t, t = A) : void 0 === t && (t = A);
        const n = (0, m.createPromiseCallback)(r), s = n.callback;
        let o;
        try {
            "string" == typeof e && a.validate(a.isNonEmptyString(e), s, e), o = b(e), a.validate(a.isObject(t), s, (0, m.safeToString)(t)), a.validate("function" == typeof s, s);
        } catch (e) {
            return n.reject(e);
        }
        const i = (0, h.canonicalDomain)(o.hostname), c = o.pathname || "/", l = o.protocol && ("https:" == o.protocol || "wss:" == o.protocol);
        let u = 0;
        if (t.sameSiteContext) {
            const e = E(t.sameSiteContext);
            if (null == e) return n.reject(new Error(S));
            if (u = p.Cookie.sameSiteLevel[e], !u) return n.reject(new Error(S));
        }
        const f = t.http ?? !0, g = Date.now(), v = t.expire ?? !0, _ = t.allPaths ?? !1, I = this.store;
        function C(e) {
            if (e.hostOnly) {
                if (e.domain != i) return !1;
            } else if (!(0, y.domainMatch)(i ?? void 0, e.domain ?? void 0, !1)) return !1;
            if (!_ && "string" == typeof e.path && !(0, d.pathMatch)(c, e.path)) return !1;
            if (e.secure && !l) return !1;
            if (e.httpOnly && !f) return !1;
            if (u) {
                let t;
                if (t = "lax" === e.sameSite ? p.Cookie.sameSiteLevel.lax : "strict" === e.sameSite ? p.Cookie.sameSiteLevel.strict : p.Cookie.sameSiteLevel.none, t > u) return !1;
            }
            const t = e.expiryTime();
            return !(v && null != t && t <= g) || (I.removeCookie(e.domain, e.path, e.key, ()=>{}), !1);
        }
        return I.findCookies(i, _ ? null : c, this.allowSpecialUseDomain, (e, r)=>{
            if (e) return void s(e);
            if (null == r) return void s(null, []);
            r = r.filter(C), "sort" in t && !1 !== t.sort && (r = r.sort(w.cookieCompare));
            const n = new Date;
            for (const e of r)e.lastAccessed = n;
            s(null, r);
        }), n.promise;
    }
    getCookiesSync(e, t) {
        return this.callSync(this.getCookies.bind(this, e, t)) ?? [];
    }
    getCookieString(e, t, r) {
        "function" == typeof t && (r = t, t = void 0);
        const n = (0, m.createPromiseCallback)(r);
        return this.getCookies(e, t, function(e, t) {
            e ? n.callback(e) : n.callback(null, t?.sort(w.cookieCompare).map((e)=>e.cookieString()).join("; "));
        }), n.promise;
    }
    getCookieStringSync(e, t) {
        return this.callSync(t ? this.getCookieString.bind(this, e, t) : this.getCookieString.bind(this, e)) ?? "";
    }
    getSetCookieStrings(e, t, r) {
        "function" == typeof t && (r = t, t = void 0);
        const n = (0, m.createPromiseCallback)(r);
        return this.getCookies(e, t, function(e, t) {
            e ? n.callback(e) : n.callback(null, t?.map((e)=>e.toString()));
        }), n.promise;
    }
    getSetCookieStringsSync(e, t = {}) {
        return this.callSync(this.getSetCookieStrings.bind(this, e, t)) ?? [];
    }
    serialize(e) {
        const t = (0, m.createPromiseCallback)(e);
        let r = this.store.constructor.name;
        a.isObject(r) && (r = null);
        const n = {
            version: `tough-cookie@${v.version}`,
            storeType: r,
            rejectPublicSuffixes: this.rejectPublicSuffixes,
            enableLooseMode: this.enableLooseMode,
            allowSpecialUseDomain: this.allowSpecialUseDomain,
            prefixSecurity: I(this.prefixSecurity),
            cookies: []
        };
        return "function" != typeof this.store.getAllCookies ? t.reject(new Error("store does not support getAllCookies and cannot be serialized")) : (this.store.getAllCookies((e, r)=>{
            e ? t.callback(e) : null != r ? (n.cookies = r.map((e)=>{
                const t = e.toJSON();
                return delete t.creationIndex, t;
            }), t.callback(null, n)) : t.callback(null, n);
        }), t.promise);
    }
    serializeSync() {
        return this.callSync((e)=>{
            this.serialize(e);
        });
    }
    toJSON() {
        return this.serializeSync();
    }
    _importCookies(e, t) {
        let r;
        if (e && "object" == typeof e && (0, m.inOperator)("cookies", e) && Array.isArray(e.cookies) && (r = e.cookies), !r) return void t(new Error("serialized jar has no cookies array"), void 0);
        r = r.slice();
        const n = (e)=>{
            if (e) t(e, void 0);
            else if (Array.isArray(r)) {
                if (!r.length) return void t(e, this);
                let s;
                try {
                    s = p.Cookie.fromJSON(r.shift());
                } catch (e) {
                    return void t(e instanceof Error ? e : new Error, void 0);
                }
                if (void 0 === s) return void n(null);
                this.store.putCookie(s, n);
            }
        };
        n(null);
    }
    _importCookiesSync(e) {
        this.callSync(this._importCookies.bind(this, e));
    }
    clone(e, t) {
        "function" == typeof e && (t = e, e = void 0);
        const r = (0, m.createPromiseCallback)(t), n = r.callback;
        return this.serialize((t, s)=>t ? r.reject(t) : C.deserialize(s ?? "", e, n)), r.promise;
    }
    _cloneSync(e) {
        const t = e && "function" != typeof e ? this.clone.bind(this, e) : this.clone.bind(this);
        return this.callSync((e)=>{
            t(e);
        });
    }
    cloneSync(e) {
        if (!e) return this._cloneSync();
        if (!e.synchronous) throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
        return this._cloneSync(e);
    }
    removeAllCookies(e) {
        const t = (0, m.createPromiseCallback)(e), r = t.callback, n = this.store;
        return "function" == typeof n.removeAllCookies && n.removeAllCookies !== l.Store.prototype.removeAllCookies ? (n.removeAllCookies(r), t.promise) : (n.getAllCookies((e, t)=>{
            if (e) return void r(e);
            if (t || (t = []), 0 === t.length) return void r(null, void 0);
            let s = 0;
            const o = [], i = function(e) {
                e && o.push(e), s++, s !== t.length || (o[0] ? r(o[0]) : r(null, void 0));
            };
            t.forEach((e)=>{
                n.removeCookie(e.domain, e.path, e.key, i);
            });
        }), t.promise);
    }
    removeAllCookiesSync() {
        this.callSync((e)=>{
            this.removeAllCookies(e);
        });
    }
    static deserialize(e, t, r) {
        "function" == typeof t && (r = t, t = void 0);
        const n = (0, m.createPromiseCallback)(r);
        let s;
        if ("string" == typeof e) try {
            s = JSON.parse(e);
        } catch (e) {
            return n.reject(e instanceof Error ? e : new Error);
        }
        else s = e;
        const o = (e)=>s && "object" == typeof s && (0, m.inOperator)(e, s) ? s[e] : void 0, i = (e)=>{
            const t = o(e);
            return "boolean" == typeof t ? t : void 0;
        }, a = new C(t, {
            rejectPublicSuffixes: i("rejectPublicSuffixes"),
            looseMode: i("enableLooseMode"),
            allowSpecialUseDomain: i("allowSpecialUseDomain"),
            prefixSecurity: I(((e)=>{
                const t = o(e);
                return "string" == typeof t ? t : void 0;
            })("prefixSecurity") ?? "silent")
        });
        return a._importCookies(s, (e)=>{
            e ? n.callback(e) : n.callback(null, a);
        }), n.promise;
    }
    static deserializeSync(e, t) {
        const r = "string" == typeof e ? JSON.parse(e) : e, n = (e)=>r && "object" == typeof r && (0, m.inOperator)(e, r) ? r[e] : void 0, s = (e)=>{
            const t = n(e);
            return "boolean" == typeof t ? t : void 0;
        }, o = new C(t, {
            rejectPublicSuffixes: s("rejectPublicSuffixes"),
            looseMode: s("enableLooseMode"),
            allowSpecialUseDomain: s("allowSpecialUseDomain"),
            prefixSecurity: I(((e)=>{
                const t = n(e);
                return "string" == typeof t ? t : void 0;
            })("prefixSecurity") ?? "silent")
        });
        if (!o.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        return o._importCookiesSync(r), o;
    }
    static fromJSON(e, t) {
        return C.deserializeSync(e, t);
    }
}
exports.CookieJar = C;
