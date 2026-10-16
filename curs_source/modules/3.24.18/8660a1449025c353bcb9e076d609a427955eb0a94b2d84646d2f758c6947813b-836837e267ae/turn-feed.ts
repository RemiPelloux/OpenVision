import { pPi, wTl } from "./Ycg.js";
import { Hnf, Wnf } from "./transcript-book.ts";
import { E } from "./tslib.es6.js";
import { zgs } from "./words.ts";
var XPn, Gnf, qnf, znf;
export { Gnf, XPn, qnf, znf };
var __wakaru_z9k_initialized = false;
export function z9k() {
if (__wakaru_z9k_initialized) return;
__wakaru_z9k_initialized = true;
"use strict";
E(), Wnf(), zgs(), XPn = 1e3, Gnf = 3, qnf = 10, znf = class {
    constructor(t, e){
        this.host = t, this.feed = e, this.book = new Hnf(t.reader, t.rows()), this.pauseSpoken = t.status().parked, this.unwatch = t.watch({
            headerMoved: ()=>this.headerMoved(),
            changed: ()=>this.evaluate(),
            turnReplaced: ()=>this.turnReplaced()
        });
    }
    book;
    unwatch;
    disposed = !1;
    cancelSettle;
    pauseSpoken;
    pauseEndsAfterThisRefusal = !1;
    bodyLoadTries = 0;
    headerEpoch = 0;
    cloudDoneEpoch = -1;
    dispose() {
        this.disposed = !0, this.cancelTheSettle(), this.unwatch();
    }
    get owed() {
        const t = this.feed.owed();
        return t === void 0 ? void 0 : this.requestOf(t);
    }
    get pauseIsOpen() {
        return this.pauseSpoken;
    }
    requestOf(t) {
        return this.book.requestOf(t);
    }
    errandRecorded(t) {
        const e = this.host.status();
        this.book.record({
            errand: t,
            lineId: this.host.newLineId(),
            heardWhenRecorded: this.book.heard,
            sawRunning: !1,
            recordedWhileATurnWasRunning: this.recordedBesideAnEarlierTurn(),
            recordedBeside: {
                turn: e.turn,
                generationId: e.generationId
            },
            recordedAtHeaderEpoch: this.headerEpoch
        });
    }
    busyWith() {
        if (this.host.status().parked || !this.host.submitFollowsTheQueueSetting()) return;
        const t = this.book.typedOpenerOfTheNewestTurn(this.host.rows());
        return t === void 0 || t.trim() === "" ? {
            kind: "running"
        } : {
            kind: "typed",
            request: t
        };
    }
    askRefused() {
        this.host.status().coordinator || (this.pauseEndsAfterThisRefusal = !0);
    }
    errandAccepted(t, e) {
        if (this.disposed || this.host.isGone()) return;
        this.book.accepted(t, e), this.evaluate();
        const n = this.owed;
        if (n?.errand !== t || n.sawRunning || e !== void 0) return;
        const i = this.host.status();
        i.local && i.header === "done" && i.queued.length === 0 && (this.feed.settled({
            landed: void 0,
            closing: {
                kind: "never-started"
            },
            answers: [
                {
                    errand: t,
                    says: "the-closing"
                }
            ]
        }), this.evaluate());
    }
    errandResolvedByTheController() {
        this.evaluate();
    }
    headerMoved() {
        this.headerEpoch += 1;
        const t = this.host.status();
        !t.local && !t.coordinator && t.header === "done" && (this.cloudDoneEpoch = this.headerEpoch), this.evaluate();
    }
    turnReplaced() {
        const t = this.owed;
        t !== void 0 && (t.sawRunning = !1), this.evaluate();
    }
    scheduleSettle(t) {
        this.cancelTheSettle(), this.cancelSettle = this.host.clock.setTimer(()=>{
            this.cancelSettle = void 0, this.reportWhatSettled();
        }, t);
    }
    cancelTheSettle() {
        this.cancelSettle?.(), this.cancelSettle = void 0;
    }
    get settleIsScheduled() {
        return this.cancelSettle !== void 0;
    }
    followARenamedAnchor() {
        this.book.followARenamedAnchor(this.host.rows()) && this.host.log.info("heard cursor anchor is gone, counting from the last heard human");
    }
    evaluate() {
        if (this.disposed || this.host.isGone()) return;
        this.followARenamedAnchor(), this.noteTurnSeenRunning();
        const t = this.host.status();
        if (!t.parked && (t.header === "done" || t.header === "in_progress" && (this.owed !== void 0 || this.pauseEndsAfterThisRefusal || !t.coordinator)) ? (this.pauseSpoken = !1, this.pauseEndsAfterThisRefusal = !1) : t.parked && !this.pauseSpoken && (this.pauseSpoken = !0, this.feed.parked()), t.turn === "aborted") this.scheduleSettle(t.abortReason === void 0 ? XPn : 0);
        else if (this.readsSendsMidTurn()) this.settleIsScheduled || this.scheduleSettle(XPn);
        else if (this.turnIsOpen()) this.cancelTheSettle();
        else {
            const e = t.local && this.owed?.sawRunning === !0 && !this.host.reader.eachMessageStandsAlone;
            this.scheduleSettle(e ? 0 : XPn);
        }
    }
    unheard(t) {
        return this.book.unheard(this.host.rows(), t);
    }
    noteTurnSeenRunning() {
        const t = this.owed;
        if (!(t === void 0 || t.sawRunning || this.unheard(t).requestAt < 0)) {
            if (t.recordedWhileATurnWasRunning) {
                if (this.host.turnIsInFlight() && !this.aLaterTurnHasStarted(t)) return;
                t.recordedWhileATurnWasRunning = !1;
            }
            this.host.turnIsInFlight() && (t.sawRunning = !0);
        }
    }
    recordedBesideAnEarlierTurn() {
        const t = this.host.status();
        return this.host.turnIsInFlight() && (!t.local || t.turn !== "generating");
    }
    aLaterTurnHasStarted(t) {
        const { turn: e, generationId: n } = this.host.status();
        return e === "generating" && t.recordedBeside.turn !== "generating" ? !0 : n !== void 0 && n !== t.recordedBeside.generationId;
    }
    mayRead() {
        return this.disposed || this.host.isGone() ? !1 : !this.turnIsOpen() || this.readsSendsMidTurn();
    }
    turnIsOpen() {
        return this.host.status().turn !== "aborted" && this.host.turnIsInFlight();
    }
    readsSendsMidTurn() {
        return this.turnIsOpen() && this.host.reader.eachMessageStandsAlone;
    }
    async reportWhatSettled() {
        if (!this.mayRead()) return;
        const t = this.host.reader, e = this.unheard(void 0).span.filter((n)=>t.mayBeSaid(n) || t.isTypedByThem(n));
        if (e.length > 0) try {
            await this.host.loadBodies(e);
        } catch (n) {
            this.host.log.warn("could not load the settled messages", n);
        }
        !this.mayRead() || this.settleIsScheduled && !this.readsSendsMidTurn() || this.handOverTheSpan();
    }
    handOverTheSpan() {
        this.followARenamedAnchor();
        const { host: t } = this, e = t.reader, n = this.owed, i = this.unheard(n);
        if (n !== void 0 && i.requestAt >= 0 && !n.sawRunning && !i.span.slice(i.requestAt + 1).some((Y)=>t.isTheAgents(Y))) return;
        const r = t.status();
        if (n !== void 0 && i.requestAt >= 0 && !r.local && !r.coordinator && t.turnSignalComesWithTheRows !== !0 && n.recordedAtHeaderEpoch >= this.cloudDoneEpoch) return;
        const s = r.turn === "aborted", o = this.book.indexOfTheLastTurn(i.span), a = s && !e.eachMessageStandsAlone ? i.span.slice(0, Math.max(o, 0)) : i.span, l = (Y)=>e.mayBeSaid(Y) && !t.bodyIsLoaded(Y), c = (Y)=>!s && t.sendIsStillLoading(Y), u = a.findIndex((Y)=>l(Y) || c(Y));
        if (this.readsSendsMidTurn()) {
            this.sayWhatLanded(i, n, u < 0 ? a.length : u), u >= 0 && this.scheduleSettle(XPn);
            return;
        }
        const d = a.some(c) ? qnf : Gnf;
        if (u >= 0 && ++this.bodyLoadTries < d) {
            this.scheduleSettle(XPn);
            return;
        }
        this.bodyLoadTries = 0;
        const h = a.some(l), p = n !== void 0 && i.requestAt >= 0, g = this.landedIn(a);
        if (this.parkedOnItsOwnQuestion(g)) {
            const Y = this.book.indexOfTheLastTurn(a), J = Y > 0 ? a.slice(0, Y) : [], Q = this.landedIn(J);
            if (this.book.hearTheHistory(i.rows), Q.length > 0) {
                const te = this.book.answeredBy(Q).filter((ee)=>this.book.indexOfRequest(ee, {
                        within: J,
                        transcript: i.rows
                    }) >= 0);
                this.feed.settled({
                    landed: wTl(Q),
                    closing: void 0,
                    answers: te.map(({ errand: ee })=>({
                            errand: ee,
                            says: "its-turn"
                        }))
                });
            }
            return;
        }
        this.book.hearTheHistory(i.rows);
        const f = (Y)=>this.book.indexOfRequest(Y, {
                within: i.span,
                transcript: i.rows
            }), _ = (Y)=>this.book.indexOfRequest(Y, {
                within: i.rows,
                transcript: i.rows
            }), b = n === void 0 ? -1 : _(n), y = n !== void 0 && !n.errand.resolved && f(n) < 0 && b >= 0 && b < i.startsAt, S = this.book.requests.filter((Y)=>!Y.errand.resolved && f(Y) >= 0), C = (s ? S.find((Y)=>o >= 0 && f(Y) === o) : void 0) ?? (s && y && o < 0 ? n : void 0), T = a.slice(i.requestAt + 1), I = T.findIndex((Y)=>e.isTypedByThem(Y)), A = I < 0 ? T : T.slice(0, I), P = this.landedIn(A);
        let M;
        C !== void 0 ? M = r.abortReason === "error" ? {
            kind: "error"
        } : {
            kind: "stopped",
            stillQueued: r.queued.map((Y)=>pPi(Y)).filter((Y)=>Y !== "")
        } : h ? M = {
            kind: "unreadable"
        } : p && P.length === 0 && (M = A.some((Y)=>t.isTheAgents(Y)) ? {
            kind: "no-reply"
        } : {
            kind: "never-started"
        });
        const O = P.length > 0 && P.every((Y)=>Y.sentRequest === void 0), N = o >= 0 ? i.span[o] : void 0, U = N !== void 0 && e.isHuman(N) && !e.isTypedByThem(N), j = this.book.requests.filter((Y)=>!Y.errand.resolved && Y.errand.landed.length > 0 && f(Y) < 0), $ = this.book.answeredBy(g), H = [
            ...S.filter((Y)=>C === Y || $.includes(Y) || Y === n && p && (O || M !== void 0)),
            ...y && n !== void 0 && !j.includes(n) && (C === n || O && !U) ? [
                n
            ] : [],
            ...j
        ], G = new Set(this.book.requests.map(_)), q = i.span.flatMap((Y, J)=>e.isTypedByThem(Y) && !G.has(i.startsAt + J) && i.span.slice(J + 1).some((Q)=>t.isTheAgents(Q)) ? [
                i.startsAt + J
            ] : []), K = Math.max(-1, ...H.map(_), ...q), V = this.book.requests.filter((Y)=>{
            if (Y.errand.resolved || H.includes(Y)) return !1;
            const J = _(Y);
            return J >= 0 && J < K;
        });
        this.feed.settled({
            landed: g.length > 0 ? wTl(g) : void 0,
            closing: M,
            answers: [
                ...H.map((Y)=>({
                        errand: Y.errand,
                        says: (Y === n ? P.length === 0 : j.includes(Y)) ? "the-closing" : "its-turn"
                    })),
                ...V.map(({ errand: Y })=>({
                        errand: Y,
                        says: "a-whole-turn-closing"
                    }))
            ]
        });
    }
    sayWhatLanded(t, e, n) {
        const i = (a)=>e !== void 0 && (e.errand.landed.length > 0 || a.some((l)=>l.sentRequest === e.errand.request));
        let r = n, s = this.landedIn(t.span.slice(0, r));
        if (t.requestAt >= 0 && t.requestAt < r && !i(s) && (r = t.requestAt, s = this.landedIn(t.span.slice(0, r))), s.length === 0 || this.parkedOnItsOwnQuestion(s)) return;
        this.book.hearTheHistory(t.rows.slice(0, t.startsAt + r));
        const o = this.book.answeredBy(s).filter((a)=>a !== e);
        this.feed.settled({
            landed: wTl(s),
            closing: void 0,
            answers: [
                ...o.map(({ errand: a })=>({
                        errand: a,
                        says: "its-turn"
                    })),
                ...e !== void 0 && i(s) ? [
                    {
                        errand: e.errand,
                        says: "its-turn",
                        turnStillRuns: !0
                    }
                ] : []
            ]
        });
    }
    landedIn(t) {
        return this.book.landedIn({
            within: t,
            transcript: this.host.rows()
        });
    }
    parkedOnItsOwnQuestion(t) {
        const e = this.host.status();
        return e.local || !e.parked ? !1 : e.coordinator ? t.length === 0 || e.pendingInteraction : !0;
    }
};

}
