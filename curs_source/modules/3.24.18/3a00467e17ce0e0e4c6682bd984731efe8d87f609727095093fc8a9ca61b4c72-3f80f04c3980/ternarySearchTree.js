import { kr } from "./arrays.js";
import { Zr } from "./resources.js";
import { Ke } from "./strings.js";
import { w } from "./tslib.es6.js";
function fs(e, t) {
    let r;
    if (typeof t == "number") {
        let s = t;
        r = ()=>{
            const i = Math.sin(s++) * 179426549;
            return i - Math.floor(i);
        };
    } else r = Math.random;
    for(let s = e.length - 1; s > 0; s -= 1){
        const i = Math.floor(r() * (s + 1)), n = e[s];
        e[s] = e[i], e[i] = n;
    }
}
function Xr(e, t, r = 0, s = e.length, i = 0, n = t.length) {
    for(; r < s && i < n; r++, i++){
        const l = e.charCodeAt(r), c = t.charCodeAt(i);
        if (l < c) return -1;
        if (l > c) return 1;
    }
    const a = s - r, o = n - i;
    return a < o ? -1 : a > o ? 1 : 0;
}
function fi(e, t) {
    return Ge(e, t, 0, e.length, 0, t.length);
}
function Ge(e, t, r = 0, s = e.length, i = 0, n = t.length) {
    for(; r < s && i < n; r++, i++){
        let l = e.charCodeAt(r), c = t.charCodeAt(i);
        if (l === c) continue;
        if (l >= 128 || c >= 128) return Xr(e.toLowerCase(), t.toLowerCase(), r, s, i, n);
        di(l) && (l -= 32), di(c) && (c -= 32);
        const h = l - c;
        if (h !== 0) return h;
    }
    const a = s - r, o = n - i;
    return a < o ? -1 : a > o ? 1 : 0;
}
function di(e) {
    return e >= 97 && e <= 122;
}
var bn, Cn, k1, En, P1, $e, Tt, nr;
export { $e, Cn, En, Ge, P1, Tt, Xr, bn, di, fi, fs, k1, nr };
var __wakaru_F2_initialized = false;
export function F2() {
if (__wakaru_F2_initialized) return;
__wakaru_F2_initialized = true;
"use strict";
w(), kr(), Ke(), bn = class {
    constructor(){
        this._value = "", this._pos = 0;
    }
    reset(e) {
        return this._value = e, this._pos = 0, this;
    }
    next() {
        return this._pos += 1, this;
    }
    hasNext() {
        return this._pos < this._value.length - 1;
    }
    cmp(e) {
        const t = e.charCodeAt(0), r = this._value.charCodeAt(this._pos);
        return t - r;
    }
    value() {
        return this._value[this._pos];
    }
}, Cn = class {
    constructor(e = !0){
        this._caseSensitive = e;
    }
    reset(e) {
        return this._value = e, this._from = 0, this._to = 0, this.next();
    }
    hasNext() {
        return this._to < this._value.length;
    }
    next() {
        this._from = this._to;
        let e = !0;
        for(; this._to < this._value.length; this._to++)if (this._value.charCodeAt(this._to) === 46) if (e) this._from++;
        else break;
        else e = !1;
        return this;
    }
    cmp(e) {
        return this._caseSensitive ? Xr(e, this._value, 0, e.length, this._from, this._to) : Ge(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
        return this._value.substring(this._from, this._to);
    }
}, k1 = class {
    constructor(e = !0, t = !0){
        this._splitOnBackslash = e, this._caseSensitive = t;
    }
    reset(e) {
        this._from = 0, this._to = 0, this._value = e, this._valueLen = e.length;
        for(let t = e.length - 1; t >= 0; t--, this._valueLen--){
            const r = this._value.charCodeAt(t);
            if (!(r === 47 || this._splitOnBackslash && r === 92)) break;
        }
        return this.next();
    }
    hasNext() {
        return this._to < this._valueLen;
    }
    next() {
        this._from = this._to;
        let e = !0;
        for(; this._to < this._valueLen; this._to++){
            const t = this._value.charCodeAt(this._to);
            if (t === 47 || this._splitOnBackslash && t === 92) if (e) this._from++;
            else break;
            else e = !1;
        }
        return this;
    }
    cmp(e) {
        return this._caseSensitive ? Xr(e, this._value, 0, e.length, this._from, this._to) : Ge(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
        return this._value.substring(this._from, this._to);
    }
}, En = class {
    constructor(e, t){
        this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
    }
    reset(e) {
        return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new k1(!1, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
    }
    next() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
    }
    hasNext() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
    }
    cmp(e) {
        if (this._states[this._stateIdx] === 1) return fi(e, this._value.scheme);
        if (this._states[this._stateIdx] === 2) return fi(e, this._value.authority);
        if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
        if (this._states[this._stateIdx] === 4) return Zr(e, this._value.query);
        if (this._states[this._stateIdx] === 5) return Zr(e, this._value.fragment);
        throw new Error;
    }
    value() {
        if (this._states[this._stateIdx] === 1) return this._value.scheme;
        if (this._states[this._stateIdx] === 2) return this._value.authority;
        if (this._states[this._stateIdx] === 3) return this._pathIterator.value();
        if (this._states[this._stateIdx] === 4) return this._value.query;
        if (this._states[this._stateIdx] === 5) return this._value.fragment;
        throw new Error;
    }
}, P1 = class es {
    static wrap(t) {
        return t === void 0 ? es.Val : t;
    }
    static unwrap(t) {
        return t === es.Val ? void 0 : t;
    }
}, P1.Val = Symbol("undefined_placeholder"), $e = P1, Tt = class {
    constructor(){
        this.height = 1;
    }
    isEmpty() {
        return !this.left && !this.mid && !this.right && this.value === void 0;
    }
    rotateLeft() {
        const e = this.right;
        return this.right = e.left, e.left = this, this.updateHeight(), e.updateHeight(), e;
    }
    rotateRight() {
        const e = this.left;
        return this.left = e.right, e.right = this, this.updateHeight(), e.updateHeight(), e;
    }
    updateHeight() {
        this.height = 1 + Math.max(this.heightLeft, this.heightRight);
    }
    balanceFactor() {
        return this.heightRight - this.heightLeft;
    }
    get heightLeft() {
        return this.left?.height ?? 0;
    }
    get heightRight() {
        return this.right?.height ?? 0;
    }
}, nr = class Nt {
    static forUris(t = ()=>!1, r = ()=>!1) {
        return new Nt(new En(t, r));
    }
    static forPaths(t = !1) {
        return new Nt(new k1(void 0, !t));
    }
    static forStrings() {
        return new Nt(new bn);
    }
    static forConfigKeys() {
        return new Nt(new Cn);
    }
    constructor(t){
        this._iter = t;
    }
    clear() {
        this._root = void 0;
    }
    fill(t, r) {
        if (r) {
            const s = r.slice(0);
            fs(s);
            for (const i of s)this.set(i, t);
        } else {
            const s = t.slice(0);
            fs(s);
            for (const i of s)this.set(i[0], i[1]);
        }
    }
    set(t, r) {
        const s = this._iter.reset(t);
        let i;
        this._root || (this._root = new Tt, this._root.segment = s.value());
        const n = [];
        for(i = this._root;;){
            const o = s.cmp(i.segment);
            if (o > 0) i.left || (i.left = new Tt, i.left.segment = s.value()), n.push([
                -1,
                i
            ]), i = i.left;
            else if (o < 0) i.right || (i.right = new Tt, i.right.segment = s.value()), n.push([
                1,
                i
            ]), i = i.right;
            else if (s.hasNext()) s.next(), i.mid || (i.mid = new Tt, i.mid.segment = s.value()), n.push([
                0,
                i
            ]), i = i.mid;
            else break;
        }
        const a = $e.unwrap(i.value);
        i.value = $e.wrap(r), i.key = t;
        for(let o = n.length - 1; o >= 0; o--){
            const l = n[o][1];
            l.updateHeight();
            const c = l.balanceFactor();
            if (c < -1 || c > 1) {
                const h = n[o][0], u = n[o + 1][0];
                if (h === 1 && u === 1) n[o][1] = l.rotateLeft();
                else if (h === -1 && u === -1) n[o][1] = l.rotateRight();
                else if (h === 1 && u === -1) l.right = n[o + 1][1] = n[o + 1][1].rotateRight(), n[o][1] = l.rotateLeft();
                else if (h === -1 && u === 1) l.left = n[o + 1][1] = n[o + 1][1].rotateLeft(), n[o][1] = l.rotateRight();
                else throw new Error;
                if (o > 0) switch(n[o - 1][0]){
                    case -1:
                        n[o - 1][1].left = n[o][1];
                        break;
                    case 1:
                        n[o - 1][1].right = n[o][1];
                        break;
                    case 0:
                        n[o - 1][1].mid = n[o][1];
                        break;
                }
                else this._root = n[0][1];
            }
        }
        return a;
    }
    get(t) {
        return $e.unwrap(this._getNode(t)?.value);
    }
    _getNode(t) {
        const r = this._iter.reset(t);
        let s = this._root;
        for(; s;){
            const i = r.cmp(s.segment);
            if (i > 0) s = s.left;
            else if (i < 0) s = s.right;
            else if (r.hasNext()) r.next(), s = s.mid;
            else break;
        }
        return s;
    }
    has(t) {
        const r = this._getNode(t);
        return !(r?.value === void 0 && r?.mid === void 0);
    }
    delete(t) {
        return this._delete(t, !1);
    }
    deleteSuperstr(t) {
        return this._delete(t, !0);
    }
    _delete(t, r) {
        const s = this._iter.reset(t), i = [];
        let n = this._root;
        for(; n;){
            const a = s.cmp(n.segment);
            if (a > 0) i.push([
                -1,
                n
            ]), n = n.left;
            else if (a < 0) i.push([
                1,
                n
            ]), n = n.right;
            else if (s.hasNext()) s.next(), i.push([
                0,
                n
            ]), n = n.mid;
            else break;
        }
        if (n) {
            if (r ? (n.left = void 0, n.mid = void 0, n.right = void 0, n.height = 1) : (n.key = void 0, n.value = void 0), !n.mid && !n.value) if (n.left && n.right) {
                const a = this._min(n.right);
                if (a.key) {
                    const { key: o, value: l, segment: c } = a;
                    this._delete(a.key, !1), n.key = o, n.value = l, n.segment = c;
                }
            } else {
                const a = n.left ?? n.right;
                if (i.length > 0) {
                    const [o, l] = i[i.length - 1];
                    switch(o){
                        case -1:
                            l.left = a;
                            break;
                        case 0:
                            l.mid = a;
                            break;
                        case 1:
                            l.right = a;
                            break;
                    }
                } else this._root = a;
            }
            for(let a = i.length - 1; a >= 0; a--){
                const o = i[a][1];
                o.updateHeight();
                const l = o.balanceFactor();
                if (l > 1 ? (o.right.balanceFactor() >= 0 || (o.right = o.right.rotateRight()), i[a][1] = o.rotateLeft()) : l < -1 && (o.left.balanceFactor() <= 0 || (o.left = o.left.rotateLeft()), i[a][1] = o.rotateRight()), a > 0) switch(i[a - 1][0]){
                    case -1:
                        i[a - 1][1].left = i[a][1];
                        break;
                    case 1:
                        i[a - 1][1].right = i[a][1];
                        break;
                    case 0:
                        i[a - 1][1].mid = i[a][1];
                        break;
                }
                else this._root = i[0][1];
            }
        }
    }
    _min(t) {
        for(; t.left;)t = t.left;
        return t;
    }
    findSubstr(t) {
        const r = this._iter.reset(t);
        let s = this._root, i;
        for(; s;){
            const n = r.cmp(s.segment);
            if (n > 0) s = s.left;
            else if (n < 0) s = s.right;
            else if (r.hasNext()) r.next(), i = $e.unwrap(s.value) || i, s = s.mid;
            else break;
        }
        return s && $e.unwrap(s.value) || i;
    }
    findSuperstr(t) {
        return this._findSuperstrOrElement(t, !1);
    }
    _findSuperstrOrElement(t, r) {
        const s = this._iter.reset(t);
        let i = this._root;
        for(; i;){
            const n = s.cmp(i.segment);
            if (n > 0) i = i.left;
            else if (n < 0) i = i.right;
            else if (s.hasNext()) s.next(), i = i.mid;
            else return i.mid ? this._entries(i.mid) : r ? $e.unwrap(i.value) : void 0;
        }
    }
    hasElementOrSubtree(t) {
        return this._findSuperstrOrElement(t, !0) !== void 0;
    }
    forEach(t) {
        for (const [r, s] of this)t(s, r);
    }
    *[Symbol.iterator]() {
        yield* this._entries(this._root);
    }
    _entries(t) {
        const r = [];
        return this._dfsEntries(t, r), r[Symbol.iterator]();
    }
    _dfsEntries(t, r) {
        t && (t.left && this._dfsEntries(t.left, r), t.value !== void 0 && r.push([
            t.key,
            $e.unwrap(t.value)
        ]), t.mid && this._dfsEntries(t.mid, r), t.right && this._dfsEntries(t.right, r));
    }
    _isBalanced() {
        const t = (r)=>{
            if (!r) return !0;
            const s = r.balanceFactor();
            return s < -1 || s > 1 ? !1 : t(r.left) && t(r.right);
        };
        return t(this._root);
    }
};

}
