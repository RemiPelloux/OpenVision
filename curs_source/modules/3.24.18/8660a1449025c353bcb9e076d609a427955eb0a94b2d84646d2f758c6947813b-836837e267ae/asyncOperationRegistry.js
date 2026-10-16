import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var sat, Reg;
export { Reg, sat };
var __wakaru_fTt_initialized = false;
export function fTt() {
if (__wakaru_fTt_initialized) return;
__wakaru_fTt_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), sat = jn("asyncOperationRegistry"), Reg = class extends st {
    constructor(){
        super(), this._activeOperations = new Map;
    }
    enter(t, e, n) {
        let i = this._activeOperations.get(t);
        i || (i = new Map, this._activeOperations.set(t, i));
        const r = i.get(e);
        r ? (r.count += 1, n && (r.metadata = {
            ...n,
            enteredAt: n.enteredAt ?? Date.now()
        })) : i.set(e, {
            count: 1,
            metadata: n ? {
                ...n,
                enteredAt: n.enteredAt ?? Date.now()
            } : void 0
        });
    }
    exit(t, e) {
        const n = this._activeOperations.get(t);
        if (n) {
            const i = n.get(e);
            !i || i.count <= 1 ? n.delete(e) : i.count -= 1, n.size === 0 && this._activeOperations.delete(t);
        }
    }
    getActiveOperations(t) {
        const e = this._activeOperations.get(t);
        return e ? Array.from(e.keys()) : [];
    }
    getOperationMetadata(t, e) {
        return this._activeOperations.get(t)?.get(e)?.metadata;
    }
    updateMetadata(t, e, n) {
        const i = this._activeOperations.get(t), r = i?.get(e);
        !i || !r || i.set(e, {
            count: r.count,
            metadata: {
                ...r.metadata,
                ...n,
                enteredAt: n.enteredAt ?? Date.now()
            }
        });
    }
    getActiveOperationsWithMetadata(t) {
        const e = this._activeOperations.get(t);
        return e ? Array.from(e.entries()).map(([n, i])=>({
                location: n,
                metadata: i.metadata
            })) : [];
    }
    clear(t) {
        this._activeOperations.delete(t);
    }
}, bn(sat, Reg, 1);

}
