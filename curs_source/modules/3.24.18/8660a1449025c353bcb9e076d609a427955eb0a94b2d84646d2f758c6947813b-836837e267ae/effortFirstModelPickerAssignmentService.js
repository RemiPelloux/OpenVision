import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rs, ss } from "./authenticationService.js";
import { $4, J5 } from "./experimentRefreshService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var ZIi, cls;
export { ZIi, cls };
var __wakaru_uls_initialized = false;
export function uls() {
if (__wakaru_uls_initialized) return;
__wakaru_uls_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), Ji(), sk(), Rs(), $4(), _s(), ZIi = Il("effortFirstModelPickerAssignmentService"), cls = class extends st {
    constructor(t, e, n, i){
        super(), this._authenticationService = t, this._experimentRefreshService = e, this._experimentService = n, this._logService = i, this.variant = this._register(new vb("control")), this._assignmentsByIdentity = new Map, this._requestRevision = 0;
        const r = ()=>{
            this._refreshAssignmentForCurrentIdentity();
        };
        this._authenticationService.addLoginChangedListener(r), this._register({
            dispose: ()=>this._authenticationService.removeLoginChangedListener(r)
        }), this._register(this._experimentRefreshService.onDidRefreshStatsigIdentity(r)), r();
    }
    async _refreshAssignmentForCurrentIdentity() {
        const t = this._authenticationService.getCurrentAuthId() ?? void 0;
        if (t === void 0 || t.length === 0) {
            this._requestedIdentity = void 0, this._requestRevision++, this._resetActiveIdentity();
            return;
        }
        const e = this._requestedIdentity !== t;
        e && (this._requestedIdentity = t, this._requestRevision++, this._resetActiveIdentity());
        const n = this._requestRevision;
        if (this._experimentRefreshService.isInitializedForIdentity(t) || this._experimentService.hasHydratedLayerParamForIdentity(t, "model_picker_experiments", "effort_first_variant")) {
            this._assignIdentity(t);
            return;
        }
        e && (await this._experimentRefreshService.whenStartupRefreshComplete(), await this._experimentRefreshService.whenAuthChangeRefreshComplete(), !(n !== this._requestRevision || this._requestedIdentity !== t || this._authenticationService.getCurrentAuthId() !== t) && this._experimentRefreshService.isInitializedForIdentity(t) && this._assignIdentity(t));
    }
    _assignIdentity(t) {
        const e = this._assignmentsByIdentity.get(t);
        if (e !== void 0) {
            this._setVariant(e);
            return;
        }
        try {
            const n = this._experimentService.getLayerParam("model_picker_experiments", "effort_first_variant", {
                disableExposureLog: !1
            });
            this._pinVariant(t, n);
        } catch (n) {
            this._pinVariant(t, "control"), this._logService.error("[EffortFirstModelPickerAssignmentService] Failed to assign effort-first model picker:", n);
        }
    }
    _pinVariant(t, e) {
        this._assignmentsByIdentity.set(t, e), this._setVariant(e);
    }
    _setVariant(t) {
        this.variant.nonReactive() !== t && this.variant.change(t);
    }
    _resetActiveIdentity() {
        this._setVariant("control");
    }
}, cls = Re([
    F(0, ss),
    F(1, J5),
    F(2, Cr),
    F(3, Li)
], cls), bn(ZIi, cls, 0, 1);

}
