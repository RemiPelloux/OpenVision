import { Qe } from "./Iwo.js";
import { Ddn, Odn } from "./SZu.js";
import { E } from "./tslib.es6.js";
var cpl, kRn;
export { cpl, kRn };
var __wakaru_upl_initialized = false;
export function upl() {
if (__wakaru_upl_initialized) return;
__wakaru_upl_initialized = true;
"use strict";
E(), Qe(), Odn(), cpl = class {
    constructor(){
        this._nextId = 0, this._entries = new Map, this._listeners = new Set, this._snapshot = [], this._isBatching = !1, this._dirty = !1, this._notifyScheduled = !1, this.subscribe = (t)=>(this._listeners.add(t), ()=>{
                this._listeners.delete(t);
            }), this.getSnapshot = ()=>this._snapshot;
    }
    register(t, e, n, i) {
        const r = this._nextId++;
        let s = 0, o = i;
        return this._entries.set(r, {
            id: r,
            generation: s,
            component: t,
            props: e,
            container: n,
            portalRoot: o
        }), this._markDirty(), {
            update: (a, l, c)=>{
                this._entries.has(r) && (s++, c !== void 0 && (o = c), this._entries.set(r, {
                    id: r,
                    generation: s,
                    component: a,
                    props: l,
                    container: n,
                    portalRoot: o
                }), this._markDirty());
            },
            dispose: ()=>{
                this._entries.delete(r) && this._markDirty();
            }
        };
    }
    batch(t) {
        const e = this._isBatching;
        this._isBatching = !0;
        try {
            t();
        } finally{
            this._isBatching = e, !this._isBatching && this._dirty && (this._dirty = !1, this._scheduleNotify());
        }
    }
    flushPendingUpdates() {
        return this._notifyScheduled ? (this._notifyScheduled = !1, Ddn("island.flush"), this._notifyListeners(), !0) : !1;
    }
    _markDirty() {
        if (this._snapshot = Array.from(this._entries.values()), this._isBatching) {
            this._dirty = !0;
            return;
        }
        this._scheduleNotify();
    }
    _scheduleNotify() {
        this._notifyScheduled || (this._notifyScheduled = !0, queueMicrotask(()=>{
            this._notifyScheduled && (this._notifyScheduled = !1, Ddn("island.notify"), this._notifyListeners());
        }));
    }
    _notifyListeners() {
        for (const t of this._listeners)t();
    }
}, kRn = new WeakMap;

}
