var MAX_WORKSPACE_LIST_ROWS, AgentHostWorkspaceListUnsupportedError;
export { AgentHostWorkspaceListUnsupportedError, MAX_WORKSPACE_LIST_ROWS };
var __wakaru_init_workspace_list_initialized = false;
export function init_workspace_list() {
if (__wakaru_init_workspace_list_initialized) return;
__wakaru_init_workspace_list_initialized = true;
"use strict";
MAX_WORKSPACE_LIST_ROWS = 200;
AgentHostWorkspaceListUnsupportedError = class extends Error {
    constructor(){
        super("This computer cannot list workspaces yet");
        this.code = "WORKSPACE_LIST_UNSUPPORTED";
        this.name = "AgentHostWorkspaceListUnsupportedError";
    }
};

}
