import { E } from "./tslib.es6.js";
var _ev, VZt, bev;
export { VZt, _ev, bev };
var __wakaru_vOi_initialized = false;
export function vOi() {
if (__wakaru_vOi_initialized) return;
__wakaru_vOi_initialized = true;
"use strict";
E(), _ev = "Dev login failed. Try dev start backend.", VZt = [
    {
        glassCommandId: "devAutoLoginFree",
        workbenchCommandId: "workbench.action.devAutoLoginFree",
        commandTitle: "Dev Auto Login (Free)",
        mode: "dev-free",
        settingsLabel: "Dev Login (Free)",
        settingsDescription: "Login with Free for local development",
        settingsButtonTitle: "Free Login",
        keywords: [
            "dev",
            "auto",
            "login",
            "free"
        ]
    },
    {
        glassCommandId: "devAutoLoginProTrial",
        workbenchCommandId: "workbench.action.devAutoLoginProTrial",
        commandTitle: "Dev Auto Login (Pro Trial)",
        mode: "dev-trial",
        settingsLabel: "Dev Login (Pro Trial)",
        settingsDescription: "Login with Pro Trial for local development",
        settingsButtonTitle: "Pro Trial Login",
        keywords: [
            "dev",
            "auto",
            "login",
            "pro",
            "trial"
        ]
    },
    {
        glassCommandId: "devAutoLoginPro",
        workbenchCommandId: "workbench.action.devAutoLoginPro",
        commandTitle: "Dev Auto Login (Pro)",
        mode: "dev-pro",
        settingsLabel: "Dev Login (Pro)",
        settingsDescription: "Login with Pro plan for local development",
        settingsButtonTitle: "Pro Login",
        keywords: [
            "dev",
            "auto",
            "login",
            "pro"
        ]
    },
    {
        glassCommandId: "devAutoLoginProPlusTrial",
        workbenchCommandId: "workbench.action.devAutoLoginProPlusTrial",
        commandTitle: "Dev Auto Login (Pro Plus Trial)",
        mode: "dev-pro-plus-trial",
        settingsLabel: "Dev Login (Pro Plus Trial)",
        settingsDescription: "Login with Pro Plus Trial for local development",
        settingsButtonTitle: "Pro Plus Trial Login",
        keywords: [
            "dev",
            "auto",
            "login",
            "pro plus",
            "trial"
        ]
    },
    {
        glassCommandId: "devAutoLoginProPlus",
        workbenchCommandId: "workbench.action.devAutoLoginProPlus",
        commandTitle: "Dev Auto Login (Pro Plus)",
        mode: "dev-pro-plus",
        settingsLabel: "Dev Login (Pro Plus)",
        settingsDescription: "Login with Pro Plus for local development",
        settingsButtonTitle: "Pro Plus Login",
        keywords: [
            "dev",
            "auto",
            "login",
            "pro plus"
        ]
    },
    {
        glassCommandId: "devAutoLoginUltra",
        workbenchCommandId: "workbench.action.devAutoLoginUltra",
        commandTitle: "Dev Auto Login (Ultra)",
        mode: "dev-ultra",
        settingsLabel: "Dev Login (Ultra)",
        settingsDescription: "Login with Ultra plan for local development",
        settingsButtonTitle: "Ultra Login",
        keywords: [
            "dev",
            "auto",
            "login",
            "ultra"
        ]
    },
    {
        glassCommandId: "devAutoLoginEnterprise",
        workbenchCommandId: "workbench.action.devAutoLoginEnterprise",
        commandTitle: "Dev Auto Login (Enterprise)",
        mode: "dev-enterprise",
        settingsLabel: "Dev Login (Enterprise)",
        settingsDescription: "Login with Enterprise (team) for local development",
        settingsButtonTitle: "Enterprise Login",
        keywords: [
            "dev",
            "auto",
            "login",
            "enterprise"
        ]
    }
], bev = [
    ...VZt,
    {
        glassCommandId: "devAutoLoginFakeForTesting",
        workbenchCommandId: "workbench.action.devAutoLoginFakeForTesting",
        commandTitle: "Dev Auto Login (Fake Tokens for Testing)",
        keywords: [
            "dev",
            "auto",
            "login",
            "fake",
            "testing"
        ]
    }
];

}
