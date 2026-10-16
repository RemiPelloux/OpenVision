import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { vl, wm } from "./buildFlags.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Dh, Qyi, gf } from "./ipa.js";
import { Fp, zp } from "./lifecycle_2.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { $Ua } from "./yBp.js";
import { Wt, pi } from "./ze.js";
var mT, TYr;
export { TYr, mT };
var __wakaru_EE_initialized = false;
export function EE() {
if (__wakaru_EE_initialized) return;
__wakaru_EE_initialized = true;
"use strict";
E(), pi(), Qe(), wm(), Rn(), It(), el(), sk(), wu(), Zi(), zp(), mT = Il("privateInferenceEnablementService"), TYr = class extends st {
    constructor(t, e, n){
        super(), this.reactiveStorageService = t, this.storageService = n, this.restartRequired = this._register(new vb(!1)), this.restartPending = this._register(new vb(!1)), this.modeSwitchAllowed = this._register(new vb(!1)), this.enablement = $Ua(this.readStored()), this.storedEnablement = Wt(this.enablement), this.sessionUseCursorModels = this.readUseCursorModels() ?? this.enablement === "disabled", this._register(this.storageService.onDidChangeValue(-1, Qyi("privateInferenceEnabled"), this._store)(()=>this.reconcile())), this._register(e.onBeforeShutdown(()=>{
            this.restartRequired.value && this.setRestartPending(!0);
        }));
        const i = ()=>this.setRestartPending(!1);
        this._register(e.onShutdownVeto(i)), this._register(e.onBeforeShutdownError(i));
    }
    reactiveStoredEnablement() {
        return this.storedEnablement[0]();
    }
    applyTeamEnrollment(t) {
        this.teamEnrollment = t;
        const e = t.modeSwitchAllowed && !vl.localMode;
        this.modeSwitchAllowed.value !== e && this.modeSwitchAllowed.change(e), e && this.readUseCursorModels() === null && gf(this.storageService, "privateInferenceUseCursorModels", this.sessionUseCursorModels), this.storeEffectiveEnablement();
    }
    setUseCursorModels(t) {
        return this.storeModeChoice(t), $Ua(this.readStored()) !== this.enablement;
    }
    isRestartForModeSwitch() {
        return (this.readUseCursorModels() ?? this.sessionUseCursorModels) !== this.sessionUseCursorModels;
    }
    cancelModeSwitch() {
        this.storeModeChoice(this.sessionUseCursorModels);
    }
    beginRestart() {
        this.setRestartPending(!0);
    }
    restartFailed() {
        this.setRestartPending(!1);
    }
    readStored() {
        return Dh(this.storageService, "privateInferenceEnabled") ?? this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.privateInferenceEnabled;
    }
    readUseCursorModels() {
        return Dh(this.storageService, "privateInferenceUseCursorModels");
    }
    storeModeChoice(t) {
        gf(this.storageService, "privateInferenceUseCursorModels", t), this.storeEffectiveEnablement();
    }
    storeEffectiveEnablement() {
        const t = this.teamEnrollment;
        if (t === void 0) return;
        let e = t.enabled;
        if (this.modeSwitchAllowed.value) {
            const n = this.readUseCursorModels();
            e = n === null ? this.enablement === "enabled" : t.enabled && !n;
        }
        this.readStored() !== e && gf(this.storageService, "privateInferenceEnabled", e);
    }
    reconcile() {
        const t = $Ua(this.readStored());
        this.storedEnablement[1](t);
        const e = t !== this.enablement;
        this.restartRequired.value !== e && this.restartRequired.change(e), e || this.setRestartPending(!1);
    }
    setRestartPending(t) {
        this.restartPending.value !== t && this.restartPending.change(t);
    }
}, TYr = Re([
    F(0, sa),
    F(1, Fp),
    F(2, ki)
], TYr), bn(mT, TYr, 0, 1);

}
