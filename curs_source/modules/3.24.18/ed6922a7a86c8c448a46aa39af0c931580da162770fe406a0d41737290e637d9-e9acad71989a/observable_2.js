import { He, Se } from "./HVr.js";
import { EO, uBe } from "./debugName.js";
import { Jie, Kqe, PV, hBe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var rCu;
export { rCu };
var __wakaru_Qcv_initialized = false;
export function Qcv() {
if (__wakaru_Qcv_initialized) return;
__wakaru_Qcv_initialized = true;
"use strict";
x(), Jie(), Se(), hBe(), uBe(), rCu = class extends Kqe {
    constructor(e, t, n, i){
        super(new EO(void 0, `storage/${e.key}`, void 0), s(), PV), this.opts = e, this.storageScope = t, this.storageTarget = n, this.storageService = i, this._store = new He, this._settingValue = !1, this._disposed = !1;
        const r = this._store.add(new He);
        this._store.add(i.onDidChangeValue(t, e.key, r)((o)=>{
            this._settingValue || this.set(s(), void 0);
        }));
        function s() {
            const o = i.get(e.key, t);
            if (o !== void 0) try {
                return e.fromStorage(o);
            } catch  {}
            return e.defaultValue;
        }
    }
    set(e, t, n) {
        this._disposed || super.set(e, t, n);
    }
    _setValue(e) {
        try {
            this._settingValue = !0, super._setValue(e), this.storageService.store(this.opts.key, this.opts.toStorage(e), this.storageScope, this.storageTarget);
        } finally{
            this._settingValue = !1;
        }
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = !0;
            for (const e of [
                ...this._observers
            ])this.removeObserver(e);
            this._store.dispose();
        }
    }
};

}
