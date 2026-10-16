"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.arrayOrObject = exports.argsArgArrayOrObject = void 0;
const { isArray: r } = Array, { getPrototypeOf: n, prototype: s, keys: o } = Object;
function i(e) {
    if (r(e)) return {
        args: e,
        keys: null
    };
    if ((t = e) && "object" == typeof t && n(t) === s) {
        const t = o(e);
        return {
            args: t.map((t)=>e[t]),
            keys: t
        };
    }
    var t;
    return null;
}
exports.argsArgArrayOrObject = function(e) {
    if (1 === e.length) {
        const t = i(e[0]);
        if (t) return t;
    }
    return {
        args: e,
        keys: null
    };
}, exports.arrayOrObject = i;
