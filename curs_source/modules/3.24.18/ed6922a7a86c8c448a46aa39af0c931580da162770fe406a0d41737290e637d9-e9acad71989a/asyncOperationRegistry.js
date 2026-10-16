import { Se, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var e8e, ugh;
export { e8e, ugh };
var __wakaru_rtt_initialized = false;
export function rtt() {
if (__wakaru_rtt_initialized) return;
__wakaru_rtt_initialized = true;
"use strict";
x(), Se(), Pn(), Ze(), e8e = vn("asyncOperationRegistry"), ugh = class extends we {
    constructor(){
        super(), this._activeOperations = new Map;
    }
    enter(e, t, n) {
        let i = this._activeOperations.get(e);
        i || (i = new Map, this._activeOperations.set(e, i));
        const r = i.get(t);
        r ? (r.count += 1, n && (r.metadata = {
            ...n,
            enteredAt: n.enteredAt ?? Date.now()
        })) : i.set(t, {
            count: 1,
            metadata: n ? {
                ...n,
                enteredAt: n.enteredAt ?? Date.now()
            } : void 0
        });
    }
    exit(e, t) {
        const n = this._activeOperations.get(e);
        if (n) {
            const i = n.get(t);
            !i || i.count <= 1 ? n.delete(t) : i.count -= 1, n.size === 0 && this._activeOperations.delete(e);
        }
    }
    getActiveOperations(e) {
        const t = this._activeOperations.get(e);
        return t ? Array.from(t.keys()) : [];
    }
    getOperationMetadata(e, t) {
        return this._activeOperations.get(e)?.get(t)?.metadata;
    }
    updateMetadata(e, t, n) {
        const i = this._activeOperations.get(e), r = i?.get(t);
        !i || !r || i.set(t, {
            count: r.count,
            metadata: {
                ...r.metadata,
                ...n,
                enteredAt: n.enteredAt ?? Date.now()
            }
        });
    }
    getActiveOperationsWithMetadata(e) {
        const t = this._activeOperations.get(e);
        return t ? Array.from(t.entries()).map(([n, i])=>({
                location: n,
                metadata: i.metadata
            })) : [];
    }
    clear(e) {
        this._activeOperations.delete(e);
    }
}, mn(e8e, ugh, 1);

}
