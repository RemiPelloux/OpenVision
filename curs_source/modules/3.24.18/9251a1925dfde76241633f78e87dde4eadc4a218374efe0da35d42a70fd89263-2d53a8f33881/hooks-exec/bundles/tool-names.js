var HooksToolName;
export { HooksToolName };
var __wakaru_init_tool_names_initialized = false;
export function init_tool_names() {
if (__wakaru_init_tool_names_initialized) return;
__wakaru_init_tool_names_initialized = true;
"use strict";
HooksToolName = {
    Read: "Read",
    Write: "Write",
    Delete: "Delete",
    LS: "List",
    Grep: "Grep",
    Shell: "Shell",
    WriteShellStdin: "WriteShellStdin",
    Fetch: "Fetch",
    ReadLints: "ReadLints",
    ListMcpResources: "ListMcpResources",
    FetchMcpResource: "FetchMcpResource",
    ComputerUse: "ComputerUse",
    RecordScreen: "RecordScreen"
};

}
