var __wakaru_require_mock_symbols_cache;
export function require_mock_symbols() {
if (__wakaru_require_mock_symbols_cache) return __wakaru_require_mock_symbols_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mock_symbols_cache = module2;
"use strict";
module2.exports = {
    kAgent: Symbol("agent"),
    kOptions: Symbol("options"),
    kFactory: Symbol("factory"),
    kDispatches: Symbol("dispatches"),
    kDispatchKey: Symbol("dispatch key"),
    kDefaultHeaders: Symbol("default headers"),
    kDefaultTrailers: Symbol("default trailers"),
    kContentLength: Symbol("content length"),
    kMockAgent: Symbol("mock agent"),
    kMockAgentSet: Symbol("mock agent set"),
    kMockAgentGet: Symbol("mock agent get"),
    kMockDispatch: Symbol("mock dispatch"),
    kClose: Symbol("close"),
    kOriginalClose: Symbol("original agent close"),
    kOrigin: Symbol("origin"),
    kIsMockActive: Symbol("is mock active"),
    kNetConnect: Symbol("net connect"),
    kGetNetConnect: Symbol("get net connect"),
    kConnected: Symbol("connected")
};

return module2.exports;
}
