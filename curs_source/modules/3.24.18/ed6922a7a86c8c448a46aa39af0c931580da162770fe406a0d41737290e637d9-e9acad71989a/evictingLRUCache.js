import { ag, oc } from "./map.js";
import { x } from "./tslib.es6.js";
var DBn;
export { DBn };
var __wakaru_lIo_initialized = false;
export function lIo() {
if (__wakaru_lIo_initialized) return;
__wakaru_lIo_initialized = true;
"use strict";
x(), oc(), DBn = class {
    constructor(e, t){
        this.cache = new ag(e), this.onEvict = t;
    }
    set(e, t) {
        if (this.cache.size >= this.cache.limit && !this.cache.has(e)) {
            const n = this.cache.keys().next().value;
            if (n !== void 0) {
                const i = this.cache.peek(n);
                i !== void 0 && this.onEvict(n, i);
            }
        }
        this.cache.set(e, t);
    }
    get(e) {
        return this.cache.get(e);
    }
    has(e) {
        return this.cache.has(e);
    }
    delete(e) {
        return this.cache.delete(e);
    }
    clear() {
        for (const [e, t] of this.cache)this.onEvict(e, t);
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
