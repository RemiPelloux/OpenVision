import { QUh } from "./ports.ts";
import { TPo } from "./tool-results.ts";
import { x } from "./tslib.es6.js";
function wm_(e) {
    return e?.kind === "no-reply" || e?.kind === "unreadable";
}
function Mzt(e, t, n) {
    e.sendToolResult({
        callId: t.callId,
        output: JSON.stringify({
            error: n
        })
    });
}
function JUh(e, t, n) {
    const i = JSON.stringify(n.output);
    if (t.alreadySpoke === !0) {
        e.sendToolResult({
            callId: t.callId,
            output: i,
            speak: !1
        });
        return;
    }
    e.sendToolResult(n.instructions === void 0 ? {
        callId: t.callId,
        output: i
    } : {
        callId: t.callId,
        output: i,
        instructions: n.instructions
    });
}
var e8h;
export { JUh, Mzt, e8h, wm_ };
var __wakaru_Cm__initialized = false;
export function Cm_() {
if (__wakaru_Cm__initialized) return;
__wakaru_Cm__initialized = true;
"use strict";
x(), QUh(), TPo(), e8h = class {
    constructor(e, t, n){
        this.call = e, this.lines = t, this.log = n;
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
    expectReceipt(e, t) {
        e === this.call.line && (this.receiptOwedValue ||= t.alreadySpoke !== !0);
    }
    sendReceipt(e, t, n) {
        e === this.call.line && (this.expectReceipt(e, t), JUh(e, t, n));
    }
    refuseTheReceipt(e, t, n) {
        Mzt(e, t, n), this.releaseTheReceiptHold();
    }
    receiptNotComing() {
        this.releaseTheReceiptHold();
    }
    settled({ landed: e, closing: t, answers: n }) {
        const i = t === void 0 ? [] : this.closingLines(t), s = {
            "its-turn": e === void 0 ? i : [
                e,
                ...i
            ],
            "the-closing": i,
            "a-whole-turn-closing": wm_(t) ? i : []
        };
        for (const { errand: o, says: a, turnStillRuns: c = !1 } of n){
            const l = s[a];
            if (c) {
                this.call.errands.handedOver(o, l);
                continue;
            }
            const u = l.length === 0 && (a === "a-whole-turn-closing" || o.landed.length > 0 && !this.newsOwed && this.nothingHandedOverWaits());
            this.call.errands.resolve(o, l, u);
        }
        e !== void 0 && this.publish(e), t?.kind === "never-started" ? this.sayNow(i) : this.publish(i);
    }
    relayFailed(e, t) {
        return e.resolved ? (this.releaseTheReceiptHold(), !1) : (this.call.errands.resolve(e, [
            t
        ]), this.sayNow(t), !0);
    }
    sayNow(e) {
        this.releaseTheReceiptHold(), this.publish(e);
    }
    publish(e) {
        this.hand({
            texts: typeof e == "string" ? [
                e
            ] : e,
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
    toldByTheReplay(e, t) {
        for (const n of t)this.heldWork = this.heldWork.map((i)=>({
                ...i,
                texts: i.texts.filter((r)=>r !== n)
            })).filter((i)=>i.texts.length > 0), e.retractUnspoken(n);
        this.newsOwed = !0, this.toldFromResponse = e.tellingResponseSerial();
    }
    assistantFinal(e) {
        const t = e.responseSerial === void 0 ? e.itemId : `${e.responseSerial}:${e.itemId}`;
        this.finalsApplied.has(t) || (this.finalsApplied.add(t), this.replyTellsTheResult(e) && (this.call.errands.resultsWereSaid(), this.newsOwed = !1), e.talkedOver !== !0 && this.releaseTheReceiptHold());
    }
    retryEmptyResultAsk(e, t) {
        if (this.call.ended) return;
        const n = this.newsOwed;
        if (this.releaseTheReceiptHold(), !n || this.emptyAskUsed || !t && e !== void 0 && e.trim() !== "") return;
        const i = this.call.errands.untoldLines(), r = e?.trim(), s = r !== void 0 && r !== "" ? r : i?.[0], o = this.call.line;
        if (s === void 0 || s === "" || o === void 0) return;
        const a = i !== void 0 && (r === void 0 || r === "" || r === i[0]) ? i.slice(1).filter((c)=>c !== s) : [];
        this.emptyAskUsed = !0, o.sendWorkLanded(a.length > 0 ? [
            s,
            ...a
        ] : s);
    }
    closingLines(e) {
        const { lines: t } = this;
        switch(e.kind){
            case "stopped":
                return e.stillQueued.length > 0 ? [
                    t.stoppedLine,
                    t.stillQueued(e.stillQueued)
                ] : [
                    t.stoppedLine
                ];
            case "error":
                return [
                    t.errorLine
                ];
            case "unreadable":
                return [
                    t.unreadableLine
                ];
            case "no-reply":
                return [
                    t.noReplyLine
                ];
            case "never-started":
                return [
                    t.agentUnreachableAnswer
                ];
        }
    }
    holdForTheNextLine(e) {
        this.heldWork.unshift(...e.map((t)=>({
                texts: t,
                pause: t[0] === this.lines.pauseLine
            })));
    }
    lineOpened() {
        this.toldFromResponse = void 0, this.finalsApplied.clear(), (this.receiptOwedValue || this.heldWork.length > 0) && this.releaseTheReceiptHold();
    }
    hand(e) {
        if (this.call.ended) return;
        const t = e.texts.filter((s)=>s.length > 0);
        if (t.length === 0) return;
        e.pause || this.dropStalePause();
        const n = this.call.line;
        if (this.receiptOwedValue || n === void 0) {
            this.heldWork.push({
                texts: t,
                pause: e.pause
            });
            return;
        }
        const i = n.sendWorkLanded(t);
        if (i === void 0) return;
        const r = t.reduce((s, o)=>s + o.length, 0);
        this.log.info(i === "async-update" ? `sent async_update.add work_landed (${r} chars). Whether the server accepts the frame is unproven until it answers.` : `sent seeded-tool-pair work_landed (${r} chars).`);
    }
    releaseTheReceiptHold() {
        this.receiptOwedValue = !1, this.dropStalePause();
        for (const e of this.heldWork.splice(0))this.hand(e);
    }
    replyTellsTheResult(e) {
        return e.talkedOver !== !0 && e.heard !== !1 && this.newsOwed && this.nothingHandedOverWaits() && (this.toldFromResponse === void 0 || e.responseSerial === void 0 || e.responseSerial >= this.toldFromResponse);
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
        this.heldWork = this.heldWork.filter((e)=>!e.pause), this.call.line?.retractUnspoken(this.lines.pauseLine);
    }
};

}
