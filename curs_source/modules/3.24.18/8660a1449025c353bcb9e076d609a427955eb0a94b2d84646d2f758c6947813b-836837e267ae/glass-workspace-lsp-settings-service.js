import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { jP0 } from "./XRv.js";
import { kJn, pa, t4t, wJn } from "./constants_8.js";
import { Rn } from "./extensions.js";
import { AL, _N } from "./glass-configuration-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { Jc } from "./observable.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { Hve } from "./ze.js";
var NPs, LPs;
export { LPs, NPs };
var __wakaru_F2v_initialized = false;
export function F2v() {
if (__wakaru_F2v_initialized) return;
__wakaru_F2v_initialized = true;
"use strict";
E(), pa(), Gt(), Qe(), Jc(), Rn(), It(), wu(), AL(), xc(), NPs = Il("glassWorkspaceLspSettingsService"), LPs = class extends st {
    constructor(t, e){
        super(), this._configurationService = e, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._enabled = this._register(Xh(t, "glassWorkspaceLspEnabled")), this._worktreesEnabled = this._register(Xh(t, "glassWorkspaceLspWorktreesEnabled"));
        const n = ()=>this._onDidChange.fire(this.getSettings());
        this._register(Hve(this._enabled, n)), this._register(Hve(this._worktreesEnabled, n)), this._register(this._configurationService.onDidChangeConfiguration((i)=>{
            (i.affectsConfiguration(kJn) || i.affectsConfiguration(wJn)) && n();
        }));
    }
    getSettings() {
        return {
            enabled: this._enabled.get(),
            worktreesEnabled: this._worktreesEnabled.get(),
            maxLocalWorkspaces: this._getUserScopedMaximum(kJn),
            maxRemoteWorkspaces: this._getUserScopedMaximum(wJn)
        };
    }
    _getUserScopedMaximum(t) {
        const e = this._configurationService.inspect(t);
        return jP0(e.userRemoteValue ?? e.userLocalValue ?? e.applicationValue ?? e.defaultValue ?? t4t);
    }
}, LPs = Re([
    F(0, Nu),
    F(1, _N)
], LPs), bn(NPs, LPs, 1, 1);

}
