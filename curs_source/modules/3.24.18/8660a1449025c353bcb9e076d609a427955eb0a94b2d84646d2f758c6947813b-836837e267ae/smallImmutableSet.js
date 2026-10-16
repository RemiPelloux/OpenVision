import { E } from "./tslib.es6.js";
var Lri, Ori, Xve, xjo, Ajo;
export { Ajo, Lri, Ori, Xve, xjo };
var __wakaru_nfn_initialized = false;
export function nfn() {
if (__wakaru_nfn_initialized) return;
__wakaru_nfn_initialized = true;
"use strict";
E(), Lri = [], Ori = class amt {
    constructor(e, n){
        this.items = e, this.additionalItems = n;
    }
    static create(e, n) {
        if (e <= 128 && n.length === 0) {
            let i = amt.cache[e];
            return i || (i = new amt(e, n), amt.cache[e] = i), i;
        }
        return new amt(e, n);
    }
    static getEmpty() {
        return this.empty;
    }
    add(e, n) {
        const i = n.getKey(e);
        let r = i >> 5;
        if (r === 0) {
            const o = 1 << i | this.items;
            return o === this.items ? this : amt.create(o, this.additionalItems);
        }
        r--;
        const s = this.additionalItems.slice(0);
        for(; s.length < r;)s.push(0);
        return s[r] |= 1 << (i & 31), amt.create(this.items, s);
    }
    has(e, n) {
        const i = n.getKey(e);
        let r = i >> 5;
        return r === 0 ? (this.items & 1 << i) !== 0 : (r--, ((this.additionalItems[r] || 0) & 1 << (i & 31)) !== 0);
    }
    merge(e) {
        const n = this.items | e.items;
        if (this.additionalItems === Lri && e.additionalItems === Lri) return n === this.items ? this : n === e.items ? e : amt.create(n, Lri);
        const i = [];
        for(let r = 0; r < Math.max(this.additionalItems.length, e.additionalItems.length); r++){
            const s = this.additionalItems[r] || 0, o = e.additionalItems[r] || 0;
            i.push(s | o);
        }
        return amt.create(n, i);
    }
    intersects(e) {
        if ((this.items & e.items) !== 0) return !0;
        for(let n = 0; n < Math.min(this.additionalItems.length, e.additionalItems.length); n++)if ((this.additionalItems[n] & e.additionalItems[n]) !== 0) return !0;
        return !1;
    }
    equals(e) {
        if (this.items !== e.items || this.additionalItems.length !== e.additionalItems.length) return !1;
        for(let n = 0; n < this.additionalItems.length; n++)if (this.additionalItems[n] !== e.additionalItems[n]) return !1;
        return !0;
    }
}, Ori.cache = new Array(129), Ori.empty = Ori.create(0, Lri), Xve = Ori, xjo = {
    getKey (t) {
        return t;
    }
}, Ajo = class {
    constructor(){
        this.items = new Map;
    }
    getKey(t) {
        let e = this.items.get(t);
        return e === void 0 && (e = this.items.size, this.items.set(t, e)), e;
    }
    reverseLookup(t) {
        return [
            ...this.items
        ].find(([e, n])=>n === t)?.[0];
    }
    reverseLookupSet(t) {
        const e = [];
        for (const [n] of this.items)t.has(n, this) && e.push(n);
        return e;
    }
    keys() {
        return this.items.keys();
    }
};

}
