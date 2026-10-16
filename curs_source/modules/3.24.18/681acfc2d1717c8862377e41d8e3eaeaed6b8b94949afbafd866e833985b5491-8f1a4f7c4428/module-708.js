"use strict";
const { createHash: n } = require("./module-7598.js"), r = /"alg"\s*:\s*"[HERP]S(256|384)"/m, o = /"alg"\s*:\s*"EdDSA"/m, s = /"crv"\s*:\s*"Ed448"/m;
module.exports = {
    getAsyncKey: function(e, t, A) {
        const n = e(t, A);
        n && "function" == typeof n.then && n.then((e)=>{
            process.nextTick(()=>A(null, e));
        }).catch(A);
    },
    ensurePromiseCallback: function(e) {
        if ("function" == typeof e) return [
            e
        ];
        let t, A;
        return [
            function(e, n) {
                return e ? A(e) : t(n);
            },
            new Promise((e, n)=>{
                t = e, A = n;
            })
        ];
    },
    hashToken: function(e) {
        const t = e.split(".", 1)[0], A = Buffer.from(t, "base64").toString("utf-8");
        let i = null;
        if (A.match(o) && A.match(s)) i = n("shake256", {
            outputLength: 114
        });
        else {
            const e = A.match(r);
            i = n(`sha${e ? e[1] : "512"}`);
        }
        return i.update(e).digest("hex");
    }
};
