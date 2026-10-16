import { h } from "./tslib.es6.js";
var yl;
export { yl };
var __wakaru_xg_initialized = false;
export function xg() {
if (__wakaru_xg_initialized) return;
__wakaru_xg_initialized = true;
"use strict";
h(), yl = class extends Error {
    constructor(e, t){
        super(`MCP server "${e}" requires sandboxing because MCP Network Controls are enabled, but the sandbox is not supported on this platform or system. The server was not started.`), this.serverName = e, this.name = "McpSandboxUnavailableError", t !== void 0 && (this.cause = t);
    }
};

}
