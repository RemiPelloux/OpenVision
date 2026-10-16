var __wakaru_require_dispatcher2_cache;
export function require_dispatcher2() {
if (__wakaru_require_dispatcher2_cache) return __wakaru_require_dispatcher2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dispatcher2_cache = module2;
"use strict";
var EventEmitter = require("node:events");
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
    compose(...args) {
        const interceptors = Array.isArray(args[0]) ? args[0] : args;
        let dispatch = this.dispatch.bind(this);
        for (const interceptor of interceptors){
            if (interceptor == null) {
                continue;
            }
            if (typeof interceptor !== "function") {
                throw new TypeError(`invalid interceptor, expected function received ${typeof interceptor}`);
            }
            dispatch = interceptor(dispatch);
            if (dispatch == null || typeof dispatch !== "function" || dispatch.length !== 2) {
                throw new TypeError("invalid interceptor");
            }
        }
        return new ComposedDispatcher(this, dispatch);
    }
};
var ComposedDispatcher = class extends Dispatcher {
    #dispatcher = null;
    #dispatch = null;
    constructor(dispatcher, dispatch){
        super();
        this.#dispatcher = dispatcher;
        this.#dispatch = dispatch;
    }
    dispatch(...args) {
        this.#dispatch(...args);
    }
    close(...args) {
        return this.#dispatcher.close(...args);
    }
    destroy(...args) {
        return this.#dispatcher.destroy(...args);
    }
};
module2.exports = Dispatcher;

return module2.exports;
}
