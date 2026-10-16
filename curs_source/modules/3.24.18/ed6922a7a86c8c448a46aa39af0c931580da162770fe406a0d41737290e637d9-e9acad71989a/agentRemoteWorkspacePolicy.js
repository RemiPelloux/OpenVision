import { Ps } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { cUv } from "./xmo.js";
var vbo, iuh, GOn, eYi;
export { GOn, eYi, iuh, vbo };
var __wakaru_VOn_initialized = false;
export function VOn() {
if (__wakaru_VOn_initialized) return;
__wakaru_VOn_initialized = true;
"use strict";
x(), Ps(), Cn(), Pn(), Ze(), Vr(), vbo = "cursor.agent.remoteWorkspaceAuthorities", iuh = "Agent is disabled in this local window by your administrator. Open this workspace in an approved remote workspace to use Agent.", GOn = vn("agentRemoteWorkspacePolicyService"), eYi = class {
    constructor(e, t){
        this.configurationService = e, this.environmentService = t;
    }
    get decision() {
        const e = this.configurationService.inspect(vbo).policyValue;
        return cUv({
            remoteAuthority: this.environmentService.remoteAuthority,
            policyValue: e
        });
    }
}, eYi = ie([
    C(0, qt),
    C(1, Yi)
], eYi), mn(GOn, eYi, 0);

}
