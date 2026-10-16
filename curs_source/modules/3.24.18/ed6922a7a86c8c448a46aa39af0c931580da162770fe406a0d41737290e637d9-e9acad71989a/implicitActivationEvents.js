import { ns, si } from "./HVr.js";
import { G_, xu } from "./extensions_3.js";
import { x } from "./tslib.es6.js";
var Pch, xwt;
export { Pch, xwt };
var __wakaru_N_o_initialized = false;
export function N_o() {
if (__wakaru_N_o_initialized) return;
__wakaru_N_o_initialized = true;
"use strict";
x(), si(), G_(), Pch = class {
    constructor(){
        this._generators = new Map, this._cache = new WeakMap;
    }
    register(e, t) {
        this._generators.set(e, t);
    }
    readActivationEvents(e) {
        return this._cache.has(e) || this._cache.set(e, this._readActivationEvents(e)), this._cache.get(e);
    }
    createActivationEventsMap(e) {
        const t = Object.create(null);
        for (const n of e){
            const i = this.readActivationEvents(n);
            i.length > 0 && (t[xu.toKey(n.identifier)] = i);
        }
        return t;
    }
    _readActivationEvents(e) {
        if (typeof e.main > "u" && typeof e.browser > "u") return [];
        const t = Array.isArray(e.activationEvents) ? e.activationEvents.slice(0) : [];
        for(let n = 0; n < t.length; n++)t[n] === "onUri" && (t[n] = `onUri:${xu.toKey(e.identifier)}`);
        if (!e.contributes) return t;
        for(const n in e.contributes){
            const i = this._generators.get(n);
            if (!i) continue;
            const r = e.contributes[n], s = Array.isArray(r) ? r : [
                r
            ];
            try {
                i(s, t);
            } catch (o) {
                ns(o);
            }
        }
        return t;
    }
}, xwt = new Pch;

}
