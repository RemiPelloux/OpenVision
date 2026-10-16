var __wakaru_require_argsArgArrayOrObject_cache;
export function require_argsArgArrayOrObject() {
if (__wakaru_require_argsArgArrayOrObject_cache) return __wakaru_require_argsArgArrayOrObject_cache;
var exports2 = {};
__wakaru_require_argsArgArrayOrObject_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.arrayOrObject = exports2.argsArgArrayOrObject = void 0;
var { isArray } = Array;
var { getPrototypeOf, prototype: objectProto, keys: getKeys } = Object;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        const first = args[0];
        const result = arrayOrObject(first);
        if (result) {
            return result;
        }
    }
    return {
        args,
        keys: null
    };
}
exports2.argsArgArrayOrObject = argsArgArrayOrObject;
function arrayOrObject(first) {
    if (isArray(first)) {
        return {
            args: first,
            keys: null
        };
    }
    if (isPOJO(first)) {
        const keys = getKeys(first);
        return {
            args: keys.map((key)=>first[key]),
            keys
        };
    }
    return null;
}
exports2.arrayOrObject = arrayOrObject;
function isPOJO(obj) {
    return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}

return exports2;
}
