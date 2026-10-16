import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { PRt } from "./glass-diff-utils.js";
import { Ldt, Pt_ } from "./glass-diff-virtualization-constants.js";
import { It } from "./instantiation.js";
import { $pc, Ht_ } from "./monaco-list-virtualizer.js";
import { DFi, qS0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
var _Os, Wt_;
export { Wt_, _Os };
var __wakaru_Hpc_initialized = false;
export function Hpc() {
if (__wakaru_Hpc_initialized) return;
__wakaru_Hpc_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), PRt(), Ldt(), Ht_(), _Os = jn("glassDiffVirtualizationService"), Wt_ = class extends st {
    constructor(){
        super(...arguments), this._virtualizers = new Map, this._inactiveVirtualizerLruKeys = [], this._activeViewKey = this._getVirtualizerKey({
            scope: "unstaged"
        });
    }
    syncView(t) {
        const e = this._getVirtualizerKey(t);
        if (this._activeViewKey === e) {
            this._touchVirtualizer(e);
            return;
        }
        const n = this._activeViewKey;
        this._virtualizers.get(n)?.deactivateForScopeSwitch(), this._activeViewKey = e, this._markVirtualizerInactive(n), this._getOrCreateVirtualizer(t);
    }
    getVirtualizer(t) {
        return this._getOrCreateVirtualizer(t);
    }
    getActiveView() {
        return qS0(this._activeViewKey);
    }
    getActiveVirtualizer() {
        return this.getVirtualizer(this.getActiveView());
    }
    _getOrCreateVirtualizer(t) {
        const e = this._getVirtualizerKey(t), n = this._virtualizers.get(e);
        if (n) return this._touchVirtualizer(e), n;
        const i = new $pc;
        return this._virtualizers.set(e, i), this._touchVirtualizer(e), this._evictInactiveVirtualizersIfNeeded(), i;
    }
    _getVirtualizerKey(t) {
        return `${t.scope}:${DFi(t.subPath)}`;
    }
    _markVirtualizerActive(t) {
        const e = this._inactiveVirtualizerLruKeys.indexOf(t);
        e >= 0 && this._inactiveVirtualizerLruKeys.splice(e, 1);
    }
    _touchVirtualizer(t) {
        if (t === this._activeViewKey) {
            this._markVirtualizerActive(t);
            return;
        }
        this._markVirtualizerInactive(t);
    }
    _markVirtualizerInactive(t) {
        if (!this._virtualizers.has(t) || t === this._activeViewKey) return;
        const e = this._inactiveVirtualizerLruKeys.indexOf(t);
        e >= 0 && this._inactiveVirtualizerLruKeys.splice(e, 1), this._inactiveVirtualizerLruKeys.push(t), this._evictInactiveVirtualizersIfNeeded();
    }
    _evictInactiveVirtualizersIfNeeded() {
        for(; this._inactiveVirtualizerLruKeys.length > Pt_;){
            const t = this._inactiveVirtualizerLruKeys.shift();
            if (!t || t === this._activeViewKey) continue;
            const e = this._virtualizers.get(t);
            e && (this._virtualizers.delete(t), e.dispose());
        }
    }
    dispose() {
        for (const t of this._virtualizers.values())t.dispose();
        this._virtualizers.clear(), this._inactiveVirtualizerLruKeys.length = 0, super.dispose();
    }
}, bn(_Os, Wt_, 1);

}
