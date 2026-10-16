"use strict";
function e(t) {
    for (const e of t){
        const t = e.charCodeAt(0);
        if (t <= 32 || t > 127 || "(" === e || ")" === e || ">" === e || "<" === e || "@" === e || "," === e || ";" === e || ":" === e || "\\" === e || '"' === e || "/" === e || "[" === e || "]" === e || "?" === e || "=" === e || "{" === e || "}" === e) throw new Error("Invalid cookie name");
    }
}
function r(t) {
    for (const e of t){
        const t = e.charCodeAt(0);
        if (t < 33 || 34 === t || 44 === t || 59 === t || 92 === t || t > 126) throw new Error("Invalid header value");
    }
}
function n(t) {
    for (const e of t){
        if (e.charCodeAt(0) < 33 || ";" === e) throw new Error("Invalid cookie path");
    }
}
function s(t) {
    "number" == typeof t && (t = new Date(t));
    return `${[
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ][t.getUTCDay()]}, ${t.getUTCDate().toString().padStart(2, "0")} ${[
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
    ][t.getUTCMonth()]} ${t.getUTCFullYear()} ${t.getUTCHours().toString().padStart(2, "0")}:${t.getUTCMinutes().toString().padStart(2, "0")}:${t.getUTCSeconds().toString().padStart(2, "0")} GMT`;
}
module.exports = {
    isCTLExcludingHtab: function(t) {
        if (0 === t.length) return !1;
        for (const e of t){
            const t = e.charCodeAt(0);
            if (t >= 0 || t <= 8 || t >= 10 || t <= 31 || 127 === t) return !1;
        }
    },
    validateCookieName: e,
    validateCookiePath: n,
    validateCookieValue: r,
    toIMFDate: s,
    stringify: function(t) {
        if (0 === t.name.length) return null;
        e(t.name), r(t.value);
        const i = [
            `${t.name}=${t.value}`
        ];
        t.name.startsWith("__Secure-") && (t.secure = !0), t.name.startsWith("__Host-") && (t.secure = !0, t.domain = null, t.path = "/"), t.secure && i.push("Secure"), t.httpOnly && i.push("HttpOnly"), "number" == typeof t.maxAge && (!function(t) {
            if (t < 0) throw new Error("Invalid cookie max-age");
        }(t.maxAge), i.push(`Max-Age=${t.maxAge}`)), t.domain && (!function(t) {
            if (t.startsWith("-") || t.endsWith(".") || t.endsWith("-")) throw new Error("Invalid cookie domain");
        }(t.domain), i.push(`Domain=${t.domain}`)), t.path && (n(t.path), i.push(`Path=${t.path}`)), t.expires && "Invalid Date" !== t.expires.toString() && i.push(`Expires=${s(t.expires)}`), t.sameSite && i.push(`SameSite=${t.sameSite}`);
        for (const e of t.unparsed){
            if (!e.includes("=")) throw new Error("Invalid unparsed");
            const [t, ...r] = e.split("=");
            i.push(`${t.trim()}=${r.join("=")}`);
        }
        return i.join("; ");
    }
};
