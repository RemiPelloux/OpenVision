import { x } from "./tslib.es6.js";
var jDd, qDd, Yro;
export { Yro, jDd, qDd };
var __wakaru_F0_initialized = false;
export function F0() {
if (__wakaru_F0_initialized) return;
__wakaru_F0_initialized = true;
"use strict";
x(), jDd = "@anysphere/agent-exec/resource/", qDd = class {
    constructor(e, t){
        this.resourceEntries = new Map, this.remoteExecManager = e, t !== void 0 && this.registerAll(t);
    }
    register(e) {
        this.resourceEntries.set(e, e.remoteImplementation(this.remoteExecManager));
    }
    set(e, t) {
        this.resourceEntries.set(e, t);
    }
    registerAll(e) {
        for (const t of e)this.register(t);
    }
    get(e) {
        return this.resourceEntries.get(e);
    }
    entries() {
        return this.resourceEntries.entries();
    }
}, Yro = class {
    constructor(e, t){
        this.remoteAccessor = e, this.localResources = new Map;
        for (const [n, i] of t)this.localResources.set(n.symbol, {
            resource: n,
            implementation: i
        });
    }
    get(e) {
        const t = this.localResources.get(e.symbol);
        return t ? t.implementation : this.remoteAccessor.get(e);
    }
    *entries() {
        for (const { resource: e, implementation: t } of this.localResources.values())yield [
            e,
            t
        ];
        for (const e of this.remoteAccessor.entries())this.localResources.has(e[0].symbol) || (yield e);
    }
};

}
