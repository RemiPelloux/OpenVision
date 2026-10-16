import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { kc, qc } from "./opener.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var xf, N_s;
export { N_s, xf };
var __wakaru_Xf_initialized = false;
export function Xf() {
if (__wakaru_Xf_initialized) return;
__wakaru_Xf_initialized = true;
"use strict";
E(), Rn(), It(), qc(), qc(), xf = jn("glassOpenerService"), N_s = class {
    constructor(t){
        this._openerService = t;
    }
    get vscodeService() {
        return this._openerService;
    }
    registerOpener(t) {
        return this._openerService.registerOpener(t);
    }
    open(t, e) {
        return this._openerService.open(t, e);
    }
}, N_s = Re([
    F(0, kc)
], N_s), bn(xf, N_s, 1);

}
