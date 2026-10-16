"use strict";
const { maxNameValuePairSize: t, maxAttributeValueSize: s } = require("./module-1404.js"), { isCTLExcludingHtab: o } = require("./module-6261.js"), { collectASequenceOfCodePointsFast: r } = require("./module-3631.js"), i = require("./module-2613.js");
function A(e, n = {}) {
    if (0 === e.length) return n;
    i(";" === e[0]);
    let a = "";
    (e = e.slice(1)).includes(";") ? (a = r(";", e, {
        position: 0
    }), e = e.slice(a.length)) : (a = e, e = "");
    let t = "", o = "";
    if (a.includes("=")) {
        const e = {
            position: 0
        };
        t = r("=", a, e), o = a.slice(e.position + 1);
    } else t = a;
    if (t = t.trim(), o = o.trim(), o.length > s) return A(e, n);
    const l = t.toLowerCase();
    if ("expires" === l) {
        const e = new Date(o);
        n.expires = e;
    } else if ("max-age" === l) {
        const a = o.charCodeAt(0);
        if ((a < 48 || a > 57) && "-" !== o[0]) return A(e, n);
        if (!/^\d+$/.test(o)) return A(e, n);
        const t = Number(o);
        n.maxAge = t;
    } else if ("domain" === l) {
        let e = o;
        "." === e[0] && (e = e.slice(1)), e = e.toLowerCase(), n.domain = e;
    } else if ("path" === l) {
        let e = "";
        e = 0 === o.length || "/" !== o[0] ? "/" : o, n.path = e;
    } else if ("secure" === l) n.secure = !0;
    else if ("httponly" === l) n.httpOnly = !0;
    else if ("samesite" === l) {
        let e = "Default";
        const a = o.toLowerCase();
        a.includes("none") && (e = "None"), a.includes("strict") && (e = "Strict"), a.includes("lax") && (e = "Lax"), n.sameSite = e;
    } else n.unparsed ??= [], n.unparsed.push(`${t}=${o}`);
    return A(e, n);
}
module.exports = {
    parseSetCookie: function(e) {
        if (o(e)) return null;
        let n = "", a = "", s = "", i = "";
        if (e.includes(";")) {
            const t = {
                position: 0
            };
            n = r(";", e, t), a = e.slice(t.position);
        } else n = e;
        if (n.includes("=")) {
            const e = {
                position: 0
            };
            s = r("=", n, e), i = n.slice(e.position + 1);
        } else i = n;
        return s = s.trim(), i = i.trim(), s.length + i.length > t ? null : {
            name: s,
            value: i,
            ...A(a)
        };
    },
    parseUnparsedAttributes: A
};
