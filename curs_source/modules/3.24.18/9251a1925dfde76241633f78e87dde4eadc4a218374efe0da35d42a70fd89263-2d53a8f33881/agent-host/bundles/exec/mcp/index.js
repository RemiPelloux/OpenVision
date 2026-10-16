var NOOP_DISPOSABLE, NoopHostMcpProvider;
export { NOOP_DISPOSABLE, NoopHostMcpProvider };
var __wakaru_init_mcp3_initialized = false;
export function init_mcp3() {
if (__wakaru_init_mcp3_initialized) return;
__wakaru_init_mcp3_initialized = true;
"use strict";
NOOP_DISPOSABLE = {
    dispose: ()=>{}
};
NoopHostMcpProvider = class {
    async getClients(_ctx) {
        return {};
    }
    async getClient(_ctx, _name) {
        return void 0;
    }
    async getInstructions(_ctx) {
        return [];
    }
    async getTools(_ctx) {
        return [];
    }
    async getToolsForServers(_ctx, _serverIdentifiers) {
        return [];
    }
    async getToolSet(_ctx) {
        return {
            execute: async (name17)=>{
                throw new Error(`MCP tool ${name17} is unavailable: this host has no MCP provider configured`);
            }
        };
    }
    onDidChange(_listener) {
        return NOOP_DISPOSABLE;
    }
    dispose() {}
};

}
