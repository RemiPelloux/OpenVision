import { WLe } from "./nudge-reply.ts";
import { A4h, I4h } from "./transcript-book.ts";
import { x } from "./tslib.es6.js";
import { QMo, _4h, b4h, hrr, r9n, tPo } from "./words.ts";
function cPo(e) {
    let t = e;
    const n = ()=>{
        const i = t.length > 1, r = t.map((s)=>Dp_(s, i));
        return (t.length < e.length ? [
            tPo.earlierUpdatesAreInTheChat,
            ...r
        ] : r).join(`

`);
    };
    for(; t.length > 1 && n().length > WLe;)t = t.slice(1);
    return n().slice(0, WLe);
}
function Dp_(e, t) {
    return e.typedRequest !== void 0 ? _4h({
        request: e.typedRequest,
        answer: e.text
    }) : e.sentRequest !== void 0 && e.ranAfterAnEarlierJob === !0 ? b4h({
        request: e.sentRequest,
        answer: e.text
    }) : t && e.sentRequest !== void 0 ? QMo({
        request: e.sentRequest,
        answer: e.text
    }) : e.text;
}
var xzt, R4h, D4h, M4h;
export { D4h, Dp_, M4h, R4h, cPo, xzt };
var __wakaru_Pp__initialized = false;
export function Pp_() {
if (__wakaru_Pp__initialized) return;
__wakaru_Pp__initialized = true;
"use strict";
x(), A4h(), hrr(), xzt = 1e3, R4h = 3, D4h = 10, M4h = class {
    constructor(e, t){
        this.host = e, this.feed = t, this.book = new I4h(e.reader, e.rows()), this.pauseSpoken = e.status().parked, this.unwatch = e.watch({
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
        const e = this.feed.owed();
        return e === void 0 ? void 0 : this.requestOf(e);
    }
    get pauseIsOpen() {
        return this.pauseSpoken;
    }
    requestOf(e) {
        return this.book.requestOf(e);
    }
    errandRecorded(e) {
        const t = this.host.status();
        this.book.record({
            errand: e,
            lineId: this.host.newLineId(),
            heardWhenRecorded: this.book.heard,
            sawRunning: !1,
            recordedWhileATurnWasRunning: this.recordedBesideAnEarlierTurn(),
            recordedBeside: {
                turn: t.turn,
                generationId: t.generationId
            },
            recordedAtHeaderEpoch: this.headerEpoch
        });
    }
    busyWith() {
        if (this.host.status().parked || !this.host.submitFollowsTheQueueSetting()) return;
        const e = this.book.typedOpenerOfTheNewestTurn(this.host.rows());
        return e === void 0 || e.trim() === "" ? {
            kind: "running"
        } : {
            kind: "typed",
            request: e
        };
    }
    askRefused() {
        this.host.status().coordinator || (this.pauseEndsAfterThisRefusal = !0);
    }
    errandAccepted(e, t) {
        if (this.disposed || this.host.isGone()) return;
        this.book.accepted(e, t), this.evaluate();
        const n = this.owed;
        if (n?.errand !== e || n.sawRunning || t !== void 0) return;
        const i = this.host.status();
        i.local && i.header === "done" && i.queued.length === 0 && (this.feed.settled({
            landed: void 0,
            closing: {
                kind: "never-started"
            },
            answers: [
                {
                    errand: e,
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
        const e = this.host.status();
        !e.local && !e.coordinator && e.header === "done" && (this.cloudDoneEpoch = this.headerEpoch), this.evaluate();
    }
    turnReplaced() {
        const e = this.owed;
        e !== void 0 && (e.sawRunning = !1), this.evaluate();
    }
    scheduleSettle(e) {
        this.cancelTheSettle(), this.cancelSettle = this.host.clock.setTimer(()=>{
            this.cancelSettle = void 0, this.reportWhatSettled();
        }, e);
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
        const e = this.host.status();
        if (!e.parked && (e.header === "done" || e.header === "in_progress" && (this.owed !== void 0 || this.pauseEndsAfterThisRefusal || !e.coordinator)) ? (this.pauseSpoken = !1, this.pauseEndsAfterThisRefusal = !1) : e.parked && !this.pauseSpoken && (this.pauseSpoken = !0, this.feed.parked()), e.turn === "aborted") this.scheduleSettle(e.abortReason === void 0 ? xzt : 0);
        else if (this.readsSendsMidTurn()) this.settleIsScheduled || this.scheduleSettle(xzt);
        else if (this.turnIsOpen()) this.cancelTheSettle();
        else {
            const t = e.local && this.owed?.sawRunning === !0 && !this.host.reader.eachMessageStandsAlone;
            this.scheduleSettle(t ? 0 : xzt);
        }
    }
    unheard(e) {
        return this.book.unheard(this.host.rows(), e);
    }
    noteTurnSeenRunning() {
        const e = this.owed;
        if (!(e === void 0 || e.sawRunning || this.unheard(e).requestAt < 0)) {
            if (e.recordedWhileATurnWasRunning) {
                if (this.host.turnIsInFlight() && !this.aLaterTurnHasStarted(e)) return;
                e.recordedWhileATurnWasRunning = !1;
            }
            this.host.turnIsInFlight() && (e.sawRunning = !0);
        }
    }
    recordedBesideAnEarlierTurn() {
        const e = this.host.status();
        return this.host.turnIsInFlight() && (!e.local || e.turn !== "generating");
    }
    aLaterTurnHasStarted(e) {
        const { turn: t, generationId: n } = this.host.status();
        return t === "generating" && e.recordedBeside.turn !== "generating" ? !0 : n !== void 0 && n !== e.recordedBeside.generationId;
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
        const e = this.host.reader, t = this.unheard(void 0).span.filter((n)=>e.mayBeSaid(n) || e.isTypedByThem(n));
        if (t.length > 0) try {
            await this.host.loadBodies(t);
        } catch (n) {
            this.host.log.warn("could not load the settled messages", n);
        }
        !this.mayRead() || this.settleIsScheduled && !this.readsSendsMidTurn() || this.handOverTheSpan();
    }
    handOverTheSpan() {
        this.followARenamedAnchor();
        const { host: e } = this, t = e.reader, n = this.owed, i = this.unheard(n);
        if (n !== void 0 && i.requestAt >= 0 && !n.sawRunning && !i.span.slice(i.requestAt + 1).some((J)=>e.isTheAgents(J))) return;
        const r = e.status();
        if (n !== void 0 && i.requestAt >= 0 && !r.local && !r.coordinator && e.turnSignalComesWithTheRows !== !0 && n.recordedAtHeaderEpoch >= this.cloudDoneEpoch) return;
        const s = r.turn === "aborted", o = this.book.indexOfTheLastTurn(i.span), a = s && !t.eachMessageStandsAlone ? i.span.slice(0, Math.max(o, 0)) : i.span, c = (J)=>t.mayBeSaid(J) && !e.bodyIsLoaded(J), l = (J)=>!s && e.sendIsStillLoading(J), u = a.findIndex((J)=>c(J) || l(J));
        if (this.readsSendsMidTurn()) {
            this.sayWhatLanded(i, n, u < 0 ? a.length : u), u >= 0 && this.scheduleSettle(xzt);
            return;
        }
        const h = a.some(l) ? D4h : R4h;
        if (u >= 0 && ++this.bodyLoadTries < h) {
            this.scheduleSettle(xzt);
            return;
        }
        this.bodyLoadTries = 0;
        const p = a.some(c), g = n !== void 0 && i.requestAt >= 0, f = this.landedIn(a);
        if (this.parkedOnItsOwnQuestion(f)) {
            const J = this.book.indexOfTheLastTurn(a), ne = J > 0 ? a.slice(0, J) : [], ee = this.landedIn(ne);
            if (this.book.hearTheHistory(i.rows), ee.length > 0) {
                const se = this.book.answeredBy(ee).filter((re)=>this.book.indexOfRequest(re, {
                        within: ne,
                        transcript: i.rows
                    }) >= 0);
                this.feed.settled({
                    landed: cPo(ee),
                    closing: void 0,
                    answers: se.map(({ errand: re })=>({
                            errand: re,
                            says: "its-turn"
                        }))
                });
            }
            return;
        }
        this.book.hearTheHistory(i.rows);
        const v = (J)=>this.book.indexOfRequest(J, {
                within: i.span,
                transcript: i.rows
            }), b = (J)=>this.book.indexOfRequest(J, {
                within: i.rows,
                transcript: i.rows
            }), y = n === void 0 ? -1 : b(n), T = n !== void 0 && !n.errand.resolved && v(n) < 0 && y >= 0 && y < i.startsAt, E = this.book.requests.filter((J)=>!J.errand.resolved && v(J) >= 0), R = (s ? E.find((J)=>o >= 0 && v(J) === o) : void 0) ?? (s && T && o < 0 ? n : void 0), D = a.slice(i.requestAt + 1), P = D.findIndex((J)=>t.isTypedByThem(J)), N = P < 0 ? D : D.slice(0, P), O = this.landedIn(N);
        let F;
        R !== void 0 ? F = r.abortReason === "error" ? {
            kind: "error"
        } : {
            kind: "stopped",
            stillQueued: r.queued.map((J)=>r9n(J)).filter((J)=>J !== "")
        } : p ? F = {
            kind: "unreadable"
        } : g && O.length === 0 && (F = N.some((J)=>e.isTheAgents(J)) ? {
            kind: "no-reply"
        } : {
            kind: "never-started"
        });
        const H = O.length > 0 && O.every((J)=>J.sentRequest === void 0), $ = o >= 0 ? i.span[o] : void 0, W = $ !== void 0 && t.isHuman($) && !t.isTypedByThem($), G = this.book.requests.filter((J)=>!J.errand.resolved && J.errand.landed.length > 0 && v(J) < 0), q = this.book.answeredBy(f), z = [
            ...E.filter((J)=>R === J || q.includes(J) || J === n && g && (H || F !== void 0)),
            ...T && n !== void 0 && !G.includes(n) && (R === n || H && !W) ? [
                n
            ] : [],
            ...G
        ], X = new Set(this.book.requests.map(b)), Y = i.span.flatMap((J, ne)=>t.isTypedByThem(J) && !X.has(i.startsAt + ne) && i.span.slice(ne + 1).some((ee)=>e.isTheAgents(ee)) ? [
                i.startsAt + ne
            ] : []), Z = Math.max(-1, ...z.map(b), ...Y), K = this.book.requests.filter((J)=>{
            if (J.errand.resolved || z.includes(J)) return !1;
            const ne = b(J);
            return ne >= 0 && ne < Z;
        });
        this.feed.settled({
            landed: f.length > 0 ? cPo(f) : void 0,
            closing: F,
            answers: [
                ...z.map((J)=>({
                        errand: J.errand,
                        says: (J === n ? O.length === 0 : G.includes(J)) ? "the-closing" : "its-turn"
                    })),
                ...K.map(({ errand: J })=>({
                        errand: J,
                        says: "a-whole-turn-closing"
                    }))
            ]
        });
    }
    sayWhatLanded(e, t, n) {
        const i = (a)=>t !== void 0 && (t.errand.landed.length > 0 || a.some((c)=>c.sentRequest === t.errand.request));
        let r = n, s = this.landedIn(e.span.slice(0, r));
        if (e.requestAt >= 0 && e.requestAt < r && !i(s) && (r = e.requestAt, s = this.landedIn(e.span.slice(0, r))), s.length === 0 || this.parkedOnItsOwnQuestion(s)) return;
        this.book.hearTheHistory(e.rows.slice(0, e.startsAt + r));
        const o = this.book.answeredBy(s).filter((a)=>a !== t);
        this.feed.settled({
            landed: cPo(s),
            closing: void 0,
            answers: [
                ...o.map(({ errand: a })=>({
                        errand: a,
                        says: "its-turn"
                    })),
                ...t !== void 0 && i(s) ? [
                    {
                        errand: t.errand,
                        says: "its-turn",
                        turnStillRuns: !0
                    }
                ] : []
            ]
        });
    }
    landedIn(e) {
        return this.book.landedIn({
            within: e,
            transcript: this.host.rows()
        });
    }
    parkedOnItsOwnQuestion(e) {
        const t = this.host.status();
        return t.local || !t.parked ? !1 : t.coordinator ? e.length === 0 || t.pendingInteraction : !0;
    }
};

}
