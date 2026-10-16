import { hgg } from "./Ycg.js";
import { Eat } from "./agentLifecycleTypes.js";
import { E } from "./tslib.es6.js";
var Xos, Gcl;
export { Gcl, Xos };
var __wakaru_cVt_initialized = false;
export function cVt() {
if (__wakaru_cVt_initialized) return;
__wakaru_cVt_initialized = true;
"use strict";
E(), Eat(), Xos = class extends Error {
    constructor(t){
        const e = t.backendMessage || "unknown error";
        super(`Agent queue mutation failed (${t.operation}) for ${t.agentId}: ${e}`), this.name = "AgentQueueMutationError", this.operation = t.operation, this.reason = hgg(t.backendMessage), this.agentId = t.agentId, this.backendMessage = e;
    }
}, Gcl = class extends Error {
    constructor(t, e){
        super(`Cloud agent forked as ${t} but could not be loaded yet`, e?.cause !== void 0 ? {
            cause: e.cause
        } : void 0), this.name = "CloudAgentForkedButNotLoadableError", this.forkedBcId = t;
    }
};

}
