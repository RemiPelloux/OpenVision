import { B0o, Fa, eAe, fQ, s6t, umr } from "./Iwo.js";
import { bo } from "./arrays.js";
import { E } from "./tslib.es6.js";
var ped, med, thn, ged, OEo, d_t, $Zn, Xq;
export { $Zn, OEo, Xq, d_t, ged, med, ped, thn };
var __wakaru_wve_initialized = false;
export function wve() {
if (__wakaru_wve_initialized) return;
__wakaru_wve_initialized = true;
"use strict";
E(), bo(), Fa(), ped = class {
    constructor(){
        this._value = "", this._pos = 0;
    }
    reset(t) {
        return this._value = t, this._pos = 0, this;
    }
    next() {
        return this._pos += 1, this;
    }
    hasNext() {
        return this._pos < this._value.length - 1;
    }
    cmp(t) {
        const e = t.charCodeAt(0), n = this._value.charCodeAt(this._pos);
        return e - n;
    }
    value() {
        return this._value[this._pos];
    }
}, med = class {
    constructor(t = !0){
        this._caseSensitive = t;
    }
    reset(t) {
        return this._value = t, this._from = 0, this._to = 0, this.next();
    }
    hasNext() {
        return this._to < this._value.length;
    }
    next() {
        this._from = this._to;
        let t = !0;
        for(; this._to < this._value.length; this._to++)if (this._value.charCodeAt(this._to) === 46) if (t) this._from++;
        else break;
        else t = !1;
        return this;
    }
    cmp(t) {
        return this._caseSensitive ? umr(t, this._value, 0, t.length, this._from, this._to) : s6t(t, this._value, 0, t.length, this._from, this._to);
    }
    value() {
        return this._value.substring(this._from, this._to);
    }
}, thn = class {
    constructor(t = !0, e = !0){
        this._splitOnBackslash = t, this._caseSensitive = e;
    }
    reset(t) {
        this._from = 0, this._to = 0, this._value = t, this._valueLen = t.length;
        for(let e = t.length - 1; e >= 0; e--, this._valueLen--){
            const n = this._value.charCodeAt(e);
            if (!(n === 47 || this._splitOnBackslash && n === 92)) break;
        }
        return this.next();
    }
    hasNext() {
        return this._to < this._valueLen;
    }
    next() {
        this._from = this._to;
        let t = !0;
        for(; this._to < this._valueLen; this._to++){
            const e = this._value.charCodeAt(this._to);
            if (e === 47 || this._splitOnBackslash && e === 92) if (t) this._from++;
            else break;
            else t = !1;
        }
        return this;
    }
    cmp(t) {
        return this._caseSensitive ? umr(t, this._value, 0, t.length, this._from, this._to) : s6t(t, this._value, 0, t.length, this._from, this._to);
    }
    value() {
        return this._value.substring(this._from, this._to);
    }
}, ged = class {
    constructor(t, e){
        this._ignorePathCasing = t, this._ignoreQueryAndFragment = e, this._states = [], this._stateIdx = 0;
    }
    reset(t) {
        return this._value = t, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new thn(!1, !this._ignorePathCasing(t)), this._pathIterator.reset(t.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(t) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
    }
    next() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
    }
    hasNext() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
    }
    cmp(t) {
        if (this._states[this._stateIdx] === 1) return eAe(t, this._value.scheme);
        if (this._states[this._stateIdx] === 2) return eAe(t, this._value.authority);
        if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(t);
        if (this._states[this._stateIdx] === 4) return fQ(t, this._value.query);
        if (this._states[this._stateIdx] === 5) return fQ(t, this._value.fragment);
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
}, OEo = class KQc {
    static wrap(e) {
        return e === void 0 ? KQc.Val : e;
    }
    static unwrap(e) {
        return e === KQc.Val ? void 0 : e;
    }
}, OEo.Val = Symbol("undefined_placeholder"), d_t = OEo, $Zn = class {
    constructor(){
        this.height = 1;
    }
    isEmpty() {
        return !this.left && !this.mid && !this.right && this.value === void 0;
    }
    rotateLeft() {
        const t = this.right;
        return this.right = t.left, t.left = this, this.updateHeight(), t.updateHeight(), t;
    }
    rotateRight() {
        const t = this.left;
        return this.left = t.right, t.right = this, this.updateHeight(), t.updateHeight(), t;
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
}, Xq = class lXi {
    static forUris(e = ()=>!1, n = ()=>!1) {
        return new lXi(new ged(e, n));
    }
    static forPaths(e = !1) {
        return new lXi(new thn(void 0, !e));
    }
    static forStrings() {
        return new lXi(new ped);
    }
    static forConfigKeys() {
        return new lXi(new med);
    }
    constructor(e){
        this._iter = e;
    }
    clear() {
        this._root = void 0;
    }
    fill(e, n) {
        if (n) {
            const i = n.slice(0);
            B0o(i);
            for (const r of i)this.set(r, e);
        } else {
            const i = e.slice(0);
            B0o(i);
            for (const r of i)this.set(r[0], r[1]);
        }
    }
    set(e, n) {
        const i = this._iter.reset(e);
        let r;
        this._root || (this._root = new $Zn, this._root.segment = i.value());
        const s = [];
        for(r = this._root;;){
            const a = i.cmp(r.segment);
            if (a > 0) r.left || (r.left = new $Zn, r.left.segment = i.value()), s.push([
                -1,
                r
            ]), r = r.left;
            else if (a < 0) r.right || (r.right = new $Zn, r.right.segment = i.value()), s.push([
                1,
                r
            ]), r = r.right;
            else if (i.hasNext()) i.next(), r.mid || (r.mid = new $Zn, r.mid.segment = i.value()), s.push([
                0,
                r
            ]), r = r.mid;
            else break;
        }
        const o = d_t.unwrap(r.value);
        r.value = d_t.wrap(n), r.key = e;
        for(let a = s.length - 1; a >= 0; a--){
            const l = s[a][1];
            l.updateHeight();
            const c = l.balanceFactor();
            if (c < -1 || c > 1) {
                const u = s[a][0], d = s[a + 1][0];
                if (u === 1 && d === 1) s[a][1] = l.rotateLeft();
                else if (u === -1 && d === -1) s[a][1] = l.rotateRight();
                else if (u === 1 && d === -1) l.right = s[a + 1][1] = s[a + 1][1].rotateRight(), s[a][1] = l.rotateLeft();
                else if (u === -1 && d === 1) l.left = s[a + 1][1] = s[a + 1][1].rotateLeft(), s[a][1] = l.rotateRight();
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
    get(e) {
        return d_t.unwrap(this._getNode(e)?.value);
    }
    _getNode(e) {
        const n = this._iter.reset(e);
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
    has(e) {
        const n = this._getNode(e);
        return !(n?.value === void 0 && n?.mid === void 0);
    }
    delete(e) {
        return this._delete(e, !1);
    }
    deleteSuperstr(e) {
        return this._delete(e, !0);
    }
    _delete(e, n) {
        const i = this._iter.reset(e), r = [];
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
                    const { key: a, value: l, segment: c } = o;
                    this._delete(o.key, !1), s.key = a, s.value = l, s.segment = c;
                }
            } else {
                const o = s.left ?? s.right;
                if (r.length > 0) {
                    const [a, l] = r[r.length - 1];
                    switch(a){
                        case -1:
                            l.left = o;
                            break;
                        case 0:
                            l.mid = o;
                            break;
                        case 1:
                            l.right = o;
                            break;
                    }
                } else this._root = o;
            }
            for(let o = r.length - 1; o >= 0; o--){
                const a = r[o][1];
                a.updateHeight();
                const l = a.balanceFactor();
                if (l > 1 ? (a.right.balanceFactor() >= 0 || (a.right = a.right.rotateRight()), r[o][1] = a.rotateLeft()) : l < -1 && (a.left.balanceFactor() <= 0 || (a.left = a.left.rotateLeft()), r[o][1] = a.rotateRight()), o > 0) switch(r[o - 1][0]){
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
    _min(e) {
        for(; e.left;)e = e.left;
        return e;
    }
    findSubstr(e) {
        const n = this._iter.reset(e);
        let i = this._root, r;
        for(; i;){
            const s = n.cmp(i.segment);
            if (s > 0) i = i.left;
            else if (s < 0) i = i.right;
            else if (n.hasNext()) n.next(), r = d_t.unwrap(i.value) || r, i = i.mid;
            else break;
        }
        return i && d_t.unwrap(i.value) || r;
    }
    findSuperstr(e) {
        return this._findSuperstrOrElement(e, !1);
    }
    _findSuperstrOrElement(e, n) {
        const i = this._iter.reset(e);
        let r = this._root;
        for(; r;){
            const s = i.cmp(r.segment);
            if (s > 0) r = r.left;
            else if (s < 0) r = r.right;
            else if (i.hasNext()) i.next(), r = r.mid;
            else return r.mid ? this._entries(r.mid) : n ? d_t.unwrap(r.value) : void 0;
        }
    }
    hasElementOrSubtree(e) {
        return this._findSuperstrOrElement(e, !0) !== void 0;
    }
    forEach(e) {
        for (const [n, i] of this)e(i, n);
    }
    *[Symbol.iterator]() {
        yield* this._entries(this._root);
    }
    _entries(e) {
        const n = [];
        return this._dfsEntries(e, n), n[Symbol.iterator]();
    }
    _dfsEntries(e, n) {
        e && (e.left && this._dfsEntries(e.left, n), e.value !== void 0 && n.push([
            e.key,
            d_t.unwrap(e.value)
        ]), e.mid && this._dfsEntries(e.mid, n), e.right && this._dfsEntries(e.right, n));
    }
    _isBalanced() {
        const e = (n)=>{
            if (!n) return !0;
            const i = n.balanceFactor();
            return i < -1 || i > 1 ? !1 : e(n.left) && e(n.right);
        };
        return e(this._root);
    }
};

}
