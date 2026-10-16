import { Nt, Qe } from "./Iwo.js";
import { btt, eB } from "./debugName.js";
import { E } from "./tslib.es6.js";
import { Cbt, Pj, Yte, ytt } from "./ze.js";
var DDp;
export { DDp };
var __wakaru_jx1_initialized = false;
export function jx1() {
if (__wakaru_jx1_initialized) return;
__wakaru_jx1_initialized = true;
"use strict";
E(), Pj(), Qe(), ytt(), btt(), DDp = class extends Cbt {
    constructor(t, e, n, i){
        super(new eB(void 0, `storage/${t.key}`, void 0), s(), Yte), this.opts = t, this.storageScope = e, this.storageTarget = n, this.storageService = i, this._store = new Nt, this._settingValue = !1, this._disposed = !1;
        const r = this._store.add(new Nt);
        this._store.add(i.onDidChangeValue(e, t.key, r)((o)=>{
            this._settingValue || this.set(s(), void 0);
        }));
        function s() {
            const o = i.get(t.key, e);
            if (o !== void 0) try {
                return t.fromStorage(o);
            } catch  {}
            return t.defaultValue;
        }
    }
    set(t, e, n) {
        this._disposed || super.set(t, e, n);
    }
    _setValue(t) {
        try {
            this._settingValue = !0, super._setValue(t), this.storageService.store(this.opts.key, this.opts.toStorage(t), this.storageScope, this.storageTarget);
        } finally{
            this._settingValue = !1;
        }
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = !0;
            for (const t of [
                ...this._observers
            ])this.removeObserver(t);
            this._store.dispose();
        }
    }
};

}
