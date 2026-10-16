import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_pool2 } from "../dispatcher/pool.js";
import { require_mock_interceptor2 } from "./mock-interceptor.js";
import { require_mock_symbols2 } from "./mock-symbols.js";
import { require_mock_utils2 } from "./mock-utils.js";
var __wakaru_require_mock_pool2_cache;
export function require_mock_pool2() {
if (__wakaru_require_mock_pool2_cache) return __wakaru_require_mock_pool2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mock_pool2_cache = module2;
"use strict";
var { promisify: promisify6 } = require("node:util");
var Pool = require_pool2();
var { buildMockDispatch } = require_mock_utils2();
var { kDispatches, kMockAgent, kClose, kOriginalClose, kOrigin, kOriginalDispatch, kConnected } = require_mock_symbols2();
var { MockInterceptor } = require_mock_interceptor2();
var Symbols = require_symbols6();
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors2();
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
