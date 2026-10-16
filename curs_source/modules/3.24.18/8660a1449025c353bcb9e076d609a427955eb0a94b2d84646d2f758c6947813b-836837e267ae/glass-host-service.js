import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { Od, Tc } from "./host.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var pI, _Is;
export { _Is, pI };
var __wakaru_N2_initialized = false;
export function N2() {
if (__wakaru_N2_initialized) return;
__wakaru_N2_initialized = true;
"use strict";
E(), Rn(), It(), Od(), pI = Il("glassHostService"), _Is = class {
    constructor(t){
        this._hostService = t;
    }
    get vscodeService() {
        return this._hostService;
    }
    get onDidChangeFocus() {
        return this._hostService.onDidChangeFocus;
    }
    get hasFocus() {
        return this._hostService.hasFocus;
    }
    focus(t, e) {
        return this._hostService.focus(t, e);
    }
    openWindow(t, e) {
        return Array.isArray(t) ? this._hostService.openWindow(t, e) : this._hostService.openWindow(t);
    }
    getCursorScreenPoint() {
        return this._hostService.getCursorScreenPoint();
    }
    reload(t) {
        return this._hostService.reload(t);
    }
    close() {
        return this._hostService.close();
    }
    quit() {
        return this._hostService.quit();
    }
    restart() {
        return this._hostService.restart();
    }
    cursorOpenWindow(t, e) {
        return this._hostService.cursorOpenWindow(t, e);
    }
    cursorConvertHeicToPng(t) {
        return this._hostService.cursorConvertHeicToPng(t);
    }
    cursorHasWSLFeatureInstalled() {
        return this._hostService.cursorHasWSLFeatureInstalled();
    }
    cursorGetWSLDistros() {
        return this._hostService.cursorGetWSLDistros();
    }
    cursorGetWindowPosition() {
        return this._hostService.cursorGetWindowPosition();
    }
    cursorPositionWindow(t) {
        return this._hostService.cursorPositionWindow(t);
    }
    cursorGetMainWindowId() {
        return this._hostService.cursorGetMainWindowId();
    }
}, _Is = Re([
    F(0, Tc)
], _Is), bn(pI, _Is, 1, 1);

}
