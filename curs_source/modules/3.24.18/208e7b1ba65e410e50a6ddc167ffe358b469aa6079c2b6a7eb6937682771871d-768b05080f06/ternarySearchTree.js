import { Vn } from "./arrays.js";
import { TR } from "./resources.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
function E4(e, t) {
    let n;
    if (typeof t == "number") {
        let r = t;
        n = ()=>{
            const s = Math.sin(r++) * 179426549;
            return s - Math.floor(s);
        };
    } else n = Math.random;
    for(let r = e.length - 1; r > 0; r -= 1){
        const s = Math.floor(n() * (r + 1)), i = e[r];
        e[r] = e[s], e[s] = i;
    }
}
function kR(e, t, n = 0, r = e.length, s = 0, i = t.length) {
    for(; n < r && s < i; n++, s++){
        const l = e.charCodeAt(n), d = t.charCodeAt(s);
        if (l < d) return -1;
        if (l > d) return 1;
    }
    const a = r - n, o = i - s;
    return a < o ? -1 : a > o ? 1 : 0;
}
function SR(e, t) {
    return ec(e, t, 0, e.length, 0, t.length);
}
function ec(e, t, n = 0, r = e.length, s = 0, i = t.length) {
    for(; n < r && s < i; n++, s++){
        let l = e.charCodeAt(n), d = t.charCodeAt(s);
        if (l === d) continue;
        if (l >= 128 || d >= 128) return kR(e.toLowerCase(), t.toLowerCase(), n, r, s, i);
        p5(l) && (l -= 32), p5(d) && (d -= 32);
        const u = l - d;
        if (u !== 0) return u;
    }
    const a = r - n, o = i - s;
    return a < o ? -1 : a > o ? 1 : 0;
}
function p5(e) {
    return e >= 97 && e <= 122;
}
var a6, o6, W0, c6, B0, Za, cp, fa;
export { B0, E4, SR, W0, Za, a6, c6, cp, ec, fa, kR, o6, p5 };
var __wakaru_lc_initialized = false;
export function lc() {
if (__wakaru_lc_initialized) return;
__wakaru_lc_initialized = true;
"use strict";
h(), Vn(), jn(), a6 = class {
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
}, o6 = class {
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
        return this._caseSensitive ? kR(e, this._value, 0, e.length, this._from, this._to) : ec(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
        return this._value.substring(this._from, this._to);
    }
}, W0 = class {
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
        return this._caseSensitive ? kR(e, this._value, 0, e.length, this._from, this._to) : ec(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
        return this._value.substring(this._from, this._to);
    }
}, c6 = class {
    constructor(e, t){
        this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
    }
    reset(e) {
        return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new W0(!1, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
    }
    next() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
    }
    hasNext() {
        return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
    }
    cmp(e) {
        if (this._states[this._stateIdx] === 1) return SR(e, this._value.scheme);
        if (this._states[this._stateIdx] === 2) return SR(e, this._value.authority);
        if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
        if (this._states[this._stateIdx] === 4) return TR(e, this._value.query);
        if (this._states[this._stateIdx] === 5) return TR(e, this._value.fragment);
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
}, B0 = class Ex {
    static wrap(t) {
        return t === void 0 ? Ex.Val : t;
    }
    static unwrap(t) {
        return t === Ex.Val ? void 0 : t;
    }
}, B0.Val = Symbol("undefined_placeholder"), Za = B0, cp = class {
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
}, fa = class o_ {
    static forUris(t = ()=>!1, n = ()=>!1) {
        return new o_(new c6(t, n));
    }
    static forPaths(t = !1) {
        return new o_(new W0(void 0, !t));
    }
    static forStrings() {
        return new o_(new a6);
    }
    static forConfigKeys() {
        return new o_(new o6);
    }
    constructor(t){
        this._iter = t;
    }
    clear() {
        this._root = void 0;
    }
    fill(t, n) {
        if (n) {
            const r = n.slice(0);
            E4(r);
            for (const s of r)this.set(s, t);
        } else {
            const r = t.slice(0);
            E4(r);
            for (const s of r)this.set(s[0], s[1]);
        }
    }
    set(t, n) {
        const r = this._iter.reset(t);
        let s;
        this._root || (this._root = new cp, this._root.segment = r.value());
        const i = [];
        for(s = this._root;;){
            const o = r.cmp(s.segment);
            if (o > 0) s.left || (s.left = new cp, s.left.segment = r.value()), i.push([
                -1,
                s
            ]), s = s.left;
            else if (o < 0) s.right || (s.right = new cp, s.right.segment = r.value()), i.push([
                1,
                s
            ]), s = s.right;
            else if (r.hasNext()) r.next(), s.mid || (s.mid = new cp, s.mid.segment = r.value()), i.push([
                0,
                s
            ]), s = s.mid;
            else break;
        }
        const a = Za.unwrap(s.value);
        s.value = Za.wrap(n), s.key = t;
        for(let o = i.length - 1; o >= 0; o--){
            const l = i[o][1];
            l.updateHeight();
            const d = l.balanceFactor();
            if (d < -1 || d > 1) {
                const u = i[o][0], m = i[o + 1][0];
                if (u === 1 && m === 1) i[o][1] = l.rotateLeft();
                else if (u === -1 && m === -1) i[o][1] = l.rotateRight();
                else if (u === 1 && m === -1) l.right = i[o + 1][1] = i[o + 1][1].rotateRight(), i[o][1] = l.rotateLeft();
                else if (u === -1 && m === 1) l.left = i[o + 1][1] = i[o + 1][1].rotateLeft(), i[o][1] = l.rotateRight();
                else throw new Error;
                if (o > 0) switch(i[o - 1][0]){
                    case -1:
                        i[o - 1][1].left = i[o][1];
                        break;
                    case 1:
                        i[o - 1][1].right = i[o][1];
                        break;
                    case 0:
                        i[o - 1][1].mid = i[o][1];
                        break;
                }
                else this._root = i[0][1];
            }
        }
        return a;
    }
    get(t) {
        return Za.unwrap(this._getNode(t)?.value);
    }
    _getNode(t) {
        const n = this._iter.reset(t);
        let r = this._root;
        for(; r;){
            const s = n.cmp(r.segment);
            if (s > 0) r = r.left;
            else if (s < 0) r = r.right;
            else if (n.hasNext()) n.next(), r = r.mid;
            else break;
        }
        return r;
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
        const r = this._iter.reset(t), s = [];
        let i = this._root;
        for(; i;){
            const a = r.cmp(i.segment);
            if (a > 0) s.push([
                -1,
                i
            ]), i = i.left;
            else if (a < 0) s.push([
                1,
                i
            ]), i = i.right;
            else if (r.hasNext()) r.next(), s.push([
                0,
                i
            ]), i = i.mid;
            else break;
        }
        if (i) {
            if (n ? (i.left = void 0, i.mid = void 0, i.right = void 0, i.height = 1) : (i.key = void 0, i.value = void 0), !i.mid && !i.value) if (i.left && i.right) {
                const a = this._min(i.right);
                if (a.key) {
                    const { key: o, value: l, segment: d } = a;
                    this._delete(a.key, !1), i.key = o, i.value = l, i.segment = d;
                }
            } else {
                const a = i.left ?? i.right;
                if (s.length > 0) {
                    const [o, l] = s[s.length - 1];
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
            for(let a = s.length - 1; a >= 0; a--){
                const o = s[a][1];
                o.updateHeight();
                const l = o.balanceFactor();
                if (l > 1 ? (o.right.balanceFactor() >= 0 || (o.right = o.right.rotateRight()), s[a][1] = o.rotateLeft()) : l < -1 && (o.left.balanceFactor() <= 0 || (o.left = o.left.rotateLeft()), s[a][1] = o.rotateRight()), a > 0) switch(s[a - 1][0]){
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
    }
    _min(t) {
        for(; t.left;)t = t.left;
        return t;
    }
    findSubstr(t) {
        const n = this._iter.reset(t);
        let r = this._root, s;
        for(; r;){
            const i = n.cmp(r.segment);
            if (i > 0) r = r.left;
            else if (i < 0) r = r.right;
            else if (n.hasNext()) n.next(), s = Za.unwrap(r.value) || s, r = r.mid;
            else break;
        }
        return r && Za.unwrap(r.value) || s;
    }
    findSuperstr(t) {
        return this._findSuperstrOrElement(t, !1);
    }
    _findSuperstrOrElement(t, n) {
        const r = this._iter.reset(t);
        let s = this._root;
        for(; s;){
            const i = r.cmp(s.segment);
            if (i > 0) s = s.left;
            else if (i < 0) s = s.right;
            else if (r.hasNext()) r.next(), s = s.mid;
            else return s.mid ? this._entries(s.mid) : n ? Za.unwrap(s.value) : void 0;
        }
    }
    hasElementOrSubtree(t) {
        return this._findSuperstrOrElement(t, !0) !== void 0;
    }
    forEach(t) {
        for (const [n, r] of this)t(r, n);
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
            Za.unwrap(t.value)
        ]), t.mid && this._dfsEntries(t.mid, n), t.right && this._dfsEntries(t.right, n));
    }
    _isBalanced() {
        const t = (n)=>{
            if (!n) return !0;
            const r = n.balanceFactor();
            return r < -1 || r > 1 ? !1 : t(n.left) && t(n.right);
        };
        return t(this._root);
    }
};

}
