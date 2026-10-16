var n, i, r;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NKeyMap = exports.SetMap = exports.BidirectionalMap = exports.CounterSet = exports.MRUCache = exports.LRUCache = exports.LinkedMap = exports.ResourceSet = exports.ResourceMap = void 0, exports.getOrSet = function(e, t, n) {
    let i = e.get(t);
    void 0 === i && (i = n, e.set(t, i));
    return i;
}, exports.mapToString = function(e) {
    const t = [];
    return e.forEach((e, n)=>{
        t.push(`${n} => ${e}`);
    }), `Map(${e.size}) {${t.join(", ")}}`;
}, exports.setToString = function(e) {
    const t = [];
    return e.forEach((e)=>{
        t.push(e);
    }), `Set(${e.size}) {${t.join(", ")}}`;
}, exports.mapsStrictEqualIgnoreOrder = function(e, t) {
    if (e === t) return !0;
    if (e.size !== t.size) return !1;
    for (const [n, i] of e)if (!t.has(n) || t.get(n) !== i) return !1;
    for (const [n] of t)if (!e.has(n)) return !1;
    return !0;
};
class s {
    constructor(e, t){
        this.uri = e, this.value = t;
    }
}
class o {
    static{
        this.defaultToKey = (e)=>e.toString();
    }
    constructor(e, t){
        if (this[n] = "ResourceMap", e instanceof o) this.map = new Map(e.map), this.toKey = t ?? o.defaultToKey;
        else if (function(e) {
            return Array.isArray(e);
        }(e)) {
            this.map = new Map, this.toKey = t ?? o.defaultToKey;
            for (const [t, n] of e)this.set(t, n);
        } else this.map = new Map, this.toKey = e ?? o.defaultToKey;
    }
    set(e, t) {
        return this.map.set(this.toKey(e), new s(e, t)), this;
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
    forEach(e, t) {
        void 0 !== t && (e = e.bind(t));
        for (const [t, n] of this.map)e(n.value, n.uri, this);
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
    *[(n = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, e] of this.map)yield [
            e.uri,
            e.value
        ];
    }
}
exports.ResourceMap = o;
class a {
    constructor(e, t){
        this[i] = "ResourceSet", e && "function" != typeof e ? (this._map = new o(t), e.forEach(this.add, this)) : this._map = new o(e);
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
    [(i = Symbol.toStringTag, Symbol.iterator)]() {
        return this.keys();
    }
}
exports.ResourceSet = a;
class u {
    constructor(){
        this[r] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
        if (n) return 0 !== t && this.touch(n, t), n.value;
    }
    set(e, t, n = 0) {
        let i = this._map.get(e);
        if (i) i.value = t, 0 !== n && this.touch(i, n);
        else {
            switch(i = {
                key: e,
                value: t,
                next: void 0,
                previous: void 0
            }, n){
                case 0:
                case 2:
                default:
                    this.addItemLast(i);
                    break;
                case 1:
                    this.addItemFirst(i);
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
    [(r = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
    }
    trimOld(e) {
        if (e >= this.size) return;
        if (0 === e) return void this.clear();
        let t = this._head, n = this.size;
        for(; t && n > e;)this._map.delete(t.key), t = t.next, n--;
        this._head = t, this._size = n, t && (t.previous = void 0), this._state++;
    }
    trimNew(e) {
        if (e >= this.size) return;
        if (0 === e) return void this.clear();
        let t = this._tail, n = this.size;
        for(; t && n > e;)this._map.delete(t.key), t = t.previous, n--;
        this._tail = t, this._size = n, t && (t.next = void 0), this._state++;
    }
    addItemFirst(e) {
        if (this._head || this._tail) {
            if (!this._head) throw new Error("Invalid list");
            e.next = this._head, this._head.previous = e;
        } else this._tail = e;
        this._head = e, this._state++;
    }
    addItemLast(e) {
        if (this._head || this._tail) {
            if (!this._tail) throw new Error("Invalid list");
            e.previous = this._tail, this._tail.next = e;
        } else this._head = e;
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
        if (1 === t || 2 === t) {
            if (1 === t) {
                if (e === this._head) return;
                const t = e.next, n = e.previous;
                e === this._tail ? (n.next = void 0, this._tail = n) : (t.previous = n, n.next = t), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
            } else if (2 === t) {
                if (e === this._tail) return;
                const t = e.next, n = e.previous;
                e === this._head ? (t.previous = void 0, this._head = t) : (t.previous = n, n.next = t), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
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
}
exports.LinkedMap = u;
class l extends u {
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
}
exports.LRUCache = class extends l {
    constructor(e, t = 1){
        super(e, t);
    }
    trim(e) {
        this.trimOld(e);
    }
    set(e, t) {
        return super.set(e, t), this.checkTrim(), this;
    }
};
exports.MRUCache = class extends l {
    constructor(e, t = 1){
        super(e, t);
    }
    trim(e) {
        this.trimNew(e);
    }
    set(e, t) {
        return this._limit <= this.size && !this.has(e) && this.trim(Math.round(this._limit * this._ratio) - 1), super.set(e, t), this;
    }
};
exports.CounterSet = class {
    constructor(){
        this.map = new Map;
    }
    add(e) {
        return this.map.set(e, (this.map.get(e) || 0) + 1), this;
    }
    delete(e) {
        let t = this.map.get(e) || 0;
        return 0 !== t && (t--, 0 === t ? this.map.delete(e) : this.map.set(e, t), !0);
    }
    has(e) {
        return this.map.has(e);
    }
};
exports.BidirectionalMap = class {
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
        return void 0 !== t && (this._m1.delete(e), this._m2.delete(t), !0);
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
};
exports.SetMap = class {
    constructor(){
        this.map = new Map;
    }
    add(e, t) {
        let n = this.map.get(e);
        n || (n = new Set, this.map.set(e, n)), n.add(t);
    }
    delete(e, t) {
        const n = this.map.get(e);
        n && (n.delete(t), 0 === n.size && this.map.delete(e));
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
exports.NKeyMap = class {
    constructor(){
        this._data = new Map;
    }
    set(e, ...t) {
        let n = this._data;
        for(let e = 0; e < t.length - 1; e++)n.has(t[e]) || n.set(t[e], new Map), n = n.get(t[e]);
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
        yield* function* e(t) {
            for (const n of t.values())n instanceof Map ? yield* e(n) : yield n;
        }(this._data);
    }
    toString() {
        const e = (t, n)=>{
            let i = "";
            for (const [r, s] of t)i += `${"  ".repeat(n)}${r}: `, s instanceof Map ? i += "\n" + e(s, n + 1) : i += `${s}\n`;
            return i;
        };
        return e(this._data, 0);
    }
};
