import { x } from "./tslib.es6.js";
var EKl, xKl, _ve, IKl, AKl;
export { AKl, EKl, IKl, _ve, xKl };
var __wakaru_M2f_initialized = false;
export function M2f() {
if (__wakaru_M2f_initialized) return;
__wakaru_M2f_initialized = true;
"use strict";
x(), EKl = Object.defineProperty, xKl = (e, t, n)=>t in e ? EKl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, _ve = (e, t, n)=>xKl(e, typeof t != "symbol" ? t + "" : t, n), IKl = {
    selectedSentiment: null,
    modalOpen: !1
}, AKl = class {
    constructor(e){
        this.deps = e, _ve(this, "request"), _ve(this, "interactionRequest"), _ve(this, "draftSentiment", null), _ve(this, "feedbackSubmitted", !1), _ve(this, "modalShown", !1), _ve(this, "snapshot", IKl), _ve(this, "listeners", new Set), _ve(this, "shownRequestIds", new Set), _ve(this, "pendingInlineShownTimeouts", new Map), _ve(this, "subscribe", (t)=>(this.listeners.add(t), ()=>{
                this.listeners.delete(t);
            })), _ve(this, "getSnapshot", ()=>this.snapshot);
    }
    dispose() {
        for (const e of this.pendingInlineShownTimeouts.values())clearTimeout(e);
        this.pendingInlineShownTimeouts.clear();
    }
    syncRequest(e) {
        if (this.request?.requestId === e.requestId) {
            this.request = e;
            return;
        }
        this.flushPendingDraft(), this.request = e, this.resetDraft(), this.emitChange();
    }
    clearRequest() {
        this.request !== void 0 && (this.flushPendingDraft(), this.request = void 0, this.resetDraft(), this.emitChange());
    }
    markShown(e, t) {
        if (!this.shownRequestIds.has(e)) {
            if (t === "inline") {
                if (this.pendingInlineShownTimeouts.has(e)) return;
                this.pendingInlineShownTimeouts.set(e, setTimeout(()=>{
                    this.pendingInlineShownTimeouts.delete(e), this.shownRequestIds.add(e), this.deps.trackShown(e, t);
                }, 0));
                return;
            }
            clearTimeout(this.pendingInlineShownTimeouts.get(e)), this.pendingInlineShownTimeouts.delete(e), this.shownRequestIds.add(e), this.deps.trackShown(e, t);
        }
    }
    onSentiment(e) {
        if (this.request !== void 0) {
            if (this.draftSentiment === e) {
                const t = this.interactionRequest ?? this.request;
                this.resetDraft(), this.deps.reportRetract(t), this.emitChange();
                return;
            }
            this.draftSentiment = e, this.interactionRequest = this.request, this.feedbackSubmitted = !1, this.modalShown = !0, this.emitChange();
        }
    }
    onModalSubmit(e) {
        this.request !== void 0 && (this.draftSentiment = e.sentiment, this.reportOnce(e.sentiment, e), this.modalShown = !1, this.deps.notifySubmitted(), this.emitChange());
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
            for (const e of this.listeners)e();
        }
    }
    resetDraft() {
        this.draftSentiment = null, this.interactionRequest = void 0, this.feedbackSubmitted = !1, this.modalShown = !1;
    }
    flushPendingDraft() {
        if (this.request !== void 0 && this.draftSentiment !== null && !this.feedbackSubmitted) {
            const e = this.interactionRequest ?? this.request;
            this.deps.submitFeedback({
                requestId: e.requestId,
                sentiment: this.draftSentiment,
                canonicalModelName: e.canonicalModelName,
                variant: e.variant
            });
        }
    }
    reportOnce(e, t) {
        if (this.request === void 0 || this.feedbackSubmitted) return;
        const n = this.interactionRequest ?? this.request, i = this.deps.submitFeedback({
            requestId: n.requestId,
            sentiment: e,
            canonicalModelName: n.canonicalModelName,
            variant: n.variant,
            details: t
        });
        this.feedbackSubmitted = !0, i !== void 0 && Promise.resolve(i).then((r)=>{
            r || this.onSubmissionRefused(n.requestId, e);
        });
    }
    onSubmissionRefused(e, t) {
        this.draftSentiment !== t || (this.interactionRequest ?? this.request)?.requestId !== e || (this.resetDraft(), this.emitChange());
    }
};

}
