import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Fp, zp } from "./lifecycle_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var aEe, URs;
export { URs, aEe };
var __wakaru_WDe_initialized = false;
export function WDe() {
if (__wakaru_WDe_initialized) return;
__wakaru_WDe_initialized = true;
"use strict";
E(), Rn(), It(), zp(), zp(), aEe = jn("glassLifecycleService"), URs = class {
    constructor(t){
        this._lifecycleService = t;
    }
    get vscodeService() {
        return this._lifecycleService;
    }
    get onBeforeShutdown() {
        return this._lifecycleService.onBeforeShutdown;
    }
    get onShutdownVeto() {
        return this._lifecycleService.onShutdownVeto;
    }
    get onBeforeShutdownError() {
        return this._lifecycleService.onBeforeShutdownError;
    }
    get onWillShutdown() {
        return this._lifecycleService.onWillShutdown;
    }
    get onDidShutdown() {
        return this._lifecycleService.onDidShutdown;
    }
}, URs = Re([
    F(0, Fp)
], URs), bn(aEe, URs, 1);

}
