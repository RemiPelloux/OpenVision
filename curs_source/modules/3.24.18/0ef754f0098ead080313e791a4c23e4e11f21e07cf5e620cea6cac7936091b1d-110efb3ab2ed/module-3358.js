var t = require("./module-7086.js");
function s(e) {
    var a = function() {
        return a.called ? a.value : (a.called = !0, a.value = e.apply(this, arguments));
    };
    return a.called = !1, a;
}
function o(e) {
    var a = function() {
        if (a.called) throw new Error(a.onceError);
        return a.called = !0, a.value = e.apply(this, arguments);
    }, n = e.name || "Function wrapped with `once`";
    return a.onceError = n + " shouldn't be called more than once", a.called = !1, a;
}
module.exports = t(s), module.exports.strict = t(o), s.proto = s(function() {
    Object.defineProperty(Function.prototype, "once", {
        value: function() {
            return s(this);
        },
        configurable: !0
    }), Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
            return o(this);
        },
        configurable: !0
    });
});
