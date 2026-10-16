import { Ei, Gt, Lby, Qe, st, tt, xr } from "./Iwo.js";
import { Yu, qn } from "./async.js";
import { E } from "./tslib.es6.js";
var EVd, pzo, PEr;
export { EVd, PEr, pzo };
var __wakaru_IVd_initialized = false;
export function IVd() {
if (__wakaru_IVd_initialized) return;
__wakaru_IVd_initialized = true;
"use strict";
E(), qn(), Ei(), Gt(), Qe(), EVd = class {
    constructor(t, e, n, i){
        this.value = t, this.isComplete = e, this.hasLoadingMessage = n, this.options = i;
    }
}, pzo = class extends st {
    constructor(t, e){
        super(), this._editor = t, this._computer = e, this._onResult = this._register(new tt), this.onResult = this._onResult.event, this._asyncComputationScheduler = this._register(new PEr((n)=>this._triggerAsyncComputation(n), 0)), this._syncComputationScheduler = this._register(new PEr((n)=>this._triggerSyncComputation(n), 0)), this._loadingMessageScheduler = this._register(new PEr((n)=>this._triggerLoadingMessage(n), 0)), this._state = 0, this._asyncIterable = null, this._asyncIterableDone = !1, this._result = [];
    }
    dispose() {
        this._asyncIterable && (this._asyncIterable.cancel(), this._asyncIterable = null), this._options = void 0, super.dispose();
    }
    get _hoverTime() {
        return this._editor.getOption(62).delay;
    }
    get _firstWaitTime() {
        return this._hoverTime / 2;
    }
    get _secondWaitTime() {
        return this._hoverTime - this._firstWaitTime;
    }
    get _loadingMessageTime() {
        return 3 * this._hoverTime;
    }
    _setState(t, e) {
        this._options = e, this._state = t, this._fireResult(e);
    }
    _triggerAsyncComputation(t) {
        this._setState(2, t), this._syncComputationScheduler.schedule(t, this._secondWaitTime), this._computer.computeAsync ? (this._asyncIterableDone = !1, this._asyncIterable = Lby((e)=>this._computer.computeAsync(t, e)), (async ()=>{
            try {
                for await (const e of this._asyncIterable)e && (this._result.push(e), this._fireResult(t));
                this._asyncIterableDone = !0, (this._state === 3 || this._state === 4) && this._setState(0, t);
            } catch (e) {
                xr(e);
            }
        })()) : this._asyncIterableDone = !0;
    }
    _triggerSyncComputation(t) {
        this._computer.computeSync && (this._result = this._result.concat(this._computer.computeSync(t))), this._setState(this._asyncIterableDone ? 0 : 3, t);
    }
    _triggerLoadingMessage(t) {
        this._state === 3 && this._setState(4, t);
    }
    _fireResult(t) {
        if (this._state === 1 || this._state === 2) return;
        const e = this._state === 0, n = this._state === 4;
        this._onResult.fire(new EVd(this._result.slice(0), e, n, t));
    }
    start(t, e) {
        if (t === 0) this._state === 0 && (this._setState(1, e), this._asyncComputationScheduler.schedule(e, this._firstWaitTime), this._loadingMessageScheduler.schedule(e, this._loadingMessageTime));
        else switch(this._state){
            case 0:
                this._triggerAsyncComputation(e), this._syncComputationScheduler.cancel(), this._triggerSyncComputation(e);
                break;
            case 2:
                this._syncComputationScheduler.cancel(), this._triggerSyncComputation(e);
                break;
        }
    }
    cancel() {
        this._asyncComputationScheduler.cancel(), this._syncComputationScheduler.cancel(), this._loadingMessageScheduler.cancel(), this._asyncIterable && (this._asyncIterable.cancel(), this._asyncIterable = null), this._result = [], this._options = void 0, this._state = 0;
    }
    get options() {
        return this._options;
    }
}, PEr = class extends st {
    constructor(t, e){
        super(), this._scheduler = this._register(new Yu(()=>t(this._options), e));
    }
    schedule(t, e) {
        this._options = t, this._scheduler.schedule(e);
    }
    cancel() {
        this._scheduler.cancel();
    }
};

}
