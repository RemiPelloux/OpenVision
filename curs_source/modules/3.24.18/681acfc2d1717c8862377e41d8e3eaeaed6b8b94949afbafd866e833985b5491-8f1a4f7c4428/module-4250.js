"use strict";
const { maxNameValuePairSize: n, maxAttributeValueSize: r } = require("./module-1404.js"), { isCTLExcludingHtab: o } = require("./module-6261.js"), { collectASequenceOfCodePointsFast: s } = require("./module-3631.js"), i = require("./module-2613.js");
function a(e, t = {}) {
    if (0 === e.length) return t;
    i(";" === e[0]);
    let A = "";
    (e = e.slice(1)).includes(";") ? (A = s(";", e, {
        position: 0
    }), e = e.slice(A.length)) : (A = e, e = "");
    let n = "", o = "";
    if (A.includes("=")) {
        const e = {
            position: 0
        };
        n = s("=", A, e), o = A.slice(e.position + 1);
    } else n = A;
    if (n = n.trim(), o = o.trim(), o.length > r) return a(e, t);
    const c = n.toLowerCase();
    if ("expires" === c) {
        const e = new Date(o);
        t.expires = e;
    } else if ("max-age" === c) {
        const A = o.charCodeAt(0);
        if ((A < 48 || A > 57) && "-" !== o[0]) return a(e, t);
        if (!/^\d+$/.test(o)) return a(e, t);
        const n = Number(o);
        t.maxAge = n;
    } else if ("domain" === c) {
        let e = o;
        "." === e[0] && (e = e.slice(1)), e = e.toLowerCase(), t.domain = e;
    } else if ("path" === c) {
        let e = "";
        e = 0 === o.length || "/" !== o[0] ? "/" : o, t.path = e;
    } else if ("secure" === c) t.secure = !0;
    else if ("httponly" === c) t.httpOnly = !0;
    else if ("samesite" === c) {
        let e = "Default";
        const A = o.toLowerCase();
        A.includes("none") && (e = "None"), A.includes("strict") && (e = "Strict"), A.includes("lax") && (e = "Lax"), t.sameSite = e;
    } else t.unparsed ??= [], t.unparsed.push(`${n}=${o}`);
    return a(e, t);
}
module.exports = {
    parseSetCookie: function(e) {
        if (o(e)) return null;
        let t = "", A = "", r = "", i = "";
        if (e.includes(";")) {
            const n = {
                position: 0
            };
            t = s(";", e, n), A = e.slice(n.position);
        } else t = e;
        if (t.includes("=")) {
            const e = {
                position: 0
            };
            r = s("=", t, e), i = t.slice(e.position + 1);
        } else i = t;
        return r = r.trim(), i = i.trim(), r.length + i.length > n ? null : {
            name: r,
            value: i,
            ...a(A)
        };
    },
    parseUnparsedAttributes: a
};
