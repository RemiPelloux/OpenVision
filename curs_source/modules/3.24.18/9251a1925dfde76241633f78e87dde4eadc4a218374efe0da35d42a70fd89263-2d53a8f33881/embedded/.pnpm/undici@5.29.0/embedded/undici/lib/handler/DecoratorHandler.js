var __wakaru_require_DecoratorHandler_cache;
export function require_DecoratorHandler() {
if (__wakaru_require_DecoratorHandler_cache) return __wakaru_require_DecoratorHandler_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_DecoratorHandler_cache = module2;
"use strict";
module2.exports = class DecoratorHandler {
    constructor(handler){
        this.handler = handler;
    }
    onConnect(...args) {
        return this.handler.onConnect(...args);
    }
    onError(...args) {
        return this.handler.onError(...args);
    }
    onUpgrade(...args) {
        return this.handler.onUpgrade(...args);
    }
    onHeaders(...args) {
        return this.handler.onHeaders(...args);
    }
    onData(...args) {
        return this.handler.onData(...args);
    }
    onComplete(...args) {
        return this.handler.onComplete(...args);
    }
    onBodySent(...args) {
        return this.handler.onBodySent(...args);
    }
};

return module2.exports;
}
