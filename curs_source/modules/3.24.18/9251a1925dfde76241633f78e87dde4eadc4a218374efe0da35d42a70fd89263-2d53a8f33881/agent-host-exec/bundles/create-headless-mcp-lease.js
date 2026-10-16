import { init_permissions_policy } from "./permissions-policy.js";
import { init_setting_sources } from "./setting-sources.js";
import { ManagerMcpLease, NoopMcpLease } from "../../coerce_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { init_dist21 } from "../../cursor-config/dist/index.js";
import { headlessMcpDefinitionRef, init_headless_defaults } from "../../daemon_metrics_exports.js";
import { init_dist19 } from "../../mcp-agent-exec/dist/index.js";
var import_promises58, import_node_os28, import_node_path107, DisposableManagerMcpLease, DisposableNoopMcpLease, FileBasedMcpDisabledStore, InlineMcpDefinitionSource, NamespacedMcpDefinitionSource, FilteringMcpDefinitionSource;
export { DisposableManagerMcpLease, DisposableNoopMcpLease, FileBasedMcpDisabledStore, FilteringMcpDefinitionSource, InlineMcpDefinitionSource, NamespacedMcpDefinitionSource, import_node_os28, import_node_path107, import_promises58 };
var __wakaru_init_create_headless_mcp_lease_initialized = false;
export function init_create_headless_mcp_lease() {
if (__wakaru_init_create_headless_mcp_lease_initialized) return;
__wakaru_init_create_headless_mcp_lease_initialized = true;
"use strict";
import_promises58 = require("node:fs/promises");
import_node_os28 = require("node:os");
import_node_path107 = require("node:path");
init_dist();
init_dist21();
init_dist19();
init_headless_defaults();
init_permissions_policy();
init_setting_sources();
DisposableManagerMcpLease = class extends ManagerMcpLease {
    constructor(runtimeManager){
        super(runtimeManager);
        this.runtimeManager = runtimeManager;
        this.disposed = false;
    }
    async dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        await this.runtimeManager.closeAllClients();
    }
};
DisposableNoopMcpLease = class extends NoopMcpLease {
    onDidChange(_listener) {
        return {
            dispose () {}
        };
    }
    async dispose() {}
};
FileBasedMcpDisabledStore = class {
    constructor(storagePath){
        this.storagePath = storagePath;
    }
    async isServerDisabled(serverName) {
        try {
            const content = await (0, import_promises58.readFile)(this.storagePath, "utf8");
            const parsed = JSON.parse(content);
            if (!Array.isArray(parsed) || !parsed.every((value)=>typeof value === "string")) {
                throw new Error(`Invalid MCP disabled-state file: ${this.storagePath}`);
            }
            return parsed.includes(serverName);
        } catch (error3) {
            if (error3.code === "ENOENT") {
                return false;
            }
            throw error3;
        }
    }
};
InlineMcpDefinitionSource = class {
    constructor(servers){
        this.servers = servers;
    }
    async getDefinitions() {
        return Object.entries(this.servers).map(([identifier2, serverConfig])=>({
                identifier: identifier2,
                authStorageKey: `inline:${identifier2}`,
                serverConfig,
                source: "inline"
            }));
    }
};
NamespacedMcpDefinitionSource = class {
    constructor(source, prefix){
        this.source = source;
        this.prefix = prefix;
    }
    async getDefinitions(ctx, cache2) {
        return (await this.source.getDefinitions(ctx, cache2)).map((definition)=>({
                ...definition,
                identifier: `${this.prefix}${definition.identifier}`,
                authStorageKey: `${this.prefix}${definition.authStorageKey ?? definition.identifier}`
            }));
    }
    clearCache() {
        this.source.clearCache?.();
    }
};
FilteringMcpDefinitionSource = class {
    constructor(source, includeDefinition){
        this.source = source;
        this.includeDefinition = includeDefinition;
    }
    async getDefinitions(ctx, cache2) {
        return (await this.source.getDefinitions(ctx, cache2)).filter((definition)=>this.includeDefinition(headlessMcpDefinitionRef(definition)));
    }
    clearCache() {
        this.source.clearCache?.();
    }
};

}
