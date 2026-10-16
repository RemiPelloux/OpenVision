"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.assertFloat32 = exports.assertUInt32 = exports.assertInt32 = exports.assert = void 0, exports.assert = function(e, A) {
    if (!e) throw new Error(A);
};
exports.assertInt32 = function(e) {
    if ("number" != typeof e) throw new Error("invalid int 32: " + typeof e);
    if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648) throw new Error("invalid int 32: " + e);
}, exports.assertUInt32 = function(e) {
    if ("number" != typeof e) throw new Error("invalid uint 32: " + typeof e);
    if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw new Error("invalid uint 32: " + e);
}, exports.assertFloat32 = function(e) {
    if ("number" != typeof e) throw new Error("invalid float 32: " + typeof e);
    if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22)) throw new Error("invalid float 32: " + e);
};
