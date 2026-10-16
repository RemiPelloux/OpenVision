import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { fc, hu } from "./productService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var VPt, A6s;
export { A6s, VPt };
var __wakaru_Mtn_initialized = false;
export function Mtn() {
if (__wakaru_Mtn_initialized) return;
__wakaru_Mtn_initialized = true;
"use strict";
E(), Rn(), It(), hu(), VPt = Il("glassProductService"), A6s = class {
    constructor(t){
        this._productService = t;
    }
    get vscodeService() {
        return this._productService;
    }
    get version() {
        return this._productService.version;
    }
    get nameShort() {
        return this._productService.nameShort;
    }
    get dataFolderName() {
        return this._productService.dataFolderName;
    }
    get internalBuild() {
        return this._productService.internalBuild;
    }
    get extensionsGallery() {
        return this._productService.extensionsGallery;
    }
    get honorManagedReleaseTrackOverride() {
        return this._productService.honorManagedReleaseTrackOverride;
    }
    get urlProtocol() {
        return this._productService.urlProtocol;
    }
}, A6s = Re([
    F(0, fc)
], A6s), bn(VPt, A6s, 1, 1);

}
