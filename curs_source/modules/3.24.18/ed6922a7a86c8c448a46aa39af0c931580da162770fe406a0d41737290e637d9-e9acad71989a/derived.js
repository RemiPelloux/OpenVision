import { Zu, kpn, rJ } from "./HVr.js";
import { uBe } from "./debugName.js";
import { ZNt } from "./deps.js";
import { Lht, Pht, Xdg, g3, hBe, q9 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var TK, XRc;
export { TK, XRc };
var __wakaru_n2t_initialized = false;
export function n2t() {
if (__wakaru_n2t_initialized) return;
__wakaru_n2t_initialized = true;
"use strict";
x(), hBe(), uBe(), ZNt(), Pht(), Xdg(g3), TK = class extends Lht {
    constructor(e, t, n, i, r = void 0, s){
        super(), this._debugNameData = e, this._computeFn = t, this.createChangeSummary = n, this._handleChange = i, this._handleLastObserverRemoved = r, this._equalityComparator = s, this._state = 0, this._value = void 0, this._updateCount = 0, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._changeSummary = void 0, this._isUpdating = !1, this._isComputing = !1, this._removedObserverToCallEndUpdateOn = null, this._isReaderValid = !1, this._changeSummary = this.createChangeSummary?.();
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)";
    }
    onLastObserverRemoved() {
        this._state = 0, this._value = void 0, q9()?.handleDerivedCleared(this);
        for (const e of this._dependencies)e.removeObserver(this);
        this._dependencies.clear(), this._handleLastObserverRemoved?.();
    }
    get() {
        if (this._isComputing, this._observers.size === 0) {
            let t;
            try {
                this._isReaderValid = !0, t = this._computeFn(this, this.createChangeSummary?.());
            } finally{
                this._isReaderValid = !1;
            }
            return this.onLastObserverRemoved(), t;
        } else {
            do {
                if (this._state === 1) {
                    for (const t of this._dependencies)if (t.reportChanges(), this._state === 2) break;
                }
                this._state === 1 && (this._state = 3), this._state !== 3 && this._recompute();
            }while (this._state !== 3)
            return this._value;
        }
    }
    _recompute() {
        const e = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e;
        const t = this._state !== 0, n = this._value;
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
            i = t && !this._equalityComparator(n, this._value), q9()?.handleObservableUpdated(this, {
                oldValue: n,
                newValue: this._value,
                change: void 0,
                didChange: i,
                hadValue: t
            });
        } catch (r) {
            kpn(r);
        }
        if (this._isComputing = !1, i) for (const r of this._observers)r.handleChange(this, void 0);
    }
    toString() {
        return `LazyDerived<${this.debugName}>`;
    }
    beginUpdate(e) {
        if (this._isUpdating) throw new Zu("Cyclic deriveds are not supported yet!");
        this._updateCount++, this._isUpdating = !0;
        try {
            const t = this._updateCount === 1;
            if (this._state === 3 && (this._state = 1, !t)) for (const n of this._observers)n.handlePossibleChange(this);
            if (t) for (const n of this._observers)n.beginUpdate(this);
        } finally{
            this._isUpdating = !1;
        }
    }
    endUpdate(e) {
        if (this._updateCount--, this._updateCount === 0) {
            const t = [
                ...this._observers
            ];
            for (const n of t)n.endUpdate(this);
            if (this._removedObserverToCallEndUpdateOn) {
                const n = [
                    ...this._removedObserverToCallEndUpdateOn
                ];
                this._removedObserverToCallEndUpdateOn = null;
                for (const i of n)i.endUpdate(this);
            }
        }
        rJ(()=>this._updateCount >= 0);
    }
    handlePossibleChange(e) {
        if (this._state === 3 && this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
            this._state = 1;
            for (const t of this._observers)t.handlePossibleChange(this);
        }
    }
    handleChange(e, t) {
        if (this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
            q9()?.handleDerivedDependencyChanged(this, e, t);
            let n = !1;
            try {
                n = this._handleChange ? this._handleChange({
                    changedObservable: e,
                    change: t,
                    didChange: (r)=>r === e
                }, this._changeSummary) : !0;
            } catch (r) {
                kpn(r);
            }
            const i = this._state === 3;
            if (n && (this._state === 1 || i) && (this._state = 2, i)) for (const r of this._observers)r.handlePossibleChange(this);
        }
    }
    readObservable(e) {
        if (!this._isReaderValid) throw new Zu("The reader object cannot be used outside its compute function!");
        e.addObserver(this);
        const t = e.get();
        return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t;
    }
    addObserver(e) {
        const t = !this._observers.has(e) && this._updateCount > 0;
        super.addObserver(e), t && (this._removedObserverToCallEndUpdateOn && this._removedObserverToCallEndUpdateOn.has(e) ? this._removedObserverToCallEndUpdateOn.delete(e) : e.beginUpdate(this));
    }
    removeObserver(e) {
        this._observers.has(e) && this._updateCount > 0 && (this._removedObserverToCallEndUpdateOn || (this._removedObserverToCallEndUpdateOn = new Set), this._removedObserverToCallEndUpdateOn.add(e)), super.removeObserver(e);
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
    debugSetValue(e) {
        this._value = e;
    }
}, XRc = class extends TK {
    constructor(e, t, n, i, r = void 0, s, o){
        super(e, t, n, i, r, s), this.set = o;
    }
};

}
