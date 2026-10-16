import { Ec, Qe, da, st } from "./Iwo.js";
import { qn } from "./async.js";
import { E } from "./tslib.es6.js";
var lIi, Xpg;
export { Xpg, lIi };
var __wakaru_kSk_initialized = false;
export function kSk() {
if (__wakaru_kSk_initialized) return;
__wakaru_kSk_initialized = true;
"use strict";
E(), qn(), Qe(), lIi = [
    "header",
    "conversation"
], Xpg = class extends st {
    constructor(t){
        super(), this._onReleased = t, this._leases = {
            header: new Map,
            conversation: new Map
        }, this._releaseGrace = {
            header: this._register(new da),
            conversation: this._register(new da)
        };
    }
    retain(t, e) {
        this._releaseGrace[e].deleteAndDispose(t);
        const n = {
            dispose: ()=>this._release(t, e, n)
        }, i = this._leases[e];
        let r = i.get(t);
        return r === void 0 && (r = new Set, i.set(t, r)), r.add(n), n;
    }
    has(t, e) {
        return this._leases[e].has(t);
    }
    hasAny(t) {
        return lIi.some((e)=>this.has(t, e));
    }
    isReleasing(t) {
        return lIi.some((e)=>this._releaseGrace[e].has(t));
    }
    idsWith(t) {
        return [
            ...this._leases[t].keys()
        ];
    }
    forget(t) {
        for (const e of lIi)this._leases[e].delete(t), this._releaseGrace[e].deleteAndDispose(t);
    }
    clear() {
        for (const t of lIi)this._leases[t].clear(), this._releaseGrace[t].clearAndDisposeAll();
    }
    dispose() {
        this.clear(), super.dispose();
    }
    _release(t, e, n) {
        const i = this._leases[e].get(t);
        if (i?.delete(n) !== !0 || i.size > 0 || (this._leases[e].delete(t), this._store.isDisposed)) return;
        const r = this._releaseGrace[e];
        r.set(t, Ec(()=>{
            r.deleteAndDispose(t), this._onReleased(t);
        }, 0));
    }
};

}
