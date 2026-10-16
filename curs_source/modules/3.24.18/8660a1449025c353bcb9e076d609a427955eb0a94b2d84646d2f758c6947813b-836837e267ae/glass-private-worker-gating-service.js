import { de0, mlv } from "./Asv.js";
import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { iS, lb } from "./adminSettingsService.js";
import { Dc, jl } from "./aiService.js";
import { Rs, ss } from "./authenticationService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var i5i, dIs;
export { dIs, i5i };
var __wakaru_hIs_initialized = false;
export function hIs() {
if (__wakaru_hIs_initialized) return;
__wakaru_hIs_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), Dc(), iS(), Rs(), _s(), i5i = Il("glassPrivateWorkerGatingService"), dIs = class extends st {
    constructor(t, e, n, i){
        super(), this.aiService = t, this.adminSettingsService = e, this.authenticationService = n, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._personalSettingsFetchToken = 0, this._hasTeam = this.authenticationService.getTeamId() !== void 0, this._userAllowsPrivateWorkers = void 0;
        const r = i.getFeatureGateProperty("allow_shared_private_worker_assignment"), s = ()=>{
            const u = this.adminSettingsService.getCached().backgroundAgentSettings;
            return {
                hasTeam: this._hasTeam,
                teamAllowsPrivateWorkers: u?.allowPrivateWorkers === !0,
                teamAllowsRemoteControl: u?.allowRemoteControl === !0,
                teamRequiresPrivateWorkers: u?.requirePrivateWorkers === !0,
                userAllowsPrivateWorkers: this._userAllowsPrivateWorkers,
                allowSharedPrivateWorkerAssignment: r.nonReactive() === !0
            };
        };
        this._snapshot = mlv(s());
        const o = ()=>{
            const u = mlv(s());
            de0(this._snapshot, u) || (this._snapshot = u, this._onDidChange.fire(u));
        };
        this._register(this.adminSettingsService.onDidChange(o)), this._register(r.event(o));
        const a = ()=>{
            this._refetchPersonalSettings(o), o();
        }, l = this.authenticationService.onDidChangeTeamIds((u)=>{
            this._hasTeam = u.length > 0, a();
        });
        this._register(l);
        const c = ()=>{
            this._hasTeam = this.authenticationService.getTeamId() !== void 0, a();
        };
        this.authenticationService.addLoginChangedListener(c), this._register({
            dispose: ()=>{
                this.authenticationService.removeLoginChangedListener(c);
            }
        }), this._refetchPersonalSettings(o);
    }
    getSnapshot() {
        return this._snapshot;
    }
    _refetchPersonalSettings(t) {
        const e = ++this._personalSettingsFetchToken;
        if (!this.authenticationService.isAuthenticated()) {
            this._userAllowsPrivateWorkers = !1, t?.();
            return;
        }
        if (this._hasTeam) {
            this._userAllowsPrivateWorkers = !1, t?.();
            return;
        }
        this._userAllowsPrivateWorkers = void 0, (async ()=>{
            try {
                const n = await this.aiService.getBackgroundComposerUserSettings();
                if (e !== this._personalSettingsFetchToken) return;
                this._userAllowsPrivateWorkers = n.allowPrivateWorkers === !0;
            } catch  {
                if (e !== this._personalSettingsFetchToken) return;
                this._userAllowsPrivateWorkers = !1;
            } finally{
                e === this._personalSettingsFetchToken && t?.();
            }
        })();
    }
}, dIs = Re([
    F(0, jl),
    F(1, lb),
    F(2, ss),
    F(3, Cr)
], dIs), bn(i5i, dIs, 1, 1);

}
