import { Hr, Kt } from "./process.js";
import { w } from "./tslib.es6.js";
var re, dr, se;
export { dr, re, se };
var __wakaru_v0_initialized = false;
export function v0() {
if (__wakaru_v0_initialized) return;
__wakaru_v0_initialized = true;
"use strict";
if (w(), Hr(), dr = globalThis.vscode, typeof dr < "u" && typeof dr.context < "u") {
    const e = dr.context.configuration();
    if (e) re = e.product;
    else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
    if (re = globalThis._VSCODE_PRODUCT_JSON, Kt.VSCODE_DEV, Kt.VSCODE_DEV_ONBOARDING && Object.assign(re, {
        nameShort: `${re.nameShort} Onboarding`,
        nameLong: `${re.nameLong} Onboarding`,
        dataFolderName: `${re.dataFolderName}-onboarding`,
        serverDataFolderName: re.serverDataFolderName ? `${re.serverDataFolderName}-onboarding` : void 0
    }), !re.version) {
        const e = globalThis._VSCODE_PACKAGE_JSON;
        Object.assign(re, {
            version: e.version
        });
    }
} else re = {}, Object.keys(re).length === 0 && Object.assign(re, {
    version: "1.94.0-dev",
    nameShort: "Cursor Dev",
    nameLong: "Cursor Dev",
    applicationName: "cursor",
    dataFolderName: ".cursor",
    urlProtocol: "cursor",
    reportIssueUrl: "https://github.com/getcursor/cursor/issues/new",
    licenseName: "MIT",
    licenseUrl: "https://github.com/getcursor/cursor/",
    serverLicenseUrl: "https://github.com/getcursor/cursor/"
});
se = re;

}
