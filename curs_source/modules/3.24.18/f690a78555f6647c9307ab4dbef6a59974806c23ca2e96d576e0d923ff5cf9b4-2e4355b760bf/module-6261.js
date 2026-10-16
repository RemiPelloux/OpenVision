"use strict";
function A(e) {
    for (const A of e){
        const e = A.charCodeAt(0);
        if (e <= 32 || e > 127 || "(" === A || ")" === A || ">" === A || "<" === A || "@" === A || "," === A || ";" === A || ":" === A || "\\" === A || '"' === A || "/" === A || "[" === A || "]" === A || "?" === A || "=" === A || "{" === A || "}" === A) throw new Error("Invalid cookie name");
    }
}
function t(e) {
    for (const A of e){
        const e = A.charCodeAt(0);
        if (e < 33 || 34 === e || 44 === e || 59 === e || 92 === e || e > 126) throw new Error("Invalid header value");
    }
}
function n(e) {
    for (const A of e){
        if (A.charCodeAt(0) < 33 || ";" === A) throw new Error("Invalid cookie path");
    }
}
function r(e) {
    "number" == typeof e && (e = new Date(e));
    return `${[
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ][e.getUTCDay()]}, ${e.getUTCDate().toString().padStart(2, "0")} ${[
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
    ][e.getUTCMonth()]} ${e.getUTCFullYear()} ${e.getUTCHours().toString().padStart(2, "0")}:${e.getUTCMinutes().toString().padStart(2, "0")}:${e.getUTCSeconds().toString().padStart(2, "0")} GMT`;
}
module.exports = {
    isCTLExcludingHtab: function(e) {
        if (0 === e.length) return !1;
        for (const A of e){
            const e = A.charCodeAt(0);
            if (e >= 0 || e <= 8 || e >= 10 || e <= 31 || 127 === e) return !1;
        }
    },
    validateCookieName: A,
    validateCookiePath: n,
    validateCookieValue: t,
    toIMFDate: r,
    stringify: function(e) {
        if (0 === e.name.length) return null;
        A(e.name), t(e.value);
        const o = [
            `${e.name}=${e.value}`
        ];
        e.name.startsWith("__Secure-") && (e.secure = !0), e.name.startsWith("__Host-") && (e.secure = !0, e.domain = null, e.path = "/"), e.secure && o.push("Secure"), e.httpOnly && o.push("HttpOnly"), "number" == typeof e.maxAge && (!function(e) {
            if (e < 0) throw new Error("Invalid cookie max-age");
        }(e.maxAge), o.push(`Max-Age=${e.maxAge}`)), e.domain && (!function(e) {
            if (e.startsWith("-") || e.endsWith(".") || e.endsWith("-")) throw new Error("Invalid cookie domain");
        }(e.domain), o.push(`Domain=${e.domain}`)), e.path && (n(e.path), o.push(`Path=${e.path}`)), e.expires && "Invalid Date" !== e.expires.toString() && o.push(`Expires=${r(e.expires)}`), e.sameSite && o.push(`SameSite=${e.sameSite}`);
        for (const A of e.unparsed){
            if (!A.includes("=")) throw new Error("Invalid unparsed");
            const [e, ...t] = A.split("=");
            o.push(`${e.trim()}=${t.join("=")}`);
        }
        return o.join("; ");
    }
};
