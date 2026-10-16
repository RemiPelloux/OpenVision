"use strict";
var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(t, r);
    s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return t[r];
        }
    }), Object.defineProperty(e, n, s);
} : function(e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r];
}), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), i = this && this.__importStar || (n = function(e) {
    return n = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
        return t;
    }, n(e);
}, function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var r = n(e), i = 0; i < r.length; i++)"default" !== r[i] && s(t, e, r[i]);
    return o(t, e), t;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TransportFactory = void 0;
const a = require("./module-77598.js"), c = i(require("./module-40610.js")), l = i(require("./module-37067.js")), u = i(require("./module-41692.js")), d = require("./module-17714.js"), p = require("./module-94430.js"), m = (require("./module-97163.js"), require("./module-85964.js")), h = require("./module-58485.js"), f = require("./module-22642.js"), g = require("./module-15218.js"), y = require("./module-7126.js"), w = require("./module-26920.js"), v = (require("./module-32709.js"), require("./module-12704.js")), _ = require("./module-49008.js"), A = require("./module-86704.js"), S = require("./module-17319.js"), b = require("./module-78827.js"), E = require("./module-69997.js"), I = require("./module-30668.js"), C = "x-cursor-team-id", k = new Set([
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
]), x = [
    "cf-",
    "proxy-",
    "sec-websocket-",
    "x-forwarded-"
];
function T(e) {
    const t = e.toLowerCase();
    return k.has(t) || x.some((e)=>t.startsWith(e));
}
function R(e) {
    const t = new Headers;
    return e.forEach((e, r)=>{
        T(r) || t.append(r, e);
    }), t;
}
exports.TransportFactory = class {
    constructor(e, t, r, n, s){
        this.host = e, this.cookieJar = t, this.getAccessToken = r, this.clientKey = n, this.createAbortAndErrorInterceptor = s, this.dnsOrderCache = new Map, this.activeAgents = new Set, this.activeSessionManagers = new Set, this.retiredSessionManagers = new Map, this.http2SessionEstablishTimeoutMs = A.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS, this.loggedBlockedRpcs = new Set, this.debugLog = e.debugLog, this.storedRandomness = (0, a.randomUUID)(), this.privateInferenceEnablement = e.getPrivateInferenceEnablement?.() ?? f.PRIVATE_INFERENCE_DISABLED, this.systemCertificatesReady = this.loadCertificates();
    }
    getPrivateInferenceEnablement() {
        return this.privateInferenceEnablement;
    }
    onPrivateInferenceBlockedRpc(e, t) {
        const r = `${e}/${t}`;
        this.loggedBlockedRpcs.has(r) || (this.loggedBlockedRpcs.add(r), this.host.log.info(`[TransportFactory] private inference perimeter refused ${r} (state=${this.privateInferenceEnablement.state}; further refusals of this RPC are logged at debug level)`)), this.debugLog.debug(`[TransportFactory] private inference perimeter refused ${r}`);
        try {
            this.host.metricsIncrement({
                stat: "transport.private_inference_perimeter_blocked",
                tags: {
                    service: e,
                    method: t
                }
            });
        } catch  {}
    }
    createPrivateInferencePerimeterInterceptor() {
        return (0, g.createPrivateInferencePerimeterInterceptor)(this.privateInferenceEnablement, (e, t)=>this.onPrivateInferenceBlockedRpc(e, t));
    }
    async loadCertificates() {
        try {
            const e = await this.host.loadSystemCertificates(), t = u.rootCertificates;
            this.systemCertificates = [
                ...e || [],
                ...t || []
            ];
        } catch (e) {
            this.debugLog.error("[TransportFactory] Failed to load system certificates:", e), this.systemCertificates = [
                ...u.rootCertificates
            ];
        }
    }
    getTransportHost(e) {
        try {
            return new URL(e).host;
        } catch  {
            return e;
        }
    }
    isLocalBaseUrl(e) {
        return null !== e.match(/(?:[^/]+\.)?lclhst\.build(?::\d+)?(?:\/|$)/) || null !== e.match(/(?:[^/]+\.)?localhost(?::\d+)?(?:\/|$)/);
    }
    applyStandardRequestHeaders(e) {
        const t = (0, a.randomUUID)();
        return this.host.applyRequestHeaders(e, t, this.clientKey.toString("hex")), e.header.set("x-cursor-streaming", "true"), t;
    }
    async applyAuthorization(e, t) {
        if (t.overrideAuthToken) {
            const r = await t.overrideAuthToken();
            if (r) return e.header.set("Authorization", `Bearer ${r}`), void this.addTeamIdHeader(e);
            try {
                this.debugLog.debug("[TransportFactory] overrideAuthToken provided but returned empty; falling back to stored token", e.service?.typeName, e.method?.name), y.StructuredLogProviderImpl.debug("auth", "overrideAuthToken empty; falling back", {
                    subkey: "override_token_empty",
                    service: e.service?.typeName ?? "unknown",
                    method: e.method?.name ?? "unknown"
                });
            } catch  {}
        }
        const r = this.getAccessToken();
        if (void 0 !== r) (0, S.willAccessTokenExpireSoon)(r) && this.host.triggerTokenRefresh(), e.header.set("Authorization", `Bearer ${t.maybeUseCppSpoofToken ? this.host.maybeGetSpoofedCppAccessToken(r, t.baseUrl) : r}`), this.addTeamIdHeader(e);
        else try {
            this.debugLog.warn("[TransportFactory] Authorization header omitted: no access token available", e.service?.typeName, e.method?.name), y.StructuredLogProviderImpl.warn("auth", "Authorization omitted: no access token", {
                subkey: "missing_access_token",
                service: e.service?.typeName ?? "unknown",
                method: e.method?.name ?? "unknown"
            });
        } catch  {}
    }
    async applyCookie(e) {
        const t = this.getAccessToken();
        try {
            const r = await this.cookieJar.getCookieString(e.baseUrl);
            if (r.length > 0) e.header.set("Cookie", r);
            else {
                await this.createCookie(e.baseUrl, e.url, t?.slice(0, 15) ?? this.storedRandomness);
                const r = await this.cookieJar.getCookieString(e.baseUrl);
                e.header.set("Cookie", r);
            }
        } catch  {
            this.debugLog.debug("Failed to set cookie");
        }
    }
    async prepareAgentRunRequest(e) {
        e.signal?.throwIfAborted();
        const t = new Headers;
        e.callerHeaders.forEach((e, r)=>{
            T(r) || t.append(r, e);
        });
        const r = {
            baseUrl: e.baseUrl,
            url: new URL(`/${d.AgentService.typeName}/${d.AgentService.methods.run.name}`, e.baseUrl).toString(),
            header: t,
            service: d.AgentService,
            method: d.AgentService.methods.run
        }, n = this.applyStandardRequestHeaders(r);
        e.signal?.throwIfAborted(), await this.applyAuthorization(r, e), e.signal?.throwIfAborted(), await this.applyCookie(r), e.signal?.throwIfAborted(), await this.systemCertificatesReady, e.signal?.throwIfAborted();
        const s = this.isLocalBaseUrl(e.baseUrl);
        return {
            headers: t,
            credentialFingerprint: (0, w.fingerprintAgentRunPoolIdentity)(t),
            runHeaders: R(t),
            requestId: t.get("x-request-id") ?? n,
            nodeOptions: {
                ...void 0 !== this.systemCertificates ? {
                    ca: this.systemCertificates
                } : {},
                ...this.host.isDevelopment() && s ? {
                    rejectUnauthorized: !1
                } : {}
            }
        };
    }
    addTeamIdHeader(e) {
        const t = this.host.getTeamId(), r = e.header.has(C) || void 0 !== t ? "present" : "absent";
        e.header.has(C) || void 0 === t || e.header.set(C, t.toString());
        try {
            this.host.metricsIncrement({
                stat: "transport.team_id_header",
                tags: {
                    status: r
                }
            });
        } catch  {}
    }
    createTransport(e) {
        const { baseUrl: t, useHttp2: r, maybeUseCppSpoofToken: n, overrideAuthToken: s, pingConfig: o, getHttp1KeepaliveDisabled: i, http1KeepaliveInitialDelayMs: a, sendCompression: u = m.compressionGzip } = e;
        let d;
        d = !r && (0, v.isBaseUrlHttp2)(t) ? new l.Agent({
            keepAlive: !0
        }) : new l.Agent({
            keepAlive: !1
        }), this.activeAgents.add(d);
        const p = {
            agent: d
        };
        let h = t;
        !r && (0, v.isBaseUrlHttp2)(t) && (h = (0, v.replaceBaseUrlWithApi2)(t));
        const f = this.getTransportHost(h), g = this.isLocalBaseUrl(h), y = this.createInterceptors({
            baseUrl: h,
            maybeUseCppSpoofToken: n,
            overrideAuthToken: s
        }), w = h.includes("gcpp") || h.includes("api4.cursor.sh") ? {
            lookup: (e, t, r)=>{
                c.lookup(e, {
                    ...t,
                    all: !0
                }, (t, n, s)=>{
                    if (t || void 0 === n) return r(t, n, s);
                    if ("string" == typeof n) return r(t, n, s);
                    this.dnsOrderCache.has(e) || this.dnsOrderCache.set(e, n);
                    const o = this.dnsOrderCache.get(e), i = n.length === o.length && n.every((e)=>o.some((t)=>t.address === e.address));
                    r(t, i ? o : n, s);
                });
            }
        } : void 0, _ = this.host.isDevelopment() && g ? {
            rejectUnauthorized: !1,
            ALPNProtocols: [
                r ? "h2" : "http/1.1"
            ]
        } : {}, A = {
            baseUrl: h,
            useBinaryFormat: !0,
            interceptors: y,
            sendCompression: u,
            acceptCompression: [
                m.compressionGzip
            ]
        }, S = null != a ? {
            keepAlive: !0,
            keepAliveInitialDelay: a
        } : {};
        return {
            transport: r ? this.createHttp2Transport({
                commonOptions: A,
                nodeClientAffinityOptions: w,
                nodeInDevOptions: _,
                pingConfig: o,
                usePooledConnections: e.usePooledConnections,
                connectionPoolSize: e.connectionPoolSize,
                onGoaway: e.onGoaway
            }) : this.createHttp1Transport({
                commonOptions: A,
                http1Options: p,
                nodeClientAffinityOptions: w,
                nodeInDevOptions: _,
                http1KeepaliveOptions: S,
                getHttp1KeepaliveDisabled: i
            }),
            isHttp2: r,
            usage: 0,
            host: f
        };
    }
    createHttp2Transport(e) {
        const { commonOptions: t, nodeClientAffinityOptions: r, nodeInDevOptions: n, pingConfig: s, usePooledConnections: o, connectionPoolSize: i, onGoaway: a } = e, c = {
            ...r,
            ...n,
            ca: this.systemCertificates ?? void 0,
            minVersion: "TLSv1.2"
        }, l = {}, u = {
            service: "transport_factory",
            subkey: "http2_transport_created",
            httpVersion: "2",
            baseUrl: t.baseUrl,
            compression: {
                sendCompression: t.sendCompression?.name ?? "unknown",
                acceptCompression: t.acceptCompression?.map((e)=>e.name) ?? []
            },
            tls: {
                minVersion: c.minVersion,
                rejectUnauthorized: c.rejectUnauthorized ?? "default",
                alpnProtocols: c.ALPNProtocols ?? [
                    "h2"
                ],
                hasCustomCA: void 0 !== c.ca && Array.isArray(c.ca) && c.ca.length > 0,
                systemCertCount: this.systemCertificates?.length ?? 0
            },
            http2: {
                pingIdleConnection: s?.pingIdleConnection ?? null,
                pingIntervalMs: s?.pingIntervalMs ?? null,
                pingTimeoutMs: s?.pingTimeoutMs ?? null,
                idleConnectionTimeoutMs: s?.idleConnectionTimeoutMs ?? null,
                settings: {
                    initialWindowSize: l.settings?.initialWindowSize ?? "default",
                    maxFrameSize: l.settings?.maxFrameSize ?? "default",
                    maxConcurrentStreams: l.settings?.maxConcurrentStreams ?? "default",
                    maxHeaderListSize: l.settings?.maxHeaderListSize ?? "default",
                    enablePush: l.settings?.enablePush ?? !0,
                    headerTableSize: l.settings?.headerTableSize ?? "default"
                }
            },
            dnsAffinity: {
                enabled: void 0 !== r?.lookup
            },
            dev: {
                isDevelopment: this.host.isDevelopment(),
                rejectUnauthorized: n.rejectUnauthorized ?? "default"
            }
        };
        y.StructuredLogProviderImpl.info("transport", "HTTP2 transport created with network settings", u);
        const d = {
            pingIntervalMs: s?.pingIntervalMs,
            pingIdleConnection: s?.pingIdleConnection,
            pingTimeoutMs: s?.pingTimeoutMs,
            idleConnectionTimeoutMs: s?.idleConnectionTimeoutMs
        }, p = {
            ...c,
            ...l
        }, h = ()=>new _.Http2SessionReplacer({
                create: ()=>{
                    const e = new m.Http2SessionManager(t.baseUrl, d, p);
                    return this.activeSessionManagers.add(e), e;
                },
                onReplaced: (e, r, n)=>this.retireSessionManager(e, r, n, t.baseUrl),
                establishTimeoutMs: ()=>this.http2SessionEstablishTimeoutMs,
                onGoaway: a
            });
        if (o) {
            const e = null != i && i > 0 ? i : 4, r = [];
            for(let t = 0; t < e; t++)r.push(h());
            let n = 0;
            const o = new WeakMap;
            return (0, m.createConnectTransport)({
                ...t,
                httpVersion: "2",
                sessionManager: {
                    get authority () {
                        return new URL(t.baseUrl).origin;
                    },
                    async request (t, s, i, a) {
                        const c = r[n % e];
                        n++;
                        const l = await c.request(t, s, i, a);
                        return o.set(l, c), l;
                    },
                    notifyResponseByteRead (e) {
                        const t = o.get(e);
                        if (void 0 === t) for (const t of r)t.notifyResponseByteRead(e);
                        else t.notifyResponseByteRead(e);
                    }
                },
                nodeOptions: c,
                http2Options: l,
                pingIdleConnection: s?.pingIdleConnection ?? void 0,
                pingIntervalMs: s?.pingIntervalMs ?? void 0,
                pingTimeoutMs: s?.pingTimeoutMs ?? void 0,
                idleConnectionTimeoutMs: s?.idleConnectionTimeoutMs ?? void 0
            });
        }
        const f = h();
        return (0, m.createConnectTransport)({
            ...t,
            httpVersion: "2",
            sessionManager: f,
            nodeOptions: c,
            http2Options: l,
            pingIdleConnection: s?.pingIdleConnection ?? void 0,
            pingIntervalMs: s?.pingIntervalMs ?? void 0,
            pingTimeoutMs: s?.pingTimeoutMs ?? void 0,
            idleConnectionTimeoutMs: s?.idleConnectionTimeoutMs ?? void 0
        });
    }
    createHttp1Transport(e) {
        const { commonOptions: t, http1Options: r, nodeClientAffinityOptions: n, nodeInDevOptions: s, http1KeepaliveOptions: o, getHttp1KeepaliveDisabled: i } = e;
        if ("function" == typeof i) {
            this.debugLog.info("[TransportFactory] Creating dynamic HTTP/1 transports with keepalive killswitch");
            const e = (0, m.createConnectTransport)({
                ...t,
                httpVersion: "1.1",
                ...r,
                nodeOptions: {
                    ...n,
                    ...s,
                    ...o
                }
            }), a = (0, m.createConnectTransport)({
                ...t,
                httpVersion: "1.1",
                ...r,
                nodeOptions: {
                    ...n,
                    ...s
                }
            });
            return {
                unary: (t, r, n, s, o, c, l)=>(i() ? a : e).unary(t, r, n, s, o, c, l),
                stream: (t, r, n, s, o, c, l)=>(i() ? a : e).stream(t, r, n, s, o, c, l)
            };
        }
        const a = {
            ...n,
            ...s,
            ...o
        }, c = {
            service: "transport_factory",
            subkey: "http1_transport_created",
            httpVersion: "1.1",
            baseUrl: t.baseUrl,
            compression: {
                sendCompression: t.sendCompression?.name ?? "unknown",
                acceptCompression: t.acceptCompression?.map((e)=>e.name) ?? []
            },
            tls: {
                rejectUnauthorized: a.rejectUnauthorized ?? "default",
                alpnProtocols: a.ALPNProtocols ?? [
                    "http/1.1"
                ]
            },
            http1: {
                keepAlive: r.agent?.keepAlive ?? !1,
                keepAliveInitialDelay: o.keepAliveInitialDelay ?? null
            },
            dnsAffinity: {
                enabled: void 0 !== n?.lookup
            },
            dev: {
                isDevelopment: this.host.isDevelopment(),
                rejectUnauthorized: s.rejectUnauthorized ?? "default"
            }
        };
        return y.StructuredLogProviderImpl.info("transport", "HTTP/1.1 transport created with network settings", c), (0, m.createConnectTransport)({
            ...t,
            httpVersion: "1.1",
            ...r,
            nodeOptions: a
        });
    }
    createInterceptors({ baseUrl: e, maybeUseCppSpoofToken: t, overrideAuthToken: r }) {
        const n = [];
        n.push(this.createPrivateInferencePerimeterInterceptor());
        n.push((e)=>async (t)=>this.host.runWithNetworkContext(async ()=>(this.applyStandardRequestHeaders(t), await e(t)))), n.push((0, b.createLargeProtoLoggingInterceptor)(this.host)), n.push((0, E.createStreamRetryInterceptor)(this.host, {
            maxRetries: 3,
            baseDelayMs: 1e3,
            maxDelayMs: 3e4
        })), n.push((0, E.createUnaryRetryInterceptor)(this.host, {
            maxRetries: 3,
            baseDelayMs: 1e3,
            maxDelayMs: 3e4
        })), this.host.isDevelopment(), n.push(this.createAbortAndErrorInterceptor());
        n.push((e)=>async (t)=>{
                try {
                    return await e(t);
                } catch (e) {
                    const r = e;
                    if (r.message?.includes("expected h2 session, but ALPN protocol failed to negotiate") && t.service.typeName !== p.HealthService.typeName) {
                        const e = {
                            service: t.service.typeName,
                            method: t.method.name,
                            requestId: t.header.get("x-request-id") ?? void 0
                        };
                        this.recordHttp2KillSwitchFlip({
                            ...e,
                            action: "disable_http2",
                            reason: "alpn_negotiation_failed",
                            previousMode: this.resolveModeFromSettings()
                        }), this.host.setHttp2Disabled().catch(()=>{}), r.metadata && "function" == typeof r.metadata.get && r.metadata.get("issuer")?.endsWith("goskope.com") && (this.recordHttp2KillSwitchFlip({
                            ...e,
                            action: "disable_http1_sse",
                            reason: "netskope_issuer",
                            previousMode: (0, I.resolveHttpTransportMode)({
                                http2Disabled: !0,
                                http1SseDisabled: this.host.isHttp1SseDisabled()
                            })
                        }), this.host.setHttp1SseDisabled().catch(()=>{}));
                    }
                    throw e;
                }
            });
        n.push((n)=>async (s)=>(await this.applyAuthorization(s, {
                    baseUrl: e,
                    maybeUseCppSpoofToken: t,
                    ...void 0 !== r ? {
                        overrideAuthToken: r
                    } : {}
                }), await n(s)));
        return n.push((t)=>async (r)=>{
                await this.applyCookie({
                    baseUrl: e,
                    url: r.url,
                    header: r.header
                });
                const n = await t(r);
                try {
                    if (n.header.has("Set-Cookie")) {
                        const t = n.header.getSetCookie();
                        for (const r of t)await this.cookieJar.setCookie(r, e).catch((e)=>{});
                    }
                } catch (e) {
                    this.debugLog.debug("Failed to set cookie");
                }
                return n;
            }), n.push(this.createPrivateInferencePerimeterInterceptor()), n;
    }
    resolveModeFromSettings() {
        return (0, I.resolveHttpTransportMode)({
            http2Disabled: this.host.isHttp2Disabled(),
            http1SseDisabled: this.host.isHttp1SseDisabled()
        });
    }
    recordHttp2KillSwitchFlip(e) {
        this.debugLog.info(`[TransportFactory] HTTP protocol kill switch flipped: ${e.action} (${e.reason}) after ${e.service}/${e.method} on ${e.previousMode}`), (0, I.incrementTransportMetric)(this.host, "transport.http2_kill_switch", {
            action: e.action,
            reason: e.reason,
            previous_mode: e.previousMode,
            service: e.service,
            method: e.method
        }), (0, I.emitTransportStructuredLog)(this.host, {
            level: "warn",
            message: "HTTP protocol kill switch flipped",
            metadata: {
                service: "transport_factory",
                subkey: "http2_kill_switch",
                action: e.action,
                reason: e.reason,
                previousMode: e.previousMode,
                rpcService: e.service,
                rpcMethod: e.method,
                requestId: e.requestId
            }
        });
    }
    async createCookie(e, t, r) {
        const n = new h.Cookie({
            key: "CursorCookie",
            value: `Cookie-${r}`,
            domain: new URL(e).hostname,
            path: t.replace(e, ""),
            expires: new Date(Date.now() + 864e5),
            httpOnly: !0,
            secure: !0,
            sameSite: "Strict"
        });
        await this.cookieJar.setCookie(n, e).catch((e)=>{});
    }
    setHttp2SessionEstablishTimeoutMs(e) {
        this.http2SessionEstablishTimeoutMs = e;
    }
    retireSessionManager(e, t, r, n) {
        const s = Date.now();
        this.pruneRetiredSessionManagers(s), this.activeSessionManagers.delete(e), this.retiredSessionManagers.set(e, s);
        const o = this.getTransportHost(n), i = Math.round(t / 1e3);
        this.debugLog.info("establish_timeout" === r ? `[TransportFactory] HTTP/2 session abandoned after a request waited ${i}s for it to connect to ${o}` : `[TransportFactory] HTTP/2 session replaced after ${i}s without response data for ${o}`), (0, I.incrementTransportMetric)(this.host, "transport.http2_session_replaced", {
            reason: r
        }), (0, I.emitTransportStructuredLog)(this.host, {
            level: "warn",
            message: "establish_timeout" === r ? "HTTP/2 session abandoned while connecting" : "HTTP/2 session replaced after a stream read nothing",
            metadata: {
                service: "transport_factory",
                subkey: "http2_session_replaced",
                reason: r,
                ..."establish_timeout" === r ? {
                    waitedMs: Math.round(t)
                } : {
                    silentForMs: Math.round(t)
                },
                host: o
            }
        });
    }
    destroyAllAgents() {
        for (const e of this.activeAgents)e.destroy();
        this.activeAgents.clear();
        const e = Date.now();
        this.pruneRetiredSessionManagers(e);
        for (const t of this.activeSessionManagers)this.retiredSessionManagers.set(t, e);
        this.activeSessionManagers.clear(), this.dnsOrderCache.clear();
    }
    pruneRetiredSessionManagers(e) {
        for (const [t, r] of this.retiredSessionManagers)if (e - r > 6e5) {
            const n = t.state(), s = Math.round((e - r) / 1e3);
            if ("open" === n) {
                this.debugLog.info(`[TransportFactory] Deferring abort of retired HTTP/2 session manager with open streams (retired ${s}s ago)`), y.StructuredLogProviderImpl.info("transport", "Retired HTTP/2 session manager abort deferred (open streams)", {
                    service: "transport_factory",
                    subkey: "retired_session_manager_abort_deferred",
                    retiredSeconds: s
                });
                continue;
            }
            this.debugLog.info(`[TransportFactory] Aborting retired HTTP/2 session manager (state=${n}, retired ${s}s ago)`), t.abort(), this.retiredSessionManagers.delete(t);
        }
    }
    abortAllSessionManagers() {
        for (const e of this.activeSessionManagers)e.abort();
        this.activeSessionManagers.clear();
        for (const [e] of this.retiredSessionManagers)e.abort();
        this.retiredSessionManagers.clear();
    }
};
