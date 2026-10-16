import { x } from "./tslib.es6.js";
var efn, tfn, dre, vQr, _Qr;
export { _Qr, dre, efn, tfn, vQr };
var __wakaru_mOt_initialized = false;
export function mOt() {
if (__wakaru_mOt_initialized) return;
__wakaru_mOt_initialized = true;
"use strict";
x(), efn = [], tfn = class WWe {
    constructor(t, n){
        this.items = t, this.additionalItems = n;
    }
    static create(t, n) {
        if (t <= 128 && n.length === 0) {
            let i = WWe.cache[t];
            return i || (i = new WWe(t, n), WWe.cache[t] = i), i;
        }
        return new WWe(t, n);
    }
    static getEmpty() {
        return this.empty;
    }
    add(t, n) {
        const i = n.getKey(t);
        let r = i >> 5;
        if (r === 0) {
            const o = 1 << i | this.items;
            return o === this.items ? this : WWe.create(o, this.additionalItems);
        }
        r--;
        const s = this.additionalItems.slice(0);
        for(; s.length < r;)s.push(0);
        return s[r] |= 1 << (i & 31), WWe.create(this.items, s);
    }
    has(t, n) {
        const i = n.getKey(t);
        let r = i >> 5;
        return r === 0 ? (this.items & 1 << i) !== 0 : (r--, ((this.additionalItems[r] || 0) & 1 << (i & 31)) !== 0);
    }
    merge(t) {
        const n = this.items | t.items;
        if (this.additionalItems === efn && t.additionalItems === efn) return n === this.items ? this : n === t.items ? t : WWe.create(n, efn);
        const i = [];
        for(let r = 0; r < Math.max(this.additionalItems.length, t.additionalItems.length); r++){
            const s = this.additionalItems[r] || 0, o = t.additionalItems[r] || 0;
            i.push(s | o);
        }
        return WWe.create(n, i);
    }
    intersects(t) {
        if ((this.items & t.items) !== 0) return !0;
        for(let n = 0; n < Math.min(this.additionalItems.length, t.additionalItems.length); n++)if ((this.additionalItems[n] & t.additionalItems[n]) !== 0) return !0;
        return !1;
    }
    equals(t) {
        if (this.items !== t.items || this.additionalItems.length !== t.additionalItems.length) return !1;
        for(let n = 0; n < this.additionalItems.length; n++)if (this.additionalItems[n] !== t.additionalItems[n]) return !1;
        return !0;
    }
}, tfn.cache = new Array(129), tfn.empty = tfn.create(0, efn), dre = tfn, vQr = {
    getKey (e) {
        return e;
    }
}, _Qr = class {
    constructor(){
        this.items = new Map;
    }
    getKey(e) {
        let t = this.items.get(e);
        return t === void 0 && (t = this.items.size, this.items.set(e, t)), t;
    }
    reverseLookup(e) {
        return [
            ...this.items
        ].find(([t, n])=>n === e)?.[0];
    }
    reverseLookupSet(e) {
        const t = [];
        for (const [n] of this.items)e.has(n, this) && t.push(n);
        return t;
    }
    keys() {
        return this.items.keys();
    }
};

}
