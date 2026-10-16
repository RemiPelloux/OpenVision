import { init_request_headers } from "./request-headers.js";
import { applyDefaultAgentHostRequestHeaders } from "../../../mcp_sandbox_policy_exports.js";
var NOOP_LOGGER2, NOOP_DISPOSABLE2, PlatformAgentHostNetworkHost;
export { NOOP_DISPOSABLE2, NOOP_LOGGER2, PlatformAgentHostNetworkHost };
var __wakaru_init_platform_network_host_initialized = false;
export function init_platform_network_host() {
if (__wakaru_init_platform_network_host_initialized) return;
__wakaru_init_platform_network_host_initialized = true;
"use strict";
init_request_headers();
NOOP_LOGGER2 = {
    debug: ()=>{},
    info: ()=>{},
    warn: ()=>{},
    error: ()=>{},
    trace: ()=>{}
};
NOOP_DISPOSABLE2 = {
    dispose: ()=>{}
};
PlatformAgentHostNetworkHost = class {
    constructor(platform, options2 = {}){
        this.platform = platform;
        this.options = options2;
        this.log = platform.log ?? NOOP_LOGGER2;
        this.debugLog = platform.debugLog ?? platform.log ?? NOOP_LOGGER2;
    }
    async initialize() {
        await this.platform.initialize?.();
    }
    dispose() {
        this.platform.dispose?.();
    }
    getCursorCreds() {
        return this.platform.getCreds();
    }
    onDidChangeCursorCreds(listener) {
        return this.platform.onDidChangeCreds?.(listener) ?? NOOP_DISPOSABLE2;
    }
    getCursorAuthToken() {
        return this.platform.getAuthToken();
    }
    onDidChangeCursorAuthToken(listener) {
        return this.platform.onDidChangeAuthToken?.(listener) ?? NOOP_DISPOSABLE2;
    }
    triggerTokenRefresh() {
        this.platform.triggerTokenRefresh?.();
    }
    maybeGetSpoofedCppAccessToken(accessToken, baseUrl) {
        if (this.platform.maybeGetSpoofedCppAccessToken === void 0) {
            return accessToken;
        }
        return this.platform.maybeGetSpoofedCppAccessToken(accessToken, baseUrl);
    }
    getTeamId() {
        return this.platform.getTeamId?.();
    }
    getPrivacyModeEnum() {
        return this.platform.getPrivacyModeEnum?.() ?? 0;
    }
    getPrivateInferenceEnablement() {
        return this.platform.getPrivateInferenceEnablement?.();
    }
    applyRequestHeaders(req, backupRequestId, clientKey) {
        if (this.platform.applyRequestHeaders !== void 0) {
            this.platform.applyRequestHeaders(req, backupRequestId, clientKey);
            return;
        }
        applyDefaultAgentHostRequestHeaders(req, backupRequestId, clientKey, this.options.clientIdentity);
    }
    runWithNetworkContext(fn) {
        if (this.platform.runWithNetworkContext !== void 0) {
            return this.platform.runWithNetworkContext(fn);
        }
        return fn();
    }
    async checkFeatureGate(gateName) {
        return await this.platform.checkFeatureGate?.(gateName) ?? false;
    }
    onDidChangeGates(listener) {
        return this.platform.onDidChangeGates?.(listener) ?? NOOP_DISPOSABLE2;
    }
    async getDynamicConfigValue(configName) {
        return this.platform.getDynamicConfigValue?.(configName);
    }
    getDynamicConfigFallbackValues(configName) {
        return this.platform.getDynamicConfigFallbackValues?.(configName);
    }
    async getCachedServerConfigJson() {
        return this.platform.getCachedServerConfigJson?.();
    }
    isHttp2Disabled() {
        return this.platform.isHttp2Disabled?.() ?? false;
    }
    async setHttp2Disabled() {
        await this.platform.setHttp2Disabled?.();
    }
    isHttp1SseDisabled() {
        return this.platform.isHttp1SseDisabled?.() ?? false;
    }
    async setHttp1SseDisabled() {
        await this.platform.setHttp1SseDisabled?.();
    }
    onDidChangeHttpProtocolSettings(listener) {
        return this.platform.onDidChangeHttpProtocolSettings?.(listener) ?? NOOP_DISPOSABLE2;
    }
    getDebugTimeoutPreventionMode() {
        return this.platform.getDebugTimeoutPreventionMode?.() ?? "local_only";
    }
    async loadSystemCertificates() {
        return this.platform.loadSystemCertificates?.();
    }
    isLocalMode() {
        return this.platform.isLocalMode?.() ?? false;
    }
    isDevelopment() {
        return this.platform.isDevelopment?.() ?? false;
    }
    metricsIncrement(stat24) {
        this.platform.metricsIncrement?.(stat24);
    }
    writePrivacyLog(level, payload) {
        this.platform.writePrivacyLog?.(level, payload);
    }
    logStructured(entry) {
        this.platform.logStructured?.(entry);
    }
};

}
