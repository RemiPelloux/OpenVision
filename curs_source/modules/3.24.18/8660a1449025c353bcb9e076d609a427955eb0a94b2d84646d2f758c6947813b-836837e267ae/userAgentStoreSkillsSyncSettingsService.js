import { EHw, IHw } from "./BA.js";
import { Ei, Gt, Pn, Qe, Ya, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { c_, ype } from "./async.cursor.js";
import { Rs, ss } from "./authenticationService.js";
import { $4, J5 } from "./experimentRefreshService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var LJf, vHl, _Hl, dOi, $Ts;
export { $Ts, LJf, _Hl, dOi, vHl };
var __wakaru_HTs_initialized = false;
export function HTs() {
if (__wakaru_HTs_initialized) return;
__wakaru_HTs_initialized = true;
"use strict";
E(), Ei(), Gt(), Qe(), c_(), Rn(), It(), Rs(), $4(), _s(), LJf = "private_skills_user_store", vHl = {
    status: "loading"
}, _Hl = {
    status: "unavailable"
}, dOi = Il("userAgentStoreSkillsSyncSettingsService"), $Ts = class extends st {
    constructor(t, e, n){
        super(), this.cursorAuthenticationService = t, this.experimentService = e, this.experimentRefreshService = n, this._onDidChangeState = this._register(new tt), this.onDidChangeState = this._onDidChangeState.event, this._state = vHl, this._fetch = this._register(new ype), this._wasRequested = !1;
        const i = (r)=>this._resetForIdentityChange(r);
        this.cursorAuthenticationService.addLoginChangedListener(i), this._register(Pn(()=>this.cursorAuthenticationService.removeLoginChangedListener(i))), this._register(this.cursorAuthenticationService.onDidChangeActiveTeamId(()=>this._resetForIdentityChange(this.cursorAuthenticationService.isAuthenticated())));
    }
    getState() {
        return this._state;
    }
    async ensureLoaded() {
        return this._state.status !== "loading" ? this._state : await this._fetchState();
    }
    async refresh() {
        return this._fetch.invalidate(), await this._fetchState();
    }
    async setEnabled(t) {
        return await (await this.cursorAuthenticationService.dashboardClient()).updateUserAgentStoreSkillsSettings({
            enabled: t
        }), await this.refresh();
    }
    _resetForIdentityChange(t) {
        this._fetch.invalidate(), this._setState(vHl), t && this._wasRequested && this._fetchState();
    }
    async _fetchState() {
        this._wasRequested = !0;
        try {
            return await this._fetch.run(async (t)=>{
                try {
                    if (await this.experimentRefreshService.whenStartupRefreshComplete(), await this.experimentRefreshService.whenAuthChangeRefreshComplete(), t.throwIfStale(), !this.experimentService.checkFeatureGate(LJf, {
                        disableExposureLog: !1
                    })) return this._setState(_Hl), this._state;
                    const n = await (await this.cursorAuthenticationService.dashboardClient()).getEffectiveUserAgentStoreSkillsSettings({});
                    t.throwIfStale();
                    const i = EHw(n);
                    return this._setState(i), i;
                } catch (e) {
                    throw t.throwIfStale(), e;
                }
            });
        } catch (t) {
            return Ya(t) ? this._state : (this._setState(_Hl), this._state);
        }
    }
    _setState(t) {
        IHw(this._state, t) || (this._state = t, this._onDidChangeState.fire(t));
    }
}, $Ts = Re([
    F(0, ss),
    F(1, Cr),
    F(2, J5)
], $Ts), bn(dOi, $Ts, 1, 1);

}
