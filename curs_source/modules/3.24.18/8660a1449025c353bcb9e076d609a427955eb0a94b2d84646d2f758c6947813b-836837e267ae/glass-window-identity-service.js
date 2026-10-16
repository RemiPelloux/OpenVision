import { Il, bn, x0 } from "./SZu.js";
import { Rn } from "./extensions.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var SOn, PRs;
export { PRs, SOn };
var __wakaru_TFi_initialized = false;
export function TFi() {
if (__wakaru_TFi_initialized) return;
__wakaru_TFi_initialized = true;
"use strict";
E(), Rn(), It(), xd(), SOn = Il("glassWindowIdentityService"), PRs = class {
    constructor(t){
        this.isHomeWorkspace = (e)=>e?.id === this.homeWorkspaceIdentifier.id, this.homeWorkspaceIdentifier = x0(t.getWorkspace());
    }
}, PRs = Re([
    F(0, F_)
], PRs), bn(SOn, PRs, 1, 1);

}
