function t(e) {
    if ("function" != typeof e) throw new Error("obliterator/iterator: expecting a function!");
    this.next = e;
}
"undefined" != typeof Symbol && (t.prototype[Symbol.iterator] = function() {
    return this;
}), t.of = function() {
    var e = arguments, A = e.length, n = 0;
    return new t(function() {
        return n >= A ? {
            done: !0
        } : {
            done: !1,
            value: e[n++]
        };
    });
}, t.empty = function() {
    return new t(function() {
        return {
            done: !0
        };
    });
}, t.fromSequence = function(e) {
    var A = 0, n = e.length;
    return new t(function() {
        return A >= n ? {
            done: !0
        } : {
            done: !1,
            value: e[A++]
        };
    });
}, t.is = function(e) {
    return e instanceof t || "object" == typeof e && null !== e && "function" == typeof e.next;
}, module.exports = t;
