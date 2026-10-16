import { resolveAccessTokenWithRefreshPolicy } from "../../../bidi_connect_exports.js";
import { AuthNetworkError, LoginManager } from "../../../cursor-config/dist/auth/login.js";
import { init_dist21 } from "../../../cursor-config/dist/index.js";
import { buildHeadlessCreds, isTokenExpiringSoon2, resolveBackendUrl } from "../../../mcp_sandbox_policy_exports.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
var DEFAULT_AGENT_HOST_API_ENDPOINT, SimpleDisposable, NOOP_LOGGER, HeadlessAgentHostNetworkPlatform;
export { DEFAULT_AGENT_HOST_API_ENDPOINT, HeadlessAgentHostNetworkPlatform, NOOP_LOGGER, SimpleDisposable };
var __wakaru_init_headless_network_platform_initialized = false;
export function init_headless_network_platform() {
if (__wakaru_init_headless_network_platform_initialized) return;
__wakaru_init_headless_network_platform_initialized = true;
"use strict";
init_dist21();
init_privacy_mode_pb();
DEFAULT_AGENT_HOST_API_ENDPOINT = "https://api2.cursor.sh";
SimpleDisposable = class {
    constructor(disposeFn){
        this.disposeFn = disposeFn;
    }
    dispose() {
        this.disposeFn();
    }
};
NOOP_LOGGER = {
    debug: ()=>{},
    info: ()=>{},
    warn: ()=>{},
    error: ()=>{},
    trace: ()=>{}
};
HeadlessAgentHostNetworkPlatform = class {
    constructor(options2){
        this.options = options2;
        this.authReadyWarned = false;
        this.refreshEpoch = 0;
        this.applyingCredentialRefresh = false;
        this.tokenListeners = new Set();
        this.log = options2.log ?? NOOP_LOGGER;
        this.debugLog = options2.log ?? NOOP_LOGGER;
        const backendUrl = resolveBackendUrl(options2.backendUrl);
        const agentUrl = options2.agentBackendUrl ?? backendUrl;
        this.creds = buildHeadlessCreds(backendUrl, agentUrl);
        const platform = this;
        this.options.credentialManager.onDidChangeAccessToken?.(function onCredentialAccessTokenChanged(credentialToken) {
            platform.handleCredentialAccessTokenChanged(arguments.length === 0 ? [] : [
                credentialToken
            ]);
        });
    }
    handleCredentialAccessTokenChanged(args) {
        if (this.applyingCredentialRefresh) {
            return;
        }
        this.refreshEpoch += 1;
        if (args.length === 0) {
            void this.refreshAfterUnspecifiedCredentialChange(this.refreshEpoch);
            return;
        }
        if (args[0] === void 0) {
            this.clearTransportAuthToken();
        }
        void this.refreshToken();
    }
    async refreshAfterUnspecifiedCredentialChange(refreshEpoch) {
        let nextCredentialToken;
        try {
            nextCredentialToken = await this.options.credentialManager.getAccessToken() ?? void 0;
        } catch (err) {
            if (refreshEpoch !== this.refreshEpoch) {
                return;
            }
            this.log.warn(`[agent-host] Unspecified credential peek failed; refreshing without clearing: ${err instanceof Error ? err.message : String(err)}`);
            void this.refreshToken();
            return;
        }
        if (refreshEpoch !== this.refreshEpoch) {
            return;
        }
        if (nextCredentialToken === void 0) {
            this.clearTransportAuthToken();
        }
        void this.refreshToken();
    }
    async initialize() {
        const refreshEpoch = this.refreshEpoch;
        const nextToken = await this.resolveAccessToken(refreshEpoch);
        if (refreshEpoch === this.refreshEpoch) {
            this.cachedToken = nextToken;
        }
        if (this.cachedToken === void 0 && !this.authReadyWarned) {
            this.authReadyWarned = true;
            this.log.warn("[agent-host] Starting without an access token; requests may fail until auth is configured.");
        }
    }
    getCreds() {
        return this.creds;
    }
    getAuthToken() {
        return this.cachedToken;
    }
    getPrivacyModeEnum() {
        return this.options.credentialManager.privacyMode ?? PrivacyMode.UNSPECIFIED;
    }
    onDidChangeAuthToken(listener) {
        this.tokenListeners.add(listener);
        return new SimpleDisposable(()=>{
            this.tokenListeners.delete(listener);
        });
    }
    triggerTokenRefresh() {
        void this.refreshToken();
    }
    checkFeatureGate(gateName) {
        return this.options.enabledFeatureGates?.has(gateName) ?? false;
    }
    getDebugTimeoutPreventionMode() {
        return "never";
    }
    isDevelopment() {
        return process.env.NODE_ENV !== "production";
    }
    metricsIncrement(stat24) {
        this.options.metricsIncrement?.(stat24);
    }
    async resolveAccessToken(refreshEpoch) {
        const endpoint = this.creds.backendUrl;
        const currentToken = await this.options.credentialManager.getAccessToken() ?? null;
        return await resolveAccessTokenWithRefreshPolicy({
            currentToken,
            ephemeralToken: null,
            isTokenExpiringSoon: isTokenExpiringSoon2,
            refreshToken: async ()=>{
                const apiKey = await this.options.credentialManager.getApiKey();
                if (!apiKey) {
                    return null;
                }
                const loginManager = new LoginManager();
                let authResult;
                try {
                    authResult = await loginManager.loginWithApiKey(apiKey, {
                        endpoint
                    });
                } catch (err) {
                    if (err instanceof AuthNetworkError) {
                        this.log.warn(`[agent-host] Token refresh failed transiently; keeping current token: ${err.message}`);
                        return null;
                    }
                    throw err;
                }
                if (!authResult?.accessToken || !authResult.refreshToken) {
                    return null;
                }
                if (refreshEpoch !== this.refreshEpoch) {
                    return null;
                }
                this.applyingCredentialRefresh = true;
                try {
                    await this.options.credentialManager.setAuthentication(authResult.accessToken, authResult.refreshToken, apiKey);
                } finally{
                    this.applyingCredentialRefresh = false;
                }
                return authResult.accessToken;
            }
        }) ?? void 0;
    }
    clearTransportAuthToken() {
        if (this.cachedToken === void 0) {
            return;
        }
        this.cachedToken = void 0;
        for (const listener of this.tokenListeners){
            listener(void 0);
        }
    }
    async refreshToken() {
        const refreshEpoch = this.refreshEpoch;
        const previousToken = this.cachedToken;
        let nextToken;
        try {
            nextToken = await this.resolveAccessToken(refreshEpoch);
        } catch (err) {
            if (refreshEpoch !== this.refreshEpoch) {
                return;
            }
            if (this.cachedToken === void 0) {
                try {
                    const recovered = await this.options.credentialManager.getAccessToken() ?? void 0;
                    if (refreshEpoch === this.refreshEpoch && recovered !== void 0) {
                        this.cachedToken = recovered;
                        for (const listener of this.tokenListeners){
                            listener(recovered);
                        }
                    }
                } catch (recoveryErr) {
                    this.log.warn(`[agent-host] Token refresh recovery failed: ${recoveryErr instanceof Error ? recoveryErr.message : String(recoveryErr)}`);
                }
            }
            this.log.warn(`[agent-host] Token refresh failed; keeping ${this.cachedToken === void 0 ? "empty" : "current"} transport token: ${err instanceof Error ? err.message : String(err)}`);
            return;
        }
        if (refreshEpoch !== this.refreshEpoch) {
            return;
        }
        if (nextToken === previousToken) {
            return;
        }
        this.cachedToken = nextToken;
        for (const listener of this.tokenListeners){
            listener(nextToken);
        }
    }
};

}
