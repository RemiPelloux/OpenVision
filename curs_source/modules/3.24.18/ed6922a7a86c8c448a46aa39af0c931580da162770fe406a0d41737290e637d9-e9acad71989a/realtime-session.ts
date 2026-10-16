import { o4h, r4h, s4h } from "./chime.ts";
import { J5n } from "./connect-report.ts";
import { Q5n } from "./connect-telemetry.ts";
import { a6h } from "./controller.ts";
import { a4h, c4h } from "./item-truncate.ts";
import { C8h, krr } from "./microphones.ts";
import { Lnt, WLe } from "./nudge-reply.ts";
import { $m_, S8h } from "./playback-gate.ts";
import { H6h, N6h, O6h } from "./protocol-fault.ts";
import { Ezt, d4h } from "./realtime-wire.ts";
import { XMo, YMo, h4h, p4h } from "./redial.ts";
import { ZMo, m4h } from "./response-gate.ts";
import { Tzt, e9n } from "./seeded-nudge.ts";
import { x } from "./tslib.es6.js";
import { f4h, v4h } from "./user-first-grace.ts";
import { Jir, K5n, wzt } from "./voice-settings.ts";
function M6h(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function P6h(e, t) {
    if (typeof t != "string") return "absent";
    const n = t.trim().toLowerCase();
    return e.find((i)=>i === n) ?? "unrecognized";
}
function Qh_(e) {
    return typeof e != "string" ? "absent" : H6h.find(([t])=>e.startsWith(t))?.[1] ?? "unrecognized";
}
function Jh_(e) {
    const t = M6h(e) && M6h(e.error) ? e.error : null, n = t?.message;
    return {
        fault: {
            vendorClass: P6h(N6h, t?.type),
            vendorCode: P6h(O6h, t?.code),
            about: Qh_(t?.event_id)
        },
        detail: typeof n == "string" ? n : null
    };
}
function lp_(e) {
    let t;
    try {
        t = JSON.parse(e);
    } catch  {
        return;
    }
    if (!ETe(t) || typeof t.type != "string") return;
    const n = t.type, i = hp_(t), r = i !== void 0 ? {
        responseId: i
    } : {};
    if (n === "session.created" || n === "session.updated") return {
        kind: "session-ready"
    };
    if (n === "conversation.created") {
        const s = ETe(t.conversation) ? t.conversation.id : void 0;
        return {
            kind: "conversation-created",
            conversationId: typeof s == "string" ? s : void 0
        };
    }
    if ((n === "response.audio.delta" || n === "response.output_audio.delta") && typeof t.delta == "string") return {
        kind: "audio",
        audioBase64: t.delta,
        playback: {
            itemId: typeof t.item_id == "string" ? t.item_id : "",
            contentIndex: typeof t.content_index == "number" ? t.content_index : 0
        }
    };
    if (n === "response.audio_transcript.done" || n === "response.output_audio_transcript.done" || n === "conversation.item.input_audio_transcription.completed") {
        const s = urr(t);
        if (s === void 0) return {
            kind: "other"
        };
        const o = n === "conversation.item.input_audio_transcription.completed" ? "user" : "assistant";
        return {
            kind: "transcript",
            ...r,
            transcript: {
                speaker: o,
                text: s,
                itemId: lrr(t, o)
            },
            ...o === "user" ? {
                finished: t.status !== "in_progress"
            } : {}
        };
    }
    if (n === "response.audio_transcript.delta" || n === "response.output_audio_transcript.delta") return typeof t.delta != "string" || t.delta === "" ? {
        kind: "other"
    } : {
        kind: "assistant-delta",
        ...r,
        assistantDelta: {
            itemId: lrr(t, "assistant"),
            delta: t.delta
        }
    };
    if (n === "conversation.item.truncated") {
        const s = urr(t) ?? l4h(t.item);
        return s === void 0 ? {
            kind: "other"
        } : {
            kind: "truncation",
            ...r,
            transcript: {
                speaker: "assistant",
                text: s,
                itemId: lrr(t, "assistant")
            }
        };
    }
    if (n === "conversation.item.added" || n === "conversation.item.input_audio_transcription.updated") {
        if (n === "conversation.item.added" && mp_(t.item)) return {
            kind: "other"
        };
        const s = urr(t) ?? l4h(t.item);
        return s === void 0 ? {
            kind: "other"
        } : {
            kind: "transcript",
            transcript: {
                speaker: "user",
                text: s,
                itemId: lrr(t, "user")
            }
        };
    }
    if (n === "response.function_call_arguments.done" && typeof t.call_id == "string" && typeof t.name == "string") return {
        kind: "tool",
        tool: {
            callId: t.call_id,
            name: t.name,
            arguments: typeof t.arguments == "string" ? t.arguments : ""
        }
    };
    if (n === "response.created") return {
        kind: "response-created",
        ...r,
        responseTrigger: pp_(t)
    };
    if (n === "response.done" || n === "response.cancelled") return {
        kind: "response-ended",
        ...r,
        cancelled: n === "response.cancelled"
    };
    if (n === "input_audio_buffer.speech_started") return {
        kind: "speech-started"
    };
    if (n === "input_audio_buffer.speech_stopped") return {
        kind: "speech-stopped"
    };
    if (n === "error") {
        const s = ETe(t.error) ? t.error : void 0, o = s?.message, a = s?.event_id, c = t.event_id;
        return {
            kind: "error",
            error: typeof o == "string" ? o : void 0,
            errorEventId: typeof a == "string" && a !== "" ? a : typeof c == "string" && c !== "" ? c : void 0,
            fault: Jh_(t).fault
        };
    }
    return {
        kind: "other"
    };
}
function up_(e, t, n, i) {
    return i !== void 0 && e.has(i) ? t.has(i) ? [] : [
        i
    ] : [
        ...e.keys()
    ].filter((r)=>!t.has(r) && dp_(n, r));
}
function dp_(e, t) {
    const n = e.toLowerCase();
    return n.includes("async_update") || n.includes(t.toLowerCase());
}
function hp_(e) {
    if (typeof e.response_id == "string" && e.response_id !== "") return e.response_id;
    const t = e.response;
    if (ETe(t) && typeof t.id == "string" && t.id !== "") return t.id;
}
function pp_(e) {
    const t = e.response;
    if (!ETe(t)) return;
    const n = t.metadata;
    if (!(!ETe(n) || typeof n.trigger != "string")) return n.trigger;
}
function lrr(e, t) {
    if (typeof e.item_id == "string" && e.item_id !== "") return e.item_id;
    const n = e.item;
    return ETe(n) && typeof n.id == "string" && n.id !== "" ? n.id : t;
}
function urr(e) {
    const t = typeof e.transcript == "string" ? e.transcript.trim() : "";
    if (t !== "") return t;
    const n = typeof e.text == "string" ? e.text.trim() : "";
    return n === "" ? void 0 : n;
}
function mp_(e) {
    return ETe(e) ? e.role === "assistant" || e.role === "system" ? !0 : Array.isArray(e.content) && e.content.some((t)=>ETe(t) && d4h.has(t.type)) : !1;
}
function l4h(e) {
    if (!(!ETe(e) || !Array.isArray(e.content))) for (const t of e.content){
        if (!ETe(t)) continue;
        const n = urr(t);
        if (n !== void 0) return n;
    }
}
function ETe(e) {
    return typeof e == "object" && e !== null;
}
function gp_(e, t) {
    return !(t && e === p4h) && e !== h4h;
}
function Gm_(e) {
    const t = typeof e == "object" && e !== null && "name" in e ? e.name : null;
    return t === "OverconstrainedError" || t === "NotFoundError" || t === "NotReadableError";
}
function Vm_(e) {
    const t = navigator.mediaDevices;
    return e ? t.getUserMedia({
        audio: {
            ...krr,
            deviceId: {
                exact: e
            }
        }
    }).catch((n)=>{
        if (!Gm_(n)) throw n;
        return t.getUserMedia({
            audio: krr
        });
    }) : t.getUserMedia({
        audio: krr
    });
}
function jm_(e, t) {
    if (!e.websocketUrl.startsWith(x8h)) throw new Error("Realtime voice host is not allowed.");
    const n = new URL(e.websocketUrl);
    return n.searchParams.set("model", e.model), t !== void 0 && t.length > 0 && n.searchParams.set("conversation_id", t), n.toString();
}
function E8h() {
    try {
        const e = s4h.render(p7e), t = new AudioContext({
            sampleRate: p7e
        }), n = t.createBuffer(1, e.length, p7e);
        n.getChannelData(0).set(e);
        const i = t.createBufferSource();
        i.buffer = n, i.connect(t.destination), i.onended = ()=>{
            t.close();
        }, i.start();
    } catch  {}
}
function qm_(e) {
    if (e.length === 0) return !1;
    let t = 0;
    for(let n = 0; n < e.length; n++){
        const i = e[n] ?? 0;
        t += i * i;
    }
    return Math.sqrt(t / e.length) >= A8h;
}
function DPo(e) {
    for (const t of e.getTracks())t.stop();
}
function zm_(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for(let i = 0; i < t.length; i++)n[i] = t.charCodeAt(i);
    return n;
}
function Km_(e) {
    const t = new Int16Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 2));
    return Float32Array.from(t, (n)=>n / 32768);
}
function Ym_(e) {
    const t = Int16Array.from(e, (n)=>{
        const i = Math.max(-1, Math.min(1, n));
        return i < 0 ? i * 32768 : i * 32767;
    });
    return new Uint8Array(t.buffer);
}
function Xm_(e) {
    let t = "";
    for (const n of e)t += String.fromCharCode(n);
    return btoa(t);
}
var x8h, p7e, I8h, Nzt, Ozt, A8h, R8h, D8h, M8h;
export { A8h, D8h, DPo, E8h, ETe, Gm_, I8h, Jh_, Km_, M6h, M8h, Nzt, Ozt, P6h, Qh_, R8h, Vm_, Xm_, Ym_, dp_, gp_, hp_, jm_, l4h, lp_, lrr, mp_, p7e, pp_, qm_, up_, urr, x8h, zm_ };
var __wakaru_Zm__initialized = false;
export function Zm_() {
if (__wakaru_Zm__initialized) return;
__wakaru_Zm__initialized = true;
"use strict";
x(), Jir(), J5n(), Lnt(), o4h(), c4h(), $m_(), Ezt(), XMo(), m4h(), e9n(), v4h(), C8h(), x8h = "wss://api.x.ai/", p7e = 24e3, I8h = 2048, Nzt = 3e3, Ozt = 400, A8h = .02, R8h = 15e3, D8h = 3e4, M8h = class {
    constructor(e){
        this.args = e, this.resumed = e.redial?.conversationId === void 0 ? !1 : void 0, this.workLandedWire = e.nudgeWire ?? "async-update", this.settings = e.settings ?? wzt, this.greetingGrace = new f4h({
            schedule: (t, n)=>{
                const i = setTimeout(n, t);
                return ()=>clearTimeout(i);
            },
            onFire: ()=>{
                this.gate.callHasHadAResponse() || this.speakGreeting();
            }
        }), this.socket = new WebSocket(jm_(e.credential, e.redial?.conversationId), [
            `xai-client-secret.${e.credential.clientSecret}`
        ]), this.responses = new ZMo({
            line: ()=>({
                    ...this.line(),
                    callerIsSpeaking: this.gate.callerIsSpeaking()
                }),
            send: (t)=>this.sendResponseCreate(t),
            onAskSettled: (t)=>this.args.handlers.onAskSettled?.(t)
        }), this.socket.addEventListener("open", ()=>{
            e.handlers.onConnectEdge?.({
                phase: "socket_open"
            }), this.invite();
        }), this.socket.addEventListener("message", (t)=>this.onMessage(t.data)), this.socket.addEventListener("error", ()=>{
            e.handlers.onConnectEdge?.({
                phase: "socket_error",
                errorClass: "WebSocketError"
            }), this.sawSocketError = !0;
        }), this.socket.addEventListener("close", (t)=>{
            e.handlers.onConnectEdge?.({
                phase: "socket_close",
                closeCode: t.code,
                closeClean: t.wasClean
            }), this.finish({
                closeClean: t.wasClean,
                code: t.code,
                reason: t.reason || (this.sawSocketError ? "socket_error" : ""),
                detail: this.lastFrames(this.sawSocketError ? "error" : "close"),
                recoverable: gp_(t.code, t.wasClean)
            });
        }), e.signal?.addEventListener("abort", ()=>this.close(), {
            once: !0
        }), this.startCapture();
    }
    socket;
    gate = new S8h;
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
    setMuted(e) {
        this.muted = e, e && (this.micLoudAt = -1);
    }
    lineAudio() {
        if (!(this.context === void 0 || this.stream === void 0)) {
            if (this.speakerTap === void 0) {
                this.speakerTap = this.context.createMediaStreamDestination();
                for (const e of this.scheduled)e.connect(this.speakerTap);
            }
            return this.lineAudioValue ??= {
                microphone: this.stream,
                speaker: this.speakerTap.stream
            }, this.lineAudioValue;
        }
    }
    updateVoiceSettings(e) {
        const t = a6h(e, this.settings);
        this.settings = e, !(t || this.socket.readyState !== WebSocket.OPEN) && this.send(this.sessionUpdateFrame());
    }
    sendToolResult(e) {
        const t = this.toolAnswersOwed > 0;
        this.send({
            type: "conversation.item.create",
            item: {
                type: "function_call_output",
                call_id: e.callId,
                output: e.output
            }
        }), e.speak !== !1 && (e.landed !== void 0 && (this.carriedAskText = e.landed[0], this.carriedAskTexts = e.landed, this.carriedAskIsResult = !0), this.responses.ask({
            deliversNudgeId: e.landed === void 0 ? null : e.callId,
            instructions: e.instructions ?? null,
            isAResult: e.landed !== void 0
        })), t && (this.toolAnswersOwed -= 1, this.toolAnswersOwed === 0 && this.responses.speechEnded()), this.releaseHeldWorkLanded();
    }
    sendWorkLanded(e) {
        const t = (typeof e == "string" ? [
            e
        ] : e).map((n)=>n.slice(0, WLe).trim()).filter((n)=>n.length > 0);
        if (!(t.length === 0 || this.finished)) return this.heldWorkLanded.push(t), this.releaseHeldWorkLanded(), this.workLandedWire;
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
    retractUnspoken(e) {
        const t = e.slice(0, WLe).trim();
        for(let n = this.heldWorkLanded.length - 1; n >= 0; n--)this.heldWorkLanded[n]?.[0] === t && this.heldWorkLanded.splice(n, 1);
    }
    armQuietRelease(e, t) {
        this.clearQuietRelease(), this.quietReleaseKind = t, this.quietRelease = setTimeout(()=>{
            if (this.quietRelease = void 0, this.quietReleaseKind = void 0, !this.finished) {
                if (t === "lost") {
                    if (!this.gate.callerIsSpeaking()) return;
                    this.gate.noteCallerQuietStopgap(), this.endCutAsyncUpdate(), this.args.handlers.onLostSpeechStopped?.();
                }
                this.responses.speechEnded(), this.releaseHeldWorkLanded();
            }
        }, e);
    }
    clearQuietRelease() {
        this.quietRelease !== void 0 && (clearTimeout(this.quietRelease), this.quietRelease = void 0, this.quietReleaseKind = void 0);
    }
    noteLocalMic(e) {
        if (this.muted || !qm_(e)) return;
        const t = Date.now();
        if ((this.micLoudAt < 0 || t - this.micLoudAt >= Ozt) && (this.micLoudSince = t), this.micLoudAt = t, this.quietRelease === void 0) return;
        if (this.quietReleaseKind === "lost") {
            this.armQuietRelease(Nzt, "lost");
            return;
        }
        if (!this.localMicHoldsTheLine()) return;
        const n = Nzt - (t - this.micLoudSince);
        this.armQuietRelease(Math.min(Ozt, Math.max(0, n)), "defer");
    }
    localMicHoldsTheLine() {
        const e = Date.now();
        return this.micLoudAt >= 0 && e - this.micLoudAt < Ozt && e - this.micLoudSince < Nzt;
    }
    endCutAsyncUpdate() {
        this.asyncUpdateCutAwaitingGateEnd && (this.asyncUpdateCutAwaitingGateEnd = !1, this.ignoreOneAsyncUpdateEnd = !0, this.ignoreAsyncUpdateEndResponseId = this.openResponseId, this.responses.responseEnded(this.gate.callerTookTheResponse()), this.reseedCutPendingWorkLanded());
    }
    releaseHeldWorkLanded() {
        if (this.heldWorkLanded.length === 0 || !this.audible) return;
        const e = this.line();
        if (ZMo.readTheLine(e) !== "free") {
            if (this.localMicHoldsTheLine() && !this.gate.callerIsSpeaking() && !e.responseIsInFlight && !e.speakerIsBusy && e.socketIsWritable && this.quietRelease === void 0) {
                const n = Nzt - (Date.now() - this.micLoudSince);
                this.armQuietRelease(Math.min(Ozt, Math.max(0, n)), "defer");
            }
            return;
        }
        if (this.workLandedWire === "async-update") {
            for (const n of this.heldWorkLanded.splice(0))this.putWorkLandedOnTheWire(n);
            return;
        }
        const t = this.heldWorkLanded.shift();
        t !== void 0 && this.putWorkLandedOnTheWire(t);
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
        const e = this.pendingWorkLanded.keys().next();
        if (e.done) return;
        const t = this.pendingWorkLanded.get(e.value);
        this.pendingWorkLanded.delete(e.value), this.acceptedPendingWorkLanded.delete(e.value), !(t === void 0 || t.texts.length === 0) && (this.workLandedWire = "seeded-tool-pair", this.heldWorkLanded.unshift(t.texts));
    }
    unsaidOnTheWire() {
        const e = this.asyncUpdateResponse && this.playedAudioThisResponse, t = [
            ...this.pendingWorkLanded.entries()
        ].filter(([r])=>!(e && this.acceptedPendingWorkLanded.has(r))).map(([, r])=>r.texts).filter((r)=>r.length > 0), n = this.carriedAskIsResult ? this.carriedAskTexts : this.carriesAskThisResponse && this.thisAskIsResult && !this.playedAudioThisResponse ? this.thisAskTexts : void 0, i = new Set([
            ...t,
            ...this.heldWorkLanded
        ].map((r)=>r[0]));
        return n !== void 0 && n.length > 0 && !i.has(n[0]) && t.push(n), t;
    }
    acknowledgeOldestPendingWorkLanded() {
        const e = this.pendingWorkLanded.keys().next();
        e.done || (this.pendingWorkLanded.delete(e.value), this.acceptedPendingWorkLanded.delete(e.value));
    }
    acceptOldestPendingWorkLanded() {
        const e = this.pendingWorkLanded.keys().next();
        e.done || this.acceptedPendingWorkLanded.add(e.value);
    }
    putWorkLandedOnTheWire(e) {
        const t = Date.now(), n = `work-landed-${t}-${this.workLandedSeq}`;
        this.workLandedSeq += 1;
        const i = {
            callId: Tzt.callId(n),
            request: "",
            kind: "outcome",
            texts: e,
            atMs: t
        };
        for (const r of Tzt.frames(i, this.workLandedWire))this.send(r);
        switch(Tzt.delivery(i, this.workLandedWire)){
            case "orchestrated":
                this.pendingWorkLanded.set(i.callId, {
                    texts: e,
                    atMs: t
                });
                break;
            case "asked":
                this.carriedAskText = e[0], this.carriedAskTexts = e, this.carriedAskIsResult = !0, this.responses.ask({
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
    close(e) {
        this.finish(e === "superseded" ? {
            closeClean: !0,
            code: YMo,
            reason: e,
            recoverable: !0
        } : {
            closeClean: !0,
            code: 1e3,
            reason: "hang_up"
        });
    }
    whenSpokenAudioEnds() {
        const e = this.gate.assistantIsResponding() ? new Promise((n)=>{
            this.responseEnded.push(n);
        }) : Promise.resolve();
        return new Promise((n)=>{
            const i = setTimeout(n, R8h);
            e.then(()=>{
                clearTimeout(i), n();
            });
        }).then(()=>this.drainPlayback());
    }
    releaseSpokenAudioWaiters() {
        for (const e of this.responseEnded.splice(0))e();
    }
    drainPlayback() {
        const e = this.context;
        if (e === void 0) return Promise.resolve();
        const t = Math.max(0, (this.playbackCursor - e.currentTime) * 1e3);
        return t === 0 ? Promise.resolve() : new Promise((n)=>{
            const i = {
                resolve: n,
                timer: setTimeout(()=>{
                    this.playbackDrains.delete(i), n();
                }, t)
            };
            this.playbackDrains.add(i);
        });
    }
    releasePlaybackDrain() {
        for (const e of this.playbackDrains)clearTimeout(e.timer), e.resolve();
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
    sendResponseCreate(e) {
        e.isAResult ? this.carriedAskIsResult = !0 : e.instructions !== null ? (this.carriedAskText = e.instructions, this.carriedAskTexts = void 0, this.carriedAskIsResult = !1) : (this.carriedAskText = void 0, this.carriedAskTexts = void 0, this.carriedAskIsResult = !1), this.gate.noteResponseRequested(), this.send(e.instructions === null ? {
            type: "response.create"
        } : {
            type: "response.create",
            response: {
                instructions: e.instructions
            }
        });
    }
    speakerIsBusy() {
        return this.scheduled.size > 0;
    }
    sessionUpdateFrame() {
        const { voiceId: e, speed: t, language: n } = this.settings, { instructions: i, tools: r } = this.args.plan(this.settings);
        return {
            type: "session.update",
            session: {
                voice: e,
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
                            rate: p7e
                        },
                        transcription: {
                            model: "grok-transcribe",
                            ...n === K5n ? {} : {
                                language_hint: n
                            }
                        }
                    },
                    output: {
                        format: {
                            type: "audio/pcm",
                            rate: p7e
                        },
                        speed: t
                    }
                },
                tools: r
            }
        };
    }
    onMessage(e) {
        if (typeof e != "string") return;
        const t = lp_(e);
        if (t === void 0) return;
        if (this.lastIn = {
            frame: t.kind,
            atMs: Date.now()
        }, t.kind !== "audio" && t.kind !== "assistant-delta" && (this.lastInControl = this.lastIn), t.kind === "conversation-created" && (this.conversationId = t.conversationId, t.conversationId !== void 0 && this.args.handlers.onConversationCreated?.(t.conversationId), this.resumed === void 0 && (this.resumed = t.conversationId === this.args.redial?.conversationId, this.goAudible())), t.kind === "response-ended") {
            if (this.ignoreAsyncUpdateEndResponseId !== void 0 && t.responseId === this.ignoreAsyncUpdateEndResponseId) {
                this.ignoreOneAsyncUpdateEnd = !1, this.ignoreAsyncUpdateEndResponseId = void 0;
                return;
            }
            if (this.ignoreOneAsyncUpdateEnd) {
                this.ignoreOneAsyncUpdateEnd = !1;
                return;
            }
        }
        t.kind === "response-created" && this.endCutAsyncUpdate();
        const n = this.gate.awaitingOurResponse(), i = this.gate.callerTookTheResponse(), r = this.gate.responseIsInFlight();
        if (this.gate.onWireEvent(t.kind), t.kind === "speech-stopped" && (this.args.handlers.onCallerSpeechStopped?.(), this.micLoudAt = -1, this.endCutAsyncUpdate(), this.armQuietRelease(Ozt, "defer")), t.kind === "speech-started") {
            this.armQuietRelease(Nzt, "lost"), this.responses.callerInterrupted(), this.audible && this.greetingGrace.callerSpoke(), this.args.handlers.onCallerSpeechStarted?.({
                bargedIn: r
            }), this.releaseSpokenAudioWaiters(), (this.gate.callerTookTheResponse() || this.assistantText.size > 0 || this.heardSpans.size > 0) && this.closeHeardAssistantTranscripts(), this.gate.callerTookTheResponse() && this.openResponseId !== void 0 && this.sealedResponseIds.add(this.openResponseId);
            const o = this.dropScheduledSpeech();
            this.asyncUpdateResponse && (this.gate.noteAsyncUpdateCut(), this.asyncUpdateCutAwaitingGateEnd = !0), o.length > 0 && (this.cutsOwed = this.gate.assistantIsResponding() && !this.asyncUpdateResponse ? o : [], this.sendTruncations(o));
        }
        if (t.kind === "response-created") {
            this.responsePlayedAudio.set(this.responseSerialValue, this.playedAudioThisResponse), this.responseSerialValue += 1, this.quietReleaseKind === "defer" && this.clearQuietRelease(), this.ignoreOneAsyncUpdateEnd = !1, this.openResponseId !== void 0 && t.responseId !== void 0 && t.responseId !== this.openResponseId && this.sealedResponseIds.add(this.openResponseId), t.responseId !== void 0 && (this.openResponseId = t.responseId), this.playedAudioThisResponse = !1, this.askedThisResponse = n;
            let o = n;
            n || (t.responseTrigger === "async_update" ? this.responses.orchestratorStartedAResponse() : o = this.responses.serverStartedAResponse()), this.carriesAskThisResponse = o, this.thisAskText = o ? this.carriedAskText : void 0, this.thisAskTexts = o ? this.carriedAskTexts : void 0, this.thisAskIsResult = o && this.carriedAskIsResult, o && (this.carriedAskText = void 0, this.carriedAskTexts = void 0, this.carriedAskIsResult = !1), this.spokeWordsThisResponse = !1, this.sawToolThisResponse = !1;
            for (const a of this.closedAssistant)a !== "assistant" && (this.sealedAssistantItems.add(a), this.supersededAssistantItems.add(a));
            this.assistantText.delete("assistant"), this.assistantDeltas.delete("assistant"), this.cutsOwed = [], this.asyncUpdateResponse = t.responseTrigger === "async_update", this.asyncUpdateResponse && this.acceptOldestPendingWorkLanded(), this.callerTookAssistantTranscript = !1, this.openedAssistantItems.clear(), this.closedAssistant.delete("assistant");
        }
        if (t.kind === "response-ended") {
            const o = !t.cancelled && this.askedThisResponse && !this.playedAudioThisResponse && !this.spokeWordsThisResponse && !this.sawToolThisResponse, a = this.thisAskText, c = this.carriesAskThisResponse && this.thisAskIsResult && !this.playedAudioThisResponse && (i || this.callerTookAssistantTranscript) && a !== void 0 && !this.returnedUnheard.has(a);
            c && a !== void 0 && (this.returnedUnheard.add(a), this.heldWorkLanded.push(this.thisAskTexts ?? [
                a
            ])), this.askedThisResponse = !1, this.carriesAskThisResponse = !1, this.asyncUpdateCutAwaitingGateEnd = !1, this.sendTruncations(this.cutsOwed), this.cutsOwed = [], this.releaseSpokenAudioWaiters(), this.responses.responseEnded(i), this.asyncUpdateResponse && this.acknowledgeOldestPendingWorkLanded(), this.asyncUpdateResponse = !1, this.releaseHeldWorkLanded(), o && !c && this.args.handlers.onEmptyAskedReply?.({
                text: this.thisAskText,
                askWasResult: this.thisAskIsResult
            });
        }
        if (t.kind === "audio" && this.gate.mayPlayAudio() && this.context !== void 0) {
            const o = Km_(zm_(t.audioBase64));
            o.length > 0 && (this.responses.responseSpoke(), this.playedAudioThisResponse = !0, this.play(o, t.playback), this.args.handlers.onAudioPlayed?.());
        }
        t.kind === "session-ready" && (this.sessionReady || this.args.handlers.onConnectEdge?.({
            phase: "session_created"
        }), this.sessionReady = !0, this.goAudible());
        const s = this.spokenTurn(t);
        if (s !== void 0) {
            s.speaker === "assistant" && s.text.trim() !== "" && (this.spokeWordsThisResponse = !0);
            const o = s.speaker === "assistant" && t.kind === "transcript", c = (s.speaker === "assistant" ? this.assistantItemSerial.get(s.itemId) : void 0) ?? this.responseSerialValue, l = c === this.responseSerialValue ? this.playedAudioThisResponse : this.responsePlayedAudio.get(c) ?? !1;
            this.args.handlers.onTranscriptTurn({
                ...s,
                final: o,
                responseSerial: c,
                ...o ? {
                    heard: l
                } : {}
            });
        }
        if (t.kind === "tool" && (this.sawToolThisResponse = !0, this.toolAnswersOwed += 1, this.args.handlers.onToolCall({
            ...t.tool,
            alreadySpoke: this.spokeWordsThisResponse
        })), t.kind === "error") {
            this.audible && this.args.handlers.onProtocolFault?.(t.fault);
            const o = t.error ?? "", a = up_(this.pendingWorkLanded, this.acceptedPendingWorkLanded, o, t.errorEventId).map((c)=>{
                const l = this.pendingWorkLanded.get(c);
                return this.pendingWorkLanded.delete(c), {
                    eventId: c,
                    texts: l?.texts ?? [],
                    atMs: l?.atMs ?? 0
                };
            });
            if (a.length > 0) {
                this.workLandedWire = "seeded-tool-pair", this.args.handlers.onAsyncUpdateRejected?.(o);
                const c = a.map((l)=>l.texts).filter((l)=>l.length > 0);
                this.heldWorkLanded.unshift(...c), this.releaseHeldWorkLanded();
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
                protocolFault: t.fault
            });
        }
    }
    spokenTurn(e) {
        if (e.kind === "assistant-delta") {
            const i = e.assistantDelta.itemId;
            if (this.sealedAssistantItems.has(i) || this.dropSealedResponse(i, e.responseId)) return;
            const r = (this.assistantDeltas.get(i) ?? "") + e.assistantDelta.delta;
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
        if (e.kind === "truncation") {
            const i = e.transcript.itemId;
            if (this.supersededAssistantItems.has(i)) return;
            this.closedAssistant.add(i);
            const r = this.assistantText.get(i) ?? "";
            return e.transcript.text.length <= r.length ? void 0 : (this.assistantText.set(i, e.transcript.text), e.transcript);
        }
        if (e.kind !== "transcript") return;
        if (e.transcript.speaker === "user") return this.callerTurn(e.transcript, e.finished);
        const t = e.transcript.itemId;
        if (this.sealedAssistantItems.has(t) || this.dropSealedResponse(t, e.responseId)) return;
        const n = this.closedAssistant.has(t);
        if (this.closedAssistant.add(t), !(n || this.gate.callerTookTheResponse() || this.gate.callerIsSpeaking() || this.callerTookAssistantTranscript || this.openedAssistantItems.size > 0 && !this.openedAssistantItems.has(t))) return this.openedAssistantItems.add(t), this.noteAssistantItem(t), this.assistantText.set(t, e.transcript.text), e.transcript;
    }
    noteAssistantItem(e) {
        this.assistantItemSerial.has(e) || this.assistantItemSerial.set(e, this.responseSerialValue);
    }
    dropSealedResponse(e, t) {
        return t === void 0 || !this.sealedResponseIds.has(t) ? !1 : (e !== "" && e !== "assistant" && this.sealedAssistantItems.add(e), !0);
    }
    closeHeardAssistantTranscripts() {
        for (const e of this.assistantText.keys())this.closedAssistant.add(e);
        for (const e of this.heardSpans.values())e.itemId !== "" && this.closedAssistant.add(e.itemId);
        this.closedAssistant.add("assistant"), this.callerTookAssistantTranscript = !0;
    }
    callerTurn(e, t) {
        if (t) this.completedCallerItems.add(e.itemId);
        else if (this.completedCallerItems.has(e.itemId) && e.text.length <= (this.callerText.get(e.itemId) ?? "").length) return;
        return this.callerText.set(e.itemId, e.text), e;
    }
    async startCapture() {
        let e;
        const t = setTimeout(()=>{
            this.finished || (this.args.handlers.onConnectEdge?.({
                phase: "mic_timeout"
            }), this.finish({
                closeClean: !1,
                code: 1011,
                reason: "microphone"
            }));
        }, D8h);
        try {
            if (e = await Vm_(this.args.inputDeviceId), clearTimeout(t), this.finished) {
                DPo(e);
                return;
            }
            const n = new AudioContext({
                sampleRate: p7e
            }), i = n.createMediaStreamSource(e), r = n.createScriptProcessor(I8h, 1, 1);
            r.onaudioprocess = (o)=>{
                const a = o.inputBuffer.getChannelData(0);
                this.noteLocalMic(a), !(this.muted || !this.audible || this.socket.readyState !== WebSocket.OPEN) && this.send({
                    type: "input_audio_buffer.append",
                    audio: Xm_(Ym_(a))
                });
            };
            const s = n.createGain();
            s.gain.value = 0, i.connect(r), r.connect(s), s.connect(n.destination), this.context = n, this.stream = e, this.processor = r, this.captureReady = !0, this.args.handlers.onConnectEdge?.({
                phase: "mic_granted"
            }), this.goAudible();
        } catch (n) {
            if (clearTimeout(t), e !== void 0 && DPo(e), this.finished) return;
            this.args.handlers.onConnectEdge?.({
                phase: "mic_denied",
                errorClass: Q5n(n)
            }), this.finish({
                closeClean: !1,
                code: 1011,
                reason: "microphone"
            });
        }
    }
    play(e, t) {
        const n = this.context;
        if (n === void 0 || e.length === 0) return;
        const i = n.createBuffer(1, e.length, p7e);
        i.getChannelData(0).set(e);
        const r = n.createBufferSource();
        r.buffer = i, r.connect(n.destination), this.speakerTap !== void 0 && r.connect(this.speakerTap);
        const s = Math.max(n.currentTime, this.playbackCursor);
        if (r.start(s), this.scheduled.add(r), r.onended = ()=>{
            this.scheduled.delete(r), this.scheduled.size === 0 && (this.responses.speechEnded(), this.releaseHeldWorkLanded(), this.heardSpans.clear());
        }, this.playbackCursor = s + i.duration, t === void 0 || t.itemId === "") return;
        const o = `${t.itemId}:${t.contentIndex}`, a = this.heardSpans.get(o);
        if (a === void 0) {
            this.heardSpans.set(o, {
                itemId: t.itemId,
                contentIndex: t.contentIndex,
                startsAt: s,
                endsAt: this.playbackCursor
            });
            return;
        }
        a.endsAt = this.playbackCursor;
    }
    unheardCuts() {
        const e = this.context;
        if (e === void 0) return [];
        const t = e.currentTime, n = [];
        for (const i of this.heardSpans.values())t >= i.endsAt || n.push({
            itemId: i.itemId,
            contentIndex: i.contentIndex,
            audioEndMs: Math.max(0, (t - i.startsAt) * 1e3)
        });
        return n;
    }
    sendTruncations(e) {
        for (const t of e)this.send(a4h.frame(t));
    }
    dropScheduledSpeech() {
        if (this.scheduled.size === 0) return [];
        const e = this.unheardCuts();
        for (const t of this.scheduled)t.onended = null, t.stop(), t.disconnect();
        return this.scheduled.clear(), this.heardSpans.clear(), this.playbackCursor = 0, this.releasePlaybackDrain(), e;
    }
    goAudible() {
        this.audible || this.finished || !this.captureReady || !this.sessionReady || this.resumed === void 0 || (this.audible = !0, this.resumed ? this.releaseHeldWorkLanded() : (this.greetingGrace.start(), this.args.redial === void 0 && this.play(r4h.render(p7e), void 0)), this.args.handlers.onCallAudible());
    }
    send(e) {
        this.socket.readyState === WebSocket.OPEN && (this.lastOut = {
            frame: e.type,
            atMs: Date.now()
        }, e.type !== "input_audio_buffer.append" && (this.lastOutControl = this.lastOut), e.type === "session.update" && this.audible && (this.liveUpdates += 1, this.lastLiveUpdateAtMs = this.lastOut.atMs), this.socket.send(JSON.stringify(e)));
    }
    lastFrames(e) {
        const t = Date.now(), { lastIn: n, lastOut: i, lastInControl: r, lastOutControl: s, lastLiveUpdateAtMs: o } = this;
        return {
            fault_last_in: n?.frame ?? "absent",
            ...n && {
                fault_last_in_ms: t - n.atMs
            },
            fault_last_out: i?.frame ?? "absent",
            ...i && {
                fault_last_out_ms: t - i.atMs
            },
            fault_last_in_control: r?.frame ?? "absent",
            ...r && {
                fault_last_in_control_ms: t - r.atMs
            },
            fault_last_out_control: s?.frame ?? "absent",
            ...s && {
                fault_last_out_control_ms: t - s.atMs
            },
            fault_updates: this.liveUpdates,
            ...o !== void 0 && {
                fault_last_update_ms: t - o
            },
            fault_responding: this.responseIsInFlight(),
            fault_muted: this.muted,
            fault_via: e,
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
    finish(e) {
        if (this.finished) return;
        const t = this.audible, n = e.recoverable === !0;
        this.finished = !0, this.clearQuietRelease(), this.responses.close(), n ? this.heldWorkLanded.unshift(...this.unsaidOnTheWire()) : this.heldWorkLanded.length = 0, this.lineAudioValue = void 0, this.pendingWorkLanded.clear(), this.acceptedPendingWorkLanded.clear(), this.greetingGrace.dispose(), this.releaseSpokenAudioWaiters(), this.dropScheduledSpeech(), this.processor !== void 0 && (this.processor.onaudioprocess = null, this.processor.disconnect()), this.stream !== void 0 && DPo(this.stream), this.speakerTap?.disconnect(), this.context?.close(), this.processor = void 0, this.speakerTap = void 0, this.stream = void 0, this.context = void 0, t && !n && E8h(), (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING) && this.socket.close(n ? YMo : 1e3), this.args.handlers.onClosed(e);
    }
};

}
