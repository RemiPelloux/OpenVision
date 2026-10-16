import { bn, jn } from "./SZu.js";
import { or, yi } from "./configuration.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var _N, ZDi;
export { ZDi, _N };
var __wakaru_AL_initialized = false;
export function AL() {
if (__wakaru_AL_initialized) return;
__wakaru_AL_initialized = true;
"use strict";
E(), or(), Rn(), It(), or(), _N = jn("glassConfigurationService"), ZDi = class {
    constructor(t){
        this._configurationService = t, this.onDidChangeConfiguration = this._configurationService.onDidChangeConfiguration;
    }
    get isDisposed() {
        return this._configurationService.isDisposed === !0;
    }
    get vscodeService() {
        return this._configurationService;
    }
    getValue(t, e) {
        return this._configurationService.getValue(t, e);
    }
    updateValue(t, e, n, i, r) {
        return this._configurationService.updateValue(t, e, n, i, r);
    }
    inspect(t, e) {
        return this._configurationService.inspect(t, e);
    }
}, ZDi = Re([
    F(0, yi)
], ZDi), bn(_N, ZDi, 1);

}
