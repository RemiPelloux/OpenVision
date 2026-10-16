var e = function(t) {
    return t && t.Math === Math && t;
};
module.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof global && global) || e("object" == typeof this && this) || function() {
    return this;
}() || Function("return this")();
