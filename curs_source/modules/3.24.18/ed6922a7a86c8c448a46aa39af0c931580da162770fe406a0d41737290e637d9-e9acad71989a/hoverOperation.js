import { Qug, Se, bt, ns, si, ve, we } from "./HVr.js";
import { ac, bn } from "./async.js";
import { x } from "./tslib.es6.js";
var L$c, $is, Oyi;
export { $is, L$c, Oyi };
var __wakaru_N$c_initialized = false;
export function N$c() {
if (__wakaru_N$c_initialized) return;
__wakaru_N$c_initialized = true;
"use strict";
x(), bn(), si(), bt(), Se(), L$c = class {
    constructor(e, t, n, i){
        this.value = e, this.isComplete = t, this.hasLoadingMessage = n, this.options = i;
    }
}, $is = class extends we {
    constructor(e, t){
        super(), this._editor = e, this._computer = t, this._onResult = this._register(new ve), this.onResult = this._onResult.event, this._asyncComputationScheduler = this._register(new Oyi((n)=>this._triggerAsyncComputation(n), 0)), this._syncComputationScheduler = this._register(new Oyi((n)=>this._triggerSyncComputation(n), 0)), this._loadingMessageScheduler = this._register(new Oyi((n)=>this._triggerLoadingMessage(n), 0)), this._state = 0, this._asyncIterable = null, this._asyncIterableDone = !1, this._result = [];
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
    _setState(e, t) {
        this._options = t, this._state = e, this._fireResult(t);
    }
    _triggerAsyncComputation(e) {
        this._setState(2, e), this._syncComputationScheduler.schedule(e, this._secondWaitTime), this._computer.computeAsync ? (this._asyncIterableDone = !1, this._asyncIterable = Qug((t)=>this._computer.computeAsync(e, t)), (async ()=>{
            try {
                for await (const t of this._asyncIterable)t && (this._result.push(t), this._fireResult(e));
                this._asyncIterableDone = !0, (this._state === 3 || this._state === 4) && this._setState(0, e);
            } catch (t) {
                ns(t);
            }
        })()) : this._asyncIterableDone = !0;
    }
    _triggerSyncComputation(e) {
        this._computer.computeSync && (this._result = this._result.concat(this._computer.computeSync(e))), this._setState(this._asyncIterableDone ? 0 : 3, e);
    }
    _triggerLoadingMessage(e) {
        this._state === 3 && this._setState(4, e);
    }
    _fireResult(e) {
        if (this._state === 1 || this._state === 2) return;
        const t = this._state === 0, n = this._state === 4;
        this._onResult.fire(new L$c(this._result.slice(0), t, n, e));
    }
    start(e, t) {
        if (e === 0) this._state === 0 && (this._setState(1, t), this._asyncComputationScheduler.schedule(t, this._firstWaitTime), this._loadingMessageScheduler.schedule(t, this._loadingMessageTime));
        else switch(this._state){
            case 0:
                this._triggerAsyncComputation(t), this._syncComputationScheduler.cancel(), this._triggerSyncComputation(t);
                break;
            case 2:
                this._syncComputationScheduler.cancel(), this._triggerSyncComputation(t);
                break;
        }
    }
    cancel() {
        this._asyncComputationScheduler.cancel(), this._syncComputationScheduler.cancel(), this._loadingMessageScheduler.cancel(), this._asyncIterable && (this._asyncIterable.cancel(), this._asyncIterable = null), this._result = [], this._options = void 0, this._state = 0;
    }
    get options() {
        return this._options;
    }
}, Oyi = class extends we {
    constructor(e, t){
        super(), this._scheduler = this._register(new ac(()=>e(this._options), t));
    }
    schedule(e, t) {
        this._options = e, this._scheduler.schedule(t);
    }
    cancel() {
        this._scheduler.cancel();
    }
};

}
