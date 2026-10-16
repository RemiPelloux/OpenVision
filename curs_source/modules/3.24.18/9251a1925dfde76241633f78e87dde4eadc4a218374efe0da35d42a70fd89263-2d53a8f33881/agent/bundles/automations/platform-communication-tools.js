import { AUTOMATION_TOOLS_MCP_SERVER_ID, OFFER_REPOSITORY_SWITCH_TOOL_NAME, SEND_SLACK_MESSAGE_V2_TOOL_NAME, SLACK_AGENT_TOOLS_MCP_SERVER_ID, SLACK_OFFER_REPOSITORY_SWITCH_MCP_TOOL_NAME, SLACK_SEND_MESSAGE_MCP_TOOL_NAME, SLACK_SET_STATUS_MCP_TOOL_NAME, SLACK_START_STREAMING_MCP_TOOL_NAME, START_SLACK_STREAMING_TOOL_NAME, init_constants6 } from "../constants.js";
import { init_automations2 } from "../prompts/bugbot/automations.js";
import { automationToolNameToSnakeCase } from "../../../mcp_sandbox_policy_exports.js";
var AUTOMATIONS_PLATFORM_COMMUNICATION_TOOL_NAMES, automationsPlatformCommunicationToolNameSet, SUBAGENT_EXCLUDED_AUTOMATION_TOOL_NAMES, subagentExcludedPlatformCommunicationToolNameSet, subagentExcludedCommunicationMcpToolNamesByServer;
export { AUTOMATIONS_PLATFORM_COMMUNICATION_TOOL_NAMES, SUBAGENT_EXCLUDED_AUTOMATION_TOOL_NAMES, automationsPlatformCommunicationToolNameSet, subagentExcludedCommunicationMcpToolNamesByServer, subagentExcludedPlatformCommunicationToolNameSet };
var __wakaru_init_platform_communication_tools_initialized = false;
export function init_platform_communication_tools() {
if (__wakaru_init_platform_communication_tools_initialized) return;
__wakaru_init_platform_communication_tools_initialized = true;
"use strict";
init_constants6();
init_automations2();
AUTOMATIONS_PLATFORM_COMMUNICATION_TOOL_NAMES = [
    "SendSlackMessage",
    "SendMicrosoftTeamsMessage",
    "PostReviewCommentOnPr"
];
automationsPlatformCommunicationToolNameSet = new Set(AUTOMATIONS_PLATFORM_COMMUNICATION_TOOL_NAMES);
SUBAGENT_EXCLUDED_AUTOMATION_TOOL_NAMES = [
    ...AUTOMATIONS_PLATFORM_COMMUNICATION_TOOL_NAMES,
    "PostToPrComment"
];
subagentExcludedPlatformCommunicationToolNameSet = new Set([
    ...SUBAGENT_EXCLUDED_AUTOMATION_TOOL_NAMES,
    SEND_SLACK_MESSAGE_V2_TOOL_NAME,
    OFFER_REPOSITORY_SWITCH_TOOL_NAME,
    START_SLACK_STREAMING_TOOL_NAME
]);
subagentExcludedCommunicationMcpToolNamesByServer = new Map([
    [
        SLACK_AGENT_TOOLS_MCP_SERVER_ID.toLowerCase(),
        new Set([
            SLACK_OFFER_REPOSITORY_SWITCH_MCP_TOOL_NAME,
            SLACK_SEND_MESSAGE_MCP_TOOL_NAME,
            SLACK_SET_STATUS_MCP_TOOL_NAME,
            SLACK_START_STREAMING_MCP_TOOL_NAME
        ])
    ],
    [
        AUTOMATION_TOOLS_MCP_SERVER_ID.toLowerCase(),
        new Set(SUBAGENT_EXCLUDED_AUTOMATION_TOOL_NAMES.map(automationToolNameToSnakeCase))
    ]
]);

}
