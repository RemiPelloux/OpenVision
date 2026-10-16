import { Th } from "./De_3.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { M2t, pgn } from "./editorHostPolicy.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
var Ade, BGi;
export { Ade, BGi };
var __wakaru_o1e_initialized = false;
export function o1e() {
if (__wakaru_o1e_initialized) return;
__wakaru_o1e_initialized = true;
"use strict";
x(), bt(), Se(), Pn(), Ze(), Ku(), Vn(), la(), pgn(), Ade = vn("diffDecorationVisibilityService"), BGi = class extends we {
    constructor(e, t, n){
        super(), this.storageService = e, this.analyticsService = t, this.editorHostPolicy = n, this._onDidChangeGlobal = this._register(new ve), this.onDidChangeGlobal = this._onDidChangeGlobal.event, this._noInlineDiffsProp = Th(this.storageService, "noInlineDiffs"), this._register(this._noInlineDiffsProp), this._noInlineDiffsProp.recomputeInitiallyAndOnChange(this._store, ()=>{
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
        const e = this._noInlineDiffsProp.get();
        return e !== null ? e : !1;
    }
    getNoInlineDiffsSetting() {
        const e = this._noInlineDiffsProp.get();
        return e !== null ? e : !1;
    }
    setNoInlineDiffsSetting(e) {
        this.analyticsService.trackEvent("ide_settings.setting_changed", {
            settingId: "no_inline_diffs",
            section: "applying_changes",
            value: String(e)
        }), this._noInlineDiffsProp.set(e, void 0);
    }
}, BGi = ie([
    C(0, yn),
    C(1, ca),
    C(2, M2t)
], BGi), mn(Ade, BGi, 1);

}
