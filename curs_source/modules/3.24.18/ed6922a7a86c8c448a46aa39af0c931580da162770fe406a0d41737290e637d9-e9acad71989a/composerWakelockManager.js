import { Jt, Sv, bM, qn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var X_h;
export { X_h };
var __wakaru_Fjv_initialized = false;
export function Fjv() {
if (__wakaru_Fjv_initialized) return;
__wakaru_Fjv_initialized = true;
"use strict";
x(), qn(), X_h = class {
    constructor(e, t, n, i){
        this._composerHandle = e, this._powerMainService = t, this._logService = n, this._options = i, this._disposed = !1, this._pendingOp = Promise.resolve(), this._composerHandle.data.hasBlockingPendingActions || this._acquire("agent-loop"), this._setupReactiveWatch();
    }
    _acquire(e) {
        this._pendingOp = this._pendingOp.then(async ()=>{
            if (this._disposed || this._wakelockId !== void 0 || this._backgroundThrottlingDisableId !== void 0) return;
            let t, n;
            try {
                t = await this._powerMainService.startWakelock(e);
            } catch (i) {
                this._logService.warn(`[ComposerWakelockManager] Failed to acquire wakelock: ${i}`);
            }
            if (!this._options.backgroundThrottlingDisableRemoteOnlyEnabled || this._options.isRemoteWorkspace) try {
                n = await this._powerMainService.startBackgroundThrottlingDisable(e);
            } catch (i) {
                this._logService.warn(`[ComposerWakelockManager] Failed to disable background throttling: ${i}`);
            }
            if (this._disposed) {
                if (t !== void 0) try {
                    await this._powerMainService.stopWakelock(t);
                } catch (i) {
                    this._logService.warn(`[ComposerWakelockManager] Failed to release wakelock id=${t}: ${i}`);
                }
                if (n !== void 0) try {
                    await this._powerMainService.stopBackgroundThrottlingDisable(n);
                } catch (i) {
                    this._logService.warn(`[ComposerWakelockManager] Failed to restore background throttling id=${n}: ${i}`);
                }
                return;
            }
            this._wakelockId = t, this._backgroundThrottlingDisableId = n, t !== void 0 && this._logService.info(`[ComposerWakelockManager] Acquired wakelock id=${t} reason="${e}" composerId=${this._composerHandle.composerId}`), n !== void 0 && this._logService.info(`[ComposerWakelockManager] Disabled background throttling id=${n} reason="${e}" composerId=${this._composerHandle.composerId}`);
        });
    }
    _release(e) {
        this._pendingOp = this._pendingOp.then(async ()=>{
            const t = this._wakelockId, n = this._backgroundThrottlingDisableId;
            if (!(t === void 0 && n === void 0)) {
                if (this._wakelockId = void 0, this._backgroundThrottlingDisableId = void 0, t !== void 0) try {
                    await this._powerMainService.stopWakelock(t), this._logService.info(`[ComposerWakelockManager] Released wakelock id=${t} reason="${e}" composerId=${this._composerHandle.composerId}`);
                } catch (i) {
                    this._logService.warn(`[ComposerWakelockManager] Failed to release wakelock id=${t}: ${i}`);
                }
                if (n !== void 0) try {
                    await this._powerMainService.stopBackgroundThrottlingDisable(n), this._logService.info(`[ComposerWakelockManager] Restored background throttling id=${n} reason="${e}" composerId=${this._composerHandle.composerId}`);
                } catch (i) {
                    this._logService.warn(`[ComposerWakelockManager] Failed to restore background throttling id=${n}: ${i}`);
                }
            }
        });
    }
    _setupReactiveWatch() {
        this._disposeReactive = bM((e)=>(Jt(Sv(()=>this._composerHandle.data.hasBlockingPendingActions, (t, n)=>{
                this._disposed || (t && !n ? this._release("user-approval-requested") : !t && n && this._acquire("agent-loop-resumed"));
            }, {
                defer: !0
            })), e));
    }
    async whenIdleForTests() {
        let e;
        do e = this._pendingOp, await e;
        while (e !== this._pendingOp)
    }
    dispose() {
        this._disposed || (this._disposed = !0, this._disposeReactive?.(), this._disposeReactive = void 0, this._release("generation-ended"));
    }
};

}
