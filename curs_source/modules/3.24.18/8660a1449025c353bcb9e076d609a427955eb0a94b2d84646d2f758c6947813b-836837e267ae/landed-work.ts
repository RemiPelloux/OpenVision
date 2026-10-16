import { BBk, eMn, grf } from "./Ycg.js";
import { mrf } from "./ports.ts";
import { UTl } from "./tool-results.ts";
import { E } from "./tslib.es6.js";
var frf;
export { frf };
var __wakaru_UBk_initialized = false;
export function UBk() {
if (__wakaru_UBk_initialized) return;
__wakaru_UBk_initialized = true;
"use strict";
E(), mrf(), UTl(), frf = class {
    constructor(t, e, n){
        this.call = t, this.lines = e, this.log = n;
    }
    receiptOwedValue = !1;
    newsOwed = !1;
    heldWork = [];
    toldFromResponse;
    emptyAskUsed = !1;
    finalsApplied = new Set;
    get receiptOwed() {
        return this.receiptOwedValue;
    }
    expectReceipt(t, e) {
        t === this.call.line && (this.receiptOwedValue ||= e.alreadySpoke !== !0);
    }
    sendReceipt(t, e, n) {
        t === this.call.line && (this.expectReceipt(t, e), grf(t, e, n));
    }
    refuseTheReceipt(t, e, n) {
        eMn(t, e, n), this.releaseTheReceiptHold();
    }
    receiptNotComing() {
        this.releaseTheReceiptHold();
    }
    settled({ landed: t, closing: e, answers: n }) {
        const i = e === void 0 ? [] : this.closingLines(e), s = {
            "its-turn": t === void 0 ? i : [
                t,
                ...i
            ],
            "the-closing": i,
            "a-whole-turn-closing": BBk(e) ? i : []
        };
        for (const { errand: o, says: a, turnStillRuns: l = !1 } of n){
            const c = s[a];
            if (l) {
                this.call.errands.handedOver(o, c);
                continue;
            }
            const u = c.length === 0 && (a === "a-whole-turn-closing" || o.landed.length > 0 && !this.newsOwed && this.nothingHandedOverWaits());
            this.call.errands.resolve(o, c, u);
        }
        t !== void 0 && this.publish(t), e?.kind === "never-started" ? this.sayNow(i) : this.publish(i);
    }
    relayFailed(t, e) {
        return t.resolved ? (this.releaseTheReceiptHold(), !1) : (this.call.errands.resolve(t, [
            e
        ]), this.sayNow(e), !0);
    }
    sayNow(t) {
        this.releaseTheReceiptHold(), this.publish(t);
    }
    publish(t) {
        this.hand({
            texts: typeof t == "string" ? [
                t
            ] : t,
            pause: !1
        });
    }
    publishPause() {
        this.hand({
            texts: [
                this.lines.pauseLine
            ],
            pause: !0
        });
    }
    callerSpoke() {
        this.releaseTheReceiptHold();
    }
    landedOnTheWire() {
        this.newsOwed = !0;
    }
    toldByTheReplay(t, e) {
        for (const n of e)this.heldWork = this.heldWork.map((i)=>({
                ...i,
                texts: i.texts.filter((r)=>r !== n)
            })).filter((i)=>i.texts.length > 0), t.retractUnspoken(n);
        this.newsOwed = !0, this.toldFromResponse = t.tellingResponseSerial();
    }
    assistantFinal(t) {
        const e = t.responseSerial === void 0 ? t.itemId : `${t.responseSerial}:${t.itemId}`;
        this.finalsApplied.has(e) || (this.finalsApplied.add(e), this.replyTellsTheResult(t) && (this.call.errands.resultsWereSaid(), this.newsOwed = !1), t.talkedOver !== !0 && this.releaseTheReceiptHold());
    }
    retryEmptyResultAsk(t, e) {
        if (this.call.ended) return;
        const n = this.newsOwed;
        if (this.releaseTheReceiptHold(), !n || this.emptyAskUsed || !e && t !== void 0 && t.trim() !== "") return;
        const i = this.call.errands.untoldLines(), r = t?.trim(), s = r !== void 0 && r !== "" ? r : i?.[0], o = this.call.line;
        if (s === void 0 || s === "" || o === void 0) return;
        const a = i !== void 0 && (r === void 0 || r === "" || r === i[0]) ? i.slice(1).filter((l)=>l !== s) : [];
        this.emptyAskUsed = !0, o.sendWorkLanded(a.length > 0 ? [
            s,
            ...a
        ] : s);
    }
    closingLines(t) {
        const { lines: e } = this;
        switch(t.kind){
            case "stopped":
                return t.stillQueued.length > 0 ? [
                    e.stoppedLine,
                    e.stillQueued(t.stillQueued)
                ] : [
                    e.stoppedLine
                ];
            case "error":
                return [
                    e.errorLine
                ];
            case "unreadable":
                return [
                    e.unreadableLine
                ];
            case "no-reply":
                return [
                    e.noReplyLine
                ];
            case "never-started":
                return [
                    e.agentUnreachableAnswer
                ];
        }
    }
    holdForTheNextLine(t) {
        this.heldWork.unshift(...t.map((e)=>({
                texts: e,
                pause: e[0] === this.lines.pauseLine
            })));
    }
    lineOpened() {
        this.toldFromResponse = void 0, this.finalsApplied.clear(), (this.receiptOwedValue || this.heldWork.length > 0) && this.releaseTheReceiptHold();
    }
    hand(t) {
        if (this.call.ended) return;
        const e = t.texts.filter((s)=>s.length > 0);
        if (e.length === 0) return;
        t.pause || this.dropStalePause();
        const n = this.call.line;
        if (this.receiptOwedValue || n === void 0) {
            this.heldWork.push({
                texts: e,
                pause: t.pause
            });
            return;
        }
        const i = n.sendWorkLanded(e);
        if (i === void 0) return;
        const r = e.reduce((s, o)=>s + o.length, 0);
        this.log.info(i === "async-update" ? `sent async_update.add work_landed (${r} chars). Whether the server accepts the frame is unproven until it answers.` : `sent seeded-tool-pair work_landed (${r} chars).`);
    }
    releaseTheReceiptHold() {
        this.receiptOwedValue = !1, this.dropStalePause();
        for (const t of this.heldWork.splice(0))this.hand(t);
    }
    replyTellsTheResult(t) {
        return t.talkedOver !== !0 && t.heard !== !1 && this.newsOwed && this.nothingHandedOverWaits() && (this.toldFromResponse === void 0 || t.responseSerial === void 0 || t.responseSerial >= this.toldFromResponse);
    }
    get waitsForTheLine() {
        return !this.nothingHandedOverWaits();
    }
    nothingHandedOverWaits() {
        return this.heldWork.length === 0 && this.call.line?.handedOverWorkIsWaiting() !== !0;
    }
    dropStalePause() {
        this.call.held?.isParked() !== !0 && this.dropHeldPause();
    }
    dropHeldPause() {
        this.heldWork = this.heldWork.filter((t)=>!t.pause), this.call.line?.retractUnspoken(this.lines.pauseLine);
    }
};

}
