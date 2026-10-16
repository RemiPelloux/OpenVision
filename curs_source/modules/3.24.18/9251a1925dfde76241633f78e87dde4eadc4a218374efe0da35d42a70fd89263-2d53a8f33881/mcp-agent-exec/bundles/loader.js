import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { McpManager, createContextStructuredLifecycleLogger, getMcpConfig, init_mcp4 } from "../../coerce_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { asyncMapValues } from "../../dist_exports.js";
import { computeMcpSandboxPolicyFingerprint } from "../../esm_exports8.js";
import { init_approval_store } from "./approval-store.js";
import { init_config } from "./config.js";
import { init_network_controls } from "./network-controls.js";
import { IdentifierScopedTokenStorage, LoggedScopedMcpTokenStorage, NoOpScopedTokenStorage, init_oauth_logging2 } from "./oauth-logging.js";
import { init_stdio_stderr } from "./stdio-stderr.js";
import { init_dist15 } from "../../mcp-core/dist/index.js";
import { getMcpNetworkControlsServerIdentity, isExpectedSkippedMcpLoadError, isMcpNetworkControlsConfigService, loadServer, logMcpDefinitionLoadFailure } from "../../mcp_sandbox_policy_exports.js";
import { init_string_argv } from "../../node_modules/.pnpm/string-argv@0.3.2/node_modules/string-argv/index.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_crypto17, import_node_os13, import_node_path46, __addDisposableResource24, __disposeResources24, logger20, FileConfigMcpDefinitionSource, DefinitionMcpLoader, McpServerBlockedError, ServerBlockingMiddleware;
export { DefinitionMcpLoader, FileConfigMcpDefinitionSource, McpServerBlockedError, ServerBlockingMiddleware, __addDisposableResource24, __disposeResources24, import_node_crypto17, import_node_os13, import_node_path46, logger20 };
var __wakaru_init_loader2_initialized = false;
export function init_loader2() {
if (__wakaru_init_loader2_initialized) return;
__wakaru_init_loader2_initialized = true;
"use strict";
import_node_crypto17 = require("node:crypto");
import_node_os13 = __toESM(require("node:os"), 1);
import_node_path46 = __toESM(require("node:path"), 1);
init_dist();
init_dist15();
init_dist3();
init_string_argv();
init_approval_store();
init_config();
init_mcp4();
init_network_controls();
init_oauth_logging2();
init_stdio_stderr();
init_dist15();
__addDisposableResource24 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources24 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
logger20 = createLogger("DefinitionMcpLoader");
FileConfigMcpDefinitionSource = class {
    constructor(configPath){
        this.configPath = configPath;
        this.configPromise = getMcpConfig(configPath);
    }
    clearCache() {
        this.configPromise = getMcpConfig(this.configPath);
    }
    async getDefinitions(_ctx, _cache = true) {
        const config2 = await this.configPromise;
        return Object.entries(config2.mcpServers).map(([identifier2, serverConfig])=>({
                identifier: identifier2,
                serverConfig,
                configPath: this.configPath
            }));
    }
};
DefinitionMcpLoader = class {
    constructor(source, tokenStorage, middlewares = [], options2 = {}){
        this.source = source;
        this.tokenStorage = tokenStorage;
        this.middlewares = middlewares;
        this.options = options2;
        this.clientCache = new Map();
    }
    async load(ctx, cache2 = true) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource24(env_3, createSpan(ctx.withName("DefinitionMcpLoader.load")), false);
            if (!cache2) {
                await this.closeAllCachedClients();
                this.source.clearCache?.();
            }
            const definitions = await this.source.getDefinitions(ctx, cache2);
            await this.evictClientsOnSandboxPolicyChange(ctx, definitions);
            const clients = {};
            await asyncMapValues([
                ...definitions
            ], async (definition)=>{
                try {
                    const cachedClient = cache2 ? this.clientCache.get(definition.identifier) : void 0;
                    const client = cachedClient ?? await this.loadDefinitionClient(ctx, definition);
                    if (!cachedClient) {
                        this.clientCache.set(definition.identifier, client);
                    }
                    clients[definition.identifier] = client;
                } catch (error3) {
                    if (this.handleDefinitionLoadError(ctx, definition, error3)) {
                        return;
                    }
                    logMcpDefinitionLoadFailure(ctx, definition, error3);
                }
            }, {
                max: this.options.maxConcurrency ?? Math.max(definitions.length, 1)
            });
            return new McpManager(clients, this.options.elicitationFactory);
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources24(env_3);
        }
    }
    clearClient(identifier2) {
        this.clientCache.delete(identifier2);
    }
    clearAllMcpCaches() {
        this.clientCache.clear();
    }
    async evictClientsOnSandboxPolicyChange(ctx, definitions) {
        const service = this.middlewares.find(isMcpNetworkControlsConfigService);
        if (!service) {
            return;
        }
        let fingerprint;
        try {
            fingerprint = JSON.stringify(await Promise.all([
                ...definitions
            ].sort((a, b2)=>a.identifier.localeCompare(b2.identifier)).map(async (definition)=>{
                const config2 = await service.getMcpNetworkControlsConfig?.(getMcpNetworkControlsServerIdentity(definition.serverConfig)) ?? {};
                return [
                    definition.identifier,
                    computeMcpSandboxPolicyFingerprint(config2)
                ];
            })));
        } catch  {
            return;
        }
        const previous = this.sandboxPolicyFingerprint;
        this.sandboxPolicyFingerprint = fingerprint;
        if (previous !== void 0 && previous !== fingerprint) {
            logger20.info(ctx, "MCP network-controls policy changed; reloading MCP clients to apply the new egress policy");
            await this.closeAllCachedClients();
        }
    }
    async closeAllCachedClients() {
        const cachedClients = [
            ...this.clientCache.values()
        ];
        this.clientCache.clear();
        await asyncMapValues(cachedClients, async (client)=>{
            try {
                await client.close?.();
            } catch  {}
        }, {
            max: Math.max(cachedClients.length, 1)
        });
    }
    async loadClient(ctx, identifier2, ignoreTokens) {
        const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource24(env_4, createSpan(ctx.withName("DefinitionMcpLoader.loadClient")), false);
            const definitions = await this.source.getDefinitions(ctx);
            await this.evictClientsOnSandboxPolicyChange(ctx, definitions);
            if (!ignoreTokens) {
                const cached2 = this.clientCache.get(identifier2);
                if (cached2) {
                    return cached2;
                }
            }
            const definition = definitions.find((candidate)=>candidate.identifier === identifier2);
            if (!definition) {
                throw new Error(`MCP server "${identifier2}" not found in config`);
            }
            let client;
            try {
                client = await this.loadDefinitionClient(ctx, definition, ignoreTokens);
            } catch (error3) {
                this.handleDefinitionLoadError(ctx, definition, error3);
                throw error3;
            }
            if (!ignoreTokens) {
                this.clientCache.set(identifier2, client);
            }
            return client;
        } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        } finally{
            __disposeResources24(env_4);
        }
    }
    async loadDefinitionClient(ctx, definition, ignoreTokens) {
        const identifier2 = definition.authStorageKey ?? definition.identifier;
        const inner = new IdentifierScopedTokenStorage(this.tokenStorage, identifier2);
        const lifecycleLogger = createContextStructuredLifecycleLogger(ctx, logger20);
        const loggedScopedTokenStorage = new LoggedScopedMcpTokenStorage({
            inner,
            logger: lifecycleLogger,
            identifier: identifier2,
            serverUrl: "url" in definition.serverConfig ? definition.serverConfig.url : void 0
        });
        const scopedTokenStorage = ignoreTokens ? new NoOpScopedTokenStorage(loggedScopedTokenStorage) : loggedScopedTokenStorage;
        return loadServer(ctx, definition.identifier, definition.serverConfig, scopedTokenStorage, {
            middlewares: this.middlewares,
            configPath: definition.configPath ?? ""
        }, this.options.authRedirectUrlGenerator);
    }
    handleDefinitionLoadError(ctx, definition, error3) {
        let handled = false;
        try {
            handled = this.options.onDefinitionLoadError?.(ctx, definition, error3) === "handled";
        } catch (hookError) {
            logger20.warn(ctx, "MCP definition load error hook failed", {
                identifier: definition.identifier,
                source: definition.source,
                configPath: definition.configPath,
                metadata: definition.metadata,
                errorMessage: hookError instanceof Error ? hookError.message : String(hookError)
            });
        }
        return handled || isExpectedSkippedMcpLoadError(error3);
    }
};
McpServerBlockedError = class extends Error {
    constructor(serverName, reason, message){
        super(message ?? (reason === "teamNetworkAllowlist" ? `MCP server "${serverName}" is not on the team network allowlist` : `MCP server "${serverName}" is blocked by team policy`));
        this.serverName = serverName;
        this.reason = reason;
        this.name = "McpServerBlockedError";
    }
};
ServerBlockingMiddleware = class {
    constructor(blockingService){
        this.blockingService = blockingService;
    }
    async getMcpNetworkControlsConfig(server) {
        return await this.blockingService.getMcpNetworkControlsConfig?.(server) ?? {};
    }
    async load(ctx, serverName, server, _configPath, next) {
        const commandWithArgs = "command" in server ? [
            server.command,
            ...server.args ?? []
        ].join(" ") : void 0;
        const serverDefinition = {
            command: commandWithArgs,
            url: "url" in server ? server.url : void 0
        };
        const blockInfo = await this.blockingService.getMcpServerBlockInfo?.(serverDefinition) ?? {
            blocked: await this.blockingService.isServerBlocked(serverDefinition)
        };
        if (blockInfo.blocked) {
            throw new McpServerBlockedError(serverName, blockInfo.reason ?? "teamPolicy", blockInfo.message);
        }
        return next(ctx, server);
    }
};

}
