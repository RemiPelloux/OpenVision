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
}), exports.AiConnectTransportHandler = exports.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = exports.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = void 0;
const a = i(require("./module-77598.js")), c = require("./module-17714.js"), l = require("./module-77213.js"), u = require("./module-31791.js"), d = require("./module-33177.js"), p = require("./module-34222.js"), m = require("./module-72795.js"), h = require("./module-27949.js"), f = require("./module-94430.js"), g = require("./module-4410.js"), y = require("./module-5326.js"), w = require("./module-92339.js"), v = require("./module-76263.js"), _ = require("./module-38617.js"), A = require("./module-47158.js"), S = require("./module-88982.js"), b = require("./module-97163.js"), E = require("./module-58485.js"), I = require("./module-7126.js"), C = require("./module-26920.js"), k = require("./module-16230.js"), x = require("./module-9329.js"), T = require("./module-22384.js"), R = require("./module-91691.js"), B = require("./module-86704.js"), P = require("./module-31831.js"), J = require("./module-1780.js"), M = require("./module-41033.js"), q = require("./module-30668.js"), D = require("./module-26599.js");
exports.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = {
    [d.ChatService.methods.streamUnifiedChatWithTools.name]: d.ChatService.methods.streamUnifiedChatWithToolsSSE,
    [d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: d.ChatService.methods.streamUnifiedChatWithToolsIdempotentSSE,
    [f.HealthService.methods.streamBidi.name]: f.HealthService.methods.streamBidiSSE,
    [l.AiService.methods.streamStt.name]: l.AiService.methods.streamSttSSE,
    [l.AiService.methods.streamBugBotAgentic.name]: l.AiService.methods.streamBugBotAgenticSSE,
    [l.AiService.methods.streamUiBestOfNJudge.name]: l.AiService.methods.streamUiBestOfNJudgeSSE,
    [c.AgentService.methods.run.name]: c.AgentService.methods.runSSE,
    [g.InferenceService.methods.runInference.name]: g.InferenceService.methods.runInferenceSSE
}, exports.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = {
    [d.ChatService.methods.streamUnifiedChatWithTools.name]: {
        ...d.ChatService.methods.streamUnifiedChatWithToolsPoll,
        O: d.ChatService.methods.streamUnifiedChatWithTools.O
    },
    [d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: {
        ...d.ChatService.methods.streamUnifiedChatWithToolsIdempotentPoll,
        O: d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.O
    },
    [f.HealthService.methods.streamBidi.name]: {
        ...f.HealthService.methods.streamBidiPoll,
        O: f.HealthService.methods.streamBidi.O
    },
    [l.AiService.methods.streamStt.name]: {
        ...l.AiService.methods.streamSttPoll,
        O: l.AiService.methods.streamSttSSE.O
    },
    [l.AiService.methods.streamBugBotAgentic.name]: {
        ...l.AiService.methods.streamBugBotAgenticPoll,
        O: l.AiService.methods.streamBugBotAgenticSSE.O
    },
    [l.AiService.methods.streamUiBestOfNJudge.name]: {
        ...l.AiService.methods.streamUiBestOfNJudgePoll,
        O: l.AiService.methods.streamUiBestOfNJudgeSSE.O
    },
    [c.AgentService.methods.run.name]: {
        ...c.AgentService.methods.runPoll,
        O: c.AgentService.methods.run.O
    },
    [g.InferenceService.methods.runInference.name]: {
        ...g.InferenceService.methods.runInferencePoll,
        O: g.InferenceService.methods.runInference.O
    }
};
exports.AiConnectTransportHandler = class {
    _updateTransportMap(e) {
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[v.RepositoryService.typeName] = e.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[v.GitIndexService.typeName] = e.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[A.UploadService.typeName] = e.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[p.CmdKService.typeName] = e.cmdkTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[h.FileSyncService.typeName] = e.geoCppTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[f.HealthService.typeName] = e.agentBidiTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[u.BackgroundComposerService.typeName] = e.backgroundComposerProxyTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[c.AgentService.typeName] = e.agentBidiTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[S.OriginService.typeName] = e.originTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[w.RemoteAgentHostPresenceService.typeName] = e.remoteAgentHostPresenceTransport, this._overrideMethodNameToTransportMap[c.AgentService.methods.run.name] = e.agentBidiTransport;
        const t = void 0 !== e.localLoopInferenceTransport && void 0 !== e.localLoopInferenceUrl && e.localLoopInferenceUrl !== this.localLoopInferenceFellBackUrl;
        this._overrideMethodNameToTransportMap[g.InferenceService.methods.runInference.name] = t && void 0 !== e.localLoopInferenceTransport ? e.localLoopInferenceTransport : e.agenticComposerTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[y.PrivateInferenceService.typeName] = e.agenticComposerTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamNextCursorPrediction.name] = e.geoCppTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.getCppEditClassification.name] = e.geoCppTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamCpp.name] = e.geoCppTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.cppConfig.name] = e.cppConfigTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.cppEditHistoryAppend.name] = e.telemTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.cppAppend.name] = e.telemTransport, this._overrideMethodNameToTransportMap[d.ChatService.methods.streamUnifiedChatWithTools.name] = e.agenticComposerTransport, this._overrideMethodNameToTransportMap[d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name] = e.agenticComposerTransport, this._overrideMethodNameToTransportMap[d.ChatService.methods.warmStreamUnifiedChatWithTools.name] = e.agenticComposerTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamStt.name] = e.agenticComposerTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamBugBotAgentic.name] = e.agenticComposerTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamUiBestOfNJudge.name] = e.agenticComposerTransport, this._overrideMethodNameToTransportMap[m.DashboardService.methods.listBackgroundComposerSecrets.name] = e.backgroundComposerProxyTransport, this._overrideMethodNameToTransportMap[m.DashboardService.methods.createBackgroundComposerSecret.name] = e.backgroundComposerProxyTransport, this._overrideMethodNameToTransportMap[m.DashboardService.methods.revokeBackgroundComposerSecret.name] = e.backgroundComposerProxyTransport;
    }
    constructor(e){
        this.host = e, this.INACTIVITY_THRESHOLD = 18e5, this.loggedTokenFallback = !1, this.disposables = [], this.numMsForRequestToResetConnection = 1e4, this.http1KeepaliveDisabled = !1, this.agentConnectionPoolSize = 4, this.disposed = !1, this._ready = !1, this.transportRebuildQueue = Promise.resolve(), this._overrideMethodNameToTransportMap = {
            [l.AiService.methods.streamNextCursorPrediction.name]: void 0,
            [l.AiService.methods.getCppEditClassification.name]: void 0,
            [l.AiService.methods.cppConfig.name]: void 0,
            [l.AiService.methods.streamCpp.name]: void 0,
            [l.AiService.methods.cppEditHistoryAppend.name]: void 0,
            [l.AiService.methods.cppAppend.name]: void 0,
            [d.ChatService.methods.streamUnifiedChatWithTools.name]: void 0,
            [d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: void 0,
            [d.ChatService.methods.warmStreamUnifiedChatWithTools.name]: void 0,
            [l.AiService.methods.streamStt.name]: void 0,
            [l.AiService.methods.streamBugBotAgentic.name]: void 0,
            [l.AiService.methods.streamUiBestOfNJudge.name]: void 0,
            [m.DashboardService.methods.listBackgroundComposerSecrets.name]: void 0,
            [m.DashboardService.methods.createBackgroundComposerSecret.name]: void 0,
            [m.DashboardService.methods.revokeBackgroundComposerSecret.name]: void 0,
            [c.AgentService.methods.run.name]: void 0,
            [g.InferenceService.methods.runInference.name]: void 0
        }, this._bidiEndpointToSSEMethodMap = exports.BIDI_ENDPOINT_TO_SSE_METHOD_MAP, this._bidiEndpointToPollMethodMap = exports.BIDI_ENDPOINT_TO_POLL_METHOD_MAP, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides = {
            [v.RepositoryService.typeName]: void 0,
            [v.GitIndexService.typeName]: void 0,
            [A.UploadService.typeName]: void 0,
            [p.CmdKService.typeName]: void 0,
            [h.FileSyncService.typeName]: void 0,
            [u.BackgroundComposerService.typeName]: void 0,
            [f.HealthService.typeName]: void 0,
            [c.AgentService.typeName]: void 0,
            [S.OriginService.typeName]: void 0,
            [w.RemoteAgentHostPresenceService.typeName]: void 0,
            [y.PrivateInferenceService.typeName]: void 0
        }, this.debugLog = e.debugLog, this.isSetup = new Promise((e)=>{
            this.isSetupResolve = e;
        }), this.authReady = new Promise((e)=>{
            this.authReadyResolve = e;
        }), this.cookieJar = new E.CookieJar, this.clientKey = a.randomBytes(32), this.transportFactory = new M.TransportFactory(e, this.cookieJar, ()=>{
            if (void 0 !== this.accessToken) return this.accessToken;
            const t = e.getCursorAuthToken();
            return this.loggedTokenFallback || (this.loggedTokenFallback = !0, I.StructuredLogProviderImpl.info("auth", "ext-host token cache empty; fell back to live host read", {
                subkey: "exthost_token_fallback",
                hasLiveToken: String(void 0 !== t)
            })), t;
        }, this.clientKey, ()=>this.createAbortAndErrorInterceptor()), this.bidiTransportFactory = new R.BidiTransportFactory(e, this.transportFactory, this._bidiEndpointToSSEMethodMap, this._bidiEndpointToPollMethodMap), this.setupEventListeners(), this.getInitialValues().catch((e)=>{
            this.debugLog.error("[AiConnectTransportHandler] getInitialValues failed during init", e);
        }), this.networkChangeMonitor = new J.NetworkChangeMonitor(e, 5e3, ()=>this.setup("network_change")), this.disposables.push(this.networkChangeMonitor), this.disposables.push(this.transportFactory.getPrivateInferenceEnablement().onDidChange((e)=>{
            "enabled" === e && this.ownedAgentRunWebSocketSelection?.drain();
        })), this.setupHttp1KeepaliveDisabledRefresh();
    }
    get isDisposed() {
        return this.disposed;
    }
    dispose() {
        this.disposed = !0, this.resolveAuthReady(!1), this.resolveIsSetup(), this.disposables.forEach((e)=>{
            e.dispose();
        }), this.ownedAgentRunWebSocketSelection?.dispose(), this.ownedAgentRunWebSocketSelection = void 0, this.transportFactory.abortAllSessionManagers(), this.transportFactory.destroyAllAgents();
    }
    resolveAuthReady(e) {
        const t = this.authReadyResolve;
        void 0 !== t && (this.authReadyResolve = void 0, t(e));
    }
    resolveIsSetup() {
        const e = this.isSetupResolve;
        void 0 !== e && (this.isSetupResolve = void 0, e());
    }
    setupEventListeners() {
        this.disposables.push(this.host.onDidChangeCursorAuthToken((e)=>{
            this.accessToken = e, void 0 !== this.cursorCreds && this.setup("auth_token");
        })), this.disposables.push(this.host.onDidChangeCursorCreds((e)=>{
            this.cursorCreds = e, this.setup("creds");
        })), this.disposables.push(this.host.onDidChangeHttpProtocolSettings(()=>{
            this.setup("protocol_settings");
        }));
        const e = setInterval(async ()=>{
            await this.setServerConfig(), this.lastServerHttp2DisabledValue !== (await this.getConfig())?.http2Config && (this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config, await this.setup("server_config"));
        }, 6e5);
        this.disposables.push({
            dispose: ()=>clearInterval(e)
        });
    }
    resolveHttp1Reason() {
        return this.lastServerHttp2DisabledValue === _.Http2Config.FORCE_ALL_DISABLED ? "server_force_all" : this.lastServerHttp2DisabledValue === _.Http2Config.FORCE_BIDI_DISABLED ? "server_force_bidi" : this.lastServerHttp2DisabledValue !== _.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== _.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled() ? "client_disabled" : void 0;
    }
    getWsReachabilityProbeContext() {
        if (void 0 === this.cursorCreds) return;
        const e = this.resolveHttp1Reason();
        return void 0 !== e ? {
            backendUrl: this.cursorCreds.backendUrl,
            http1Reason: e,
            mode: this.host.isHttp1SseDisabled() ? "poll" : "sse",
            hasEffectiveProxy: this.host.hasEffectiveProxy?.() ?? !1
        } : void 0;
    }
    recordTransportRebuilt(e, t) {
        const r = this.lastBidiTransportMode ?? "none", n = this.resolveHttp1Reason() ?? "none";
        this.lastBidiTransportMode = t, this.debugLog.info(`[AiConnectTransportHandler] transports rebuilt (${e}): ${r} -> ${t}, http1 reason ${n}`), (0, q.incrementTransportMetric)(this.host, "transport.rebuilt", {
            trigger: e,
            mode: t,
            previous_mode: r,
            http1_reason: n
        }), (0, q.emitTransportStructuredLog)(this.host, {
            level: "info",
            message: "Transports rebuilt",
            metadata: {
                service: "transport_factory",
                subkey: "transport_rebuilt",
                trigger: e,
                mode: t,
                previousMode: r,
                modeChanged: r !== t,
                http1Reason: n
            }
        });
    }
    maybeScheduleWsReachabilityProbe() {
        const e = (0, D.scheduleWsReachabilityProbe)({
            host: this.host,
            getContext: ()=>this.getWsReachabilityProbeContext()
        });
        void 0 !== e && this.disposables.push(e), this.maybeScheduleWsDurabilityProbe();
    }
    maybeScheduleWsDurabilityProbe() {
        const e = (0, D.scheduleWsDurabilityProbe)({
            host: this.host,
            getContext: ()=>this.getWsReachabilityProbeContext()
        });
        void 0 !== e && this.disposables.push(e);
    }
    setupHttp1KeepaliveDisabledRefresh() {
        const e = async ()=>{
            try {
                const e = await this.host.checkFeatureGate("http1_keepalive_disabled");
                this.http1KeepaliveDisabled !== e && (this.debugLog.info(`[AiConnectTransportHandler] HTTP/1 keepalive disabled flag updated: ${this.http1KeepaliveDisabled}`), I.StructuredLogProviderImpl.info("transport", "HTTP/1 keepalive disabled flag updated", {
                    service: "transport_factory",
                    subkey: "http1_keepalive_disabled_flag_updated",
                    http1KeepaliveDisabled: e
                })), this.http1KeepaliveDisabled = e;
            } catch (e) {
                this.debugLog.error("[AiConnectTransportHandler] Error checking HTTP/1 keepalive disabled flag, keeping previous value", e);
            }
        };
        e(), this.disposables.push(this.host.onDidChangeGates((t)=>{
            t.changedGates?.includes("http1_keepalive_disabled") && e(), t.changedGates?.includes("ws_reachability_probe") && this.maybeScheduleWsReachabilityProbe(), t.changedGates?.includes("ws_dark_durability_probe") && ((0, D.cancelWsDurabilityProbe)(), this.maybeScheduleWsDurabilityProbe());
        }));
    }
    async getInitialValues() {
        let e = !1;
        try {
            this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config;
            const { creds: t, token: r } = await (0, T.pollForAuthValues)({
                getCreds: ()=>this.host.getCursorCreds(),
                getToken: ()=>this.host.getCursorAuthToken()
            }, {
                onTimeout: (e)=>{
                    this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: timeout waiting for auth", e), I.StructuredLogProviderImpl.info("auth", "Auth init timeout - proceeding without token (likely logged out)", {
                        subkey: "auth_init_timeout",
                        source: "handler",
                        ...e
                    });
                },
                onRaceConditionPrevented: (e)=>{
                    this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: race condition prevented", e), I.StructuredLogProviderImpl.warn("auth", "Auth token race condition prevented at startup", {
                        subkey: "auth_race_condition_prevented",
                        source: "handler",
                        ...e
                    });
                }
            }, this.debugLog);
            this.cursorCreds = t, this.accessToken = r, e = void 0 !== this.accessToken, this.debugLog.info("[AiConnectTransportHandler] getInitialValues: auth ready", {
                hasAccessToken: e
            }), this.resolveAuthReady(e), await this.setup("init");
        } finally{
            this.resolveAuthReady(e);
        }
    }
    getAiServerClient() {
        if (void 0 === this._aiServerClient) throw new Error("INVARIANT VIOLATION: AiServerClient is undefined");
        const e = performance.now();
        return void 0 !== this.lastClientCreationTime && e - this.lastClientCreationTime > this.INACTIVITY_THRESHOLD && this.refresh(), this.lastClientCreationTime = e, this._aiServerClient;
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
    isHttp2TransportFor(e) {
        return !0 === this._getTransportForService(e.serviceName, e.methodName, !1)?.isHttp2;
    }
    isDebug() {
        return (this.cursorCreds?.backendUrl?.includes("lclhst.build") || this.cursorCreds?.backendUrl?.includes("localhost")) ?? !1;
    }
    async refresh() {
        await this.setup("refresh");
    }
    _getTransportForService(e, t, r = !0) {
        let n;
        if (e === f.HealthService.typeName) {
            return this.host.isHttp2Disabled() && t !== f.HealthService.methods.streamBidi.name ? this._backendTransport : this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[f.HealthService.typeName];
        }
        if (n = t in this._overrideMethodNameToTransportMap ? this._overrideMethodNameToTransportMap[t] : e in this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides ? this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[e] : this._backendTransport, void 0 !== n) return r && (n.usage++, !0 === n.isHttp2 && n.usage > 500 && this.createTransports("usage_rotation")), n;
    }
    async setup(e) {
        await this.createTransports(e);
        const t = this.createMultiProxyTransport();
        this._transport = t, this._aiServerClient = (0, b.createPromiseClient)(l.AiService, t), this._filesyncClient = (0, b.createPromiseClient)(h.FileSyncService, t), this._backgroundComposerClient = (0, b.createPromiseClient)(u.BackgroundComposerService, t), this._agentClient = (0, b.createPromiseClient)(c.AgentService, t), this.resolveIsSetup();
    }
    createMultiProxyTransport() {
        if (!this._ready) throw new Error("INVARIANT VIOLATION: This should not be called without having this._ready.");
        const e = this;
        return {
            unary (t, r, n, s, o, i, a) {
                const c = e._getTransportForService(t.typeName, r.name);
                if (void 0 === c) throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + t.typeName);
                return c.transport.unary(t, r, n, s, o, i, a);
            },
            stream (t, r, n, s, o, i, a) {
                const c = e._getTransportForService(t.typeName, r.name);
                if (void 0 === c) throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + t.typeName);
                return c.transport.stream(t, r, n, s, o, i, a);
            },
            getTransportHost: (t, r)=>e._getTransportForService(t, r, !1)?.host
        };
    }
    async setServerConfig() {
        try {
            this.config = _.GetServerConfigResponse.fromJson(await this.host.getCachedServerConfigJson());
        } catch (e) {
            this.debugLog.error("Error getting server config", e);
        }
    }
    async getConfig() {
        return void 0 === this.config && await this.setServerConfig(), this.config;
    }
    createTransports(e) {
        const t = this.transportRebuildQueue.then(async ()=>{
            if (!this.disposed) try {
                await this.createTransportsForLatestContext(e);
            } finally{
                this.disposed && (this.ownedAgentRunWebSocketSelection?.dispose(), this.ownedAgentRunWebSocketSelection = void 0, this.transportFactory.abortAllSessionManagers(), this.transportFactory.destroyAllAgents());
            }
        });
        return this.transportRebuildQueue = t.catch(()=>{}), t;
    }
    async createTransportsForLatestContext(e) {
        if (!this.cursorCreds) throw new Error("CursorCreds is undefined");
        const t = this.ownedAgentRunWebSocketSelection;
        this.transportFactory.destroyAllAgents();
        const r = ()=>this.http1KeepaliveDisabled, n = (await (0, B.getHttp1KeepaliveConfig)(this.host)).keepAliveInitialDelayMs;
        try {
            const e = await this.host.getDynamicConfigValue("http2_agent_connection_pool_config");
            e && "object" == typeof e && "poolSize" in e && "number" == typeof e.poolSize && e.poolSize > 0 && (this.agentConnectionPoolSize = e.poolSize);
        } catch (e) {
            this.debugLog.error("[AiConnectTransportHandler] Error fetching connection pool config, using default", e);
        }
        const s = (()=>this.lastServerHttp2DisabledValue === _.Http2Config.FORCE_ALL_DISABLED || this.lastServerHttp2DisabledValue === _.Http2Config.FORCE_BIDI_DISABLED || this.lastServerHttp2DisabledValue !== _.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== _.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled())(), { backendUrl: o, repoBackendUrl: i, geoCppBackendUrl: a, cppConfigBackendUrl: c, cmdkBackendUrl: l, telemBackendUrl: u, originBackendUrl: d, bcProxyUrl: p, agentBackendUrlNonPrivacy: m, localLoopInferenceUrl: h } = this.cursorCreds, f = m.default || o, g = f && !s ? f : o;
        this.maybeScheduleWsReachabilityProbe(), this.transportFactory.setHttp2SessionEstablishTimeoutMs(await (0, B.getHttp2SessionEstablishTimeoutMs)(this.host)), this._backendTransport = this.transportFactory.createTransport({
            baseUrl: o,
            useHttp2: !1,
            maybeUseCppSpoofToken: !1,
            pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.BACKEND),
            getHttp1KeepaliveDisabled: r,
            http1KeepaliveInitialDelayMs: n
        }), this._bidiTransport = this.transportFactory.createTransport({
            baseUrl: o,
            useHttp2: !1,
            maybeUseCppSpoofToken: !1,
            pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.BIDI),
            getHttp1KeepaliveDisabled: r,
            http1KeepaliveInitialDelayMs: n
        });
        const y = this.bidiTransportFactory.createTransport({
            baseUrl: g,
            useHttp2: !s,
            maybeUseCppSpoofToken: !0,
            bidiTransport: this._bidiTransport,
            pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.AGENT),
            getHttp1KeepaliveDisabled: r,
            http1KeepaliveInitialDelayMs: n,
            usePooledConnections: !0,
            connectionPoolSize: this.agentConnectionPoolSize
        });
        let w, v;
        if (h && !s && h !== this.localLoopInferenceFellBackUrl) {
            const e = h;
            v = e, w = this.bidiTransportFactory.createTransport({
                baseUrl: e,
                useHttp2: !0,
                maybeUseCppSpoofToken: !0,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.LOCAL_LOOP_INFERENCE),
                usePooledConnections: !0,
                connectionPoolSize: this.agentConnectionPoolSize
            }), w.transport = (A = w.transport, S = (t)=>this.fallBackLocalLoopInference(e, t), {
                unary: (e, t, r, n, s, o, i)=>A.unary(e, t, r, n, s, o, i),
                async stream (e, t, r, n, s, o, i) {
                    try {
                        return await A.stream(e, t, r, n, s, o, i);
                    } catch (e) {
                        const t = b.ConnectError.from(e);
                        if (!0 === r?.aborted || t.code !== b.Code.Unimplemented && t.code !== b.Code.Unavailable) throw e;
                        throw S(t), new b.ConnectError("connection aborted (local-loop inference fell back to the backend URL)", b.Code.Unavailable, void 0, void 0, e);
                    }
                }
            });
        }
        var A, S;
        const E = {
            repoTransport: this.transportFactory.createTransport({
                baseUrl: i,
                useHttp2: !1,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.REPO),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n,
                overrideAuthToken: async ()=>{
                    if (i.includes("repo42.cursor.sh") && o.includes("localhost")) {
                        const e = await this.getConfig();
                        if (e?.indexingConfig?.repo42AuthToken) return e.indexingConfig.repo42AuthToken;
                    }
                }
            }),
            http2RepoTransport: this.transportFactory.createTransport({
                baseUrl: i,
                useHttp2: !s,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.HTTP2_REPO),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n,
                overrideAuthToken: async ()=>{
                    if (i.includes("repo42.cursor.sh") && o.includes("localhost")) {
                        const e = await this.getConfig();
                        if (e?.indexingConfig?.repo42AuthToken) return e.indexingConfig.repo42AuthToken;
                    }
                }
            }),
            geoCppTransport: this.transportFactory.createTransport({
                baseUrl: a,
                useHttp2: !s && a.includes(".cursor.sh") && !a.includes("api2.cursor.sh"),
                maybeUseCppSpoofToken: !0,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.GEO_CPP),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            cppConfigTransport: this.transportFactory.createTransport({
                baseUrl: c,
                useHttp2: !s && c.includes(".cursor.sh") && !c.includes("api2.cursor.sh"),
                maybeUseCppSpoofToken: !0,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.CPP_CONFIG),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            cmdkTransport: this.transportFactory.createTransport({
                baseUrl: l,
                useHttp2: !s && l.includes("api3.cursor"),
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.CMDK),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            telemTransport: this.transportFactory.createTransport({
                baseUrl: u,
                useHttp2: !s && u.includes("api3.cursor"),
                maybeUseCppSpoofToken: !0,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.TELEM),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            originTransport: this.transportFactory.createTransport({
                baseUrl: d,
                useHttp2: !1,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.ORIGIN),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n
            }),
            remoteAgentHostPresenceTransport: this.transportFactory.createTransport({
                baseUrl: o,
                useHttp2: !0,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.REMOTE_AGENT_HOST_PRESENCE, {
                    fallbackDefaults: B.HTTP2_PING_PRODUCTION_DEFAULTS
                }),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n,
                sendCompression: k.adaptiveGzip,
                onGoaway: ()=>this.host.notifyRemoteAgentHostTunnelGoaway?.()
            }),
            agenticComposerTransport: this.bidiTransportFactory.createTransport({
                baseUrl: o,
                useHttp2: !s,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.AGENTIC_COMPOSER),
                maybeUseCppSpoofToken: !0,
                bidiTransport: this._bidiTransport
            }),
            agentBidiTransport: y,
            localLoopInferenceTransport: w,
            localLoopInferenceUrl: v,
            backgroundComposerProxyTransport: this.transportFactory.createTransport({
                baseUrl: p,
                useHttp2: !s,
                maybeUseCppSpoofToken: !1,
                pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.BACKGROUND_COMPOSER_PROXY, {
                    fallbackDefaults: B.HTTP2_PING_PRODUCTION_DEFAULTS
                }),
                getHttp1KeepaliveDisabled: r,
                http1KeepaliveInitialDelayMs: n,
                overrideAuthToken: async ()=>{
                    if (p.includes("api2.cursor.sh") && o.includes("localhost")) {
                        const e = await this.getConfig();
                        if (e?.indexingConfig?.repo42AuthToken) return e.indexingConfig.repo42AuthToken;
                    }
                }
            })
        }, I = this.createAgentRunWebSocketSelectionForTransportContext({
            httpTransport: y.transport,
            httpAgentUrl: g,
            agentUsesHttp2: !s
        });
        if (y.transport = I.transport, this.disposed) I.dispose();
        else {
            this.transportConfig = E, this._updateTransportMap(E), this.ownedAgentRunWebSocketSelection = I, this._ready = !0, this.recordTransportRebuilt(e, (0, q.resolveHttpTransportMode)({
                http2Disabled: s,
                http1SseDisabled: this.host.isHttp1SseDisabled()
            })), "enabled" === this.transportFactory.getPrivateInferenceEnablement().state && I.drain();
            try {
                t?.drain();
            } catch (e) {
                this.debugLog.error("[AiConnectTransportHandler] Error draining replaced Agent WebSocket selection", e);
            }
        }
    }
    fallBackLocalLoopInference(e, t) {
        this.localLoopInferenceFellBackUrl = e;
        const r = this.transportConfig;
        void 0 !== r && r.localLoopInferenceUrl === e ? (this._overrideMethodNameToTransportMap[g.InferenceService.methods.runInference.name] = r.agenticComposerTransport, (0, q.incrementTransportMetric)(this.host, "transport.local_loop_inference_fallback", {
            connect_code: b.Code[t.code]
        }), this.debugLog.warn("[AiConnectTransportHandler] RunInference fell back from the local-loop URL to the backend URL", t)) : this.debugLog.info("[AiConnectTransportHandler] a replaced local-loop URL failed late; current route unchanged", t);
    }
    createAgentRunWebSocketSelectionForTransportContext(e) {
        const t = (0, x.resolveAgentWebSocketUrl)(e.httpAgentUrl) ?? e.httpAgentUrl;
        return (0, x.createAgentRunWebSocketSelection)({
            httpTransport: e.httpTransport,
            baseUrl: e.httpAgentUrl,
            agentUsesHttp2: e.agentUsesHttp2,
            debugLog: this.debugLog,
            checkFeatureGate: (e)=>this.host.checkFeatureGate(e),
            getDynamicConfigValue: (e)=>this.host.getDynamicConfigValue(e),
            onDidChangeFeatureGate: (e, t)=>this.host.onDidChangeGates((r)=>{
                    const n = void 0 !== r.changedGates || void 0 !== r.changedConfigs || void 0 !== r.changedExperiments;
                    (!0 === r.changedGates?.includes(e) || !n) && t();
                }),
            onDidChangeDynamicConfig: (e, t)=>this.host.onDidChangeGates((r)=>{
                    const n = void 0 !== r.changedGates || void 0 !== r.changedConfigs || void 0 !== r.changedExperiments;
                    (!0 === r.changedConfigs?.includes(e) || !n) && t();
                }),
            connectionContext: (0, C.createHostAgentRunWebSocketConnectionContextSource)(this.host, {
                endpoint: t
            }),
            runWithNetworkContext: (e)=>this.host.runWithNetworkContext(e),
            observePreconnect: (e)=>{
                try {
                    this.host.metricsIncrement({
                        stat: "transport.agent_websocket_preconnect",
                        tags: {
                            outcome: e.outcome,
                            failure_category: e.failureCategory ?? "none"
                        }
                    });
                } catch  {}
            },
            metricsIncrement: (e)=>this.host.metricsIncrement(e),
            prepareUpgrade: (t)=>this.transportFactory.prepareAgentRunRequest({
                    baseUrl: e.httpAgentUrl,
                    maybeUseCppSpoofToken: !0,
                    callerHeaders: t.callerHeaders,
                    ...void 0 !== t.signal ? {
                        signal: t.signal
                    } : {}
                })
        });
    }
    async resetConnectionIfIpChangedOrNetworkReset(e) {
        const { isDisconnected: t } = await this.resetConnectionIfIpChanged(), r = void 0 !== e && this.networkChangeMonitor.networkId !== e;
        return t || r;
    }
    async resetConnectionIfIpChanged() {
        const e = this.cursorCreds?.backendUrl, t = this.accessToken;
        return void 0 === e || void 0 === t ? {
            isDisconnected: !1
        } : this.networkChangeMonitor.triggerCallbackIfDisconnected(e, t);
    }
    createAbortAndErrorInterceptor() {
        return (0, P.createAbortErrorAndTimeoutInterceptor)(()=>this.networkChangeMonitor.networkId, (e)=>this.resetConnectionIfIpChangedOrNetworkReset(e), this.numMsForRequestToResetConnection);
    }
};
