import { YYw, cLn } from "./BA.js";
import { Ec, Gt, Pn, Qe, Vn, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { iS, lb } from "./adminSettingsService.js";
import { c_ } from "./async.cursor.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { cb, sC } from "./backendClient.js";
import { dp } from "./connect.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { HOi, gC } from "./remoteAgentHostEnrollmentSync.js";
import { sGl } from "./remote_agent_host_presence_connect.js";
import { BRi } from "./remote_agent_host_presence_connectweb.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { aie } from "./yBp.js";
var uLn, msv, gsv, fsv, wEs, CEs;
export { CEs, fsv, gsv, msv, uLn, wEs };
var __wakaru_TEs_initialized = false;
export function TEs() {
if (__wakaru_TEs_initialized) return;
__wakaru_TEs_initialized = true;
"use strict";
E(), sGl(), qn(), c_(), Gt(), dp(), Qe(), HOi(), Rn(), It(), Ji(), sC(), Rs(), iS(), uLn = 1e4, msv = 5e3, gsv = 3, fsv = 3e3, wEs = Il("remoteControlV2SettingsService"), CEs = class extends st {
    constructor(t, e, n, i){
        super(), this.auth = e, this.logService = i, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._state = {
            status: "loading",
            pending: !1
        }, this._session = new AbortController, this._requested = !1, this._failedReadRetries = 0, this._failedSaveReread = this._register(new Vn), this._failedReadRetry = this._register(new Vn), this._policyChangedWhilePending = !1, this._client = this._register(t.createInstance(cb, {
            service: BRi
        }));
        const r = ()=>this._resetScope();
        this.auth.addLoginChangedListener(r), this._register(Pn(()=>this.auth.removeLoginChangedListener(r))), this._register(this.auth.onDidChangeTeamIds(r)), this._register(this.auth.onDidChangeActiveTeamId(r));
        const s = n.getCached().remoteControlV2Policy;
        cLn(s) && (this._acknowledgePolicy(s), this._state = {
            ...this._state,
            policy: s
        }), this._register(n.onDidChange((o)=>{
            if (this._requested) {
                const a = o.remoteControlV2Policy;
                cLn(a) && (this._acknowledgePolicy(a), this._state.pending && (this._policyAppliedWhilePending = a), this._setState({
                    ...this._state,
                    policy: a
                })), this._policyChangedWhilePending = this._state.pending, this.refresh();
            }
        })), this._register(Pn(()=>{
            this._session.abort(), this._invalidateRead();
        }));
    }
    getState() {
        return this._state;
    }
    async ensureLoaded() {
        if (this._requested = !0, this._readPromise !== void 0) return this._readPromise;
        this._state.status === "ready" && this._state.stale !== !0 || await this.refresh();
    }
    async refresh() {
        if (this._requested = !0, this._failedSaveReread.clear(), this._failedReadRetry.clear(), this._session.signal.aborted || this._state.pending) return;
        this._invalidateRead();
        const t = this._scope();
        if (t.authId === void 0) {
            this._setState({
                status: "unavailable",
                pending: !1
            });
            return;
        }
        const e = new AbortController;
        this._readAbort = e, this._state.status !== "ready" && this._setState({
            ...this._state,
            status: "loading",
            error: void 0
        }), this._readPromise = this._fetch(t, e), await this._readPromise;
    }
    async setAutomaticRegistrationEnabled(t) {
        await this._write({
            automaticRegistrationEnabled: t
        });
    }
    getAutomaticEnrollmentAllowed(t, e) {
        const { status: n, pending: i, error: r, settings: s, policy: o } = this._state;
        return n === "ready" && !i && r === void 0 && this._acknowledged !== void 0 && this._isCurrent(this._acknowledged.scope) && t && e && o?.available === !0 && o.enabled === !0 && o.automaticRegistrationEnabled === !0 && o.automaticRegistrationReleased === !0 && s?.automaticRegistrationEnabled === !0;
    }
    async revokeAllSharedTargets() {
        const t = this._scope();
        if (t.authId === void 0) return 0;
        let e = await this._revokeThisComputer(t) ? 1 : 0;
        this._requireCurrent(t);
        const n = [];
        let i = "";
        do {
            const r = await aie(async (s)=>{
                const o = await this._client.get();
                return s.throwIfAborted(), o.listSharedTargets({
                    pageToken: i
                }, {
                    signal: s
                });
            }, {
                signal: t.session.signal,
                timeoutMs: uLn
            });
            this._requireCurrent(t);
            for (const s of r.targets)try {
                await aie(async (o)=>{
                    const a = await this._client.get();
                    return o.throwIfAborted(), a.revokeSharedTarget({
                        targetId: s.targetId,
                        expectedEnrollmentGeneration: s.enrollmentGeneration
                    }, {
                        signal: o
                    });
                }, {
                    signal: t.session.signal,
                    timeoutMs: uLn
                }), e += 1;
            } catch (o) {
                if (YYw(o)) {
                    e += 1;
                    continue;
                }
                n.push(o);
            }
            i = r.nextPageToken;
        }while (i !== "")
        if (this._requireCurrent(t), await this._revokeThisComputer(t) && (e += 1), n.length > 0) throw this.logService.warn(`[RemoteControlV2Settings] ${n.length} computer(s) could not be unregistered`), n[0];
        return e;
    }
    async _revokeThisComputer(t) {
        return !gC.enrolled && !gC.pending ? !1 : aie(async (e)=>(gC.pending && await new Promise((n, i)=>{
                const r = gC.onDidChangePending((o)=>{
                    o || (r.dispose(), e.removeEventListener("abort", s), n());
                }), s = ()=>{
                    r.dispose(), i(e.reason);
                };
                e.addEventListener("abort", s, {
                    once: !0
                });
            }), e.throwIfAborted(), !this._isCurrent(t) || !gC.enrolled ? !1 : (await gC.requestEnabled(!1), !gC.enrolled)), {
            signal: t.session.signal,
            timeoutMs: uLn
        });
    }
    _requireCurrent(t) {
        if (!this._isCurrent(t)) throw new Error("Remote Control account changed while unregistering computers");
    }
    async _fetch(t, e) {
        try {
            const n = await aie(async (i)=>{
                const r = await this._client.get();
                return i.throwIfAborted(), r.getRemoteControlV2UserSettings({}, {
                    signal: i
                });
            }, {
                signal: AbortSignal.any([
                    t.session.signal,
                    e.signal
                ]),
                timeoutMs: uLn
            });
            if (!this._isCurrent(t) || e.signal.aborted) return;
            this._publish(t, n, this._state.settings);
        } catch  {
            if (this._isCurrent(t) && !e.signal.aborted && (this.logService.warn("[RemoteControlV2Settings] Failed to read user settings"), this._setState(this._state.status === "ready" ? {
                ...this._state,
                stale: !0
            } : {
                status: "unavailable",
                settings: this._state.settings,
                policy: this._state.policy,
                pending: !1,
                error: "Could not load Remote Control settings"
            }), (this._state.status !== "ready" || !cLn(this._state.policy)) && this._failedReadRetries < gsv)) {
                const i = msv * 2 ** this._failedReadRetries;
                this._failedReadRetries += 1, this._failedReadRetry.value = Ec(()=>void this.refresh(), i);
            }
        } finally{
            this._readAbort === e && (this._readPromise = void 0);
        }
    }
    _publish(t, e, n) {
        const { settings: i, policy: r } = e, s = i?.automaticRegistrationEnabled !== void 0;
        if (s && cLn(r)) {
            const o = {
                status: "ready",
                settings: i,
                policy: r,
                pending: !1
            };
            this._acknowledged = {
                scope: t,
                snapshot: o
            }, this._failedReadRetries = 0, this._setState(o);
            return;
        }
        this._setState(this._state.status === "ready" ? {
            ...this._state,
            settings: n,
            pending: !1,
            stale: !0
        } : {
            status: "unavailable",
            settings: s ? i : n,
            policy: this._state.policy,
            pending: !1
        });
    }
    _acknowledgePolicy(t) {
        this._acknowledged = this._acknowledged !== void 0 ? {
            ...this._acknowledged,
            snapshot: {
                ...this._acknowledged.snapshot,
                policy: t
            }
        } : {
            scope: this._scope(),
            snapshot: {
                status: "loading",
                pending: !1,
                policy: t
            }
        };
    }
    async _write(t) {
        const e = this._state, n = this._scope();
        if (!(!(n.authId !== void 0 && !e.pending && e.policy?.available === !0 && e.policy.enabled === !0 && e.policy.automaticRegistrationEnabled === !0) || !this._isCurrent(n))) {
            this._invalidateRead(), this._failedSaveReread.clear(), this._setState({
                ...e,
                settings: {
                    ...e.settings,
                    ...t
                },
                pending: !0,
                error: void 0
            });
            try {
                const r = await aie(async (o)=>{
                    const a = await this._client.get();
                    return o.throwIfAborted(), a.updateRemoteControlV2UserSettings({
                        settings: t
                    }, {
                        signal: o
                    });
                }, {
                    signal: n.session.signal,
                    timeoutMs: uLn
                });
                if (!this._isCurrent(n)) return;
                const s = this._policyAppliedWhilePending;
                this._publish(n, s === void 0 ? r : {
                    ...r,
                    policy: s
                }, e.settings);
            } catch  {
                this._isCurrent(n) && (this.logService.warn("[RemoteControlV2Settings] Failed to save user settings"), this._setState({
                    ...this._state,
                    settings: e.settings,
                    status: e.status,
                    pending: !1,
                    error: "Could not save Remote Control settings",
                    stale: !0
                }), this._failedSaveReread.value = Ec(()=>void this.refresh(), fsv));
            }
            this._policyAppliedWhilePending = void 0, this._policyChangedWhilePending && this._isCurrent(n) && (this._policyChangedWhilePending = !1, this.refresh());
        }
    }
    _scope() {
        return {
            session: this._session,
            authId: this.auth.getCurrentAuthId(),
            teamId: this.auth.getTeamId()
        };
    }
    _isCurrent(t) {
        return !t.session.signal.aborted && t.session === this._session && t.authId === this.auth.getCurrentAuthId() && t.teamId === this.auth.getTeamId();
    }
    _resetScope() {
        const t = this.auth.getCurrentAuthId(), e = t !== void 0 && this._acknowledged?.scope.authId === t ? this._acknowledged : void 0, n = e !== void 0 && e.scope.teamId !== this.auth.getTeamId();
        if (this._session.abort(), this._session = new AbortController, this._invalidateRead(), this._failedReadRetries = 0, this._failedReadRetry.clear(), this._policyAppliedWhilePending = void 0, e !== void 0) {
            const i = n ? {
                ...e.snapshot,
                policy: void 0,
                stale: !0
            } : {
                ...e.snapshot,
                stale: !0
            };
            this._acknowledged = {
                scope: this._scope(),
                snapshot: i
            }, this._setState(i);
        } else this._acknowledged = void 0, this._setState({
            status: "loading",
            pending: !1
        });
        this._requested && this.refresh();
    }
    _invalidateRead() {
        this._readAbort?.abort(), this._readAbort = void 0, this._readPromise = void 0;
    }
    _setState(t) {
        this._state = t, this._onDidChange.fire(t);
    }
}, CEs = Re([
    F(0, dn),
    F(1, ss),
    F(2, lb),
    F(3, Li)
], CEs), bn(wEs, CEs, 1, 1);

}
