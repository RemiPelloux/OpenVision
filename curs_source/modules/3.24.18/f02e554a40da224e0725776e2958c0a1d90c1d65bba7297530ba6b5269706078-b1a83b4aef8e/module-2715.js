"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ParameterError = void 0, exports.isNonEmptyString = function(t) {
    return s(t) && "" !== t;
}, exports.isDate = function(t) {
    return t instanceof Date && o(t.getTime());
}, exports.isEmptyString = function(t) {
    return "" === t || t instanceof String && "" === t.toString();
}, exports.isString = s, exports.isObject = i, exports.isInteger = o, exports.validate = function(t, e, r) {
    if (t) return;
    const s = "function" == typeof e ? e : void 0;
    let o = "function" == typeof e ? r : e;
    i(o) || (o = "[object Object]");
    const u = new a((0, n.safeToString)(o));
    if (!s) throw u;
    s(u);
};
const n = require("./module-5779.js");
function s(t) {
    return "string" == typeof t || t instanceof String;
}
function i(t) {
    return "[object Object]" === (0, n.objectToString)(t);
}
function o(t) {
    return "number" == typeof t && t % 1 == 0;
}
class a extends Error {
}
exports.ParameterError = a;
