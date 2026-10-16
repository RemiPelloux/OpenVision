import { x } from "./tslib.es6.js";
var zTn, g$, HRs, aql;
export { HRs, aql, g$, zTn };
var __wakaru_hDf_initialized = false;
export function hDf() {
if (__wakaru_hDf_initialized) return;
__wakaru_hDf_initialized = true;
x(), zTn = 200, g$ = function() {}, g$.prototype.append = function(t) {
    return t.length ? (t = g$.from(t), !this.length && t || t.length < zTn && this.leafAppend(t) || this.length < zTn && t.leafPrepend(this) || this.appendInner(t)) : this;
}, g$.prototype.prepend = function(t) {
    return t.length ? g$.from(t).append(this) : this;
}, g$.prototype.appendInner = function(t) {
    return new aql(this, t);
}, g$.prototype.slice = function(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.length), t >= n ? g$.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, n));
}, g$.prototype.get = function(t) {
    if (!(t < 0 || t >= this.length)) return this.getInner(t);
}, g$.prototype.forEach = function(t, n, i) {
    n === void 0 && (n = 0), i === void 0 && (i = this.length), n <= i ? this.forEachInner(t, n, i, 0) : this.forEachInvertedInner(t, n, i, 0);
}, g$.prototype.map = function(t, n, i) {
    n === void 0 && (n = 0), i === void 0 && (i = this.length);
    var r = [];
    return this.forEach(function(s, o) {
        return r.push(t(s, o));
    }, n, i), r;
}, g$.from = function(t) {
    return t instanceof g$ ? t : t && t.length ? new HRs(t) : g$.empty;
}, HRs = (function(e) {
    function t(i) {
        e.call(this), this.values = i;
    }
    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
    var n = {
        length: {
            configurable: !0
        },
        depth: {
            configurable: !0
        }
    };
    return t.prototype.flatten = function() {
        return this.values;
    }, t.prototype.sliceInner = function(r, s) {
        return r == 0 && s == this.length ? this : new t(this.values.slice(r, s));
    }, t.prototype.getInner = function(r) {
        return this.values[r];
    }, t.prototype.forEachInner = function(r, s, o, a) {
        for(var c = s; c < o; c++)if (r(this.values[c], a + c) === !1) return !1;
    }, t.prototype.forEachInvertedInner = function(r, s, o, a) {
        for(var c = s - 1; c >= o; c--)if (r(this.values[c], a + c) === !1) return !1;
    }, t.prototype.leafAppend = function(r) {
        if (this.length + r.length <= zTn) return new t(this.values.concat(r.flatten()));
    }, t.prototype.leafPrepend = function(r) {
        if (this.length + r.length <= zTn) return new t(r.flatten().concat(this.values));
    }, n.length.get = function() {
        return this.values.length;
    }, n.depth.get = function() {
        return 0;
    }, Object.defineProperties(t.prototype, n), t;
})(g$), g$.empty = new HRs([]), aql = (function(e) {
    function t(n, i) {
        e.call(this), this.left = n, this.right = i, this.length = n.length + i.length, this.depth = Math.max(n.depth, i.depth) + 1;
    }
    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.flatten = function() {
        return this.left.flatten().concat(this.right.flatten());
    }, t.prototype.getInner = function(i) {
        return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
    }, t.prototype.forEachInner = function(i, r, s, o) {
        var a = this.left.length;
        if (r < a && this.left.forEachInner(i, r, Math.min(s, a), o) === !1 || s > a && this.right.forEachInner(i, Math.max(r - a, 0), Math.min(this.length, s) - a, o + a) === !1) return !1;
    }, t.prototype.forEachInvertedInner = function(i, r, s, o) {
        var a = this.left.length;
        if (r > a && this.right.forEachInvertedInner(i, r - a, Math.max(s, a) - a, o + a) === !1 || s < a && this.left.forEachInvertedInner(i, Math.min(r, a), s, o) === !1) return !1;
    }, t.prototype.sliceInner = function(i, r) {
        if (i == 0 && r == this.length) return this;
        var s = this.left.length;
        return r <= s ? this.left.slice(i, r) : i >= s ? this.right.slice(i - s, r - s) : this.left.slice(i, s).append(this.right.slice(0, r - s));
    }, t.prototype.leafAppend = function(i) {
        var r = this.right.leafAppend(i);
        if (r) return new t(this.left, r);
    }, t.prototype.leafPrepend = function(i) {
        var r = this.left.leafPrepend(i);
        if (r) return new t(r, this.right);
    }, t.prototype.appendInner = function(i) {
        return this.left.depth >= Math.max(this.right.depth, i.depth) + 1 ? new t(this.left, new t(this.right, i)) : new t(this, i);
    }, t;
})(g$);

}
