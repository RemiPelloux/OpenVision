import { A9k, DBk, HBk, Ktf, OBk, WBk, a9k, aBk, aPi, cTl, eMn, f9k, fBk, yBk } from "./Ycg.js";
import { NBk, drf } from "./call-report.ts";
import { uBk } from "./call-search-record.ts";
import { Atf, Rtf, ZCl, lPi } from "./connect-report.ts";
import { cnf, lnf } from "./connect-telemetry.ts";
import { Zif } from "./conversation-search_2.ts";
import { FTl, OTl } from "./end-the-call.ts";
import { LBk, hrf } from "./errands.ts";
import { FBk, prf } from "./idle-hang-up.ts";
import { UBk, frf } from "./landed-work.ts";
import { mnf } from "./line-plan.ts";
import { uPi } from "./protocol-fault.ts";
import { YPn } from "./realtime-wire.ts";
import { xTl } from "./recent-conversation.ts";
import { brf, jBk } from "./record-writer.ts";
import { dTl, hPi } from "./redial.ts";
import { rrf, srf } from "./search-conversations.ts";
import { efs, tfs } from "./send-task.ts";
import { $Bk, yrf } from "./send-task_2.ts";
import { BTl, nfs } from "./stay-silent.ts";
import { jgs, nTl, snf } from "./telemetry.ts";
import { Die, Lgs, Nie, TTe, h0 } from "./tool-names.ts";
import { UTl } from "./tool-results.ts";
import { LTl, Qif } from "./tool-runner.ts";
import { E } from "./tslib.es6.js";
var Srf, krf, wrf, Crf, Trf;
export { Crf, Srf, Trf, krf, wrf };
var __wakaru_GBk_initialized = false;
export function GBk() {
if (__wakaru_GBk_initialized) return;
__wakaru_GBk_initialized = true;
"use strict";
E(), uBk(), Zif(), xTl(), LTl(), FTl(), srf(), tfs(), BTl(), mnf(), uPi(), Nie(), dTl(), YPn(), cnf(), nTl(), lPi(), NBk(), LBk(), FBk(), UBk(), jBk(), $Bk(), UTl(), Srf = 1500, krf = 3e3, wrf = 400, Crf = 3e4, Trf = class {
    constructor(t, e, n, i, r){
        this.host = n, this.ports = i, this.owner = r, this.agentValue = t, this.tally = new drf(i.clock), this.telemetry = new snf({
            callId: e.callId,
            clock: i.clock,
            emit: (o)=>i.telemetry(o)
        }), this.connectTelemetry = new lnf((o)=>i.telemetry(o), {
            now: ()=>i.clock.now(),
            schedule: (o, a)=>({
                    dispose: i.clock.setTimer(a, o)
                })
        }), this.connectTelemetry.beginConnecting(e.callId);
        const s = [
            new rrf(async (o)=>yBk(await this.searchRecord(), o, {
                    nowMs: this.ports.clock.now()
                })),
            this.staySilent,
            new OTl
        ];
        this.tools = new Qif(s), this.descriptors = [
            efs.definition,
            ...s.map((o)=>o.definition)
        ].map((o)=>o.descriptor), this.errands = new hrf, this.work = new frf(this, i.lines, i.log), this.writer = new brf(e, {
            clock: i.clock,
            records: i.records,
            anchor: (o)=>this.held?.anchor(o) ?? o
        }), this.sendTask = new yrf(this, i), this.writer.stamp();
    }
    ended = !1;
    signedByTheNextAccount = !1;
    held;
    errands;
    feed;
    work;
    writer;
    lineValue;
    agentValue;
    callerSpeaking = !1;
    tools;
    staySilent = new nfs;
    sendTask;
    descriptors;
    tally;
    telemetry;
    connectTelemetry;
    cancelUsageTick;
    idleHangUp;
    idleHangUpMs = 0;
    lineGeneration = 0;
    planOf;
    conversationId;
    lineConversationId;
    conversationNamed = new Map;
    redialAttempt = 0;
    cancelRedialWait;
    cancelDialTimeout;
    dropped;
    sayingGoodbye = !1;
    lineCanChime = !1;
    toolAnswersAwaitingALine = [];
    get record() {
        return this.writer.record;
    }
    get agent() {
        return this.agentValue;
    }
    get line() {
        return this.lineValue;
    }
    moveTo(t) {
        this.agentValue.agentId === t.fromAgentId && (this.agentValue = {
            ...this.agentValue,
            agentId: t.toAgentId
        }, this.writer.update({
            agentId: t.toAgentId
        }));
    }
    async connect() {
        let t;
        this.tally.mintStarted();
        try {
            let i;
            ({ credential: t, idleSeconds: i } = await this.host.mint(this.agent)), this.idleHangUpMs = OBk(i), this.connectTelemetry.noteMintOk();
        } catch (i) {
            throw this.connectTelemetry.noteMintFailed(i), i;
        } finally{
            this.tally.minted();
        }
        if (this.ended) return;
        this.tally.stage = "holding";
        const e = await this.host.holdAgent(this.agent);
        if (this.tally.stage = "opening", this.ended) return;
        this.held = e;
        const n = await this.readRecent();
        this.ended || (this.planOf = (i)=>{
            const r = f9k(this.ports.words, this.descriptors, i.language, this.host.userName);
            return {
                ...r,
                instructions: fBk({
                    ...this.ports.words,
                    instructions: r.instructions,
                    messages: n,
                    clock: {
                        now: new Date(this.record.startedAtMs)
                    }
                })
            };
        }, this.openLine(t, void 0));
    }
    openLine(t, e) {
        const n = this.planOf;
        if (n === void 0) return;
        const i = this.lineGeneration, r = ()=>this.isCurrent(i), s = (l)=>(...c)=>{
                r() && l(...c);
            }, { settings: o, muted: a } = this.owner.lineOpensWith();
        this.lineValue = this.host.open({
            credential: t,
            plan: n,
            settings: o,
            ...e === void 0 ? {} : {
                redial: e
            },
            handlers: {
                onConnectEdge: s((l)=>this.connectTelemetry.noteTransportEdge(this.record.callId, l)),
                onConversationCreated: s((l)=>{
                    this.conversationId = l, this.lineConversationId = l, this.conversationNamed.set(i, l), this.connectTelemetry.noteConversationCreated(this.record.callId, l);
                }),
                onCallAudible: s(()=>{
                    if (this.lineCanChime = !0, this.countTheDrop(!0), this.connectTelemetry.noteAudible(), this.cancelDialTimeout?.(), this.redialAttempt = 0, this.record.connectedAtMs !== void 0) {
                        this.idleHangUp?.resume();
                        const c = this.lineValue;
                        c !== void 0 && this.answerToolsAwaitingALine(c), this.owner.redialed();
                        return;
                    }
                    this.armFeed(), this.armIdleHangUp();
                    const l = this.ports.clock.now();
                    this.writer.update({
                        connectedAtMs: l
                    }), this.writer.writeSoon(), this.telemetry.connected(t.model), this.armUsageTick(), this.owner.audible(l);
                }),
                onClosed: s((l)=>{
                    if (l.recoverable !== !0) {
                        this.closeWith(l);
                        return;
                    }
                    if (this.lineCanChime = !1, this.sayingGoodbye) {
                        this.owner.hangUp();
                        return;
                    }
                    this.ports.log.warn(`realtime line dropped, redialing: code=${l.code} reason=${l.reason || "none"} live=${this.record.connectedAtMs !== void 0}`), this.holdTheLine(l);
                }),
                onCallerSpeechStarted: s(({ bargedIn: l })=>{
                    this.telemetry.speechStarted(), l && this.tally.interrupted(), this.idleHangUp?.restart(), this.callerSpeaking = !0, this.work.callerSpoke();
                }),
                onCallerSpeechStopped: s(()=>this.telemetry.speechStopped()),
                onAudioPlayed: s(()=>this.telemetry.audioReceived()),
                onTranscriptTurn: s((l)=>this.recordTranscript(l)),
                onToolCall: s((l)=>this.dispatchTool(l)),
                onAsyncUpdateRejected: (l)=>{
                    this.ports.log.warn(`async_update.add work_landed rejected by server: ${l}`);
                },
                onWorkLandedOnWire: s(()=>this.work.landedOnTheWire()),
                onAskSettled: ({ settlement: l, carries: c })=>{
                    this.ports.log.info(`response ask ${l} (${c})`), (this.ended ? l === "dropped_call_closed" && !this.signedByTheNextAccount : r() || this.dropped !== void 0) && this.ports.telemetry({
                        kind: "voice_call_delivery",
                        settlement: l,
                        carries: c,
                        callId: this.record.callId
                    });
                },
                onLostSpeechStopped: ()=>{
                    this.ports.log.info("lost speech_stopped stopgap");
                },
                onEmptyAskedReply: s(({ text: l, askWasResult: c })=>this.work.retryEmptyResultAsk(l, c)),
                onProtocolFault: s((l)=>this.telemetry.fault({
                        kind: "protocol",
                        ...l
                    })),
                onWireError: s((l)=>{
                    this.tally.wireError(), this.ports.log.warn(`realtime wire error: ${l}`);
                })
            }
        }), a && this.lineValue.setMuted(!0), this.work.lineOpened();
    }
    isCurrent(t) {
        return !this.ended && t === this.lineGeneration;
    }
    closeWith(t) {
        this.countTheDrop(!1), this.endWith(t, this.faultDetail(t));
    }
    endWithTheDrop(t) {
        this.dropped = void 0, this.endWith(t, {
            ...t.detail,
            fault_recovered: !1
        });
    }
    endWith(t, e) {
        cTl(t) === "ended" && this.ports.log.warn(`realtime line closed cleanly: code=${t.code} reason=${t.reason || "none"} ${JSON.stringify(e)}`), this.owner.closed({
            ...t,
            detail: e
        });
    }
    faultDetail(t) {
        return {
            ...t.detail,
            fault_send_task_owed: this.errands.owed() !== void 0,
            fault_agent_running: this.held?.submitTakesTheQueueSetting() === !0,
            fault_news_owed: this.work.newsOwed
        };
    }
    countTheDrop(t) {
        const e = this.dropped;
        e !== void 0 && (this.dropped = void 0, this.telemetry.fault({
            ...Ktf(e.code, e.closeClean),
            detail: {
                ...e.detail,
                fault_recovered: t
            }
        }));
    }
    recordTheDrop(t) {
        this.dropped = {
            ...t,
            detail: this.faultDetail(t)
        };
    }
    holdTheLine(t) {
        this.letGoOfTheLine(), this.dropped === void 0 && t !== void 0 && this.recordTheDrop(t);
        const e = this.dropped;
        if (e === void 0) return;
        const n = this.record.connectedAtMs !== void 0;
        if (this.redialAttempt >= (n ? hPi.maxAttempts : 1)) {
            t === void 0 ? this.endWithTheDrop(e) : this.closeWith(t);
            return;
        }
        const i = this.lineGeneration, r = A9k(this.redialAttempt);
        if (this.redialAttempt += 1, r === 0) {
            this.redial(i);
            return;
        }
        this.cancelRedialWait = this.ports.clock.setTimer(()=>void this.redial(i), r);
    }
    async redial(t) {
        if (!this.isCurrent(t)) return;
        this.tally.reconnected(), this.connectTelemetry.noteAbandoned(), this.connectTelemetry.beginConnecting(this.record.callId), this.cancelDialTimeout = this.ports.clock.setTimer(()=>{
            if (this.isCurrent(t)) {
                this.ports.log.warn(`realtime redial timed out: attempt=${this.redialAttempt} after=${hPi.dialTimeoutMs}ms`), this.connectTelemetry.noteAbandoned("DialTimeout");
                const n = this.lineValue;
                this.holdTheLine(), n?.close("superseded");
            }
        }, hPi.dialTimeoutMs);
        const e = await this.mintAgain(t);
        if (e !== "stale") {
            if (typeof e == "object" && "refused" in e) {
                this.countTheDrop(!1), this.owner.mintRefused(e.refused);
                return;
            }
            if (e === void 0) {
                this.holdTheLine();
                return;
            }
            this.openLine(e, this.record.connectedAtMs === void 0 ? void 0 : {
                conversationId: this.conversationId
            });
        }
    }
    async mintAgain(t) {
        try {
            const { credential: e } = await this.host.mint(this.agent);
            return this.connectTelemetry.noteMintOk(), this.isCurrent(t) ? e : "stale";
        } catch (e) {
            return this.connectTelemetry.noteMintFailed(e), this.isCurrent(t) ? (this.ports.log.warn("realtime line mint failed dialing again", e), this.ports.mintIsFinal(e) ? {
                refused: e
            } : void 0) : "stale";
        }
    }
    letGoOfTheLine() {
        const t = this.lineValue;
        return this.lineCanChime = !1, this.idleHangUp?.pause(), this.work.holdForTheNextLine(t?.takeHeldWork() ?? []), this.lineValue = void 0, this.lineConversationId = void 0, this.lineGeneration += 1, this.cancelRedialWait?.(), this.cancelDialTimeout?.(), t;
    }
    end(t) {
        this.ended = !0, this.signedByTheNextAccount = t.kind === "hung_up" && t.by === "account_changed", this.toolAnswersAwaitingALine.length = 0, this.record.connectedAtMs !== void 0 && !this.lineCanChime && this.host.chimeDisconnect?.(), this.cancelRedialWait?.(), this.cancelDialTimeout?.(), this.cancelUsageTick?.(), this.idleHangUp?.dispose(), this.feed?.dispose(), this.feed = void 0, this.writer.fillAnchor(), this.held = void 0, this.host.end(), this.writer.finish();
    }
    report(t) {
        if (this.signedByTheNextAccount) {
            this.connectTelemetry.dispose();
            return;
        }
        t.kind === "hung_up" && this.countTheDrop(!1), this.connectTelemetry.noteAbandoned(), DBk(this.telemetry, this.tally.report(this.record, t));
    }
    uiOpened(t) {
        this.telemetry.uiOpened(t);
    }
    relayUnreachable(t) {
        this.reportExchangeFault(Atf, h0, t);
    }
    reportExchangeFault(t, e, { errorClass: n, failureCode: i }) {
        this.telemetry.fault({
            kind: Rtf[t]
        });
        const r = jgs(this.conversationId);
        this.ports.telemetry({
            kind: "voice_call_fault",
            fault: t,
            tool: a9k(e),
            callId: this.record.callId,
            ...r === void 0 ? {} : {
                realtimeConversationId: r
            },
            errorClass: n,
            ...i === void 0 ? {} : {
                failureCode: i
            }
        });
    }
    dispatchTool(t) {
        const e = this.lineValue;
        if (e === void 0 || this.ended) return;
        this.tally.toolCall(t.name), this.idleHangUp?.restart();
        const n = {
            agentId: this.agentValue.agentId,
            callId: t.callId,
            name: t.name,
            input: HBk(t.arguments),
            line: this.lineOf(t.alreadySpoke === !0)
        };
        if (t.name === h0) {
            this.sendTask.handOver(e, t);
            return;
        }
        if (t.name === TTe) {
            this.sayingGoodbye = !0, e.sendToolResult({
                callId: t.callId,
                output: "{}",
                speak: !1
            }), this.tools.callTool(n).catch((o)=>{
                this.ports.log.error("hang-up failed", o), this.ended || this.reportExchangeFault(ZCl, t.name, {
                    errorClass: aPi(o)
                });
            }), e.whenSpokenAudioEnds().then(()=>{
                this.ended || this.owner.hangUp();
            });
            return;
        }
        const i = t.name === Die && nfs.definition.input.safeParse(n.input).success, r = this.lineGeneration;
        (i ? this.staySilent.execute({}, n).then((o)=>(a)=>this.answerStaySilent(a, t.callId, o)) : this.tools.callTool(n).then((o)=>(a)=>a.sendToolResult({
                    callId: t.callId,
                    output: JSON.stringify(o.output)
                }))).then((o)=>this.answerTool(e, r, o), (o)=>{
            this.ports.log.error(`${t.name} failed`, o), this.ended || (this.reportExchangeFault(ZCl, t.name, {
                errorClass: aPi(o)
            }), this.answerTool(e, r, (a)=>eMn(a, t, this.ports.lines.toolFailedError)));
        });
    }
    answerTool(t, e, n) {
        if (this.ended) return;
        const i = this.lineValue;
        if (i === t) {
            n(i);
            return;
        }
        const r = this.conversationNamed.get(e);
        if (r !== void 0) {
            if (i !== void 0 && this.lineCanChime) {
                this.lineConversationId === r && n(i);
                return;
            }
            this.toolAnswersAwaitingALine.push({
                conversationId: r,
                send: n
            });
        }
    }
    answerToolsAwaitingALine(t) {
        for (const { conversationId: e, send: n } of this.toolAnswersAwaitingALine.splice(0))e === this.lineConversationId && n(t);
    }
    readWrittenLines(t) {
        const e = this.held;
        return e === void 0 || e.isGone() ? Promise.reject(new Error("agent not held")) : e.readWrittenLines(t);
    }
    async readRecent() {
        try {
            const t = this.readWrittenLines(Lgs).then(WBk);
            return await this.within(t, Srf, ()=>{
                this.ended || this.ports.log.warn("recent conversation read timed out");
            }) ?? [];
        } catch (t) {
            return this.ended || this.ports.log.warn("recent conversation unread", t), [];
        }
    }
    async searchRecord() {
        const t = await this.within(this.readWrittenLines(wrf), krf);
        if (t === void 0) throw new Error("search chat read timed out");
        return aBk(t, this.ports.records.read(this.agentValue.agentId, this.record.callId));
    }
    within(t, e, n) {
        let i;
        return Promise.race([
            t.finally(()=>i?.()),
            new Promise((r)=>{
                i = this.ports.clock.setTimer(()=>{
                    r(void 0), n?.();
                }, e);
            })
        ]);
    }
    answerStaySilent(t, e, n) {
        if (n.plan === "silent" && this.telemetry.speechUnanswered(), n.plan === "spoken") {
            t.sendToolResult({
                callId: e,
                output: JSON.stringify({
                    error: n.error
                }),
                instructions: n.error
            });
            return;
        }
        t.sendToolResult({
            callId: e,
            output: "{}",
            speak: !1
        });
    }
    lineOf(t) {
        const e = this.record.turns.at(-1);
        return {
            theyJustTalked: this.callerSpeaking || e?.speaker === "user",
            newsOwed: this.work.newsOwed,
            receiptOwed: this.work.receiptOwed,
            alreadySpokeThisTurn: t
        };
    }
    armFeed() {
        const t = this.held;
        this.feed !== void 0 || t === void 0 || t.isGone() || (this.feed = t.listen({
            parked: ()=>{
                this.idleHangUp?.restart(), this.errands.parkedAgain(), this.work.publishPause();
            },
            settled: (e)=>{
                this.idleHangUp?.restart(), this.work.settled(e);
            },
            owed: ()=>this.errands.owed()
        }));
    }
    armUsageTick() {
        this.cancelUsageTick = this.ports.clock.setTimer(()=>{
            this.telemetry.tick(), this.armUsageTick();
        }, Crf);
    }
    armIdleHangUp() {
        this.idleHangUp = new prf(this.ports.clock, this.idleHangUpMs, ()=>this.idleHangUpWaitsOnWork(), ()=>this.owner.idleTimedOut()), this.idleHangUp.restart();
    }
    idleHangUpWaitsOnWork() {
        return this.held?.isParked() === !0 ? !1 : this.errands.owed() !== void 0 || this.work.newsOwed || this.work.waitsForTheLine || this.held?.submitTakesTheQueueSetting() === !0;
    }
    recordTranscript(t) {
        if (this.ended || this.record.connectedAtMs === void 0) return;
        if (t.speaker === "user" && this.idleHangUp?.restart(), t.speaker === "assistant" && t.talkedOver !== !0 && (this.callerSpeaking = !1), t.speaker === "assistant" && t.final === !0 && t.text.trim() !== "") {
            this.idleHangUp?.restart();
            const s = this.lineGeneration;
            this.lineValue?.whenSpokenAudioEnds().then(()=>{
                this.isCurrent(s) && this.idleHangUp?.restart();
            }), this.work.assistantFinal(t);
        }
        const e = {
            speaker: t.speaker,
            text: t.text,
            itemId: t.itemId
        }, n = this.record.turns, i = n.findLastIndex((s)=>s.itemId === t.itemId && s.speaker === t.speaker);
        if (i >= 0 && n[i]?.text === t.text) return;
        const r = i >= 0 ? n.with(i, e) : [
            ...n,
            e
        ];
        this.writer.setTurns(r, i >= 0 ? i : r.length - 1), this.owner.turnsChanged(r);
    }
};

}
