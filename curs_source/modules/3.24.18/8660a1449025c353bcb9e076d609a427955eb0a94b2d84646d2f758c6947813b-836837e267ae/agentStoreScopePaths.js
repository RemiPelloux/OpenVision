import { Il, bn } from "./SZu.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { fKa } from "./agentStoreCitationMetrics.js";
import { qn } from "./async.js";
import { nr, rs } from "./commands.js";
import { Rn } from "./extensions.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { Uh, ip } from "./metricsService.js";
import { Ki } from "./network.js";
import { jB } from "./projectAgentHeader.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { OW1, hJr, jW1, yKa } from "./yBp.js";
var pJr, w0i, mJr;
export { mJr, pJr, w0i };
var __wakaru_ECe_initialized = false;
export function ECe() {
if (__wakaru_ECe_initialized) return;
__wakaru_ECe_initialized = true;
"use strict";
E(), nl(), qn(), Ki(), Lr(), rs(), Rn(), It(), Sr(), wl(), jB(), ip(), fKa(), pJr = 6e4, w0i = Il("agentStorePathResolutionService"), mJr = class {
    constructor(t, e, n, i){
        this.commandService = t, this.workspaceContextService = e, this.agentRepositoryService = n, this.metricsService = i;
    }
    async resolveFileUri(t) {
        const e = await jW1(this.commandService, this.workspaceContextService, t, (n)=>this.isProjectStore(n));
        return e.status !== "not-store" && OW1(this.metricsService, {
            reason: e.status === "ready" ? "ok" : e.reason,
            matchKind: yKa(t.path)
        }), e;
    }
    isProjectStore(t) {
        const e = this.agentRepositoryService.getAgentHeader(t);
        if (e === void 0) return !1;
        const n = e.subagentParentId;
        return hJr({
            header: e,
            parentHeader: n === void 0 || n.length === 0 ? void 0 : this.agentRepositoryService.getAgentHeader(n)
        });
    }
}, mJr = Re([
    F(0, nr),
    F(1, yr),
    F(2, ma),
    F(3, Uh)
], mJr), bn(w0i, mJr, 2, 1);

}
