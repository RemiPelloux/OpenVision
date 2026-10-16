import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_dispatcher2 } from "./dispatcher.js";
var __wakaru_require_dispatcher_base2_cache;
export function require_dispatcher_base2() {
if (__wakaru_require_dispatcher_base2_cache) return __wakaru_require_dispatcher_base2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dispatcher_base2_cache = module2;
"use strict";
var Dispatcher = require_dispatcher2();
var { ClientDestroyedError, ClientClosedError, InvalidArgumentError: InvalidArgumentError3 } = require_errors2();
var { kDestroy, kClose, kClosed, kDestroyed, kDispatch, kInterceptors } = require_symbols6();
var kOnDestroyed = Symbol("onDestroyed");
var kOnClosed = Symbol("onClosed");
var kInterceptedDispatch = Symbol("Intercepted Dispatch");
var kWebSocketOptions = Symbol("webSocketOptions");
var DispatcherBase = class extends Dispatcher {
    constructor(opts){
        super();
        this[kDestroyed] = false;
        this[kOnDestroyed] = null;
        this[kClosed] = false;
        this[kOnClosed] = [];
        this[kWebSocketOptions] = opts?.webSocket ?? {};
    }
    get webSocketOptions() {
        return {
            maxFragments: this[kWebSocketOptions].maxFragments ?? 131072,
            maxPayloadSize: this[kWebSocketOptions].maxPayloadSize ?? 128 * 1024 * 1024
        };
    }
    get destroyed() {
        return this[kDestroyed];
    }
    get closed() {
        return this[kClosed];
    }
    get interceptors() {
        return this[kInterceptors];
    }
    set interceptors(newInterceptors) {
        if (newInterceptors) {
            for(let i = newInterceptors.length - 1; i >= 0; i--){
                const interceptor = this[kInterceptors][i];
                if (typeof interceptor !== "function") {
                    throw new InvalidArgumentError3("interceptor must be an function");
                }
            }
        }
        this[kInterceptors] = newInterceptors;
    }
    close(callback) {
        if (callback === void 0) {
            return new Promise((resolve36, reject2)=>{
                this.close((err, data)=>{
                    return err ? reject2(err) : resolve36(data);
                });
            });
        }
        if (typeof callback !== "function") {
            throw new InvalidArgumentError3("invalid callback");
        }
        if (this[kDestroyed]) {
            queueMicrotask(()=>callback(new ClientDestroyedError(), null));
            return;
        }
        if (this[kClosed]) {
            if (this[kOnClosed]) {
                this[kOnClosed].push(callback);
            } else {
                queueMicrotask(()=>callback(null, null));
            }
            return;
        }
        this[kClosed] = true;
        this[kOnClosed].push(callback);
        const onClosed = ()=>{
            const callbacks = this[kOnClosed];
            this[kOnClosed] = null;
            for(let i = 0; i < callbacks.length; i++){
                callbacks[i](null, null);
            }
        };
        this[kClose]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(onClosed);
        });
    }
    destroy(err, callback) {
        if (typeof err === "function") {
            callback = err;
            err = null;
        }
        if (callback === void 0) {
            return new Promise((resolve36, reject2)=>{
                this.destroy(err, (err2, data)=>{
                    return err2 ? (reject2(err2)) : resolve36(data);
                });
            });
        }
        if (typeof callback !== "function") {
            throw new InvalidArgumentError3("invalid callback");
        }
        if (this[kDestroyed]) {
            if (this[kOnDestroyed]) {
                this[kOnDestroyed].push(callback);
            } else {
                queueMicrotask(()=>callback(null, null));
            }
            return;
        }
        if (!err) {
            err = new ClientDestroyedError();
        }
        this[kDestroyed] = true;
        this[kOnDestroyed] = this[kOnDestroyed] || [];
        this[kOnDestroyed].push(callback);
        const onDestroyed = ()=>{
            const callbacks = this[kOnDestroyed];
            this[kOnDestroyed] = null;
            for(let i = 0; i < callbacks.length; i++){
                callbacks[i](null, null);
            }
        };
        this[kDestroy](err).then(()=>{
            queueMicrotask(onDestroyed);
        });
    }
    [kInterceptedDispatch](opts, handler) {
        if (!this[kInterceptors] || this[kInterceptors].length === 0) {
            this[kInterceptedDispatch] = this[kDispatch];
            return this[kDispatch](opts, handler);
        }
        let dispatch = this[kDispatch].bind(this);
        for(let i = this[kInterceptors].length - 1; i >= 0; i--){
            dispatch = this[kInterceptors][i](dispatch);
        }
        this[kInterceptedDispatch] = dispatch;
        return dispatch(opts, handler);
    }
    dispatch(opts, handler) {
        if (!handler || typeof handler !== "object") {
            throw new InvalidArgumentError3("handler must be an object");
        }
        try {
            if (!opts || typeof opts !== "object") {
                throw new InvalidArgumentError3("opts must be an object.");
            }
            if (this[kDestroyed] || this[kOnDestroyed]) {
                throw new ClientDestroyedError();
            }
            if (this[kClosed]) {
                throw new ClientClosedError();
            }
            return this[kInterceptedDispatch](opts, handler);
        } catch (err) {
            if (typeof handler.onError !== "function") {
                throw new InvalidArgumentError3("invalid onError method");
            }
            handler.onError(err);
            return false;
        }
    }
};
module2.exports = DispatcherBase;

return module2.exports;
}
