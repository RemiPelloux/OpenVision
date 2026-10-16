Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRuntimeConfig = void 0;
const i = require(58571), o = require(93664), r = require("./module-81694.js"), s = require(55909), a = require(90099), c = require(53043), l = require(3865), d = require(49125), u = require("./module-87812.js"), p = require("./module-34842.js"), g = require("./module-9823.js");
exports.getRuntimeConfig = (e)=>({
        apiVersion: "2011-06-15",
        base64Decoder: e?.base64Decoder ?? l.fromBase64,
        base64Encoder: e?.base64Encoder ?? l.toBase64,
        disableHostPrefix: e?.disableHostPrefix ?? !1,
        endpointProvider: e?.endpointProvider ?? p.defaultEndpointResolver,
        extensions: e?.extensions ?? [],
        httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? u.defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (e)=>e.getIdentityProvider("aws.auth#sigv4"),
                signer: new i.AwsSdkSigV4Signer
            },
            {
                schemeId: "aws.auth#sigv4a",
                identityProvider: (e)=>e.getIdentityProvider("aws.auth#sigv4a"),
                signer: new i.AwsSdkSigV4ASigner
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (e)=>e.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new s.NoAuthSigner
            }
        ],
        logger: e?.logger ?? new a.NoOpLogger,
        protocol: e?.protocol ?? o.AwsQueryProtocol,
        protocolSettings: e?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.sts",
            errorTypeRegistries: g.errorTypeRegistries,
            xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
            version: "2011-06-15",
            serviceTarget: "AWSSecurityTokenServiceV20110615"
        },
        serviceId: e?.serviceId ?? "STS",
        signerConstructor: e?.signerConstructor ?? r.SignatureV4MultiRegion,
        urlParser: e?.urlParser ?? c.parseUrl,
        utf8Decoder: e?.utf8Decoder ?? d.fromUtf8,
        utf8Encoder: e?.utf8Encoder ?? d.toUtf8
    });
