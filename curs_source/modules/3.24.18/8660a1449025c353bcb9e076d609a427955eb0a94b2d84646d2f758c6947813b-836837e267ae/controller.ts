import { Stf, cTl } from "./Ycg.js";
import { GBk, Trf } from "./call-in-progress.ts";
import { Erf, qBk } from "./default-voice.ts";
import { YPn } from "./realtime-wire.ts";
import { E } from "./tslib.es6.js";
import { Dgs, zPn } from "./voice-settings.ts";
var Irf;
export { Irf };
var __wakaru_zBk_initialized = false;
export function zBk() {
if (__wakaru_zBk_initialized) return;
__wakaru_zBk_initialized = true;
"use strict";
E(), YPn(), Dgs(), GBk(), qBk(), Irf = class {
    constructor(t){
        this.ports = t, this.defaults = new Erf(t);
        const { speed: e, language: n } = t.settings;
        this.settingsValue = {
            ...zPn,
            speed: e,
            language: n
        };
    }
    stateValue = {
        phase: "idle"
    };
    call;
    settingsValue;
    voicePickedThisCall = !1;
    defaults;
    get state() {
        return this.stateValue;
    }
    get settings() {
        return this.settingsValue;
    }
    get defaultVoice() {
        return this.defaults.voiceId;
    }
    async start(t, e) {
        if (this.call !== void 0) return;
        const n = this.ports.begin(t);
        if (n.kind === "refused") {
            this.setState({
                phase: "failed",
                agent: t,
                ...n.failure
            });
            return;
        }
        const i = this.ports.clock.now();
        this.voicePickedThisCall = !1, this.settingsValue = {
            ...this.settingsValue,
            voiceId: this.defaults.voiceId ?? zPn.voiceId
        };
        const r = new Trf(t, {
            callId: this.ports.newCallId(),
            agentId: t.agentId,
            anchor: e,
            startedAtMs: i,
            lastHeardAtMs: i,
            turns: []
        }, this.mintingHost(n.host, ()=>r.ended), this.ports, {
            lineOpensWith: ()=>({
                    settings: this.settingsValue,
                    muted: this.muted
                }),
            audible: (s)=>{
                this.setState({
                    phase: "live",
                    callId: r.record.callId,
                    agent: r.agent,
                    connectedAtMs: s,
                    muted: this.muted,
                    turns: [],
                    settings: this.settingsValue
                });
            },
            redialed: ()=>{
                this.stateValue.phase === "live" && this.setState({
                    ...this.stateValue
                });
            },
            turnsChanged: (s)=>{
                this.stateValue.phase === "live" && this.setState({
                    ...this.stateValue,
                    turns: s
                });
            },
            closed: (s)=>{
                const o = cTl(s), a = {
                    kind: "closed",
                    close: s
                };
                if (o === "ended") {
                    this.endCall(r, {
                        phase: "idle"
                    }, a);
                    return;
                }
                this.fail(r, this.ports.failure(o), a);
            },
            mintRefused: (s)=>{
                this.fail(r, this.ports.failure({
                    thrown: s
                }), {
                    kind: "thrown",
                    fault: this.ports.mintFault(s)
                });
            },
            hangUp: ()=>this.hangUp("voice_goodbye"),
            idleTimedOut: ()=>this.hangUp("idle")
        });
        this.call = r, this.setState({
            phase: "connecting",
            callId: r.record.callId,
            agent: t,
            muted: !1,
            settings: this.settingsValue
        });
        try {
            if (await this.defaults.savesSettled(), r.ended) return;
            await r.connect();
        } catch (s) {
            r.ended || this.fail(r, this.ports.failure({
                thrown: s
            }), {
                kind: "thrown",
                fault: this.ports.mintFault(s)
            });
        }
    }
    mintingHost(t, e) {
        return {
            ...t,
            mint: async (n)=>{
                const i = await t.mint(n);
                if (!e() && !this.voicePickedThisCall) {
                    const r = i.voiceId ?? this.defaults.voiceId ?? zPn.voiceId;
                    this.setSettings({
                        ...this.settingsValue,
                        voiceId: r
                    });
                }
                return i;
            }
        };
    }
    get muted() {
        return (this.stateValue.phase === "connecting" || this.stateValue.phase === "live") && this.stateValue.muted;
    }
    setMuted(t) {
        this.stateValue.phase !== "live" && this.stateValue.phase !== "connecting" || (this.call?.line?.setMuted(t), this.setState({
            ...this.stateValue,
            muted: t
        }));
    }
    applySettings({ speed: t, language: e }) {
        this.setSettings({
            ...this.settingsValue,
            speed: t,
            language: e
        });
    }
    pickCallSettings(t) {
        const e = this.call?.agent.agentId;
        if (e === void 0) {
            this.applySettings(t);
            return;
        }
        t.voiceId !== this.settingsValue.voiceId && (this.defaults.pick({
            agentId: e,
            voiceId: t.voiceId
        }), this.voicePickedThisCall = !0), this.setSettings(t);
    }
    pickDefaultVoice(t) {
        this.defaults.pick({
            voiceId: t
        });
    }
    refreshDefaultVoice() {
        this.defaults.refresh();
    }
    resetDefaultVoice() {
        this.hangUp("account_changed"), this.defaults.reset();
    }
    setSettings(t) {
        Stf(t, this.settingsValue) || (this.settingsValue = t, this.call?.line?.updateVoiceSettings(t), (this.stateValue.phase === "live" || this.stateValue.phase === "connecting") && this.setState({
            ...this.stateValue,
            settings: t
        }));
    }
    moveAgent(t) {
        this.call?.moveTo(t), this.ports.records.move(t);
        const e = this.stateValue;
        e.phase !== "idle" && e.agent.agentId === t.fromAgentId && this.setState({
            ...e,
            agent: {
                ...e.agent,
                agentId: t.toAgentId
            }
        });
    }
    hangUp(t = "hang_up") {
        const e = this.call;
        e !== void 0 && (this.endCall(e, {
            phase: "idle"
        }, {
            kind: "hung_up",
            by: t
        }), e.line?.close());
    }
    uiOpened(t) {
        this.call?.uiOpened(t);
    }
    dismissFailure() {
        this.stateValue.phase === "failed" && this.setState({
            phase: "idle"
        });
    }
    fail(t, { code: e, message: n }, i) {
        this.ports.log.warn(`${e}: ${n}`), this.endCall(t, {
            phase: "failed",
            callId: t.record.callId,
            agent: t.agent,
            code: e,
            message: n
        }, i);
    }
    endCall(t, e, n) {
        t.ended || (this.call = void 0, t.end(n), this.setState(e), t.report(n));
    }
    setState(t) {
        this.stateValue = t, this.ports.onDidChangeState(t);
    }
};

}
