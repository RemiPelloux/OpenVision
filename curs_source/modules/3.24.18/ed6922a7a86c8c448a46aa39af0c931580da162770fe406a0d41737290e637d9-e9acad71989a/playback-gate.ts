import { x } from "./tslib.es6.js";
var S8h;
export { S8h };
var __wakaru_$m__initialized = false;
export function $m_() {
if (__wakaru_$m__initialized) return;
__wakaru_$m__initialized = true;
"use strict";
x(), S8h = class {
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
    onWireEvent(e) {
        switch(e){
            case "response-created":
                {
                    const t = this.thisAskWasCutWhileWaiting;
                    this.isAssistantResponding = !0, this.awaitingTheResponseWeAskedFor = !1, this.sawAResponse = !0, this.theyTalkedOverThisResponse = t, this.thisAskWasCutWhileWaiting = !1;
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
