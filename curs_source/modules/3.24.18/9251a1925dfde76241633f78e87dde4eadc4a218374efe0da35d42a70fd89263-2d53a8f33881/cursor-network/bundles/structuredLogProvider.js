import { __toCommonJS } from "./aggregatingMetricsProvider.js";
import { require_privateInferenceEnablement } from "./privateInference/privateInferenceEnablement.js";
import { analytics_connect_exports, analytics_pb_exports, privacy_mode_pb_exports } from "../../entry.js";
import { require_cjs4 } from "../../node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/cjs/index.js";
import { require_cjs3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { init_analytics_connect } from "../../proto/dist/generated/aiserver/v1/analytics_connect.js";
import { init_analytics_pb } from "../../proto/dist/generated/aiserver/v1/analytics_pb.js";
import { init_privacy_mode_pb } from "../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
var __wakaru_require_structuredLogProvider_cache;
export function require_structuredLogProvider() {
if (__wakaru_require_structuredLogProvider_cache) return __wakaru_require_structuredLogProvider_cache;
var exports2 = {};
__wakaru_require_structuredLogProvider_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.StructuredLogProviderImpl = void 0;
var node_async_hooks_1 = require("node:async_hooks");
var node_crypto_1 = require("node:crypto");
var analytics_connect_js_1 = (init_analytics_connect(), __toCommonJS(analytics_connect_exports));
var analytics_pb_js_1 = (init_analytics_pb(), __toCommonJS(analytics_pb_exports));
var privacy_mode_pb_js_1 = (init_privacy_mode_pb(), __toCommonJS(privacy_mode_pb_exports));
var connect_1 = require_cjs3();
var connect_node_1 = require_cjs4();
var privateInferenceEnablement_js_1 = require_privateInferenceEnablement();
var MAX_BUFFER_SIZE2 = 200;
var PrivateInferenceRefusalError = class extends Error {
    constructor(){
        super("StructuredLogProvider: submitLogs refused under private inference lockdown");
        this.name = "PrivateInferenceRefusalError";
    }
};
function isPrivateInferenceRefusal(error3) {
    return error3 instanceof PrivateInferenceRefusalError;
}
var FLUSH_HIGH_WATERMARK = 150;
var THROTTLED_FLUSH_INTERVAL_MS = 6e4;
var LEGACY_BATCH_SIZE = 10;
var LEGACY_FLUSH_INTERVAL_MS = 3e3;
var FLUSH_THROTTLE_GATE = "submitlogs_flush_throttle";
var GHOST_PRIVACY_MODES = new Set([
    privacy_mode_pb_js_1.PrivacyMode.UNSPECIFIED,
    privacy_mode_pb_js_1.PrivacyMode.NO_STORAGE,
    privacy_mode_pb_js_1.PrivacyMode.NO_TRAINING
]);
var GHOST_MODE_LOCAL_ONLY_KEYS = new Set([
    "local_request_trace"
]);
var StructuredLogProviderImpl = class _StructuredLogProviderImpl {
    static _isLocalhostUrl(url2) {
        try {
            const parsed = new URL(url2);
            return parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1" || parsed.hostname === "::1" || parsed.hostname === "lclhst.build" || parsed.hostname.endsWith(".lclhst.build");
        } catch  {
            return false;
        }
    }
    static _resolveAnalyticsUrl(host) {
        try {
            const backendUrl = host.getCursorCreds()?.backendUrl;
            if (backendUrl && _StructuredLogProviderImpl._isLocalhostUrl(backendUrl)) {
                return backendUrl;
            }
        } catch  {}
        return "https://api2.cursor.sh";
    }
    static _getActiveInstance() {
        return _StructuredLogProviderImpl._asyncLocalInstance.getStore() ?? _StructuredLogProviderImpl._instance;
    }
    static get instance() {
        return _StructuredLogProviderImpl._getActiveInstance();
    }
    static runWithInstance(instance, fn) {
        return _StructuredLogProviderImpl._asyncLocalInstance.run(instance, fn);
    }
    static debug(key, message, metadata) {
        _StructuredLogProviderImpl._getActiveInstance()?._addLog("debug", key, message, metadata);
    }
    static info(key, message, metadata) {
        _StructuredLogProviderImpl._getActiveInstance()?._addLog("info", key, message, metadata);
    }
    static warn(key, message, metadata) {
        _StructuredLogProviderImpl._getActiveInstance()?._addLog("warn", key, message, metadata);
    }
    static error(key, message, error3, metadata) {
        _StructuredLogProviderImpl._getActiveInstance()?._addLog("error", key, message, metadata, error3);
    }
    constructor(host, { isDevelopment, registerStaticInstance = true, privateInferenceLockdown = host.getPrivateInferenceEnablement?.() ?? privateInferenceEnablement_js_1.PRIVATE_INFERENCE_DISABLED }){
        this.buffer = [];
        this.disposables = [];
        this.analyticsClient = void 0;
        this.analyticsClientHttpVersion = void 0;
        this.forceHttp1ForSession = false;
        this.hasLoggedUploadFailureDiagnostic = false;
        this.analyticsUrl = "https://api2.cursor.sh";
        this.isDisposed = false;
        this.flushThrottleEnabled = false;
        this.flushIntervalStartedAt = Date.now();
        this.flushThrottleGateGeneration = 0;
        this.flushRequested = false;
        this._host = host;
        this._isDevelopment = isDevelopment;
        this._privateInferenceLockdown = privateInferenceLockdown;
        this.disposables.push(privateInferenceLockdown.onDidChange((state)=>{
            host.log.info(`[StructuredLogProvider] private inference lockdown ${state}`);
            if ((0, privateInferenceEnablement_js_1.isPrivateInferenceLockedDown)(state)) {
                for (const entry of this.buffer){
                    this._writePrivacyLog(entry);
                }
                this.buffer = [];
            }
        }));
        this.analyticsUrl = _StructuredLogProviderImpl._resolveAnalyticsUrl(host);
        this.disposables.push(host.onDidChangeCursorCreds(()=>{
            const newUrl = _StructuredLogProviderImpl._resolveAnalyticsUrl(host);
            if (newUrl !== this.analyticsUrl) {
                this.analyticsUrl = newUrl;
                this.analyticsClient = void 0;
                this.analyticsClientHttpVersion = void 0;
            }
        }));
        this.disposables.push(host.onDidChangeGates((e)=>{
            if (e.changedGates === void 0 || e.changedGates.includes(FLUSH_THROTTLE_GATE)) {
                this._refreshFlushThrottleGate();
            }
        }));
        this._refreshFlushThrottleGate();
        this.flushIntervalStartedAt = Date.now();
        this._scheduleFlush();
        if (registerStaticInstance) {
            _StructuredLogProviderImpl._instance = this;
        }
    }
    debug(key, message, metadata) {
        this._addLog("debug", key, message, metadata);
    }
    info(key, message, metadata) {
        this._addLog("info", key, message, metadata);
    }
    warn(key, message, metadata) {
        this._addLog("warn", key, message, metadata);
    }
    error(key, message, error3, metadata) {
        this._addLog("error", key, message, metadata, error3);
    }
    _isGhostMode() {
        return GHOST_PRIVACY_MODES.has(this._host.getPrivacyModeEnum());
    }
    _writePrivacyLog(entry) {
        try {
            const payload = JSON.stringify({
                level: entry.level,
                key: entry.key,
                message: entry.message,
                metadata: this._flattenMetadata(entry.metadata),
                error: entry.error ? {
                    name: entry.error.name,
                    message: entry.error.message,
                    stack: entry.error.stack
                } : void 0
            });
            this._host.writePrivacyLog(entry.level, payload);
        } catch  {}
    }
    _addLog(level, key, message, metadata, error3) {
        if (this.isDisposed) {
            return;
        }
        const entry = {
            level,
            message,
            metadata: metadata ?? {},
            timestamp: Date.now(),
            error: error3,
            key
        };
        if (this._isPrivateInferenceLocked()) {
            this._writePrivacyLog(entry);
            return;
        }
        const isGhost = this._isGhostMode();
        if (isGhost) {
            this._writePrivacyLog(entry);
        }
        if (isGhost && GHOST_MODE_LOCAL_ONLY_KEYS.has(key)) {
            return;
        }
        this.buffer.push(entry);
        if (this.buffer.length > MAX_BUFFER_SIZE2) {
            this.buffer.shift();
        }
        if (this.buffer.length >= this._getImmediateFlushThreshold()) {
            void this._flush();
        }
    }
    _getImmediateFlushThreshold() {
        return this.flushThrottleEnabled ? FLUSH_HIGH_WATERMARK : LEGACY_BATCH_SIZE;
    }
    _getFlushIntervalMs() {
        return this.flushThrottleEnabled ? THROTTLED_FLUSH_INTERVAL_MS : LEGACY_FLUSH_INTERVAL_MS;
    }
    _refreshFlushThrottleGate() {
        const generation = ++this.flushThrottleGateGeneration;
        void this._host.checkFeatureGate(FLUSH_THROTTLE_GATE).then((enabled)=>{
            if (generation !== this.flushThrottleGateGeneration) {
                return;
            }
            if (this.isDisposed || enabled === this.flushThrottleEnabled) {
                return;
            }
            this.flushThrottleEnabled = enabled;
            this._scheduleFlush();
        }).catch(()=>{});
    }
    _scheduleFlush() {
        if (this.isDisposed) {
            return;
        }
        if (this.flushTimeoutId) {
            clearTimeout(this.flushTimeoutId);
        }
        const elapsed = Date.now() - this.flushIntervalStartedAt;
        const remaining = Math.max(0, this._getFlushIntervalMs() - elapsed);
        this.flushTimeoutId = setTimeout(()=>{
            this.flushTimeoutId = void 0;
            if (this.isDisposed) {
                return;
            }
            this.flushIntervalStartedAt = Date.now();
            void this._flush();
            if (this.flushTimeoutId === void 0) {
                this._scheduleFlush();
            }
        }, remaining);
    }
    _restartPeriodicFlushInterval() {
        if (this.isDisposed) {
            return;
        }
        this.flushIntervalStartedAt = Date.now();
        this._scheduleFlush();
    }
    _flush() {
        this.flushRequested = true;
        if (this.flushPromise !== void 0) {
            return this.flushPromise;
        }
        const flushPromise = this._drainFlushes();
        this.flushPromise = flushPromise;
        void flushPromise.then(()=>this._onFlushSettled(flushPromise), ()=>this._onFlushSettled(flushPromise));
        return flushPromise;
    }
    _onFlushSettled(settledPromise) {
        if (this.flushPromise !== settledPromise) {
            return;
        }
        this.flushPromise = void 0;
        if (this.flushRequested) {
            void this._flush();
        }
    }
    async _drainFlushes() {
        while(this.flushRequested){
            this.flushRequested = false;
            if (this.buffer.length === 0) {
                continue;
            }
            await this._flushOnce();
            if (this.buffer.length > 0 && (this.isDisposed || this.buffer.length >= this._getImmediateFlushThreshold())) {
                this.flushRequested = true;
            }
        }
    }
    async _flushOnce() {
        if (this.buffer.length === 0) {
            this.buffer = [];
            return;
        }
        this._restartPeriodicFlushInterval();
        const toSend = this.buffer;
        this.buffer = [];
        if (this._isPrivateInferenceLocked()) {
            for (const entry of toSend){
                this._writePrivacyLog(entry);
            }
            return;
        }
        const protoLogs = toSend.map((log5)=>this._convertToProto(log5));
        try {
            await this._submitLogs(protoLogs);
        } catch (error3) {
            if (isPrivateInferenceRefusal(error3)) {
                for (const entry of toSend){
                    this._writePrivacyLog(entry);
                }
                return;
            }
            if (!this._shouldFallbackToHttp1(error3)) {
                this._logUploadFailureDiagnosticOnce(error3, {
                    httpVersion: this.analyticsClientHttpVersion,
                    fallbackAttempted: false
                });
                return;
            }
            await this._disableHttp2AfterAlpnFailure();
            this._requeueLogsForNextFlush(toSend);
        }
    }
    _requeueLogsForNextFlush(logs) {
        this.buffer = logs.concat(this.buffer);
        if (this.buffer.length > MAX_BUFFER_SIZE2) {
            this.buffer.splice(0, this.buffer.length - MAX_BUFFER_SIZE2);
        }
    }
    _isPrivateInferenceLocked() {
        return (0, privateInferenceEnablement_js_1.isPrivateInferenceLockedDown)(this._privateInferenceLockdown.state);
    }
    async _submitLogs(protoLogs) {
        if (this._isPrivateInferenceLocked()) {
            throw new PrivateInferenceRefusalError();
        }
        const client = this._getOrCreateAnalyticsClient();
        await client.submitLogs(new analytics_pb_js_1.SubmitLogsRequest({
            logs: protoLogs
        }));
    }
    _getDesiredHttpVersion() {
        return this.forceHttp1ForSession || this._host.isHttp2Disabled() ? "1.1" : "2";
    }
    _isHttp2AlpnFailure(error3) {
        return error3 instanceof Error && error3.message.includes("expected h2 session, but ALPN protocol failed to negotiate");
    }
    _shouldFallbackToHttp1(error3) {
        return this.analyticsClientHttpVersion === "2" && this._isHttp2AlpnFailure(error3);
    }
    async _disableHttp2AfterAlpnFailure() {
        this.forceHttp1ForSession = true;
        this.analyticsClient = void 0;
        this.analyticsClientHttpVersion = void 0;
        try {
            await this._host.setHttp2Disabled();
        } catch  {}
    }
    _logUploadFailureDiagnosticOnce(error3, details) {
        if (this.hasLoggedUploadFailureDiagnostic) {
            return;
        }
        this.hasLoggedUploadFailureDiagnostic = true;
        const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
        this._host.log.warn("[StructuredLogProvider] submitLogs failed; structured logs may be unavailable for this session", {
            httpVersion: details.httpVersion ?? "unknown",
            fallbackAttempted: details.fallbackAttempted,
            errorMessage: errorMessage4
        });
    }
    _getOrCreateAnalyticsClient() {
        const httpVersion = this._getDesiredHttpVersion();
        if (this.analyticsClient !== void 0 && this.analyticsClientHttpVersion === httpVersion) {
            return this.analyticsClient;
        }
        const bearerTokenInterceptor = (next)=>async (req)=>{
                const accessToken = this._host.getCursorAuthToken();
                if (accessToken !== void 0) {
                    req.header.set("Authorization", `Bearer ${accessToken}`);
                }
                return await next(req);
            };
        const addHeaders = (next)=>async (req)=>{
                this._host.applyRequestHeaders(req, (0, node_crypto_1.randomUUID)());
                return await next(req);
            };
        const isLocalDev = this._isDevelopment && _StructuredLogProviderImpl._isLocalhostUrl(this.analyticsUrl);
        const transport = (0, connect_node_1.createConnectTransport)({
            httpVersion,
            baseUrl: this.analyticsUrl,
            interceptors: [
                bearerTokenInterceptor,
                addHeaders
            ],
            useBinaryFormat: true,
            jsonOptions: {
                ignoreUnknownFields: true
            },
            sendCompression: connect_node_1.compressionGzip,
            acceptCompression: [
                connect_node_1.compressionGzip
            ],
            ...isLocalDev ? {
                nodeOptions: {
                    rejectUnauthorized: false
                }
            } : {}
        });
        this.analyticsClient = (0, connect_1.createPromiseClient)(analytics_connect_js_1.AnalyticsService, transport);
        this.analyticsClientHttpVersion = httpVersion;
        return this.analyticsClient;
    }
    _convertToProto(log5) {
        const metadata = this._flattenMetadata(log5.metadata);
        if (this._host.isLocalMode()) {
            metadata["client.platform"] = "local_on_prem";
        }
        return new analytics_pb_js_1.ClientLogEntry({
            level: this._convertLogLevel(log5.level),
            message: log5.message,
            metadata,
            timestamp: BigInt(log5.timestamp),
            errorMessage: log5.error?.message,
            errorStack: log5.error?.stack,
            key: log5.key
        });
    }
    _flattenMetadata(obj, prefix = "", seen = new WeakSet()) {
        const result = {};
        for (const [key, value] of Object.entries(obj)){
            if (value === void 0 || value === null) {
                continue;
            }
            const fullKey = prefix ? `${prefix}.${key}` : key;
            if (value instanceof Date) {
                result[fullKey] = value.toISOString();
            } else if (typeof value === "object" && !Array.isArray(value) && !(value instanceof Error)) {
                if (seen.has(value)) {
                    result[fullKey] = "[Circular]";
                    continue;
                }
                seen.add(value);
                Object.assign(result, this._flattenMetadata(value, fullKey, seen));
            } else if (Array.isArray(value)) {
                result[fullKey] = JSON.stringify(value);
            } else {
                result[fullKey] = String(value);
            }
        }
        return result;
    }
    _convertLogLevel(level) {
        switch(level){
            case "debug":
                return analytics_pb_js_1.ClientLogLevel.DEBUG;
            case "info":
                return analytics_pb_js_1.ClientLogLevel.INFO;
            case "warn":
                return analytics_pb_js_1.ClientLogLevel.WARN;
            case "error":
                return analytics_pb_js_1.ClientLogLevel.ERROR;
        }
    }
    dispose() {
        if (_StructuredLogProviderImpl._instance === this) {
            _StructuredLogProviderImpl._instance = void 0;
        }
        this.isDisposed = true;
        if (this.flushTimeoutId) {
            clearTimeout(this.flushTimeoutId);
            this.flushTimeoutId = void 0;
        }
        void this._flush();
        for (const disposable of this.disposables){
            disposable.dispose();
        }
    }
};
exports2.StructuredLogProviderImpl = StructuredLogProviderImpl;
StructuredLogProviderImpl._asyncLocalInstance = new node_async_hooks_1.AsyncLocalStorage();

return exports2;
}
