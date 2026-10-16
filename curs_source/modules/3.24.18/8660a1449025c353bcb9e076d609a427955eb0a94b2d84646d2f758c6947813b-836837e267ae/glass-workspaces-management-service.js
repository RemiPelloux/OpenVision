import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { HM, lN } from "./workspaces.js";
var pU, cCs;
export { cCs, pU };
var __wakaru_OG_initialized = false;
export function OG() {
if (__wakaru_OG_initialized) return;
__wakaru_OG_initialized = true;
"use strict";
E(), Rn(), It(), HM(), HM(), pU = jn("glassWorkspacesManagementService"), cCs = class {
    constructor(t){
        this._workspacesService = t;
    }
    get vscodeService() {
        return this._workspacesService;
    }
    getWorkspaceIdentifier(t) {
        return this._workspacesService.getWorkspaceIdentifier(t);
    }
    getSingleFolderWorkspaceIdentifier(t) {
        return this._workspacesService.getSingleFolderWorkspaceIdentifier(t);
    }
    get onDidChangeRecentlyOpened() {
        return this._workspacesService.onDidChangeRecentlyOpened;
    }
    addRecentlyOpened(t) {
        return this._workspacesService.addRecentlyOpened(t);
    }
    removeRecentlyOpened(t) {
        return this._workspacesService.removeRecentlyOpened(t);
    }
    getRecentlyOpened() {
        return this._workspacesService.getRecentlyOpened();
    }
}, cCs = Re([
    F(0, lN)
], cCs), bn(pU, cCs, 1);

}
