import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
var F_, qPi;
export { F_, qPi };
var __wakaru_xd_initialized = false;
export function xd() {
if (__wakaru_xd_initialized) return;
__wakaru_xd_initialized = true;
"use strict";
E(), Rn(), It(), Sr(), Sr(), F_ = jn("glassWorkspaceContextService"), qPi = class {
    constructor(t){
        this._workspaceContextService = t;
    }
    get vscodeService() {
        return this._workspaceContextService;
    }
    get isDisposed() {
        return this._workspaceContextService.isDisposed;
    }
    get onDidChangeWorkspaceName() {
        return this._workspaceContextService.onDidChangeWorkspaceName;
    }
    get onDidChangeWorkspaceFolders() {
        return this._workspaceContextService.onDidChangeWorkspaceFolders;
    }
    getWorkspace() {
        return this._workspaceContextService.getWorkspace();
    }
    getWorkspaceFolder(t) {
        return this._workspaceContextService.getWorkspaceFolder(t);
    }
    asRelativePath(t, e) {
        return this._workspaceContextService.asRelativePath(t, e);
    }
    resolveRelativePath(t, e) {
        return this._workspaceContextService.resolveRelativePath(t, e);
    }
    isInsideWorkspace(t) {
        return this._workspaceContextService.isInsideWorkspace(t);
    }
}, qPi = Re([
    F(0, yr)
], qPi), bn(F_, qPi, 1);

}
