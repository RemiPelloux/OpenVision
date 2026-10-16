import { McpToolNotFoundError } from "../../coerce_exports.js";
import { serverPlacedRowInstructions } from "../../daemon_metrics_exports.js";
import { init_dist19 } from "../../mcp-agent-exec/dist/index.js";
import { init_placement_snapshot } from "./placement-snapshot.js";
var ServerPlacedMcpClient, PlacementUnknownMcpClient;
export { PlacementUnknownMcpClient, ServerPlacedMcpClient };
var __wakaru_init_server_placed_client_initialized = false;
export function init_server_placed_client() {
if (__wakaru_init_server_placed_client_initialized) return;
__wakaru_init_server_placed_client_initialized = true;
"use strict";
init_dist19();
init_placement_snapshot();
ServerPlacedMcpClient = class {
    constructor(row, callTool_){
        this.row = row;
        this.callTool_ = callTool_;
        this.config = void 0;
        this.serverName = row.serverName;
        this.plugin = row.plugin.plugin;
        this.marketplace = row.plugin.marketplace;
        this.pluginId = row.plugin.pluginId;
        this.marketplaceId = row.plugin.marketplaceId;
    }
    async getTools(_ctx) {
        return this.row.tools.map((tool)=>({
                name: tool.toolName,
                description: tool.description,
                inputSchema: tool.inputSchema,
                outputSchema: tool.outputSchema,
                title: tool.title,
                annotations: tool.annotations,
                _meta: tool._meta
            }));
    }
    callTool(ctx, name17, args, toolCallId, elicitationProvider) {
        const tool = this.row.tools.find((candidate)=>candidate.toolName === name17 || candidate.name === name17);
        if (tool === void 0) {
            return Promise.reject(new McpToolNotFoundError(name17, this.row.tools.map((candidate)=>candidate.toolName)));
        }
        return this.callTool_(ctx, this.row, tool.name, args, toolCallId, elicitationProvider);
    }
    async getInstructions(_ctx) {
        return serverPlacedRowInstructions(this.row);
    }
    async getState(_ctx) {
        switch(this.row.status){
            case "connected":
                return {
                    kind: "ready"
                };
            case "needsAuth":
                return {
                    kind: "requires_authentication",
                    url: "",
                    callback: async ()=>{}
                };
            case "error":
                return {
                    kind: "error"
                };
            case "loading":
                return {
                    kind: "loading"
                };
        }
    }
    async listResources(_ctx) {
        return {
            resources: []
        };
    }
    async readResource(_ctx, args) {
        throw new Error(`Resource ${args.uri} is unavailable: server-placed MCP server "${this.row.serverIdentifier}" exposes tools only`);
    }
    async listPrompts(_ctx) {
        return [];
    }
    async getPrompt(_ctx, name17, _args) {
        throw new Error(`Prompt ${name17} is unavailable: server-placed MCP server "${this.row.serverIdentifier}" exposes tools only`);
    }
};
PlacementUnknownMcpClient = class {
    constructor(serverIdentifier, message){
        this.message = message;
        this.config = void 0;
        this.serverName = serverIdentifier;
    }
    async getTools(_ctx) {
        return [];
    }
    async callTool() {
        throw new Error(this.message);
    }
    async getInstructions(_ctx) {
        return void 0;
    }
    async getState(_ctx) {
        return {
            kind: "error",
            message: this.message
        };
    }
    async listResources(_ctx) {
        return {
            resources: []
        };
    }
    async readResource() {
        throw new Error(this.message);
    }
    async listPrompts(_ctx) {
        return [];
    }
    async getPrompt() {
        throw new Error(this.message);
    }
};

}
