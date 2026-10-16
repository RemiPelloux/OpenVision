import { Vlg } from "./HVr.js";
import { x } from "./tslib.es6.js";
var jEc, qEc, zEc, KEc, Jjr, Mc, yO, Jke, rNt, eqr, ag, YEc, tqr, XEc, sNt, Apn;
export { Apn, Jjr, Jke, KEc, Mc, XEc, YEc, ag, eqr, jEc, qEc, rNt, sNt, tqr, yO, zEc };
var __wakaru_oc_initialized = false;
export function oc() {
if (__wakaru_oc_initialized) return;
__wakaru_oc_initialized = true;
"use strict";
x(), KEc = class {
    constructor(e, t){
        this.uri = e, this.value = t;
    }
}, Jjr = class IXn {
    constructor(t, n){
        if (this[jEc] = "ResourceMap", t instanceof IXn) this.map = new Map(t.map), this.toKey = n ?? IXn.defaultToKey;
        else if (Vlg(t)) {
            this.map = new Map, this.toKey = n ?? IXn.defaultToKey;
            for (const [i, r] of t)this.set(i, r);
        } else this.map = new Map, this.toKey = t ?? IXn.defaultToKey;
    }
    set(t, n) {
        return this.map.set(this.toKey(t), new KEc(t, n)), this;
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
        for (const [i, r] of this.map)t(r.value, r.uri, this);
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
    *[(jEc = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, t] of this.map)yield [
            t.uri,
            t.value
        ];
    }
}, Jjr.defaultToKey = (e)=>e.toString(), Mc = Jjr, yO = class {
    constructor(e, t){
        this[qEc] = "ResourceSet", !e || typeof e == "function" ? this._map = new Mc(e) : (this._map = new Mc(t), e.forEach(this.add, this));
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
        this._map.forEach((n, i)=>e.call(t, i, i, this));
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
    [(qEc = Symbol.toStringTag, Symbol.iterator)]() {
        return this.keys();
    }
}, Jke = ((e)=>(e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew", e))(Jke || {}), rNt = class {
    constructor(){
        this[zEc] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
        let i = this._map.get(e);
        if (i) i.value = t, n !== 0 && this.touch(i, n);
        else {
            switch(i = {
                key: e,
                value: t,
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
            this._map.set(e, i), this._size++;
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
        let i = this._head;
        for(; i;){
            if (t ? e.bind(t)(i.value, i.key, this) : e(i.value, i.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
            i = i.next;
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
            const i = n(t);
            t = t.next, yield i;
        }
    }
    [(zEc = Symbol.toStringTag, Symbol.iterator)]() {
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
                const n = e.next, i = e.previous;
                e === this._tail ? (i.next = void 0, this._tail = i) : (n.previous = i, i.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
            } else if (t === 2) {
                if (e === this._tail) return;
                const n = e.next, i = e.previous;
                e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = i, i.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
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
}, eqr = class extends rNt {
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
}, ag = class extends eqr {
    constructor(e, t = 1){
        super(e, t);
    }
    trim(e) {
        this.trimOld(e);
    }
    set(e, t) {
        return super.set(e, t), this.checkTrim(), this;
    }
}, YEc = class extends eqr {
    constructor(e, t = 1){
        super(e, t);
    }
    trim(e) {
        this.trimNew(e);
    }
    set(e, t) {
        return this._limit <= this.size && !this.has(e) && this.trim(Math.round(this._limit * this._ratio) - 1), super.set(e, t), this;
    }
}, tqr = class {
    constructor(){
        this.map = new Map;
    }
    add(e) {
        return this.map.set(e, (this.map.get(e) || 0) + 1), this;
    }
    delete(e) {
        let t = this.map.get(e) || 0;
        return t === 0 ? !1 : (t--, t === 0 ? this.map.delete(e) : this.map.set(e, t), !0);
    }
    has(e) {
        return this.map.has(e);
    }
}, XEc = class {
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
        this._m1.forEach((n, i)=>{
            e.call(t, n, i, this);
        });
    }
    keys() {
        return this._m1.keys();
    }
    values() {
        return this._m1.values();
    }
}, sNt = class {
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
}, Apn = class {
    constructor(){
        this._data = new Map;
    }
    set(e, ...t) {
        let n = this._data;
        for(let i = 0; i < t.length - 1; i++)n.has(t[i]) || n.set(t[i], new Map), n = n.get(t[i]);
        n.set(t[t.length - 1], e);
    }
    get(...e) {
        let t = this._data;
        for(let n = 0; n < e.length - 1; n++){
            if (!t.has(e[n])) return;
            t = t.get(e[n]);
        }
        return t.get(e[e.length - 1]);
    }
    clear() {
        this._data.clear();
    }
    *values() {
        function* e(t) {
            for (const n of t.values())n instanceof Map ? yield* e(n) : yield n;
        }
        yield* e(this._data);
    }
    toString() {
        const e = (t, n)=>{
            let i = "";
            for (const [r, s] of t)i += `${"  ".repeat(n)}${r}: `, s instanceof Map ? i += `
` + e(s, n + 1) : i += `${s}
`;
            return i;
        };
        return e(this._data, 0);
    }
};

}
