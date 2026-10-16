var McpSandboxUnavailableError;
export { McpSandboxUnavailableError };
var __wakaru_init_mcp_sandbox_unavailable_error_initialized = false;
export function init_mcp_sandbox_unavailable_error() {
if (__wakaru_init_mcp_sandbox_unavailable_error_initialized) return;
__wakaru_init_mcp_sandbox_unavailable_error_initialized = true;
"use strict";
McpSandboxUnavailableError = class extends Error {
    constructor(serverName, cause){
        super(`MCP server "${serverName}" requires sandboxing because MCP Network Controls are enabled, but the sandbox is not supported on this platform or system. The server was not started.`);
        this.serverName = serverName;
        this.name = "McpSandboxUnavailableError";
        if (cause !== void 0) {
            this.cause = cause;
        }
    }
};

}
