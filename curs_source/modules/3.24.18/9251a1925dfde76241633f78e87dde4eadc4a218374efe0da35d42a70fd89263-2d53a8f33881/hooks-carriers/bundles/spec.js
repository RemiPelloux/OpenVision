import { init_dist6 } from "../../hooks/dist/index.js";
import { HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT } from "../../hooks/dist/types.js";
import { isHookStepAdditionalContextEventName } from "../../mcp_sandbox_policy_exports.js";
var HOOK_STEP_CARRIER_SPECS;
export { HOOK_STEP_CARRIER_SPECS };
var __wakaru_init_spec_initialized = false;
export function init_spec() {
if (__wakaru_init_spec_initialized) return;
__wakaru_init_spec_initialized = true;
"use strict";
init_dist6();
HOOK_STEP_CARRIER_SPECS = Object.fromEntries(Array.from(HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT).map((step)=>{
    if (!isHookStepAdditionalContextEventName(step)) {
        throw new Error(`HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT lists ${step} but HookStepAdditionalContextEventName does not include it. Extend the Extract<> union in spec.ts.`);
    }
    return [
        step,
        {
            hookEventName: step
        }
    ];
}));

}
