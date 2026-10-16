import { Mpo, _Dv, hDv, oDv } from "./A3u.js";
import { C, ie } from "./actions_2.js";
import { Kv, Rb } from "./agentRepositoryServiceTypes.js";
import { Apo } from "./agentStoreCitationMetrics.js";
import { bn } from "./async.js";
import { $n, vi } from "./commands.js";
import { Pn } from "./extensions.js";
import { Ml } from "./index.ts";
import { Ze } from "./instantiation.js";
import { Cp, vp } from "./metricsService.js";
import { li } from "./network.js";
import { Ode } from "./projectAgentHeader.js";
import { mn, pd } from "./qIc.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
var pqi, Lpo, mqi;
export { Lpo, mqi, pqi };
var __wakaru_RUe_initialized = false;
export function RUe() {
if (__wakaru_RUe_initialized) return;
__wakaru_RUe_initialized = true;
"use strict";
x(), Ml(), bn(), li(), Li(), vi(), Pn(), Ze(), ci(), Rb(), Ode(), Cp(), Apo(), pqi = 6e4, Lpo = pd("agentStorePathResolutionService"), mqi = class {
    constructor(e, t, n, i){
        this.commandService = e, this.workspaceContextService = t, this.agentRepositoryService = n, this.metricsService = i;
    }
    async resolveFileUri(e) {
        const t = await _Dv(this.commandService, this.workspaceContextService, e, (n)=>this.isProjectStore(n));
        return t.status !== "not-store" && hDv(this.metricsService, {
            reason: t.status === "ready" ? "ok" : t.reason,
            matchKind: Mpo(e.path)
        }), t;
    }
    isProjectStore(e) {
        const t = this.agentRepositoryService.getAgentHeader(e);
        if (t === void 0) return !1;
        const n = t.subagentParentId;
        return oDv({
            header: t,
            parentHeader: n === void 0 || n.length === 0 ? void 0 : this.agentRepositoryService.getAgentHeader(n)
        });
    }
}, mqi = ie([
    C(0, $n),
    C(1, Jn),
    C(2, Kv),
    C(3, vp)
], mqi), mn(Lpo, mqi, 2, 1);

}
