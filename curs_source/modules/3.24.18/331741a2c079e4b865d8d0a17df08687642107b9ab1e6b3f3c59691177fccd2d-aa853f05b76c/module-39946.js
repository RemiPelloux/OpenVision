Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRuntimeConfig = void 0;
const o = require(58571), r = require(93664), i = require(55909), s = require(90099), a = require(53043), c = require(3865), u = require(49125), d = require("./module-25964.js"), p = require("./module-94450.js"), l = require("./module-73415.js");
exports.getRuntimeConfig = (e)=>({
        apiVersion: "2023-01-01",
        base64Decoder: e?.base64Decoder ?? c.fromBase64,
        base64Encoder: e?.base64Encoder ?? c.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? !1,
        endpointProvider: e?.endpointProvider ?? p.defaultEndpointResolver,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? d.defaultSigninHttpAuthSchemeProvider,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (e)=>e.getIdentityProvider("aws.auth#sigv4"),
                signer: new o.AwsSdkSigV4Signer
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (e)=>e.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new i.NoAuthSigner
            }
        ],
        logger: e?.logger ?? new s.NoOpLogger,
        protocol: e?.protocol ?? r.AwsRestJsonProtocol,
        protocolSettings: e?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.signin",
            errorTypeRegistries: l.errorTypeRegistries,
            version: "2023-01-01",
            serviceTarget: "Signin"
        },
        serviceId: e?.serviceId ?? "Signin",
        urlParser: e?.urlParser ?? a.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? u.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? u.toUtf8
    });
