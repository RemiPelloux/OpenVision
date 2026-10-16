"use strict";
const { maxNameValuePairSize: a, maxAttributeValueSize: s } = require("./module-1404.js"), { isCTLExcludingHtab: o } = require("./module-6261.js"), { collectASequenceOfCodePointsFast: r } = require("./module-3631.js"), i = require("./module-2613.js");
function A(e, n = {}) {
    if (0 === e.length) return n;
    i(";" === e[0]);
    let t = "";
    (e = e.slice(1)).includes(";") ? (t = r(";", e, {
        position: 0
    }), e = e.slice(t.length)) : (t = e, e = "");
    let a = "", o = "";
    if (t.includes("=")) {
        const e = {
            position: 0
        };
        a = r("=", t, e), o = t.slice(e.position + 1);
    } else a = t;
    if (a = a.trim(), o = o.trim(), o.length > s) return A(e, n);
    const c = a.toLowerCase();
    if ("expires" === c) {
        const e = new Date(o);
        n.expires = e;
    } else if ("max-age" === c) {
        const t = o.charCodeAt(0);
        if ((t < 48 || t > 57) && "-" !== o[0]) return A(e, n);
        if (!/^\d+$/.test(o)) return A(e, n);
        const a = Number(o);
        n.maxAge = a;
    } else if ("domain" === c) {
        let e = o;
        "." === e[0] && (e = e.slice(1)), e = e.toLowerCase(), n.domain = e;
    } else if ("path" === c) {
        let e = "";
        e = 0 === o.length || "/" !== o[0] ? "/" : o, n.path = e;
    } else if ("secure" === c) n.secure = !0;
    else if ("httponly" === c) n.httpOnly = !0;
    else if ("samesite" === c) {
        let e = "Default";
        const t = o.toLowerCase();
        t.includes("none") && (e = "None"), t.includes("strict") && (e = "Strict"), t.includes("lax") && (e = "Lax"), n.sameSite = e;
    } else n.unparsed ??= [], n.unparsed.push(`${a}=${o}`);
    return A(e, n);
}
module.exports = {
    parseSetCookie: function(e) {
        if (o(e)) return null;
        let n = "", t = "", s = "", i = "";
        if (e.includes(";")) {
            const a = {
                position: 0
            };
            n = r(";", e, a), t = e.slice(a.position);
        } else n = e;
        if (n.includes("=")) {
            const e = {
                position: 0
            };
            s = r("=", n, e), i = n.slice(e.position + 1);
        } else i = n;
        return s = s.trim(), i = i.trim(), s.length + i.length > a ? null : {
            name: s,
            value: i,
            ...A(t)
        };
    },
    parseUnparsedAttributes: A
};
