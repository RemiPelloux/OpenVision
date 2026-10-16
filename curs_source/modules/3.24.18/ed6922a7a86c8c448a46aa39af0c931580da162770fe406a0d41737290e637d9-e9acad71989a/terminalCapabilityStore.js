import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var b0t, e3h;
export { b0t, e3h };
var __wakaru_Vqt_initialized = false;
export function Vqt() {
if (__wakaru_Vqt_initialized) return;
__wakaru_Vqt_initialized = true;
"use strict";
x(), bt(), Se(), b0t = class extends we {
    constructor(){
        super(...arguments), this._map = new Map, this._onDidRemoveCapabilityType = this._register(new ve), this.onDidRemoveCapabilityType = this._onDidRemoveCapabilityType.event, this._onDidAddCapabilityType = this._register(new ve), this.onDidAddCapabilityType = this._onDidAddCapabilityType.event, this._onDidRemoveCapability = this._register(new ve), this.onDidRemoveCapability = this._onDidRemoveCapability.event, this._onDidAddCapability = this._register(new ve), this.onDidAddCapability = this._onDidAddCapability.event;
    }
    get items() {
        return this._map.keys();
    }
    add(e, t) {
        this._map.set(e, t), this._onDidAddCapabilityType.fire(e), this._onDidAddCapability.fire({
            id: e,
            capability: t
        });
    }
    get(e) {
        return this._map.get(e);
    }
    remove(e) {
        const t = this._map.get(e);
        t && (this._map.delete(e), this._onDidRemoveCapabilityType.fire(e), this._onDidRemoveCapability.fire({
            id: e,
            capability: t
        }));
    }
    has(e) {
        return this._map.has(e);
    }
}, e3h = class extends we {
    constructor(){
        super(...arguments), this._stores = [], this._onDidRemoveCapabilityType = this._register(new ve), this.onDidRemoveCapabilityType = this._onDidRemoveCapabilityType.event, this._onDidAddCapabilityType = this._register(new ve), this.onDidAddCapabilityType = this._onDidAddCapabilityType.event, this._onDidRemoveCapability = this._register(new ve), this.onDidRemoveCapability = this._onDidRemoveCapability.event, this._onDidAddCapability = this._register(new ve), this.onDidAddCapability = this._onDidAddCapability.event;
    }
    get items() {
        return this._items();
    }
    *_items() {
        for (const e of this._stores)for (const t of e.items)yield t;
    }
    has(e) {
        for (const t of this._stores)for (const n of t.items)if (n === e) return !0;
        return !1;
    }
    get(e) {
        for (const t of this._stores){
            const n = t.get(e);
            if (n) return n;
        }
    }
    add(e) {
        this._stores.push(e);
        for (const t of e.items)this._onDidAddCapabilityType.fire(t), this._onDidAddCapability.fire({
            id: t,
            capability: e.get(t)
        });
        this._register(e.onDidAddCapabilityType((t)=>this._onDidAddCapabilityType.fire(t))), this._register(e.onDidAddCapability((t)=>this._onDidAddCapability.fire(t))), this._register(e.onDidRemoveCapabilityType((t)=>this._onDidRemoveCapabilityType.fire(t))), this._register(e.onDidRemoveCapability((t)=>this._onDidRemoveCapability.fire(t)));
    }
};

}
