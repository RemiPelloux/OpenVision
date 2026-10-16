import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ks, Wr } from "./notification.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var ul, D_s;
export { D_s, ul };
var __wakaru_zc_initialized = false;
export function zc() {
if (__wakaru_zc_initialized) return;
__wakaru_zc_initialized = true;
"use strict";
E(), Rn(), It(), Ks(), Ks(), ul = jn("glassNotificationService"), D_s = class {
    constructor(t){
        this._notificationService = t;
    }
    get vscodeService() {
        return this._notificationService;
    }
    notify(t) {
        return this._notificationService.notify(t);
    }
    info(t) {
        this._notificationService.info(t);
    }
    warn(t) {
        this._notificationService.warn(t);
    }
    error(t) {
        this._notificationService.error(t);
    }
    prompt(t, e, n, i) {
        return this._notificationService.prompt(t, e, n, i);
    }
}, D_s = Re([
    F(0, Wr)
], D_s), bn(ul, D_s, 1);

}
