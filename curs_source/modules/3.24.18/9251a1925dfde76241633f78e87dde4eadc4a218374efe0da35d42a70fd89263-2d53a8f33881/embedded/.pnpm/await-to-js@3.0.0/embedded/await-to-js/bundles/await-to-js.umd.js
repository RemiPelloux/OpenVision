var __wakaru_require_await_to_js_umd_cache;
export function require_await_to_js_umd() {
if (__wakaru_require_await_to_js_umd_cache) return __wakaru_require_await_to_js_umd_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_await_to_js_umd_cache = module2;
(function(global2, factory) {
    typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define([
        "exports"
    ], factory) : factory(global2.awaitToJs = {});
})(exports2, (function(exports3) {
    "use strict";
    function to3(promise, errorExt) {
        return promise.then(function(data) {
            return [
                null,
                data
            ];
        }).catch(function(err) {
            if (errorExt) {
                Object.assign(err, errorExt);
            }
            return [
                err,
                void 0
            ];
        });
    }
    exports3.to = to3;
    exports3["default"] = to3;
    Object.defineProperty(exports3, "__esModule", {
        value: true
    });
}));

return module2.exports;
}
