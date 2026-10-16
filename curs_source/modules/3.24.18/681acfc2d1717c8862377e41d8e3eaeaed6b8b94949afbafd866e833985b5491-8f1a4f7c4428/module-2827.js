var n = require("./module-7417.js"), r = require("./module-6187.js");
function o(e) {
    return "number" == typeof e.length ? e.length : "number" == typeof e.size ? e.size : void 0;
}
exports.isArrayLike = function(e) {
    return Array.isArray(e) || r.isTypedArray(e);
}, exports.guessLength = o, exports.toArray = function(e) {
    var t = o(e), A = "number" == typeof t ? new Array(t) : [], r = 0;
    return n(e, function(e) {
        A[r++] = e;
    }), A;
}, exports.toArrayWithIndices = function(e) {
    var t = o(e), A = "number" == typeof t ? r.getPointerArray(t) : Array, s = "number" == typeof t ? new Array(t) : [], i = "number" == typeof t ? new A(t) : [], a = 0;
    return n(e, function(e) {
        s[a] = e, i[a] = a++;
    }), [
        s,
        i
    ];
};
