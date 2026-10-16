import { E } from "./tslib.es6.js";
import { _9t, f9t, uW, v9t, ytt } from "./ze.js";
var UOd;
export { UOd };
var __wakaru_dxy_initialized = false;
export function dxy() {
if (__wakaru_dxy_initialized) return;
__wakaru_dxy_initialized = true;
"use strict";
E(), ytt(), f9t(), UOd = class extends v9t {
    constructor(t, e, n){
        super(), this._debugNameData = t, this._equalityComparator = n, this._isUpToDate = !0, this._deltas = [], this._updateCounter = 0, this._value = e;
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "LazyObservableValue";
    }
    get() {
        return this._update(), this._value;
    }
    _update() {
        if (!this._isUpToDate) if (this._isUpToDate = !0, this._deltas.length > 0) {
            for (const t of this._deltas){
                uW()?.handleObservableUpdated(this, {
                    change: t,
                    didChange: !0,
                    oldValue: "(unknown)",
                    newValue: this._value,
                    hadValue: !0
                });
                for (const e of this._observers)e.handleChange(this, t);
            }
            this._deltas.length = 0;
        } else {
            uW()?.handleObservableUpdated(this, {
                change: void 0,
                didChange: !0,
                oldValue: "(unknown)",
                newValue: this._value,
                hadValue: !0
            });
            for (const t of this._observers)t.handleChange(this, void 0);
        }
    }
    _beginUpdate() {
        if (this._updateCounter++, this._updateCounter === 1) for (const t of this._observers)t.beginUpdate(this);
    }
    _endUpdate() {
        if (this._updateCounter--, this._updateCounter === 0) {
            this._update();
            const t = [
                ...this._observers
            ];
            for (const e of t)e.endUpdate(this);
        }
    }
    addObserver(t) {
        const e = !this._observers.has(t) && this._updateCounter > 0;
        super.addObserver(t), e && t.beginUpdate(this);
    }
    removeObserver(t) {
        const e = this._observers.has(t) && this._updateCounter > 0;
        super.removeObserver(t), e && t.endUpdate(this);
    }
    set(t, e, n) {
        if (n === void 0 && this._equalityComparator(this._value, t)) return;
        let i;
        e || (e = i = new _9t(()=>{}, ()=>`Setting ${this.debugName}`));
        try {
            if (this._isUpToDate = !1, this._setValue(t), n !== void 0 && this._deltas.push(n), e.updateObserver({
                beginUpdate: ()=>this._beginUpdate(),
                endUpdate: ()=>this._endUpdate(),
                handleChange: (r, s)=>{},
                handlePossibleChange: (r)=>{}
            }, this), this._updateCounter > 1) for (const r of this._observers)r.handlePossibleChange(this);
        } finally{
            i && i.finish();
        }
    }
    toString() {
        return `${this.debugName}: ${this._value}`;
    }
    _setValue(t) {
        this._value = t;
    }
};

}
