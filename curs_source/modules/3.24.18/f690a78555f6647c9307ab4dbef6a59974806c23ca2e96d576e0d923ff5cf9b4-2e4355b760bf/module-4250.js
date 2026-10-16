"use strict";
const { maxNameValuePairSize: n, maxAttributeValueSize: r } = require("./module-1404.js"), { isCTLExcludingHtab: o } = require("./module-6261.js"), { collectASequenceOfCodePointsFast: s } = require("./module-3631.js"), a = require("./module-2613.js");
function i(e, A = {}) {
    if (0 === e.length) return A;
    a(";" === e[0]);
    let t = "";
    (e = e.slice(1)).includes(";") ? (t = s(";", e, {
        position: 0
    }), e = e.slice(t.length)) : (t = e, e = "");
    let n = "", o = "";
    if (t.includes("=")) {
        const e = {
            position: 0
        };
        n = s("=", t, e), o = t.slice(e.position + 1);
    } else n = t;
    if (n = n.trim(), o = o.trim(), o.length > r) return i(e, A);
    const c = n.toLowerCase();
    if ("expires" === c) {
        const e = new Date(o);
        A.expires = e;
    } else if ("max-age" === c) {
        const t = o.charCodeAt(0);
        if ((t < 48 || t > 57) && "-" !== o[0]) return i(e, A);
        if (!/^\d+$/.test(o)) return i(e, A);
        const n = Number(o);
        A.maxAge = n;
    } else if ("domain" === c) {
        let e = o;
        "." === e[0] && (e = e.slice(1)), e = e.toLowerCase(), A.domain = e;
    } else if ("path" === c) {
        let e = "";
        e = 0 === o.length || "/" !== o[0] ? "/" : o, A.path = e;
    } else if ("secure" === c) A.secure = !0;
    else if ("httponly" === c) A.httpOnly = !0;
    else if ("samesite" === c) {
        let e = "Default";
        const t = o.toLowerCase();
        t.includes("none") && (e = "None"), t.includes("strict") && (e = "Strict"), t.includes("lax") && (e = "Lax"), A.sameSite = e;
    } else A.unparsed ??= [], A.unparsed.push(`${n}=${o}`);
    return i(e, A);
}
module.exports = {
    parseSetCookie: function(e) {
        if (o(e)) return null;
        let A = "", t = "", r = "", a = "";
        if (e.includes(";")) {
            const n = {
                position: 0
            };
            A = s(";", e, n), t = e.slice(n.position);
        } else A = e;
        if (A.includes("=")) {
            const e = {
                position: 0
            };
            r = s("=", A, e), a = A.slice(e.position + 1);
        } else a = A;
        return r = r.trim(), a = a.trim(), r.length + a.length > n ? null : {
            name: r,
            value: a,
            ...i(t)
        };
    },
    parseUnparsedAttributes: i
};
