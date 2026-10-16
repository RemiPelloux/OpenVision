import { Hp, Rd } from "./backup.js";
import { B } from "./ipc.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { ct, pt } from "./windows.js";
import { Eu, wu } from "./workspacesHistoryMainService.js";
import { Pc, lo } from "./workspacesManagementMainService.js";
var R1;
export { R1 };
var __wakaru_sZe_initialized = false;
export function sZe() {
if (__wakaru_sZe_initialized) return;
__wakaru_sZe_initialized = true;
"use strict";
h(), Hp(), pt(), Eu(), Pc(), R1 = class {
    constructor(e, t, n, r){
        this.workspacesManagementMainService = e, this.windowsMainService = t, this.workspacesHistoryMainService = n, this.backupMainService = r, this.onDidChangeRecentlyOpened = this.workspacesHistoryMainService.onDidChangeRecentlyOpened;
    }
    async enterWorkspace(e, t) {
        const n = this.windowsMainService.getWindowById(e);
        if (n) return this.workspacesManagementMainService.enterWorkspace(n, this.windowsMainService.getWindows(), t);
    }
    createUntitledWorkspace(e, t, n) {
        return this.workspacesManagementMainService.createUntitledWorkspace(t, n);
    }
    deleteUntitledWorkspace(e, t) {
        return this.workspacesManagementMainService.deleteUntitledWorkspace(t);
    }
    getWorkspaceIdentifier(e, t) {
        return this.workspacesManagementMainService.getWorkspaceIdentifier(t);
    }
    getSingleFolderWorkspaceIdentifier(e, t) {
        return this.workspacesManagementMainService.getSingleFolderWorkspaceIdentifier(t);
    }
    getRecentlyOpened(e) {
        return this.workspacesHistoryMainService.getRecentlyOpened();
    }
    addRecentlyOpened(e, t) {
        return this.workspacesHistoryMainService.addRecentlyOpened(t);
    }
    removeRecentlyOpened(e, t) {
        return this.workspacesHistoryMainService.removeRecentlyOpened(t);
    }
    clearRecentlyOpened(e) {
        return this.workspacesHistoryMainService.clearRecentlyOpened();
    }
    async getDirtyWorkspaces() {
        return this.backupMainService.getDirtyWorkspaces();
    }
}, R1 = B([
    w(0, lo),
    w(1, ct),
    w(2, wu),
    w(3, Rd)
], R1);

}
