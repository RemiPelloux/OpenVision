"use strict";
require.d(exports, {
    _: ()=>o
});
const n = {
    dispose: ()=>{}
};
class s {
    async getClients(e) {
        return {};
    }
    async getClient(e, t) {}
    async getInstructions(e) {
        return [];
    }
    async getTools(e) {
        return [];
    }
    async getToolsForServers(e, t) {
        return [];
    }
    async getToolSet(e) {
        return {
            execute: async (e)=>{
                throw new Error(`MCP tool ${e} is unavailable: this host has no MCP provider configured`);
            }
        };
    }
    onDidChange(e) {
        return n;
    }
    dispose() {}
}
function o(e = {}) {
    return e.mcpProvider ?? new s;
}
