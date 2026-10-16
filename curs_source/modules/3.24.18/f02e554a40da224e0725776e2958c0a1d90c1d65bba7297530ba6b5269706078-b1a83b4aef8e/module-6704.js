"use strict";
var r;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = exports.HTTP2_PING_PRODUCTION_DEFAULTS = exports.Http2TransportCallSite = void 0, exports.getHttp2PingConfig = async function(t, e, r) {
    const n = r?.fallbackDefaults;
    try {
        const r = t.getDebugTimeoutPreventionMode();
        if ("always" === r) return void t.log.info(`[HTTP/2 Ping] Timeout prevention enabled by setting (${e})`);
        if ("local_only" === r && function(t) {
            const e = t.getCursorCreds()?.backendUrl;
            if (!e) return !1;
            return e.includes("localhost") || e.includes("lclhst.build");
        }(t)) return void t.log.info(`[HTTP/2 Ping] Timeout prevention enabled for local backend (${e})`);
        const s = await t.getDynamicConfigValue("http2_ping_config");
        if (!s) return n;
        if (!(Array.isArray(s.enabled) ? s.enabled : []).includes(e)) return;
        const i = {
            pingIdleConnection: s.pingIdleConnection ?? n?.pingIdleConnection,
            pingIntervalMs: s.pingIntervalMs ?? n?.pingIntervalMs,
            pingTimeoutMs: s.pingTimeoutMs ?? n?.pingTimeoutMs,
            idleConnectionTimeoutMs: s.idleConnectionTimeoutMs ?? n?.idleConnectionTimeoutMs
        };
        return n && t.log.info(`[HTTP/2 Ping] ${e} interval=${i.pingIntervalMs} timeout=${i.pingTimeoutMs}`), i;
    } catch (r) {
        return t.log.error(`Failed to get HTTP/2 ping config from Statsig for ${e}`, r), n;
    }
}, exports.getHttp2SessionEstablishTimeoutMs = async function(t) {
    try {
        const r = await t.getDynamicConfigValue(exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG), n = r?.timeoutMs;
        return "number" == typeof n && Number.isFinite(n) ? n <= 0 ? 0 : Math.max(n, exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS) : exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
    } catch (r) {
        return t.log.error("Failed to get the HTTP/2 session establishment timeout from Statsig", r), exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
    }
}, exports.getHttp1KeepaliveConfig = async function(t) {
    try {
        const e = await t.getDynamicConfigValue("http1_keepalive_config");
        return e ? null === e.keepAliveInitialDelayMs ? {
            keepAliveInitialDelayMs: null
        } : "number" == typeof e.keepAliveInitialDelayMs && e.keepAliveInitialDelayMs > 0 ? {
            keepAliveInitialDelayMs: e.keepAliveInitialDelayMs
        } : {
            keepAliveInitialDelayMs: null
        } : {
            keepAliveInitialDelayMs: null
        };
    } catch (e) {
        return t.log.error("Failed to get HTTP/1 keepalive config from Statsig, defaulting to disabled", e), {
            keepAliveInitialDelayMs: null
        };
    }
}, function(t) {
    t.BACKEND = "backend", t.BIDI = "bidi", t.REPO = "repo", t.HTTP2_REPO = "http2_repo", t.GEO_CPP = "geo_cpp", t.CPP_CONFIG = "cpp_config", t.CMDK = "cmdk", t.TELEM = "telem", t.AGENTIC_COMPOSER = "agentic_composer", t.AGENT = "agent", t.LOCAL_LOOP_INFERENCE = "local_loop_inference", t.ORIGIN = "origin", t.REMOTE_AGENT_HOST_PRESENCE = "remote_agent_host_presence", t.METRICS = "metrics", t.STRUCTURED_LOGS = "structured_logs", t.NETWORK_MONITOR = "network_monitor", t.BACKGROUND_COMPOSER_PROXY = "background_composer_proxy";
}(r || (exports.Http2TransportCallSite = r = {})), exports.HTTP2_PING_PRODUCTION_DEFAULTS = {
    pingIdleConnection: !0,
    pingIntervalMs: 1e4,
    pingTimeoutMs: 2e4,
    idleConnectionTimeoutMs: 3e5
};
exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = 2e4, exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = 5e3, exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = "http2_session_establish_timeout";
