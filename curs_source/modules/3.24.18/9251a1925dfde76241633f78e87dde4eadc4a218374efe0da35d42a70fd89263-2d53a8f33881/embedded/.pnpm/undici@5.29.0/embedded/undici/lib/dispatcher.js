var __wakaru_require_dispatcher_cache;
export function require_dispatcher() {
if (__wakaru_require_dispatcher_cache) return __wakaru_require_dispatcher_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dispatcher_cache = module2;
"use strict";
var EventEmitter = require("events");
var Dispatcher = class extends EventEmitter {
    dispatch() {
        throw new Error("not implemented");
    }
    close() {
        throw new Error("not implemented");
    }
    destroy() {
        throw new Error("not implemented");
    }
};
module2.exports = Dispatcher;

return module2.exports;
}
