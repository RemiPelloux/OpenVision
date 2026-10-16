import { aPi } from "./Ycg.js";
import { lPi } from "./connect-report.ts";
import { jgs, nTl } from "./telemetry.ts";
import { E } from "./tslib.es6.js";
var onf, anf, lnf;
export { anf, lnf, onf };
var __wakaru_cnf_initialized = false;
export function cnf() {
if (__wakaru_cnf_initialized) return;
__wakaru_cnf_initialized = true;
"use strict";
E(), lPi(), nTl(), onf = 8e3, anf = 3, lnf = class {
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
    constructor(t, e){
        this.emitReport = t, this.clock = e;
    }
    beginConnecting(t) {
        this.stopStuckHeartbeat(), this.legs = {
            socketOpen: !1,
            sessionCreated: !1,
            micReady: !1
        }, this.startedAtMs = this.clock.now(), this.callId = t, this.realtimeConversationId = null, this.beats = 0, this.emit({
            phase: "connecting_started"
        }), this.armStuckHeartbeat();
    }
    noteConversationCreated(t, e) {
        this.callId === t && (this.realtimeConversationId = jgs(e) ?? null);
    }
    noteMintOk() {
        this.emit({
            phase: "mint_ok"
        });
    }
    noteMintFailed(t) {
        this.emit({
            phase: "mint_failed",
            errorClass: aPi(t)
        });
    }
    noteTransportEdge(t, e) {
        this.callId === t && (e.phase === "socket_open" && (this.legs.socketOpen = !0), e.phase === "session_created" && (this.legs.sessionCreated = !0), e.phase === "mic_granted" && (this.legs.micReady = !0), this.emit(e));
    }
    noteAudible() {
        this.stopStuckHeartbeat(), this.emit({
            phase: "audible"
        }), this.callId = null;
    }
    noteAbandoned(t) {
        this.stopStuckHeartbeat(), this.emit({
            phase: "connecting_abandoned",
            ...this.legs,
            ...t === void 0 ? {} : {
                errorClass: t
            }
        }), this.callId = null;
    }
    dispose() {
        this.stopStuckHeartbeat(), this.callId = null;
    }
    armStuckHeartbeat() {
        const t = this.callId;
        t === null || this.beats >= anf || (this.stuck = this.clock.schedule(onf, ()=>{
            this.callId === t && (this.beats += 1, this.emit({
                phase: "connecting_stuck",
                beat: this.beats,
                ...this.legs
            }), this.armStuckHeartbeat());
        }));
    }
    stopStuckHeartbeat() {
        this.stuck?.dispose(), this.stuck = null;
    }
    emit(t) {
        const e = this.callId;
        if (e === null) return;
        const n = this.realtimeConversationId;
        this.emitReport({
            ...t,
            kind: "voice_call_connect",
            callId: e,
            ...n === null ? {} : {
                realtimeConversationId: n
            },
            elapsedMs: Math.max(0, this.clock.now() - this.startedAtMs)
        });
    }
};

}
