var n = require("./module-5045.js"), r = require("./module-7417.js"), o = require("./module-6187.js"), s = require("./module-2827.js");
function i(e, t, A) {
    if (arguments.length < 2 && (A = e, e = null, t = null), this.capacity = A, "number" != typeof this.capacity || this.capacity <= 0) throw new Error("mnemonist/lru-cache: capacity should be positive number.");
    if (!isFinite(this.capacity) || Math.floor(this.capacity) !== this.capacity) throw new Error("mnemonist/lru-cache: capacity should be a finite positive integer.");
    var n = o.getPointerArray(A);
    this.forward = new n(A), this.backward = new n(A), this.K = "function" == typeof e ? new e(A) : new Array(A), this.V = "function" == typeof t ? new t(A) : new Array(A), this.size = 0, this.head = 0, this.tail = 0, this.items = {};
}
i.prototype.clear = function() {
    this.size = 0, this.head = 0, this.tail = 0, this.items = {};
}, i.prototype.splayOnTop = function(e) {
    var t = this.head;
    if (this.head === e) return this;
    var A = this.backward[e], n = this.forward[e];
    return this.tail === e ? this.tail = A : this.backward[n] = A, this.forward[A] = n, this.backward[t] = e, this.head = e, this.forward[e] = t, this;
}, i.prototype.set = function(e, t) {
    var A = this.items[e];
    if (void 0 !== A) return this.splayOnTop(A), void (this.V[A] = t);
    this.size < this.capacity ? A = this.size++ : (A = this.tail, this.tail = this.backward[A], delete this.items[this.K[A]]), this.items[e] = A, this.K[A] = e, this.V[A] = t, this.forward[A] = this.head, this.backward[this.head] = A, this.head = A;
}, i.prototype.setpop = function(e, t) {
    var A = null, n = null, r = this.items[e];
    return void 0 !== r ? (this.splayOnTop(r), A = this.V[r], this.V[r] = t, {
        evicted: !1,
        key: e,
        value: A
    }) : (this.size < this.capacity ? r = this.size++ : (r = this.tail, this.tail = this.backward[r], A = this.V[r], n = this.K[r], delete this.items[n]), this.items[e] = r, this.K[r] = e, this.V[r] = t, this.forward[r] = this.head, this.backward[this.head] = r, this.head = r, n ? {
        evicted: !0,
        key: n,
        value: A
    } : null);
}, i.prototype.has = function(e) {
    return e in this.items;
}, i.prototype.get = function(e) {
    var t = this.items[e];
    if (void 0 !== t) return this.splayOnTop(t), this.V[t];
}, i.prototype.peek = function(e) {
    var t = this.items[e];
    if (void 0 !== t) return this.V[t];
}, i.prototype.forEach = function(e, t) {
    t = arguments.length > 1 ? t : this;
    for(var A = 0, n = this.size, r = this.head, o = this.K, s = this.V, i = this.forward; A < n;)e.call(t, s[r], o[r], this), r = i[r], A++;
}, i.prototype.keys = function() {
    var e = 0, t = this.size, A = this.head, r = this.K, o = this.forward;
    return new n(function() {
        if (e >= t) return {
            done: !0
        };
        var n = r[A];
        return ++e < t && (A = o[A]), {
            done: !1,
            value: n
        };
    });
}, i.prototype.values = function() {
    var e = 0, t = this.size, A = this.head, r = this.V, o = this.forward;
    return new n(function() {
        if (e >= t) return {
            done: !0
        };
        var n = r[A];
        return ++e < t && (A = o[A]), {
            done: !1,
            value: n
        };
    });
}, i.prototype.entries = function() {
    var e = 0, t = this.size, A = this.head, r = this.K, o = this.V, s = this.forward;
    return new n(function() {
        if (e >= t) return {
            done: !0
        };
        var n = r[A], i = o[A];
        return ++e < t && (A = s[A]), {
            done: !1,
            value: [
                n,
                i
            ]
        };
    });
}, "undefined" != typeof Symbol && (i.prototype[Symbol.iterator] = i.prototype.entries), i.prototype.inspect = function() {
    for(var e, t = new Map, A = this.entries(); !(e = A.next()).done;)t.set(e.value[0], e.value[1]);
    return Object.defineProperty(t, "constructor", {
        value: i,
        enumerable: !1
    }), t;
}, "undefined" != typeof Symbol && (i.prototype[Symbol.for("nodejs.util.inspect.custom")] = i.prototype.inspect), i.from = function(e, t, A, n) {
    if (arguments.length < 2) {
        if ("number" != typeof (n = s.guessLength(e))) throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
    } else 2 === arguments.length && (n = t, t = null, A = null);
    var o = new i(t, A, n);
    return r(e, function(e, t) {
        o.set(t, e);
    }), o;
}, module.exports = i;
