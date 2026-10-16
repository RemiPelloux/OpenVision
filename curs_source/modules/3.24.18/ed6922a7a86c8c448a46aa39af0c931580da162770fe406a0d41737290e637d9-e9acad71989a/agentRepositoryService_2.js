import { j3n } from "./agentLifecycleTypes.js";
import { x } from "./tslib.es6.js";
function Lxh(e) {
    return (e?.toLowerCase() ?? "").includes("not found") ? "not_found" : "unknown";
}
var MTo;
export { Lxh, MTo };
var __wakaru_Nxh_initialized = false;
export function Nxh() {
if (__wakaru_Nxh_initialized) return;
__wakaru_Nxh_initialized = true;
"use strict";
x(), j3n(), MTo = class extends Error {
    constructor(e){
        const t = e.backendMessage || "unknown error";
        super(`Agent queue mutation failed (${e.operation}) for ${e.agentId}: ${t}`), this.name = "AgentQueueMutationError", this.operation = e.operation, this.reason = Lxh(e.backendMessage), this.agentId = e.agentId, this.backendMessage = t;
    }
};

}
