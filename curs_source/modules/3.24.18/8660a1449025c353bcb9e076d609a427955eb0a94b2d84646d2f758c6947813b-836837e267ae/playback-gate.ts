import { E } from "./tslib.es6.js";
var Frf;
export { Frf };
var __wakaru_t8k_initialized = false;
export function t8k() {
if (__wakaru_t8k_initialized) return;
__wakaru_t8k_initialized = true;
"use strict";
E(), Frf = class {
    theyTalkedOverThisResponse = !1;
    thisAskWasCutWhileWaiting = !1;
    isCallerSpeaking = !1;
    isAssistantResponding = !1;
    awaitingTheResponseWeAskedFor = !1;
    sawAResponse = !1;
    noteResponseRequested() {
        this.thisAskWasCutWhileWaiting = this.isCallerSpeaking && this.theyTalkedOverThisResponse, this.awaitingTheResponseWeAskedFor = !0, this.sawAResponse = !0;
    }
    callHasHadAResponse() {
        return this.sawAResponse;
    }
    assistantIsResponding() {
        return this.isAssistantResponding;
    }
    callerIsSpeaking() {
        return this.isCallerSpeaking;
    }
    noteCallerQuietStopgap() {
        this.isCallerSpeaking = !1;
    }
    responseIsInFlight() {
        return this.isAssistantResponding || this.awaitingTheResponseWeAskedFor;
    }
    awaitingOurResponse() {
        return this.awaitingTheResponseWeAskedFor;
    }
    callerTookTheResponse() {
        return this.theyTalkedOverThisResponse;
    }
    noteAsyncUpdateCut() {
        this.isAssistantResponding = !1, this.awaitingTheResponseWeAskedFor = !1;
    }
    mayPlayAudio() {
        return !this.theyTalkedOverThisResponse && !this.isCallerSpeaking;
    }
    onWireEvent(t) {
        switch(t){
            case "response-created":
                {
                    const e = this.thisAskWasCutWhileWaiting;
                    this.isAssistantResponding = !0, this.awaitingTheResponseWeAskedFor = !1, this.sawAResponse = !0, this.theyTalkedOverThisResponse = e, this.thisAskWasCutWhileWaiting = !1;
                    return;
                }
            case "response-ended":
                this.isAssistantResponding = !1, this.awaitingTheResponseWeAskedFor = !1, this.theyTalkedOverThisResponse = !1, this.thisAskWasCutWhileWaiting = !1;
                return;
            case "speech-started":
                this.isCallerSpeaking = !0, (this.isAssistantResponding || this.awaitingTheResponseWeAskedFor) && (this.theyTalkedOverThisResponse = !0, this.awaitingTheResponseWeAskedFor && (this.thisAskWasCutWhileWaiting = !0));
                return;
            case "speech-stopped":
                this.isCallerSpeaking = !1;
                return;
        }
    }
};

}
