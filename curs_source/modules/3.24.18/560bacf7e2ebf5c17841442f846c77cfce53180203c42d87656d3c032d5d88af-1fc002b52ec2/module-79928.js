Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRuntimeConfig = void 0;
const o = require(16317).__importDefault(require(26939)), n = require(97464), i = require(58571), s = require(81124), c = require(78520), a = require(23296), p = require(39022), d = require(85802), l = require(99202), u = require(90099), h = require(50358), E = require(31643), S = require(18020), g = require("./module-59673.js");
exports.getRuntimeConfig = (e)=>{
    (0, u.emitWarningIfUnsupportedVersion)(process.version);
    const t = (0, E.resolveDefaultsModeConfig)(e), r = ()=>t().then(u.loadConfigsForDefaultMode), x = (0, g.getRuntimeConfig)(e);
    (0, n.emitWarningIfUnsupportedVersion)(process.version);
    const f = {
        profile: e?.profile,
        logger: x.logger
    };
    return {
        ...x,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? (0, d.loadConfig)(i.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, f),
        bodyLengthChecker: e?.bodyLengthChecker ?? h.calculateBodyLength,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({
            serviceId: x.serviceId,
            clientVersion: o.default.version
        }),
        maxAttempts: e?.maxAttempts ?? (0, d.loadConfig)(p.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? (0, d.loadConfig)(c.NODE_REGION_CONFIG_OPTIONS, {
            ...c.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...f
        }),
        requestHandler: l.NodeHttpHandler.create(e?.requestHandler ?? r),
        retryMode: e?.retryMode ?? (0, d.loadConfig)({
            ...p.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async ()=>(await r()).retryMode || S.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? a.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? l.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? (0, d.loadConfig)(c.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, f),
        useFipsEndpoint: e?.useFipsEndpoint ?? (0, d.loadConfig)(c.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, f),
        userAgentAppId: e?.userAgentAppId ?? (0, d.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, f)
    };
};
