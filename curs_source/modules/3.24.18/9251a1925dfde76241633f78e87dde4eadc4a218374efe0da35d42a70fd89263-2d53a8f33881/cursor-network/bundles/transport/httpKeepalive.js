var __wakaru_require_httpKeepalive_cache;
export function require_httpKeepalive() {
if (__wakaru_require_httpKeepalive_cache) return __wakaru_require_httpKeepalive_cache;
var exports2 = {};
__wakaru_require_httpKeepalive_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = exports2.HTTP2_PING_PRODUCTION_DEFAULTS = exports2.Http2TransportCallSite = void 0;
exports2.getHttp2PingConfig = getHttp2PingConfig;
exports2.getHttp2SessionEstablishTimeoutMs = getHttp2SessionEstablishTimeoutMs;
exports2.getHttp1KeepaliveConfig = getHttp1KeepaliveConfig;
var Http2TransportCallSite;
(function(Http2TransportCallSite2) {
    Http2TransportCallSite2["BACKEND"] = "backend";
    Http2TransportCallSite2["BIDI"] = "bidi";
    Http2TransportCallSite2["REPO"] = "repo";
    Http2TransportCallSite2["HTTP2_REPO"] = "http2_repo";
    Http2TransportCallSite2["GEO_CPP"] = "geo_cpp";
    Http2TransportCallSite2["CPP_CONFIG"] = "cpp_config";
    Http2TransportCallSite2["CMDK"] = "cmdk";
    Http2TransportCallSite2["TELEM"] = "telem";
    Http2TransportCallSite2["AGENTIC_COMPOSER"] = "agentic_composer";
    Http2TransportCallSite2["AGENT"] = "agent";
    Http2TransportCallSite2["LOCAL_LOOP_INFERENCE"] = "local_loop_inference";
    Http2TransportCallSite2["ORIGIN"] = "origin";
    Http2TransportCallSite2["REMOTE_AGENT_HOST_PRESENCE"] = "remote_agent_host_presence";
    Http2TransportCallSite2["METRICS"] = "metrics";
    Http2TransportCallSite2["STRUCTURED_LOGS"] = "structured_logs";
    Http2TransportCallSite2["NETWORK_MONITOR"] = "network_monitor";
    Http2TransportCallSite2["BACKGROUND_COMPOSER_PROXY"] = "background_composer_proxy";
})(Http2TransportCallSite || (exports2.Http2TransportCallSite = Http2TransportCallSite = {}));
exports2.HTTP2_PING_PRODUCTION_DEFAULTS = {
    pingIdleConnection: true,
    pingIntervalMs: 1e4,
    pingTimeoutMs: 2e4,
    idleConnectionTimeoutMs: 3e5
};
function isLocalBackend(host) {
    const backendUrl = host.getCursorCreds()?.backendUrl;
    if (!backendUrl) {
        return false;
    }
    return backendUrl.includes("localhost") || backendUrl.includes("lclhst.build");
}
async function getHttp2PingConfig(host, callSite, options2) {
    const fallbackDefaults = options2?.fallbackDefaults;
    try {
        const timeoutPrevention = host.getDebugTimeoutPreventionMode();
        if (timeoutPrevention === "always") {
            host.log.info(`[HTTP/2 Ping] Timeout prevention enabled by setting (${callSite})`);
            return void 0;
        }
        if (timeoutPrevention === "local_only" && isLocalBackend(host)) {
            host.log.info(`[HTTP/2 Ping] Timeout prevention enabled for local backend (${callSite})`);
            return void 0;
        }
        const config2 = await host.getDynamicConfigValue("http2_ping_config");
        if (!config2) {
            return fallbackDefaults;
        }
        const enabledList = Array.isArray(config2.enabled) ? config2.enabled : [];
        if (!enabledList.includes(callSite)) {
            return void 0;
        }
        const resolved = {
            pingIdleConnection: config2.pingIdleConnection ?? fallbackDefaults?.pingIdleConnection,
            pingIntervalMs: config2.pingIntervalMs ?? fallbackDefaults?.pingIntervalMs,
            pingTimeoutMs: config2.pingTimeoutMs ?? fallbackDefaults?.pingTimeoutMs,
            idleConnectionTimeoutMs: config2.idleConnectionTimeoutMs ?? fallbackDefaults?.idleConnectionTimeoutMs
        };
        if (fallbackDefaults) {
            host.log.info(`[HTTP/2 Ping] ${callSite} interval=${resolved.pingIntervalMs} timeout=${resolved.pingTimeoutMs}`);
        }
        return resolved;
    } catch (e) {
        host.log.error(`Failed to get HTTP/2 ping config from Statsig for ${callSite}`, e);
        return fallbackDefaults;
    }
}
exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = 2e4;
exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = 5e3;
exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = "http2_session_establish_timeout";
async function getHttp2SessionEstablishTimeoutMs(host) {
    try {
        const config2 = await host.getDynamicConfigValue(exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG);
        const timeoutMs = config2?.timeoutMs;
        if (typeof timeoutMs !== "number" || !Number.isFinite(timeoutMs)) {
            return exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
        }
        if (timeoutMs <= 0) {
            return 0;
        }
        return Math.max(timeoutMs, exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS);
    } catch (e) {
        host.log.error("Failed to get the HTTP/2 session establishment timeout from Statsig", e);
        return exports2.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
    }
}
async function getHttp1KeepaliveConfig(host) {
    try {
        const config2 = await host.getDynamicConfigValue("http1_keepalive_config");
        if (!config2) {
            return {
                keepAliveInitialDelayMs: null
            };
        }
        if (config2.keepAliveInitialDelayMs === null) {
            return {
                keepAliveInitialDelayMs: null
            };
        }
        if (typeof config2.keepAliveInitialDelayMs === "number" && config2.keepAliveInitialDelayMs > 0) {
            return {
                keepAliveInitialDelayMs: config2.keepAliveInitialDelayMs
            };
        }
        return {
            keepAliveInitialDelayMs: null
        };
    } catch (e) {
        host.log.error("Failed to get HTTP/1 keepalive config from Statsig, defaulting to disabled", e);
        return {
            keepAliveInitialDelayMs: null
        };
    }
}

return exports2;
}
