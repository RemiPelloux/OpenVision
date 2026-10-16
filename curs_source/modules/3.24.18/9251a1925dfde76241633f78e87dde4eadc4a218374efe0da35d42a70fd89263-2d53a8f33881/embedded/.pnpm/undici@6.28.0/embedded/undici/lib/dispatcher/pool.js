import { require_connect3 } from "../core/connect.js";
import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_util8 } from "../core/util.js";
import { require_client2 } from "./client.js";
import { require_pool_base2 } from "./pool-base.js";
var __wakaru_require_pool2_cache;
export function require_pool2() {
if (__wakaru_require_pool2_cache) return __wakaru_require_pool2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pool2_cache = module2;
"use strict";
var { PoolBase, kClients, kNeedDrain, kAddClient, kGetDispatcher } = require_pool_base2();
var Client2 = require_client2();
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors2();
var util2 = require_util8();
var { kUrl, kInterceptors } = require_symbols6();
var buildConnector = require_connect3();
var kOptions = Symbol("options");
var kConnections = Symbol("connections");
var kFactory = Symbol("factory");
function defaultFactory(origin, opts) {
    return new Client2(origin, opts);
}
var Pool = class extends PoolBase {
    constructor(origin, { connections, factory = defaultFactory, connect: connect3, connectTimeout, tls: tls3, maxCachedSessions, socketPath, autoSelectFamily, autoSelectFamilyAttemptTimeout, allowH2, ...options2 } = {}){
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
                ...autoSelectFamily ? {
                    autoSelectFamily,
                    autoSelectFamilyAttemptTimeout
                } : void 0,
                ...connect3
            });
        }
        super(options2);
        this[kInterceptors] = options2.interceptors?.Pool && Array.isArray(options2.interceptors.Pool) ? options2.interceptors.Pool : [];
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
        for (const client of this[kClients]){
            if (!client[kNeedDrain]) {
                return client;
            }
        }
        if (!this[kConnections] || this[kClients].length < this[kConnections]) {
            const dispatcher = this[kFactory](this[kUrl], this[kOptions]);
            this[kAddClient](dispatcher);
            return dispatcher;
        }
    }
};
module2.exports = Pool;

return module2.exports;
}
