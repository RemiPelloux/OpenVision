"use strict";
var n, s = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(e, r);
    s && !("get" in s ? !e.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return e[r];
        }
    }), Object.defineProperty(t, n, s);
} : function(t, e, r, n) {
    void 0 === n && (n = r), t[n] = e[r];
}), i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    });
} : function(t, e) {
    t.default = e;
}), o = this && this.__importStar || (n = function(t) {
    return n = Object.getOwnPropertyNames || function(t) {
        var e = [];
        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[e.length] = r);
        return e;
    }, n(t);
}, function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for(var r = n(t), o = 0; o < r.length; o++)"default" !== r[o] && s(e, t, r[o]);
    return i(e, t), e;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TransportFactory = void 0;
const a = require("./module-7598.js"), u = o(require("./module-610.js")), c = o(require("./module-7067.js")), l = o(require("./module-1692.js")), m = require("./module-7714.js"), d = require("./module-4430.js"), f = (require("./module-8394.js"), require("./module-4384.js")), p = require("./module-8485.js"), h = require("./module-2642.js"), g = require("./module-5218.js"), A = require("./module-7126.js"), _ = require("./module-6920.js"), y = (require("./module-2709.js"), require("./module-2704.js")), w = require("./module-9008.js"), S = require("./module-6704.js"), J = require("./module-7319.js"), B = require("./module-8827.js"), E = require("./module-9997.js"), I = require("./module-668.js"), C = "x-cursor-team-id", b = new Set([
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
]), k = [
    "cf-",
    "proxy-",
    "sec-websocket-",
    "x-forwarded-"
];
function v(t) {
    const e = t.toLowerCase();
    return b.has(e) || k.some((t)=>e.startsWith(t));
}
function q(t) {
    const e = new Headers;
    return t.forEach((t, r)=>{
        v(r) || e.append(r, t);
    }), e;
}
exports.TransportFactory = class {
    constructor(t, e, r, n, s){
        this.host = t, this.cookieJar = e, this.getAccessToken = r, this.clientKey = n, this.createAbortAndErrorInterceptor = s, this.dnsOrderCache = new Map, this.activeAgents = new Set, this.activeSessionManagers = new Set, this.retiredSessionManagers = new Map, this.http2SessionEstablishTimeoutMs = S.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS, this.loggedBlockedRpcs = new Set, this.debugLog = t.debugLog, this.storedRandomness = (0, a.randomUUID)(), this.privateInferenceEnablement = t.getPrivateInferenceEnablement?.() ?? h.PRIVATE_INFERENCE_DISABLED, this.systemCertificatesReady = this.loadCertificates();
    }
    getPrivateInferenceEnablement() {
        return this.privateInferenceEnablement;
    }
    onPrivateInferenceBlockedRpc(t, e) {
        const r = `${t}/${e}`;
        this.loggedBlockedRpcs.has(r) || (this.loggedBlockedRpcs.add(r), this.host.log.info(`[TransportFactory] private inference perimeter refused ${r} (state=${this.privateInferenceEnablement.state}; further refusals of this RPC are logged at debug level)`)), this.debugLog.debug(`[TransportFactory] private inference perimeter refused ${r}`);
        try {
            this.host.metricsIncrement({
                stat: "transport.private_inference_perimeter_blocked",
                tags: {
                    service: t,
                    method: e
                }
            });
        } catch  {}
    }
    createPrivateInferencePerimeterInterceptor() {
        return (0, g.createPrivateInferencePerimeterInterceptor)(this.privateInferenceEnablement, (t, e)=>this.onPrivateInferenceBlockedRpc(t, e));
    }
    async loadCertificates() {
        try {
            const t = await this.host.loadSystemCertificates(), e = l.rootCertificates;
            this.systemCertificates = [
                ...t || [],
                ...e || []
            ];
        } catch (t) {
            this.debugLog.error("[TransportFactory] Failed to load system certificates:", t), this.systemCertificates = [
                ...l.rootCertificates
            ];
        }
    }
    getTransportHost(t) {
        try {
            return new URL(t).host;
        } catch  {
            return t;
        }
    }
    isLocalBaseUrl(t) {
        return null !== t.match(/(?:[^/]+\.)?lclhst\.build(?::\d+)?(?:\/|$)/) || null !== t.match(/(?:[^/]+\.)?localhost(?::\d+)?(?:\/|$)/);
    }
    applyStandardRequestHeaders(t) {
        const e = (0, a.randomUUID)();
        return this.host.applyRequestHeaders(t, e, this.clientKey.toString("hex")), t.header.set("x-cursor-streaming", "true"), e;
    }
    async applyAuthorization(t, e) {
        if (e.overrideAuthToken) {
            const r = await e.overrideAuthToken();
            if (r) return t.header.set("Authorization", `Bearer ${r}`), void this.addTeamIdHeader(t);
            try {
                this.debugLog.debug("[TransportFactory] overrideAuthToken provided but returned empty; falling back to stored token", t.service?.typeName, t.method?.name), A.StructuredLogProviderImpl.debug("auth", "overrideAuthToken empty; falling back", {
                    subkey: "override_token_empty",
                    service: t.service?.typeName ?? "unknown",
                    method: t.method?.name ?? "unknown"
                });
            } catch  {}
        }
        const r = this.getAccessToken();
        if (void 0 !== r) (0, J.willAccessTokenExpireSoon)(r) && this.host.triggerTokenRefresh(), t.header.set("Authorization", `Bearer ${e.maybeUseCppSpoofToken ? this.host.maybeGetSpoofedCppAccessToken(r, e.baseUrl) : r}`), this.addTeamIdHeader(t);
        else try {
            this.debugLog.warn("[TransportFactory] Authorization header omitted: no access token available", t.service?.typeName, t.method?.name), A.StructuredLogProviderImpl.warn("auth", "Authorization omitted: no access token", {
                subkey: "missing_access_token",
                service: t.service?.typeName ?? "unknown",
                method: t.method?.name ?? "unknown"
            });
        } catch  {}
    }
    async applyCookie(t) {
        const e = this.getAccessToken();
        try {
            const r = await this.cookieJar.getCookieString(t.baseUrl);
            if (r.length > 0) t.header.set("Cookie", r);
            else {
                await this.createCookie(t.baseUrl, t.url, e?.slice(0, 15) ?? this.storedRandomness);
                const r = await this.cookieJar.getCookieString(t.baseUrl);
                t.header.set("Cookie", r);
            }
        } catch  {
            this.debugLog.debug("Failed to set cookie");
        }
    }
    async prepareAgentRunRequest(t) {
        t.signal?.throwIfAborted();
        const e = new Headers;
        t.callerHeaders.forEach((t, r)=>{
            v(r) || e.append(r, t);
        });
        const r = {
            baseUrl: t.baseUrl,
            url: new URL(`/${m.AgentService.typeName}/${m.AgentService.methods.run.name}`, t.baseUrl).toString(),
            header: e,
            service: m.AgentService,
            method: m.AgentService.methods.run
        }, n = this.applyStandardRequestHeaders(r);
        t.signal?.throwIfAborted(), await this.applyAuthorization(r, t), t.signal?.throwIfAborted(), await this.applyCookie(r), t.signal?.throwIfAborted(), await this.systemCertificatesReady, t.signal?.throwIfAborted();
        const s = this.isLocalBaseUrl(t.baseUrl);
        return {
            headers: e,
            credentialFingerprint: (0, _.fingerprintAgentRunPoolIdentity)(e),
            runHeaders: q(e),
            requestId: e.get("x-request-id") ?? n,
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
    addTeamIdHeader(t) {
        const e = this.host.getTeamId(), r = t.header.has(C) || void 0 !== e ? "present" : "absent";
        t.header.has(C) || void 0 === e || t.header.set(C, e.toString());
        try {
            this.host.metricsIncrement({
                stat: "transport.team_id_header",
                tags: {
                    status: r
                }
            });
        } catch  {}
    }
    createTransport(t) {
        const { baseUrl: e, useHttp2: r, maybeUseCppSpoofToken: n, overrideAuthToken: s, pingConfig: i, getHttp1KeepaliveDisabled: o, http1KeepaliveInitialDelayMs: a, sendCompression: l = f.compressionGzip } = t;
        let m;
        m = !r && (0, y.isBaseUrlHttp2)(e) ? new c.Agent({
            keepAlive: !0
        }) : new c.Agent({
            keepAlive: !1
        }), this.activeAgents.add(m);
        const d = {
            agent: m
        };
        let p = e;
        !r && (0, y.isBaseUrlHttp2)(e) && (p = (0, y.replaceBaseUrlWithApi2)(e));
        const h = this.getTransportHost(p), g = this.isLocalBaseUrl(p), A = this.createInterceptors({
            baseUrl: p,
            maybeUseCppSpoofToken: n,
            overrideAuthToken: s
        }), _ = p.includes("gcpp") || p.includes("api4.cursor.sh") ? {
            lookup: (t, e, r)=>{
                u.lookup(t, {
                    ...e,
                    all: !0
                }, (e, n, s)=>{
                    if (e || void 0 === n) return r(e, n, s);
                    if ("string" == typeof n) return r(e, n, s);
                    this.dnsOrderCache.has(t) || this.dnsOrderCache.set(t, n);
                    const i = this.dnsOrderCache.get(t), o = n.length === i.length && n.every((t)=>i.some((e)=>e.address === t.address));
                    r(e, o ? i : n, s);
                });
            }
        } : void 0, w = this.host.isDevelopment() && g ? {
            rejectUnauthorized: !1,
            ALPNProtocols: [
                r ? "h2" : "http/1.1"
            ]
        } : {}, S = {
            baseUrl: p,
            useBinaryFormat: !0,
            interceptors: A,
            sendCompression: l,
            acceptCompression: [
                f.compressionGzip
            ]
        }, J = null != a ? {
            keepAlive: !0,
            keepAliveInitialDelay: a
        } : {};
        return {
            transport: r ? this.createHttp2Transport({
                commonOptions: S,
                nodeClientAffinityOptions: _,
                nodeInDevOptions: w,
                pingConfig: i,
                usePooledConnections: t.usePooledConnections,
                connectionPoolSize: t.connectionPoolSize,
                onGoaway: t.onGoaway
            }) : this.createHttp1Transport({
                commonOptions: S,
                http1Options: d,
                nodeClientAffinityOptions: _,
                nodeInDevOptions: w,
                http1KeepaliveOptions: J,
                getHttp1KeepaliveDisabled: o
            }),
            isHttp2: r,
            usage: 0,
            host: h
        };
    }
    createHttp2Transport(t) {
        const { commonOptions: e, nodeClientAffinityOptions: r, nodeInDevOptions: n, pingConfig: s, usePooledConnections: i, connectionPoolSize: o, onGoaway: a } = t, u = {
            ...r,
            ...n,
            ca: this.systemCertificates ?? void 0,
            minVersion: "TLSv1.2"
        }, c = {}, l = {
            service: "transport_factory",
            subkey: "http2_transport_created",
            httpVersion: "2",
            baseUrl: e.baseUrl,
            compression: {
                sendCompression: e.sendCompression?.name ?? "unknown",
                acceptCompression: e.acceptCompression?.map((t)=>t.name) ?? []
            },
            tls: {
                minVersion: u.minVersion,
                rejectUnauthorized: u.rejectUnauthorized ?? "default",
                alpnProtocols: u.ALPNProtocols ?? [
                    "h2"
                ],
                hasCustomCA: void 0 !== u.ca && Array.isArray(u.ca) && u.ca.length > 0,
                systemCertCount: this.systemCertificates?.length ?? 0
            },
            http2: {
                pingIdleConnection: s?.pingIdleConnection ?? null,
                pingIntervalMs: s?.pingIntervalMs ?? null,
                pingTimeoutMs: s?.pingTimeoutMs ?? null,
                idleConnectionTimeoutMs: s?.idleConnectionTimeoutMs ?? null,
                settings: {
                    initialWindowSize: c.settings?.initialWindowSize ?? "default",
                    maxFrameSize: c.settings?.maxFrameSize ?? "default",
                    maxConcurrentStreams: c.settings?.maxConcurrentStreams ?? "default",
                    maxHeaderListSize: c.settings?.maxHeaderListSize ?? "default",
                    enablePush: c.settings?.enablePush ?? !0,
                    headerTableSize: c.settings?.headerTableSize ?? "default"
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
        A.StructuredLogProviderImpl.info("transport", "HTTP2 transport created with network settings", l);
        const m = {
            pingIntervalMs: s?.pingIntervalMs,
            pingIdleConnection: s?.pingIdleConnection,
            pingTimeoutMs: s?.pingTimeoutMs,
            idleConnectionTimeoutMs: s?.idleConnectionTimeoutMs
        }, d = {
            ...u,
            ...c
        }, p = ()=>new w.Http2SessionReplacer({
                create: ()=>{
                    const t = new f.Http2SessionManager(e.baseUrl, m, d);
                    return this.activeSessionManagers.add(t), t;
                },
                onReplaced: (t, r, n)=>this.retireSessionManager(t, r, n, e.baseUrl),
                establishTimeoutMs: ()=>this.http2SessionEstablishTimeoutMs,
                onGoaway: a
            });
        if (i) {
            const t = null != o && o > 0 ? o : 4, r = [];
            for(let e = 0; e < t; e++)r.push(p());
            let n = 0;
            const i = new WeakMap;
            return (0, f.createConnectTransport)({
                ...e,
                httpVersion: "2",
                sessionManager: {
                    get authority () {
                        return new URL(e.baseUrl).origin;
                    },
                    async request (e, s, o, a) {
                        const u = r[n % t];
                        n++;
                        const c = await u.request(e, s, o, a);
                        return i.set(c, u), c;
                    },
                    notifyResponseByteRead (t) {
                        const e = i.get(t);
                        if (void 0 === e) for (const e of r)e.notifyResponseByteRead(t);
                        else e.notifyResponseByteRead(t);
                    }
                },
                nodeOptions: u,
                http2Options: c,
                pingIdleConnection: s?.pingIdleConnection ?? void 0,
                pingIntervalMs: s?.pingIntervalMs ?? void 0,
                pingTimeoutMs: s?.pingTimeoutMs ?? void 0,
                idleConnectionTimeoutMs: s?.idleConnectionTimeoutMs ?? void 0
            });
        }
        const h = p();
        return (0, f.createConnectTransport)({
            ...e,
            httpVersion: "2",
            sessionManager: h,
            nodeOptions: u,
            http2Options: c,
            pingIdleConnection: s?.pingIdleConnection ?? void 0,
            pingIntervalMs: s?.pingIntervalMs ?? void 0,
            pingTimeoutMs: s?.pingTimeoutMs ?? void 0,
            idleConnectionTimeoutMs: s?.idleConnectionTimeoutMs ?? void 0
        });
    }
    createHttp1Transport(t) {
        const { commonOptions: e, http1Options: r, nodeClientAffinityOptions: n, nodeInDevOptions: s, http1KeepaliveOptions: i, getHttp1KeepaliveDisabled: o } = t;
        if ("function" == typeof o) {
            this.debugLog.info("[TransportFactory] Creating dynamic HTTP/1 transports with keepalive killswitch");
            const t = (0, f.createConnectTransport)({
                ...e,
                httpVersion: "1.1",
                ...r,
                nodeOptions: {
                    ...n,
                    ...s,
                    ...i
                }
            }), a = (0, f.createConnectTransport)({
                ...e,
                httpVersion: "1.1",
                ...r,
                nodeOptions: {
                    ...n,
                    ...s
                }
            });
            return {
                unary: (e, r, n, s, i, u, c)=>(o() ? a : t).unary(e, r, n, s, i, u, c),
                stream: (e, r, n, s, i, u, c)=>(o() ? a : t).stream(e, r, n, s, i, u, c)
            };
        }
        const a = {
            ...n,
            ...s,
            ...i
        }, u = {
            service: "transport_factory",
            subkey: "http1_transport_created",
            httpVersion: "1.1",
            baseUrl: e.baseUrl,
            compression: {
                sendCompression: e.sendCompression?.name ?? "unknown",
                acceptCompression: e.acceptCompression?.map((t)=>t.name) ?? []
            },
            tls: {
                rejectUnauthorized: a.rejectUnauthorized ?? "default",
                alpnProtocols: a.ALPNProtocols ?? [
                    "http/1.1"
                ]
            },
            http1: {
                keepAlive: r.agent?.keepAlive ?? !1,
                keepAliveInitialDelay: i.keepAliveInitialDelay ?? null
            },
            dnsAffinity: {
                enabled: void 0 !== n?.lookup
            },
            dev: {
                isDevelopment: this.host.isDevelopment(),
                rejectUnauthorized: s.rejectUnauthorized ?? "default"
            }
        };
        return A.StructuredLogProviderImpl.info("transport", "HTTP/1.1 transport created with network settings", u), (0, f.createConnectTransport)({
            ...e,
            httpVersion: "1.1",
            ...r,
            nodeOptions: a
        });
    }
    createInterceptors({ baseUrl: t, maybeUseCppSpoofToken: e, overrideAuthToken: r }) {
        const n = [];
        n.push(this.createPrivateInferencePerimeterInterceptor());
        n.push((t)=>async (e)=>this.host.runWithNetworkContext(async ()=>(this.applyStandardRequestHeaders(e), await t(e)))), n.push((0, B.createLargeProtoLoggingInterceptor)(this.host)), n.push((0, E.createStreamRetryInterceptor)(this.host, {
            maxRetries: 3,
            baseDelayMs: 1e3,
            maxDelayMs: 3e4
        })), n.push((0, E.createUnaryRetryInterceptor)(this.host, {
            maxRetries: 3,
            baseDelayMs: 1e3,
            maxDelayMs: 3e4
        })), this.host.isDevelopment(), n.push(this.createAbortAndErrorInterceptor());
        n.push((t)=>async (e)=>{
                try {
                    return await t(e);
                } catch (t) {
                    const r = t;
                    if (r.message?.includes("expected h2 session, but ALPN protocol failed to negotiate") && e.service.typeName !== d.HealthService.typeName) {
                        const t = {
                            service: e.service.typeName,
                            method: e.method.name,
                            requestId: e.header.get("x-request-id") ?? void 0
                        };
                        this.recordHttp2KillSwitchFlip({
                            ...t,
                            action: "disable_http2",
                            reason: "alpn_negotiation_failed",
                            previousMode: this.resolveModeFromSettings()
                        }), this.host.setHttp2Disabled().catch(()=>{}), r.metadata && "function" == typeof r.metadata.get && r.metadata.get("issuer")?.endsWith("goskope.com") && (this.recordHttp2KillSwitchFlip({
                            ...t,
                            action: "disable_http1_sse",
                            reason: "netskope_issuer",
                            previousMode: (0, I.resolveHttpTransportMode)({
                                http2Disabled: !0,
                                http1SseDisabled: this.host.isHttp1SseDisabled()
                            })
                        }), this.host.setHttp1SseDisabled().catch(()=>{}));
                    }
                    throw t;
                }
            });
        n.push((n)=>async (s)=>(await this.applyAuthorization(s, {
                    baseUrl: t,
                    maybeUseCppSpoofToken: e,
                    ...void 0 !== r ? {
                        overrideAuthToken: r
                    } : {}
                }), await n(s)));
        return n.push((e)=>async (r)=>{
                await this.applyCookie({
                    baseUrl: t,
                    url: r.url,
                    header: r.header
                });
                const n = await e(r);
                try {
                    if (n.header.has("Set-Cookie")) {
                        const e = n.header.getSetCookie();
                        for (const r of e)await this.cookieJar.setCookie(r, t).catch((t)=>{});
                    }
                } catch (t) {
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
    recordHttp2KillSwitchFlip(t) {
        this.debugLog.info(`[TransportFactory] HTTP protocol kill switch flipped: ${t.action} (${t.reason}) after ${t.service}/${t.method} on ${t.previousMode}`), (0, I.incrementTransportMetric)(this.host, "transport.http2_kill_switch", {
            action: t.action,
            reason: t.reason,
            previous_mode: t.previousMode,
            service: t.service,
            method: t.method
        }), (0, I.emitTransportStructuredLog)(this.host, {
            level: "warn",
            message: "HTTP protocol kill switch flipped",
            metadata: {
                service: "transport_factory",
                subkey: "http2_kill_switch",
                action: t.action,
                reason: t.reason,
                previousMode: t.previousMode,
                rpcService: t.service,
                rpcMethod: t.method,
                requestId: t.requestId
            }
        });
    }
    async createCookie(t, e, r) {
        const n = new p.Cookie({
            key: "CursorCookie",
            value: `Cookie-${r}`,
            domain: new URL(t).hostname,
            path: e.replace(t, ""),
            expires: new Date(Date.now() + 864e5),
            httpOnly: !0,
            secure: !0,
            sameSite: "Strict"
        });
        await this.cookieJar.setCookie(n, t).catch((t)=>{});
    }
    setHttp2SessionEstablishTimeoutMs(t) {
        this.http2SessionEstablishTimeoutMs = t;
    }
    retireSessionManager(t, e, r, n) {
        const s = Date.now();
        this.pruneRetiredSessionManagers(s), this.activeSessionManagers.delete(t), this.retiredSessionManagers.set(t, s);
        const i = this.getTransportHost(n), o = Math.round(e / 1e3);
        this.debugLog.info("establish_timeout" === r ? `[TransportFactory] HTTP/2 session abandoned after a request waited ${o}s for it to connect to ${i}` : `[TransportFactory] HTTP/2 session replaced after ${o}s without response data for ${i}`), (0, I.incrementTransportMetric)(this.host, "transport.http2_session_replaced", {
            reason: r
        }), (0, I.emitTransportStructuredLog)(this.host, {
            level: "warn",
            message: "establish_timeout" === r ? "HTTP/2 session abandoned while connecting" : "HTTP/2 session replaced after a stream read nothing",
            metadata: {
                service: "transport_factory",
                subkey: "http2_session_replaced",
                reason: r,
                ..."establish_timeout" === r ? {
                    waitedMs: Math.round(e)
                } : {
                    silentForMs: Math.round(e)
                },
                host: i
            }
        });
    }
    destroyAllAgents() {
        for (const t of this.activeAgents)t.destroy();
        this.activeAgents.clear();
        const t = Date.now();
        this.pruneRetiredSessionManagers(t);
        for (const e of this.activeSessionManagers)this.retiredSessionManagers.set(e, t);
        this.activeSessionManagers.clear(), this.dnsOrderCache.clear();
    }
    pruneRetiredSessionManagers(t) {
        for (const [e, r] of this.retiredSessionManagers)if (t - r > 6e5) {
            const n = e.state(), s = Math.round((t - r) / 1e3);
            if ("open" === n) {
                this.debugLog.info(`[TransportFactory] Deferring abort of retired HTTP/2 session manager with open streams (retired ${s}s ago)`), A.StructuredLogProviderImpl.info("transport", "Retired HTTP/2 session manager abort deferred (open streams)", {
                    service: "transport_factory",
                    subkey: "retired_session_manager_abort_deferred",
                    retiredSeconds: s
                });
                continue;
            }
            this.debugLog.info(`[TransportFactory] Aborting retired HTTP/2 session manager (state=${n}, retired ${s}s ago)`), e.abort(), this.retiredSessionManagers.delete(e);
        }
    }
    abortAllSessionManagers() {
        for (const t of this.activeSessionManagers)t.abort();
        this.activeSessionManagers.clear();
        for (const [t] of this.retiredSessionManagers)t.abort();
        this.retiredSessionManagers.clear();
    }
};
