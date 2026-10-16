import { Ipn, Ps, aht, n5, pmi, vge } from "./HVr.js";
import { dr } from "./arrays.js";
import { x } from "./tslib.es6.js";
var i2c, r2c, J2t, s2c, DZr, mze, Bgn, J9;
export { Bgn, DZr, J2t, J9, i2c, mze, r2c, s2c };
var __wakaru_gJ_initialized = false;
export function gJ() {
if (__wakaru_gJ_initialized) return;
__wakaru_gJ_initialized = true;
"use strict";
x(), dr(), Ps(), i2c = class {
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
        const t = e.charCodeAt(0), n = this._value.charCodeAt(this._pos);
        return t - n;
    }
    value() {
        return this._value[this._pos];
    }
}, r2c = class {
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
        return this._caseSensitive ? pmi(e, this._value, 0, e.length, this._from, this._to) : aht(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
        return this._value.substring(this._from, this._to);
    }
}, J2t = class {
    constructor(e = !0, t = !0){
        this._splitOnBackslash = e, this._caseSensitive = t;
    }
    reset(e) {
        this._from = 0, this._to = 0, this._value = e, this._valueLen = e.length;
        for(let t = e.length - 1; t >= 0; t--, this._valueLen--){
            const n = this._value.charCodeAt(t);
            if (!(n === 47 || this._splitOnBackslash && n === 92)) break;
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
        return this._caseSensitive ? pmi(e, this._value, 0, e.length, this._from, this._to) : aht(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
        return this._value.substring(this._from, this._to);
    }
}, s2c = class {
    constructor(e, t){
        this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
    }
    reset(e) {
        return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new J2t(!1, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
    }
    next() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
    }
    hasNext() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
    }
    cmp(e) {
        if (this._states[this._stateIdx] === 1) return vge(e, this._value.scheme);
        if (this._states[this._stateIdx] === 2) return vge(e, this._value.authority);
        if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
        if (this._states[this._stateIdx] === 4) return n5(e, this._value.query);
        if (this._states[this._stateIdx] === 5) return n5(e, this._value.fragment);
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
}, DZr = class bIa {
    static wrap(t) {
        return t === void 0 ? bIa.Val : t;
    }
    static unwrap(t) {
        return t === bIa.Val ? void 0 : t;
    }
}, DZr.Val = Symbol("undefined_placeholder"), mze = DZr, Bgn = class {
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
}, J9 = class BXn {
    static forUris(t = ()=>!1, n = ()=>!1) {
        return new BXn(new s2c(t, n));
    }
    static forPaths(t = !1) {
        return new BXn(new J2t(void 0, !t));
    }
    static forStrings() {
        return new BXn(new i2c);
    }
    static forConfigKeys() {
        return new BXn(new r2c);
    }
    constructor(t){
        this._iter = t;
    }
    clear() {
        this._root = void 0;
    }
    fill(t, n) {
        if (n) {
            const i = n.slice(0);
            Ipn(i);
            for (const r of i)this.set(r, t);
        } else {
            const i = t.slice(0);
            Ipn(i);
            for (const r of i)this.set(r[0], r[1]);
        }
    }
    set(t, n) {
        const i = this._iter.reset(t);
        let r;
        this._root || (this._root = new Bgn, this._root.segment = i.value());
        const s = [];
        for(r = this._root;;){
            const a = i.cmp(r.segment);
            if (a > 0) r.left || (r.left = new Bgn, r.left.segment = i.value()), s.push([
                -1,
                r
            ]), r = r.left;
            else if (a < 0) r.right || (r.right = new Bgn, r.right.segment = i.value()), s.push([
                1,
                r
            ]), r = r.right;
            else if (i.hasNext()) i.next(), r.mid || (r.mid = new Bgn, r.mid.segment = i.value()), s.push([
                0,
                r
            ]), r = r.mid;
            else break;
        }
        const o = mze.unwrap(r.value);
        r.value = mze.wrap(n), r.key = t;
        for(let a = s.length - 1; a >= 0; a--){
            const c = s[a][1];
            c.updateHeight();
            const l = c.balanceFactor();
            if (l < -1 || l > 1) {
                const u = s[a][0], h = s[a + 1][0];
                if (u === 1 && h === 1) s[a][1] = c.rotateLeft();
                else if (u === -1 && h === -1) s[a][1] = c.rotateRight();
                else if (u === 1 && h === -1) c.right = s[a + 1][1] = s[a + 1][1].rotateRight(), s[a][1] = c.rotateLeft();
                else if (u === -1 && h === 1) c.left = s[a + 1][1] = s[a + 1][1].rotateLeft(), s[a][1] = c.rotateRight();
                else throw new Error;
                if (a > 0) switch(s[a - 1][0]){
                    case -1:
                        s[a - 1][1].left = s[a][1];
                        break;
                    case 1:
                        s[a - 1][1].right = s[a][1];
                        break;
                    case 0:
                        s[a - 1][1].mid = s[a][1];
                        break;
                }
                else this._root = s[0][1];
            }
        }
        return o;
    }
    get(t) {
        return mze.unwrap(this._getNode(t)?.value);
    }
    _getNode(t) {
        const n = this._iter.reset(t);
        let i = this._root;
        for(; i;){
            const r = n.cmp(i.segment);
            if (r > 0) i = i.left;
            else if (r < 0) i = i.right;
            else if (n.hasNext()) n.next(), i = i.mid;
            else break;
        }
        return i;
    }
    has(t) {
        const n = this._getNode(t);
        return !(n?.value === void 0 && n?.mid === void 0);
    }
    delete(t) {
        return this._delete(t, !1);
    }
    deleteSuperstr(t) {
        return this._delete(t, !0);
    }
    _delete(t, n) {
        const i = this._iter.reset(t), r = [];
        let s = this._root;
        for(; s;){
            const o = i.cmp(s.segment);
            if (o > 0) r.push([
                -1,
                s
            ]), s = s.left;
            else if (o < 0) r.push([
                1,
                s
            ]), s = s.right;
            else if (i.hasNext()) i.next(), r.push([
                0,
                s
            ]), s = s.mid;
            else break;
        }
        if (s) {
            if (n ? (s.left = void 0, s.mid = void 0, s.right = void 0, s.height = 1) : (s.key = void 0, s.value = void 0), !s.mid && !s.value) if (s.left && s.right) {
                const o = this._min(s.right);
                if (o.key) {
                    const { key: a, value: c, segment: l } = o;
                    this._delete(o.key, !1), s.key = a, s.value = c, s.segment = l;
                }
            } else {
                const o = s.left ?? s.right;
                if (r.length > 0) {
                    const [a, c] = r[r.length - 1];
                    switch(a){
                        case -1:
                            c.left = o;
                            break;
                        case 0:
                            c.mid = o;
                            break;
                        case 1:
                            c.right = o;
                            break;
                    }
                } else this._root = o;
            }
            for(let o = r.length - 1; o >= 0; o--){
                const a = r[o][1];
                a.updateHeight();
                const c = a.balanceFactor();
                if (c > 1 ? (a.right.balanceFactor() >= 0 || (a.right = a.right.rotateRight()), r[o][1] = a.rotateLeft()) : c < -1 && (a.left.balanceFactor() <= 0 || (a.left = a.left.rotateLeft()), r[o][1] = a.rotateRight()), o > 0) switch(r[o - 1][0]){
                    case -1:
                        r[o - 1][1].left = r[o][1];
                        break;
                    case 1:
                        r[o - 1][1].right = r[o][1];
                        break;
                    case 0:
                        r[o - 1][1].mid = r[o][1];
                        break;
                }
                else this._root = r[0][1];
            }
        }
    }
    _min(t) {
        for(; t.left;)t = t.left;
        return t;
    }
    findSubstr(t) {
        const n = this._iter.reset(t);
        let i = this._root, r;
        for(; i;){
            const s = n.cmp(i.segment);
            if (s > 0) i = i.left;
            else if (s < 0) i = i.right;
            else if (n.hasNext()) n.next(), r = mze.unwrap(i.value) || r, i = i.mid;
            else break;
        }
        return i && mze.unwrap(i.value) || r;
    }
    findSuperstr(t) {
        return this._findSuperstrOrElement(t, !1);
    }
    _findSuperstrOrElement(t, n) {
        const i = this._iter.reset(t);
        let r = this._root;
        for(; r;){
            const s = i.cmp(r.segment);
            if (s > 0) r = r.left;
            else if (s < 0) r = r.right;
            else if (i.hasNext()) i.next(), r = r.mid;
            else return r.mid ? this._entries(r.mid) : n ? mze.unwrap(r.value) : void 0;
        }
    }
    hasElementOrSubtree(t) {
        return this._findSuperstrOrElement(t, !0) !== void 0;
    }
    forEach(t) {
        for (const [n, i] of this)t(i, n);
    }
    *[Symbol.iterator]() {
        yield* this._entries(this._root);
    }
    _entries(t) {
        const n = [];
        return this._dfsEntries(t, n), n[Symbol.iterator]();
    }
    _dfsEntries(t, n) {
        t && (t.left && this._dfsEntries(t.left, n), t.value !== void 0 && n.push([
            t.key,
            mze.unwrap(t.value)
        ]), t.mid && this._dfsEntries(t.mid, n), t.right && this._dfsEntries(t.right, n));
    }
    _isBalanced() {
        const t = (n)=>{
            if (!n) return !0;
            const i = n.balanceFactor();
            return i < -1 || i > 1 ? !1 : t(n.left) && t(n.right);
        };
        return t(this._root);
    }
};

}
