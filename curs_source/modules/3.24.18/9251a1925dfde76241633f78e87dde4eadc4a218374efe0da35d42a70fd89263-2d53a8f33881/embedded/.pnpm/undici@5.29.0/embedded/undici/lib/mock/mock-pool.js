import { require_errors } from "../core/errors.js";
import { require_symbols } from "../core/symbols.js";
import { require_mock_interceptor } from "./mock-interceptor.js";
import { require_mock_symbols } from "./mock-symbols.js";
import { require_mock_utils } from "./mock-utils.js";
import { require_pool } from "../pool.js";
var __wakaru_require_mock_pool_cache;
export function require_mock_pool() {
if (__wakaru_require_mock_pool_cache) return __wakaru_require_mock_pool_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mock_pool_cache = module2;
"use strict";
var { promisify: promisify6 } = require("util");
var Pool = require_pool();
var { buildMockDispatch } = require_mock_utils();
var { kDispatches, kMockAgent, kClose, kOriginalClose, kOrigin, kOriginalDispatch, kConnected } = require_mock_symbols();
var { MockInterceptor } = require_mock_interceptor();
var Symbols = require_symbols();
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors();
var MockPool = class extends Pool {
    constructor(origin, opts){
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== "function") {
            throw new InvalidArgumentError3("Argument opts.agent must implement Agent");
        }
        this[kMockAgent] = opts.agent;
        this[kOrigin] = origin;
        this[kDispatches] = [];
        this[kConnected] = 1;
        this[kOriginalDispatch] = this.dispatch;
        this[kOriginalClose] = this.close.bind(this);
        this.dispatch = buildMockDispatch.call(this);
        this.close = this[kClose];
    }
    get [Symbols.kConnected]() {
        return this[kConnected];
    }
    intercept(opts) {
        return new MockInterceptor(opts, this[kDispatches]);
    }
    async [kClose]() {
        await promisify6(this[kOriginalClose])();
        this[kConnected] = 0;
        this[kMockAgent][Symbols.kClients].delete(this[kOrigin]);
    }
};
module2.exports = MockPool;

return module2.exports;
}
