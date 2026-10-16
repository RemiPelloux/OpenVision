var __wakaru_require_global_cache;
export function require_global() {
if (__wakaru_require_global_cache) return __wakaru_require_global_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_global_cache = module2;
"use strict";
var globalOrigin = Symbol.for("undici.globalOrigin.1");
function getGlobalOrigin() {
    return globalThis[globalOrigin];
}
function setGlobalOrigin(newOrigin) {
    if (newOrigin === void 0) {
        Object.defineProperty(globalThis, globalOrigin, {
            value: void 0,
            writable: true,
            enumerable: false,
            configurable: false
        });
        return;
    }
    const parsedURL = new URL(newOrigin);
    if (parsedURL.protocol !== "http:" && parsedURL.protocol !== "https:") {
        throw new TypeError(`Only http & https urls are allowed, received ${parsedURL.protocol}`);
    }
    Object.defineProperty(globalThis, globalOrigin, {
        value: parsedURL,
        writable: true,
        enumerable: false,
        configurable: false
    });
}
module2.exports = {
    getGlobalOrigin,
    setGlobalOrigin
};

return module2.exports;
}
