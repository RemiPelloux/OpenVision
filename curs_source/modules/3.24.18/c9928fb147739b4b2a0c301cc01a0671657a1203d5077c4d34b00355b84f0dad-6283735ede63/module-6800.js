Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.arrayOrObject = exports.argsArgArrayOrObject = void 0;
const { isArray: n } = Array, { getPrototypeOf: s, prototype: o, keys: r } = Object;
function t(e) {
    if (n(e)) return {
        args: e,
        keys: null
    };
    if ((a = e) && "object" == typeof a && s(a) === o) {
        const a = r(e);
        return {
            args: a.map((a)=>e[a]),
            keys: a
        };
    }
    var a;
    return null;
}
exports.argsArgArrayOrObject = function(e) {
    if (1 === e.length) {
        const a = t(e[0]);
        if (a) return a;
    }
    return {
        args: e,
        keys: null
    };
}, exports.arrayOrObject = t;
