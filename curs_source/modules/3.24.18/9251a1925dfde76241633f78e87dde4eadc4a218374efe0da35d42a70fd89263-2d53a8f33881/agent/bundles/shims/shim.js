import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_tool_call_name, toolCallNameKey } from "../tools/tool-call-name.js";
import { init_request_id, requestModelNameKey } from "../utils/request-id.js";
import { init_dist26 } from "../../../chat-inference/dist/index.js";
import { init_dist } from "../../../context/dist/index.js";
import { appendSystemReminder } from "../../../mcp_sandbox_policy_exports.js";
var SHIM_NAME, definedShimNames, logger45, ambientCall, ShimCall;
export { SHIM_NAME, ShimCall, ambientCall, definedShimNames, logger45 };
var __wakaru_init_shim_initialized = false;
export function init_shim() {
if (__wakaru_init_shim_initialized) return;
__wakaru_init_shim_initialized = true;
"use strict";
init_dist26();
init_dist();
init_tool_call_name();
init_request_id();
SHIM_NAME = /^[a-z][a-z0-9_]*$/;
definedShimNames = new Set();
logger45 = createLogger("@anysphere/agent:shim");
ShimCall = class {
    constructor(){
        this.pending = [];
        this.loggedOutcomes = new Set();
        this.noticeSet = new Set();
    }
    report(outcome) {
        const firing = outcome;
        if (firing.status === "unchanged") return outcome;
        const key = `${firing.shim.name}:${firing.status === "refused" ? firing.reason : "applied"}`;
        if (!this.loggedOutcomes.has(key)) {
            this.loggedOutcomes.add(key);
            this.pending.push(firing);
        }
        if (firing.status === "applied" && firing.notice !== void 0) {
            this.noticeSet.add(firing.notice);
        }
        return outcome;
    }
    run(fn) {
        const previous = ambientCall;
        ambientCall = this;
        try {
            const result = fn();
            if (result instanceof Promise) {
                throw new Error("ShimCall.run needs a synchronous function.");
            }
            return result;
        } finally{
            ambientCall = previous;
        }
    }
    flush(ctx) {
        const model = ctx.get(requestModelNameKey) ?? "unknown";
        for (const firing of this.pending.splice(0)){
            const { shim } = firing;
            logger45.info(ctx, "agent.shim.fired", {
                ...firing.log,
                shim: shim.name,
                shim_tool: ctx.get(toolCallNameKey) ?? "unknown",
                model,
                outcome: firing.status,
                ...firing.status === "refused" ? {
                    shim_reason: firing.reason
                } : {}
            });
        }
    }
    finish(ctx, result) {
        this.flush(ctx);
        return [
            ...this.noticeSet
        ].reduce(appendSystemReminder, result);
    }
};

}
