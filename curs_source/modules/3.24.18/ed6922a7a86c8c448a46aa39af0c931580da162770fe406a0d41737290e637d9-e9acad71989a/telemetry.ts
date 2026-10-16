import { rrr } from "./fault-facet.ts";
import { E6h } from "./mint-fault.ts";
import { $6h, $Mo, U6h, UMo, t9n } from "./protocol-fault.ts";
import { x } from "./tslib.es6.js";
function b6h(e, t) {
    return t === "absent" || t === "unrecognized" ? t : e.find((n)=>n === t) ?? "unrecognized";
}
function W6h(e) {
    return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
}
var H0t, W0t, d7e, orr, G6h, ep_, V6h, j6h;
export { G6h, H0t, V6h, W0t, W6h, b6h, d7e, ep_, j6h, orr };
var __wakaru_HMo_initialized = false;
export function HMo() {
if (__wakaru_HMo_initialized) return;
__wakaru_HMo_initialized = true;
"use strict";
x(), rrr(), E6h(), t9n(), H0t = (e)=>(t)=>t === void 0 ? void 0 : b6h(e, t), W0t = (e)=>W6h(e) ? e : void 0, d7e = (e)=>typeof e == "boolean" ? e : void 0, orr = (e)=>typeof e == "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e) ? e : void 0, G6h = {
    fault_last_in: H0t(UMo),
    fault_last_in_ms: W0t,
    fault_last_out: H0t($Mo),
    fault_last_out_ms: W0t,
    fault_last_in_control: H0t(UMo),
    fault_last_in_control_ms: W0t,
    fault_last_out_control: H0t($Mo),
    fault_last_out_control_ms: W0t,
    fault_updates: W0t,
    fault_last_update_ms: W0t,
    fault_responding: d7e,
    fault_muted: d7e,
    fault_via: H0t(U6h),
    fault_hidden: d7e,
    fault_online: d7e,
    fault_audio: H0t($6h),
    realtime_conversation_id: orr,
    fault_send_task_owed: d7e,
    fault_agent_running: d7e,
    fault_news_owed: d7e,
    fault_recovered: d7e
}, ep_ = Object.keys(G6h), V6h = 3e4, j6h = class {
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
    constructor(e){
        this.options = e, this.lastNow = Math.round(e.clock.now()), this.startedAt = this.lastNow, this.emit({
            phase: "started"
        });
    }
    connected(e) {
        if (this.finished || this.connectedAt !== null) return;
        const t = this.now();
        this.connectedAt = t, this.usageThrough = t, this.emit({
            phase: "connected",
            elapsed_ms: t - this.startedAt,
            ...e === void 0 ? {} : {
                model: e
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
        const e = this.now(), t = this.speechStoppedAt;
        this.speechStoppedAt = null, this.receivedAudio || (this.receivedAudio = !0, this.emit({
            phase: "first_audio",
            trigger: "call_start",
            ttfa_ms: e - this.startedAt
        })), t !== null && this.emit({
            phase: "first_audio",
            trigger: "user_speech",
            ttfa_ms: e - t
        });
    }
    uiOpened(e) {
        this.finished || this.openedSurfaces.has(e) || (this.openedSurfaces.add(e), this.emit({
            phase: "ui_opened",
            surface: e
        }));
    }
    tick() {
        if (this.finished || this.usageThrough === null) return;
        const e = this.now();
        e - this.usageThrough >= V6h && (this.emitDroppedAudio(), this.emitUsage(e));
    }
    audioDropped(e) {
        this.finished || !W6h(e) || (this.droppedAudio += e);
    }
    finish(e, t, n) {
        if (this.finished) return;
        this.finished = !0, t !== void 0 && this.emitFault(t), this.emitDroppedAudio();
        const i = this.now();
        this.emitUsage(i), this.emit({
            phase: "ended",
            outcome: e,
            connected: this.connectedAt !== null,
            duration_ms: this.connectedAt === null ? 0 : i - this.connectedAt,
            elapsed_ms: i - this.startedAt,
            ...n
        });
    }
    fault(e) {
        this.finished || this.emitFault(e);
    }
    faultStage() {
        return this.connectedAt === null ? "connecting" : "live";
    }
    emitFault(e) {
        const t = this.faultStage();
        if (e.kind === "protocol") {
            this.emit({
                phase: "fault",
                fault_kind: e.kind,
                fault_class: e.vendorClass,
                fault_code: e.vendorCode,
                fault_about: e.about,
                fault_stage: t
            });
            return;
        }
        if (e.kind === "mint") {
            this.emit({
                phase: "fault",
                fault_kind: e.kind,
                fault_reason: e.reason,
                fault_http: e.http,
                fault_stage: t
            });
            return;
        }
        if (e.kind === "socket") {
            this.emit({
                phase: "fault",
                fault_kind: e.kind,
                fault_close: e.close,
                fault_clean: e.clean,
                fault_stage: t,
                ...e.detail
            });
            return;
        }
        this.emit({
            phase: "fault",
            fault_kind: e.kind,
            fault_stage: t
        });
    }
    emitDroppedAudio() {
        if (this.droppedAudio === 0) return;
        const e = this.droppedAudio;
        this.droppedAudio = 0, this.emit({
            phase: "fault",
            fault_kind: "audio_backlog",
            fault_dropped: e,
            fault_stage: this.faultStage()
        });
    }
    now() {
        return this.lastNow = Math.max(this.lastNow, Math.round(this.options.clock.now())), this.lastNow;
    }
    emitUsage(e) {
        if (this.usageThrough === null || e <= this.usageThrough) return;
        const t = e - this.usageThrough;
        this.usageThrough = e, this.sequence += 1, this.emit({
            phase: "usage",
            active_ms: t,
            sequence: this.sequence
        });
    }
    emit(e) {
        try {
            this.options.emit({
                ...e,
                call_id: this.options.callId,
                telemetry_version: "1"
            });
        } catch  {
            return;
        }
    }
};

}
