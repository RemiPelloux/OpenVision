import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var t_, zys;
export { t_, zys };
var __wakaru_hv_initialized = false;
export function hv() {
if (__wakaru_hv_initialized) return;
__wakaru_hv_initialized = true;
"use strict";
E(), ms(), Rn(), It(), ms(), t_ = jn("glassFileService"), zys = class {
    constructor(t){
        this._fileService = t;
    }
    get vscodeService() {
        return this._fileService;
    }
    get isDisposed() {
        return this._fileService.isDisposed;
    }
    get onDidChangeFileSystemProviderRegistrations() {
        return this._fileService.onDidChangeFileSystemProviderRegistrations;
    }
    get onDidChangeFileSystemProviderCapabilities() {
        return this._fileService.onDidChangeFileSystemProviderCapabilities;
    }
    get onDidFilesChange() {
        return this._fileService.onDidFilesChange;
    }
    get onDidRunOperation() {
        return this._fileService.onDidRunOperation;
    }
    registerProvider(t, e) {
        return this._fileService.registerProvider(t, e);
    }
    canHandleResource(t) {
        return this._fileService.canHandleResource(t);
    }
    hasProvider(t) {
        return this._fileService.hasProvider(t);
    }
    getProvider(t) {
        return this._fileService.getProvider(t);
    }
    hasCapability(t, e) {
        return this._fileService.hasCapability(t, e);
    }
    resolve(t, e) {
        return this._fileService.resolve(t, e);
    }
    stat(t) {
        return this._fileService.stat(t);
    }
    exists(t) {
        return this._fileService.exists(t);
    }
    readFile(t, e, n) {
        return this._fileService.readFile(t, e, n);
    }
    readFileStream(t, e, n) {
        return this._fileService.readFileStream(t, e, n);
    }
    writeFile(t, e, n) {
        return this._fileService.writeFile(t, e, n);
    }
    copy(t, e, n) {
        return this._fileService.copy(t, e, n);
    }
    createFile(t, e, n) {
        return this._fileService.createFile(t, e, n);
    }
    createFolder(t) {
        return this._fileService.createFolder(t);
    }
    del(t, e) {
        return this._fileService.del(t, e);
    }
    createWatcher(t, e) {
        return this._fileService.createWatcher(t, e);
    }
    watch(t, e) {
        return this._fileService.watch(t, e);
    }
    realpath(t) {
        return this._fileService.realpath(t);
    }
}, zys = Re([
    F(0, is)
], zys), bn(t_, zys, 1);

}
