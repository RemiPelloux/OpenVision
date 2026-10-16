import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Za, na } from "./authenticationService.js";
import { A$, GU } from "./experimentRefreshService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { mn, pd } from "./qIc.js";
import { av, sy } from "./solidEventsWrapper.js";
import { x } from "./tslib.es6.js";
var bBn, Aer;
export { Aer, bBn };
var __wakaru_Rer_initialized = false;
export function Rer() {
if (__wakaru_Rer_initialized) return;
__wakaru_Rer_initialized = true;
"use strict";
x(), Se(), Pn(), Ze(), Qn(), sy(), Za(), A$(), qs(), bBn = pd("effortFirstModelPickerAssignmentService"), Aer = class extends we {
    constructor(e, t, n, i){
        super(), this._authenticationService = e, this._experimentRefreshService = t, this._experimentService = n, this._logService = i, this.variant = this._register(new av("control")), this._assignmentsByIdentity = new Map, this._requestRevision = 0;
        const r = ()=>{
            this._refreshAssignmentForCurrentIdentity();
        };
        this._authenticationService.addLoginChangedListener(r), this._register({
            dispose: ()=>this._authenticationService.removeLoginChangedListener(r)
        }), this._register(this._experimentRefreshService.onDidRefreshStatsigIdentity(r)), r();
    }
    async _refreshAssignmentForCurrentIdentity() {
        const e = this._authenticationService.getCurrentAuthId() ?? void 0;
        if (e === void 0 || e.length === 0) {
            this._requestedIdentity = void 0, this._requestRevision++, this._resetActiveIdentity();
            return;
        }
        const t = this._requestedIdentity !== e;
        t && (this._requestedIdentity = e, this._requestRevision++, this._resetActiveIdentity());
        const n = this._requestRevision;
        if (this._experimentRefreshService.isInitializedForIdentity(e) || this._experimentService.hasHydratedLayerParamForIdentity(e, "model_picker_experiments", "effort_first_variant")) {
            this._assignIdentity(e);
            return;
        }
        t && (await this._experimentRefreshService.whenStartupRefreshComplete(), await this._experimentRefreshService.whenAuthChangeRefreshComplete(), !(n !== this._requestRevision || this._requestedIdentity !== e || this._authenticationService.getCurrentAuthId() !== e) && this._experimentRefreshService.isInitializedForIdentity(e) && this._assignIdentity(e));
    }
    _assignIdentity(e) {
        const t = this._assignmentsByIdentity.get(e);
        if (t !== void 0) {
            this._setVariant(t);
            return;
        }
        try {
            const n = this._experimentService.getLayerParam("model_picker_experiments", "effort_first_variant", {
                disableExposureLog: !1
            });
            this._pinVariant(e, n);
        } catch (n) {
            this._pinVariant(e, "control"), this._logService.error("[EffortFirstModelPickerAssignmentService] Failed to assign effort-first model picker:", n);
        }
    }
    _pinVariant(e, t) {
        this._assignmentsByIdentity.set(e, t), this._setVariant(t);
    }
    _setVariant(e) {
        this.variant.nonReactive() !== e && this.variant.change(e);
    }
    _resetActiveIdentity() {
        this._setVariant("control");
    }
}, Aer = ie([
    C(0, na),
    C(1, GU),
    C(2, Kr),
    C(3, Wn)
], Aer), mn(bBn, Aer, 0, 1);

}
