import { Pn, Qe } from "./Iwo.js";
import { E4e } from "./gYa.js";
import { Yz, cCe } from "./observableValue.js";
import { uV } from "./telemetryUtils.js";
import { E } from "./tslib.es6.js";
var tos, idg;
export { idg, tos };
var __wakaru_K_k_initialized = false;
export function K_k() {
if (__wakaru_K_k_initialized) return;
__wakaru_K_k_initialized = true;
"use strict";
E(), Qe(), cCe(), uV(), tos = class EXs {
    constructor(){
        this._legacyHandler = new Yz, this._handlersByAuthority = new Map, this._recentMutations = [];
    }
    get legacyHandlerObservable() {
        return this._legacyHandler;
    }
    register(e, n) {
        const i = E4e(n ?? void 0), r = this._getOrCreateSlot(n), s = r.set(e);
        this._recordMutation("register", "per_authority", i, r.peekWriteVersion());
        const o = this._legacyHandler.set(e);
        return this._recordMutation("register", "legacy", i, this._legacyHandler.peekWriteVersion()), Pn(()=>{
            const a = r.peekWriteVersion();
            s.dispose();
            const l = r.peekWriteVersion();
            this._recordMutation(l > a ? "dispose_real_clear" : "dispose_noop", "per_authority", i, l);
            const c = this._legacyHandler.peekWriteVersion();
            o.dispose();
            const u = this._legacyHandler.peekWriteVersion();
            this._recordMutation(u > c ? "dispose_real_clear" : "dispose_noop", "legacy", i, u);
        });
    }
    resolveObservable(e) {
        return this._getOrCreateSlot(e);
    }
    hasNeverRegistered(e) {
        return this._getOrCreateSlot(e).peekWriteVersion() === 0;
    }
    getDiagnostics() {
        const e = [];
        for (const [n, i] of this._handlersByAuthority){
            const r = n === EXs.LOCAL_KEY ? void 0 : n;
            e.push({
                unscrubbedKey: r ?? "local",
                authorityKind: E4e(r),
                state: i.getState().state,
                generation: i.peekWriteVersion()
            });
        }
        return {
            legacy: {
                state: this._legacyHandler.getState().state,
                generation: this._legacyHandler.peekWriteVersion()
            },
            perAuthority: e,
            recentMutations: this._recentMutations.slice()
        };
    }
    _recordMutation(e, n, i, r) {
        this._recentMutations.push({
            atMs: Date.now(),
            action: e,
            slot: n,
            authorityKind: i,
            generation: r
        }), this._recentMutations.length > EXs.MUTATION_HISTORY_CAP && this._recentMutations.shift();
    }
    _getOrCreateSlot(e) {
        let n = EXs.LOCAL_KEY;
        if (e !== null) try {
            n = decodeURIComponent(e).toLowerCase();
        } catch  {
            n = e.toLowerCase();
        }
        let i = this._handlersByAuthority.get(n);
        return i === void 0 && (i = new Yz, this._handlersByAuthority.set(n, i)), i;
    }
}, tos.MUTATION_HISTORY_CAP = 10, tos.LOCAL_KEY = "\0local", idg = tos;

}
