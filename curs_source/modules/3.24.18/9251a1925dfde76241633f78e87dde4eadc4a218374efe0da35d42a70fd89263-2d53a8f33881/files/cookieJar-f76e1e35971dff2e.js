import { require_canonicalDomain } from "./canonicalDomain.js";
import { require_constants7 } from "./constants.js";
import { require_cookie } from "./cookie.js";
import { require_cookieCompare } from "./cookieCompare.js";
import { require_defaultPath } from "./defaultPath.js";
import { require_domainMatch } from "./domainMatch.js";
import { require_getPublicSuffix } from "../getPublicSuffix.js";
import { require_memstore } from "../memstore.js";
import { require_pathMatch } from "../pathMatch.js";
import { require_store } from "../store.js";
import { require_utils2 } from "../utils.js";
import { require_validators } from "../validators.js";
import { require_version2 } from "../version.js";
var __wakaru_require_cookieJar_cache;
export function require_cookieJar() {
if (__wakaru_require_cookieJar_cache) return __wakaru_require_cookieJar_cache;
var exports2 = {};
__wakaru_require_cookieJar_cache = exports2;
"use strict";
var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m2[k2];
            }
        };
    }
    Object.defineProperty(o, k22, desc);
}) : (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o[k22] = m2[k2];
}));
var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v2) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v2
    });
}) : function(o, v2) {
    o["default"] = v2;
});
var __importStar = exports2 && exports2.__importStar || function(mod2) {
    if (mod2 && mod2.__esModule) return mod2;
    var result = {};
    if (mod2 != null) {
        for(var k2 in mod2)if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod2, k2)) __createBinding(result, mod2, k2);
    }
    __setModuleDefault(result, mod2);
    return result;
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.CookieJar = void 0;
var getPublicSuffix_1 = require_getPublicSuffix();
var validators = __importStar(require_validators());
var validators_1 = require_validators();
var store_1 = require_store();
var memstore_1 = require_memstore();
var pathMatch_1 = require_pathMatch();
var cookie_1 = require_cookie();
var utils_1 = require_utils2();
var canonicalDomain_1 = require_canonicalDomain();
var constants_1 = require_constants7();
var defaultPath_1 = require_defaultPath();
var domainMatch_1 = require_domainMatch();
var cookieCompare_1 = require_cookieCompare();
var version_1 = require_version2();
var defaultSetCookieOptions = {
    loose: false,
    sameSiteContext: void 0,
    ignoreError: false,
    http: true
};
var defaultGetCookieOptions = {
    http: true,
    expire: true,
    allPaths: false,
    sameSiteContext: void 0,
    sort: void 0
};
var SAME_SITE_CONTEXT_VAL_ERR = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function getCookieContext(url2) {
    if (url2 && typeof url2 === "object" && "hostname" in url2 && typeof url2.hostname === "string" && "pathname" in url2 && typeof url2.pathname === "string" && "protocol" in url2 && typeof url2.protocol === "string") {
        return {
            hostname: url2.hostname,
            pathname: url2.pathname,
            protocol: url2.protocol
        };
    } else if (typeof url2 === "string") {
        try {
            return new URL(decodeURI(url2));
        } catch  {
            return new URL(url2);
        }
    } else {
        throw new validators_1.ParameterError("`url` argument is not a string or URL.");
    }
}
function checkSameSiteContext(value) {
    const context2 = String(value).toLowerCase();
    if (context2 === "none" || context2 === "lax" || context2 === "strict") {
        return context2;
    } else {
        return void 0;
    }
}
function isSecurePrefixConditionMet(cookie) {
    const startsWithSecurePrefix = typeof cookie.key === "string" && cookie.key.startsWith("__Secure-");
    return !startsWithSecurePrefix || cookie.secure;
}
function isHostPrefixConditionMet(cookie) {
    const startsWithHostPrefix = typeof cookie.key === "string" && cookie.key.startsWith("__Host-");
    return !startsWithHostPrefix || Boolean(cookie.secure && cookie.hostOnly && cookie.path != null && cookie.path === "/");
}
function getNormalizedPrefixSecurity(prefixSecurity) {
    const normalizedPrefixSecurity = prefixSecurity.toLowerCase();
    switch(normalizedPrefixSecurity){
        case constants_1.PrefixSecurityEnum.STRICT:
        case constants_1.PrefixSecurityEnum.SILENT:
        case constants_1.PrefixSecurityEnum.DISABLED:
            return normalizedPrefixSecurity;
        default:
            return constants_1.PrefixSecurityEnum.SILENT;
    }
}
var CookieJar = class _CookieJar {
    constructor(store, options2){
        if (typeof options2 === "boolean") {
            options2 = {
                rejectPublicSuffixes: options2
            };
        }
        this.rejectPublicSuffixes = options2?.rejectPublicSuffixes ?? true;
        this.enableLooseMode = options2?.looseMode ?? false;
        this.allowSpecialUseDomain = options2?.allowSpecialUseDomain ?? true;
        this.prefixSecurity = getNormalizedPrefixSecurity(options2?.prefixSecurity ?? "silent");
        this.store = store ?? new memstore_1.MemoryCookieStore();
    }
    callSync(fn) {
        if (!this.store.synchronous) {
            throw new Error("CookieJar store is not synchronous; use async API instead.");
        }
        let syncErr = null;
        let syncResult = void 0;
        try {
            fn.call(this, (error3, result)=>{
                syncErr = error3;
                syncResult = result;
            });
        } catch (err) {
            syncErr = err;
        }
        if (syncErr) throw syncErr;
        return syncResult;
    }
    setCookie(cookie, url2, options2, callback) {
        if (typeof options2 === "function") {
            callback = options2;
            options2 = void 0;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cb = promiseCallback.callback;
        let context2;
        try {
            if (typeof url2 === "string") {
                validators.validate(validators.isNonEmptyString(url2), callback, (0, utils_1.safeToString)(options2));
            }
            context2 = getCookieContext(url2);
            if (typeof url2 === "function") {
                return promiseCallback.reject(new Error("No URL was specified"));
            }
            if (typeof options2 === "function") {
                options2 = defaultSetCookieOptions;
            }
            validators.validate(typeof cb === "function", cb);
            if (!validators.isNonEmptyString(cookie) && !validators.isObject(cookie) && cookie instanceof String && cookie.length == 0) {
                return promiseCallback.resolve(void 0);
            }
        } catch (err) {
            return promiseCallback.reject(err);
        }
        const host = (0, canonicalDomain_1.canonicalDomain)(context2.hostname) ?? null;
        const loose = options2?.loose || this.enableLooseMode;
        let sameSiteContext = null;
        if (options2?.sameSiteContext) {
            sameSiteContext = checkSameSiteContext(options2.sameSiteContext);
            if (!sameSiteContext) {
                return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
            }
        }
        if (typeof cookie === "string" || cookie instanceof String) {
            const parsedCookie = cookie_1.Cookie.parse(cookie.toString(), {
                loose
            });
            if (!parsedCookie) {
                const err = new Error("Cookie failed to parse");
                return options2?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
            }
            cookie = parsedCookie;
        } else if (!(cookie instanceof cookie_1.Cookie)) {
            const err = new Error("First argument to setCookie must be a Cookie object or string");
            return options2?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
        }
        const now2 = options2?.now || new Date();
        if (this.rejectPublicSuffixes && cookie.domain) {
            try {
                const cdomain = cookie.cdomain();
                const suffix = typeof cdomain === "string" ? (0, getPublicSuffix_1.getPublicSuffix)(cdomain, {
                    allowSpecialUseDomain: this.allowSpecialUseDomain,
                    ignoreError: options2?.ignoreError
                }) : null;
                if (suffix == null && !constants_1.IP_V6_REGEX_OBJECT.test(cookie.domain)) {
                    const err = new Error("Cookie has domain set to a public suffix");
                    return options2?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
                }
            } catch (err) {
                return options2?.ignoreError ? promiseCallback.resolve(void 0) : (promiseCallback.reject(err));
            }
        }
        if (cookie.domain) {
            if (!(0, domainMatch_1.domainMatch)(host ?? void 0, cookie.cdomain() ?? void 0, false)) {
                const err = new Error(`Cookie not in this host's domain. Cookie:${cookie.cdomain() ?? "null"} Request:${host ?? "null"}`);
                return options2?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
            }
            if (cookie.hostOnly == null) {
                cookie.hostOnly = false;
            }
        } else {
            cookie.hostOnly = true;
            cookie.domain = host;
        }
        if (!cookie.path || cookie.path[0] !== "/") {
            cookie.path = (0, defaultPath_1.defaultPath)(context2.pathname);
            cookie.pathIsDefault = true;
        }
        if (options2?.http === false && cookie.httpOnly) {
            const err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
            return options2.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
        }
        if (cookie.sameSite !== "none" && cookie.sameSite !== void 0 && sameSiteContext) {
            if (sameSiteContext === "none") {
                const err = new Error("Cookie is SameSite but this is a cross-origin request");
                return options2?.ignoreError ? promiseCallback.resolve(void 0) : promiseCallback.reject(err);
            }
        }
        const ignoreErrorForPrefixSecurity = this.prefixSecurity === constants_1.PrefixSecurityEnum.SILENT;
        const prefixSecurityDisabled = this.prefixSecurity === constants_1.PrefixSecurityEnum.DISABLED;
        if (!prefixSecurityDisabled) {
            let errorFound = false;
            let errorMsg;
            if (!isSecurePrefixConditionMet(cookie)) {
                errorFound = true;
                errorMsg = "Cookie has __Secure prefix but Secure attribute is not set";
            } else if (!isHostPrefixConditionMet(cookie)) {
                errorFound = true;
                errorMsg = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'";
            }
            if (errorFound) {
                return options2?.ignoreError || ignoreErrorForPrefixSecurity ? promiseCallback.resolve(void 0) : promiseCallback.reject(new Error(errorMsg));
            }
        }
        const store = this.store;
        if (!store.updateCookie) {
            store.updateCookie = async function(_oldCookie, newCookie, cb2) {
                return this.putCookie(newCookie).then(()=>cb2?.(null), (error3)=>cb2?.(error3));
            };
        }
        const withCookie = function withCookie2(err, oldCookie) {
            if (err) {
                cb(err);
                return;
            }
            const next = function(err2) {
                if (err2) {
                    cb(err2);
                } else if (typeof cookie === "string") {
                    cb(null, void 0);
                } else {
                    cb(null, cookie);
                }
            };
            if (oldCookie) {
                if (options2 && "http" in options2 && options2.http === false && oldCookie.httpOnly) {
                    err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
                    if (options2.ignoreError) cb(null, void 0);
                    else cb(err);
                    return;
                }
                if (cookie instanceof cookie_1.Cookie) {
                    cookie.creation = oldCookie.creation;
                    cookie.creationIndex = oldCookie.creationIndex;
                    cookie.lastAccessed = now2;
                    store.updateCookie(oldCookie, cookie, next);
                }
            } else {
                if (cookie instanceof cookie_1.Cookie) {
                    cookie.creation = cookie.lastAccessed = now2;
                    store.putCookie(cookie, next);
                }
            }
        };
        store.findCookie(cookie.domain, cookie.path, cookie.key, withCookie);
        return promiseCallback.promise;
    }
    setCookieSync(cookie, url2, options2) {
        const setCookieFn = options2 ? this.setCookie.bind(this, cookie, url2, options2) : this.setCookie.bind(this, cookie, url2);
        return this.callSync(setCookieFn);
    }
    getCookies(url2, options2, callback) {
        if (typeof options2 === "function") {
            callback = options2;
            options2 = defaultGetCookieOptions;
        } else if (options2 === void 0) {
            options2 = defaultGetCookieOptions;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cb = promiseCallback.callback;
        let context2;
        try {
            if (typeof url2 === "string") {
                validators.validate(validators.isNonEmptyString(url2), cb, url2);
            }
            context2 = getCookieContext(url2);
            validators.validate(validators.isObject(options2), cb, (0, utils_1.safeToString)(options2));
            validators.validate(typeof cb === "function", cb);
        } catch (parameterError) {
            return promiseCallback.reject(parameterError);
        }
        const host = (0, canonicalDomain_1.canonicalDomain)(context2.hostname);
        const path64 = context2.pathname || "/";
        const secure = context2.protocol && (context2.protocol == "https:" || context2.protocol == "wss:");
        let sameSiteLevel = 0;
        if (options2.sameSiteContext) {
            const sameSiteContext = checkSameSiteContext(options2.sameSiteContext);
            if (sameSiteContext == null) {
                return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
            }
            sameSiteLevel = cookie_1.Cookie.sameSiteLevel[sameSiteContext];
            if (!sameSiteLevel) {
                return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
            }
        }
        const http4 = options2.http ?? true;
        const now2 = Date.now();
        const expireCheck = options2.expire ?? true;
        const allPaths = options2.allPaths ?? false;
        const store = this.store;
        function matchingCookie(c) {
            if (c.hostOnly) {
                if (c.domain != host) {
                    return false;
                }
            } else {
                if (!(0, domainMatch_1.domainMatch)(host ?? void 0, c.domain ?? void 0, false)) {
                    return false;
                }
            }
            if (!allPaths && typeof c.path === "string" && !(0, pathMatch_1.pathMatch)(path64, c.path)) {
                return false;
            }
            if (c.secure && !secure) {
                return false;
            }
            if (c.httpOnly && !http4) {
                return false;
            }
            if (sameSiteLevel) {
                let cookieLevel;
                if (c.sameSite === "lax") {
                    cookieLevel = cookie_1.Cookie.sameSiteLevel.lax;
                } else if (c.sameSite === "strict") {
                    cookieLevel = cookie_1.Cookie.sameSiteLevel.strict;
                } else {
                    cookieLevel = cookie_1.Cookie.sameSiteLevel.none;
                }
                if (cookieLevel > sameSiteLevel) {
                    return false;
                }
            }
            const expiryTime = c.expiryTime();
            if (expireCheck && expiryTime != void 0 && expiryTime <= now2) {
                store.removeCookie(c.domain, c.path, c.key, ()=>{});
                return false;
            }
            return true;
        }
        store.findCookies(host, allPaths ? null : path64, this.allowSpecialUseDomain, (err, cookies)=>{
            if (err) {
                cb(err);
                return;
            }
            if (cookies == null) {
                cb(null, []);
                return;
            }
            cookies = cookies.filter(matchingCookie);
            if ("sort" in options2 && options2.sort !== false) {
                cookies = cookies.sort(cookieCompare_1.cookieCompare);
            }
            const now3 = new Date();
            for (const cookie of cookies){
                cookie.lastAccessed = now3;
            }
            cb(null, cookies);
        });
        return promiseCallback.promise;
    }
    getCookiesSync(url2, options2) {
        return this.callSync(this.getCookies.bind(this, url2, options2)) ?? [];
    }
    getCookieString(url2, options2, callback) {
        if (typeof options2 === "function") {
            callback = options2;
            options2 = void 0;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const next = function(err, cookies) {
            if (err) {
                promiseCallback.callback(err);
            } else {
                promiseCallback.callback(null, cookies?.sort(cookieCompare_1.cookieCompare).map((c)=>c.cookieString()).join("; "));
            }
        };
        this.getCookies(url2, options2, next);
        return promiseCallback.promise;
    }
    getCookieStringSync(url2, options2) {
        return this.callSync(options2 ? this.getCookieString.bind(this, url2, options2) : this.getCookieString.bind(this, url2)) ?? "";
    }
    getSetCookieStrings(url2, options2, callback) {
        if (typeof options2 === "function") {
            callback = options2;
            options2 = void 0;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const next = function(err, cookies) {
            if (err) {
                promiseCallback.callback(err);
            } else {
                promiseCallback.callback(null, cookies?.map((c)=>{
                    return c.toString();
                }));
            }
        };
        this.getCookies(url2, options2, next);
        return promiseCallback.promise;
    }
    getSetCookieStringsSync(url2, options2 = {}) {
        return this.callSync(this.getSetCookieStrings.bind(this, url2, options2)) ?? [];
    }
    serialize(callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        let type2 = this.store.constructor.name;
        if (validators.isObject(type2)) {
            type2 = null;
        }
        const serialized = {
            version: `tough-cookie@${version_1.version}`,
            storeType: type2,
            rejectPublicSuffixes: this.rejectPublicSuffixes,
            enableLooseMode: this.enableLooseMode,
            allowSpecialUseDomain: this.allowSpecialUseDomain,
            prefixSecurity: getNormalizedPrefixSecurity(this.prefixSecurity),
            cookies: []
        };
        if (typeof this.store.getAllCookies !== "function") {
            return promiseCallback.reject(new Error("store does not support getAllCookies and cannot be serialized"));
        }
        this.store.getAllCookies((err, cookies)=>{
            if (err) {
                promiseCallback.callback(err);
                return;
            }
            if (cookies == null) {
                promiseCallback.callback(null, serialized);
                return;
            }
            serialized.cookies = cookies.map((cookie)=>{
                const serializedCookie = cookie.toJSON();
                delete serializedCookie.creationIndex;
                return serializedCookie;
            });
            promiseCallback.callback(null, serialized);
        });
        return promiseCallback.promise;
    }
    serializeSync() {
        return this.callSync((callback)=>{
            this.serialize(callback);
        });
    }
    toJSON() {
        return this.serializeSync();
    }
    _importCookies(serialized, callback) {
        let cookies = void 0;
        if (serialized && typeof serialized === "object" && (0, utils_1.inOperator)("cookies", serialized) && Array.isArray(serialized.cookies)) {
            cookies = serialized.cookies;
        }
        if (!cookies) {
            callback(new Error("serialized jar has no cookies array"), void 0);
            return;
        }
        cookies = cookies.slice();
        const putNext = (err)=>{
            if (err) {
                callback(err, void 0);
                return;
            }
            if (Array.isArray(cookies)) {
                if (!cookies.length) {
                    callback(err, this);
                    return;
                }
                let cookie;
                try {
                    cookie = cookie_1.Cookie.fromJSON(cookies.shift());
                } catch (e) {
                    callback(e instanceof Error ? e : new Error(), void 0);
                    return;
                }
                if (cookie === void 0) {
                    putNext(null);
                    return;
                }
                this.store.putCookie(cookie, putNext);
            }
        };
        putNext(null);
    }
    _importCookiesSync(serialized) {
        this.callSync(this._importCookies.bind(this, serialized));
    }
    clone(newStore, callback) {
        if (typeof newStore === "function") {
            callback = newStore;
            newStore = void 0;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cb = promiseCallback.callback;
        this.serialize((err, serialized)=>{
            if (err) {
                return promiseCallback.reject(err);
            }
            return _CookieJar.deserialize(serialized ?? "", newStore, cb);
        });
        return promiseCallback.promise;
    }
    _cloneSync(newStore) {
        const cloneFn = newStore && typeof newStore !== "function" ? this.clone.bind(this, newStore) : this.clone.bind(this);
        return this.callSync((callback)=>{
            cloneFn(callback);
        });
    }
    cloneSync(newStore) {
        if (!newStore) {
            return this._cloneSync();
        }
        if (!newStore.synchronous) {
            throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
        }
        return this._cloneSync(newStore);
    }
    removeAllCookies(callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cb = promiseCallback.callback;
        const store = this.store;
        if (typeof store.removeAllCookies === "function" && store.removeAllCookies !== store_1.Store.prototype.removeAllCookies) {
            store.removeAllCookies(cb);
            return promiseCallback.promise;
        }
        store.getAllCookies((err, cookies)=>{
            if (err) {
                cb(err);
                return;
            }
            if (!cookies) {
                cookies = [];
            }
            if (cookies.length === 0) {
                cb(null, void 0);
                return;
            }
            let completedCount = 0;
            const removeErrors = [];
            const removeCookieCb = function removeCookieCb2(removeErr) {
                if (removeErr) {
                    removeErrors.push(removeErr);
                }
                completedCount++;
                if (completedCount === cookies.length) {
                    if (removeErrors[0]) cb(removeErrors[0]);
                    else cb(null, void 0);
                    return;
                }
            };
            cookies.forEach((cookie)=>{
                store.removeCookie(cookie.domain, cookie.path, cookie.key, removeCookieCb);
            });
        });
        return promiseCallback.promise;
    }
    removeAllCookiesSync() {
        this.callSync((callback)=>{
            this.removeAllCookies(callback);
        });
    }
    static deserialize(strOrObj, store, callback) {
        if (typeof store === "function") {
            callback = store;
            store = void 0;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        let serialized;
        if (typeof strOrObj === "string") {
            try {
                serialized = JSON.parse(strOrObj);
            } catch (e) {
                return promiseCallback.reject(e instanceof Error ? e : new Error());
            }
        } else {
            serialized = strOrObj;
        }
        const readSerializedProperty = (property)=>{
            return serialized && typeof serialized === "object" && (0, utils_1.inOperator)(property, serialized) ? serialized[property] : void 0;
        };
        const readSerializedBoolean = (property)=>{
            const value = readSerializedProperty(property);
            return typeof value === "boolean" ? value : void 0;
        };
        const readSerializedString = (property)=>{
            const value = readSerializedProperty(property);
            return typeof value === "string" ? value : void 0;
        };
        const jar = new _CookieJar(store, {
            rejectPublicSuffixes: readSerializedBoolean("rejectPublicSuffixes"),
            looseMode: readSerializedBoolean("enableLooseMode"),
            allowSpecialUseDomain: readSerializedBoolean("allowSpecialUseDomain"),
            prefixSecurity: getNormalizedPrefixSecurity(readSerializedString("prefixSecurity") ?? "silent")
        });
        jar._importCookies(serialized, (err)=>{
            if (err) {
                promiseCallback.callback(err);
                return;
            }
            promiseCallback.callback(null, jar);
        });
        return promiseCallback.promise;
    }
    static deserializeSync(strOrObj, store) {
        const serialized = typeof strOrObj === "string" ? JSON.parse(strOrObj) : strOrObj;
        const readSerializedProperty = (property)=>{
            return serialized && typeof serialized === "object" && (0, utils_1.inOperator)(property, serialized) ? serialized[property] : void 0;
        };
        const readSerializedBoolean = (property)=>{
            const value = readSerializedProperty(property);
            return typeof value === "boolean" ? value : void 0;
        };
        const readSerializedString = (property)=>{
            const value = readSerializedProperty(property);
            return typeof value === "string" ? value : void 0;
        };
        const jar = new _CookieJar(store, {
            rejectPublicSuffixes: readSerializedBoolean("rejectPublicSuffixes"),
            looseMode: readSerializedBoolean("enableLooseMode"),
            allowSpecialUseDomain: readSerializedBoolean("allowSpecialUseDomain"),
            prefixSecurity: getNormalizedPrefixSecurity(readSerializedString("prefixSecurity") ?? "silent")
        });
        if (!jar.store.synchronous) {
            throw new Error("CookieJar store is not synchronous; use async API instead.");
        }
        jar._importCookiesSync(serialized);
        return jar;
    }
    static fromJSON(jsonString, store) {
        return _CookieJar.deserializeSync(jsonString, store);
    }
};
exports2.CookieJar = CookieJar;

return exports2;
}
