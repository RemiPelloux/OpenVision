import { E } from "./tslib.es6.js";
import { Cn, V_, gA, pi } from "./ze.js";
var urg;
export { urg };
var __wakaru_tmk_initialized = false;
export function tmk() {
if (__wakaru_tmk_initialized) return;
__wakaru_tmk_initialized = true;
"use strict";
E(), pi(), urg = class {
    constructor(t, e, n, i){
        this._composerHandle = t, this._powerMainService = e, this._logService = n, this._options = i, this._disposed = !1, this._pendingOp = Promise.resolve(), this._composerHandle.data.hasBlockingPendingActions || this._acquire("agent-loop"), this._setupReactiveWatch();
    }
    _acquire(t) {
        this._pendingOp = this._pendingOp.then(async ()=>{
            if (this._disposed || this._wakelockId !== void 0 || this._backgroundThrottlingDisableId !== void 0) return;
            let e, n;
            try {
                e = await this._powerMainService.startWakelock(t);
            } catch (i) {
                this._logService.warn(`[ComposerWakelockManager] Failed to acquire wakelock: ${i}`);
            }
            if (!this._options.backgroundThrottlingDisableRemoteOnlyEnabled || this._options.isRemoteWorkspace) try {
                n = await this._powerMainService.startBackgroundThrottlingDisable(t);
            } catch (i) {
                this._logService.warn(`[ComposerWakelockManager] Failed to disable background throttling: ${i}`);
            }
            if (this._disposed) {
                if (e !== void 0) try {
                    await this._powerMainService.stopWakelock(e);
                } catch (i) {
                    this._logService.warn(`[ComposerWakelockManager] Failed to release wakelock id=${e}: ${i}`);
                }
                if (n !== void 0) try {
                    await this._powerMainService.stopBackgroundThrottlingDisable(n);
                } catch (i) {
                    this._logService.warn(`[ComposerWakelockManager] Failed to restore background throttling id=${n}: ${i}`);
                }
                return;
            }
            this._wakelockId = e, this._backgroundThrottlingDisableId = n, e !== void 0 && this._logService.info(`[ComposerWakelockManager] Acquired wakelock id=${e} reason="${t}" composerId=${this._composerHandle.composerId}`), n !== void 0 && this._logService.info(`[ComposerWakelockManager] Disabled background throttling id=${n} reason="${t}" composerId=${this._composerHandle.composerId}`);
        });
    }
    _release(t) {
        this._pendingOp = this._pendingOp.then(async ()=>{
            const e = this._wakelockId, n = this._backgroundThrottlingDisableId;
            if (!(e === void 0 && n === void 0)) {
                if (this._wakelockId = void 0, this._backgroundThrottlingDisableId = void 0, e !== void 0) try {
                    await this._powerMainService.stopWakelock(e), this._logService.info(`[ComposerWakelockManager] Released wakelock id=${e} reason="${t}" composerId=${this._composerHandle.composerId}`);
                } catch (i) {
                    this._logService.warn(`[ComposerWakelockManager] Failed to release wakelock id=${e}: ${i}`);
                }
                if (n !== void 0) try {
                    await this._powerMainService.stopBackgroundThrottlingDisable(n), this._logService.info(`[ComposerWakelockManager] Restored background throttling id=${n} reason="${t}" composerId=${this._composerHandle.composerId}`);
                } catch (i) {
                    this._logService.warn(`[ComposerWakelockManager] Failed to restore background throttling id=${n}: ${i}`);
                }
            }
        });
    }
    _setupReactiveWatch() {
        this._disposeReactive = gA((t)=>(Cn(V_(()=>this._composerHandle.data.hasBlockingPendingActions, (e, n)=>{
                this._disposed || (e && !n ? this._release("user-approval-requested") : !e && n && this._acquire("agent-loop-resumed"));
            }, {
                defer: !0
            })), t));
    }
    async whenIdleForTests() {
        let t;
        do t = this._pendingOp, await t;
        while (t !== this._pendingOp)
    }
    dispose() {
        this._disposed || (this._disposed = !0, this._disposeReactive?.(), this._disposeReactive = void 0, this._release("generation-ended"));
    }
};

}
