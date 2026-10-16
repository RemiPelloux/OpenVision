import { xoo } from "./A3u.js";
import { Bv, rh, zRn } from "./De_3.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { am, kc } from "./buildFlags.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { Ut, mn, pd, qn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { av, sy } from "./solidEventsWrapper.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
var uT, XWi;
export { XWi, uT };
var __wakaru_Hx_initialized = false;
export function Hx() {
if (__wakaru_Hx_initialized) return;
__wakaru_Hx_initialized = true;
"use strict";
x(), qn(), Se(), am(), Pn(), Ze(), Ha(), sy(), Ku(), Vn(), $d(), uT = pd("privateInferenceEnablementService"), XWi = class extends we {
    constructor(e, t, n){
        super(), this.reactiveStorageService = e, this.storageService = n, this.restartRequired = this._register(new av(!1)), this.restartPending = this._register(new av(!1)), this.modeSwitchAllowed = this._register(new av(!1)), this.enablement = xoo(this.readStored()), this.storedEnablement = Ut(this.enablement), this.sessionUseCursorModels = this.readUseCursorModels() ?? this.enablement === "disabled", this._register(this.storageService.onDidChangeValue(-1, zRn("privateInferenceEnabled"), this._store)(()=>this.reconcile())), this._register(t.onBeforeShutdown(()=>{
            this.restartRequired.value && this.setRestartPending(!0);
        }));
        const i = ()=>this.setRestartPending(!1);
        this._register(t.onShutdownVeto(i)), this._register(t.onBeforeShutdownError(i));
    }
    reactiveStoredEnablement() {
        return this.storedEnablement[0]();
    }
    applyTeamEnrollment(e) {
        this.teamEnrollment = e;
        const t = e.modeSwitchAllowed && !kc.localMode;
        this.modeSwitchAllowed.value !== t && this.modeSwitchAllowed.change(t), t && this.readUseCursorModels() === null && Bv(this.storageService, "privateInferenceUseCursorModels", this.sessionUseCursorModels), this.storeEffectiveEnablement();
    }
    setUseCursorModels(e) {
        return this.storeModeChoice(e), xoo(this.readStored()) !== this.enablement;
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
        return rh(this.storageService, "privateInferenceEnabled") ?? this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.privateInferenceEnabled;
    }
    readUseCursorModels() {
        return rh(this.storageService, "privateInferenceUseCursorModels");
    }
    storeModeChoice(e) {
        Bv(this.storageService, "privateInferenceUseCursorModels", e), this.storeEffectiveEnablement();
    }
    storeEffectiveEnablement() {
        const e = this.teamEnrollment;
        if (e === void 0) return;
        let t = e.enabled;
        if (this.modeSwitchAllowed.value) {
            const n = this.readUseCursorModels();
            t = n === null ? this.enablement === "enabled" : e.enabled && !n;
        }
        this.readStored() !== t && Bv(this.storageService, "privateInferenceEnabled", t);
    }
    reconcile() {
        const e = xoo(this.readStored());
        this.storedEnablement[1](e);
        const t = e !== this.enablement;
        this.restartRequired.value !== t && this.restartRequired.change(t), t || this.setRestartPending(!1);
    }
    setRestartPending(e) {
        this.restartPending.value !== e && this.restartPending.change(e);
    }
}, XWi = ie([
    C(0, Do),
    C(1, Id),
    C(2, yn)
], XWi), mn(uT, XWi, 0, 1);

}
