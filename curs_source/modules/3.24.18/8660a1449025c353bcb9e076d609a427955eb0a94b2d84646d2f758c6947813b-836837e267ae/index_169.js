import { E } from "./tslib.es6.js";
var Ugi, XY, D1a, PJh;
export { D1a, PJh, Ugi, XY };
var __wakaru_E9S_initialized = false;
export function E9S() {
if (__wakaru_E9S_initialized) return;
__wakaru_E9S_initialized = true;
E(), Ugi = 200, XY = function() {}, XY.prototype.append = function(e) {
    return e.length ? (e = XY.from(e), !this.length && e || e.length < Ugi && this.leafAppend(e) || this.length < Ugi && e.leafPrepend(this) || this.appendInner(e)) : this;
}, XY.prototype.prepend = function(e) {
    return e.length ? XY.from(e).append(this) : this;
}, XY.prototype.appendInner = function(e) {
    return new PJh(this, e);
}, XY.prototype.slice = function(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? XY.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
}, XY.prototype.get = function(e) {
    if (!(e < 0 || e >= this.length)) return this.getInner(e);
}, XY.prototype.forEach = function(e, n, i) {
    n === void 0 && (n = 0), i === void 0 && (i = this.length), n <= i ? this.forEachInner(e, n, i, 0) : this.forEachInvertedInner(e, n, i, 0);
}, XY.prototype.map = function(e, n, i) {
    n === void 0 && (n = 0), i === void 0 && (i = this.length);
    var r = [];
    return this.forEach(function(s, o) {
        return r.push(e(s, o));
    }, n, i), r;
}, XY.from = function(e) {
    return e instanceof XY ? e : e && e.length ? new D1a(e) : XY.empty;
}, D1a = (function(t) {
    function e(i) {
        t.call(this), this.values = i;
    }
    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
    var n = {
        length: {
            configurable: !0
        },
        depth: {
            configurable: !0
        }
    };
    return e.prototype.flatten = function() {
        return this.values;
    }, e.prototype.sliceInner = function(r, s) {
        return r == 0 && s == this.length ? this : new e(this.values.slice(r, s));
    }, e.prototype.getInner = function(r) {
        return this.values[r];
    }, e.prototype.forEachInner = function(r, s, o, a) {
        for(var l = s; l < o; l++)if (r(this.values[l], a + l) === !1) return !1;
    }, e.prototype.forEachInvertedInner = function(r, s, o, a) {
        for(var l = s - 1; l >= o; l--)if (r(this.values[l], a + l) === !1) return !1;
    }, e.prototype.leafAppend = function(r) {
        if (this.length + r.length <= Ugi) return new e(this.values.concat(r.flatten()));
    }, e.prototype.leafPrepend = function(r) {
        if (this.length + r.length <= Ugi) return new e(r.flatten().concat(this.values));
    }, n.length.get = function() {
        return this.values.length;
    }, n.depth.get = function() {
        return 0;
    }, Object.defineProperties(e.prototype, n), e;
})(XY), XY.empty = new D1a([]), PJh = (function(t) {
    function e(n, i) {
        t.call(this), this.left = n, this.right = i, this.length = n.length + i.length, this.depth = Math.max(n.depth, i.depth) + 1;
    }
    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
        return this.left.flatten().concat(this.right.flatten());
    }, e.prototype.getInner = function(i) {
        return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
    }, e.prototype.forEachInner = function(i, r, s, o) {
        var a = this.left.length;
        if (r < a && this.left.forEachInner(i, r, Math.min(s, a), o) === !1 || s > a && this.right.forEachInner(i, Math.max(r - a, 0), Math.min(this.length, s) - a, o + a) === !1) return !1;
    }, e.prototype.forEachInvertedInner = function(i, r, s, o) {
        var a = this.left.length;
        if (r > a && this.right.forEachInvertedInner(i, r - a, Math.max(s, a) - a, o + a) === !1 || s < a && this.left.forEachInvertedInner(i, Math.min(r, a), s, o) === !1) return !1;
    }, e.prototype.sliceInner = function(i, r) {
        if (i == 0 && r == this.length) return this;
        var s = this.left.length;
        return r <= s ? this.left.slice(i, r) : i >= s ? this.right.slice(i - s, r - s) : this.left.slice(i, s).append(this.right.slice(0, r - s));
    }, e.prototype.leafAppend = function(i) {
        var r = this.right.leafAppend(i);
        if (r) return new e(this.left, r);
    }, e.prototype.leafPrepend = function(i) {
        var r = this.left.leafPrepend(i);
        if (r) return new e(r, this.right);
    }, e.prototype.appendInner = function(i) {
        return this.left.depth >= Math.max(this.right.depth, i.depth) + 1 ? new e(this.left, new e(this.right, i)) : new e(this, i);
    }, e;
})(XY);

}
