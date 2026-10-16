import { Zu, ewe, j3e, kpn, rJ } from "./HVr.js";
import { EO, uBe } from "./debugName.js";
import { ZNt } from "./deps.js";
import { Pht, q9 } from "./qIc.js";
import { x } from "./tslib.es6.js";
function Hc(e) {
    return new t2t(new EO(void 0, void 0, e), e, void 0, void 0);
}
var t2t;
export { Hc, t2t };
var __wakaru_Dmn_initialized = false;
export function Dmn() {
if (__wakaru_Dmn_initialized) return;
__wakaru_Dmn_initialized = true;
"use strict";
x(), uBe(), ZNt(), Pht(), t2t = class {
    constructor(e, t, n, i){
        this._debugNameData = e, this._runFn = t, this.createChangeSummary = n, this._handleChange = i, this._state = 2, this._updateCount = 0, this._disposed = !1, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._isRunning = !1, this._changeSummary = this.createChangeSummary?.(), q9()?.handleAutorunCreated(this), this._run(), j3e(this);
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)";
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = !0;
            for (const e of this._dependencies)e.removeObserver(this);
            this._dependencies.clear(), q9()?.handleAutorunDisposed(this), ewe(this);
        }
    }
    _run() {
        const e = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e, this._state = 3;
        try {
            if (!this._disposed) {
                q9()?.handleAutorunStarted(this);
                const t = this._changeSummary;
                try {
                    this._changeSummary = this.createChangeSummary?.(), this._isRunning = !0, this._runFn(this, t);
                } catch (n) {
                    kpn(n);
                } finally{
                    this._isRunning = !1;
                }
            }
        } finally{
            this._disposed || q9()?.handleAutorunFinished(this);
            for (const t of this._dependenciesToBeRemoved)t.removeObserver(this);
            this._dependenciesToBeRemoved.clear();
        }
    }
    toString() {
        return `Autorun<${this.debugName}>`;
    }
    beginUpdate(e) {
        this._state === 3 && (this._state = 1), this._updateCount++;
    }
    endUpdate(e) {
        try {
            if (this._updateCount === 1) do {
                if (this._state === 1) {
                    this._state = 3;
                    for (const t of this._dependencies)if (t.reportChanges(), this._state === 2) break;
                }
                this._state !== 3 && this._run();
            }while (this._state !== 3)
        } finally{
            this._updateCount--;
        }
        rJ(()=>this._updateCount >= 0);
    }
    handlePossibleChange(e) {
        this._state === 3 && this._isDependency(e) && (this._state = 1);
    }
    handleChange(e, t) {
        if (this._isDependency(e)) {
            q9()?.handleAutorunDependencyChanged(this, e, t);
            try {
                (this._handleChange ? this._handleChange({
                    changedObservable: e,
                    change: t,
                    didChange: (i)=>i === e
                }, this._changeSummary) : !0) && (this._state = 2);
            } catch (n) {
                kpn(n);
            }
        }
    }
    _isDependency(e) {
        return this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e);
    }
    readObservable(e) {
        if (!this._isRunning) throw new Zu("The reader object cannot be used outside its compute function!");
        if (this._disposed) return e.get();
        e.addObserver(this);
        const t = e.get();
        return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t;
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
}, ((e)=>{
    e.Observer = t2t;
})(Hc || (Hc = {}));

}
