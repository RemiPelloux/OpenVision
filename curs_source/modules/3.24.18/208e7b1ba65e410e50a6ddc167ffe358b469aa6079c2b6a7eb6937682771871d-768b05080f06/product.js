import { Is, bi } from "./process.js";
import { h } from "./tslib.es6.js";
var Xr, Qv, Xn;
export { Qv, Xn, Xr };
var __wakaru_Ha_initialized = false;
export function Ha() {
if (__wakaru_Ha_initialized) return;
__wakaru_Ha_initialized = true;
"use strict";
if (h(), bi(), Qv = globalThis.vscode, typeof Qv < "u" && typeof Qv.context < "u") {
    const e = Qv.context.configuration();
    if (e) Xr = e.product;
    else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
    if (Xr = globalThis._VSCODE_PRODUCT_JSON, Is.VSCODE_DEV, Is.VSCODE_DEV_ONBOARDING && Object.assign(Xr, {
        nameShort: `${Xr.nameShort} Onboarding`,
        nameLong: `${Xr.nameLong} Onboarding`,
        dataFolderName: `${Xr.dataFolderName}-onboarding`,
        serverDataFolderName: Xr.serverDataFolderName ? `${Xr.serverDataFolderName}-onboarding` : void 0
    }), !Xr.version) {
        const e = globalThis._VSCODE_PACKAGE_JSON;
        Object.assign(Xr, {
            version: e.version
        });
    }
} else Xr = {}, Object.keys(Xr).length === 0 && Object.assign(Xr, {
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
Xn = Xr;

}
