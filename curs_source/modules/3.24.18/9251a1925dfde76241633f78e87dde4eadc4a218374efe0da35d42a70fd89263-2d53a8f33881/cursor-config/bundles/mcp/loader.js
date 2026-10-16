import { McpManager } from "../../../coerce_exports.js";
import { init_dist19 } from "../../../mcp-agent-exec/dist/index.js";
var MergedMcpLoader;
export { MergedMcpLoader };
var __wakaru_init_loader3_initialized = false;
export function init_loader3() {
if (__wakaru_init_loader3_initialized) return;
__wakaru_init_loader3_initialized = true;
"use strict";
init_dist19();
MergedMcpLoader = class {
    constructor(loaders){
        this.loaders = loaders;
    }
    async load(ctx, cache2 = true) {
        const managerResults = await Promise.allSettled(this.loaders.map(({ loader: loader2 })=>loader2.load(ctx, cache2)));
        const rejectedResult = managerResults.find((result)=>result.status === "rejected");
        if (rejectedResult) {
            await Promise.allSettled(managerResults.flatMap((result)=>result.status === "fulfilled" ? [
                    result.value.closeAllClients()
                ] : []));
            throw rejectedResult.reason;
        }
        const managers = managerResults.filter((result)=>result.status === "fulfilled").map((result)=>result.value);
        const combinedClients = {};
        for(let i = 0; i < managers.length; i++){
            const manager = managers[i];
            const prefix = this.loaders[i].prefix;
            const clients = manager.getClients();
            for (const [name17, client] of Object.entries(clients)){
                const prefixedName = prefix + name17;
                if (!(prefixedName in combinedClients)) {
                    combinedClients[prefixedName] = client;
                }
            }
        }
        return new McpManager(combinedClients);
    }
    async loadClient(ctx, identifier2, ignoreTokens = false) {
        for (const { loader: loader2, prefix } of this.loaders){
            if (!identifier2.startsWith(prefix)) {
                continue;
            }
            identifier2 = identifier2.slice(prefix.length);
            try {
                const client = await loader2.loadClient(ctx, identifier2, ignoreTokens);
                return client;
            } catch (error3) {
                if (error3 instanceof Error && error3.message.includes("not found in config")) {
                    continue;
                }
                throw error3;
            }
        }
        throw new Error(`MCP client "${identifier2}" not found in config`);
    }
    clearClient(identifier2) {
        for (const { loader: loader2, prefix } of this.loaders){
            if (!identifier2.startsWith(prefix)) {
                continue;
            }
            const unprefixedId = identifier2.slice(prefix.length);
            loader2.clearClient?.(unprefixedId);
        }
    }
    clearAllMcpCaches() {
        for (const { loader: loader2 } of this.loaders){
            loader2.clearAllMcpCaches?.();
        }
    }
};

}
