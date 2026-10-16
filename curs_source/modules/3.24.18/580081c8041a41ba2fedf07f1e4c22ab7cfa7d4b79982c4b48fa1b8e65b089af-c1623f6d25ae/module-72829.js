Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRuntimeConfig = void 0;
const i = require(16317).__importDefault(require(26939)), o = require(97464), r = require(58571), s = require(81124), a = require(78520), c = require(55909), l = require(23296), d = require(39022), u = require(85802), p = require(99202), g = require(90099), m = require(50358), h = require(31643), S = require(18020), f = require("./module-52850.js");
exports.getRuntimeConfig = (e)=>{
    (0, g.emitWarningIfUnsupportedVersion)(process.version);
    const t = (0, h.resolveDefaultsModeConfig)(e), n = ()=>t().then(g.loadConfigsForDefaultMode), v = (0, f.getRuntimeConfig)(e);
    (0, o.emitWarningIfUnsupportedVersion)(process.version);
    const y = {
        profile: e?.profile,
        logger: v.logger
    };
    return {
        ...v,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? (0, u.loadConfig)(r.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, y),
        bodyLengthChecker: e?.bodyLengthChecker ?? m.calculateBodyLength,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({
            serviceId: v.serviceId,
            clientVersion: i.default.version
        }),
        httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (t)=>t.getIdentityProvider("aws.auth#sigv4") || (async (t)=>await e.credentialDefaultProvider(t?.__config || {})()),
                signer: new r.AwsSdkSigV4Signer
            },
            {
                schemeId: "aws.auth#sigv4a",
                identityProvider: (e)=>e.getIdentityProvider("aws.auth#sigv4a"),
                signer: new r.AwsSdkSigV4ASigner
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (e)=>e.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new c.NoAuthSigner
            }
        ],
        maxAttempts: e?.maxAttempts ?? (0, u.loadConfig)(d.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? (0, u.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, {
            ...a.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...y
        }),
        requestHandler: p.NodeHttpHandler.create(e?.requestHandler ?? n),
        retryMode: e?.retryMode ?? (0, u.loadConfig)({
            ...d.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async ()=>(await n()).retryMode || S.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? l.Hash.bind(null, "sha256"),
        sigv4aSigningRegionSet: e?.sigv4aSigningRegionSet ?? (0, u.loadConfig)(r.NODE_SIGV4A_CONFIG_OPTIONS, y),
        streamCollector: e?.streamCollector ?? p.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? (0, u.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, y),
        useFipsEndpoint: e?.useFipsEndpoint ?? (0, u.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, y),
        userAgentAppId: e?.userAgentAppId ?? (0, u.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, y)
    };
};
