var __wakaru_require_context_values_cache;
export function require_context_values() {
if (__wakaru_require_context_values_cache) return __wakaru_require_context_values_cache;
var exports2 = {};
__wakaru_require_context_values_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createContextValues = createContextValues2;
exports2.createContextKey = createContextKey3;
function createContextValues2() {
    return {
        get (key) {
            return key.id in this ? this[key.id] : key.defaultValue;
        },
        set (key, value) {
            this[key.id] = value;
            return this;
        },
        delete (key) {
            delete this[key.id];
            return this;
        }
    };
}
function createContextKey3(defaultValue, options2) {
    return {
        id: Symbol(options2 === null || options2 === void 0 ? void 0 : options2.description),
        defaultValue
    };
}

return exports2;
}
