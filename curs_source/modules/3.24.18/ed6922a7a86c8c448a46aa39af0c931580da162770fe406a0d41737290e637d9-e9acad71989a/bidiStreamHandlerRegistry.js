import { Se, rn } from "./HVr.js";
import { HU, wde } from "./observableValue.js";
import { j6 } from "./telemetryUtils.js";
import { x } from "./tslib.es6.js";
import { I1e } from "./xmo.js";
var CQi, B0h;
export { B0h, CQi };
var __wakaru_zXv_initialized = false;
export function zXv() {
if (__wakaru_zXv_initialized) return;
__wakaru_zXv_initialized = true;
"use strict";
x(), Se(), wde(), j6(), CQi = class L1r {
    constructor(){
        this._legacyHandler = new HU, this._handlersByAuthority = new Map, this._recentMutations = [];
    }
    get legacyHandlerObservable() {
        return this._legacyHandler;
    }
    register(t, n) {
        const i = I1e(n ?? void 0), r = this._getOrCreateSlot(n), s = r.set(t);
        this._recordMutation("register", "per_authority", i, r.peekWriteVersion());
        const o = this._legacyHandler.set(t);
        return this._recordMutation("register", "legacy", i, this._legacyHandler.peekWriteVersion()), rn(()=>{
            const a = r.peekWriteVersion();
            s.dispose();
            const c = r.peekWriteVersion();
            this._recordMutation(c > a ? "dispose_real_clear" : "dispose_noop", "per_authority", i, c);
            const l = this._legacyHandler.peekWriteVersion();
            o.dispose();
            const u = this._legacyHandler.peekWriteVersion();
            this._recordMutation(u > l ? "dispose_real_clear" : "dispose_noop", "legacy", i, u);
        });
    }
    resolveObservable(t) {
        return this._getOrCreateSlot(t);
    }
    hasNeverRegistered(t) {
        return this._getOrCreateSlot(t).peekWriteVersion() === 0;
    }
    getDiagnostics() {
        const t = [];
        for (const [n, i] of this._handlersByAuthority){
            const r = n === L1r.LOCAL_KEY ? void 0 : n;
            t.push({
                unscrubbedKey: r ?? "local",
                authorityKind: I1e(r),
                state: i.getState().state,
                generation: i.peekWriteVersion()
            });
        }
        return {
            legacy: {
                state: this._legacyHandler.getState().state,
                generation: this._legacyHandler.peekWriteVersion()
            },
            perAuthority: t,
            recentMutations: this._recentMutations.slice()
        };
    }
    _recordMutation(t, n, i, r) {
        this._recentMutations.push({
            atMs: Date.now(),
            action: t,
            slot: n,
            authorityKind: i,
            generation: r
        }), this._recentMutations.length > L1r.MUTATION_HISTORY_CAP && this._recentMutations.shift();
    }
    _getOrCreateSlot(t) {
        let n = L1r.LOCAL_KEY;
        if (t !== null) try {
            n = decodeURIComponent(t).toLowerCase();
        } catch  {
            n = t.toLowerCase();
        }
        let i = this._handlersByAuthority.get(n);
        return i === void 0 && (i = new HU, this._handlersByAuthority.set(n, i)), i;
    }
}, CQi.MUTATION_HISTORY_CAP = 10, CQi.LOCAL_KEY = "\0local", B0h = CQi;

}
