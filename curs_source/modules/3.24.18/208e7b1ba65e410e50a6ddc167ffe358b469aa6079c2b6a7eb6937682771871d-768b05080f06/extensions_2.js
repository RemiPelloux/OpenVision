import { Q, ne } from "./instantiation.js";
import { zp } from "./remoteHosts.js";
import { Ii } from "./resources.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
var Xfe, Qfe, w2, Nu, Zfe, EZe;
export { EZe, Nu, Qfe, Xfe, Zfe, w2 };
var __wakaru_E2_initialized = false;
export function E2() {
if (__wakaru_E2_initialized) return;
__wakaru_E2_initialized = true;
"use strict";
h(), jn(), ne(), zp(), Xfe = "extensions.user.cache", Qfe = "extensions.builtin.cache", w2 = "undefined_publisher", Nu = class {
    constructor(e){
        this.value = e, this._lower = e.toLowerCase();
    }
    static equals(e, t) {
        if (typeof e > "u" || e === null) return typeof t > "u" || t === null;
        if (typeof t > "u" || t === null) return !1;
        if (typeof e == "string" || typeof t == "string") {
            const n = typeof e == "string" ? e : e.value, r = typeof t == "string" ? t : t.value;
            return Ii(n, r);
        }
        return e._lower === t._lower;
    }
    static toKey(e) {
        return typeof e == "string" ? e.toLowerCase() : e._lower;
    }
}, Zfe = class {
    constructor(){
        this._map = new Map;
    }
    clear() {
        this._map.clear();
    }
    delete(e) {
        this._map.delete(Nu.toKey(e));
    }
    get(e) {
        return this._map.get(Nu.toKey(e));
    }
    has(e) {
        return this._map.has(Nu.toKey(e));
    }
    set(e, t) {
        this._map.set(Nu.toKey(e), t);
    }
    values() {
        return this._map.values();
    }
    forEach(e) {
        this._map.forEach(e);
    }
    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }
}, EZe = Q("IBuiltinExtensionsScannerService");

}
