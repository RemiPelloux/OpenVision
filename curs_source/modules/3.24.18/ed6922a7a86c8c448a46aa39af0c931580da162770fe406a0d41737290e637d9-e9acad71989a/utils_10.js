import { Ct, He, Se } from "./HVr.js";
import { Dmn } from "./autorun.js";
import { EO, uBe } from "./debugName.js";
import { ZNt } from "./deps.js";
import { n2t } from "./derived.js";
import { JRc, Kdg, Lht, PV, Pht, QNt, Uh, Ydg, gBe, hBe, i2t, q9, rYr } from "./qIc.js";
import { x } from "./tslib.es6.js";
function qp(...e) {
    let t, n, i;
    return e.length === 3 ? [t, n, i] = e : [n, i] = e, new MAe(new EO(t, void 0, i), n, i, ()=>MAe.globalTransaction, PV);
}
var nDc, MAe, iDc, uYr, dYr, hYr, r2t;
export { MAe, dYr, hYr, iDc, nDc, qp, r2t, uYr };
var __wakaru_xge_initialized = false;
export function xge() {
if (__wakaru_xge_initialized) return;
__wakaru_xge_initialized = true;
"use strict";
x(), Se(), Dmn(), hBe(), uBe(), ZNt(), n2t(), Pht(), nDc = class extends rYr {
    constructor(e){
        super(), this.value = e;
    }
    get debugName() {
        return this.toString();
    }
    get() {
        return this.value;
    }
    addObserver(e) {}
    removeObserver(e) {}
    log() {
        return this;
    }
    toString() {
        return `Const: ${this.value}`;
    }
}, MAe = class extends Lht {
    constructor(e, t, n, i, r){
        super(), this._debugNameData = e, this.event = t, this._getValue = n, this._getTransaction = i, this._equalityComparator = r, this._hasValue = !1, this._subscription = JRc(), this.handleEvent = (s)=>{
            const o = this._getValue(s), a = this._value, c = this._hasValue, l = !c || !this._equalityComparator(a, o);
            let u = !1;
            l && (this._value = o, this._hasValue = !0, c && (u = !0, QNt(this._getTransaction(), (h)=>{
                q9()?.handleObservableUpdated(this, {
                    oldValue: a,
                    newValue: o,
                    change: void 0,
                    didChange: l,
                    hadValue: c
                });
                for (const p of this._observers)h.updateObserver(p, this), p.handleChange(this, void 0);
            }, ()=>{
                const h = this.getDebugName();
                return "Event fired" + (h ? `: ${h}` : "");
            }))), u || q9()?.handleObservableUpdated(this, {
                oldValue: a,
                newValue: o,
                change: void 0,
                didChange: l,
                hadValue: c
            });
        };
    }
    getDebugName() {
        return this._debugNameData.getDebugName(this);
    }
    get debugName() {
        const e = this.getDebugName();
        return "From Event" + (e ? `: ${e}` : "");
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
    debugSetValue(e) {
        this._value = e;
    }
}, ((e)=>{
    e.Observer = MAe;
    function t(n, i) {
        let r = !1;
        MAe.globalTransaction === void 0 && (MAe.globalTransaction = n, r = !0);
        try {
            i();
        } finally{
            r && (MAe.globalTransaction = void 0);
        }
    }
    e.batchEventsGlobally = t;
})(qp || (qp = {})), iDc = class extends Lht {
    constructor(e, t){
        super(), this.event = t, this.subscription = JRc(), this.handleEvent = ()=>{
            Uh((n)=>{
                for (const i of this._observers)n.updateObserver(i, this), i.handleChange(this, void 0);
            }, ()=>this.debugName);
        }, this.debugName = typeof e == "string" ? e : e.getDebugName(this) ?? "Observable Signal From Event";
    }
    onFirstObserverAdded() {
        this.subscription.value = this.event(this.handleEvent);
    }
    onLastObserverRemoved() {
        this.subscription.clear();
    }
    get() {}
}, uYr = class extends Lht {
    constructor(e, t){
        super(), this._debugName = e, this._owner = t;
    }
    get debugName() {
        return new EO(this._owner, this._debugName, void 0).getDebugName(this) ?? "Observable Signal";
    }
    toString() {
        return this.debugName;
    }
    trigger(e, t) {
        if (!e) {
            Uh((n)=>{
                this.trigger(n, t);
            }, ()=>`Trigger signal ${this.debugName}`);
            return;
        }
        for (const n of this._observers)e.updateObserver(n, this), n.handleChange(this, t);
    }
    get() {}
}, Ydg(i2t), Kdg(gBe), dYr = class {
    constructor(e, t){
        this._forceRecompute = e, this._handleValue = t, this._counter = 0;
    }
    beginUpdate(e) {
        this._counter++;
    }
    endUpdate(e) {
        this._counter === 1 && this._forceRecompute && (this._handleValue ? this._handleValue(e.get()) : e.reportChanges()), this._counter--;
    }
    handlePossibleChange(e) {}
    handleChange(e, t) {}
}, hYr = class {
    constructor(e, t){
        this._map = e, this._keySelector = t, this._cache = new Map, this._items = [];
    }
    dispose() {
        this._cache.forEach((e)=>e.store.dispose()), this._cache.clear();
    }
    setItems(e) {
        const t = [], n = new Set(this._cache.keys());
        for (const i of e){
            const r = this._keySelector ? this._keySelector(i) : i;
            let s = this._cache.get(r);
            if (s) n.delete(r);
            else {
                const o = new He;
                s = {
                    out: this._map(i, o),
                    store: o
                }, this._cache.set(r, s);
            }
            t.push(s.out);
        }
        for (const i of n)this._cache.get(i).store.dispose(), this._cache.delete(i);
        this._items = t;
    }
    getItems() {
        return this._items;
    }
}, r2t = class {
    constructor(e){
        this.observable = e;
    }
    get onDidChange() {
        return Ct.fromObservableLight(this.observable);
    }
    get value() {
        return this.observable.get();
    }
};

}
