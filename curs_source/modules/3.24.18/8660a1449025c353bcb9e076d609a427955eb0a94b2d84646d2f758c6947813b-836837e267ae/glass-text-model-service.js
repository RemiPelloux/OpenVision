import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Em, Rh } from "./resolverService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Mxt, qys;
export { Mxt, qys };
var __wakaru_AXt_initialized = false;
export function AXt() {
if (__wakaru_AXt_initialized) return;
__wakaru_AXt_initialized = true;
"use strict";
E(), Em(), Rn(), It(), Mxt = jn("glassTextModelService"), qys = class {
    constructor(t){
        this._textModelService = t;
    }
    get vscodeService() {
        return this._textModelService;
    }
    createModelReference(t, e) {
        return this._textModelService.createModelReference(t, e);
    }
    resolveWith(t) {
        return t.resolve(this._textModelService);
    }
}, qys = Re([
    F(0, Rh)
], qys), bn(Mxt, qys, 1);

}
