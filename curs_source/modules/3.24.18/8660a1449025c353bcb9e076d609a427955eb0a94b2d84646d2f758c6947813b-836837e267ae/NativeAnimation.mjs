import { JAs, YYl } from "./WithPromise.mjs";
import { Xg0 } from "./apply-generator.mjs";
import { Out } from "./errors.mjs";
import { QAs } from "./get-final.mjs";
import { xR } from "./index_10.mjs";
import { NQt } from "./noop.mjs";
import { Vg0, Yg0, ZAs, gyv } from "./ofv.js";
import { Gg0, yyv } from "./scroll-timeline.mjs";
import { Kg0 } from "./start-waapi-animation.mjs";
import { fyv } from "./style-set.mjs";
import { jDe, sEe } from "./time-conversion.mjs";
import { E } from "./tslib.es6.js";
var oXl;
export { oXl };
var __wakaru_Eyv_initialized = false;
export function Eyv() {
if (__wakaru_Eyv_initialized) return;
__wakaru_Eyv_initialized = true;
E(), xR(), fyv(), Gg0(), QAs(), YYl(), Kg0(), Xg0(), oXl = class extends JAs {
    constructor(t){
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
        const { element: e, name: n, keyframes: i, pseudoElement: r, allowFlatten: s = !1, finalKeyframe: o, onComplete: a } = t;
        this.isPseudoElement = !!r, this.allowFlatten = s, this.options = t, Out(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const l = Yg0(t);
        this.animation = Vg0(e, n, i, l, r), l.autoplay === !1 && this.animation.pause(), this.animation.onfinish = ()=>{
            if (this.finishedTime = this.time, !r) {
                const c = ZAs(i, this.options, o, this.speed);
                this.updateMotionValue && this.updateMotionValue(c), gyv(e, n, c), this.animation.cancel();
            }
            a?.(), this.notifyFinished();
        };
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.finish?.();
    }
    cancel() {
        try {
            this.animation.cancel();
        } catch  {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const { state: t } = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
        const t = this.options?.element;
        !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
    }
    get duration() {
        const t = this.animation.effect?.getComputedTiming?.().duration || 0;
        return jDe(Number(t));
    }
    get iterationDuration() {
        const { delay: t = 0 } = this.options || {};
        return this.duration + jDe(t);
    }
    get time() {
        return jDe(Number(this.animation.currentTime) || 0);
    }
    set time(t) {
        const e = this.finishedTime !== null;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = sEe(t), e && this.animation.pause();
    }
    get speed() {
        return this.animation.playbackRate;
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t;
    }
    attachTimeline({ timeline: t, rangeStart: e, rangeEnd: n, observe: i }) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, t && yyv() ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), n && (this.animation.rangeEnd = n), NQt) : i(this);
    }
};

}
