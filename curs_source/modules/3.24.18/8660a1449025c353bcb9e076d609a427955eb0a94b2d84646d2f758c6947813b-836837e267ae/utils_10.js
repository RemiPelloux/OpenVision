import { Nt, Qe, en } from "./Iwo.js";
import { Rkr } from "./autorun.js";
import { btt, eB } from "./debugName.js";
import { ogn } from "./deps.js";
import { ugn } from "./derived.js";
import { E } from "./tslib.es6.js";
import { Hve, WOd, Yte, agn, axy, dgn, f9t, lxy, mg, uW, v7o, v9t, ytt } from "./ze.js";
function Yv(...t) {
    let e, n, i;
    return t.length === 3 ? [e, n, i] = t : [n, i] = t, new K$e(new eB(e, void 0, i), n, i, ()=>K$e.globalTransaction, Yte);
}
var qOd, K$e, zOd, w7o, C7o, T7o, hgn;
export { C7o, K$e, T7o, Yv, hgn, qOd, w7o, zOd };
var __wakaru_LAe_initialized = false;
export function LAe() {
if (__wakaru_LAe_initialized) return;
__wakaru_LAe_initialized = true;
"use strict";
E(), Qe(), Rkr(), ytt(), btt(), ogn(), ugn(), f9t(), qOd = class extends v7o {
    constructor(t){
        super(), this.value = t;
    }
    get debugName() {
        return this.toString();
    }
    get() {
        return this.value;
    }
    addObserver(t) {}
    removeObserver(t) {}
    log() {
        return this;
    }
    toString() {
        return `Const: ${this.value}`;
    }
}, K$e = class extends v9t {
    constructor(t, e, n, i, r){
        super(), this._debugNameData = t, this.event = e, this._getValue = n, this._getTransaction = i, this._equalityComparator = r, this._hasValue = !1, this._subscription = WOd(), this.handleEvent = (s)=>{
            const o = this._getValue(s), a = this._value, l = this._hasValue, c = !l || !this._equalityComparator(a, o);
            let u = !1;
            c && (this._value = o, this._hasValue = !0, l && (u = !0, agn(this._getTransaction(), (d)=>{
                uW()?.handleObservableUpdated(this, {
                    oldValue: a,
                    newValue: o,
                    change: void 0,
                    didChange: c,
                    hadValue: l
                });
                for (const h of this._observers)d.updateObserver(h, this), h.handleChange(this, void 0);
            }, ()=>{
                const d = this.getDebugName();
                return "Event fired" + (d ? `: ${d}` : "");
            }))), u || uW()?.handleObservableUpdated(this, {
                oldValue: a,
                newValue: o,
                change: void 0,
                didChange: c,
                hadValue: l
            });
        };
    }
    getDebugName() {
        return this._debugNameData.getDebugName(this);
    }
    get debugName() {
        const t = this.getDebugName();
        return "From Event" + (t ? `: ${t}` : "");
    }
    onFirstObserverAdded() {
        this._subscription.value = this.event(this.handleEvent);
    }
    onLastObserverRemoved() {
        this._subscription.clear(), this._hasValue = !1, this._value = void 0;
    }
    get() {
        return this._subscription.value ? (this._hasValue || this.handleEvent(void 0), this._value) : this._getValue(void 0);
    }
    debugSetValue(t) {
        this._value = t;
    }
}, ((t)=>{
    t.Observer = K$e;
    function e(n, i) {
        let r = !1;
        K$e.globalTransaction === void 0 && (K$e.globalTransaction = n, r = !0);
        try {
            i();
        } finally{
            r && (K$e.globalTransaction = void 0);
        }
    }
    t.batchEventsGlobally = e;
})(Yv || (Yv = {})), zOd = class extends v9t {
    constructor(t, e){
        super(), this.event = e, this.subscription = WOd(), this.handleEvent = ()=>{
            mg((n)=>{
                for (const i of this._observers)n.updateObserver(i, this), i.handleChange(this, void 0);
            }, ()=>this.debugName);
        }, this.debugName = typeof t == "string" ? t : t.getDebugName(this) ?? "Observable Signal From Event";
    }
    onFirstObserverAdded() {
        this.subscription.value = this.event(this.handleEvent);
    }
    onLastObserverRemoved() {
        this.subscription.clear();
    }
    get() {}
}, w7o = class extends v9t {
    constructor(t, e){
        super(), this._debugName = t, this._owner = e;
    }
    get debugName() {
        return new eB(this._owner, this._debugName, void 0).getDebugName(this) ?? "Observable Signal";
    }
    toString() {
        return this.debugName;
    }
    trigger(t, e) {
        if (!t) {
            mg((n)=>{
                this.trigger(n, e);
            }, ()=>`Trigger signal ${this.debugName}`);
            return;
        }
        for (const n of this._observers)t.updateObserver(n, this), n.handleChange(this, e);
    }
    get() {}
}, lxy(dgn), axy(Hve), C7o = class {
    constructor(t, e){
        this._forceRecompute = t, this._handleValue = e, this._counter = 0;
    }
    beginUpdate(t) {
        this._counter++;
    }
    endUpdate(t) {
        this._counter === 1 && this._forceRecompute && (this._handleValue ? this._handleValue(t.get()) : t.reportChanges()), this._counter--;
    }
    handlePossibleChange(t) {}
    handleChange(t, e) {}
}, T7o = class {
    constructor(t, e){
        this._map = t, this._keySelector = e, this._cache = new Map, this._items = [];
    }
    dispose() {
        this._cache.forEach((t)=>t.store.dispose()), this._cache.clear();
    }
    setItems(t) {
        const e = [], n = new Set(this._cache.keys());
        for (const i of t){
            const r = this._keySelector ? this._keySelector(i) : i;
            let s = this._cache.get(r);
            if (s) n.delete(r);
            else {
                const o = new Nt;
                s = {
                    out: this._map(i, o),
                    store: o
                }, this._cache.set(r, s);
            }
            e.push(s.out);
        }
        for (const i of n)this._cache.get(i).store.dispose(), this._cache.delete(i);
        this._items = e;
    }
    getItems() {
        return this._items;
    }
}, hgn = class {
    constructor(t){
        this.observable = t;
    }
    get onDidChange() {
        return en.fromObservableLight(this.observable);
    }
    get value() {
        return this.observable.get();
    }
};

}
