import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li, pA } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var eu, bCs, cjl, yCs;
export { bCs, cjl, eu, yCs };
var __wakaru_Zu_initialized = false;
export function Zu() {
if (__wakaru_Zu_initialized) return;
__wakaru_Zu_initialized = true;
"use strict";
E(), Rn(), It(), Ji(), Ji(), eu = jn("glassLogService"), bCs = class {
    constructor(t){
        this._logService = t;
    }
    get vscodeService() {
        return this._logService;
    }
    trace(t, ...e) {
        this._logService.trace(t, ...e);
    }
    debug(t, ...e) {
        this._logService.debug(t, ...e);
    }
    info(t, ...e) {
        this._logService.info(t, ...e);
    }
    warn(t, ...e) {
        this._logService.warn(t, ...e);
    }
    error(t, ...e) {
        this._logService.error(t, ...e);
    }
}, bCs = Re([
    F(0, Li)
], bCs), cjl = jn("glassLoggerService"), yCs = class {
    constructor(t){
        this._loggerService = t;
    }
    get vscodeService() {
        return this._loggerService;
    }
    createLogger(t, e) {
        return typeof t == "string" ? this._loggerService.createLogger(t, e) : this._loggerService.createLogger(t, e);
    }
    getLogger(t) {
        return this._loggerService.getLogger(t);
    }
}, yCs = Re([
    F(0, pA)
], yCs), bn(eu, bCs, 1), bn(cjl, yCs, 1);

}
