import { ED, nY } from "./process.js";
import { E } from "./tslib.es6.js";
var Sve, Amr, IC;
export { Amr, IC, Sve };
var __wakaru_oY_initialized = false;
export function oY() {
if (__wakaru_oY_initialized) return;
__wakaru_oY_initialized = true;
"use strict";
if (E(), nY(), Amr = globalThis.vscode, typeof Amr < "u" && typeof Amr.context < "u") {
    const t = Amr.context.configuration();
    if (t) Sve = t.product;
    else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
    if (Sve = globalThis._VSCODE_PRODUCT_JSON, ED.VSCODE_DEV, ED.VSCODE_DEV_ONBOARDING && Object.assign(Sve, {
        nameShort: `${Sve.nameShort} Onboarding`,
        nameLong: `${Sve.nameLong} Onboarding`,
        dataFolderName: `${Sve.dataFolderName}-onboarding`,
        serverDataFolderName: Sve.serverDataFolderName ? `${Sve.serverDataFolderName}-onboarding` : void 0
    }), !Sve.version) {
        const t = globalThis._VSCODE_PACKAGE_JSON;
        Object.assign(Sve, {
            version: t.version
        });
    }
} else Sve = {}, Object.keys(Sve).length === 0 && Object.assign(Sve, {
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
IC = Sve;

}
