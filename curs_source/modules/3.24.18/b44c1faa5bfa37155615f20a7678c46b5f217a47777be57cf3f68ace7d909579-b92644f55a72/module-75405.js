"use strict";
require.d(exports, {
    JM: ()=>g,
    LY: ()=>S,
    Mv: ()=>b,
    XJ: ()=>y,
    g2: ()=>E,
    r$: ()=>A,
    zC: ()=>f
});
var n = require("./module-77598.js"), s = require("./module-73024.js"), o = require("./module-76760.js"), i = require("./module-81958.js"), a = require("./module-84990.js");
const c = "manifest.sig", l = "application/vnd.cursor.agent-harness.manifest+json", u = "ecdsa-p256-sha256", d = {
    bytes: 16384,
    signatures: 8,
    keyId: 64,
    algorithm: 64,
    signature: 256
}, p = /^[A-Za-z0-9._-]+$/, m = [
    {
        keyId: "harness-prod-1",
        spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAED+hfLq9Hmi9Lc/tHqO9nNNaKb/Y9UiJ3OJKflOhVsnJck0aLox8SYnE6dY6qgeSv0LAgUNGSBHlEjtr7U5nJ0g=="
    },
    {
        keyId: "harness-standby-1",
        spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErZJDN/jiDTP13zIP1nhdVHUogD5CKlMmFkdtvl7nR7w1ukb0DqavYsrp63pudRGrXoVv2LLUi+TnaHoSQURX+g=="
    }
], h = {
    keyId: "harness-dev-only-1",
    spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEOgqYCkjo2I6HlIeMuNoY5HlRwm0kCWlRqsp6TRpFXDZFyO68/9QfIbQg3vl/V6MAkTKMY0LRzqlrViKpfIRsvA=="
}, f = "--agent-harness-trust-dev-key";
function g(e) {
    return void 0 !== e && void 0 !== (0, a.VW)(e)?.pre;
}
function y({ developmentBuild: e, devKeySwitch: t = !1, clientVersion: r }) {
    return {
        enforce: !0,
        keys: e || t && g(r) ? [
            ...m,
            h
        ] : m
    };
}
const w = (e, t)=>i.Yj().min(1).max(e).regex(t), v = i.Ik({
    schema: i.eu(1),
    payloadType: i.eu(l),
    signatures: i.YO(i.Ik({
        keyId: w(d.keyId, p),
        algorithm: w(d.algorithm, p),
        signature: w(d.signature, /^[A-Za-z0-9+/]+={0,2}$/)
    })).min(1).max(d.signatures)
});
function _(e, t, r) {
    try {
        const s = n.createPublicKey({
            key: Buffer.from(e.spki, "base64"),
            format: "der",
            type: "spki"
        });
        return n.verify("sha256", t, {
            key: s,
            dsaEncoding: "der"
        }, Buffer.from(r, "base64"));
    } catch  {
        return !1;
    }
}
function A({ manifest: e, signature: t, keys: r }) {
    if (void 0 === t) return {
        status: "unsigned"
    };
    const n = function(e) {
        if (e.byteLength > d.bytes) return `${c} is more than ${d.bytes} bytes`;
        let t;
        try {
            t = JSON.parse(Buffer.from(e).toString("utf8"));
        } catch  {
            return `${c} is not JSON`;
        }
        const r = v.safeParse(t);
        if (!r.success) {
            const e = r.error.issues.map((e)=>0 === e.path.length ? e.message : `${e.path.join(".")}: ${e.message}`);
            return `${c} is not a manifest signature: ${e.join("; ")}`;
        }
        return r.data.signatures;
    }(t);
    if ("string" == typeof n) return {
        status: "malformed",
        problem: n
    };
    const s = function(e, t) {
        const r = Buffer.from(e, "utf8");
        return Buffer.concat([
            Buffer.from(`DSSEv1 ${r.length} `, "utf8"),
            r,
            Buffer.from(` ${t.byteLength} `, "utf8"),
            t
        ]);
    }(l, e), o = [], i = [];
    for (const e of n){
        const t = r.find((t)=>t.keyId === e.keyId);
        if (void 0 !== t && e.algorithm === u) {
            if (_(t, s, e.signature)) return {
                status: "valid",
                keyId: t.keyId
            };
            o.push(e.keyId);
        } else i.push(e.keyId);
    }
    return o.length > 0 ? {
        status: "invalid",
        keyIds: o
    } : {
        status: "untrusted",
        keyIds: i
    };
}
function S(e) {
    switch(e.status){
        case "valid":
            return `is signed by ${e.keyId}`;
        case "unsigned":
            return `has no ${c}`;
        case "untrusted":
            return `is signed only by keys this build does not trust (${e.keyIds.join(", ")})`;
        case "invalid":
            return `has a signature from ${e.keyIds.join(", ")} that does not verify over its manifest`;
        case "malformed":
            return `has an unreadable signature: ${e.problem}`;
    }
}
function b(e, t) {
    let r;
    try {
        r = s.lstatSync(e);
    } catch (e) {
        if (e instanceof Error && "code" in e && "ENOENT" === e.code) return;
        throw e;
    }
    if (!r.isFile()) throw new Error(`${o.basename(e)} is not a regular file`);
    const n = s.openSync(e, "r");
    try {
        const e = Math.min(s.fstatSync(n).size, t + 1), r = Buffer.alloc(e);
        let o = 0;
        for(; o < e;){
            const t = s.readSync(n, r, o, e - o, o);
            if (0 === t) break;
            o += t;
        }
        return r.subarray(0, o);
    } finally{
        s.closeSync(n);
    }
}
function E(e) {
    return b(o.join(e, c), d.bytes);
}
