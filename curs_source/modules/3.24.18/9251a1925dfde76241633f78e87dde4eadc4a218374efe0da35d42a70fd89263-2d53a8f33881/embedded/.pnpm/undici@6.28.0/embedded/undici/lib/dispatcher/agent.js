import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_util8 } from "../core/util.js";
import { require_client2 } from "./client.js";
import { require_dispatcher_base2 } from "./dispatcher-base.js";
import { require_pool2 } from "./pool.js";
import { require_redirect_interceptor } from "../interceptor/redirect-interceptor.js";
var __wakaru_require_agent2_cache;
export function require_agent2() {
if (__wakaru_require_agent2_cache) return __wakaru_require_agent2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_agent2_cache = module2;
"use strict";
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors2();
var { kClients, kRunning, kClose, kDestroy, kDispatch, kInterceptors } = require_symbols6();
var DispatcherBase = require_dispatcher_base2();
var Pool = require_pool2();
var Client2 = require_client2();
var util2 = require_util8();
var createRedirectInterceptor = require_redirect_interceptor();
var kOnConnect = Symbol("onConnect");
var kOnDisconnect = Symbol("onDisconnect");
var kOnConnectionError = Symbol("onConnectionError");
var kMaxRedirections = Symbol("maxRedirections");
var kOnDrain = Symbol("onDrain");
var kFactory = Symbol("factory");
var kOptions = Symbol("options");
function defaultFactory(origin, opts) {
    return opts && opts.connections === 1 ? new Client2(origin, opts) : new Pool(origin, opts);
}
var Agent = class extends DispatcherBase {
    constructor({ factory = defaultFactory, maxRedirections = 0, connect: connect3, ...options2 } = {}){
        if (typeof factory !== "function") {
            throw new InvalidArgumentError3("factory must be a function.");
        }
        if (connect3 != null && typeof connect3 !== "function" && typeof connect3 !== "object") {
            throw new InvalidArgumentError3("connect must be a function or an object");
        }
        if (!Number.isInteger(maxRedirections) || maxRedirections < 0) {
            throw new InvalidArgumentError3("maxRedirections must be a positive number");
        }
        super(options2);
        if (connect3 && typeof connect3 !== "function") {
            connect3 = {
                ...connect3
            };
        }
        this[kInterceptors] = options2.interceptors?.Agent && Array.isArray(options2.interceptors.Agent) ? options2.interceptors.Agent : [
            createRedirectInterceptor({
                maxRedirections
            })
        ];
        this[kOptions] = {
            ...util2.deepClone(options2),
            connect: connect3
        };
        this[kOptions].interceptors = options2.interceptors ? {
            ...options2.interceptors
        } : void 0;
        this[kMaxRedirections] = maxRedirections;
        this[kFactory] = factory;
        this[kClients] = new Map();
        this[kOnDrain] = (origin, targets)=>{
            this.emit("drain", origin, [
                this,
                ...targets
            ]);
        };
        this[kOnConnect] = (origin, targets)=>{
            this.emit("connect", origin, [
                this,
                ...targets
            ]);
        };
        this[kOnDisconnect] = (origin, targets, err)=>{
            this.emit("disconnect", origin, [
                this,
                ...targets
            ], err);
        };
        this[kOnConnectionError] = (origin, targets, err)=>{
            this.emit("connectionError", origin, [
                this,
                ...targets
            ], err);
        };
    }
    get [kRunning]() {
        let ret = 0;
        for (const client of this[kClients].values()){
            ret += client[kRunning];
        }
        return ret;
    }
    [kDispatch](opts, handler) {
        let key;
        if (opts.origin && (typeof opts.origin === "string" || opts.origin instanceof URL)) {
            key = String(opts.origin);
        } else {
            throw new InvalidArgumentError3("opts.origin must be a non-empty string or URL.");
        }
        let dispatcher = this[kClients].get(key);
        if (!dispatcher) {
            dispatcher = this[kFactory](opts.origin, this[kOptions]).on("drain", this[kOnDrain]).on("connect", this[kOnConnect]).on("disconnect", this[kOnDisconnect]).on("connectionError", this[kOnConnectionError]);
            this[kClients].set(key, dispatcher);
        }
        return dispatcher.dispatch(opts, handler);
    }
    async [kClose]() {
        const closePromises = [];
        for (const client of this[kClients].values()){
            closePromises.push(client.close());
        }
        this[kClients].clear();
        await Promise.all(closePromises);
    }
    async [kDestroy](err) {
        const destroyPromises = [];
        for (const client of this[kClients].values()){
            destroyPromises.push(client.destroy(err));
        }
        this[kClients].clear();
        await Promise.all(destroyPromises);
    }
};
module2.exports = Agent;

return module2.exports;
}
