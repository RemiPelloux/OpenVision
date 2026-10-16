import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Nu, Mhs;
export { Mhs, Nu };
var __wakaru_xc_initialized = false;
export function xc() {
if (__wakaru_xc_initialized) return;
__wakaru_xc_initialized = true;
"use strict";
E(), Rn(), It(), Zi(), Zi(), Nu = jn("glassStorageService"), Mhs = class {
    constructor(t){
        this._storageService = t;
    }
    get vscodeService() {
        return this._storageService;
    }
    get(t, e, n) {
        return this._storageService.get(t, e, n);
    }
    getBoolean(t, e, n) {
        return this._storageService.getBoolean(t, e, n);
    }
    getNumber(t, e, n) {
        return this._storageService.getNumber(t, e, n);
    }
    store(t, e, n, i) {
        this._storageService.store(t, e, n, i);
    }
    remove(t, e) {
        this._storageService.remove(t, e);
    }
    keys(t, e) {
        return this._storageService.keys(t, e);
    }
    onDidChangeValue(t, e, n) {
        return this._storageService.onDidChangeValue(t, e, n);
    }
    flush(t) {
        return this._storageService.flush(t);
    }
    isNew(t) {
        return this._storageService.isNew(t);
    }
    optimize(t, e) {
        return this._storageService.optimize(t, e);
    }
    getStorageSizeBreakdown(t, e) {
        return this._storageService.getStorageSizeBreakdown(t, e);
    }
    cancelStorageSizeBreakdown(t) {
        return this._storageService.cancelStorageSizeBreakdown(t);
    }
    collectionQuery(t, e) {
        return this._storageService.collectionQuery(t, e);
    }
    cursorDiskKVGet(t, e) {
        return this._storageService.cursorDiskKVGet(t, e);
    }
    cursorDiskKVSet(t, e) {
        return this._storageService.cursorDiskKVSet(t, e);
    }
    cursorDiskKVSetIfAbsent(t, e) {
        return this._storageService.cursorDiskKVSetIfAbsent(t, e);
    }
    cursorDiskKVReplaceIfEquals(t, e, n) {
        return this._storageService.cursorDiskKVReplaceIfEquals(t, e, n);
    }
    cursorDiskKVGetPrefixKeys(t) {
        return this._storageService.cursorDiskKVGetPrefixKeys(t);
    }
    cursorDiskKVClearPrefix(t) {
        return this._storageService.cursorDiskKVClearPrefix(t);
    }
    cursorDiskKVGetBinary(t) {
        return this._storageService.cursorDiskKVGetBinary(t);
    }
    cursorDiskKVSetBinaryBatch(t) {
        return this._storageService.cursorDiskKVSetBinaryBatch(t);
    }
    cursorDiskKVSetBatch(t, e) {
        return this._storageService.cursorDiskKVSetBatch(t, e);
    }
}, Mhs = Re([
    F(0, ki)
], Mhs), bn(Nu, Mhs, 1);

}
