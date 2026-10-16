"use strict";
const n = require("./module-75940.js"), s = require("./module-58334.js");
exports.define = function(e, t, r) {
    Reflect.defineProperty(e, t, {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: r
    });
}, exports.isBuffer = function(e) {
    return "buffer" === s(e);
}, exports.isObject = function(e) {
    return "object" === s(e);
}, exports.toBuffer = function(e) {
    return "string" == typeof e ? Buffer.from(e) : e;
}, exports.toString = function(e) {
    if (exports.isBuffer(e)) return n(String(e));
    if ("string" != typeof e) throw new TypeError("expected input to be a string or buffer");
    return n(e);
}, exports.arrayify = function(e) {
    return e ? Array.isArray(e) ? e : [
        e
    ] : [];
}, exports.startsWith = function(e, t, r) {
    return "number" != typeof r && (r = t.length), e.slice(0, r) === t;
};
