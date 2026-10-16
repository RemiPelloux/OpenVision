import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { L9t, N9t } from "./editorHostPolicy.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
var fCe, vXr;
export { fCe, vXr };
var __wakaru_hPe_initialized = false;
export function hPe() {
if (__wakaru_hPe_initialized) return;
__wakaru_hPe_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), wu(), Zi(), Ss(), L9t(), fCe = jn("diffDecorationVisibilityService"), vXr = class extends st {
    constructor(t, e, n){
        super(), this.storageService = t, this.analyticsService = e, this.editorHostPolicy = n, this._onDidChangeGlobal = this._register(new tt), this.onDidChangeGlobal = this._onDidChangeGlobal.event, this._noInlineDiffsProp = Xh(this.storageService, "noInlineDiffs"), this._register(this._noInlineDiffsProp), this._noInlineDiffsProp.recomputeInitiallyAndOnChange(this._store, ()=>{
            this._fireChangeEvent();
        });
    }
    _fireChangeEvent() {
        this._onDidChangeGlobal.fire({
            noInlineDiffs: this.getNoInlineDiffsSetting()
        });
    }
    shouldHideInlineDiffs() {
        if (this.editorHostPolicy.alwaysHidesInlineDiffDecorations) return !0;
        const t = this._noInlineDiffsProp.get();
        return t !== null ? t : !1;
    }
    getNoInlineDiffsSetting() {
        const t = this._noInlineDiffsProp.get();
        return t !== null ? t : !1;
    }
    setNoInlineDiffsSetting(t) {
        this.analyticsService.trackEvent("ide_settings.setting_changed", {
            settingId: "no_inline_diffs",
            section: "applying_changes",
            value: String(t)
        }), this._noInlineDiffsProp.set(t, void 0);
    }
}, vXr = Re([
    F(0, ki),
    F(1, Qr),
    F(2, N9t)
], vXr), bn(fCe, vXr, 1);

}
