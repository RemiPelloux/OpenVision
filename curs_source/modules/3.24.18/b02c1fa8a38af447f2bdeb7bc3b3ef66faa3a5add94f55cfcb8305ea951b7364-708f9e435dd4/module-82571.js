Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRuntimeConfig = void 0;
const n = require(58571), r = require(93664), s = require(55909), i = require(90099), a = require(53043), c = require(3865), d = require(49125), u = require("./module-56475.js"), l = require("./module-89765.js"), p = require("./module-62372.js");
exports.getRuntimeConfig = (e)=>({
        apiVersion: "2019-06-10",
        base64Decoder: e?.base64Decoder ?? c.fromBase64,
        base64Encoder: e?.base64Encoder ?? c.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? !1,
        endpointProvider: e?.endpointProvider ?? l.defaultEndpointResolver,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? u.defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (e)=>e.getIdentityProvider("aws.auth#sigv4"),
                signer: new n.AwsSdkSigV4Signer
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (e)=>e.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new s.NoAuthSigner
            }
        ],
        logger: e?.logger ?? new i.NoOpLogger,
        protocol: e?.protocol ?? r.AwsRestJsonProtocol,
        protocolSettings: e?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.sso",
            errorTypeRegistries: p.errorTypeRegistries,
            version: "2019-06-10",
            serviceTarget: "SWBPortalService"
        },
        serviceId: e?.serviceId ?? "SSO",
        urlParser: e?.urlParser ?? a.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? d.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? d.toUtf8
    });
