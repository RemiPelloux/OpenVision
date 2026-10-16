import { E } from "./tslib.es6.js";
var dh;
export { dh };
var __wakaru_ZKr_initialized = false;
export function ZKr() {
if (__wakaru_ZKr_initialized) return;
__wakaru_ZKr_initialized = true;
"use strict";
E(), dh = {
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
