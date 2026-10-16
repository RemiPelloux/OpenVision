var __wakaru_require_util13_cache;
export function require_util13() {
if (__wakaru_require_util13_cache) return __wakaru_require_util13_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util13_cache = module2;
"use strict";
function isCTLExcludingHtab(value) {
    for(let i = 0; i < value.length; ++i){
        const code = value.charCodeAt(i);
        if (code >= 0 && code <= 8 || code >= 10 && code <= 31 || code === 127) {
            return true;
        }
    }
    return false;
}
function validateCookieName(name17) {
    for(let i = 0; i < name17.length; ++i){
        const code = name17.charCodeAt(i);
        if (code < 33 || code > 126 || code === 34 || code === 40 || code === 41 || code === 60 || code === 62 || code === 64 || code === 44 || code === 59 || code === 58 || code === 92 || code === 47 || code === 91 || code === 93 || code === 63 || code === 61 || code === 123 || code === 125) {
            throw new Error("Invalid cookie name");
        }
    }
}
function validateCookieValue(value) {
    let len = value.length;
    let i = 0;
    if (value[0] === '"') {
        if (len === 1 || value[len - 1] !== '"') {
            throw new Error("Invalid cookie value");
        }
        --len;
        ++i;
    }
    while(i < len){
        const code = value.charCodeAt(i++);
        if (code < 33 || code > 126 || code === 34 || code === 44 || code === 59 || code === 92) {
            throw new Error("Invalid cookie value");
        }
    }
}
function validateCookiePath(path64) {
    for(let i = 0; i < path64.length; ++i){
        const code = path64.charCodeAt(i);
        if (code < 32 || code > 126 || code === 59) {
            throw new Error("Invalid cookie path");
        }
    }
}
function isLetterOrDigit(code) {
    return code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}
function validateCookieDomain(domain) {
    if (domain === " ") {
        return;
    }
    if (domain.length > 255) {
        throw new Error("Invalid cookie domain");
    }
    let labelLength = 0;
    for(let i = 0; i < domain.length; ++i){
        const code = domain.charCodeAt(i);
        if (code === 46) {
            if (labelLength === 0) {
                throw new Error("Invalid cookie domain");
            }
            if (domain.charCodeAt(i - 1) === 45) {
                throw new Error("Invalid cookie domain");
            }
            labelLength = 0;
            continue;
        }
        if (labelLength === 0 && !isLetterOrDigit(code)) {
            throw new Error("Invalid cookie domain");
        }
        if (!isLetterOrDigit(code) && code !== 45) {
            throw new Error("Invalid cookie domain");
        }
        if (++labelLength > 63) {
            throw new Error("Invalid cookie domain");
        }
    }
    if (labelLength === 0 || domain.charCodeAt(domain.length - 1) === 45) {
        throw new Error("Invalid cookie domain");
    }
}
var IMFDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
var IMFMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
var IMFPaddedNumbers = Array(61).fill(0).map((_2, i)=>i.toString().padStart(2, "0"));
function toIMFDate(date4) {
    if (typeof date4 === "number") {
        date4 = new Date(date4);
    }
    return `${IMFDays[date4.getUTCDay()]}, ${IMFPaddedNumbers[date4.getUTCDate()]} ${IMFMonths[date4.getUTCMonth()]} ${date4.getUTCFullYear()} ${IMFPaddedNumbers[date4.getUTCHours()]}:${IMFPaddedNumbers[date4.getUTCMinutes()]}:${IMFPaddedNumbers[date4.getUTCSeconds()]} GMT`;
}
function validateCookieMaxAge(maxAge) {
    if (maxAge < 0) {
        throw new Error("Invalid cookie max-age");
    }
}
function stringify2(cookie) {
    if (cookie.name.length === 0) {
        return null;
    }
    validateCookieName(cookie.name);
    validateCookieValue(cookie.value);
    const out = [
        `${cookie.name}=${cookie.value}`
    ];
    if (cookie.name.startsWith("__Secure-")) {
        cookie.secure = true;
    }
    if (cookie.name.startsWith("__Host-")) {
        cookie.secure = true;
        cookie.domain = null;
        cookie.path = "/";
    }
    if (cookie.secure) {
        out.push("Secure");
    }
    if (cookie.httpOnly) {
        out.push("HttpOnly");
    }
    if (typeof cookie.maxAge === "number") {
        validateCookieMaxAge(cookie.maxAge);
        out.push(`Max-Age=${cookie.maxAge}`);
    }
    if (cookie.domain) {
        validateCookieDomain(cookie.domain);
        out.push(`Domain=${cookie.domain}`);
    }
    if (cookie.path) {
        validateCookiePath(cookie.path);
        out.push(`Path=${cookie.path}`);
    }
    if (cookie.expires && cookie.expires.toString() !== "Invalid Date") {
        out.push(`Expires=${toIMFDate(cookie.expires)}`);
    }
    if (cookie.sameSite) {
        out.push(`SameSite=${cookie.sameSite}`);
    }
    for (const part of cookie.unparsed){
        if (!part.includes("=")) {
            throw new Error("Invalid unparsed");
        }
        const [key, ...value] = part.split("=");
        const trimmedKey = key.trim();
        const joinedValue = value.join("=");
        validateCookieName(trimmedKey);
        validateCookieValue(joinedValue);
        out.push(`${trimmedKey}=${joinedValue}`);
    }
    return out.join("; ");
}
module2.exports = {
    isCTLExcludingHtab,
    validateCookieName,
    validateCookiePath,
    validateCookieValue,
    toIMFDate,
    stringify: stringify2
};

return module2.exports;
}
