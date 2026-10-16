import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { require_agentRunWebSocketConnectionContext } from "./agentRunWebSocketConnectionContext.js";
import { require_agentWebSocketRunSession } from "./agentWebSocketRunSession.js";
import { dist_exports } from "../../../dist_exports.js";
import { agent_service_connect_exports } from "../../../entry.js";
import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { init_agent_service_connect } from "../../../proto/dist/generated/agent/v1/agent_service_connect.js";
var __wakaru_require_agentRunWebSocketSelection_cache;
export function require_agentRunWebSocketSelection() {
if (__wakaru_require_agentRunWebSocketSelection_cache) return __wakaru_require_agentRunWebSocketSelection_cache;
var exports2 = {};
__wakaru_require_agentRunWebSocketSelection_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AGENT_WEBSOCKET_POOL_CONFIG = exports2.AGENT_WEBSOCKET_FEATURE_GATE = void 0;
exports2.resolveAgentWebSocketUrl = resolveAgentWebSocketUrl;
exports2.resolveAgentWebSocketMaxConnections = resolveAgentWebSocketMaxConnections;
exports2.resolveAgentWebSocketFallbackOnColdPool = resolveAgentWebSocketFallbackOnColdPool;
exports2.resolveAgentWebSocketWarmSpareOnLease = resolveAgentWebSocketWarmSpareOnLease;
exports2.resolveAgentWebSocketKeepalive = resolveAgentWebSocketKeepalive;
exports2.resolveAgentWebSocketPreconnectMaxRetryDelay = resolveAgentWebSocketPreconnectMaxRetryDelay;
exports2.createAgentRunWebSocketSelection = createAgentRunWebSocketSelection;
var constants_1 = (init_dist2(), __toCommonJS(dist_exports));
var agent_service_connect_js_1 = (init_agent_service_connect(), __toCommonJS(agent_service_connect_exports));
var connect_1 = require_cjs3();
var agentRunWebSocketConnectionContext_js_1 = require_agentRunWebSocketConnectionContext();
exports2.AGENT_WEBSOCKET_FEATURE_GATE = "nal_websocket_client";
exports2.AGENT_WEBSOCKET_POOL_CONFIG = "nal_websocket_client_pool";
var DEFAULT_MAX_CONNECTIONS = 1;
var MAX_CONFIGURED_MAX_CONNECTIONS = 4;
var DEFAULT_POOL_CONFIG_TIMEOUT_MS = 1e3;
var DEFAULT_PRECONNECT_RETRY_BASE_MS = 1e3;
var DEFAULT_PRECONNECT_MAX_RETRY_DELAY_MS = 5 * 6e4;
var DEFAULT_PRECONNECT_ATTEMPT_TIMEOUT_MS = 1e4;
var MAX_PRECONNECT_BACKOFF_EXPONENT = 30;
var AGENT_WEBSOCKET_ORIGINS = new Set([
    "https://api.playground.cursor.sh",
    "https://api2.cursor.sh"
]);
var AGENT_WEBSOCKET_RUN_PATH = "/agent/v1/run";
var RUN_ID_HEADER = "x-original-request-id";
var REQUEST_ID_HEADER = "x-request-id";
function resolveAgentWebSocketUrl(baseUrl) {
    let url2;
    try {
        url2 = new URL(baseUrl);
    } catch  {
        return void 0;
    }
    const isExactOrigin = url2.protocol === "https:" && AGENT_WEBSOCKET_ORIGINS.has(url2.origin) && url2.port === "" && url2.username === "" && url2.password === "" && (url2.pathname === "" || url2.pathname === "/") && url2.search === "" && url2.hash === "" && (baseUrl === url2.origin || baseUrl === `${url2.origin}/`);
    if (!isExactOrigin) {
        return void 0;
    }
    const websocketUrl = new URL(AGENT_WEBSOCKET_RUN_PATH, url2);
    websocketUrl.protocol = "wss:";
    return websocketUrl.toString();
}
function resolveAgentWebSocketMaxConnections(raw) {
    if (typeof raw !== "object" || raw === null) {
        return DEFAULT_MAX_CONNECTIONS;
    }
    const requested = raw.maxConnections;
    if (typeof requested !== "number" || !Number.isInteger(requested) || requested < DEFAULT_MAX_CONNECTIONS || requested > MAX_CONFIGURED_MAX_CONNECTIONS) {
        return DEFAULT_MAX_CONNECTIONS;
    }
    return requested;
}
function resolveAgentWebSocketFallbackOnColdPool(raw) {
    if (typeof raw !== "object" || raw === null) {
        return false;
    }
    return raw.fallbackOnColdPool === true;
}
function resolveAgentWebSocketWarmSpareOnLease(raw) {
    if (typeof raw !== "object" || raw === null) {
        return false;
    }
    return raw.warmSpareOnLease === true;
}
var MAX_CONFIGURED_KEEPALIVE_MS = 6e4;
var MIN_CONFIGURED_KEEPALIVE_TIMEOUT_MS = 1e3;
function resolveAgentWebSocketKeepalive(raw) {
    if (typeof raw !== "object" || raw === null) {
        return {};
    }
    const record3 = raw;
    const pingIntervalMs = configuredKeepaliveDuration(record3.keepalivePingIntervalMs, 0);
    const pingTimeoutMs = configuredKeepaliveDuration(record3.keepalivePingTimeoutMs, MIN_CONFIGURED_KEEPALIVE_TIMEOUT_MS);
    return {
        ...pingIntervalMs === void 0 ? {} : {
            pingIntervalMs
        },
        ...pingTimeoutMs === void 0 ? {} : {
            pingTimeoutMs
        }
    };
}
function configuredKeepaliveDuration(requested, minimum) {
    return typeof requested === "number" && Number.isInteger(requested) && requested >= minimum && requested <= MAX_CONFIGURED_KEEPALIVE_MS ? requested : void 0;
}
var MIN_CONFIGURED_PRECONNECT_RETRY_DELAY_MS = 1e3;
var MAX_CONFIGURED_PRECONNECT_RETRY_DELAY_MS = 30 * 6e4;
function resolveAgentWebSocketPreconnectMaxRetryDelay(raw) {
    if (typeof raw !== "object" || raw === null) {
        return void 0;
    }
    const requested = raw.preconnectMaxRetryDelayMs;
    return typeof requested === "number" && Number.isInteger(requested) && requested >= MIN_CONFIGURED_PRECONNECT_RETRY_DELAY_MS && requested <= MAX_CONFIGURED_PRECONNECT_RETRY_DELAY_MS ? requested : void 0;
}
function withTimeout3(work, timeoutMs) {
    return new Promise((resolve36, reject2)=>{
        const deadline = setTimeout(()=>reject2(new Error(`timed out after ${timeoutMs}ms`)), timeoutMs);
        work.then(resolve36, reject2).finally(()=>clearTimeout(deadline));
    });
}
function copyHeaders2(header) {
    const copied = new Headers();
    if (header === void 0) {
        return copied;
    }
    if (header instanceof Headers) {
        header.forEach((value, name17)=>{
            copied.append(name17, value);
        });
        return copied;
    }
    if (Array.isArray(header)) {
        for (const [name17, value] of header){
            copied.append(name17, value);
        }
        return copied;
    }
    for (const [name17, value] of Object.entries(header)){
        for (const item of Array.isArray(value) ? value : [
            value
        ]){
            copied.append(name17, item);
        }
    }
    return copied;
}
async function* encodeRunInput(input, messageType) {
    for await (const value of input){
        yield value instanceof messageType ? value.toBinary() : new messageType(value).toBinary();
    }
}
async function* decodeRunOutput(message, messageType, onDone) {
    try {
        for await (const bytes of message){
            yield messageType.fromBinary(bytes);
        }
    } finally{
        onDone();
    }
}
async function* decodeRunInput(input, messageType) {
    for await (const bytes of input){
        yield messageType.fromBinary(bytes);
    }
}
function prepareReplayInputHandoff(input) {
    let claimed = false;
    let stopped = false;
    let iterator;
    const claim = ()=>{
        if (claimed) {
            throw new Error("Agent WebSocket replay input is one-shot");
        }
        claimed = true;
        iterator = input[Symbol.asyncIterator]();
        return iterator;
    };
    return {
        input: {
            [Symbol.asyncIterator]: claim
        },
        stop (error3) {
            if (stopped) {
                return;
            }
            stopped = true;
            try {
                const owned = iterator ?? claim();
                const result = owned.throw !== void 0 ? owned.throw(error3) : owned.return?.();
                void result?.catch(()=>void 0);
            } catch  {}
        }
    };
}
function deriveRunDeadline(signal, timeoutMs) {
    if (timeoutMs === void 0) {
        return {
            signal,
            dispose: ()=>{}
        };
    }
    const controller = new AbortController();
    let timeout2;
    const dispose2 = ()=>{
        if (timeout2 !== void 0) {
            clearTimeout(timeout2);
            timeout2 = void 0;
        }
        signal?.removeEventListener("abort", onCallerAbort);
    };
    const abort = (reason)=>{
        if (!controller.signal.aborted) {
            controller.abort(reason);
        }
        dispose2();
    };
    function onCallerAbort() {
        abort(signal?.reason);
    }
    if (signal?.aborted === true) {
        abort(signal.reason);
    } else {
        signal?.addEventListener("abort", onCallerAbort, {
            once: true
        });
        timeout2 = setTimeout(()=>abort(new connect_1.ConnectError("Agent WebSocket deadline exceeded", connect_1.Code.DeadlineExceeded)), timeoutMs);
    }
    return {
        signal: controller.signal,
        dispose: dispose2
    };
}
var AgentRunWebSocketClosedError = class extends connect_1.ConnectError {
    constructor(){
        super("Agent WebSocket transport was closed", connect_1.Code.Canceled);
    }
};
function cancellationError(signal) {
    return signal.reason instanceof Error ? signal.reason : new connect_1.ConnectError("Request canceled", connect_1.Code.Canceled);
}
function waitWhileActive(work, signals) {
    const activeSignals = signals.filter((signal)=>signal !== void 0);
    const alreadyAborted = activeSignals.find((signal)=>signal.aborted);
    if (alreadyAborted !== void 0) {
        return Promise.reject(cancellationError(alreadyAborted));
    }
    if (activeSignals.length === 0) {
        return work;
    }
    return new Promise((resolve36, reject2)=>{
        let settled = false;
        const listeners = new Map();
        const finish = (settle)=>{
            if (settled) {
                return;
            }
            settled = true;
            for (const [signal, listener] of listeners){
                signal.removeEventListener("abort", listener);
            }
            settle();
        };
        for (const signal of activeSignals){
            const listener = ()=>finish(()=>reject2(cancellationError(signal)));
            listeners.set(signal, listener);
            signal.addEventListener("abort", listener, {
                once: true
            });
        }
        work.then((value)=>finish(()=>resolve36(value)), (error3)=>finish(()=>reject2(error3)));
    });
}
function isAgentRun(service, method) {
    return service.typeName === agent_service_connect_js_1.AgentService.typeName && method.name === agent_service_connect_js_1.AgentService.methods.run.name;
}
var AgentRunWebSocketSelection = class {
    constructor(options2){
        this.options = options2;
        this.closedController = new AbortController();
        this.webSocketAdmissionGeneration = 0;
        this.poolConfigRefreshGeneration = 0;
        this.gateAllowsWebSocketCached = false;
        this.maxConnectionsCached = DEFAULT_MAX_CONNECTIONS;
        this.keepaliveCached = {};
        this.fallbackOnColdPoolCached = false;
        this.warmSpareOnLeaseCached = false;
        this.preconnectFailures = 0;
        this.preconnectPending = false;
        this.observedConnectionSignals = new WeakSet();
        this.draining = false;
        this.closed = false;
        this.connectionContextTracker = new agentRunWebSocketConnectionContext_js_1.AgentRunWebSocketConnectionContextTracker(options2.connectionContext, (event)=>this.emitMetric({
                stat: "transport.agent_websocket_context_change",
                tags: {
                    cause: event.cause,
                    identity_changed: String(event.identityChanged)
                }
            }), ()=>this.gateAllowsWebSocketCached);
        this.websocketUrl = options2.agentUsesHttp2 ? void 0 : resolveAgentWebSocketUrl(options2.baseUrl);
        this.loadRunSessionFactory = options2.loadRunSessionFactory ?? (async ()=>(await Promise.resolve().then(()=>__toESM(require_agentWebSocketRunSession()))).createAgentWebSocketRunSession);
        this.now = options2.now ?? Date.now;
        this.gateChangeSubscription = this.websocketUrl === void 0 ? void 0 : options2.onDidChangeFeatureGate?.(exports2.AGENT_WEBSOCKET_FEATURE_GATE, ()=>{
            this.gateAllowsWebSocketCached = false;
            this.cancelPreconnect();
            try {
                this.connectionContextTracker.pause();
            } catch (error3) {
                this.options.debugLog.info("[AgentRunWebSocket] context subscription cleanup failed while disabling the gate", error3);
            }
            const generation = ++this.webSocketAdmissionGeneration;
            this.refreshGateSnapshot(generation);
        });
        this.poolConfigChangeSubscription = this.websocketUrl === void 0 || options2.getDynamicConfigValue === void 0 ? void 0 : options2.onDidChangeDynamicConfig?.(exports2.AGENT_WEBSOCKET_POOL_CONFIG, ()=>{
            if (this.closed || !this.gateAllowsWebSocketCached) {
                return;
            }
            void this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration);
        });
        if (this.gateChangeSubscription !== void 0) {
            this.refreshGateSnapshot(this.webSocketAdmissionGeneration);
        }
    }
    unary(service, method, signal, timeoutMs, header, input, contextValues) {
        return this.options.httpTransport.unary(service, method, signal, timeoutMs, header, input, contextValues);
    }
    async stream(service, method, signal, timeoutMs, header, input, contextValues) {
        const streamOverHttp = (httpHeader, httpTimeoutMs, httpInput = input)=>this.options.httpTransport.stream(service, method, signal, httpTimeoutMs, httpHeader, httpInput, contextValues);
        const url2 = this.websocketUrl;
        const shouldPassThroughToHttp = url2 === void 0 || !isAgentRun(service, method) || this.draining || signal?.aborted === true || timeoutMs !== void 0 && timeoutMs <= 0;
        if (shouldPassThroughToHttp) {
            return streamOverHttp(header, timeoutMs);
        }
        this.assertOpen();
        const webSocketAdmissionGeneration = this.webSocketAdmissionGeneration;
        if (!this.isWebSocketAdmissionCurrent(webSocketAdmissionGeneration)) {
            return streamOverHttp(header, timeoutMs);
        }
        const startedAt = this.now();
        const remainingTimeoutMs = ()=>timeoutMs === void 0 ? void 0 : Math.max(0, timeoutMs - (this.now() - startedAt));
        const remainingTimeoutOrThrow = ()=>{
            const remaining = remainingTimeoutMs();
            if (remaining !== void 0 && remaining <= 0) {
                throw new connect_1.ConnectError("Agent WebSocket deadline exceeded", connect_1.Code.DeadlineExceeded);
            }
            return remaining;
        };
        const deadline = deriveRunDeadline(signal, timeoutMs);
        const caller = copyHeaders2(header);
        let createSession;
        let prepared;
        let connectionGeneration;
        try {
            createSession = await waitWhileActive(this.loadSessionFactory(), [
                deadline.signal,
                this.closedController.signal
            ]);
            this.assertOpen();
            if (!this.isWebSocketAdmissionCurrent(webSocketAdmissionGeneration)) {
                deadline.dispose();
                return streamOverHttp(header, remainingTimeoutOrThrow());
            }
            this.throwIfCanceled(deadline.signal);
            connectionGeneration = this.connectionContextTracker.current();
            const preparationSignal = deadline.signal === void 0 ? connectionGeneration.signal : AbortSignal.any([
                deadline.signal,
                connectionGeneration.signal
            ]);
            prepared = await waitWhileActive(this.options.prepareUpgrade({
                callerHeaders: caller,
                signal: preparationSignal
            }), [
                preparationSignal,
                this.closedController.signal
            ]);
            this.assertOpen();
            this.throwIfCanceled(deadline.signal);
        } catch (error3) {
            deadline.dispose();
            if (error3 instanceof AgentRunWebSocketClosedError) {
                throw error3;
            }
            this.assertOpen();
            this.throwIfCanceled(deadline.signal);
            this.options.debugLog.info("[AgentRunWebSocket] preparation failed before dialing; using HTTP", error3);
            return streamOverHttp(header, remainingTimeoutOrThrow());
        }
        const httpFallbackHeaders = ()=>{
            const headers = copyHeaders2(caller);
            headers.set(REQUEST_ID_HEADER, prepared.requestId);
            return headers;
        };
        if (!this.isConnectionGenerationCurrent(connectionGeneration)) {
            deadline.dispose();
            return streamOverHttp(httpFallbackHeaders(), remainingTimeoutOrThrow());
        }
        if (!this.isWebSocketAdmissionCurrent(webSocketAdmissionGeneration)) {
            deadline.dispose();
            return streamOverHttp(httpFallbackHeaders(), remainingTimeoutOrThrow());
        }
        const session = this.ensureSession(createSession);
        let attempt;
        try {
            attempt = await session.run({
                url: url2,
                requestId: prepared.requestId,
                connectionContext: {
                    ...connectionGeneration.context,
                    credentialFingerprint: prepared.credentialFingerprint
                },
                headers: prepared.headers,
                nodeOptions: prepared.nodeOptions
            }, {
                identity: {
                    runId: caller.get(RUN_ID_HEADER) ?? prepared.requestId,
                    requestId: prepared.requestId
                },
                headers: prepared.runHeaders,
                input: encodeRunInput(input, method.I),
                canSendRunStart: ()=>this.isWebSocketAdmissionCurrent(webSocketAdmissionGeneration) && this.isConnectionGenerationCurrent(connectionGeneration),
                contextInvalidationSignal: connectionGeneration.signal,
                reuseOnly: this.fallbackOnColdPoolCached,
                ...deadline.signal !== void 0 ? {
                    signal: deadline.signal
                } : {}
            });
        } catch (error3) {
            deadline.dispose();
            throw error3;
        }
        if (attempt.kind === "fallback") {
            deadline.dispose();
            const replayHandoff = attempt.replayInput === void 0 ? void 0 : prepareReplayInputHandoff(attempt.replayInput);
            if (attempt.reason === "cold-pool") {
                this.schedulePreconnect();
            }
            try {
                this.assertOpen();
                this.throwIfCanceled(deadline.signal);
                this.options.debugLog.info(`[AgentRunWebSocket] run did not start (${attempt.reason}); using HTTP`);
                return streamOverHttp(httpFallbackHeaders(), remainingTimeoutOrThrow(), replayHandoff === void 0 ? input : decodeRunInput(replayHandoff.input, method.I));
            } catch (error3) {
                replayHandoff?.stop(error3);
                throw error3;
            }
        }
        attempt.response.header.set(constants_1.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, "websocket");
        return {
            stream: true,
            service,
            method,
            header: attempt.response.header,
            trailer: attempt.response.trailer,
            message: decodeRunOutput(attempt.response.message, method.O, ()=>deadline.dispose())
        };
    }
    drain() {
        if (this.closed || this.draining) {
            return;
        }
        this.draining = true;
        this.gateAllowsWebSocketCached = false;
        this.cancelPreconnect();
        this.maxConnectionsCached = DEFAULT_MAX_CONNECTIONS;
        this.keepaliveCached = {};
        this.preconnectMaxRetryDelayCached = void 0;
        this.fallbackOnColdPoolCached = false;
        this.warmSpareOnLeaseCached = false;
        this.poolConfigRefreshGeneration += 1;
        this.webSocketAdmissionGeneration += 1;
        try {
            this.gateChangeSubscription?.dispose();
        } finally{
            try {
                this.poolConfigChangeSubscription?.dispose();
            } finally{
                try {
                    this.connectionContextTracker.invalidate();
                } finally{
                    this.session?.retireWhenIdle("selection_drained");
                }
            }
        }
    }
    dispose() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.draining = false;
        this.gateAllowsWebSocketCached = false;
        this.cancelPreconnect();
        const session = this.session;
        this.session = void 0;
        try {
            this.gateChangeSubscription?.dispose();
        } finally{
            try {
                this.poolConfigChangeSubscription?.dispose();
            } finally{
                this.closedController.abort(new AgentRunWebSocketClosedError());
                try {
                    this.connectionContextTracker.invalidate();
                } finally{
                    session?.close("selection_disposed");
                }
            }
        }
    }
    isWebSocketAdmissionCurrent(generation) {
        return !this.closed && !this.draining && this.gateAllowsWebSocketCached && generation === this.webSocketAdmissionGeneration;
    }
    isConnectionGenerationCurrent(generation) {
        if (generation.signal.aborted) {
            return false;
        }
        try {
            return this.connectionContextTracker.current().signal === generation.signal;
        } catch (error3) {
            this.options.debugLog.info("[AgentRunWebSocket] could not verify connection context; using HTTP", error3);
            return false;
        }
    }
    refreshGateSnapshot(generation) {
        void Promise.resolve().then(()=>this.options.checkFeatureGate(exports2.AGENT_WEBSOCKET_FEATURE_GATE)).then((value)=>{
            if (!this.closed && !this.draining && generation === this.webSocketAdmissionGeneration) {
                const allowed = value === true;
                this.gateAllowsWebSocketCached = allowed;
                if (allowed) {
                    this.preconnectFailures = 0;
                    this.preconnectOncePoolConfigSettles();
                } else {
                    this.poolConfigRefreshGeneration += 1;
                    this.maxConnectionsCached = DEFAULT_MAX_CONNECTIONS;
                    this.keepaliveCached = {};
                    this.preconnectMaxRetryDelayCached = void 0;
                    this.fallbackOnColdPoolCached = false;
                    this.warmSpareOnLeaseCached = false;
                    this.retireCurrentSessionWhenIdle("gate_disabled");
                }
            }
        }, (error3)=>{
            if (!this.closed && !this.draining && generation === this.webSocketAdmissionGeneration) {
                this.gateAllowsWebSocketCached = false;
                this.poolConfigRefreshGeneration += 1;
                this.maxConnectionsCached = DEFAULT_MAX_CONNECTIONS;
                this.keepaliveCached = {};
                this.preconnectMaxRetryDelayCached = void 0;
                this.fallbackOnColdPoolCached = false;
                this.warmSpareOnLeaseCached = false;
                this.retireCurrentSessionWhenIdle("gate_lookup_failed");
                this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${exports2.AGENT_WEBSOCKET_FEATURE_GATE}; using HTTP`, error3);
            }
        });
    }
    preconnectOncePoolConfigSettles() {
        void this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration).then(()=>this.schedulePreconnect(), ()=>this.schedulePreconnect());
    }
    refreshMaxConnectionsSnapshot(generation) {
        const readConfig = this.options.getDynamicConfigValue;
        if (readConfig === void 0) {
            return Promise.resolve();
        }
        return withTimeout3(Promise.resolve().then(()=>readConfig(exports2.AGENT_WEBSOCKET_POOL_CONFIG)), this.options.poolConfigTimeoutMs ?? DEFAULT_POOL_CONFIG_TIMEOUT_MS).then((raw)=>{
            if (this.closed || this.draining || !this.gateAllowsWebSocketCached || generation !== this.poolConfigRefreshGeneration) {
                return;
            }
            const maxConnections = resolveAgentWebSocketMaxConnections(raw);
            this.applyKeepalive(resolveAgentWebSocketKeepalive(raw));
            this.applyMaxConnections(maxConnections);
            this.preconnectMaxRetryDelayCached = resolveAgentWebSocketPreconnectMaxRetryDelay(raw);
            this.fallbackOnColdPoolCached = resolveAgentWebSocketFallbackOnColdPool(raw);
            this.warmSpareOnLeaseCached = resolveAgentWebSocketWarmSpareOnLease(raw);
            if (maxConnections !== DEFAULT_MAX_CONNECTIONS) {
                this.options.debugLog.info(`[AgentRunWebSocket] sizing new sessions to ${maxConnections} connections`);
            }
        }, (error3)=>{
            if (this.closed || this.draining || !this.gateAllowsWebSocketCached || generation !== this.poolConfigRefreshGeneration) {
                return;
            }
            this.applyKeepalive({});
            this.applyMaxConnections(DEFAULT_MAX_CONNECTIONS);
            this.preconnectMaxRetryDelayCached = void 0;
            this.fallbackOnColdPoolCached = false;
            this.warmSpareOnLeaseCached = false;
            this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${exports2.AGENT_WEBSOCKET_POOL_CONFIG}; using one connection`, error3);
        });
    }
    applyMaxConnections(maxConnections) {
        if (this.maxConnectionsCached === maxConnections) {
            return;
        }
        this.maxConnectionsCached = maxConnections;
        this.retireCurrentSessionWhenIdle("pool_resized");
    }
    applyKeepalive(overrides) {
        if (this.keepaliveCached.pingIntervalMs === overrides.pingIntervalMs && this.keepaliveCached.pingTimeoutMs === overrides.pingTimeoutMs) {
            return;
        }
        this.keepaliveCached = overrides;
        this.retireCurrentSessionWhenIdle("keepalive_reconfigured");
    }
    retireCurrentSessionWhenIdle(cause) {
        const session = this.session;
        if (session === void 0) {
            return;
        }
        this.session = void 0;
        session.retireWhenIdle(cause);
    }
    preconnectRetryDelayMs() {
        const baseMs = Math.max(1, this.options.preconnectRetryBaseMs ?? DEFAULT_PRECONNECT_RETRY_BASE_MS);
        const capMs = Math.max(baseMs, this.options.preconnectMaxRetryDelayMs ?? this.preconnectMaxRetryDelayCached ?? DEFAULT_PRECONNECT_MAX_RETRY_DELAY_MS);
        const exponent = Math.min(Math.max(0, this.preconnectFailures - 1), MAX_PRECONNECT_BACKOFF_EXPONENT);
        return Math.min(baseMs * 2 ** exponent, capMs);
    }
    schedulePreconnect(delayMs = 0) {
        if (this.closed || this.draining || !this.gateAllowsWebSocketCached || this.websocketUrl === void 0 || this.options.preconnectDisabled === true) {
            return;
        }
        if (this.preconnectPromise !== void 0) {
            this.preconnectPending = true;
            this.preconnectPendingDelayMs = this.preconnectPendingDelayMs === void 0 ? delayMs : Math.min(this.preconnectPendingDelayMs, delayMs);
            return;
        }
        if (this.preconnectRetryTimer !== void 0) {
            return;
        }
        this.preconnectRetryTimer = setTimeout(()=>{
            this.preconnectRetryTimer = void 0;
            this.startPreconnect();
        }, Math.max(0, delayMs));
    }
    startPreconnect() {
        if (this.closed || this.draining || !this.gateAllowsWebSocketCached || this.websocketUrl === void 0 || this.options.preconnectDisabled === true) {
            return;
        }
        this.emitPreconnect({
            outcome: "attempted"
        });
        const controller = new AbortController();
        this.preconnectController = controller;
        const admissionGeneration = this.webSocketAdmissionGeneration;
        const work = this.performPreconnect(controller.signal, admissionGeneration).then((result)=>{
            if (result === void 0) {
                this.preconnectFailures = 0;
                this.emitPreconnect({
                    outcome: "succeeded"
                });
                return;
            }
            if (this.closed || this.draining || !this.isWebSocketAdmissionCurrent(admissionGeneration)) {
                return;
            }
            this.emitPreconnect({
                outcome: "failed",
                failureCategory: result
            });
            if (result === "context_invalidated" || result === "stale") {
                this.preconnectFailures = 0;
                return;
            }
            this.preconnectFailures += 1;
            this.schedulePreconnect(this.preconnectRetryDelayMs());
        });
        this.preconnectPromise = work;
        void work.finally(()=>{
            if (this.preconnectController === controller) {
                this.preconnectController = void 0;
            }
            if (this.preconnectPromise === work) {
                this.preconnectPromise = void 0;
            }
            if (this.preconnectPending) {
                const delayMs = this.preconnectPendingDelayMs ?? 0;
                this.preconnectPending = false;
                this.preconnectPendingDelayMs = void 0;
                this.schedulePreconnect(delayMs);
            }
        });
    }
    async performPreconnect(signal, admissionGeneration) {
        const url2 = this.websocketUrl;
        if (url2 === void 0) {
            return "stale";
        }
        let stage = "load";
        let connectionGeneration;
        const timeout2 = new AbortController();
        const timeoutHandle = setTimeout(()=>timeout2.abort(), Math.max(1, this.options.preconnectAttemptTimeoutMs ?? DEFAULT_PRECONNECT_ATTEMPT_TIMEOUT_MS));
        const attemptSignal = AbortSignal.any([
            signal,
            timeout2.signal,
            this.closedController.signal
        ]);
        try {
            const createSession = await waitWhileActive(this.loadSessionFactory(), [
                attemptSignal
            ]);
            if (!this.isWebSocketAdmissionCurrent(admissionGeneration)) {
                return "stale";
            }
            stage = "preparation";
            connectionGeneration = this.connectionContextTracker.current();
            this.observeConnectionGeneration(connectionGeneration);
            const activeSignal = AbortSignal.any([
                attemptSignal,
                connectionGeneration.signal
            ]);
            const prepared = await waitWhileActive(this.options.prepareUpgrade({
                callerHeaders: new Headers(),
                signal: activeSignal
            }), [
                activeSignal
            ]);
            if (!this.isWebSocketAdmissionCurrent(admissionGeneration) || !this.isConnectionGenerationCurrent(connectionGeneration)) {
                return "stale";
            }
            const session = this.ensureSession(createSession);
            await session.preconnect({
                url: url2,
                requestId: prepared.requestId,
                connectionContext: {
                    ...connectionGeneration.context,
                    credentialFingerprint: prepared.credentialFingerprint
                },
                headers: prepared.headers,
                nodeOptions: prepared.nodeOptions
            }, {
                signal: activeSignal,
                contextInvalidationSignal: connectionGeneration.signal
            });
            if (!this.isWebSocketAdmissionCurrent(admissionGeneration) || !this.isConnectionGenerationCurrent(connectionGeneration)) {
                session.retireWhenIdle(connectionGeneration.signal.aborted ? "context_invalidated" : "preconnect_stale");
                return connectionGeneration.signal.aborted ? "context_invalidated" : "stale";
            }
            return void 0;
        } catch (error3) {
            if (connectionGeneration?.signal.aborted === true) {
                return "context_invalidated";
            }
            if (timeout2.signal.aborted) {
                return "attempt_timeout";
            }
            return this.preconnectLifecycleCategory(error3) ?? stage;
        } finally{
            clearTimeout(timeoutHandle);
        }
    }
    observeConnectionGeneration(generation) {
        if (this.observedConnectionSignals.has(generation.signal)) {
            return;
        }
        this.observedConnectionSignals.add(generation.signal);
        generation.signal.addEventListener("abort", ()=>{
            if (this.closed || this.draining || !this.gateAllowsWebSocketCached) {
                return;
            }
            const inFlight = this.preconnectPromise !== void 0;
            this.cancelPreconnect();
            this.preconnectFailures = 0;
            if (inFlight) {
                this.preconnectPending = true;
                this.preconnectPendingDelayMs = 0;
            } else {
                this.schedulePreconnect();
            }
        }, {
            once: true
        });
    }
    preconnectLifecycleCategory(error3) {
        if (typeof error3 !== "object" || error3 === null || !("code" in error3)) {
            return void 0;
        }
        const code = error3.code;
        switch(code){
            case "aborted":
            case "context_invalidated":
            case "handshake_failed":
            case "handshake_timeout":
            case "manager_closed":
            case "open_failed":
            case "open_timeout":
            case "pool_exhausted":
                return code;
            default:
                return void 0;
        }
    }
    cancelPreconnect() {
        if (this.preconnectRetryTimer !== void 0) {
            clearTimeout(this.preconnectRetryTimer);
            this.preconnectRetryTimer = void 0;
        }
        this.preconnectPending = false;
        this.preconnectPendingDelayMs = void 0;
        this.preconnectController?.abort();
        this.preconnectController = void 0;
    }
    emitPreconnect(event) {
        try {
            this.options.observePreconnect?.(event);
        } catch  {}
    }
    emitMetric(metric) {
        try {
            this.options.metricsIncrement?.(metric);
        } catch  {}
    }
    emitLifecycle(event) {
        switch(event.type){
            case "acquire":
                this.emitMetric({
                    stat: "transport.agent_websocket_acquire",
                    tags: {
                        outcome: event.outcome,
                        failure_category: event.outcome === "failed" ? event.failureCategory : "none",
                        miss_reason: event.outcome === "reused" ? "none" : event.missReason,
                        idle_age_bucket: event.outcome === "reused" ? event.idleAgeBucket : "none"
                    }
                });
                return;
            case "retired":
                this.emitMetric({
                    stat: "transport.agent_websocket_retired",
                    tags: {
                        cause: event.cause,
                        phase: event.phase,
                        socket_age_bucket: event.socketAgeBucket,
                        idle_age_bucket: event.idleAgeBucket,
                        last_claimed_idle_age_bucket: event.lastClaimedIdleAgeBucket,
                        lease_count_bucket: event.leaseCountBucket
                    }
                });
                return;
            case "peer_closed":
                this.emitMetric({
                    stat: "transport.agent_websocket_peer_close",
                    tags: {
                        close_code_category: event.closeCodeCategory,
                        has_reason: String(event.hasReason),
                        phase: event.phase,
                        socket_age_bucket: event.socketAgeBucket,
                        idle_age_bucket: event.idleAgeBucket,
                        last_claimed_idle_age_bucket: event.lastClaimedIdleAgeBucket,
                        lease_count_bucket: event.leaseCountBucket
                    }
                });
                return;
            default:
                {
                    const exhaustive = event;
                    void exhaustive;
                    return;
                }
        }
    }
    throwIfCanceled(signal) {
        if (signal?.aborted === true) {
            throw cancellationError(signal);
        }
    }
    loadSessionFactory() {
        this.sessionFactory ??= this.loadRunSessionFactory();
        return this.sessionFactory;
    }
    ensureSession(createSession) {
        this.session ??= createSession({
            runWithNetworkContext: (fn)=>this.options.runWithNetworkContext(fn),
            maxConnections: this.maxConnectionsCached,
            ...this.keepaliveCached.pingIntervalMs === void 0 ? {} : {
                keepalivePingIntervalMs: this.keepaliveCached.pingIntervalMs
            },
            ...this.keepaliveCached.pingTimeoutMs === void 0 ? {} : {
                keepalivePingTimeoutMs: this.keepaliveCached.pingTimeoutMs
            },
            onPoolWentCold: ()=>this.schedulePreconnect(),
            onIdleSocketsExhausted: ()=>{
                if (this.warmSpareOnLeaseCached) {
                    this.schedulePreconnect();
                }
            },
            observePreconnect: (event)=>{
                this.emitPreconnect({
                    outcome: event
                });
                if (event === "expired") {
                    this.schedulePreconnect(this.preconnectRetryDelayMs());
                }
            },
            observeLifecycle: (event)=>this.emitLifecycle(event),
            observeFirstMessagePipeline: (event)=>{
                try {
                    this.options.metricsIncrement?.({
                        stat: "transport.agent_websocket_first_message_pipeline",
                        tags: {
                            outcome: event.outcome
                        }
                    });
                    if (event.outcome === "accepted") {
                        this.options.metricsIncrement?.({
                            stat: "transport.agent_websocket_first_message_pipeline_time_saved_ms",
                            value: event.timeSavedMs
                        });
                    }
                } catch  {}
            }
        });
        return this.session;
    }
    assertOpen() {
        if (this.closed) {
            throw new AgentRunWebSocketClosedError();
        }
    }
};
function createAgentRunWebSocketSelection(options2) {
    const selection = new AgentRunWebSocketSelection(options2);
    return {
        transport: selection,
        drain: ()=>selection.drain(),
        dispose: ()=>selection.dispose()
    };
}

return exports2;
}
