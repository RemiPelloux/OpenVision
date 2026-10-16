import { Cl, Se, po, we } from "./HVr.js";
import { bn } from "./async.js";
import { x } from "./tslib.es6.js";
var W3n, xEh;
export { W3n, xEh };
var __wakaru_EJv_initialized = false;
export function EJv() {
if (__wakaru_EJv_initialized) return;
__wakaru_EJv_initialized = true;
"use strict";
x(), bn(), Se(), W3n = [
    "header",
    "conversation"
], xEh = class extends we {
    constructor(e){
        super(), this._onReleased = e, this._leases = {
            header: new Map,
            conversation: new Map
        }, this._releaseGrace = {
            header: this._register(new po),
            conversation: this._register(new po)
        };
    }
    retain(e, t) {
        this._releaseGrace[t].deleteAndDispose(e);
        const n = {
            dispose: ()=>this._release(e, t, n)
        }, i = this._leases[t];
        let r = i.get(e);
        return r === void 0 && (r = new Set, i.set(e, r)), r.add(n), n;
    }
    has(e, t) {
        return this._leases[t].has(e);
    }
    hasAny(e) {
        return W3n.some((t)=>this.has(e, t));
    }
    isReleasing(e) {
        return W3n.some((t)=>this._releaseGrace[t].has(e));
    }
    idsWith(e) {
        return [
            ...this._leases[e].keys()
        ];
    }
    forget(e) {
        for (const t of W3n)this._leases[t].delete(e), this._releaseGrace[t].deleteAndDispose(e);
    }
    clear() {
        for (const e of W3n)this._leases[e].clear(), this._releaseGrace[e].clearAndDisposeAll();
    }
    dispose() {
        this.clear(), super.dispose();
    }
    _release(e, t, n) {
        const i = this._leases[t].get(e);
        if (i?.delete(n) !== !0 || i.size > 0 || (this._leases[t].delete(e), this._store.isDisposed)) return;
        const r = this._releaseGrace[t];
        r.set(e, Cl(()=>{
            r.deleteAndDispose(e), this._onReleased(e);
        }, 0));
    }
};

}
