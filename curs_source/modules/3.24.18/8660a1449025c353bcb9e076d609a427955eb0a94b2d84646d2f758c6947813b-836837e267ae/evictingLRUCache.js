import { du, kv } from "./map.js";
import { E } from "./tslib.es6.js";
var uRn;
export { uRn };
var __wakaru_jls_initialized = false;
export function jls() {
if (__wakaru_jls_initialized) return;
__wakaru_jls_initialized = true;
"use strict";
E(), du(), uRn = class {
    constructor(t, e){
        this.cache = new kv(t), this.onEvict = e;
    }
    set(t, e) {
        if (this.cache.size >= this.cache.limit && !this.cache.has(t)) {
            const n = this.cache.keys().next().value;
            if (n !== void 0) {
                const i = this.cache.peek(n);
                i !== void 0 && this.onEvict(n, i);
            }
        }
        this.cache.set(t, e);
    }
    get(t) {
        return this.cache.get(t);
    }
    has(t) {
        return this.cache.has(t);
    }
    delete(t) {
        return this.cache.delete(t);
    }
    clear() {
        for (const [t, e] of this.cache)this.onEvict(t, e);
        this.cache.clear();
    }
    keys() {
        return this.cache.keys();
    }
    values() {
        return this.cache.values();
    }
    [Symbol.iterator]() {
        return this.cache[Symbol.iterator]();
    }
    get size() {
        return this.cache.size;
    }
    get limit() {
        return this.cache.limit;
    }
};

}
