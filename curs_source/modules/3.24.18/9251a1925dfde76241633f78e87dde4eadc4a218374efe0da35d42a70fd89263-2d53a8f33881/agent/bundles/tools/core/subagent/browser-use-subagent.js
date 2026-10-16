import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { CURSOR_IDE_BROWSER_PROVIDER_ID } from "../../../../../agent-exec/dist/mcp.js";
import { init_subagent_utils } from "./subagent-utils.js";
import { SubagentResumeMode, init_types13 } from "./types.js";
import { init_mcp8 } from "../../mcp/mcp.js";
import { createBrowserUseToolsOverride } from "../../../../../mcp_sandbox_policy_exports.js";
import { CustomSubagentPermissionMode, SubagentType, SubagentTypeBrowserUse, init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var BROWSER_USE_PROVIDER_IDS, BROWSER_USE_LOCAL_CONTEXT_TOOL_IDENTIFIERS, BROWSER_USE_SUBAGENT_PROMPT, BROWSER_USE_SUBAGENT_TYPE, BROWSER_USE_SUBAGENT_CONFIG;
export { BROWSER_USE_LOCAL_CONTEXT_TOOL_IDENTIFIERS, BROWSER_USE_PROVIDER_IDS, BROWSER_USE_SUBAGENT_CONFIG, BROWSER_USE_SUBAGENT_PROMPT, BROWSER_USE_SUBAGENT_TYPE };
var __wakaru_init_browser_use_subagent_initialized = false;
export function init_browser_use_subagent() {
if (__wakaru_init_browser_use_subagent_initialized) return;
__wakaru_init_browser_use_subagent_initialized = true;
"use strict";
init_dist8();
init_subagents_pb();
init_mcp8();
init_subagent_utils();
init_types13();
BROWSER_USE_PROVIDER_IDS = new Set([
    CURSOR_IDE_BROWSER_PROVIDER_ID
]);
BROWSER_USE_LOCAL_CONTEXT_TOOL_IDENTIFIERS = new Set([
    "READ",
    "GLOB",
    "GREP",
    "TODO_WRITE",
    "SEMANTIC_SEARCH"
]);
BROWSER_USE_SUBAGENT_PROMPT = `Enter BROWSER USE mode. Use the provided cursor-ide-browser tools to interact with web pages.

Important: Every browser tool call automatically returns a screenshot of the current page state. You do NOT need to use the browser_take_screenshot tool explicitly - it would be redundant since you already receive screenshots after each action.
`;
BROWSER_USE_SUBAGENT_TYPE = new SubagentType({
    type: {
        case: "browserUse",
        value: new SubagentTypeBrowserUse()
    }
});
BROWSER_USE_SUBAGENT_CONFIG = {
    subagent_type: BROWSER_USE_SUBAGENT_TYPE,
    permissionMode: CustomSubagentPermissionMode.AGENT_ONLY,
    description: "Perform browser-based testing and web automation. This subagent can navigate web pages, interact with elements, fill forms, and take screenshots. Use this for testing web applications, verifying UI changes, or any browser-based tasks. Use this browser subagent when you need to either: (1) parallelize browser tasks alongside other work, or (2) execute a longer sequence of browser actions that benefit from dedicated context. For simple, single browser actions, you may use the browser tools directly. This subagent requires agent mode because browser MCP access is unavailable in readonly mode. This subagent_type is stateful; if a browserUse subagent already exists, the previously created subagent will be resumed if you reuse the Task tool with subagent_type set to browserUse.",
    preserveTaskTool: false,
    toolsOverride: createBrowserUseToolsOverride,
    defaultModelIds: [
        "claude-4.5-sonnet"
    ],
    systemReminder: ()=>BROWSER_USE_SUBAGENT_PROMPT,
    resumeModeOverride: SubagentResumeMode.LAST_AGENT_SAME_TYPE
};

}
