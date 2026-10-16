"use strict";
const { maxNameValuePairSize: n, maxAttributeValueSize: s } = require("./module-40360.js"), { isCTLExcludingHtab: o } = require("./module-56233.js"), { collectASequenceOfCodePointsFast: i } = require("./module-64387.js"), a = require("./module-42613.js");
function c(e, t = {}) {
    if (0 === e.length) return t;
    a(";" === e[0]);
    let r = "";
    (e = e.slice(1)).includes(";") ? (r = i(";", e, {
        position: 0
    }), e = e.slice(r.length)) : (r = e, e = "");
    let n = "", o = "";
    if (r.includes("=")) {
        const e = {
            position: 0
        };
        n = i("=", r, e), o = r.slice(e.position + 1);
    } else n = r;
    if (n = n.trim(), o = o.trim(), o.length > s) return c(e, t);
    const l = n.toLowerCase();
    if ("expires" === l) {
        const e = new Date(o);
        t.expires = e;
    } else if ("max-age" === l) {
        const r = o.charCodeAt(0);
        if ((r < 48 || r > 57) && "-" !== o[0]) return c(e, t);
        if (!/^\d+$/.test(o)) return c(e, t);
        const n = Number(o);
        t.maxAge = n;
    } else if ("domain" === l) {
        let e = o;
        "." === e[0] && (e = e.slice(1)), e = e.toLowerCase(), t.domain = e;
    } else if ("path" === l) {
        let e = "";
        e = 0 === o.length || "/" !== o[0] ? "/" : o, t.path = e;
    } else if ("secure" === l) t.secure = !0;
    else if ("httponly" === l) t.httpOnly = !0;
    else if ("samesite" === l) {
        let e = "Default";
        const r = o.toLowerCase();
        r.includes("none") && (e = "None"), r.includes("strict") && (e = "Strict"), r.includes("lax") && (e = "Lax"), t.sameSite = e;
    } else t.unparsed ??= [], t.unparsed.push(`${n}=${o}`);
    return c(e, t);
}
module.exports = {
    parseSetCookie: function(e) {
        if (o(e)) return null;
        let t = "", r = "", s = "", a = "";
        if (e.includes(";")) {
            const n = {
                position: 0
            };
            t = i(";", e, n), r = e.slice(n.position);
        } else t = e;
        if (t.includes("=")) {
            const e = {
                position: 0
            };
            s = i("=", t, e), a = t.slice(e.position + 1);
        } else a = t;
        return s = s.trim(), a = a.trim(), s.length + a.length > n ? null : {
            name: s,
            value: a,
            ...c(r)
        };
    },
    parseUnparsedAttributes: c
};
