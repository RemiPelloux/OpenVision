import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { $Pe, aC, cN } from "./scm.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var IRt, $Rs, BZl, HRs;
export { $Rs, BZl, HRs, IRt };
var __wakaru_VQt_initialized = false;
export function VQt() {
if (__wakaru_VQt_initialized) return;
__wakaru_VQt_initialized = true;
"use strict";
E(), Rn(), It(), cN(), IRt = jn("glassSCMService"), $Rs = class {
    constructor(t){
        this._scmService = t;
    }
    get vscodeService() {
        return this._scmService;
    }
    get onDidAddRepository() {
        return this._scmService.onDidAddRepository;
    }
    get onDidRemoveRepository() {
        return this._scmService.onDidRemoveRepository;
    }
    get repositories() {
        return this._scmService.repositories;
    }
    getRepository(t) {
        return typeof t == "string" ? this._scmService.getRepository(t) : this._scmService.getRepository(t);
    }
}, $Rs = Re([
    F(0, aC)
], $Rs), bn(IRt, $Rs, 1), BZl = jn("glassSCMViewService"), HRs = class {
    constructor(t){
        this._scmViewService = t;
    }
    get vscodeService() {
        return this._scmViewService;
    }
    get activeRepository() {
        return this._scmViewService.activeRepository;
    }
    pinActiveRepository(t) {
        this._scmViewService.pinActiveRepository(t);
    }
}, HRs = Re([
    F(0, $Pe)
], HRs), bn(BZl, HRs, 1);

}
