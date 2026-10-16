import { P_y } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var gYu, fYu, vYu, _Yu, H0o, gd, gQ, n$e, Hpr, W0o, kv, bYu, G0o, yYu, odn, zXn;
export { G0o, H0o, Hpr, W0o, _Yu, bYu, fYu, gQ, gYu, gd, kv, n$e, odn, vYu, yYu, zXn };
var __wakaru_du_initialized = false;
export function du() {
if (__wakaru_du_initialized) return;
__wakaru_du_initialized = true;
"use strict";
E(), _Yu = class {
    constructor(t, e){
        this.uri = t, this.value = e;
    }
}, H0o = class iXi {
    constructor(e, n){
        if (this[gYu] = "ResourceMap", e instanceof iXi) this.map = new Map(e.map), this.toKey = n ?? iXi.defaultToKey;
        else if (P_y(e)) {
            this.map = new Map, this.toKey = n ?? iXi.defaultToKey;
            for (const [i, r] of e)this.set(i, r);
        } else this.map = new Map, this.toKey = e ?? iXi.defaultToKey;
    }
    set(e, n) {
        return this.map.set(this.toKey(e), new _Yu(e, n)), this;
    }
    get(e) {
        return this.map.get(this.toKey(e))?.value;
    }
    has(e) {
        return this.map.has(this.toKey(e));
    }
    get size() {
        return this.map.size;
    }
    clear() {
        this.map.clear();
    }
    delete(e) {
        return this.map.delete(this.toKey(e));
    }
    forEach(e, n) {
        typeof n < "u" && (e = e.bind(n));
        for (const [i, r] of this.map)e(r.value, r.uri, this);
    }
    *values() {
        for (const e of this.map.values())yield e.value;
    }
    *keys() {
        for (const e of this.map.values())yield e.uri;
    }
    *entries() {
        for (const e of this.map.values())yield [
            e.uri,
            e.value
        ];
    }
    *[(gYu = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, e] of this.map)yield [
            e.uri,
            e.value
        ];
    }
}, H0o.defaultToKey = (t)=>t.toString(), gd = H0o, gQ = class {
    constructor(t, e){
        this[fYu] = "ResourceSet", !t || typeof t == "function" ? this._map = new gd(t) : (this._map = new gd(e), t.forEach(this.add, this));
    }
    get size() {
        return this._map.size;
    }
    add(t) {
        return this._map.set(t, t), this;
    }
    clear() {
        this._map.clear();
    }
    delete(t) {
        return this._map.delete(t);
    }
    forEach(t, e) {
        this._map.forEach((n, i)=>t.call(e, i, i, this));
    }
    has(t) {
        return this._map.has(t);
    }
    *entries() {
        for (const t of this._map.entries())yield t;
    }
    *keys() {
        yield* this._map.keys();
    }
    *values() {
        yield* this._map.keys();
    }
    [(fYu = Symbol.toStringTag, Symbol.iterator)]() {
        return this.keys();
    }
}, n$e = ((t)=>(t[t.None = 0] = "None", t[t.AsOld = 1] = "AsOld", t[t.AsNew = 2] = "AsNew", t))(n$e || {}), Hpr = class {
    constructor(){
        this[vYu] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
    has(t) {
        return this._map.has(t);
    }
    get(t, e = 0) {
        const n = this._map.get(t);
        if (n) return e !== 0 && this.touch(n, e), n.value;
    }
    set(t, e, n = 0) {
        let i = this._map.get(t);
        if (i) i.value = e, n !== 0 && this.touch(i, n);
        else {
            switch(i = {
                key: t,
                value: e,
                next: void 0,
                previous: void 0
            }, n){
                case 0:
                    this.addItemLast(i);
                    break;
                case 1:
                    this.addItemFirst(i);
                    break;
                case 2:
                    this.addItemLast(i);
                    break;
                default:
                    this.addItemLast(i);
                    break;
            }
            this._map.set(t, i), this._size++;
        }
        return this;
    }
    delete(t) {
        return !!this.remove(t);
    }
    remove(t) {
        const e = this._map.get(t);
        if (e) return this._map.delete(t), this.removeItem(e), this._size--, e.value;
    }
    shift() {
        if (!this._head && !this._tail) return;
        if (!this._head || !this._tail) throw new Error("Invalid list");
        const t = this._head;
        return this._map.delete(t.key), this.removeItem(t), this._size--, t.value;
    }
    forEach(t, e) {
        const n = this._state;
        let i = this._head;
        for(; i;){
            if (e ? t.bind(e)(i.value, i.key, this) : t(i.value, i.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
            i = i.next;
        }
    }
    keys() {
        return this.iterateLinked(this._state, this._head, (t)=>t.key);
    }
    values() {
        return this.iterateLinked(this._state, this._head, (t)=>t.value);
    }
    entries() {
        return this.iterateLinked(this._state, this._head, (t)=>[
                t.key,
                t.value
            ]);
    }
    *iterateLinked(t, e, n) {
        for(;;){
            if (this._state !== t) throw new Error("LinkedMap got modified during iteration.");
            if (!e) return;
            const i = n(e);
            e = e.next, yield i;
        }
    }
    [(vYu = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
    }
    trimOld(t) {
        if (t >= this.size) return;
        if (t === 0) {
            this.clear();
            return;
        }
        let e = this._head, n = this.size;
        for(; e && n > t;)this._map.delete(e.key), e = e.next, n--;
        this._head = e, this._size = n, e && (e.previous = void 0), this._state++;
    }
    trimNew(t) {
        if (t >= this.size) return;
        if (t === 0) {
            this.clear();
            return;
        }
        let e = this._tail, n = this.size;
        for(; e && n > t;)this._map.delete(e.key), e = e.previous, n--;
        this._tail = e, this._size = n, e && (e.next = void 0), this._state++;
    }
    addItemFirst(t) {
        if (!this._head && !this._tail) this._tail = t;
        else if (this._head) t.next = this._head, this._head.previous = t;
        else throw new Error("Invalid list");
        this._head = t, this._state++;
    }
    addItemLast(t) {
        if (!this._head && !this._tail) this._head = t;
        else if (this._tail) t.previous = this._tail, this._tail.next = t;
        else throw new Error("Invalid list");
        this._tail = t, this._state++;
    }
    removeItem(t) {
        if (t === this._head && t === this._tail) this._head = void 0, this._tail = void 0;
        else if (t === this._head) {
            if (!t.next) throw new Error("Invalid list");
            t.next.previous = void 0, this._head = t.next;
        } else if (t === this._tail) {
            if (!t.previous) throw new Error("Invalid list");
            t.previous.next = void 0, this._tail = t.previous;
        } else {
            const e = t.next, n = t.previous;
            if (!e || !n) throw new Error("Invalid list");
            e.previous = n, n.next = e;
        }
        t.next = void 0, t.previous = void 0, this._state++;
    }
    touch(t, e) {
        if (!this._head || !this._tail) throw new Error("Invalid list");
        if (!(e !== 1 && e !== 2)) {
            if (e === 1) {
                if (t === this._head) return;
                const n = t.next, i = t.previous;
                t === this._tail ? (i.next = void 0, this._tail = i) : (n.previous = i, i.next = n), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++;
            } else if (e === 2) {
                if (t === this._tail) return;
                const n = t.next, i = t.previous;
                t === this._head ? (n.previous = void 0, this._head = n) : (n.previous = i, i.next = n), t.next = void 0, t.previous = this._tail, this._tail.next = t, this._tail = t, this._state++;
            }
        }
    }
    toJSON() {
        const t = [];
        return this.forEach((e, n)=>{
            t.push([
                n,
                e
            ]);
        }), t;
    }
    fromJSON(t) {
        this.clear();
        for (const [e, n] of t)this.set(e, n);
    }
}, W0o = class extends Hpr {
    constructor(t, e = 1){
        super(), this._limit = t, this._ratio = Math.min(Math.max(0, e), 1);
    }
    get limit() {
        return this._limit;
    }
    set limit(t) {
        this._limit = t, this.checkTrim();
    }
    get ratio() {
        return this._ratio;
    }
    set ratio(t) {
        this._ratio = Math.min(Math.max(0, t), 1), this.checkTrim();
    }
    get(t, e = 2) {
        return super.get(t, e);
    }
    peek(t) {
        return super.get(t, 0);
    }
    set(t, e) {
        return super.set(t, e, 2), this;
    }
    checkTrim() {
        this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
    }
}, kv = class extends W0o {
    constructor(t, e = 1){
        super(t, e);
    }
    trim(t) {
        this.trimOld(t);
    }
    set(t, e) {
        return super.set(t, e), this.checkTrim(), this;
    }
}, bYu = class extends W0o {
    constructor(t, e = 1){
        super(t, e);
    }
    trim(t) {
        this.trimNew(t);
    }
    set(t, e) {
        return this._limit <= this.size && !this.has(t) && this.trim(Math.round(this._limit * this._ratio) - 1), super.set(t, e), this;
    }
}, G0o = class {
    constructor(){
        this.map = new Map;
    }
    add(t) {
        return this.map.set(t, (this.map.get(t) || 0) + 1), this;
    }
    delete(t) {
        let e = this.map.get(t) || 0;
        return e === 0 ? !1 : (e--, e === 0 ? this.map.delete(t) : this.map.set(t, e), !0);
    }
    has(t) {
        return this.map.has(t);
    }
}, yYu = class {
    constructor(t){
        if (this._m1 = new Map, this._m2 = new Map, t) for (const [e, n] of t)this.set(e, n);
    }
    clear() {
        this._m1.clear(), this._m2.clear();
    }
    set(t, e) {
        this._m1.set(t, e), this._m2.set(e, t);
    }
    get(t) {
        return this._m1.get(t);
    }
    getKey(t) {
        return this._m2.get(t);
    }
    delete(t) {
        const e = this._m1.get(t);
        return e === void 0 ? !1 : (this._m1.delete(t), this._m2.delete(e), !0);
    }
    forEach(t, e) {
        this._m1.forEach((n, i)=>{
            t.call(e, n, i, this);
        });
    }
    keys() {
        return this._m1.keys();
    }
    values() {
        return this._m1.values();
    }
}, odn = class {
    constructor(){
        this.map = new Map;
    }
    add(t, e) {
        let n = this.map.get(t);
        n || (n = new Set, this.map.set(t, n)), n.add(e);
    }
    delete(t, e) {
        const n = this.map.get(t);
        n && (n.delete(e), n.size === 0 && this.map.delete(t));
    }
    forEach(t, e) {
        const n = this.map.get(t);
        n && n.forEach(e);
    }
    get(t) {
        const e = this.map.get(t);
        return e || new Set;
    }
}, zXn = class {
    constructor(){
        this._data = new Map;
    }
    set(t, ...e) {
        let n = this._data;
        for(let i = 0; i < e.length - 1; i++)n.has(e[i]) || n.set(e[i], new Map), n = n.get(e[i]);
        n.set(e[e.length - 1], t);
    }
    get(...t) {
        let e = this._data;
        for(let n = 0; n < t.length - 1; n++){
            if (!e.has(t[n])) return;
            e = e.get(t[n]);
        }
        return e.get(t[t.length - 1]);
    }
    clear() {
        this._data.clear();
    }
    *values() {
        function* t(e) {
            for (const n of e.values())n instanceof Map ? yield* t(n) : yield n;
        }
        yield* t(this._data);
    }
    toString() {
        const t = (e, n)=>{
            let i = "";
            for (const [r, s] of e)i += `${"  ".repeat(n)}${r}: `, s instanceof Map ? i += `
` + t(s, n + 1) : i += `${s}
`;
            return i;
        };
        return t(this._data, 0);
    }
};

}
