"use strict";
function e(A) {
    for(let e = 0; e < A.length; ++e){
        const t = A.charCodeAt(e);
        if (t < 33 || t > 126 || 34 === t || 40 === t || 41 === t || 60 === t || 62 === t || 64 === t || 44 === t || 59 === t || 58 === t || 92 === t || 47 === t || 91 === t || 93 === t || 63 === t || 61 === t || 123 === t || 125 === t) throw new Error("Invalid cookie name");
    }
}
function t(A) {
    let e = A.length, t = 0;
    if ('"' === A[0]) {
        if (1 === e || '"' !== A[e - 1]) throw new Error("Invalid cookie value");
        --e, ++t;
    }
    for(; t < e;){
        const e = A.charCodeAt(t++);
        if (e < 33 || e > 126 || 34 === e || 44 === e || 59 === e || 92 === e) throw new Error("Invalid cookie value");
    }
}
function r(A) {
    for(let e = 0; e < A.length; ++e){
        const t = A.charCodeAt(e);
        if (t < 32 || t > 126 || 59 === t) throw new Error("Invalid cookie path");
    }
}
function s(A) {
    return A >= 48 && A <= 57 || A >= 65 && A <= 90 || A >= 97 && A <= 122;
}
const o = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
], n = [
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
], i = Array(61).fill(0).map((A, e)=>e.toString().padStart(2, "0"));
function a(A) {
    return "number" == typeof A && (A = new Date(A)), `${o[A.getUTCDay()]}, ${i[A.getUTCDate()]} ${n[A.getUTCMonth()]} ${A.getUTCFullYear()} ${i[A.getUTCHours()]}:${i[A.getUTCMinutes()]}:${i[A.getUTCSeconds()]} GMT`;
}
module.exports = {
    isCTLExcludingHtab: function(A) {
        for(let e = 0; e < A.length; ++e){
            const t = A.charCodeAt(e);
            if (t >= 0 && t <= 8 || t >= 10 && t <= 31 || 127 === t) return !0;
        }
        return !1;
    },
    validateCookieName: e,
    validateCookiePath: r,
    validateCookieValue: t,
    toIMFDate: a,
    stringify: function(A) {
        if (0 === A.name.length) return null;
        e(A.name), t(A.value);
        const o = [
            `${A.name}=${A.value}`
        ];
        A.name.startsWith("__Secure-") && (A.secure = !0), A.name.startsWith("__Host-") && (A.secure = !0, A.domain = null, A.path = "/"), A.secure && o.push("Secure"), A.httpOnly && o.push("HttpOnly"), "number" == typeof A.maxAge && (!function(A) {
            if (A < 0) throw new Error("Invalid cookie max-age");
        }(A.maxAge), o.push(`Max-Age=${A.maxAge}`)), A.domain && (!function(A) {
            if (" " === A) return;
            if (A.length > 255) throw new Error("Invalid cookie domain");
            let e = 0;
            for(let t = 0; t < A.length; ++t){
                const r = A.charCodeAt(t);
                if (46 !== r) {
                    if (0 === e && !s(r)) throw new Error("Invalid cookie domain");
                    if (!s(r) && 45 !== r) throw new Error("Invalid cookie domain");
                    if (++e > 63) throw new Error("Invalid cookie domain");
                } else {
                    if (0 === e) throw new Error("Invalid cookie domain");
                    if (45 === A.charCodeAt(t - 1)) throw new Error("Invalid cookie domain");
                    e = 0;
                }
            }
            if (0 === e || 45 === A.charCodeAt(A.length - 1)) throw new Error("Invalid cookie domain");
        }(A.domain), o.push(`Domain=${A.domain}`)), A.path && (r(A.path), o.push(`Path=${A.path}`)), A.expires && "Invalid Date" !== A.expires.toString() && o.push(`Expires=${a(A.expires)}`), A.sameSite && o.push(`SameSite=${A.sameSite}`);
        for (const r of A.unparsed){
            if (!r.includes("=")) throw new Error("Invalid unparsed");
            const [A, ...s] = r.split("="), n = A.trim(), i = s.join("=");
            e(n), t(i), o.push(`${n}=${i}`);
        }
        return o.join("; ");
    }
};
