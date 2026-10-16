import { agent_websocket_pb_exports } from "../../../agent_websocket_pb_exports.js";
import { init_agent_websocket } from "../../../bidi-connect/dist/agent-websocket.js";
import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { agent_websocket_exports } from "../../../entry.js";
import { init_agent_websocket_pb } from "../../../proto/dist/generated/agent/v1/agent_websocket_pb.js";
var __wakaru_require_agentWebSocketLeaseManager_cache;
export function require_agentWebSocketLeaseManager() {
if (__wakaru_require_agentWebSocketLeaseManager_cache) return __wakaru_require_agentWebSocketLeaseManager_cache;
var exports2 = {};
__wakaru_require_agentWebSocketLeaseManager_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AgentWebSocketLeaseManager = exports2.AgentWebSocketLifecycleError = void 0;
var agent_websocket_1 = (init_agent_websocket(), __toCommonJS(agent_websocket_exports));
var agent_websocket_pb_js_1 = (init_agent_websocket_pb(), __toCommonJS(agent_websocket_pb_exports));
var DEFAULT_OPEN_TIMEOUT_MS = 1e4;
var DEFAULT_HANDSHAKE_TIMEOUT_MS = 1e4;
var DEFAULT_CLOSE_GRACE_TIMEOUT_MS = 5e3;
var DEFAULT_MAX_CONNECTIONS = 1;
var WEBSOCKET_OPEN = 1;
var WEBSOCKET_CLOSED = 3;
var DEFAULT_KEEPALIVE_PING_INTERVAL_MS = 1e4;
var DEFAULT_KEEPALIVE_PING_TIMEOUT_MS = 2e4;
var AgentWebSocketLifecycleError = class extends Error {
    constructor(code, message){
        super(message);
        this.name = "AgentWebSocketLifecycleError";
        this.code = code;
    }
};
exports2.AgentWebSocketLifecycleError = AgentWebSocketLifecycleError;
var defaultTimers = {
    setTimeout (callback, delayMs) {
        return setTimeout(callback, delayMs);
    },
    clearTimeout (handle) {
        clearTimeout(handle);
    }
};
function lifecycleError(code, detail) {
    const suffix = detail instanceof Error && detail.message.length > 0 ? `: ${detail.message}` : "";
    const messages = {
        aborted: "Agent WebSocket acquisition aborted",
        context_invalidated: "Agent WebSocket context invalidated",
        handshake_failed: `Agent WebSocket hello handshake failed${suffix}`,
        handshake_timeout: "Agent WebSocket hello handshake timed out",
        manager_closed: "Agent WebSocket lease manager is closed",
        no_idle_socket: "Agent WebSocket pool had no warm socket to reuse",
        open_failed: `Agent WebSocket failed to open${suffix}`,
        open_timeout: "Agent WebSocket opening timed out",
        pool_exhausted: "Agent WebSocket connection pool is at capacity"
    };
    return new AgentWebSocketLifecycleError(code, messages[code]);
}
function rawDataBytes(data) {
    if (Array.isArray(data)) {
        return Buffer.concat(data);
    }
    if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}
function isAborted3(signal) {
    return signal?.aborted === true;
}
function positiveFiniteNumberOrFallback(value, fallback3) {
    return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : fallback3;
}
function nonNegativeFiniteNumberOrFallback(value, fallback3) {
    return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : fallback3;
}
function socketAgeBucket(ageMs) {
    if (ageMs < 1e4) return "under_10s";
    if (ageMs < 6e4) return "10s_to_1m";
    if (ageMs < 5 * 6e4) return "1m_to_5m";
    if (ageMs < 10 * 6e4) return "5m_to_10m";
    if (ageMs < 20 * 6e4) return "10m_to_20m";
    return "20m_plus";
}
function idleAgeBucket(idleSinceMs, nowMs2) {
    if (idleSinceMs === void 0) return "none";
    const ageMs = Math.max(0, nowMs2 - idleSinceMs);
    if (ageMs < 1e3) return "under_1s";
    if (ageMs < 1e4) return "1s_to_10s";
    if (ageMs < 6e4) return "10s_to_1m";
    if (ageMs < 5 * 6e4) return "1m_to_5m";
    return "5m_plus";
}
function leaseCountBucket(count2) {
    if (count2 <= 0) return "0";
    if (count2 === 1) return "1";
    if (count2 <= 4) return "2_to_4";
    if (count2 <= 8) return "5_to_8";
    if (count2 <= 16) return "9_to_16";
    return "17_plus";
}
function closeCodeCategory(code) {
    if (code === 0) return "none";
    if (code === 1e3) return "normal";
    if (code === 1001) return "going_away";
    if (code === 1006) return "abnormal";
    if (code === 1008) return "policy";
    if (code === 1012) return "restart";
    return "other";
}
function releasePhaseSocketEventOwnership(generation, owner) {
    if (generation.activePhaseSocketEventOwner === owner) {
        generation.activePhaseSocketEventOwner = void 0;
    }
}
var AgentWebSocketLeaseManager = class {
    constructor(options2){
        this.generations = [];
        this.closingSockets = new Set();
        this.reservations = 0;
        this.retirementDepth = 0;
        this.closed = false;
        this.createSocket = options2.createSocket;
        this.contextsEqual = options2.contextsEqual ?? Object.is;
        this.classifyContextMismatch = options2.classifyContextMismatch;
        const configuredMaxConnections = positiveFiniteNumberOrFallback(options2.maxConnections, DEFAULT_MAX_CONNECTIONS);
        this.maxConnections = Math.max(1, Math.trunc(configuredMaxConnections));
        this.openTimeoutMs = positiveFiniteNumberOrFallback(options2.openTimeoutMs, DEFAULT_OPEN_TIMEOUT_MS);
        this.handshakeTimeoutMs = positiveFiniteNumberOrFallback(options2.handshakeTimeoutMs, DEFAULT_HANDSHAKE_TIMEOUT_MS);
        this.closeGraceTimeoutMs = positiveFiniteNumberOrFallback(options2.closeGraceTimeoutMs, DEFAULT_CLOSE_GRACE_TIMEOUT_MS);
        this.keepalivePingIntervalMs = nonNegativeFiniteNumberOrFallback(options2.keepalivePingIntervalMs, DEFAULT_KEEPALIVE_PING_INTERVAL_MS);
        this.keepalivePingTimeoutMs = positiveFiniteNumberOrFallback(options2.keepalivePingTimeoutMs, DEFAULT_KEEPALIVE_PING_TIMEOUT_MS);
        this.timers = options2.timers ?? defaultTimers;
        this.now = options2.now ?? Date.now;
        this.observePreconnect = options2.observePreconnect;
        this.onPoolWentCold = options2.onPoolWentCold;
        this.onIdleSocketsExhausted = options2.onIdleSocketsExhausted;
        this.observeLifecycle = options2.observeLifecycle;
    }
    async acquire(context2, options2 = {}) {
        let missReason = "no_idle_socket";
        let acquiredGeneration;
        try {
            if (this.closed) {
                throw lifecycleError("manager_closed");
            }
            if (this.retirementDepth > 0) {
                throw lifecycleError("pool_exhausted");
            }
            if (isAborted3(options2.signal)) {
                throw lifecycleError("aborted");
            }
            if (isAborted3(options2.contextInvalidationSignal)) {
                throw lifecycleError("context_invalidated");
            }
            const claim = this.claimIdleGeneration(context2, options2.contextInvalidationSignal);
            missReason = claim.missReason;
            const reused = claim.generation;
            if (reused === void 0 && options2.reuseOnly === true) {
                throw lifecycleError(this.occupancy() >= this.maxConnections ? "pool_exhausted" : "no_idle_socket");
            }
            const generation = reused ?? await this.openGeneration(context2, options2, agent_websocket_1.AGENT_WEBSOCKET_SUBPROTOCOL);
            acquiredGeneration = generation;
            if (isAborted3(options2.signal)) {
                this.retireGeneration(generation, "acquisition aborted", "acquisition_aborted");
                throw lifecycleError("aborted");
            }
            if (isAborted3(options2.contextInvalidationSignal)) {
                this.retireGeneration(generation, "context invalidated", "context_invalidated");
                throw lifecycleError("context_invalidated");
            }
            if (generation.state !== "ready" || generation.socket.readyState !== WEBSOCKET_OPEN || !this.generations.includes(generation)) {
                this.retireGeneration(generation, "socket is not reusable", "socket_unusable");
                throw lifecycleError("open_failed");
            }
            generation.leased = true;
            generation.leaseCount += 1;
            generation.lastClaimedIdleAgeBucket = reused === void 0 ? "none" : claim.idleAgeBucket;
            this.exitIdle(generation);
            let preconnectReservationId;
            if (generation.preconnectReady && !generation.preconnectClaimed) {
                generation.preconnectClaimed = true;
                preconnectReservationId = generation.preconnectReservationId;
                this.emitPreconnect("claimed");
            }
            const socketReuse = reused === void 0 ? "opened" : generation.leaseCount <= 1 ? "preconnected" : "reused";
            const lease = this.createLease(generation, socketReuse, preconnectReservationId);
            this.emitLifecycle(reused === void 0 ? {
                type: "acquire",
                outcome: "opened",
                missReason
            } : {
                type: "acquire",
                outcome: "reused",
                idleAgeBucket: claim.idleAgeBucket
            });
            this.maybeEmitIdleSocketsExhausted();
            return lease;
        } catch (error3) {
            this.emitLifecycle({
                type: "acquire",
                outcome: "failed",
                failureCategory: error3 instanceof AgentWebSocketLifecycleError ? error3.code : "unknown",
                missReason
            });
            throw error3;
        } finally{
            if (acquiredGeneration !== void 0) {
                acquiredGeneration.acquiring = false;
            }
        }
    }
    async preconnect(context2, options2) {
        if (this.closed) {
            throw lifecycleError("manager_closed");
        }
        if (this.retirementDepth > 0) {
            throw lifecycleError("pool_exhausted");
        }
        if (isAborted3(options2.signal)) {
            throw lifecycleError("aborted");
        }
        if (isAborted3(options2.contextInvalidationSignal)) {
            throw lifecycleError("context_invalidated");
        }
        const alreadyWarm = this.claimIdleGeneration(context2, options2.contextInvalidationSignal).generation;
        if (alreadyWarm !== void 0) {
            alreadyWarm.acquiring = false;
            return;
        }
        const generation = await this.openGeneration(context2, options2, agent_websocket_1.AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL, options2.reservationId);
        if (isAborted3(options2.signal)) {
            this.retireGeneration(generation, "preconnect aborted", "preconnect_aborted");
            throw lifecycleError("aborted");
        }
        if (isAborted3(options2.contextInvalidationSignal)) {
            this.retireGeneration(generation, "preconnect context invalidated", "context_invalidated");
            throw lifecycleError("context_invalidated");
        }
        if (generation.state !== "ready" || generation.socket.readyState !== WEBSOCKET_OPEN || !this.generations.includes(generation)) {
            this.retireGeneration(generation, "preconnected socket is not reusable", "preconnect_unusable");
            throw lifecycleError("open_failed");
        }
        generation.preconnectReady = true;
        generation.acquiring = false;
        this.enterIdle(generation);
        if (generation.retireAfterLease) {
            this.retireGeneration(generation, "preconnect completed while retiring", generation.deferredRetirementCause ?? "preconnect_stale");
            throw lifecycleError("open_failed");
        }
    }
    close(cause = "manager_closed") {
        if (this.closed) {
            return;
        }
        this.closed = true;
        for (const generation of [
            ...this.generations
        ]){
            this.retireGeneration(generation, "manager closed", cause);
        }
    }
    retireWhenIdle(cause = "unknown") {
        this.retirementDepth += 1;
        try {
            for (const generation of [
                ...this.generations
            ]){
                generation.retireAfterLease = true;
                generation.deferredRetirementCause ??= cause;
            }
            for (const generation of [
                ...this.generations
            ]){
                if (this.isIdle(generation)) {
                    this.retireGeneration(generation, "retiring idle socket", cause);
                }
            }
        } finally{
            this.retirementDepth -= 1;
        }
    }
    isIdle(generation) {
        return generation.state === "ready" && !generation.leased && !generation.acquiring;
    }
    occupancy() {
        return this.generations.length + this.closingSockets.size + this.reservations;
    }
    claimIdleGeneration(context2, contextInvalidationSignal) {
        this.retirementDepth += 1;
        try {
            return this.claimIdleGenerationDuringRetirement(context2, contextInvalidationSignal);
        } finally{
            this.retirementDepth -= 1;
        }
    }
    claimIdleGenerationDuringRetirement(context2, contextInvalidationSignal) {
        let match2;
        let matchedIdleAgeBucket = "none";
        const missReasons = new Set();
        const mismatched = [];
        for (const generation of [
            ...this.generations
        ]){
            if (!this.isIdle(generation)) {
                continue;
            }
            generation.acquiring = true;
            let contextMatches = false;
            const generationMatches = generation.contextInvalidationSignal === contextInvalidationSignal;
            try {
                contextMatches = generationMatches && this.contextsEqual(generation.context, context2);
            } finally{
                if (!contextMatches || match2 !== void 0) {
                    generation.acquiring = false;
                }
            }
            if (!contextMatches) {
                missReasons.add(generationMatches ? this.contextMismatchReason(generation.context, context2) : "context_generation_changed");
                mismatched.push(generation);
                continue;
            }
            if (generation.state !== "ready" || !this.generations.includes(generation)) {
                generation.acquiring = false;
                continue;
            }
            if (generation.retireAfterLease || generation.socket.readyState !== WEBSOCKET_OPEN) {
                generation.acquiring = false;
                missReasons.add("idle_unusable");
                this.terminateIdleGeneration(generation, "idle_unusable");
                continue;
            }
            if (match2 === void 0) {
                match2 = generation;
                matchedIdleAgeBucket = idleAgeBucket(generation.idleSinceMs, this.readNow());
            }
        }
        if (match2 !== void 0) {
            return {
                generation: match2,
                idleAgeBucket: matchedIdleAgeBucket,
                missReason: "no_idle_socket"
            };
        }
        for (const generation of mismatched){
            if (this.occupancy() < this.maxConnections) {
                break;
            }
            this.terminateIdleGeneration(generation, "context_mismatch");
        }
        let missReason = "no_idle_socket";
        if (missReasons.size > 1) {
            missReason = "multiple_idle_mismatches";
        } else {
            for (const reason of missReasons){
                missReason = reason;
            }
        }
        return {
            generation: void 0,
            idleAgeBucket: "none",
            missReason
        };
    }
    dialGeneration(context2, options2, subprotocol, preconnectReservationId) {
        if (this.closed) {
            throw lifecycleError("manager_closed");
        }
        if (this.occupancy() >= this.maxConnections) {
            throw lifecycleError("pool_exhausted");
        }
        this.reservations += 1;
        try {
            let socket;
            try {
                socket = this.createSocket(context2, subprotocol);
            } catch (error3) {
                throw lifecycleError("open_failed", error3);
            }
            const generation = {
                context: context2,
                contextInvalidationSignal: options2.contextInvalidationSignal,
                socket,
                subprotocol,
                preconnectReservationId,
                createdAtMs: this.readNow(),
                state: "opening",
                acquiring: true,
                leased: false,
                preconnectReady: false,
                preconnectClaimed: false,
                retireAfterLease: false,
                deferredRetirementCause: void 0,
                idleSinceMs: void 0,
                lastClaimedIdleAgeBucket: "none",
                leaseCount: 0,
                keepalivePingTimeout: void 0,
                keepalivePongTimeout: void 0,
                onKeepalivePong: void 0,
                activePhaseSocketEventOwner: void 0,
                cancelPending: void 0,
                onContextInvalidated: void 0,
                durableLifecycleListeners: void 0
            };
            this.generations.push(generation);
            this.attachDurableGenerationLifecycleListeners(generation);
            if (this.closed) {
                this.retireGeneration(generation, "manager closed during dial", "manager_closed");
                throw lifecycleError("manager_closed");
            }
            return generation;
        } finally{
            this.reservations -= 1;
        }
    }
    async openGeneration(context2, options2, subprotocol, preconnectReservationId) {
        const generation = this.dialGeneration(context2, options2, subprotocol, preconnectReservationId);
        try {
            await this.waitForOpen(generation, options2.signal);
            const socket = generation.socket;
            this.assertPooled(generation);
            if (socket.protocol !== subprotocol) {
                throw lifecycleError("handshake_failed", new Error(`server did not negotiate ${subprotocol}`));
            }
            await this.exchangeHello(generation, options2.signal);
            if (generation.contextInvalidationSignal?.aborted === true) {
                throw lifecycleError("context_invalidated");
            }
            this.assertPooled(generation);
            generation.state = "ready";
            this.attachContextInvalidation(generation);
            return generation;
        } catch (error3) {
            this.retireGeneration(generation, "opening or handshake failed", "open_or_handshake_failed");
            throw error3;
        }
    }
    waitForOpen(generation, signal) {
        if (generation.socket.readyState === WEBSOCKET_OPEN) {
            return Promise.resolve();
        }
        return new Promise((resolve36, reject2)=>{
            let settled = false;
            let timeout2;
            const finish = (error3)=>{
                if (settled) {
                    return;
                }
                settled = true;
                this.timers.clearTimeout(timeout2);
                generation.socket.off("open", onOpen);
                releasePhaseSocketEventOwnership(generation, phaseOwner);
                signal?.removeEventListener("abort", onAbort);
                generation.contextInvalidationSignal?.removeEventListener("abort", onContextInvalidated);
                if (generation.cancelPending === finish) {
                    generation.cancelPending = void 0;
                }
                if (error3 === void 0) {
                    resolve36();
                } else {
                    reject2(error3);
                }
            };
            const onOpen = ()=>finish();
            const onAbort = ()=>finish(lifecycleError("aborted"));
            const onContextInvalidated = ()=>finish(lifecycleError("context_invalidated"));
            const phaseOwner = {
                phase: "opening",
                onError: (error3)=>finish(lifecycleError("open_failed", error3)),
                onClose: ()=>finish(lifecycleError("open_failed"))
            };
            generation.socket.on("open", onOpen);
            generation.activePhaseSocketEventOwner = phaseOwner;
            signal?.addEventListener("abort", onAbort, {
                once: true
            });
            generation.contextInvalidationSignal?.addEventListener("abort", onContextInvalidated, {
                once: true
            });
            generation.cancelPending = finish;
            timeout2 = this.timers.setTimeout(()=>finish(lifecycleError("open_timeout")), this.openTimeoutMs);
            if (signal?.aborted === true) {
                onAbort();
            } else if (generation.contextInvalidationSignal?.aborted === true) {
                onContextInvalidated();
            }
        });
    }
    exchangeHello(generation, signal) {
        return new Promise((resolve36, reject2)=>{
            let settled = false;
            let timeout2;
            const finish = (error3)=>{
                if (settled) {
                    return;
                }
                settled = true;
                this.timers.clearTimeout(timeout2);
                generation.socket.off("message", onMessage);
                releasePhaseSocketEventOwnership(generation, phaseOwner);
                signal?.removeEventListener("abort", onAbort);
                generation.contextInvalidationSignal?.removeEventListener("abort", onContextInvalidated);
                if (generation.cancelPending === finish) {
                    generation.cancelPending = void 0;
                }
                if (error3 === void 0) {
                    resolve36();
                } else {
                    reject2(error3);
                }
            };
            const onMessage = (data)=>{
                try {
                    const frame = agent_websocket_pb_js_1.AgentWebSocketServerFrame.fromBinary(rawDataBytes(data));
                    (0, agent_websocket_1.validateAgentWebSocketServerFrame)(frame);
                    if (frame.frame.case !== "hello") {
                        throw new Error("first server frame was not hello");
                    }
                    finish();
                } catch (error3) {
                    finish(lifecycleError("handshake_failed", error3));
                }
            };
            const onAbort = ()=>finish(lifecycleError("aborted"));
            const onContextInvalidated = ()=>finish(lifecycleError("context_invalidated"));
            const phaseOwner = {
                phase: "hello-handshake",
                onError: (error3)=>finish(lifecycleError("handshake_failed", error3)),
                onClose: ()=>finish(lifecycleError("handshake_failed"))
            };
            generation.socket.on("message", onMessage);
            generation.activePhaseSocketEventOwner = phaseOwner;
            signal?.addEventListener("abort", onAbort, {
                once: true
            });
            generation.contextInvalidationSignal?.addEventListener("abort", onContextInvalidated, {
                once: true
            });
            generation.cancelPending = finish;
            timeout2 = this.timers.setTimeout(()=>finish(lifecycleError("handshake_timeout")), this.handshakeTimeoutMs);
            try {
                const hello = new agent_websocket_pb_js_1.AgentWebSocketClientFrame({
                    frame: {
                        case: "hello",
                        value: new agent_websocket_pb_js_1.AgentWebSocketHello({
                            protocolVersion: agent_websocket_1.AGENT_WEBSOCKET_PROTOCOL_VERSION
                        })
                    }
                });
                (0, agent_websocket_1.validateAgentWebSocketClientFrame)(hello);
                generation.socket.send(hello.toBinary());
            } catch (error3) {
                finish(lifecycleError("handshake_failed", error3));
            }
            if (signal?.aborted === true) {
                onAbort();
            } else if (generation.contextInvalidationSignal?.aborted === true) {
                onContextInvalidated();
            }
        });
    }
    attachContextInvalidation(generation) {
        const signal = generation.contextInvalidationSignal;
        if (signal === void 0) {
            return;
        }
        const onContextInvalidated = ()=>{
            if (generation.leased) {
                generation.retireAfterLease = true;
                generation.deferredRetirementCause ??= "context_invalidated";
                return;
            }
            this.retireGeneration(generation, "context invalidated", "context_invalidated");
        };
        generation.onContextInvalidated = onContextInvalidated;
        signal.addEventListener("abort", onContextInvalidated, {
            once: true
        });
    }
    attachDurableGenerationLifecycleListeners(generation) {
        const onSocketError = (error3)=>{
            const phaseOwner = generation.activePhaseSocketEventOwner;
            if (phaseOwner !== void 0) {
                phaseOwner.onError(error3);
                return;
            }
            this.retireGeneration(generation, "socket error", "socket_error");
        };
        const onSocketClose = (code, reason)=>{
            this.emitPeerClosed(generation, code ?? 0, (reason?.length ?? 0) > 0);
            const phaseOwner = generation.activePhaseSocketEventOwner;
            if (phaseOwner !== void 0) {
                phaseOwner.onClose();
                return;
            }
            this.abandonGeneration(generation);
        };
        generation.durableLifecycleListeners = {
            onSocketError,
            onSocketClose
        };
        generation.socket.on("error", onSocketError);
        generation.socket.on("close", onSocketClose);
    }
    createLease(generation, socketReuse, preconnectReservationId) {
        let released = false;
        return {
            socket: generation.socket,
            socketReuse,
            ...preconnectReservationId === void 0 ? {} : {
                preconnectReservationId
            },
            release: ()=>{
                if (released) {
                    return;
                }
                released = true;
                if (generation.state === "retired") {
                    return;
                }
                generation.leased = false;
                if (generation.retireAfterLease) {
                    this.retireGeneration(generation, "lease released while retiring", generation.deferredRetirementCause ?? "unknown");
                } else if (generation.socket.readyState !== WEBSOCKET_OPEN) {
                    this.retireGeneration(generation, "released socket is not open", "released_socket_not_open");
                } else {
                    this.enterIdle(generation);
                }
            },
            retire: ()=>{
                if (released) {
                    return;
                }
                released = true;
                generation.leased = false;
                this.retireGeneration(generation, "lease retired", "lease_retired");
            }
        };
    }
    assertPooled(generation) {
        if (generation.state === "retired" || !this.generations.includes(generation) || this.closed) {
            throw lifecycleError(this.closed ? "manager_closed" : "open_failed");
        }
    }
    enterIdle(generation) {
        generation.idleSinceMs = this.readNow();
        this.armKeepalive(generation);
    }
    exitIdle(generation) {
        generation.idleSinceMs = void 0;
        this.clearKeepalive(generation);
    }
    armKeepalive(generation) {
        if (this.keepalivePingIntervalMs <= 0) {
            return;
        }
        this.clearKeepalive(generation);
        generation.keepalivePingTimeout = this.timers.setTimeout(()=>{
            generation.keepalivePingTimeout = void 0;
            this.sendKeepalivePing(generation);
        }, this.keepalivePingIntervalMs);
    }
    clearKeepalive(generation) {
        if (generation.keepalivePingTimeout !== void 0) {
            this.timers.clearTimeout(generation.keepalivePingTimeout);
            generation.keepalivePingTimeout = void 0;
        }
        if (generation.keepalivePongTimeout !== void 0) {
            this.timers.clearTimeout(generation.keepalivePongTimeout);
            generation.keepalivePongTimeout = void 0;
        }
        if (generation.onKeepalivePong !== void 0) {
            generation.socket.off("pong", generation.onKeepalivePong);
            generation.onKeepalivePong = void 0;
        }
    }
    sendKeepalivePing(generation) {
        if (this.closed || !this.isIdle(generation)) {
            return;
        }
        if (generation.socket.readyState !== WEBSOCKET_OPEN) {
            this.retireGeneration(generation, "idle socket is not open", "socket_unusable");
            return;
        }
        const onPong = ()=>{
            this.clearKeepalive(generation);
            if (!this.closed && this.isIdle(generation)) {
                this.armKeepalive(generation);
            }
        };
        generation.onKeepalivePong = onPong;
        generation.socket.on("pong", onPong);
        generation.keepalivePongTimeout = this.timers.setTimeout(()=>{
            generation.keepalivePongTimeout = void 0;
            this.terminateIdleGeneration(generation, "keepalive_timeout");
        }, this.keepalivePingTimeoutMs);
        try {
            generation.socket.ping();
        } catch  {
            this.clearKeepalive(generation);
            this.retireGeneration(generation, "keepalive ping failed", "socket_unusable");
        }
    }
    abandonGeneration(generation) {
        if (generation.state === "retired") {
            return;
        }
        this.clearKeepalive(generation);
        generation.state = "retired";
        generation.leased = false;
        if (generation.preconnectReady && !generation.preconnectClaimed) {
            generation.preconnectClaimed = true;
            this.emitPreconnect("expired");
        }
        const cancelPending = generation.cancelPending;
        generation.cancelPending = void 0;
        cancelPending?.(lifecycleError(this.closed ? "manager_closed" : "open_failed"));
        generation.activePhaseSocketEventOwner = void 0;
        this.detachDurableGenerationLifecycleListeners(generation);
        const index = this.generations.indexOf(generation);
        if (index !== -1) {
            this.generations.splice(index, 1);
        }
        generation.socket.on("error", ()=>{});
        if (generation.socket.readyState === WEBSOCKET_CLOSED) {
            this.maybeEmitPoolWentCold();
        }
    }
    maybeEmitPoolWentCold() {
        if (this.closed || this.occupancy() > 0) {
            return;
        }
        try {
            this.onPoolWentCold?.();
        } catch  {}
    }
    maybeEmitIdleSocketsExhausted() {
        if (this.closed || this.onIdleSocketsExhausted === void 0 || this.occupancy() === 0 || this.occupancy() >= this.maxConnections) {
            return;
        }
        for (const generation of this.generations){
            if (this.isIdle(generation)) {
                return;
            }
        }
        try {
            this.onIdleSocketsExhausted();
        } catch  {}
    }
    emitPreconnect(event) {
        try {
            this.observePreconnect?.(event);
        } catch  {}
    }
    lifecycleDimensions(generation) {
        const nowMs2 = this.readNow();
        const phaseOwner = generation.activePhaseSocketEventOwner;
        const phase = phaseOwner?.phase === "hello-handshake" ? "hello_handshake" : generation.state === "opening" ? "opening" : generation.leased ? "leased" : generation.preconnectReady && !generation.preconnectClaimed ? "preconnect_idle" : "idle";
        return {
            phase,
            socketAgeBucket: socketAgeBucket(Math.max(0, nowMs2 - generation.createdAtMs)),
            idleAgeBucket: idleAgeBucket(generation.idleSinceMs, nowMs2),
            lastClaimedIdleAgeBucket: generation.lastClaimedIdleAgeBucket,
            leaseCountBucket: leaseCountBucket(generation.leaseCount)
        };
    }
    contextMismatchReason(left, right) {
        try {
            return this.classifyContextMismatch?.(left, right) ?? "connection_context_changed";
        } catch  {
            return "connection_context_changed";
        }
    }
    readNow() {
        try {
            return this.now();
        } catch  {
            return Date.now();
        }
    }
    emitLifecycle(event) {
        try {
            this.observeLifecycle?.(event);
        } catch  {}
    }
    emitPeerClosed(generation, code, hasReason) {
        this.emitLifecycle({
            type: "peer_closed",
            closeCodeCategory: closeCodeCategory(code),
            hasReason,
            ...this.lifecycleDimensions(generation)
        });
    }
    terminateIdleGeneration(generation, cause) {
        if (generation.state === "retired") {
            return;
        }
        this.emitLifecycle({
            type: "retired",
            cause,
            ...this.lifecycleDimensions(generation)
        });
        this.abandonGeneration(generation);
        if (generation.socket.readyState === WEBSOCKET_CLOSED) {
            return;
        }
        try {
            generation.socket.terminate();
        } catch  {
            this.trackClosingSocket(generation.socket);
        }
    }
    retireGeneration(generation, reason, cause) {
        if (generation.state === "retired") {
            return;
        }
        this.emitLifecycle({
            type: "retired",
            cause,
            ...this.lifecycleDimensions(generation)
        });
        this.abandonGeneration(generation);
        if (generation.socket.readyState === WEBSOCKET_CLOSED) {
            return;
        }
        const closing = this.trackClosingSocket(generation.socket);
        try {
            generation.socket.close(1e3, reason);
        } catch  {
            try {
                generation.socket.terminate();
            } catch  {
                return;
            }
            if (closing !== void 0) {
                this.releaseClosingSocket(closing);
            }
            return;
        }
        if (closing !== void 0 && generation.socket.readyState === WEBSOCKET_CLOSED) {
            this.releaseClosingSocket(closing);
        }
    }
    trackClosingSocket(socket) {
        if (socket.readyState === WEBSOCKET_CLOSED) {
            return void 0;
        }
        const closing = {
            socket,
            onClose: ()=>{
                this.releaseClosingSocket(closing);
            },
            timeout: void 0
        };
        this.closingSockets.add(closing);
        socket.on("close", closing.onClose);
        closing.timeout = this.timers.setTimeout(()=>{
            try {
                socket.terminate();
            } catch  {
                return;
            }
            this.releaseClosingSocket(closing);
        }, this.closeGraceTimeoutMs);
        return closing;
    }
    releaseClosingSocket(closing) {
        if (!this.closingSockets.delete(closing)) {
            return;
        }
        this.timers.clearTimeout(closing.timeout);
        closing.socket.off("close", closing.onClose);
        this.maybeEmitPoolWentCold();
    }
    detachDurableGenerationLifecycleListeners(generation) {
        if (generation.onContextInvalidated !== void 0) {
            generation.contextInvalidationSignal?.removeEventListener("abort", generation.onContextInvalidated);
            generation.onContextInvalidated = void 0;
        }
        const listeners = generation.durableLifecycleListeners;
        if (listeners !== void 0) {
            generation.socket.off("error", listeners.onSocketError);
            generation.socket.off("close", listeners.onSocketClose);
            generation.durableLifecycleListeners = void 0;
        }
    }
};
exports2.AgentWebSocketLeaseManager = AgentWebSocketLeaseManager;

return exports2;
}
