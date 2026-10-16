import { Hrf, Stf, a8k, aPi, c8k, d8k, jrf, k9k, l8k, o8k, qTl, s8k, u8k, w9k, x9k } from "./Ycg.js";
import { _nf, ynf } from "./chime.ts";
import { lPi } from "./connect-report.ts";
import { Snf, knf } from "./item-truncate.ts";
import { DIt, UVe } from "./nudge-reply.ts";
import { Frf, t8k } from "./playback-gate.ts";
import { YPn } from "./realtime-wire.ts";
import { dTl, uTl } from "./redial.ts";
import { hTl, xnf } from "./response-gate.ts";
import { KPn, cPi } from "./seeded-nudge.ts";
import { E } from "./tslib.es6.js";
import { Pnf, Rnf } from "./user-first-grace.ts";
import { Dgs, iPi, zPn } from "./voice-settings.ts";
var Wrf, Klt, Grf, iMn, rMn, qrf, zrf, Vrf, Krf;
export { Grf, Klt, Krf, Vrf, Wrf, iMn, qrf, rMn, zrf };
var __wakaru_h8k_initialized = false;
export function h8k() {
if (__wakaru_h8k_initialized) return;
__wakaru_h8k_initialized = true;
"use strict";
E(), Dgs(), lPi(), DIt(), ynf(), knf(), t8k(), YPn(), dTl(), xnf(), cPi(), Pnf(), jrf(), Wrf = "wss://api.x.ai/", Klt = 24e3, Grf = 2048, iMn = 3e3, rMn = 400, qrf = .02, zrf = 15e3, Vrf = 3e4, Krf = class {
    constructor(t){
        this.args = t, this.resumed = t.redial?.conversationId === void 0 ? !1 : void 0, this.workLandedWire = t.nudgeWire ?? "async-update", this.settings = t.settings ?? zPn, this.greetingGrace = new Rnf({
            schedule: (e, n)=>{
                const i = setTimeout(n, e);
                return ()=>clearTimeout(i);
            },
            onFire: ()=>{
                this.gate.callHasHadAResponse() || this.speakGreeting();
            }
        }), this.socket = new WebSocket(o8k(t.credential, t.redial?.conversationId), [
            `xai-client-secret.${t.credential.clientSecret}`
        ]), this.responses = new hTl({
            line: ()=>({
                    ...this.line(),
                    callerIsSpeaking: this.gate.callerIsSpeaking()
                }),
            send: (e)=>this.sendResponseCreate(e),
            onAskSettled: (e)=>this.args.handlers.onAskSettled?.(e)
        }), this.socket.addEventListener("open", ()=>{
            t.handlers.onConnectEdge?.({
                phase: "socket_open"
            }), this.invite();
        }), this.socket.addEventListener("message", (e)=>this.onMessage(e.data)), this.socket.addEventListener("error", ()=>{
            t.handlers.onConnectEdge?.({
                phase: "socket_error",
                errorClass: "WebSocketError"
            }), this.sawSocketError = !0;
        }), this.socket.addEventListener("close", (e)=>{
            t.handlers.onConnectEdge?.({
                phase: "socket_close",
                closeCode: e.code,
                closeClean: e.wasClean
            }), this.finish({
                closeClean: e.wasClean,
                code: e.code,
                reason: e.reason || (this.sawSocketError ? "socket_error" : ""),
                detail: this.lastFrames(this.sawSocketError ? "error" : "close"),
                recoverable: x9k(e.code, e.wasClean)
            });
        }), t.signal?.addEventListener("abort", ()=>this.close(), {
            once: !0
        }), this.startCapture();
    }
    socket;
    gate = new Frf;
    muted = !1;
    finished = !1;
    audible = !1;
    captureReady = !1;
    sessionReady = !1;
    context;
    stream;
    processor;
    speakerTap;
    playbackCursor = 0;
    scheduled = new Set;
    heardSpans = new Map;
    cutsOwed = [];
    responseEnded = [];
    asyncUpdateResponse = !1;
    asyncUpdateCutAwaitingGateEnd = !1;
    ignoreOneAsyncUpdateEnd = !1;
    ignoreAsyncUpdateEndResponseId;
    playbackDrains = new Set;
    settings;
    greetingGrace;
    responses;
    heldWorkLanded = [];
    quietRelease;
    quietReleaseKind;
    micLoudAt = -1;
    micLoudSince = -1;
    playedAudioThisResponse = !1;
    responseSerialValue = 0;
    assistantItemSerial = new Map;
    responsePlayedAudio = new Map;
    askedThisResponse = !1;
    carriesAskThisResponse = !1;
    carriedAskText;
    carriedAskTexts;
    thisAskText;
    thisAskTexts;
    carriedAskIsResult = !1;
    thisAskIsResult = !1;
    returnedUnheard = new Set;
    spokeWordsThisResponse = !1;
    sawToolThisResponse = !1;
    toolAnswersOwed = 0;
    pendingWorkLanded = new Map;
    acceptedPendingWorkLanded = new Set;
    workLandedWire;
    workLandedSeq = 0;
    assistantText = new Map;
    assistantDeltas = new Map;
    closedAssistant = new Set;
    sealedAssistantItems = new Set;
    supersededAssistantItems = new Set;
    openResponseId;
    sealedResponseIds = new Set;
    openedAssistantItems = new Set;
    callerTookAssistantTranscript = !1;
    completedCallerItems = new Set;
    callerText = new Map;
    lastIn;
    lastOut;
    lastInControl;
    lastOutControl;
    liveUpdates = 0;
    lastLiveUpdateAtMs;
    conversationId;
    resumed;
    sawSocketError = !1;
    lineAudioValue;
    setMuted(t) {
        this.muted = t, t && (this.micLoudAt = -1);
    }
    lineAudio() {
        if (!(this.context === void 0 || this.stream === void 0)) {
            if (this.speakerTap === void 0) {
                this.speakerTap = this.context.createMediaStreamDestination();
                for (const t of this.scheduled)t.connect(this.speakerTap);
            }
            return this.lineAudioValue ??= {
                microphone: this.stream,
                speaker: this.speakerTap.stream
            }, this.lineAudioValue;
        }
    }
    updateVoiceSettings(t) {
        const e = Stf(t, this.settings);
        this.settings = t, !(e || this.socket.readyState !== WebSocket.OPEN) && this.send(this.sessionUpdateFrame());
    }
    sendToolResult(t) {
        const e = this.toolAnswersOwed > 0;
        this.send({
            type: "conversation.item.create",
            item: {
                type: "function_call_output",
                call_id: t.callId,
                output: t.output
            }
        }), t.speak !== !1 && (t.landed !== void 0 && (this.carriedAskText = t.landed[0], this.carriedAskTexts = t.landed, this.carriedAskIsResult = !0), this.responses.ask({
            deliversNudgeId: t.landed === void 0 ? null : t.callId,
            instructions: t.instructions ?? null,
            isAResult: t.landed !== void 0
        })), e && (this.toolAnswersOwed -= 1, this.toolAnswersOwed === 0 && this.responses.speechEnded()), this.releaseHeldWorkLanded();
    }
    sendWorkLanded(t) {
        const e = (typeof t == "string" ? [
            t
        ] : t).map((n)=>n.slice(0, UVe).trim()).filter((n)=>n.length > 0);
        if (!(e.length === 0 || this.finished)) return this.heldWorkLanded.push(e), this.releaseHeldWorkLanded(), this.workLandedWire;
    }
    handedOverWorkIsWaiting() {
        return this.heldWorkLanded.length > 0;
    }
    tellingResponseSerial() {
        return this.thisAskIsResult ? this.responseSerialValue : this.responseSerialValue + 1;
    }
    takeHeldWork() {
        return this.heldWorkLanded.splice(0);
    }
    retractUnspoken(t) {
        const e = t.slice(0, UVe).trim();
        for(let n = this.heldWorkLanded.length - 1; n >= 0; n--)this.heldWorkLanded[n]?.[0] === e && this.heldWorkLanded.splice(n, 1);
    }
    armQuietRelease(t, e) {
        this.clearQuietRelease(), this.quietReleaseKind = e, this.quietRelease = setTimeout(()=>{
            if (this.quietRelease = void 0, this.quietReleaseKind = void 0, !this.finished) {
                if (e === "lost") {
                    if (!this.gate.callerIsSpeaking()) return;
                    this.gate.noteCallerQuietStopgap(), this.endCutAsyncUpdate(), this.args.handlers.onLostSpeechStopped?.();
                }
                this.responses.speechEnded(), this.releaseHeldWorkLanded();
            }
        }, t);
    }
    clearQuietRelease() {
        this.quietRelease !== void 0 && (clearTimeout(this.quietRelease), this.quietRelease = void 0, this.quietReleaseKind = void 0);
    }
    noteLocalMic(t) {
        if (this.muted || !a8k(t)) return;
        const e = Date.now();
        if ((this.micLoudAt < 0 || e - this.micLoudAt >= rMn) && (this.micLoudSince = e), this.micLoudAt = e, this.quietRelease === void 0) return;
        if (this.quietReleaseKind === "lost") {
            this.armQuietRelease(iMn, "lost");
            return;
        }
        if (!this.localMicHoldsTheLine()) return;
        const n = iMn - (e - this.micLoudSince);
        this.armQuietRelease(Math.min(rMn, Math.max(0, n)), "defer");
    }
    localMicHoldsTheLine() {
        const t = Date.now();
        return this.micLoudAt >= 0 && t - this.micLoudAt < rMn && t - this.micLoudSince < iMn;
    }
    endCutAsyncUpdate() {
        this.asyncUpdateCutAwaitingGateEnd && (this.asyncUpdateCutAwaitingGateEnd = !1, this.ignoreOneAsyncUpdateEnd = !0, this.ignoreAsyncUpdateEndResponseId = this.openResponseId, this.responses.responseEnded(this.gate.callerTookTheResponse()), this.reseedCutPendingWorkLanded());
    }
    releaseHeldWorkLanded() {
        if (this.heldWorkLanded.length === 0 || !this.audible) return;
        const t = this.line();
        if (hTl.readTheLine(t) !== "free") {
            if (this.localMicHoldsTheLine() && !this.gate.callerIsSpeaking() && !t.responseIsInFlight && !t.speakerIsBusy && t.socketIsWritable && this.quietRelease === void 0) {
                const n = iMn - (Date.now() - this.micLoudSince);
                this.armQuietRelease(Math.min(rMn, Math.max(0, n)), "defer");
            }
            return;
        }
        if (this.workLandedWire === "async-update") {
            for (const n of this.heldWorkLanded.splice(0))this.putWorkLandedOnTheWire(n);
            return;
        }
        const e = this.heldWorkLanded.shift();
        e !== void 0 && this.putWorkLandedOnTheWire(e);
    }
    responseIsInFlight() {
        return this.gate.responseIsInFlight() || this.toolAnswersOwed > 0 || this.quietReleaseKind === "defer";
    }
    line() {
        return {
            callerIsSpeaking: this.gate.callerIsSpeaking() || this.localMicHoldsTheLine(),
            responseIsInFlight: this.responseIsInFlight(),
            speakerIsBusy: this.speakerIsBusy(),
            socketIsWritable: this.socket.readyState === WebSocket.OPEN
        };
    }
    reseedCutPendingWorkLanded() {
        const t = this.pendingWorkLanded.keys().next();
        if (t.done) return;
        const e = this.pendingWorkLanded.get(t.value);
        this.pendingWorkLanded.delete(t.value), this.acceptedPendingWorkLanded.delete(t.value), !(e === void 0 || e.texts.length === 0) && (this.workLandedWire = "seeded-tool-pair", this.heldWorkLanded.unshift(e.texts));
    }
    unsaidOnTheWire() {
        const t = this.asyncUpdateResponse && this.playedAudioThisResponse, e = [
            ...this.pendingWorkLanded.entries()
        ].filter(([r])=>!(t && this.acceptedPendingWorkLanded.has(r))).map(([, r])=>r.texts).filter((r)=>r.length > 0), n = this.carriedAskIsResult ? this.carriedAskTexts : this.carriesAskThisResponse && this.thisAskIsResult && !this.playedAudioThisResponse ? this.thisAskTexts : void 0, i = new Set([
            ...e,
            ...this.heldWorkLanded
        ].map((r)=>r[0]));
        return n !== void 0 && n.length > 0 && !i.has(n[0]) && e.push(n), e;
    }
    acknowledgeOldestPendingWorkLanded() {
        const t = this.pendingWorkLanded.keys().next();
        t.done || (this.pendingWorkLanded.delete(t.value), this.acceptedPendingWorkLanded.delete(t.value));
    }
    acceptOldestPendingWorkLanded() {
        const t = this.pendingWorkLanded.keys().next();
        t.done || this.acceptedPendingWorkLanded.add(t.value);
    }
    putWorkLandedOnTheWire(t) {
        const e = Date.now(), n = `work-landed-${e}-${this.workLandedSeq}`;
        this.workLandedSeq += 1;
        const i = {
            callId: KPn.callId(n),
            request: "",
            kind: "outcome",
            texts: t,
            atMs: e
        };
        for (const r of KPn.frames(i, this.workLandedWire))this.send(r);
        switch(KPn.delivery(i, this.workLandedWire)){
            case "orchestrated":
                this.pendingWorkLanded.set(i.callId, {
                    texts: t,
                    atMs: e
                });
                break;
            case "asked":
                this.carriedAskText = t[0], this.carriedAskTexts = t, this.carriedAskIsResult = !0, this.responses.ask({
                    deliversNudgeId: n,
                    instructions: null,
                    isAResult: !0
                });
                break;
            case "filed":
                break;
        }
        this.args.handlers.onWorkLandedOnWire?.();
    }
    close(t) {
        this.finish(t === "superseded" ? {
            closeClean: !0,
            code: uTl,
            reason: t,
            recoverable: !0
        } : {
            closeClean: !0,
            code: 1e3,
            reason: "hang_up"
        });
    }
    whenSpokenAudioEnds() {
        const t = this.gate.assistantIsResponding() ? new Promise((n)=>{
            this.responseEnded.push(n);
        }) : Promise.resolve();
        return new Promise((n)=>{
            const i = setTimeout(n, zrf);
            t.then(()=>{
                clearTimeout(i), n();
            });
        }).then(()=>this.drainPlayback());
    }
    releaseSpokenAudioWaiters() {
        for (const t of this.responseEnded.splice(0))t();
    }
    drainPlayback() {
        const t = this.context;
        if (t === void 0) return Promise.resolve();
        const e = Math.max(0, (this.playbackCursor - t.currentTime) * 1e3);
        return e === 0 ? Promise.resolve() : new Promise((n)=>{
            const i = {
                resolve: n,
                timer: setTimeout(()=>{
                    this.playbackDrains.delete(i), n();
                }, e)
            };
            this.playbackDrains.add(i);
        });
    }
    releasePlaybackDrain() {
        for (const t of this.playbackDrains)clearTimeout(t.timer), t.resolve();
        this.playbackDrains.clear();
    }
    invite() {
        this.send(this.sessionUpdateFrame());
    }
    speakGreeting() {
        this.responses.greet({
            deliversNudgeId: null,
            instructions: this.args.plan(this.settings).greeting,
            isAResult: !1
        });
    }
    sendResponseCreate(t) {
        t.isAResult ? this.carriedAskIsResult = !0 : t.instructions !== null ? (this.carriedAskText = t.instructions, this.carriedAskTexts = void 0, this.carriedAskIsResult = !1) : (this.carriedAskText = void 0, this.carriedAskTexts = void 0, this.carriedAskIsResult = !1), this.gate.noteResponseRequested(), this.send(t.instructions === null ? {
            type: "response.create"
        } : {
            type: "response.create",
            response: {
                instructions: t.instructions
            }
        });
    }
    speakerIsBusy() {
        return this.scheduled.size > 0;
    }
    sessionUpdateFrame() {
        const { voiceId: t, speed: e, language: n } = this.settings, { instructions: i, tools: r } = this.args.plan(this.settings);
        return {
            type: "session.update",
            session: {
                voice: t,
                resumption: {
                    enabled: !0
                },
                instructions: i,
                turn_detection: {
                    type: "server_vad"
                },
                audio: {
                    input: {
                        format: {
                            type: "audio/pcm",
                            rate: Klt
                        },
                        transcription: {
                            model: "grok-transcribe",
                            ...n === iPi ? {} : {
                                language_hint: n
                            }
                        }
                    },
                    output: {
                        format: {
                            type: "audio/pcm",
                            rate: Klt
                        },
                        speed: e
                    }
                },
                tools: r
            }
        };
    }
    onMessage(t) {
        if (typeof t != "string") return;
        const e = k9k(t);
        if (e === void 0) return;
        if (this.lastIn = {
            frame: e.kind,
            atMs: Date.now()
        }, e.kind !== "audio" && e.kind !== "assistant-delta" && (this.lastInControl = this.lastIn), e.kind === "conversation-created" && (this.conversationId = e.conversationId, e.conversationId !== void 0 && this.args.handlers.onConversationCreated?.(e.conversationId), this.resumed === void 0 && (this.resumed = e.conversationId === this.args.redial?.conversationId, this.goAudible())), e.kind === "response-ended") {
            if (this.ignoreAsyncUpdateEndResponseId !== void 0 && e.responseId === this.ignoreAsyncUpdateEndResponseId) {
                this.ignoreOneAsyncUpdateEnd = !1, this.ignoreAsyncUpdateEndResponseId = void 0;
                return;
            }
            if (this.ignoreOneAsyncUpdateEnd) {
                this.ignoreOneAsyncUpdateEnd = !1;
                return;
            }
        }
        e.kind === "response-created" && this.endCutAsyncUpdate();
        const n = this.gate.awaitingOurResponse(), i = this.gate.callerTookTheResponse(), r = this.gate.responseIsInFlight();
        if (this.gate.onWireEvent(e.kind), e.kind === "speech-stopped" && (this.args.handlers.onCallerSpeechStopped?.(), this.micLoudAt = -1, this.endCutAsyncUpdate(), this.armQuietRelease(rMn, "defer")), e.kind === "speech-started") {
            this.armQuietRelease(iMn, "lost"), this.responses.callerInterrupted(), this.audible && this.greetingGrace.callerSpoke(), this.args.handlers.onCallerSpeechStarted?.({
                bargedIn: r
            }), this.releaseSpokenAudioWaiters(), (this.gate.callerTookTheResponse() || this.assistantText.size > 0 || this.heardSpans.size > 0) && this.closeHeardAssistantTranscripts(), this.gate.callerTookTheResponse() && this.openResponseId !== void 0 && this.sealedResponseIds.add(this.openResponseId);
            const o = this.dropScheduledSpeech();
            this.asyncUpdateResponse && (this.gate.noteAsyncUpdateCut(), this.asyncUpdateCutAwaitingGateEnd = !0), o.length > 0 && (this.cutsOwed = this.gate.assistantIsResponding() && !this.asyncUpdateResponse ? o : [], this.sendTruncations(o));
        }
        if (e.kind === "response-created") {
            this.responsePlayedAudio.set(this.responseSerialValue, this.playedAudioThisResponse), this.responseSerialValue += 1, this.quietReleaseKind === "defer" && this.clearQuietRelease(), this.ignoreOneAsyncUpdateEnd = !1, this.openResponseId !== void 0 && e.responseId !== void 0 && e.responseId !== this.openResponseId && this.sealedResponseIds.add(this.openResponseId), e.responseId !== void 0 && (this.openResponseId = e.responseId), this.playedAudioThisResponse = !1, this.askedThisResponse = n;
            let o = n;
            n || (e.responseTrigger === "async_update" ? this.responses.orchestratorStartedAResponse() : o = this.responses.serverStartedAResponse()), this.carriesAskThisResponse = o, this.thisAskText = o ? this.carriedAskText : void 0, this.thisAskTexts = o ? this.carriedAskTexts : void 0, this.thisAskIsResult = o && this.carriedAskIsResult, o && (this.carriedAskText = void 0, this.carriedAskTexts = void 0, this.carriedAskIsResult = !1), this.spokeWordsThisResponse = !1, this.sawToolThisResponse = !1;
            for (const a of this.closedAssistant)a !== "assistant" && (this.sealedAssistantItems.add(a), this.supersededAssistantItems.add(a));
            this.assistantText.delete("assistant"), this.assistantDeltas.delete("assistant"), this.cutsOwed = [], this.asyncUpdateResponse = e.responseTrigger === "async_update", this.asyncUpdateResponse && this.acceptOldestPendingWorkLanded(), this.callerTookAssistantTranscript = !1, this.openedAssistantItems.clear(), this.closedAssistant.delete("assistant");
        }
        if (e.kind === "response-ended") {
            const o = !e.cancelled && this.askedThisResponse && !this.playedAudioThisResponse && !this.spokeWordsThisResponse && !this.sawToolThisResponse, a = this.thisAskText, l = this.carriesAskThisResponse && this.thisAskIsResult && !this.playedAudioThisResponse && (i || this.callerTookAssistantTranscript) && a !== void 0 && !this.returnedUnheard.has(a);
            l && a !== void 0 && (this.returnedUnheard.add(a), this.heldWorkLanded.push(this.thisAskTexts ?? [
                a
            ])), this.askedThisResponse = !1, this.carriesAskThisResponse = !1, this.asyncUpdateCutAwaitingGateEnd = !1, this.sendTruncations(this.cutsOwed), this.cutsOwed = [], this.releaseSpokenAudioWaiters(), this.responses.responseEnded(i), this.asyncUpdateResponse && this.acknowledgeOldestPendingWorkLanded(), this.asyncUpdateResponse = !1, this.releaseHeldWorkLanded(), o && !l && this.args.handlers.onEmptyAskedReply?.({
                text: this.thisAskText,
                askWasResult: this.thisAskIsResult
            });
        }
        if (e.kind === "audio" && this.gate.mayPlayAudio() && this.context !== void 0) {
            const o = c8k(l8k(e.audioBase64));
            o.length > 0 && (this.responses.responseSpoke(), this.playedAudioThisResponse = !0, this.play(o, e.playback), this.args.handlers.onAudioPlayed?.());
        }
        e.kind === "session-ready" && (this.sessionReady || this.args.handlers.onConnectEdge?.({
            phase: "session_created"
        }), this.sessionReady = !0, this.goAudible());
        const s = this.spokenTurn(e);
        if (s !== void 0) {
            s.speaker === "assistant" && s.text.trim() !== "" && (this.spokeWordsThisResponse = !0);
            const o = s.speaker === "assistant" && e.kind === "transcript", l = (s.speaker === "assistant" ? this.assistantItemSerial.get(s.itemId) : void 0) ?? this.responseSerialValue, c = l === this.responseSerialValue ? this.playedAudioThisResponse : this.responsePlayedAudio.get(l) ?? !1;
            this.args.handlers.onTranscriptTurn({
                ...s,
                final: o,
                responseSerial: l,
                ...o ? {
                    heard: c
                } : {}
            });
        }
        if (e.kind === "tool" && (this.sawToolThisResponse = !0, this.toolAnswersOwed += 1, this.args.handlers.onToolCall({
            ...e.tool,
            alreadySpoke: this.spokeWordsThisResponse
        })), e.kind === "error") {
            this.audible && this.args.handlers.onProtocolFault?.(e.fault);
            const o = e.error ?? "", a = w9k(this.pendingWorkLanded, this.acceptedPendingWorkLanded, o, e.errorEventId).map((l)=>{
                const c = this.pendingWorkLanded.get(l);
                return this.pendingWorkLanded.delete(l), {
                    eventId: l,
                    texts: c?.texts ?? [],
                    atMs: c?.atMs ?? 0
                };
            });
            if (a.length > 0) {
                this.workLandedWire = "seeded-tool-pair", this.args.handlers.onAsyncUpdateRejected?.(o);
                const l = a.map((c)=>c.texts).filter((c)=>c.length > 0);
                this.heldWorkLanded.unshift(...l), this.releaseHeldWorkLanded();
                return;
            }
            if (this.workLandedWire === "seeded-tool-pair" && o.toLowerCase().includes("async_update")) return;
            if (this.audible) {
                this.args.handlers.onWireError?.(o);
                return;
            }
            this.finish({
                closeClean: !1,
                code: 1011,
                reason: o,
                protocolFault: e.fault
            });
        }
    }
    spokenTurn(t) {
        if (t.kind === "assistant-delta") {
            const i = t.assistantDelta.itemId;
            if (this.sealedAssistantItems.has(i) || this.dropSealedResponse(i, t.responseId)) return;
            const r = (this.assistantDeltas.get(i) ?? "") + t.assistantDelta.delta;
            this.openedAssistantItems.add(i), this.noteAssistantItem(i), this.assistantDeltas.set(i, r);
            const s = this.assistantText.get(i) ?? "", o = r.length >= s.length ? r : s;
            this.assistantText.set(i, o);
            const a = this.gate.callerTookTheResponse() || this.callerTookAssistantTranscript;
            return {
                speaker: "assistant",
                text: o,
                itemId: i,
                ...a ? {
                    talkedOver: !0
                } : {}
            };
        }
        if (t.kind === "truncation") {
            const i = t.transcript.itemId;
            if (this.supersededAssistantItems.has(i)) return;
            this.closedAssistant.add(i);
            const r = this.assistantText.get(i) ?? "";
            return t.transcript.text.length <= r.length ? void 0 : (this.assistantText.set(i, t.transcript.text), t.transcript);
        }
        if (t.kind !== "transcript") return;
        if (t.transcript.speaker === "user") return this.callerTurn(t.transcript, t.finished);
        const e = t.transcript.itemId;
        if (this.sealedAssistantItems.has(e) || this.dropSealedResponse(e, t.responseId)) return;
        const n = this.closedAssistant.has(e);
        if (this.closedAssistant.add(e), !(n || this.gate.callerTookTheResponse() || this.gate.callerIsSpeaking() || this.callerTookAssistantTranscript || this.openedAssistantItems.size > 0 && !this.openedAssistantItems.has(e))) return this.openedAssistantItems.add(e), this.noteAssistantItem(e), this.assistantText.set(e, t.transcript.text), t.transcript;
    }
    noteAssistantItem(t) {
        this.assistantItemSerial.has(t) || this.assistantItemSerial.set(t, this.responseSerialValue);
    }
    dropSealedResponse(t, e) {
        return e === void 0 || !this.sealedResponseIds.has(e) ? !1 : (t !== "" && t !== "assistant" && this.sealedAssistantItems.add(t), !0);
    }
    closeHeardAssistantTranscripts() {
        for (const t of this.assistantText.keys())this.closedAssistant.add(t);
        for (const t of this.heardSpans.values())t.itemId !== "" && this.closedAssistant.add(t.itemId);
        this.closedAssistant.add("assistant"), this.callerTookAssistantTranscript = !0;
    }
    callerTurn(t, e) {
        if (e) this.completedCallerItems.add(t.itemId);
        else if (this.completedCallerItems.has(t.itemId) && t.text.length <= (this.callerText.get(t.itemId) ?? "").length) return;
        return this.callerText.set(t.itemId, t.text), t;
    }
    async startCapture() {
        let t;
        const e = setTimeout(()=>{
            this.finished || (this.args.handlers.onConnectEdge?.({
                phase: "mic_timeout"
            }), this.finish({
                closeClean: !1,
                code: 1011,
                reason: "microphone"
            }));
        }, Vrf);
        try {
            if (t = await s8k(this.args.inputDeviceId), clearTimeout(e), this.finished) {
                qTl(t);
                return;
            }
            const n = new AudioContext({
                sampleRate: Klt
            }), i = n.createMediaStreamSource(t), r = n.createScriptProcessor(Grf, 1, 1);
            r.onaudioprocess = (o)=>{
                const a = o.inputBuffer.getChannelData(0);
                this.noteLocalMic(a), !(this.muted || !this.audible || this.socket.readyState !== WebSocket.OPEN) && this.send({
                    type: "input_audio_buffer.append",
                    audio: d8k(u8k(a))
                });
            };
            const s = n.createGain();
            s.gain.value = 0, i.connect(r), r.connect(s), s.connect(n.destination), this.context = n, this.stream = t, this.processor = r, this.captureReady = !0, this.args.handlers.onConnectEdge?.({
                phase: "mic_granted"
            }), this.goAudible();
        } catch (n) {
            if (clearTimeout(e), t !== void 0 && qTl(t), this.finished) return;
            this.args.handlers.onConnectEdge?.({
                phase: "mic_denied",
                errorClass: aPi(n)
            }), this.finish({
                closeClean: !1,
                code: 1011,
                reason: "microphone"
            });
        }
    }
    play(t, e) {
        const n = this.context;
        if (n === void 0 || t.length === 0) return;
        const i = n.createBuffer(1, t.length, Klt);
        i.getChannelData(0).set(t);
        const r = n.createBufferSource();
        r.buffer = i, r.connect(n.destination), this.speakerTap !== void 0 && r.connect(this.speakerTap);
        const s = Math.max(n.currentTime, this.playbackCursor);
        if (r.start(s), this.scheduled.add(r), r.onended = ()=>{
            this.scheduled.delete(r), this.scheduled.size === 0 && (this.responses.speechEnded(), this.releaseHeldWorkLanded(), this.heardSpans.clear());
        }, this.playbackCursor = s + i.duration, e === void 0 || e.itemId === "") return;
        const o = `${e.itemId}:${e.contentIndex}`, a = this.heardSpans.get(o);
        if (a === void 0) {
            this.heardSpans.set(o, {
                itemId: e.itemId,
                contentIndex: e.contentIndex,
                startsAt: s,
                endsAt: this.playbackCursor
            });
            return;
        }
        a.endsAt = this.playbackCursor;
    }
    unheardCuts() {
        const t = this.context;
        if (t === void 0) return [];
        const e = t.currentTime, n = [];
        for (const i of this.heardSpans.values())e >= i.endsAt || n.push({
            itemId: i.itemId,
            contentIndex: i.contentIndex,
            audioEndMs: Math.max(0, (e - i.startsAt) * 1e3)
        });
        return n;
    }
    sendTruncations(t) {
        for (const e of t)this.send(Snf.frame(e));
    }
    dropScheduledSpeech() {
        if (this.scheduled.size === 0) return [];
        const t = this.unheardCuts();
        for (const e of this.scheduled)e.onended = null, e.stop(), e.disconnect();
        return this.scheduled.clear(), this.heardSpans.clear(), this.playbackCursor = 0, this.releasePlaybackDrain(), t;
    }
    goAudible() {
        this.audible || this.finished || !this.captureReady || !this.sessionReady || this.resumed === void 0 || (this.audible = !0, this.resumed ? this.releaseHeldWorkLanded() : (this.greetingGrace.start(), this.args.redial === void 0 && this.play(_nf.render(Klt), void 0)), this.args.handlers.onCallAudible());
    }
    send(t) {
        this.socket.readyState === WebSocket.OPEN && (this.lastOut = {
            frame: t.type,
            atMs: Date.now()
        }, t.type !== "input_audio_buffer.append" && (this.lastOutControl = this.lastOut), t.type === "session.update" && this.audible && (this.liveUpdates += 1, this.lastLiveUpdateAtMs = this.lastOut.atMs), this.socket.send(JSON.stringify(t)));
    }
    lastFrames(t) {
        const e = Date.now(), { lastIn: n, lastOut: i, lastInControl: r, lastOutControl: s, lastLiveUpdateAtMs: o } = this;
        return {
            fault_last_in: n?.frame ?? "absent",
            ...n && {
                fault_last_in_ms: e - n.atMs
            },
            fault_last_out: i?.frame ?? "absent",
            ...i && {
                fault_last_out_ms: e - i.atMs
            },
            fault_last_in_control: r?.frame ?? "absent",
            ...r && {
                fault_last_in_control_ms: e - r.atMs
            },
            fault_last_out_control: s?.frame ?? "absent",
            ...s && {
                fault_last_out_control_ms: e - s.atMs
            },
            fault_updates: this.liveUpdates,
            ...o !== void 0 && {
                fault_last_update_ms: e - o
            },
            fault_responding: this.responseIsInFlight(),
            fault_muted: this.muted,
            fault_via: t,
            ...typeof document < "u" && {
                fault_hidden: document.visibilityState === "hidden"
            },
            ...typeof navigator < "u" && {
                fault_online: navigator.onLine
            },
            ...this.context && {
                fault_audio: this.context.state
            },
            ...this.conversationId && {
                realtime_conversation_id: this.conversationId
            }
        };
    }
    finish(t) {
        if (this.finished) return;
        const e = this.audible, n = t.recoverable === !0;
        this.finished = !0, this.clearQuietRelease(), this.responses.close(), n ? this.heldWorkLanded.unshift(...this.unsaidOnTheWire()) : this.heldWorkLanded.length = 0, this.lineAudioValue = void 0, this.pendingWorkLanded.clear(), this.acceptedPendingWorkLanded.clear(), this.greetingGrace.dispose(), this.releaseSpokenAudioWaiters(), this.dropScheduledSpeech(), this.processor !== void 0 && (this.processor.onaudioprocess = null, this.processor.disconnect()), this.stream !== void 0 && qTl(this.stream), this.speakerTap?.disconnect(), this.context?.close(), this.processor = void 0, this.speakerTap = void 0, this.stream = void 0, this.context = void 0, e && !n && Hrf(), (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING) && this.socket.close(n ? uTl : 1e3), this.args.handlers.onClosed(t);
    }
};

}
