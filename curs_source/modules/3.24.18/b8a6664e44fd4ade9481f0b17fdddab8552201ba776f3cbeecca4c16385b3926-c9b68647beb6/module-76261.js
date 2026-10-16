"use strict";
function e(A) {
    for (const e of A){
        const A = e.charCodeAt(0);
        if (A <= 32 || A > 127 || "(" === e || ")" === e || ">" === e || "<" === e || "@" === e || "," === e || ";" === e || ":" === e || "\\" === e || '"' === e || "/" === e || "[" === e || "]" === e || "?" === e || "=" === e || "{" === e || "}" === e) throw new Error("Invalid cookie name");
    }
}
function t(A) {
    for (const e of A){
        const A = e.charCodeAt(0);
        if (A < 33 || 34 === A || 44 === A || 59 === A || 92 === A || A > 126) throw new Error("Invalid header value");
    }
}
function r(A) {
    for (const e of A){
        if (e.charCodeAt(0) < 33 || ";" === e) throw new Error("Invalid cookie path");
    }
}
function s(A) {
    "number" == typeof A && (A = new Date(A));
    return `${[
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ][A.getUTCDay()]}, ${A.getUTCDate().toString().padStart(2, "0")} ${[
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
    ][A.getUTCMonth()]} ${A.getUTCFullYear()} ${A.getUTCHours().toString().padStart(2, "0")}:${A.getUTCMinutes().toString().padStart(2, "0")}:${A.getUTCSeconds().toString().padStart(2, "0")} GMT`;
}
module.exports = {
    isCTLExcludingHtab: function(A) {
        if (0 === A.length) return !1;
        for (const e of A){
            const A = e.charCodeAt(0);
            if (A >= 0 || A <= 8 || A >= 10 || A <= 31 || 127 === A) return !1;
        }
    },
    validateCookieName: e,
    validateCookiePath: r,
    validateCookieValue: t,
    toIMFDate: s,
    stringify: function(A) {
        if (0 === A.name.length) return null;
        e(A.name), t(A.value);
        const o = [
            `${A.name}=${A.value}`
        ];
        A.name.startsWith("__Secure-") && (A.secure = !0), A.name.startsWith("__Host-") && (A.secure = !0, A.domain = null, A.path = "/"), A.secure && o.push("Secure"), A.httpOnly && o.push("HttpOnly"), "number" == typeof A.maxAge && (!function(A) {
            if (A < 0) throw new Error("Invalid cookie max-age");
        }(A.maxAge), o.push(`Max-Age=${A.maxAge}`)), A.domain && (!function(A) {
            if (A.startsWith("-") || A.endsWith(".") || A.endsWith("-")) throw new Error("Invalid cookie domain");
        }(A.domain), o.push(`Domain=${A.domain}`)), A.path && (r(A.path), o.push(`Path=${A.path}`)), A.expires && "Invalid Date" !== A.expires.toString() && o.push(`Expires=${s(A.expires)}`), A.sameSite && o.push(`SameSite=${A.sameSite}`);
        for (const e of A.unparsed){
            if (!e.includes("=")) throw new Error("Invalid unparsed");
            const [A, ...t] = e.split("=");
            o.push(`${A.trim()}=${t.join("=")}`);
        }
        return o.join("; ");
    }
};
