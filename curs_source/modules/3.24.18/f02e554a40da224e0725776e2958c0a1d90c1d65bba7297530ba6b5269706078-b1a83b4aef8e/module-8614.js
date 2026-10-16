"use strict";
const { maxNameValuePairSize: n, maxAttributeValueSize: s } = require("./module-360.js"), { isCTLExcludingHtab: i } = require("./module-6233.js"), { collectASequenceOfCodePointsFast: o } = require("./module-4387.js"), a = require("./module-2613.js");
function u(t, e = {}) {
    if (0 === t.length) return e;
    a(";" === t[0]);
    let r = "";
    (t = t.slice(1)).includes(";") ? (r = o(";", t, {
        position: 0
    }), t = t.slice(r.length)) : (r = t, t = "");
    let n = "", i = "";
    if (r.includes("=")) {
        const t = {
            position: 0
        };
        n = o("=", r, t), i = r.slice(t.position + 1);
    } else n = r;
    if (n = n.trim(), i = i.trim(), i.length > s) return u(t, e);
    const c = n.toLowerCase();
    if ("expires" === c) {
        const t = new Date(i);
        e.expires = t;
    } else if ("max-age" === c) {
        const r = i.charCodeAt(0);
        if ((r < 48 || r > 57) && "-" !== i[0]) return u(t, e);
        if (!/^\d+$/.test(i)) return u(t, e);
        const n = Number(i);
        e.maxAge = n;
    } else if ("domain" === c) {
        let t = i;
        "." === t[0] && (t = t.slice(1)), t = t.toLowerCase(), e.domain = t;
    } else if ("path" === c) {
        let t = "";
        t = 0 === i.length || "/" !== i[0] ? "/" : i, e.path = t;
    } else if ("secure" === c) e.secure = !0;
    else if ("httponly" === c) e.httpOnly = !0;
    else if ("samesite" === c) {
        let t = "Default";
        const r = i.toLowerCase();
        r.includes("none") && (t = "None"), r.includes("strict") && (t = "Strict"), r.includes("lax") && (t = "Lax"), e.sameSite = t;
    } else e.unparsed ??= [], e.unparsed.push(`${n}=${i}`);
    return u(t, e);
}
module.exports = {
    parseSetCookie: function(t) {
        if (i(t)) return null;
        let e = "", r = "", s = "", a = "";
        if (t.includes(";")) {
            const n = {
                position: 0
            };
            e = o(";", t, n), r = t.slice(n.position);
        } else e = t;
        if (e.includes("=")) {
            const t = {
                position: 0
            };
            s = o("=", e, t), a = e.slice(t.position + 1);
        } else a = e;
        return s = s.trim(), a = a.trim(), s.length + a.length > n ? null : {
            name: s,
            value: a,
            ...u(r)
        };
    },
    parseUnparsedAttributes: u
};
