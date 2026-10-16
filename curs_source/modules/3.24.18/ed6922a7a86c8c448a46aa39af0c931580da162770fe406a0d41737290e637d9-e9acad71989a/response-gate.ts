import { x } from "./tslib.es6.js";
var ZMo;
export { ZMo };
var __wakaru_m4h_initialized = false;
export function m4h() {
if (__wakaru_m4h_initialized) return;
__wakaru_m4h_initialized = true;
"use strict";
x(), ZMo = class qCm {
    owed = null;
    speaksFor = null;
    thisResponseSpoke = !1;
    unheardGreeting = null;
    liveResponseIsTheGreeting = !1;
    liveResponseIsTheOrchestrators = !1;
    payingTheOwed = !1;
    owedNamedAnOutcome = !1;
    payingAnOutcome = !1;
    args;
    constructor(t){
        this.args = t;
    }
    static readTheLine(t) {
        return t.socketIsWritable ? t.callerIsSpeaking ? "callers" : t.responseIsInFlight || t.speakerIsBusy ? "busy" : "free" : "dead";
    }
    get speaksForNudgeId() {
        return this.speaksFor;
    }
    greet(t) {
        this.unheardGreeting = t, this.ask(t);
    }
    ask(t) {
        const n = this.payingTheOwed;
        switch(this.payingTheOwed = !1, qCm.readTheLine(this.args.line())){
            case "dead":
                this.settled(t, "dropped_line_dead", this.payingAnOutcome);
                return;
            case "callers":
                this.survivesTheCallersHold(t) ? this.owe(t) : this.settled(t, "dropped_caller_holds", this.payingAnOutcome);
                return;
            case "busy":
                this.owe(t);
                return;
            case "free":
                this.abandonTheOwed("dropped_superseded"), this.thisResponseSpoke = !1, this.speaksFor = t.deliversNudgeId, this.liveResponseIsTheGreeting = this.isTheUnheardGreeting(t), this.args.send(t), this.settled(t, n ? "sent_after_wait" : "sent", this.payingAnOutcome);
                return;
        }
    }
    responseSpoke() {
        this.thisResponseSpoke = !0, this.liveResponseIsTheGreeting && (this.unheardGreeting = null);
    }
    speechEnded() {
        this.payTheOwed();
    }
    responseEnded(t) {
        !t && this.liveResponseIsTheGreeting && (this.unheardGreeting = null), this.liveResponseIsTheGreeting = !1, this.speaksFor = null;
        const n = this.thisResponseSpoke && !this.liveResponseIsTheOrchestrators;
        if (this.liveResponseIsTheOrchestrators = !1, n && this.owed !== null && !this.owed.isAResult && this.owed.instructions !== null && !this.isTheUnheardGreeting(this.owed) && this.abandonTheOwed("dropped_answered_live"), this.thisResponseSpoke = !1, t) {
            this.owed !== null && !this.survivesTheCallersHold(this.owed) ? this.abandonTheOwed("dropped_caller_barged_in") : this.payTheOwed();
            return;
        }
        this.payTheOwed();
    }
    serverStartedAResponse() {
        this.thisResponseSpoke = !1, this.liveResponseIsTheGreeting = !1;
        const t = this.owed;
        return t === null || this.isTheUnheardGreeting(t) || t.deliversNudgeId === null && !t.isAResult ? !1 : (this.abandonTheOwed("carried_by_live_response"), this.speaksFor = t.deliversNudgeId, !0);
    }
    orchestratorStartedAResponse() {
        this.thisResponseSpoke = !1, this.liveResponseIsTheGreeting = !1, this.liveResponseIsTheOrchestrators = !0, this.speaksFor = null;
    }
    callerInterrupted() {
        const t = this.unheardGreeting;
        this.owed !== null && !this.survivesTheCallersHold(this.owed) && this.abandonTheOwed("dropped_caller_barged_in"), t !== null && this.owe(t);
    }
    close() {
        this.abandonTheOwed("dropped_call_closed");
    }
    isTheUnheardGreeting(t) {
        const n = this.unheardGreeting;
        return n !== null && t.instructions === n.instructions;
    }
    survivesTheCallersHold(t) {
        return this.isTheUnheardGreeting(t) || t.isAResult || t.instructions !== null || t.deliversNudgeId !== null;
    }
    owe(t) {
        const n = this.owed;
        if (n === null) {
            this.owed = t, this.owedNamedAnOutcome = t.deliversNudgeId !== null;
            return;
        }
        this.isTheUnheardGreeting(n) && this.isTheUnheardGreeting(t) || (this.owedNamedAnOutcome = this.owedNamedAnOutcome || t.deliversNudgeId !== null, this.settled(t, "folded"), this.owed = this.folded(n, t));
    }
    folded(t, n) {
        if (t.isAResult !== n.isAResult) {
            const [i, r] = t.isAResult ? [
                t,
                n
            ] : [
                n,
                t
            ];
            return this.isTheUnheardGreeting(r) && (this.unheardGreeting = null), i;
        }
        return {
            deliversNudgeId: t.deliversNudgeId === n.deliversNudgeId ? n.deliversNudgeId : null,
            instructions: t.instructions ?? n.instructions,
            isAResult: t.isAResult
        };
    }
    payTheOwed() {
        const t = this.owed;
        if (t === null) return;
        const n = this.owedNamedAnOutcome;
        this.owed = null, this.owedNamedAnOutcome = !1, this.payingTheOwed = !0, this.payingAnOutcome = n, this.ask(t), this.payingTheOwed = !1, this.payingAnOutcome = !1, this.owed !== null && (this.owedNamedAnOutcome = this.owedNamedAnOutcome || n);
    }
    abandonTheOwed(t) {
        const n = this.owed;
        if (n === null) return;
        const i = this.owedNamedAnOutcome;
        this.owed = null, this.owedNamedAnOutcome = !1, this.settled(n, t, i);
    }
    settled(t, n, i = !1) {
        this.args.onAskSettled?.({
            settlement: n,
            carries: this.carriedBy(t, i)
        });
    }
    carriedBy(t, n = !1) {
        return t.isAResult || t.deliversNudgeId !== null || n ? "outcome" : this.isTheUnheardGreeting(t) ? "greeting" : t.instructions !== null ? "steer" : "bare";
    }
};

}
