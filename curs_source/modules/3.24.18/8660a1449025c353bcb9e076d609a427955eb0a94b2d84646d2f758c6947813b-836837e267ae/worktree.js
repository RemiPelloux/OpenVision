import { jn } from "./SZu.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var UJr, t8m, fYa, vYa, jJr, WO;
export { UJr, WO, fYa, jJr, t8m, vYa };
var __wakaru_qM_initialized = false;
export function qM() {
if (__wakaru_qM_initialized) return;
__wakaru_qM_initialized = true;
"use strict";
E(), It(), nl(), UJr = 4, t8m = class extends Error {
    constructor(t = "No changes to apply"){
        super(t), this.name = "NoChangesToApplyError";
    }
}, fYa = class {
    constructor(t, e){
        this.currentLock = t, this.releaseLock = e, this._isDisposed = !1;
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, this.releaseLock());
    }
    [Symbol.dispose]() {
        this.dispose();
    }
}, vYa = class extends Error {
    constructor(t = "Worktree operation canceled"){
        super(t), this.name = "WorktreeOperationCanceledError";
    }
}, jJr = class extends Error {
    constructor(t, e){
        const n = e ? ` at ${e}` : " in another checkout";
        super(`Branch "${t}" is already checked out${n}.`), this.branchName = t, this.checkoutPath = e, this.name = "WorktreeBranchAlreadyCheckedOutError";
    }
}, WO = jn("worktreeManagerService");

}
