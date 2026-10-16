import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
var ZBe, GRs;
export { GRs, ZBe };
var __wakaru_Hut_initialized = false;
export function Hut() {
if (__wakaru_Hut_initialized) return;
__wakaru_Hut_initialized = true;
"use strict";
E(), Rn(), It(), Vp(), ZBe = jn("glassUriIdentityService"), GRs = class {
    constructor(t){
        this._uriIdentityService = t;
    }
    get vscodeService() {
        return this._uriIdentityService;
    }
    get extUri() {
        return this._uriIdentityService.extUri;
    }
    asCanonicalUri(t) {
        return this._uriIdentityService.asCanonicalUri(t);
    }
}, GRs = Re([
    F(0, nh)
], GRs), bn(ZBe, GRs, 1);

}
