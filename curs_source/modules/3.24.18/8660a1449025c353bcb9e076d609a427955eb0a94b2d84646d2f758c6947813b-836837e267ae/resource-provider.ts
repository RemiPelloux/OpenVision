import { E } from "./tslib.es6.js";
var Tym, Eym, i7a;
export { Eym, Tym, i7a };
var __wakaru_zI_initialized = false;
export function zI() {
if (__wakaru_zI_initialized) return;
__wakaru_zI_initialized = true;
"use strict";
E(), Tym = "@anysphere/agent-exec/resource/", Eym = class {
    constructor(t, e){
        this.resourceEntries = new Map, this.remoteExecManager = t, e !== void 0 && this.registerAll(e);
    }
    register(t) {
        this.resourceEntries.set(t, t.remoteImplementation(this.remoteExecManager));
    }
    set(t, e) {
        this.resourceEntries.set(t, e);
    }
    registerAll(t) {
        for (const e of t)this.register(e);
    }
    get(t) {
        return this.resourceEntries.get(t);
    }
    entries() {
        return this.resourceEntries.entries();
    }
}, i7a = class {
    constructor(t, e){
        this.remoteAccessor = t, this.localResources = new Map;
        for (const [n, i] of e)this.localResources.set(n.symbol, {
            resource: n,
            implementation: i
        });
    }
    get(t) {
        const e = this.localResources.get(t.symbol);
        return e ? e.implementation : this.remoteAccessor.get(t);
    }
    *entries() {
        for (const { resource: t, implementation: e } of this.localResources.values())yield [
            t,
            e
        ];
        for (const t of this.remoteAccessor.entries())this.localResources.has(t[0].symbol) || (yield t);
    }
};

}
