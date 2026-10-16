import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_util8 } from "../core/util.js";
import { require_pool_base2 } from "./pool-base.js";
import { require_pool2 } from "./pool.js";
var __wakaru_require_balanced_pool2_cache;
export function require_balanced_pool2() {
if (__wakaru_require_balanced_pool2_cache) return __wakaru_require_balanced_pool2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_balanced_pool2_cache = module2;
"use strict";
var { BalancedPoolMissingUpstreamError, InvalidArgumentError: InvalidArgumentError3 } = require_errors2();
var { PoolBase, kClients, kNeedDrain, kAddClient, kRemoveClient, kGetDispatcher } = require_pool_base2();
var Pool = require_pool2();
var { kUrl, kInterceptors } = require_symbols6();
var { parseOrigin } = require_util8();
var kFactory = Symbol("factory");
var kOptions = Symbol("options");
var kGreatestCommonDivisor = Symbol("kGreatestCommonDivisor");
var kCurrentWeight = Symbol("kCurrentWeight");
var kIndex = Symbol("kIndex");
var kWeight = Symbol("kWeight");
var kMaxWeightPerServer = Symbol("kMaxWeightPerServer");
var kErrorPenalty = Symbol("kErrorPenalty");
function getGreatestCommonDivisor(a, b2) {
    if (a === 0) return b2;
    while(b2 !== 0){
        const t = b2;
        b2 = a % b2;
        a = t;
    }
    return a;
}
function defaultFactory(origin, opts) {
    return new Pool(origin, opts);
}
var BalancedPool = class extends PoolBase {
    constructor(upstreams = [], { factory = defaultFactory, ...opts } = {}){
        super();
        this[kOptions] = opts;
        this[kIndex] = -1;
        this[kCurrentWeight] = 0;
        this[kMaxWeightPerServer] = this[kOptions].maxWeightPerServer || 100;
        this[kErrorPenalty] = this[kOptions].errorPenalty || 15;
        if (!Array.isArray(upstreams)) {
            upstreams = [
                upstreams
            ];
        }
        if (typeof factory !== "function") {
            throw new InvalidArgumentError3("factory must be a function.");
        }
        this[kInterceptors] = opts.interceptors?.BalancedPool && Array.isArray(opts.interceptors.BalancedPool) ? opts.interceptors.BalancedPool : [];
        this[kFactory] = factory;
        for (const upstream of upstreams){
            this.addUpstream(upstream);
        }
        this._updateBalancedPoolStats();
    }
    addUpstream(upstream) {
        const upstreamOrigin = parseOrigin(upstream).origin;
        if (this[kClients].find((pool2)=>pool2[kUrl].origin === upstreamOrigin && pool2.closed !== true && pool2.destroyed !== true)) {
            return this;
        }
        const pool = this[kFactory](upstreamOrigin, Object.assign({}, this[kOptions]));
        this[kAddClient](pool);
        pool.on("connect", ()=>{
            pool[kWeight] = Math.min(this[kMaxWeightPerServer], pool[kWeight] + this[kErrorPenalty]);
        });
        pool.on("connectionError", ()=>{
            pool[kWeight] = Math.max(1, pool[kWeight] - this[kErrorPenalty]);
            this._updateBalancedPoolStats();
        });
        pool.on("disconnect", (...args)=>{
            const err = args[2];
            if (err && err.code === "UND_ERR_SOCKET") {
                pool[kWeight] = Math.max(1, pool[kWeight] - this[kErrorPenalty]);
                this._updateBalancedPoolStats();
            }
        });
        for (const client of this[kClients]){
            client[kWeight] = this[kMaxWeightPerServer];
        }
        this._updateBalancedPoolStats();
        return this;
    }
    _updateBalancedPoolStats() {
        let result = 0;
        for(let i = 0; i < this[kClients].length; i++){
            result = getGreatestCommonDivisor(this[kClients][i][kWeight], result);
        }
        this[kGreatestCommonDivisor] = result;
    }
    removeUpstream(upstream) {
        const upstreamOrigin = parseOrigin(upstream).origin;
        const pool = this[kClients].find((pool2)=>pool2[kUrl].origin === upstreamOrigin && pool2.closed !== true && pool2.destroyed !== true);
        if (pool) {
            this[kRemoveClient](pool);
        }
        return this;
    }
    get upstreams() {
        return this[kClients].filter((dispatcher)=>dispatcher.closed !== true && dispatcher.destroyed !== true).map((p2)=>p2[kUrl].origin);
    }
    [kGetDispatcher]() {
        if (this[kClients].length === 0) {
            throw new BalancedPoolMissingUpstreamError();
        }
        const dispatcher = this[kClients].find((dispatcher2)=>!dispatcher2[kNeedDrain] && dispatcher2.closed !== true && dispatcher2.destroyed !== true);
        if (!dispatcher) {
            return;
        }
        const allClientsBusy = this[kClients].map((pool)=>pool[kNeedDrain]).reduce((a, b2)=>a && b2, true);
        if (allClientsBusy) {
            return;
        }
        let counter = 0;
        let maxWeightIndex = this[kClients].findIndex((pool)=>!pool[kNeedDrain]);
        while(counter++ < this[kClients].length){
            this[kIndex] = (this[kIndex] + 1) % this[kClients].length;
            const pool = this[kClients][this[kIndex]];
            if (pool[kWeight] > this[kClients][maxWeightIndex][kWeight] && !pool[kNeedDrain]) {
                maxWeightIndex = this[kIndex];
            }
            if (this[kIndex] === 0) {
                this[kCurrentWeight] = this[kCurrentWeight] - this[kGreatestCommonDivisor];
                if (this[kCurrentWeight] <= 0) {
                    this[kCurrentWeight] = this[kMaxWeightPerServer];
                }
            }
            if (pool[kWeight] >= this[kCurrentWeight] && !pool[kNeedDrain]) {
                return pool;
            }
        }
        this[kCurrentWeight] = this[kClients][maxWeightIndex][kWeight];
        this[kIndex] = maxWeightIndex;
        return this[kClients][maxWeightIndex];
    }
};
module2.exports = BalancedPool;

return module2.exports;
}
