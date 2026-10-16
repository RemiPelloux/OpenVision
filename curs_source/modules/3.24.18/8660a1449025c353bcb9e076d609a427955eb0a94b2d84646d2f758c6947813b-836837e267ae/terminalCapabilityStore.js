import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var uAi, Mxg;
export { Mxg, uAi };
var __wakaru_dAi_initialized = false;
export function dAi() {
if (__wakaru_dAi_initialized) return;
__wakaru_dAi_initialized = true;
"use strict";
E(), Gt(), Qe(), uAi = class extends st {
    constructor(){
        super(...arguments), this._map = new Map, this._onDidRemoveCapabilityType = this._register(new tt), this.onDidRemoveCapabilityType = this._onDidRemoveCapabilityType.event, this._onDidAddCapabilityType = this._register(new tt), this.onDidAddCapabilityType = this._onDidAddCapabilityType.event, this._onDidRemoveCapability = this._register(new tt), this.onDidRemoveCapability = this._onDidRemoveCapability.event, this._onDidAddCapability = this._register(new tt), this.onDidAddCapability = this._onDidAddCapability.event;
    }
    get items() {
        return this._map.keys();
    }
    add(t, e) {
        this._map.set(t, e), this._onDidAddCapabilityType.fire(t), this._onDidAddCapability.fire({
            id: t,
            capability: e
        });
    }
    get(t) {
        return this._map.get(t);
    }
    remove(t) {
        const e = this._map.get(t);
        e && (this._map.delete(t), this._onDidRemoveCapabilityType.fire(t), this._onDidRemoveCapability.fire({
            id: t,
            capability: e
        }));
    }
    has(t) {
        return this._map.has(t);
    }
}, Mxg = class extends st {
    constructor(){
        super(...arguments), this._stores = [], this._onDidRemoveCapabilityType = this._register(new tt), this.onDidRemoveCapabilityType = this._onDidRemoveCapabilityType.event, this._onDidAddCapabilityType = this._register(new tt), this.onDidAddCapabilityType = this._onDidAddCapabilityType.event, this._onDidRemoveCapability = this._register(new tt), this.onDidRemoveCapability = this._onDidRemoveCapability.event, this._onDidAddCapability = this._register(new tt), this.onDidAddCapability = this._onDidAddCapability.event;
    }
    get items() {
        return this._items();
    }
    *_items() {
        for (const t of this._stores)for (const e of t.items)yield e;
    }
    has(t) {
        for (const e of this._stores)for (const n of e.items)if (n === t) return !0;
        return !1;
    }
    get(t) {
        for (const e of this._stores){
            const n = e.get(t);
            if (n) return n;
        }
    }
    add(t) {
        this._stores.push(t);
        for (const e of t.items)this._onDidAddCapabilityType.fire(e), this._onDidAddCapability.fire({
            id: e,
            capability: t.get(e)
        });
        this._register(t.onDidAddCapabilityType((e)=>this._onDidAddCapabilityType.fire(e))), this._register(t.onDidAddCapability((e)=>this._onDidAddCapability.fire(e))), this._register(t.onDidRemoveCapabilityType((e)=>this._onDidRemoveCapabilityType.fire(e))), this._register(t.onDidRemoveCapability((e)=>this._onDidRemoveCapability.fire(e)));
    }
};

}
