import { agentStreamMetadata, init_connect } from "./connect.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var logger12, SERVER_HEARTBEAT_INTERVAL_MS, DEFAULT_STALL_DETECTOR_FAIL_TIMEOUT_MS, MIN_STALL_DETECTOR_FAIL_TIMEOUT_MS, UINT32_MAX2, normalizeTimeout, DEFAULT_STREAM_LOOP, STALL_LOG_PREFIX, streamStallCount, streamStallDuration, streamDidStall, streamTotal, MAX_ACTIVITY_HISTORY, HandlerTracker, StallDetector;
export { DEFAULT_STALL_DETECTOR_FAIL_TIMEOUT_MS, DEFAULT_STREAM_LOOP, HandlerTracker, MAX_ACTIVITY_HISTORY, MIN_STALL_DETECTOR_FAIL_TIMEOUT_MS, SERVER_HEARTBEAT_INTERVAL_MS, STALL_LOG_PREFIX, StallDetector, UINT32_MAX2, logger12, normalizeTimeout, streamDidStall, streamStallCount, streamStallDuration, streamTotal };
var __wakaru_init_stall_detector_initialized = false;
export function init_stall_detector() {
if (__wakaru_init_stall_detector_initialized) return;
__wakaru_init_stall_detector_initialized = true;
"use strict";
init_dist();
init_dist4();
init_connect();
logger12 = createLogger("@anysphere/agent-client:stall-detector");
SERVER_HEARTBEAT_INTERVAL_MS = 1e4;
DEFAULT_STALL_DETECTOR_FAIL_TIMEOUT_MS = 3 * SERVER_HEARTBEAT_INTERVAL_MS;
MIN_STALL_DETECTOR_FAIL_TIMEOUT_MS = 2 * SERVER_HEARTBEAT_INTERVAL_MS;
UINT32_MAX2 = 4294967295;
normalizeTimeout = (value)=>typeof value === "number" && Number.isFinite(value) ? value : void 0;
DEFAULT_STREAM_LOOP = "nal";
STALL_LOG_PREFIX = {
    nal: "[NAL client stall detector]",
    local_loop: "[local-loop client stall detector]",
    module: "[module client stall detector]"
};
streamStallCount = createCounter("agent_client.stream.stall.count", {
    description: "Number of bidirectional stream stalls detected",
    labelNames: [
        "activity_type",
        "message_type",
        "loop"
    ]
});
streamStallDuration = createHistogram("agent_client.stream.stall.duration_ms", {
    description: "Duration of stream stalls in milliseconds",
    labelNames: [
        "activity_type",
        "loop"
    ]
});
streamDidStall = createCounter("agent_client.stream.did_stall", {
    description: "Number of streams that experienced at least one stall",
    labelNames: [
        "loop"
    ]
});
streamTotal = createCounter("agent_client.stream.total", {
    description: "Total number of streams monitored",
    labelNames: [
        "loop"
    ]
});
MAX_ACTIVITY_HISTORY = 10;
HandlerTracker = class {
    constructor(){
        this.handlers = new Map();
    }
    track(name17, promise) {
        this.handlers.set(name17, {
            name: name17,
            state: "started",
            startedAt: Date.now()
        });
        return promise.then((result)=>{
            const tracking = this.handlers.get(name17);
            if (tracking) {
                tracking.state = "completed";
                tracking.endedAt = Date.now();
            }
            return result;
        }).catch((error3)=>{
            const tracking = this.handlers.get(name17);
            if (tracking) {
                tracking.state = "errored";
                tracking.endedAt = Date.now();
                tracking.error = error3 instanceof Error ? error3.message : String(error3);
            }
            throw error3;
        });
    }
    getHandlerStates() {
        const now2 = Date.now();
        const result = {};
        for (const [name17, tracking] of this.handlers){
            result[name17] = {
                state: tracking.state,
                durationMs: (tracking.endedAt ?? now2) - tracking.startedAt,
                error: tracking.error
            };
        }
        return result;
    }
};
StallDetector = class {
    constructor(ctx, options2, legacyOnStall){
        this.lastActivityTime = Date.now();
        this.lastMeaningfulActivityTime = Date.now();
        this.hasLogged = false;
        this.hasLoggedAdvisory = false;
        this.hasLoggedHeartbeatOnly = false;
        this.hasEverStalled = false;
        this.paused = false;
        this.disposed = false;
        this.activityHistory = [];
        this.ctx = ctx;
        if (typeof options2 === "number") {
            this.thresholdMs = options2;
            this.advisoryThresholdMs = void 0;
            this.heartbeatOnlyThresholdMs = options2 * 3;
            this.onStall = legacyOnStall;
            this.onStallCallback = void 0;
            this.handlerTracker = void 0;
            this.loop = DEFAULT_STREAM_LOOP;
        } else {
            this.thresholdMs = options2.thresholdMs;
            this.advisoryThresholdMs = options2.advisoryThresholdMs;
            this.heartbeatOnlyThresholdMs = options2.heartbeatOnlyThresholdMs ?? options2.thresholdMs * 3;
            this.onStall = options2.onStall;
            this.onStallCallback = options2.onStallCallback;
            this.handlerTracker = options2.handlerTracker;
            this.loop = options2.loop ?? DEFAULT_STREAM_LOOP;
        }
        this.logPrefix = STALL_LOG_PREFIX[this.loop];
        this.startTimer();
        this.startAdvisoryTimer();
        this.startHeartbeatOnlyTimer();
        streamTotal.increment(this.ctx, 1, {
            loop: this.loop
        });
        this.onCtxSignalAbort = ()=>{
            this.trackActivity("ctx.signal", "abort");
            this.abortedAt = Date.now();
            this.emitLifecycleLog(`${this.logPrefix} Stream aborted while stall detector active`, "aborted");
        };
        ctx.signal.addEventListener("abort", this.onCtxSignalAbort);
    }
    trackActivity(activityType, messageType) {
        const entry = {
            type: activityType,
            messageType
        };
        this.lastActivity = entry;
        if (activityType === "inbound_message") {
            this.lastInboundMessage = entry;
        } else if (activityType === "outbound_write") {
            this.lastOutboundMessage = entry;
        }
        const lastInHistory = this.activityHistory.at(-1);
        if (lastInHistory?.type === activityType && lastInHistory.messageType === messageType) {
            lastInHistory.repeat = (lastInHistory.repeat ?? 1) + 1;
        } else {
            this.activityHistory.push(entry);
            if (this.activityHistory.length > MAX_ACTIVITY_HISTORY) {
                this.activityHistory.shift();
            }
        }
    }
    reset(activityType = "inbound_message", messageType, isMeaningful = true) {
        this.trackActivity(activityType, messageType);
        if (activityType === "inbound_message") {
            const wasStalled = this.hasLogged;
            const wasAdvisoryStalled = this.hasLoggedAdvisory;
            const wasHeartbeatOnlyStalled = this.hasLoggedHeartbeatOnly;
            if (wasStalled) {
                this.hasLogged = false;
                this.emitLogAndMetric();
            }
            if (wasHeartbeatOnlyStalled && isMeaningful) {
                this.hasLoggedHeartbeatOnly = false;
            }
            if (wasAdvisoryStalled) {
                this.hasLoggedAdvisory = false;
            }
            this.lastActivityTime = Date.now();
            if (isMeaningful) {
                this.lastMeaningfulActivityTime = Date.now();
            }
            if (this.timer === void 0) {
                this.startTimer();
            }
            if (this.advisoryTimer === void 0) {
                this.startAdvisoryTimer();
            }
            if (isMeaningful && this.heartbeatOnlyTimer === void 0) {
                this.startHeartbeatOnlyTimer();
            }
        }
    }
    onStreamEnded() {
        this.trackActivity("stream", "ended");
        this.streamEndedAt = Date.now();
    }
    onClientSentHeartbeat() {
        this.lastClientSentHeartbeatAt = Date.now();
    }
    onServerSentHeartbeat() {
        this.lastServerSentHeartbeatAt = Date.now();
    }
    setPaused(paused) {
        if (this.disposed || paused === this.paused) {
            return;
        }
        this.paused = paused;
        if (!paused) {
            const now2 = Date.now();
            this.lastActivityTime = now2;
            this.lastMeaningfulActivityTime = now2;
            if (this.timer === void 0) {
                this.startTimer();
            }
            if (this.advisoryTimer === void 0) {
                this.startAdvisoryTimer();
            }
            if (this.heartbeatOnlyTimer === void 0) {
                this.startHeartbeatOnlyTimer();
            }
        }
    }
    startTimer() {
        if (this.disposed || this.thresholdMs <= 0 || this.timer !== void 0) {
            return;
        }
        const run = ()=>{
            if (this.paused) {
                this.timer = setTimeout(run, this.thresholdMs);
                return;
            }
            const remainingMs = this.thresholdMs - (Date.now() - this.lastActivityTime);
            if (remainingMs <= 0) {
                this.timer = void 0;
                this.onStallDetected("no_activity");
                return;
            }
            this.timer = setTimeout(run, remainingMs);
        };
        this.timer = setTimeout(run, this.thresholdMs);
    }
    startAdvisoryTimer() {
        if (this.disposed || this.advisoryThresholdMs === void 0 || this.advisoryThresholdMs <= 0 || this.advisoryTimer !== void 0) {
            return;
        }
        const advisoryThresholdMs = this.advisoryThresholdMs;
        const run = ()=>{
            if (this.paused) {
                this.advisoryTimer = setTimeout(run, advisoryThresholdMs);
                return;
            }
            const remainingMs = advisoryThresholdMs - (Date.now() - this.lastActivityTime);
            if (remainingMs <= 0) {
                this.advisoryTimer = void 0;
                this.onAdvisoryDetected();
                return;
            }
            this.advisoryTimer = setTimeout(run, remainingMs);
        };
        this.advisoryTimer = setTimeout(run, advisoryThresholdMs);
    }
    startHeartbeatOnlyTimer() {
        if (this.disposed || this.thresholdMs <= 0 || this.heartbeatOnlyThresholdMs <= 0 || this.heartbeatOnlyTimer !== void 0) {
            return;
        }
        const run = ()=>{
            if (this.paused) {
                this.heartbeatOnlyTimer = setTimeout(run, this.heartbeatOnlyThresholdMs);
                return;
            }
            const remainingMs = this.heartbeatOnlyThresholdMs - (Date.now() - this.lastMeaningfulActivityTime);
            if (remainingMs <= 0) {
                this.heartbeatOnlyTimer = void 0;
                this.onStallDetected("heartbeat_only");
                return;
            }
            this.heartbeatOnlyTimer = setTimeout(run, remainingMs);
        };
        this.heartbeatOnlyTimer = setTimeout(run, this.heartbeatOnlyThresholdMs);
    }
    buildLogMetadata(stallFields) {
        const metadata = this.ctx.get(agentStreamMetadata);
        const stall = {
            ...stallFields
        };
        if (metadata?.modelDetails?.displayName) {
            stall.model_name = metadata.modelDetails.displayName;
        }
        if (this.abortedAt) {
            stall.aborted_ago_ms = Date.now() - this.abortedAt;
        }
        if (this.disposedAt) {
            stall.disposed_ago_ms = Date.now() - this.disposedAt;
        }
        if (this.lastClientSentHeartbeatAt) {
            stall.last_client_sent_heartbeat_ago_ms = Date.now() - this.lastClientSentHeartbeatAt;
        }
        if (this.lastServerSentHeartbeatAt) {
            stall.last_server_sent_heartbeat_ago_ms = Date.now() - this.lastServerSentHeartbeatAt;
        }
        if (this.streamEndedAt) {
            stall.stream_ended_ago_ms = Date.now() - this.streamEndedAt;
        }
        if (this.lastInboundMessage) {
            stall.last_inbound_message_type = this.lastInboundMessage.messageType;
        }
        if (this.lastOutboundMessage) {
            stall.last_outbound_message_type = this.lastOutboundMessage.messageType;
        }
        const activitiesLines = [];
        let lastType;
        for(let i = this.activityHistory.length - 1; i >= 0; i--){
            const { type: type2, messageType, repeat } = this.activityHistory[i];
            if (lastType !== type2) {
                if (!lastType) {
                    activitiesLines.push(`[${type2}] (MOST RECENT)`);
                } else {
                    activitiesLines.push(`[${type2}]`);
                }
                lastType = type2;
            }
            activitiesLines.push(`${messageType}${repeat ? ` (x${repeat})` : ""}`);
        }
        stall.activities = activitiesLines.join("\n");
        return {
            reqId: metadata?.requestId,
            loop: this.loop,
            stall
        };
    }
    onAdvisoryDetected() {
        if (this.hasLogged || this.hasLoggedAdvisory) {
            return;
        }
        if (this.advisoryThresholdMs === void 0 || this.advisoryThresholdMs <= 0) {
            return;
        }
        const now2 = Date.now();
        const durationMs2 = now2 - this.lastActivityTime;
        if (durationMs2 < this.advisoryThresholdMs) {
            return;
        }
        this.hasLoggedAdvisory = true;
        this.reportAdvisory(durationMs2, this.advisoryThresholdMs);
    }
    reportAdvisory(durationMs2, thresholdMs) {
        try {
            const logMetadata = this.buildLogMetadata({
                duration_ms: durationMs2,
                threshold_ms: thresholdMs,
                stall_type: "advisory_no_activity"
            });
            logger12.warn(this.ctx, `${this.logPrefix} Advisory stall detected - no activity for advisory threshold period`, logMetadata);
        } catch (error3) {
            console.error("Error logging advisory stall:", error3);
        }
    }
    onStallDetected(type2) {
        if (type2 === "heartbeat_only") {
            const now3 = Date.now();
            const timeSinceActivity = now3 - this.lastActivityTime;
            const timeSinceMeaningful = now3 - this.lastMeaningfulActivityTime;
            if (timeSinceActivity < this.thresholdMs && timeSinceMeaningful >= this.heartbeatOnlyThresholdMs) {
                if (this.hasLoggedHeartbeatOnly) {
                    return;
                }
                this.hasLoggedHeartbeatOnly = true;
                this.reportStall(type2, timeSinceMeaningful);
            }
            return;
        }
        if (this.hasLogged) {
            return;
        }
        this.hasLogged = true;
        this.hasLoggedAdvisory = true;
        const now2 = Date.now();
        const durationMs2 = now2 - this.lastActivityTime;
        this.reportStall(type2, durationMs2);
    }
    reportStall(type2, durationMs2) {
        const lastActivity = this.lastActivity;
        const lastInboundMessage = this.lastInboundMessage;
        const lastOutboundMessage = this.lastOutboundMessage;
        const metadata = this.ctx.get(agentStreamMetadata);
        try {
            const logMetadata = this.buildLogMetadata({
                duration_ms: durationMs2,
                threshold_ms: type2 === "heartbeat_only" ? this.heartbeatOnlyThresholdMs : this.thresholdMs,
                stall_type: type2
            });
            const message = type2 === "heartbeat_only" ? `${this.logPrefix} Stream receiving heartbeats only - no meaningful data for threshold period` : `${this.logPrefix} Bidirectional stream stall detected - no activity for threshold period`;
            logger12.warn(this.ctx, message, logMetadata);
            streamStallCount.increment(this.ctx, 1, {
                activity_type: lastActivity?.type ?? "unknown",
                message_type: lastActivity?.messageType ?? "unknown",
                loop: this.loop
            });
            if (!this.hasEverStalled) {
                this.hasEverStalled = true;
                streamDidStall.increment(this.ctx, 1, {
                    loop: this.loop
                });
            }
            if (this.onStallCallback) {
                const now2 = Date.now();
                const stallInfo = {
                    type: type2,
                    lastActivityAgoMs: now2 - this.lastActivityTime,
                    lastMeaningfulActivityAgoMs: now2 - this.lastMeaningfulActivityTime,
                    lastActivityType: lastActivity?.messageType,
                    lastInboundMessageType: lastInboundMessage?.messageType,
                    lastOutboundMessageType: lastOutboundMessage?.messageType,
                    requestId: metadata?.requestId,
                    modelName: metadata?.modelDetails?.displayName,
                    streamEnded: this.streamEndedAt !== void 0,
                    aborted: this.abortedAt !== void 0,
                    lastServerHeartbeatAgoMs: this.lastServerSentHeartbeatAt ? now2 - this.lastServerSentHeartbeatAt : void 0,
                    lastClientHeartbeatAgoMs: this.lastClientSentHeartbeatAt ? now2 - this.lastClientSentHeartbeatAt : void 0,
                    thresholdMs: type2 === "heartbeat_only" ? this.heartbeatOnlyThresholdMs : this.thresholdMs,
                    handlers: this.handlerTracker?.getHandlerStates(),
                    loop: this.loop
                };
                try {
                    this.onStallCallback(stallInfo);
                } catch (callbackError) {
                    console.error("Error in stall callback:", callbackError);
                }
            }
        } catch (error3) {
            console.error("Error in stall detection:", error3);
        }
        try {
            this.onStall?.();
        } catch (error3) {
            console.error("Error in onStall callback:", error3);
        }
    }
    emitLifecycleLog(message, eventType) {
        const stallDurationMs = Date.now() - this.lastActivityTime;
        try {
            const logMetadata = this.buildLogMetadata({
                duration_ms: stallDurationMs,
                event_type: eventType
            });
            logger12.info(this.ctx, message, logMetadata);
        } catch (error3) {
            console.error("Error logging stream lifecycle:", error3);
        }
    }
    emitLogAndMetric() {
        const stallDurationMs = Date.now() - this.lastActivityTime;
        this.emitLifecycleLog(`${this.logPrefix} Stream activity resumed after stall`, "recovered");
        streamStallDuration.histogram(this.ctx, stallDurationMs, {
            activity_type: this.lastActivity?.type ?? "unknown",
            loop: this.loop
        });
    }
    [Symbol.dispose]() {
        this.disposed = true;
        this.paused = false;
        if (this.timer !== void 0) {
            clearTimeout(this.timer);
            this.timer = void 0;
        }
        if (this.advisoryTimer !== void 0) {
            clearTimeout(this.advisoryTimer);
            this.advisoryTimer = void 0;
        }
        if (this.heartbeatOnlyTimer !== void 0) {
            clearTimeout(this.heartbeatOnlyTimer);
            this.heartbeatOnlyTimer = void 0;
        }
        this.ctx.signal.removeEventListener("abort", this.onCtxSignalAbort);
        this.trackActivity("disposed", "disposed");
        this.disposedAt = Date.now();
        this.emitLifecycleLog(`${this.logPrefix} Stream stall detector disposed`, "disposed");
    }
};

}
