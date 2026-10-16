import { E } from "./tslib.es6.js";
var Rnp, Pnp, S2e, Mnp, Wka;
export { Mnp, Pnp, Rnp, S2e, Wka };
var __wakaru_Dnp_initialized = false;
export function Dnp() {
if (__wakaru_Dnp_initialized) return;
__wakaru_Dnp_initialized = true;
"use strict";
E(), Rnp = Object.defineProperty, Pnp = (t, e, n)=>e in t ? Rnp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, S2e = (t, e, n)=>Pnp(t, typeof e != "symbol" ? e + "" : e, n), Mnp = {
    selectedSentiment: null,
    modalOpen: !1
}, Wka = class {
    constructor(t){
        this.deps = t, S2e(this, "request"), S2e(this, "interactionRequest"), S2e(this, "draftSentiment", null), S2e(this, "feedbackSubmitted", !1), S2e(this, "modalShown", !1), S2e(this, "snapshot", Mnp), S2e(this, "listeners", new Set), S2e(this, "shownRequestIds", new Set), S2e(this, "pendingInlineShownTimeouts", new Map), S2e(this, "subscribe", (e)=>(this.listeners.add(e), ()=>{
                this.listeners.delete(e);
            })), S2e(this, "getSnapshot", ()=>this.snapshot);
    }
    dispose() {
        for (const t of this.pendingInlineShownTimeouts.values())clearTimeout(t);
        this.pendingInlineShownTimeouts.clear();
    }
    syncRequest(t) {
        if (this.request?.requestId === t.requestId) {
            this.request = t;
            return;
        }
        this.flushPendingDraft(), this.request = t, this.resetDraft(), this.emitChange();
    }
    clearRequest() {
        this.request !== void 0 && (this.flushPendingDraft(), this.request = void 0, this.resetDraft(), this.emitChange());
    }
    markShown(t, e) {
        if (!this.shownRequestIds.has(t)) {
            if (e === "inline") {
                if (this.pendingInlineShownTimeouts.has(t)) return;
                this.pendingInlineShownTimeouts.set(t, setTimeout(()=>{
                    this.pendingInlineShownTimeouts.delete(t), this.shownRequestIds.add(t), this.deps.trackShown(t, e);
                }, 0));
                return;
            }
            clearTimeout(this.pendingInlineShownTimeouts.get(t)), this.pendingInlineShownTimeouts.delete(t), this.shownRequestIds.add(t), this.deps.trackShown(t, e);
        }
    }
    onSentiment(t) {
        if (this.request !== void 0) {
            if (this.draftSentiment === t) {
                const e = this.interactionRequest ?? this.request;
                this.resetDraft(), this.deps.reportRetract(e), this.emitChange();
                return;
            }
            this.draftSentiment = t, this.interactionRequest = this.request, this.feedbackSubmitted = !1, this.modalShown = !0, this.emitChange();
        }
    }
    onModalSubmit(t) {
        this.request !== void 0 && (this.draftSentiment = t.sentiment, this.reportOnce(t.sentiment, t), this.modalShown = !1, this.deps.notifySubmitted(), this.emitChange());
    }
    onModalClose() {
        this.request !== void 0 && (this.deps.trackDismissed(this.request.requestId), this.draftSentiment !== null && this.reportOnce(this.draftSentiment), this.modalShown = !1, this.emitChange());
    }
    emitChange() {
        if (!(this.snapshot.selectedSentiment === this.draftSentiment && this.snapshot.modalOpen === this.modalShown)) {
            this.snapshot = {
                selectedSentiment: this.draftSentiment,
                modalOpen: this.modalShown
            };
            for (const t of this.listeners)t();
        }
    }
    resetDraft() {
        this.draftSentiment = null, this.interactionRequest = void 0, this.feedbackSubmitted = !1, this.modalShown = !1;
    }
    flushPendingDraft() {
        if (this.request !== void 0 && this.draftSentiment !== null && !this.feedbackSubmitted) {
            const t = this.interactionRequest ?? this.request;
            this.deps.submitFeedback({
                requestId: t.requestId,
                sentiment: this.draftSentiment,
                canonicalModelName: t.canonicalModelName,
                variant: t.variant
            });
        }
    }
    reportOnce(t, e) {
        if (this.request === void 0 || this.feedbackSubmitted) return;
        const n = this.interactionRequest ?? this.request, i = this.deps.submitFeedback({
            requestId: n.requestId,
            sentiment: t,
            canonicalModelName: n.canonicalModelName,
            variant: n.variant,
            details: e
        });
        this.feedbackSubmitted = !0, i !== void 0 && Promise.resolve(i).then((r)=>{
            r || this.onSubmissionRefused(n.requestId, t);
        });
    }
    onSubmissionRefused(t, e) {
        this.draftSentiment !== e || (this.interactionRequest ?? this.request)?.requestId !== t || (this.resetDraft(), this.emitChange());
    }
};

}
