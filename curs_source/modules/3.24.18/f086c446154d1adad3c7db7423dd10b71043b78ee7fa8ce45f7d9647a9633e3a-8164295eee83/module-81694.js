require.r(exports), require.d(exports, {
    SignatureV4MultiRegion: ()=>u,
    signatureV4CrtContainer: ()=>d
});
var i = require(84329);
require(86349), require(98025);
const o = "X-Amz-S3session-Token", r = o.toLowerCase();
class s extends i.B {
    async signWithCredentials(e, t, n) {
        const i = a(t);
        e.headers[r] = t.sessionToken;
        return c(this, i), this.signRequest(e, n ?? {});
    }
    async presignWithCredentials(e, t, n) {
        const i = a(t);
        delete e.headers[r], e.headers[o] = t.sessionToken, e.query = e.query ?? {}, e.query[o] = t.sessionToken;
        return c(this, i), this.presign(e, n);
    }
}
function a(e) {
    return {
        accessKeyId: e.accessKeyId,
        secretAccessKey: e.secretAccessKey,
        expiration: e.expiration
    };
}
function c(e, t) {
    const n = setTimeout(()=>{
        throw new Error("SignatureV4S3Express credential override was created but not called.");
    }, 10), i = e.credentialProvider;
    e.credentialProvider = ()=>(clearTimeout(n), e.credentialProvider = i, Promise.resolve(t));
}
var l = require(16936);
const d = {
    CrtSignerV4: null
};
class u {
    sigv4aSigner;
    sigv4Signer;
    signerOptions;
    static sigv4aDependency() {
        return "function" == typeof d.CrtSignerV4 ? "crt" : "function" == typeof l.d.SignatureV4a ? "js" : "none";
    }
    constructor(e){
        this.sigv4Signer = new s(e), this.signerOptions = e;
    }
    async sign(e, t = {}) {
        return "*" === t.signingRegion ? this.getSigv4aSigner().sign(e, t) : this.sigv4Signer.sign(e, t);
    }
    async signWithCredentials(e, t, n = {}) {
        if ("*" === n.signingRegion) {
            const i = this.getSigv4aSigner(), o = d.CrtSignerV4;
            if (o && i instanceof o) return i.signWithCredentials(e, t, n);
            throw new Error('signWithCredentials with signingRegion \'*\' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt');
        }
        return this.sigv4Signer.signWithCredentials(e, t, n);
    }
    async presign(e, t = {}) {
        if ("*" === t.signingRegion) {
            const n = this.getSigv4aSigner(), i = d.CrtSignerV4;
            if (i && n instanceof i) return n.presign(e, t);
            throw new Error('presign with signingRegion \'*\' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt');
        }
        return this.sigv4Signer.presign(e, t);
    }
    async presignWithCredentials(e, t, n = {}) {
        if ("*" === n.signingRegion) throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
        return this.sigv4Signer.presignWithCredentials(e, t, n);
    }
    getSigv4aSigner() {
        if (!this.sigv4aSigner) {
            const e = d.CrtSignerV4, t = l.d.SignatureV4a;
            if ("node" === this.signerOptions.runtime) {
                if (!e && !t) throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
                if (e && "function" == typeof e) this.sigv4aSigner = new e({
                    ...this.signerOptions,
                    signingAlgorithm: 1
                });
                else {
                    if (!t || "function" != typeof t) throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
                    this.sigv4aSigner = new t({
                        ...this.signerOptions
                    });
                }
            } else {
                if (!t || "function" != typeof t) throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
                this.sigv4aSigner = new t({
                    ...this.signerOptions
                });
            }
        }
        return this.sigv4aSigner;
    }
}
