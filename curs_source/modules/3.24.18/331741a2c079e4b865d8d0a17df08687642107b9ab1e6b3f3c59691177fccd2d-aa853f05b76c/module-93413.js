Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRuntimeConfig = void 0;
const o = require(16317).__importDefault(require(26939)), r = require(97464), i = require(58571), s = require(81124), a = require(78520), c = require(23296), u = require(39022), d = require(85802), p = require(99202), l = require(90099), g = require(50358), h = require(31643), E = require(18020), S = require("./module-39946.js");
exports.getRuntimeConfig = (e)=>{
    (0, l.emitWarningIfUnsupportedVersion)(process.version);
    const t = (0, h.resolveDefaultsModeConfig)(e), n = ()=>t().then(l.loadConfigsForDefaultMode), f = (0, S.getRuntimeConfig)(e);
    (0, r.emitWarningIfUnsupportedVersion)(process.version);
    const m = {
        profile: e?.profile,
        logger: f.logger
    };
    return {
        ...f,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? (0, d.loadConfig)(i.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, m),
        bodyLengthChecker: e?.bodyLengthChecker ?? g.calculateBodyLength,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? (0, s.createDefaultUserAgentProvider)({
            serviceId: f.serviceId,
            clientVersion: o.default.version
        }),
        maxAttempts: e?.maxAttempts ?? (0, d.loadConfig)(u.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? (0, d.loadConfig)(a.NODE_REGION_CONFIG_OPTIONS, {
            ...a.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...m
        }),
        requestHandler: p.NodeHttpHandler.create(e?.requestHandler ?? n),
        retryMode: e?.retryMode ?? (0, d.loadConfig)({
            ...u.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async ()=>(await n()).retryMode || E.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? c.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? p.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? (0, d.loadConfig)(a.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, m),
        useFipsEndpoint: e?.useFipsEndpoint ?? (0, d.loadConfig)(a.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, m),
        userAgentAppId: e?.userAgentAppId ?? (0, d.loadConfig)(s.NODE_APP_ID_CONFIG_OPTIONS, m)
    };
};
