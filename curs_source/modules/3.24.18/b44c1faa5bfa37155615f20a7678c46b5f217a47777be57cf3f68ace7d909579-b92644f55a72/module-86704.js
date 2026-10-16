"use strict";
var r;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = exports.HTTP2_PING_PRODUCTION_DEFAULTS = exports.Http2TransportCallSite = void 0, exports.getHttp2PingConfig = async function(e, t, r) {
    const n = r?.fallbackDefaults;
    try {
        const r = e.getDebugTimeoutPreventionMode();
        if ("always" === r) return void e.log.info(`[HTTP/2 Ping] Timeout prevention enabled by setting (${t})`);
        if ("local_only" === r && function(e) {
            const t = e.getCursorCreds()?.backendUrl;
            if (!t) return !1;
            return t.includes("localhost") || t.includes("lclhst.build");
        }(e)) return void e.log.info(`[HTTP/2 Ping] Timeout prevention enabled for local backend (${t})`);
        const s = await e.getDynamicConfigValue("http2_ping_config");
        if (!s) return n;
        if (!(Array.isArray(s.enabled) ? s.enabled : []).includes(t)) return;
        const o = {
            pingIdleConnection: s.pingIdleConnection ?? n?.pingIdleConnection,
            pingIntervalMs: s.pingIntervalMs ?? n?.pingIntervalMs,
            pingTimeoutMs: s.pingTimeoutMs ?? n?.pingTimeoutMs,
            idleConnectionTimeoutMs: s.idleConnectionTimeoutMs ?? n?.idleConnectionTimeoutMs
        };
        return n && e.log.info(`[HTTP/2 Ping] ${t} interval=${o.pingIntervalMs} timeout=${o.pingTimeoutMs}`), o;
    } catch (r) {
        return e.log.error(`Failed to get HTTP/2 ping config from Statsig for ${t}`, r), n;
    }
}, exports.getHttp2SessionEstablishTimeoutMs = async function(e) {
    try {
        const r = await e.getDynamicConfigValue(exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG), n = r?.timeoutMs;
        return "number" == typeof n && Number.isFinite(n) ? n <= 0 ? 0 : Math.max(n, exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS) : exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
    } catch (r) {
        return e.log.error("Failed to get the HTTP/2 session establishment timeout from Statsig", r), exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
    }
}, exports.getHttp1KeepaliveConfig = async function(e) {
    try {
        const t = await e.getDynamicConfigValue("http1_keepalive_config");
        return t ? null === t.keepAliveInitialDelayMs ? {
            keepAliveInitialDelayMs: null
        } : "number" == typeof t.keepAliveInitialDelayMs && t.keepAliveInitialDelayMs > 0 ? {
            keepAliveInitialDelayMs: t.keepAliveInitialDelayMs
        } : {
            keepAliveInitialDelayMs: null
        } : {
            keepAliveInitialDelayMs: null
        };
    } catch (t) {
        return e.log.error("Failed to get HTTP/1 keepalive config from Statsig, defaulting to disabled", t), {
            keepAliveInitialDelayMs: null
        };
    }
}, function(e) {
    e.BACKEND = "backend", e.BIDI = "bidi", e.REPO = "repo", e.HTTP2_REPO = "http2_repo", e.GEO_CPP = "geo_cpp", e.CPP_CONFIG = "cpp_config", e.CMDK = "cmdk", e.TELEM = "telem", e.AGENTIC_COMPOSER = "agentic_composer", e.AGENT = "agent", e.LOCAL_LOOP_INFERENCE = "local_loop_inference", e.ORIGIN = "origin", e.REMOTE_AGENT_HOST_PRESENCE = "remote_agent_host_presence", e.METRICS = "metrics", e.STRUCTURED_LOGS = "structured_logs", e.NETWORK_MONITOR = "network_monitor", e.BACKGROUND_COMPOSER_PROXY = "background_composer_proxy";
}(r || (exports.Http2TransportCallSite = r = {})), exports.HTTP2_PING_PRODUCTION_DEFAULTS = {
    pingIdleConnection: !0,
    pingIntervalMs: 1e4,
    pingTimeoutMs: 2e4,
    idleConnectionTimeoutMs: 3e5
};
exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = 2e4, exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = 5e3, exports.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = "http2_session_establish_timeout";
