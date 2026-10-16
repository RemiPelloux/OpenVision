import { getTahomaPlanCommitmentSentinel } from "../../../mcp_sandbox_policy_exports.js";
var TAHOMA_PLAN_COMMITMENT_SENTINEL;
export { TAHOMA_PLAN_COMMITMENT_SENTINEL };
var __wakaru_init_tahoma_plan_commitment_initialized = false;
export function init_tahoma_plan_commitment() {
if (__wakaru_init_tahoma_plan_commitment_initialized) return;
__wakaru_init_tahoma_plan_commitment_initialized = true;
"use strict";
TAHOMA_PLAN_COMMITMENT_SENTINEL = getTahomaPlanCommitmentSentinel("CreatePlan");

}
