import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { require_privateInferenceEnablement } from "../privateInference/privateInferenceEnablement.js";
import { require_privateInferencePerimeter } from "../privateInference/privateInferencePerimeter.js";
import { require_structuredLogProvider } from "../structuredLogProvider.js";
import { require_agentRunWebSocketConnectionContext } from "./agentRunWebSocketConnectionContext.js";
import { require_failureSimulatorInterceptor } from "./failureSimulatorInterceptor.js";
import { require_http2Override } from "./http2Override.js";
import { require_http2SessionReplacer } from "./http2SessionReplacer.js";
import { require_httpKeepalive } from "./httpKeepalive.js";
import { require_jwt } from "./jwt.js";
import { require_largeProtoLoggingInterceptor } from "./largeProtoLoggingInterceptor.js";
import { require_retryInterceptor } from "./retryInterceptor.js";
import { require_transportTelemetry } from "./transportTelemetry.js";
import { agent_service_connect_exports, health_connect_exports } from "../../../entry.js";
import { require_cjs4 } from "../../../node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/cjs/index.js";
import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { require_cookie2 } from "../../../node_modules/.pnpm/tough-cookie@5.1.2/node_modules/tough-cookie/dist/cookie/index.js";
import { init_agent_service_connect } from "../../../proto/dist/generated/agent/v1/agent_service_connect.js";
import { init_health_connect } from "../../../proto/dist/generated/aiserver/v1/health_connect.js";
var __wakaru_require_transportFactory_cache;
export function require_transportFactory() {
if (__wakaru_require_transportFactory_cache) return __wakaru_require_transportFactory_cache;
var exports2 = {};
__wakaru_require_transportFactory_cache = exports2;
"use strict";
var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m2[k2];
            }
        };
    }
    Object.defineProperty(o, k22, desc);
}) : (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o[k22] = m2[k2];
}));
var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v2) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v2
    });
}) : function(o, v2) {
    o["default"] = v2;
});
var __importStar = exports2 && exports2.__importStar || (function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar2 = [];
            for(var k2 in o2)if (Object.prototype.hasOwnProperty.call(o2, k2)) ar2[ar2.length] = k2;
            return ar2;
        };
        return ownKeys(o);
    };
    return function(mod2) {
        if (mod2 && mod2.__esModule) return mod2;
        var result = {};
        if (mod2 != null) {
            for(var k2 = ownKeys(mod2), i = 0; i < k2.length; i++)if (k2[i] !== "default") __createBinding(result, mod2, k2[i]);
        }
        __setModuleDefault(result, mod2);
        return result;
    };
})();
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.TransportFactory = void 0;
var node_crypto_1 = require("node:crypto");
var dns = __importStar(require("node:dns"));
var http4 = __importStar(require("node:http"));
var tls3 = __importStar(require("node:tls"));
var agent_service_connect_js_1 = (init_agent_service_connect(), __toCommonJS(agent_service_connect_exports));
var health_connect_js_1 = (init_health_connect(), __toCommonJS(health_connect_exports));
var connect_1 = require_cjs3();
var connect_node_1 = require_cjs4();
var tough_cookie_1 = require_cookie2();
var privateInferenceEnablement_js_1 = require_privateInferenceEnablement();
var privateInferencePerimeter_js_1 = require_privateInferencePerimeter();
var structuredLogProvider_js_1 = require_structuredLogProvider();
var agentRunWebSocketConnectionContext_js_1 = require_agentRunWebSocketConnectionContext();
var failureSimulatorInterceptor_js_1 = require_failureSimulatorInterceptor();
var http2Override_js_1 = require_http2Override();
var http2SessionReplacer_js_1 = require_http2SessionReplacer();
var httpKeepalive_js_1 = require_httpKeepalive();
var jwt_js_1 = require_jwt();
var largeProtoLoggingInterceptor_js_1 = require_largeProtoLoggingInterceptor();
var retryInterceptor_js_1 = require_retryInterceptor();
var transportTelemetry_js_1 = require_transportTelemetry();
var TEAM_ID_HEADER = "x-cursor-team-id";
var HTTP2_ALPN_FAILURE_MESSAGE = "expected h2 session, but ALPN protocol failed to negotiate";
var NETSKOPE_ISSUER_SUFFIX = "goskope.com";
var CONNECTION_OWNED_HEADERS = new Set([
    "authorization",
    "cf-connecting-ip",
    "cf-ipcountry",
    "connection",
    "content-length",
    "cookie",
    "forwarded",
    "host",
    "keep-alive",
    "proxy-authorization",
    "sec-websocket-accept",
    "sec-websocket-extensions",
    "sec-websocket-key",
    "sec-websocket-protocol",
    "sec-websocket-version",
    "te",
    "trailer",
    "transfer-encoding",
    "true-client-ip",
    "upgrade",
    "via",
    "x-client-ip",
    "x-cursor-cf-origin-secret",
    "x-forwarded-for",
    "x-forwarded-host",
    "x-forwarded-port",
    "x-forwarded-proto",
    "x-real-ip"
]);
var CONNECTION_OWNED_HEADER_PREFIXES = [
    "cf-",
    "proxy-",
    "sec-websocket-",
    "x-forwarded-"
];
function isConnectionOwnedHeader(name17) {
    const normalized = name17.toLowerCase();
    return CONNECTION_OWNED_HEADERS.has(normalized) || CONNECTION_OWNED_HEADER_PREFIXES.some((prefix)=>normalized.startsWith(prefix));
}
function runStartHeaders(headers) {
    const result = new Headers();
    headers.forEach((value, name17)=>{
        if (!isConnectionOwnedHeader(name17)) {
            result.append(name17, value);
        }
    });
    return result;
}
var TransportFactory = class {
    constructor(host, cookieJar, getAccessToken, clientKey, createAbortAndErrorInterceptor){
        this.host = host;
        this.cookieJar = cookieJar;
        this.getAccessToken = getAccessToken;
        this.clientKey = clientKey;
        this.createAbortAndErrorInterceptor = createAbortAndErrorInterceptor;
        this.dnsOrderCache = new Map();
        this.activeAgents = new Set();
        this.activeSessionManagers = new Set();
        this.retiredSessionManagers = new Map();
        this.http2SessionEstablishTimeoutMs = httpKeepalive_js_1.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
        this.loggedBlockedRpcs = new Set();
        this.debugLog = host.debugLog;
        this.storedRandomness = (0, node_crypto_1.randomUUID)();
        this.privateInferenceEnablement = host.getPrivateInferenceEnablement?.() ?? privateInferenceEnablement_js_1.PRIVATE_INFERENCE_DISABLED;
        this.systemCertificatesReady = this.loadCertificates();
    }
    getPrivateInferenceEnablement() {
        return this.privateInferenceEnablement;
    }
    onPrivateInferenceBlockedRpc(serviceTypeName, methodName) {
        const rpc = `${serviceTypeName}/${methodName}`;
        if (!this.loggedBlockedRpcs.has(rpc)) {
            this.loggedBlockedRpcs.add(rpc);
            this.host.log.info(`[TransportFactory] private inference perimeter refused ${rpc} (state=${this.privateInferenceEnablement.state}; further refusals of this RPC are logged at debug level)`);
        }
        this.debugLog.debug(`[TransportFactory] private inference perimeter refused ${rpc}`);
        try {
            this.host.metricsIncrement({
                stat: "transport.private_inference_perimeter_blocked",
                tags: {
                    service: serviceTypeName,
                    method: methodName
                }
            });
        } catch  {}
    }
    createPrivateInferencePerimeterInterceptor() {
        return (0, privateInferencePerimeter_js_1.createPrivateInferencePerimeterInterceptor)(this.privateInferenceEnablement, (serviceTypeName, methodName)=>this.onPrivateInferenceBlockedRpc(serviceTypeName, methodName));
    }
    async loadCertificates() {
        try {
            const proxyCerts = await this.host.loadSystemCertificates();
            const nodeCerts = tls3.rootCertificates;
            this.systemCertificates = [
                ...proxyCerts || [],
                ...nodeCerts || []
            ];
        } catch (err) {
            this.debugLog.error("[TransportFactory] Failed to load system certificates:", err);
            this.systemCertificates = [
                ...tls3.rootCertificates
            ];
        }
    }
    getTransportHost(baseUrl) {
        try {
            return new URL(baseUrl).host;
        } catch  {
            return baseUrl;
        }
    }
    isLocalBaseUrl(baseUrl) {
        return baseUrl.match(/(?:[^/]+\.)?lclhst\.build(?::\d+)?(?:\/|$)/) !== null || baseUrl.match(/(?:[^/]+\.)?localhost(?::\d+)?(?:\/|$)/) !== null;
    }
    applyStandardRequestHeaders(req) {
        const backupRequestId = (0, node_crypto_1.randomUUID)();
        this.host.applyRequestHeaders(req, backupRequestId, this.clientKey.toString("hex"));
        req.header.set("x-cursor-streaming", "true");
        return backupRequestId;
    }
    async applyAuthorization(req, options2) {
        if (options2.overrideAuthToken) {
            const overriddenAccessToken = await options2.overrideAuthToken();
            if (overriddenAccessToken) {
                req.header.set("Authorization", `Bearer ${overriddenAccessToken}`);
                this.addTeamIdHeader(req);
                return;
            }
            try {
                this.debugLog.debug("[TransportFactory] overrideAuthToken provided but returned empty; falling back to stored token", req.service?.typeName, req.method?.name);
                structuredLogProvider_js_1.StructuredLogProviderImpl.debug("auth", "overrideAuthToken empty; falling back", {
                    subkey: "override_token_empty",
                    service: req.service?.typeName ?? "unknown",
                    method: req.method?.name ?? "unknown"
                });
            } catch  {}
        }
        const accessToken = this.getAccessToken();
        if (accessToken === void 0) {
            try {
                this.debugLog.warn("[TransportFactory] Authorization header omitted: no access token available", req.service?.typeName, req.method?.name);
                structuredLogProvider_js_1.StructuredLogProviderImpl.warn("auth", "Authorization omitted: no access token", {
                    subkey: "missing_access_token",
                    service: req.service?.typeName ?? "unknown",
                    method: req.method?.name ?? "unknown"
                });
            } catch  {}
            return;
        }
        if ((0, jwt_js_1.willAccessTokenExpireSoon)(accessToken)) {
            this.host.triggerTokenRefresh();
        }
        req.header.set("Authorization", `Bearer ${options2.maybeUseCppSpoofToken ? this.host.maybeGetSpoofedCppAccessToken(accessToken, options2.baseUrl) : accessToken}`);
        this.addTeamIdHeader(req);
    }
    async applyCookie(req) {
        const accessToken = this.getAccessToken();
        try {
            const cookies = await this.cookieJar.getCookieString(req.baseUrl);
            if (cookies.length > 0) {
                req.header.set("Cookie", cookies);
            } else {
                await this.createCookie(req.baseUrl, req.url, accessToken?.slice(0, 15) ?? this.storedRandomness);
                const createdCookies = await this.cookieJar.getCookieString(req.baseUrl);
                req.header.set("Cookie", createdCookies);
            }
        } catch  {
            this.debugLog.debug("Failed to set cookie");
        }
    }
    async prepareAgentRunRequest(options2) {
        options2.signal?.throwIfAborted();
        const header = new Headers();
        options2.callerHeaders.forEach((value, name17)=>{
            if (!isConnectionOwnedHeader(name17)) {
                header.append(name17, value);
            }
        });
        const req = {
            baseUrl: options2.baseUrl,
            url: new URL(`/${agent_service_connect_js_1.AgentService.typeName}/${agent_service_connect_js_1.AgentService.methods.run.name}`, options2.baseUrl).toString(),
            header,
            service: agent_service_connect_js_1.AgentService,
            method: agent_service_connect_js_1.AgentService.methods.run
        };
        const backupRequestId = this.applyStandardRequestHeaders(req);
        options2.signal?.throwIfAborted();
        await this.applyAuthorization(req, options2);
        options2.signal?.throwIfAborted();
        await this.applyCookie(req);
        options2.signal?.throwIfAborted();
        await this.systemCertificatesReady;
        options2.signal?.throwIfAborted();
        const isLocal = this.isLocalBaseUrl(options2.baseUrl);
        return {
            headers: header,
            credentialFingerprint: (0, agentRunWebSocketConnectionContext_js_1.fingerprintAgentRunPoolIdentity)(header),
            runHeaders: runStartHeaders(header),
            requestId: header.get("x-request-id") ?? backupRequestId,
            nodeOptions: {
                ...this.systemCertificates !== void 0 ? {
                    ca: this.systemCertificates
                } : {},
                ...this.host.isDevelopment() && isLocal ? {
                    rejectUnauthorized: false
                } : {}
            }
        };
    }
    addTeamIdHeader(req) {
        const teamId = this.host.getTeamId();
        const hasTeamId = req.header.has(TEAM_ID_HEADER) || teamId !== void 0;
        const status = hasTeamId ? "present" : "absent";
        if (!req.header.has(TEAM_ID_HEADER) && teamId !== void 0) {
            req.header.set(TEAM_ID_HEADER, teamId.toString());
        }
        try {
            this.host.metricsIncrement({
                stat: "transport.team_id_header",
                tags: {
                    status
                }
            });
        } catch  {}
    }
    createTransport(params) {
        const { baseUrl: baseUrlIntent, useHttp2, maybeUseCppSpoofToken, overrideAuthToken, pingConfig, getHttp1KeepaliveDisabled, http1KeepaliveInitialDelayMs, sendCompression = connect_node_1.compressionGzip } = params;
        let agent;
        if (!useHttp2 && (0, http2Override_js_1.isBaseUrlHttp2)(baseUrlIntent)) {
            agent = new http4.Agent({
                keepAlive: true
            });
        } else {
            agent = new http4.Agent({
                keepAlive: false
            });
        }
        this.activeAgents.add(agent);
        const http1Options = {
            agent
        };
        let baseUrl = baseUrlIntent;
        if (!useHttp2 && (0, http2Override_js_1.isBaseUrlHttp2)(baseUrlIntent)) {
            baseUrl = (0, http2Override_js_1.replaceBaseUrlWithApi2)(baseUrlIntent);
        }
        const host = this.getTransportHost(baseUrl);
        const isLocal = this.isLocalBaseUrl(baseUrl);
        const interceptors = this.createInterceptors({
            baseUrl,
            maybeUseCppSpoofToken,
            overrideAuthToken
        });
        const nodeClientAffinityOptions = baseUrl.includes("gcpp") || baseUrl.includes("api4.cursor.sh") ? {
            lookup: (hostname3, options2, callback)=>{
                dns.lookup(hostname3, {
                    ...options2,
                    all: true
                }, (err, address, family)=>{
                    if (err || address === void 0) {
                        return callback(err, address, family);
                    }
                    if (typeof address === "string") {
                        return callback(err, address, family);
                    }
                    if (!this.dnsOrderCache.has(hostname3)) {
                        this.dnsOrderCache.set(hostname3, address);
                    }
                    const cachedOrder = this.dnsOrderCache.get(hostname3);
                    const sameIps = address.length === cachedOrder.length && address.every((a)=>cachedOrder.some((c)=>c.address === a.address));
                    callback(err, sameIps ? cachedOrder : address, family);
                });
            }
        } : void 0;
        const nodeInDevOptions = this.host.isDevelopment() && isLocal ? {
            rejectUnauthorized: false,
            ALPNProtocols: [
                useHttp2 ? "h2" : "http/1.1"
            ]
        } : {};
        const commonOptions = {
            baseUrl,
            useBinaryFormat: true,
            interceptors,
            sendCompression,
            acceptCompression: [
                connect_node_1.compressionGzip
            ]
        };
        const http1KeepaliveOptions = http1KeepaliveInitialDelayMs !== null && http1KeepaliveInitialDelayMs !== void 0 ? {
            keepAlive: true,
            keepAliveInitialDelay: http1KeepaliveInitialDelayMs
        } : {};
        const transport = useHttp2 ? this.createHttp2Transport({
            commonOptions,
            nodeClientAffinityOptions,
            nodeInDevOptions,
            pingConfig,
            usePooledConnections: params.usePooledConnections,
            connectionPoolSize: params.connectionPoolSize,
            onGoaway: params.onGoaway
        }) : this.createHttp1Transport({
            commonOptions,
            http1Options,
            nodeClientAffinityOptions,
            nodeInDevOptions,
            http1KeepaliveOptions,
            getHttp1KeepaliveDisabled
        });
        return {
            transport,
            isHttp2: useHttp2,
            usage: 0,
            host
        };
    }
    createHttp2Transport(params) {
        const { commonOptions, nodeClientAffinityOptions, nodeInDevOptions, pingConfig, usePooledConnections, connectionPoolSize, onGoaway } = params;
        const nodeOptions = {
            ...nodeClientAffinityOptions,
            ...nodeInDevOptions,
            ca: this.systemCertificates ?? void 0,
            minVersion: "TLSv1.2"
        };
        const http2Options = {};
        const networkSettings = {
            service: "transport_factory",
            subkey: "http2_transport_created",
            httpVersion: "2",
            baseUrl: commonOptions.baseUrl,
            compression: {
                sendCompression: commonOptions.sendCompression?.name ?? "unknown",
                acceptCompression: commonOptions.acceptCompression?.map((c)=>c.name) ?? []
            },
            tls: {
                minVersion: nodeOptions.minVersion,
                rejectUnauthorized: nodeOptions.rejectUnauthorized ?? "default",
                alpnProtocols: nodeOptions.ALPNProtocols ?? [
                    "h2"
                ],
                hasCustomCA: nodeOptions.ca !== void 0 && Array.isArray(nodeOptions.ca) && nodeOptions.ca.length > 0,
                systemCertCount: this.systemCertificates?.length ?? 0
            },
            http2: {
                pingIdleConnection: pingConfig?.pingIdleConnection ?? null,
                pingIntervalMs: pingConfig?.pingIntervalMs ?? null,
                pingTimeoutMs: pingConfig?.pingTimeoutMs ?? null,
                idleConnectionTimeoutMs: pingConfig?.idleConnectionTimeoutMs ?? null,
                settings: {
                    initialWindowSize: http2Options.settings?.initialWindowSize ?? "default",
                    maxFrameSize: http2Options.settings?.maxFrameSize ?? "default",
                    maxConcurrentStreams: http2Options.settings?.maxConcurrentStreams ?? "default",
                    maxHeaderListSize: http2Options.settings?.maxHeaderListSize ?? "default",
                    enablePush: http2Options.settings?.enablePush ?? true,
                    headerTableSize: http2Options.settings?.headerTableSize ?? "default"
                }
            },
            dnsAffinity: {
                enabled: nodeClientAffinityOptions?.lookup !== void 0
            },
            dev: {
                isDevelopment: this.host.isDevelopment(),
                rejectUnauthorized: nodeInDevOptions.rejectUnauthorized ?? "default"
            }
        };
        structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", "HTTP2 transport created with network settings", networkSettings);
        const pingOpts = {
            pingIntervalMs: pingConfig?.pingIntervalMs,
            pingIdleConnection: pingConfig?.pingIdleConnection,
            pingTimeoutMs: pingConfig?.pingTimeoutMs,
            idleConnectionTimeoutMs: pingConfig?.idleConnectionTimeoutMs
        };
        const mergedH2Opts = {
            ...nodeOptions,
            ...http2Options
        };
        const createSessionManager = ()=>new http2SessionReplacer_js_1.Http2SessionReplacer({
                create: ()=>{
                    const sm = new connect_node_1.Http2SessionManager(commonOptions.baseUrl, pingOpts, mergedH2Opts);
                    this.activeSessionManagers.add(sm);
                    return sm;
                },
                onReplaced: (previous, waitedMs, reason)=>this.retireSessionManager(previous, waitedMs, reason, commonOptions.baseUrl),
                establishTimeoutMs: ()=>this.http2SessionEstablishTimeoutMs,
                onGoaway
            });
        if (usePooledConnections) {
            const poolSize = connectionPoolSize != null && connectionPoolSize > 0 ? connectionPoolSize : 4;
            const pool = [];
            for(let i = 0; i < poolSize; i++){
                pool.push(createSessionManager());
            }
            let nextIndex = 0;
            const streamSessionManagers = new WeakMap();
            return (0, connect_node_1.createConnectTransport)({
                ...commonOptions,
                httpVersion: "2",
                sessionManager: {
                    get authority () {
                        return new URL(commonOptions.baseUrl).origin;
                    },
                    async request (method, path64, headers, options2) {
                        const poolIndex = nextIndex % poolSize;
                        const sm = pool[poolIndex];
                        nextIndex++;
                        const stream3 = await sm.request(method, path64, headers, options2);
                        streamSessionManagers.set(stream3, sm);
                        return stream3;
                    },
                    notifyResponseByteRead (stream3) {
                        const sm = streamSessionManagers.get(stream3);
                        if (sm !== void 0) {
                            sm.notifyResponseByteRead(stream3);
                            return;
                        }
                        for (const manager of pool){
                            manager.notifyResponseByteRead(stream3);
                        }
                    }
                },
                nodeOptions,
                http2Options,
                pingIdleConnection: pingConfig?.pingIdleConnection ?? void 0,
                pingIntervalMs: pingConfig?.pingIntervalMs ?? void 0,
                pingTimeoutMs: pingConfig?.pingTimeoutMs ?? void 0,
                idleConnectionTimeoutMs: pingConfig?.idleConnectionTimeoutMs ?? void 0
            });
        }
        const sessionManager = createSessionManager();
        return (0, connect_node_1.createConnectTransport)({
            ...commonOptions,
            httpVersion: "2",
            sessionManager,
            nodeOptions,
            http2Options,
            pingIdleConnection: pingConfig?.pingIdleConnection ?? void 0,
            pingIntervalMs: pingConfig?.pingIntervalMs ?? void 0,
            pingTimeoutMs: pingConfig?.pingTimeoutMs ?? void 0,
            idleConnectionTimeoutMs: pingConfig?.idleConnectionTimeoutMs ?? void 0
        });
    }
    createHttp1Transport(params) {
        const { commonOptions, http1Options, nodeClientAffinityOptions, nodeInDevOptions, http1KeepaliveOptions, getHttp1KeepaliveDisabled } = params;
        if (typeof getHttp1KeepaliveDisabled === "function") {
            this.debugLog.info("[TransportFactory] Creating dynamic HTTP/1 transports with keepalive killswitch");
            const transportWithKeepalive = (0, connect_node_1.createConnectTransport)({
                ...commonOptions,
                httpVersion: "1.1",
                ...http1Options,
                nodeOptions: {
                    ...nodeClientAffinityOptions,
                    ...nodeInDevOptions,
                    ...http1KeepaliveOptions
                }
            });
            const transportWithoutKeepalive = (0, connect_node_1.createConnectTransport)({
                ...commonOptions,
                httpVersion: "1.1",
                ...http1Options,
                nodeOptions: {
                    ...nodeClientAffinityOptions,
                    ...nodeInDevOptions
                }
            });
            return {
                unary (service, method, signal, timeoutMs, header, input, contextValues) {
                    const transport = getHttp1KeepaliveDisabled() ? transportWithoutKeepalive : transportWithKeepalive;
                    return transport.unary(service, method, signal, timeoutMs, header, input, contextValues);
                },
                stream (service, method, signal, timeoutMs, header, input, contextValues) {
                    const transport = getHttp1KeepaliveDisabled() ? transportWithoutKeepalive : transportWithKeepalive;
                    return transport.stream(service, method, signal, timeoutMs, header, input, contextValues);
                }
            };
        }
        const nodeOptions = {
            ...nodeClientAffinityOptions,
            ...nodeInDevOptions,
            ...http1KeepaliveOptions
        };
        const networkSettings = {
            service: "transport_factory",
            subkey: "http1_transport_created",
            httpVersion: "1.1",
            baseUrl: commonOptions.baseUrl,
            compression: {
                sendCompression: commonOptions.sendCompression?.name ?? "unknown",
                acceptCompression: commonOptions.acceptCompression?.map((c)=>c.name) ?? []
            },
            tls: {
                rejectUnauthorized: nodeOptions.rejectUnauthorized ?? "default",
                alpnProtocols: nodeOptions.ALPNProtocols ?? [
                    "http/1.1"
                ]
            },
            http1: {
                keepAlive: http1Options.agent?.keepAlive ?? false,
                keepAliveInitialDelay: http1KeepaliveOptions.keepAliveInitialDelay ?? null
            },
            dnsAffinity: {
                enabled: nodeClientAffinityOptions?.lookup !== void 0
            },
            dev: {
                isDevelopment: this.host.isDevelopment(),
                rejectUnauthorized: nodeInDevOptions.rejectUnauthorized ?? "default"
            }
        };
        structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", "HTTP/1.1 transport created with network settings", networkSettings);
        return (0, connect_node_1.createConnectTransport)({
            ...commonOptions,
            httpVersion: "1.1",
            ...http1Options,
            nodeOptions
        });
    }
    createInterceptors({ baseUrl, maybeUseCppSpoofToken, overrideAuthToken }) {
        const interceptors = [];
        interceptors.push(this.createPrivateInferencePerimeterInterceptor());
        const addHeaders = (next)=>async (req)=>{
                return this.host.runWithNetworkContext(async ()=>{
                    this.applyStandardRequestHeaders(req);
                    return await next(req);
                });
            };
        interceptors.push(addHeaders);
        interceptors.push((0, largeProtoLoggingInterceptor_js_1.createLargeProtoLoggingInterceptor)(this.host));
        interceptors.push((0, retryInterceptor_js_1.createStreamRetryInterceptor)(this.host, {
            maxRetries: 3,
            baseDelayMs: 1e3,
            maxDelayMs: 3e4
        }));
        interceptors.push((0, retryInterceptor_js_1.createUnaryRetryInterceptor)(this.host, {
            maxRetries: 3,
            baseDelayMs: 1e3,
            maxDelayMs: 3e4
        }));
        if (this.host.isDevelopment() && false) {
            interceptors.push((0, failureSimulatorInterceptor_js_1.createFailureSimulatorInterceptor)({
                failureCount: 2,
                errorCode: connect_1.Code.Unavailable,
                errorMessage: "simulated connection refused"
            }));
        }
        interceptors.push(this.createAbortAndErrorInterceptor());
        const http2UnavailableInterceptor = (next)=>async (req)=>{
                try {
                    return await next(req);
                } catch (e) {
                    const err = e;
                    if (err.message?.includes(HTTP2_ALPN_FAILURE_MESSAGE)) {
                        if (req.service.typeName !== health_connect_js_1.HealthService.typeName) {
                            const flip2 = {
                                service: req.service.typeName,
                                method: req.method.name,
                                requestId: req.header.get("x-request-id") ?? void 0
                            };
                            this.recordHttp2KillSwitchFlip({
                                ...flip2,
                                action: "disable_http2",
                                reason: "alpn_negotiation_failed",
                                previousMode: this.resolveModeFromSettings()
                            });
                            this.host.setHttp2Disabled().catch(()=>{});
                            if (err.metadata && typeof err.metadata.get === "function" && err.metadata.get("issuer")?.endsWith(NETSKOPE_ISSUER_SUFFIX)) {
                                this.recordHttp2KillSwitchFlip({
                                    ...flip2,
                                    action: "disable_http1_sse",
                                    reason: "netskope_issuer",
                                    previousMode: (0, transportTelemetry_js_1.resolveHttpTransportMode)({
                                        http2Disabled: true,
                                        http1SseDisabled: this.host.isHttp1SseDisabled()
                                    })
                                });
                                this.host.setHttp1SseDisabled().catch(()=>{});
                            }
                        }
                    }
                    throw e;
                }
            };
        interceptors.push(http2UnavailableInterceptor);
        const bearerTokenInterceptor = (next)=>async (req)=>{
                await this.applyAuthorization(req, {
                    baseUrl,
                    maybeUseCppSpoofToken,
                    ...overrideAuthToken !== void 0 ? {
                        overrideAuthToken
                    } : {}
                });
                return await next(req);
            };
        interceptors.push(bearerTokenInterceptor);
        const cookieInterceptor = (next)=>async (req)=>{
                await this.applyCookie({
                    baseUrl,
                    url: req.url,
                    header: req.header
                });
                const response = await next(req);
                try {
                    if (response.header.has("Set-Cookie")) {
                        const setCookieHeaders = response.header.getSetCookie();
                        for (const setCookieHeader of setCookieHeaders){
                            await this.cookieJar.setCookie(setCookieHeader, baseUrl).catch((_e2)=>{});
                        }
                    }
                } catch (error3) {
                    this.debugLog.debug("Failed to set cookie");
                }
                return response;
            };
        interceptors.push(cookieInterceptor);
        interceptors.push(this.createPrivateInferencePerimeterInterceptor());
        return interceptors;
    }
    resolveModeFromSettings() {
        return (0, transportTelemetry_js_1.resolveHttpTransportMode)({
            http2Disabled: this.host.isHttp2Disabled(),
            http1SseDisabled: this.host.isHttp1SseDisabled()
        });
    }
    recordHttp2KillSwitchFlip(flip2) {
        this.debugLog.info(`[TransportFactory] HTTP protocol kill switch flipped: ${flip2.action} (${flip2.reason}) after ${flip2.service}/${flip2.method} on ${flip2.previousMode}`);
        (0, transportTelemetry_js_1.incrementTransportMetric)(this.host, "transport.http2_kill_switch", {
            action: flip2.action,
            reason: flip2.reason,
            previous_mode: flip2.previousMode,
            service: flip2.service,
            method: flip2.method
        });
        (0, transportTelemetry_js_1.emitTransportStructuredLog)(this.host, {
            level: "warn",
            message: "HTTP protocol kill switch flipped",
            metadata: {
                service: "transport_factory",
                subkey: "http2_kill_switch",
                action: flip2.action,
                reason: flip2.reason,
                previousMode: flip2.previousMode,
                rpcService: flip2.service,
                rpcMethod: flip2.method,
                requestId: flip2.requestId
            }
        });
    }
    async createCookie(baseUrl, path64, authId) {
        const myCookie = new tough_cookie_1.Cookie({
            key: "CursorCookie",
            value: `Cookie-${authId}`,
            domain: new URL(baseUrl).hostname,
            path: path64.replace(baseUrl, ""),
            expires: new Date(Date.now() + 1e3 * 60 * 60 * 24),
            httpOnly: true,
            secure: true,
            sameSite: "Strict"
        });
        await this.cookieJar.setCookie(myCookie, baseUrl).catch((_e2)=>{});
    }
    setHttp2SessionEstablishTimeoutMs(timeoutMs) {
        this.http2SessionEstablishTimeoutMs = timeoutMs;
    }
    retireSessionManager(previous, waitedMs, reason, baseUrl) {
        const now2 = Date.now();
        this.pruneRetiredSessionManagers(now2);
        this.activeSessionManagers.delete(previous);
        this.retiredSessionManagers.set(previous, now2);
        const host = this.getTransportHost(baseUrl);
        const seconds = Math.round(waitedMs / 1e3);
        this.debugLog.info(reason === "establish_timeout" ? `[TransportFactory] HTTP/2 session abandoned after a request waited ${seconds}s for it to connect to ${host}` : `[TransportFactory] HTTP/2 session replaced after ${seconds}s without response data for ${host}`);
        (0, transportTelemetry_js_1.incrementTransportMetric)(this.host, "transport.http2_session_replaced", {
            reason
        });
        (0, transportTelemetry_js_1.emitTransportStructuredLog)(this.host, {
            level: "warn",
            message: reason === "establish_timeout" ? "HTTP/2 session abandoned while connecting" : "HTTP/2 session replaced after a stream read nothing",
            metadata: {
                service: "transport_factory",
                subkey: "http2_session_replaced",
                reason,
                ...reason === "establish_timeout" ? {
                    waitedMs: Math.round(waitedMs)
                } : {
                    silentForMs: Math.round(waitedMs)
                },
                host
            }
        });
    }
    destroyAllAgents() {
        for (const agent of this.activeAgents){
            agent.destroy();
        }
        this.activeAgents.clear();
        const now2 = Date.now();
        this.pruneRetiredSessionManagers(now2);
        for (const sm of this.activeSessionManagers){
            this.retiredSessionManagers.set(sm, now2);
        }
        this.activeSessionManagers.clear();
        this.dnsOrderCache.clear();
    }
    pruneRetiredSessionManagers(now2) {
        const RETIRED_MANAGER_MAX_AGE_MS = 10 * 60 * 1e3;
        for (const [sm, retiredAt] of this.retiredSessionManagers){
            if (now2 - retiredAt > RETIRED_MANAGER_MAX_AGE_MS) {
                const state = sm.state();
                const retiredSeconds = Math.round((now2 - retiredAt) / 1e3);
                if (state === "open") {
                    this.debugLog.info(`[TransportFactory] Deferring abort of retired HTTP/2 session manager with open streams (retired ${retiredSeconds}s ago)`);
                    structuredLogProvider_js_1.StructuredLogProviderImpl.info("transport", "Retired HTTP/2 session manager abort deferred (open streams)", {
                        service: "transport_factory",
                        subkey: "retired_session_manager_abort_deferred",
                        retiredSeconds
                    });
                    continue;
                }
                this.debugLog.info(`[TransportFactory] Aborting retired HTTP/2 session manager (state=${state}, retired ${retiredSeconds}s ago)`);
                sm.abort();
                this.retiredSessionManagers.delete(sm);
            }
        }
    }
    abortAllSessionManagers() {
        for (const sm of this.activeSessionManagers){
            sm.abort();
        }
        this.activeSessionManagers.clear();
        for (const [sm] of this.retiredSessionManagers){
            sm.abort();
        }
        this.retiredSessionManagers.clear();
    }
};
exports2.TransportFactory = TransportFactory;

return exports2;
}
