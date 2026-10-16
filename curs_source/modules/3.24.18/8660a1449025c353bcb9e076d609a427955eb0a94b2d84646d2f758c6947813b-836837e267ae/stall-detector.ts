import { fYr, iwm } from "./connect.ts";
import { Ng } from "./index_3.ts";
import { iCe } from "./index_4.ts";
import { U4, hpe, iie } from "./ipa.js";
import { E } from "./tslib.es6.js";
var mYr, fUa, Okm, Fkm, Bkm, gYr, vUa, Ukm, jkm, $km, Hkm, Wkm, Gkm, qkm, zkm;
export { $km, Bkm, Fkm, Gkm, Hkm, Okm, Ukm, Wkm, fUa, gYr, jkm, mYr, qkm, vUa, zkm };
var __wakaru_Vkm_initialized = false;
export function Vkm() {
if (__wakaru_Vkm_initialized) return;
__wakaru_Vkm_initialized = true;
"use strict";
E(), Ng(), iCe(), iwm(), mYr = iie("@anysphere/agent-client:stall-detector"), fUa = 1e4, Okm = 3 * fUa, Fkm = 2 * fUa, Bkm = 4294967295, gYr = (t)=>typeof t == "number" && Number.isFinite(t) ? t : void 0, vUa = "nal", Ukm = {
    nal: "[NAL client stall detector]",
    local_loop: "[local-loop client stall detector]",
    module: "[module client stall detector]"
}, jkm = hpe("agent_client.stream.stall.count", {
    description: "Number of bidirectional stream stalls detected",
    labelNames: [
        "activity_type",
        "message_type",
        "loop"
    ]
}), $km = U4("agent_client.stream.stall.duration_ms", {
    description: "Duration of stream stalls in milliseconds",
    labelNames: [
        "activity_type",
        "loop"
    ]
}), Hkm = hpe("agent_client.stream.did_stall", {
    description: "Number of streams that experienced at least one stall",
    labelNames: [
        "loop"
    ]
}), Wkm = hpe("agent_client.stream.total", {
    description: "Total number of streams monitored",
    labelNames: [
        "loop"
    ]
}), Gkm = 10, qkm = class {
    constructor(){
        this.handlers = new Map;
    }
    track(t, e) {
        return this.handlers.set(t, {
            name: t,
            state: "started",
            startedAt: Date.now()
        }), e.then((n)=>{
            const i = this.handlers.get(t);
            return i && (i.state = "completed", i.endedAt = Date.now()), n;
        }).catch((n)=>{
            const i = this.handlers.get(t);
            throw i && (i.state = "errored", i.endedAt = Date.now(), i.error = n instanceof Error ? n.message : String(n)), n;
        });
    }
    getHandlerStates() {
        const t = Date.now(), e = {};
        for (const [n, i] of this.handlers)e[n] = {
            state: i.state,
            durationMs: (i.endedAt ?? t) - i.startedAt,
            error: i.error
        };
        return e;
    }
}, zkm = class {
    constructor(t, e, n){
        this.lastActivityTime = Date.now(), this.lastMeaningfulActivityTime = Date.now(), this.hasLogged = !1, this.hasLoggedAdvisory = !1, this.hasLoggedHeartbeatOnly = !1, this.hasEverStalled = !1, this.paused = !1, this.disposed = !1, this.activityHistory = [], this.ctx = t, typeof e == "number" ? (this.thresholdMs = e, this.advisoryThresholdMs = void 0, this.heartbeatOnlyThresholdMs = e * 3, this.onStall = n, this.onStallCallback = void 0, this.handlerTracker = void 0, this.loop = vUa) : (this.thresholdMs = e.thresholdMs, this.advisoryThresholdMs = e.advisoryThresholdMs, this.heartbeatOnlyThresholdMs = e.heartbeatOnlyThresholdMs ?? e.thresholdMs * 3, this.onStall = e.onStall, this.onStallCallback = e.onStallCallback, this.handlerTracker = e.handlerTracker, this.loop = e.loop ?? vUa), this.logPrefix = Ukm[this.loop], this.startTimer(), this.startAdvisoryTimer(), this.startHeartbeatOnlyTimer(), Wkm.increment(this.ctx, 1, {
            loop: this.loop
        }), this.onCtxSignalAbort = ()=>{
            this.trackActivity("ctx.signal", "abort"), this.abortedAt = Date.now(), this.emitLifecycleLog(`${this.logPrefix} Stream aborted while stall detector active`, "aborted");
        }, t.signal.addEventListener("abort", this.onCtxSignalAbort);
    }
    trackActivity(t, e) {
        const n = {
            type: t,
            messageType: e
        };
        this.lastActivity = n, t === "inbound_message" ? this.lastInboundMessage = n : t === "outbound_write" && (this.lastOutboundMessage = n);
        const i = this.activityHistory.at(-1);
        i?.type === t && i.messageType === e ? i.repeat = (i.repeat ?? 1) + 1 : (this.activityHistory.push(n), this.activityHistory.length > Gkm && this.activityHistory.shift());
    }
    reset(t = "inbound_message", e, n = !0) {
        if (this.trackActivity(t, e), t === "inbound_message") {
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
    setPaused(t) {
        if (!(this.disposed || t === this.paused) && (this.paused = t, !t)) {
            const e = Date.now();
            this.lastActivityTime = e, this.lastMeaningfulActivityTime = e, this.timer === void 0 && this.startTimer(), this.advisoryTimer === void 0 && this.startAdvisoryTimer(), this.heartbeatOnlyTimer === void 0 && this.startHeartbeatOnlyTimer();
        }
    }
    startTimer() {
        if (this.disposed || this.thresholdMs <= 0 || this.timer !== void 0) return;
        const t = ()=>{
            if (this.paused) {
                this.timer = setTimeout(t, this.thresholdMs);
                return;
            }
            const e = this.thresholdMs - (Date.now() - this.lastActivityTime);
            if (e <= 0) {
                this.timer = void 0, this.onStallDetected("no_activity");
                return;
            }
            this.timer = setTimeout(t, e);
        };
        this.timer = setTimeout(t, this.thresholdMs);
    }
    startAdvisoryTimer() {
        if (this.disposed || this.advisoryThresholdMs === void 0 || this.advisoryThresholdMs <= 0 || this.advisoryTimer !== void 0) return;
        const t = this.advisoryThresholdMs, e = ()=>{
            if (this.paused) {
                this.advisoryTimer = setTimeout(e, t);
                return;
            }
            const n = t - (Date.now() - this.lastActivityTime);
            if (n <= 0) {
                this.advisoryTimer = void 0, this.onAdvisoryDetected();
                return;
            }
            this.advisoryTimer = setTimeout(e, n);
        };
        this.advisoryTimer = setTimeout(e, t);
    }
    startHeartbeatOnlyTimer() {
        if (this.disposed || this.thresholdMs <= 0 || this.heartbeatOnlyThresholdMs <= 0 || this.heartbeatOnlyTimer !== void 0) return;
        const t = ()=>{
            if (this.paused) {
                this.heartbeatOnlyTimer = setTimeout(t, this.heartbeatOnlyThresholdMs);
                return;
            }
            const e = this.heartbeatOnlyThresholdMs - (Date.now() - this.lastMeaningfulActivityTime);
            if (e <= 0) {
                this.heartbeatOnlyTimer = void 0, this.onStallDetected("heartbeat_only");
                return;
            }
            this.heartbeatOnlyTimer = setTimeout(t, e);
        };
        this.heartbeatOnlyTimer = setTimeout(t, this.heartbeatOnlyThresholdMs);
    }
    buildLogMetadata(t) {
        const e = this.ctx.get(fYr), n = {
            ...t
        };
        e?.modelDetails?.displayName && (n.model_name = e.modelDetails.displayName), this.abortedAt && (n.aborted_ago_ms = Date.now() - this.abortedAt), this.disposedAt && (n.disposed_ago_ms = Date.now() - this.disposedAt), this.lastClientSentHeartbeatAt && (n.last_client_sent_heartbeat_ago_ms = Date.now() - this.lastClientSentHeartbeatAt), this.lastServerSentHeartbeatAt && (n.last_server_sent_heartbeat_ago_ms = Date.now() - this.lastServerSentHeartbeatAt), this.streamEndedAt && (n.stream_ended_ago_ms = Date.now() - this.streamEndedAt), this.lastInboundMessage && (n.last_inbound_message_type = this.lastInboundMessage.messageType), this.lastOutboundMessage && (n.last_outbound_message_type = this.lastOutboundMessage.messageType);
        const i = [];
        let r;
        for(let s = this.activityHistory.length - 1; s >= 0; s--){
            const { type: o, messageType: a, repeat: l } = this.activityHistory[s];
            r !== o && (r ? i.push(`[${o}]`) : i.push(`[${o}] (MOST RECENT)`), r = o), i.push(`${a}${l ? ` (x${l})` : ""}`);
        }
        return n.activities = i.join(`
`), {
            reqId: e?.requestId,
            loop: this.loop,
            stall: n
        };
    }
    onAdvisoryDetected() {
        if (this.hasLogged || this.hasLoggedAdvisory || this.advisoryThresholdMs === void 0 || this.advisoryThresholdMs <= 0) return;
        const e = Date.now() - this.lastActivityTime;
        e < this.advisoryThresholdMs || (this.hasLoggedAdvisory = !0, this.reportAdvisory(e, this.advisoryThresholdMs));
    }
    reportAdvisory(t, e) {
        try {
            const n = this.buildLogMetadata({
                duration_ms: t,
                threshold_ms: e,
                stall_type: "advisory_no_activity"
            });
            mYr.warn(this.ctx, `${this.logPrefix} Advisory stall detected - no activity for advisory threshold period`, n);
        } catch (n) {
            console.error("Error logging advisory stall:", n);
        }
    }
    onStallDetected(t) {
        if (t === "heartbeat_only") {
            const i = Date.now(), r = i - this.lastActivityTime, s = i - this.lastMeaningfulActivityTime;
            if (r < this.thresholdMs && s >= this.heartbeatOnlyThresholdMs) {
                if (this.hasLoggedHeartbeatOnly) return;
                this.hasLoggedHeartbeatOnly = !0, this.reportStall(t, s);
            }
            return;
        }
        if (this.hasLogged) return;
        this.hasLogged = !0, this.hasLoggedAdvisory = !0;
        const n = Date.now() - this.lastActivityTime;
        this.reportStall(t, n);
    }
    reportStall(t, e) {
        const n = this.lastActivity, i = this.lastInboundMessage, r = this.lastOutboundMessage, s = this.ctx.get(fYr);
        try {
            const o = this.buildLogMetadata({
                duration_ms: e,
                threshold_ms: t === "heartbeat_only" ? this.heartbeatOnlyThresholdMs : this.thresholdMs,
                stall_type: t
            }), a = t === "heartbeat_only" ? `${this.logPrefix} Stream receiving heartbeats only - no meaningful data for threshold period` : `${this.logPrefix} Bidirectional stream stall detected - no activity for threshold period`;
            if (mYr.warn(this.ctx, a, o), jkm.increment(this.ctx, 1, {
                activity_type: n?.type ?? "unknown",
                message_type: n?.messageType ?? "unknown",
                loop: this.loop
            }), this.hasEverStalled || (this.hasEverStalled = !0, Hkm.increment(this.ctx, 1, {
                loop: this.loop
            })), this.onStallCallback) {
                const l = Date.now(), c = {
                    type: t,
                    lastActivityAgoMs: l - this.lastActivityTime,
                    lastMeaningfulActivityAgoMs: l - this.lastMeaningfulActivityTime,
                    lastActivityType: n?.messageType,
                    lastInboundMessageType: i?.messageType,
                    lastOutboundMessageType: r?.messageType,
                    requestId: s?.requestId,
                    modelName: s?.modelDetails?.displayName,
                    streamEnded: this.streamEndedAt !== void 0,
                    aborted: this.abortedAt !== void 0,
                    lastServerHeartbeatAgoMs: this.lastServerSentHeartbeatAt ? l - this.lastServerSentHeartbeatAt : void 0,
                    lastClientHeartbeatAgoMs: this.lastClientSentHeartbeatAt ? l - this.lastClientSentHeartbeatAt : void 0,
                    thresholdMs: t === "heartbeat_only" ? this.heartbeatOnlyThresholdMs : this.thresholdMs,
                    handlers: this.handlerTracker?.getHandlerStates(),
                    loop: this.loop
                };
                try {
                    this.onStallCallback(c);
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
    emitLifecycleLog(t, e) {
        const n = Date.now() - this.lastActivityTime;
        try {
            const i = this.buildLogMetadata({
                duration_ms: n,
                event_type: e
            });
            mYr.info(this.ctx, t, i);
        } catch (i) {
            console.error("Error logging stream lifecycle:", i);
        }
    }
    emitLogAndMetric() {
        const t = Date.now() - this.lastActivityTime;
        this.emitLifecycleLog(`${this.logPrefix} Stream activity resumed after stall`, "recovered"), $km.histogram(this.ctx, t, {
            activity_type: this.lastActivity?.type ?? "unknown",
            loop: this.loop
        });
    }
    [Symbol.dispose]() {
        this.disposed = !0, this.paused = !1, this.timer !== void 0 && (clearTimeout(this.timer), this.timer = void 0), this.advisoryTimer !== void 0 && (clearTimeout(this.advisoryTimer), this.advisoryTimer = void 0), this.heartbeatOnlyTimer !== void 0 && (clearTimeout(this.heartbeatOnlyTimer), this.heartbeatOnlyTimer = void 0), this.ctx.signal.removeEventListener("abort", this.onCtxSignalAbort), this.trackActivity("disposed", "disposed"), this.disposedAt = Date.now(), this.emitLifecycleLog(`${this.logPrefix} Stream stall detector disposed`, "disposed");
    }
};

}
