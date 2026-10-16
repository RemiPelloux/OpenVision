"use strict";
require.d(exports, {
    c: ()=>n
});
class n extends Error {
    constructor(e, t){
        super(`MCP server "${e}" requires sandboxing because MCP Network Controls are enabled, but the sandbox is not supported on this platform or system. The server was not started.`), this.serverName = e, this.name = "McpSandboxUnavailableError", void 0 !== t && (this.cause = t);
    }
}
