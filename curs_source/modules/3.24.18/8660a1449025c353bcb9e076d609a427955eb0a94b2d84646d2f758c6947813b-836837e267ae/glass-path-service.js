import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Rd, ih } from "./pathService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var s9, Hvs;
export { Hvs, s9 };
var __wakaru_F$_initialized = false;
export function F$() {
if (__wakaru_F$_initialized) return;
__wakaru_F$_initialized = true;
"use strict";
E(), Rn(), It(), ih(), s9 = jn("glassPathService"), Hvs = class {
    constructor(t){
        this._pathService = t;
    }
    get vscodeService() {
        return this._pathService;
    }
    get path() {
        return this._pathService.path;
    }
    get defaultUriScheme() {
        return this._pathService.defaultUriScheme;
    }
    userHome(t) {
        return this._pathService.userHome(t);
    }
    get resolvedUserHome() {
        return this._pathService.resolvedUserHome;
    }
}, Hvs = Re([
    F(0, Rd)
], Hvs), bn(s9, Hvs, 1);

}
