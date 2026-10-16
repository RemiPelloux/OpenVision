"use strict";
const n = require("./module-2267.js"), { createHmac: r, createVerify: o, createSign: s, timingSafeEqual: i, createPublicKey: a, constants: { RSA_PKCS1_PSS_PADDING: c, RSA_PSS_SALTLEN_DIGEST: l, RSA_PKCS1_PADDING: u, RSA_PSS_SALTLEN_MAX_SIGN: g, RSA_PSS_SALTLEN_AUTO: E } } = require("./module-7598.js"), { sign: h, verify: d } = require("./module-7598.js"), { joseToDer: I, derToJose: B } = require("./module-131.js"), Q = require("./module-2240.js"), { TokenError: f } = require("./module-6011.js"), C = /[=+/]/g, p = {
    "=": "",
    "+": "-",
    "/": "_"
}, m = /^-----BEGIN(?: (RSA|EC|ENCRYPTED))? PRIVATE KEY-----/, y = /^-----BEGIN(?: (RSA))? PUBLIC KEY-----/, w = "-----BEGIN CERTIFICATE-----", k = new Q(1e3), b = new Q(1e3), N = [
    "HS256",
    "HS384",
    "HS512"
], T = [
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "PS384",
    "PS512"
], D = {
    "1.2.840.10045.3.1.7": {
        bits: "256",
        names: [
            "P-256",
            "prime256v1"
        ]
    },
    "1.3.132.0.10": {
        bits: "256",
        names: [
            "secp256k1"
        ]
    },
    "1.3.132.0.34": {
        bits: "384",
        names: [
            "P-384",
            "secp384r1"
        ]
    },
    "1.3.132.0.35": {
        bits: "512",
        names: [
            "P-521",
            "secp521r1"
        ]
    }
}, S = n.define("PrivateKey", function() {
    this.seq().obj(this.key("version").int(), this.key("algorithm").seq().obj(this.key("algorithm").objid(), this.key("parameters").optional().objid()));
}), R = n.define("PublicKey", function() {
    this.seq().obj(this.key("algorithm").seq().obj(this.key("algorithm").objid(), this.key("parameters").optional().objid()));
}), F = n.define("ECPrivateKey", function() {
    this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").explicit(0).optional().choice({
        namedCurve: this.objid()
    }));
});
function v(e) {
    return p[e];
}
function M(e, t, A, n) {
    return e.set(t, [
        A,
        n
    ]), A || n;
}
module.exports = {
    base64UrlMatcher: C,
    base64UrlReplacer: v,
    hsAlgorithms: N,
    rsaAlgorithms: T,
    esAlgorithms: [
        "ES256",
        "ES384",
        "ES512"
    ],
    edAlgorithms: [
        "EdDSA"
    ],
    detectPrivateKeyAlgorithm: function(e, t) {
        if (e instanceof Buffer) e = e.toString("utf-8");
        else if ("string" != typeof e) throw new f(f.codes.invalidKey, "The private key must be a string or a buffer.");
        const [A, n] = k.get(e) || [];
        if (A) return A;
        if (n) throw n;
        try {
            const A = function(e) {
                if (e.match(y) || e.includes(w)) throw new f(f.codes.invalidKey, "Public keys are not supported for signing.");
                const t = e.trim().match(m);
                if (!t) return "HS256";
                let A, n, r;
                switch(t[1]){
                    case "RSA":
                        return "RS256";
                    case "EC":
                        A = F.decode(e, "pem", {
                            label: "EC PRIVATE KEY"
                        }), r = A.parameters.value.join(".");
                        break;
                    case "ENCRYPTED":
                        return "ENCRYPTED";
                    default:
                        switch(A = S.decode(e, "pem", {
                            label: "PRIVATE KEY"
                        }), n = A.algorithm.algorithm.join("."), n){
                            case "1.2.840.113549.1.1.1":
                                return "RS256";
                            case "1.2.840.10045.2.1":
                                r = A.algorithm.parameters.join(".");
                                break;
                            case "1.3.101.112":
                            case "1.3.101.113":
                                return "EdDSA";
                            default:
                                throw new f(f.codes.invalidKey, `Unsupported PEM PCKS8 private key with OID ${n}.`);
                        }
                }
                const o = D[r];
                if (!o) throw new f(f.codes.invalidKey, `Unsupported EC private key with curve ${r}.`);
                return `ES${o.bits}`;
            }(e);
            return M(k, e, "ENCRYPTED" === A ? t : A);
        } catch (t) {
            throw M(k, e, null, f.wrap(t, f.codes.invalidKey, "Unsupported PEM private key."));
        }
    },
    detectPublicKeyAlgorithms: function(e) {
        if (!e) return "none";
        const [t, A] = b.get(e) || [];
        if (t) return t;
        if (A) throw A;
        try {
            if (e instanceof Buffer) e = e.toString("utf-8");
            else if ("string" != typeof e) throw new f(f.codes.invalidKey, "The public key must be a string or a buffer.");
            return M(b, e, function(e) {
                const t = e.match(y);
                if (e.match(m)) throw new f(f.codes.invalidKey, "Private keys are not supported for verifying.");
                if (t && "RSA" === t[1]) return T;
                if (!t && !e.includes(w)) return N;
                e.includes(w) && (e = a(e).export({
                    type: "spki",
                    format: "pem"
                }));
                const A = R.decode(e, "pem", {
                    label: "PUBLIC KEY"
                }), n = A.algorithm.algorithm.join(".");
                let r;
                switch(n){
                    case "1.2.840.113549.1.1.1":
                        return T;
                    case "1.2.840.10045.2.1":
                        r = A.algorithm.parameters.join(".");
                        break;
                    case "1.3.101.112":
                    case "1.3.101.113":
                        return [
                            "EdDSA"
                        ];
                    default:
                        throw new f(f.codes.invalidKey, `Unsupported PEM PCKS8 public key with OID ${n}.`);
                }
                const o = D[r];
                if (!o) throw new f(f.codes.invalidKey, `Unsupported EC public key with curve ${r}.`);
                return [
                    `ES${o.bits}`
                ];
            }(e));
        } catch (t) {
            throw M(b, e, null, f.wrap(t, f.codes.invalidKey, "Unsupported PEM public key."));
        }
    },
    createSignature: function(e, t, A) {
        try {
            const n = e.slice(0, 2), o = `sha${e.slice(2)}`;
            let i, a;
            switch(n){
                case "HS":
                    i = r(o, t).update(A).digest("base64");
                    break;
                case "ES":
                    i = B(h(o, Buffer.from(A, "utf-8"), t), e).toString("base64");
                    break;
                case "RS":
                case "PS":
                    a = {
                        key: t,
                        padding: u,
                        saltLength: g
                    }, "PS" === n && (a.padding = c, a.saltLength = l), i = s(o).update(A).sign(a).toString("base64");
                    break;
                case "Ed":
                    i = h(void 0, Buffer.from(A, "utf-8"), t).toString("base64");
            }
            return i.replace(C, v);
        } catch (e) {
            throw new f(f.codes.signError, "Cannot create the signature.", {
                originalError: e
            });
        }
    },
    verifySignature: function(e, t, A, n) {
        try {
            const s = e.slice(0, 2), a = `SHA${e.slice(2)}`;
            if (n = Buffer.from(n, "base64"), "HS" === s) try {
                return i(r(a, t).update(A).digest(), n);
            } catch  {
                return !1;
            }
            else if ("Ed" === s) {
                if ("function" == typeof d) return d(void 0, Buffer.from(A, "utf-8"), t, n);
                throw new f(f.codes.signError, "EdDSA algorithms are not supported by your Node.js version.");
            }
            const g = {
                key: t,
                padding: u,
                saltLength: E
            };
            return "PS" === s ? (g.padding = c, g.saltLength = l) : "ES" === s && (n = I(n, e)), o("RSA-" + a).update(A).verify(g, n);
        } catch (e) {
            throw new f(f.codes.verifyError, "Cannot verify the signature.", {
                originalError: e
            });
        }
    }
};
