import { OFFER_REPOSITORY_SWITCH_TOOL_NAME, SEND_SLACK_MESSAGE_V2_TOOL_NAME, init_constants6 } from "../constants.js";
import { init_openai_codex_cloud, openAICodexCloudAgentPrefix } from "../prompts/openai-codex-cloud.js";
import { AgentType, init_agent_config } from "../utils/agent-config.js";
var CODEX_CLOUD_ALLOWED_TOOL_NAMES, MCP_CORE_TOOL_IDENTIFIERS, CUATOOL_NAMES, isMcpToolName, isCUAToolName, filterToolsForCodexCloud, filterToolSetForCodexCloud, shouldUseCodexCloudBehavior, shouldFilterToolsForCodexCloud, openAICodexCloudSystemPrompt;
export { CODEX_CLOUD_ALLOWED_TOOL_NAMES, CUATOOL_NAMES, MCP_CORE_TOOL_IDENTIFIERS, filterToolSetForCodexCloud, filterToolsForCodexCloud, isCUAToolName, isMcpToolName, openAICodexCloudSystemPrompt, shouldFilterToolsForCodexCloud, shouldUseCodexCloudBehavior };
var __wakaru_init_openai_codex_cloud2_initialized = false;
export function init_openai_codex_cloud2() {
if (__wakaru_init_openai_codex_cloud2_initialized) return;
__wakaru_init_openai_codex_cloud2_initialized = true;
"use strict";
init_constants6();
init_openai_codex_cloud();
init_agent_config();
CODEX_CLOUD_ALLOWED_TOOL_NAMES = new Set([
    "Shell",
    "TodoWrite",
    "ApplyPatch",
    "WebSearch",
    "GenerateImage",
    "CreatePlan",
    "FetchPullRequest",
    "FetchRules",
    OFFER_REPOSITORY_SWITCH_TOOL_NAME,
    SEND_SLACK_MESSAGE_V2_TOOL_NAME
]);
MCP_CORE_TOOL_IDENTIFIERS = new Set([
    "MCP",
    "GET_MCP_TOOLS",
    "FETCH_MCP_RESOURCE",
    "LIST_MCP_RESOURCES"
]);
CUATOOL_NAMES = new Set([
    "browser_container"
]);
isMcpToolName = (tool)=>{
    return MCP_CORE_TOOL_IDENTIFIERS.has(tool.toolIdentifier);
};
isCUAToolName = (toolName)=>{
    if (toolName.startsWith("cursor-browser") || toolName.startsWith("cursor-dev")) {
        return true;
    }
    return CUATOOL_NAMES.has(toolName);
};
filterToolsForCodexCloud = (tools)=>tools.filter((tool)=>CODEX_CLOUD_ALLOWED_TOOL_NAMES.has(tool.name) || isMcpToolName(tool) || isCUAToolName(tool.name));
filterToolSetForCodexCloud = (toolSetHandle)=>toolSetHandle.transformToolsInPlace(filterToolsForCodexCloud);
shouldUseCodexCloudBehavior = (props)=>props.enableCloudTesting === true && props.agentType === AgentType.BACKGROUND;
shouldFilterToolsForCodexCloud = (useCodexCloud, featureFlags)=>useCodexCloud && featureFlags?.codexCloudToolFiltering === true;
openAICodexCloudSystemPrompt = (props)=>openAICodexCloudAgentPrefix({
        ...props
    });

}
