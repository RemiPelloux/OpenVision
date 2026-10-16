import { Il, bn } from "./SZu.js";
import { bb, hf } from "./clipboardService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var db, M_s;
export { M_s, db };
var __wakaru_cS_initialized = false;
export function cS() {
if (__wakaru_cS_initialized) return;
__wakaru_cS_initialized = true;
"use strict";
E(), bb(), Rn(), It(), db = Il("glassClipboardService"), M_s = class {
    constructor(t){
        this._clipboardService = t;
    }
    get vscodeService() {
        return this._clipboardService;
    }
    writeText(t, e) {
        return this._clipboardService.writeText(t, e);
    }
    readText(t) {
        return this._clipboardService.readText(t);
    }
    writeResources(t) {
        return this._clipboardService.writeResources(t);
    }
    readResources() {
        return this._clipboardService.readResources();
    }
    hasResources() {
        return this._clipboardService.hasResources();
    }
    readImage() {
        return this._clipboardService.readImage();
    }
    writeImage(t) {
        return this._clipboardService.writeImage(t);
    }
}, M_s = Re([
    F(0, hf)
], M_s), bn(db, M_s, 1, 1);

}
