import { w } from "./tslib.es6.js";
function Vo(e) {
    return Array.isArray(e);
}
var ps, ms, gs, _s, Pr, Dr, zo, ys, vs, Wt, ws;
export { Dr, Pr, Vo, Wt, _s, gs, ms, ps, vs, ws, ys, zo };
var __wakaru_Tr_initialized = false;
export function Tr() {
if (__wakaru_Tr_initialized) return;
__wakaru_Tr_initialized = true;
"use strict";
w(), _s = class {
    constructor(e, t){
        this.uri = e, this.value = t;
    }
}, Pr = class Rt {
    constructor(t, r){
        if (this[ps] = "ResourceMap", t instanceof Rt) this.map = new Map(t.map), this.toKey = r ?? Rt.defaultToKey;
        else if (Vo(t)) {
            this.map = new Map, this.toKey = r ?? Rt.defaultToKey;
            for (const [s, i] of t)this.set(s, i);
        } else this.map = new Map, this.toKey = t ?? Rt.defaultToKey;
    }
    set(t, r) {
        return this.map.set(this.toKey(t), new _s(t, r)), this;
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
    forEach(t, r) {
        typeof r < "u" && (t = t.bind(r));
        for (const [s, i] of this.map)t(i.value, i.uri, this);
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
    *[(ps = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, t] of this.map)yield [
            t.uri,
            t.value
        ];
    }
}, Pr.defaultToKey = (e)=>e.toString(), Dr = Pr, zo = class {
    constructor(e, t){
        this[ms] = "ResourceSet", !e || typeof e == "function" ? this._map = new Dr(e) : (this._map = new Dr(t), e.forEach(this.add, this));
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
        this._map.forEach((r, s)=>e.call(t, s, s, this));
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
    [(ms = Symbol.toStringTag, Symbol.iterator)]() {
        return this.keys();
    }
}, ys = class {
    constructor(){
        this[gs] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
        const r = this._map.get(e);
        if (r) return t !== 0 && this.touch(r, t), r.value;
    }
    set(e, t, r = 0) {
        let s = this._map.get(e);
        if (s) s.value = t, r !== 0 && this.touch(s, r);
        else {
            switch(s = {
                key: e,
                value: t,
                next: void 0,
                previous: void 0
            }, r){
                case 0:
                    this.addItemLast(s);
                    break;
                case 1:
                    this.addItemFirst(s);
                    break;
                case 2:
                    this.addItemLast(s);
                    break;
                default:
                    this.addItemLast(s);
                    break;
            }
            this._map.set(e, s), this._size++;
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
        const r = this._state;
        let s = this._head;
        for(; s;){
            if (t ? e.bind(t)(s.value, s.key, this) : e(s.value, s.key, this), this._state !== r) throw new Error("LinkedMap got modified during iteration.");
            s = s.next;
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
    *iterateLinked(e, t, r) {
        for(;;){
            if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
            if (!t) return;
            const s = r(t);
            t = t.next, yield s;
        }
    }
    [(gs = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
    }
    trimOld(e) {
        if (e >= this.size) return;
        if (e === 0) {
            this.clear();
            return;
        }
        let t = this._head, r = this.size;
        for(; t && r > e;)this._map.delete(t.key), t = t.next, r--;
        this._head = t, this._size = r, t && (t.previous = void 0), this._state++;
    }
    trimNew(e) {
        if (e >= this.size) return;
        if (e === 0) {
            this.clear();
            return;
        }
        let t = this._tail, r = this.size;
        for(; t && r > e;)this._map.delete(t.key), t = t.previous, r--;
        this._tail = t, this._size = r, t && (t.next = void 0), this._state++;
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
            const t = e.next, r = e.previous;
            if (!t || !r) throw new Error("Invalid list");
            t.previous = r, r.next = t;
        }
        e.next = void 0, e.previous = void 0, this._state++;
    }
    touch(e, t) {
        if (!this._head || !this._tail) throw new Error("Invalid list");
        if (!(t !== 1 && t !== 2)) {
            if (t === 1) {
                if (e === this._head) return;
                const r = e.next, s = e.previous;
                e === this._tail ? (s.next = void 0, this._tail = s) : (r.previous = s, s.next = r), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
            } else if (t === 2) {
                if (e === this._tail) return;
                const r = e.next, s = e.previous;
                e === this._head ? (r.previous = void 0, this._head = r) : (r.previous = s, s.next = r), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
            }
        }
    }
    toJSON() {
        const e = [];
        return this.forEach((t, r)=>{
            e.push([
                r,
                t
            ]);
        }), e;
    }
    fromJSON(e) {
        this.clear();
        for (const [t, r] of e)this.set(t, r);
    }
}, vs = class extends ys {
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
}, Wt = class extends vs {
    constructor(e, t = 1){
        super(e, t);
    }
    trim(e) {
        this.trimOld(e);
    }
    set(e, t) {
        return super.set(e, t), this.checkTrim(), this;
    }
}, ws = class {
    constructor(){
        this.map = new Map;
    }
    add(e, t) {
        let r = this.map.get(e);
        r || (r = new Set, this.map.set(e, r)), r.add(t);
    }
    delete(e, t) {
        const r = this.map.get(e);
        r && (r.delete(t), r.size === 0 && this.map.delete(e));
    }
    forEach(e, t) {
        const r = this.map.get(e);
        r && r.forEach(t);
    }
    get(e) {
        const t = this.map.get(e);
        return t || new Set;
    }
};

}
