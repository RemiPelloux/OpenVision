import { require_client } from "./client.js";
import { require_connect2 } from "./core/connect.js";
import { require_errors } from "./core/errors.js";
import { require_symbols } from "./core/symbols.js";
import { require_util } from "./core/util.js";
import { require_pool_base } from "./pool-base.js";
var __wakaru_require_pool_cache;
export function require_pool() {
if (__wakaru_require_pool_cache) return __wakaru_require_pool_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pool_cache = module2;
"use strict";
var { PoolBase, kClients, kNeedDrain, kAddClient, kGetDispatcher } = require_pool_base();
var Client2 = require_client();
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors();
var util2 = require_util();
var { kUrl, kInterceptors } = require_symbols();
var buildConnector = require_connect2();
var kOptions = Symbol("options");
var kConnections = Symbol("connections");
var kFactory = Symbol("factory");
function defaultFactory(origin, opts) {
    return new Client2(origin, opts);
}
var Pool = class extends PoolBase {
    constructor(origin, { connections, factory = defaultFactory, connect: connect3, connectTimeout, tls: tls3, maxCachedSessions, socketPath, autoSelectFamily, autoSelectFamilyAttemptTimeout, allowH2, ...options2 } = {}){
        super();
        if (connections != null && (!Number.isFinite(connections) || connections < 0)) {
            throw new InvalidArgumentError3("invalid connections");
        }
        if (typeof factory !== "function") {
            throw new InvalidArgumentError3("factory must be a function.");
        }
        if (connect3 != null && typeof connect3 !== "function" && typeof connect3 !== "object") {
            throw new InvalidArgumentError3("connect must be a function or an object");
        }
        if (typeof connect3 !== "function") {
            connect3 = buildConnector({
                ...tls3,
                maxCachedSessions,
                allowH2,
                socketPath,
                timeout: connectTimeout,
                ...util2.nodeHasAutoSelectFamily && autoSelectFamily ? {
                    autoSelectFamily,
                    autoSelectFamilyAttemptTimeout
                } : void 0,
                ...connect3
            });
        }
        this[kInterceptors] = options2.interceptors && options2.interceptors.Pool && Array.isArray(options2.interceptors.Pool) ? options2.interceptors.Pool : [];
        this[kConnections] = connections || null;
        this[kUrl] = util2.parseOrigin(origin);
        this[kOptions] = {
            ...util2.deepClone(options2),
            connect: connect3,
            allowH2
        };
        this[kOptions].interceptors = options2.interceptors ? {
            ...options2.interceptors
        } : void 0;
        this[kFactory] = factory;
        this.on("connectionError", (origin2, targets, error3)=>{
            for (const target of targets){
                const idx = this[kClients].indexOf(target);
                if (idx !== -1) {
                    this[kClients].splice(idx, 1);
                }
            }
        });
    }
    [kGetDispatcher]() {
        let dispatcher = this[kClients].find((dispatcher2)=>!dispatcher2[kNeedDrain]);
        if (dispatcher) {
            return dispatcher;
        }
        if (!this[kConnections] || this[kClients].length < this[kConnections]) {
            dispatcher = this[kFactory](this[kUrl], this[kOptions]);
            this[kAddClient](dispatcher);
        }
        return dispatcher;
    }
};
module2.exports = Pool;

return module2.exports;
}
