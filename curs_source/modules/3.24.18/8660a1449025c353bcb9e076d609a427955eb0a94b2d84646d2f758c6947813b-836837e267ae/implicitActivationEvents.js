import { Ei, xr } from "./Iwo.js";
import { Pw, lm } from "./extensions_3.js";
import { E } from "./tslib.es6.js";
var sKm, zqt;
export { sKm, zqt };
var __wakaru_JJa_initialized = false;
export function JJa() {
if (__wakaru_JJa_initialized) return;
__wakaru_JJa_initialized = true;
"use strict";
E(), Ei(), Pw(), sKm = class {
    constructor(){
        this._generators = new Map, this._cache = new WeakMap;
    }
    register(t, e) {
        this._generators.set(t, e);
    }
    readActivationEvents(t) {
        return this._cache.has(t) || this._cache.set(t, this._readActivationEvents(t)), this._cache.get(t);
    }
    createActivationEventsMap(t) {
        const e = Object.create(null);
        for (const n of t){
            const i = this.readActivationEvents(n);
            i.length > 0 && (e[lm.toKey(n.identifier)] = i);
        }
        return e;
    }
    _readActivationEvents(t) {
        if (typeof t.main > "u" && typeof t.browser > "u") return [];
        const e = Array.isArray(t.activationEvents) ? t.activationEvents.slice(0) : [];
        for(let n = 0; n < e.length; n++)e[n] === "onUri" && (e[n] = `onUri:${lm.toKey(t.identifier)}`);
        if (!t.contributes) return e;
        for(const n in t.contributes){
            const i = this._generators.get(n);
            if (!i) continue;
            const r = t.contributes[n], s = Array.isArray(r) ? r : [
                r
            ];
            try {
                i(s, e);
            } catch (o) {
                xr(o);
            }
        }
        return e;
    }
}, zqt = new sKm;

}
