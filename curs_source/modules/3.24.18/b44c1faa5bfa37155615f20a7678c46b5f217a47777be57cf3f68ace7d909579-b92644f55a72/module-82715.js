"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ParameterError = void 0, exports.isNonEmptyString = function(e) {
    return s(e) && "" !== e;
}, exports.isDate = function(e) {
    return e instanceof Date && i(e.getTime());
}, exports.isEmptyString = function(e) {
    return "" === e || e instanceof String && "" === e.toString();
}, exports.isString = s, exports.isObject = o, exports.isInteger = i, exports.validate = function(e, t, r) {
    if (e) return;
    const s = "function" == typeof t ? t : void 0;
    let i = "function" == typeof t ? r : t;
    o(i) || (i = "[object Object]");
    const c = new a((0, n.safeToString)(i));
    if (!s) throw c;
    s(c);
};
const n = require("./module-95779.js");
function s(e) {
    return "string" == typeof e || e instanceof String;
}
function o(e) {
    return "[object Object]" === (0, n.objectToString)(e);
}
function i(e) {
    return "number" == typeof e && e % 1 == 0;
}
class a extends Error {
}
exports.ParameterError = a;
