import { Bv, rh } from "./De_3.js";
import { Ai, Ct, He, Hp, Oo, Se, ZL, bt, cn, jn, mge, ve, we } from "./HVr.js";
import { ie } from "./actions_2.js";
import { la, xMe } from "./aiMiscServices.js";
import { Sg, jp } from "./aiService.js";
import { DHt, LLn } from "./analytics_connectweb.js";
import { PLn, Wro, _Wi } from "./analytics_pb.js";
import { bn } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { db, nE } from "./backendClient.js";
import { _do, hm } from "./background_composer_pb.js";
import { e6h, kzt } from "./call-record.ts";
import { Xir, c9n, j0t, uUh } from "./call-records.ts";
import { Ar } from "./cancellation.js";
import { Err } from "./client.ts";
import { rgo, zqi } from "./cloudAgentVoiceCallsService.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { FR, z5 } from "./composerUtilsServiceTypes.js";
import { Cn, qt } from "./configuration.js";
import { Qo } from "./connect-error.js";
import { _6h } from "./connect-report.ts";
import { hg } from "./connect.js";
import { d8h } from "./controller.ts";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fl, rc } from "./host.js";
import { xTe } from "./index_20.ts";
import { N4h } from "./index_21.ts";
import { Trr } from "./index_23.ts";
import { Ze, _t } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { Qn, Wn } from "./log.js";
import { C6h, T6h, k6h, srr, w6h } from "./mint-fault.ts";
import { Ka, jo } from "./productService.js";
import { Um, mn, pd } from "./qIc.js";
import { E8h, M8h } from "./realtime-session.ts";
import { j8h } from "./realtime-voice-transcript.react.js";
import { BPo, OPo } from "./realtimeVoiceAgents.js";
import { H8h, Irr, W8h } from "./realtimeVoiceCallSync.js";
import { O8h, ag_ } from "./realtimeVoiceDraftAgent.js";
import { Mg_, e7h } from "./realtimeVoiceHeldAgent.js";
import { jPo, zPo } from "./realtimeVoiceRecords.js";
import { LPo, NPo, u9n } from "./realtimeVoiceSettings.js";
import { Vn, yn } from "./storage_2.js";
import { Crr } from "./system-clock.ts";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
import { hu, vk } from "./utils_pb.js";
import { Js, zn } from "./uuid.js";
import { K5n, Qir, SMo, Zir, n6h, yMo } from "./voice-settings.ts";
import { C4h, T4h, iPo, nPo, rPo, w4h } from "./words.ts";
import { fte, xrr } from "./workspaceLifecycleService.js";
function Uh_({ record: e, live: t, nowMs: n }) {
    return t.phase === "connecting" && t.callId === e.callId ? {
        phase: "connecting"
    } : t.phase === "live" && t.callId === e.callId ? {
        phase: "live",
        connectedAtMs: t.connectedAtMs
    } : Q9h(e, Xir(e), n);
}
function Z9h(e) {
    return e.endedAtMs === void 0 ? e.lastHeardAtMs + e6h : void 0;
}
function $h_(e, t) {
    return Q9h(e, Z9h(e), t);
}
function Q9h({ connectedAtMs: e, endedAtMs: t, lastHeardAtMs: n }, i, r) {
    return i !== void 0 && r < i ? e === void 0 ? {
        phase: "connecting"
    } : {
        phase: "live",
        connectedAtMs: e
    } : {
        phase: "ended",
        durationMs: e === void 0 ? void 0 : (t ?? n) - e
    };
}
function i6h(e) {
    return Zir.some((t)=>t.id === e);
}
function r6h(e) {
    const t = e?.trim().toLowerCase();
    return i6h(t) ? t : yMo;
}
function s6h(e) {
    return Qir.find((t)=>t.value === e)?.value ?? SMo;
}
function qh_(e) {
    return n6h(e) ? e : K5n;
}
function o6h(e) {
    return {
        speed: s6h(e.speed),
        language: qh_(e.language)
    };
}
function zh_({ current: e, next: t }) {
    return {
        ...t.voiceId === e.voiceId ? {} : {
            voiceId: t.voiceId
        },
        ...t.speed === e.speed ? {} : {
            speed: t.speed
        },
        ...t.language === e.language ? {} : {
            language: t.language
        }
    };
}
function Yh_(e) {
    return _6h.has(e.phase) ? !0 : e.phase === "socket_close" && e.closeClean === !1;
}
function Xh_(e) {
    const t = (i)=>i === void 0 ? void 0 : String(i), n = (i)=>i === void 0 ? void 0 : String(Math.round(i));
    return {
        phase: e.phase,
        call_id: e.callId,
        realtime_conversation_id: e.realtimeConversationId,
        elapsed_ms: String(Math.round(e.elapsedMs)),
        error_class: e.errorClass,
        close_code: n(e.closeCode),
        close_clean: t(e.closeClean),
        socket_open: t(e.socketOpen),
        session_created: t(e.sessionCreated),
        mic_ready: t(e.micReady),
        beat: n(e.beat)
    };
}
function Zh_(e) {
    if (typeof e != "string" || e.length === 0) return null;
    const t = T6h.get(e);
    return t !== void 0 ? {
        kind: "mint",
        reason: t.reason,
        http: t.http
    } : e.startsWith(srr) ? {
        kind: "mint",
        reason: "unrecognized",
        http: "unrecognized"
    } : null;
}
function _p_(e) {
    return "kind" in e ? `sand.${e.kind}` : "sand.voice_call";
}
function bp_(e) {
    if (!("kind" in e)) return e.phase === "fault" || e.phase === "ended" && e.outcome === "failed";
    switch(e.kind){
        case "voice_call_connect":
            return Yh_(e);
        case "voice_call_fault":
            return !0;
        case "voice_call_delivery":
            return e.settlement.startsWith("dropped_");
        default:
            return e;
    }
}
function yp_(e, t) {
    const n = "kind" in e ? Sp_(e) : e;
    return Object.fromEntries(Object.entries({
        ...n,
        ...t
    }).filter(([, i])=>i !== void 0).map(([i, r])=>[
            i,
            String(r)
        ]));
}
function Sp_(e) {
    switch(e.kind){
        case "voice_call_connect":
            return Xh_(e);
        case "voice_call_fault":
            return {
                fault: e.fault,
                tool: e.tool,
                call_id: e.callId,
                realtime_conversation_id: e.realtimeConversationId,
                error_class: e.errorClass,
                failure_code: e.failureCode
            };
        case "voice_call_delivery":
            return {
                settlement: e.settlement,
                carries: e.carries,
                call_id: e.callId
            };
        default:
            return e;
    }
}
function Tp_(e, t, n) {
    return {
        code: e,
        reasons: [
            t,
            ...n.map((i)=>i.details?.detail ?? "")
        ],
        mintRefusal: n.map((i)=>i.details?.additionalInfo[k6h]).find((i)=>i !== void 0),
        dailyLimit: n.some((i)=>i.details?.additionalInfo[w6h] === C6h)
    };
}
function Ep_(e) {
    return e.code === rPo || e.code === nPo || e.code === iPo && e.dailyLimit || e.reasons.some((t)=>t.includes("not_configured"));
}
function xp_(e, t) {
    if (e === "microphone") return {
        code: "microphone",
        message: "Microphone access was denied or is unavailable."
    };
    if (e === "dropped") return {
        code: "connection",
        message: "Voice session ended unexpectedly."
    };
    if (e.thrown instanceof Error && e.thrown.name === "AbortError") return {
        code: "connection",
        message: "Could not start the voice session."
    };
    const n = t(e.thrown);
    if (n.reasons.some((i)=>i.includes("not_configured"))) return {
        code: "credential",
        message: "Realtime voice is not configured."
    };
    if (n.code === rPo) return {
        code: "credential",
        message: "Realtime voice requires sign-in."
    };
    if (n.code === nPo) return {
        code: "credential",
        message: "Realtime voice is not available for this account."
    };
    if (n.code === iPo) {
        const i = n.reasons.slice(1).find(Boolean);
        if (i !== void 0) return {
            code: "limit",
            message: i
        };
    }
    return {
        code: "connection",
        message: "Could not start the voice session."
    };
}
function Ip_(e) {
    return {
        credential: {
            clientSecret: e.clientSecret,
            model: e.model,
            websocketUrl: e.websocketUrl
        },
        voiceId: i6h(e.voiceId) ? e.voiceId : void 0,
        idleSeconds: e.idleSeconds
    };
}
function Wp_(e) {
    return e.startsWith(j0t) ? e.slice(j0t.length, e.lastIndexOf("/")) : void 0;
}
function Gp_(e) {
    if (!e.startsWith(c9n)) return;
    const [t, n, i] = e.slice(c9n.length).split("/"), r = Number(i);
    return t && n && Number.isInteger(r) ? {
        agentId: t,
        callId: n,
        chunk: r
    } : void 0;
}
function T8h(e) {
    return new M8h(e);
}
function Jm_({ isEnabled: e, begin: t, readThrown: n, open: i = T8h, ...r }) {
    let s;
    const o = new d8h({
        ...r,
        begin: ()=>{
            if (!e()) return {
                kind: "refused",
                failure: T4h
            };
            const a = new AbortController, c = t(a.signal);
            if (c.kind === "refused") return a.abort(), c;
            const l = {
                session: void 0
            };
            return s = l, {
                kind: "begun",
                host: {
                    ...c.host,
                    open: (u)=>(l.session = i({
                            ...u,
                            signal: a.signal
                        }), l.session),
                    chimeDisconnect: E8h,
                    end: ()=>{
                        c.host.end?.(), a.abort(), s === l && (s = void 0);
                    }
                }
            };
        },
        words: w4h,
        failure: (a)=>xp_(a, n),
        mintFault: (a)=>Zh_(n(a).mintRefusal),
        mintIsFinal: (a)=>Ep_(n(a)),
        lines: C4h,
        clock: Crr
    });
    return {
        controller: o,
        lineAudio: ()=>o.state.phase === "live" ? s?.session?.lineAudio() : void 0
    };
}
function L8h(e) {
    return o6h({
        speed: rh(e, "voiceModeSpeed"),
        language: rh(e, "voiceModeLanguage")
    });
}
function ig_(e, { current: t, next: n }) {
    const { speed: i, language: r } = zh_({
        current: t,
        next: n
    });
    i !== void 0 && Bv(e, "voiceModeSpeed", i), r !== void 0 && Bv(e, "voiceModeLanguage", r);
}
function rg_(e, t) {
    const n = Ct.filter(e.onDidChangeValue(-1, void 0, t), (i)=>LPo.has(i.key), t);
    return Ct.map(n, ()=>L8h(e), t);
}
function sg_(e) {
    return {
        voiceModeSpeed: rh(e, "voiceModeSpeed"),
        voiceModeLanguage: rh(e, "voiceModeLanguage"),
        voiceModeInputDeviceId: rh(e, "voiceModeInputDeviceId")
    };
}
function og_(e, t) {
    return Ct.signal(Ct.filter(e.onDidChangeValue(-1, void 0, t), (n)=>LPo.has(n.key), t));
}
function F8h(e, t) {
    return Um(t.agentId) && t.connectedAtMs !== void 0 && t.endedAtMs === void 0 && e.get(Irr(t), -1) === void 0;
}
function B8h(e, t) {
    return F8h(e, t) ? Z9h(t) : Xir(t);
}
function hg_(e, t, n, i) {
    return F8h(e, t) ? $h_(t, i) : Uh_({
        record: t,
        live: n,
        nowMs: i
    });
}
function Sg_(e) {
    let t = jPo.get(e);
    return t === void 0 && (t = new uUh({
        get: (n)=>e.get(n, -1),
        keys: ()=>e.keys(-1, 0),
        store: (n, i)=>e.store(n, i, -1, 0),
        remove: (n)=>e.remove(n, -1)
    }, j8h, (n)=>B8h(e, n)), jPo.set(e, t)), t;
}
function kg_(e, t) {
    return X8h(e, t, Wp_);
}
function wg_(e, t) {
    return X8h(e, t, Gp_);
}
function X8h(e, t, n) {
    const i = e.onDidChangeValue(-1, void 0, t);
    return (r, s, o)=>i((a)=>{
            const c = n(a.key);
            c !== void 0 && r.call(s, c);
        }, void 0, o);
}
function Pg_(e) {
    const t = Qo.from(e);
    return Tp_(t.code, t.message, t.findDetails(vk));
}
var KPo, YPo, fZ, t7h, n7h, f7e, i7h, Fnt, vte, r7h, Drr;
export { $h_, B8h, Drr, Ep_, F8h, Fnt, Gp_, Ip_, Jm_, KPo, L8h, Pg_, Q9h, Sg_, Sp_, T8h, Tp_, Uh_, Wp_, X8h, Xh_, YPo, Yh_, Z9h, Zh_, _p_, bp_, f7e, fZ, hg_, i6h, i7h, ig_, kg_, n7h, o6h, og_, qh_, r6h, r7h, rg_, s6h, sg_, t7h, vte, wg_, xp_, yp_, zh_ };
var __wakaru_Moe_initialized = false;
export function Moe() {
if (__wakaru_Moe_initialized) return;
__wakaru_Moe_initialized = true;
"use strict";
x(), hg(), hu(), LLn(), PLn(), Cn(), bn(), Ar(), bt(), Se(), jn(), bn(), Js(), Pn(), Ze(), Ka(), xTe(), N4h(), Err(), nl(), z5(), la(), Sg(), nE(), Za(), qs(), Fl(), $d(), xrr(), Qn(), Ku(), Vn(), Trr(), NPo(), BPo(), ag_(), Mg_(), zPo(), W8h(), rgo(), hm(), KPo = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), YPo = (e)=>{
    throw TypeError(e);
}, fZ = (e, t)=>(n, i)=>t(n, i, e), t7h = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && YPo("Object expected");
        var i, r;
        n && (i = t[KPo("asyncDispose")]), i === void 0 && (i = t[KPo("dispose")], n && (r = i)), typeof i != "function" && YPo("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, n7h = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, f7e = "glass_realtime_voice", i7h = 500, Fnt = (e)=>`${u9n} ${e}`, vte = pd("realtimeVoiceService"), r7h = 1e4, Drr = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f){
        super(), this.aiService = e, this.voiceInputService = t, this.experimentService = n, this.logService = i, this.composerDataService = r, this.agents = s, this.configurationService = o, this.storageService = a, this.composerUtilsService = c, this.cursorAuthenticationService = l, this.productService = h, this.instantiationService = p, this._onDidChangeState = this._register(new ve), this.onDidChangeState = this._onDidChangeState.event, this._onDidChangeTrayState = this._register(new ve), this.onDidChangeTrayState = this._onDidChangeTrayState.event, this._onDidChangeDefaultVoice = this._register(new ve), this.onDidChangeDefaultVoice = this._onDidChangeDefaultVoice.event, this.writingVoiceSettings = !1, this.rowsInFlight = new Set, this.turnsPerChunk = kzt;
        const v = this._register(new He);
        this.onDidChangeCalls = kg_(this.storageService, v), this.onDidChangeCallTurns = wg_(this.storageService, v), this.records = Sg_(this.storageService), this.callSync = this._register(new H8h(this.records, async (R, D)=>{
            await (await this.aiService.backgroundComposerClient()).saveCloudAgentVoiceCall(new _do({
                bcId: R,
                call: D
            }));
        }, this.storageService, {
            warn: (R, ...D)=>this.logService.warn(Fnt(R), ...D)
        })), { controller: this.controller, lineAudio: this.lineAudio } = Jm_({
            isEnabled: ()=>this.realtimeVoiceEnabled(),
            begin: (R)=>this.begin(R),
            readThrown: Pg_,
            open: (R)=>this.openSession({
                    ...R,
                    inputDeviceId: rh(this.storageService, "voiceModeInputDeviceId")
                }),
            records: {
                write: (R, D)=>R.endedAtMs !== void 0 && R.agentId === this.draftCall?.draftId ? this.callSync.controllerRecords.remove(R) : this.callSync.controllerRecords.write(R, D),
                remove: (R)=>this.callSync.controllerRecords.remove(R),
                move: (R)=>this.callSync.controllerRecords.move(R),
                read: (R, D)=>this.callSync.controllerRecords.read(R, D)
            },
            log: {
                info: (R)=>this.logService.info(Fnt(R)),
                warn: (R, ...D)=>this.logService.warn(Fnt(R), ...D),
                error: (R, ...D)=>this.logService.error(Fnt(R), ...D)
            },
            newCallId: ()=>this.newCallId(),
            telemetry: (R)=>this.sendRow(R),
            onDidChangeState: (R)=>this._onDidChangeState.fire(R),
            settings: L8h(this.storageService),
            saveVoice: (R)=>this.saveVoice(R),
            readDefaultVoice: ()=>this.readDefaultVoice(),
            onDidChangeDefaultVoice: ()=>this._onDidChangeDefaultVoice.fire()
        });
        const b = async ()=>{
            this.controller.hangUp("window_closed"), await Hp(Promise.allSettled([
                ...this.rowsInFlight
            ]), i7h);
        };
        this._register(u instanceof fte ? u.registerProcessParticipant({
            id: "realtime-voice-call",
            order: 1,
            start: ()=>{},
            stop: b
        }) : u.onWillShutdown((R)=>R.join(b(), {
                id: "join.realtimeVoiceCall",
                label: "Sending the voice call's last rows"
            })));
        let y = this.realtimeVoiceEnabled();
        const T = ()=>{
            for (const R of f.loadedAgentIds())this.callSync.apply(R, f.getCalls(R));
        };
        y && (this.controller.refreshDefaultVoice(), this.callSync.closeUnclosed(), T()), this._register(f.onDidChange((R)=>{
            y && this.callSync.apply(R, f.getCalls(R));
        })), this._register(n.onDidChangeGates(()=>{
            const R = y;
            y = this.realtimeVoiceEnabled(), y && !R && (this.controller.refreshDefaultVoice(), this.callSync.closeUnclosed(), T());
        })), this._register(g.onDidChangeFocus((R)=>{
            R && y && this.controller.refreshDefaultVoice();
        }));
        let E = l.getCurrentAuthId();
        this._register(l.onDidChangeAccessToken(()=>{
            if (l.getCurrentAuthId() !== E) {
                E = l.getCurrentAuthId();
                const R = y;
                y = this.realtimeVoiceEnabled(), this.controller.resetDefaultVoice(), this.callSync.reset(), (R || y) && this.controller.dismissFailure(), y && this.controller.refreshDefaultVoice();
            }
        }));
        const A = this._register(new He);
        this.onDidChangeStoredVoiceSettings = og_(this.storageService, A), A.add(rg_(this.storageService, A)((R)=>{
            this.writingVoiceSettings || this.controller.applySettings(R);
        }));
    }
    getState() {
        return this.controller.state;
    }
    getCalls(e) {
        return this.records.calls(e);
    }
    getCall(e) {
        return this.records.header(e);
    }
    getCallTurns(e, t) {
        return this.records.chunk(e, t);
    }
    deriveCardState(e) {
        return hg_(this.storageService, e, this.controller.state, Date.now());
    }
    staleAtMs(e) {
        return B8h(this.storageService, e);
    }
    getTrayState() {
        return this.call?.tray ?? "closed";
    }
    setTrayState(e) {
        const t = this.call;
        t === void 0 || t.tray === e || (t.tray = e, e === "settings" && this.uiOpened("full_menu"), this._onDidChangeTrayState.fire());
    }
    uiOpened(e) {
        this.controller.uiOpened(e);
    }
    start(e, t, n) {
        return this.draftCall = n === void 0 ? void 0 : {
            draftId: e.agentId,
            send: n
        }, this.controller.start(e, t);
    }
    realtimeVoiceEnabled() {
        return this.experimentService.checkFeatureGate(f7e, {
            disableExposureLog: !0
        });
    }
    begin(e) {
        const t = this.voiceInputService.reserveMicrophone();
        if (t === void 0) return {
            kind: "refused",
            failure: {
                code: "dictation-active",
                message: "Stop dictation before starting a voice session."
            }
        };
        const n = new He, i = {
            tray: "closed",
            microphone: t,
            signal: e,
            agentLease: n,
            archiveWatch: n.add(new cn),
            ended: !1
        };
        return this.call = i, {
            kind: "begun",
            host: {
                userName: this.cursorAuthenticationService.getCachedAccountProfile()?.displayName,
                mint: (r)=>this.mint(i, r.agentId),
                holdAgent: (r)=>this.holdAgent(i, r.agentId),
                end: ()=>{
                    i.ended = !0, i.agentLease.dispose(), i.microphone.dispose(), this.call === i && (this.call = void 0);
                }
            }
        };
    }
    setMuted(e) {
        this.controller.setMuted(e);
    }
    getLineAudio() {
        return this.lineAudio();
    }
    setVoiceSettings(e) {
        this.writingVoiceSettings = !0;
        try {
            ig_(this.storageService, {
                current: this.controller.settings,
                next: e
            });
        } finally{
            this.writingVoiceSettings = !1;
        }
        this.controller.pickCallSettings(e);
    }
    getStoredVoiceSettings() {
        return sg_(this.storageService);
    }
    storeVoiceSetting(e, t) {
        Bv(this.storageService, e, t);
    }
    getDefaultVoice() {
        return this.controller.defaultVoice;
    }
    pickDefaultVoice(e) {
        this.controller.pickDefaultVoice(e);
    }
    async readDefaultVoice() {
        const e = await this.aiService.aiClient(), { voiceId: t } = await e.getRealtimeVoice({});
        return r6h(t);
    }
    async saveVoice(e) {
        var t = [];
        try {
            const r = this.cursorAuthenticationService.getCurrentAuthId(), s = new AbortController, o = Crr.setTimer(()=>s.abort(new Error("voice save timed out")), r7h), a = t7h(t, mge(s.signal));
            try {
                const c = await ZL(this.aiService.aiClient(), a.token);
                this.cursorAuthenticationService.getCurrentAuthId() === r && await c.setRealtimeVoice(e, {
                    signal: s.signal
                });
            } finally{
                o();
            }
        } catch (r) {
            var n = r, i = !0;
        } finally{
            n7h(t, n, i);
        }
    }
    async holdAgent(e, t) {
        const n = await this.agents.acquire(t).catch((o)=>{
            this.logService.warn(Fnt("agent was not taken"), o);
        });
        if (n === void 0) throw this.logService.warn(Fnt("this window cannot hold the agent")), new Error("this window cannot hold the agent");
        if (e.ended) {
            n.dispose();
            return;
        }
        const i = this.draftCall?.draftId === t ? this.draftCall : void 0;
        i !== void 0 && (e.draft = new O8h(n, i.send, {
            acquire: (o)=>this.agents.acquire(o)
        }));
        const r = e.draft ?? n;
        e.agentLease.add(r);
        const s = ()=>{
            const o = r.header?.isArchived;
            e.archiveWatch.value = o?.onChange((a)=>{
                a && !e.ended && this.controller.hangUp("agent_archived");
            }), o?.value === !0 && this.controller.hangUp("agent_archived");
        };
        return e.watchArchive = s, s(), new e7h(r, {
            composerDataService: this.composerDataService,
            composerUtilsService: this.composerUtilsService,
            agents: this.agents,
            configurationService: this.configurationService,
            logService: this.logService
        });
    }
    moveAgent(e) {
        this.controller.moveAgent(e);
        const t = this.call, n = t?.draft;
        if (t === void 0 || n === void 0) return;
        t.archiveWatch.clear();
        const i = n.follow(e);
        t.settling = i, i.then(()=>{
            !t.ended && t.settling === i && t.watchArchive?.();
        });
    }
    hangUp() {
        this.controller.hangUp();
    }
    dismissFailure() {
        this.controller.dismissFailure();
    }
    dispose() {
        this.hangUp(), super.dispose();
    }
    openSession(e) {
        return T8h(e);
    }
    newCallId() {
        return `call-${zn()}`;
    }
    sendRow(e) {
        const t = yp_(e, {
            client: this.agents.surface,
            platform: Ai ? "darwin" : Oo ? "win32" : "linux",
            app_version: this.productService.version
        });
        this.analytics ??= this._register(this.instantiationService.createInstance(db, {
            service: DHt
        }));
        const n = this.analytics.get().then((i)=>i.submitLogs({
                logs: [
                    new Wro({
                        level: bp_(e) ? _Wi.WARN : _Wi.INFO,
                        message: _p_(e),
                        metadata: t,
                        timestamp: BigInt(Date.now())
                    })
                ]
            })).catch((i)=>this.logService.warn(Fnt("call row not sent"), i));
        this.rowsInFlight.add(n), n.finally(()=>this.rowsInFlight.delete(n));
    }
    async mint(e, t) {
        const i = await (await this.aiService.aiClient()).mintRealtimeVoiceSecret({
            agentId: t
        }, {
            signal: e.signal
        });
        return Ip_(i);
    }
}, Drr = ie([
    fZ(0, jp),
    fZ(1, xMe),
    fZ(2, Kr),
    fZ(3, Wn),
    fZ(4, Zs),
    fZ(5, OPo),
    fZ(6, qt),
    fZ(7, yn),
    fZ(8, FR),
    fZ(9, na),
    fZ(10, Id),
    fZ(11, jo),
    fZ(12, _t),
    fZ(13, rc),
    fZ(14, zqi)
], Drr), mn(vte, Drr, 1, 1);

}
