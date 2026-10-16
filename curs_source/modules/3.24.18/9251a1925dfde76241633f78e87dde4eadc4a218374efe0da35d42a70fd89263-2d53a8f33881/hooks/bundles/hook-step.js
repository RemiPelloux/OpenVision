var HookStep;
export { HookStep };
var __wakaru_init_hook_step_initialized = false;
export function init_hook_step() {
if (__wakaru_init_hook_step_initialized) return;
__wakaru_init_hook_step_initialized = true;
"use strict";
HookStep = {
    beforeShellExecution: "beforeShellExecution",
    beforeMCPExecution: "beforeMCPExecution",
    afterShellExecution: "afterShellExecution",
    afterMCPExecution: "afterMCPExecution",
    beforeReadFile: "beforeReadFile",
    afterFileEdit: "afterFileEdit",
    beforeTabFileRead: "beforeTabFileRead",
    afterTabFileEdit: "afterTabFileEdit",
    stop: "stop",
    beforeSubmitPrompt: "beforeSubmitPrompt",
    afterAgentResponse: "afterAgentResponse",
    afterAgentThought: "afterAgentThought",
    sessionStart: "sessionStart",
    sessionEnd: "sessionEnd",
    preCompact: "preCompact",
    subagentStart: "subagentStart",
    subagentStop: "subagentStop",
    preToolUse: "preToolUse",
    postToolUse: "postToolUse",
    postToolUseFailure: "postToolUseFailure",
    workspaceOpen: "workspaceOpen"
};

}
