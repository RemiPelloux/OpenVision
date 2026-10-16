import { h } from "./tslib.es6.js";
var b9e, Sb, am, R9e;
export { R9e, Sb, am, b9e };
var __wakaru_xlt_initialized = false;
export function xlt() {
if (__wakaru_xlt_initialized) return;
__wakaru_xlt_initialized = true;
"use strict";
h(), Sb = class {
    constructor(e, t, n){
        this.level = e, this.key = t, this.value = n, this.forward = [];
    }
}, am = void 0, R9e = class hm {
    constructor(t, n = 2 ** 16){
        this.comparator = t, this[b9e] = "SkipList", this._level = 0, this._size = 0, this._maxLevel = Math.max(1, Math.log2(n) | 0), this._header = new Sb(this._maxLevel, am, am);
    }
    get size() {
        return this._size;
    }
    clear() {
        this._header = new Sb(this._maxLevel, am, am), this._size = 0;
    }
    has(t) {
        return !!hm._search(this, t, this.comparator);
    }
    get(t) {
        return hm._search(this, t, this.comparator)?.value;
    }
    set(t, n) {
        return hm._insert(this, t, n, this.comparator) && (this._size += 1), this;
    }
    delete(t) {
        const n = hm._delete(this, t, this.comparator);
        return n && (this._size -= 1), n;
    }
    forEach(t, n) {
        let r = this._header.forward[0];
        for(; r;)t.call(n, r.value, r.key, this), r = r.forward[0];
    }
    [(b9e = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
    }
    *entries() {
        let t = this._header.forward[0];
        for(; t;)yield [
            t.key,
            t.value
        ], t = t.forward[0];
    }
    *keys() {
        let t = this._header.forward[0];
        for(; t;)yield t.key, t = t.forward[0];
    }
    *values() {
        let t = this._header.forward[0];
        for(; t;)yield t.value, t = t.forward[0];
    }
    toString() {
        let t = "[SkipList]:", n = this._header.forward[0];
        for(; n;)t += `node(${n.key}, ${n.value}, lvl:${n.level})`, n = n.forward[0];
        return t;
    }
    static _search(t, n, r) {
        let s = t._header;
        for(let i = t._level - 1; i >= 0; i--)for(; s.forward[i] && r(s.forward[i].key, n) < 0;)s = s.forward[i];
        if (s = s.forward[0], s && r(s.key, n) === 0) return s;
    }
    static _insert(t, n, r, s) {
        const i = [];
        let a = t._header;
        for(let o = t._level - 1; o >= 0; o--){
            for(; a.forward[o] && s(a.forward[o].key, n) < 0;)a = a.forward[o];
            i[o] = a;
        }
        if (a = a.forward[0], a && s(a.key, n) === 0) return a.value = r, !1;
        {
            const o = hm._randomLevel(t);
            if (o > t._level) {
                for(let l = t._level; l < o; l++)i[l] = t._header;
                t._level = o;
            }
            a = new Sb(o, n, r);
            for(let l = 0; l < o; l++)a.forward[l] = i[l].forward[l], i[l].forward[l] = a;
            return !0;
        }
    }
    static _randomLevel(t, n = .5) {
        let r = 1;
        for(; Math.random() < n && r < t._maxLevel;)r += 1;
        return r;
    }
    static _delete(t, n, r) {
        const s = [];
        let i = t._header;
        for(let a = t._level - 1; a >= 0; a--){
            for(; i.forward[a] && r(i.forward[a].key, n) < 0;)i = i.forward[a];
            s[a] = i;
        }
        if (i = i.forward[0], !i || r(i.key, n) !== 0) return !1;
        for(let a = 0; a < t._level && s[a].forward[a] === i; a++)s[a].forward[a] = i.forward[a];
        for(; t._level > 0 && t._header.forward[t._level - 1] === am;)t._level -= 1;
        return !0;
    }
};

}
