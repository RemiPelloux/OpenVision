import { $Xn, xde, xh } from "./Iwo.js";
import { btt } from "./debugName.js";
import { ogn } from "./deps.js";
import { E } from "./tslib.es6.js";
import { b7, cxy, f9t, uW, v9t, ytt } from "./ze.js";
var ioe, jOd;
export { ioe, jOd };
var __wakaru_ugn_initialized = false;
export function ugn() {
if (__wakaru_ugn_initialized) return;
__wakaru_ugn_initialized = true;
"use strict";
E(), ytt(), btt(), ogn(), f9t(), cxy(b7), ioe = class extends v9t {
    constructor(t, e, n, i, r = void 0, s){
        super(), this._debugNameData = t, this._computeFn = e, this.createChangeSummary = n, this._handleChange = i, this._handleLastObserverRemoved = r, this._equalityComparator = s, this._state = 0, this._value = void 0, this._updateCount = 0, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._changeSummary = void 0, this._isUpdating = !1, this._isComputing = !1, this._removedObserverToCallEndUpdateOn = null, this._isReaderValid = !1, this._changeSummary = this.createChangeSummary?.();
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)";
    }
    onLastObserverRemoved() {
        this._state = 0, this._value = void 0, uW()?.handleDerivedCleared(this);
        for (const t of this._dependencies)t.removeObserver(this);
        this._dependencies.clear(), this._handleLastObserverRemoved?.();
    }
    get() {
        if (this._isComputing, this._observers.size === 0) {
            let e;
            try {
                this._isReaderValid = !0, e = this._computeFn(this, this.createChangeSummary?.());
            } finally{
                this._isReaderValid = !1;
            }
            return this.onLastObserverRemoved(), e;
        } else {
            do {
                if (this._state === 1) {
                    for (const e of this._dependencies)if (e.reportChanges(), this._state === 2) break;
                }
                this._state === 1 && (this._state = 3), this._state !== 3 && this._recompute();
            }while (this._state !== 3)
            return this._value;
        }
    }
    _recompute() {
        const t = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = t;
        const e = this._state !== 0, n = this._value;
        this._state = 3;
        let i = !1;
        this._isComputing = !0;
        try {
            const r = this._changeSummary;
            this._changeSummary = this.createChangeSummary?.();
            try {
                this._isReaderValid = !0, this._value = this._computeFn(this, r);
            } finally{
                this._isReaderValid = !1;
                for (const s of this._dependenciesToBeRemoved)s.removeObserver(this);
                this._dependenciesToBeRemoved.clear();
            }
            i = e && !this._equalityComparator(n, this._value), uW()?.handleObservableUpdated(this, {
                oldValue: n,
                newValue: this._value,
                change: void 0,
                didChange: i,
                hadValue: e
            });
        } catch (r) {
            $Xn(r);
        }
        if (this._isComputing = !1, i) for (const r of this._observers)r.handleChange(this, void 0);
    }
    toString() {
        return `LazyDerived<${this.debugName}>`;
    }
    beginUpdate(t) {
        if (this._isUpdating) throw new xh("Cyclic deriveds are not supported yet!");
        this._updateCount++, this._isUpdating = !0;
        try {
            const e = this._updateCount === 1;
            if (this._state === 3 && (this._state = 1, !e)) for (const n of this._observers)n.handlePossibleChange(this);
            if (e) for (const n of this._observers)n.beginUpdate(this);
        } finally{
            this._isUpdating = !1;
        }
    }
    endUpdate(t) {
        if (this._updateCount--, this._updateCount === 0) {
            const e = [
                ...this._observers
            ];
            for (const n of e)n.endUpdate(this);
            if (this._removedObserverToCallEndUpdateOn) {
                const n = [
                    ...this._removedObserverToCallEndUpdateOn
                ];
                this._removedObserverToCallEndUpdateOn = null;
                for (const i of n)i.endUpdate(this);
            }
        }
        xde(()=>this._updateCount >= 0);
    }
    handlePossibleChange(t) {
        if (this._state === 3 && this._dependencies.has(t) && !this._dependenciesToBeRemoved.has(t)) {
            this._state = 1;
            for (const e of this._observers)e.handlePossibleChange(this);
        }
    }
    handleChange(t, e) {
        if (this._dependencies.has(t) && !this._dependenciesToBeRemoved.has(t)) {
            uW()?.handleDerivedDependencyChanged(this, t, e);
            let n = !1;
            try {
                n = this._handleChange ? this._handleChange({
                    changedObservable: t,
                    change: e,
                    didChange: (r)=>r === t
                }, this._changeSummary) : !0;
            } catch (r) {
                $Xn(r);
            }
            const i = this._state === 3;
            if (n && (this._state === 1 || i) && (this._state = 2, i)) for (const r of this._observers)r.handlePossibleChange(this);
        }
    }
    readObservable(t) {
        if (!this._isReaderValid) throw new xh("The reader object cannot be used outside its compute function!");
        t.addObserver(this);
        const e = t.get();
        return this._dependencies.add(t), this._dependenciesToBeRemoved.delete(t), e;
    }
    addObserver(t) {
        const e = !this._observers.has(t) && this._updateCount > 0;
        super.addObserver(t), e && (this._removedObserverToCallEndUpdateOn && this._removedObserverToCallEndUpdateOn.has(t) ? this._removedObserverToCallEndUpdateOn.delete(t) : t.beginUpdate(this));
    }
    removeObserver(t) {
        this._observers.has(t) && this._updateCount > 0 && (this._removedObserverToCallEndUpdateOn || (this._removedObserverToCallEndUpdateOn = new Set), this._removedObserverToCallEndUpdateOn.add(t)), super.removeObserver(t);
    }
    debugGetState() {
        return {
            state: this._state,
            updateCount: this._updateCount,
            isComputing: this._isComputing,
            dependencies: this._dependencies,
            value: this._value
        };
    }
    debugSetValue(t) {
        this._value = t;
    }
}, jOd = class extends ioe {
    constructor(t, e, n, i, r = void 0, s, o){
        super(t, e, n, i, r, s), this.set = o;
    }
};

}
