import { ToolCallAbortedError, init_common9 } from "../common.js";
var FileOperationLockManager;
export { FileOperationLockManager };
var __wakaru_init_file_operation_lock_manager_initialized = false;
export function init_file_operation_lock_manager() {
if (__wakaru_init_file_operation_lock_manager_initialized) return;
__wakaru_init_file_operation_lock_manager_initialized = true;
"use strict";
init_common9();
FileOperationLockManager = class {
    constructor(){
        this.lockedFiles = new Set();
        this.exclusiveLockActive = false;
        this.waitQueue = [];
        this.nextAcquisitionOrder = BigInt(0);
    }
    get activeFileOperationCount() {
        return this.lockedFiles.size;
    }
    async waitForLock(ctx, targetPath, options2) {
        if (ctx.signal.aborted) {
            throw new ToolCallAbortedError();
        }
        const needsToWait = this.exclusiveLockActive || this.lockedFiles.has(targetPath) || this.hasExclusiveWaiterAhead();
        if (needsToWait) {
            let wasGranted = false;
            await new Promise((resolve36)=>{
                const wrappedResolve = ()=>{
                    wasGranted = true;
                    ctx.signal.removeEventListener("abort", onAbort);
                    resolve36();
                };
                const onAbort = ()=>{
                    const idx = this.waitQueue.findIndex((w2)=>w2.type === "file" && w2.path === targetPath && w2.resolve === wrappedResolve);
                    if (idx >= 0) {
                        this.waitQueue.splice(idx, 1);
                    }
                    resolve36();
                };
                ctx.signal.addEventListener("abort", onAbort, {
                    once: true
                });
                this.waitQueue.push({
                    type: "file",
                    path: targetPath,
                    resolve: wrappedResolve
                });
            });
            if (ctx.signal.aborted) {
                if (wasGranted) {
                    this.releaseFileLock(targetPath);
                }
                throw new ToolCallAbortedError();
            }
        } else {
            this.lockedFiles.add(targetPath);
        }
        let released = false;
        const dispose2 = ()=>{
            if (released) return;
            released = true;
            this.releaseFileLock(targetPath);
        };
        return {
            acquisitionOrder: options2?.trackAcquisitionOrder === true ? ++this.nextAcquisitionOrder : void 0,
            [Symbol.dispose]: dispose2
        };
    }
    async waitForExclusiveLock(ctx) {
        if (ctx.signal.aborted) {
            throw new ToolCallAbortedError();
        }
        const needsToWait = this.exclusiveLockActive || this.activeFileOperationCount > 0;
        if (needsToWait) {
            let wasGranted = false;
            await new Promise((resolve36)=>{
                const wrappedResolve = ()=>{
                    wasGranted = true;
                    ctx.signal.removeEventListener("abort", onAbort);
                    resolve36();
                };
                const onAbort = ()=>{
                    const idx = this.waitQueue.findIndex((w2)=>w2.type === "exclusive" && w2.resolve === wrappedResolve);
                    if (idx >= 0) {
                        this.waitQueue.splice(idx, 1);
                    }
                    resolve36();
                };
                ctx.signal.addEventListener("abort", onAbort, {
                    once: true
                });
                this.waitQueue.push({
                    type: "exclusive",
                    resolve: wrappedResolve
                });
            });
            if (ctx.signal.aborted) {
                if (wasGranted) {
                    this.releaseExclusiveLock();
                }
                throw new ToolCallAbortedError();
            }
        } else {
            this.exclusiveLockActive = true;
        }
        let released = false;
        const dispose2 = ()=>{
            if (released) return;
            released = true;
            this.releaseExclusiveLock();
        };
        return {
            [Symbol.dispose]: dispose2
        };
    }
    hasExclusiveWaiterAhead() {
        return this.waitQueue.some((w2)=>w2.type === "exclusive");
    }
    releaseFileLock(pathKey) {
        this.lockedFiles.delete(pathKey);
        this.processQueue();
    }
    releaseExclusiveLock() {
        this.exclusiveLockActive = false;
        this.processQueue();
    }
    processQueue() {
        if (this.exclusiveLockActive) {
            return;
        }
        let i = 0;
        while(i < this.waitQueue.length){
            const waiter = this.waitQueue[i];
            if (waiter.type === "exclusive") {
                if (i === 0 && this.activeFileOperationCount === 0) {
                    this.exclusiveLockActive = true;
                    this.waitQueue.shift();
                    waiter.resolve();
                }
                return;
            }
            if (this.lockedFiles.has(waiter.path)) {
                i++;
                continue;
            }
            this.lockedFiles.add(waiter.path);
            this.waitQueue.splice(i, 1);
            waiter.resolve();
        }
    }
};

}
