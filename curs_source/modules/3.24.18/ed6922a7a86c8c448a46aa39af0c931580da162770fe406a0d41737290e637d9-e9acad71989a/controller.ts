import { Am_, l8h } from "./call-in-progress.ts";
import { KMo } from "./call-report.ts";
import { Rm_, u8h } from "./default-voice.ts";
import { Ezt } from "./realtime-wire.ts";
import { x } from "./tslib.es6.js";
import { Jir, wzt } from "./voice-settings.ts";
function a6h(e, t) {
    return e.voiceId === t.voiceId && e.speed === t.speed && e.language === t.language;
}
var d8h;
export { a6h, d8h };
var __wakaru_Dm__initialized = false;
export function Dm_() {
if (__wakaru_Dm__initialized) return;
__wakaru_Dm__initialized = true;
"use strict";
x(), Ezt(), Jir(), Am_(), Rm_(), d8h = class {
    constructor(e){
        this.ports = e, this.defaults = new u8h(e);
        const { speed: t, language: n } = e.settings;
        this.settingsValue = {
            ...wzt,
            speed: t,
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
    async start(e, t) {
        if (this.call !== void 0) return;
        const n = this.ports.begin(e);
        if (n.kind === "refused") {
            this.setState({
                phase: "failed",
                agent: e,
                ...n.failure
            });
            return;
        }
        const i = this.ports.clock.now();
        this.voicePickedThisCall = !1, this.settingsValue = {
            ...this.settingsValue,
            voiceId: this.defaults.voiceId ?? wzt.voiceId
        };
        const r = new l8h(e, {
            callId: this.ports.newCallId(),
            agentId: e.agentId,
            anchor: t,
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
                const o = KMo(s), a = {
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
            agent: e,
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
    mintingHost(e, t) {
        return {
            ...e,
            mint: async (n)=>{
                const i = await e.mint(n);
                if (!t() && !this.voicePickedThisCall) {
                    const r = i.voiceId ?? this.defaults.voiceId ?? wzt.voiceId;
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
    setMuted(e) {
        this.stateValue.phase !== "live" && this.stateValue.phase !== "connecting" || (this.call?.line?.setMuted(e), this.setState({
            ...this.stateValue,
            muted: e
        }));
    }
    applySettings({ speed: e, language: t }) {
        this.setSettings({
            ...this.settingsValue,
            speed: e,
            language: t
        });
    }
    pickCallSettings(e) {
        const t = this.call?.agent.agentId;
        if (t === void 0) {
            this.applySettings(e);
            return;
        }
        e.voiceId !== this.settingsValue.voiceId && (this.defaults.pick({
            agentId: t,
            voiceId: e.voiceId
        }), this.voicePickedThisCall = !0), this.setSettings(e);
    }
    pickDefaultVoice(e) {
        this.defaults.pick({
            voiceId: e
        });
    }
    refreshDefaultVoice() {
        this.defaults.refresh();
    }
    resetDefaultVoice() {
        this.hangUp("account_changed"), this.defaults.reset();
    }
    setSettings(e) {
        a6h(e, this.settingsValue) || (this.settingsValue = e, this.call?.line?.updateVoiceSettings(e), (this.stateValue.phase === "live" || this.stateValue.phase === "connecting") && this.setState({
            ...this.stateValue,
            settings: e
        }));
    }
    moveAgent(e) {
        this.call?.moveTo(e), this.ports.records.move(e);
        const t = this.stateValue;
        t.phase !== "idle" && t.agent.agentId === e.fromAgentId && this.setState({
            ...t,
            agent: {
                ...t.agent,
                agentId: e.toAgentId
            }
        });
    }
    hangUp(e = "hang_up") {
        const t = this.call;
        t !== void 0 && (this.endCall(t, {
            phase: "idle"
        }, {
            kind: "hung_up",
            by: e
        }), t.line?.close());
    }
    uiOpened(e) {
        this.call?.uiOpened(e);
    }
    dismissFailure() {
        this.stateValue.phase === "failed" && this.setState({
            phase: "idle"
        });
    }
    fail(e, { code: t, message: n }, i) {
        this.ports.log.warn(`${t}: ${n}`), this.endCall(e, {
            phase: "failed",
            callId: e.record.callId,
            agent: e.agent,
            code: t,
            message: n
        }, i);
    }
    endCall(e, t, n) {
        e.ended || (this.call = void 0, e.end(n), this.setState(t), e.report(n));
    }
    setState(e) {
        this.stateValue = e, this.ports.onDidChangeState(e);
    }
};

}
