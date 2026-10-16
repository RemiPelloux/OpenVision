"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.StructuredLogProviderImpl = void 0;
const n = require("./module-16698.js"), s = require("./module-77598.js"), o = require("./module-9081.js"), i = require("./module-77977.js"), a = require("./module-5289.js"), c = require("./module-97163.js"), l = require("./module-85964.js"), u = require("./module-22642.js");
class d extends Error {
    constructor(){
        super("StructuredLogProvider: submitLogs refused under private inference lockdown"), this.name = "PrivateInferenceRefusalError";
    }
}
const p = "submitlogs_flush_throttle", m = new Set([
    a.PrivacyMode.UNSPECIFIED,
    a.PrivacyMode.NO_STORAGE,
    a.PrivacyMode.NO_TRAINING
]), h = new Set([
    "local_request_trace"
]);
class f {
    static _isLocalhostUrl(e) {
        try {
            const t = new URL(e);
            return "localhost" === t.hostname || "127.0.0.1" === t.hostname || "::1" === t.hostname || "lclhst.build" === t.hostname || t.hostname.endsWith(".lclhst.build");
        } catch  {
            return !1;
        }
    }
    static _resolveAnalyticsUrl(e) {
        try {
            const t = e.getCursorCreds()?.backendUrl;
            if (t && f._isLocalhostUrl(t)) return t;
        } catch  {}
        return "https://api2.cursor.sh";
    }
    static _getActiveInstance() {
        return f._asyncLocalInstance.getStore() ?? f._instance;
    }
    static get instance() {
        return f._getActiveInstance();
    }
    static runWithInstance(e, t) {
        return f._asyncLocalInstance.run(e, t);
    }
    static debug(e, t, r) {
        f._getActiveInstance()?._addLog("debug", e, t, r);
    }
    static info(e, t, r) {
        f._getActiveInstance()?._addLog("info", e, t, r);
    }
    static warn(e, t, r) {
        f._getActiveInstance()?._addLog("warn", e, t, r);
    }
    static error(e, t, r, n) {
        f._getActiveInstance()?._addLog("error", e, t, n, r);
    }
    constructor(e, { isDevelopment: t, registerStaticInstance: r = !0, privateInferenceLockdown: n = e.getPrivateInferenceEnablement?.() ?? u.PRIVATE_INFERENCE_DISABLED }){
        this.buffer = [], this.disposables = [], this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0, this.forceHttp1ForSession = !1, this.hasLoggedUploadFailureDiagnostic = !1, this.analyticsUrl = "https://api2.cursor.sh", this.isDisposed = !1, this.flushThrottleEnabled = !1, this.flushIntervalStartedAt = Date.now(), this.flushThrottleGateGeneration = 0, this.flushRequested = !1, this._host = e, this._isDevelopment = t, this._privateInferenceLockdown = n, this.disposables.push(n.onDidChange((t)=>{
            if (e.log.info(`[StructuredLogProvider] private inference lockdown ${t}`), (0, u.isPrivateInferenceLockedDown)(t)) {
                for (const e of this.buffer)this._writePrivacyLog(e);
                this.buffer = [];
            }
        })), this.analyticsUrl = f._resolveAnalyticsUrl(e), this.disposables.push(e.onDidChangeCursorCreds(()=>{
            const t = f._resolveAnalyticsUrl(e);
            t !== this.analyticsUrl && (this.analyticsUrl = t, this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0);
        })), this.disposables.push(e.onDidChangeGates((e)=>{
            (void 0 === e.changedGates || e.changedGates.includes(p)) && this._refreshFlushThrottleGate();
        })), this._refreshFlushThrottleGate(), this.flushIntervalStartedAt = Date.now(), this._scheduleFlush(), r && (f._instance = this);
    }
    debug(e, t, r) {
        this._addLog("debug", e, t, r);
    }
    info(e, t, r) {
        this._addLog("info", e, t, r);
    }
    warn(e, t, r) {
        this._addLog("warn", e, t, r);
    }
    error(e, t, r, n) {
        this._addLog("error", e, t, n, r);
    }
    _isGhostMode() {
        return m.has(this._host.getPrivacyModeEnum());
    }
    _writePrivacyLog(e) {
        try {
            const t = JSON.stringify({
                level: e.level,
                key: e.key,
                message: e.message,
                metadata: this._flattenMetadata(e.metadata),
                error: e.error ? {
                    name: e.error.name,
                    message: e.error.message,
                    stack: e.error.stack
                } : void 0
            });
            this._host.writePrivacyLog(e.level, t);
        } catch  {}
    }
    _addLog(e, t, r, n, s) {
        if (this.isDisposed) return;
        const o = {
            level: e,
            message: r,
            metadata: n ?? {},
            timestamp: Date.now(),
            error: s,
            key: t
        };
        if (this._isPrivateInferenceLocked()) return void this._writePrivacyLog(o);
        const i = this._isGhostMode();
        i && this._writePrivacyLog(o), i && h.has(t) || (this.buffer.push(o), this.buffer.length > 200 && this.buffer.shift(), this.buffer.length >= this._getImmediateFlushThreshold() && this._flush());
    }
    _getImmediateFlushThreshold() {
        return this.flushThrottleEnabled ? 150 : 10;
    }
    _getFlushIntervalMs() {
        return this.flushThrottleEnabled ? 6e4 : 3e3;
    }
    _refreshFlushThrottleGate() {
        const e = ++this.flushThrottleGateGeneration;
        this._host.checkFeatureGate(p).then((t)=>{
            e === this.flushThrottleGateGeneration && (this.isDisposed || t === this.flushThrottleEnabled || (this.flushThrottleEnabled = t, this._scheduleFlush()));
        }).catch(()=>{});
    }
    _scheduleFlush() {
        if (this.isDisposed) return;
        this.flushTimeoutId && clearTimeout(this.flushTimeoutId);
        const e = Date.now() - this.flushIntervalStartedAt, t = Math.max(0, this._getFlushIntervalMs() - e);
        this.flushTimeoutId = setTimeout(()=>{
            this.flushTimeoutId = void 0, this.isDisposed || (this.flushIntervalStartedAt = Date.now(), this._flush(), void 0 === this.flushTimeoutId && this._scheduleFlush());
        }, t);
    }
    _restartPeriodicFlushInterval() {
        this.isDisposed || (this.flushIntervalStartedAt = Date.now(), this._scheduleFlush());
    }
    _flush() {
        if (this.flushRequested = !0, void 0 !== this.flushPromise) return this.flushPromise;
        const e = this._drainFlushes();
        return this.flushPromise = e, e.then(()=>this._onFlushSettled(e), ()=>this._onFlushSettled(e)), e;
    }
    _onFlushSettled(e) {
        this.flushPromise === e && (this.flushPromise = void 0, this.flushRequested && this._flush());
    }
    async _drainFlushes() {
        for(; this.flushRequested;)this.flushRequested = !1, 0 !== this.buffer.length && (await this._flushOnce(), this.buffer.length > 0 && (this.isDisposed || this.buffer.length >= this._getImmediateFlushThreshold()) && (this.flushRequested = !0));
    }
    async _flushOnce() {
        if (0 === this.buffer.length) return void (this.buffer = []);
        this._restartPeriodicFlushInterval();
        const e = this.buffer;
        if (this.buffer = [], this._isPrivateInferenceLocked()) {
            for (const t of e)this._writePrivacyLog(t);
            return;
        }
        const t = e.map((e)=>this._convertToProto(e));
        try {
            await this._submitLogs(t);
        } catch (t) {
            if (function(e) {
                return e instanceof d;
            }(t)) {
                for (const t of e)this._writePrivacyLog(t);
                return;
            }
            if (!this._shouldFallbackToHttp1(t)) return void this._logUploadFailureDiagnosticOnce(t, {
                httpVersion: this.analyticsClientHttpVersion,
                fallbackAttempted: !1
            });
            await this._disableHttp2AfterAlpnFailure(), this._requeueLogsForNextFlush(e);
        }
    }
    _requeueLogsForNextFlush(e) {
        this.buffer = e.concat(this.buffer), this.buffer.length > 200 && this.buffer.splice(0, this.buffer.length - 200);
    }
    _isPrivateInferenceLocked() {
        return (0, u.isPrivateInferenceLockedDown)(this._privateInferenceLockdown.state);
    }
    async _submitLogs(e) {
        if (this._isPrivateInferenceLocked()) throw new d;
        const t = this._getOrCreateAnalyticsClient();
        await t.submitLogs(new i.SubmitLogsRequest({
            logs: e
        }));
    }
    _getDesiredHttpVersion() {
        return this.forceHttp1ForSession || this._host.isHttp2Disabled() ? "1.1" : "2";
    }
    _isHttp2AlpnFailure(e) {
        return e instanceof Error && e.message.includes("expected h2 session, but ALPN protocol failed to negotiate");
    }
    _shouldFallbackToHttp1(e) {
        return "2" === this.analyticsClientHttpVersion && this._isHttp2AlpnFailure(e);
    }
    async _disableHttp2AfterAlpnFailure() {
        this.forceHttp1ForSession = !0, this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0;
        try {
            await this._host.setHttp2Disabled();
        } catch  {}
    }
    _logUploadFailureDiagnosticOnce(e, t) {
        if (this.hasLoggedUploadFailureDiagnostic) return;
        this.hasLoggedUploadFailureDiagnostic = !0;
        const r = e instanceof Error ? e.message : String(e);
        this._host.log.warn("[StructuredLogProvider] submitLogs failed; structured logs may be unavailable for this session", {
            httpVersion: t.httpVersion ?? "unknown",
            fallbackAttempted: t.fallbackAttempted,
            errorMessage: r
        });
    }
    _getOrCreateAnalyticsClient() {
        const e = this._getDesiredHttpVersion();
        if (void 0 !== this.analyticsClient && this.analyticsClientHttpVersion === e) return this.analyticsClient;
        const t = this._isDevelopment && f._isLocalhostUrl(this.analyticsUrl), r = (0, l.createConnectTransport)({
            httpVersion: e,
            baseUrl: this.analyticsUrl,
            interceptors: [
                (e)=>async (t)=>{
                        const r = this._host.getCursorAuthToken();
                        return void 0 !== r && t.header.set("Authorization", `Bearer ${r}`), await e(t);
                    },
                (e)=>async (t)=>(this._host.applyRequestHeaders(t, (0, s.randomUUID)()), await e(t))
            ],
            useBinaryFormat: !0,
            jsonOptions: {
                ignoreUnknownFields: !0
            },
            sendCompression: l.compressionGzip,
            acceptCompression: [
                l.compressionGzip
            ],
            ...t ? {
                nodeOptions: {
                    rejectUnauthorized: !1
                }
            } : {}
        });
        return this.analyticsClient = (0, c.createPromiseClient)(o.AnalyticsService, r), this.analyticsClientHttpVersion = e, this.analyticsClient;
    }
    _convertToProto(e) {
        const t = this._flattenMetadata(e.metadata);
        return this._host.isLocalMode() && (t["client.platform"] = "local_on_prem"), new i.ClientLogEntry({
            level: this._convertLogLevel(e.level),
            message: e.message,
            metadata: t,
            timestamp: BigInt(e.timestamp),
            errorMessage: e.error?.message,
            errorStack: e.error?.stack,
            key: e.key
        });
    }
    _flattenMetadata(e, t = "", r = new WeakSet) {
        const n = {};
        for (const [s, o] of Object.entries(e)){
            if (null == o) continue;
            const e = t ? `${t}.${s}` : s;
            if (o instanceof Date) n[e] = o.toISOString();
            else if ("object" != typeof o || Array.isArray(o) || o instanceof Error) Array.isArray(o) ? n[e] = JSON.stringify(o) : n[e] = String(o);
            else {
                if (r.has(o)) {
                    n[e] = "[Circular]";
                    continue;
                }
                r.add(o), Object.assign(n, this._flattenMetadata(o, e, r));
            }
        }
        return n;
    }
    _convertLogLevel(e) {
        switch(e){
            case "debug":
                return i.ClientLogLevel.DEBUG;
            case "info":
                return i.ClientLogLevel.INFO;
            case "warn":
                return i.ClientLogLevel.WARN;
            case "error":
                return i.ClientLogLevel.ERROR;
        }
    }
    dispose() {
        f._instance === this && (f._instance = void 0), this.isDisposed = !0, this.flushTimeoutId && (clearTimeout(this.flushTimeoutId), this.flushTimeoutId = void 0), this._flush();
        for (const e of this.disposables)e.dispose();
    }
}
exports.StructuredLogProviderImpl = f, f._asyncLocalInstance = new n.AsyncLocalStorage;
