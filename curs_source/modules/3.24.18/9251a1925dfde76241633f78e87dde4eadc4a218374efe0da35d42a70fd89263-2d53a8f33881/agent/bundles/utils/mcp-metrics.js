import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../dist_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
var logger59, getMcpToolsDuration, getMcpToolsSuccess, getMcpToolsError, getMcpToolsResultCount, getMcpToolsResponseBytes, getMcpToolsPayloadBytes, getMcpToolsFileOutput, callMcpToolDuration, callMcpToolSuccess, callMcpToolError, callMcpToolWithoutReadDef, callMcpToolResponseBytes, callMcpToolOutputSpill, fetchMcpResourceDuration, fetchMcpResourceSuccess, fetchMcpResourceError, fetchMcpResourceResponseBytes, mcpEligibleModelInvocation, mcpDiscoveryEligibleCatalogServerCount, mcpPromptToolTokens, mcpPromptToolCount, mcpSearchThenCallResult, GET_MCP_TOOLS_FAILURE_REASONS, CALL_MCP_TOOL_FAILURE_REASONS, FETCH_MCP_RESOURCE_FAILURE_REASONS, MCP_DIR_SEGMENT, mcpDirectoryAccess, mcpDirectoryResponseBytes;
export { CALL_MCP_TOOL_FAILURE_REASONS, FETCH_MCP_RESOURCE_FAILURE_REASONS, GET_MCP_TOOLS_FAILURE_REASONS, MCP_DIR_SEGMENT, callMcpToolDuration, callMcpToolError, callMcpToolOutputSpill, callMcpToolResponseBytes, callMcpToolSuccess, callMcpToolWithoutReadDef, fetchMcpResourceDuration, fetchMcpResourceError, fetchMcpResourceResponseBytes, fetchMcpResourceSuccess, getMcpToolsDuration, getMcpToolsError, getMcpToolsFileOutput, getMcpToolsPayloadBytes, getMcpToolsResponseBytes, getMcpToolsResultCount, getMcpToolsSuccess, logger59, mcpDirectoryAccess, mcpDirectoryResponseBytes, mcpDiscoveryEligibleCatalogServerCount, mcpEligibleModelInvocation, mcpPromptToolCount, mcpPromptToolTokens, mcpSearchThenCallResult };
var __wakaru_init_mcp_metrics_initialized = false;
export function init_mcp_metrics() {
if (__wakaru_init_mcp_metrics_initialized) return;
__wakaru_init_mcp_metrics_initialized = true;
"use strict";
init_dist();
init_dist4();
logger59 = createLogger("mcp.meta.failure");
getMcpToolsDuration = createHistogram("mcp.meta.get_tools_duration_ms", {
    description: "Duration of GetMcpTools calls in milliseconds",
    labelNames: [
        "mode"
    ]
});
getMcpToolsSuccess = createCounter("mcp.meta.get_tools_success", {
    description: "Successful GetMcpTools calls",
    labelNames: [
        "mode"
    ]
});
getMcpToolsError = createCounter("mcp.meta.get_tools_error", {
    description: "Failed GetMcpTools calls",
    labelNames: [
        "mode",
        "failure_reason"
    ]
});
getMcpToolsResultCount = createHistogram("mcp.meta.get_tools_result_count", {
    description: "Number of results returned by GetMcpTools",
    labelNames: [
        "mode"
    ]
});
getMcpToolsResponseBytes = createHistogram("mcp.meta.get_tools_response_bytes", {
    description: "Size of GetMcpTools response in bytes (context window impact)",
    labelNames: [
        "mode"
    ]
});
getMcpToolsPayloadBytes = createHistogram("mcp.meta.get_tools_payload_bytes", {
    description: "Size of the full GetMcpTools JSON payload before any file-output truncation",
    labelNames: [
        "mode"
    ]
});
getMcpToolsFileOutput = createCounter("mcp.meta.get_tools_file_output", {
    description: "GetMcpTools calls that wrote output to file (large results)",
    labelNames: [
        "mode"
    ]
});
callMcpToolDuration = createHistogram("mcp.meta.call_tool_duration_ms", {
    description: "Duration of CallMcpTool calls in milliseconds",
    labelNames: [
        "mcp_mode"
    ]
});
callMcpToolSuccess = createCounter("mcp.meta.call_tool_success", {
    description: "Successful CallMcpTool calls",
    labelNames: [
        "mcp_mode"
    ]
});
callMcpToolError = createCounter("mcp.meta.call_tool_error", {
    description: "Failed CallMcpTool calls",
    labelNames: [
        "mcp_mode",
        "failure_reason",
        "retryable"
    ]
});
callMcpToolWithoutReadDef = createCounter("mcp.meta.call_tool_without_read_def", {
    description: "CallMcpTool called without reading tool definition first (model error)",
    labelNames: [
        "mcp_mode"
    ]
});
callMcpToolResponseBytes = createHistogram("mcp.meta.call_tool_response_bytes", {
    description: "Size of CallMcpTool response in bytes (context window impact)",
    labelNames: [
        "mcp_mode"
    ]
});
callMcpToolOutputSpill = createCounter("mcp.meta.output_spill", {
    description: "Outcome of spilling oversized MCP tool output to an agent-tools file",
    labelNames: [
        "outcome"
    ]
});
fetchMcpResourceDuration = createHistogram("mcp.meta.fetch_resource_duration_ms", {
    description: "Duration of FetchMcpResource calls in milliseconds",
    labelNames: [
        "mcp_mode"
    ]
});
fetchMcpResourceSuccess = createCounter("mcp.meta.fetch_resource_success", {
    description: "Successful FetchMcpResource calls",
    labelNames: [
        "mcp_mode"
    ]
});
fetchMcpResourceError = createCounter("mcp.meta.fetch_resource_error", {
    description: "Failed FetchMcpResource calls",
    labelNames: [
        "mcp_mode",
        "failure_reason"
    ]
});
fetchMcpResourceResponseBytes = createHistogram("mcp.meta.fetch_resource_response_bytes", {
    description: "Size of FetchMcpResource response in bytes (context window impact)",
    labelNames: [
        "mcp_mode"
    ]
});
mcpEligibleModelInvocation = createCounter("mcp.discovery.eligible_model_invocation", {
    description: "Model invocations where MCP discovery was available (tagged by discovery mode; use companion histogram for server counts)",
    labelNames: [
        "mcp_discovery_mode"
    ]
});
mcpDiscoveryEligibleCatalogServerCount = createHistogram("mcp.discovery.eligible_catalog_server_count", {
    description: "MCP server count in discovery context for eligible model invocations (histogram value is the raw count)",
    labelNames: [
        "mcp_discovery_mode"
    ]
});
mcpPromptToolTokens = createHistogram("mcp.discovery.prompt_tool_tokens", {
    description: "Prompt token count attributable to MCP tool definitions for a model invocation",
    labelNames: [
        "mcp_discovery_mode"
    ]
});
mcpPromptToolCount = createHistogram("mcp.discovery.prompt_tool_count", {
    description: "Prompt-visible MCP tool count for a model invocation (histogram value is the raw count)",
    labelNames: [
        "mcp_discovery_mode"
    ]
});
mcpSearchThenCallResult = createCounter("mcp.meta.search_then_call_result", {
    description: "Outcome of CallMcpTool executions that were preceded by GetMcpTools in search mode within the same turn",
    labelNames: [
        "outcome"
    ]
});
GET_MCP_TOOLS_FAILURE_REASONS = {
    INVALID_REGEX: "invalid_regex",
    SERVER_NOT_FOUND: "server_not_found",
    TOOL_NOT_FOUND: "tool_not_found",
    INVALID_ARGS: "invalid_args",
    OTHER: "other"
};
CALL_MCP_TOOL_FAILURE_REASONS = {
    SERVER_NOT_FOUND: "server_not_found",
    TOOL_NOT_FOUND: "tool_not_found",
    EXEC_NOT_FOUND: "exec_not_found",
    PERMISSION_DENIED: "permission_denied",
    TRANSPORT_ERROR: "transport_error",
    REJECTED: "rejected",
    WITHOUT_READ_DEF: "without_read_def",
    MISSING_REQUIRED_ARGUMENTS: "missing_required_arguments",
    OTHER: "other"
};
FETCH_MCP_RESOURCE_FAILURE_REASONS = {
    SERVER_NOT_FOUND: "server_not_found",
    RESOURCE_NOT_FOUND: "resource_not_found",
    INVALID_ARGS: "invalid_args",
    INVALID_URL: "invalid_url",
    TIMEOUT: "timeout",
    UNEXPECTED_ENVIRONMENT: "unexpected_environment",
    UNEXPECTED_RESULT_CASE: "unexpected_result_case",
    REJECTED: "rejected",
    OTHER: "other"
};
MCP_DIR_SEGMENT = "/mcps/";
mcpDirectoryAccess = createCounter("agent.tools.mcp_directory_access", {
    description: "Number of times a tool accessed the MCP file system directory (tool descriptors, resources, etc.)",
    labelNames: [
        "tool"
    ]
});
mcpDirectoryResponseBytes = createHistogram("agent.tools.mcp_directory_response_bytes", {
    description: "Size of tool response in bytes when accessing the MCP file system directory (context window impact)",
    labelNames: [
        "tool"
    ]
});

}
