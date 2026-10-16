import { normalizeHookResponse } from "../../dist_exports.js";
import { HookStep, init_hook_step } from "./hook-step.js";
import { init_normalize } from "./normalize.js";
import { init_afterAgentResponseResponse, validateAfterAgentResponseResponse } from "./validators/afterAgentResponseResponse.js";
import { init_afterAgentThoughtResponse, validateAfterAgentThoughtResponse } from "./validators/afterAgentThoughtResponse.js";
import { init_afterEditFileResponse, validateAfterEditFileResponse } from "./validators/afterEditFileResponse.js";
import { init_afterMCPExecutionResponse, validateAfterMCPExecutionResponse } from "./validators/afterMCPExecutionResponse.js";
import { init_afterShellExecutionResponse, validateAfterShellExecutionResponse } from "./validators/afterShellExecutionResponse.js";
import { init_afterTabFileEditResponse, validateAfterTabFileEditResponse } from "./validators/afterTabFileEditResponse.js";
import { init_beforeCommandExecutionHookResponse, validateBeforeCommandExecutionHookResponse } from "./validators/beforeCommandExecutionHookResponse.js";
import { init_beforePromptSubmitResponse, validateBeforePromptSubmitResponse } from "./validators/beforePromptSubmitResponse.js";
import { init_beforeReadFileResponse, validateBeforeReadFileResponse } from "./validators/beforeReadFileResponse.js";
import { init_beforeTabFileReadResponse, validateBeforeTabFileReadResponse } from "./validators/beforeTabFileReadResponse.js";
import { init_postToolUseFailureResponse, validatePostToolUseFailureResponse } from "./validators/postToolUseFailureResponse.js";
import { init_postToolUseResponse, validatePostToolUseResponse } from "./validators/postToolUseResponse.js";
import { init_preCompactResponse, validatePreCompactResponse } from "./validators/preCompactResponse.js";
import { init_preToolUseResponse, validatePreToolUseResponse } from "./validators/preToolUseResponse.js";
import { init_sessionEndResponse, validateSessionEndResponse } from "./validators/sessionEndResponse.js";
import { init_sessionStartResponse, validateSessionStartResponse } from "./validators/sessionStartResponse.js";
import { init_stopResponse, validateStopResponse } from "./validators/stopResponse.js";
import { init_subagentStartResponse, validateSubagentStartResponse } from "./validators/subagentStartResponse.js";
import { init_subagentStopResponse, validateSubagentStopResponse } from "./validators/subagentStopResponse.js";
import { init_workspaceOpenResponse, validateWorkspaceOpenResponse } from "./validators/workspaceOpenResponse.js";
var HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT, DEFAULT_HOOK_TIMEOUT_SECONDS, DEFAULT_STOP_HOOK_LOOP_LIMIT, HOOK_BLOCK_EXIT_CODE, HookResponseValidatorMap, validateAndParseHookResponse, PERMISSION_HOOK_STEPS, WORKSPACE_LIFECYCLE_STEPS;
export { DEFAULT_HOOK_TIMEOUT_SECONDS, DEFAULT_STOP_HOOK_LOOP_LIMIT, HOOK_BLOCK_EXIT_CODE, HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT, HookResponseValidatorMap, PERMISSION_HOOK_STEPS, WORKSPACE_LIFECYCLE_STEPS, validateAndParseHookResponse };
var __wakaru_init_types3_initialized = false;
export function init_types3() {
if (__wakaru_init_types3_initialized) return;
__wakaru_init_types3_initialized = true;
"use strict";
init_hook_step();
init_normalize();
init_afterAgentResponseResponse();
init_afterAgentThoughtResponse();
init_afterEditFileResponse();
init_afterMCPExecutionResponse();
init_afterShellExecutionResponse();
init_afterTabFileEditResponse();
init_beforeCommandExecutionHookResponse();
init_beforePromptSubmitResponse();
init_beforeReadFileResponse();
init_beforeTabFileReadResponse();
init_postToolUseFailureResponse();
init_postToolUseResponse();
init_preCompactResponse();
init_preToolUseResponse();
init_sessionEndResponse();
init_sessionStartResponse();
init_stopResponse();
init_subagentStartResponse();
init_subagentStopResponse();
init_workspaceOpenResponse();
init_hook_step();
HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT = new Set([
    HookStep.sessionStart,
    HookStep.beforeSubmitPrompt,
    HookStep.preToolUse,
    HookStep.postToolUse,
    HookStep.postToolUseFailure
]);
DEFAULT_HOOK_TIMEOUT_SECONDS = 60;
DEFAULT_STOP_HOOK_LOOP_LIMIT = 5;
HOOK_BLOCK_EXIT_CODE = 2;
HookResponseValidatorMap = {
    [HookStep.beforeShellExecution]: validateBeforeCommandExecutionHookResponse,
    [HookStep.beforeMCPExecution]: validateBeforeCommandExecutionHookResponse,
    [HookStep.afterShellExecution]: validateAfterShellExecutionResponse,
    [HookStep.afterMCPExecution]: validateAfterMCPExecutionResponse,
    [HookStep.beforeReadFile]: validateBeforeReadFileResponse,
    [HookStep.afterFileEdit]: validateAfterEditFileResponse,
    [HookStep.beforeTabFileRead]: validateBeforeTabFileReadResponse,
    [HookStep.afterTabFileEdit]: validateAfterTabFileEditResponse,
    [HookStep.beforeSubmitPrompt]: validateBeforePromptSubmitResponse,
    [HookStep.stop]: validateStopResponse,
    [HookStep.afterAgentResponse]: validateAfterAgentResponseResponse,
    [HookStep.afterAgentThought]: validateAfterAgentThoughtResponse,
    [HookStep.sessionStart]: validateSessionStartResponse,
    [HookStep.sessionEnd]: validateSessionEndResponse,
    [HookStep.preCompact]: validatePreCompactResponse,
    [HookStep.subagentStart]: validateSubagentStartResponse,
    [HookStep.subagentStop]: validateSubagentStopResponse,
    [HookStep.preToolUse]: validatePreToolUseResponse,
    [HookStep.postToolUse]: validatePostToolUseResponse,
    [HookStep.postToolUseFailure]: validatePostToolUseFailureResponse,
    [HookStep.workspaceOpen]: validateWorkspaceOpenResponse
};
validateAndParseHookResponse = (hookStep, response, options2)=>{
    const normalizedResponse = normalizeHookResponse(hookStep, response, options2);
    const validator2 = HookResponseValidatorMap[hookStep];
    const validation = validator2(normalizedResponse);
    if (validation.isValid) {
        return {
            success: true,
            data: normalizedResponse
        };
    } else {
        return {
            success: false,
            errors: validation.errors
        };
    }
};
PERMISSION_HOOK_STEPS = [
    HookStep.beforeShellExecution,
    HookStep.beforeMCPExecution,
    HookStep.beforeReadFile,
    HookStep.beforeTabFileRead,
    HookStep.subagentStart,
    HookStep.preToolUse
];
WORKSPACE_LIFECYCLE_STEPS = [
    HookStep.workspaceOpen
];

}
