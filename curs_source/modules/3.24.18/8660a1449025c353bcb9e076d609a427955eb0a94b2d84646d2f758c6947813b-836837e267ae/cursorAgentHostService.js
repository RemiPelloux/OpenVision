import { Il, bn } from "./SZu.js";
import { UCi, jCi } from "./agentRemoteWorkspacePolicy.js";
import { vl, wm } from "./buildFlags.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var kie, mns;
export { kie, mns };
var __wakaru_zpe_initialized = false;
export function zpe() {
if (__wakaru_zpe_initialized) return;
__wakaru_zpe_initialized = true;
"use strict";
E(), Ji(), wm(), Rn(), It(), fo(), _s(), EE(), jCi(), kie = Il("cursorAgentHostEnablementService"), mns = class {
    constructor(t, e, n, i, r){
        const s = !vl.localMode && r.enablement === "enabled";
        let o = !1;
        if (!vl.localMode) try {
            o = t.checkFeatureGate("cursor_agent_host", {
                disableExposureLog: s
            });
        } catch (l) {
            e.error('[CursorAgentHostEnablementService] Error checking feature gate "cursor_agent_host":', l);
        }
        const a = i.isGlass === !0 || n.decision.allowed;
        this._agentHostEnabled = (o || s) && a, e.info(`[CursorAgentHostEnablementService] cursor_agent_host gate is ${o ? "enabled" : "disabled"}, private inference is ${s ? "enabled" : "disabled"}, remote-workspace policy is ${a ? "allowed" : "denied"}, effective agent-host topology is ${this._agentHostEnabled ? "enabled" : "disabled"}`);
    }
    isCursorAgentHostEnabled() {
        return this._agentHostEnabled;
    }
}, mns = Re([
    F(0, Cr),
    F(1, Li),
    F(2, UCi),
    F(3, ps),
    F(4, mT)
], mns), bn(kie, mns, 0, 1);

}
