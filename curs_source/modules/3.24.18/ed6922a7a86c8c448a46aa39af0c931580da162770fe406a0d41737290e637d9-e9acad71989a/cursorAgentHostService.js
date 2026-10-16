import { C, ie } from "./actions_2.js";
import { GOn, VOn } from "./agentRemoteWorkspacePolicy.js";
import { am, kc } from "./buildFlags.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { Hx, uT } from "./privateInferenceEnablementService.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Vde, tYi;
export { Vde, tYi };
var __wakaru_M1e_initialized = false;
export function M1e() {
if (__wakaru_M1e_initialized) return;
__wakaru_M1e_initialized = true;
"use strict";
x(), Qn(), am(), Pn(), Ze(), Vr(), qs(), Hx(), VOn(), Vde = pd("cursorAgentHostEnablementService"), tYi = class {
    constructor(e, t, n, i, r){
        const s = !kc.localMode && r.enablement === "enabled";
        let o = !1;
        if (!kc.localMode) try {
            o = e.checkFeatureGate("cursor_agent_host", {
                disableExposureLog: s
            });
        } catch (c) {
            t.error('[CursorAgentHostEnablementService] Error checking feature gate "cursor_agent_host":', c);
        }
        const a = i.isGlass === !0 || n.decision.allowed;
        this._agentHostEnabled = (o || s) && a, t.info(`[CursorAgentHostEnablementService] cursor_agent_host gate is ${o ? "enabled" : "disabled"}, private inference is ${s ? "enabled" : "disabled"}, remote-workspace policy is ${a ? "allowed" : "denied"}, effective agent-host topology is ${this._agentHostEnabled ? "enabled" : "disabled"}`);
    }
    isCursorAgentHostEnabled() {
        return this._agentHostEnabled;
    }
}, tYi = ie([
    C(0, Kr),
    C(1, Wn),
    C(2, GOn),
    C(3, Yi),
    C(4, uT)
], tYi), mn(Vde, tYi, 0, 1);

}
