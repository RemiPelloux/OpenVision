var n;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SetWithKey = void 0, exports.groupBy = function(e, t) {
    const n = Object.create(null);
    for (const i of e){
        const e = t(i);
        let r = n[e];
        r || (r = n[e] = []), r.push(i);
    }
    return n;
}, exports.diffSets = function(e, t) {
    const n = [], i = [];
    for (const i of e)t.has(i) || n.push(i);
    for (const n of t)e.has(n) || i.push(n);
    return {
        removed: n,
        added: i
    };
}, exports.diffMaps = function(e, t) {
    const n = [], i = [];
    for (const [i, r] of e)t.has(i) || n.push(r);
    for (const [n, r] of t)e.has(n) || i.push(r);
    return {
        removed: n,
        added: i
    };
}, exports.intersection = function(e, t) {
    const n = new Set;
    for (const i of t)e.has(i) && n.add(i);
    return n;
};
class i {
    static{
        n = Symbol.toStringTag;
    }
    constructor(e, t){
        this.toKey = t, this._map = new Map, this[n] = "SetWithKey";
        for (const t of e)this.add(t);
    }
    get size() {
        return this._map.size;
    }
    add(e) {
        const t = this.toKey(e);
        return this._map.set(t, e), this;
    }
    delete(e) {
        return this._map.delete(this.toKey(e));
    }
    has(e) {
        return this._map.has(this.toKey(e));
    }
    *entries() {
        for (const e of this._map.values())yield [
            e,
            e
        ];
    }
    keys() {
        return this.values();
    }
    *values() {
        for (const e of this._map.values())yield e;
    }
    clear() {
        this._map.clear();
    }
    forEach(e, t) {
        this._map.forEach((n)=>e.call(t, n, n, this));
    }
    [Symbol.iterator]() {
        return this.values();
    }
}
exports.SetWithKey = i;
