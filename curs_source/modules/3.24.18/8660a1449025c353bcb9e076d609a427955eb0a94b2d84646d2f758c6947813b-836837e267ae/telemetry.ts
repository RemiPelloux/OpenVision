import { Dtf, nnf } from "./Ycg.js";
import { Bgs } from "./fault-facet.ts";
import { jtf } from "./mint-fault.ts";
import { Jtf, eTl, enf, tTl, uPi } from "./protocol-fault.ts";
import { E } from "./tslib.es6.js";
var uYt, dYt, zlt, jgs, inf, p9k, rnf, snf;
export { dYt, inf, jgs, p9k, rnf, snf, uYt, zlt };
var __wakaru_nTl_initialized = false;
export function nTl() {
if (__wakaru_nTl_initialized) return;
__wakaru_nTl_initialized = true;
"use strict";
E(), Bgs(), jtf(), uPi(), uYt = (t)=>(e)=>e === void 0 ? void 0 : Dtf(t, e), dYt = (t)=>nnf(t) ? t : void 0, zlt = (t)=>typeof t == "boolean" ? t : void 0, jgs = (t)=>typeof t == "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t) ? t : void 0, inf = {
    fault_last_in: uYt(eTl),
    fault_last_in_ms: dYt,
    fault_last_out: uYt(tTl),
    fault_last_out_ms: dYt,
    fault_last_in_control: uYt(eTl),
    fault_last_in_control_ms: dYt,
    fault_last_out_control: uYt(tTl),
    fault_last_out_control_ms: dYt,
    fault_updates: dYt,
    fault_last_update_ms: dYt,
    fault_responding: zlt,
    fault_muted: zlt,
    fault_via: uYt(Jtf),
    fault_hidden: zlt,
    fault_online: zlt,
    fault_audio: uYt(enf),
    realtime_conversation_id: jgs,
    fault_send_task_owed: zlt,
    fault_agent_running: zlt,
    fault_news_owed: zlt,
    fault_recovered: zlt
}, p9k = Object.keys(inf), rnf = 3e4, snf = class {
    options;
    startedAt;
    lastNow;
    connectedAt = null;
    usageThrough = null;
    sequence = 0;
    receivedAudio = !1;
    speechStoppedAt = null;
    openedSurfaces = new Set;
    droppedAudio = 0;
    finished = !1;
    constructor(t){
        this.options = t, this.lastNow = Math.round(t.clock.now()), this.startedAt = this.lastNow, this.emit({
            phase: "started"
        });
    }
    connected(t) {
        if (this.finished || this.connectedAt !== null) return;
        const e = this.now();
        this.connectedAt = e, this.usageThrough = e, this.emit({
            phase: "connected",
            elapsed_ms: e - this.startedAt,
            ...t === void 0 ? {} : {
                model: t
            }
        });
    }
    speechStarted() {
        this.finished || (this.speechStoppedAt = null);
    }
    speechStopped() {
        this.finished || (this.speechStoppedAt ??= this.now());
    }
    speechUnanswered() {
        this.finished || (this.speechStoppedAt = null);
    }
    audioReceived() {
        if (this.finished) return;
        const t = this.now(), e = this.speechStoppedAt;
        this.speechStoppedAt = null, this.receivedAudio || (this.receivedAudio = !0, this.emit({
            phase: "first_audio",
            trigger: "call_start",
            ttfa_ms: t - this.startedAt
        })), e !== null && this.emit({
            phase: "first_audio",
            trigger: "user_speech",
            ttfa_ms: t - e
        });
    }
    uiOpened(t) {
        this.finished || this.openedSurfaces.has(t) || (this.openedSurfaces.add(t), this.emit({
            phase: "ui_opened",
            surface: t
        }));
    }
    tick() {
        if (this.finished || this.usageThrough === null) return;
        const t = this.now();
        t - this.usageThrough >= rnf && (this.emitDroppedAudio(), this.emitUsage(t));
    }
    audioDropped(t) {
        this.finished || !nnf(t) || (this.droppedAudio += t);
    }
    finish(t, e, n) {
        if (this.finished) return;
        this.finished = !0, e !== void 0 && this.emitFault(e), this.emitDroppedAudio();
        const i = this.now();
        this.emitUsage(i), this.emit({
            phase: "ended",
            outcome: t,
            connected: this.connectedAt !== null,
            duration_ms: this.connectedAt === null ? 0 : i - this.connectedAt,
            elapsed_ms: i - this.startedAt,
            ...n
        });
    }
    fault(t) {
        this.finished || this.emitFault(t);
    }
    faultStage() {
        return this.connectedAt === null ? "connecting" : "live";
    }
    emitFault(t) {
        const e = this.faultStage();
        if (t.kind === "protocol") {
            this.emit({
                phase: "fault",
                fault_kind: t.kind,
                fault_class: t.vendorClass,
                fault_code: t.vendorCode,
                fault_about: t.about,
                fault_stage: e
            });
            return;
        }
        if (t.kind === "mint") {
            this.emit({
                phase: "fault",
                fault_kind: t.kind,
                fault_reason: t.reason,
                fault_http: t.http,
                fault_stage: e
            });
            return;
        }
        if (t.kind === "socket") {
            this.emit({
                phase: "fault",
                fault_kind: t.kind,
                fault_close: t.close,
                fault_clean: t.clean,
                fault_stage: e,
                ...t.detail
            });
            return;
        }
        this.emit({
            phase: "fault",
            fault_kind: t.kind,
            fault_stage: e
        });
    }
    emitDroppedAudio() {
        if (this.droppedAudio === 0) return;
        const t = this.droppedAudio;
        this.droppedAudio = 0, this.emit({
            phase: "fault",
            fault_kind: "audio_backlog",
            fault_dropped: t,
            fault_stage: this.faultStage()
        });
    }
    now() {
        return this.lastNow = Math.max(this.lastNow, Math.round(this.options.clock.now())), this.lastNow;
    }
    emitUsage(t) {
        if (this.usageThrough === null || t <= this.usageThrough) return;
        const e = t - this.usageThrough;
        this.usageThrough = t, this.sequence += 1, this.emit({
            phase: "usage",
            active_ms: e,
            sequence: this.sequence
        });
    }
    emit(t) {
        try {
            this.options.emit({
                ...t,
                call_id: this.options.callId,
                telemetry_version: "1"
            });
        } catch  {
            return;
        }
    }
};

}
