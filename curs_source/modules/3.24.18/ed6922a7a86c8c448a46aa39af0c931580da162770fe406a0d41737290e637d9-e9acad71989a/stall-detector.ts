import { C2, Wj, xee } from "./De_3.js";
import { LNd, WWi } from "./connect.ts";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { x } from "./tslib.es6.js";
var $Wi, too, pNd, mNd, gNd, HWi, noo, fNd, vNd, _Nd, bNd, yNd, SNd, kNd, wNd;
export { $Wi, HWi, SNd, _Nd, bNd, fNd, gNd, kNd, mNd, noo, pNd, too, vNd, wNd, yNd };
var __wakaru_CNd_initialized = false;
export function CNd() {
if (__wakaru_CNd_initialized) return;
__wakaru_CNd_initialized = true;
"use strict";
x(), Gp(), mde(), LNd(), $Wi = Wj("@anysphere/agent-client:stall-detector"), too = 1e4, pNd = 3 * too, mNd = 2 * too, gNd = 4294967295, HWi = (e)=>typeof e == "number" && Number.isFinite(e) ? e : void 0, noo = "nal", fNd = {
    nal: "[NAL client stall detector]",
    local_loop: "[local-loop client stall detector]",
    module: "[module client stall detector]"
}, vNd = xee("agent_client.stream.stall.count", {
    description: "Number of bidirectional stream stalls detected",
    labelNames: [
        "activity_type",
        "message_type",
        "loop"
    ]
}), _Nd = C2("agent_client.stream.stall.duration_ms", {
    description: "Duration of stream stalls in milliseconds",
    labelNames: [
        "activity_type",
        "loop"
    ]
}), bNd = xee("agent_client.stream.did_stall", {
    description: "Number of streams that experienced at least one stall",
    labelNames: [
        "loop"
    ]
}), yNd = xee("agent_client.stream.total", {
    description: "Total number of streams monitored",
    labelNames: [
        "loop"
    ]
}), SNd = 10, kNd = class {
    constructor(){
        this.handlers = new Map;
    }
    track(e, t) {
        return this.handlers.set(e, {
            name: e,
            state: "started",
            startedAt: Date.now()
        }), t.then((n)=>{
            const i = this.handlers.get(e);
            return i && (i.state = "completed", i.endedAt = Date.now()), n;
        }).catch((n)=>{
            const i = this.handlers.get(e);
            throw i && (i.state = "errored", i.endedAt = Date.now(), i.error = n instanceof Error ? n.message : String(n)), n;
        });
    }
    getHandlerStates() {
        const e = Date.now(), t = {};
        for (const [n, i] of this.handlers)t[n] = {
            state: i.state,
            durationMs: (i.endedAt ?? e) - i.startedAt,
            error: i.error
        };
        return t;
    }
}, wNd = class {
    constructor(e, t, n){
        this.lastActivityTime = Date.now(), this.lastMeaningfulActivityTime = Date.now(), this.hasLogged = !1, this.hasLoggedAdvisory = !1, this.hasLoggedHeartbeatOnly = !1, this.hasEverStalled = !1, this.paused = !1, this.disposed = !1, this.activityHistory = [], this.ctx = e, typeof t == "number" ? (this.thresholdMs = t, this.advisoryThresholdMs = void 0, this.heartbeatOnlyThresholdMs = t * 3, this.onStall = n, this.onStallCallback = void 0, this.handlerTracker = void 0, this.loop = noo) : (this.thresholdMs = t.thresholdMs, this.advisoryThresholdMs = t.advisoryThresholdMs, this.heartbeatOnlyThresholdMs = t.heartbeatOnlyThresholdMs ?? t.thresholdMs * 3, this.onStall = t.onStall, this.onStallCallback = t.onStallCallback, this.handlerTracker = t.handlerTracker, this.loop = t.loop ?? noo), this.logPrefix = fNd[this.loop], this.startTimer(), this.startAdvisoryTimer(), this.startHeartbeatOnlyTimer(), yNd.increment(this.ctx, 1, {
            loop: this.loop
        }), this.onCtxSignalAbort = ()=>{
            this.trackActivity("ctx.signal", "abort"), this.abortedAt = Date.now(), this.emitLifecycleLog(`${this.logPrefix} Stream aborted while stall detector active`, "aborted");
        }, e.signal.addEventListener("abort", this.onCtxSignalAbort);
    }
    trackActivity(e, t) {
        const n = {
            type: e,
            messageType: t
        };
        this.lastActivity = n, e === "inbound_message" ? this.lastInboundMessage = n : e === "outbound_write" && (this.lastOutboundMessage = n);
        const i = this.activityHistory.at(-1);
        i?.type === e && i.messageType === t ? i.repeat = (i.repeat ?? 1) + 1 : (this.activityHistory.push(n), this.activityHistory.length > SNd && this.activityHistory.shift());
    }
    reset(e = "inbound_message", t, n = !0) {
        if (this.trackActivity(e, t), e === "inbound_message") {
            const i = this.hasLogged, r = this.hasLoggedAdvisory, s = this.hasLoggedHeartbeatOnly;
            i && (this.hasLogged = !1, this.emitLogAndMetric()), s && n && (this.hasLoggedHeartbeatOnly = !1), r && (this.hasLoggedAdvisory = !1), this.lastActivityTime = Date.now(), n && (this.lastMeaningfulActivityTime = Date.now()), this.timer === void 0 && this.startTimer(), this.advisoryTimer === void 0 && this.startAdvisoryTimer(), n && this.heartbeatOnlyTimer === void 0 && this.startHeartbeatOnlyTimer();
        }
    }
    onStreamEnded() {
        this.trackActivity("stream", "ended"), this.streamEndedAt = Date.now();
    }
    onClientSentHeartbeat() {
        this.lastClientSentHeartbeatAt = Date.now();
    }
    onServerSentHeartbeat() {
        this.lastServerSentHeartbeatAt = Date.now();
    }
    setPaused(e) {
        if (!(this.disposed || e === this.paused) && (this.paused = e, !e)) {
            const t = Date.now();
            this.lastActivityTime = t, this.lastMeaningfulActivityTime = t, this.timer === void 0 && this.startTimer(), this.advisoryTimer === void 0 && this.startAdvisoryTimer(), this.heartbeatOnlyTimer === void 0 && this.startHeartbeatOnlyTimer();
        }
    }
    startTimer() {
        if (this.disposed || this.thresholdMs <= 0 || this.timer !== void 0) return;
        const e = ()=>{
            if (this.paused) {
                this.timer = setTimeout(e, this.thresholdMs);
                return;
            }
            const t = this.thresholdMs - (Date.now() - this.lastActivityTime);
            if (t <= 0) {
                this.timer = void 0, this.onStallDetected("no_activity");
                return;
            }
            this.timer = setTimeout(e, t);
        };
        this.timer = setTimeout(e, this.thresholdMs);
    }
    startAdvisoryTimer() {
        if (this.disposed || this.advisoryThresholdMs === void 0 || this.advisoryThresholdMs <= 0 || this.advisoryTimer !== void 0) return;
        const e = this.advisoryThresholdMs, t = ()=>{
            if (this.paused) {
                this.advisoryTimer = setTimeout(t, e);
                return;
            }
            const n = e - (Date.now() - this.lastActivityTime);
            if (n <= 0) {
                this.advisoryTimer = void 0, this.onAdvisoryDetected();
                return;
            }
            this.advisoryTimer = setTimeout(t, n);
        };
        this.advisoryTimer = setTimeout(t, e);
    }
    startHeartbeatOnlyTimer() {
        if (this.disposed || this.thresholdMs <= 0 || this.heartbeatOnlyThresholdMs <= 0 || this.heartbeatOnlyTimer !== void 0) return;
        const e = ()=>{
            if (this.paused) {
                this.heartbeatOnlyTimer = setTimeout(e, this.heartbeatOnlyThresholdMs);
                return;
            }
            const t = this.heartbeatOnlyThresholdMs - (Date.now() - this.lastMeaningfulActivityTime);
            if (t <= 0) {
                this.heartbeatOnlyTimer = void 0, this.onStallDetected("heartbeat_only");
                return;
            }
            this.heartbeatOnlyTimer = setTimeout(e, t);
        };
        this.heartbeatOnlyTimer = setTimeout(e, this.heartbeatOnlyThresholdMs);
    }
    buildLogMetadata(e) {
        const t = this.ctx.get(WWi), n = {
            ...e
        };
        t?.modelDetails?.displayName && (n.model_name = t.modelDetails.displayName), this.abortedAt && (n.aborted_ago_ms = Date.now() - this.abortedAt), this.disposedAt && (n.disposed_ago_ms = Date.now() - this.disposedAt), this.lastClientSentHeartbeatAt && (n.last_client_sent_heartbeat_ago_ms = Date.now() - this.lastClientSentHeartbeatAt), this.lastServerSentHeartbeatAt && (n.last_server_sent_heartbeat_ago_ms = Date.now() - this.lastServerSentHeartbeatAt), this.streamEndedAt && (n.stream_ended_ago_ms = Date.now() - this.streamEndedAt), this.lastInboundMessage && (n.last_inbound_message_type = this.lastInboundMessage.messageType), this.lastOutboundMessage && (n.last_outbound_message_type = this.lastOutboundMessage.messageType);
        const i = [];
        let r;
        for(let s = this.activityHistory.length - 1; s >= 0; s--){
            const { type: o, messageType: a, repeat: c } = this.activityHistory[s];
            r !== o && (r ? i.push(`[${o}]`) : i.push(`[${o}] (MOST RECENT)`), r = o), i.push(`${a}${c ? ` (x${c})` : ""}`);
        }
        return n.activities = i.join(`
`), {
            reqId: t?.requestId,
            loop: this.loop,
            stall: n
        };
    }
    onAdvisoryDetected() {
        if (this.hasLogged || this.hasLoggedAdvisory || this.advisoryThresholdMs === void 0 || this.advisoryThresholdMs <= 0) return;
        const t = Date.now() - this.lastActivityTime;
        t < this.advisoryThresholdMs || (this.hasLoggedAdvisory = !0, this.reportAdvisory(t, this.advisoryThresholdMs));
    }
    reportAdvisory(e, t) {
        try {
            const n = this.buildLogMetadata({
                duration_ms: e,
                threshold_ms: t,
                stall_type: "advisory_no_activity"
            });
            $Wi.warn(this.ctx, `${this.logPrefix} Advisory stall detected - no activity for advisory threshold period`, n);
        } catch (n) {
            console.error("Error logging advisory stall:", n);
        }
    }
    onStallDetected(e) {
        if (e === "heartbeat_only") {
            const i = Date.now(), r = i - this.lastActivityTime, s = i - this.lastMeaningfulActivityTime;
            if (r < this.thresholdMs && s >= this.heartbeatOnlyThresholdMs) {
                if (this.hasLoggedHeartbeatOnly) return;
                this.hasLoggedHeartbeatOnly = !0, this.reportStall(e, s);
            }
            return;
        }
        if (this.hasLogged) return;
        this.hasLogged = !0, this.hasLoggedAdvisory = !0;
        const n = Date.now() - this.lastActivityTime;
        this.reportStall(e, n);
    }
    reportStall(e, t) {
        const n = this.lastActivity, i = this.lastInboundMessage, r = this.lastOutboundMessage, s = this.ctx.get(WWi);
        try {
            const o = this.buildLogMetadata({
                duration_ms: t,
                threshold_ms: e === "heartbeat_only" ? this.heartbeatOnlyThresholdMs : this.thresholdMs,
                stall_type: e
            }), a = e === "heartbeat_only" ? `${this.logPrefix} Stream receiving heartbeats only - no meaningful data for threshold period` : `${this.logPrefix} Bidirectional stream stall detected - no activity for threshold period`;
            if ($Wi.warn(this.ctx, a, o), vNd.increment(this.ctx, 1, {
                activity_type: n?.type ?? "unknown",
                message_type: n?.messageType ?? "unknown",
                loop: this.loop
            }), this.hasEverStalled || (this.hasEverStalled = !0, bNd.increment(this.ctx, 1, {
                loop: this.loop
            })), this.onStallCallback) {
                const c = Date.now(), l = {
                    type: e,
                    lastActivityAgoMs: c - this.lastActivityTime,
                    lastMeaningfulActivityAgoMs: c - this.lastMeaningfulActivityTime,
                    lastActivityType: n?.messageType,
                    lastInboundMessageType: i?.messageType,
                    lastOutboundMessageType: r?.messageType,
                    requestId: s?.requestId,
                    modelName: s?.modelDetails?.displayName,
                    streamEnded: this.streamEndedAt !== void 0,
                    aborted: this.abortedAt !== void 0,
                    lastServerHeartbeatAgoMs: this.lastServerSentHeartbeatAt ? c - this.lastServerSentHeartbeatAt : void 0,
                    lastClientHeartbeatAgoMs: this.lastClientSentHeartbeatAt ? c - this.lastClientSentHeartbeatAt : void 0,
                    thresholdMs: e === "heartbeat_only" ? this.heartbeatOnlyThresholdMs : this.thresholdMs,
                    handlers: this.handlerTracker?.getHandlerStates(),
                    loop: this.loop
                };
                try {
                    this.onStallCallback(l);
                } catch (u) {
                    console.error("Error in stall callback:", u);
                }
            }
        } catch (o) {
            console.error("Error in stall detection:", o);
        }
        try {
            this.onStall?.();
        } catch (o) {
            console.error("Error in onStall callback:", o);
        }
    }
    emitLifecycleLog(e, t) {
        const n = Date.now() - this.lastActivityTime;
        try {
            const i = this.buildLogMetadata({
                duration_ms: n,
                event_type: t
            });
            $Wi.info(this.ctx, e, i);
        } catch (i) {
            console.error("Error logging stream lifecycle:", i);
        }
    }
    emitLogAndMetric() {
        const e = Date.now() - this.lastActivityTime;
        this.emitLifecycleLog(`${this.logPrefix} Stream activity resumed after stall`, "recovered"), _Nd.histogram(this.ctx, e, {
            activity_type: this.lastActivity?.type ?? "unknown",
            loop: this.loop
        });
    }
    [Symbol.dispose]() {
        this.disposed = !0, this.paused = !1, this.timer !== void 0 && (clearTimeout(this.timer), this.timer = void 0), this.advisoryTimer !== void 0 && (clearTimeout(this.advisoryTimer), this.advisoryTimer = void 0), this.heartbeatOnlyTimer !== void 0 && (clearTimeout(this.heartbeatOnlyTimer), this.heartbeatOnlyTimer = void 0), this.ctx.signal.removeEventListener("abort", this.onCtxSignalAbort), this.trackActivity("disposed", "disposed"), this.disposedAt = Date.now(), this.emitLifecycleLog(`${this.logPrefix} Stream stall detector disposed`, "disposed");
    }
};

}
