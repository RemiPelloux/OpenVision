Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRuntimeConfig = void 0;
const n = require(16317).__importDefault(require(26939)), r = require(97464), s = require(58571), i = require(81124), a = require(78520), c = require(23296), d = require(39022), u = require(85802), l = require(99202), p = require(90099), h = require(50358), g = require(31643), S = require(18020), f = require("./module-82571.js");
exports.getRuntimeConfig = (e)=>{
    (0, p.emitWarningIfUnsupportedVersion)(process.version);
    const t = (0, g.resolveDefaultsModeConfig)(e), o = ()=>t().then(p.loadConfigsForDefaultMode), m = (0, f.getRuntimeConfig)(e);
    (0, r.emitWarningIfUnsupportedVersion)(process.version);
    const E = {
        profile: e?.profile,
        logger: m.logger
    };
    return {
        ...m,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? (0, u.loadConfig)(s.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, E),
        bodyLengthChecker: e?.bodyLengthChecker ?? h.calculateBodyLength,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? (0, i.createDefaultUserAgentProvider)({
            serviceId: m.serviceId,
            clientVersion: n.default.version
        }),
        maxAttempts: e?.maxAttempts ?? (0, u.loadConfig)(d.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? (0, u.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, {
            ...a.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...E
        }),
        requestHandler: l.NodeHttpHandler.create(e?.requestHandler ?? o),
        retryMode: e?.retryMode ?? (0, u.loadConfig)({
            ...d.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async ()=>(await o()).retryMode || S.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? c.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? l.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? (0, u.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, E),
        useFipsEndpoint: e?.useFipsEndpoint ?? (0, u.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, E),
        userAgentAppId: e?.userAgentAppId ?? (0, u.loadConfig)(i.NODE_APP_ID_CONFIG_OPTIONS, E)
    };
};
