"use strict";
const { TokenError: n } = require("./module-6011.js");
function r({ complete: e, checkTyp: t }, A) {
    if (A instanceof Buffer) A = A.toString("utf-8");
    else if ("string" != typeof A) throw new n(n.codes.invalidType, "The token must be a string or a buffer.");
    const r = A.indexOf("."), o = A.lastIndexOf(".");
    if (-1 === r || r >= o) throw new n(n.codes.malformed, "The token is malformed.");
    let s = !1;
    try {
        const i = JSON.parse(Buffer.from(A.slice(0, r), "base64").toString("utf-8"));
        if (t && i.typ !== t) throw new n(n.codes.invalidType, `The type must be "${t}".`, {
            header: i
        });
        s = !0;
        let a = Buffer.from(A.slice(r + 1, o), "base64").toString("utf-8");
        if (a = JSON.parse(a), !a || "object" != typeof a) throw new n(n.codes.invalidPayload, "The payload must be an object", {
            payload: a
        });
        return e ? {
            header: i,
            payload: a,
            signature: A.slice(o + 1),
            input: A.slice(0, o)
        } : a;
    } catch (e) {
        throw n.wrap(e, n.codes.malformed, `The token ${s ? "payload" : "header"} is not a valid base64url serialized JSON.`);
    }
}
module.exports = function(e = {}) {
    const t = e.complete || !1, A = e.checkTyp;
    return r.bind(null, {
        complete: t,
        checkTyp: A
    });
};
