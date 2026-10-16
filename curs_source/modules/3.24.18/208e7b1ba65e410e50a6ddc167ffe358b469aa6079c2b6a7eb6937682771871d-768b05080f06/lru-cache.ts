import { h } from "./tslib.es6.js";
var t9;
export { t9 };
var __wakaru_Trt_initialized = false;
export function Trt() {
if (__wakaru_Trt_initialized) return;
__wakaru_Trt_initialized = true;
"use strict";
h(), t9 = class {
    constructor(e){
        if (this.nodes = new Map, e <= 0) throw new Error("LRU cache maxSize must be positive");
        this.maxSize = e;
    }
    get(e) {
        const t = this.nodes.get(e);
        if (t) return this.markNewest(t), t.value;
    }
    set(e, t) {
        const n = this.nodes.get(e);
        if (n) {
            n.value = t, this.markNewest(n);
            return;
        }
        if (this.nodes.size >= this.maxSize && this.oldest) {
            const s = this.oldest;
            this.detach(s), this.nodes.delete(s.key);
        }
        const r = {
            key: e,
            value: t,
            newer: void 0,
            older: this.newest
        };
        this.newest && (this.newest.newer = r), this.newest = r, this.oldest ??= r, this.nodes.set(e, r);
    }
    has(e) {
        return this.nodes.has(e);
    }
    delete(e) {
        const t = this.nodes.get(e);
        return t ? (this.detach(t), this.nodes.delete(e)) : !1;
    }
    clear() {
        this.nodes.clear(), this.newest = void 0, this.oldest = void 0;
    }
    get size() {
        return this.nodes.size;
    }
    entries() {
        const e = [];
        for(let t = this.oldest; t; t = t.newer)e.push([
            t.key,
            t.value
        ]);
        return e;
    }
    markNewest(e) {
        e !== this.newest && (this.detach(e), e.older = this.newest, this.newest && (this.newest.newer = e), this.newest = e, this.oldest ??= e);
    }
    detach(e) {
        e.older && (e.older.newer = e.newer), e.newer && (e.newer.older = e.older), this.oldest === e && (this.oldest = e.newer), this.newest === e && (this.newest = e.older), e.older = void 0, e.newer = void 0;
    }
};

}
