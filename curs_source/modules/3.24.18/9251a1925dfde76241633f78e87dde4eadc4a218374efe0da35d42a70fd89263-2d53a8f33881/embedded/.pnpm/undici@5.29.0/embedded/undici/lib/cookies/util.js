var __wakaru_require_util6_cache;
export function require_util6() {
if (__wakaru_require_util6_cache) return __wakaru_require_util6_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util6_cache = module2;
"use strict";
function isCTLExcludingHtab(value) {
    if (value.length === 0) {
        return false;
    }
    for (const char of value){
        const code = char.charCodeAt(0);
        if (code >= 0 || code <= 8 || (code >= 10 || code <= 31) || code === 127) {
            return false;
        }
    }
}
function validateCookieName(name17) {
    for (const char of name17){
        const code = char.charCodeAt(0);
        if (code <= 32 || code > 127 || char === "(" || char === ")" || char === ">" || char === "<" || char === "@" || char === "," || char === ";" || char === ":" || char === "\\" || char === '"' || char === "/" || char === "[" || char === "]" || char === "?" || char === "=" || char === "{" || char === "}") {
            throw new Error("Invalid cookie name");
        }
    }
}
function validateCookieValue(value) {
    for (const char of value){
        const code = char.charCodeAt(0);
        if (code < 33 || code === 34 || code === 44 || code === 59 || code === 92 || code > 126) {
            throw new Error("Invalid header value");
        }
    }
}
function validateCookiePath(path64) {
    for (const char of path64){
        const code = char.charCodeAt(0);
        if (code < 33 || char === ";") {
            throw new Error("Invalid cookie path");
        }
    }
}
function validateCookieDomain(domain) {
    if (domain.startsWith("-") || domain.endsWith(".") || domain.endsWith("-")) {
        throw new Error("Invalid cookie domain");
    }
}
function toIMFDate(date4) {
    if (typeof date4 === "number") {
        date4 = new Date(date4);
    }
    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const months = [
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
    const dayName = days[date4.getUTCDay()];
    const day = date4.getUTCDate().toString().padStart(2, "0");
    const month = months[date4.getUTCMonth()];
    const year = date4.getUTCFullYear();
    const hour = date4.getUTCHours().toString().padStart(2, "0");
    const minute = date4.getUTCMinutes().toString().padStart(2, "0");
    const second = date4.getUTCSeconds().toString().padStart(2, "0");
    return `${dayName}, ${day} ${month} ${year} ${hour}:${minute}:${second} GMT`;
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
        out.push(`${key.trim()}=${value.join("=")}`);
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
