import { require_canonicalDomain } from "./canonicalDomain.js";
import { require_formatDate } from "./formatDate.js";
import { require_parseDate } from "./parseDate.js";
import { require_getPublicSuffix } from "../getPublicSuffix.js";
import { require_utils2 } from "../utils.js";
import { require_validators } from "../validators.js";
var __wakaru_require_cookie_cache;
export function require_cookie() {
if (__wakaru_require_cookie_cache) return __wakaru_require_cookie_cache;
var exports2 = {};
__wakaru_require_cookie_cache = exports2;
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
exports2.Cookie = void 0;
var getPublicSuffix_1 = require_getPublicSuffix();
var validators = __importStar(require_validators());
var utils_1 = require_utils2();
var formatDate_1 = require_formatDate();
var parseDate_1 = require_parseDate();
var canonicalDomain_1 = require_canonicalDomain();
var COOKIE_OCTETS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;
var PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/;
var CONTROL_CHARS = /[\x00-\x1F]/;
var TERMINATORS = [
    "\n",
    "\r",
    "\0"
];
function trimTerminator(str3) {
    if (validators.isEmptyString(str3)) return str3;
    for(let t = 0; t < TERMINATORS.length; t++){
        const terminator = TERMINATORS[t];
        const terminatorIdx = terminator ? str3.indexOf(terminator) : -1;
        if (terminatorIdx !== -1) {
            str3 = str3.slice(0, terminatorIdx);
        }
    }
    return str3;
}
function parseCookiePair(cookiePair, looseMode) {
    cookiePair = trimTerminator(cookiePair);
    let firstEq = cookiePair.indexOf("=");
    if (looseMode) {
        if (firstEq === 0) {
            cookiePair = cookiePair.substring(1);
            firstEq = cookiePair.indexOf("=");
        }
    } else {
        if (firstEq <= 0) {
            return void 0;
        }
    }
    let cookieName, cookieValue;
    if (firstEq <= 0) {
        cookieName = "";
        cookieValue = cookiePair.trim();
    } else {
        cookieName = cookiePair.slice(0, firstEq).trim();
        cookieValue = cookiePair.slice(firstEq + 1).trim();
    }
    if (CONTROL_CHARS.test(cookieName) || CONTROL_CHARS.test(cookieValue)) {
        return void 0;
    }
    const c = new Cookie();
    c.key = cookieName;
    c.value = cookieValue;
    return c;
}
function parse11(str3, options2) {
    if (validators.isEmptyString(str3) || !validators.isString(str3)) {
        return void 0;
    }
    str3 = str3.trim();
    const firstSemi = str3.indexOf(";");
    const cookiePair = firstSemi === -1 ? str3 : str3.slice(0, firstSemi);
    const c = parseCookiePair(cookiePair, options2?.loose ?? false);
    if (!c) {
        return void 0;
    }
    if (firstSemi === -1) {
        return c;
    }
    const unparsed = str3.slice(firstSemi + 1).trim();
    if (unparsed.length === 0) {
        return c;
    }
    const cookie_avs = unparsed.split(";");
    while(cookie_avs.length){
        const av = (cookie_avs.shift() ?? "").trim();
        if (av.length === 0) {
            continue;
        }
        const av_sep = av.indexOf("=");
        let av_key, av_value;
        if (av_sep === -1) {
            av_key = av;
            av_value = null;
        } else {
            av_key = av.slice(0, av_sep);
            av_value = av.slice(av_sep + 1);
        }
        av_key = av_key.trim().toLowerCase();
        if (av_value) {
            av_value = av_value.trim();
        }
        switch(av_key){
            case "expires":
                if (av_value) {
                    const exp = (0, parseDate_1.parseDate)(av_value);
                    if (exp) {
                        c.expires = exp;
                    }
                }
                break;
            case "max-age":
                if (av_value) {
                    if (/^-?[0-9]+$/.test(av_value)) {
                        const delta = parseInt(av_value, 10);
                        c.setMaxAge(delta);
                    }
                }
                break;
            case "domain":
                if (av_value) {
                    const domain = av_value.trim().replace(/^\./, "");
                    if (domain) {
                        c.domain = domain.toLowerCase();
                    }
                }
                break;
            case "path":
                c.path = av_value && av_value[0] === "/" ? av_value : null;
                break;
            case "secure":
                c.secure = true;
                break;
            case "httponly":
                c.httpOnly = true;
                break;
            case "samesite":
                switch(av_value ? av_value.toLowerCase() : ""){
                    case "strict":
                        c.sameSite = "strict";
                        break;
                    case "lax":
                        c.sameSite = "lax";
                        break;
                    case "none":
                        c.sameSite = "none";
                        break;
                    default:
                        c.sameSite = void 0;
                        break;
                }
                break;
            default:
                c.extensions = c.extensions || [];
                c.extensions.push(av);
                break;
        }
    }
    return c;
}
function fromJSON(str3) {
    if (!str3 || validators.isEmptyString(str3)) {
        return void 0;
    }
    let obj;
    if (typeof str3 === "string") {
        try {
            obj = JSON.parse(str3);
        } catch  {
            return void 0;
        }
    } else {
        obj = str3;
    }
    const c = new Cookie();
    Cookie.serializableProperties.forEach((prop)=>{
        if (obj && typeof obj === "object" && (0, utils_1.inOperator)(prop, obj)) {
            const val = obj[prop];
            if (val === void 0) {
                return;
            }
            if ((0, utils_1.inOperator)(prop, cookieDefaults) && val === cookieDefaults[prop]) {
                return;
            }
            switch(prop){
                case "key":
                case "value":
                case "sameSite":
                    if (typeof val === "string") {
                        c[prop] = val;
                    }
                    break;
                case "expires":
                case "creation":
                case "lastAccessed":
                    if (typeof val === "number" || typeof val === "string" || val instanceof Date) {
                        c[prop] = obj[prop] == "Infinity" ? "Infinity" : new Date(val);
                    } else if (val === null) {
                        c[prop] = null;
                    }
                    break;
                case "maxAge":
                    if (typeof val === "number" || val === "Infinity" || val === "-Infinity") {
                        c[prop] = val;
                    }
                    break;
                case "domain":
                case "path":
                    if (typeof val === "string" || val === null) {
                        c[prop] = val;
                    }
                    break;
                case "secure":
                case "httpOnly":
                    if (typeof val === "boolean") {
                        c[prop] = val;
                    }
                    break;
                case "extensions":
                    if (Array.isArray(val) && val.every((item)=>typeof item === "string")) {
                        c[prop] = val;
                    }
                    break;
                case "hostOnly":
                case "pathIsDefault":
                    if (typeof val === "boolean" || val === null) {
                        c[prop] = val;
                    }
                    break;
            }
        }
    });
    return c;
}
var cookieDefaults = {
    key: "",
    value: "",
    expires: "Infinity",
    maxAge: null,
    domain: null,
    path: null,
    secure: false,
    httpOnly: false,
    extensions: null,
    hostOnly: null,
    pathIsDefault: null,
    creation: null,
    lastAccessed: null,
    sameSite: void 0
};
var Cookie = class _Cookie {
    constructor(options2 = {}){
        this.key = options2.key ?? cookieDefaults.key;
        this.value = options2.value ?? cookieDefaults.value;
        this.expires = options2.expires ?? cookieDefaults.expires;
        this.maxAge = options2.maxAge ?? cookieDefaults.maxAge;
        this.domain = options2.domain ?? cookieDefaults.domain;
        this.path = options2.path ?? cookieDefaults.path;
        this.secure = options2.secure ?? cookieDefaults.secure;
        this.httpOnly = options2.httpOnly ?? cookieDefaults.httpOnly;
        this.extensions = options2.extensions ?? cookieDefaults.extensions;
        this.creation = options2.creation ?? cookieDefaults.creation;
        this.hostOnly = options2.hostOnly ?? cookieDefaults.hostOnly;
        this.pathIsDefault = options2.pathIsDefault ?? cookieDefaults.pathIsDefault;
        this.lastAccessed = options2.lastAccessed ?? cookieDefaults.lastAccessed;
        this.sameSite = options2.sameSite ?? cookieDefaults.sameSite;
        this.creation = options2.creation ?? new Date();
        Object.defineProperty(this, "creationIndex", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: ++_Cookie.cookiesCreated
        });
        this.creationIndex = _Cookie.cookiesCreated;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        const now2 = Date.now();
        const hostOnly = this.hostOnly != null ? this.hostOnly.toString() : "?";
        const createAge = this.creation && this.creation !== "Infinity" ? `${String(now2 - this.creation.getTime())}ms` : "?";
        const accessAge = this.lastAccessed && this.lastAccessed !== "Infinity" ? `${String(now2 - this.lastAccessed.getTime())}ms` : "?";
        return `Cookie="${this.toString()}; hostOnly=${hostOnly}; aAge=${accessAge}; cAge=${createAge}"`;
    }
    toJSON() {
        const obj = {};
        for (const prop of _Cookie.serializableProperties){
            const val = this[prop];
            if (val === cookieDefaults[prop]) {
                continue;
            }
            switch(prop){
                case "key":
                case "value":
                case "sameSite":
                    if (typeof val === "string") {
                        obj[prop] = val;
                    }
                    break;
                case "expires":
                case "creation":
                case "lastAccessed":
                    if (typeof val === "number" || typeof val === "string" || val instanceof Date) {
                        obj[prop] = val == "Infinity" ? "Infinity" : new Date(val).toISOString();
                    } else if (val === null) {
                        obj[prop] = null;
                    }
                    break;
                case "maxAge":
                    if (typeof val === "number" || val === "Infinity" || val === "-Infinity") {
                        obj[prop] = val;
                    }
                    break;
                case "domain":
                case "path":
                    if (typeof val === "string" || val === null) {
                        obj[prop] = val;
                    }
                    break;
                case "secure":
                case "httpOnly":
                    if (typeof val === "boolean") {
                        obj[prop] = val;
                    }
                    break;
                case "extensions":
                    if (Array.isArray(val)) {
                        obj[prop] = val;
                    }
                    break;
                case "hostOnly":
                case "pathIsDefault":
                    if (typeof val === "boolean" || val === null) {
                        obj[prop] = val;
                    }
                    break;
            }
        }
        return obj;
    }
    clone() {
        return fromJSON(this.toJSON());
    }
    validate() {
        if (!this.value || !COOKIE_OCTETS.test(this.value)) {
            return false;
        }
        if (this.expires != "Infinity" && !(this.expires instanceof Date) && !(0, parseDate_1.parseDate)(this.expires)) {
            return false;
        }
        if (this.maxAge != null && this.maxAge !== "Infinity" && (this.maxAge === "-Infinity" || this.maxAge <= 0)) {
            return false;
        }
        if (this.path != null && !PATH_VALUE.test(this.path)) {
            return false;
        }
        const cdomain = this.cdomain();
        if (cdomain) {
            if (cdomain.match(/\.$/)) {
                return false;
            }
            const suffix = (0, getPublicSuffix_1.getPublicSuffix)(cdomain);
            if (suffix == null) {
                return false;
            }
        }
        return true;
    }
    setExpires(exp) {
        if (exp instanceof Date) {
            this.expires = exp;
        } else {
            this.expires = (0, parseDate_1.parseDate)(exp) || "Infinity";
        }
    }
    setMaxAge(age) {
        if (age === Infinity) {
            this.maxAge = "Infinity";
        } else if (age === -Infinity) {
            this.maxAge = "-Infinity";
        } else {
            this.maxAge = age;
        }
    }
    cookieString() {
        const val = this.value || "";
        if (this.key) {
            return `${this.key}=${val}`;
        }
        return val;
    }
    toString() {
        let str3 = this.cookieString();
        if (this.expires != "Infinity") {
            if (this.expires instanceof Date) {
                str3 += `; Expires=${(0, formatDate_1.formatDate)(this.expires)}`;
            }
        }
        if (this.maxAge != null && this.maxAge != Infinity) {
            str3 += `; Max-Age=${String(this.maxAge)}`;
        }
        if (this.domain && !this.hostOnly) {
            str3 += `; Domain=${this.domain}`;
        }
        if (this.path) {
            str3 += `; Path=${this.path}`;
        }
        if (this.secure) {
            str3 += "; Secure";
        }
        if (this.httpOnly) {
            str3 += "; HttpOnly";
        }
        if (this.sameSite && this.sameSite !== "none") {
            if (this.sameSite.toLowerCase() === _Cookie.sameSiteCanonical.lax.toLowerCase()) {
                str3 += `; SameSite=${_Cookie.sameSiteCanonical.lax}`;
            } else if (this.sameSite.toLowerCase() === _Cookie.sameSiteCanonical.strict.toLowerCase()) {
                str3 += `; SameSite=${_Cookie.sameSiteCanonical.strict}`;
            } else {
                str3 += `; SameSite=${this.sameSite}`;
            }
        }
        if (this.extensions) {
            this.extensions.forEach((ext2)=>{
                str3 += `; ${ext2}`;
            });
        }
        return str3;
    }
    TTL(now2 = Date.now()) {
        if (this.maxAge != null && typeof this.maxAge === "number") {
            return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
        }
        const expires = this.expires;
        if (expires === "Infinity") {
            return Infinity;
        }
        return (expires?.getTime() ?? now2) - (now2 || Date.now());
    }
    expiryTime(now2) {
        if (this.maxAge != null) {
            const relativeTo = now2 || this.lastAccessed || new Date();
            const maxAge = typeof this.maxAge === "number" ? this.maxAge : -Infinity;
            const age = maxAge <= 0 ? -Infinity : maxAge * 1e3;
            if (relativeTo === "Infinity") {
                return Infinity;
            }
            return relativeTo.getTime() + age;
        }
        if (this.expires == "Infinity") {
            return Infinity;
        }
        return this.expires ? this.expires.getTime() : void 0;
    }
    expiryDate(now2) {
        const millisec = this.expiryTime(now2);
        if (millisec == Infinity) {
            return new Date(2147483647e3);
        } else if (millisec == -Infinity) {
            return new Date(0);
        } else {
            return millisec == void 0 ? void 0 : new Date(millisec);
        }
    }
    isPersistent() {
        return this.maxAge != null || this.expires != "Infinity";
    }
    canonicalizedDomain() {
        return (0, canonicalDomain_1.canonicalDomain)(this.domain);
    }
    cdomain() {
        return (0, canonicalDomain_1.canonicalDomain)(this.domain);
    }
    static parse(str3, options2) {
        return parse11(str3, options2);
    }
    static fromJSON(str3) {
        return fromJSON(str3);
    }
};
exports2.Cookie = Cookie;
Cookie.cookiesCreated = 0;
Cookie.sameSiteLevel = {
    strict: 3,
    lax: 2,
    none: 1
};
Cookie.sameSiteCanonical = {
    strict: "Strict",
    lax: "Lax"
};
Cookie.serializableProperties = [
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

return exports2;
}
