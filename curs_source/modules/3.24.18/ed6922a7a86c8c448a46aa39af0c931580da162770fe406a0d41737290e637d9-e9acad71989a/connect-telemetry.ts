import { J5n } from "./connect-report.ts";
import { HMo, orr } from "./telemetry.ts";
import { x } from "./tslib.es6.js";
function Q5n(e) {
    return e instanceof Error ? e.name.length > 0 ? e.name : "Error" : typeof e;
}
var q6h, z6h, K6h;
export { K6h, Q5n, q6h, z6h };
var __wakaru_Y6h_initialized = false;
export function Y6h() {
if (__wakaru_Y6h_initialized) return;
__wakaru_Y6h_initialized = true;
"use strict";
x(), J5n(), HMo(), q6h = 8e3, z6h = 3, K6h = class {
    legs = {
        socketOpen: !1,
        sessionCreated: !1,
        micReady: !1
    };
    startedAtMs = 0;
    callId = null;
    realtimeConversationId = null;
    beats = 0;
    stuck = null;
    emitReport;
    clock;
    constructor(e, t){
        this.emitReport = e, this.clock = t;
    }
    beginConnecting(e) {
        this.stopStuckHeartbeat(), this.legs = {
            socketOpen: !1,
            sessionCreated: !1,
            micReady: !1
        }, this.startedAtMs = this.clock.now(), this.callId = e, this.realtimeConversationId = null, this.beats = 0, this.emit({
            phase: "connecting_started"
        }), this.armStuckHeartbeat();
    }
    noteConversationCreated(e, t) {
        this.callId === e && (this.realtimeConversationId = orr(t) ?? null);
    }
    noteMintOk() {
        this.emit({
            phase: "mint_ok"
        });
    }
    noteMintFailed(e) {
        this.emit({
            phase: "mint_failed",
            errorClass: Q5n(e)
        });
    }
    noteTransportEdge(e, t) {
        this.callId === e && (t.phase === "socket_open" && (this.legs.socketOpen = !0), t.phase === "session_created" && (this.legs.sessionCreated = !0), t.phase === "mic_granted" && (this.legs.micReady = !0), this.emit(t));
    }
    noteAudible() {
        this.stopStuckHeartbeat(), this.emit({
            phase: "audible"
        }), this.callId = null;
    }
    noteAbandoned(e) {
        this.stopStuckHeartbeat(), this.emit({
            phase: "connecting_abandoned",
            ...this.legs,
            ...e === void 0 ? {} : {
                errorClass: e
            }
        }), this.callId = null;
    }
    dispose() {
        this.stopStuckHeartbeat(), this.callId = null;
    }
    armStuckHeartbeat() {
        const e = this.callId;
        e === null || this.beats >= z6h || (this.stuck = this.clock.schedule(q6h, ()=>{
            this.callId === e && (this.beats += 1, this.emit({
                phase: "connecting_stuck",
                beat: this.beats,
                ...this.legs
            }), this.armStuckHeartbeat());
        }));
    }
    stopStuckHeartbeat() {
        this.stuck?.dispose(), this.stuck = null;
    }
    emit(e) {
        const t = this.callId;
        if (t === null) return;
        const n = this.realtimeConversationId;
        this.emitReport({
            ...e,
            kind: "voice_call_connect",
            callId: t,
            ...n === null ? {} : {
                realtimeConversationId: n
            },
            elapsedMs: Math.max(0, this.clock.now() - this.startedAtMs)
        });
    }
};

}
