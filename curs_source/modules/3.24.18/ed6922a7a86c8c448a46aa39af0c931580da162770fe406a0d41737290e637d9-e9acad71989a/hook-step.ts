import { x } from "./tslib.es6.js";
var Lu;
export { Lu };
var __wakaru_CWi_initialized = false;
export function CWi() {
if (__wakaru_CWi_initialized) return;
__wakaru_CWi_initialized = true;
"use strict";
x(), Lu = {
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
