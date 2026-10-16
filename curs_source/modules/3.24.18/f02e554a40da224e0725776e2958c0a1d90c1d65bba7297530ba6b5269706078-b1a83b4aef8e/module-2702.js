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
}), exports.AiConnectTransportHandler = exports.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = exports.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = void 0;
const a = o(require("./module-7598.js")), u = require("./module-7714.js"), c = require("./module-7213.js"), l = require("./module-6313.js"), m = require("./module-3177.js"), d = require("./module-4222.js"), f = require("./module-2795.js"), p = require("./module-7949.js"), h = require("./module-4430.js"), g = require("./module-4410.js"), A = require("./module-9736.js"), _ = require("./module-2339.js"), y = require("./module-6263.js"), w = require("./module-8617.js"), S = require("./module-7158.js"), J = require("./module-8982.js"), B = require("./module-8394.js"), E = require("./module-8485.js"), I = require("./module-7126.js"), C = require("./module-6920.js"), b = require("./module-6230.js"), k = require("./module-9329.js"), v = require("./module-2384.js"), q = require("./module-1691.js"), R = require("./module-6704.js"), P = require("./module-1831.js"), T = require("./module-1780.js"), x = require("./module-1033.js"), N = require("./module-668.js"), D = require("./module-6599.js");
exports.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = {
    [m.ChatService.methods.streamUnifiedChatWithTools.name]: m.ChatService.methods.streamUnifiedChatWithToolsSSE,
    [m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: m.ChatService.methods.streamUnifiedChatWithToolsIdempotentSSE,
    [h.HealthService.methods.streamBidi.name]: h.HealthService.methods.streamBidiSSE,
    [c.AiService.methods.streamStt.name]: c.AiService.methods.streamSttSSE,
    [c.AiService.methods.streamBugBotAgentic.name]: c.AiService.methods.streamBugBotAgenticSSE,
    [c.AiService.methods.streamUiBestOfNJudge.name]: c.AiService.methods.streamUiBestOfNJudgeSSE,
    [u.AgentService.methods.run.name]: u.AgentService.methods.runSSE,
    [g.InferenceService.methods.runInference.name]: g.InferenceService.methods.runInferenceSSE
}, exports.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = {
    [m.ChatService.methods.streamUnifiedChatWithTools.name]: {
        ...m.ChatService.methods.streamUnifiedChatWithToolsPoll,
        O: m.ChatService.methods.streamUnifiedChatWithTools.O
    },
    [m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: {
        ...m.ChatService.methods.streamUnifiedChatWithToolsIdempotentPoll,
        O: m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.O
    },
    [h.HealthService.methods.streamBidi.name]: {
        ...h.HealthService.methods.streamBidiPoll,
        O: h.HealthService.methods.streamBidi.O
    },
    [c.AiService.methods.streamStt.name]: {
        ...c.AiService.methods.streamSttPoll,
        O: c.AiService.methods.streamSttSSE.O
    },
    [c.AiService.methods.streamBugBotAgentic.name]: {
        ...c.AiService.methods.streamBugBotAgenticPoll,
        O: c.AiService.methods.streamBugBotAgenticSSE.O
    },
    [c.AiService.methods.streamUiBestOfNJudge.name]: {
        ...c.AiService.methods.streamUiBestOfNJudgePoll,
        O: c.AiService.methods.streamUiBestOfNJudgeSSE.O
    },
    [u.AgentService.methods.run.name]: {
        ...u.AgentService.methods.runPoll,
        O: u.AgentService.methods.run.O
    },
    [g.InferenceService.methods.runInference.name]: {
        ...g.InferenceService.methods.runInferencePoll,
        O: g.InferenceService.methods.runInference.O
    }
};
exports.AiConnectTransportHandler = class {
    _updateTransportMap(t) {
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[y.RepositoryService.typeName] = t.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[y.GitIndexService.typeName] = t.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[S.UploadService.typeName] = t.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[d.CmdKService.typeName] = t.cmdkTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[p.FileSyncService.typeName] = t.geoCppTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[h.HealthService.typeName] = t.agentBidiTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[l.BackgroundComposerService.typeName] = t.backgroundComposerProxyTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[u.AgentService.typeName] = t.agentBidiTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[J.OriginService.typeName] = t.originTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[_.RemoteAgentHostPresenceService.typeName] = t.remoteAgentHostPresenceTransport, this._overrideMethodNameToTransportMap[u.AgentService.methods.run.name] = t.agentBidiTransport;
        const e = void 0 !== t.localLoopInferenceTransport && void 0 !== t.localLoopInferenceUrl && t.localLoopInferenceUrl !== this.localLoopInferenceFellBackUrl;
        this._overrideMethodNameToTransportMap[g.InferenceService.methods.runInference.name] = e && void 0 !== t.localLoopInferenceTransport ? t.localLoopInferenceTransport : t.agenticComposerTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[A.PrivateInferenceService.typeName] = t.agenticComposerTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamNextCursorPrediction.name] = t.geoCppTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.getCppEditClassification.name] = t.geoCppTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamCpp.name] = t.geoCppTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.cppConfig.name] = t.cppConfigTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.cppEditHistoryAppend.name] = t.telemTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.cppAppend.name] = t.telemTransport, this._overrideMethodNameToTransportMap[m.ChatService.methods.streamUnifiedChatWithTools.name] = t.agenticComposerTransport, this._overrideMethodNameToTransportMap[m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name] = t.agenticComposerTransport, this._overrideMethodNameToTransportMap[m.ChatService.methods.warmStreamUnifiedChatWithTools.name] = t.agenticComposerTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamStt.name] = t.agenticComposerTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamBugBotAgentic.name] = t.agenticComposerTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamUiBestOfNJudge.name] = t.agenticComposerTransport, this._overrideMethodNameToTransportMap[f.DashboardService.methods.listBackgroundComposerSecrets.name] = t.backgroundComposerProxyTransport, this._overrideMethodNameToTransportMap[f.DashboardService.methods.createBackgroundComposerSecret.name] = t.backgroundComposerProxyTransport, this._overrideMethodNameToTransportMap[f.DashboardService.methods.revokeBackgroundComposerSecret.name] = t.backgroundComposerProxyTransport;
    }
    constructor(t){
        this.host = t, this.INACTIVITY_THRESHOLD = 18e5, this.loggedTokenFallback = !1, this.disposables = [], this.numMsForRequestToResetConnection = 1e4, this.http1KeepaliveDisabled = !1, this.agentConnectionPoolSize = 4, this.disposed = !1, this._ready = !1, this.transportRebuildQueue = Promise.resolve(), this._overrideMethodNameToTransportMap = {
            [c.AiService.methods.streamNextCursorPrediction.name]: void 0,
            [c.AiService.methods.getCppEditClassification.name]: void 0,
            [c.AiService.methods.cppConfig.name]: void 0,
            [c.AiService.methods.streamCpp.name]: void 0,
            [c.AiService.methods.cppEditHistoryAppend.name]: void 0,
            [c.AiService.methods.cppAppend.name]: void 0,
            [m.ChatService.methods.streamUnifiedChatWithTools.name]: void 0,
            [m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: void 0,
            [m.ChatService.methods.warmStreamUnifiedChatWithTools.name]: void 0,
            [c.AiService.methods.streamStt.name]: void 0,
            [c.AiService.methods.streamBugBotAgentic.name]: void 0,
            [c.AiService.methods.streamUiBestOfNJudge.name]: void 0,
            [f.DashboardService.methods.listBackgroundComposerSecrets.name]: void 0,
            [f.DashboardService.methods.createBackgroundComposerSecret.name]: void 0,
            [f.DashboardService.methods.revokeBackgroundComposerSecret.name]: void 0,
            [u.AgentService.methods.run.name]: void 0,
            [g.InferenceService.methods.runInference.name]: void 0
        }, this._bidiEndpointToSSEMethodMap = exports.BIDI_ENDPOINT_TO_SSE_METHOD_MAP, this._bidiEndpointToPollMethodMap = exports.BIDI_ENDPOINT_TO_POLL_METHOD_MAP, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides = {
            [y.RepositoryService.typeName]: void 0,
            [y.GitIndexService.typeName]: void 0,
            [S.UploadService.typeName]: void 0,
            [d.CmdKService.typeName]: void 0,
            [p.FileSyncService.typeName]: void 0,
            [l.BackgroundComposerService.typeName]: void 0,
            [h.HealthService.typeName]: void 0,
            [u.AgentService.typeName]: void 0,
            [J.OriginService.typeName]: void 0,
            [_.RemoteAgentHostPresenceService.typeName]: void 0,
            [A.PrivateInferenceService.typeName]: void 0
        }, this.debugLog = t.debugLog, this.isSetup = new Promise((t)=>{
            this.isSetupResolve = t;
        }), this.authReady = new Promise((t)=>{
            this.authReadyResolve = t;
        }), this.cookieJar = new E.CookieJar, this.clientKey = a.randomBytes(32), this.transportFactory = new x.TransportFactory(t, this.cookieJar, ()=>{
            if (void 0 !== this.accessToken) return this.accessToken;
            const e = t.getCursorAuthToken();
            return this.loggedTokenFallback || (this.loggedTokenFallback = !0, I.StructuredLogProviderImpl.info("auth", "ext-host token cache empty; fell back to live host read", {
                subkey: "exthost_token_fallback",
                hasLiveToken: String(void 0 !== e)
            })), e;
        }, this.clientKey, ()=>this.createAbortAndErrorInterceptor()), this.bidiTransportFactory = new q.BidiTransportFactory(t, this.transportFactory, this._bidiEndpointToSSEMethodMap, this._bidiEndpointToPollMethodMap), this.setupEventListeners(), this.getInitialValues().catch((t)=>{
            this.debugLog.error("[AiConnectTransportHandler] getInitialValues failed during init", t);
        }), this.networkChangeMonitor = new T.NetworkChangeMonitor(t, 5e3, ()=>this.setup("network_change")), this.disposables.push(this.networkChangeMonitor), this.disposables.push(this.transportFactory.getPrivateInferenceEnablement().onDidChange((t)=>{
            "enabled" === t && this.ownedAgentRunWebSocketSelection?.drain();
        })), this.setupHttp1KeepaliveDisabledRefresh();
    }
    get isDisposed() {
        return this.disposed;
    }
    dispose() {
        this.disposed = !0, this.resolveAuthReady(!1), this.resolveIsSetup(), this.disposables.forEach((t)=>{
            t.dispose();
        }), this.ownedAgentRunWebSocketSelection?.dispose(), this.ownedAgentRunWebSocketSelection = void 0, this.transportFactory.abortAllSessionManagers(), this.transportFactory.destroyAllAgents();
    }
    resolveAuthReady(t) {
        const e = this.authReadyResolve;
        void 0 !== e && (this.authReadyResolve = void 0, e(t));
    }
    resolveIsSetup() {
        const t = this.isSetupResolve;
        void 0 !== t && (this.isSetupResolve = void 0, t());
    }
    setupEventListeners() {
        this.disposables.push(this.host.onDidChangeCursorAuthToken((t)=>{
            this.accessToken = t, void 0 !== this.cursorCreds && this.setup("auth_token");
        })), this.disposables.push(this.host.onDidChangeCursorCreds((t)=>{
            this.cursorCreds = t, this.setup("creds");
        })), this.disposables.push(this.host.onDidChangeHttpProtocolSettings(()=>{
            this.setup("protocol_settings");
        }));
        const t = setInterval(async ()=>{
            await this.setServerConfig(), this.lastServerHttp2DisabledValue !== (await this.getConfig())?.http2Config && (this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config, await this.setup("server_config"));
        }, 6e5);
        this.disposables.push({
            dispose: ()=>clearInterval(t)
        });
    }
    resolveHttp1Reason() {
        return this.lastServerHttp2DisabledValue === w.Http2Config.FORCE_ALL_DISABLED ? "server_force_all" : this.lastServerHttp2DisabledValue === w.Http2Config.FORCE_BIDI_DISABLED ? "server_force_bidi" : this.lastServerHttp2DisabledValue !== w.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== w.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled() ? "client_disabled" : void 0;
    }
    getWsReachabilityProbeContext() {
        if (void 0 === this.cursorCreds) return;
        const t = this.resolveHttp1Reason();
        return void 0 !== t ? {
            backendUrl: this.cursorCreds.backendUrl,
            http1Reason: t,
            mode: this.host.isHttp1SseDisabled() ? "poll" : "sse",
            hasEffectiveProxy: this.host.hasEffectiveProxy?.() ?? !1
        } : void 0;
    }
    recordTransportRebuilt(t, e) {
        const r = this.lastBidiTransportMode ?? "none", n = this.resolveHttp1Reason() ?? "none";
        this.lastBidiTransportMode = e, this.debugLog.info(`[AiConnectTransportHandler] transports rebuilt (${t}): ${r} -> ${e}, http1 reason ${n}`), (0, N.incrementTransportMetric)(this.host, "transport.rebuilt", {
            trigger: t,
            mode: e,
            previous_mode: r,
            http1_reason: n
        }), (0, N.emitTransportStructuredLog)(this.host, {
            level: "info",
            message: "Transports rebuilt",
            metadata: {
                service: "transport_factory",
                subkey: "transport_rebuilt",
                trigger: t,
                mode: e,
                previousMode: r,
                modeChanged: r !== e,
                http1Reason: n
            }
        });
    }
    maybeScheduleWsReachabilityProbe() {
        const t = (0, D.scheduleWsReachabilityProbe)({
            host: this.host,
            getContext: ()=>this.getWsReachabilityProbeContext()
        });
        void 0 !== t && this.disposables.push(t), this.maybeScheduleWsDurabilityProbe();
    }
    maybeScheduleWsDurabilityProbe() {
        const t = (0, D.scheduleWsDurabilityProbe)({
            host: this.host,
            getContext: ()=>this.getWsReachabilityProbeContext()
        });
        void 0 !== t && this.disposables.push(t);
    }
    setupHttp1KeepaliveDisabledRefresh() {
        const t = async ()=>{
            try {
                const t = await this.host.checkFeatureGate("http1_keepalive_disabled");
                this.http1KeepaliveDisabled !== t && (this.debugLog.info(`[AiConnectTransportHandler] HTTP/1 keepalive disabled flag updated: ${this.http1KeepaliveDisabled}`), I.StructuredLogProviderImpl.info("transport", "HTTP/1 keepalive disabled flag updated", {
                    service: "transport_factory",
                    subkey: "http1_keepalive_disabled_flag_updated",
                    http1KeepaliveDisabled: t
                })), this.http1KeepaliveDisabled = t;
            } catch (t) {
                this.debugLog.error("[AiConnectTransportHandler] Error checking HTTP/1 keepalive disabled flag, keeping previous value", t);
            }
        };
        t(), this.disposables.push(this.host.onDidChangeGates((e)=>{
            e.changedGates?.includes("http1_keepalive_disabled") && t(), e.changedGates?.includes("ws_reachability_probe") && this.maybeScheduleWsReachabilityProbe(), e.changedGates?.includes("ws_dark_durability_probe") && ((0, D.cancelWsDurabilityProbe)(), this.maybeScheduleWsDurabilityProbe());
        }));
    }
    async getInitialValues() {
        let t = !1;
        try {
            this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config;
            const { creds: e, token: r } = await (0, v.pollForAuthValues)({
                getCreds: ()=>this.host.getCursorCreds(),
                getToken: ()=>this.host.getCursorAuthToken()
            }, {
                onTimeout: (t)=>{
                    this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: timeout waiting for auth", t), I.StructuredLogProviderImpl.info("auth", "Auth init timeout - proceeding without token (likely logged out)", {
                        subkey: "auth_init_timeout",
                        source: "handler",
                        ...t
                    });
                },
                onRaceConditionPrevented: (t)=>{
                    this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: race condition prevented", t), I.StructuredLogProviderImpl.warn("auth", "Auth token race condition prevented at startup", {
                        subkey: "auth_race_condition_prevented",
                        source: "handler",
                        ...t
                    });
                }
            }, this.debugLog);
            this.cursorCreds = e, this.accessToken = r, t = void 0 !== this.accessToken, this.debugLog.info("[AiConnectTransportHandler] getInitialValues: auth ready", {
                hasAccessToken: t
            }), this.resolveAuthReady(t), await this.setup("init");
        } finally{
            this.resolveAuthReady(t);
        }
    }
    getAiServerClient() {
        if (void 0 === this._aiServerClient) throw new Error("INVARIANT VIOLATION: AiServerClient is undefined");
        const t = performance.now();
        return void 0 !== this.lastClientCreationTime && t - this.lastClientCreationTime > this.INACTIVITY_THRESHOLD && this.refresh(), this.lastClientCreationTime = t, this._aiServerClient;
    }
    async getBackgroundComposerClient() {
        if (await this.isSetup, void 0 === this._backgroundComposerClient) throw new Error("INVARIANT VIOLATION: BackgroundComposerClient is undefined");
        return this._backgroundComposerClient;
    }
    getAgentClient() {
        if (void 0 === this._agentClient) throw new Error("INVARIANT VIOLATION: AgentClient is undefined");
        return this._agentClient;
    }
    getFilesyncClient() {
        if (void 0 === this._filesyncClient) throw new Error("INVARIANT VIOLATION: FilesyncClient is undefined");
        return this._filesyncClient;
    }
    getTransport() {
        if (void 0 === this._transport) throw new Error("INVARIANT VIOLATION: Connect transport is undefined");
        return this._transport;
    }
    getTransportIfReady() {
        return this._transport;
    }
    getPrivateInferenceEnablement() {
        return this.transportFactory.getPrivateInferenceEnablement();
    }
    isHttp2TransportFor(t) {
        return !0 === this._getTransportForService(t.serviceName, t.methodName, !1)?.isHttp2;
    }
    isDebug() {
        return (this.cursorCreds?.backendUrl?.includes("lclhst.build") || this.cursorCreds?.backendUrl?.includes("localhost")) ?? !1;
    }
    async refresh() {
        await this.setup("refresh");
    }
    _getTransportForService(t, e, r = !0) {
        let n;
        if (t === h.HealthService.typeName) {
            return this.host.isHttp2Disabled() && e !== h.HealthService.methods.streamBidi.name ? this._backendTransport : this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[h.HealthService.typeName];
        }
        if (n = e in this._overrideMethodNameToTransportMap ? this._overrideMethodNameToTransportMap[e] : t in this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides ? this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[t] : this._backendTransport, void 0 !== n) return r && (n.usage++, !0 === n.isHttp2 && n.usage > 500 && this.createTransports("usage_rotation")), n;
    }
    async setup(t) {
        await this.createTransports(t);
        const e = this.createMultiProxyTransport();
        this._transport = e, this._aiServerClient = (0, B.createPromiseClient)(c.AiService, e), this._filesyncClient = (0, B.createPromiseClient)(p.FileSyncService, e), this._backgroundComposerClient = (0, B.createPromiseClient)(l.BackgroundComposerService, e), this._agentClient = (0, B.createPromiseClient)(u.AgentService, e), this.resolveIsSetup();
    }
    createMultiProxyTransport() {
        if (!this._ready) throw new Error("INVARIANT VIOLATION: This should not be called without having this._ready.");
        const t = this;
        return {
            unary (e, r, n, s, i, o, a) {
                const u = t._getTransportForService(e.typeName, r.name);
                if (void 0 === u) throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + e.typeName);
                return u.transport.unary(e, r, n, s, i, o, a);
            },
            stream (e, r, n, s, i, o, a) {
                const u = t._getTransportForService(e.typeName, r.name);
                if (void 0 === u) throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + e.typeName);
                return u.transport.stream(e, r, n, s, i, o, a);
            },
            getTransportHost: (e, r)=>t._getTransportForService(e, r, !1)?.host
        };
    }
    async setServerConfig() {
        try {
            this.config = w.GetServerConfigResponse.fromJson(await this.host.getCachedServerConfigJson());
        } catch (t) {
            this.debugLog.error("Error getting server config", t);
        }
    }
    async getConfig() {
        return void 0 === this.config && await this.setServerConfig(), this.config;
    }
    createTransports(t) {
        const e = this.transportRebuildQueue.then(async ()=>{
            if (!this.disposed) try {
                await this.createTransportsForLatestContext(t);
            } finally{
                this.disposed && (this.ownedAgentRunWebSocketSelection?.dispose(), this.ownedAgentRunWebSocketSelection = void 0, this.transportFactory.abortAllSessionManagers(), this.transportFactory.destroyAllAgents());
            }
        });
        return this.transportRebuildQueue = e.catch(()=>{}), e;
    }
    async createTransportsForLatestContext(t) {
        if (!this.cursorCreds) throw new Error("CursorCreds is undefined");
        const e = this.ownedAgentRunWebSocketSelection;
        this.transportFactory.destroyAllAgents();
        const r = ()=>this.http1KeepaliveDisabled, n = (await (0, R.getHttp1KeepaliveConfig)(this.host)).keepAliveInitialDelayMs;
        try {
            const t = await this.host.getDynamicConfigValue("http2_agent_connection_pool_config");
            t && "object" == typeof t && "poolSize" in t && "number" == typeof t.poolSize && t.poolSize > 0 && (this.agentConnectionPoolSize = t.poolSize);
        } catch (t) {
            this.debugLog.error("[AiConnectTransportHandler] Error fetching connection pool config, using default", t);
        }
        const s = (()=>this.lastServerHttp2DisabledValue === w.Http2Config.FORCE_ALL_DISABLED || this.lastServerHttp2DisabledValue === w.Http2Config.FORCE_BIDI_DISABLED || this.lastServerHttp2DisabledValue !== w.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== w.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled())(), { backendUrl: i, repoBackendUrl: o, geoCppBackendUrl: a, cppConfigBackendUrl: u, cmdkBackendUrl: c, telemBackendUrl: l, originBackendUrl: m, bcProxyUrl: d, agentBackendUrlNonPrivacy: f, localLoopInferenceUrl: p } = this.cursorCreds, h = f.default || i, g = h && !s ? h : i;
        this.maybeScheduleWsReachabilityProbe(), this.transportFactory.setHttp2SessionEstablishTimeoutMs(await (0, R.getHttp2SessionEstablishTimeoutMs)(this.host)), this._backendTransport = this.transportFactory.createTransport({
            baseUrl: i,
            useHttp2: !1,
            maybeUseCppSpoofToken: !1,
            pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.BACKEND),
            getHttp1KeepaliveDisabled: r,
            http1KeepaliveInitialDelayMs: n
        }), this._bidiTransport = this.transportFactory.createTransport({
            baseUrl: i,
            useHttp2: !1,
            maybeUseCppSpoofToken: !1,
            pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.BIDI),
            getHttp1KeepaliveDisabled: r,
            http1KeepaliveInitialDelayMs: n
        });
        const A = this.bidiTransportFactory.createTransport({
            baseUrl: g,
            useHttp2: !s,
            maybeUseCppSpoofToken: !0,
            bidiTransport: this._bidiTransport,
            pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.AGENT),
            getHttp1KeepaliveDisabled: r,
            http1KeepaliveInitialDelayMs: n,
            usePooledConnections: !0,
            connectionPoolSize: this.agentConnectionPoolSize
        });
        let _, y;
        if (p && !s && p !== this.localLoopInferenceFellBackUrl) {
            const t = p;
            y = t, _ = this.bidiTransportFactory.createTransport({
                baseUrl: t,
                useHttp2: !0,
                maybeUseCppSpoofToken: !0,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.LOCAL_LOOP_INFERENCE),
                usePooledConnections: !0,
                connectionPoolSize: this.agentConnectionPoolSize
            }), _.transport = (S = _.transport, J = (e)=>this.fallBackLocalLoopInference(t, e), {
                unary: (t, e, r, n, s, i, o)=>S.unary(t, e, r, n, s, i, o),
                async stream (t, e, r, n, s, i, o) {
                    try {
                        return await S.stream(t, e, r, n, s, i, o);
                    } catch (t) {
                        const e = B.ConnectError.from(t);
                        if (!0 === r?.aborted || e.code !== B.Code.Unimplemented && e.code !== B.Code.Unavailable) throw t;
                        throw J(e), new B.ConnectError("connection aborted (local-loop inference fell back to the backend URL)", B.Code.Unavailable, void 0, void 0, t);
                    }
                }
            });
        }
        var S, J;
        const E = {
            repoTransport: this.transportFactory.createTransport({
                baseUrl: o,
                useHttp2: !1,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.REPO),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n,
                overrideAuthToken: async ()=>{
                    if (o.includes("repo42.cursor.sh") && i.includes("localhost")) {
                        const t = await this.getConfig();
                        if (t?.indexingConfig?.repo42AuthToken) return t.indexingConfig.repo42AuthToken;
                    }
                }
            }),
            http2RepoTransport: this.transportFactory.createTransport({
                baseUrl: o,
                useHttp2: !s,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.HTTP2_REPO),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n,
                overrideAuthToken: async ()=>{
                    if (o.includes("repo42.cursor.sh") && i.includes("localhost")) {
                        const t = await this.getConfig();
                        if (t?.indexingConfig?.repo42AuthToken) return t.indexingConfig.repo42AuthToken;
                    }
                }
            }),
            geoCppTransport: this.transportFactory.createTransport({
                baseUrl: a,
                useHttp2: !s && a.includes(".cursor.sh") && !a.includes("api2.cursor.sh"),
                maybeUseCppSpoofToken: !0,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.GEO_CPP),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            cppConfigTransport: this.transportFactory.createTransport({
                baseUrl: u,
                useHttp2: !s && u.includes(".cursor.sh") && !u.includes("api2.cursor.sh"),
                maybeUseCppSpoofToken: !0,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.CPP_CONFIG),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            cmdkTransport: this.transportFactory.createTransport({
                baseUrl: c,
                useHttp2: !s && c.includes("api3.cursor"),
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.CMDK),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            telemTransport: this.transportFactory.createTransport({
                baseUrl: l,
                useHttp2: !s && l.includes("api3.cursor"),
                maybeUseCppSpoofToken: !0,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.TELEM),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            originTransport: this.transportFactory.createTransport({
                baseUrl: m,
                useHttp2: !1,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.ORIGIN),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            remoteAgentHostPresenceTransport: this.transportFactory.createTransport({
                baseUrl: i,
                useHttp2: !0,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.REMOTE_AGENT_HOST_PRESENCE, {
                    fallbackDefaults: R.HTTP2_PING_PRODUCTION_DEFAULTS
                }),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n,
                sendCompression: b.adaptiveGzip,
                onGoaway: ()=>this.host.notifyRemoteAgentHostTunnelGoaway?.()
            }),
            agenticComposerTransport: this.bidiTransportFactory.createTransport({
                baseUrl: i,
                useHttp2: !s,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.AGENTIC_COMPOSER),
                maybeUseCppSpoofToken: !0,
                bidiTransport: this._bidiTransport
            }),
            agentBidiTransport: A,
            localLoopInferenceTransport: _,
            localLoopInferenceUrl: y,
            backgroundComposerProxyTransport: this.transportFactory.createTransport({
                baseUrl: d,
                useHttp2: !s,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.BACKGROUND_COMPOSER_PROXY, {
                    fallbackDefaults: R.HTTP2_PING_PRODUCTION_DEFAULTS
                }),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n,
                overrideAuthToken: async ()=>{
                    if (d.includes("api2.cursor.sh") && i.includes("localhost")) {
                        const t = await this.getConfig();
                        if (t?.indexingConfig?.repo42AuthToken) return t.indexingConfig.repo42AuthToken;
                    }
                }
            })
        }, I = this.createAgentRunWebSocketSelectionForTransportContext({
            httpTransport: A.transport,
            httpAgentUrl: g,
            agentUsesHttp2: !s
        });
        if (A.transport = I.transport, this.disposed) I.dispose();
        else {
            this.transportConfig = E, this._updateTransportMap(E), this.ownedAgentRunWebSocketSelection = I, this._ready = !0, this.recordTransportRebuilt(t, (0, N.resolveHttpTransportMode)({
                http2Disabled: s,
                http1SseDisabled: this.host.isHttp1SseDisabled()
            })), "enabled" === this.transportFactory.getPrivateInferenceEnablement().state && I.drain();
            try {
                e?.drain();
            } catch (t) {
                this.debugLog.error("[AiConnectTransportHandler] Error draining replaced Agent WebSocket selection", t);
            }
        }
    }
    fallBackLocalLoopInference(t, e) {
        this.localLoopInferenceFellBackUrl = t;
        const r = this.transportConfig;
        void 0 !== r && r.localLoopInferenceUrl === t ? (this._overrideMethodNameToTransportMap[g.InferenceService.methods.runInference.name] = r.agenticComposerTransport, (0, N.incrementTransportMetric)(this.host, "transport.local_loop_inference_fallback", {
            connect_code: B.Code[e.code]
        }), this.debugLog.warn("[AiConnectTransportHandler] RunInference fell back from the local-loop URL to the backend URL", e)) : this.debugLog.info("[AiConnectTransportHandler] a replaced local-loop URL failed late; current route unchanged", e);
    }
    createAgentRunWebSocketSelectionForTransportContext(t) {
        const e = (0, k.resolveAgentWebSocketUrl)(t.httpAgentUrl) ?? t.httpAgentUrl;
        return (0, k.createAgentRunWebSocketSelection)({
            httpTransport: t.httpTransport,
            baseUrl: t.httpAgentUrl,
            agentUsesHttp2: t.agentUsesHttp2,
            debugLog: this.debugLog,
            checkFeatureGate: (t)=>this.host.checkFeatureGate(t),
            getDynamicConfigValue: (t)=>this.host.getDynamicConfigValue(t),
            onDidChangeFeatureGate: (t, e)=>this.host.onDidChangeGates((r)=>{
                    const n = void 0 !== r.changedGates || void 0 !== r.changedConfigs || void 0 !== r.changedExperiments;
                    (!0 === r.changedGates?.includes(t) || !n) && e();
                }),
            onDidChangeDynamicConfig: (t, e)=>this.host.onDidChangeGates((r)=>{
                    const n = void 0 !== r.changedGates || void 0 !== r.changedConfigs || void 0 !== r.changedExperiments;
                    (!0 === r.changedConfigs?.includes(t) || !n) && e();
                }),
            connectionContext: (0, C.createHostAgentRunWebSocketConnectionContextSource)(this.host, {
                endpoint: e
            }),
            runWithNetworkContext: (t)=>this.host.runWithNetworkContext(t),
            observePreconnect: (t)=>{
                try {
                    this.host.metricsIncrement({
                        stat: "transport.agent_websocket_preconnect",
                        tags: {
                            outcome: t.outcome,
                            failure_category: t.failureCategory ?? "none"
                        }
                    });
                } catch  {}
            },
            metricsIncrement: (t)=>this.host.metricsIncrement(t),
            prepareUpgrade: (e)=>this.transportFactory.prepareAgentRunRequest({
                    baseUrl: t.httpAgentUrl,
                    maybeUseCppSpoofToken: !0,
                    callerHeaders: e.callerHeaders,
                    ...void 0 !== e.signal ? {
                        signal: e.signal
                    } : {}
                })
        });
    }
    async resetConnectionIfIpChangedOrNetworkReset(t) {
        const { isDisconnected: e } = await this.resetConnectionIfIpChanged(), r = void 0 !== t && this.networkChangeMonitor.networkId !== t;
        return e || r;
    }
    async resetConnectionIfIpChanged() {
        const t = this.cursorCreds?.backendUrl, e = this.accessToken;
        return void 0 === t || void 0 === e ? {
            isDisconnected: !1
        } : this.networkChangeMonitor.triggerCallbackIfDisconnected(t, e);
    }
    createAbortAndErrorInterceptor() {
        return (0, P.createAbortErrorAndTimeoutInterceptor)(()=>this.networkChangeMonitor.networkId, (t)=>this.resetConnectionIfIpChangedOrNetworkReset(t), this.numMsForRequestToResetConnection);
    }
};
