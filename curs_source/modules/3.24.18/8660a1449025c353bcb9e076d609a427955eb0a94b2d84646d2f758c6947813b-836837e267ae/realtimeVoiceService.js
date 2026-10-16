import { Cke, Di, Gt, Nt, Qe, Vh, Vn, _r, aO, st, tt, xa } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { $9k, $rf, D9k, E8k, F8k, L8k, M9k, O8k, P9k, S8k, V8k, Xrf, _8k, _tf, b8k, m8k, nsf, y8k } from "./Ycg.js";
import { Ss, X0e } from "./aiMiscServices.js";
import { Dc, jl } from "./aiService.js";
import { cki, yTn } from "./analytics_connectweb.js";
import { WKr, Z8a, lki } from "./analytics_pb.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { cb, sC } from "./backendClient.js";
import { nqa, pd } from "./background_composer_pb.js";
import { qPn } from "./call-record.ts";
import { yo } from "./cancellation.js";
import { lfs } from "./client.ts";
import { HYa, XJr } from "./cloudAgentVoiceCallsService.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { WB, YM } from "./composerUtilsServiceTypes.js";
import { or, yi } from "./configuration.js";
import { dp } from "./connect.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Od, Tc } from "./host.js";
import { aBe } from "./index_20.ts";
import { Ynf } from "./index_21.ts";
import { afs } from "./index_23.ts";
import { It, dn } from "./instantiation.js";
import { Dh, gf } from "./ipa.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Ji, Li } from "./log.js";
import { fc, hu } from "./productService.js";
import { bPi, oMn } from "./realtimeVoiceAgents.js";
import { osf, ssf } from "./realtimeVoiceCallSync.js";
import { Zrf, k8k } from "./realtimeVoiceDraftAgent.js";
import { _sf, z8k } from "./realtimeVoiceHeldAgent.js";
import { oEl } from "./realtimeVoiceRecords.js";
import { YTl, _Pi } from "./realtimeVoiceSettings.js";
import { Zi, ki } from "./storage_2.js";
import { ofs } from "./system-clock.ts";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { Hu } from "./utils_pb.js";
import { Ai, Xo } from "./uuid_2.js";
import { Lie, sMn } from "./workspaceLifecycleService.js";
var aEl, lEl, zle, bsf, ysf, UMe, Ssf, ksf, FIt, TG, wsf, pfs;
export { FIt, Ssf, TG, UMe, aEl, bsf, ksf, lEl, pfs, wsf, ysf, zle };
var __wakaru_EG_initialized = false;
export function EG() {
if (__wakaru_EG_initialized) return;
__wakaru_EG_initialized = true;
"use strict";
E(), dp(), Hu(), cki(), lki(), or(), qn(), yo(), Gt(), Qe(), Di(), qn(), Xo(), Rn(), It(), hu(), aBe(), Ynf(), lfs(), Pl(), WB(), Ss(), Dc(), sC(), Rs(), _s(), Od(), zp(), sMn(), Ji(), wu(), Zi(), afs(), YTl(), bPi(), k8k(), z8k(), oEl(), osf(), HYa(), pd(), aEl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), lEl = (t)=>{
    throw TypeError(t);
}, zle = (t, e)=>(n, i)=>e(n, i, t), bsf = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && lEl("Object expected");
        var i, r;
        n && (i = e[aEl("asyncDispose")]), i === void 0 && (i = e[aEl("dispose")], n && (r = i)), typeof i != "function" && lEl("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, ysf = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, UMe = "glass_realtime_voice", Ssf = "glass_realtime_voice_new_agent", ksf = 500, FIt = (t)=>`${_Pi} ${t}`, TG = Il("realtimeVoiceService"), wsf = 1e4, pfs = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g){
        super(), this.aiService = t, this.voiceInputService = e, this.experimentService = n, this.logService = i, this.composerDataService = r, this.agents = s, this.configurationService = o, this.storageService = a, this.composerUtilsService = l, this.cursorAuthenticationService = c, this.productService = d, this.instantiationService = h, this._onDidChangeState = this._register(new tt), this.onDidChangeState = this._onDidChangeState.event, this._onDidChangeTrayState = this._register(new tt), this.onDidChangeTrayState = this._onDidChangeTrayState.event, this._onDidChangeDefaultVoice = this._register(new tt), this.onDidChangeDefaultVoice = this._onDidChangeDefaultVoice.event, this.writingVoiceSettings = !1, this.rowsInFlight = new Set, this.turnsPerChunk = qPn;
        const f = this._register(new Nt);
        this.onDidChangeCalls = O8k(this.storageService, f), this.onDidChangeCallTurns = F8k(this.storageService, f), this.records = L8k(this.storageService), this.callSync = this._register(new ssf(this.records, async (C, T)=>{
            await (await this.aiService.backgroundComposerClient()).saveCloudAgentVoiceCall(new nqa({
                bcId: C,
                call: T
            }));
        }, this.storageService, {
            warn: (C, ...T)=>this.logService.warn(FIt(C), ...T)
        })), { controller: this.controller, lineAudio: this.lineAudio } = m8k({
            isEnabled: ()=>this.realtimeVoiceEnabled(),
            begin: (C)=>this.begin(C),
            readThrown: V8k,
            open: (C)=>this.openSession({
                    ...C,
                    inputDeviceId: Dh(this.storageService, "voiceModeInputDeviceId")
                }),
            records: {
                write: (C, T)=>C.endedAtMs !== void 0 && C.agentId === this.draftCall?.draftId ? this.callSync.controllerRecords.remove(C) : this.callSync.controllerRecords.write(C, T),
                remove: (C)=>this.callSync.controllerRecords.remove(C),
                move: (C)=>this.callSync.controllerRecords.move(C),
                read: (C, T)=>this.callSync.controllerRecords.read(C, T)
            },
            log: {
                info: (C)=>this.logService.info(FIt(C)),
                warn: (C, ...T)=>this.logService.warn(FIt(C), ...T),
                error: (C, ...T)=>this.logService.error(FIt(C), ...T)
            },
            newCallId: ()=>this.newCallId(),
            telemetry: (C)=>this.sendRow(C),
            onDidChangeState: (C)=>this._onDidChangeState.fire(C),
            settings: Xrf(this.storageService),
            saveVoice: (C)=>this.saveVoice(C),
            readDefaultVoice: ()=>this.readDefaultVoice(),
            onDidChangeDefaultVoice: ()=>this._onDidChangeDefaultVoice.fire()
        });
        const _ = async ()=>{
            this.controller.hangUp("window_closed"), await Vh(Promise.allSettled([
                ...this.rowsInFlight
            ]), ksf);
        };
        this._register(u instanceof Lie ? u.registerProcessParticipant({
            id: "realtime-voice-call",
            order: 1,
            start: ()=>{},
            stop: _
        }) : u.onWillShutdown((C)=>C.join(_(), {
                id: "join.realtimeVoiceCall",
                label: "Sending the voice call's last rows"
            })));
        let b = this.realtimeVoiceEnabled();
        const y = ()=>{
            for (const C of g.loadedAgentIds())this.callSync.apply(C, g.getCalls(C));
        };
        b && (this.controller.refreshDefaultVoice(), this.callSync.closeUnclosed(), y()), this._register(g.onDidChange((C)=>{
            b && this.callSync.apply(C, g.getCalls(C));
        })), this._register(n.onDidChangeGates(()=>{
            const C = b;
            b = this.realtimeVoiceEnabled(), b && !C && (this.controller.refreshDefaultVoice(), this.callSync.closeUnclosed(), y());
        })), this._register(p.onDidChangeFocus((C)=>{
            C && b && this.controller.refreshDefaultVoice();
        }));
        let S = c.getCurrentAuthId();
        this._register(c.onDidChangeAccessToken(()=>{
            if (c.getCurrentAuthId() !== S) {
                S = c.getCurrentAuthId();
                const C = b;
                b = this.realtimeVoiceEnabled(), this.controller.resetDefaultVoice(), this.callSync.reset(), (C || b) && this.controller.dismissFailure(), b && this.controller.refreshDefaultVoice();
            }
        }));
        const k = this._register(new Nt);
        this.onDidChangeStoredVoiceSettings = S8k(this.storageService, k), k.add(b8k(this.storageService, k)((C)=>{
            this.writingVoiceSettings || this.controller.applySettings(C);
        }));
    }
    getState() {
        return this.controller.state;
    }
    getCalls(t) {
        return this.records.calls(t);
    }
    getCall(t) {
        return this.records.header(t);
    }
    getCallTurns(t, e) {
        return this.records.chunk(t, e);
    }
    deriveCardState(t) {
        return E8k(this.storageService, t, this.controller.state, Date.now());
    }
    staleAtMs(t) {
        return nsf(this.storageService, t);
    }
    getTrayState() {
        return this.call?.tray ?? "closed";
    }
    setTrayState(t) {
        const e = this.call;
        e === void 0 || e.tray === t || (e.tray = t, t === "settings" && this.uiOpened("full_menu"), this._onDidChangeTrayState.fire());
    }
    uiOpened(t) {
        this.controller.uiOpened(t);
    }
    start(t, e, n) {
        return this.draftCall = n === void 0 ? void 0 : {
            draftId: t.agentId,
            send: n
        }, this.controller.start(t, e);
    }
    realtimeVoiceEnabled() {
        return this.experimentService.checkFeatureGate(UMe, {
            disableExposureLog: !0
        });
    }
    begin(t) {
        const e = this.voiceInputService.reserveMicrophone();
        if (e === void 0) return {
            kind: "refused",
            failure: {
                code: "dictation-active",
                message: "Stop dictation before starting a voice session."
            }
        };
        const n = new Nt, i = {
            tray: "closed",
            microphone: e,
            signal: t,
            agentLease: n,
            archiveWatch: n.add(new Vn),
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
    setMuted(t) {
        this.controller.setMuted(t);
    }
    getLineAudio() {
        return this.lineAudio();
    }
    setVoiceSettings(t) {
        this.writingVoiceSettings = !0;
        try {
            _8k(this.storageService, {
                current: this.controller.settings,
                next: t
            });
        } finally{
            this.writingVoiceSettings = !1;
        }
        this.controller.pickCallSettings(t);
    }
    getStoredVoiceSettings() {
        return y8k(this.storageService);
    }
    storeVoiceSetting(t, e) {
        gf(this.storageService, t, e);
    }
    getDefaultVoice() {
        return this.controller.defaultVoice;
    }
    pickDefaultVoice(t) {
        this.controller.pickDefaultVoice(t);
    }
    async readDefaultVoice() {
        const t = await this.aiService.aiClient(), { voiceId: e } = await t.getRealtimeVoice({});
        return _tf(e);
    }
    async saveVoice(t) {
        var e = [];
        try {
            const r = this.cursorAuthenticationService.getCurrentAuthId(), s = new AbortController, o = ofs.setTimer(()=>s.abort(new Error("voice save timed out")), wsf), a = bsf(e, Cke(s.signal));
            try {
                const l = await aO(this.aiService.aiClient(), a.token);
                this.cursorAuthenticationService.getCurrentAuthId() === r && await l.setRealtimeVoice(t, {
                    signal: s.signal
                });
            } finally{
                o();
            }
        } catch (r) {
            var n = r, i = !0;
        } finally{
            ysf(e, n, i);
        }
    }
    async holdAgent(t, e) {
        const n = await this.agents.acquire(e).catch((o)=>{
            this.logService.warn(FIt("agent was not taken"), o);
        });
        if (n === void 0) throw this.logService.warn(FIt("this window cannot hold the agent")), new Error("this window cannot hold the agent");
        if (t.ended) {
            n.dispose();
            return;
        }
        const i = this.draftCall?.draftId === e ? this.draftCall : void 0;
        i !== void 0 && (t.draft = new Zrf(n, i.send, {
            acquire: (o)=>this.agents.acquire(o)
        }));
        const r = t.draft ?? n;
        t.agentLease.add(r);
        const s = ()=>{
            const o = r.header?.isArchived;
            t.archiveWatch.value = o?.onChange((a)=>{
                a && !t.ended && this.controller.hangUp("agent_archived");
            }), o?.value === !0 && this.controller.hangUp("agent_archived");
        };
        return t.watchArchive = s, s(), new _sf(r, {
            composerDataService: this.composerDataService,
            composerUtilsService: this.composerUtilsService,
            agents: this.agents,
            configurationService: this.configurationService,
            logService: this.logService
        });
    }
    moveAgent(t) {
        this.controller.moveAgent(t);
        const e = this.call, n = e?.draft;
        if (e === void 0 || n === void 0) return;
        e.archiveWatch.clear();
        const i = n.follow(t);
        e.settling = i, i.then(()=>{
            !e.ended && e.settling === i && e.watchArchive?.();
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
    openSession(t) {
        return $rf(t);
    }
    newCallId() {
        return `call-${Ai()}`;
    }
    sendRow(t) {
        const e = D9k(t, {
            client: this.agents.surface,
            platform: _r ? "darwin" : xa ? "win32" : "linux",
            app_version: this.productService.version
        });
        this.analytics ??= this._register(this.instantiationService.createInstance(cb, {
            service: yTn
        }));
        const n = this.analytics.get().then((i)=>i.submitLogs({
                logs: [
                    new Z8a({
                        level: M9k(t) ? WKr.WARN : WKr.INFO,
                        message: P9k(t),
                        metadata: e,
                        timestamp: BigInt(Date.now())
                    })
                ]
            })).catch((i)=>this.logService.warn(FIt("call row not sent"), i));
        this.rowsInFlight.add(n), n.finally(()=>this.rowsInFlight.delete(n));
    }
    async mint(t, e) {
        const i = await (await this.aiService.aiClient()).mintRealtimeVoiceSecret({
            agentId: e
        }, {
            signal: t.signal
        });
        return $9k(i);
    }
}, pfs = Re([
    zle(0, jl),
    zle(1, X0e),
    zle(2, Cr),
    zle(3, Li),
    zle(4, no),
    zle(5, oMn),
    zle(6, yi),
    zle(7, ki),
    zle(8, YM),
    zle(9, ss),
    zle(10, Fp),
    zle(11, fc),
    zle(12, dn),
    zle(13, Tc),
    zle(14, XJr)
], pfs), bn(TG, pfs, 1, 1);

}
