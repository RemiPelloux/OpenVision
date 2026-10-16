import { E } from "./tslib.es6.js";
var hTl;
export { hTl };
var __wakaru_xnf_initialized = false;
export function xnf() {
if (__wakaru_xnf_initialized) return;
__wakaru_xnf_initialized = true;
"use strict";
E(), hTl = class cMb {
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
    constructor(e){
        this.args = e;
    }
    static readTheLine(e) {
        return e.socketIsWritable ? e.callerIsSpeaking ? "callers" : e.responseIsInFlight || e.speakerIsBusy ? "busy" : "free" : "dead";
    }
    get speaksForNudgeId() {
        return this.speaksFor;
    }
    greet(e) {
        this.unheardGreeting = e, this.ask(e);
    }
    ask(e) {
        const n = this.payingTheOwed;
        switch(this.payingTheOwed = !1, cMb.readTheLine(this.args.line())){
            case "dead":
                this.settled(e, "dropped_line_dead", this.payingAnOutcome);
                return;
            case "callers":
                this.survivesTheCallersHold(e) ? this.owe(e) : this.settled(e, "dropped_caller_holds", this.payingAnOutcome);
                return;
            case "busy":
                this.owe(e);
                return;
            case "free":
                this.abandonTheOwed("dropped_superseded"), this.thisResponseSpoke = !1, this.speaksFor = e.deliversNudgeId, this.liveResponseIsTheGreeting = this.isTheUnheardGreeting(e), this.args.send(e), this.settled(e, n ? "sent_after_wait" : "sent", this.payingAnOutcome);
                return;
        }
    }
    responseSpoke() {
        this.thisResponseSpoke = !0, this.liveResponseIsTheGreeting && (this.unheardGreeting = null);
    }
    speechEnded() {
        this.payTheOwed();
    }
    responseEnded(e) {
        !e && this.liveResponseIsTheGreeting && (this.unheardGreeting = null), this.liveResponseIsTheGreeting = !1, this.speaksFor = null;
        const n = this.thisResponseSpoke && !this.liveResponseIsTheOrchestrators;
        if (this.liveResponseIsTheOrchestrators = !1, n && this.owed !== null && !this.owed.isAResult && this.owed.instructions !== null && !this.isTheUnheardGreeting(this.owed) && this.abandonTheOwed("dropped_answered_live"), this.thisResponseSpoke = !1, e) {
            this.owed !== null && !this.survivesTheCallersHold(this.owed) ? this.abandonTheOwed("dropped_caller_barged_in") : this.payTheOwed();
            return;
        }
        this.payTheOwed();
    }
    serverStartedAResponse() {
        this.thisResponseSpoke = !1, this.liveResponseIsTheGreeting = !1;
        const e = this.owed;
        return e === null || this.isTheUnheardGreeting(e) || e.deliversNudgeId === null && !e.isAResult ? !1 : (this.abandonTheOwed("carried_by_live_response"), this.speaksFor = e.deliversNudgeId, !0);
    }
    orchestratorStartedAResponse() {
        this.thisResponseSpoke = !1, this.liveResponseIsTheGreeting = !1, this.liveResponseIsTheOrchestrators = !0, this.speaksFor = null;
    }
    callerInterrupted() {
        const e = this.unheardGreeting;
        this.owed !== null && !this.survivesTheCallersHold(this.owed) && this.abandonTheOwed("dropped_caller_barged_in"), e !== null && this.owe(e);
    }
    close() {
        this.abandonTheOwed("dropped_call_closed");
    }
    isTheUnheardGreeting(e) {
        const n = this.unheardGreeting;
        return n !== null && e.instructions === n.instructions;
    }
    survivesTheCallersHold(e) {
        return this.isTheUnheardGreeting(e) || e.isAResult || e.instructions !== null || e.deliversNudgeId !== null;
    }
    owe(e) {
        const n = this.owed;
        if (n === null) {
            this.owed = e, this.owedNamedAnOutcome = e.deliversNudgeId !== null;
            return;
        }
        this.isTheUnheardGreeting(n) && this.isTheUnheardGreeting(e) || (this.owedNamedAnOutcome = this.owedNamedAnOutcome || e.deliversNudgeId !== null, this.settled(e, "folded"), this.owed = this.folded(n, e));
    }
    folded(e, n) {
        if (e.isAResult !== n.isAResult) {
            const [i, r] = e.isAResult ? [
                e,
                n
            ] : [
                n,
                e
            ];
            return this.isTheUnheardGreeting(r) && (this.unheardGreeting = null), i;
        }
        return {
            deliversNudgeId: e.deliversNudgeId === n.deliversNudgeId ? n.deliversNudgeId : null,
            instructions: e.instructions ?? n.instructions,
            isAResult: e.isAResult
        };
    }
    payTheOwed() {
        const e = this.owed;
        if (e === null) return;
        const n = this.owedNamedAnOutcome;
        this.owed = null, this.owedNamedAnOutcome = !1, this.payingTheOwed = !0, this.payingAnOutcome = n, this.ask(e), this.payingTheOwed = !1, this.payingAnOutcome = !1, this.owed !== null && (this.owedNamedAnOutcome = this.owedNamedAnOutcome || n);
    }
    abandonTheOwed(e) {
        const n = this.owed;
        if (n === null) return;
        const i = this.owedNamedAnOutcome;
        this.owed = null, this.owedNamedAnOutcome = !1, this.settled(n, e, i);
    }
    settled(e, n, i = !1) {
        this.args.onAskSettled?.({
            settlement: n,
            carries: this.carriedBy(e, i)
        });
    }
    carriedBy(e, n = !1) {
        return e.isAResult || e.deliversNudgeId !== null || n ? "outcome" : this.isTheUnheardGreeting(e) ? "greeting" : e.instructions !== null ? "steer" : "bare";
    }
};

}
