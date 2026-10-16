"use strict";
require.d(exports, {
    Z: ()=>a
});
function n(e, t, r, n) {
    const s = e;
    !0 !== s.header.has?.("x-request-id") && s.header.set("x-request-id", t), s.header.set("x-cursor-client-version", n?.clientVersionHeader ?? function() {
        const e = process.env.AGENT_HOST_CLIENT_VERSION ?? process.env.HEADLESS_CLIENT_VERSION ?? process.env.CURSOR_CLIENT_VERSION;
        if ("string" == typeof e && "" !== e.trim()) {
            const t = e.trim();
            return t.startsWith("cli") ? t : `cli-${t}`;
        }
        const t = process.env.AGENT_CLI_STATIC_VERSION?.trim();
        if (t) return `cli-${t}`;
        const r = new Date;
        return `cli-${r.getUTCFullYear()}.${String(r.getUTCMonth() + 1).padStart(2, "0")}.${String(r.getUTCDate()).padStart(2, "0")}-agent-host`;
    }()), s.header.set("x-cursor-client-type", n?.clientType ?? "cli"), r && s.header.set("x-cursor-client-key", r);
}
const s = {
    debug: ()=>{},
    info: ()=>{},
    warn: ()=>{},
    error: ()=>{},
    trace: ()=>{}
}, o = {
    dispose: ()=>{}
};
class i {
    constructor(e, t = {}){
        this.platform = e, this.options = t, this.log = e.log ?? s, this.debugLog = e.debugLog ?? e.log ?? s;
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
    onDidChangeCursorCreds(e) {
        return this.platform.onDidChangeCreds?.(e) ?? o;
    }
    getCursorAuthToken() {
        return this.platform.getAuthToken();
    }
    onDidChangeCursorAuthToken(e) {
        return this.platform.onDidChangeAuthToken?.(e) ?? o;
    }
    triggerTokenRefresh() {
        this.platform.triggerTokenRefresh?.();
    }
    maybeGetSpoofedCppAccessToken(e, t) {
        return void 0 === this.platform.maybeGetSpoofedCppAccessToken ? e : this.platform.maybeGetSpoofedCppAccessToken(e, t);
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
    applyRequestHeaders(e, t, r) {
        void 0 === this.platform.applyRequestHeaders ? n(e, t, r, this.options.clientIdentity) : this.platform.applyRequestHeaders(e, t, r);
    }
    runWithNetworkContext(e) {
        return void 0 !== this.platform.runWithNetworkContext ? this.platform.runWithNetworkContext(e) : e();
    }
    async checkFeatureGate(e) {
        return await this.platform.checkFeatureGate?.(e) ?? !1;
    }
    onDidChangeGates(e) {
        return this.platform.onDidChangeGates?.(e) ?? o;
    }
    async getDynamicConfigValue(e) {
        return this.platform.getDynamicConfigValue?.(e);
    }
    getDynamicConfigFallbackValues(e) {
        return this.platform.getDynamicConfigFallbackValues?.(e);
    }
    async getCachedServerConfigJson() {
        return this.platform.getCachedServerConfigJson?.();
    }
    isHttp2Disabled() {
        return this.platform.isHttp2Disabled?.() ?? !1;
    }
    async setHttp2Disabled() {
        await this.platform.setHttp2Disabled?.();
    }
    isHttp1SseDisabled() {
        return this.platform.isHttp1SseDisabled?.() ?? !1;
    }
    async setHttp1SseDisabled() {
        await this.platform.setHttp1SseDisabled?.();
    }
    onDidChangeHttpProtocolSettings(e) {
        return this.platform.onDidChangeHttpProtocolSettings?.(e) ?? o;
    }
    getDebugTimeoutPreventionMode() {
        return this.platform.getDebugTimeoutPreventionMode?.() ?? "local_only";
    }
    async loadSystemCertificates() {
        return this.platform.loadSystemCertificates?.();
    }
    isLocalMode() {
        return this.platform.isLocalMode?.() ?? !1;
    }
    isDevelopment() {
        return this.platform.isDevelopment?.() ?? !1;
    }
    metricsIncrement(e) {
        this.platform.metricsIncrement?.(e);
    }
    writePrivacyLog(e, t) {
        this.platform.writePrivacyLog?.(e, t);
    }
    logStructured(e) {
        this.platform.logStructured?.(e);
    }
}
function a(e, t) {
    return new i(e, t);
}
