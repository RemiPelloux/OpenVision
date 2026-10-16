import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
var modelStreamChunkObserverKey, IDLE_ENDING_CHUNK_TYPES, THINKING_CHUNK_TYPES, STEER_IDLE_SAMPLE_PREEMPTED_REASON, IdleModelSamplePreempter;
export { IDLE_ENDING_CHUNK_TYPES, IdleModelSamplePreempter, STEER_IDLE_SAMPLE_PREEMPTED_REASON, THINKING_CHUNK_TYPES, modelStreamChunkObserverKey };
var __wakaru_init_steer_idle_sample_preemption_initialized = false;
export function init_steer_idle_sample_preemption() {
if (__wakaru_init_steer_idle_sample_preemption_initialized) return;
__wakaru_init_steer_idle_sample_preemption_initialized = true;
"use strict";
init_dist();
modelStreamChunkObserverKey = createKey(Symbol("modelStreamChunkObserver"), void 0);
IDLE_ENDING_CHUNK_TYPES = new Set([
    "text-delta",
    "tool-call-streaming-start",
    "tool-call-delta",
    "tool-call"
]);
THINKING_CHUNK_TYPES = new Set([
    "reasoning",
    "reasoning-signature",
    "redacted-reasoning"
]);
STEER_IDLE_SAMPLE_PREEMPTED_REASON = "steer_preempted_idle_sample";
IdleModelSamplePreempter = class {
    constructor(options2){
        this.options = options2;
        this.idle = true;
        this.sawThinking = false;
        this.stopped = false;
        this.didPreempt = false;
        this.now = options2.now ?? (()=>Date.now());
        this.setTimer = options2.setTimer ?? ((fn, ms2)=>setTimeout(fn, ms2));
        this.clearTimer = options2.clearTimer ?? ((handle)=>clearTimeout(handle));
        this.startedAtMs = this.now();
    }
    get preempted() {
        return this.didPreempt;
    }
    get preemptedAfterMs() {
        return this.didPreempt ? this.now() - this.startedAtMs : void 0;
    }
    get phase() {
        return this.sawThinking ? "thinking" : "no_output";
    }
    start() {
        if (this.stopped) {
            return;
        }
        this.unsubscribe = this.options.signal.onUserInjectionAdmitted(()=>this.arm());
        if (this.options.signal.hasPendingUserInjections()) {
            this.arm();
        }
    }
    observeChunk(type2) {
        if (THINKING_CHUNK_TYPES.has(type2)) {
            this.sawThinking = true;
            return;
        }
        if (this.idle && IDLE_ENDING_CHUNK_TYPES.has(type2)) {
            this.idle = false;
            this.disarm();
        }
    }
    stop() {
        if (this.stopped) {
            return;
        }
        this.stopped = true;
        this.disarm();
        this.unsubscribe?.();
        this.unsubscribe = void 0;
    }
    arm() {
        if (this.stopped || !this.idle || this.didPreempt || this.timer !== void 0) {
            return;
        }
        const pendingSinceMs = this.options.policy.pendingSinceMs();
        const waitedMs = pendingSinceMs === void 0 ? 0 : Math.max(0, this.now() - pendingSinceMs);
        const delayMs = Math.max(0, this.options.policy.graceMs - waitedMs);
        this.timer = this.setTimer(()=>{
            this.timer = void 0;
            this.fire();
        }, delayMs);
    }
    disarm() {
        if (this.timer !== void 0) {
            this.clearTimer(this.timer);
            this.timer = void 0;
        }
    }
    fire() {
        if (this.stopped || !this.idle || this.didPreempt || !this.options.signal.hasPendingUserInjections()) {
            return;
        }
        this.didPreempt = true;
        this.options.cancel({
            intentional: true,
            reason: STEER_IDLE_SAMPLE_PREEMPTED_REASON
        });
    }
};

}
