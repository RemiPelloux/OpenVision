"use strict";
const { maxNameValuePairSize: t, maxAttributeValueSize: s } = require("./module-1404.js"), { isCTLExcludingHtab: o } = require("./module-6261.js"), { collectASequenceOfCodePointsFast: r } = require("./module-3631.js"), i = require("./module-2613.js");
function l(e, a = {}) {
    if (0 === e.length) return a;
    i(";" === e[0]);
    let n = "";
    (e = e.slice(1)).includes(";") ? (n = r(";", e, {
        position: 0
    }), e = e.slice(n.length)) : (n = e, e = "");
    let t = "", o = "";
    if (n.includes("=")) {
        const e = {
            position: 0
        };
        t = r("=", n, e), o = n.slice(e.position + 1);
    } else t = n;
    if (t = t.trim(), o = o.trim(), o.length > s) return l(e, a);
    const d = t.toLowerCase();
    if ("expires" === d) {
        const e = new Date(o);
        a.expires = e;
    } else if ("max-age" === d) {
        const n = o.charCodeAt(0);
        if ((n < 48 || n > 57) && "-" !== o[0]) return l(e, a);
        if (!/^\d+$/.test(o)) return l(e, a);
        const t = Number(o);
        a.maxAge = t;
    } else if ("domain" === d) {
        let e = o;
        "." === e[0] && (e = e.slice(1)), e = e.toLowerCase(), a.domain = e;
    } else if ("path" === d) {
        let e = "";
        e = 0 === o.length || "/" !== o[0] ? "/" : o, a.path = e;
    } else if ("secure" === d) a.secure = !0;
    else if ("httponly" === d) a.httpOnly = !0;
    else if ("samesite" === d) {
        let e = "Default";
        const n = o.toLowerCase();
        n.includes("none") && (e = "None"), n.includes("strict") && (e = "Strict"), n.includes("lax") && (e = "Lax"), a.sameSite = e;
    } else a.unparsed ??= [], a.unparsed.push(`${t}=${o}`);
    return l(e, a);
}
module.exports = {
    parseSetCookie: function(e) {
        if (o(e)) return null;
        let a = "", n = "", s = "", i = "";
        if (e.includes(";")) {
            const t = {
                position: 0
            };
            a = r(";", e, t), n = e.slice(t.position);
        } else a = e;
        if (a.includes("=")) {
            const e = {
                position: 0
            };
            s = r("=", a, e), i = a.slice(e.position + 1);
        } else i = a;
        return s = s.trim(), i = i.trim(), s.length + i.length > t ? null : {
            name: s,
            value: i,
            ...l(n)
        };
    },
    parseUnparsedAttributes: l
};
