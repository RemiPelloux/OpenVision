import { a8l, i0s, vjf } from "./BA.js";
import { E } from "./tslib.es6.js";
var _jf, bjf;
export { _jf, bjf };
var __wakaru_yjf_initialized = false;
export function yjf() {
if (__wakaru_yjf_initialized) return;
__wakaru_yjf_initialized = true;
"use strict";
E(), _jf = 1200, bjf = class {
    constructor(t, e = _jf){
        this.host = t, this.debounceMs = e, this.state = "idle", this.latestPartialText = "", this.armedTimer = null;
    }
    start() {
        this.clearArmedTimer(), this.latestPartialText = "", this.state = "listening";
    }
    handleTranscript(t, e) {
        if (e === "final") {
            this.handleFinal(t);
            return;
        }
        if (this.state !== "listening" && this.state !== "armed") return;
        this.latestPartialText = t, this.host.commit(t, e);
        const { isTrigger: n } = a8l(t, i0s(this.host.readKeywords()));
        n ? this.arm() : this.state === "armed" && (this.clearArmedTimer(), this.state = "listening");
    }
    handleFinal(t) {
        if (this.state === "idle" || this.state === "submitted") return;
        this.clearArmedTimer();
        const { isTrigger: e, original: n } = a8l(t, i0s(this.host.readKeywords()));
        if (this.state === "pending-final") {
            this.host.commit(e ? vjf({
                text: t,
                word: n
            }) : t, "final"), this.fireSubmit();
            return;
        }
        if (!e) {
            this.host.commit(t, "final"), this.state = "idle";
            return;
        }
        this.host.commit(vjf({
            text: t,
            word: n
        }), "final"), this.fireSubmit();
    }
    dispose() {
        this.clearArmedTimer(), this.latestPartialText = "", this.state = "idle";
    }
    arm() {
        this.clearArmedTimer(), this.state = "armed", this.armedTimer = setTimeout(()=>this.onArmedTimerFire(), this.debounceMs);
    }
    onArmedTimerFire() {
        if (this.armedTimer = null, this.state !== "armed") return;
        const { isTrigger: t } = a8l(this.latestPartialText, i0s(this.host.readKeywords()));
        if (!t) {
            this.state = "listening";
            return;
        }
        this.state = "pending-final", this.host.stopRecording();
    }
    fireSubmit() {
        this.state = "submitted", this.host.submit();
    }
    clearArmedTimer() {
        this.armedTimer !== null && (clearTimeout(this.armedTimer), this.armedTimer = null);
    }
};

}
