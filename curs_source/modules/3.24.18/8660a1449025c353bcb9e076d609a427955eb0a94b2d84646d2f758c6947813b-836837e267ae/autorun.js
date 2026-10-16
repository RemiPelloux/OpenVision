import { $Xn, AOe, het, xde, xh } from "./Iwo.js";
import { btt, eB } from "./debugName.js";
import { ogn } from "./deps.js";
import { E } from "./tslib.es6.js";
import { f9t, uW } from "./ze.js";
function Jd(t) {
    return new cgn(new eB(void 0, void 0, t), t, void 0, void 0);
}
var cgn;
export { Jd, cgn };
var __wakaru_Rkr_initialized = false;
export function Rkr() {
if (__wakaru_Rkr_initialized) return;
__wakaru_Rkr_initialized = true;
"use strict";
E(), btt(), ogn(), f9t(), cgn = class {
    constructor(t, e, n, i){
        this._debugNameData = t, this._runFn = e, this.createChangeSummary = n, this._handleChange = i, this._state = 2, this._updateCount = 0, this._disposed = !1, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._isRunning = !1, this._changeSummary = this.createChangeSummary?.(), uW()?.handleAutorunCreated(this), this._run(), het(this);
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)";
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = !0;
            for (const t of this._dependencies)t.removeObserver(this);
            this._dependencies.clear(), uW()?.handleAutorunDisposed(this), AOe(this);
        }
    }
    _run() {
        const t = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = t, this._state = 3;
        try {
            if (!this._disposed) {
                uW()?.handleAutorunStarted(this);
                const e = this._changeSummary;
                try {
                    this._changeSummary = this.createChangeSummary?.(), this._isRunning = !0, this._runFn(this, e);
                } catch (n) {
                    $Xn(n);
                } finally{
                    this._isRunning = !1;
                }
            }
        } finally{
            this._disposed || uW()?.handleAutorunFinished(this);
            for (const e of this._dependenciesToBeRemoved)e.removeObserver(this);
            this._dependenciesToBeRemoved.clear();
        }
    }
    toString() {
        return `Autorun<${this.debugName}>`;
    }
    beginUpdate(t) {
        this._state === 3 && (this._state = 1), this._updateCount++;
    }
    endUpdate(t) {
        try {
            if (this._updateCount === 1) do {
                if (this._state === 1) {
                    this._state = 3;
                    for (const e of this._dependencies)if (e.reportChanges(), this._state === 2) break;
                }
                this._state !== 3 && this._run();
            }while (this._state !== 3)
        } finally{
            this._updateCount--;
        }
        xde(()=>this._updateCount >= 0);
    }
    handlePossibleChange(t) {
        this._state === 3 && this._isDependency(t) && (this._state = 1);
    }
    handleChange(t, e) {
        if (this._isDependency(t)) {
            uW()?.handleAutorunDependencyChanged(this, t, e);
            try {
                (this._handleChange ? this._handleChange({
                    changedObservable: t,
                    change: e,
                    didChange: (i)=>i === t
                }, this._changeSummary) : !0) && (this._state = 2);
            } catch (n) {
                $Xn(n);
            }
        }
    }
    _isDependency(t) {
        return this._dependencies.has(t) && !this._dependenciesToBeRemoved.has(t);
    }
    readObservable(t) {
        if (!this._isRunning) throw new xh("The reader object cannot be used outside its compute function!");
        if (this._disposed) return t.get();
        t.addObserver(this);
        const e = t.get();
        return this._dependencies.add(t), this._dependenciesToBeRemoved.delete(t), e;
    }
    debugGetState() {
        return {
            isRunning: this._isRunning,
            updateCount: this._updateCount,
            dependencies: this._dependencies,
            state: this._state
        };
    }
    debugRerun() {
        this._isRunning ? this._state = 2 : this._run();
    }
}, ((t)=>{
    t.Observer = cgn;
})(Jd || (Jd = {}));

}
