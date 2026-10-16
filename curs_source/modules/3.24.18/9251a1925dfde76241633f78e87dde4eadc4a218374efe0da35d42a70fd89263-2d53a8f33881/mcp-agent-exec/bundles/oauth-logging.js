import { buildOAuthClientInformationSnapshotForLog, buildOAuthTokensSnapshotForLog, emitMcpOAuthLifecycleLog, getMcpOAuthErrorLogMetadata, snapshotServerUrlForLog } from "../../esm_exports8.js";
import { init_dist15 } from "../../mcp-core/dist/index.js";
var LoggedScopedMcpTokenStorage, IdentifierScopedTokenStorage, NoOpScopedTokenStorage;
export { IdentifierScopedTokenStorage, LoggedScopedMcpTokenStorage, NoOpScopedTokenStorage };
var __wakaru_init_oauth_logging2_initialized = false;
export function init_oauth_logging2() {
if (__wakaru_init_oauth_logging2_initialized) return;
__wakaru_init_oauth_logging2_initialized = true;
"use strict";
init_dist15();
LoggedScopedMcpTokenStorage = class {
    constructor(options2){
        this.options = options2;
        emitMcpOAuthLifecycleLog({
            logger: options2.logger,
            event: "mcp_oauth_provider_initialized",
            metadata: this.baseMetadata
        });
    }
    get baseMetadata() {
        return {
            identifier: this.options.identifier,
            ...this.options.serverUrl ? {
                serverUrl: snapshotServerUrlForLog(this.options.serverUrl)
            } : {}
        };
    }
    async loadTokens() {
        const tokens = await this.options.inner.loadTokens();
        emitMcpOAuthLifecycleLog({
            logger: this.options.logger,
            event: "mcp_oauth_tokens_loaded",
            level: "debug",
            metadata: {
                ...this.baseMetadata,
                ...buildOAuthTokensSnapshotForLog(tokens)
            }
        });
        return tokens;
    }
    async saveTokens(tokens) {
        await this.options.inner.saveTokens(tokens);
        emitMcpOAuthLifecycleLog({
            logger: this.options.logger,
            event: "mcp_oauth_tokens_saved",
            metadata: {
                ...this.baseMetadata,
                ...buildOAuthTokensSnapshotForLog(tokens, {
                    expiresInIsFresh: true
                })
            }
        });
    }
    async prepareForRefresh() {
        emitMcpOAuthLifecycleLog({
            logger: this.options.logger,
            event: "mcp_oauth_refresh_prepare",
            metadata: this.baseMetadata
        });
        await this.options.inner.prepareForRefresh?.();
    }
    async releaseRefreshLeaseOnError(underlyingError) {
        emitMcpOAuthLifecycleLog({
            logger: this.options.logger,
            event: "mcp_oauth_refresh_error_release",
            level: "warn",
            error: underlyingError,
            metadata: {
                ...this.baseMetadata,
                ...getMcpOAuthErrorLogMetadata(underlyingError)
            }
        });
        await this.options.inner.releaseRefreshLeaseOnError?.(underlyingError);
    }
    async loadClientInformation() {
        const clientInformation = await this.options.inner.loadClientInformation();
        emitMcpOAuthLifecycleLog({
            logger: this.options.logger,
            event: "mcp_oauth_client_info_loaded",
            level: "debug",
            metadata: {
                ...this.baseMetadata,
                ...buildOAuthClientInformationSnapshotForLog(clientInformation)
            }
        });
        return clientInformation;
    }
    async saveClientInformation(clientInfo) {
        await this.options.inner.saveClientInformation(clientInfo);
        emitMcpOAuthLifecycleLog({
            logger: this.options.logger,
            event: "mcp_oauth_client_info_saved",
            metadata: {
                ...this.baseMetadata,
                ...buildOAuthClientInformationSnapshotForLog(clientInfo)
            }
        });
    }
    async invalidateCredentials(scope) {
        if (this.options.inner.invalidateCredentials === void 0) {
            return;
        }
        emitMcpOAuthLifecycleLog({
            logger: this.options.logger,
            event: "mcp_oauth_credentials_invalidated",
            level: "warn",
            metadata: {
                ...this.baseMetadata,
                scope
            }
        });
        await this.options.inner.invalidateCredentials(scope);
    }
    tokenEndpointAuth(args) {
        return this.options.inner.tokenEndpointAuth?.(args);
    }
};
IdentifierScopedTokenStorage = class {
    constructor(storage, identifier2){
        this.storage = storage;
        this.identifier = identifier2;
    }
    async loadTokens() {
        return this.storage.loadTokens(this.identifier);
    }
    async saveTokens(tokens) {
        return this.storage.saveTokens(this.identifier, tokens);
    }
    async loadClientInformation() {
        return this.storage.loadClientInformation(this.identifier);
    }
    async saveClientInformation(clientInfo) {
        return this.storage.saveClientInformation(this.identifier, clientInfo);
    }
};
NoOpScopedTokenStorage = class {
    constructor(inner){
        this.inner = inner;
    }
    async loadTokens() {
        return void 0;
    }
    async loadClientInformation() {
        return void 0;
    }
    async saveTokens(tokens) {
        return this.inner.saveTokens(tokens);
    }
    async saveClientInformation(clientInfo) {
        return this.inner.saveClientInformation(clientInfo);
    }
    async invalidateCredentials(scope) {
        await this.inner.invalidateCredentials?.(scope);
    }
};

}
