"use strict";
const { maxNameValuePairSize: r, maxAttributeValueSize: s } = require("./module-5873.js"), { isCTLExcludingHtab: o } = require("./module-41230.js"), { collectASequenceOfCodePointsFast: n } = require("./module-52603.js"), i = require(56970);
function a(A, e = {}) {
    if (0 === A.length) return e;
    i(";" === A[0]);
    let t = "";
    (A = A.slice(1)).includes(";") ? (t = n(";", A, {
        position: 0
    }), A = A.slice(t.length)) : (t = A, A = "");
    let r = "", o = "";
    if (t.includes("=")) {
        const A = {
            position: 0
        };
        r = n("=", t, A), o = t.slice(A.position + 1);
    } else r = t;
    if (r = r.trim(), o = o.trim(), o.length > s) return a(A, e);
    const Q = r.toLowerCase();
    if ("expires" === Q) {
        const A = new Date(o);
        e.expires = A;
    } else if ("max-age" === Q) {
        const t = o.charCodeAt(0);
        if ((t < 48 || t > 57) && "-" !== o[0]) return a(A, e);
        if (!/^\d+$/.test(o)) return a(A, e);
        const r = Number(o);
        e.maxAge = r;
    } else if ("domain" === Q) {
        let A = o;
        "." === A[0] && (A = A.slice(1)), A = A.toLowerCase(), e.domain = A;
    } else if ("path" === Q) {
        let A = "";
        A = 0 === o.length || "/" !== o[0] ? "/" : o, e.path = A;
    } else if ("secure" === Q) e.secure = !0;
    else if ("httponly" === Q) e.httpOnly = !0;
    else if ("samesite" === Q) {
        const A = o.toLowerCase();
        "none" === A ? e.sameSite = "None" : "strict" === A ? e.sameSite = "Strict" : "lax" === A && (e.sameSite = "Lax");
    } else e.unparsed ??= [], e.unparsed.push(`${r}=${o}`);
    return a(A, e);
}
module.exports = {
    parseSetCookie: function(A) {
        if (o(A)) return null;
        let e = "", t = "", s = "", i = "";
        if (A.includes(";")) {
            const r = {
                position: 0
            };
            e = n(";", A, r), t = A.slice(r.position);
        } else e = A;
        if (e.includes("=")) {
            const A = {
                position: 0
            };
            s = n("=", e, A), i = e.slice(A.position + 1);
        } else i = e;
        return s = s.trim(), i = i.trim(), s.length + i.length > r ? null : {
            name: s,
            value: i,
            ...a(t)
        };
    },
    parseUnparsedAttributes: a
};
