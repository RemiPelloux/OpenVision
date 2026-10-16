Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRuntimeConfig = void 0;
const o = require(58571), n = require(93664), i = require(55909), s = require(90099), c = require(53043), a = require(3865), p = require(49125), d = require("./module-83209.js"), l = require("./module-67647.js"), u = require("./module-38950.js");
exports.getRuntimeConfig = (e)=>({
        apiVersion: "2019-06-10",
        base64Decoder: e?.base64Decoder ?? a.fromBase64,
        base64Encoder: e?.base64Encoder ?? a.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? !1,
        endpointProvider: e?.endpointProvider ?? l.defaultEndpointResolver,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? d.defaultSSOOIDCHttpAuthSchemeProvider,
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
        protocol: e?.protocol ?? n.AwsRestJsonProtocol,
        protocolSettings: e?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.ssooidc",
            errorTypeRegistries: u.errorTypeRegistries,
            version: "2019-06-10",
            serviceTarget: "AWSSSOOIDCService"
        },
        serviceId: e?.serviceId ?? "SSO OIDC",
        urlParser: e?.urlParser ?? c.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? p.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? p.toUtf8
    });
