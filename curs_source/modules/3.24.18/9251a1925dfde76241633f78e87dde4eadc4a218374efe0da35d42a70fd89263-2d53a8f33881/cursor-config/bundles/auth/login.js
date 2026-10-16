import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { exchangeApiKeyForTokens, generateAuthParams, init_mdm_sign_in_policy, pollAuthenticationStatus, resolveApiBaseUrl, resolveWebsiteUrl, stripCredentialsFromProxyUrl } from "../../../bidi_connect_exports.js";
import { init_proxy_fetch } from "./proxy-fetch.js";
import { init_request } from "../request.js";
var import_node_crypto4, AuthNetworkError, LoginManager;
export { AuthNetworkError, LoginManager, import_node_crypto4 };
var __wakaru_init_login_initialized = false;
export function init_login() {
if (__wakaru_init_login_initialized) return;
__wakaru_init_login_initialized = true;
"use strict";
import_node_crypto4 = __toESM(require("node:crypto"), 1);
init_request();
init_mdm_sign_in_policy();
init_proxy_fetch();
AuthNetworkError = class extends Error {
    constructor(cause){
        const rawProxy = process.env.HTTPS_PROXY || process.env.https_proxy;
        const message = "Failed to reach the Cursor API. " + (rawProxy ? `Check that your proxy (${stripCredentialsFromProxyUrl(rawProxy)}) is reachable.` : "If you are behind a corporate proxy, set the HTTPS_PROXY environment variable.");
        super(message);
        this.name = "AuthNetworkError";
        this.cause = cause;
    }
};
LoginManager = class {
    constructor(options2){
        this.redirectTarget = options2?.redirectTarget ?? "cli";
        this.supportsSelectedTeamLogin = options2?.supportsSelectedTeamLogin ?? false;
        this.apiUrl = resolveApiBaseUrl(options2?.apiUrl);
        this.websiteUrl = resolveWebsiteUrl(options2?.websiteUrl);
        this.onPollGiveUp = options2?.onPollGiveUp;
    }
    startLogin() {
        const authParams = generateAuthParams(this.redirectTarget, this.websiteUrl, this.supportsSelectedTeamLogin);
        return {
            metadata: {
                uuid: authParams.uuid,
                verifier: authParams.verifier
            },
            loginUrl: authParams.loginUrl
        };
    }
    async waitForResult(metadata, signal) {
        return pollAuthenticationStatus({
            uuid: metadata.uuid,
            verifier: metadata.verifier,
            apiBaseUrl: this.apiUrl,
            signal,
            onGiveUp: this.onPollGiveUp
        });
    }
    async loginWithApiKey(apiKey, options2) {
        return exchangeApiKeyForTokens(apiKey, {
            endpoint: options2?.endpoint ?? this.apiUrl
        });
    }
    async login(linkHandler, signal) {
        const { metadata, loginUrl } = this.startLogin();
        await linkHandler.openUrl(loginUrl);
        return this.waitForResult(metadata, signal);
    }
};

}
