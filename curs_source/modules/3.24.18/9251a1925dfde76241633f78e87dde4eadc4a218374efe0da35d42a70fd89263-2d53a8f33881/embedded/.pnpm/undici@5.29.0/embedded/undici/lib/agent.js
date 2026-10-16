import { require_client } from "./client.js";
import { require_dispatcher_weakref } from "./compat/dispatcher-weakref.js";
import { require_errors } from "./core/errors.js";
import { require_symbols } from "./core/symbols.js";
import { require_util } from "./core/util.js";
import { require_dispatcher_base } from "./dispatcher-base.js";
import { require_redirectInterceptor } from "./interceptor/redirectInterceptor.js";
import { require_pool } from "./pool.js";
var __wakaru_require_agent_cache;
export function require_agent() {
if (__wakaru_require_agent_cache) return __wakaru_require_agent_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_agent_cache = module2;
"use strict";
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors();
var { kClients, kRunning, kClose, kDestroy, kDispatch, kInterceptors } = require_symbols();
var DispatcherBase = require_dispatcher_base();
var Pool = require_pool();
var Client2 = require_client();
var util2 = require_util();
var createRedirectInterceptor = require_redirectInterceptor();
var { WeakRef: WeakRef2, FinalizationRegistry: FinalizationRegistry2 } = require_dispatcher_weakref()();
var kOnConnect = Symbol("onConnect");
var kOnDisconnect = Symbol("onDisconnect");
var kOnConnectionError = Symbol("onConnectionError");
var kMaxRedirections = Symbol("maxRedirections");
var kOnDrain = Symbol("onDrain");
var kFactory = Symbol("factory");
var kFinalizer = Symbol("finalizer");
var kOptions = Symbol("options");
function defaultFactory(origin, opts) {
    return opts && opts.connections === 1 ? new Client2(origin, opts) : new Pool(origin, opts);
}
var Agent = class extends DispatcherBase {
    constructor({ factory = defaultFactory, maxRedirections = 0, connect: connect3, ...options2 } = {}){
        super();
        if (typeof factory !== "function") {
            throw new InvalidArgumentError3("factory must be a function.");
        }
        if (connect3 != null && typeof connect3 !== "function" && typeof connect3 !== "object") {
            throw new InvalidArgumentError3("connect must be a function or an object");
        }
        if (!Number.isInteger(maxRedirections) || maxRedirections < 0) {
            throw new InvalidArgumentError3("maxRedirections must be a positive number");
        }
        if (connect3 && typeof connect3 !== "function") {
            connect3 = {
                ...connect3
            };
        }
        this[kInterceptors] = options2.interceptors && options2.interceptors.Agent && Array.isArray(options2.interceptors.Agent) ? options2.interceptors.Agent : [
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
        this[kFinalizer] = new FinalizationRegistry2((key)=>{
            const ref = this[kClients].get(key);
            if (ref !== void 0 && ref.deref() === void 0) {
                this[kClients].delete(key);
            }
        });
        const agent = this;
        this[kOnDrain] = (origin, targets)=>{
            agent.emit("drain", origin, [
                agent,
                ...targets
            ]);
        };
        this[kOnConnect] = (origin, targets)=>{
            agent.emit("connect", origin, [
                agent,
                ...targets
            ]);
        };
        this[kOnDisconnect] = (origin, targets, err)=>{
            agent.emit("disconnect", origin, [
                agent,
                ...targets
            ], err);
        };
        this[kOnConnectionError] = (origin, targets, err)=>{
            agent.emit("connectionError", origin, [
                agent,
                ...targets
            ], err);
        };
    }
    get [kRunning]() {
        let ret = 0;
        for (const ref of this[kClients].values()){
            const client = ref.deref();
            if (client) {
                ret += client[kRunning];
            }
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
        const ref = this[kClients].get(key);
        let dispatcher = ref ? ref.deref() : null;
        if (!dispatcher) {
            dispatcher = this[kFactory](opts.origin, this[kOptions]).on("drain", this[kOnDrain]).on("connect", this[kOnConnect]).on("disconnect", this[kOnDisconnect]).on("connectionError", this[kOnConnectionError]);
            this[kClients].set(key, new WeakRef2(dispatcher));
            this[kFinalizer].register(dispatcher, key);
        }
        return dispatcher.dispatch(opts, handler);
    }
    async [kClose]() {
        const closePromises = [];
        for (const ref of this[kClients].values()){
            const client = ref.deref();
            if (client) {
                closePromises.push(client.close());
            }
        }
        await Promise.all(closePromises);
    }
    async [kDestroy](err) {
        const destroyPromises = [];
        for (const ref of this[kClients].values()){
            const client = ref.deref();
            if (client) {
                destroyPromises.push(client.destroy(err));
            }
        }
        await Promise.all(destroyPromises);
    }
};
module2.exports = Agent;

return module2.exports;
}
