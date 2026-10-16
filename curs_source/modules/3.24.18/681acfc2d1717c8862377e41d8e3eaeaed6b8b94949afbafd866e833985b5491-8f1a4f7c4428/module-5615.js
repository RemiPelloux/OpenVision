"function" == typeof Object.create ? module.exports = function(e, t) {
    t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }));
} : module.exports = function(e, t) {
    if (t) {
        e.super_ = t;
        var A = function() {};
        A.prototype = t.prototype, e.prototype = new A, e.prototype.constructor = e;
    }
};
