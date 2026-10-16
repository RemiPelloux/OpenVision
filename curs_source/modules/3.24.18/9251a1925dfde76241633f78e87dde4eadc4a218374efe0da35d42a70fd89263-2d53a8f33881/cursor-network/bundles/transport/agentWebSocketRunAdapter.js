import { agent_websocket_pb_exports } from "../../../agent_websocket_pb_exports.js";
import { init_agent_websocket } from "../../../bidi-connect/dist/agent-websocket.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { __toCommonJS } from "../aggregatingMetricsProvider.js";
import { require_agentWebSocketLeaseManager } from "./agentWebSocketLeaseManager.js";
import { require_agentWebSocketRunFrames } from "./agentWebSocketRunFrames.js";
import { dist_exports } from "../../../dist_exports.js";
import { agent_websocket_exports } from "../../../entry.js";
import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { init_agent_websocket_pb } from "../../../proto/dist/generated/agent/v1/agent_websocket_pb.js";
var __wakaru_require_agentWebSocketRunAdapter_cache;
export function require_agentWebSocketRunAdapter() {
if (__wakaru_require_agentWebSocketRunAdapter_cache) return __wakaru_require_agentWebSocketRunAdapter_cache;
var exports2 = {};
__wakaru_require_agentWebSocketRunAdapter_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AgentWebSocketRunAdapter = void 0;
var agent_websocket_1 = (init_agent_websocket(), __toCommonJS(agent_websocket_exports));
var constants_1 = (init_dist2(), __toCommonJS(dist_exports));
var agent_websocket_pb_js_1 = (init_agent_websocket_pb(), __toCommonJS(agent_websocket_pb_exports));
var connect_1 = require_cjs3();
var agentWebSocketLeaseManager_js_1 = require_agentWebSocketLeaseManager();
var agentWebSocketRunFrames_js_1 = require_agentWebSocketRunFrames();
var DEFAULT_ACCEPT_TIMEOUT_MS = 3e4;
var DEFAULT_CANCEL_FINALIZATION_TIMEOUT_MS = 5e3;
var DEFAULT_ERROR_CLOSE_GRACE_MS = 100;
var DEFAULT_MAX_BUFFERED_BYTES = 64 * 1024 * 1024;
var AGENT_CLIENT_MESSAGE_MAX_WIRE_BYTES = 5e7;
var WEBSOCKET_OPEN = 1;
var SAFE_AGENT_WEBSOCKET_CLOSE_REASONS = new Set([
    "acquisition aborted",
    "binary-frames-only",
    "cancelled",
    "client-closed",
    "context invalidated",
    "expired",
    "failed_precondition",
    "idle",
    "lease released while retiring",
    "lease retired",
    "manager closed",
    "manager closed during dial",
    "opening or handshake failed",
    "permission_denied",
    "released socket is not open",
    "resource_exhausted",
    "retiring idle socket",
    "run-complete",
    "socket error",
    "socket is not reusable",
    "write-unacknowledged"
]);
function closeReasonForDiagnostics(reason) {
    if (reason === void 0 || reason.byteLength === 0) {
        return "none";
    }
    const boundedReason = reason.subarray(0, 128).toString("utf8");
    if (SAFE_AGENT_WEBSOCKET_CLOSE_REASONS.has(boundedReason)) {
        return boundedReason;
    }
    return `redacted:${reason.byteLength}`;
}
function closeCodeCategory(code) {
    if (code === void 0) {
        return "unknown";
    }
    const standardCategories = {
        1e3: "normal",
        1001: "going-away",
        1002: "protocol-error",
        1003: "unsupported-data",
        1005: "no-status",
        1006: "abnormal",
        1007: "invalid-payload",
        1008: "policy-violation",
        1009: "message-too-big",
        1010: "extension-required",
        1011: "internal-error",
        1012: "service-restart",
        1013: "try-again-later",
        1014: "bad-gateway",
        1015: "tls-handshake"
    };
    const standard = standardCategories[code];
    if (standard !== void 0) {
        return standard;
    }
    if (code >= 3e3 && code <= 3999) {
        return "registered";
    }
    if (code >= 4e3 && code <= 4999) {
        return "application";
    }
    return "other";
}
function runDiagnosticsMetadata(options2) {
    const { code, reason, outbound, elapsedMs: elapsedMs2 } = options2;
    return {
        agentWsPhase: "accepted",
        agentWsCloseCode: code === void 0 ? "none" : String(code),
        agentWsCloseCategory: closeCodeCategory(code),
        agentWsCloseReason: closeReasonForDiagnostics(reason),
        agentWsOutboundStage: outbound.stage,
        agentWsElapsedMs: String(Math.max(0, elapsedMs2)),
        agentWsClientMessagesQueued: String(outbound.messagesQueued),
        agentWsClientPayloadBytesQueued: String(outbound.bytesQueued)
    };
}
var defaultTimers = {
    setTimeout (callback, delayMs) {
        return setTimeout(callback, delayMs);
    },
    clearTimeout (handle) {
        clearTimeout(handle);
    }
};
function canceledError(signal) {
    if (signal?.reason instanceof connect_1.ConnectError) {
        return signal.reason;
    }
    return new connect_1.ConnectError("Request canceled", connect_1.Code.Canceled);
}
function assertAgentClientMessageWireSize(message) {
    if (message.byteLength > AGENT_CLIENT_MESSAGE_MAX_WIRE_BYTES) {
        throw new connect_1.ConnectError("Agent WebSocket client message exceeds the 50 MB limit", connect_1.Code.ResourceExhausted);
    }
}
function replayFirstInput(firstInput, inputIterator) {
    let claimed = false;
    return {
        [Symbol.asyncIterator] () {
            if (claimed) {
                throw new Error("Agent WebSocket fallback input is one-shot");
            }
            claimed = true;
            let firstPending = true;
            return {
                next: async ()=>{
                    if (firstPending) {
                        firstPending = false;
                        return firstInput;
                    }
                    return inputIterator.next();
                },
                return: async ()=>{
                    firstPending = false;
                    return await inputIterator.return?.() ?? {
                        done: true,
                        value: void 0
                    };
                },
                throw: async (error3)=>{
                    firstPending = false;
                    if (inputIterator.throw !== void 0) {
                        return inputIterator.throw(error3);
                    }
                    await inputIterator.return?.();
                    throw error3;
                }
            };
        }
    };
}
var AgentWebSocketRunAdapter = class {
    constructor(options2){
        this.leaseManager = options2.leaseManager;
        this.connectionUsePolicy = options2.connectionUsePolicy ?? "sequential-runs";
        this.acceptTimeoutMs = options2.acceptTimeoutMs ?? DEFAULT_ACCEPT_TIMEOUT_MS;
        this.cancelFinalizationTimeoutMs = options2.cancelFinalizationTimeoutMs ?? DEFAULT_CANCEL_FINALIZATION_TIMEOUT_MS;
        this.maxBufferedBytes = options2.maxBufferedBytes ?? DEFAULT_MAX_BUFFERED_BYTES;
        this.timers = options2.timers ?? defaultTimers;
        this.observeFirstMessagePipeline = options2.observeFirstMessagePipeline;
    }
    observePipeline(event) {
        try {
            this.observeFirstMessagePipeline?.(event);
        } catch  {}
    }
    async run(context2, request3) {
        if (request3.signal?.aborted === true) {
            throw canceledError(request3.signal);
        }
        let lease;
        try {
            lease = await this.leaseManager.acquire(context2, {
                signal: request3.signal,
                contextInvalidationSignal: request3.contextInvalidationSignal,
                ...request3.reuseOnly === void 0 ? {} : {
                    reuseOnly: request3.reuseOnly
                }
            });
        } catch (error3) {
            if (error3 instanceof agentWebSocketLeaseManager_js_1.AgentWebSocketLifecycleError && error3.code === "aborted") {
                throw canceledError(request3.signal);
            }
            if (error3 instanceof agentWebSocketLeaseManager_js_1.AgentWebSocketLifecycleError && error3.code === "pool_exhausted") {
                return {
                    kind: "fallback",
                    reason: "busy"
                };
            }
            if (error3 instanceof agentWebSocketLeaseManager_js_1.AgentWebSocketLifecycleError && error3.code === "no_idle_socket") {
                return {
                    kind: "fallback",
                    reason: "cold-pool"
                };
            }
            return {
                kind: "fallback",
                reason: "lease-unavailable"
            };
        }
        try {
            const attempt = await this.startRun(lease, request3);
            if (attempt.kind === "fallback") {
                lease.retire();
            }
            return attempt;
        } catch (error3) {
            lease.retire();
            throw error3;
        }
    }
    startRun(lease, request3) {
        const { identity } = request3;
        const socket = lease.socket;
        return new Promise((resolve36, reject2)=>{
            let settled = false;
            let timeout2;
            let pipelineAttemptedAt;
            let pipelineResolutionRecorded = false;
            let firstMessageQueuedBeforeAcceptance = false;
            let inputIterator;
            let firstInput;
            let inputStopped = false;
            let resolvePreacceptWriteFailure;
            const preacceptWriteFailure = new Promise((resolve37)=>{
                resolvePreacceptWriteFailure = resolve37;
            });
            const cleanup = ()=>{
                this.timers.clearTimeout(timeout2);
                socket.off("message", onMessage);
                socket.off("error", onError);
                socket.off("close", onClose);
                request3.signal?.removeEventListener("abort", onAbort);
            };
            const finish = (attempt)=>{
                if (settled) {
                    return;
                }
                settled = true;
                cleanup();
                resolve36(attempt);
            };
            const stopPreacceptInput = (error3)=>{
                if (inputStopped || inputIterator === void 0) {
                    return;
                }
                inputStopped = true;
                try {
                    const stopped = inputIterator.throw !== void 0 ? inputIterator.throw(error3) : inputIterator.return?.();
                    void stopped?.catch(()=>void 0);
                } catch  {}
            };
            const fail3 = (error3)=>{
                if (settled) {
                    return;
                }
                settled = true;
                stopPreacceptInput(error3);
                cleanup();
                reject2(error3);
            };
            const failAmbiguous = (message, cause)=>{
                if (pipelineAttemptedAt !== void 0 && !pipelineResolutionRecorded) {
                    pipelineResolutionRecorded = true;
                    this.observePipeline({
                        outcome: "ambiguous"
                    });
                }
                fail3(new agentWebSocketRunFrames_js_1.AgentWebSocketDeliveryAmbiguousError(message, {
                    cause
                }));
            };
            const onPreacceptWriteFailure = (error3)=>{
                resolvePreacceptWriteFailure(error3);
                failAmbiguous("Agent WebSocket write failed before RunAccepted", error3);
            };
            const onMessage = (data)=>{
                let frame;
                try {
                    frame = agent_websocket_pb_js_1.AgentWebSocketServerFrame.fromBinary((0, agentWebSocketRunFrames_js_1.rawDataBytes)(data));
                    (0, agent_websocket_1.validateAgentWebSocketServerFrame)(frame);
                } catch (error3) {
                    failAmbiguous("Agent WebSocket sent an unreadable frame before RunAccepted", error3);
                    return;
                }
                if (frame.frame.case === "runRejected") {
                    if (!(0, agentWebSocketRunFrames_js_1.identityMatches)(identity, frame.frame.value.identity)) {
                        failAmbiguous("Agent WebSocket rejected a different run");
                        return;
                    }
                    if (pipelineAttemptedAt !== void 0 && !pipelineResolutionRecorded) {
                        pipelineResolutionRecorded = true;
                        this.observePipeline({
                            outcome: "rejected"
                        });
                    }
                    finish({
                        kind: "fallback",
                        reason: "run-rejected",
                        ...firstInput === void 0 || inputIterator === void 0 ? {} : {
                            replayInput: replayFirstInput(firstInput, inputIterator)
                        }
                    });
                    return;
                }
                if (frame.frame.case !== "runAccepted" || !(0, agentWebSocketRunFrames_js_1.identityMatches)(identity, frame.frame.value.identity)) {
                    failAmbiguous("Agent WebSocket run was not accepted");
                    return;
                }
                if (pipelineAttemptedAt !== void 0 && !pipelineResolutionRecorded) {
                    pipelineResolutionRecorded = true;
                    this.observePipeline({
                        outcome: "accepted",
                        timeSavedMs: Math.max(0, Date.now() - pipelineAttemptedAt)
                    });
                }
                if (firstInput === void 0 || inputIterator === void 0) {
                    failAmbiguous("Agent WebSocket accepted before input was initialized");
                    return;
                }
                finish({
                    kind: "response",
                    response: this.acceptRun({
                        lease,
                        request: request3,
                        header: (0, agentWebSocketRunFrames_js_1.agentWebSocketHeadersToHeaders)(frame.frame.value.headers),
                        inputIterator,
                        firstInput,
                        firstMessageQueuedBeforeAcceptance,
                        preacceptWriteFailure
                    })
                });
            };
            const onError = (error3)=>{
                failAmbiguous("Agent WebSocket failed before RunAccepted", error3);
            };
            const onClose = ()=>{
                failAmbiguous("Agent WebSocket closed before RunAccepted");
            };
            const onAbort = ()=>{
                this.trySend(socket, (0, agentWebSocketRunFrames_js_1.cancelRunFrame)(identity.runId));
                fail3(canceledError(request3.signal));
            };
            socket.on("message", onMessage);
            socket.on("error", onError);
            socket.on("close", onClose);
            request3.signal?.addEventListener("abort", onAbort, {
                once: true
            });
            timeout2 = this.timers.setTimeout(()=>failAmbiguous("Agent WebSocket run was not accepted in time"), this.acceptTimeoutMs);
            try {
                const start = (0, agentWebSocketRunFrames_js_1.runStartFrame)(identity, request3.headers, lease.preconnectReservationId);
                (0, agent_websocket_1.validateAgentWebSocketClientFrame)(start);
                if (socket.readyState !== WEBSOCKET_OPEN) {
                    throw new Error("Agent WebSocket is not open");
                }
                if (request3.canSendRunStart?.() === false) {
                    finish({
                        kind: "fallback",
                        reason: "gate-disabled"
                    });
                    return;
                }
                this.send(socket, start, onPreacceptWriteFailure);
            } catch  {
                finish({
                    kind: "fallback",
                    reason: "run-not-started"
                });
                return;
            }
            if (settled) {
                return;
            }
            try {
                inputIterator = request3.input[Symbol.asyncIterator]();
                firstInput = Promise.resolve().then(()=>inputIterator.next());
            } catch (error3) {
                failAmbiguous("Agent WebSocket input could not start after RunStart", error3);
                return;
            }
            void firstInput.then((first)=>{
                if (settled || first.done === true) {
                    return;
                }
                try {
                    assertAgentClientMessageWireSize(first.value);
                } catch (error3) {
                    this.trySend(socket, (0, agentWebSocketRunFrames_js_1.cancelRunFrame)(identity.runId));
                    fail3(error3);
                    return;
                }
                pipelineAttemptedAt = Date.now();
                this.observePipeline({
                    outcome: "attempted"
                });
                try {
                    this.send(socket, (0, agentWebSocketRunFrames_js_1.clientMessageFrame)(identity.runId, BigInt(0), first.value), onPreacceptWriteFailure);
                    firstMessageQueuedBeforeAcceptance = true;
                } catch (error3) {
                    failAmbiguous("Agent WebSocket first client message could not be queued", error3);
                }
            }, (error3)=>{
                if (!settled) {
                    failAmbiguous("Agent WebSocket first input failed before RunAccepted", error3);
                }
            });
            if (request3.signal?.aborted === true) {
                onAbort();
            }
        });
    }
    acceptRun(options2) {
        const { lease, request: request3 } = options2;
        const { identity } = request3;
        const socket = lease.socket;
        const trailer = new Headers();
        const sequence = new agentWebSocketRunFrames_js_1.SequenceValidator();
        const inputIterator = options2.inputIterator;
        const acceptedAt = Date.now();
        const outboundDiagnostics = {
            stage: options2.firstMessageQueuedBeforeAcceptance ? "client-message-queued" : "awaiting-first-input",
            messagesQueued: options2.firstMessageQueuedBeforeAcceptance ? 1 : 0,
            bytesQueued: 0
        };
        let finalized = false;
        let canceled = false;
        let halfCloseSent = false;
        let connectionError;
        let connectionErrorFinalizationTimeout;
        let cancelTimeout;
        let outboundStop;
        let resolveFinalized;
        const finalization = new Promise((resolve36)=>{
            resolveFinalized = resolve36;
        });
        const stopOutbound = (error3)=>{
            if (outboundStop !== void 0) {
                return outboundStop;
            }
            const settle = ()=>{};
            try {
                outboundStop = error3 !== void 0 && inputIterator.throw !== void 0 ? inputIterator.throw(error3).then(settle, settle) : inputIterator.return?.().then(settle, settle) ?? Promise.resolve();
            } catch  {
                outboundStop = Promise.resolve();
            }
            return outboundStop;
        };
        const markFinalized = ()=>{
            if (finalized) {
                return false;
            }
            finalized = true;
            this.timers.clearTimeout(cancelTimeout);
            this.timers.clearTimeout(connectionErrorFinalizationTimeout);
            socket.off("message", onMessage);
            socket.off("error", onError);
            socket.off("close", onClose);
            request3.signal?.removeEventListener("abort", onAbort);
            return true;
        };
        const finishLease = (reusable)=>{
            if (reusable) {
                lease.release();
            } else {
                lease.retire();
            }
            resolveFinalized();
        };
        const finalizeRetired = (error3)=>{
            if (!markFinalized()) {
                return;
            }
            void stopOutbound(error3);
            finishLease(false);
        };
        const finalizeReusable = ()=>{
            if (!markFinalized()) {
                return;
            }
            void stopOutbound();
            if (!halfCloseSent) {
                try {
                    this.send(socket, (0, agentWebSocketRunFrames_js_1.halfCloseFrame)(identity.runId));
                    halfCloseSent = true;
                } catch  {
                    finishLease(false);
                    return;
                }
            }
            finishLease(true);
        };
        const failRun = (message, cause, close)=>{
            if (finalized) {
                return;
            }
            const diagnostics = runDiagnosticsMetadata({
                code: close?.code,
                reason: close?.reason,
                outbound: outboundDiagnostics,
                elapsedMs: Date.now() - acceptedAt
            });
            const error3 = new agentWebSocketRunFrames_js_1.AgentWebSocketDeliveryAmbiguousError(message, {
                cause,
                diagnostics
            });
            queue.error(error3);
            finalizeRetired(error3);
        };
        const beginCancellation = (error3, reportToConsumer)=>{
            if (finalized || canceled) {
                return;
            }
            canceled = true;
            if (reportToConsumer) {
                queue.error(error3);
            }
            void stopOutbound(error3);
            this.trySend(socket, (0, agentWebSocketRunFrames_js_1.cancelRunFrame)(identity.runId));
            cancelTimeout = this.timers.setTimeout(()=>finalizeRetired(), this.cancelFinalizationTimeoutMs);
        };
        const queue = new agentWebSocketRunFrames_js_1.BoundedFrameQueue(this.maxBufferedBytes, async ()=>{
            beginCancellation(new connect_1.ConnectError("Response iterator returned", connect_1.Code.Canceled), false);
            await finalization;
        });
        const onMessage = (data)=>{
            if (finalized || connectionError !== void 0) {
                return;
            }
            let frame;
            try {
                frame = agent_websocket_pb_js_1.AgentWebSocketServerFrame.fromBinary((0, agentWebSocketRunFrames_js_1.rawDataBytes)(data));
                (0, agent_websocket_1.validateAgentWebSocketServerFrame)(frame);
            } catch (error3) {
                failRun("Accepted Agent WebSocket run sent an unreadable frame", error3);
                return;
            }
            if (frame.frame.case === "serverMessage") {
                const serverMessage = frame.frame.value;
                if (serverMessage.runId !== identity.runId) {
                    failRun("Agent WebSocket sent a message for a different run");
                    return;
                }
                try {
                    sequence.accept(serverMessage.sequence);
                } catch (error3) {
                    failRun("Agent WebSocket sent messages out of order", error3);
                    return;
                }
                if (!queue.push(serverMessage.message, serverMessage.message.byteLength)) {
                    failRun("Agent WebSocket receive buffer exceeded");
                }
                return;
            }
            if (frame.frame.case !== "runEnd" || !(0, agentWebSocketRunFrames_js_1.identityMatches)(identity, frame.frame.value.identity)) {
                failRun("Agent WebSocket sent an invalid frame during an accepted run");
                return;
            }
            (0, agentWebSocketRunFrames_js_1.agentWebSocketHeadersToHeaders)(frame.frame.value.trailers).forEach((value, name17)=>{
                trailer.append(name17, value);
            });
            if (canceled) {
                finalizeRetired();
                return;
            }
            const runError = frame.frame.value.error;
            if (runError !== void 0) {
                const error3 = (0, agentWebSocketRunFrames_js_1.connectErrorFromAgentWebSocket)(runError);
                queue.error(error3);
                finalizeRetired(error3);
                return;
            }
            queue.end();
            if (this.connectionUsePolicy === "sequential-runs" && (0, agent_websocket_1.allowsAgentWebSocketSequentialReuse)(frame.frame.value.trailers)) {
                finalizeReusable();
            } else {
                finalizeRetired();
            }
        };
        const onError = (error3)=>{
            if (canceled) {
                finalizeRetired();
                return;
            }
            connectionError ??= error3;
            void stopOutbound(connectionError);
            if (connectionErrorFinalizationTimeout === void 0) {
                connectionErrorFinalizationTimeout = this.timers.setTimeout(()=>{
                    connectionErrorFinalizationTimeout = void 0;
                    const storedError = connectionError;
                    if (storedError !== void 0) {
                        failRun("Accepted Agent WebSocket connection failed", storedError);
                    }
                }, DEFAULT_ERROR_CLOSE_GRACE_MS);
            }
        };
        const onClose = (code, reason)=>{
            if (canceled) {
                finalizeRetired();
                return;
            }
            failRun(connectionError === void 0 ? "Accepted Agent WebSocket connection closed" : "Accepted Agent WebSocket connection failed", connectionError, {
                code,
                reason
            });
        };
        const onAbort = ()=>{
            beginCancellation(canceledError(request3.signal), true);
        };
        socket.on("message", onMessage);
        socket.on("error", onError);
        socket.on("close", onClose);
        request3.signal?.addEventListener("abort", onAbort, {
            once: true
        });
        void options2.preacceptWriteFailure.then((error3)=>{
            if (!finalized) {
                failRun("Accepted Agent WebSocket write failed", error3);
            }
        });
        void this.pumpOutbound({
            socket,
            identity,
            inputIterator,
            firstInput: options2.firstInput,
            firstMessageQueuedBeforeAcceptance: options2.firstMessageQueuedBeforeAcceptance,
            outboundDiagnostics,
            isDone: ()=>canceled || finalized || connectionError !== void 0,
            onHalfCloseSent: ()=>{
                halfCloseSent = true;
            },
            onAmbiguous: failRun
        });
        if (request3.signal?.aborted === true) {
            onAbort();
        }
        options2.header.set(constants_1.AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER, lease.socketReuse);
        return {
            header: options2.header,
            trailer,
            message: queue
        };
    }
    async pumpOutbound(options2) {
        const { socket, identity, inputIterator, outboundDiagnostics, isDone } = options2;
        try {
            {
                const firstInput = options2.firstInput;
                options2.firstInput = void 0;
                if (firstInput === void 0) {
                    throw new Error("Agent WebSocket first input was already released");
                }
                const hasMoreInput = await this.pumpFirstOutbound({
                    socket,
                    identity,
                    firstInput,
                    firstMessageQueuedBeforeAcceptance: options2.firstMessageQueuedBeforeAcceptance,
                    outboundDiagnostics,
                    isDone,
                    onHalfCloseSent: options2.onHalfCloseSent
                });
                if (!hasMoreInput) {
                    return;
                }
            }
            let clientSequence = BigInt(1);
            for(;;){
                outboundDiagnostics.stage = "awaiting-next-input";
                const next = await inputIterator.next();
                if (isDone()) {
                    return;
                }
                if (next.done === true) {
                    this.send(socket, (0, agentWebSocketRunFrames_js_1.halfCloseFrame)(identity.runId));
                    outboundDiagnostics.stage = "half-close-queued";
                    options2.onHalfCloseSent();
                    return;
                }
                assertAgentClientMessageWireSize(next.value);
                outboundDiagnostics.stage = "input-ready";
                this.send(socket, (0, agentWebSocketRunFrames_js_1.clientMessageFrame)(identity.runId, clientSequence, next.value));
                outboundDiagnostics.messagesQueued += 1;
                outboundDiagnostics.bytesQueued += next.value.byteLength;
                outboundDiagnostics.stage = "client-message-queued";
                clientSequence += BigInt(1);
            }
        } catch (error3) {
            if (!isDone()) {
                options2.onAmbiguous("Accepted Agent WebSocket outbound delivery became ambiguous", error3);
            }
        }
    }
    async pumpFirstOutbound(options2) {
        const first = await options2.firstInput;
        if (options2.isDone()) {
            return false;
        }
        if (first.done === true) {
            this.send(options2.socket, (0, agentWebSocketRunFrames_js_1.halfCloseFrame)(options2.identity.runId));
            options2.outboundDiagnostics.stage = "half-close-queued";
            options2.onHalfCloseSent();
            return false;
        }
        assertAgentClientMessageWireSize(first.value);
        if (options2.firstMessageQueuedBeforeAcceptance) {
            options2.outboundDiagnostics.bytesQueued = first.value.byteLength;
        } else {
            options2.outboundDiagnostics.stage = "input-ready";
            this.send(options2.socket, (0, agentWebSocketRunFrames_js_1.clientMessageFrame)(options2.identity.runId, BigInt(0), first.value));
            options2.outboundDiagnostics.messagesQueued = 1;
            options2.outboundDiagnostics.bytesQueued = first.value.byteLength;
            options2.outboundDiagnostics.stage = "client-message-queued";
        }
        options2.outboundDiagnostics.stage = "awaiting-next-input";
        return true;
    }
    send(socket, frame, onWriteError) {
        (0, agent_websocket_1.validateAgentWebSocketClientFrame)(frame);
        if (socket.readyState !== WEBSOCKET_OPEN) {
            throw new Error("Agent WebSocket is not open");
        }
        const bytes = frame.toBinary();
        if (onWriteError === void 0) {
            socket.send(bytes);
            return;
        }
        socket.send(bytes, (error3)=>{
            if (error3 != null) {
                onWriteError(error3);
            }
        });
    }
    trySend(socket, frame) {
        try {
            this.send(socket, frame);
        } catch  {}
    }
};
exports2.AgentWebSocketRunAdapter = AgentWebSocketRunAdapter;

return exports2;
}
