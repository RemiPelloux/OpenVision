import { Fa } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { or, yi } from "./configuration.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { Csk } from "./gYa.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Del, NYm, UCi, pns;
export { Del, NYm, UCi, pns };
var __wakaru_jCi_initialized = false;
export function jCi() {
if (__wakaru_jCi_initialized) return;
__wakaru_jCi_initialized = true;
"use strict";
E(), Fa(), or(), Rn(), It(), fo(), Del = "cursor.agent.remoteWorkspaceAuthorities", NYm = "Agent is disabled in this local window by your administrator. Open this workspace in an approved remote workspace to use Agent.", UCi = jn("agentRemoteWorkspacePolicyService"), pns = class {
    constructor(t, e){
        this.configurationService = t, this.environmentService = e;
    }
    get decision() {
        const t = this.configurationService.inspect(Del).policyValue;
        return Csk({
            remoteAuthority: this.environmentService.remoteAuthority,
            policyValue: t
        });
    }
}, pns = Re([
    F(0, yi),
    F(1, ps)
], pns), bn(UCi, pns, 0);

}
