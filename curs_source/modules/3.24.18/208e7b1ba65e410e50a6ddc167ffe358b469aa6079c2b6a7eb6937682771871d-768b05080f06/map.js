import { h } from "./tslib.es6.js";
function hUe(e) {
    return Array.isArray(e);
}
var A4, M4, P4, N4, eR, Yn, tR, D4, O4, Pl, L4, U4;
export { A4, D4, L4, M4, N4, O4, P4, Pl, U4, Yn, eR, hUe, tR };
var __wakaru_mr_initialized = false;
export function mr() {
if (__wakaru_mr_initialized) return;
__wakaru_mr_initialized = true;
"use strict";
h(), N4 = class {
    constructor(e, t){
        this.uri = e, this.value = t;
    }
}, eR = class r_ {
    constructor(t, n){
        if (this[A4] = "ResourceMap", t instanceof r_) this.map = new Map(t.map), this.toKey = n ?? r_.defaultToKey;
        else if (hUe(t)) {
            this.map = new Map, this.toKey = n ?? r_.defaultToKey;
            for (const [r, s] of t)this.set(r, s);
        } else this.map = new Map, this.toKey = t ?? r_.defaultToKey;
    }
    set(t, n) {
        return this.map.set(this.toKey(t), new N4(t, n)), this;
    }
    get(t) {
        return this.map.get(this.toKey(t))?.value;
    }
    has(t) {
        return this.map.has(this.toKey(t));
    }
    get size() {
        return this.map.size;
    }
    clear() {
        this.map.clear();
    }
    delete(t) {
        return this.map.delete(this.toKey(t));
    }
    forEach(t, n) {
        typeof n < "u" && (t = t.bind(n));
        for (const [r, s] of this.map)t(s.value, s.uri, this);
    }
    *values() {
        for (const t of this.map.values())yield t.value;
    }
    *keys() {
        for (const t of this.map.values())yield t.uri;
    }
    *entries() {
        for (const t of this.map.values())yield [
            t.uri,
            t.value
        ];
    }
    *[(A4 = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, t] of this.map)yield [
            t.uri,
            t.value
        ];
    }
}, eR.defaultToKey = (e)=>e.toString(), Yn = eR, tR = class {
    constructor(e, t){
        this[M4] = "ResourceSet", !e || typeof e == "function" ? this._map = new Yn(e) : (this._map = new Yn(t), e.forEach(this.add, this));
    }
    get size() {
        return this._map.size;
    }
    add(e) {
        return this._map.set(e, e), this;
    }
    clear() {
        this._map.clear();
    }
    delete(e) {
        return this._map.delete(e);
    }
    forEach(e, t) {
        this._map.forEach((n, r)=>e.call(t, r, r, this));
    }
    has(e) {
        return this._map.has(e);
    }
    *entries() {
        for (const e of this._map.entries())yield e;
    }
    *keys() {
        yield* this._map.keys();
    }
    *values() {
        yield* this._map.keys();
    }
    [(M4 = Symbol.toStringTag, Symbol.iterator)]() {
        return this.keys();
    }
}, D4 = class {
    constructor(){
        this[P4] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
    }
    clear() {
        this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
    }
    isEmpty() {
        return !this._head && !this._tail;
    }
    get size() {
        return this._size;
    }
    get first() {
        return this._head?.value;
    }
    get last() {
        return this._tail?.value;
    }
    has(e) {
        return this._map.has(e);
    }
    get(e, t = 0) {
        const n = this._map.get(e);
        if (n) return t !== 0 && this.touch(n, t), n.value;
    }
    set(e, t, n = 0) {
        let r = this._map.get(e);
        if (r) r.value = t, n !== 0 && this.touch(r, n);
        else {
            switch(r = {
                key: e,
                value: t,
                next: void 0,
                previous: void 0
            }, n){
                case 0:
                    this.addItemLast(r);
                    break;
                case 1:
                    this.addItemFirst(r);
                    break;
                case 2:
                    this.addItemLast(r);
                    break;
                default:
                    this.addItemLast(r);
                    break;
            }
            this._map.set(e, r), this._size++;
        }
        return this;
    }
    delete(e) {
        return !!this.remove(e);
    }
    remove(e) {
        const t = this._map.get(e);
        if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
    }
    shift() {
        if (!this._head && !this._tail) return;
        if (!this._head || !this._tail) throw new Error("Invalid list");
        const e = this._head;
        return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
    }
    forEach(e, t) {
        const n = this._state;
        let r = this._head;
        for(; r;){
            if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
            r = r.next;
        }
    }
    keys() {
        return this.iterateLinked(this._state, this._head, (e)=>e.key);
    }
    values() {
        return this.iterateLinked(this._state, this._head, (e)=>e.value);
    }
    entries() {
        return this.iterateLinked(this._state, this._head, (e)=>[
                e.key,
                e.value
            ]);
    }
    *iterateLinked(e, t, n) {
        for(;;){
            if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
            if (!t) return;
            const r = n(t);
            t = t.next, yield r;
        }
    }
    [(P4 = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
    }
    trimOld(e) {
        if (e >= this.size) return;
        if (e === 0) {
            this.clear();
            return;
        }
        let t = this._head, n = this.size;
        for(; t && n > e;)this._map.delete(t.key), t = t.next, n--;
        this._head = t, this._size = n, t && (t.previous = void 0), this._state++;
    }
    trimNew(e) {
        if (e >= this.size) return;
        if (e === 0) {
            this.clear();
            return;
        }
        let t = this._tail, n = this.size;
        for(; t && n > e;)this._map.delete(t.key), t = t.previous, n--;
        this._tail = t, this._size = n, t && (t.next = void 0), this._state++;
    }
    addItemFirst(e) {
        if (!this._head && !this._tail) this._tail = e;
        else if (this._head) e.next = this._head, this._head.previous = e;
        else throw new Error("Invalid list");
        this._head = e, this._state++;
    }
    addItemLast(e) {
        if (!this._head && !this._tail) this._head = e;
        else if (this._tail) e.previous = this._tail, this._tail.next = e;
        else throw new Error("Invalid list");
        this._tail = e, this._state++;
    }
    removeItem(e) {
        if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
        else if (e === this._head) {
            if (!e.next) throw new Error("Invalid list");
            e.next.previous = void 0, this._head = e.next;
        } else if (e === this._tail) {
            if (!e.previous) throw new Error("Invalid list");
            e.previous.next = void 0, this._tail = e.previous;
        } else {
            const t = e.next, n = e.previous;
            if (!t || !n) throw new Error("Invalid list");
            t.previous = n, n.next = t;
        }
        e.next = void 0, e.previous = void 0, this._state++;
    }
    touch(e, t) {
        if (!this._head || !this._tail) throw new Error("Invalid list");
        if (!(t !== 1 && t !== 2)) {
            if (t === 1) {
                if (e === this._head) return;
                const n = e.next, r = e.previous;
                e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
            } else if (t === 2) {
                if (e === this._tail) return;
                const n = e.next, r = e.previous;
                e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = r, r.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
            }
        }
    }
    toJSON() {
        const e = [];
        return this.forEach((t, n)=>{
            e.push([
                n,
                t
            ]);
        }), e;
    }
    fromJSON(e) {
        this.clear();
        for (const [t, n] of e)this.set(t, n);
    }
}, O4 = class extends D4 {
    constructor(e, t = 1){
        super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
    }
    get limit() {
        return this._limit;
    }
    set limit(e) {
        this._limit = e, this.checkTrim();
    }
    get ratio() {
        return this._ratio;
    }
    set ratio(e) {
        this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
    }
    get(e, t = 2) {
        return super.get(e, t);
    }
    peek(e) {
        return super.get(e, 0);
    }
    set(e, t) {
        return super.set(e, t, 2), this;
    }
    checkTrim() {
        this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
    }
}, Pl = class extends O4 {
    constructor(e, t = 1){
        super(e, t);
    }
    trim(e) {
        this.trimOld(e);
    }
    set(e, t) {
        return super.set(e, t), this.checkTrim(), this;
    }
}, L4 = class {
    constructor(e){
        if (this._m1 = new Map, this._m2 = new Map, e) for (const [t, n] of e)this.set(t, n);
    }
    clear() {
        this._m1.clear(), this._m2.clear();
    }
    set(e, t) {
        this._m1.set(e, t), this._m2.set(t, e);
    }
    get(e) {
        return this._m1.get(e);
    }
    getKey(e) {
        return this._m2.get(e);
    }
    delete(e) {
        const t = this._m1.get(e);
        return t === void 0 ? !1 : (this._m1.delete(e), this._m2.delete(t), !0);
    }
    forEach(e, t) {
        this._m1.forEach((n, r)=>{
            e.call(t, n, r, this);
        });
    }
    keys() {
        return this._m1.keys();
    }
    values() {
        return this._m1.values();
    }
}, U4 = class {
    constructor(){
        this.map = new Map;
    }
    add(e, t) {
        let n = this.map.get(e);
        n || (n = new Set, this.map.set(e, n)), n.add(t);
    }
    delete(e, t) {
        const n = this.map.get(e);
        n && (n.delete(t), n.size === 0 && this.map.delete(e));
    }
    forEach(e, t) {
        const n = this.map.get(e);
        n && n.forEach(t);
    }
    get(e) {
        const t = this.map.get(e);
        return t || new Set;
    }
};

}
