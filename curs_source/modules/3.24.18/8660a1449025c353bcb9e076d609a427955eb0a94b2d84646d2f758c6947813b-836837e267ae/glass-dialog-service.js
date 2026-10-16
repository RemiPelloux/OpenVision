import { bn, jn } from "./SZu.js";
import { NS, bd, hd } from "./dialogs.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var sYe, g2s, yU, f2s;
export { f2s, g2s, sYe, yU };
var __wakaru_a5_initialized = false;
export function a5() {
if (__wakaru_a5_initialized) return;
__wakaru_a5_initialized = true;
"use strict";
E(), bd(), Rn(), It(), sYe = jn("glassDialogService"), g2s = class {
    constructor(t){
        this._dialogService = t;
    }
    get vscodeService() {
        return this._dialogService;
    }
    confirm(t) {
        return this._dialogService.confirm(t);
    }
    error(t, e) {
        return this._dialogService.error(t, e);
    }
    about() {
        return this._dialogService.about();
    }
}, g2s = Re([
    F(0, hd)
], g2s), bn(sYe, g2s, 1), yU = jn("glassFileDialogService"), f2s = class {
    constructor(t){
        this._fileDialogService = t;
    }
    get vscodeService() {
        return this._fileDialogService;
    }
    defaultFolderPath(t) {
        return this._fileDialogService.defaultFolderPath(t);
    }
    defaultWorkspacePath(t) {
        return this._fileDialogService.defaultWorkspacePath(t);
    }
    preferredHome(t) {
        return this._fileDialogService.preferredHome(t);
    }
    showSaveDialog(t) {
        return this._fileDialogService.showSaveDialog(t);
    }
    showOpenDialog(t) {
        return this._fileDialogService.showOpenDialog(t);
    }
}, f2s = Re([
    F(0, NS)
], f2s), bn(yU, f2s, 1);

}
