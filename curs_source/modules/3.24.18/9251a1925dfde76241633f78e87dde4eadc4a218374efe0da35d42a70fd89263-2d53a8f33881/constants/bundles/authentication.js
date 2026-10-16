var AuthProviderType, GITHUB_OAUTH_CLIENT_IDS;
export { AuthProviderType, GITHUB_OAUTH_CLIENT_IDS };
var __wakaru_init_authentication_initialized = false;
export function init_authentication() {
if (__wakaru_init_authentication_initialized) return;
__wakaru_init_authentication_initialized = true;
"use strict";
(function(AuthProviderType2) {
    AuthProviderType2["github"] = "github";
    AuthProviderType2["githubEnterprise"] = "github-enterprise";
    AuthProviderType2["cursorGithub"] = "cursor-github";
})(AuthProviderType || (AuthProviderType = {}));
GITHUB_OAUTH_CLIENT_IDS = {
    cloudDev: "Iv23lijc62bmjVrl5bKM",
    dev: "Iv23lizQLylicUcBhg6C",
    prod: "Iv23liGzp2hacMWjAyXc"
};

}
