import { bn, jn } from "./SZu.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var ow, P_s;
export { P_s, ow };
var __wakaru_hC_initialized = false;
export function hC() {
if (__wakaru_hC_initialized) return;
__wakaru_hC_initialized = true;
"use strict";
E(), Rn(), It(), fo(), ow = jn("glassEnvironmentService"), P_s = class {
    constructor(t){
        this._environmentService = t;
    }
    get vscodeService() {
        return this._environmentService;
    }
    get isBuilt() {
        return this._environmentService.isBuilt;
    }
    get isExtensionDevelopment() {
        return this._environmentService.isExtensionDevelopment;
    }
    get userDataSyncHome() {
        return this._environmentService.userDataSyncHome;
    }
    get workspaceStorageHome() {
        return this._environmentService.workspaceStorageHome;
    }
    get cacheHome() {
        return this._environmentService.cacheHome;
    }
    get argvResource() {
        return this._environmentService.argvResource;
    }
    get extHostLogsPath() {
        return this._environmentService.extHostLogsPath;
    }
    get remoteAuthority() {
        return this._environmentService.remoteAuthority;
    }
    get shadowWindowForWorkspaceId() {
        return this._environmentService.shadowWindowForWorkspaceId;
    }
    get enableSmokeTestDriver() {
        return this._environmentService.enableSmokeTestDriver;
    }
    get devLabel() {
        return this._environmentService.devLabel;
    }
    get cdpPort() {
        return this._environmentService.cdpPort;
    }
    get isGlass() {
        return this._environmentService.isGlass;
    }
    get isInitialStartup() {
        return this._environmentService.window?.isInitialStartup;
    }
    get wasRestarted() {
        return this._environmentService.window?.wasRestarted;
    }
    get glassLaunchIntent() {
        return this._environmentService.glassLaunchIntent;
    }
    get glassWorkspaceRole() {
        return this._environmentService.glassWorkspaceRole;
    }
    get isGlassCursorWorktreeAgentWorkspace() {
        return this._environmentService.isGlassCursorWorktreeAgentWorkspace;
    }
}, P_s = Re([
    F(0, ps)
], P_s), bn(ow, P_s, 1);

}
