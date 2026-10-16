import { Ml } from "./index.ts";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Oqi, QQd, Imo, Amo, Fqi, Kse;
export { Amo, Fqi, Imo, Kse, Oqi, QQd };
var __wakaru_B$_initialized = false;
export function B$() {
if (__wakaru_B$_initialized) return;
__wakaru_B$_initialized = true;
"use strict";
x(), Ze(), Ml(), Oqi = 4, QQd = class extends Error {
    constructor(e = "No changes to apply"){
        super(e), this.name = "NoChangesToApplyError";
    }
}, Imo = class {
    constructor(e, t){
        this.currentLock = e, this.releaseLock = t, this._isDisposed = !1;
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, this.releaseLock());
    }
    [Symbol.dispose]() {
        this.dispose();
    }
}, Amo = class extends Error {
    constructor(e = "Worktree operation canceled"){
        super(e), this.name = "WorktreeOperationCanceledError";
    }
}, Fqi = class extends Error {
    constructor(e, t){
        const n = t ? ` at ${t}` : " in another checkout";
        super(`Branch "${e}" is already checked out${n}.`), this.branchName = e, this.checkoutPath = t, this.name = "WorktreeBranchAlreadyCheckedOutError";
    }
}, Kse = vn("worktreeManagerService");

}
