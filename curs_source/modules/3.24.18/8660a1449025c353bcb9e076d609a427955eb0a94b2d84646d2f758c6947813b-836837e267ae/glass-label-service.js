import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Yp, qg } from "./label.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var JRt, tMs;
export { JRt, tMs };
var __wakaru_yJt_initialized = false;
export function yJt() {
if (__wakaru_yJt_initialized) return;
__wakaru_yJt_initialized = true;
"use strict";
E(), Rn(), It(), qg(), qg(), JRt = jn("glassLabelService"), tMs = class {
    constructor(t){
        this._labelService = t;
    }
    getUriLabel(t, e) {
        return this._labelService.getUriLabel(t, e);
    }
    getWorkspaceLabel(t, e) {
        return this._labelService.getWorkspaceLabel(t, e);
    }
    getSeparator(t, e) {
        return this._labelService.getSeparator(t, e);
    }
}, tMs = Re([
    F(0, Yp)
], tMs), bn(JRt, tMs, 1);

}
