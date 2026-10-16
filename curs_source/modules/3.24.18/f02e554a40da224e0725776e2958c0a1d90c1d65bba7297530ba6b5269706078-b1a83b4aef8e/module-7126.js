"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.StructuredLogProviderImpl = void 0;
const n = require("./module-6698.js"), s = require("./module-7598.js"), i = require("./module-9081.js"), o = require("./module-7977.js"), a = require("./module-5289.js"), u = require("./module-8394.js"), c = require("./module-4384.js"), l = require("./module-2642.js");
class m extends Error {
    constructor(){
        super("StructuredLogProvider: submitLogs refused under private inference lockdown"), this.name = "PrivateInferenceRefusalError";
    }
}
const d = "submitlogs_flush_throttle", f = new Set([
    a.PrivacyMode.UNSPECIFIED,
    a.PrivacyMode.NO_STORAGE,
    a.PrivacyMode.NO_TRAINING
]), p = new Set([
    "local_request_trace"
]);
class h {
    static _isLocalhostUrl(t) {
        try {
            const e = new URL(t);
            return "localhost" === e.hostname || "127.0.0.1" === e.hostname || "::1" === e.hostname || "lclhst.build" === e.hostname || e.hostname.endsWith(".lclhst.build");
        } catch  {
            return !1;
        }
    }
    static _resolveAnalyticsUrl(t) {
        try {
            const e = t.getCursorCreds()?.backendUrl;
            if (e && h._isLocalhostUrl(e)) return e;
        } catch  {}
        return "https://api2.cursor.sh";
    }
    static _getActiveInstance() {
        return h._asyncLocalInstance.getStore() ?? h._instance;
    }
    static get instance() {
        return h._getActiveInstance();
    }
    static runWithInstance(t, e) {
        return h._asyncLocalInstance.run(t, e);
    }
    static debug(t, e, r) {
        h._getActiveInstance()?._addLog("debug", t, e, r);
    }
    static info(t, e, r) {
        h._getActiveInstance()?._addLog("info", t, e, r);
    }
    static warn(t, e, r) {
        h._getActiveInstance()?._addLog("warn", t, e, r);
    }
    static error(t, e, r, n) {
        h._getActiveInstance()?._addLog("error", t, e, n, r);
    }
    constructor(t, { isDevelopment: e, registerStaticInstance: r = !0, privateInferenceLockdown: n = t.getPrivateInferenceEnablement?.() ?? l.PRIVATE_INFERENCE_DISABLED }){
        this.buffer = [], this.disposables = [], this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0, this.forceHttp1ForSession = !1, this.hasLoggedUploadFailureDiagnostic = !1, this.analyticsUrl = "https://api2.cursor.sh", this.isDisposed = !1, this.flushThrottleEnabled = !1, this.flushIntervalStartedAt = Date.now(), this.flushThrottleGateGeneration = 0, this.flushRequested = !1, this._host = t, this._isDevelopment = e, this._privateInferenceLockdown = n, this.disposables.push(n.onDidChange((e)=>{
            if (t.log.info(`[StructuredLogProvider] private inference lockdown ${e}`), (0, l.isPrivateInferenceLockedDown)(e)) {
                for (const t of this.buffer)this._writePrivacyLog(t);
                this.buffer = [];
            }
        })), this.analyticsUrl = h._resolveAnalyticsUrl(t), this.disposables.push(t.onDidChangeCursorCreds(()=>{
            const e = h._resolveAnalyticsUrl(t);
            e !== this.analyticsUrl && (this.analyticsUrl = e, this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0);
        })), this.disposables.push(t.onDidChangeGates((t)=>{
            (void 0 === t.changedGates || t.changedGates.includes(d)) && this._refreshFlushThrottleGate();
        })), this._refreshFlushThrottleGate(), this.flushIntervalStartedAt = Date.now(), this._scheduleFlush(), r && (h._instance = this);
    }
    debug(t, e, r) {
        this._addLog("debug", t, e, r);
    }
    info(t, e, r) {
        this._addLog("info", t, e, r);
    }
    warn(t, e, r) {
        this._addLog("warn", t, e, r);
    }
    error(t, e, r, n) {
        this._addLog("error", t, e, n, r);
    }
    _isGhostMode() {
        return f.has(this._host.getPrivacyModeEnum());
    }
    _writePrivacyLog(t) {
        try {
            const e = JSON.stringify({
                level: t.level,
                key: t.key,
                message: t.message,
                metadata: this._flattenMetadata(t.metadata),
                error: t.error ? {
                    name: t.error.name,
                    message: t.error.message,
                    stack: t.error.stack
                } : void 0
            });
            this._host.writePrivacyLog(t.level, e);
        } catch  {}
    }
    _addLog(t, e, r, n, s) {
        if (this.isDisposed) return;
        const i = {
            level: t,
            message: r,
            metadata: n ?? {},
            timestamp: Date.now(),
            error: s,
            key: e
        };
        if (this._isPrivateInferenceLocked()) return void this._writePrivacyLog(i);
        const o = this._isGhostMode();
        o && this._writePrivacyLog(i), o && p.has(e) || (this.buffer.push(i), this.buffer.length > 200 && this.buffer.shift(), this.buffer.length >= this._getImmediateFlushThreshold() && this._flush());
    }
    _getImmediateFlushThreshold() {
        return this.flushThrottleEnabled ? 150 : 10;
    }
    _getFlushIntervalMs() {
        return this.flushThrottleEnabled ? 6e4 : 3e3;
    }
    _refreshFlushThrottleGate() {
        const t = ++this.flushThrottleGateGeneration;
        this._host.checkFeatureGate(d).then((e)=>{
            t === this.flushThrottleGateGeneration && (this.isDisposed || e === this.flushThrottleEnabled || (this.flushThrottleEnabled = e, this._scheduleFlush()));
        }).catch(()=>{});
    }
    _scheduleFlush() {
        if (this.isDisposed) return;
        this.flushTimeoutId && clearTimeout(this.flushTimeoutId);
        const t = Date.now() - this.flushIntervalStartedAt, e = Math.max(0, this._getFlushIntervalMs() - t);
        this.flushTimeoutId = setTimeout(()=>{
            this.flushTimeoutId = void 0, this.isDisposed || (this.flushIntervalStartedAt = Date.now(), this._flush(), void 0 === this.flushTimeoutId && this._scheduleFlush());
        }, e);
    }
    _restartPeriodicFlushInterval() {
        this.isDisposed || (this.flushIntervalStartedAt = Date.now(), this._scheduleFlush());
    }
    _flush() {
        if (this.flushRequested = !0, void 0 !== this.flushPromise) return this.flushPromise;
        const t = this._drainFlushes();
        return this.flushPromise = t, t.then(()=>this._onFlushSettled(t), ()=>this._onFlushSettled(t)), t;
    }
    _onFlushSettled(t) {
        this.flushPromise === t && (this.flushPromise = void 0, this.flushRequested && this._flush());
    }
    async _drainFlushes() {
        for(; this.flushRequested;)this.flushRequested = !1, 0 !== this.buffer.length && (await this._flushOnce(), this.buffer.length > 0 && (this.isDisposed || this.buffer.length >= this._getImmediateFlushThreshold()) && (this.flushRequested = !0));
    }
    async _flushOnce() {
        if (0 === this.buffer.length) return void (this.buffer = []);
        this._restartPeriodicFlushInterval();
        const t = this.buffer;
        if (this.buffer = [], this._isPrivateInferenceLocked()) {
            for (const e of t)this._writePrivacyLog(e);
            return;
        }
        const e = t.map((t)=>this._convertToProto(t));
        try {
            await this._submitLogs(e);
        } catch (e) {
            if (function(t) {
                return t instanceof m;
            }(e)) {
                for (const e of t)this._writePrivacyLog(e);
                return;
            }
            if (!this._shouldFallbackToHttp1(e)) return void this._logUploadFailureDiagnosticOnce(e, {
                httpVersion: this.analyticsClientHttpVersion,
                fallbackAttempted: !1
            });
            await this._disableHttp2AfterAlpnFailure(), this._requeueLogsForNextFlush(t);
        }
    }
    _requeueLogsForNextFlush(t) {
        this.buffer = t.concat(this.buffer), this.buffer.length > 200 && this.buffer.splice(0, this.buffer.length - 200);
    }
    _isPrivateInferenceLocked() {
        return (0, l.isPrivateInferenceLockedDown)(this._privateInferenceLockdown.state);
    }
    async _submitLogs(t) {
        if (this._isPrivateInferenceLocked()) throw new m;
        const e = this._getOrCreateAnalyticsClient();
        await e.submitLogs(new o.SubmitLogsRequest({
            logs: t
        }));
    }
    _getDesiredHttpVersion() {
        return this.forceHttp1ForSession || this._host.isHttp2Disabled() ? "1.1" : "2";
    }
    _isHttp2AlpnFailure(t) {
        return t instanceof Error && t.message.includes("expected h2 session, but ALPN protocol failed to negotiate");
    }
    _shouldFallbackToHttp1(t) {
        return "2" === this.analyticsClientHttpVersion && this._isHttp2AlpnFailure(t);
    }
    async _disableHttp2AfterAlpnFailure() {
        this.forceHttp1ForSession = !0, this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0;
        try {
            await this._host.setHttp2Disabled();
        } catch  {}
    }
    _logUploadFailureDiagnosticOnce(t, e) {
        if (this.hasLoggedUploadFailureDiagnostic) return;
        this.hasLoggedUploadFailureDiagnostic = !0;
        const r = t instanceof Error ? t.message : String(t);
        this._host.log.warn("[StructuredLogProvider] submitLogs failed; structured logs may be unavailable for this session", {
            httpVersion: e.httpVersion ?? "unknown",
            fallbackAttempted: e.fallbackAttempted,
            errorMessage: r
        });
    }
    _getOrCreateAnalyticsClient() {
        const t = this._getDesiredHttpVersion();
        if (void 0 !== this.analyticsClient && this.analyticsClientHttpVersion === t) return this.analyticsClient;
        const e = this._isDevelopment && h._isLocalhostUrl(this.analyticsUrl), r = (0, c.createConnectTransport)({
            httpVersion: t,
            baseUrl: this.analyticsUrl,
            interceptors: [
                (t)=>async (e)=>{
                        const r = this._host.getCursorAuthToken();
                        return void 0 !== r && e.header.set("Authorization", `Bearer ${r}`), await t(e);
                    },
                (t)=>async (e)=>(this._host.applyRequestHeaders(e, (0, s.randomUUID)()), await t(e))
            ],
            useBinaryFormat: !0,
            jsonOptions: {
                ignoreUnknownFields: !0
            },
            sendCompression: c.compressionGzip,
            acceptCompression: [
                c.compressionGzip
            ],
            ...e ? {
                nodeOptions: {
                    rejectUnauthorized: !1
                }
            } : {}
        });
        return this.analyticsClient = (0, u.createPromiseClient)(i.AnalyticsService, r), this.analyticsClientHttpVersion = t, this.analyticsClient;
    }
    _convertToProto(t) {
        const e = this._flattenMetadata(t.metadata);
        return this._host.isLocalMode() && (e["client.platform"] = "local_on_prem"), new o.ClientLogEntry({
            level: this._convertLogLevel(t.level),
            message: t.message,
            metadata: e,
            timestamp: BigInt(t.timestamp),
            errorMessage: t.error?.message,
            errorStack: t.error?.stack,
            key: t.key
        });
    }
    _flattenMetadata(t, e = "", r = new WeakSet) {
        const n = {};
        for (const [s, i] of Object.entries(t)){
            if (null == i) continue;
            const t = e ? `${e}.${s}` : s;
            if (i instanceof Date) n[t] = i.toISOString();
            else if ("object" != typeof i || Array.isArray(i) || i instanceof Error) Array.isArray(i) ? n[t] = JSON.stringify(i) : n[t] = String(i);
            else {
                if (r.has(i)) {
                    n[t] = "[Circular]";
                    continue;
                }
                r.add(i), Object.assign(n, this._flattenMetadata(i, t, r));
            }
        }
        return n;
    }
    _convertLogLevel(t) {
        switch(t){
            case "debug":
                return o.ClientLogLevel.DEBUG;
            case "info":
                return o.ClientLogLevel.INFO;
            case "warn":
                return o.ClientLogLevel.WARN;
            case "error":
                return o.ClientLogLevel.ERROR;
        }
    }
    dispose() {
        h._instance === this && (h._instance = void 0), this.isDisposed = !0, this.flushTimeoutId && (clearTimeout(this.flushTimeoutId), this.flushTimeoutId = void 0), this._flush();
        for (const t of this.disposables)t.dispose();
    }
}
exports.StructuredLogProviderImpl = h, h._asyncLocalInstance = new n.AsyncLocalStorage;
