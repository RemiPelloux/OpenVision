import { require_agent } from "./agent.js";
import { require_errors } from "./core/errors.js";
var __wakaru_require_global2_cache;
export function require_global2() {
if (__wakaru_require_global2_cache) return __wakaru_require_global2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_global2_cache = module2;
"use strict";
var globalDispatcher = Symbol.for("undici.globalDispatcher.1");
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors();
var Agent = require_agent();
if (getGlobalDispatcher() === void 0) {
    setGlobalDispatcher(new Agent());
}
function setGlobalDispatcher(agent) {
    if (!agent || typeof agent.dispatch !== "function") {
        throw new InvalidArgumentError3("Argument agent must implement Agent");
    }
    Object.defineProperty(globalThis, globalDispatcher, {
        value: agent,
        writable: true,
        enumerable: false,
        configurable: false
    });
}
function getGlobalDispatcher() {
    return globalThis[globalDispatcher];
}
module2.exports = {
    setGlobalDispatcher,
    getGlobalDispatcher
};

return module2.exports;
}
