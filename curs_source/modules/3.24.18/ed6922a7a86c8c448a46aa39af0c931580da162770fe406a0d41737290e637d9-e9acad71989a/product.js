import { QH, oR } from "./process.js";
import { x } from "./tslib.es6.js";
var Kie, Dmi, Ew;
export { Dmi, Ew, Kie };
var __wakaru_RV_initialized = false;
export function RV() {
if (__wakaru_RV_initialized) return;
__wakaru_RV_initialized = true;
"use strict";
if (x(), QH(), Dmi = globalThis.vscode, typeof Dmi < "u" && typeof Dmi.context < "u") {
    const e = Dmi.context.configuration();
    if (e) Kie = e.product;
    else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
    if (Kie = globalThis._VSCODE_PRODUCT_JSON, oR.VSCODE_DEV, oR.VSCODE_DEV_ONBOARDING && Object.assign(Kie, {
        nameShort: `${Kie.nameShort} Onboarding`,
        nameLong: `${Kie.nameLong} Onboarding`,
        dataFolderName: `${Kie.dataFolderName}-onboarding`,
        serverDataFolderName: Kie.serverDataFolderName ? `${Kie.serverDataFolderName}-onboarding` : void 0
    }), !Kie.version) {
        const e = globalThis._VSCODE_PACKAGE_JSON;
        Object.assign(Kie, {
            version: e.version
        });
    }
} else Kie = {}, Object.keys(Kie).length === 0 && Object.assign(Kie, {
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
Ew = Kie;

}
