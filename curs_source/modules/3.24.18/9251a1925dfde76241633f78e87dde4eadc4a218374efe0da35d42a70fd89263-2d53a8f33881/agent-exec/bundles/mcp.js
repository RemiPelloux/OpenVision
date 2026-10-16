import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer } from "../../dist_exports.js";
var CURSOR_PLAYWRIGHT_PROVIDER_ID, CURSOR_IDE_BROWSER_PROVIDER_ID, CURSOR_SELF_CONTROL_PROVIDER_ID, CUSTOM_USER_TOOLS_PROVIDER_ID, NON_AUTHENTICATABLE_MCP_PROVIDER_IDS, CURSOR_DYNAMIC_TOOLS_NAMESPACE, BROWSER_MCP_PROVIDER_IDS, McpLeaseChangeReason, mcpExecutorResource, listMcpResourcesExecutorResource, readMcpResourceExecutorResource, mcpStateExecutorResource;
export { BROWSER_MCP_PROVIDER_IDS, CURSOR_DYNAMIC_TOOLS_NAMESPACE, CURSOR_IDE_BROWSER_PROVIDER_ID, CURSOR_PLAYWRIGHT_PROVIDER_ID, CURSOR_SELF_CONTROL_PROVIDER_ID, CUSTOM_USER_TOOLS_PROVIDER_ID, McpLeaseChangeReason, NON_AUTHENTICATABLE_MCP_PROVIDER_IDS, listMcpResourcesExecutorResource, mcpExecutorResource, mcpStateExecutorResource, readMcpResourceExecutorResource };
var __wakaru_init_mcp2_initialized = false;
export function init_mcp2() {
if (__wakaru_init_mcp2_initialized) return;
__wakaru_init_mcp2_initialized = true;
"use strict";
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
CURSOR_PLAYWRIGHT_PROVIDER_ID = "cursor-browser-extension";
CURSOR_IDE_BROWSER_PROVIDER_ID = "cursor-ide-browser";
CURSOR_SELF_CONTROL_PROVIDER_ID = "cursor-dev-control";
CUSTOM_USER_TOOLS_PROVIDER_ID = "custom-user-tools";
NON_AUTHENTICATABLE_MCP_PROVIDER_IDS = new Set([
    "cursor-app-control",
    "cursor-backend-control",
    CURSOR_PLAYWRIGHT_PROVIDER_ID,
    CURSOR_IDE_BROWSER_PROVIDER_ID,
    CURSOR_SELF_CONTROL_PROVIDER_ID,
    CUSTOM_USER_TOOLS_PROVIDER_ID,
    "fsd",
    "cursor-subscriptions",
    "cursor-cloud",
    "suggestions",
    "Cursor Slack Tools",
    "Cursor Automation Tools"
]);
CURSOR_DYNAMIC_TOOLS_NAMESPACE = "cursor";
BROWSER_MCP_PROVIDER_IDS = new Set([
    CURSOR_SELF_CONTROL_PROVIDER_ID,
    CURSOR_IDE_BROWSER_PROVIDER_ID
]);
(function(McpLeaseChangeReason2) {
    McpLeaseChangeReason2["Snapshots"] = "cursor_mcp_lease_snapshot_store";
    McpLeaseChangeReason2["Status"] = "cursor_mcp_lease_server_status";
    McpLeaseChangeReason2["Settings"] = "cursor_mcp_lease_settings";
    McpLeaseChangeReason2["Providers"] = "cursor_mcp_lease_providers";
    McpLeaseChangeReason2["Unknown"] = "cursor_mcp_lease_unknown";
})(McpLeaseChangeReason || (McpLeaseChangeReason = {}));
mcpExecutorResource = createResource(RESOURCE_NAMES.mcpExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("mcpArgs"), createClientDeserializer("mcpResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("mcpArgs"), createClientSerializer("mcpResult")));
});
listMcpResourcesExecutorResource = createResource(RESOURCE_NAMES.listMcpResourcesExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("listMcpResourcesExecArgs"), createClientDeserializer("listMcpResourcesExecResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("listMcpResourcesExecArgs"), createClientSerializer("listMcpResourcesExecResult")));
});
readMcpResourceExecutorResource = createResource(RESOURCE_NAMES.readMcpResourceExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("readMcpResourceExecArgs"), createClientDeserializer("readMcpResourceExecResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("readMcpResourceExecArgs"), createClientSerializer("readMcpResourceExecResult")));
});
mcpStateExecutorResource = createResource(RESOURCE_NAMES.mcpStateExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("mcpStateExecArgs"), createClientDeserializer("mcpStateExecResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("mcpStateExecArgs"), createClientSerializer("mcpStateExecResult")));
});

}
