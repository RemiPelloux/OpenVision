import { Lht, Nht, Pht, hBe, q9 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var YRc;
export { YRc };
var __wakaru_Qdg_initialized = false;
export function Qdg() {
if (__wakaru_Qdg_initialized) return;
__wakaru_Qdg_initialized = true;
"use strict";
x(), hBe(), Pht(), YRc = class extends Lht {
    constructor(e, t, n){
        super(), this._debugNameData = e, this._equalityComparator = n, this._isUpToDate = !0, this._deltas = [], this._updateCounter = 0, this._value = t;
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "LazyObservableValue";
    }
    get() {
        return this._update(), this._value;
    }
    _update() {
        if (!this._isUpToDate) if (this._isUpToDate = !0, this._deltas.length > 0) {
            for (const e of this._deltas){
                q9()?.handleObservableUpdated(this, {
                    change: e,
                    didChange: !0,
                    oldValue: "(unknown)",
                    newValue: this._value,
                    hadValue: !0
                });
                for (const t of this._observers)t.handleChange(this, e);
            }
            this._deltas.length = 0;
        } else {
            q9()?.handleObservableUpdated(this, {
                change: void 0,
                didChange: !0,
                oldValue: "(unknown)",
                newValue: this._value,
                hadValue: !0
            });
            for (const e of this._observers)e.handleChange(this, void 0);
        }
    }
    _beginUpdate() {
        if (this._updateCounter++, this._updateCounter === 1) for (const e of this._observers)e.beginUpdate(this);
    }
    _endUpdate() {
        if (this._updateCounter--, this._updateCounter === 0) {
            this._update();
            const e = [
                ...this._observers
            ];
            for (const t of e)t.endUpdate(this);
        }
    }
    addObserver(e) {
        const t = !this._observers.has(e) && this._updateCounter > 0;
        super.addObserver(e), t && e.beginUpdate(this);
    }
    removeObserver(e) {
        const t = this._observers.has(e) && this._updateCounter > 0;
        super.removeObserver(e), t && e.endUpdate(this);
    }
    set(e, t, n) {
        if (n === void 0 && this._equalityComparator(this._value, e)) return;
        let i;
        t || (t = i = new Nht(()=>{}, ()=>`Setting ${this.debugName}`));
        try {
            if (this._isUpToDate = !1, this._setValue(e), n !== void 0 && this._deltas.push(n), t.updateObserver({
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
    _setValue(e) {
        this._value = e;
    }
};

}
