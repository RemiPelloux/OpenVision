"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.assertFloat32 = exports.assertUInt32 = exports.assertInt32 = exports.assert = void 0, exports.assert = function(t, e) {
    if (!t) throw new Error(e);
};
exports.assertInt32 = function(t) {
    if ("number" != typeof t) throw new Error("invalid int 32: " + typeof t);
    if (!Number.isInteger(t) || t > 2147483647 || t < -2147483648) throw new Error("invalid int 32: " + t);
}, exports.assertUInt32 = function(t) {
    if ("number" != typeof t) throw new Error("invalid uint 32: " + typeof t);
    if (!Number.isInteger(t) || t > 4294967295 || t < 0) throw new Error("invalid uint 32: " + t);
}, exports.assertFloat32 = function(t) {
    if ("number" != typeof t) throw new Error("invalid float 32: " + typeof t);
    if (Number.isFinite(t) && (t > 34028234663852886e22 || t < -34028234663852886e22)) throw new Error("invalid float 32: " + t);
};
