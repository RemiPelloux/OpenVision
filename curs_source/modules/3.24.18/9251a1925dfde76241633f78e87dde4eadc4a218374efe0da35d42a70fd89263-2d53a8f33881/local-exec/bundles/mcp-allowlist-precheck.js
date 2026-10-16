import { McpAllowlistPrecheckResult, init_mcp_allowlist_precheck_exec_pb } from "../../proto/dist/generated/agent/v1/mcp_allowlist_precheck_exec_pb.js";
var LocalMcpAllowlistPrecheckExecutor;
export { LocalMcpAllowlistPrecheckExecutor };
var __wakaru_init_mcp_allowlist_precheck2_initialized = false;
export function init_mcp_allowlist_precheck2() {
if (__wakaru_init_mcp_allowlist_precheck2_initialized) return;
__wakaru_init_mcp_allowlist_precheck2_initialized = true;
"use strict";
init_mcp_allowlist_precheck_exec_pb();
LocalMcpAllowlistPrecheckExecutor = class {
    constructor(permissionsService){
        this.permissionsService = permissionsService;
    }
    async execute(ctx, args) {
        const allowlisted = await this.permissionsService.isMcpFullyAllowlisted(ctx, {
            providerIdentifier: args.providerIdentifier,
            toolName: args.toolName,
            annotationsJson: args.annotationsJson
        });
        return new McpAllowlistPrecheckResult({
            allowlisted
        });
    }
};

}
